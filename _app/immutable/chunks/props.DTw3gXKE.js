import{s as O,g as b,b as D,L as E,P as R,c as A,d as l,e as L,u as q,i as o,f as j,h as K,j as T,k as S,l as U,m as M,n as N}from"./runtime.B-0C5A9i.js";const Y={get(e,r){if(!e.exclude.includes(r))return l(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,n){return r in e.special||(e.special[r]=z({get[r](){return e.props[r]}},r,R)),e.special[r](n),q(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function C(e,r){return new Proxy({props:e,exclude:r,special:{},version:O(0)},Y)}const g={get(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(o(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return s[r]}},getOwnPropertyDescriptor(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(o(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return b(s,r)}},has(e,r){for(let n of e.props)if(o(n)&&(n=n()),n!=null&&r in n)return!0;return!1},ownKeys(e){const r=[];for(let n of e.props){o(n)&&(n=n());for(const s in n)r.includes(s)||r.push(s)}return r}};function G(...e){return new Proxy({props:e},g)}function z(e,r,n,s){var I;var P=(n&j)!==0,h=(n&K)!==0,x=(n&N)!==0,f=e[r],i=(I=b(e,r))==null?void 0:I.set,p=s,c=!0,m=()=>(x&&c&&(c=!1,p=T(s)),p);f===void 0&&s!==void 0&&(i&&h&&D(),f=m(),i&&i(f));var t;if(h)t=()=>{var u=e[r];return u===void 0?m():(c=!0,u)};else{var w=(P?S:U)(()=>e[r]);w.f|=E,t=()=>{var u=l(w);return u!==void 0&&(p=void 0),u===void 0?p:u}}if(!(n&R))return t;if(i)return function(u){return arguments.length===1?(i(u),u):t()};var _=!1,d=M(f),a=S(()=>{var u=t(),v=l(d);return _?(_=!1,v):d.v=u});return P||(a.equals=A),function(u){var v=l(a);return arguments.length>0?(a.equals(u)||(_=!0,L(d,u),l(a),a.version++),u):v}}export{C as l,z as p,G as s};
