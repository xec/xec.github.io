import{S as t,i as e,s,F as l,G as n,w as a,c as o,d as r,H as c,e as i,y as h,k as d,g as f,I as u,z as g,X as p,A as v,o as m,p as y,J as k,K as $,V as b,Y as E,Z as w,L as x,_ as I,q as N,r as S,u as T,n as L,v as U}from"./index.5326a9dd.js";import{c as B,q as O}from"./index.1bb555db.js";function V(t,e,s){const l=t.slice();return l[12]=e[s],l}function q(t,e,s){const l=t.slice();return l[12]=e[s],l}function A(t){let e,s,k,$,b,E,w,x,N,S,T=[],L=new Map,U=[],B=new Map,O=t[0].filter(M);const A=t=>t[12].id;for(let e=0;e<O.length;e+=1){let s=q(t,O,e),l=A(s);L.set(l,T[e]=D(l,s))}let J=t[0].filter(P);const j=t=>t[12].id;for(let e=0;e<J.length;e+=1){let s=V(t,J,e),l=j(s);B.set(l,U[e]=H(l,s))}return{c(){e=l("div"),s=l("h2"),k=n("todo"),$=a();for(let t=0;t<T.length;t+=1)T[t].c();b=a(),E=l("div"),w=l("h2"),x=n("done"),N=a();for(let t=0;t<U.length;t+=1)U[t].c();this.h()},l(t){e=o(t,"DIV",{class:!0});var l=r(e);s=o(l,"H2",{class:!0});var n=r(s);k=c(n,"todo"),n.forEach(i),$=h(l);for(let t=0;t<T.length;t+=1)T[t].l(l);l.forEach(i),b=h(t),E=o(t,"DIV",{class:!0});var a=r(E);w=o(a,"H2",{class:!0});var d=r(w);x=c(d,"done"),d.forEach(i),N=h(a);for(let t=0;t<U.length;t+=1)U[t].l(a);a.forEach(i),this.h()},h(){d(s,"class","svelte-1tlh070"),d(e,"class","left"),d(w,"class","svelte-1tlh070"),d(E,"class","right")},m(t,l){f(t,e,l),u(e,s),u(s,k),u(e,$);for(let t=0;t<T.length;t+=1)T[t].m(e,null);f(t,b,l),f(t,E,l),u(E,w),u(w,x),u(E,N);for(let t=0;t<U.length;t+=1)U[t].m(E,null);S=!0},p(t,s){const l=t[0].filter(M);g(),T=p(T,s,A,1,t,l,L,e,I,D,null,q),v();const n=t[0].filter(P);g(),U=p(U,s,j,1,t,n,B,E,I,H,null,V),v()},i(t){if(!S){for(let t=0;t<O.length;t+=1)m(T[t]);for(let t=0;t<J.length;t+=1)m(U[t]);S=!0}},o(t){for(let t=0;t<T.length;t+=1)y(T[t]);for(let t=0;t<U.length;t+=1)y(U[t]);S=!1},d(t){t&&i(e);for(let t=0;t<T.length;t+=1)T[t].d();t&&i(b),t&&i(E);for(let t=0;t<U.length;t+=1)U[t].d()}}}function D(t,e){let s,g,p,v,m,y,I,N,S,T,L,U,B=e[12].description+"";function O(...t){return e[8](e[12],...t)}function V(...t){return e[9](e[12],...t)}return{key:t,first:null,c(){s=l("label"),g=l("input"),p=a(),v=n(B),m=a(),y=l("button"),I=n("remove"),N=a(),this.h()},l(t){s=o(t,"LABEL",{class:!0});var e=r(s);g=o(e,"INPUT",{type:!0,class:!0}),p=h(e),v=c(e,B),m=h(e),y=o(e,"BUTTON",{class:!0});var l=r(y);I=c(l,"remove"),l.forEach(i),N=h(e),e.forEach(i),this.h()},h(){d(g,"type","checkbox"),d(g,"class","svelte-1tlh070"),d(y,"class","svelte-1tlh070"),d(s,"class","svelte-1tlh070"),this.first=s},m(t,e){f(t,s,e),u(s,g),u(s,p),u(s,v),u(s,m),u(s,y),u(y,I),u(s,N),L=!0,U=[k(g,"change",O),k(y,"click",V)]},p(t,s){e=t,(!L||1&s)&&B!==(B=e[12].description+"")&&$(v,B)},i(t){L||(b(()=>{T&&T.end(1),S||(S=E(s,e[2],{key:e[12].id})),S.start()}),L=!0)},o(t){S&&S.invalidate(),T=w(s,e[1],{key:e[12].id}),L=!1},d(t){t&&i(s),t&&T&&T.end(),x(U)}}}function H(t,e){let s,g,p,v,m,y,I,N,S,T,L,U,B=e[12].description+"";function O(...t){return e[10](e[12],...t)}function V(...t){return e[11](e[12],...t)}return{key:t,first:null,c(){s=l("label"),g=l("input"),p=a(),v=n(B),m=a(),y=l("button"),I=n("remove"),N=a(),this.h()},l(t){s=o(t,"LABEL",{class:!0});var e=r(s);g=o(e,"INPUT",{type:!0,checked:!0,class:!0}),p=h(e),v=c(e,B),m=h(e),y=o(e,"BUTTON",{class:!0});var l=r(y);I=c(l,"remove"),l.forEach(i),N=h(e),e.forEach(i),this.h()},h(){d(g,"type","checkbox"),g.checked=!0,d(g,"class","svelte-1tlh070"),d(y,"class","svelte-1tlh070"),d(s,"class","done svelte-1tlh070"),this.first=s},m(t,e){f(t,s,e),u(s,g),u(s,p),u(s,v),u(s,m),u(s,y),u(y,I),u(s,N),L=!0,U=[k(g,"change",O),k(y,"click",V)]},p(t,s){e=t,(!L||1&s)&&B!==(B=e[12].description+"")&&$(v,B)},i(t){L||(b(()=>{T&&T.end(1),S||(S=E(s,e[2],{key:e[12].id})),S.start()}),L=!0)},o(t){S&&S.invalidate(),T=w(s,e[1],{key:e[12].id}),L=!1},d(t){t&&i(s),t&&T&&T.end(),x(U)}}}function J(t){let e,s,n,c,p,$=t[0].length&&A(t);return{c(){e=l("div"),s=l("input"),n=a(),$&&$.c(),this.h()},l(t){e=o(t,"DIV",{class:!0});var l=r(e);s=o(l,"INPUT",{placeholder:!0,class:!0}),n=h(l),$&&$.l(l),l.forEach(i),this.h()},h(){d(s,"placeholder","what needs to be done?"),d(s,"class","svelte-1tlh070"),d(e,"class","board svelte-1tlh070")},m(l,a){f(l,e,a),u(e,s),u(e,n),$&&$.m(e,null),c=!0,p=k(s,"keydown",t[7])},p(t,[s]){t[0].length?$?($.p(t,s),m($,1)):($=A(t),$.c(),m($,1),$.m(e,null)):$&&(g(),y($,1,1,()=>{$=null}),v())},i(t){c||(m($),c=!0)},o(t){y($),c=!1},d(t){t&&i(e),$&&$.d(),p()}}}const M=t=>!t.done,P=t=>t.done;function j(t,e,s){const[l,n]=B({duration:t=>Math.sqrt(200*t),fallback(t,e){const s=getComputedStyle(t),l="none"===s.transform?"":s.transform;return{duration:600,easing:O,css:t=>`\n\t\t\t\t\ttransform: ${l} scale(${t});\n\t\t\t\t\topacity: ${t}\n\t\t\t\t`}}});let a=1,o=[];function r(t){const e={id:a++,done:!1,description:t.value};s(0,o=[e,...o]),t.value=""}function c(t){s(0,o=o.filter(e=>e!==t))}function i(t,e){t.done=e,c(t),s(0,o=o.concat(t))}localStorage.todos&&(o=JSON.parse(localStorage.todos),a=o.reduce((t,e)=>e.id>t?e.id:t,0)+1,console.log(o,a));return t.$$.update=()=>{1&t.$$.dirty&&(localStorage.todos=JSON.stringify(o))},[o,l,n,r,c,i,a,t=>13===t.which&&r(t.target),t=>i(t,!0),t=>c(t),t=>i(t,!1),t=>c(t)]}class z extends t{constructor(t){super(),e(this,t,j,J,s,{})}}function C(t){let e;const s=new z({});return{c(){N(s.$$.fragment)},l(t){S(s.$$.fragment,t)},m(t,l){T(s,t,l),e=!0},p:L,i(t){e||(m(s.$$.fragment,t),e=!0)},o(t){y(s.$$.fragment,t),e=!1},d(t){U(s,t)}}}export default class extends t{constructor(t){super(),e(this,t,null,C,s,{})}}
