MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var t=MathJax.ElementJax.mml,e=MathJax.OutputJax["HTML-CSS"],s="http://www.w3.org/2000/svg",h="urn:schemas-microsoft-com:vml",i="mjxvml";t.menclose.Augment({toHTML:function(s){var h=this.getValues("notation","thickness","padding","mathcolor","color");h.color&&!this.mathcolor&&(h.mathcolor=h.color),null==h.thickness&&(h.thickness=".075em"),null==h.padding&&(h.padding=".2em"),s=this.HTMLcreateSpan(s);var i=this.HTMLgetMu(s),o=this.HTMLgetScale(),a=e.length2em(h.padding,i,1/e.em)*o,r=e.length2em(h.thickness,i,1/e.em)*o;r=Math.max(1/e.em,r);var l=e.Em(r)+" solid",T=e.createStack(s),M=e.createBox(T);this.HTMLmeasureChild(0,M);var L=M.bbox.h+a+r,n=M.bbox.d+a+r,c=M.bbox.w+2*(a+r),m=e.createFrame(T,L+n,0,c,r,"none");m.id="MathJax-frame-"+this.spanID,e.addBox(T,m),T.insertBefore(m,M);var H,p,d,x,u,g=0,v=0,O=0,b=0,N=0,f=0;h.mathcolor?s.style.color=h.mathcolor:h.mathcolor="black";for(var A=MathJax.Hub.SplitList(h.notation),k={},y=0,E=A.length;E>y;y++)k[A[y]]=!0;k[t.NOTATION.UPDIAGONALARROW]&&(k[t.NOTATION.UPDIAGONALSTRIKE]=!1);var I;for(var B in k)if(k.hasOwnProperty(B)&&k[B])switch(B){case t.NOTATION.BOX:m.style.border=l,e.msieBorderWidthBug||(g=v=b=O=r);break;case t.NOTATION.ROUNDEDBOX:e.useVML?(p||(p=this.HTMLvml(T,L,n,c,r,h.mathcolor)),u=Math.floor(1e3*Math.min(c,L+n)-2*r),d=Math.floor(4e3*(c-2*r)),x=Math.floor(4e3*(L+n-2*r)),this.HTMLvmlElement(p,"shape",{style:{width:this.HTMLpx(c-2*r),height:this.HTMLpx(L+n-2*r),left:this.HTMLpx(r,.5),top:this.HTMLpx(r,.5)},path:"m "+u+",0 qx 0,"+u+" l 0,"+(x-u)+" qy "+u+","+x+" l "+(d-u)+","+x+" qx "+d+","+(x-u)+" l "+d+","+u+" qy "+(d-u)+",0 x e",coordsize:d+","+x})):(H||(H=this.HTMLsvg(T,L,n,c,r,h.mathcolor)),this.HTMLsvgElement(H.firstChild,"rect",{x:1,y:1,width:this.HTMLpx(c-r)-1,height:this.HTMLpx(L+n-r)-1,rx:this.HTMLpx(Math.min(L+n,c)/4)}));break;case t.NOTATION.CIRCLE:e.useVML?(p||(p=this.HTMLvml(T,L,n,c,r,h.mathcolor)),this.HTMLvmlElement(p,"oval",{style:{width:this.HTMLpx(c-2*r),height:this.HTMLpx(L+n-2*r),left:this.HTMLpx(r,.5),top:this.HTMLpx(r,.5)}})):(H||(H=this.HTMLsvg(T,L,n,c,r,h.mathcolor)),this.HTMLsvgElement(H.firstChild,"ellipse",{rx:this.HTMLpx(c/2-r),ry:this.HTMLpx((L+n)/2-r),cx:this.HTMLpx(c/2),cy:this.HTMLpx((L+n)/2)}));break;case t.NOTATION.LEFT:m.style.borderLeft=l,e.msieBorderWidthBug||(b=r);break;case t.NOTATION.ACTUARIAL:m.style.borderTop=l,e.msieBorderWidthBug||(g=r,m.bbox.w+=a-r);case t.NOTATION.RIGHT:m.style.borderRight=l,e.msieBorderWidthBug||(O=r);break;case t.NOTATION.VERTICALSTRIKE:I=e.createRule(T,L+n-r/2,0,r),e.addBox(T,I),e.placeBox(I,a+r+M.bbox.w/2,-n,!0);break;case t.NOTATION.TOP:m.style.borderTop=l,e.msieBorderWidthBug||(g=r);break;case t.NOTATION.BOTTOM:m.style.borderBottom=l,e.msieBorderWidthBug||(v=r);break;case t.NOTATION.HORIZONTALSTRIKE:I=e.createRule(T,r,0,c-r/2),e.addBox(T,I),e.placeBox(I,0,(L+n)/2-n,!0);break;case t.NOTATION.UPDIAGONALSTRIKE:e.useVML?(p||(p=this.HTMLvml(T,L,n,c,r,h.mathcolor)),I=this.HTMLvmlElement(p,"line",{from:"0,"+this.HTMLpx(L+n-r),to:this.HTMLpx(c)+",0"})):(H||(H=this.HTMLsvg(T,L,n,c,r,h.mathcolor)),this.HTMLsvgElement(H.firstChild,"line",{x1:1,y1:this.HTMLpx(L+n-r),x2:this.HTMLpx(c-r),y2:this.HTMLpx(r)}));break;case t.NOTATION.UPDIAGONALARROW:if(e.useVML)p||(p=this.HTMLvml(T,L,n,c,r,h.mathcolor)),I=this.HTMLvmlElement(p,"line",{from:"0,"+this.HTMLpx(L+n-r),to:this.HTMLpx(c)+","+this.HTMLpx(r)}),this.HTMLvmlElement(I,"stroke",{endarrow:"classic"});else{H||(H=this.HTMLsvg(T,L,n,c,r,h.mathcolor));var R=Math.sqrt(c*c+(L+n)*(L+n)),C=1/R*10*this.scale/e.em*r/.075;d=c*C,x=(L+n)*C;var S=c-r/2,w=r/2;0>w+x-.4*d&&(w=.4*d-x),this.HTMLsvgElement(H.firstChild,"line",{x1:1,y1:this.HTMLpx(L+n-r),x2:this.HTMLpx(S-.7*d),y2:this.HTMLpx(w+.7*x)}),this.HTMLsvgElement(H.firstChild,"polygon",{points:this.HTMLpx(S)+","+this.HTMLpx(w)+" "+this.HTMLpx(S-d-.4*x)+","+this.HTMLpx(w+x-.4*d)+" "+this.HTMLpx(S-.7*d)+","+this.HTMLpx(w+.7*x)+" "+this.HTMLpx(S-d+.4*x)+","+this.HTMLpx(w+x+.4*d)+" "+this.HTMLpx(S)+","+this.HTMLpx(w),fill:h.mathcolor,stroke:"none"})}break;case t.NOTATION.DOWNDIAGONALSTRIKE:e.useVML?(p||(p=this.HTMLvml(T,L,n,c,r,h.mathcolor)),this.HTMLvmlElement(p,"line",{from:"0,0",to:this.HTMLpx(c)+","+this.HTMLpx(L+n-r)})):(H||(H=this.HTMLsvg(T,L,n,c,r,h.mathcolor)),this.HTMLsvgElement(H.firstChild,"line",{x1:1,y1:this.HTMLpx(r),x2:this.HTMLpx(c-r),y2:this.HTMLpx(L+n-r)}));break;case t.NOTATION.PHASORANGLE:c-=2*a,a=(L+n)/2,c+=a,e.useVML?(p||(p=this.HTMLvml(T,L,n,c,r,h.mathcolor)),this.HTMLvmlElement(p,"shape",{style:{width:this.HTMLpx(c),height:this.HTMLpx(L+n)},path:"m "+this.HTMLpt(a+r/2,r/2)+" l "+this.HTMLpt(r/2,L+n-r)+" "+this.HTMLpt(c-r/2,L+n-r)+" e",coordsize:this.HTMLpt(c,L+n)})):(H||(H=this.HTMLsvg(T,L,n,c,r,h.mathcolor)),this.HTMLsvgElement(H.firstChild,"path",{d:"M "+this.HTMLpx(a)+",1L 1,"+this.HTMLpx(L+n-r)+" L "+this.HTMLpx(c)+","+this.HTMLpx(L+n-r)}),e.placeBox(H.parentNode,0,-n,!0));break;case t.NOTATION.MADRUWB:m.style.borderBottom=l,m.style.borderRight=l,e.msieBorderWidthBug||(v=O=r);break;case t.NOTATION.RADICAL:e.useVML?(p||(p=this.HTMLvml(T,L,n,c,r,h.mathcolor)),this.HTMLvmlElement(p,"shape",{style:{width:this.HTMLpx(c),height:this.HTMLpx(L+n)},path:"m "+this.HTMLpt(r/2,.6*(L+n))+" l "+this.HTMLpt(a,L+n-r)+" "+this.HTMLpt(2*a,r/2)+" "+this.HTMLpt(c,r/2)+" e",coordsize:this.HTMLpt(c,L+n)}),N=a):(H||(H=this.HTMLsvg(T,L,n,c,r,h.mathcolor)),this.HTMLsvgElement(H.firstChild,"path",{d:"M 1,"+this.HTMLpx(.6*(L+n))+" L "+this.HTMLpx(a)+","+this.HTMLpx(L+n)+" L "+this.HTMLpx(2*a)+",1 L "+this.HTMLpx(c)+",1"}),e.placeBox(H.parentNode,0,a/2-n,!0),N=a,f=r);break;case t.NOTATION.LONGDIV:e.useVML?(p||(p=this.HTMLvml(T,L,n,c,r,h.mathcolor)),this.HTMLvmlElement(p,"line",{from:"0,"+this.HTMLpx(r/2),to:this.HTMLpx(c-r)+","+this.HTMLpx(r/2)}),this.HTMLvmlElement(p,"arc",{style:{width:this.HTMLpx(2*a),height:this.HTMLpx(L+n-2*r),left:this.HTMLpx(-a),top:this.HTMLpx(r)},startangle:"10",endangle:"170"}),N=a):(H||(H=this.HTMLsvg(T,L,n,c,r,h.mathcolor)),this.HTMLsvgElement(H.firstChild,"path",{d:"M "+this.HTMLpx(c)+",1 L 1,1 a"+this.HTMLpx(a)+","+this.HTMLpx((L+n)/2-r)+" 0 0,1 1,"+this.HTMLpx(L+n-2*r)}),e.placeBox(H.parentNode,0,r-n,!0),N=a,f=r)}return m.style.width=e.Em(c-b-O),m.style.height=e.Em(L+n-g-v),e.placeBox(m,0,f-n,!0),e.placeBox(M,N+a+r,0),this.HTMLhandleSpace(s),this.HTMLhandleColor(s),s},HTMLpx:function(t){return t*e.em},HTMLpt:function(t,e){return Math.floor(1e3*t)+","+Math.floor(1e3*e)},HTMLhandleColor:function(e){var s=document.getElementById("MathJax-frame-"+this.spanID);if(s){var h=this.getValues("mathbackground","background");this.style&&e.style.backgroundColor&&(h.mathbackground=e.style.backgroundColor,e.style.backgroundColor=""),h.background&&!this.mathbackground&&(h.mathbackground=h.background),h.mathbackground&&h.mathbackground!==t.COLOR.TRANSPARENT&&(s.style.backgroundColor=h.mathbackground)}else this.SUPER(arguments).HTMLhandleColor.call(this,e)},HTMLsvg:function(t,h,i,o,a,r){var l=document.createElementNS(s,"svg");l.style&&(l.style.width=e.Em(o),l.style.height=e.Em(h+i));var T=e.createBox(t);return T.appendChild(l),e.placeBox(T,0,-i,!0),this.HTMLsvgElement(l,"g",{fill:"none",stroke:r,"stroke-width":a*e.em}),l},HTMLsvgElement:function(t,e,h){var i=document.createElementNS(s,e);if(i.isMathJax=!0,h)for(var o in h)h.hasOwnProperty(o)&&i.setAttributeNS(null,o,h[o].toString());return t.appendChild(i),i},HTMLvml:function(t,s,h,i,o,a){var r=e.createFrame(t,s+h,0,i,0,"none");return e.addBox(t,r),e.placeBox(r,0,-h,!0),this.constructor.VMLcolor=a,this.constructor.VMLthickness=this.HTMLpx(o),r},HTMLvmlElement:function(t,s,h){var o=e.addElement(t,i+":"+s,{isMathJax:!0});return o.style.position="absolute",o.style.left=o.style.top=0,MathJax.Hub.Insert(o,h),h.fillcolor||(o.fillcolor="none"),h.strokecolor||(o.strokecolor=this.constructor.VMLcolor),h.strokeweight||(o.strokeweight=this.constructor.VMLthickness),o}}),MathJax.Hub.Browser.Select({MSIE:function(){(document.documentMode||0)<9&&(t.menclose.Augment({HTMLpx:function(t,s){return t*e.em+(s||0)+"px"}}),e.useVML=!0,document.namespaces[i]||(document.documentMode&&8===document.documentMode?document.namespaces.add(i,h,"#default#VML"):(document.namespaces.add(i,h),document.createStyleSheet().addRule(i+"\\: *","{behavior: url(#default#VML)}"))))}}),MathJax.Hub.Startup.signal.Post("HTML-CSS menclose Ready"),MathJax.Ajax.loadComplete(e.autoloadDir+"/menclose.js")});