import math
def f(v): return ("%.2f"%v).rstrip('0').rstrip('.')

def mono(r=38, hb=70, mw=50, vy=0.9, bw=24, gap=40, pbar=0.0, waist_k=0.48, w=4, ink='#111214', size=150, cap='round'):
    """Um único caminho: G (anel) -> perna do G (= cintura do B) -> B (haste = perna esquerda do M) -> M.
       vy: posição do vértice do M como fração da altura do M (0..1)."""
    H=100.0
    cx=cy=r
    top=H-hb
    waist=top+waist_k*hb
    dy=waist-cy
    ex=cx+math.sqrt(r*r-dy*dy)          # ponta do anel no nível da cintura = haste do B
    sx=ex
    a=math.radians(-gap)
    tx=cx+r*math.cos(a); ty=cy+r*math.sin(a)
    px=cx+pbar*r                          # ponta interna da perna do G
    r1=waist-top; r1/=2                   # raio do bojo de cima
    r2=(H-waist)/2                        # raio do bojo de baixo
    a1=max(bw-r1,1.5); a2=max(bw-r2,1.5)
    mx0=sx; mx1=sx+mw
    vyy=top+vy*hb
    d=[]
    d.append(f"M{f(tx)} {f(ty)}")
    d.append(f"A{f(r)} {f(r)} 0 1 0 {f(sx)} {f(waist)}")        # anel, sentido anti-horário, até a haste
    d.append(f"L{f(px)} {f(waist)}")                              # perna do G (vai para dentro)
    d.append(f"L{f(sx)} {f(waist)}")                              # e volta: é a cintura do B
    d.append(f"H{f(sx+a2)}A{f(r2)} {f(r2)} 0 0 1 {f(sx+a2)} {f(H)}H{f(sx)}")   # bojo de baixo
    d.append(f"L{f(sx)} {f(top)}")                                # haste do B = perna esquerda do M
    d.append(f"H{f(sx+a1)}A{f(r1)} {f(r1)} 0 0 1 {f(sx+a1)} {f(waist)}H{f(sx)}")  # bojo de cima
    d.append(f"L{f(sx)} {f(top)}")
    d.append(f"L{f(sx+mw/2)} {f(vyy)}L{f(mx1)} {f(top)}L{f(mx1)} {f(H)}")        # M
    D="".join(d)
    W=mx1
    vb=f"{f(-w)} {f(-w)} {f(W+2*w)} {f(H+2*w)}"
    svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" height="{size}" fill="none" stroke="{ink}" stroke-width="{w}" stroke-linecap="{cap}" stroke-linejoin="round" stroke-miterlimit="3"><path d="{D}"/></svg>'
    return svg, D, vb, (W+2*w)/(H+2*w)

if __name__=="__main__":
    V=[
     ("A r38 hb70 mw50 vy.92",dict(r=38,hb=70,mw=50,vy=.92)),
     ("B r40 hb66 mw46 vy.85",dict(r=40,hb=66,mw=46,vy=.85)),
     ("C r36 hb74 mw54 vy.9",dict(r=36,hb=74,mw=54,vy=.9)),
     ("D r40 hb72 mw50 vy1.0",dict(r=40,hb=72,mw=50,vy=1.0)),
     ("E r38 hb70 mw52 bw20 vy.8",dict(r=38,hb=70,mw=52,bw=20,vy=.8)),
     ("F r42 hb64 mw44 vy.9",dict(r=42,hb=64,mw=44,vy=.9)),
    ]
    html='<!doctype html><meta charset=utf-8><body style="margin:0;font:13px system-ui;background:#f5f5f2"><div style="display:grid;grid-template-columns:1fr 1fr;width:1300px">'
    for n,kw in V:
        svg,D,vb,asp=mono(**kw)
        svg2=mono(**kw,ink='#f2f2ee',size=150)[0]
        sm=mono(**kw,size=40)[0]
        html+=f'<div style="padding:18px 28px;height:210px;display:flex;gap:28px;align-items:center;border-bottom:1px solid #ccc"><b style="width:170px">{n}<br>proporção {asp:.2f}</b>{svg}{sm}</div>'
        html+=f'<div style="padding:18px 28px;height:210px;background:#0e0f11;display:flex;gap:28px;align-items:center">{svg2}{mono(**kw,ink="#f2f2ee",size=40)[0]}</div>'
    html+='</div>'
    open('sheet.html','w').write(html)
