import"../chunks/disclose-version.Bg9kRutz.js";import{p as J,ap as b,an as K,ao as L,t as M,a as N,c as h,s as y,ar as Q,r as u,i as t,j as v,E as T,aB as U,$ as V}from"../chunks/runtime.B5NQFKQS.js";import{h as Z}from"../chunks/svelte-head.1DljZgjM.js";import{a as $,t as x}from"../chunks/template.CwwnFE9K.js";import{s as P}from"../chunks/render.DJ8wz9rq.js";import{e as R,i as Y}from"../chunks/each.BH-Z99D9.js";import{r as I,s as ee}from"../chunks/attributes.CzNxZNMn.js";import{t as F}from"../chunks/class.D2zhZAKK.js";import{e as D}from"../chunks/utils.DqxS1eu3.js";import{b as te}from"../chunks/input.BNg5qLHS.js";import{i as ae}from"../chunks/lifecycle.rXbqU_S0.js";import{p as re}from"../chunks/props.DOLE3FRn.js";var ie=x('<td class="cell svelte-10hfv7f"> </td>'),se=x('<tr class="svelte-10hfv7f"></tr>'),le=x('<div class="fiveWrapper svelte-10hfv7f"><header class="svelte-10hfv7f"><form class="svelte-10hfv7f">Board size: <input type="number" min="5" max="150"> <button class="bf-button">reset</button></form> </header> <table class="svelte-10hfv7f"><tbody></tbody></table></div>');function oe(A,p){J(p,!1);const _=b();function W(i,s){t(r)[i][s].value||t(m).length||(U(r,t(r)[i][s].value=t(w)),G(i,s),v(w,t(w)==="x"?"o":"x"))}function E(){v(m,[]),v(r,X())}function X(){return new Array(f()).fill(null).map(()=>new Array(f()).fill(null).map(()=>({value:null})))}function q(i){i.preventDefault(),f(t(B)),E()}function G(i,s){let l,e,a;const n=Math.max(0,s-4),c=Math.max(0,i-4),o=Math.min(f()-1,s+4),d=Math.min(f()-1,i+4);for(e=n;e>=n&&e+4<=o;){if(l=[t(r)[i][e],t(r)[i][e+1],t(r)[i][e+2],t(r)[i][e+3],t(r)[i][e+4]],g(l)){v(m,l);return}e+=1}for(e=c;e>=c&&e+4<=d;){if(l=[t(r)[e][s],t(r)[e+1][s],t(r)[e+2][s],t(r)[e+3][s],t(r)[e+4][s]],g(l)){v(m,l);return}e+=1}for(e=i-4,a=s-4;e<0||a<0;)e+=1,a+=1;for(;e>=c&&a>=n&&e+4<=d&&a+4<=o;){if(l=[t(r)[e][a],t(r)[e+1][a+1],t(r)[e+2][a+2],t(r)[e+3][a+3],t(r)[e+4][a+4]],g(l)){v(m,l);return}e+=1,a+=1}for(e=i+4,a=s-4;e>d||a<0;)e-=1,a+=1;for(;e<=d&&a>=n&&e-4>=c&&a+4<=o;){if(l=[t(r)[e][a],t(r)[e-1][a+1],t(r)[e-2][a+2],t(r)[e-3][a+3],t(r)[e-4][a+4]],g(l)){v(m,l);return}e-=1,a+=1}}function g([i,s,l,e,a]){return i.value&&i.value===s.value&&s.value===l.value&&l.value===e.value&&e.value===a.value}let f=re(p,"boardSize",12,10),r=b(X()),B=b(f()),m=b([]),w=b("x");K(()=>T(f()),()=>{v(_,100/f())}),L(),ae();var z=le(),C=h(z),S=h(C),j=y(h(S));I(j),Q(2),u(S);var H=y(S);u(C);var k=y(C,2),O=h(k);R(O,5,()=>t(r),Y,(i,s,l)=>{var e=se();R(e,5,()=>t(s),Y,(a,n,c)=>{var o=ie();M(()=>F(o,"winningCell",t(m).indexOf(t(n))>-1));var d=h(o);u(o),M(()=>{F(o,"filledX",t(n).value==="x"),F(o,"filledO",t(n).value==="o"),P(d,t(n).value?t(n).value:"-")}),D("click",o,ve=>W(l,c)),$(a,o)}),u(e),$(i,e)}),u(O),u(k),u(z),M(()=>{ee(z,"style",`--cell-size: ${t(_)??""}%`),P(H,` Player: ${t(w)??""}`)}),D("submit",S,q),te(j,()=>t(B),i=>v(B,i)),$(A,z),N()}var ne=x('<div class="svelte-rcbse9"><!></div>');function Se(A){var p=ne();Z(W=>{V.title="Five in a row"});var _=h(p);oe(_,{boardSize:25}),u(p),$(A,p)}export{Se as component};
