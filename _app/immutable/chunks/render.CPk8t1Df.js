import{e as x,b as y,g as D,l as O,i as A,k as B,h as N,d as q}from"./template.B4OB2rPh.js";import{a5 as C,ae as H,J as m,K as I,af as S,R as M,ag as R,ah as P,ai as W,ac as Y,aj as L,B as $,p as j,a as J,r as K}from"./runtime.B-0C5A9i.js";import{r as z}from"./svelte-head.CXxAo4dJ.js";function F(t,e,s,n){function r(a){if(n.capture||v(e,a),!a.cancelBubble)return s.call(this,a)}return t.startsWith("pointer")||t==="wheel"?H(()=>{e.addEventListener(t,r,n)}):e.addEventListener(t,r,n),r}function ee(t,e,s,n,r){var a={capture:n,passive:r},i=F(t,e,s,a);(e===document.body||e===window||e===document)&&C(()=>()=>{e.removeEventListener(t,i,a)})}function te(t){for(var e=0;e<t.length;e++)V.add(t[e]);for(var s of b)s(t)}function v(t,e){var E;var s=t.ownerDocument,n=e.type,r=((E=e.composedPath)==null?void 0:E.call(e))||[],a=r[0]||e.target;e.target!==a&&m(e,"target",{configurable:!0,value:a});var i=0,d=e.__root;if(d){var l=r.indexOf(d);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var p=r.indexOf(t);if(p===-1)return;l<=p&&(i=l+1)}a=r[i]||e.target,m(e,"currentTarget",{configurable:!0,get(){return a||s}});try{for(var u,f=[];a!==null;){var _=a.parentNode||a.host||null;try{var o=a["__"+n];if(o!==void 0&&!a.disabled)if(I(o)){var[h,...c]=o;h.apply(a,[e,...c])}else o.call(a,e)}catch(g){u?f.push(g):u=g}if(e.cancelBubble||_===t||_===null||a===t)break;a=_}if(u){for(let g of f)queueMicrotask(()=>{throw g});throw u}}finally{e.__root=t,a=t}}const V=new Set,b=new Set;let T=!0;function ae(t,e){const s=t.__nodeValue,n=G(e);N&&t.nodeValue===n?t.__nodeValue=n:s!==n&&(t.nodeValue=n,t.__nodeValue=n)}function re(t,e,s,n){e===void 0?n!==null&&n(t):e(t,s)}function G(t){return typeof t=="string"?t:t==null?"":t+""}function Q(t,e){const s=e.anchor??e.target.appendChild(x());return S(()=>k(t,{...e,anchor:s}),!1)}function ne(t,e){const s=e.target,n=q;try{return S(()=>{y(!0);for(var r=s.firstChild;r&&(r.nodeType!==8||r.data!==M);)r=r.nextSibling;if(!r)throw R;const a=D(r),i=k(t,{...e,anchor:a});return y(!1),i},!1)}catch(r){if(r===R)return e.recover===!1&&P(),O(),A(s),y(!1),Q(t,e);throw r}finally{y(!!n),B(n),z()}}function k(t,{target:e,anchor:s,props:n={},events:r,context:a,intro:i=!1}){O();const d=new Set,l=v.bind(null,e),p=v.bind(null,document),u=o=>{for(let h=0;h<o.length;h++){const c=o[h];d.has(c)||(d.add(c),e.addEventListener(c,l,L.includes(c)?{passive:!0}:void 0),document.addEventListener(c,p,L.includes(c)?{passive:!0}:void 0))}};u(W(V)),b.add(u);let f;const _=Y(()=>($(()=>{if(a){j({});var o=K;o.c=a}r&&(n.$$events=r),T=i,f=t(s,n)||{},T=!0,a&&J()}),()=>{for(const o of d)e.removeEventListener(o,l);b.delete(u),w.delete(f)}));return w.set(f,_),f}let w=new WeakMap;function se(t){const e=w.get(t);e==null||e()}export{G as a,T as b,F as c,te as d,ee as e,re as f,ne as h,Q as m,ae as s,se as u};
