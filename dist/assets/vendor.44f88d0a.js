var DS=Object.defineProperty,bS=Object.defineProperties;var PS=Object.getOwnPropertyDescriptors;var ga=Object.getOwnPropertySymbols;var Gp=Object.prototype.hasOwnProperty,Yp=Object.prototype.propertyIsEnumerable;var Qp=(t,e,n)=>e in t?DS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ys=(t,e)=>{for(var n in e||(e={}))Gp.call(e,n)&&Qp(t,n,e[n]);if(ga)for(var n of ga(e))Yp.call(e,n)&&Qp(t,n,e[n]);return t},vs=(t,e)=>bS(t,PS(e));var tc=(t,e)=>{var n={};for(var r in t)Gp.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&ga)for(var r of ga(t))e.indexOf(r)<0&&Yp.call(t,r)&&(n[r]=t[r]);return n};var ws=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},V={exports:{}},te={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Xp=Object.getOwnPropertySymbols,OS=Object.prototype.hasOwnProperty,LS=Object.prototype.propertyIsEnumerable;function MS(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function $S(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Jp=$S()?Object.assign:function(t,e){for(var n,r=MS(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)OS.call(n,o)&&(r[o]=n[o]);if(Xp){i=Xp(n);for(var a=0;a<i.length;a++)LS.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nc=Jp,ei=60103,Zp=60106;te.Fragment=60107;te.StrictMode=60108;te.Profiler=60114;var em=60109,tm=60110,nm=60112;te.Suspense=60113;var rm=60115,im=60116;if(typeof Symbol=="function"&&Symbol.for){var Ot=Symbol.for;ei=Ot("react.element"),Zp=Ot("react.portal"),te.Fragment=Ot("react.fragment"),te.StrictMode=Ot("react.strict_mode"),te.Profiler=Ot("react.profiler"),em=Ot("react.provider"),tm=Ot("react.context"),nm=Ot("react.forward_ref"),te.Suspense=Ot("react.suspense"),rm=Ot("react.memo"),im=Ot("react.lazy")}var sm=typeof Symbol=="function"&&Symbol.iterator;function US(t){return t===null||typeof t!="object"?null:(t=sm&&t[sm]||t["@@iterator"],typeof t=="function"?t:null)}function Es(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var om={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},am={};function ti(t,e,n){this.props=t,this.context=e,this.refs=am,this.updater=n||om}ti.prototype.isReactComponent={};ti.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(Es(85));this.updater.enqueueSetState(this,t,e,"setState")};ti.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function um(){}um.prototype=ti.prototype;function rc(t,e,n){this.props=t,this.context=e,this.refs=am,this.updater=n||om}var ic=rc.prototype=new um;ic.constructor=rc;nc(ic,ti.prototype);ic.isPureReactComponent=!0;var sc={current:null},lm=Object.prototype.hasOwnProperty,cm={key:!0,ref:!0,__self:!0,__source:!0};function hm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)lm.call(e,r)&&!cm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ei,type:t,key:s,ref:o,props:i,_owner:sc.current}}function FS(t,e){return{$$typeof:ei,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function oc(t){return typeof t=="object"&&t!==null&&t.$$typeof===ei}function jS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dm=/\/+/g;function ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jS(""+t.key):e.toString(36)}function ya(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ei:case Zp:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ac(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(dm,"$&/")+"/"),ya(i,e,n,"",function(l){return l})):i!=null&&(oc(i)&&(i=FS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(dm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+ac(s,a);o+=ya(s,e,n,u,i)}else if(u=US(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+ac(s,a++),o+=ya(s,e,n,u,i);else if(s==="object")throw e=""+t,Error(Es(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function va(t,e,n){if(t==null)return t;var r=[],i=0;return ya(t,r,"","",function(s){return e.call(n,s,i++)}),r}function VS(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var fm={current:null};function rn(){var t=fm.current;if(t===null)throw Error(Es(321));return t}var BS={ReactCurrentDispatcher:fm,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:sc,IsSomeRendererActing:{current:!1},assign:nc};te.Children={map:va,forEach:function(t,e,n){va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return va(t,function(){e++}),e},toArray:function(t){return va(t,function(e){return e})||[]},only:function(t){if(!oc(t))throw Error(Es(143));return t}};te.Component=ti;te.PureComponent=rc;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BS;te.cloneElement=function(t,e,n){if(t==null)throw Error(Es(267,t));var r=nc({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)lm.call(e,u)&&!cm.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:ei,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:tm,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:em,_context:t},t.Consumer=t};te.createElement=hm;te.createFactory=function(t){var e=hm.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:nm,render:t}};te.isValidElement=oc;te.lazy=function(t){return{$$typeof:im,_payload:{_status:-1,_result:t},_init:VS}};te.memo=function(t,e){return{$$typeof:rm,type:t,compare:e===void 0?null:e}};te.useCallback=function(t,e){return rn().useCallback(t,e)};te.useContext=function(t,e){return rn().useContext(t,e)};te.useDebugValue=function(){};te.useEffect=function(t,e){return rn().useEffect(t,e)};te.useImperativeHandle=function(t,e,n){return rn().useImperativeHandle(t,e,n)};te.useLayoutEffect=function(t,e){return rn().useLayoutEffect(t,e)};te.useMemo=function(t,e){return rn().useMemo(t,e)};te.useReducer=function(t,e,n){return rn().useReducer(t,e,n)};te.useRef=function(t){return rn().useRef(t)};te.useState=function(t){return rn().useState(t)};te.version="17.0.2";V.exports=te;var $L=V.exports;function wa(){return wa=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wa.apply(this,arguments)}var hr,uc=hr||(hr={});uc.Pop="POP";uc.Push="PUSH";uc.Replace="REPLACE";var pm=function(t){return t};function mm(t){t.preventDefault(),t.returnValue=""}function gm(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter(function(n){return n!==e})}},call:function(e){t.forEach(function(n){return n&&n(e)})}}}function zS(){return Math.random().toString(36).substr(2,8)}function lc(t){var e=t.pathname;e=e===void 0?"/":e;var n=t.search;return n=n===void 0?"":n,t=t.hash,t=t===void 0?"":t,n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),t&&t!=="#"&&(e+=t.charAt(0)==="#"?t:"#"+t),e}function dr(t){var e={};if(t){var n=t.indexOf("#");0<=n&&(e.hash=t.substr(n),t=t.substr(0,n)),n=t.indexOf("?"),0<=n&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function qS(t){function e(){var f=u.location,p=l.state||{};return[p.idx,pm({pathname:f.pathname,search:f.search,hash:f.hash,state:p.usr||null,key:p.key||"default"})]}function n(f){return typeof f=="string"?f:lc(f)}function r(f,p){return p===void 0&&(p=null),pm(wa({pathname:g.pathname,hash:"",search:""},typeof f=="string"?dr(f):f,{state:p,key:zS()}))}function i(f){h=f,f=e(),d=f[0],g=f[1],y.call({action:h,location:g})}function s(f,p){function m(){s(f,p)}var v=hr.Push,w=r(f,p);if(!E.length||(E.call({action:v,location:w,retry:m}),!1)){var N=[{usr:w.state,key:w.key,idx:d+1},n(w)];w=N[0],N=N[1];try{l.pushState(w,"",N)}catch{u.location.assign(N)}i(v)}}function o(f,p){function m(){o(f,p)}var v=hr.Replace,w=r(f,p);E.length&&(E.call({action:v,location:w,retry:m}),1)||(w=[{usr:w.state,key:w.key,idx:d},n(w)],l.replaceState(w[0],"",w[1]),i(v))}function a(f){l.go(f)}t===void 0&&(t={}),t=t.window;var u=t===void 0?document.defaultView:t,l=u.history,c=null;u.addEventListener("popstate",function(){if(c)E.call(c),c=null;else{var f=hr.Pop,p=e(),m=p[0];if(p=p[1],E.length){if(m!=null){var v=d-m;v&&(c={action:f,location:p,retry:function(){a(-1*v)}},a(v))}}else i(f)}});var h=hr.Pop;t=e();var d=t[0],g=t[1],y=gm(),E=gm();return d==null&&(d=0,l.replaceState(wa({},l.state,{idx:d}),"")),{get action(){return h},get location(){return g},createHref:n,push:s,replace:o,go:a,back:function(){a(-1)},forward:function(){a(1)},listen:function(f){return y.push(f)},block:function(f){var p=E.push(f);return E.length===1&&u.addEventListener("beforeunload",mm),function(){p(),E.length||u.removeEventListener("beforeunload",mm)}}}}/**
 * React Router v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lt(t,e){if(!t)throw new Error(e)}const cc=V.exports.createContext(null),hc=V.exports.createContext(null),ni=V.exports.createContext({outlet:null,matches:[]});function UL(t){let{to:e,replace:n,state:r}=t;ri()||Lt(!1);let i=dc();return V.exports.useEffect(()=>{i(e,{replace:n,state:r})}),null}function HS(t){return QS(t.context)}function KS(t){Lt(!1)}function WS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=hr.Pop,navigator:s,static:o=!1}=t;ri()&&Lt(!1);let a=g_(e),u=V.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=dr(r));let{pathname:l="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,y=V.exports.useMemo(()=>{let E=Tm(l,a);return E==null?null:{pathname:E,search:c,hash:h,state:d,key:g}},[a,l,c,h,d,g]);return y==null?null:V.exports.createElement(cc.Provider,{value:u},V.exports.createElement(hc.Provider,{children:n,value:{location:y,navigationType:i}}))}function FL(t){let{children:e,location:n}=t;return XS(fc(e),n)}function GS(t){ri()||Lt(!1);let{basename:e,navigator:n}=V.exports.useContext(cc),{hash:r,pathname:i,search:s}=ym(t),o=i;if(e!=="/"){let a=m_(t),u=a!=null&&a.endsWith("/");o=i==="/"?e+(u?"/":""):kn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function ri(){return V.exports.useContext(hc)!=null}function Ts(){return ri()||Lt(!1),V.exports.useContext(hc).location}function dc(){ri()||Lt(!1);let{basename:t,navigator:e}=V.exports.useContext(cc),{matches:n}=V.exports.useContext(ni),{pathname:r}=Ts(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=V.exports.useRef(!1);return V.exports.useEffect(()=>{s.current=!0}),V.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let l=Em(a,JSON.parse(i),r);t!=="/"&&(l.pathname=kn([t,l.pathname])),(u.replace?e.replace:e.push)(l,u.state)},[t,e,i,r])}const YS=V.exports.createContext(null);function QS(t){let e=V.exports.useContext(ni).outlet;return e&&V.exports.createElement(YS.Provider,{value:t},e)}function jL(){let{matches:t}=V.exports.useContext(ni),e=t[t.length-1];return e?e.params:{}}function ym(t){let{matches:e}=V.exports.useContext(ni),{pathname:n}=Ts(),r=JSON.stringify(e.map(i=>i.pathnameBase));return V.exports.useMemo(()=>Em(t,JSON.parse(r),n),[t,r,n])}function XS(t,e){ri()||Lt(!1);let{matches:n}=V.exports.useContext(ni),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=Ts(),a;if(e){var u;let d=typeof e=="string"?dr(e):e;s==="/"||((u=d.pathname)==null?void 0:u.startsWith(s))||Lt(!1),a=d}else a=o;let l=a.pathname||"/",c=s==="/"?l:l.slice(s.length)||"/",h=JS(t,{pathname:c});return l_(h&&h.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:kn([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:kn([s,d.pathnameBase])})),n)}function fc(t){let e=[];return V.exports.Children.forEach(t,n=>{if(!V.exports.isValidElement(n))return;if(n.type===V.exports.Fragment){e.push.apply(e,fc(n.props.children));return}n.type!==KS&&Lt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=fc(n.props.children)),e.push(r)}),e}function JS(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?dr(e):e,i=Tm(r.pathname||"/",n);if(i==null)return null;let s=vm(t);ZS(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=u_(s[a],i);return o}function vm(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Lt(!1),o.relativePath=o.relativePath.slice(r.length));let a=kn([r,o.relativePath]),u=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Lt(!1),vm(i.children,e,u,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:o_(a,i.index),routesMeta:u})}),e}function ZS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:a_(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const e_=/^:\w+$/,t_=3,n_=2,r_=1,i_=10,s_=-2,wm=t=>t==="*";function o_(t,e){let n=t.split("/"),r=n.length;return n.some(wm)&&(r+=s_),e&&(r+=n_),n.filter(i=>!wm(i)).reduce((i,s)=>i+(e_.test(s)?t_:s===""?r_:i_),r)}function a_(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function u_(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,l=i==="/"?e:e.slice(i.length)||"/",c=c_({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},l);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:kn([i,c.pathname]),pathnameBase:kn([i,c.pathnameBase]),route:h}),c.pathnameBase!=="/"&&(i=kn([i,c.pathnameBase]))}return s}function l_(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>V.exports.createElement(ni.Provider,{children:r.route.element!==void 0?r.route.element:V.exports.createElement(HS,null),value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function c_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=h_(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((l,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return l[c]=d_(a[h]||""),l},{}),pathname:s,pathnameBase:o,pattern:t}}function h_(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function d_(t,e){try{return decodeURIComponent(t)}catch{return t}}function f_(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?dr(t):t;return{pathname:n?n.startsWith("/")?n:p_(n,e):e,search:y_(r),hash:v_(i)}}function p_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Em(t,e,n){let r=typeof t=="string"?dr(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let u=i.split("/");for(;u[0]==="..";)u.shift(),a-=1;r.pathname=u.join("/")}s=a>=0?e[a]:"/"}let o=f_(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function m_(t){return t===""||t.pathname===""?"/":typeof t=="string"?dr(t).pathname:t.pathname}function Tm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const kn=t=>t.join("/").replace(/\/\/+/g,"/"),g_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),y_=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,v_=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;/**
 * React Router DOM v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pc(){return pc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pc.apply(this,arguments)}function w_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const E_=["onClick","reloadDocument","replace","state","target","to"];function VL(t){let{basename:e,children:n,window:r}=t,i=V.exports.useRef();i.current==null&&(i.current=qS({window:r}));let s=i.current,[o,a]=V.exports.useState({action:s.action,location:s.location});return V.exports.useLayoutEffect(()=>s.listen(a),[s]),V.exports.createElement(WS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function T_(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const BL=V.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:u}=e,l=w_(e,E_),c=GS(u),h=S_(u,{replace:s,state:o,target:a});function d(g){r&&r(g),!g.defaultPrevented&&!i&&h(g)}return V.exports.createElement("a",pc({},l,{href:c,onClick:d,ref:n,target:a}))});function S_(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=dc(),o=Ts(),a=ym(t);return V.exports.useCallback(u=>{if(u.button===0&&(!n||n==="_self")&&!T_(u)){u.preventDefault();let l=!!r||lc(o)===lc(a);s(t,{replace:l,state:i})}},[o,s,a,r,i,n,t])}function zL(t){let e=V.exports.useRef(mc(t)),n=Ts(),r=V.exports.useMemo(()=>{let o=mc(n.search);for(let a of e.current.keys())o.has(a)||e.current.getAll(a).forEach(u=>{o.append(a,u)});return o},[n.search]),i=dc(),s=V.exports.useCallback((o,a)=>{i("?"+mc(o),a)},[i]);return[r,s]}function mc(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}var Ea={exports:{}},Ss={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __=V.exports,Sm=60103;Ss.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var _m=Symbol.for;Sm=_m("react.element"),Ss.Fragment=_m("react.fragment")}var I_=__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k_=Object.prototype.hasOwnProperty,C_={key:!0,ref:!0,__self:!0,__source:!0};function Im(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)k_.call(e,r)&&!C_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Sm,type:t,key:s,ref:o,props:i,_owner:I_.current}}Ss.jsx=Im;Ss.jsxs=Im;Ea.exports=Ss;const Cn=Ea.exports.jsx,km=Ea.exports.jsxs,qL=Ea.exports.Fragment,HL=a=>{var u=a,{className:t="",color:e="#0d6efd",width:n="2em",height:r="1em",style:i,duration:s="1s"}=u,o=tc(u,["className","color","width","height","style","duration"]);return km("div",vs(ys({},o),{style:vs(ys({},i),{["--width"]:n,["--height"]:r,["--color"]:e,["--duration"]:s}),className:`cssfx-bar-wave ${t}`,children:[Cn("span",{}),Cn("span",{}),Cn("span",{}),Cn("span",{})]}))};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},A_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},R_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;u||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):A_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},N_=function(t){try{return R_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cm(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function b_(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Am(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function P_(){return ve().indexOf("Electron/")>=0}function Rm(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function O_(){return ve().indexOf("MSAppHost/")>=0}function L_(){return!b_()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nm(){return typeof indexedDB=="object"}function M_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function $_(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="FirebaseError";class sn extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=U_,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fr.prototype.create)}}class fr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?F_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sn(i,a,r)}}function F_(t,e){return t.replace(j_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const j_=/\{\$([^}]+)}/g;function V_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ta(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Dm(s)&&Dm(o)){if(!Ta(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function B_(t,e){const n=new z_(t,e);return n.subscribe.bind(n)}class z_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");q_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gc),i.error===void 0&&(i.error=gc),i.complete===void 0&&(i.complete=gc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function q_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t){return t&&t._delegate?t._delegate:t}class Mt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new D_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(W_(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:K_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function K_(t){return t===pr?void 0:t}function W_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new H_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Y_={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Q_=ne.INFO,X_={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},J_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=X_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yc{constructor(e){this.name=e,this._logLevel=Q_,this._logHandler=J_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Y_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vc="@firebase/app",bm="0.7.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new yc("@firebase/app"),tI="@firebase/app-compat",nI="@firebase/analytics-compat",rI="@firebase/analytics",iI="@firebase/app-check-compat",sI="@firebase/app-check",oI="@firebase/auth",aI="@firebase/auth-compat",uI="@firebase/database",lI="@firebase/database-compat",cI="@firebase/functions",hI="@firebase/functions-compat",dI="@firebase/installations",fI="@firebase/installations-compat",pI="@firebase/messaging",mI="@firebase/messaging-compat",gI="@firebase/performance",yI="@firebase/performance-compat",vI="@firebase/remote-config",wI="@firebase/remote-config-compat",EI="@firebase/storage",TI="@firebase/storage-compat",SI="@firebase/firestore",_I="@firebase/firestore-compat",II="firebase",kI="9.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="[DEFAULT]",CI={[vc]:"fire-core",[tI]:"fire-core-compat",[rI]:"fire-analytics",[nI]:"fire-analytics-compat",[sI]:"fire-app-check",[iI]:"fire-app-check-compat",[oI]:"fire-auth",[aI]:"fire-auth-compat",[uI]:"fire-rtdb",[lI]:"fire-rtdb-compat",[cI]:"fire-fn",[hI]:"fire-fn-compat",[dI]:"fire-iid",[fI]:"fire-iid-compat",[pI]:"fire-fcm",[mI]:"fire-fcm-compat",[gI]:"fire-perf",[yI]:"fire-perf-compat",[vI]:"fire-rc",[wI]:"fire-rc-compat",[EI]:"fire-gcs",[TI]:"fire-gcs-compat",[SI]:"fire-fst",[_I]:"fire-fst-compat","fire-js":"fire-js",[II]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new Map,Ec=new Map;function xI(t,e){try{t.container.addComponent(e)}catch(n){wc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vt(t){const e=t.name;if(Ec.has(e))return wc.debug(`There were multiple attempts to register component ${e}.`),!1;Ec.set(e,t);for(const n of Sa.values())xI(n,t);return!0}function mr(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},_a=new fr("app","Firebase",AI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _a.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=kI;function KL(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Pm,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw _a.create("bad-app-name",{appName:String(r)});const i=Sa.get(r);if(i){if(Ta(t,i.options)&&Ta(n,i.config))return i;throw _a.create("duplicate-app",{appName:r})}const s=new G_(r);for(const a of Ec.values())s.addComponent(a);const o=new RI(t,n,s);return Sa.set(r,o),o}function Ia(t=Pm){const e=Sa.get(t);if(!e)throw _a.create("no-app",{appName:t});return e}function ot(t,e,n){var r;let i=(r=CI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wc.warn(a.join(" "));return}Vt(new Mt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t){Vt(new Mt("platform-logger",e=>new Z_(e),"PRIVATE")),ot(vc,bm,t),ot(vc,bm,"esm2017"),ot("fire-js","")}NI("");var DI=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},b,Tc=Tc||{},K=DI||self;function ka(){}function Sc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Is(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function bI(t){return Object.prototype.hasOwnProperty.call(t,_c)&&t[_c]||(t[_c]=++PI)}var _c="closure_uid_"+(1e9*Math.random()>>>0),PI=0;function OI(t,e,n){return t.call.apply(t.bind,arguments)}function LI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Pe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pe=OI:Pe=LI,Pe.apply(null,arguments)}function Ca(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Oe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function xn(){this.s=this.s,this.o=this.o}var MI=0,$I={};xn.prototype.s=!1;xn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),MI!=0)){var t=bI(this);delete $I[t]}};xn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Om=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Lm=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function UI(t){e:{var e=Rk;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Mm(t){return Array.prototype.concat.apply([],arguments)}function Ic(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function xa(t){return/^[\s\xa0]*$/.test(t)}var $m=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Je(t,e){return t.indexOf(e)!=-1}function kc(t,e){return t<e?-1:t>e?1:0}var Ze;e:{var Um=K.navigator;if(Um){var Fm=Um.userAgent;if(Fm){Ze=Fm;break e}}Ze=""}function Cc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function jm(t){const e={};for(const n in t)e[n]=t[n];return e}var Vm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bm(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Vm.length;s++)n=Vm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function xc(t){return xc[" "](t),t}xc[" "]=ka;function FI(t){var e=BI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var jI=Je(Ze,"Opera"),si=Je(Ze,"Trident")||Je(Ze,"MSIE"),zm=Je(Ze,"Edge"),Ac=zm||si,qm=Je(Ze,"Gecko")&&!(Je(Ze.toLowerCase(),"webkit")&&!Je(Ze,"Edge"))&&!(Je(Ze,"Trident")||Je(Ze,"MSIE"))&&!Je(Ze,"Edge"),VI=Je(Ze.toLowerCase(),"webkit")&&!Je(Ze,"Edge");function Hm(){var t=K.document;return t?t.documentMode:void 0}var Aa;e:{var Rc="",Nc=function(){var t=Ze;if(qm)return/rv:([^\);]+)(\)|;)/.exec(t);if(zm)return/Edge\/([\d\.]+)/.exec(t);if(si)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(VI)return/WebKit\/(\S+)/.exec(t);if(jI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nc&&(Rc=Nc?Nc[1]:""),si){var Dc=Hm();if(Dc!=null&&Dc>parseFloat(Rc)){Aa=String(Dc);break e}}Aa=Rc}var BI={};function zI(){return FI(function(){let t=0;const e=$m(String(Aa)).split("."),n=$m("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=kc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||kc(i[2].length==0,s[2].length==0)||kc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var bc;if(K.document&&si){var Km=Hm();bc=Km||parseInt(Aa,10)||void 0}else bc=void 0;var qI=bc,HI=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",ka,e),K.removeEventListener("test",ka,e)}catch{}return t}();function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};function ks(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qm){e:{try{xc(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:KI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ks.Z.h.call(this)}}Oe(ks,ze);var KI={2:"touch",3:"pen",4:"mouse"};ks.prototype.h=function(){ks.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Cs="closure_listenable_"+(1e6*Math.random()|0),WI=0;function GI(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++WI,this.ca=this.fa=!1}function Ra(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Na(t){this.src=t,this.g={},this.h=0}Na.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Oc(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new GI(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Pc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Om(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ra(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Oc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Lc="closure_lm_"+(1e6*Math.random()|0),Mc={};function Wm(t,e,n,r,i){if(r&&r.once)return Ym(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Wm(t,e[s],n,r,i);return null}return n=jc(n),t&&t[Cs]?t.N(e,n,Is(r)?!!r.capture:!!r,i):Gm(t,e,n,!1,r,i)}function Gm(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Is(i)?!!i.capture:!!i,a=Uc(t);if(a||(t[Lc]=a=new Na(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=YI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)HI||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Xm(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function YI(){function t(n){return e.call(t.src,t.listener,n)}var e=QI;return t}function Ym(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ym(t,e[s],n,r,i);return null}return n=jc(n),t&&t[Cs]?t.O(e,n,Is(r)?!!r.capture:!!r,i):Gm(t,e,n,!0,r,i)}function Qm(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Qm(t,e[s],n,r,i);else r=Is(r)?!!r.capture:!!r,n=jc(n),t&&t[Cs]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Oc(s,n,r,i),-1<n&&(Ra(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Uc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Oc(e,n,r,i)),(n=-1<t?e[t]:null)&&$c(n))}function $c(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Cs])Pc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Xm(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Uc(e))?(Pc(n,t),n.h==0&&(n.src=null,e[Lc]=null)):Ra(t)}}}function Xm(t){return t in Mc?Mc[t]:Mc[t]="on"+t}function QI(t,e){if(t.ca)t=!0;else{e=new ks(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&$c(t),t=n.call(r,e)}return t}function Uc(t){return t=t[Lc],t instanceof Na?t:null}var Fc="__closure_events_fn_"+(1e9*Math.random()>>>0);function jc(t){return typeof t=="function"?t:(t[Fc]||(t[Fc]=function(e){return t.handleEvent(e)}),t[Fc])}function Ae(){xn.call(this),this.i=new Na(this),this.P=this,this.I=null}Oe(Ae,xn);Ae.prototype[Cs]=!0;Ae.prototype.removeEventListener=function(t,e,n,r){Qm(this,t,e,n,r)};function Le(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var i=e;e=new ze(r,t),Bm(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Da(o,r,!0,e)&&i}if(o=e.g=t,i=Da(o,r,!0,e)&&i,i=Da(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Da(o,r,!1,e)&&i}Ae.prototype.M=function(){if(Ae.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ra(n[r]);delete t.g[e],t.h--}}this.I=null};Ae.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ae.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Da(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Pc(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Vc=K.JSON.stringify;function XI(){var t=Zm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class JI{constructor(){this.h=this.g=null}add(e,n){const r=Jm.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Jm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new ZI,t=>t.reset());class ZI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ek(t){K.setTimeout(()=>{throw t},0)}function Bc(t,e){zc||tk(),qc||(zc(),qc=!0),Zm.add(t,e)}var zc;function tk(){var t=K.Promise.resolve(void 0);zc=function(){t.then(nk)}}var qc=!1,Zm=new JI;function nk(){for(var t;t=XI();){try{t.h.call(t.g)}catch(n){ek(n)}var e=Jm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qc=!1}function ba(t,e){Ae.call(this),this.h=t||1,this.g=e||K,this.j=Pe(this.kb,this),this.l=Date.now()}Oe(ba,Ae);b=ba.prototype;b.da=!1;b.S=null;b.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Le(this,"tick"),this.da&&(Hc(this),this.start()))}};b.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Hc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}b.M=function(){ba.Z.M.call(this),Hc(this),delete this.g};function Kc(t,e,n){if(typeof t=="function")n&&(t=Pe(t,n));else if(t&&typeof t.handleEvent=="function")t=Pe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function eg(t){t.g=Kc(()=>{t.g=null,t.i&&(t.i=!1,eg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class rk extends xn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:eg(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xs(t){xn.call(this),this.h=t,this.g={}}Oe(xs,xn);var tg=[];function ng(t,e,n,r){Array.isArray(n)||(n&&(tg[0]=n.toString()),n=tg);for(var i=0;i<n.length;i++){var s=Wm(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function rg(t){Cc(t.g,function(e,n){this.g.hasOwnProperty(n)&&$c(e)},t),t.g={}}xs.prototype.M=function(){xs.Z.M.call(this),rg(this)};xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pa(){this.g=!0}Pa.prototype.Aa=function(){this.g=!1};function ik(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function sk(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function oi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ak(t,n)+(r?" "+r:"")})}function ok(t,e){t.info(function(){return"TIMEOUT: "+e})}Pa.prototype.info=function(){};function ak(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Vc(n)}catch{return e}}var gr={},ig=null;function Oa(){return ig=ig||new Ae}gr.Ma="serverreachability";function sg(t){ze.call(this,gr.Ma,t)}Oe(sg,ze);function As(t){const e=Oa();Le(e,new sg(e,t))}gr.STAT_EVENT="statevent";function og(t,e){ze.call(this,gr.STAT_EVENT,t),this.stat=e}Oe(og,ze);function et(t){const e=Oa();Le(e,new og(e,t))}gr.Na="timingevent";function ag(t,e){ze.call(this,gr.Na,t),this.size=e}Oe(ag,ze);function Rs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var La={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ug={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Wc(){}Wc.prototype.h=null;function lg(t){return t.h||(t.h=t.i())}function cg(){}var Ns={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Gc(){ze.call(this,"d")}Oe(Gc,ze);function Yc(){ze.call(this,"c")}Oe(Yc,ze);var Qc;function Ma(){}Oe(Ma,Wc);Ma.prototype.g=function(){return new XMLHttpRequest};Ma.prototype.i=function(){return{}};Qc=new Ma;function Ds(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new xs(this),this.P=uk,t=Ac?125:void 0,this.W=new ba(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new hg}function hg(){this.i=null,this.g="",this.h=!1}var uk=45e3,Xc={},$a={};b=Ds.prototype;b.setTimeout=function(t){this.P=t};function Jc(t,e,n){t.K=1,t.v=Ba(on(e)),t.s=n,t.U=!0,dg(t,null)}function dg(t,e){t.F=Date.now(),bs(t),t.A=on(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Tg(n.h,"t",r),t.C=0,n=t.l.H,t.h=new hg,t.g=qg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new rk(Pe(t.Ia,t,t.g),t.O)),ng(t.V,t.g,"readystatechange",t.gb),e=t.H?jm(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),As(1),ik(t.j,t.u,t.A,t.m,t.X,t.s)}b.gb=function(t){t=t.target;const e=this.L;e&&an(t)==3?e.l():this.Ia(t)};b.Ia=function(t){try{if(t==this.g)e:{const c=an(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Ac||this.g&&(this.h.h||this.g.ga()||Pg(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?As(3):As(2)),Ua(this);var n=this.g.ba();this.N=n;t:if(fg(this)){var r=Pg(this.g);t="";var i=r.length,s=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){yr(this),Ps(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,sk(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xa(a)){var l=a;break t}}l=null}if(n=l)oi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Zc(this,n);else{this.i=!1,this.o=3,et(12),yr(this),Ps(this);break e}}this.U?(pg(this,c,o),Ac&&this.i&&c==3&&(ng(this.V,this.W,"tick",this.fb),this.W.start())):(oi(this.j,this.m,o,null),Zc(this,o)),c==4&&yr(this),this.i&&!this.I&&(c==4?jg(this.l,this):(this.i=!1,bs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),yr(this),Ps(this)}}}catch{}finally{}};function fg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function pg(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=lk(t,n),i==$a){e==4&&(t.o=4,et(14),r=!1),oi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Xc){t.o=4,et(15),oi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else oi(t.j,t.m,i,null),Zc(t,i);fg(t)&&i!=$a&&i!=Xc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,et(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ch(e),e.L=!0,et(11))):(oi(t.j,t.m,n,"[Invalid Chunked Response]"),yr(t),Ps(t))}b.fb=function(){if(this.g){var t=an(this.g),e=this.g.ga();this.C<e.length&&(Ua(this),pg(this,t,e),this.i&&t!=4&&bs(this))}};function lk(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?$a:(n=Number(e.substring(n,r)),isNaN(n)?Xc:(r+=1,r+n>e.length?$a:(e=e.substr(r,n),t.C=r+n,e)))}b.cancel=function(){this.I=!0,yr(this)};function bs(t){t.Y=Date.now()+t.P,mg(t,t.P)}function mg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Rs(Pe(t.eb,t),e)}function Ua(t){t.B&&(K.clearTimeout(t.B),t.B=null)}b.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ok(this.j,this.A),this.K!=2&&(As(3),et(17)),yr(this),this.o=2,Ps(this)):mg(this,this.Y-t)};function Ps(t){t.l.G==0||t.I||jg(t.l,t)}function yr(t){Ua(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Hc(t.W),rg(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Zc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||nh(n.i,t))){if(n.I=t.N,!t.J&&nh(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ga(n),Ka(n);else break e;lh(n),et(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Rs(Pe(n.ab,n),6e3));if(1>=Ig(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Er(n,11)}else if((t.J||n.g==t)&&Ga(n),!xa(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const c=l[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;!s.g&&(Je(y,"spdy")||Je(y,"quic")||Je(y,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(rh(s,s.h),s.h=null))}if(r.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.sa=E,de(r.F,r.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=zg(r,r.H?r.la:null,r.W),o.J){kg(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(Ua(a),bs(a)),r.g=o}else Ug(r);0<n.l.length&&Wa(n)}else l[0]!="stop"&&l[0]!="close"||Er(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Er(n,7):ah(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}As(4)}catch{}}function ck(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Sc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function eh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Sc(t)||typeof t=="string")Lm(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Sc(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=ck(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function ai(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ai)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}b=ai.prototype;b.R=function(){th(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};b.T=function(){return th(this),this.g.concat()};function th(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];vr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],vr(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}b.get=function(t,e){return vr(this.h,t)?this.h[t]:e};b.set=function(t,e){vr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};b.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function vr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var gg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function hk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function wr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof wr){this.g=e!==void 0?e:t.g,Fa(this,t.j),this.s=t.s,ja(this,t.i),Va(this,t.m),this.l=t.l,e=t.h;var n=new Ms;n.i=e.i,e.g&&(n.g=new ai(e.g),n.h=e.h),yg(this,n),this.o=t.o}else t&&(n=String(t).match(gg))?(this.g=!!e,Fa(this,n[1]||"",!0),this.s=Os(n[2]||""),ja(this,n[3]||"",!0),Va(this,n[4]),this.l=Os(n[5]||"",!0),yg(this,n[6]||"",!0),this.o=Os(n[7]||"")):(this.g=!!e,this.h=new Ms(null,this.g))}wr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ls(e,vg,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ls(e,vg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ls(n,n.charAt(0)=="/"?gk:mk,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ls(n,vk)),t.join("")};function on(t){return new wr(t)}function Fa(t,e,n){t.j=n?Os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ja(t,e,n){t.i=n?Os(e,!0):e}function Va(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function yg(t,e,n){e instanceof Ms?(t.h=e,wk(t.h,t.g)):(n||(e=Ls(e,yk)),t.h=new Ms(e,t.g))}function de(t,e,n){t.h.set(e,n)}function Ba(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function dk(t){return t instanceof wr?on(t):new wr(t,void 0)}function fk(t,e,n,r){var i=new wr(null,void 0);return t&&Fa(i,t),e&&ja(i,e),n&&Va(i,n),r&&(i.l=r),i}function Os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ls(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,pk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function pk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var vg=/[#\/\?@]/g,mk=/[#\?:]/g,gk=/[#\?]/g,yk=/[#\?@]/g,vk=/#/g;function Ms(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function An(t){t.g||(t.g=new ai,t.h=0,t.i&&hk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=Ms.prototype;b.add=function(t,e){An(this),this.i=null,t=ui(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wg(t,e){An(t),e=ui(t,e),vr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,vr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&th(t)))}function Eg(t,e){return An(t),e=ui(t,e),vr(t.g.h,e)}b.forEach=function(t,e){An(this),this.g.forEach(function(n,r){Lm(n,function(i){t.call(e,i,r,this)},this)},this)};b.T=function(){An(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};b.R=function(t){An(this);var e=[];if(typeof t=="string")Eg(this,t)&&(e=Mm(e,this.g.get(ui(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Mm(e,t[n])}return e};b.set=function(t,e){return An(this),this.i=null,t=ui(this,t),Eg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Tg(t,e,n){wg(t,e),0<n.length&&(t.i=null,t.g.set(ui(t,e),Ic(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function ui(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wk(t,e){e&&!t.j&&(An(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(wg(this,r),Tg(this,i,n))},t)),t.j=e}var Ek=class{constructor(t,e){this.h=t,this.g=e}};function Sg(t){this.l=t||Tk,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ea&&K.g.Ea()&&K.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Tk=10;function _g(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ig(t){return t.h?1:t.g?t.g.size:0}function nh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function rh(t,e){t.g?t.g.add(e):t.h=e}function kg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Sg.prototype.cancel=function(){if(this.i=Cg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Cg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ic(t.i)}function ih(){}ih.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};ih.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function Sk(){this.g=new ih}function _k(t,e,n){const r=n||"";try{eh(t,function(i,s){let o=i;Is(i)&&(o=Vc(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Ik(t,e){const n=new Pa;if(K.Image){const r=new Image;r.onload=Ca(za,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ca(za,n,r,"TestLoadImage: error",!1,e),r.onabort=Ca(za,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ca(za,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function za(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function $s(t){this.l=t.$b||null,this.j=t.ib||!1}Oe($s,Wc);$s.prototype.g=function(){return new qa(this.l,this.j)};$s.prototype.i=function(t){return function(){return t}}({});function qa(t,e){Ae.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=sh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Oe(qa,Ae);var sh=0;b=qa.prototype;b.open=function(t,e){if(this.readyState!=sh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fs(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=sh};b.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fs(this)),this.g&&(this.readyState=3,Fs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof K.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function xg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}b.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Us(this):Fs(this),this.readyState==3&&xg(this)}};b.Ua=function(t){this.g&&(this.response=this.responseText=t,Us(this))};b.Ta=function(t){this.g&&(this.response=t,Us(this))};b.ha=function(){this.g&&Us(this)};function Us(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fs(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Fs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var kk=K.JSON.parse;function Ie(t){Ae.call(this),this.headers=new ai,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ag,this.K=this.L=!1}Oe(Ie,Ae);var Ag="",Ck=/^https?$/i,xk=["POST","PUT"];b=Ie.prototype;b.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qc.g(),this.C=this.u?lg(this.u):lg(Qc),this.g.onreadystatechange=Pe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Rg(this,s);return}t=n||"";const i=new ai(this.headers);r&&eh(r,function(s,o){i.set(o,s)}),r=UI(i.T()),n=K.FormData&&t instanceof K.FormData,!(0<=Om(xk,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{bg(this),0<this.B&&((this.K=Ak(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.pa,this)):this.A=Kc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Rg(this,s)}};function Ak(t){return si&&zI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Rk(t){return t.toLowerCase()=="content-type"}b.pa=function(){typeof Tc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Le(this,"timeout"),this.abort(8))};function Rg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ng(t),Ha(t)}function Ng(t){t.D||(t.D=!0,Le(t,"complete"),Le(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Le(this,"complete"),Le(this,"abort"),Ha(this))};b.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ha(this,!0)),Ie.Z.M.call(this)};b.Fa=function(){this.s||(this.F||this.v||this.l?Dg(this):this.cb())};b.cb=function(){Dg(this)};function Dg(t){if(t.h&&typeof Tc!="undefined"&&(!t.C[1]||an(t)!=4||t.ba()!=2)){if(t.v&&an(t)==4)Kc(t.Fa,0,t);else if(Le(t,"readystatechange"),an(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(gg)[1]||null;if(!i&&K.self&&K.self.location){var s=K.self.location.protocol;i=s.substr(0,s.length-1)}r=!Ck.test(i?i.toLowerCase():"")}n=r}if(n)Le(t,"complete"),Le(t,"success");else{t.m=6;try{var o=2<an(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Ng(t)}}finally{Ha(t)}}}}function Ha(t,e){if(t.g){bg(t);const n=t.g,r=t.C[0]?ka:null;t.g=null,t.C=null,e||Le(t,"ready");try{n.onreadystatechange=r}catch{}}}function bg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function an(t){return t.g?t.g.readyState:0}b.ba=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}};b.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),kk(e)}};function Pg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ag:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}b.Da=function(){return this.m};b.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Nk(t){let e="";return Cc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function oh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Nk(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function js(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Og(t){this.za=0,this.l=[],this.h=new Pa,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=js("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=js("baseRetryDelayMs",5e3,t),this.$a=js("retryDelaySeedMs",1e4,t),this.Ya=js("forwardChannelMaxRetries",2,t),this.ra=js("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Sg(t&&t.concurrentRequestLimit),this.Ca=new Sk,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}b=Og.prototype;b.ma=8;b.G=1;function ah(t){if(Lg(t),t.G==3){var e=t.V++,n=on(t.F);de(n,"SID",t.J),de(n,"RID",e),de(n,"TYPE","terminate"),Vs(t,n),e=new Ds(t,t.h,e,void 0),e.K=2,e.v=Ba(on(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=qg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),bs(e)}Bg(t)}b.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ka(t){t.g&&(ch(t),t.g.cancel(),t.g=null)}function Lg(t){Ka(t),t.u&&(K.clearTimeout(t.u),t.u=null),Ga(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function uh(t,e){t.l.push(new Ek(t.Za++,e)),t.G==3&&Wa(t)}function Wa(t){_g(t.i)||t.m||(t.m=!0,Bc(t.Ha,t),t.C=0)}function Dk(t,e){return Ig(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Rs(Pe(t.Ha,t,e),Vg(t,t.C)),t.C++,!0)}b.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ds(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=jm(s),Bm(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$g(this,i,e),n=on(this.F),de(n,"RID",t),de(n,"CVER",22),this.D&&de(n,"X-HTTP-Session-Id",this.D),Vs(this,n),this.o&&s&&oh(n,this.o,s),rh(this.i,i),this.Ra&&de(n,"TYPE","init"),this.ja?(de(n,"$req",e),de(n,"SID","null"),i.$=!0,Jc(i,n,null)):Jc(i,n,e),this.G=2}}else this.G==3&&(t?Mg(this,t):this.l.length==0||_g(this.i)||Mg(this))};function Mg(t,e){var n;e?n=e.m:n=t.V++;const r=on(t.F);de(r,"SID",t.J),de(r,"RID",n),de(r,"AID",t.U),Vs(t,r),t.o&&t.s&&oh(r,t.o,t.s),n=new Ds(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=$g(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),rh(t.i,n),Jc(n,r,e)}function Vs(t,e){t.j&&eh({},function(n,r){de(e,r,n)})}function $g(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Pe(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{_k(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Ug(t){t.g||t.u||(t.Y=1,Bc(t.Ga,t),t.A=0)}function lh(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Rs(Pe(t.Ga,t),Vg(t,t.A)),t.A++,!0)}b.Ga=function(){if(this.u=null,Fg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Rs(Pe(this.bb,this),t)}};b.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,et(10),Ka(this),Fg(this))};function ch(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function Fg(t){t.g=new Ds(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=on(t.oa);de(e,"RID","rpc"),de(e,"SID",t.J),de(e,"CI",t.N?"0":"1"),de(e,"AID",t.U),Vs(t,e),de(e,"TYPE","xmlhttp"),t.o&&t.s&&oh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ba(on(e)),n.s=null,n.U=!0,dg(n,t)}b.ab=function(){this.v!=null&&(this.v=null,Ka(this),lh(this),et(19))};function Ga(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function jg(t,e){var n=null;if(t.g==e){Ga(t),ch(t),t.g=null;var r=2}else if(nh(t.i,e))n=e.D,kg(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Oa(),Le(r,new ag(r,n,e,i)),Wa(t)}else Ug(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&Dk(t,e)||r==2&&lh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Er(t,5);break;case 4:Er(t,10);break;case 3:Er(t,6);break;default:Er(t,2)}}}function Vg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Er(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Pe(t.jb,t);n||(n=new wr("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Fa(n,"https"),Ba(n)),Ik(n.toString(),r)}else et(2);t.G=0,t.j&&t.j.va(e),Bg(t),Lg(t)}b.jb=function(t){t?(this.h.info("Successfully pinged google.com"),et(2)):(this.h.info("Failed to ping google.com"),et(1))};function Bg(t){t.G=0,t.I=-1,t.j&&((Cg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Ic(t.l),t.l.length=0),t.j.ua())}function zg(t,e,n){let r=dk(n);if(r.i!="")e&&ja(r,e+"."+r.i),Va(r,r.m);else{const i=K.location;r=fk(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Cc(t.aa,function(i,s){de(r,s,i)}),e=t.D,n=t.sa,e&&n&&de(r,e,n),de(r,"VER",t.ma),Vs(t,r),r}function qg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ie(new $s({ib:!0})):new Ie(t.qa),e.L=t.H,e}function Hg(){}b=Hg.prototype;b.xa=function(){};b.wa=function(){};b.va=function(){};b.ua=function(){};b.Oa=function(){};function Ya(){if(si&&!(10<=Number(qI)))throw Error("Environmental error: no available transport.")}Ya.prototype.g=function(t,e){return new wt(t,e)};function wt(t,e){Ae.call(this),this.g=new Og(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!xa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new li(this)}Oe(wt,Ae);wt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Bc(Pe(t.hb,t,e))),et(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=zg(t,null,t.W),Wa(t)};wt.prototype.close=function(){ah(this.g)};wt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,uh(this.g,e)}else this.v?(e={},e.__data__=Vc(t),uh(this.g,e)):uh(this.g,t)};wt.prototype.M=function(){this.g.j=null,delete this.j,ah(this.g),delete this.g,wt.Z.M.call(this)};function Kg(t){Gc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Oe(Kg,Gc);function Wg(){Yc.call(this),this.status=1}Oe(Wg,Yc);function li(t){this.g=t}Oe(li,Hg);li.prototype.xa=function(){Le(this.g,"a")};li.prototype.wa=function(t){Le(this.g,new Kg(t))};li.prototype.va=function(t){Le(this.g,new Wg(t))};li.prototype.ua=function(){Le(this.g,"b")};Ya.prototype.createWebChannel=Ya.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;La.NO_ERROR=0;La.TIMEOUT=8;La.HTTP_ERROR=6;ug.COMPLETE="complete";cg.EventType=Ns;Ns.OPEN="a";Ns.CLOSE="b";Ns.ERROR="c";Ns.MESSAGE="d";Ae.prototype.listen=Ae.prototype.N;Ie.prototype.listenOnce=Ie.prototype.O;Ie.prototype.getLastError=Ie.prototype.La;Ie.prototype.getLastErrorCode=Ie.prototype.Da;Ie.prototype.getStatus=Ie.prototype.ba;Ie.prototype.getResponseJson=Ie.prototype.Qa;Ie.prototype.getResponseText=Ie.prototype.ga;Ie.prototype.send=Ie.prototype.ea;var bk=function(){return new Ya},Pk=function(){return Oa()},hh=La,Ok=ug,Lk=gr,Gg={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mk=$s,Qa=cg,$k=Ie;const Yg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci="9.6.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new yc("@firebase/firestore");function dh(){return Tr.logLevel}function C(t,...e){if(Tr.logLevel<=ne.DEBUG){const n=e.map(fh);Tr.debug(`Firestore (${ci}): ${t}`,...n)}}function ut(t,...e){if(Tr.logLevel<=ne.ERROR){const n=e.map(fh);Tr.error(`Firestore (${ci}): ${t}`,...n)}}function Qg(t,...e){if(Tr.logLevel<=ne.WARN){const n=e.map(fh);Tr.warn(`Firestore (${ci}): ${t}`,...n)}}function fh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${ci}) INTERNAL ASSERTION FAILED: `+t;throw ut(e),new Error(e)}function G(t,e){t||z()}function W(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class jk{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new Uk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new at(e)}}class Vk{constructor(e,n,r){this.type="FirstParty",this.user=at.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class Bk{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new Vk(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qk{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=i=>{e.enqueueRetryable(()=>(s=>(s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`),n(s.token)))(i))};const r=i=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(G(typeof n.token=="string"),new zk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.p(r),this.T=r=>n.writeSequenceNumber(r))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t.I=-1;class Xg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Hk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function hi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function Jg(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Me(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ey(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,r){n===void 0?n=0:n>e.length&&z(),r===void 0?r=e.length-n:r>e.length-n&&z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends Bs{construct(e,n,r){return new ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const Kk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends Bs{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return Kk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new R(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new R(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new R(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new R(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.fields=e,e.sort(qe.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Re(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Re(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const Wk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(t){if(G(!!t),typeof t=="string"){let e=0;const n=Wk.exec(t);if(G(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fi(t){return typeof t=="string"?Re.fromBase64String(t):Re.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ny(t){const e=t.mapValue.fields.__previous_value__;return ty(e)?ny(e):e}function zs(t){const e=Rn(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t){return t==null}function Xa(t){return t===0&&1/t==-1/0}function Gk(t){return typeof t=="number"&&Number.isInteger(t)&&!Xa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ie.fromString(e))}static fromName(e){return new U(ie.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ie(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ty(t)?4:10:z()}function zt(t,e){if(t===e)return!0;const n=_r(t);if(n!==_r(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zs(t).isEqual(zs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Rn(r.timestampValue),o=Rn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return fi(r.bytesValue).isEqual(fi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ke(r.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(r.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ke(r.integerValue)===ke(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ke(r.doubleValue),o=ke(i.doubleValue);return s===o?Xa(s)===Xa(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return hi(t.arrayValue.values||[],e.arrayValue.values||[],zt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Zg(s)!==Zg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!zt(s[a],o[a])))return!1;return!0}(t,e);default:return z()}}function qs(t,e){return(t.values||[]).find(n=>zt(n,e))!==void 0}function mi(t,e){if(t===e)return 0;const n=_r(t),r=_r(e);if(n!==r)return Z(n,r);switch(n){case 0:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ke(i.integerValue||i.doubleValue),a=ke(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ry(t.timestampValue,e.timestampValue);case 4:return ry(zs(t),zs(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(i,s){const o=fi(i),a=fi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=Z(o[u],a[u]);if(l!==0)return l}return Z(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Z(ke(i.latitude),ke(s.latitude));return o!==0?o:Z(ke(i.longitude),ke(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=mi(o[u],a[u]);if(l)return l}return Z(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=Z(a[c],l[c]);if(h!==0)return h;const d=mi(o[a[c]],u[l[c]]);if(d!==0)return d}return Z(a.length,l.length)}(t.mapValue,e.mapValue);default:throw z()}}function ry(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=Rn(t),r=Rn(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function ph(t){return mh(t)}function mh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Rn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?fi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=mh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${mh(r.fields[a])}`;return s+"}"}(t.mapValue):z();var e,n}function iy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gh(t){return!!t&&"integerValue"in t}function yh(t){return!!t&&"arrayValue"in t}function sy(t){return!!t&&"nullValue"in t}function oy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ja(t){return!!t&&"mapValue"in t}function Hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Sr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ja(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hs(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Hs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ja(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ja(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Sr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new tt(Hs(this.value))}}function ay(t){const e=[];return Sr(t.fields,(n,r)=>{const i=new qe([n]);if(Ja(r)){const s=ay(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new di(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new Ee(e,0,X.min(),tt.empty(),0)}static newFoundDocument(e,n,r){return new Ee(e,1,n,r,0)}static newNoDocument(e,n){return new Ee(e,2,n,tt.empty(),0)}static newUnknownDocument(e,n){return new Ee(e,3,n,tt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.R=null}}function uy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Yk(t,e,n,r,i,s,o)}function Ks(t){const e=W(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xk(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),pi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=tu(e.startAt)),e.endAt&&(n+="|ub:",n+=tu(e.endAt)),e.R=n}return e.R}function Qk(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ph(r.value)}`;var r}).join(", ")}]`),pi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+tu(t.startAt)),t.endAt&&(e+=", endAt: "+tu(t.endAt)),`Target(${e})`}function Za(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!sC(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!zt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hy(t.startAt,e.startAt)&&hy(t.endAt,e.endAt)}function eu(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class nt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,r):new Jk(e,n,r):n==="array-contains"?new tC(e,r):n==="in"?new nC(e,r):n==="not-in"?new rC(e,r):n==="array-contains-any"?new iC(e,r):new nt(e,n,r)}static P(e,n,r){return n==="in"?new Zk(e,r):new eC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(mi(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.v(mi(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Xk(t){return t.field.canonicalString()+t.op.toString()+ph(t.value)}class Jk extends nt{constructor(e,n,r){super(e,n,r),this.key=U.fromName(r.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.v(n)}}class Zk extends nt{constructor(e,n){super(e,"in",n),this.keys=ly("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class eC extends nt{constructor(e,n){super(e,"not-in",n),this.keys=ly("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ly(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>U.fromName(r.referenceValue))}class tC extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yh(n)&&qs(n.arrayValue,this.value)}}class nC extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qs(this.value.arrayValue,n)}}class rC extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qs(this.value.arrayValue,n)}}class iC extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>qs(this.value.arrayValue,r))}}class vh{constructor(e,n){this.position=e,this.before=n}}function tu(t){return`${t.before?"b":"a"}:${t.position.map(e=>ph(e)).join(",")}`}class gi{constructor(e,n="asc"){this.field=e,this.dir=n}}function sC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function cy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),n.key):r=mi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function hy(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.S=null,this.D=null,this.startAt,this.endAt}}function oC(t,e,n,r,i,s,o,a){return new yi(t,e,n,r,i,s,o,a)}function nu(t){return new yi(t)}function ru(t){return!pi(t.limit)&&t.limitType==="F"}function iu(t){return!pi(t.limit)&&t.limitType==="L"}function wh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Eh(t){for(const e of t.filters)if(e.V())return e.field;return null}function dy(t){return t.collectionGroup!==null}function Ws(t){const e=W(t);if(e.S===null){e.S=[];const n=Eh(e),r=wh(e);if(n!==null&&r===null)n.isKeyField()||e.S.push(new gi(n)),e.S.push(new gi(qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.S.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new gi(qe.keyField(),s))}}}return e.S}function un(t){const e=W(t);if(!e.D)if(e.limitType==="F")e.D=uy(e.path,e.collectionGroup,Ws(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ws(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new gi(s.field,o))}const r=e.endAt?new vh(e.endAt.position,!e.endAt.before):null,i=e.startAt?new vh(e.startAt.position,!e.startAt.before):null;e.D=uy(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.D}function fy(t,e,n){return new yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function su(t,e){return Za(un(t),un(e))&&t.limitType===e.limitType}function py(t){return`${Ks(un(t))}|lt:${t.limitType}`}function Th(t){return`Query(target=${Qk(un(t))}; limitType=${t.limitType})`}function Gs(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):U.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!cy(n.startAt,Ws(n),r)||n.endAt&&cy(n.endAt,Ws(n),r))}(t,e)}function my(t){return(e,n)=>{let r=!1;for(const i of Ws(t)){const s=aC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function aC(t,e,n){const r=t.field.isKeyField()?U.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?mi(a,u):z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xa(e)?"-0":e}}function yy(t){return{integerValue:""+t}}function uC(t,e){return Gk(e)?yy(e):gy(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this._=void 0}}function lC(t,e,n){return t instanceof vi?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof wi?wy(t,e):t instanceof Ei?Ey(t,e):function(r,i){const s=vy(r,i),o=Ty(s)+Ty(r.N);return gh(s)&&gh(r.N)?yy(o):gy(r.k,o)}(t,e)}function cC(t,e,n){return t instanceof wi?wy(t,e):t instanceof Ei?Ey(t,e):n}function vy(t,e){return t instanceof Ys?gh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class vi extends ou{}class wi extends ou{constructor(e){super(),this.elements=e}}function wy(t,e){const n=Sy(e);for(const r of t.elements)n.some(i=>zt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ei extends ou{constructor(e){super(),this.elements=e}}function Ey(t,e){let n=Sy(e);for(const r of t.elements)n=n.filter(i=>!zt(i,r));return{arrayValue:{values:n}}}class Ys extends ou{constructor(e,n){super(),this.k=e,this.N=n}}function Ty(t){return ke(t.integerValue||t.doubleValue)}function Sy(t){return yh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n){this.field=e,this.transform=n}}function hC(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof wi&&r instanceof wi||n instanceof Ei&&r instanceof Ei?hi(n.elements,r.elements,zt):n instanceof Ys&&r instanceof Ys?zt(n.N,r.N):n instanceof vi&&r instanceof vi}(t.transform,e.transform)}class dC{constructor(e,n){this.version=e,this.transformResults=n}}class xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xt}static exists(e){return new xt(void 0,e)}static updateTime(e){return new xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function au(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uu{}function fC(t,e,n){t instanceof Qs?function(r,i,s){const o=r.value.clone(),a=xy(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Nn?function(r,i,s){if(!au(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=xy(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Cy(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Sh(t,e,n){t instanceof Qs?function(r,i,s){if(!au(r.precondition,i))return;const o=r.value.clone(),a=Ay(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(ky(i),o).setHasLocalMutations()}(t,e,n):t instanceof Nn?function(r,i,s){if(!au(r.precondition,i))return;const o=Ay(r.fieldTransforms,s,i),a=i.data;a.setAll(Cy(r)),a.setAll(o),i.convertToFoundDocument(ky(i),a).setHasLocalMutations()}(t,e,n):function(r,i){au(r.precondition,i)&&i.convertToNoDocument(X.min())}(t,e)}function pC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=vy(r.transform,i||null);s!=null&&(n==null&&(n=tt.empty()),n.set(r.field,s))}return n||null}function Iy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&hi(n,r,(i,s)=>hC(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ky(t){return t.isFoundDocument()?t.version:X.min()}class Qs extends uu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class Nn extends uu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Cy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xy(t,e,n){const r=new Map;G(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,cC(o,a,n[i]))}return r}function Ay(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,lC(s,o,e))}return r}class _h extends uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Ry extends uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ee;function gC(t){switch(t){default:return z();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Ny(t){if(t===void 0)return ut("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ce.OK:return T.OK;case Ce.CANCELLED:return T.CANCELLED;case Ce.UNKNOWN:return T.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return T.INTERNAL;case Ce.UNAVAILABLE:return T.UNAVAILABLE;case Ce.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ce.NOT_FOUND:return T.NOT_FOUND;case Ce.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ce.ABORTED:return T.ABORTED;case Ce.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ce.DATA_LOSS:return T.DATA_LOSS;default:return z()}}(ee=Ce||(Ce={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lu(this.root,e,this.comparator,!1)}getReverseIterator(){return new lu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lu(this.root,e,this.comparator,!0)}}class lu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ue.RED,this.left=i!=null?i:Ue.EMPTY,this.right=s!=null?s:Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dy(this.data.getIterator())}getIteratorFrom(e){return new Dy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pe(this.comparator);return n.data=e,n}}class Dy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=new $e(U.comparator);function qt(){return yC}const vC=new $e(U.comparator);function Ih(){return vC}const wC=new $e(U.comparator);function EC(){return wC}const TC=new pe(U.comparator);function ae(...t){let e=TC;for(const n of t)e=e.add(n);return e}const SC=new pe(Z);function by(){return SC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Xs.createSynthesizedTargetChangeForCurrentChange(e,n)),new cu(X.min(),r,by(),qt(),ae())}}class Xs{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Xs(Re.EMPTY_BYTE_STRING,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n,r,i){this.$=e,this.removedTargetIds=n,this.key=r,this.O=i}}class Py{constructor(e,n){this.targetId=e,this.M=n}}class Oy{constructor(e,n,r=Re.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ly{constructor(){this.F=0,this.L=$y(),this.B=Re.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=ae(),n=ae(),r=ae();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:z()}}),new Xs(this.B,this.U,e,n,r)}H(){this.q=!1,this.L=$y()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class _C{constructor(e){this.et=e,this.nt=new Map,this.st=qt(),this.it=My(),this.rt=new pe(Z)}ot(e){for(const n of e.$)e.O&&e.O.isFoundDocument()?this.ct(n,e.O):this.at(n,e.key,e.O);for(const n of e.removedTargetIds)this.at(n,e.key,e.O)}ut(e){this.forEachTarget(e,n=>{const r=this.ht(n);switch(e.state){case 0:this.lt(n)&&r.W(e.resumeToken);break;case 1:r.Z(),r.K||r.H(),r.W(e.resumeToken);break;case 2:r.Z(),r.K||this.removeTarget(n);break;case 3:this.lt(n)&&(r.tt(),r.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),r.W(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((r,i)=>{this.lt(i)&&n(i)})}dt(e){const n=e.targetId,r=e.M.count,i=this.wt(n);if(i){const s=i.target;if(eu(s))if(r===0){const o=new U(s.path);this.at(n,o,Ee.newNoDocument(o,X.min()))}else G(r===1);else this._t(n)!==r&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&eu(a.target)){const u=new U(a.target.path);this.st.get(u)!==null||this.yt(o,u)||this.at(o,u,Ee.newNoDocument(u,e))}s.j&&(n.set(o,s.G()),s.H())}});let r=ae();this.it.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.wt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new cu(e,n,this.rt,this.st,r);return this.st=qt(),this.it=My(),this.rt=new pe(Z),i}ct(e,n){if(!this.lt(e))return;const r=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,r),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}at(e,n,r){if(!this.lt(e))return;const i=this.ht(e);this.yt(e,n)?i.J(n,1):i.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),r&&(this.st=this.st.insert(n,r))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new Ly,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new pe(Z),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||C("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new Ly),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function My(){return new $e(U.comparator)}function $y(){return new $e(U.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),kC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class CC{constructor(e,n){this.databaseId=e,this.C=n}}function Js(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Uy(t,e){return t.C?e.toBase64():e.toUint8Array()}function xC(t,e){return Js(t,e.toTimestamp())}function Et(t){return G(!!t),X.fromTimestamp(function(e){const n=Rn(e);return new Me(n.seconds,n.nanos)}(t))}function kh(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Fy(t){const e=ie.fromString(t);return G(Qy(e)),e}function du(t,e){return kh(t.databaseId,e.path)}function Ir(t,e){const n=Fy(e);if(n.get(1)!==t.databaseId.projectId)throw new R(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(Vy(n))}function Ch(t,e){return kh(t.databaseId,e)}function jy(t){const e=Fy(t);return e.length===4?ie.emptyPath():Vy(e)}function xh(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vy(t){return G(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function By(t,e,n){return{name:du(t,e),fields:n.value.mapValue.fields}}function AC(t,e,n){const r=Ir(t,e.name),i=Et(e.updateTime),s=new tt({mapValue:{fields:e.fields}}),o=Ee.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function RC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.C?(G(l===void 0||typeof l=="string"),Re.fromBase64String(l||"")):(G(l===void 0||l instanceof Uint8Array),Re.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?T.UNKNOWN:Ny(u.code);return new R(l,u.message||"")}(o);n=new Oy(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ir(t,r.document.name),s=Et(r.document.updateTime),o=new tt({mapValue:{fields:r.document.fields}}),a=Ee.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new hu(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ir(t,r.document),s=r.readTime?Et(r.readTime):X.min(),o=Ee.newNoDocument(i,s),a=r.removedTargetIds||[];n=new hu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ir(t,r.document),s=r.removedTargetIds||[];n=new hu([],s,i,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new mC(i),o=r.targetId;n=new Py(o,s)}}return n}function Ah(t,e){let n;if(e instanceof Qs)n={update:By(t,e.key,e.value)};else if(e instanceof _h)n={delete:du(t,e.key)};else if(e instanceof Nn)n={update:By(t,e.key,e.data),updateMask:MC(e.fieldMask)};else{if(!(e instanceof Ry))return z();n={verify:du(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof vi)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof wi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ei)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ys)return{fieldPath:s.field.canonicalString(),increment:o.N};throw z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:xC(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(t,e.precondition)),n}function zy(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?xt.updateTime(Et(i.updateTime)):i.exists!==void 0?xt.exists(i.exists):xt.none()}(e.currentDocument):xt.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)G(o.setToServerValue==="REQUEST_TIME"),a=new vi;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new wi(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Ei(l)}else"increment"in o?a=new Ys(s,o.increment):z();const u=qe.fromServerFormat(o.fieldPath);return new _y(u,a)}(t,i)):[];if(e.update){e.update.name;const i=Ir(t,e.update.name),s=new tt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new di(u.map(l=>qe.fromServerFormat(l)))}(e.updateMask);return new Nn(i,s,o,n,r)}return new Qs(i,s,n,r)}if(e.delete){const i=Ir(t,e.delete);return new _h(i,n)}if(e.verify){const i=Ir(t,e.verify);return new Ry(i,n)}return z()}function NC(t,e){return t&&t.length>0?(G(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Et(r.updateTime):Et(i);return s.isEqual(X.min())&&(s=Et(i)),new dC(s,r.transformResults||[])}(n,e))):[]}function qy(t,e){return{documents:[Ch(t,e.path)]}}function Hy(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ch(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ch(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const u=a.map(l=>function(c){if(c.op==="=="){if(oy(c.value))return{unaryFilter:{field:Ti(c.field),op:"IS_NAN"}};if(sy(c.value))return{unaryFilter:{field:Ti(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(oy(c.value))return{unaryFilter:{field:Ti(c.field),op:"IS_NOT_NAN"}};if(sy(c.value))return{unaryFilter:{field:Ti(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ti(c.field),op:PC(c.op),value:c.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(u=>function(l){return{field:Ti(l.field),direction:bC(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,u){return a.C||pi(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Gy(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Gy(e.endAt)),n}function Ky(t){let e=jy(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){G(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=Wy(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new gi(Si(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,pi(h)?null:h}(n.limit));let u=null;n.startAt&&(u=Yy(n.startAt));let l=null;return n.endAt&&(l=Yy(n.endAt)),oC(e,i,o,s,a,"F",u,l)}function DC(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Wy(t){return t?t.unaryFilter!==void 0?[LC(t)]:t.fieldFilter!==void 0?[OC(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Wy(e)).reduce((e,n)=>e.concat(n)):z():[]}function Gy(t){return{before:t.before,values:t.position}}function Yy(t){const e=!!t.before,n=t.values||[];return new vh(n,e)}function bC(t){return IC[t]}function PC(t){return kC[t]}function Ti(t){return{fieldPath:t.canonicalString()}}function Si(t){return qe.fromServerFormat(t.fieldPath)}function OC(t){return nt.create(Si(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}function LC(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Si(t.unaryFilter.field);return nt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Si(t.unaryFilter.field);return nt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Si(t.unaryFilter.field);return nt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Si(t.unaryFilter.field);return nt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return z()}}function MC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Qy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Xy(e)),e=$C(t.get(n),e);return Xy(e)}function $C(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Xy(t){return t+""}function ln(t){const e=t.length;if(G(e>=2),e===2)return G(t.charAt(0)===""&&t.charAt(1)===""),ie.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&z(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:z()}s=o+2}return new ie(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n){this.seconds=e,this.nanoseconds=n}}class Tt{constructor(e,n,r){this.ownerId=e,this.allowTabSynchronization=n,this.leaseTimestampMs=r}}Tt.store="owner",Tt.key="owner";class Dn{constructor(e,n,r){this.userId=e,this.lastAcknowledgedBatchId=n,this.lastStreamToken=r}}Dn.store="mutationQueues",Dn.keyPath="userId";class le{constructor(e,n,r,i,s){this.userId=e,this.batchId=n,this.localWriteTimeMs=r,this.baseMutations=i,this.mutations=s}}le.store="mutations",le.keyPath="batchId",le.userMutationsIndex="userMutationsIndex",le.userMutationsKeyPath=["userId","batchId"];class He{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,n){return[e,Ut(n)]}static key(e,n,r){return[e,Ut(n),r]}}He.store="documentMutations",He.PLACEHOLDER=new He;class FC{constructor(e,n){this.path=e,this.readTime=n}}class jC{constructor(e,n){this.path=e,this.version=n}}class Te{constructor(e,n,r,i,s,o){this.unknownDocument=e,this.noDocument=n,this.document=r,this.hasCommittedMutations=i,this.readTime=s,this.parentPath=o}}Te.store="remoteDocuments",Te.readTimeIndex="readTimeIndex",Te.readTimeIndexPath="readTime",Te.collectionReadTimeIndex="collectionReadTimeIndex",Te.collectionReadTimeIndexPath=["parentPath","readTime"];class Ht{constructor(e){this.byteSize=e}}Ht.store="remoteDocumentGlobal",Ht.key="remoteDocumentGlobalKey";class lt{constructor(e,n,r,i,s,o,a){this.targetId=e,this.canonicalId=n,this.readTime=r,this.resumeToken=i,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=o,this.query=a}}lt.store="targets",lt.keyPath="targetId",lt.queryTargetsIndexName="queryTargetsIndex",lt.queryTargetsKeyPath=["canonicalId","targetId"];class Fe{constructor(e,n,r){this.targetId=e,this.path=n,this.sequenceNumber=r}}Fe.store="targetDocuments",Fe.keyPath=["targetId","path"],Fe.documentTargetsIndex="documentTargetsIndex",Fe.documentTargetsKeyPath=["path","targetId"];class St{constructor(e,n,r,i){this.highestTargetId=e,this.highestListenSequenceNumber=n,this.lastRemoteSnapshotVersion=r,this.targetCount=i}}St.key="targetGlobalKey",St.store="targetGlobal";class kr{constructor(e,n){this.collectionId=e,this.parent=n}}kr.store="collectionParents",kr.keyPath=["collectionId","parent"];class cn{constructor(e,n,r,i){this.clientId=e,this.updateTimeMs=n,this.networkEnabled=r,this.inForeground=i}}cn.store="clientMetadata",cn.keyPath="clientId";class _i{constructor(e,n,r){this.bundleId=e,this.createTime=n,this.version=r}}_i.store="bundles",_i.keyPath="bundleId";class Ii{constructor(e,n,r){this.name=e,this.readTime=n,this.bundledQuery=r}}Ii.store="namedQueries",Ii.keyPath="name";const VC=[Dn.store,le.store,He.store,Te.store,lt.store,Tt.store,St.store,Fe.store,cn.store,Ht.store,kr.store,_i.store,Ii.store],Jy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.It=new Bt,this.transaction.oncomplete=()=>{this.It.resolve()},this.transaction.onabort=()=>{n.error?this.It.reject(new Zs(e,n.error)):this.It.resolve()},this.transaction.onerror=r=>{const i=Rh(r.target.error);this.It.reject(new Zs(e,i))}}static open(e,n,r,i){try{return new fu(n,e.transaction(i,r))}catch(s){throw new Zs(n,s)}}get At(){return this.It.promise}abort(e){e&&this.It.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const n=this.transaction.objectStore(e);return new zC(n)}}class hn{constructor(e,n,r){this.name=e,this.version=n,this.Rt=r,hn.bt(ve())===12.2&&ut("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return C("SimpleDb","Removing database:",e),xr(window.indexedDB.deleteDatabase(e)).toPromise()}static Pt(){if(!Nm())return!1;if(hn.vt())return!0;const e=ve(),n=hn.bt(e),r=0<n&&n<10,i=hn.Vt(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static vt(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.St)==="YES"}static Dt(e,n){return e.store(n)}static bt(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static Vt(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Ct(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Zs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new R(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new R(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Zs(e,o))},i.onupgradeneeded=s=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.Rt.Nt(o,i.transaction,s.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.kt&&(this.db.onversionchange=n=>this.kt(n)),this.db}xt(e){this.kt=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.Ct(e);const a=fu.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).catch(l=>(a.abort(l),S.reject(l))).toPromise();return u.catch(()=>{}),await a.At,u}catch(a){const u=a.name!=="FirebaseError"&&o<3;if(C("SimpleDb","Transaction failed with error:",a.message,"Retrying:",u),this.close(),!u)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class BC{constructor(e){this.$t=e,this.Ot=!1,this.Mt=null}get isDone(){return this.Ot}get Ft(){return this.Mt}set cursor(e){this.$t=e}done(){this.Ot=!0}Lt(e){this.Mt=e}delete(){return xr(this.$t.delete())}}class Zs extends R{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Cr(t){return t.name==="IndexedDbTransactionError"}class zC{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(C("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),xr(r)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),xr(this.store.add(e))}get(e){return xr(this.store.get(e)).next(n=>(n===void 0&&(n=null),C("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),xr(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),xr(this.store.count())}Bt(e,n){const r=this.cursor(this.options(e,n)),i=[];return this.Ut(r,(s,o)=>{i.push(o)}).next(()=>i)}qt(e,n){C("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Kt=!1;const i=this.cursor(r);return this.Ut(i,(s,o,a)=>a.delete())}jt(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.Ut(i,n)}Qt(e){const n=this.cursor({});return new S((r,i)=>{n.onerror=s=>{const o=Rh(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Ut(e,n){const r=[];return new S((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new BC(a),l=n(a.primaryKey,a.value,u);if(l instanceof S){const c=l.catch(h=>(u.done(),S.reject(h)));r.push(c)}u.isDone?i():u.Ft===null?a.continue():a.continue(u.Ft)}}).next(()=>S.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Kt?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function xr(t){return new S((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Rh(r.target.error);n(i)}})}let ev=!1;function Rh(t){const e=hn.bt(ve());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new R("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ev||(ev=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv extends Zy{constructor(e,n){super(),this.Wt=e,this.currentSequenceNumber=n}}function ct(t,e){const n=W(t);return hn.Dt(n.Wt,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&fC(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Sh(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Sh(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(X.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&hi(this.mutations,e.mutations,(n,r)=>Iy(n,r))&&hi(this.baseMutations,e.baseMutations,(n,r)=>Iy(n,r))}}class Dh{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){G(e.mutations.length===r.length);let i=EC();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Dh(e,n,r,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n,r,i,s=X.min(),o=X.min(),a=Re.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.Gt=e}}function rv(t,e){if(e.document)return AC(t.Gt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const n=U.fromSegments(e.noDocument.path),r=Ci(e.noDocument.readTime),i=Ee.newNoDocument(n,r);return e.hasCommittedMutations?i.setHasCommittedMutations():i}if(e.unknownDocument){const n=U.fromSegments(e.unknownDocument.path),r=Ci(e.unknownDocument.version);return Ee.newUnknownDocument(n,r)}return z()}function iv(t,e,n){const r=sv(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const s=function(a,u){return{name:du(a,u.key),fields:u.data.value.mapValue.fields,updateTime:Js(a,u.version.toTimestamp())}}(t.Gt,e),o=e.hasCommittedMutations;return new Te(null,null,s,o,r,i)}if(e.isNoDocument()){const s=e.key.path.toArray(),o=ki(e.version),a=e.hasCommittedMutations;return new Te(null,new FC(s,o),null,a,r,i)}if(e.isUnknownDocument()){const s=e.key.path.toArray(),o=ki(e.version);return new Te(new jC(s,o),null,null,!0,r,i)}return z()}function sv(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function qC(t){const e=new Me(t[0],t[1]);return X.fromTimestamp(e)}function ki(t){const e=t.toTimestamp();return new UC(e.seconds,e.nanoseconds)}function Ci(t){const e=new Me(t.seconds,t.nanoseconds);return X.fromTimestamp(e)}function xi(t,e){const n=(e.baseMutations||[]).map(s=>zy(t.Gt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>zy(t.Gt,s)),i=Me.fromMillis(e.localWriteTimeMs);return new Nh(e.batchId,i,n,r)}function eo(t){const e=Ci(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ci(t.lastLimboFreeSnapshotVersion):X.min();let r;var i;return t.query.documents!==void 0?(G((i=t.query).documents.length===1),r=un(nu(jy(i.documents[0])))):r=function(s){return un(Ky(s))}(t.query),new bn(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Re.fromBase64String(t.resumeToken))}function ov(t,e){const n=ki(e.snapshotVersion),r=ki(e.lastLimboFreeSnapshotVersion);let i;i=eu(e.target)?qy(t.Gt,e.target):Hy(t.Gt,e.target);const s=e.resumeToken.toBase64();return new lt(e.targetId,Ks(e.target),n,s,e.sequenceNumber,r,i)}function av(t){const e=Ky({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fy(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{getBundleMetadata(e,n){return uv(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Ci(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return uv(e).put({bundleId:(r=n).id,createTime:ki(Et(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return lv(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:av(i.bundledQuery),readTime:Ci(i.readTime)};var i})}saveNamedQuery(e,n){return lv(e).put(function(r){return{name:r.name,readTime:ki(Et(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function uv(t){return ct(t,_i.store)}function lv(t){return ct(t,Ii.store)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.zt=new bh}addToCollectionParentIndex(e,n){return this.zt.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.zt.getEntries(n))}}class bh{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pe(ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(){this.Ht=new bh}addToCollectionParentIndex(e,n){if(!this.Ht.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Ht.add(n)});const s={collectionId:r,parent:Ut(i)};return cv(e).put(s)}return S.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[Jg(n),""],!1,!0);return cv(e).Bt(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(ln(o.parent))}return r})}}function cv(t){return ct(t,kr.store)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ht{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t,e,n){const r=t.store(le.store),i=t.store(He.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.jt({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{G(a===1)}));const l=[];for(const c of n.mutations){const h=He.key(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return S.waitFor(s).next(()=>l)}function pu(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw z();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(41943040,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);class Ph{constructor(e,n,r,i){this.userId=e,this.k=n,this.Jt=r,this.referenceDelegate=i,this.Yt={}}static Xt(e,n,r,i){G(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Ph(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Pn(e).jt({index:le.userMutationsIndex,range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Ai(e),o=Pn(e);return o.add({}).next(a=>{G(typeof a=="number");const u=new Nh(a,n,r,i),l=function(d,g,y){const E=y.baseMutations.map(p=>Ah(d.Gt,p)),f=y.mutations.map(p=>Ah(d.Gt,p));return new le(g,y.batchId,y.localWriteTime.toMillis(),E,f)}(this.k,this.userId,u),c=[];let h=new pe((d,g)=>Z(d.canonicalString(),g.canonicalString()));for(const d of i){const g=He.key(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(g,He.PLACEHOLDER))}return h.forEach(d=>{c.push(this.Jt.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Yt[a]=u.keys()}),S.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return Pn(e).get(n).next(r=>r?(G(r.userId===this.userId),xi(this.k,r)):null)}Zt(e,n){return this.Yt[n]?S.resolve(this.Yt[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Yt[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Pn(e).jt({index:le.userMutationsIndex,range:i},(o,a,u)=>{a.userId===this.userId&&(G(a.batchId>=r),s=xi(this.k,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Pn(e).jt({index:le.userMutationsIndex,range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Pn(e).Bt(le.userMutationsIndex,n).next(r=>r.map(i=>xi(this.k,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=He.prefixForPath(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Ai(e).jt({range:i},(o,a,u)=>{const[l,c,h]=o,d=ln(c);if(l===this.userId&&n.path.isEqual(d))return Pn(e).get(h).next(g=>{if(!g)throw z();G(g.userId===this.userId),s.push(xi(this.k,g))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(Z);const i=[];return n.forEach(s=>{const o=He.prefixForPath(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Ai(e).jt({range:a},(l,c,h)=>{const[d,g,y]=l,E=ln(g);d===this.userId&&s.path.isEqual(E)?r=r.add(y):h.done()});i.push(u)}),S.waitFor(i).next(()=>this.te(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=He.prefixForPath(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new pe(Z);return Ai(e).jt({range:o},(u,l,c)=>{const[h,d,g]=u,y=ln(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(g)):c.done()}).next(()=>this.te(e,a))}te(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Pn(e).get(s).next(o=>{if(o===null)throw z();G(o.userId===this.userId),r.push(xi(this.k,o))}))}),S.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return dv(e.Wt,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.ee(n.batchId)}),S.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}ee(e){delete this.Yt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return S.resolve();const r=IDBKeyRange.lowerBound(He.prefixForUser(this.userId)),i=[];return Ai(e).jt({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=ln(s[1]);i.push(u)}else a.done()}).next(()=>{G(i.length===0)})})}containsKey(e,n){return fv(e,this.userId,n)}ne(e){return pv(e).get(this.userId).next(n=>n||new Dn(this.userId,-1,""))}}function fv(t,e,n){const r=He.prefixForPath(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ai(t).jt({range:s,Kt:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Pn(t){return ct(t,le.store)}function Ai(t){return ct(t,He.store)}function pv(t){return ct(t,Dn.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new Ar(0)}static re(){return new Ar(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n){this.referenceDelegate=e,this.k=n}allocateTargetId(e){return this.oe(e).next(n=>{const r=new Ar(n.highestTargetId);return n.highestTargetId=r.next(),this.ce(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.oe(e).next(n=>X.fromTimestamp(new Me(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.oe(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.oe(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.ce(e,i)))}addTargetData(e,n){return this.ae(e,n).next(()=>this.oe(e).next(r=>(r.targetCount+=1,this.ue(n,r),this.ce(e,r))))}updateTargetData(e,n){return this.ae(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ri(e).delete(n.targetId)).next(()=>this.oe(e)).next(r=>(G(r.targetCount>0),r.targetCount-=1,this.ce(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Ri(e).jt((o,a)=>{const u=eo(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>S.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Ri(e).jt((r,i)=>{const s=eo(i);n(s)})}oe(e){return mv(e).get(St.key).next(n=>(G(n!==null),n))}ce(e,n){return mv(e).put(St.key,n)}ae(e,n){return Ri(e).put(ov(this.k,n))}ue(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.oe(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ks(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ri(e).jt({range:i,index:lt.queryTargetsIndexName},(o,a,u)=>{const l=eo(a);Za(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=On(e);return n.forEach(o=>{const a=Ut(o.path);i.push(s.put(new Fe(r,a))),i.push(this.referenceDelegate.addReference(e,r,o))}),S.waitFor(i)}removeMatchingKeys(e,n,r){const i=On(e);return S.forEach(n,s=>{const o=Ut(s.path);return S.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=On(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=On(e);let s=ae();return i.jt({range:r,Kt:!0},(o,a,u)=>{const l=ln(o[1]),c=new U(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Ut(n.path),i=IDBKeyRange.bound([r],[Jg(r)],!1,!0);let s=0;return On(e).jt({index:Fe.documentTargetsIndex,Kt:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}Et(e,n){return Ri(e).get(n).next(r=>r?eo(r):null)}}function Ri(t){return ct(t,lt.store)}function mv(t){return ct(t,St.store)}function On(t){return ct(t,Fe.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==Jy)throw t;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv([t,e],[n,r]){const i=Z(t,n);return i===0?Z(e,r):i}class YC{constructor(e){this.he=e,this.buffer=new pe(gv),this.le=0}fe(){return++this.le}de(e){const n=[e,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();gv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class QC{constructor(e,n){this.garbageCollector=e,this.asyncQueue=n,this.we=!1,this._e=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.me(e)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return this._e!==null}me(e){const n=this.we?3e5:6e4;C("LruGarbageCollector",`Garbage collection scheduled in ${n}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",n,async()=>{this._e=null,this.we=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){Cr(r)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await Ni(r)}await this.me(e)})}}class XC{constructor(e,n){this.ge=e,this.params=n}calculateTargetCount(e,n){return this.ge.ye(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return S.resolve($t.I);const r=new YC(n);return this.ge.forEachTarget(e,i=>r.de(i.sequenceNumber)).next(()=>this.ge.pe(e,i=>r.de(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.ge.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.ge.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(hv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hv):this.Te(e,n))}getCacheSize(e){return this.ge.getCacheSize(e)}Te(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),dh()<=ne.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new XC(r,i)}(this,n)}ye(e){const n=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Ee(e){let n=0;return this.pe(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}pe(e,n){return this.Ie(e,(r,i)=>n(i))}addReference(e,n,r){return mu(e,r)}removeReference(e,n,r){return mu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return mu(e,n)}Ae(e,n){return function(r,i){let s=!1;return pv(r).Qt(o=>fv(r,o,i).next(a=>(a&&(s=!0),S.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Ie(e,(o,a)=>{if(a<=n){const u=this.Ae(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o),On(e).delete([0,Ut(o.path)])))});i.push(u)}}).next(()=>S.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return mu(e,n)}Ie(e,n){const r=On(e);let i,s=$t.I;return r.jt({index:Fe.documentTargetsIndex},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==$t.I&&n(new U(ln(i)),s),s=l,i=u):s=$t.I}).next(()=>{s!==$t.I&&n(new U(ln(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function mu(t,e){return On(t).put(function(n,r){return new Fe(0,Ut(n.path),r)}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){Sr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ey(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(){this.changes=new Di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:X.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Ee.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n){this.k=e,this.Jt=n}addEntry(e,n,r){return Rr(e).put(gu(n),r)}removeEntry(e,n){const r=Rr(e),i=gu(n);return r.delete(i)}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Re(e,r)))}getEntry(e,n){return Rr(e).get(gu(n)).next(r=>this.be(n,r))}Pe(e,n){return Rr(e).get(gu(n)).next(r=>({document:this.be(n,r),size:pu(r)}))}getEntries(e,n){let r=qt();return this.ve(e,n,(i,s)=>{const o=this.be(i,s);r=r.insert(i,o)}).next(()=>r)}Ve(e,n){let r=qt(),i=new $e(U.comparator);return this.ve(e,n,(s,o)=>{const a=this.be(s,o);r=r.insert(s,a),i=i.insert(s,pu(o))}).next(()=>({documents:r,Se:i}))}ve(e,n,r){if(n.isEmpty())return S.resolve();const i=IDBKeyRange.bound(n.first().path.toArray(),n.last().path.toArray()),s=n.getIterator();let o=s.getNext();return Rr(e).jt({range:i},(a,u,l)=>{const c=U.fromSegments(a);for(;o&&U.comparator(o,c)<0;)r(o,null),o=s.getNext();o&&o.isEqual(c)&&(r(o,u),o=s.hasNext()?s.getNext():null),o?l.Lt(o.path.toArray()):l.done()}).next(()=>{for(;o;)r(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,n,r){let i=qt();const s=n.path.length+1,o={};if(r.isEqual(X.min())){const a=n.path.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=n.path.toArray(),u=sv(r);o.range=IDBKeyRange.lowerBound([a,u],!0),o.index=Te.collectionReadTimeIndex}return Rr(e).jt(o,(a,u,l)=>{if(a.length!==s)return;const c=rv(this.k,u);n.path.isPrefixOf(c.key.path)?Gs(n,c)&&(i=i.insert(c.key,c)):l.done()}).next(()=>i)}newChangeBuffer(e){return new ex(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return vv(e).get(Ht.key).next(n=>(G(!!n),n))}Re(e,n){return vv(e).put(Ht.key,n)}be(e,n){if(n){const r=rv(this.k,n);if(!(r.isNoDocument()&&r.version.isEqual(X.min())))return r}return Ee.newInvalidDocument(e)}}class ex extends yv{constructor(e,n){super(),this.De=e,this.trackRemovals=n,this.Ce=new Di(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new pe((s,o)=>Z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Ce.get(s);if(o.document.isValidDocument()){const u=iv(this.De.k,o.document,this.getReadTime(s));i=i.add(s.path.popLast()),r+=pu(u)-a,n.push(this.De.addEntry(e,s,u))}else if(r-=a,this.trackRemovals){const u=iv(this.De.k,Ee.newNoDocument(s,X.min()),this.getReadTime(s));n.push(this.De.addEntry(e,s,u))}else n.push(this.De.removeEntry(e,s))}),i.forEach(s=>{n.push(this.De.Jt.addToCollectionParentIndex(e,s))}),n.push(this.De.updateMetadata(e,r)),S.waitFor(n)}getFromCache(e,n){return this.De.Pe(e,n).next(r=>(this.Ce.set(n,r.size),r.document))}getAllFromCache(e,n){return this.De.Ve(e,n).next(({documents:r,Se:i})=>(i.forEach((s,o)=>{this.Ce.set(s,o)}),r))}}function vv(t){return ct(t,Ht.store)}function Rr(t){return ct(t,Te.store)}function gu(t){return t.path.toArray()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.k=e}Nt(e,n,r,i){G(r<i&&r>=0&&i<=11);const s=new fu("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore(Tt.store)}(e),function(a){a.createObjectStore(Dn.store,{keyPath:Dn.keyPath}),a.createObjectStore(le.store,{keyPath:le.keyPath,autoIncrement:!0}).createIndex(le.userMutationsIndex,le.userMutationsKeyPath,{unique:!0}),a.createObjectStore(He.store)}(e),wv(e),function(a){a.createObjectStore(Te.store)}(e));let o=S.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore(Fe.store),a.deleteObjectStore(lt.store),a.deleteObjectStore(St.store)}(e),wv(e)),o=o.next(()=>function(a){const u=a.store(St.store),l=new St(0,0,X.min().toTimestamp(),0);return u.put(St.key,l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store(le.store).Bt().next(l=>{a.deleteObjectStore(le.store),a.createObjectStore(le.store,{keyPath:le.keyPath,autoIncrement:!0}).createIndex(le.userMutationsIndex,le.userMutationsKeyPath,{unique:!0});const c=u.store(le.store),h=l.map(d=>c.put(d));return S.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore(cn.store,{keyPath:cn.keyPath})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ne(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore(Ht.store)}(e),this.ke(s)))),r<7&&i>=7&&(o=o.next(()=>this.xe(s))),r<8&&i>=8&&(o=o.next(()=>this.$e(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const u=a.objectStore(Te.store);u.createIndex(Te.readTimeIndex,Te.readTimeIndexPath,{unique:!1}),u.createIndex(Te.collectionReadTimeIndex,Te.collectionReadTimeIndexPath,{unique:!1})}(n)})),r<10&&i>=10&&(o=o.next(()=>this.Oe(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(_i.store,{keyPath:_i.keyPath})})(e),function(a){a.createObjectStore(Ii.store,{keyPath:Ii.keyPath})}(e)})),o}ke(e){let n=0;return e.store(Te.store).jt((r,i)=>{n+=pu(i)}).next(()=>{const r=new Ht(n);return e.store(Ht.store).put(Ht.key,r)})}Ne(e){const n=e.store(Dn.store),r=e.store(le.store);return n.Bt().next(i=>S.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.Bt(le.userMutationsIndex,o).next(a=>S.forEach(a,u=>{G(u.userId===s.userId);const l=xi(this.k,u);return dv(e,s.userId,l).next(()=>{})}))}))}xe(e){const n=e.store(Fe.store),r=e.store(Te.store);return e.store(St.store).get(St.key).next(i=>{const s=[];return r.jt((o,a)=>{const u=new ie(o),l=function(c){return[0,Ut(c)]}(u);s.push(n.get(l).next(c=>c?S.resolve():(h=>n.put(new Fe(0,Ut(h),i.highestListenSequenceNumber)))(u)))}).next(()=>S.waitFor(s))})}$e(e,n){e.createObjectStore(kr.store,{keyPath:kr.keyPath});const r=n.store(kr.store),i=new bh,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Ut(u)})}};return n.store(Te.store).jt({Kt:!0},(o,a)=>{const u=new ie(o);return s(u.popLast())}).next(()=>n.store(He.store).jt({Kt:!0},([o,a,u],l)=>{const c=ln(a);return s(c.popLast())}))}Oe(e){const n=e.store(lt.store);return n.jt((r,i)=>{const s=eo(i),o=ov(this.k,s);return n.put(o)})}}function wv(t){t.createObjectStore(Fe.store,{keyPath:Fe.keyPath}).createIndex(Fe.documentTargetsIndex,Fe.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(lt.store,{keyPath:lt.keyPath}).createIndex(lt.queryTargetsIndexName,lt.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(St.store)}const Oh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Lh{constructor(e,n,r,i,s,o,a,u,l,c){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Me=s,this.window=o,this.document=a,this.Fe=l,this.Le=c,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=h=>Promise.resolve(),!Lh.Pt())throw new R(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new JC(this,i),this.Ge=n+"main",this.k=new nv(u),this.ze=new hn(this.Ge,11,new tx(this.k)),this.He=new GC(this.referenceDelegate,this.k),this.Jt=new WC,this.Je=function(h,d){return new ZC(h,d)}(this.k,this.Jt),this.Ye=new HC,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,c===!1&&ut("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new R(T.FAILED_PRECONDITION,Oh);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.He.getHighestSequenceNumber(e))}).then(e=>{this.Be=new $t(e,this.Fe)}).then(()=>{this.Ue=!0}).catch(e=>(this.ze&&this.ze.close(),Promise.reject(e)))}sn(e){return this.We=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ze.xt(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Me.enqueueAndForget(async()=>{this.started&&await this.Ze()}))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>yu(e).put(new cn(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.rn(e).next(n=>{n||(this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)))})}).next(()=>this.on(e)).next(n=>this.isPrimary&&!n?this.cn(e).next(()=>!1):!!n&&this.an(e).next(()=>!0))).catch(e=>{if(Cr(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Me.enqueueRetryable(()=>this.We(e)),this.isPrimary=e})}rn(e){return to(e).get(Tt.key).next(n=>S.resolve(this.un(n)))}hn(e){return yu(e).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ct(n,cn.store);return r.Bt().next(i=>{const s=this.dn(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return S.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Xe)for(const n of e)this.Xe.removeItem(this.wn(n.clientId))}}nn(){this.je=this.Me.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ze().then(()=>this.ln()).then(()=>this.nn()))}un(e){return!!e&&e.ownerId===this.clientId}on(e){return this.Le?S.resolve(!0):to(e).get(Tt.key).next(n=>{if(n!==null&&this.fn(n.leaseTimestampMs,5e3)&&!this._n(n.ownerId)){if(this.un(n)&&this.networkEnabled)return!0;if(!this.un(n)){if(!n.allowTabSynchronization)throw new R(T.FAILED_PRECONDITION,Oh);return!1}}return!(!this.networkEnabled||!this.inForeground)||yu(e).Bt().next(r=>this.dn(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&C("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[Tt.store,cn.store],e=>{const n=new tv(e,$t.I);return this.cn(n).next(()=>this.hn(n))}),this.ze.close(),this.pn()}dn(e,n){return e.filter(r=>this.fn(r.updateTimeMs,n)&&!this._n(r.clientId))}Tn(){return this.runTransaction("getActiveClients","readonly",e=>yu(e).Bt().next(n=>this.dn(n,18e5).map(r=>r.clientId)))}get started(){return this.Ue}getMutationQueue(e){return Ph.Xt(e,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(e,n,r){C("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite";let s;return this.ze.runTransaction(e,i,VC,o=>(s=new tv(o,this.Be?this.Be.next():$t.I),n==="readwrite-primary"?this.rn(s).next(a=>!!a||this.on(s)).next(a=>{if(!a)throw ut(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)),new R(T.FAILED_PRECONDITION,Jy);return r(s)}).next(a=>this.an(s).next(()=>a)):this.En(s).next(()=>r(s)))).then(o=>(s.raiseOnCommittedEvent(),o))}En(e){return to(e).get(Tt.key).next(n=>{if(n!==null&&this.fn(n.leaseTimestampMs,5e3)&&!this._n(n.ownerId)&&!this.un(n)&&!(this.Le||this.allowTabSynchronization&&n.allowTabSynchronization))throw new R(T.FAILED_PRECONDITION,Oh)})}an(e){const n=new Tt(this.clientId,this.allowTabSynchronization,Date.now());return to(e).put(Tt.key,n)}static Pt(){return hn.Pt()}cn(e){const n=to(e);return n.get(Tt.key).next(r=>this.un(r)?(C("IndexedDbPersistence","Releasing primary lease."),n.delete(Tt.key)):S.resolve())}fn(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(ut(`Detected an update time that is in the future: ${e} > ${r}`),!1))}tn(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ke=()=>{this.Me.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ze()))},this.document.addEventListener("visibilitychange",this.Ke),this.inForeground=this.document.visibilityState==="visible")}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.qe=()=>{this.mn(),L_()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Me.enterRestrictedMode(!0),this.Me.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(e){var n;try{const r=((n=this.Xe)===null||n===void 0?void 0:n.getItem(this.wn(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ut("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(e){ut("Failed to set zombie client id.",e)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch{}}wn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function to(t){return ct(t,Tt.store)}function yu(t){return ct(t,cn.store)}function nx(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,n,r){this.Je=e,this.An=n,this.Jt=r}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.bn(e,n,r))}bn(e,n,r){return this.Je.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}Pn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}vn(e,n){return this.Je.getEntries(e,n).next(r=>this.Vn(e,r).next(()=>r))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.Pn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return U.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Sn(e,n.path):dy(n)?this.Dn(e,n,r):this.Cn(e,n,r)}Sn(e,n){return this.Rn(e,new U(n)).next(r=>{let i=Ih();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Dn(e,n,r){const i=n.collectionGroup;let s=Ih();return this.Jt.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const u=function(l,c){return new yi(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.Cn(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}Cn(e,n,r){let i,s;return this.Je.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Nn(e,s,i).next(a=>{i=a;for(const u of s)for(const l of u.mutations){const c=l.key;let h=i.get(c);h==null&&(h=Ee.newInvalidDocument(c),i=i.insert(c,h)),Sh(l,h,u.localWriteTime),h.isFoundDocument()||(i=i.remove(c))}}))).next(()=>(i.forEach((o,a)=>{Gs(n,a)||(i=i.remove(o))}),i))}Nn(e,n,r){let i=ae();for(const o of n)for(const a of o.mutations)a instanceof Nn&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.Je.getEntries(e,i).next(o=>(o.forEach((a,u)=>{u.isFoundDocument()&&(s=s.insert(a,u))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.kn=r,this.xn=i}static $n(e,n){let r=ae(),i=ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Mh(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{On(e){this.Mn=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(X.min())?this.Fn(e,n):this.Mn.vn(e,i).next(s=>{const o=this.Ln(n,s);return(ru(n)||iu(n))&&this.Bn(n.limitType,o,i,r)?this.Fn(e,n):(dh()<=ne.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Th(n)),this.Mn.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}Ln(e,n){let r=new pe(my(e));return n.forEach((i,s)=>{Gs(e,s)&&(r=r.add(s))}),r}Bn(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,n){return dh()<=ne.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Th(n)),this.Mn.getDocumentsMatchingQuery(e,n,X.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e,n,r,i){this.persistence=e,this.Un=n,this.k=i,this.qn=new $e(Z),this.Kn=new Di(s=>Ks(s),Za),this.jn=X.min(),this.An=e.getMutationQueue(r),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new Ev(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function Sv(t,e,n,r){return new rx(t,e,n,r)}async function _v(t,e){const n=W(t);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(u=>(a=u,r=n.persistence.getMutationQueue(e),i=new Ev(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(u=>{const l=[],c=[];let h=ae();for(const d of a){l.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of u){c.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return i.vn(o,h).next(d=>({Gn:d,removedBatchIds:l,addedBatchIds:c}))})});return n.An=r,n.Wn=i,n.Un.On(n.Wn),s}function ix(t,e){const n=W(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=S.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(y=>{const E=u.docVersions.get(g);G(E!==null),y.version.compareTo(E)<0&&(c.applyToRemoteDocument(y,u),y.isValidDocument()&&l.addEntry(y,u.commitVersion))})}),d.next(()=>o.An.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.An.performConsistencyCheck(r)).next(()=>n.Wn.vn(r,i))})}function Iv(t){const e=W(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function sx(t,e){const n=W(t),r=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const a=[];e.targetChanges.forEach((l,c)=>{const h=i.get(c);if(!h)return;a.push(n.He.removeMatchingKeys(s,l.removedDocuments,c).next(()=>n.He.addMatchingKeys(s,l.addedDocuments,c)));let d=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(c)?d=d.withResumeToken(Re.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,r)),i=i.insert(c,d),function(g,y,E){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(h,d,l)&&a.push(n.He.updateTargetData(s,d))});let u=qt();if(e.documentUpdates.forEach((l,c)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(ox(s,o,e.documentUpdates,r,void 0).next(l=>{u=l})),!r.isEqual(X.min())){const l=n.He.getLastRemoteSnapshotVersion(s).next(c=>n.He.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.Wn.Vn(s,u)).next(()=>u)}).then(s=>(n.qn=i,s))}function ox(t,e,n,r,i){let s=ae();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=qt();return n.forEach((u,l)=>{const c=o.get(u),h=(i==null?void 0:i.get(u))||r;l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(u,h),a=a.insert(u,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l,h),a=a.insert(u,l)):C("LocalStore","Ignoring outdated watch update for ",u,". Current version:",c.version," Watch version:",l.version)}),a})}function ax(t,e){const n=W(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(r,e)))}function ux(t,e){const n=W(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.He.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.He.allocateTargetId(r).next(o=>(i=new bn(e,o,0,r.currentSequenceNumber),n.He.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qn.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(r.targetId,r),n.Kn.set(e,r.targetId)),r})}async function $h(t,e,n){const r=W(t),i=r.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Cr(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qn=r.qn.remove(e),r.Kn.delete(i.target)}function kv(t,e,n){const r=W(t);let i=X.min(),s=ae();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=W(a),h=c.Kn.get(l);return h!==void 0?S.resolve(c.qn.get(h)):c.He.getTargetData(u,l)}(r,o,un(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Un.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ae())).next(a=>({documents:a,zn:s})))}async function lx(t){const e=W(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",n=>function(r){const i=Rr(r);let s=X.min();return i.jt({index:Te.readTimeIndex,reverse:!0},(o,a,u)=>{a.readTime&&(s=qC(a.readTime)),u.done()}).next(()=>s)}(n)).then(n=>{e.jn=n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return S.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var r;return this.Xn.set(n.id,{id:(r=n).id,version:r.version,createTime:Et(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(r){return{name:r.name,query:av(r.bundledQuery),readTime:Et(r.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.ts=new pe(Ne.es),this.ns=new pe(Ne.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const r=new Ne(e,n);this.ts=this.ts.add(r),this.ns=this.ns.add(r)}rs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.os(new Ne(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new U(new ie([])),r=new Ne(n,e),i=new Ne(n,e+1),s=[];return this.ns.forEachInRange([r,i],o=>{this.os(o),s.push(o.key)}),s}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new U(new ie([])),r=new Ne(n,e),i=new Ne(n,e+1);let s=ae();return this.ns.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ne(e,0),r=this.ts.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ne{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return U.comparator(e.key,n.key)||Z(e.fs,n.fs)}static ss(e,n){return Z(e.fs,n.fs)||U.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new pe(Ne.es)}checkEmpty(e){return S.resolve(this.An.length===0)}addMutationBatch(e,n,r,i){const s=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new Nh(s,n,r,i);this.An.push(o);for(const a of i)this.ws=this.ws.add(new Ne(a.key,s)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.gs(r),s=i<0?0:i;return S.resolve(this.An.length>s?this.An[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return S.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ne(n,0),i=new Ne(n,Number.POSITIVE_INFINITY),s=[];return this.ws.forEachInRange([r,i],o=>{const a=this._s(o.fs);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(Z);return n.forEach(i=>{const s=new Ne(i,0),o=new Ne(i,Number.POSITIVE_INFINITY);this.ws.forEachInRange([s,o],a=>{r=r.add(a.fs)})}),S.resolve(this.ys(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;U.isDocumentKey(s)||(s=s.child(""));const o=new Ne(new U(s),0);let a=new pe(Z);return this.ws.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.fs)),!0)},o),S.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){G(this.ps(n.batchId,"removed")===0),this.An.shift();let r=this.ws;return S.forEach(n.mutations,i=>{const s=new Ne(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ws=r})}ee(e){}containsKey(e,n){const r=new Ne(n,0),i=this.ws.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.An.length,S.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new $e(U.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a,readTime:r}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(n))}getEntries(e,n){let r=qt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=qt();const s=new U(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||Gs(n,u)&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}Es(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fx(this)}getSize(e){return S.resolve(this.size)}}class fx extends yv{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.De.addEntry(e,i.document,this.getReadTime(r))):this.De.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.persistence=e,this.Is=new Di(n=>Ks(n),Za),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.As=0,this.Rs=new Uh,this.targetCount=0,this.bs=Ar.ie()}forEachTarget(e,n){return this.Is.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.As&&(this.As=n),S.resolve()}ae(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Ar(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.ae(n),S.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Is.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Is.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Rs.rs(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Rs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Rs.ls(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Rs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n){this.Ps={},this.Be=new $t(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new px(this),this.Jt=new KC,this.Je=function(r,i){return new dx(r,i)}(this.Jt,r=>this.referenceDelegate.vs(r)),this.k=new nv(n),this.Ye=new cx(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.Ps[e.toKey()];return n||(n=new hx(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,r){C("MemoryPersistence","Starting transaction:",e);const i=new gx(this.Be.next());return this.referenceDelegate.Vs(),r(i).next(s=>this.referenceDelegate.Ss(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ds(e,n){return S.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class gx extends Zy{constructor(e){super(),this.currentSequenceNumber=e}}class Fh{constructor(e){this.persistence=e,this.Cs=new Uh,this.Ns=null}static ks(e){return new Fh(e)}get xs(){if(this.Ns)return this.Ns;throw z()}addReference(e,n,r){return this.Cs.addReference(r,n),this.xs.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Cs.removeReference(r,n),this.xs.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),S.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.xs,r=>{const i=U.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return S.or([()=>S.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}class Cv{constructor(){this.activeTargetIds=by()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xv{constructor(){this.pi=new Cv,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,n,r){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new Cv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,r,i,s){const o=this.Ui(e,n);C("RestConnection","Sending: ",o,r);const a={};return this.qi(a,i,s),this.Ki(e,o,a,r).then(u=>(C("RestConnection","Received: ",u),u),u=>{throw Qg("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}ji(e,n,r,i,s){return this.Bi(e,n,r,i,s)}qi(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ci,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Ui(e,n){const r=vx[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,r,i){return new Promise((s,o)=>{const a=new $k;a.listenOnce(Ok.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case hh.NO_ERROR:const l=a.getResponseJson();C("Connection","XHR received:",JSON.stringify(l)),s(l);break;case hh.TIMEOUT:C("Connection",'RPC "'+e+'" timed out'),o(new R(T.DEADLINE_EXCEEDED,"Request time out"));break;case hh.HTTP_ERROR:const c=a.getStatus();if(C("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(y)>=0?y:T.UNKNOWN}(h.status);o(new R(d,h.message))}else o(new R(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new R(T.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{C("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}Qi(e,n,r){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=bk(),o=Pk(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Mk({})),this.qi(a.initMessageHeaders,n,r),Cm()||Am()||P_()||Rm()||O_()||xm()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");C("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const d=new wx({Vi:y=>{h?C("Connection","Not sending because WebChannel is closed:",y):(c||(C("Connection","Opening WebChannel transport."),l.open(),c=!0),C("Connection","WebChannel sending:",y),l.send(y))},Si:()=>l.close()}),g=(y,E,f)=>{y.listen(E,p=>{try{f(p)}catch(m){setTimeout(()=>{throw m},0)}})};return g(l,Qa.EventType.OPEN,()=>{h||C("Connection","WebChannel transport opened.")}),g(l,Qa.EventType.CLOSE,()=>{h||(h=!0,C("Connection","WebChannel transport closed"),d.Oi())}),g(l,Qa.EventType.ERROR,y=>{h||(h=!0,Qg("Connection","WebChannel transport errored:",y),d.Oi(new R(T.UNAVAILABLE,"The operation could not be completed")))}),g(l,Qa.EventType.MESSAGE,y=>{var E;if(!h){const f=y.data[0];G(!!f);const p=f,m=p.error||((E=p[0])===null||E===void 0?void 0:E.error);if(m){C("Connection","WebChannel received error:",m);const v=m.status;let w=function(_){const M=Ce[_];if(M!==void 0)return Ny(M)}(v),N=m.message;w===void 0&&(w=T.INTERNAL,N="Unknown error status: "+v+" with message "+m.message),h=!0,d.Oi(new R(w,N)),l.close()}else C("Connection","WebChannel received:",f),d.Mi(f)}}),g(o,Lk.STAT_EVENT,y=>{y.stat===Gg.PROXY?C("Connection","Detected buffering proxy"):y.stat===Gg.NOPROXY&&C("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.$i()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(){return typeof window!="undefined"?window:null}function vu(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t){return new CC(t,!0)}class Rv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Me=e,this.timerId=n,this.Wi=r,this.Gi=i,this.zi=s,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),r=Math.max(0,Date.now()-this.Yi),i=Math.max(0,n-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,n,r,i,s,o,a,u){this.Me=e,this.nr=r,this.sr=i,this.ir=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Rv(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(ut(n.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.rr===n&&this.Ir(r,i)},r=>{e(()=>{const i=new R(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ar(i)})})}Ir(e,n){const r=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{r(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(i=>{r(()=>this.Ar(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Me.enqueueAndForget(()=>this.rr===e?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sx extends Nv{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.k=s}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=RC(this.k,e),r=function(i){if(!("targetChange"in i))return X.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?X.min():s.readTime?Et(s.readTime):X.min()}(e);return this.listener.br(n,r)}Pr(e){const n={};n.database=xh(this.k),n.addTarget=function(i,s){let o;const a=s.target;return o=eu(a)?{documents:qy(i,a)}:{query:Hy(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Uy(i,s.resumeToken):s.snapshotVersion.compareTo(X.min())>0&&(o.readTime=Js(i,s.snapshotVersion.toTimestamp())),o}(this.k,e);const r=DC(this.k,e);r&&(n.labels=r),this.gr(n)}vr(e){const n={};n.database=xh(this.k),n.removeTarget=e,this.gr(n)}}class _x extends Nv{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.k=s,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=NC(e.writeResults,e.commitTime),r=Et(e.commitTime);return this.listener.Cr(r,n)}return G(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=xh(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ah(this.k,r))};this.gr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=r,this.k=i,this.$r=!1}Or(){if(this.$r)throw new R(T.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.Bi(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(T.UNKNOWN,i.toString())})}ji(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.ji(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(T.UNKNOWN,i.toString())})}terminate(){this.$r=!0}}class kx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(ut(n),this.Lr=!1):C("OnlineStateTracker",n)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=s,this.Hr.Ei(o=>{r.enqueueAndForget(async()=>{Nr(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=W(a);u.Gr.add(4),await no(u),u.Jr.set("Unknown"),u.Gr.delete(4),await Eu(u)}(this))})}),this.Jr=new kx(r,i)}}async function Eu(t){if(Nr(t))for(const e of t.zr)await e(!0)}async function no(t){for(const e of t.zr)await e(!1)}function Dv(t,e){const n=W(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Bh(n)?Vh(n):bi(n).lr()&&jh(n,e))}function bv(t,e){const n=W(t),r=bi(n);n.Wr.delete(e),r.lr()&&Pv(n,e),n.Wr.size===0&&(r.lr()?r._r():Nr(n)&&n.Jr.set("Unknown"))}function jh(t,e){t.Yr.X(e.targetId),bi(t).Pr(e)}function Pv(t,e){t.Yr.X(e),bi(t).vr(e)}function Vh(t){t.Yr=new _C({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),bi(t).start(),t.Jr.Br()}function Bh(t){return Nr(t)&&!bi(t).hr()&&t.Wr.size>0}function Nr(t){return W(t).Gr.size===0}function Ov(t){t.Yr=void 0}async function xx(t){t.Wr.forEach((e,n)=>{jh(t,e)})}async function Ax(t,e){Ov(t),Bh(t)?(t.Jr.Kr(e),Vh(t)):t.Jr.set("Unknown")}async function Rx(t,e,n){if(t.Jr.set("Online"),e instanceof Oy&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Wr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Wr.delete(o),r.Yr.removeTarget(o))}(t,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tu(t,r)}else if(e instanceof hu?t.Yr.ot(e):e instanceof Py?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(X.min()))try{const r=await Iv(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Yr.gt(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Wr.get(u);l&&i.Wr.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.Wr.get(a);if(!u)return;i.Wr.set(a,u.withResumeToken(Re.EMPTY_BYTE_STRING,u.snapshotVersion)),Pv(i,a);const l=new bn(u.target,a,1,u.sequenceNumber);jh(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await Tu(t,r)}}async function Tu(t,e,n){if(!Cr(e))throw e;t.Gr.add(1),await no(t),t.Jr.set("Offline"),n||(n=()=>Iv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Eu(t)})}function Lv(t,e){return e().catch(n=>Tu(t,n,e))}async function ro(t){const e=W(t),n=Ln(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;Nx(e);)try{const i=await ax(e.localStore,r);if(i===null){e.Qr.length===0&&n._r();break}r=i.batchId,Dx(e,i)}catch(i){await Tu(e,i)}Mv(e)&&$v(e)}function Nx(t){return Nr(t)&&t.Qr.length<10}function Dx(t,e){t.Qr.push(e);const n=Ln(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function Mv(t){return Nr(t)&&!Ln(t).hr()&&t.Qr.length>0}function $v(t){Ln(t).start()}async function bx(t){Ln(t).kr()}async function Px(t){const e=Ln(t);for(const n of t.Qr)e.Dr(n.mutations)}async function Ox(t,e,n){const r=t.Qr.shift(),i=Dh.from(r,e,n);await Lv(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ro(t)}async function Lx(t,e){e&&Ln(t).Sr&&await async function(n,r){if(i=r.code,gC(i)&&i!==T.ABORTED){const s=n.Qr.shift();Ln(n).wr(),await Lv(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ro(n)}var i}(t,e),Mv(t)&&$v(t)}async function Mx(t,e){const n=W(t);e?(n.Gr.delete(2),await Eu(n)):e||(n.Gr.add(2),await no(n),n.Jr.set("Unknown"))}function bi(t){return t.Xr||(t.Xr=function(e,n,r){const i=W(e);return i.Or(),new Sx(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:xx.bind(null,t),Ni:Ax.bind(null,t),br:Rx.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Bh(t)?Vh(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Ov(t))})),t.Xr}function Ln(t){return t.Zr||(t.Zr=function(e,n,r){const i=W(e);return i.Or(),new _x(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:bx.bind(null,t),Ni:Lx.bind(null,t),Nr:Px.bind(null,t),Cr:Ox.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await ro(t)):(await t.Zr.stop(),t.Qr.length>0&&(C("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new zh(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qh(t,e){if(ut("AsyncQueue",`${e}: ${t}`),Cr(t))return new R(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||U.comparator(n.key,r.key):(n,r)=>U.comparator(n.key,r.key),this.keyedMap=Ih(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Pi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Pi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Pi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(){this.eo=new $e(U.comparator)}track(e){const n=e.doc.key,r=this.eo.get(n);r?e.type!==0&&r.type===3?this.eo=this.eo.insert(n,e):e.type===3&&r.type!==1?this.eo=this.eo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.eo=this.eo.remove(n):e.type===1&&r.type===2?this.eo=this.eo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):z():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,r)=>{e.push(r)}),e}}class Oi{constructor(e,n,r,i,s,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Oi(e,n,Pi.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&su(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(){this.so=void 0,this.listeners=[]}}class Ux{constructor(){this.queries=new Di(e=>py(e),su),this.onlineState="Unknown",this.io=new Set}}async function Fv(t,e){const n=W(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new $x),i)try{s.so=await n.onListen(r)}catch(o){const a=qh(o,`Initialization of query '${Th(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&Hh(n)}async function jv(t,e){const n=W(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Fx(t,e){const n=W(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.oo(i)&&(r=!0);o.so=i}}r&&Hh(n)}function jx(t,e,n){const r=W(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Hh(t){t.io.forEach(e=>{e.next()})}class Vv{constructor(e,n,r){this.query=e,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=r||{}}oo(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Oi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(e)&&(this.co.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.wo||!r)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=Oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this.key=e}}class zv{constructor(e){this.key=e}}class Vx{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=ae(),this.mutatedKeys=ae(),this.Ao=my(e),this.Ro=new Pi(this.Ao)}get bo(){return this.To}Po(e,n){const r=n?n.vo:new Uv,i=n?n.Ro:this.Ro;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=ru(this.query)&&i.size===this.query.limit?i.last():null,l=iu(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Gs(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let f=!1;d&&g?d.data.isEqual(g.data)?y!==E&&(r.track({type:3,doc:g}),f=!0):this.Vo(d,g)||(r.track({type:2,doc:g}),f=!0,(u&&this.Ao(g,u)>0||l&&this.Ao(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),f=!0):d&&!g&&(r.track({type:1,doc:d}),f=!0,(u||l)&&(a=!0)),f&&(g?(o=o.add(g),s=E?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),ru(this.query)||iu(this.query))for(;o.size>this.query.limit;){const c=ru(this.query)?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Ro:o,vo:r,Bn:a,mutatedKeys:s}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const s=e.vo.no();s.sort((l,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return g(h)-g(d)}(l.type,c.type)||this.Ao(l.doc,c.doc)),this.So(r);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,u=a!==this.Eo;return this.Eo=a,s.length!==0||u?{snapshot:new Oi(this.query,e.Ro,i,s,e.mutatedKeys,a===0,u,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Uv,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=ae(),this.Ro.forEach(r=>{this.No(r.key)&&(this.Io=this.Io.add(r.key))});const n=[];return e.forEach(r=>{this.Io.has(r)||n.push(new zv(r))}),this.Io.forEach(r=>{e.has(r)||n.push(new Bv(r))}),n}ko(e){this.To=e.zn,this.Io=ae();const n=this.Po(e.documents);return this.applyChanges(n,!0)}xo(){return Oi.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class Bx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zx{constructor(e){this.key=e,this.$o=!1}}class qx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new Di(a=>py(a),su),this.Fo=new Map,this.Lo=new Set,this.Bo=new $e(U.comparator),this.Uo=new Map,this.qo=new Uh,this.Ko={},this.jo=new Map,this.Qo=Ar.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function Hx(t,e){const n=tA(t);let r,i;const s=n.Mo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const o=await ux(n.localStore,un(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Kx(n,e,r,a==="current"),n.isPrimaryClient&&Dv(n.remoteStore,o)}return i}async function Kx(t,e,n,r){t.Go=(c,h,d)=>async function(g,y,E,f){let p=y.view.Po(E);p.Bn&&(p=await kv(g.localStore,y.query,!1).then(({documents:w})=>y.view.Po(w,p)));const m=f&&f.targetChanges.get(y.targetId),v=y.view.applyChanges(p,g.isPrimaryClient,m);return Yv(g,y.targetId,v.Co),v.snapshot}(t,c,h,d);const i=await kv(t.localStore,e,!0),s=new Vx(e,i.zn),o=s.Po(i.documents),a=Xs.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=s.applyChanges(o,t.isPrimaryClient,a);Yv(t,n,u.Co);const l=new Bx(e,n,s);return t.Mo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),u.snapshot}async function Wx(t,e){const n=W(t),r=n.Mo.get(e),i=n.Fo.get(r.targetId);if(i.length>1)return n.Fo.set(r.targetId,i.filter(s=>!su(s,e))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await $h(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),bv(n.remoteStore,r.targetId),Kh(n,r.targetId)}).catch(Ni)):(Kh(n,r.targetId),await $h(n.localStore,r.targetId,!0))}async function Gx(t,e,n){const r=Qv(t);try{const i=await function(s,o){const a=W(s),u=Me.now(),l=o.reduce((h,d)=>h.add(d.key),ae());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,l).next(d=>{c=d;const g=[];for(const y of o){const E=pC(y,c.get(y.key));E!=null&&g.push(new Nn(y.key,E,ay(E.value.mapValue),xt.exists(!0)))}return a.An.addMutationBatch(h,u,g,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Ko[s.currentUser.toKey()];u||(u=new $e(Z)),u=u.insert(o,a),s.Ko[s.currentUser.toKey()]=u}(r,i.batchId,n),await io(r,i.changes),await ro(r.remoteStore)}catch(i){const s=qh(i,"Failed to persist write");n.reject(s)}}async function qv(t,e){const n=W(t);try{const r=await sx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Uo.get(s);o&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.$o=!0:i.modifiedDocuments.size>0?G(o.$o):i.removedDocuments.size>0&&(G(o.$o),o.$o=!1))}),await io(n,r,e)}catch(r){await Ni(r)}}function Hv(t,e,n){const r=W(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Mo.forEach((s,o)=>{const a=o.view.ro(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=W(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.ro(o)&&(u=!0)}),u&&Hh(a)}(r.eventManager,e),i.length&&r.Oo.br(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Yx(t,e,n){const r=W(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Uo.get(e),s=i&&i.key;if(s){let o=new $e(U.comparator);o=o.insert(s,Ee.newNoDocument(s,X.min()));const a=ae().add(s),u=new cu(X.min(),new Map,new pe(Z),o,a);await qv(r,u),r.Bo=r.Bo.remove(s),r.Uo.delete(e),Wh(r)}else await $h(r.localStore,e,!1).then(()=>Kh(r,e,n)).catch(Ni)}async function Qx(t,e){const n=W(t),r=e.batch.batchId;try{const i=await ix(n.localStore,e);Wv(n,r,null),Kv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await io(n,i)}catch(i){await Ni(i)}}async function Xx(t,e,n){const r=W(t);try{const i=await function(s,o){const a=W(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.An.lookupMutationBatch(u,o).next(c=>(G(c!==null),l=c.keys(),a.An.removeMutationBatch(u,c))).next(()=>a.An.performConsistencyCheck(u)).next(()=>a.Wn.vn(u,l))})}(r.localStore,e);Wv(r,e,n),Kv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await io(r,i)}catch(i){await Ni(i)}}function Kv(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function Wv(t,e,n){const r=W(t);let i=r.Ko[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ko[r.currentUser.toKey()]=i}}function Kh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Mo.delete(r),n&&t.Oo.zo(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(r=>{t.qo.containsKey(r)||Gv(t,r)})}function Gv(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(bv(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Wh(t))}function Yv(t,e,n){for(const r of n)r instanceof Bv?(t.qo.addReference(r.key,e),Jx(t,r)):r instanceof zv?(C("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||Gv(t,r.key)):z()}function Jx(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(C("SyncEngine","New document in limbo: "+n),t.Lo.add(r),Wh(t))}function Wh(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new U(ie.fromString(e)),r=t.Qo.next();t.Uo.set(r,new zx(n)),t.Bo=t.Bo.insert(n,r),Dv(t.remoteStore,new bn(un(nu(n.path)),r,2,$t.I))}}async function io(t,e,n){const r=W(t),i=[],s=[],o=[];r.Mo.isEmpty()||(r.Mo.forEach((a,u)=>{o.push(r.Go(u,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l.fromCache?"not-current":"current"),i.push(l);const c=Mh.$n(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.Oo.br(i),await async function(a,u){const l=W(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(u,h=>S.forEach(h.kn,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>S.forEach(h.xn,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Cr(c))throw c;C("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.qn.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);l.qn=l.qn.insert(h,y)}}}(r.localStore,s))}async function Zx(t,e){const n=W(t);if(!n.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const r=await _v(n.localStore,e);n.currentUser=e,function(i,s){i.jo.forEach(o=>{o.forEach(a=>{a.reject(new R(T.CANCELLED,s))})}),i.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await io(n,r.Gn)}}function eA(t,e){const n=W(t),r=n.Uo.get(e);if(r&&r.$o)return ae().add(r.key);{let i=ae();const s=n.Fo.get(e);if(!s)return i;for(const o of s){const a=n.Mo.get(o);i=i.unionWith(a.view.bo)}return i}}function tA(t){const e=W(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Yx.bind(null,e),e.Oo.br=Fx.bind(null,e.eventManager),e.Oo.zo=jx.bind(null,e.eventManager),e}function Qv(t){const e=W(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Xx.bind(null,e),e}class Xv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=wu(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return Sv(this.persistence,new Tv,e.initialUser,this.k)}Yo(e){return new mx(Fh.ks,this.k)}Jo(e){return new xv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nA extends Xv{constructor(e,n,r){super(),this.tc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await lx(this.localStore),await this.tc.initialize(this,e),await Qv(this.tc.syncEngine),await ro(this.tc.remoteStore),await this.persistence.sn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Zo(e){return Sv(this.persistence,new Tv,e.initialUser,this.k)}Xo(e){const n=this.persistence.referenceDelegate.garbageCollector;return new QC(n,e.asyncQueue)}Yo(e){const n=nx(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new Lh(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,Tx(),vu(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(e){return new xv}}class Jv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zx.bind(null,this.syncEngine),await Mx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ux}createDatastore(e){const n=wu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Ex(i));var i;return function(s,o,a,u){return new Ix(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Hv(this.syncEngine,a,0),o=Av.Pt()?new Av:new yx,new Cx(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new qx(r,i,s,o,a,u);return l&&(c.Wo=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=W(e);C("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await no(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error?this.ec(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}nc(){this.muted=!0}ec(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=Xg.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function e0(t,e){t.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _v(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function t0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iA(t);C("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>async function(s,o){const a=W(s);a.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const u=Nr(a);a.Gr.add(3),await no(a),u&&a.Jr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Gr.delete(3),await Eu(a)}(e.remoteStore,i)),t.onlineComponents=e}async function iA(t){return t.offlineComponents||(C("FirestoreClient","Using default OfflineComponentProvider"),await e0(t,new Xv)),t.offlineComponents}async function n0(t){return t.onlineComponents||(C("FirestoreClient","Using default OnlineComponentProvider"),await t0(t,new Jv)),t.onlineComponents}function sA(t){return n0(t).then(e=>e.syncEngine)}async function Gh(t){const e=await n0(t),n=e.eventManager;return n.onListen=Hx.bind(null,e.syncEngine),n.onUnlisten=Wx.bind(null,e.syncEngine),n}function oA(t,e,n={}){const r=new Bt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Zv({next:h=>{s.enqueueAndForget(()=>jv(i,c)),h.fromCache&&a.source==="server"?u.reject(new R(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Vv(o,l,{includeMetadataChanges:!0,wo:!0});return Fv(i,c)}(await Gh(t),t.asyncQueue,e,n,r)),r.promise}class aA{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class so{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof so&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t,e,n){if(!n)throw new R(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uA(t,e,n,r){if(e===!0&&r===!0)throw new R(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function s0(t){if(!U.isDocumentKey(t))throw new R(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function o0(t){if(U.isDocumentKey(t))throw new R(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Su(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function Kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Su(t);throw new R(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function lA(t,e){if(e<=0)throw new R(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new R(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,uA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new a0({}),this._settingsFrozen=!1,e instanceof so?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new R(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new so(i.options.projectId)}(e))}get app(){if(!this._app)throw new R(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new a0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Fk;switch(n.type){case"gapi":const r=n.client;return G(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new Bk(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new R(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=r0.get(e);n&&(C("ComponentProvider","Removing Datastore"),r0.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}}class Mn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mn(this.firestore,e,this._query)}}class $n extends Mn{constructor(e,n,r){super(e,n,nu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new U(e))}withConverter(e){return new $n(this.firestore,e,this._path)}}function WL(t,e,...n){if(t=we(t),i0("collection","path",e),t instanceof Yh){const r=ie.fromString(e,...n);return o0(r),new $n(t,null,r)}{if(!(t instanceof dt||t instanceof $n))throw new R(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return o0(r),new $n(t.firestore,null,r)}}function cA(t,e,...n){if(t=we(t),arguments.length===1&&(e=Xg.A()),i0("doc","path",e),t instanceof Yh){const r=ie.fromString(e,...n);return s0(r),new dt(t,null,new U(r))}{if(!(t instanceof dt||t instanceof $n))throw new R(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return s0(r),new dt(t.firestore,t instanceof $n?t.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Rv(this,"async_queue_retry"),this.bc=()=>{const n=vu();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=vu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const n=vu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise(()=>{});const n=new Bt;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.gc.push(e),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(e){if(!Cr(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(e){const n=this.mc.then(()=>(this.Ic=!0,e().catch(r=>{this.Ec=r,this.Ic=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw ut("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ic=!1,r))));return this.mc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.Rc.indexOf(e)>-1&&(n=0);const i=zh.createAndSchedule(this,e,n,r,s=>this.Sc(s));return this.Tc.push(i),i}Pc(){this.Ec&&z()}verifyOperationInProgress(){}async Dc(){let e;do e=this.mc,await e;while(e!==this.mc)}Cc(e){for(const n of this.Tc)if(n.timerId===e)return!0;return!1}Nc(e){return this.Dc().then(()=>{this.Tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Dc()})}kc(e){this.Rc.push(e)}Sc(e){const n=this.Tc.indexOf(e);this.Tc.splice(n,1)}}function u0(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Un extends Yh{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new hA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||l0(this),this._firestoreClient.terminate()}}function GL(t=Ia()){return mr(t,"firestore").getImmediate()}function _u(t){return t._firestoreClient||l0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function l0(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new aA(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new rA(t._authCredentials,t._appCheckCredentials,t._queue,r)}function YL(t,e){fA(t=Kt(t,Un));const n=_u(t),r=t._freezeSettings(),i=new Jv;return dA(n,i,new nA(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function dA(t,e,n){const r=new Bt;return t.asyncQueue.enqueue(async()=>{try{await e0(t,n),await t0(t,e),r.resolve()}catch(i){if(!function(s){return s.name==="FirebaseError"?s.code===T.FAILED_PRECONDITION||s.code===T.UNIMPLEMENTED:typeof DOMException!="undefined"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(i))throw i;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function fA(t){if(t._initialized||t._terminated)throw new R(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Li(Re.fromBase64String(e))}catch(n){throw new R(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Li(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=/^__.*__$/;class mA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qs(e,this.data,n,this.fieldTransforms)}}class c0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Nn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function h0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Xh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.k=r,this.ignoreUndefinedProperties=i,s===void 0&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new Xh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Oc({path:r,Fc:!1});return i.Lc(e),i}Bc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Oc({path:r,Fc:!1});return i.xc(),i}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return xu(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(e.length===0)throw this.qc("Document fields must not be empty");if(h0(this.$c)&&pA.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class gA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=r||wu(e)}Qc(e,n,r,i=!1){return new Xh({$c:e,methodName:n,jc:r,path:qe.emptyPath(),Fc:!1,Kc:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Jh(t){const e=t._freezeSettings(),n=wu(t._databaseId);return new gA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yA(t,e,n,r,i,s={}){const o=t.Qc(s.merge||s.mergeFields?2:0,e,n,i);ed("Data must be an object, but it was:",o,r);const a=d0(r,o);let u,l;if(s.merge)u=new di(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=td(e,h,n);if(!o.contains(d))throw new R(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);p0(c,d)||c.push(d)}u=new di(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new mA(new tt(a),u,l)}class Cu extends ku{_toFieldTransform(e){if(e.$c!==2)throw e.$c===1?e.qc(`${this._methodName}() can only appear at the top level of your update data`):e.qc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cu}}class Zh extends ku{_toFieldTransform(e){return new _y(e.path,new vi)}isEqual(e){return e instanceof Zh}}function vA(t,e,n,r){const i=t.Qc(1,e,n);ed("Data must be an object, but it was:",i,r);const s=[],o=tt.empty();Sr(r,(u,l)=>{const c=nd(e,u,n);l=we(l);const h=i.Bc(c);if(l instanceof Cu)s.push(c);else{const d=oo(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new di(s);return new c0(o,a,i.fieldTransforms)}function wA(t,e,n,r,i,s){const o=t.Qc(1,e,n),a=[td(e,r,n)],u=[i];if(s.length%2!=0)throw new R(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(td(e,s[d])),u.push(s[d+1]);const l=[],c=tt.empty();for(let d=a.length-1;d>=0;--d)if(!p0(l,a[d])){const g=a[d];let y=u[d];y=we(y);const E=o.Bc(g);if(y instanceof Cu)l.push(g);else{const f=oo(y,E);f!=null&&(l.push(g),c.set(g,f))}}const h=new di(l);return new c0(c,h,o.fieldTransforms)}function EA(t,e,n,r=!1){return oo(n,t.Qc(r?4:3,e))}function oo(t,e){if(f0(t=we(t)))return ed("Unsupported field value:",e,t),d0(t,e);if(t instanceof ku)return function(n,r){if(!h0(r.$c))throw r.qc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.$c!==4)throw e.qc("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=oo(o,r.Uc(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=we(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return uC(r.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Me.fromDate(n);return{timestampValue:Js(r.k,i)}}if(n instanceof Me){const i=new Me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Js(r.k,i)}}if(n instanceof Qh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Li)return{bytesValue:Uy(r.k,n._byteString)};if(n instanceof dt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.qc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:kh(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.qc(`Unsupported field value: ${Su(n)}`)}(t,e)}function d0(t,e){const n={};return ey(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sr(t,(r,i)=>{const s=oo(i,e.Mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function f0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof Qh||t instanceof Li||t instanceof dt||t instanceof ku)}function ed(t,e,n){if(!f0(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Su(n);throw r==="an object"?e.qc(t+" a custom object"):e.qc(t+" "+r)}}function td(t,e,n){if((e=we(e))instanceof Iu)return e._internalPath;if(typeof e=="string")return nd(t,e);throw xu("Field path arguments must be of type string or ",t,!1,void 0,n)}const TA=new RegExp("[~\\*/\\[\\]]");function nd(t,e,n){if(e.search(TA)>=0)throw xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Iu(...e.split("."))._internalPath}catch{throw xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new R(T.INVALID_ARGUMENT,a+t+u)}function p0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Au("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SA extends m0{data(){return super.data()}}function Au(t,e){return typeof e=="string"?nd(t,e):e instanceof Iu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class g0 extends m0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ru(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Au("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ru extends g0{data(e={}){return super.data(e)}}class y0{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ao(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ru(this._firestore,this._userDataWriter,r.key,r,new ao(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ru(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ao(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ru(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ao(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:_A(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _A(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t){if(iu(t)&&t.explicitOrderBy.length===0)throw new R(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rd{}function QL(t,...e){for(const n of e)t=n._apply(t);return t}class IA extends rd{constructor(e,n,r){super(),this.zc=e,this.Hc=n,this.Jc=r,this.type="where"}_apply(e){const n=Jh(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new R(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){E0(c,l);const g=[];for(const y of c)g.push(w0(a,i,y));h={arrayValue:{values:g}}}else h=w0(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||E0(c,l),h=EA(o,s,c,l==="in"||l==="not-in");const d=nt.create(u,l,h);return function(g,y){if(y.V()){const f=Eh(g);if(f!==null&&!f.isEqual(y.field))throw new R(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${f.toString()}' and '${y.field.toString()}'`);const p=wh(g);p!==null&&T0(g,y.field,p)}const E=function(f,p){for(const m of f.filters)if(p.indexOf(m.op)>=0)return m.op;return null}(g,function(f){switch(f){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(E!==null)throw E===y.op?new R(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new R(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${E.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.zc,this.Hc,this.Jc);return new Mn(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new yi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function XL(t,e,n){const r=e,i=Au("where",t);return new IA(i,r,n)}class kA extends rd{constructor(e,n){super(),this.zc=e,this.Yc=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new R(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new R(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new gi(i,s);return function(a,u){if(wh(a)===null){const l=Eh(a);l!==null&&T0(a,l,u.field)}}(r,o),o}(e._query,this.zc,this.Yc);return new Mn(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new yi(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function JL(t,e="asc"){const n=e,r=Au("orderBy",t);return new kA(r,n)}class CA extends rd{constructor(e,n,r){super(),this.type=e,this.Xc=n,this.Zc=r}_apply(e){return new Mn(e.firestore,e.converter,fy(e._query,this.Xc,this.Zc))}}function ZL(t){return lA("limitToLast",t),new CA("limitToLast",t,"L")}function w0(t,e,n){if(typeof(n=we(n))=="string"){if(n==="")throw new R(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dy(e)&&n.indexOf("/")!==-1)throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ie.fromString(n));if(!U.isDocumentKey(r))throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return iy(t,new U(r))}if(n instanceof dt)return iy(t,n._key);throw new R(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Su(n)}.`)}function E0(t,e){if(!Array.isArray(t)||t.length===0)throw new R(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new R(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function T0(t,e,n){if(!n.isEqual(e))throw new R(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{convertValue(e,n="none"){switch(_r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const r={};return Sr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Qh(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ny(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zs(e));default:return null}}convertTimestamp(e){const n=Rn(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ie.fromString(e);G(Qy(r));const i=new so(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(n)||ut(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class id extends xA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Li(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function eM(t){t=Kt(t,Mn);const e=Kt(t.firestore,Un),n=_u(e),r=new id(e);return v0(t._query),oA(n,t._query).then(i=>new y0(e,r,t,i))}function tM(t,e,n,...r){t=Kt(t,dt);const i=Kt(t.firestore,Un),s=Jh(i);let o;return o=typeof(e=we(e))=="string"||e instanceof Iu?wA(s,"updateDoc",t._key,e,n,r):vA(s,"updateDoc",t._key,e),sd(i,[o.toMutation(t._key,xt.exists(!0))])}function nM(t){return sd(Kt(t.firestore,Un),[new _h(t._key,xt.none())])}function rM(t,e){const n=Kt(t.firestore,Un),r=cA(t),i=AA(t.converter,e);return sd(n,[yA(Jh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,xt.exists(!1))]).then(()=>r)}function iM(t,...e){var n,r,i;t=we(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||u0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(u0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof dt)l=Kt(t.firestore,Un),c=nu(t._key.path),u={next:h=>{e[o]&&e[o](RA(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Kt(t,Mn);l=Kt(h.firestore,Un),c=h._query;const d=new id(l);u={next:g=>{e[o]&&e[o](new y0(l,d,h,g))},error:e[o+1],complete:e[o+2]},v0(t._query)}return function(h,d,g,y){const E=new Zv(y),f=new Vv(d,E,g);return h.asyncQueue.enqueueAndForget(async()=>Fv(await Gh(h),f)),()=>{E.nc(),h.asyncQueue.enqueueAndForget(async()=>jv(await Gh(h),f))}}(_u(l),c,a,u)}function sd(t,e){return function(n,r){const i=new Bt;return n.asyncQueue.enqueueAndForget(async()=>Gx(await sA(n),r,i)),i.promise}(_u(t),e)}function RA(t,e,n){const r=n.docs.get(e._key),i=new id(t);return new g0(t,i,e._key,r,new ao(n.hasPendingWrites,n.fromCache),e.converter)}function sM(){return new Zh("serverTimestamp")}(function(t,e=!0){(function(n){ci=n})(ii),Vt(new Mt("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Un(i,new jk(n.getProvider("auth-internal")),new qk(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),ot(Yg,"3.4.3",t),ot(Yg,"3.4.3","esm2017")})();function NA(t){return Array.prototype.slice.call(t)}function S0(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function Nu(t,e,n){var r,i=new Promise(function(s,o){r=t[e].apply(t,n),S0(r).then(s,o)});return i.request=r,i}function DA(t,e,n){var r=Nu(t,e,n);return r.then(function(i){if(!!i)return new uo(i,r.request)})}function Mi(t,e,n){n.forEach(function(r){Object.defineProperty(t.prototype,r,{get:function(){return this[e][r]},set:function(i){this[e][r]=i}})})}function od(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return Nu(this[e],i,arguments)})})}function Du(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return this[e][i].apply(this[e],arguments)})})}function _0(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return DA(this[e],i,arguments)})})}function Dr(t){this._index=t}Mi(Dr,"_index",["name","keyPath","multiEntry","unique"]);od(Dr,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);_0(Dr,"_index",IDBIndex,["openCursor","openKeyCursor"]);function uo(t,e){this._cursor=t,this._request=e}Mi(uo,"_cursor",["direction","key","primaryKey","value"]);od(uo,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(uo.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),S0(e._request).then(function(r){if(!!r)return new uo(r,e._request)})})})});function Wt(t){this._store=t}Wt.prototype.createIndex=function(){return new Dr(this._store.createIndex.apply(this._store,arguments))};Wt.prototype.index=function(){return new Dr(this._store.index.apply(this._store,arguments))};Mi(Wt,"_store",["name","keyPath","indexNames","autoIncrement"]);od(Wt,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);_0(Wt,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);Du(Wt,"_store",IDBObjectStore,["deleteIndex"]);function lo(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}lo.prototype.objectStore=function(){return new Wt(this._tx.objectStore.apply(this._tx,arguments))};Mi(lo,"_tx",["objectStoreNames","mode"]);Du(lo,"_tx",IDBTransaction,["abort"]);function bu(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new lo(n)}bu.prototype.createObjectStore=function(){return new Wt(this._db.createObjectStore.apply(this._db,arguments))};Mi(bu,"_db",["name","version","objectStoreNames"]);Du(bu,"_db",IDBDatabase,["deleteObjectStore","close"]);function Pu(t){this._db=t}Pu.prototype.transaction=function(){return new lo(this._db.transaction.apply(this._db,arguments))};Mi(Pu,"_db",["name","version","objectStoreNames"]);Du(Pu,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[Wt,Dr].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=NA(arguments),r=n[n.length-1],i=this._store||this._index,s=i[t].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})})});[Dr,Wt].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var r=this,i=[];return new Promise(function(s){r.iterateCursor(e,function(o){if(!o){s(i);return}if(i.push(o.value),n!==void 0&&i.length==n){s(i);return}o.continue()})})})});function ad(t,e,n){var r=Nu(indexedDB,"open",[t,e]),i=r.request;return i&&(i.onupgradeneeded=function(s){n&&n(new bu(i.result,s.oldVersion,i.transaction))}),r.then(function(s){return new Pu(s)})}function ud(t){return Nu(indexedDB,"deleteDatabase",[t])}const I0="@firebase/installations",ld="0.5.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=1e4,C0=`w:${ld}`,x0="FIS_v2",bA="https://firebaseinstallations.googleapis.com/v1",PA=60*60*1e3,OA="installations",LA="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},br=new fr(OA,LA,MA);function A0(t){return t instanceof sn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0({projectId:t}){return`${bA}/projects/${t}/installations`}function N0(t){return{token:t.token,requestStatus:2,expiresIn:UA(t.expiresIn),creationTime:Date.now()}}async function D0(t,e){const r=(await e.json()).error;return br.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function b0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $A(t,{refreshToken:e}){const n=b0(t);return n.append("Authorization",FA(e)),n}async function P0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function UA(t){return Number(t.replace("s","000"))}function FA(t){return`${x0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(t,{fid:e}){const n=R0(t),r=b0(t),i={fid:e,authVersion:x0,appId:t.appId,sdkVersion:C0},s={method:"POST",headers:r,body:JSON.stringify(i)},o=await P0(()=>fetch(n,s));if(o.ok){const a=await o.json();return{fid:a.fid||e,registrationStatus:2,refreshToken:a.refreshToken,authToken:N0(a.authToken)}}else throw await D0("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=/^[cdef][\w-]{21}$/,cd="";function zA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=qA(t);return BA.test(n)?n:cd}catch{return cd}}function qA(t){return VA(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=new Map;function M0(t,e){const n=Ou(t);$0(n,e),HA(n,e)}function $0(t,e){const n=L0.get(t);if(!!n)for(const r of n)r(e)}function HA(t,e){const n=KA();n&&n.postMessage({key:t,fid:e}),WA()}let Pr=null;function KA(){return!Pr&&"BroadcastChannel"in self&&(Pr=new BroadcastChannel("[Firebase] FID Change"),Pr.onmessage=t=>{$0(t.data.key,t.data.fid)}),Pr}function WA(){L0.size===0&&Pr&&(Pr.close(),Pr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA="firebase-installations-database",YA=1,Or="firebase-installations-store";let hd=null;function dd(){return hd||(hd=ad(GA,YA,t=>{switch(t.oldVersion){case 0:t.createObjectStore(Or)}})),hd}async function Lu(t,e){const n=Ou(t),i=(await dd()).transaction(Or,"readwrite"),s=i.objectStore(Or),o=await s.get(n);return await s.put(e,n),await i.complete,(!o||o.fid!==e.fid)&&M0(t,e.fid),e}async function U0(t){const e=Ou(t),r=(await dd()).transaction(Or,"readwrite");await r.objectStore(Or).delete(e),await r.complete}async function Mu(t,e){const n=Ou(t),i=(await dd()).transaction(Or,"readwrite"),s=i.objectStore(Or),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.complete,a&&(!o||o.fid!==a.fid)&&M0(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fd(t){let e;const n=await Mu(t,r=>{const i=QA(r),s=XA(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===cd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function QA(t){const e=t||{fid:zA(),registrationStatus:0};return j0(e)}function XA(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(br.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=JA(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ZA(t)}:{installationEntry:e}}async function JA(t,e){try{const n=await jA(t,e);return Lu(t,n)}catch(n){throw A0(n)&&n.customData.serverCode===409?await U0(t):await Lu(t,{fid:e.fid,registrationStatus:0}),n}}async function ZA(t){let e=await F0(t);for(;e.registrationStatus===1;)await O0(100),e=await F0(t);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await fd(t);return r||n}return e}function F0(t){return Mu(t,e=>{if(!e)throw br.create("installation-not-found");return j0(e)})}function j0(t){return eR(t)?{fid:t.fid,registrationStatus:0}:t}function eR(t){return t.registrationStatus===1&&t.registrationTime+k0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR({appConfig:t,platformLoggerProvider:e},n){const r=nR(t,n),i=$A(t,n),s=e.getImmediate({optional:!0});s&&i.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:C0}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await P0(()=>fetch(r,a));if(u.ok){const l=await u.json();return N0(l)}else throw await D0("Generate Auth Token",u)}function nR(t,{fid:e}){return`${R0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pd(t,e=!1){let n;const r=await Mu(t.appConfig,s=>{if(!B0(s))throw br.create("not-registered");const o=s.authToken;if(!e&&sR(o))return s;if(o.requestStatus===1)return n=rR(t,e),s;{if(!navigator.onLine)throw br.create("app-offline");const a=aR(s);return n=iR(t,a),a}});return n?await n:r.authToken}async function rR(t,e){let n=await V0(t.appConfig);for(;n.authToken.requestStatus===1;)await O0(100),n=await V0(t.appConfig);const r=n.authToken;return r.requestStatus===0?pd(t,e):r}function V0(t){return Mu(t,e=>{if(!B0(e))throw br.create("not-registered");const n=e.authToken;return uR(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function iR(t,e){try{const n=await tR(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Lu(t.appConfig,r),n}catch(n){if(A0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await U0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Lu(t.appConfig,r)}throw n}}function B0(t){return t!==void 0&&t.registrationStatus===2}function sR(t){return t.requestStatus===2&&!oR(t)}function oR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+PA}function aR(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function uR(t){return t.requestStatus===1&&t.requestTime+k0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(t){const e=t,{installationEntry:n,registrationPromise:r}=await fd(e.appConfig);return r?r.catch(console.error):pd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cR(t,e=!1){const n=t;return await hR(n.appConfig),(await pd(n,e)).token}async function hR(t){const{registrationPromise:e}=await fd(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){if(!t||!t.options)throw md("App Configuration");if(!t.name)throw md("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw md(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function md(t){return br.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="installations",fR="installations-internal",pR=t=>{const e=t.getProvider("app").getImmediate(),n=dR(e),r=mr(e,"platform-logger");return{app:e,appConfig:n,platformLoggerProvider:r,_delete:()=>Promise.resolve()}},mR=t=>{const e=t.getProvider("app").getImmediate(),n=mr(e,z0).getImmediate();return{getId:()=>lR(n),getToken:i=>cR(n,i)}};function gR(){Vt(new Mt(z0,pR,"PUBLIC")),Vt(new Mt(fR,mR,"PRIVATE"))}gR();ot(I0,ld);ot(I0,ld,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="/firebase-messaging-sw.js",vR="/firebase-cloud-messaging-push-scope",q0="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",wR="https://fcmregistrations.googleapis.com/v1",H0="google.c.a.c_id",ER="google.c.a.c_l",TR="google.c.a.ts",SR="google.c.a.e";var K0;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(K0||(K0={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var co;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(co||(co={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function _R(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="fcm_token_details_db",IR=5,W0="fcm_token_object_Store";async function kR(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(gd))return null;let e=null;return(await ad(gd,IR,async r=>{var i;if(r.oldVersion<2||!r.objectStoreNames.contains(W0))return;const s=r.transaction.objectStore(W0),o=await s.index("fcmSenderId").get(t);if(await s.clear(),!!o){if(r.oldVersion===2){const a=o;if(!a.auth||!a.p256dh||!a.endpoint)return;e={token:a.fcmToken,createTime:(i=a.createTime)!==null&&i!==void 0?i:Date.now(),subscriptionOptions:{auth:a.auth,p256dh:a.p256dh,endpoint:a.endpoint,swScope:a.swScope,vapidKey:typeof a.vapidKey=="string"?a.vapidKey:dn(a.vapidKey)}}}else if(r.oldVersion===3){const a=o;e={token:a.fcmToken,createTime:a.createTime,subscriptionOptions:{auth:dn(a.auth),p256dh:dn(a.p256dh),endpoint:a.endpoint,swScope:a.swScope,vapidKey:dn(a.vapidKey)}}}else if(r.oldVersion===4){const a=o;e={token:a.fcmToken,createTime:a.createTime,subscriptionOptions:{auth:dn(a.auth),p256dh:dn(a.p256dh),endpoint:a.endpoint,swScope:a.swScope,vapidKey:dn(a.vapidKey)}}}}})).close(),await ud(gd),await ud("fcm_vapid_details_db"),await ud("undefined"),CR(e)?e:null}function CR(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR="firebase-messaging-database",AR=1,Lr="firebase-messaging-store";let yd=null;function vd(){return yd||(yd=ad(xR,AR,t=>{switch(t.oldVersion){case 0:t.createObjectStore(Lr)}})),yd}async function G0(t){const e=Ed(t),r=await(await vd()).transaction(Lr).objectStore(Lr).get(e);if(r)return r;{const i=await kR(t.appConfig.senderId);if(i)return await wd(t,i),i}}async function wd(t,e){const n=Ed(t),i=(await vd()).transaction(Lr,"readwrite");return await i.objectStore(Lr).put(e,n),await i.complete,e}async function RR(t){const e=Ed(t),r=(await vd()).transaction(Lr,"readwrite");await r.objectStore(Lr).delete(e),await r.complete}function Ed({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ke=new fr("messaging","Messaging",NR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(t,e){const n=await Sd(t),r=Q0(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Td(t.appConfig),i)).json()}catch(o){throw Ke.create("token-subscribe-failed",{errorInfo:o})}if(s.error){const o=s.error.message;throw Ke.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Ke.create("token-subscribe-no-token");return s.token}async function bR(t,e){const n=await Sd(t),r=Q0(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Td(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Ke.create("token-update-failed",{errorInfo:o})}if(s.error){const o=s.error.message;throw Ke.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Ke.create("token-update-no-token");return s.token}async function Y0(t,e){const n=await Sd(t),r={method:"DELETE",headers:n};try{const s=await(await fetch(`${Td(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Ke.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Ke.create("token-unsubscribe-failed",{errorInfo:i})}}function Td({projectId:t}){return`${wR}/projects/${t}/registrations`}async function Sd({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Q0({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==q0&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=7*24*60*60*1e3;async function OR(t){const e=await $R(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:dn(e.getKey("auth")),p256dh:dn(e.getKey("p256dh"))},r=await G0(t.firebaseDependencies);if(r){if(UR(r.subscriptionOptions,n))return Date.now()>=r.createTime+PR?MR(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Y0(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return X0(t.firebaseDependencies,n)}else return X0(t.firebaseDependencies,n)}async function LR(t){const e=await G0(t.firebaseDependencies);e&&(await Y0(t.firebaseDependencies,e.token),await RR(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function MR(t,e){try{const n=await bR(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await wd(t.firebaseDependencies,r),n}catch(n){throw await LR(t),n}}async function X0(t,e){const r={token:await DR(t,e),createTime:Date.now(),subscriptionOptions:e};return await wd(t,r),r.token}async function $R(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:_R(e)})}function UR(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return FR(e,t),jR(e,t),VR(e,t),e}function FR(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i)}function jR(t,e){!e.data||(t.data=e.data)}function VR(t,e){if(!e.fcmOptions)return;t.fcmOptions={};const n=e.fcmOptions.link;n&&(t.fcmOptions.link=n);const r=e.fcmOptions.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(t){return typeof t=="object"&&!!t&&H0 in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Z0("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Z0("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Z0(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(t){if(!t||!t.options)throw _d("App Configuration Object");if(!t.name)throw _d("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw _d(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function _d(t){return Ke.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=zR(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(t){try{t.swRegistration=await navigator.serviceWorker.register(yR,{scope:vR}),t.swRegistration.update().catch(()=>{})}catch(e){throw Ke.create("failed-service-worker-registration",{browserErrorMessage:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KR(t,e){if(!e&&!t.swRegistration&&await HR(t),!(!e&&!!t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ke.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=q0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(t,e){if(!navigator)throw Ke.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ke.create("permission-blocked");return await WR(t,e==null?void 0:e.vapidKey),await KR(t,e==null?void 0:e.serviceWorkerRegistration),OR(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(t,e,n){const r=YR(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[H0],message_name:n[ER],message_time:n[TR],message_device_time:Math.floor(Date.now()/1e3)})}function YR(t){switch(t){case co.NOTIFICATION_CLICKED:return"notification_open";case co.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===co.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(J0(n)):t.onMessageHandler.next(J0(n)));const r=n.data;BR(r)&&r[SR]==="1"&&await GR(t,n.messageType,r)}const tw="@firebase/messaging",nw="0.9.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=t=>{const e=new qR(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>QR(e,n)),e},JR=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>ew(e,r)}};function ZR(){Vt(new Mt("messaging",XR,"PUBLIC")),Vt(new Mt("messaging-internal",JR,"PRIVATE")),ot(tw,nw),ot(tw,nw,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(){return typeof window!="undefined"&&Nm()&&await M_()&&$_()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(t,e){if(!navigator)throw Ke.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(t=Ia()){return eN().then(e=>{if(!e)throw Ke.create("unsupported-browser")},e=>{throw Ke.create("indexed-db-unsupported")}),mr(we(t),"messaging").getImmediate()}async function aM(t,e){return t=we(t),ew(t,e)}function uM(t,e){return t=we(t),tN(t,e)}ZR();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Id(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function rw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nN=rw,iw=new fr("auth","Firebase",rw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=new yc("@firebase/auth");function $u(t,...e){sw.logLevel<=ne.ERROR&&sw.error(`Auth (${ii}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw kd(t,...e)}function Gt(t,...e){return kd(t,...e)}function rN(t,e,n){const r=Object.assign(Object.assign({},nN()),{[e]:n});return new fr("auth","Firebase",r).create(e,{appName:t.name})}function kd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iw.create(t,...e)}function Y(t,e,...n){if(!t)throw kd(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $u(e),new Error(e)}function mn(t,e){t||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=new Map;function gn(t){mn(t instanceof Function,"Expected a class definition");let e=ow.get(t);return e?(mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ow.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(t,e){const n=mr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ta(s,e!=null?e:{}))return i;fn(i,"already-initialized")}return n.initialize({options:e})}function sN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oN(){return aw()==="http:"||aw()==="https:"}function aw(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oN()||xm()||"connection"in navigator)?navigator.onLine:!0}function uN(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,mn(n>e,"Short delay should be less than long delay!"),this.isMobile=Cm()||Am()}get(){return aN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t,e){mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=new ho(3e4,6e4);function hN(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Uu(t,e,n,r,i={}){return lw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=_s(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),uw.fetch()(cw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function lw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lN),e);try{const i=new fN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ad(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ad(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ad(t,"email-already-in-use",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw rN(t,c,l);fn(t,c)}}catch(i){if(i instanceof sn)throw i;fn(t,"network-request-failed")}}async function dN(t,e,n,r,i={}){const s=await Uu(t,e,n,r,i);return"mfaPendingCredential"in s&&fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function cw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?xd(t.config,i):`${t.config.apiScheme}://${i}`}class fN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),cN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ad(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(t,e){return Uu(t,"POST","/v1/accounts:delete",e)}async function mN(t,e){return Uu(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gN(t,e=!1){const n=we(t),r=await n.getIdToken(e),i=Nd(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fo(Rd(i.auth_time)),issuedAtTime:fo(Rd(i.iat)),expirationTime:fo(Rd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rd(t){return Number(t)*1e3}function Nd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $u("JWT malformed, contained fewer than 3 sections"),null;try{const i=N_(n);return i?JSON.parse(i):($u("Failed to decode base64 JWT payload"),null)}catch(i){return $u("Caught error parsing JWT payload as JSON",i),null}}function yN(t){const e=Nd(t);return Y(e,"internal-error"),Y(typeof e.exp!="undefined","internal-error"),Y(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sn&&vN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fo(this.lastLoginAt),this.creationTime=fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await po(t,mN(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?SN(s.providerUserInfo):[],a=TN(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new hw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function EN(t){const e=we(t);await Fu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function SN(t){return t.map(e=>{var{providerId:n}=e,r=Id(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _N(t,e){const n=await lw(t,{},async()=>{const r=_s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=cw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken!="undefined","internal-error"),Y(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):yN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _N(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new mo;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,e){Y(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Mr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Id(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new wN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new hw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await po(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gN(this,e)}reload(){return EN(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await po(this,pN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,f=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,p=(l=n.createdAt)!==null&&l!==void 0?l:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:w,isAnonymous:N,providerData:_,stsTokenManager:M}=n;Y(v&&M,e,"internal-error");const F=mo.fromJSON(this.name,M);Y(typeof v=="string",e,"internal-error"),Fn(h,e.name),Fn(d,e.name),Y(typeof w=="boolean",e,"internal-error"),Y(typeof N=="boolean",e,"internal-error"),Fn(g,e.name),Fn(y,e.name),Fn(E,e.name),Fn(f,e.name),Fn(p,e.name),Fn(m,e.name);const x=new Mr({uid:v,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:N,photoURL:y,phoneNumber:g,tenantId:E,stsTokenManager:F,createdAt:p,lastLoginAt:m});return _&&Array.isArray(_)&&(x.providerData=_.map(q=>Object.assign({},q))),f&&(x._redirectEventId=f),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new mo;i.updateFromServerResponse(n);const s=new Mr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fu(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dw.type="NONE";const fw=dw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t,e,n){return`firebase:${t}:${e}:${n}`}class $i{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ju(this.userKey,i.apiKey,s),this.fullPersistenceKey=ju("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $i(gn(fw),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||gn(fw);const o=ju(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=Mr._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new $i(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new $i(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ww(e))return"Blackberry";if(Ew(e))return"Webos";if(Dd(e))return"Safari";if((e.includes("chrome/")||gw(e))&&!e.includes("edge/"))return"Chrome";if(vw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mw(t=ve()){return/firefox\//i.test(t)}function Dd(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gw(t=ve()){return/crios\//i.test(t)}function yw(t=ve()){return/iemobile/i.test(t)}function vw(t=ve()){return/android/i.test(t)}function ww(t=ve()){return/blackberry/i.test(t)}function Ew(t=ve()){return/webos/i.test(t)}function Vu(t=ve()){return/iphone|ipad|ipod/i.test(t)}function IN(t=ve()){var e;return Vu(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function kN(){return Rm()&&document.documentMode===10}function Tw(t=ve()){return Vu(t)||vw(t)||Ew(t)||ww(t)||/windows phone/i.test(t)||yw(t)}function CN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t,e=[]){let n;switch(t){case"Browser":n=pw(ve());break;case"Worker":n=`${pw(ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ii}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Iw(this),this.idTokenSubscription=new Iw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $i.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fu(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?we(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await $i.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Y(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function _w(t){return we(t)}class Iw{constructor(e){this.auth=e,this.observer=null,this.addObserver=B_(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t,e){return dN(t,"POST","/v1/accounts:signInWithIdp",hN(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN="http://localhost";class $r extends kw{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Id(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $r(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ui(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ui(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ui(e,n)}buildRequest(){const e={requestUri:AN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_s(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends Cw{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends go{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends go{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends go{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends go{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mr._fromIdTokenResponse(e,r,i),o=xw(r);return new Fi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xw(r);return new Fi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends sn{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bu(e,n,r,i)}}function Aw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bu._fromErrorAndOperation(t,s,e,r):s})}async function RN(t,e,n=!1){const r=await po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await po(t,Aw(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=Nd(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),Fi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(t,e,n=!1){const r="signIn",i=await Aw(t,r,e),s=await Fi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}const zu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zu,"1"),this.storage.removeItem(zu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(){const t=ve();return Dd(t)||Vu(t)}const PN=1e3,ON=10;class Nw extends Rw{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bN()&&CN(),this.fallbackToPolling=Tw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ON):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nw.type="LOCAL";const LN=Nw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw extends Rw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dw.type="SESSION";const bw=Dw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new qu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await MN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=bd("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function UN(t){Yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(){return typeof Yt().WorkerGlobalScope!="undefined"&&typeof Yt().importScripts=="function"}async function FN(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function VN(){return Pw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="firebaseLocalStorageDb",BN=1,Hu="firebaseLocalStorage",Lw="fbase_key";class yo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ku(t,e){return t.transaction([Hu],e?"readwrite":"readonly").objectStore(Hu)}function zN(){const t=indexedDB.deleteDatabase(Ow);return new yo(t).toPromise()}function Pd(){const t=indexedDB.open(Ow,BN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hu,{keyPath:Lw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hu)?e(r):(r.close(),await zN(),e(await Pd()))})})}async function Mw(t,e,n){const r=Ku(t,!0).put({[Lw]:e,value:n});return new yo(r).toPromise()}async function qN(t,e){const n=Ku(t,!1).get(e),r=await new yo(n).toPromise();return r===void 0?null:r.value}function $w(t,e){const n=Ku(t,!0).delete(e);return new yo(n).toPromise()}const HN=800,KN=3;class Uw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qu._getInstance(VN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FN(),!this.activeServiceWorker)return;this.sender=new $N(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pd();return await Mw(e,zu,"1"),await $w(e,zu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$w(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ku(i,!1).getAll();return new yo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uw.type="LOCAL";const WN=Uw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function YN(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",GN().appendChild(r)})}function QN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ho(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(t,e){return e?gn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od extends kw{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JN(t){return DN(t.auth,new Od(t),t.bypassAuthState)}function ZN(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),NN(n,new Od(t),t.bypassAuthState)}async function eD(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),RN(n,new Od(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JN;case"linkViaPopup":case"linkViaRedirect":return eD;case"reauthViaPopup":case"reauthViaRedirect":return ZN;default:fn(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=new ho(2e3,1e4);class ji extends Fw{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,ji.currentPopupAction&&ji.currentPopupAction.cancel(),ji.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=bd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ji.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,tD.get())};e()}}ji.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD="pendingRedirect",Ld=new Map;class rD extends Fw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Ld.get(this.auth._key());if(!e){try{const r=await iD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ld.set(this.auth._key(),e)}return this.bypassAuthState||Ld.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iD(t,e){const n=oD(e),r=sD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sD(t){return gn(t._redirectPersistence)}function oD(t){return ju(nD,t.config.apiKey,t.name)}async function aD(t,e,n=!1){const r=_w(t),i=XN(r,e),o=await new rD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD=10*60*1e3;class lD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uD&&this.cachedEventUids.clear(),this.cachedEventUids.has(jw(e))}saveEventToCache(e){this.cachedEventUids.add(jw(e)),this.lastProcessedEventTime=Date.now()}}function jw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hD(t,e={}){return Uu(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fD=/^https?/;async function pD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hD(t);for(const n of e)try{if(mD(n))return}catch{}fn(t,"unauthorized-domain")}function mD(t){const e=Cd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fD.test(n))return!1;if(dD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=new ho(3e4,6e4);function Bw(){const t=Yt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yD(t){return new Promise((e,n)=>{var r,i,s;function o(){Bw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bw(),n(Gt(t,"network-request-failed"))},timeout:gD.get()})}if((i=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Yt().gapi)===null||s===void 0?void 0:s.load)o();else{const a=QN("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},YN(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Wu=null,e})}let Wu=null;function vD(t){return Wu=Wu||yD(t),Wu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=new ho(5e3,15e3),ED="__/auth/iframe",TD="emulator/auth/iframe",SD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_D=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ID(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xd(e,TD):`https://${t.config.authDomain}/${ED}`,r={apiKey:e.apiKey,appName:t.name,v:ii},i=_D.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_s(r).slice(1)}`}async function kD(t){const e=await vD(t),n=Yt().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:ID(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),a=Yt().setTimeout(()=>{s(o)},wD.get());function u(){Yt().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xD=500,AD=600,RD="_blank",ND="http://localhost";class zw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DD(t,e,n,r=xD,i=AD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},CD),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ve().toLowerCase();n&&(a=gw(l)?RD:n),mw(l)&&(e=e||ND,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(IN(l)&&a!=="_self")return bD(e||"",a),new zw(null);const h=window.open(e||"",a,c);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new zw(h)}function bD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD="__/auth/handler",OD="emulator/auth/handler";function qw(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ii,eventId:i};if(e instanceof Cw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",V_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof go){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${LD(t)}?${_s(a).slice(1)}`}function LD({config:t}){return t.emulator?xd(t,OD):`https://${t.authDomain}/${PD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="webStorageSupport";class MD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bw,this._completeRedirectFn=aD}async _openPopup(e,n,r,i){var s;mn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=qw(e,n,r,Cd(),i);return DD(e,o,bd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),UN(qw(e,n,r,Cd(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(mn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kD(e),r=new lD(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Md,{type:Md},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Md];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tw()||Dd()||Vu()}}const $D=MD;var Hw="@firebase/auth",Kw="0.19.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jD(t){Vt(new Mt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{Y(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),Y(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sw(t)},u=new xN(o,a);return sN(u,n),u})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vt(new Mt("auth-internal",e=>{const n=_w(e.getProvider("auth").getImmediate());return(r=>new UD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ot(Hw,Kw,FD(t)),ot(Hw,Kw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lM(t=Ia()){const e=mr(t,"auth");return e.isInitialized()?e.getImmediate():iN(t,{popupRedirectResolver:$D,persistence:[WN,LN,bw]})}jD("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="firebasestorage.googleapis.com",Gw="storageBucket",VD=2*60*1e3,BD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends sn{constructor(e,n){super($d(e),`Firebase Storage: ${n} (${$d(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}_codeEquals(e){return $d(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function $d(t){return"storage/"+t}function Ud(){const t="An unknown error occurred, please check the error payload for server response.";return new Se("unknown",t)}function zD(t){return new Se("object-not-found","Object '"+t+"' does not exist.")}function qD(t){return new Se("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function HD(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se("unauthenticated",t)}function KD(){return new Se("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function WD(t){return new Se("unauthorized","User does not have permission to access '"+t+"'.")}function GD(){return new Se("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function YD(){return new Se("canceled","User canceled the upload/download.")}function QD(t){return new Se("invalid-url","Invalid URL '"+t+"'.")}function XD(t){return new Se("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function JD(){return new Se("no-default-bucket","No default bucket found. Did you set the '"+Gw+"' property when initializing the app?")}function ZD(){return new Se("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function eb(){return new Se("no-download-url","The given file does not have any download URLs.")}function Fd(t){return new Se("invalid-argument",t)}function Yw(){return new Se("app-deleted","The Firebase app was deleted.")}function tb(t){return new Se("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function vo(t,e){return new Se("invalid-format","String does not match format '"+t+"': "+e)}function wo(t){throw new Se("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=_t.makeFromUrl(e,n)}catch{return new _t(e,"")}if(r.path==="")return r;throw XD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function l(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},E=n===Ww?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",p=new RegExp(`^https?://${E}/${i}/${f}`,"i"),v=[{regex:a,indices:u,postModify:s},{regex:g,indices:y,postModify:l},{regex:p,indices:{bucket:1,path:2},postModify:l}];for(let w=0;w<v.length;w++){const N=v[w],_=N.regex.exec(e);if(_){const M=_[N.indices.bucket];let F=_[N.indices.path];F||(F=""),r=new _t(M,F),N.postModify(r);break}}if(r==null)throw QD(e);return r}}class nb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let l=!1;function c(...f){l||(l=!0,e.apply(null,f))}function h(f){i=setTimeout(()=>{i=null,t(g,u())},f)}function d(){s&&clearTimeout(s)}function g(f,...p){if(l){d();return}if(f){d(),c.call(null,f,...p);return}if(u()||o){d(),c.call(null,f,...p);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let y=!1;function E(f){y||(y=!0,d(),!l&&(i!==null?(f||(a=2),clearTimeout(i),h(0)):f||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,E(!0)},n),E}function ib(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t){return t!==void 0}function ob(t){return typeof t=="object"&&!Array.isArray(t)}function jd(t){return typeof t=="string"||t instanceof String}function Qw(t){return Vd()&&t instanceof Blob}function Vd(){return typeof Blob!="undefined"}function Xw(t,e,n,r){if(r<e)throw Fd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Fd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Jw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ur;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ur||(Ur={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n,r,i,s,o,a,u,l,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Gu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ur.NO_ERROR,u=s.getStatus();if(!a||this.isRetryStatusCode_(u)){const c=s.getErrorCode()===Ur.ABORT;r(!1,new Gu(!1,null,c));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new Gu(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());sb(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Ud();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?Yw():YD();o(u)}else{const u=GD();o(u)}};this.canceled_?n(!1,new Gu(!1,null,!0)):this.backoffId_=rb(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ib(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class Gu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ub(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function lb(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function cb(t,e){e&&(t["X-Firebase-GMPID"]=e)}function hb(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function db(t,e,n,r,i,s){const o=Jw(t.urlParams),a=t.url+o,u=Object.assign({},t.headers);return cb(u,e),ub(u,n),lb(u,s),hb(u,r),new ab(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function pb(...t){const e=fb();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Vd())return new Blob(t);throw new Se("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function mb(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zd{constructor(e,n){this.data=e,this.contentType=n||null}}function yb(t,e){switch(t){case Qt.RAW:return new zd(Zw(e));case Qt.BASE64:case Qt.BASE64URL:return new zd(e1(t,e));case Qt.DATA_URL:return new zd(wb(e),Eb(e))}throw Ud()}function Zw(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)==56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function vb(t){let e;try{e=decodeURIComponent(t)}catch{throw vo(Qt.DATA_URL,"Malformed data URL.")}return Zw(e)}function e1(t,e){switch(t){case Qt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw vo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Qt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw vo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=gb(e)}catch{throw vo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class t1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw vo(Qt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Tb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}}function wb(t){const e=new t1(t);return e.base64?e1(Qt.BASE64,e.rest):vb(e.rest)}function Eb(t){return new t1(t).contentType}function Tb(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n){let r=0,i="";Qw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Qw(this.data_)){const r=this.data_,i=mb(r,e,n);return i===null?null:new qn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new qn(r,!0)}}static getBlob(...e){if(Vd()){const n=e.map(r=>r instanceof qn?r.data_:r);return new qn(pb.apply(null,n))}else{const n=e.map(o=>jd(o)?yb(Qt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new qn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t){let e;try{e=JSON.parse(t)}catch{return null}return ob(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _b(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function r1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(t,e){return e}class rt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Ib}}let Yu=null;function kb(t){return!jd(t)||t.length<2?t:r1(t)}function i1(){if(Yu)return Yu;const t=[];t.push(new rt("bucket")),t.push(new rt("generation")),t.push(new rt("metageneration")),t.push(new rt("name","fullPath",!0));function e(s,o){return kb(o)}const n=new rt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new rt("size");return i.xform=r,t.push(i),t.push(new rt("timeCreated")),t.push(new rt("updated")),t.push(new rt("md5Hash",null,!0)),t.push(new rt("cacheControl",null,!0)),t.push(new rt("contentDisposition",null,!0)),t.push(new rt("contentEncoding",null,!0)),t.push(new rt("contentLanguage",null,!0)),t.push(new rt("contentType",null,!0)),t.push(new rt("metadata","customMetadata",!0)),Yu=t,Yu}function Cb(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new _t(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function xb(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Cb(r,t),r}function s1(t,e,n){const r=n1(e);return r===null?null:xb(t,r,n)}function Ab(t,e,n,r){const i=n1(e);if(i===null||!jd(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),g=Bd(d,n,r),y=Jw({alt:"media",token:l});return g+y})[0]}function Rb(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class o1{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(t){if(!t)throw Ud()}function Nb(t,e){function n(r,i){const s=s1(t,i,e);return a1(s!==null),s}return n}function Db(t,e){function n(r,i){const s=s1(t,i,e);return a1(s!==null),Ab(s,i,t.host,t._protocol)}return n}function u1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=KD():i=HD():n.getStatus()===402?i=qD(t.bucket):n.getStatus()===403?i=WD(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function bb(t){const e=u1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=zD(t.path)),s.serverResponse=i.serverResponse,s}return n}function Pb(t,e,n){const r=e.fullServerUrl(),i=Bd(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new o1(i,s,Db(t,n),o);return a.errorHandler=bb(e),a}function Ob(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Lb(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Ob(null,e)),r}function Mb(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let w=0;w<2;w++)v=v+Math.random().toString().slice(2);return v}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const l=Lb(e,r,i),c=Rb(l,n),h="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+u+"--",g=qn.getBlob(h,r,d);if(g===null)throw ZD();const y={name:l.fullPath},E=Bd(s,t.host,t._protocol),f="POST",p=t.maxUploadRetryTime,m=new o1(E,f,Nb(t,n),p);return m.urlParams=y,m.headers=o,m.body=g.uploadData(),m.errorHandler=u1(e),m}class $b{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ur.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ur.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ur.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw wo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw wo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw wo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw wo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw wo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Ub extends $b{initXhr(){this.xhr_.responseType="text"}}function l1(){return new Ub}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n){this._service=e,n instanceof _t?this._location=n:this._location=_t.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fr(e,n)}get root(){const e=new _t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return r1(this._location.path)}get storage(){return this._service}get parent(){const e=Sb(this._location.path);if(e===null)return null;const n=new _t(this._location.bucket,e);return new Fr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw tb(e)}}function Fb(t,e,n){t._throwIfRoot("uploadBytes");const r=Mb(t.storage,t._location,i1(),new qn(e,!0),n);return t.storage.makeRequestWithTokens(r,l1).then(i=>({metadata:i,ref:t}))}function jb(t){t._throwIfRoot("getDownloadURL");const e=Pb(t.storage,t._location,i1());return t.storage.makeRequestWithTokens(e,l1).then(n=>{if(n===null)throw eb();return n})}function Vb(t,e){const n=_b(t._location.path,e),r=new _t(t._location.bucket,n);return new Fr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t){return/^[A-Za-z]+:\/\//.test(t)}function zb(t,e){return new Fr(t,e)}function c1(t,e){if(t instanceof qd){const n=t;if(n._bucket==null)throw JD();const r=new Fr(n,n._bucket);return e!=null?c1(r,e):r}else return e!==void 0?Vb(t,e):t}function qb(t,e){if(e&&Bb(e)){if(t instanceof qd)return zb(t,e);throw Fd("To use ref(service, url), the first argument must be a Storage instance.")}else return c1(t,e)}function h1(t,e){const n=e==null?void 0:e[Gw];return n==null?null:_t.makeFromBucketSpec(n,t)}class qd{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Ww,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VD,this._maxUploadRetryTime=BD,this._requests=new Set,i!=null?this._bucket=_t.makeFromBucketSpec(i,this._host):this._bucket=h1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_t.makeFromBucketSpec(this._url,e):this._bucket=h1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Xw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Xw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fr(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new nb(Yw());{const s=db(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const d1="@firebase/storage",f1="0.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1="storage";function cM(t,e,n){return t=we(t),Fb(t,e,n)}function hM(t){return t=we(t),jb(t)}function dM(t,e){return t=we(t),qb(t,e)}function fM(t=Ia(),e){return t=we(t),mr(t,p1).getImmediate({identifier:e})}function Hb(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new qd(n,r,i,e,ii)}function Kb(){Vt(new Mt(p1,Hb,"PUBLIC").setMultipleInstances(!0)),ot(d1,f1,""),ot(d1,f1,"esm2017")}Kb();var Wb="firebase",Gb="9.6.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot(Wb,Gb,"app");var m1={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(ws,function(){var n=1e3,r=6e4,i=36e5,s="millisecond",o="second",a="minute",u="hour",l="day",c="week",h="month",d="quarter",g="year",y="date",E="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(L,$,A){var B=String(L);return!B||B.length>=$?L:""+Array($+1-B.length).join(A)+L},w={s:v,z:function(L){var $=-L.utcOffset(),A=Math.abs($),B=Math.floor(A/60),P=A%60;return($<=0?"+":"-")+v(B,2,"0")+":"+v(P,2,"0")},m:function L($,A){if($.date()<A.date())return-L(A,$);var B=12*(A.year()-$.year())+(A.month()-$.month()),P=$.clone().add(B,h),J=A-P<0,Q=$.clone().add(B+(J?-1:1),h);return+(-(B+(A-P)/(J?P-Q:Q-P))||0)},a:function(L){return L<0?Math.ceil(L)||0:Math.floor(L)},p:function(L){return{M:h,y:g,w:c,d:l,D:y,h:u,m:a,s:o,ms:s,Q:d}[L]||String(L||"").toLowerCase().replace(/s$/,"")},u:function(L){return L===void 0}},N="en",_={};_[N]=m;var M=function(L){return L instanceof _n},F=function(L,$,A){var B;if(!L)return N;if(typeof L=="string")_[L]&&(B=L),$&&(_[L]=$,B=L);else{var P=L.name;_[P]=L,B=P}return!A&&B&&(N=B),B||!A&&N},x=function(L,$){if(M(L))return L.clone();var A=typeof $=="object"?$:{};return A.date=L,A.args=arguments,new _n(A)},q=w;q.l=F,q.i=M,q.w=function(L,$){return x(L,{locale:$.$L,utc:$.$u,x:$.$x,$offset:$.$offset})};var _n=function(){function L(A){this.$L=F(A.locale,null,!0),this.parse(A)}var $=L.prototype;return $.parse=function(A){this.$d=function(B){var P=B.date,J=B.utc;if(P===null)return new Date(NaN);if(q.u(P))return new Date;if(P instanceof Date)return new Date(P);if(typeof P=="string"&&!/Z$/i.test(P)){var Q=P.match(f);if(Q){var se=Q[2]-1||0,I=(Q[7]||"0").substring(0,3);return J?new Date(Date.UTC(Q[1],se,Q[3]||1,Q[4]||0,Q[5]||0,Q[6]||0,I)):new Date(Q[1],se,Q[3]||1,Q[4]||0,Q[5]||0,Q[6]||0,I)}}return new Date(P)}(A),this.$x=A.x||{},this.init()},$.init=function(){var A=this.$d;this.$y=A.getFullYear(),this.$M=A.getMonth(),this.$D=A.getDate(),this.$W=A.getDay(),this.$H=A.getHours(),this.$m=A.getMinutes(),this.$s=A.getSeconds(),this.$ms=A.getMilliseconds()},$.$utils=function(){return q},$.isValid=function(){return this.$d.toString()!==E},$.isSame=function(A,B){var P=x(A);return this.startOf(B)<=P&&P<=this.endOf(B)},$.isAfter=function(A,B){return x(A)<this.startOf(B)},$.isBefore=function(A,B){return this.endOf(B)<x(A)},$.$g=function(A,B,P){return q.u(A)?this[B]:this.set(P,A)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(A,B){var P=this,J=!!q.u(B)||B,Q=q.p(A),se=function(Ct,ye){var In=q.w(P.$u?Date.UTC(P.$y,ye,Ct):new Date(P.$y,ye,Ct),P);return J?In:In.endOf(l)},I=function(Ct,ye){return q.w(P.toDate()[Ct].apply(P.toDate("s"),(J?[0,0,0,0]:[23,59,59,999]).slice(ye)),P)},D=this.$W,j=this.$M,re=this.$D,oe="set"+(this.$u?"UTC":"");switch(Q){case g:return J?se(1,0):se(31,11);case h:return J?se(1,j):se(0,j+1);case c:var yt=this.$locale().weekStart||0,vt=(D<yt?D+7:D)-yt;return se(J?re-vt:re+(6-vt),j);case l:case y:return I(oe+"Hours",0);case u:return I(oe+"Minutes",1);case a:return I(oe+"Seconds",2);case o:return I(oe+"Milliseconds",3);default:return this.clone()}},$.endOf=function(A){return this.startOf(A,!1)},$.$set=function(A,B){var P,J=q.p(A),Q="set"+(this.$u?"UTC":""),se=(P={},P[l]=Q+"Date",P[y]=Q+"Date",P[h]=Q+"Month",P[g]=Q+"FullYear",P[u]=Q+"Hours",P[a]=Q+"Minutes",P[o]=Q+"Seconds",P[s]=Q+"Milliseconds",P)[J],I=J===l?this.$D+(B-this.$W):B;if(J===h||J===g){var D=this.clone().set(y,1);D.$d[se](I),D.init(),this.$d=D.set(y,Math.min(this.$D,D.daysInMonth())).$d}else se&&this.$d[se](I);return this.init(),this},$.set=function(A,B){return this.clone().$set(A,B)},$.get=function(A){return this[q.p(A)]()},$.add=function(A,B){var P,J=this;A=Number(A);var Q=q.p(B),se=function(j){var re=x(J);return q.w(re.date(re.date()+Math.round(j*A)),J)};if(Q===h)return this.set(h,this.$M+A);if(Q===g)return this.set(g,this.$y+A);if(Q===l)return se(1);if(Q===c)return se(7);var I=(P={},P[a]=r,P[u]=i,P[o]=n,P)[Q]||1,D=this.$d.getTime()+A*I;return q.w(D,this)},$.subtract=function(A,B){return this.add(-1*A,B)},$.format=function(A){var B=this,P=this.$locale();if(!this.isValid())return P.invalidDate||E;var J=A||"YYYY-MM-DDTHH:mm:ssZ",Q=q.z(this),se=this.$H,I=this.$m,D=this.$M,j=P.weekdays,re=P.months,oe=function(ye,In,ec,ma){return ye&&(ye[In]||ye(B,J))||ec[In].substr(0,ma)},yt=function(ye){return q.s(se%12||12,ye,"0")},vt=P.meridiem||function(ye,In,ec){var ma=ye<12?"AM":"PM";return ec?ma.toLowerCase():ma},Ct={YY:String(this.$y).slice(-2),YYYY:this.$y,M:D+1,MM:q.s(D+1,2,"0"),MMM:oe(P.monthsShort,D,re,3),MMMM:oe(re,D),D:this.$D,DD:q.s(this.$D,2,"0"),d:String(this.$W),dd:oe(P.weekdaysMin,this.$W,j,2),ddd:oe(P.weekdaysShort,this.$W,j,3),dddd:j[this.$W],H:String(se),HH:q.s(se,2,"0"),h:yt(1),hh:yt(2),a:vt(se,I,!0),A:vt(se,I,!1),m:String(I),mm:q.s(I,2,"0"),s:String(this.$s),ss:q.s(this.$s,2,"0"),SSS:q.s(this.$ms,3,"0"),Z:Q};return J.replace(p,function(ye,In){return In||Ct[ye]||Q.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(A,B,P){var J,Q=q.p(B),se=x(A),I=(se.utcOffset()-this.utcOffset())*r,D=this-se,j=q.m(this,se);return j=(J={},J[g]=j/12,J[h]=j,J[d]=j/3,J[c]=(D-I)/6048e5,J[l]=(D-I)/864e5,J[u]=D/i,J[a]=D/r,J[o]=D/n,J)[Q]||D,P?j:q.a(j)},$.daysInMonth=function(){return this.endOf(h).$D},$.$locale=function(){return _[this.$L]},$.locale=function(A,B){if(!A)return this.$L;var P=this.clone(),J=F(A,B,!0);return J&&(P.$L=J),P},$.clone=function(){return q.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},L}(),Xe=_n.prototype;return x.prototype=Xe,[["$ms",s],["$s",o],["$m",a],["$H",u],["$W",l],["$M",h],["$y",g],["$D",y]].forEach(function(L){Xe[L[1]]=function($){return this.$g($,L[0],L[1])}}),x.extend=function(L,$){return L.$i||(L($,_n,x),L.$i=!0),x},x.locale=F,x.isDayjs=M,x.unix=function(L){return x(1e3*L)},x.en=_[N],x.Ls=_,x.p={},x})})(m1);var pM=m1.exports,Yb=1/0,Qb="[object Symbol]",Xb=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Jb=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,g1="\\ud800-\\udfff",Zb="\\u0300-\\u036f\\ufe20-\\ufe23",eP="\\u20d0-\\u20f0",y1="\\u2700-\\u27bf",v1="a-z\\xdf-\\xf6\\xf8-\\xff",tP="\\xac\\xb1\\xd7\\xf7",nP="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",rP="\\u2000-\\u206f",iP=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",w1="A-Z\\xc0-\\xd6\\xd8-\\xde",sP="\\ufe0e\\ufe0f",E1=tP+nP+rP+iP,Hd="['\u2019]",T1="["+E1+"]",S1="["+Zb+eP+"]",_1="\\d+",oP="["+y1+"]",I1="["+v1+"]",k1="[^"+g1+E1+_1+y1+v1+w1+"]",aP="\\ud83c[\\udffb-\\udfff]",uP="(?:"+S1+"|"+aP+")",lP="[^"+g1+"]",C1="(?:\\ud83c[\\udde6-\\uddff]){2}",x1="[\\ud800-\\udbff][\\udc00-\\udfff]",Vi="["+w1+"]",cP="\\u200d",A1="(?:"+I1+"|"+k1+")",hP="(?:"+Vi+"|"+k1+")",R1="(?:"+Hd+"(?:d|ll|m|re|s|t|ve))?",N1="(?:"+Hd+"(?:D|LL|M|RE|S|T|VE))?",D1=uP+"?",b1="["+sP+"]?",dP="(?:"+cP+"(?:"+[lP,C1,x1].join("|")+")"+b1+D1+")*",fP=b1+D1+dP,pP="(?:"+[oP,C1,x1].join("|")+")"+fP,mP=RegExp(Hd,"g"),gP=RegExp(S1,"g"),yP=RegExp([Vi+"?"+I1+"+"+R1+"(?="+[T1,Vi,"$"].join("|")+")",hP+"+"+N1+"(?="+[T1,Vi+A1,"$"].join("|")+")",Vi+"?"+A1+"+"+R1,Vi+"+"+N1,_1,pP].join("|"),"g"),vP=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,wP={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"ss"},EP=typeof ws=="object"&&ws&&ws.Object===Object&&ws,TP=typeof self=="object"&&self&&self.Object===Object&&self,SP=EP||TP||Function("return this")();function _P(t,e,n,r){var i=-1,s=t?t.length:0;for(r&&s&&(n=t[++i]);++i<s;)n=e(n,t[i],i,t);return n}function IP(t){return t.match(Xb)||[]}function kP(t){return function(e){return t==null?void 0:t[e]}}var CP=kP(wP);function xP(t){return vP.test(t)}function AP(t){return t.match(yP)||[]}var RP=Object.prototype,NP=RP.toString,P1=SP.Symbol,O1=P1?P1.prototype:void 0,L1=O1?O1.toString:void 0;function DP(t){if(typeof t=="string")return t;if(OP(t))return L1?L1.call(t):"";var e=t+"";return e=="0"&&1/t==-Yb?"-0":e}function bP(t){return function(e){return _P($P(LP(e).replace(mP,"")),t,"")}}function PP(t){return!!t&&typeof t=="object"}function OP(t){return typeof t=="symbol"||PP(t)&&NP.call(t)==Qb}function M1(t){return t==null?"":DP(t)}function LP(t){return t=M1(t),t&&t.replace(Jb,CP).replace(gP,"")}var MP=bP(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()});function $P(t,e,n){return t=M1(t),e=n?void 0:e,e===void 0?xP(t)?AP(t):IP(t):t.match(e)||[]}var mM=MP;function UP(t){let e;const n=new Set,r=(l,c)=>{const h=typeof l=="function"?l(e):l;if(h!==e){const d=e;e=c?h:Object.assign({},e,h),n.forEach(g=>g(e,d))}},i=()=>e,s=(l,c=i,h=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let d=c(e);function g(){const y=c(e);if(!h(d,y)){const E=d;l(d=y,E)}}return n.add(g),()=>n.delete(g)},u={setState:r,getState:i,subscribe:(l,c,h)=>c||h?s(l,c,h):(n.add(l),()=>n.delete(l)),destroy:()=>n.clear()};return e=t(r,i,u),u}const FP=typeof window=="undefined"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),$1=FP?V.exports.useEffect:V.exports.useLayoutEffect;function gM(t){const e=typeof t=="function"?UP(t):t,n=(r=e.getState,i=Object.is)=>{const[,s]=V.exports.useReducer(f=>f+1,0),o=e.getState(),a=V.exports.useRef(o),u=V.exports.useRef(r),l=V.exports.useRef(i),c=V.exports.useRef(!1),h=V.exports.useRef();h.current===void 0&&(h.current=r(o));let d,g=!1;(a.current!==o||u.current!==r||l.current!==i||c.current)&&(d=r(o),g=!i(h.current,d)),$1(()=>{g&&(h.current=d),a.current=o,u.current=r,l.current=i,c.current=!1});const y=V.exports.useRef(o);$1(()=>{const f=()=>{try{const m=e.getState(),v=u.current(m);l.current(h.current,v)||(a.current=m,h.current=v,s())}catch{c.current=!0,s()}},p=e.subscribe(f);return e.getState()!==y.current&&f(),p},[]);const E=g?d:h.current;return V.exports.useDebugValue(E),E};return Object.assign(n,e),n[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const r=[n,e];return{next(){const i=r.length<=0;return{value:r.shift(),done:i}}}},n}const yM=a=>{var u=a,{className:t="",color:e="#0d6efd",width:n="2em",height:r="2em",style:i,duration:s="1s"}=u,o=tc(u,["className","color","width","height","style","duration"]);return Cn("div",vs(ys({},o),{style:vs(ys({},i),{["--width"]:n,["--height"]:r,["--color"]:e,["--duration"]:s,["--border-color"]:/^\#......$/gm.test(e)?`${e}33`:e}),className:`cssfx-spin ${t}`}))};var Kd=function(t,e){return Kd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},Kd(t,e)};function jP(t,e){Kd(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var Eo=function(){return Eo=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Eo.apply(this,arguments)};function VP(t,e,n,r){var i,s=!1,o=0;function a(){i&&clearTimeout(i)}function u(){a(),s=!0}typeof e!="boolean"&&(r=n,n=e,e=void 0);function l(){var c=this,h=Date.now()-o,d=arguments;if(s)return;function g(){o=Date.now(),n.apply(c,d)}function y(){i=void 0}r&&!i&&g(),a(),r===void 0&&h>t?g():e!==!0&&(i=setTimeout(r?y:g,r===void 0?t-h:t))}return l.cancel=u,l}var Bi={Pixel:"Pixel",Percent:"Percent"},U1={unit:Bi.Percent,value:.8};function F1(t){return typeof t=="number"?{unit:Bi.Percent,value:t*100}:typeof t=="string"?t.match(/^(\d*(\.\d+)?)px$/)?{unit:Bi.Pixel,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:Bi.Percent,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),U1):(console.warn("scrollThreshold should be string or number"),U1)}var vM=function(t){jP(e,t);function e(n){var r=t.call(this,n)||this;return r.lastScrollTop=0,r.actionTriggered=!1,r.startY=0,r.currentY=0,r.dragging=!1,r.maxPullDownDistance=0,r.getScrollableTarget=function(){return r.props.scrollableTarget instanceof HTMLElement?r.props.scrollableTarget:typeof r.props.scrollableTarget=="string"?document.getElementById(r.props.scrollableTarget):(r.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},r.onStart=function(i){r.lastScrollTop||(r.dragging=!0,i instanceof MouseEvent?r.startY=i.pageY:i instanceof TouchEvent&&(r.startY=i.touches[0].pageY),r.currentY=r.startY,r._infScroll&&(r._infScroll.style.willChange="transform",r._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},r.onMove=function(i){!r.dragging||(i instanceof MouseEvent?r.currentY=i.pageY:i instanceof TouchEvent&&(r.currentY=i.touches[0].pageY),!(r.currentY<r.startY)&&(r.currentY-r.startY>=Number(r.props.pullDownToRefreshThreshold)&&r.setState({pullToRefreshThresholdBreached:!0}),!(r.currentY-r.startY>r.maxPullDownDistance*1.5)&&r._infScroll&&(r._infScroll.style.overflow="visible",r._infScroll.style.transform="translate3d(0px, "+(r.currentY-r.startY)+"px, 0px)")))},r.onEnd=function(){r.startY=0,r.currentY=0,r.dragging=!1,r.state.pullToRefreshThresholdBreached&&(r.props.refreshFunction&&r.props.refreshFunction(),r.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){r._infScroll&&(r._infScroll.style.overflow="auto",r._infScroll.style.transform="none",r._infScroll.style.willChange="unset")})},r.onScrollListener=function(i){typeof r.props.onScroll=="function"&&setTimeout(function(){return r.props.onScroll&&r.props.onScroll(i)},0);var s=r.props.height||r._scrollableNode?i.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!r.actionTriggered){var o=r.props.inverse?r.isElementAtTop(s,r.props.scrollThreshold):r.isElementAtBottom(s,r.props.scrollThreshold);o&&r.props.hasMore&&(r.actionTriggered=!0,r.setState({showLoader:!0}),r.props.next&&r.props.next()),r.lastScrollTop=s.scrollTop}},r.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:n.dataLength},r.throttledOnScrollListener=VP(150,r.onScrollListener).bind(r),r.onStart=r.onStart.bind(r),r.onMove=r.onMove.bind(r),r.onEnd=r.onEnd.bind(r),r}return e.prototype.componentDidMount=function(){if(typeof this.props.dataLength=="undefined")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},e.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},e.prototype.componentDidUpdate=function(n){this.props.dataLength!==n.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},e.getDerivedStateFromProps=function(n,r){var i=n.dataLength!==r.prevDataLength;return i?Eo(Eo({},r),{prevDataLength:n.dataLength}):null},e.prototype.isElementAtTop=function(n,r){r===void 0&&(r=.8);var i=n===document.body||n===document.documentElement?window.screen.availHeight:n.clientHeight,s=F1(r);return s.unit===Bi.Pixel?n.scrollTop<=s.value+i-n.scrollHeight+1:n.scrollTop<=s.value/100+i-n.scrollHeight+1},e.prototype.isElementAtBottom=function(n,r){r===void 0&&(r=.8);var i=n===document.body||n===document.documentElement?window.screen.availHeight:n.clientHeight,s=F1(r);return s.unit===Bi.Pixel?n.scrollTop+i>=n.scrollHeight-s.value:n.scrollTop+i>=s.value/100*n.scrollHeight},e.prototype.render=function(){var n=this,r=Eo({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),i=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),s=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return Cn("div",{style:s,className:"infinite-scroll-component__outerdiv",children:km("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(o){return n._infScroll=o},style:r,children:[this.props.pullDownToRefresh&&Cn("div",{style:{position:"relative"},ref:function(o){return n._pullDown=o},children:Cn("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance},children:this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent})}),this.props.children,!this.state.showLoader&&!i&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage]})})},e}(V.exports.Component),j1={exports:{}},At={},V1={exports:{}},B1={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var u=null,l=null,c=function(){if(u!==null)try{var I=t.unstable_now();u(!0,I),u=null}catch(D){throw setTimeout(c,0),D}};e=function(I){u!==null?setTimeout(e,0,I):(u=I,setTimeout(c,0))},n=function(I,D){l=setTimeout(I,D)},r=function(){clearTimeout(l)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,E=null,f=-1,p=5,m=0;t.unstable_shouldYield=function(){return t.unstable_now()>=m},i=function(){},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):p=0<I?Math.floor(1e3/I):5};var v=new MessageChannel,w=v.port2;v.port1.onmessage=function(){if(E!==null){var I=t.unstable_now();m=I+p;try{E(!0,I)?w.postMessage(null):(y=!1,E=null)}catch(D){throw w.postMessage(null),D}}else y=!1},e=function(I){E=I,y||(y=!0,w.postMessage(null))},n=function(I,D){f=h(function(){I(t.unstable_now())},D)},r=function(){d(f),f=-1}}function N(I,D){var j=I.length;I.push(D);e:for(;;){var re=j-1>>>1,oe=I[re];if(oe!==void 0&&0<F(oe,D))I[re]=D,I[j]=oe,j=re;else break e}}function _(I){return I=I[0],I===void 0?null:I}function M(I){var D=I[0];if(D!==void 0){var j=I.pop();if(j!==D){I[0]=j;e:for(var re=0,oe=I.length;re<oe;){var yt=2*(re+1)-1,vt=I[yt],Ct=yt+1,ye=I[Ct];if(vt!==void 0&&0>F(vt,j))ye!==void 0&&0>F(ye,vt)?(I[re]=ye,I[Ct]=j,re=Ct):(I[re]=vt,I[yt]=j,re=yt);else if(ye!==void 0&&0>F(ye,j))I[re]=ye,I[Ct]=j,re=Ct;else break e}}return D}return null}function F(I,D){var j=I.sortIndex-D.sortIndex;return j!==0?j:I.id-D.id}var x=[],q=[],_n=1,Xe=null,L=3,$=!1,A=!1,B=!1;function P(I){for(var D=_(q);D!==null;){if(D.callback===null)M(q);else if(D.startTime<=I)M(q),D.sortIndex=D.expirationTime,N(x,D);else break;D=_(q)}}function J(I){if(B=!1,P(I),!A)if(_(x)!==null)A=!0,e(Q);else{var D=_(q);D!==null&&n(J,D.startTime-I)}}function Q(I,D){A=!1,B&&(B=!1,r()),$=!0;var j=L;try{for(P(D),Xe=_(x);Xe!==null&&(!(Xe.expirationTime>D)||I&&!t.unstable_shouldYield());){var re=Xe.callback;if(typeof re=="function"){Xe.callback=null,L=Xe.priorityLevel;var oe=re(Xe.expirationTime<=D);D=t.unstable_now(),typeof oe=="function"?Xe.callback=oe:Xe===_(x)&&M(x),P(D)}else M(x);Xe=_(x)}if(Xe!==null)var yt=!0;else{var vt=_(q);vt!==null&&n(J,vt.startTime-D),yt=!1}return yt}finally{Xe=null,L=j,$=!1}}var se=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){A||$||(A=!0,e(Q))},t.unstable_getCurrentPriorityLevel=function(){return L},t.unstable_getFirstCallbackNode=function(){return _(x)},t.unstable_next=function(I){switch(L){case 1:case 2:case 3:var D=3;break;default:D=L}var j=L;L=D;try{return I()}finally{L=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=se,t.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=L;L=I;try{return D()}finally{L=j}},t.unstable_scheduleCallback=function(I,D,j){var re=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?re+j:re):j=re,I){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=j+oe,I={id:_n++,callback:D,priorityLevel:I,startTime:j,expirationTime:oe,sortIndex:-1},j>re?(I.sortIndex=j,N(q,I),_(x)===null&&I===_(q)&&(B?r():B=!0,n(J,j-re))):(I.sortIndex=oe,N(x,I),A||$||(A=!0,e(Q))),I},t.unstable_wrapCallback=function(I){var D=L;return function(){var j=L;L=D;try{return I.apply(this,arguments)}finally{L=j}}}})(B1);V1.exports=B1;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qu=V.exports,fe=Jp,De=V1.exports;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Qu)throw Error(k(227));var z1=new Set,To={};function jr(t,e){zi(t,e),zi(t+"Capture",e)}function zi(t,e){for(To[t]=e,t=0;t<e.length;t++)z1.add(e[t])}var yn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),BP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,q1=Object.prototype.hasOwnProperty,H1={},K1={};function zP(t){return q1.call(K1,t)?!0:q1.call(H1,t)?!1:BP.test(t)?K1[t]=!0:(H1[t]=!0,!1)}function qP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HP(t,e,n,r){if(e===null||typeof e=="undefined"||qP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function it(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){je[t]=new it(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];je[e]=new it(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){je[t]=new it(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){je[t]=new it(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){je[t]=new it(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){je[t]=new it(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){je[t]=new it(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){je[t]=new it(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){je[t]=new it(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wd=/[\-:]([a-z])/g;function Gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wd,Gd);je[e]=new it(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wd,Gd);je[e]=new it(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wd,Gd);je[e]=new it(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){je[t]=new it(t,1,!1,t.toLowerCase(),null,!1,!1)});je.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){je[t]=new it(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yd(t,e,n,r){var i=je.hasOwnProperty(e)?je[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(HP(e,n,i,r)&&(n=null),r||i===null?zP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vr=Qu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=60103,Br=60106,Hn=60107,Qd=60108,_o=60114,Xd=60109,Jd=60110,Xu=60112,Io=60113,Ju=60120,Zu=60115,Zd=60116,ef=60121,tf=60128,W1=60129,nf=60130,rf=60131;if(typeof Symbol=="function"&&Symbol.for){var be=Symbol.for;So=be("react.element"),Br=be("react.portal"),Hn=be("react.fragment"),Qd=be("react.strict_mode"),_o=be("react.profiler"),Xd=be("react.provider"),Jd=be("react.context"),Xu=be("react.forward_ref"),Io=be("react.suspense"),Ju=be("react.suspense_list"),Zu=be("react.memo"),Zd=be("react.lazy"),ef=be("react.block"),be("react.scope"),tf=be("react.opaque.id"),W1=be("react.debug_trace_mode"),nf=be("react.offscreen"),rf=be("react.legacy_hidden")}var G1=typeof Symbol=="function"&&Symbol.iterator;function ko(t){return t===null||typeof t!="object"?null:(t=G1&&t[G1]||t["@@iterator"],typeof t=="function"?t:null)}var sf;function Co(t){if(sf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sf=e&&e[1]||""}return`
`+sf+t}var of=!1;function el(t,e){if(!t||of)return"";of=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{of=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Co(t):""}function KP(t){switch(t.tag){case 5:return Co(t.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return t=el(t.type,!1),t;case 11:return t=el(t.type.render,!1),t;case 22:return t=el(t.type._render,!1),t;case 1:return t=el(t.type,!0),t;default:return""}}function qi(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hn:return"Fragment";case Br:return"Portal";case _o:return"Profiler";case Qd:return"StrictMode";case Io:return"Suspense";case Ju:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jd:return(t.displayName||"Context")+".Consumer";case Xd:return(t._context.displayName||"Context")+".Provider";case Xu:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case Zu:return qi(t.type);case ef:return qi(t._render);case Zd:e=t._payload,t=t._init;try{return qi(t(e))}catch{}}return null}function Kn(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function Y1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function WP(t){var e=Y1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tl(t){t._valueTracker||(t._valueTracker=WP(t))}function Q1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Y1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function nl(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function af(t,e){var n=e.checked;return fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function X1(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function J1(t,e){e=e.checked,e!=null&&Yd(t,"checked",e,!1)}function uf(t,e){J1(t,e);var n=Kn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lf(t,e.type,n):e.hasOwnProperty("defaultValue")&&lf(t,e.type,Kn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Z1(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lf(t,e,n){(e!=="number"||nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function GP(t){var e="";return Qu.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function cf(t,e){return t=fe({children:void 0},e),(e=GP(e.children))&&(t.children=e),t}function Hi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function eE(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kn(n)}}function tE(t,e){var n=Kn(e.value),r=Kn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function nE(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var df={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function rE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ff(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var rl,iE=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==df.svg||"innerHTML"in t)t.innerHTML=e;else{for(rl=rl||document.createElement("div"),rl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=rl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ao={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},YP=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(t){YP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ao[e]=Ao[t]})});function sE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ao.hasOwnProperty(t)&&Ao[t]?(""+e).trim():e+"px"}function oE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var QP=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pf(t,e){if(e){if(QP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yf=null,Ki=null,Wi=null;function aE(t){if(t=Wo(t)){if(typeof yf!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Tl(e),yf(t.stateNode,t.type,e))}}function uE(t){Ki?Wi?Wi.push(t):Wi=[t]:Ki=t}function lE(){if(Ki){var t=Ki,e=Wi;if(Wi=Ki=null,aE(t),e)for(t=0;t<e.length;t++)aE(e[t])}}function vf(t,e){return t(e)}function cE(t,e,n,r,i){return t(e,n,r,i)}function wf(){}var hE=vf,zr=!1,Ef=!1;function Tf(){(Ki!==null||Wi!==null)&&(wf(),lE())}function XP(t,e,n){if(Ef)return t(e,n);Ef=!0;try{return hE(t,e,n)}finally{Ef=!1,Tf()}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var r=Tl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Sf=!1;if(yn)try{var No={};Object.defineProperty(No,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{Sf=!1}function JP(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var Do=!1,il=null,sl=!1,_f=null,ZP={onError:function(t){Do=!0,il=t}};function eO(t,e,n,r,i,s,o,a,u){Do=!1,il=null,JP.apply(ZP,arguments)}function tO(t,e,n,r,i,s,o,a,u){if(eO.apply(this,arguments),Do){if(Do){var l=il;Do=!1,il=null}else throw Error(k(198));sl||(sl=!0,_f=l)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!=0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fE(t){if(qr(t)!==t)throw Error(k(188))}function nO(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fE(i),t;if(s===r)return fE(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function pE(t){if(t=nO(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function mE(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var gE,If,yE,vE,kf=!1,Xt=[],Wn=null,Gn=null,Yn=null,bo=new Map,Po=new Map,Oo=[],wE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cf(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function EE(t,e){switch(t){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function Lo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=Cf(e,n,r,i,s),e!==null&&(e=Wo(e),e!==null&&If(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function rO(t,e,n,r,i){switch(e){case"focusin":return Wn=Lo(Wn,t,e,n,r,i),!0;case"dragenter":return Gn=Lo(Gn,t,e,n,r,i),!0;case"mouseover":return Yn=Lo(Yn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bo.set(s,Lo(bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Po.set(s,Lo(Po.get(s)||null,t,e,n,r,i)),!0}return!1}function iO(t){var e=Hr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=dE(n),e!==null){t.blockedOn=e,vE(t.lanePriority,function(){De.unstable_runWithPriority(t.priority,function(){yE(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ol(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=Wo(n),e!==null&&If(e),t.blockedOn=n,!1;e.shift()}return!0}function TE(t,e,n){ol(t)&&n.delete(e)}function sO(){for(kf=!1;0<Xt.length;){var t=Xt[0];if(t.blockedOn!==null){t=Wo(t.blockedOn),t!==null&&gE(t);break}for(var e=t.targetContainers;0<e.length;){var n=bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&Xt.shift()}Wn!==null&&ol(Wn)&&(Wn=null),Gn!==null&&ol(Gn)&&(Gn=null),Yn!==null&&ol(Yn)&&(Yn=null),bo.forEach(TE),Po.forEach(TE)}function Mo(t,e){t.blockedOn===e&&(t.blockedOn=null,kf||(kf=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,sO)))}function SE(t){function e(i){return Mo(i,t)}if(0<Xt.length){Mo(Xt[0],t);for(var n=1;n<Xt.length;n++){var r=Xt[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Wn!==null&&Mo(Wn,t),Gn!==null&&Mo(Gn,t),Yn!==null&&Mo(Yn,t),bo.forEach(e),Po.forEach(e),n=0;n<Oo.length;n++)r=Oo[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Oo.length&&(n=Oo[0],n.blockedOn===null);)iO(n),n.blockedOn===null&&Oo.shift()}function al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Gi={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},xf={},_E={};yn&&(_E=document.createElement("div").style,"AnimationEvent"in window||(delete Gi.animationend.animation,delete Gi.animationiteration.animation,delete Gi.animationstart.animation),"TransitionEvent"in window||delete Gi.transitionend.transition);function ul(t){if(xf[t])return xf[t];if(!Gi[t])return t;var e=Gi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _E)return xf[t]=e[n];return t}var IE=ul("animationend"),kE=ul("animationiteration"),CE=ul("animationstart"),xE=ul("transitionend"),AE=new Map,Af=new Map,oO=["abort","abort",IE,"animationEnd",kE,"animationIteration",CE,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",xE,"transitionEnd","waiting","waiting"];function Rf(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Af.set(r,e),AE.set(r,i),jr(i,[r])}}var aO=De.unstable_now;aO();var ue=8;function Yi(t){if((1&t)!=0)return ue=15,1;if((2&t)!=0)return ue=14,2;if((4&t)!=0)return ue=13,4;var e=24&t;return e!==0?(ue=12,e):(t&32)!=0?(ue=11,32):(e=192&t,e!==0?(ue=10,e):(t&256)!=0?(ue=9,256):(e=3584&t,e!==0?(ue=8,e):(t&4096)!=0?(ue=7,4096):(e=4186112&t,e!==0?(ue=6,e):(e=62914560&t,e!==0?(ue=5,e):t&67108864?(ue=4,67108864):(t&134217728)!=0?(ue=3,134217728):(e=805306368&t,e!==0?(ue=2,e):(1073741824&t)!=0?(ue=1,1073741824):(ue=8,t))))))}function uO(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function lO(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(k(358,t))}}function $o(t,e){var n=t.pendingLanes;if(n===0)return ue=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=ue=15;else if(s=n&134217727,s!==0){var u=s&~o;u!==0?(r=Yi(u),i=ue):(a&=s,a!==0&&(r=Yi(a),i=ue))}else s=n&~o,s!==0?(r=Yi(s),i=ue):a!==0&&(r=Yi(a),i=ue);if(r===0)return 0;if(r=31-Qn(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)==0){if(Yi(e),i<=ue)return e;ue=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qn(e),i=1<<n,r|=t[n],e&=~i;return r}function RE(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ll(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=Qi(24&~e),t===0?ll(10,e):t;case 10:return t=Qi(192&~e),t===0?ll(8,e):t;case 8:return t=Qi(3584&~e),t===0&&(t=Qi(4186112&~e),t===0&&(t=512)),t;case 2:return e=Qi(805306368&~e),e===0&&(e=268435456),e}throw Error(k(358,t))}function Qi(t){return t&-t}function Nf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function cl(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-Qn(e),t[e]=n}var Qn=Math.clz32?Math.clz32:dO,cO=Math.log,hO=Math.LN2;function dO(t){return t===0?32:31-(cO(t)/hO|0)|0}var fO=De.unstable_UserBlockingPriority,pO=De.unstable_runWithPriority,hl=!0;function mO(t,e,n,r){zr||wf();var i=Df,s=zr;zr=!0;try{cE(i,t,e,n,r)}finally{(zr=s)||Tf()}}function gO(t,e,n,r){pO(fO,Df.bind(null,t,e,n,r))}function Df(t,e,n,r){if(hl){var i;if((i=(e&4)==0)&&0<Xt.length&&-1<wE.indexOf(t))t=Cf(null,t,e,n,r),Xt.push(t);else{var s=bf(t,e,n,r);if(s===null)i&&EE(t,r);else{if(i){if(-1<wE.indexOf(t)){t=Cf(s,t,e,n,r),Xt.push(t);return}if(rO(s,t,e,n,r))return;EE(t,r)}sT(t,e,r,null,n)}}}}function bf(t,e,n,r){var i=gf(r);if(i=Hr(i),i!==null){var s=qr(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=dE(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return sT(t,e,r,i,n),null}var Xn=null,Pf=null,dl=null;function NE(){if(dl)return dl;var t,e=Pf,n=e.length,r,i="value"in Xn?Xn.value:Xn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return dl=i.slice(t,1<r?1-r:void 0)}function fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function DE(){return!1}function It(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pl:DE,this.isPropagationStopped=DE,this}return fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),e}var Xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Of=It(Xi),Uo=fe({},Xi,{view:0,detail:0}),yO=It(Uo),Lf,Mf,Fo,ml=fe({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(Lf=t.screenX-Fo.screenX,Mf=t.screenY-Fo.screenY):Mf=Lf=0,Fo=t),Lf)},movementY:function(t){return"movementY"in t?t.movementY:Mf}}),bE=It(ml),vO=fe({},ml,{dataTransfer:0}),wO=It(vO),EO=fe({},Uo,{relatedTarget:0}),$f=It(EO),TO=fe({},Xi,{animationName:0,elapsedTime:0,pseudoElement:0}),SO=It(TO),_O=fe({},Xi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),IO=It(_O),kO=fe({},Xi,{data:0}),PE=It(kO),CO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RO(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=AO[t])?!!e[t]:!1}function Uf(){return RO}var NO=fe({},Uo,{key:function(t){if(t.key){var e=CO[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xO[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uf,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),DO=It(NO),bO=fe({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),OE=It(bO),PO=fe({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uf}),OO=It(PO),LO=fe({},Xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),MO=It(LO),$O=fe({},ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),UO=It($O),FO=[9,13,27,32],Ff=yn&&"CompositionEvent"in window,jo=null;yn&&"documentMode"in document&&(jo=document.documentMode);var jO=yn&&"TextEvent"in window&&!jo,LE=yn&&(!Ff||jo&&8<jo&&11>=jo),ME=String.fromCharCode(32),$E=!1;function UE(t,e){switch(t){case"keyup":return FO.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function FE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ji=!1;function VO(t,e){switch(t){case"compositionend":return FE(e);case"keypress":return e.which!==32?null:($E=!0,ME);case"textInput":return t=e.data,t===ME&&$E?null:t;default:return null}}function BO(t,e){if(Ji)return t==="compositionend"||!Ff&&UE(t,e)?(t=NE(),dl=Pf=Xn=null,Ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return LE&&e.locale!=="ko"?null:e.data;default:return null}}var zO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jE(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zO[t.type]:e==="textarea"}function VE(t,e,n,r){uE(r),e=yl(e,"onChange"),0<e.length&&(n=new Of("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Vo=null,Bo=null;function qO(t){eT(t,0)}function gl(t){var e=rs(t);if(Q1(e))return t}function HO(t,e){if(t==="change")return e}var BE=!1;if(yn){var jf;if(yn){var Vf="oninput"in document;if(!Vf){var zE=document.createElement("div");zE.setAttribute("oninput","return;"),Vf=typeof zE.oninput=="function"}jf=Vf}else jf=!1;BE=jf&&(!document.documentMode||9<document.documentMode)}function qE(){Vo&&(Vo.detachEvent("onpropertychange",HE),Bo=Vo=null)}function HE(t){if(t.propertyName==="value"&&gl(Bo)){var e=[];if(VE(e,Bo,t,gf(t)),t=qO,zr)t(e);else{zr=!0;try{vf(t,e)}finally{zr=!1,Tf()}}}}function KO(t,e,n){t==="focusin"?(qE(),Vo=e,Bo=n,Vo.attachEvent("onpropertychange",HE)):t==="focusout"&&qE()}function WO(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(Bo)}function GO(t,e){if(t==="click")return gl(e)}function YO(t,e){if(t==="input"||t==="change")return gl(e)}function QO(t,e){return t===e&&(t!==0||1/t==1/e)||t!==t&&e!==e}var Rt=typeof Object.is=="function"?Object.is:QO,XO=Object.prototype.hasOwnProperty;function zo(t,e){if(Rt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!XO.call(e,n[r])||!Rt(t[n[r]],e[n[r]]))return!1;return!0}function KE(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function WE(t,e){var n=KE(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=KE(n)}}function GE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?GE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function YE(){for(var t=window,e=nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nl(t.document)}return e}function Bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var JO=yn&&"documentMode"in document&&11>=document.documentMode,Zi=null,zf=null,qo=null,qf=!1;function QE(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qf||Zi==null||Zi!==nl(r)||(r=Zi,"selectionStart"in r&&Bf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qo&&zo(qo,r)||(qo=r,r=yl(zf,"onSelect"),0<r.length&&(e=new Of("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zi)))}Rf("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Rf("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Rf(oO,2);for(var XE="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Hf=0;Hf<XE.length;Hf++)Af.set(XE[Hf],0);zi("onMouseEnter",["mouseout","mouseover"]);zi("onMouseLeave",["mouseout","mouseover"]);zi("onPointerEnter",["pointerout","pointerover"]);zi("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function ZE(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tO(r,e,void 0,t),t.currentTarget=null}function eT(t,e){e=(e&4)!=0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;ZE(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;ZE(i,a,l),s=u}}}if(sl)throw t=_f,sl=!1,_f=null,t}function ce(t,e){var n=hT(e),r=t+"__bubble";n.has(r)||(iT(e,t,2,!1),n.add(r))}var tT="_reactListening"+Math.random().toString(36).slice(2);function nT(t){t[tT]||(t[tT]=!0,z1.forEach(function(e){JE.has(e)||rT(e,!1,t,null),rT(e,!0,t,null)}))}function rT(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&JE.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=hT(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),iT(s,t,i,e),o.add(a))}function iT(t,e,n,r){var i=Af.get(e);switch(i===void 0?2:i){case 0:i=mO;break;case 1:i=gO;break;default:i=Df}n=i.bind(null,e,n,t),i=void 0,!Sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function sT(t,e,n,r,i){var s=r;if((e&1)==0&&(e&2)==0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Hr(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}XP(function(){var l=s,c=gf(n),h=[];e:{var d=AE.get(t);if(d!==void 0){var g=Of,y=t;switch(t){case"keypress":if(fl(n)===0)break e;case"keydown":case"keyup":g=DO;break;case"focusin":y="focus",g=$f;break;case"focusout":y="blur",g=$f;break;case"beforeblur":case"afterblur":g=$f;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=bE;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=wO;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=OO;break;case IE:case kE:case CE:g=SO;break;case xE:g=MO;break;case"scroll":g=yO;break;case"wheel":g=UO;break;case"copy":case"cut":case"paste":g=IO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=OE}var E=(e&4)!=0,f=!E&&t==="scroll",p=E?d!==null?d+"Capture":null:d;E=[];for(var m=l,v;m!==null;){v=m;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,p!==null&&(w=Ro(m,p),w!=null&&E.push(Ko(m,w,v)))),f)break;m=m.return}0<E.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:E}))}}if((e&7)==0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&(e&16)==0&&(y=n.relatedTarget||n.fromElement)&&(Hr(y)||y[ns]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=l,y=y?Hr(y):null,y!==null&&(f=qr(y),y!==f||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=l),g!==y)){if(E=bE,w="onMouseLeave",p="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(E=OE,w="onPointerLeave",p="onPointerEnter",m="pointer"),f=g==null?d:rs(g),v=y==null?d:rs(y),d=new E(w,m+"leave",g,n,c),d.target=f,d.relatedTarget=v,w=null,Hr(c)===l&&(E=new E(p,m+"enter",y,n,c),E.target=v,E.relatedTarget=f,w=E),f=w,g&&y)t:{for(E=g,p=y,m=0,v=E;v;v=es(v))m++;for(v=0,w=p;w;w=es(w))v++;for(;0<m-v;)E=es(E),m--;for(;0<v-m;)p=es(p),v--;for(;m--;){if(E===p||p!==null&&E===p.alternate)break t;E=es(E),p=es(p)}E=null}else E=null;g!==null&&oT(h,d,g,E,!1),y!==null&&f!==null&&oT(h,f,y,E,!0)}}e:{if(d=l?rs(l):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var N=HO;else if(jE(d))if(BE)N=YO;else{N=WO;var _=KO}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(N=GO);if(N&&(N=N(t,l))){VE(h,N,n,c);break e}_&&_(t,d,l),t==="focusout"&&(_=d._wrapperState)&&_.controlled&&d.type==="number"&&lf(d,"number",d.value)}switch(_=l?rs(l):window,t){case"focusin":(jE(_)||_.contentEditable==="true")&&(Zi=_,zf=l,qo=null);break;case"focusout":qo=zf=Zi=null;break;case"mousedown":qf=!0;break;case"contextmenu":case"mouseup":case"dragend":qf=!1,QE(h,n,c);break;case"selectionchange":if(JO)break;case"keydown":case"keyup":QE(h,n,c)}var M;if(Ff)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Ji?UE(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(LE&&n.locale!=="ko"&&(Ji||F!=="onCompositionStart"?F==="onCompositionEnd"&&Ji&&(M=NE()):(Xn=c,Pf="value"in Xn?Xn.value:Xn.textContent,Ji=!0)),_=yl(l,F),0<_.length&&(F=new PE(F,t,null,n,c),h.push({event:F,listeners:_}),M?F.data=M:(M=FE(n),M!==null&&(F.data=M)))),(M=jO?VO(t,n):BO(t,n))&&(l=yl(l,"onBeforeInput"),0<l.length&&(c=new PE("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=M))}eT(h,e)})}function Ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ro(t,n),s!=null&&r.unshift(Ko(t,s,i)),s=Ro(t,e),s!=null&&r.push(Ko(t,s,i))),t=t.return}return r}function es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function oT(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=Ro(n,s),u!=null&&o.unshift(Ko(n,u,a))):i||(u=Ro(n,s),u!=null&&o.push(Ko(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function vl(){}var Kf=null,Wf=null;function aT(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Gf(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uT=typeof setTimeout=="function"?setTimeout:void 0,ZO=typeof clearTimeout=="function"?clearTimeout:void 0;function Yf(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function ts(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function lT(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qf=0;function eL(t){return{$$typeof:tf,toString:t,valueOf:t}}var wl=Math.random().toString(36).slice(2),Jn="__reactFiber$"+wl,El="__reactProps$"+wl,ns="__reactContainer$"+wl,cT="__reactEvents$"+wl;function Hr(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ns]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lT(t);t!==null;){if(n=t[Jn])return n;t=lT(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[Jn]||t[ns],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Tl(t){return t[El]||null}function hT(t){var e=t[cT];return e===void 0&&(e=t[cT]=new Set),e}var Xf=[],is=-1;function Zn(t){return{current:t}}function he(t){0>is||(t.current=Xf[is],Xf[is]=null,is--)}function me(t,e){is++,Xf[is]=t.current,t.current=e}var er={},We=Zn(er),ft=Zn(!1),Kr=er;function ss(t,e){var n=t.type.contextTypes;if(!n)return er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function Sl(){he(ft),he(We)}function dT(t,e,n){if(We.current!==er)throw Error(k(168));me(We,e),me(ft,n)}function fT(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,qi(e)||"Unknown",i));return fe({},n,r)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Kr=We.current,me(We,t),me(ft,ft.current),!0}function pT(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=fT(t,e,Kr),r.__reactInternalMemoizedMergedChildContext=t,he(ft),he(We),me(We,t)):he(ft),me(ft,n)}var Jf=null,Wr=null,tL=De.unstable_runWithPriority,Zf=De.unstable_scheduleCallback,ep=De.unstable_cancelCallback,nL=De.unstable_shouldYield,mT=De.unstable_requestPaint,tp=De.unstable_now,rL=De.unstable_getCurrentPriorityLevel,Il=De.unstable_ImmediatePriority,gT=De.unstable_UserBlockingPriority,yT=De.unstable_NormalPriority,vT=De.unstable_LowPriority,wT=De.unstable_IdlePriority,np={},iL=mT!==void 0?mT:function(){},vn=null,kl=null,rp=!1,ET=tp(),Ge=1e4>ET?tp:function(){return tp()-ET};function os(){switch(rL()){case Il:return 99;case gT:return 98;case yT:return 97;case vT:return 96;case wT:return 95;default:throw Error(k(332))}}function TT(t){switch(t){case 99:return Il;case 98:return gT;case 97:return yT;case 96:return vT;case 95:return wT;default:throw Error(k(332))}}function Gr(t,e){return t=TT(t),tL(t,e)}function Go(t,e,n){return t=TT(t),Zf(t,e,n)}function Jt(){if(kl!==null){var t=kl;kl=null,ep(t)}ST()}function ST(){if(!rp&&vn!==null){rp=!0;var t=0;try{var e=vn;Gr(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),vn=null}catch(n){throw vn!==null&&(vn=vn.slice(t+1)),Zf(Il,Jt),n}finally{rp=!1}}}var sL=Vr.ReactCurrentBatchConfig;function Ft(t,e){if(t&&t.defaultProps){e=fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Cl=Zn(null),xl=null,as=null,Al=null;function ip(){Al=as=xl=null}function sp(t){var e=Cl.current;he(Cl),t.type._context._currentValue=e}function _T(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function us(t,e){xl=t,Al=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!=0&&(jt=!0),t.firstContext=null)}function Nt(t,e){if(Al!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Al=t,e=1073741823),e={context:t,observedBits:e,next:null},as===null){if(xl===null)throw Error(k(308));as=e,xl.dependencies={lanes:0,firstContext:e,responders:null}}else as=as.next=e;return t._currentValue}var tr=!1;function op(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function IT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function kT(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yo(t,e,n,r){var i=t.updateQueue;tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;if(c!==null){c=c.updateQueue;var h=c.lastBaseUpdate;h!==o&&(h===null?c.firstBaseUpdate=l:h.next=l,c.lastBaseUpdate=u)}}if(s!==null){h=i.baseState,o=0,c=l=u=null;do{a=s.lane;var d=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,y=s;switch(a=e,d=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(d,h,a);break e}h=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=y.payload,a=typeof g=="function"?g.call(d,h,a):g,a==null)break e;h=fe({},h,a);break e;case 2:tr=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(l=c=d,u=h):c=c.next=d,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,aa|=o,t.lanes=o,t.memoizedState=h}}function CT(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var xT=new Qu.Component().refs;function Rl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nl={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=kt(),i=or(t),s=nr(r,i);s.payload=e,n!=null&&(s.callback=n),rr(t,s),ar(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=kt(),i=or(t),s=nr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),rr(t,s),ar(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kt(),r=or(t),i=nr(n,r);i.tag=2,e!=null&&(i.callback=e),rr(t,i),ar(t,r,n)}};function AT(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!zo(n,r)||!zo(i,s):!0}function RT(t,e,n){var r=!1,i=er,s=e.contextType;return typeof s=="object"&&s!==null?s=Nt(s):(i=pt(e)?Kr:We.current,r=e.contextTypes,s=(r=r!=null)?ss(t,i):er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function NT(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Nl.enqueueReplaceState(e,e.state,null)}function ap(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=xT,op(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Nt(s):(s=pt(e)?Kr:We.current,i.context=ss(t,s)),Yo(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rl(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Nl.enqueueReplaceState(i,i.state,null),Yo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var Dl=Array.isArray;function Qo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===xT&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function bl(t,e){if(t.type!=="textarea")throw Error(k(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function DT(t){function e(f,p){if(t){var m=f.lastEffect;m!==null?(m.nextEffect=p,f.lastEffect=p):f.firstEffect=f.lastEffect=p,p.nextEffect=null,p.flags=8}}function n(f,p){if(!t)return null;for(;p!==null;)e(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function i(f,p){return f=cr(f,p),f.index=0,f.sibling=null,f}function s(f,p,m){return f.index=m,t?(m=f.alternate,m!==null?(m=m.index,m<p?(f.flags=2,p):m):(f.flags=2,p)):p}function o(f){return t&&f.alternate===null&&(f.flags=2),f}function a(f,p,m,v){return p===null||p.tag!==6?(p=zp(m,f.mode,v),p.return=f,p):(p=i(p,m),p.return=f,p)}function u(f,p,m,v){return p!==null&&p.elementType===m.type?(v=i(p,m.props),v.ref=Qo(f,p,m),v.return=f,v):(v=Ql(m.type,m.key,m.props,null,f.mode,v),v.ref=Qo(f,p,m),v.return=f,v)}function l(f,p,m,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=qp(m,f.mode,v),p.return=f,p):(p=i(p,m.children||[]),p.return=f,p)}function c(f,p,m,v,w){return p===null||p.tag!==7?(p=gs(m,f.mode,v,w),p.return=f,p):(p=i(p,m),p.return=f,p)}function h(f,p,m){if(typeof p=="string"||typeof p=="number")return p=zp(""+p,f.mode,m),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case So:return m=Ql(p.type,p.key,p.props,null,f.mode,m),m.ref=Qo(f,null,p),m.return=f,m;case Br:return p=qp(p,f.mode,m),p.return=f,p}if(Dl(p)||ko(p))return p=gs(p,f.mode,m,null),p.return=f,p;bl(f,p)}return null}function d(f,p,m,v){var w=p!==null?p.key:null;if(typeof m=="string"||typeof m=="number")return w!==null?null:a(f,p,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case So:return m.key===w?m.type===Hn?c(f,p,m.props.children,v,w):u(f,p,m,v):null;case Br:return m.key===w?l(f,p,m,v):null}if(Dl(m)||ko(m))return w!==null?null:c(f,p,m,v,null);bl(f,m)}return null}function g(f,p,m,v,w){if(typeof v=="string"||typeof v=="number")return f=f.get(m)||null,a(p,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case So:return f=f.get(v.key===null?m:v.key)||null,v.type===Hn?c(p,f,v.props.children,w,v.key):u(p,f,v,w);case Br:return f=f.get(v.key===null?m:v.key)||null,l(p,f,v,w)}if(Dl(v)||ko(v))return f=f.get(m)||null,c(p,f,v,w,null);bl(p,v)}return null}function y(f,p,m,v){for(var w=null,N=null,_=p,M=p=0,F=null;_!==null&&M<m.length;M++){_.index>M?(F=_,_=null):F=_.sibling;var x=d(f,_,m[M],v);if(x===null){_===null&&(_=F);break}t&&_&&x.alternate===null&&e(f,_),p=s(x,p,M),N===null?w=x:N.sibling=x,N=x,_=F}if(M===m.length)return n(f,_),w;if(_===null){for(;M<m.length;M++)_=h(f,m[M],v),_!==null&&(p=s(_,p,M),N===null?w=_:N.sibling=_,N=_);return w}for(_=r(f,_);M<m.length;M++)F=g(_,f,M,m[M],v),F!==null&&(t&&F.alternate!==null&&_.delete(F.key===null?M:F.key),p=s(F,p,M),N===null?w=F:N.sibling=F,N=F);return t&&_.forEach(function(q){return e(f,q)}),w}function E(f,p,m,v){var w=ko(m);if(typeof w!="function")throw Error(k(150));if(m=w.call(m),m==null)throw Error(k(151));for(var N=w=null,_=p,M=p=0,F=null,x=m.next();_!==null&&!x.done;M++,x=m.next()){_.index>M?(F=_,_=null):F=_.sibling;var q=d(f,_,x.value,v);if(q===null){_===null&&(_=F);break}t&&_&&q.alternate===null&&e(f,_),p=s(q,p,M),N===null?w=q:N.sibling=q,N=q,_=F}if(x.done)return n(f,_),w;if(_===null){for(;!x.done;M++,x=m.next())x=h(f,x.value,v),x!==null&&(p=s(x,p,M),N===null?w=x:N.sibling=x,N=x);return w}for(_=r(f,_);!x.done;M++,x=m.next())x=g(_,f,M,x.value,v),x!==null&&(t&&x.alternate!==null&&_.delete(x.key===null?M:x.key),p=s(x,p,M),N===null?w=x:N.sibling=x,N=x);return t&&_.forEach(function(_n){return e(f,_n)}),w}return function(f,p,m,v){var w=typeof m=="object"&&m!==null&&m.type===Hn&&m.key===null;w&&(m=m.props.children);var N=typeof m=="object"&&m!==null;if(N)switch(m.$$typeof){case So:e:{for(N=m.key,w=p;w!==null;){if(w.key===N){switch(w.tag){case 7:if(m.type===Hn){n(f,w.sibling),p=i(w,m.props.children),p.return=f,f=p;break e}break;default:if(w.elementType===m.type){n(f,w.sibling),p=i(w,m.props),p.ref=Qo(f,w,m),p.return=f,f=p;break e}}n(f,w);break}else e(f,w);w=w.sibling}m.type===Hn?(p=gs(m.props.children,f.mode,v,m.key),p.return=f,f=p):(v=Ql(m.type,m.key,m.props,null,f.mode,v),v.ref=Qo(f,p,m),v.return=f,f=v)}return o(f);case Br:e:{for(w=m.key;p!==null;){if(p.key===w)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(f,p.sibling),p=i(p,m.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else e(f,p);p=p.sibling}p=qp(m,f.mode,v),p.return=f,f=p}return o(f)}if(typeof m=="string"||typeof m=="number")return m=""+m,p!==null&&p.tag===6?(n(f,p.sibling),p=i(p,m),p.return=f,f=p):(n(f,p),p=zp(m,f.mode,v),p.return=f,f=p),o(f);if(Dl(m))return y(f,p,m,v);if(ko(m))return E(f,p,m,v);if(N&&bl(f,m),typeof m=="undefined"&&!w)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(k(152,qi(f.type)||"Component"))}return n(f,p)}}var Pl=DT(!0),bT=DT(!1),Xo={},Zt=Zn(Xo),Jo=Zn(Xo),Zo=Zn(Xo);function Yr(t){if(t===Xo)throw Error(k(174));return t}function up(t,e){switch(me(Zo,e),me(Jo,t),me(Zt,Xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ff(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ff(e,t)}he(Zt),me(Zt,e)}function ls(){he(Zt),he(Jo),he(Zo)}function PT(t){Yr(Zo.current);var e=Yr(Zt.current),n=ff(e,t.type);e!==n&&(me(Jo,t),me(Zt,n))}function lp(t){Jo.current===t&&(he(Zt),he(Jo))}var ge=Zn(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!=0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wn=null,ir=null,en=!1;function OT(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function LT(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function cp(t){if(en){var e=ir;if(e){var n=e;if(!LT(t,e)){if(e=ts(n.nextSibling),!e||!LT(t,e)){t.flags=t.flags&-1025|2,en=!1,wn=t;return}OT(wn,n)}wn=t,ir=ts(e.firstChild)}else t.flags=t.flags&-1025|2,en=!1,wn=t}}function MT(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function Ll(t){if(t!==wn)return!1;if(!en)return MT(t),en=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Gf(e,t.memoizedProps))for(e=ir;e;)OT(t,e),e=ts(e.nextSibling);if(MT(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ir=ts(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ir=null}}else ir=wn?ts(t.stateNode.nextSibling):null;return!0}function hp(){ir=wn=null,en=!1}var cs=[];function dp(){for(var t=0;t<cs.length;t++)cs[t]._workInProgressVersionPrimary=null;cs.length=0}var ea=Vr.ReactCurrentDispatcher,Dt=Vr.ReactCurrentBatchConfig,ta=0,_e=null,Ye=null,Ve=null,Ml=!1,na=!1;function mt(){throw Error(k(321))}function fp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rt(t[n],e[n]))return!1;return!0}function pp(t,e,n,r,i,s){if(ta=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ea.current=t===null||t.memoizedState===null?aL:uL,t=n(r,i),na){s=0;do{if(na=!1,!(25>s))throw Error(k(301));s+=1,Ve=Ye=null,e.updateQueue=null,ea.current=lL,t=n(r,i)}while(na)}if(ea.current=jl,e=Ye!==null&&Ye.next!==null,ta=0,Ve=Ye=_e=null,Ml=!1,e)throw Error(k(300));return t}function Qr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?_e.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Xr(){if(Ye===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=Ve===null?_e.memoizedState:Ve.next;if(e!==null)Ve=e,Ye=t;else{if(t===null)throw Error(k(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},Ve===null?_e.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function tn(t,e){return typeof e=="function"?e(t):e}function ra(t){var e=Xr(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,u=i;do{var l=u.lane;if((ta&l)===l)a!==null&&(a=a.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),r=u.eagerReducer===t?u.eagerState:t(r,u.action);else{var c={lane:l,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,_e.lanes|=l,aa|=l}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=o,Rt(r,e.memoizedState)||(jt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function ia(t){var e=Xr(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rt(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $T(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(ta&t)===t)&&(e._workInProgressVersionPrimary=r,cs.push(e))),t)return n(e._source);throw cs.push(e),Error(k(350))}function UT(t,e,n,r){var i=st;if(i===null)throw Error(k(349));var s=e._getVersion,o=s(e._source),a=ea.current,u=a.useState(function(){return $T(i,e,n)}),l=u[1],c=u[0];u=Ve;var h=t.memoizedState,d=h.refs,g=d.getSnapshot,y=h.source;h=h.subscribe;var E=_e;return t.memoizedState={refs:d,source:e,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=l;var f=s(e._source);if(!Rt(o,f)){f=n(e._source),Rt(c,f)||(l(f),f=or(E),i.mutableReadLanes|=f&i.pendingLanes),f=i.mutableReadLanes,i.entangledLanes|=f;for(var p=i.entanglements,m=f;0<m;){var v=31-Qn(m),w=1<<v;p[v]|=f,m&=~w}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var f=d.getSnapshot,p=d.setSnapshot;try{p(f(e._source));var m=or(E);i.mutableReadLanes|=m&i.pendingLanes}catch(v){p(function(){throw v})}})},[e,r]),Rt(g,n)&&Rt(y,e)&&Rt(h,r)||(t={pending:null,dispatch:null,lastRenderedReducer:tn,lastRenderedState:c},t.dispatch=l=vp.bind(null,_e,t),u.queue=t,u.baseQueue=null,c=$T(i,e,n),u.memoizedState=u.baseState=c),c}function FT(t,e,n){var r=Xr();return UT(r,t,e,n)}function sa(t){var e=Qr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:tn,lastRenderedState:t},t=t.dispatch=vp.bind(null,_e,t),[e.memoizedState,t]}function $l(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function jT(t){var e=Qr();return t={current:t},e.memoizedState=t}function Ul(){return Xr().memoizedState}function mp(t,e,n,r){var i=Qr();_e.flags|=t,i.memoizedState=$l(1|e,n,void 0,r===void 0?null:r)}function gp(t,e,n,r){var i=Xr();r=r===void 0?null:r;var s=void 0;if(Ye!==null){var o=Ye.memoizedState;if(s=o.destroy,r!==null&&fp(r,o.deps)){$l(e,n,s,r);return}}_e.flags|=t,i.memoizedState=$l(1|e,n,s,r)}function VT(t,e){return mp(516,4,t,e)}function Fl(t,e){return gp(516,4,t,e)}function BT(t,e){return gp(4,2,t,e)}function zT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qT(t,e,n){return n=n!=null?n.concat([t]):null,gp(4,2,zT.bind(null,e,t),n)}function yp(){}function HT(t,e){var n=Xr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function KT(t,e){var n=Xr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function oL(t,e){var n=os();Gr(98>n?98:n,function(){t(!0)}),Gr(97<n?97:n,function(){var r=Dt.transition;Dt.transition=1;try{t(!1),e()}finally{Dt.transition=r}})}function vp(t,e,n){var r=kt(),i=or(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===_e||o!==null&&o===_e)na=Ml=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,u=o(a,n);if(s.eagerReducer=o,s.eagerState=u,Rt(u,a))return}catch{}finally{}ar(t,i,r)}}var jl={readContext:Nt,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useOpaqueIdentifier:mt,unstable_isNewReconciler:!1},aL={readContext:Nt,useCallback:function(t,e){return Qr().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:VT,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mp(4,2,zT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mp(4,2,t,e)},useMemo:function(t,e){var n=Qr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=vp.bind(null,_e,t),[r.memoizedState,t]},useRef:jT,useState:sa,useDebugValue:yp,useDeferredValue:function(t){var e=sa(t),n=e[0],r=e[1];return VT(function(){var i=Dt.transition;Dt.transition=1;try{r(t)}finally{Dt.transition=i}},[t]),n},useTransition:function(){var t=sa(!1),e=t[0];return t=oL.bind(null,t[1]),jT(t),[t,e]},useMutableSource:function(t,e,n){var r=Qr();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},UT(r,t,e,n)},useOpaqueIdentifier:function(){if(en){var t=!1,e=eL(function(){throw t||(t=!0,n("r:"+(Qf++).toString(36))),Error(k(355))}),n=sa(e)[1];return(_e.mode&2)==0&&(_e.flags|=516,$l(5,function(){n("r:"+(Qf++).toString(36))},void 0,null)),e}return e="r:"+(Qf++).toString(36),sa(e),e},unstable_isNewReconciler:!1},uL={readContext:Nt,useCallback:HT,useContext:Nt,useEffect:Fl,useImperativeHandle:qT,useLayoutEffect:BT,useMemo:KT,useReducer:ra,useRef:Ul,useState:function(){return ra(tn)},useDebugValue:yp,useDeferredValue:function(t){var e=ra(tn),n=e[0],r=e[1];return Fl(function(){var i=Dt.transition;Dt.transition=1;try{r(t)}finally{Dt.transition=i}},[t]),n},useTransition:function(){var t=ra(tn)[0];return[Ul().current,t]},useMutableSource:FT,useOpaqueIdentifier:function(){return ra(tn)[0]},unstable_isNewReconciler:!1},lL={readContext:Nt,useCallback:HT,useContext:Nt,useEffect:Fl,useImperativeHandle:qT,useLayoutEffect:BT,useMemo:KT,useReducer:ia,useRef:Ul,useState:function(){return ia(tn)},useDebugValue:yp,useDeferredValue:function(t){var e=ia(tn),n=e[0],r=e[1];return Fl(function(){var i=Dt.transition;Dt.transition=1;try{r(t)}finally{Dt.transition=i}},[t]),n},useTransition:function(){var t=ia(tn)[0];return[Ul().current,t]},useMutableSource:FT,useOpaqueIdentifier:function(){return ia(tn)[0]},unstable_isNewReconciler:!1},cL=Vr.ReactCurrentOwner,jt=!1;function gt(t,e,n,r){e.child=t===null?bT(e,null,n,r):Pl(e,t.child,n,r)}function WT(t,e,n,r,i){n=n.render;var s=e.ref;return us(e,i),r=pp(t,e,n,r,s,i),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,En(t,e,i)):(e.flags|=1,gt(t,e,r,i),e.child)}function GT(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!Vp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,YT(t,e,o,r,i,s)):(t=Ql(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)==0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:zo,n(i,r)&&t.ref===e.ref)?En(t,e,s):(e.flags|=1,t=cr(o,r),t.ref=e.ref,t.return=e,e.child=t)}function YT(t,e,n,r,i,s){if(t!==null&&zo(t.memoizedProps,r)&&t.ref===e.ref)if(jt=!1,(s&i)!=0)(t.flags&16384)!=0&&(jt=!0);else return e.lanes=t.lanes,En(t,e,s);return Ep(t,e,n,r,s)}function wp(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)==0)e.memoizedState={baseLanes:0},Yl(e,n);else if((n&1073741824)!=0)e.memoizedState={baseLanes:0},Yl(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},Yl(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Yl(e,r);return gt(t,e,i,n),e.child}function QT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Ep(t,e,n,r,i){var s=pt(n)?Kr:We.current;return s=ss(e,s),us(e,i),n=pp(t,e,n,r,s,i),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,En(t,e,i)):(e.flags|=1,gt(t,e,n,i),e.child)}function XT(t,e,n,r,i){if(pt(n)){var s=!0;_l(e)}else s=!1;if(us(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),RT(e,n,r),ap(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Nt(l):(l=pt(n)?Kr:We.current,l=ss(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&NT(e,o,r,l),tr=!1;var d=e.memoizedState;o.state=d,Yo(e,r,o,i),u=e.memoizedState,a!==r||d!==u||ft.current||tr?(typeof c=="function"&&(Rl(e,n,c,r),u=e.memoizedState),(a=tr||AT(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,IT(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Ft(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Nt(u):(u=pt(n)?Kr:We.current,u=ss(e,u));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&NT(e,o,r,u),tr=!1,d=e.memoizedState,o.state=d,Yo(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||ft.current||tr?(typeof g=="function"&&(Rl(e,n,g,r),y=e.memoizedState),(l=tr||AT(e,n,l,r,d,y,u))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),r=!1)}return Tp(t,e,n,r,s,i)}function Tp(t,e,n,r,i,s){QT(t,e);var o=(e.flags&64)!=0;if(!r&&!o)return i&&pT(e,n,!1),En(t,e,s);r=e.stateNode,cL.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Pl(e,t.child,null,s),e.child=Pl(e,null,a,s)):gt(t,e,a,s),e.memoizedState=r.state,i&&pT(e,n,!0),e.child}function JT(t){var e=t.stateNode;e.pendingContext?dT(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dT(t,e.context,!1),up(t,e.containerInfo)}var Vl={dehydrated:null,retryLane:0};function ZT(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o;return(o=(e.flags&64)!=0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!=0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),me(ge,i&1),t===null?(r.fallback!==void 0&&cp(e),t=r.children,i=r.fallback,s?(t=eS(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Vl,t):typeof r.unstable_expectedLoadTime=="number"?(t=eS(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Vl,e.lanes=33554432,t):(n=Bp({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=nS(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Vl,r):(n=tS(t,e,r.children,n),e.memoizedState=null,n):s?(r=nS(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Vl,r):(n=tS(t,e,r.children,n),e.memoizedState=null,n)}function eS(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)==0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=Bp(e,i,0,null),n=gs(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function tS(t,e,n,r){var i=t.child;return t=i.sibling,n=cr(i,{mode:"visible",children:n}),(e.mode&2)==0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function nS(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)==0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=cr(o,a),t!==null?r=cr(t,r):(r=gs(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function rS(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),_T(t.return,e)}function Sp(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function iS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gt(t,e,r.children,n),r=ge.current,(r&2)!=0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!=0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rS(t,n);else if(t.tag===19)rS(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(ge,r),(e.mode&2)==0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sp(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ol(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sp(e,!0,n,null,s,e.lastEffect);break;case"together":Sp(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),aa|=e.lanes,(n&e.childLanes)!=0){if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var sS,_p,oS,aS;sS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_p=function(){};oS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yr(Zt.current);var s=null;switch(n){case"input":i=af(t,i),r=af(t,r),s=[];break;case"option":i=cf(t,i),r=cf(t,r),s=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),s=[];break;case"textarea":i=hf(t,i),r=hf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=vl)}pf(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(To.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(To.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&ce("scroll",t),s||a===u||(s=[])):typeof u=="object"&&u!==null&&u.$$typeof===tf?u.toString():(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};aS=function(t,e,n,r){n!==r&&(e.flags|=4)};function oa(t,e){if(!en)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function hL(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return pt(e.type)&&Sl(),null;case 3:return ls(),he(ft),he(We),dp(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ll(e)?e.flags|=4:r.hydrate||(e.flags|=256)),_p(e),null;case 5:lp(e);var i=Yr(Zo.current);if(n=e.type,t!==null&&e.stateNode!=null)oS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(k(166));return null}if(t=Yr(Zt.current),Ll(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Jn]=e,r[El]=s,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(t=0;t<Ho.length;t++)ce(Ho[t],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":X1(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":eE(r,s),ce("invalid",r)}pf(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):To.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&ce("scroll",r));switch(n){case"input":tl(r),Z1(r,s,!0);break;case"textarea":tl(r),nE(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=vl)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===df.html&&(t=rE(n)),t===df.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jn]=e,t[El]=r,sS(t,e,!1,!1),e.stateNode=t,o=mf(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ho.length;i++)ce(Ho[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":X1(t,r),i=af(t,r),ce("invalid",t);break;case"option":i=cf(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),ce("invalid",t);break;case"textarea":eE(t,r),i=hf(t,r),ce("invalid",t);break;default:i=r}pf(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?oE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&iE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&xo(t,u):typeof u=="number"&&xo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(To.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ce("scroll",t):u!=null&&Yd(t,s,u,o))}switch(n){case"input":tl(t),Z1(t,r,!1);break;case"textarea":tl(t),nE(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Hi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Hi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=vl)}aT(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)aS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));n=Yr(Zo.current),Yr(Zt.current),Ll(e)?(r=e.stateNode,n=e.memoizedProps,r[Jn]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jn]=e,e.stateNode=r)}return null;case 13:return he(ge),r=e.memoizedState,(e.flags&64)!=0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&Ll(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!=0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(ge.current&1)!=0?Be===0&&(Be=3):((Be===0||Be===3)&&(Be=4),st===null||(aa&134217727)==0&&(ds&134217727)==0||ps(st,Qe))),(r||n)&&(e.flags|=4),null);case 4:return ls(),_p(e),t===null&&nT(e.stateNode.containerInfo),null;case 10:return sp(e),null;case 17:return pt(e.type)&&Sl(),null;case 19:if(he(ge),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!=0,o=r.rendering,o===null)if(s)oa(r,!1);else{if(Be!==0||t!==null&&(t.flags&64)!=0)for(t=e.child;t!==null;){if(o=Ol(t),o!==null){for(e.flags|=64,oa(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(ge,ge.current&1|2),e.child}t=t.sibling}r.tail!==null&&Ge()>Op&&(e.flags|=64,s=!0,oa(r,!1),e.lanes=33554432)}else{if(!s)if(t=Ol(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oa(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!en)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*Ge()-r.renderingStartTime>Op&&n!==1073741824&&(e.flags|=64,s=!0,oa(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=Ge(),n.sibling=null,e=ge.current,me(ge,s?e&1|2:e&1),n):null;case 23:case 24:return jp(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(k(156,e.tag))}function dL(t){switch(t.tag){case 1:pt(t.type)&&Sl();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(ls(),he(ft),he(We),dp(),e=t.flags,(e&64)!=0)throw Error(k(285));return t.flags=e&-4097|64,t;case 5:return lp(t),null;case 13:return he(ge),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return he(ge),null;case 4:return ls(),null;case 10:return sp(t),null;case 23:case 24:return jp(),null;default:return null}}function Ip(t,e){try{var n="",r=e;do n+=KP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function kp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fL=typeof WeakMap=="function"?WeakMap:Map;function uS(t,e,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ql||(ql=!0,Lp=r),kp(t,e)},n}function lS(t,e,n){n=nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return kp(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this),kp(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var pL=typeof WeakSet=="function"?WeakSet:Set;function cS(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){lr(t,n)}else e.current=null}function mL(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:Ft(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&Yf(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(k(163))}function gL(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)==3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!=0&&(i&1)!=0&&(kS(n,t),IL(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:Ft(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&CT(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}CT(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&aT(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&SE(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(k(163))}function hS(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=sE("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function dS(t,e){if(Wr&&typeof Wr.onCommitFiberUnmount=="function")try{Wr.onCommitFiberUnmount(Jf,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!=0)kS(e,n);else{r=e;try{i()}catch(s){lr(r,s)}}n=n.next}while(n!==t)}break;case 1:if(cS(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){lr(e,s)}break;case 5:cS(e);break;case 4:gS(t,e)}}function fS(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function pS(t){return t.tag===5||t.tag===3||t.tag===4}function mS(t){e:{for(var e=t.return;e!==null;){if(pS(e))break e;e=e.return}throw Error(k(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(k(161))}n.flags&16&&(xo(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||pS(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Cp(t,n,e):xp(t,n,e)}function Cp(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vl));else if(r!==4&&(t=t.child,t!==null))for(Cp(t,e,n),t=t.sibling;t!==null;)Cp(t,e,n),t=t.sibling}function xp(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(xp(t,e,n),t=t.sibling;t!==null;)xp(t,e,n),t=t.sibling}function gS(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(k(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,u=a;;)if(dS(o,u),u.child!==null&&u.tag!==4)u.child.return=u,u=u.child;else{if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(dS(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Ap(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[El]=r,t==="input"&&r.type==="radio"&&r.name!=null&&J1(n,r),mf(t,i),e=mf(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?oE(n,a):o==="dangerouslySetInnerHTML"?iE(n,a):o==="children"?xo(n,a):Yd(n,o,a,e)}switch(t){case"input":uf(n,r);break;case"textarea":tE(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?Hi(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?Hi(n,!!r.multiple,r.defaultValue,!0):Hi(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(k(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,SE(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(Pp=Ge(),hS(e.child,!0)),yS(e);return;case 19:yS(e);return;case 17:return;case 23:case 24:hS(e,e.memoizedState!==null);return}throw Error(k(163))}function yS(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pL),e.forEach(function(r){var i=xL.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yL(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var vL=Math.ceil,Bl=Vr.ReactCurrentDispatcher,Rp=Vr.ReactCurrentOwner,H=0,st=null,xe=null,Qe=0,Jr=0,Np=Zn(0),Be=0,zl=null,hs=0,aa=0,ds=0,Dp=0,bp=null,Pp=0,Op=1/0;function fs(){Op=Ge()+500}var O=null,ql=!1,Lp=null,nn=null,sr=!1,ua=null,la=90,Mp=[],$p=[],Tn=null,ca=0,Up=null,Hl=-1,Sn=0,Kl=0,ha=null,Wl=!1;function kt(){return(H&48)!=0?Ge():Hl!==-1?Hl:Hl=Ge()}function or(t){if(t=t.mode,(t&2)==0)return 1;if((t&4)==0)return os()===99?1:2;if(Sn===0&&(Sn=hs),sL.transition!==0){Kl!==0&&(Kl=bp!==null?bp.pendingLanes:0),t=Sn;var e=4186112&~Kl;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=os(),(H&4)!=0&&t===98?t=ll(12,Sn):(t=uO(t),t=ll(t,Sn)),t}function ar(t,e,n){if(50<ca)throw ca=0,Up=null,Error(k(185));if(t=Gl(t,e),t===null)return null;cl(t,e,n),t===st&&(ds|=e,Be===4&&ps(t,Qe));var r=os();e===1?(H&8)!=0&&(H&48)==0?Fp(t):(bt(t,n),H===0&&(fs(),Jt())):((H&4)==0||r!==98&&r!==99||(Tn===null?Tn=new Set([t]):Tn.add(t)),bt(t,n)),bp=t}function Gl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function bt(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Qn(o),u=1<<a,l=s[a];if(l===-1){if((u&r)==0||(u&i)!=0){l=e,Yi(u);var c=ue;s[a]=10<=c?l+250:6<=c?l+5e3:-1}}else l<=e&&(t.expiredLanes|=u);o&=~u}if(r=$o(t,t===st?Qe:0),e=ue,r===0)n!==null&&(n!==np&&ep(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==np&&ep(n)}e===15?(n=Fp.bind(null,t),vn===null?(vn=[n],kl=Zf(Il,ST)):vn.push(n),n=np):e===14?n=Go(99,Fp.bind(null,t)):(n=lO(e),n=Go(n,vS.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function vS(t){if(Hl=-1,Kl=Sn=0,(H&48)!=0)throw Error(k(327));var e=t.callbackNode;if(ur()&&t.callbackNode!==e)return null;var n=$o(t,t===st?Qe:0);if(n===0)return null;var r=n,i=H;H|=16;var s=SS();(st!==t||Qe!==r)&&(fs(),ms(t,r));do try{TL();break}catch(a){TS(t,a)}while(1);if(ip(),Bl.current=s,H=i,xe!==null?r=0:(st=null,Qe=0,r=Be),(hs&ds)!=0)ms(t,0);else if(r!==0){if(r===2&&(H|=64,t.hydrate&&(t.hydrate=!1,Yf(t.containerInfo)),n=RE(t),n!==0&&(r=da(t,n))),r===1)throw e=zl,ms(t,0),ps(t,n),bt(t,Ge()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(k(345));case 2:Zr(t);break;case 3:if(ps(t,n),(n&62914560)===n&&(r=Pp+500-Ge(),10<r)){if($o(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=uT(Zr.bind(null,t),r);break}Zr(t);break;case 4:if(ps(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-Qn(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=Ge()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*vL(n/1960))-n,10<n){t.timeoutHandle=uT(Zr.bind(null,t),n);break}Zr(t);break;case 5:Zr(t);break;default:throw Error(k(329))}}return bt(t,Ge()),t.callbackNode===e?vS.bind(null,t):null}function ps(t,e){for(e&=~Dp,e&=~ds,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),r=1<<n;t[n]=-1,e&=~r}}function Fp(t){if((H&48)!=0)throw Error(k(327));if(ur(),t===st&&(t.expiredLanes&Qe)!=0){var e=Qe,n=da(t,e);(hs&ds)!=0&&(e=$o(t,e),n=da(t,e))}else e=$o(t,0),n=da(t,e);if(t.tag!==0&&n===2&&(H|=64,t.hydrate&&(t.hydrate=!1,Yf(t.containerInfo)),e=RE(t),e!==0&&(n=da(t,e))),n===1)throw n=zl,ms(t,0),ps(t,e),bt(t,Ge()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zr(t),bt(t,Ge()),null}function wL(){if(Tn!==null){var t=Tn;Tn=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,bt(e,Ge())})}Jt()}function wS(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(fs(),Jt())}}function ES(t,e){var n=H;H&=-2,H|=8;try{return t(e)}finally{H=n,H===0&&(fs(),Jt())}}function Yl(t,e){me(Np,Jr),Jr|=e,hs|=e}function jp(){Jr=Np.current,he(Np)}function ms(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZO(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:ls(),he(ft),he(We),dp();break;case 5:lp(r);break;case 4:ls();break;case 13:he(ge);break;case 19:he(ge);break;case 10:sp(r);break;case 23:case 24:jp()}n=n.return}st=t,xe=cr(t.current,null),Qe=Jr=hs=e,Be=0,zl=null,Dp=ds=aa=0}function TS(t,e){do{var n=xe;try{if(ip(),ea.current=jl,Ml){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ml=!1}if(ta=0,Ve=Ye=_e=null,na=!1,Rp.current=null,n===null||n.return===null){Be=1,zl=e,xe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Qe,a.flags|=2048,a.firstEffect=a.lastEffect=null,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u;if((a.mode&2)==0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var h=(ge.current&1)!=0,d=o;do{var g;if(g=d.tag===13){var y=d.memoizedState;if(y!==null)g=y.dehydrated!==null;else{var E=d.memoizedProps;g=E.fallback===void 0?!1:E.unstable_avoidThisFallback!==!0?!0:!h}}if(g){var f=d.updateQueue;if(f===null){var p=new Set;p.add(l),d.updateQueue=p}else f.add(l);if((d.mode&2)==0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var m=nr(-1,1);m.tag=2,rr(a,m)}a.lanes|=1;break e}u=void 0,a=e;var v=s.pingCache;if(v===null?(v=s.pingCache=new fL,u=new Set,v.set(l,u)):(u=v.get(l),u===void 0&&(u=new Set,v.set(l,u))),!u.has(a)){u.add(a);var w=CL.bind(null,s,l,a);l.then(w,w)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);u=Error((qi(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Be!==5&&(Be=2),u=Ip(u,a),d=o;do{switch(d.tag){case 3:s=u,d.flags|=4096,e&=-e,d.lanes|=e;var N=uS(d,s,e);kT(d,N);break e;case 1:s=u;var _=d.type,M=d.stateNode;if((d.flags&64)==0&&(typeof _.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(nn===null||!nn.has(M)))){d.flags|=4096,e&=-e,d.lanes|=e;var F=lS(d,s,e);kT(d,F);break e}}d=d.return}while(d!==null)}IS(n)}catch(x){e=x,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function SS(){var t=Bl.current;return Bl.current=jl,t===null?jl:t}function da(t,e){var n=H;H|=16;var r=SS();st===t&&Qe===e||ms(t,e);do try{EL();break}catch(i){TS(t,i)}while(1);if(ip(),H=n,Bl.current=r,xe!==null)throw Error(k(261));return st=null,Qe=0,Be}function EL(){for(;xe!==null;)_S(xe)}function TL(){for(;xe!==null&&!nL();)_S(xe)}function _S(t){var e=xS(t.alternate,t,Jr);t.memoizedProps=t.pendingProps,e===null?IS(t):xe=e,Rp.current=null}function IS(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)==0){if(n=hL(n,e,Jr),n!==null){xe=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Jr&1073741824)!=0||(n.mode&4)==0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)==0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=dL(e),n!==null){n.flags&=2047,xe=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Be===0&&(Be=5)}function Zr(t){var e=os();return Gr(99,SL.bind(null,t,e)),null}function SL(t,e){do ur();while(ua!==null);if((H&48)!=0)throw Error(k(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var u=31-Qn(s),l=1<<u;i[u]=0,o[u]=-1,a[u]=-1,s&=~l}if(Tn!==null&&(r&24)==0&&Tn.has(t)&&Tn.delete(t),t===st&&(xe=st=null,Qe=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=H,H|=32,Rp.current=null,Kf=hl,o=YE(),Bf(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(l=a.getSelection&&a.getSelection())&&l.rangeCount!==0){a=l.anchorNode,s=l.anchorOffset,u=l.focusNode,l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var c=0,h=-1,d=-1,g=0,y=0,E=o,f=null;t:for(;;){for(var p;E!==a||s!==0&&E.nodeType!==3||(h=c+s),E!==u||l!==0&&E.nodeType!==3||(d=c+l),E.nodeType===3&&(c+=E.nodeValue.length),(p=E.firstChild)!==null;)f=E,E=p;for(;;){if(E===o)break t;if(f===a&&++g===s&&(h=c),f===u&&++y===l&&(d=c),(p=E.nextSibling)!==null)break;E=f,f=E.parentNode}E=p}a=h===-1||d===-1?null:{start:h,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;Wf={focusedElem:o,selectionRange:a},hl=!1,ha=null,Wl=!1,O=r;do try{_L()}catch(x){if(O===null)throw Error(k(330));lr(O,x),O=O.nextEffect}while(O!==null);ha=null,O=r;do try{for(o=t;O!==null;){var m=O.flags;if(m&16&&xo(O.stateNode,""),m&128){var v=O.alternate;if(v!==null){var w=v.ref;w!==null&&(typeof w=="function"?w(null):w.current=null)}}switch(m&1038){case 2:mS(O),O.flags&=-3;break;case 6:mS(O),O.flags&=-3,Ap(O.alternate,O);break;case 1024:O.flags&=-1025;break;case 1028:O.flags&=-1025,Ap(O.alternate,O);break;case 4:Ap(O.alternate,O);break;case 8:a=O,gS(o,a);var N=a.alternate;fS(a),N!==null&&fS(N)}O=O.nextEffect}}catch(x){if(O===null)throw Error(k(330));lr(O,x),O=O.nextEffect}while(O!==null);if(w=Wf,v=YE(),m=w.focusedElem,o=w.selectionRange,v!==m&&m&&m.ownerDocument&&GE(m.ownerDocument.documentElement,m)){for(o!==null&&Bf(m)&&(v=o.start,w=o.end,w===void 0&&(w=v),"selectionStart"in m?(m.selectionStart=v,m.selectionEnd=Math.min(w,m.value.length)):(w=(v=m.ownerDocument||document)&&v.defaultView||window,w.getSelection&&(w=w.getSelection(),a=m.textContent.length,N=Math.min(o.start,a),o=o.end===void 0?N:Math.min(o.end,a),!w.extend&&N>o&&(a=o,o=N,N=a),a=WE(m,N),s=WE(m,o),a&&s&&(w.rangeCount!==1||w.anchorNode!==a.node||w.anchorOffset!==a.offset||w.focusNode!==s.node||w.focusOffset!==s.offset)&&(v=v.createRange(),v.setStart(a.node,a.offset),w.removeAllRanges(),N>o?(w.addRange(v),w.extend(s.node,s.offset)):(v.setEnd(s.node,s.offset),w.addRange(v)))))),v=[],w=m;w=w.parentNode;)w.nodeType===1&&v.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<v.length;m++)w=v[m],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}hl=!!Kf,Wf=Kf=null,t.current=n,O=r;do try{for(m=t;O!==null;){var _=O.flags;if(_&36&&gL(m,O.alternate,O),_&128){v=void 0;var M=O.ref;if(M!==null){var F=O.stateNode;switch(O.tag){case 5:v=F;break;default:v=F}typeof M=="function"?M(v):M.current=v}}O=O.nextEffect}}catch(x){if(O===null)throw Error(k(330));lr(O,x),O=O.nextEffect}while(O!==null);O=null,iL(),H=i}else t.current=n;if(sr)sr=!1,ua=t,la=e;else for(O=r;O!==null;)e=O.nextEffect,O.nextEffect=null,O.flags&8&&(_=O,_.sibling=null,_.stateNode=null),O=e;if(r=t.pendingLanes,r===0&&(nn=null),r===1?t===Up?ca++:(ca=0,Up=t):ca=0,n=n.stateNode,Wr&&typeof Wr.onCommitFiberRoot=="function")try{Wr.onCommitFiberRoot(Jf,n,void 0,(n.current.flags&64)==64)}catch{}if(bt(t,Ge()),ql)throw ql=!1,t=Lp,Lp=null,t;return(H&8)!=0||Jt(),null}function _L(){for(;O!==null;){var t=O.alternate;Wl||ha===null||((O.flags&8)!=0?mE(O,ha)&&(Wl=!0):O.tag===13&&yL(t,O)&&mE(O,ha)&&(Wl=!0));var e=O.flags;(e&256)!=0&&mL(t,O),(e&512)==0||sr||(sr=!0,Go(97,function(){return ur(),null})),O=O.nextEffect}}function ur(){if(la!==90){var t=97<la?97:la;return la=90,Gr(t,kL)}return!1}function IL(t,e){Mp.push(e,t),sr||(sr=!0,Go(97,function(){return ur(),null}))}function kS(t,e){$p.push(e,t),sr||(sr=!0,Go(97,function(){return ur(),null}))}function kL(){if(ua===null)return!1;var t=ua;if(ua=null,(H&48)!=0)throw Error(k(331));var e=H;H|=32;var n=$p;$p=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(u){if(s===null)throw Error(k(330));lr(s,u)}}for(n=Mp,Mp=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(u){if(s===null)throw Error(k(330));lr(s,u)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return H=e,Jt(),!0}function CS(t,e,n){e=Ip(n,e),e=uS(t,e,1),rr(t,e),e=kt(),t=Gl(t,1),t!==null&&(cl(t,1,e),bt(t,e))}function lr(t,e){if(t.tag===3)CS(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){CS(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){t=Ip(e,t);var i=lS(n,t,1);if(rr(n,i),i=kt(),n=Gl(n,1),n!==null)cl(n,1,i),bt(n,i);else if(typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function CL(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=kt(),t.pingedLanes|=t.suspendedLanes&n,st===t&&(Qe&n)===n&&(Be===4||Be===3&&(Qe&62914560)===Qe&&500>Ge()-Pp?ms(t,0):Dp|=n),bt(t,e)}function xL(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)==0?e=1:(e&4)==0?e=os()===99?1:2:(Sn===0&&(Sn=hs),e=Qi(62914560&~Sn),e===0&&(e=4194304))),n=kt(),t=Gl(t,e),t!==null&&(cl(t,e,n),bt(t,n))}var xS;xS=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)jt=!0;else if((n&r)!=0)jt=(t.flags&16384)!=0;else{switch(jt=!1,e.tag){case 3:JT(e),hp();break;case 5:PT(e);break;case 1:pt(e.type)&&_l(e);break;case 4:up(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;me(Cl,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!=0?ZT(t,e,n):(me(ge,ge.current&1),e=En(t,e,n),e!==null?e.sibling:null);me(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!=0,(t.flags&64)!=0){if(r)return iS(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(ge,ge.current),r)break;return null;case 23:case 24:return e.lanes=0,wp(t,e,n)}return En(t,e,n)}else jt=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=ss(e,We.current),us(e,n),i=pp(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)){var s=!0;_l(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,op(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Rl(e,r,o,t),i.updater=Nl,e.stateNode=i,i._reactInternals=e,ap(e,r,t,n),e=Tp(null,e,r,!0,s,n)}else e.tag=0,gt(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=RL(i),t=Ft(i,t),s){case 0:e=Ep(null,e,i,t,n);break e;case 1:e=XT(null,e,i,t,n);break e;case 11:e=WT(null,e,i,t,n);break e;case 14:e=GT(null,e,i,Ft(i.type,t),r,n);break e}throw Error(k(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Ep(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),XT(t,e,r,i,n);case 3:if(JT(e),r=e.updateQueue,t===null||r===null)throw Error(k(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,IT(t,e),Yo(e,r,null,n),r=e.memoizedState.element,r===i)hp(),e=En(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(ir=ts(e.stateNode.containerInfo.firstChild),wn=e,s=en=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],cs.push(s);for(n=bT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else gt(t,e,r,n),hp();e=e.child}return e;case 5:return PT(e),t===null&&cp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Gf(r,i)?o=null:s!==null&&Gf(r,s)&&(e.flags|=16),QT(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&cp(e),null;case 13:return ZT(t,e,n);case 4:return up(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Pl(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),WT(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(me(Cl,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=Rt(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!ft.current){e=En(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var l=u.firstContext;l!==null;){if(l.context===r&&(l.observedBits&s)!=0){a.tag===1&&(l=nr(-1,n&-n),l.tag=2,rr(a,l)),a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),_T(a.return,n),u.lanes|=n;break}l=l.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,us(e,n),i=Nt(i,s.unstable_observedBits),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return i=e.type,s=Ft(i,e.pendingProps),s=Ft(i.type,s),GT(t,e,i,s,r,n);case 15:return YT(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,pt(r)?(t=!0,_l(e)):t=!1,us(e,n),RT(e,r,i),ap(e,r,i,n),Tp(null,e,r,!0,t,n);case 19:return iS(t,e,n);case 23:return wp(t,e,n);case 24:return wp(t,e,n)}throw Error(k(156,e.tag))};function AL(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new AL(t,e,n,r)}function Vp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RL(t){if(typeof t=="function")return Vp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xu)return 11;if(t===Zu)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ql(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hn:return gs(n.children,i,s,e);case W1:o=8,i|=16;break;case Qd:o=8,i|=1;break;case _o:return t=Pt(12,n,e,i|8),t.elementType=_o,t.type=_o,t.lanes=s,t;case Io:return t=Pt(13,n,e,i),t.type=Io,t.elementType=Io,t.lanes=s,t;case Ju:return t=Pt(19,n,e,i),t.elementType=Ju,t.lanes=s,t;case nf:return Bp(n,i,s,e);case rf:return t=Pt(24,n,e,i),t.elementType=rf,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xd:o=10;break e;case Jd:o=9;break e;case Xu:o=11;break e;case Zu:o=14;break e;case Zd:o=16,r=null;break e;case ef:o=22;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function gs(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function Bp(t,e,n,r){return t=Pt(23,t,r,e),t.elementType=nf,t.lanes=n,t}function zp(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function qp(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function NL(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Nf(0),this.expirationTimes=Nf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nf(0),this.mutableSourceEagerHydrationData=null}function DL(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Br,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Xl(t,e,n,r){var i=e.current,s=kt(),o=or(i);e:if(n){n=n._reactInternals;t:{if(qr(n)!==n||n.tag!==1)throw Error(k(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(pt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(k(171))}if(n.tag===1){var u=n.type;if(pt(u)){n=fT(n,u,a);break e}}n=a}else n=er;return e.context===null?e.context=n:e.pendingContext=n,e=nr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),rr(i,e),ar(i,o,s),o}function Hp(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function AS(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kp(t,e){AS(t,e),(t=t.alternate)&&AS(t,e)}function bL(){return null}function Wp(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new NL(t,e,n!=null&&n.hydrate===!0),e=Pt(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,op(e),t[ns]=n.current,nT(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}Wp.prototype.render=function(t){Xl(t,this._internalRoot,null,null)};Wp.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;Xl(null,t,null,function(){e[ns]=null})};function fa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function PL(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new Wp(t,0,e?{hydrate:!0}:void 0)}function Jl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var l=Hp(o);a.call(l)}}Xl(e,o,t,i)}else{if(s=n._reactRootContainer=PL(n,r),o=s._internalRoot,typeof i=="function"){var u=i;i=function(){var l=Hp(o);u.call(l)}}ES(function(){Xl(e,o,t,i)})}return Hp(o)}gE=function(t){if(t.tag===13){var e=kt();ar(t,4,e),Kp(t,4)}};If=function(t){if(t.tag===13){var e=kt();ar(t,67108864,e),Kp(t,67108864)}};yE=function(t){if(t.tag===13){var e=kt(),n=or(t);ar(t,n,e),Kp(t,n)}};vE=function(t,e){return e()};yf=function(t,e,n){switch(e){case"input":if(uf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Tl(r);if(!i)throw Error(k(90));Q1(r),uf(r,i)}}}break;case"textarea":tE(t,n);break;case"select":e=n.value,e!=null&&Hi(t,!!n.multiple,e,!1)}};vf=wS;cE=function(t,e,n,r,i){var s=H;H|=4;try{return Gr(98,t.bind(null,e,n,r,i))}finally{H=s,H===0&&(fs(),Jt())}};wf=function(){(H&49)==0&&(wL(),ur())};hE=function(t,e){var n=H;H|=2;try{return t(e)}finally{H=n,H===0&&(fs(),Jt())}};function RS(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fa(e))throw Error(k(200));return DL(t,e,null,n)}var OL={Events:[Wo,rs,Tl,uE,lE,ur,{current:!1}]},pa={findFiberByHostInstance:Hr,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},LL={bundleType:pa.bundleType,version:pa.version,rendererPackageName:pa.rendererPackageName,rendererConfig:pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pE(t),t===null?null:t.stateNode},findFiberByHostInstance:pa.findFiberByHostInstance||bL,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Jf=Zl.inject(LL),Wr=Zl}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OL;At.createPortal=RS;At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):Error(k(268,Object.keys(t)));return t=pE(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t,e){var n=H;if((n&48)!=0)return t(e);H|=1;try{if(t)return Gr(99,t.bind(null,e))}finally{H=n,Jt()}};At.hydrate=function(t,e,n){if(!fa(e))throw Error(k(200));return Jl(null,t,e,!0,n)};At.render=function(t,e,n){if(!fa(e))throw Error(k(200));return Jl(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!fa(t))throw Error(k(40));return t._reactRootContainer?(ES(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[ns]=null})}),!0):!1};At.unstable_batchedUpdates=wS;At.unstable_createPortal=function(t,e){return RS(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!fa(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Jl(t,e,n,!1,r)};At.version="17.0.2";function NS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(NS)}catch(t){console.error(t)}}NS(),j1.exports=At;var wM=j1.exports;export{KS as A,GL as B,cA as C,wM as D,rM as E,qL as F,VL as G,ZL as H,iM as I,$L as J,YL as K,BL as L,wa as M,UL as N,FL as R,WL as S,nM as T,JL as W,eM as _,fM as a,oM as b,aM as c,Cn as d,pM as e,gM as f,lM as g,dc as h,KL as i,km as j,dM as k,mM as l,cM as m,hM as n,uM as o,tM as p,QL as q,V as r,XL as s,yM as t,jL as u,vM as v,sM as w,Ts as x,zL as y,HL as z};
