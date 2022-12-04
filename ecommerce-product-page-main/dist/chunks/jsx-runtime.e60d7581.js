import{r as a}from"./index.6436be8f.js";let s=[],I=t=>{let e,u=[],n={lc:0,value:t,set(r){n.value=r,n.notify()},get(){return n.lc||n.listen(()=>{})(),n.value},notify(r){e=u;let i=!s.length;for(let o=0;o<e.length;o++)s.push(e[o],n.value,r);if(i){for(let o=0;o<s.length;o+=3)s[o](s[o+1],s[o+2]);s.length=0}},listen(r){return u===e&&(u=u.slice()),n.lc=u.push(r),()=>{u===e&&(u=u.slice());let i=u.indexOf(r);~i&&(u.splice(i,1),n.lc--)}},subscribe(r){let i=n.listen(r);return r(n.value),i},off(){}};return n};function v(t,e,u){let n=new Set([...e,void 0]);return t.listen((r,i)=>{n.has(i)&&u(r,i)})}var p={exports:{}},y={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=a.exports;function S(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var x=typeof Object.is=="function"?Object.is:S,_=l.useState,m=l.useEffect,h=l.useLayoutEffect,E=l.useDebugValue;function g(t,e){var u=e(),n=_({inst:{value:u,getSnapshot:e}}),r=n[0].inst,i=n[1];return h(function(){r.value=u,r.getSnapshot=e,c(r)&&i({inst:r})},[t,u,e]),m(function(){return c(r)&&i({inst:r}),t(function(){c(r)&&i({inst:r})})},[t]),E(u),u}function c(t){var e=t.getSnapshot;t=t.value;try{var u=e();return!x(t,u)}catch{return!0}}function k(t,e){return e()}var w=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?k:g;y.useSyncExternalStore=l.useSyncExternalStore!==void 0?l.useSyncExternalStore:w;(function(t){t.exports=y})(p);function N(t,e={}){let u=a.exports.useCallback(r=>e.keys?v(t,e.keys,r):t.listen(r),[e.keys,t]),n=t.get.bind(t);return p.exports.useSyncExternalStore(u,n,n)}var O={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=a.exports,b=Symbol.for("react.element"),j=Symbol.for("react.fragment"),L=Object.prototype.hasOwnProperty,R=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function d(t,e,u){var n,r={},i=null,o=null;u!==void 0&&(i=""+u),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)L.call(e,n)&&!P.hasOwnProperty(n)&&(r[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:b,type:t,key:i,ref:o,props:r,_owner:R.current}}f.Fragment=j;f.jsx=d;f.jsxs=d;(function(t){t.exports=f})(O);export{I as a,O as j,N as u};
