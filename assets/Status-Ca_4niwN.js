import{c as o,j as a,s as c,ar as t,aS as r}from"./index-CxqrXgtV.js";import{C as s}from"./clock-n_cQTssc.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]],l=o("CalendarClock",i);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],d=o("CircleAlert",p);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]],k=o("CircleDashed",h);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]],x=o("CircleSlash",y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],u=o("Loader",m),_={present:"حاضر",absent:"غائب",late:"متأخر",excused:"بعذر"},g={scheduled:"مجدولة",done:"تم تنفيذها",postponed:"مؤجّلة",cancelled:"ملغاة"},M={unpaid:"غير مدفوع",partial:"مدفوع جزئيًا",paid:"مدفوع",void:"ملغى"},I={not_started:"لم يبدأ",in_progress:"جارٍ التنفيذ",completed:"مكتمل",needs_revision:"يحتاج تعديل"},v={cash:"نقدي",bank:"تحويل بنكي",wallet:"محفظة إلكترونية",other:"أخرى"};function j({status:e}){const n={present:{tone:"success",Icon:t},absent:{tone:"danger",Icon:r},late:{tone:"warning",Icon:s},excused:{tone:"info",Icon:d}}[e];return a.jsxs(c,{tone:n.tone,children:[a.jsx(n.Icon,{className:"size-3",strokeWidth:3}),_[e]]})}function A({status:e}){const n={scheduled:{tone:"info",Icon:l},done:{tone:"success",Icon:t},postponed:{tone:"warning",Icon:s},cancelled:{tone:"danger",Icon:x}}[e];return a.jsxs(c,{tone:n.tone,children:[a.jsx(n.Icon,{className:"size-3",strokeWidth:2.6}),g[e]]})}function E({status:e}){const n={unpaid:"danger",partial:"warning",paid:"success",void:"neutral"}[e];return a.jsx(c,{tone:n,children:M[e]})}function L({status:e}){const n={not_started:{tone:"neutral",Icon:k},in_progress:{tone:"info",Icon:u},completed:{tone:"success",Icon:t},needs_revision:{tone:"warning",Icon:d}}[e];return a.jsxs(c,{tone:n.tone,children:[a.jsx(n.Icon,{className:"size-3",strokeWidth:2.6}),I[e]]})}export{j as A,l as C,v as P,L as Q,A as S,d as a,E as b,I as c,M as d,_ as e};
