import{Y as t,f as n,Z as e}from"./index.80f59f74.js";function o(t){var n=t-1;return n*n*n+1}function r(t){return--t*t*t*t*t+1}
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
***************************************************************************** */function a(t,n){var o=n.delay,r=void 0===o?0:o,a=n.duration,i=void 0===a?400:a,c=n.easing,u=void 0===c?e:c,f=+getComputedStyle(t).opacity;return{delay:r,duration:i,easing:u,css:function(t){return"opacity: ".concat(t*f)}}}function i(t,n){var e=n.delay,r=void 0===e?0:e,a=n.duration,i=void 0===a?400:a,c=n.easing,u=void 0===c?o:c,f=n.x,s=void 0===f?0:f,d=n.y,l=void 0===d?0:d,p=n.opacity,y=void 0===p?0:p,v=getComputedStyle(t),g=+v.opacity,m="none"===v.transform?"":v.transform,h=g*(1-y);return{delay:r,duration:i,easing:u,css:function(t,n){return"\n\t\t\ttransform: ".concat(m," translate(").concat((1-t)*s,"px, ").concat((1-t)*l,"px);\n\t\t\topacity: ").concat(g-h*n)}}}function c(e){var r=e.fallback,a=function(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(e[o[r]]=t[o[r]])}return e}(e,["fallback"]),i=new Map,c=new Map;function u(e,i,c){return function(u,f){return e.set(f.key,{rect:u.getBoundingClientRect()}),function(){if(i.has(f.key)){var s=i.get(f.key).rect;return i.delete(f.key),function(e,r,i){var c=n(n({},a),i),u=c.delay,f=void 0===u?0:u,s=c.duration,d=void 0===s?function(t){return 30*Math.sqrt(t)}:s,l=c.easing,p=void 0===l?o:l,y=r.getBoundingClientRect(),v=e.left-y.left,g=e.top-y.top,m=e.width/y.width,h=e.height/y.height,b=Math.sqrt(v*v+g*g),x=getComputedStyle(r),O="none"===x.transform?"":x.transform,k=+x.opacity;return{delay:f,duration:t(d)?d(b):d,easing:p,css:function(t,n){return"\n\t\t\t\topacity: ".concat(t*k,";\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ").concat(O," translate(").concat(n*v,"px,").concat(n*g,"px) scale(").concat(t+(1-t)*m,", ").concat(t+(1-t)*h,");\n\t\t\t")}}}(s,u,f)}return e.delete(f.key),r&&r(u,f,c)}}}return[u(c,i,!1),u(i,c,!0)]}export{i as a,c,a as f,r as q};
