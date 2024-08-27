import{R as I,aC as M,aD as O,e as q,o as L,k as z,a4 as G,aA as T,aE as P,X as U,aF as j,aG as D}from"./runtime.B5NQFKQS.js";import{a as K}from"./render.DJ8wz9rq.js";import{c as X}from"./each.BH-Z99D9.js";const H=requestAnimationFrame,J=()=>performance.now(),w={tick:i=>H(i),now:()=>J(),tasks:new Set};function F(i){w.tasks.forEach(t=>{t.c(i)||(w.tasks.delete(t),t.f())}),w.tasks.size!==0&&w.tick(F)}function Q(i){let t;return w.tasks.size===0&&w.tick(F),{promise:new Promise(n=>{w.tasks.add(t={c:i,f:n})}),abort(){w.tasks.delete(t)}}}function R(i,t){i.dispatchEvent(new CustomEvent(t))}function V(i){const t=i.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function A(i){const t={},n=i.split(";");for(const a of n){const[e,c]=a.split(":");if(!e||c===void 0)break;const f=V(e.trim());t[f]=c.trim()}return t}const W=i=>i;function nt(i,t,n){var a=X,e,c,f,u=null;a.a??(a.a={element:i,measure(){e=this.element.getBoundingClientRect()},apply(){if(f==null||f.abort(),c=this.element.getBoundingClientRect(),e.left!==c.left||e.right!==c.right||e.top!==c.top||e.bottom!==c.bottom){const d=t()(this.element,{from:e,to:c},n==null?void 0:n());f=E(this.element,d,void 0,1,()=>{f==null||f.abort(),f=void 0})}},fix(){if(!i.getAnimations().length){var{position:d,width:v,height:s}=getComputedStyle(i);if(d!=="absolute"&&d!=="fixed"){var r=i.style;u={position:r.position,width:r.width,height:r.height,transform:r.transform},r.position="absolute",r.width=v,r.height=s;var o=i.getBoundingClientRect();if(e.left!==o.left||e.top!==o.top){var l=`translate(${e.left-o.left}px, ${e.top-o.top}px)`;r.transform=r.transform?`${r.transform} ${l}`:l}}}},unfix(){if(u){var d=i.style;d.position=u.position,d.width=u.width,d.height=u.height,d.transform=u.transform}}}),a.a.element=i}function rt(i,t,n,a){var e=(i&P)!==0,c=(i&j)!==0,f=e&&c,u=(i&D)!==0,d=f?"both":e?"in":"out",v,s=t.inert,r,o;function l(){return v??(v=n()(t,(a==null?void 0:a())??{},{direction:d}))}var _={is_global:u,in(){var p;if(t.inert=s,!e){o==null||o.abort(),(p=o==null?void 0:o.reset)==null||p.call(o);return}c||r==null||r.abort(),R(t,"introstart"),r=E(t,l(),o,1,()=>{R(t,"introend"),r==null||r.abort(),r=v=void 0})},out(p){if(!c){p==null||p(),v=void 0;return}t.inert=!0,R(t,"outrostart"),o=E(t,l(),r,0,()=>{R(t,"outroend"),p==null||p()})},stop:()=>{r==null||r.abort(),o==null||o.abort()}},h=U;if((h.transitions??(h.transitions=[])).push(_),e&&K){var g=u;if(!g){for(var m=h.parent;m&&m.f&I;)for(;(m=m.parent)&&!(m.f&M););g=!m||(m.f&O)!==0}g&&q(()=>{L(()=>_.in())})}}function E(i,t,n,a,e){var c=a===1;if(z(t)){var f,u=!1;return G(()=>{if(!u){var g=t({direction:c?"in":"out"});f=E(i,g,n,a,e)}}),{abort:()=>{u=!0,f==null||f.abort()},deactivate:()=>f.deactivate(),reset:()=>f.reset(),t:()=>f.t()}}if(n==null||n.deactivate(),!(t!=null&&t.duration))return e(),{abort:T,deactivate:T,reset:T,t:()=>a};const{delay:d=0,css:v,tick:s,easing:r=W}=t;var o=[];if(c&&n===void 0&&(s&&s(0,1),v)){var l=A(v(0,1));o.push(l,l)}var _=()=>1-a,h=i.animate(o,{duration:d});return h.onfinish=()=>{var g=(n==null?void 0:n.t())??1-a;n==null||n.abort();var m=a-g,p=t.duration*Math.abs(m),$=[];if(v)for(var C=Math.ceil(p/16.666666666666668),b=0;b<=C;b+=1){var y=g+m*r(b/C),k=v(y,1-y);$.push(A(k))}h=i.animate($,{duration:p,fill:"forwards"}),h.onfinish=()=>{_=()=>a,s==null||s(a,1-a),e()},_=()=>{var x=h.currentTime;return g+m*r(x/p)},s&&Q(()=>{if(h.playState!=="running")return!1;var x=_();return s(x,1-x),!0})},{abort:()=>{h&&(h.cancel(),h.effect=null)},deactivate:()=>{e=T},reset:()=>{a===0&&(s==null||s(1,0))},t:()=>_()}}const Y=i=>i;function B(i){const t=i-1;return t*t*t+1}function N(i){const t=typeof i=="string"&&i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[i,"px"]}function et(i,{delay:t=0,duration:n=400,easing:a=Y}={}){const e=+getComputedStyle(i).opacity;return{delay:t,duration:n,easing:a,css:c=>`opacity: ${c*e}`}}function at(i,{delay:t=0,duration:n=400,easing:a=B,x:e=0,y:c=0,opacity:f=0}={}){const u=getComputedStyle(i),d=+u.opacity,v=u.transform==="none"?"":u.transform,s=d*(1-f),[r,o]=N(e),[l,_]=N(c);return{delay:t,duration:n,easing:a,css:(h,g)=>`
			transform: ${v} translate(${(1-h)*r}${o}, ${(1-h)*l}${_});
			opacity: ${d-s*g}`}}function S(i,t){for(const n in t)i[n]=t[n];return i}function st({fallback:i,...t}){const n=new Map,a=new Map;function e(f,u,d){const{delay:v=0,duration:s=y=>Math.sqrt(y)*30,easing:r=B}=S(S({},t),d),o=f.getBoundingClientRect(),l=u.getBoundingClientRect(),_=o.left-l.left,h=o.top-l.top,g=o.width/l.width,m=o.height/l.height,p=Math.sqrt(_*_+h*h),$=getComputedStyle(u),C=$.transform==="none"?"":$.transform,b=+$.opacity;return{delay:v,duration:typeof s=="function"?s(p):s,easing:r,css:(y,k)=>`
			   opacity: ${y*b};
			   transform-origin: top left;
			   transform: ${C} translate(${k*_}px,${k*h}px) scale(${y+(1-y)*g}, ${y+(1-y)*m});
		   `}}function c(f,u,d){return(v,s)=>(f.set(s.key,v),()=>{if(u.has(s.key)){const r=u.get(s.key);return u.delete(s.key),e(r,v,s)}return f.delete(s.key),i&&i(v,s,d)})}return[c(a,n,!1),c(n,a,!0)]}export{at as a,nt as b,st as c,et as f,rt as t};
