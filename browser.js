// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).isReadOnlyPropertyIn=r()}(this,(function(){"use strict";function t(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var r=void 0!==Object.getOwnPropertyDescriptor,e=Object.getOwnPropertyDescriptor;var n=function(t,r){var n;return null==t||void 0===(n=e(t,r))?null:n},o=Object.prototype.hasOwnProperty;var u=function(t,r){return null!=t&&o.call(t,r)},i=u;var c=r?n:function(t,r){return i(t,r)?{configurable:!0,enumerable:!0,writable:!0,value:t[r]}:null},f=/./,l=t(Object.freeze({__proto__:null,default:()=>window}))(),a=l.document&&l.document.childNodes,p=Int8Array,y=f,b=a,v=p;var s=function(){return"function"==typeof y||"object"==typeof v||"function"==typeof b};var d=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return d&&"symbol"==typeof Symbol.toStringTag},j=Object.prototype.toString,g=j;var O=function(t){return g.call(t)},m="function"==typeof Symbol?Symbol.toStringTag:"",w=u,h=m,P=j;var S=O,E=function(t){var r,e,n;if(null==t)return P.call(t);e=t[h],r=w(t,h);try{t[h]=void 0}catch(r){return P.call(t)}return n=P.call(t),r?t[h]=e:delete t[h],n},A=_()?E:S,T="function"==typeof Object.defineProperty?Object.defineProperty:null;var k=function(){try{return T({},"x",{}),!0}catch(t){return!1}},x=Object.defineProperty,B=Object.prototype,G=B.toString,C=B.__defineGetter__,D=B.__defineSetter__,L=B.__lookupGetter__,R=B.__lookupSetter__;var V=x,F=function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===G.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(L.call(t,r)||R.call(t,r)?(n=t.__proto__,t.__proto__=B,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&C&&C.call(t,r,e.get),i&&D&&D.call(t,r,e.set),t},I=k()?V:F;var M=function(t,r,e){I(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})};var X=function(){return/^\s*function\s*([^(]*)/i},z=X;M(z,"REGEXP",X());var N=z,q=A;var H=Array.isArray?Array.isArray:function(t){return"[object Array]"===q(t)};var J=function(t){return null!==t&&"object"==typeof t};M(J,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!H(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(J));var K=J;var Q=A,U=N.REGEXP,W=function(t){return K(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var Y=function(t){var r,e,n;if(("Object"===(e=Q(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=U.exec(n.toString()))return r[1]}return W(t)?"Buffer":e},Z=Y;var $=Y;var tt=function(t){var r;return null===t?"null":"object"===(r=typeof t)?Z(t).toLowerCase():r},rt=function(t){return $(t).toLowerCase()},et=s()?rt:tt;var nt=function(t){return"function"===et(t)},ot=Object.getPrototypeOf;var ut=A,it=function(t){return t.__proto__};var ct=function(t){var r=it(t);return r||null===r?r:"[object Function]"===ut(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},ft=ot,lt=ct,at=nt(Object.getPrototypeOf)?ft:lt;var pt=c,yt=function(t){return null==t?null:(t=Object(t),at(t))};var bt=function(t,r){var e,n;if(null==t)return null;n=Object(t);do{if(e=pt(n,r))return e;n=yt(n)}while(n);return null};return function(t,r){var e=bt(t,r);return null!==e&&!1===e.configurable&&(!1===e.writable||"function"==typeof e.get&&void 0===e.set)}}));
//# sourceMappingURL=browser.js.map
