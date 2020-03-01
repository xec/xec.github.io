import{T as t,a as e,U as n}from"./index.5326a9dd.js";function r(t){const e=t-1;return e*e*e+1}function a(t){return--t*t*t*t*t+1}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function o(t,{delay:e=0,duration:r=400,easing:a=n}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:r,easing:a,css:t=>`opacity: ${t*o}`}}function i(t,{delay:e=0,duration:n=400,easing:a=r,x:o=0,y:i=0,opacity:s=0}){const c=getComputedStyle(t),l=+c.opacity,u="none"===c.transform?"":c.transform,p=l*(1-s);return{delay:e,duration:n,easing:a,css:(t,e)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*o}px, ${(1-t)*i}px);\n\t\t\topacity: ${l-p*e}`}}function s(n){var{fallback:a}=n,o=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}(n,["fallback"]);const i=new Map,s=new Map;function c(n,i,s){return(c,l)=>(n.set(l.key,{rect:c.getBoundingClientRect()}),()=>{if(i.has(l.key)){const{rect:n}=i.get(l.key);return i.delete(l.key),function(n,a,i){const{delay:s=0,duration:c=(t=>30*Math.sqrt(t)),easing:l=r}=e(e({},o),i),u=a.getBoundingClientRect(),p=n.left-u.left,y=n.top-u.top,f=n.width/u.width,d=n.height/u.height,g=Math.sqrt(p*p+y*y),m=getComputedStyle(a),h="none"===m.transform?"":m.transform,$=+m.opacity;return{delay:s,duration:t(c)?c(g):c,easing:l,css:(t,e)=>`\n\t\t\t\topacity: ${t*$};\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ${h} translate(${e*p}px,${e*y}px) scale(${t+(1-t)*f}, ${t+(1-t)*d});\n\t\t\t`}}(n,c,l)}return n.delete(l.key),a&&a(c,l,s)})}return[c(s,i,!1),c(i,s,!0)]}export{i as a,s as c,o as f,a as q};
