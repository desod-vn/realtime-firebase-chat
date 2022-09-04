import{o as Qs,d as Ys}from"./idb.62cfd1d4.js";import{_ as Xs}from"./tslib.285d8b56.js";/**
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
 */const ff=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},gf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(n[l],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ff(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},mf=function(t){try{return gf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class yf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function B(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _a(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(B())}function wf(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sa(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ka(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vf(){return B().indexOf("Electron/")>=0}function Aa(){const t=B();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function If(){return B().indexOf("MSAppHost/")>=0}function Tf(){return!wf()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ca(){return typeof indexedDB=="object"}function Ef(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function bf(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const _f="FirebaseError";class $e extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=_f,Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vt.prototype.create)}}class vt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Sf(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new $e(s,a,r)}}function Sf(t,e){return t.replace(kf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kf=/\{\$([^}]+)}/g;function Af(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ra(i)&&Ra(o)){if(!br(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ra(t){return t!==null&&typeof t=="object"}/**
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
 */function Rn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cf(t,e){const n=new Rf(t,e);return n.subscribe.bind(n)}class Rf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Nf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Js),s.error===void 0&&(s.error=Js),s.complete===void 0&&(s.complete=Js);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Js(){}/**
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
 */function q(t){return t&&t._delegate?t._delegate:t}class Ce{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const It="[DEFAULT]";/**
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
 */class Df{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pf(e))try{this.getOrInitializeService({instanceIdentifier:It})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=It){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=It){return this.instances.has(e)}getOptions(e=It){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Of(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=It){return this.component?this.component.multipleInstances?e:It:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Of(t){return t===It?void 0:t}function Pf(t){return t.instantiationMode==="EAGER"}/**
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
 */class xf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Df(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var D;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(D||(D={}));const Lf={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Mf=D.INFO,Uf={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Ff=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Uf[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zs{constructor(e){this.name=e,this._logLevel=Mf,this._logHandler=Ff,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}/**
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
 */class Vf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Bf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ei="@firebase/app",Na="0.7.14";/**
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
 */const ti=new Zs("@firebase/app"),qf="@firebase/app-compat",$f="@firebase/analytics-compat",jf="@firebase/analytics",Kf="@firebase/app-check-compat",Hf="@firebase/app-check",zf="@firebase/auth",Gf="@firebase/auth-compat",Wf="@firebase/database",Qf="@firebase/database-compat",Yf="@firebase/functions",Xf="@firebase/functions-compat",Jf="@firebase/installations",Zf="@firebase/installations-compat",ep="@firebase/messaging",tp="@firebase/messaging-compat",np="@firebase/performance",rp="@firebase/performance-compat",sp="@firebase/remote-config",ip="@firebase/remote-config-compat",op="@firebase/storage",ap="@firebase/storage-compat",cp="@firebase/firestore",up="@firebase/firestore-compat",lp="firebase",hp="9.6.4";/**
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
 */const Da="[DEFAULT]",dp={[ei]:"fire-core",[qf]:"fire-core-compat",[jf]:"fire-analytics",[$f]:"fire-analytics-compat",[Hf]:"fire-app-check",[Kf]:"fire-app-check-compat",[zf]:"fire-auth",[Gf]:"fire-auth-compat",[Wf]:"fire-rtdb",[Qf]:"fire-rtdb-compat",[Yf]:"fire-fn",[Xf]:"fire-fn-compat",[Jf]:"fire-iid",[Zf]:"fire-iid-compat",[ep]:"fire-fcm",[tp]:"fire-fcm-compat",[np]:"fire-perf",[rp]:"fire-perf-compat",[sp]:"fire-rc",[ip]:"fire-rc-compat",[op]:"fire-gcs",[ap]:"fire-gcs-compat",[cp]:"fire-fst",[up]:"fire-fst-compat","fire-js":"fire-js",[lp]:"fire-js-all"};/**
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
 */const _r=new Map,ni=new Map;function fp(t,e){try{t.container.addComponent(e)}catch(n){ti.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Oe(t){const e=t.name;if(ni.has(e))return ti.debug(`There were multiple attempts to register component ${e}.`),!1;ni.set(e,t);for(const n of _r.values())fp(n,t);return!0}function Tt(t,e){return t.container.getProvider(e)}/**
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
 */const pp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Sr=new vt("app","Firebase",pp);/**
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
 */class gp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ce("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ht=hp;function PE(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Da,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Sr.create("bad-app-name",{appName:String(r)});const s=_r.get(r);if(s){if(br(t,s.options)&&br(n,s.config))return s;throw Sr.create("duplicate-app",{appName:r})}const i=new xf(r);for(const a of ni.values())i.addComponent(a);const o=new gp(t,n,i);return _r.set(r,o),o}function kr(t=Da){const e=_r.get(t);if(!e)throw Sr.create("no-app",{appName:t});return e}function Te(t,e,n){var r;let s=(r=dp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ti.warn(a.join(" "));return}Oe(new Ce(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function mp(t){Oe(new Ce("platform-logger",e=>new Vf(e),"PRIVATE")),Te(ei,Na,t),Te(ei,Na,"esm2017"),Te("fire-js","")}mp("");var yp=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},v,ri=ri||{},_=yp||self;function Ar(){}function si(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Nn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function wp(t){return Object.prototype.hasOwnProperty.call(t,ii)&&t[ii]||(t[ii]=++vp)}var ii="closure_uid_"+(1e9*Math.random()>>>0),vp=0;function Ip(t,e,n){return t.call.apply(t.bind,arguments)}function Tp(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function J(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?J=Ip:J=Tp,J.apply(null,arguments)}function Cr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Z(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function et(){this.s=this.s,this.o=this.o}var Ep=0,bp={};et.prototype.s=!1;et.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Ep!=0)){var t=wp(this);delete bp[t]}};et.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Oa=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Pa=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function _p(t){e:{var e=gg;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function xa(t){return Array.prototype.concat.apply([],arguments)}function oi(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Rr(t){return/^[\s\xa0]*$/.test(t)}var La=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ue(t,e){return t.indexOf(e)!=-1}function ai(t,e){return t<e?-1:t>e?1:0}var le;e:{var Ma=_.navigator;if(Ma){var Ua=Ma.userAgent;if(Ua){le=Ua;break e}}le=""}function ci(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Fa(t){const e={};for(const n in t)e[n]=t[n];return e}var Va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ba(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Va.length;i++)n=Va[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ui(t){return ui[" "](t),t}ui[" "]=Ar;function Sp(t){var e=Cp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var kp=ue(le,"Opera"),zt=ue(le,"Trident")||ue(le,"MSIE"),qa=ue(le,"Edge"),li=qa||zt,$a=ue(le,"Gecko")&&!(ue(le.toLowerCase(),"webkit")&&!ue(le,"Edge"))&&!(ue(le,"Trident")||ue(le,"MSIE"))&&!ue(le,"Edge"),Ap=ue(le.toLowerCase(),"webkit")&&!ue(le,"Edge");function ja(){var t=_.document;return t?t.documentMode:void 0}var Nr;e:{var hi="",di=function(){var t=le;if($a)return/rv:([^\);]+)(\)|;)/.exec(t);if(qa)return/Edge\/([\d\.]+)/.exec(t);if(zt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ap)return/WebKit\/(\S+)/.exec(t);if(kp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(di&&(hi=di?di[1]:""),zt){var fi=ja();if(fi!=null&&fi>parseFloat(hi)){Nr=String(fi);break e}}Nr=hi}var Cp={};function Rp(){return Sp(function(){let t=0;const e=La(String(Nr)).split("."),n=La("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=ai(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||ai(s[2].length==0,i[2].length==0)||ai(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var pi;if(_.document&&zt){var Ka=ja();pi=Ka||parseInt(Nr,10)||void 0}else pi=void 0;var Np=pi,Dp=function(){if(!_.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{_.addEventListener("test",Ar,e),_.removeEventListener("test",Ar,e)}catch{}return t}();function ie(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};function Dn(t,e){if(ie.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($a){e:{try{ui(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Op[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Dn.Z.h.call(this)}}Z(Dn,ie);var Op={2:"touch",3:"pen",4:"mouse"};Dn.prototype.h=function(){Dn.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var On="closure_listenable_"+(1e6*Math.random()|0),Pp=0;function xp(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++Pp,this.ca=this.fa=!1}function Dr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Or(t){this.src=t,this.g={},this.h=0}Or.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=mi(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new xp(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function gi(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Oa(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Dr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function mi(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var yi="closure_lm_"+(1e6*Math.random()|0),wi={};function Ha(t,e,n,r,s){if(r&&r.once)return Ga(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ha(t,e[i],n,r,s);return null}return n=Ei(n),t&&t[On]?t.N(e,n,Nn(r)?!!r.capture:!!r,s):za(t,e,n,!1,r,s)}function za(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Nn(s)?!!s.capture:!!s,a=Ii(t);if(a||(t[yi]=a=new Or(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Lp(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Dp||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Qa(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Lp(){function t(n){return e.call(t.src,t.listener,n)}var e=Mp;return t}function Ga(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ga(t,e[i],n,r,s);return null}return n=Ei(n),t&&t[On]?t.O(e,n,Nn(r)?!!r.capture:!!r,s):za(t,e,n,!0,r,s)}function Wa(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Wa(t,e[i],n,r,s);else r=Nn(r)?!!r.capture:!!r,n=Ei(n),t&&t[On]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=mi(i,n,r,s),-1<n&&(Dr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ii(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mi(e,n,r,s)),(n=-1<t?e[t]:null)&&vi(n))}function vi(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[On])gi(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Qa(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ii(e))?(gi(n,t),n.h==0&&(n.src=null,e[yi]=null)):Dr(t)}}}function Qa(t){return t in wi?wi[t]:wi[t]="on"+t}function Mp(t,e){if(t.ca)t=!0;else{e=new Dn(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&vi(t),t=n.call(r,e)}return t}function Ii(t){return t=t[yi],t instanceof Or?t:null}var Ti="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ei(t){return typeof t=="function"?t:(t[Ti]||(t[Ti]=function(e){return t.handleEvent(e)}),t[Ti])}function Q(){et.call(this),this.i=new Or(this),this.P=this,this.I=null}Z(Q,et);Q.prototype[On]=!0;Q.prototype.removeEventListener=function(t,e,n,r){Wa(this,t,e,n,r)};function ee(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ie(e,t);else if(e instanceof ie)e.target=e.target||t;else{var s=e;e=new ie(r,t),Ba(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Pr(o,r,!0,e)&&s}if(o=e.g=t,s=Pr(o,r,!0,e)&&s,s=Pr(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Pr(o,r,!1,e)&&s}Q.prototype.M=function(){if(Q.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Dr(n[r]);delete t.g[e],t.h--}}this.I=null};Q.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Q.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Pr(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&gi(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var bi=_.JSON.stringify;function Up(){var t=Xa;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Fp{constructor(){this.h=this.g=null}add(e,n){const r=Ya.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ya=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Vp,t=>t.reset());class Vp{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Bp(t){_.setTimeout(()=>{throw t},0)}function _i(t,e){Si||qp(),ki||(Si(),ki=!0),Xa.add(t,e)}var Si;function qp(){var t=_.Promise.resolve(void 0);Si=function(){t.then($p)}}var ki=!1,Xa=new Fp;function $p(){for(var t;t=Up();){try{t.h.call(t.g)}catch(n){Bp(n)}var e=Ya;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ki=!1}function xr(t,e){Q.call(this),this.h=t||1,this.g=e||_,this.j=J(this.kb,this),this.l=Date.now()}Z(xr,Q);v=xr.prototype;v.da=!1;v.S=null;v.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ee(this,"tick"),this.da&&(Ai(this),this.start()))}};v.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ai(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}v.M=function(){xr.Z.M.call(this),Ai(this),delete this.g};function Ci(t,e,n){if(typeof t=="function")n&&(t=J(t,n));else if(t&&typeof t.handleEvent=="function")t=J(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:_.setTimeout(t,e||0)}function Ja(t){t.g=Ci(()=>{t.g=null,t.i&&(t.i=!1,Ja(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jp extends et{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ja(this)}M(){super.M(),this.g&&(_.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pn(t){et.call(this),this.h=t,this.g={}}Z(Pn,et);var Za=[];function ec(t,e,n,r){Array.isArray(n)||(n&&(Za[0]=n.toString()),n=Za);for(var s=0;s<n.length;s++){var i=Ha(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function tc(t){ci(t.g,function(e,n){this.g.hasOwnProperty(n)&&vi(e)},t),t.g={}}Pn.prototype.M=function(){Pn.Z.M.call(this),tc(this)};Pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Lr(){this.g=!0}Lr.prototype.Aa=function(){this.g=!1};function Kp(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Hp(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Gt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Gp(t,n)+(r?" "+r:"")})}function zp(t,e){t.info(function(){return"TIMEOUT: "+e})}Lr.prototype.info=function(){};function Gp(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return bi(n)}catch{return e}}var Et={},nc=null;function Mr(){return nc=nc||new Q}Et.Ma="serverreachability";function rc(t){ie.call(this,Et.Ma,t)}Z(rc,ie);function xn(t){const e=Mr();ee(e,new rc(e,t))}Et.STAT_EVENT="statevent";function sc(t,e){ie.call(this,Et.STAT_EVENT,t),this.stat=e}Z(sc,ie);function he(t){const e=Mr();ee(e,new sc(e,t))}Et.Na="timingevent";function ic(t,e){ie.call(this,Et.Na,t),this.size=e}Z(ic,ie);function Ln(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return _.setTimeout(function(){t()},e)}var Ur={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},oc={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ri(){}Ri.prototype.h=null;function ac(t){return t.h||(t.h=t.i())}function cc(){}var Mn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ni(){ie.call(this,"d")}Z(Ni,ie);function Di(){ie.call(this,"c")}Z(Di,ie);var Oi;function Fr(){}Z(Fr,Ri);Fr.prototype.g=function(){return new XMLHttpRequest};Fr.prototype.i=function(){return{}};Oi=new Fr;function Un(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Pn(this),this.P=Wp,t=li?125:void 0,this.W=new xr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new uc}function uc(){this.i=null,this.g="",this.h=!1}var Wp=45e3,Pi={},Vr={};v=Un.prototype;v.setTimeout=function(t){this.P=t};function xi(t,e,n){t.K=1,t.v=Kr(je(e)),t.s=n,t.U=!0,lc(t,null)}function lc(t,e){t.F=Date.now(),Fn(t),t.A=je(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),vc(n.h,"t",r),t.C=0,n=t.l.H,t.h=new uc,t.g=$c(t.l,n?e:null,!t.s),0<t.O&&(t.L=new jp(J(t.Ia,t,t.g),t.O)),ec(t.V,t.g,"readystatechange",t.gb),e=t.H?Fa(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),xn(1),Kp(t.j,t.u,t.A,t.m,t.X,t.s)}v.gb=function(t){t=t.target;const e=this.L;e&&Ke(t)==3?e.l():this.Ia(t)};v.Ia=function(t){try{if(t==this.g)e:{const l=Ke(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||li||this.g&&(this.h.h||this.g.ga()||Dc(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?xn(3):xn(2)),Br(this);var n=this.g.ba();this.N=n;t:if(hc(this)){var r=Dc(this.g);t="";var s=r.length,i=Ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){bt(this),Vn(this);var o="";break t}this.h.i=new _.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Hp(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rr(a)){var u=a;break t}}u=null}if(n=u)Gt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Li(this,n);else{this.i=!1,this.o=3,he(12),bt(this),Vn(this);break e}}this.U?(dc(this,l,o),li&&this.i&&l==3&&(ec(this.V,this.W,"tick",this.fb),this.W.start())):(Gt(this.j,this.m,o,null),Li(this,o)),l==4&&bt(this),this.i&&!this.I&&(l==4?Fc(this.l,this):(this.i=!1,Fn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,he(12)):(this.o=0,he(13)),bt(this),Vn(this)}}}catch{}finally{}};function hc(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function dc(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=Qp(t,n),s==Vr){e==4&&(t.o=4,he(14),r=!1),Gt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Pi){t.o=4,he(15),Gt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Gt(t.j,t.m,s,null),Li(t,s);hc(t)&&s!=Vr&&s!=Pi&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,he(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),zi(e),e.L=!0,he(11))):(Gt(t.j,t.m,n,"[Invalid Chunked Response]"),bt(t),Vn(t))}v.fb=function(){if(this.g){var t=Ke(this.g),e=this.g.ga();this.C<e.length&&(Br(this),dc(this,t,e),this.i&&t!=4&&Fn(this))}};function Qp(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Vr:(n=Number(e.substring(n,r)),isNaN(n)?Pi:(r+=1,r+n>e.length?Vr:(e=e.substr(r,n),t.C=r+n,e)))}v.cancel=function(){this.I=!0,bt(this)};function Fn(t){t.Y=Date.now()+t.P,fc(t,t.P)}function fc(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ln(J(t.eb,t),e)}function Br(t){t.B&&(_.clearTimeout(t.B),t.B=null)}v.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(zp(this.j,this.A),this.K!=2&&(xn(3),he(17)),bt(this),this.o=2,Vn(this)):fc(this,this.Y-t)};function Vn(t){t.l.G==0||t.I||Fc(t.l,t)}function bt(t){Br(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ai(t.W),tc(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Li(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Fi(n.i,t))){if(n.I=t.N,!t.J&&Fi(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Yr(n),Wr(n);else break e;Hi(n),he(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ln(J(n.ab,n),6e3));if(1>=Ec(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else kt(n,11)}else if((t.J||n.g==t)&&Yr(n),!Rr(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;!i.g&&(ue(m,"spdy")||ue(m,"quic")||ue(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Vi(i,i.h),i.h=null))}if(r.D){const b=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.sa=b,M(r.F,r.D,b))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=qc(r,r.H?r.la:null,r.W),o.J){bc(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Br(a),Fn(a)),r.g=o}else Mc(r);0<n.l.length&&Qr(n)}else u[0]!="stop"&&u[0]!="close"||kt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?kt(n,7):ji(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}xn(4)}catch{}}function Yp(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(si(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Mi(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(si(t)||typeof t=="string")Pa(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(si(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=Yp(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Wt(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Wt)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}v=Wt.prototype;v.R=function(){Ui(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};v.T=function(){return Ui(this),this.g.concat()};function Ui(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];_t(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],_t(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}v.get=function(t,e){return _t(this.h,t)?this.h[t]:e};v.set=function(t,e){_t(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};v.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function _t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var pc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Xp(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function St(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof St){this.g=e!==void 0?e:t.g,qr(this,t.j),this.s=t.s,$r(this,t.i),jr(this,t.m),this.l=t.l,e=t.h;var n=new $n;n.i=e.i,e.g&&(n.g=new Wt(e.g),n.h=e.h),gc(this,n),this.o=t.o}else t&&(n=String(t).match(pc))?(this.g=!!e,qr(this,n[1]||"",!0),this.s=Bn(n[2]||""),$r(this,n[3]||"",!0),jr(this,n[4]),this.l=Bn(n[5]||"",!0),gc(this,n[6]||"",!0),this.o=Bn(n[7]||"")):(this.g=!!e,this.h=new $n(null,this.g))}St.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qn(e,mc,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qn(e,mc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(qn(n,n.charAt(0)=="/"?ng:tg,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qn(n,sg)),t.join("")};function je(t){return new St(t)}function qr(t,e,n){t.j=n?Bn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $r(t,e,n){t.i=n?Bn(e,!0):e}function jr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function gc(t,e,n){e instanceof $n?(t.h=e,ig(t.h,t.g)):(n||(e=qn(e,rg)),t.h=new $n(e,t.g))}function M(t,e,n){t.h.set(e,n)}function Kr(t){return M(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Jp(t){return t instanceof St?je(t):new St(t,void 0)}function Zp(t,e,n,r){var s=new St(null,void 0);return t&&qr(s,t),e&&$r(s,e),n&&jr(s,n),r&&(s.l=r),s}function Bn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,eg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function eg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var mc=/[#\/\?@]/g,tg=/[#\?:]/g,ng=/[#\?]/g,rg=/[#\?@]/g,sg=/#/g;function $n(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tt(t){t.g||(t.g=new Wt,t.h=0,t.i&&Xp(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}v=$n.prototype;v.add=function(t,e){tt(this),this.i=null,t=Qt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function yc(t,e){tt(t),e=Qt(t,e),_t(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,_t(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ui(t)))}function wc(t,e){return tt(t),e=Qt(t,e),_t(t.g.h,e)}v.forEach=function(t,e){tt(this),this.g.forEach(function(n,r){Pa(n,function(s){t.call(e,s,r,this)},this)},this)};v.T=function(){tt(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};v.R=function(t){tt(this);var e=[];if(typeof t=="string")wc(this,t)&&(e=xa(e,this.g.get(Qt(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=xa(e,t[n])}return e};v.set=function(t,e){return tt(this),this.i=null,t=Qt(this,t),wc(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};v.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function vc(t,e,n){yc(t,e),0<n.length&&(t.i=null,t.g.set(Qt(t,e),oi(n)),t.h+=n.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function Qt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ig(t,e){e&&!t.j&&(tt(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(yc(this,r),vc(this,s,n))},t)),t.j=e}var og=class{constructor(t,e){this.h=t,this.g=e}};function Ic(t){this.l=t||ag,_.PerformanceNavigationTiming?(t=_.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(_.g&&_.g.Ea&&_.g.Ea()&&_.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ag=10;function Tc(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ec(t){return t.h?1:t.g?t.g.size:0}function Fi(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Vi(t,e){t.g?t.g.add(e):t.h=e}function bc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ic.prototype.cancel=function(){if(this.i=_c(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _c(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return oi(t.i)}function Bi(){}Bi.prototype.stringify=function(t){return _.JSON.stringify(t,void 0)};Bi.prototype.parse=function(t){return _.JSON.parse(t,void 0)};function cg(){this.g=new Bi}function ug(t,e,n){const r=n||"";try{Mi(t,function(s,i){let o=s;Nn(s)&&(o=bi(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function lg(t,e){const n=new Lr;if(_.Image){const r=new Image;r.onload=Cr(Hr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Cr(Hr,n,r,"TestLoadImage: error",!1,e),r.onabort=Cr(Hr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Cr(Hr,n,r,"TestLoadImage: timeout",!1,e),_.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Hr(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function jn(t){this.l=t.$b||null,this.j=t.ib||!1}Z(jn,Ri);jn.prototype.g=function(){return new zr(this.l,this.j)};jn.prototype.i=function(t){return function(){return t}}({});function zr(t,e){Q.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=qi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Z(zr,Q);var qi=0;v=zr.prototype;v.open=function(t,e){if(this.readyState!=qi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Hn(this)};v.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||_).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kn(this)),this.readyState=qi};v.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Hn(this)),this.g&&(this.readyState=3,Hn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof _.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sc(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Sc(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}v.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Kn(this):Hn(this),this.readyState==3&&Sc(this)}};v.Ua=function(t){this.g&&(this.response=this.responseText=t,Kn(this))};v.Ta=function(t){this.g&&(this.response=t,Kn(this))};v.ha=function(){this.g&&Kn(this)};function Kn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Hn(t)}v.setRequestHeader=function(t,e){this.v.append(t,e)};v.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Hn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var hg=_.JSON.parse;function z(t){Q.call(this),this.headers=new Wt,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=kc,this.K=this.L=!1}Z(z,Q);var kc="",dg=/^https?$/i,fg=["POST","PUT"];v=z.prototype;v.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Oi.g(),this.C=this.u?ac(this.u):ac(Oi),this.g.onreadystatechange=J(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ac(this,i);return}t=n||"";const s=new Wt(this.headers);r&&Mi(r,function(i,o){s.set(o,i)}),r=_p(s.T()),n=_.FormData&&t instanceof _.FormData,!(0<=Oa(fg,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Nc(this),0<this.B&&((this.K=pg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=J(this.pa,this)):this.A=Ci(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ac(this,i)}};function pg(t){return zt&&Rp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function gg(t){return t.toLowerCase()=="content-type"}v.pa=function(){typeof ri!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ee(this,"timeout"),this.abort(8))};function Ac(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Cc(t),Gr(t)}function Cc(t){t.D||(t.D=!0,ee(t,"complete"),ee(t,"error"))}v.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ee(this,"complete"),ee(this,"abort"),Gr(this))};v.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gr(this,!0)),z.Z.M.call(this)};v.Fa=function(){this.s||(this.F||this.v||this.l?Rc(this):this.cb())};v.cb=function(){Rc(this)};function Rc(t){if(t.h&&typeof ri!="undefined"&&(!t.C[1]||Ke(t)!=4||t.ba()!=2)){if(t.v&&Ke(t)==4)Ci(t.Fa,0,t);else if(ee(t,"readystatechange"),Ke(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(pc)[1]||null;if(!s&&_.self&&_.self.location){var i=_.self.location.protocol;s=i.substr(0,i.length-1)}r=!dg.test(s?s.toLowerCase():"")}n=r}if(n)ee(t,"complete"),ee(t,"success");else{t.m=6;try{var o=2<Ke(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Cc(t)}}finally{Gr(t)}}}}function Gr(t,e){if(t.g){Nc(t);const n=t.g,r=t.C[0]?Ar:null;t.g=null,t.C=null,e||ee(t,"ready");try{n.onreadystatechange=r}catch{}}}function Nc(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(_.clearTimeout(t.A),t.A=null)}function Ke(t){return t.g?t.g.readyState:0}v.ba=function(){try{return 2<Ke(this)?this.g.status:-1}catch{return-1}};v.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),hg(e)}};function Dc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case kc:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}v.Da=function(){return this.m};v.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function mg(t){let e="";return ci(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function $i(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=mg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):M(t,e,n))}function zn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Oc(t){this.za=0,this.l=[],this.h=new Lr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=zn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=zn("baseRetryDelayMs",5e3,t),this.$a=zn("retryDelaySeedMs",1e4,t),this.Ya=zn("forwardChannelMaxRetries",2,t),this.ra=zn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ic(t&&t.concurrentRequestLimit),this.Ca=new cg,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}v=Oc.prototype;v.ma=8;v.G=1;function ji(t){if(Pc(t),t.G==3){var e=t.V++,n=je(t.F);M(n,"SID",t.J),M(n,"RID",e),M(n,"TYPE","terminate"),Gn(t,n),e=new Un(t,t.h,e,void 0),e.K=2,e.v=Kr(je(n)),n=!1,_.navigator&&_.navigator.sendBeacon&&(n=_.navigator.sendBeacon(e.v.toString(),"")),!n&&_.Image&&(new Image().src=e.v,n=!0),n||(e.g=$c(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Fn(e)}Bc(t)}v.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Wr(t){t.g&&(zi(t),t.g.cancel(),t.g=null)}function Pc(t){Wr(t),t.u&&(_.clearTimeout(t.u),t.u=null),Yr(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&_.clearTimeout(t.m),t.m=null)}function Ki(t,e){t.l.push(new og(t.Za++,e)),t.G==3&&Qr(t)}function Qr(t){Tc(t.i)||t.m||(t.m=!0,_i(t.Ha,t),t.C=0)}function yg(t,e){return Ec(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ln(J(t.Ha,t,e),Vc(t,t.C)),t.C++,!0)}v.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Un(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Fa(i),Ba(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Lc(this,s,e),n=je(this.F),M(n,"RID",t),M(n,"CVER",22),this.D&&M(n,"X-HTTP-Session-Id",this.D),Gn(this,n),this.o&&i&&$i(n,this.o,i),Vi(this.i,s),this.Ra&&M(n,"TYPE","init"),this.ja?(M(n,"$req",e),M(n,"SID","null"),s.$=!0,xi(s,n,null)):xi(s,n,e),this.G=2}}else this.G==3&&(t?xc(this,t):this.l.length==0||Tc(this.i)||xc(this))};function xc(t,e){var n;e?n=e.m:n=t.V++;const r=je(t.F);M(r,"SID",t.J),M(r,"RID",n),M(r,"AID",t.U),Gn(t,r),t.o&&t.s&&$i(r,t.o,t.s),n=new Un(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Lc(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Vi(t.i,n),xi(n,r,e)}function Gn(t,e){t.j&&Mi({},function(n,r){M(e,r,n)})}function Lc(t,e,n){n=Math.min(t.l.length,n);var r=t.j?J(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{ug(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Mc(t){t.g||t.u||(t.Y=1,_i(t.Ga,t),t.A=0)}function Hi(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ln(J(t.Ga,t),Vc(t,t.A)),t.A++,!0)}v.Ga=function(){if(this.u=null,Uc(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ln(J(this.bb,this),t)}};v.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,he(10),Wr(this),Uc(this))};function zi(t){t.B!=null&&(_.clearTimeout(t.B),t.B=null)}function Uc(t){t.g=new Un(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=je(t.oa);M(e,"RID","rpc"),M(e,"SID",t.J),M(e,"CI",t.N?"0":"1"),M(e,"AID",t.U),Gn(t,e),M(e,"TYPE","xmlhttp"),t.o&&t.s&&$i(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Kr(je(e)),n.s=null,n.U=!0,lc(n,t)}v.ab=function(){this.v!=null&&(this.v=null,Wr(this),Hi(this),he(19))};function Yr(t){t.v!=null&&(_.clearTimeout(t.v),t.v=null)}function Fc(t,e){var n=null;if(t.g==e){Yr(t),zi(t),t.g=null;var r=2}else if(Fi(t.i,e))n=e.D,bc(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Mr(),ee(r,new ic(r,n,e,s)),Qr(t)}else Mc(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&yg(t,e)||r==2&&Hi(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:kt(t,5);break;case 4:kt(t,10);break;case 3:kt(t,6);break;default:kt(t,2)}}}function Vc(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function kt(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=J(t.jb,t);n||(n=new St("//www.google.com/images/cleardot.gif"),_.location&&_.location.protocol=="http"||qr(n,"https"),Kr(n)),lg(n.toString(),r)}else he(2);t.G=0,t.j&&t.j.va(e),Bc(t),Pc(t)}v.jb=function(t){t?(this.h.info("Successfully pinged google.com"),he(2)):(this.h.info("Failed to ping google.com"),he(1))};function Bc(t){t.G=0,t.I=-1,t.j&&((_c(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,oi(t.l),t.l.length=0),t.j.ua())}function qc(t,e,n){let r=Jp(n);if(r.i!="")e&&$r(r,e+"."+r.i),jr(r,r.m);else{const s=_.location;r=Zp(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&ci(t.aa,function(s,i){M(r,i,s)}),e=t.D,n=t.sa,e&&n&&M(r,e,n),M(r,"VER",t.ma),Gn(t,r),r}function $c(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new z(new jn({ib:!0})):new z(t.qa),e.L=t.H,e}function jc(){}v=jc.prototype;v.xa=function(){};v.wa=function(){};v.va=function(){};v.ua=function(){};v.Oa=function(){};function Xr(){if(zt&&!(10<=Number(Np)))throw Error("Environmental error: no available transport.")}Xr.prototype.g=function(t,e){return new Ee(t,e)};function Ee(t,e){Q.call(this),this.g=new Oc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Rr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Yt(this)}Z(Ee,Q);Ee.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),_i(J(t.hb,t,e))),he(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=qc(t,null,t.W),Qr(t)};Ee.prototype.close=function(){ji(this.g)};Ee.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ki(this.g,e)}else this.v?(e={},e.__data__=bi(t),Ki(this.g,e)):Ki(this.g,t)};Ee.prototype.M=function(){this.g.j=null,delete this.j,ji(this.g),delete this.g,Ee.Z.M.call(this)};function Kc(t){Ni.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Z(Kc,Ni);function Hc(){Di.call(this),this.status=1}Z(Hc,Di);function Yt(t){this.g=t}Z(Yt,jc);Yt.prototype.xa=function(){ee(this.g,"a")};Yt.prototype.wa=function(t){ee(this.g,new Kc(t))};Yt.prototype.va=function(t){ee(this.g,new Hc(t))};Yt.prototype.ua=function(){ee(this.g,"b")};Xr.prototype.createWebChannel=Xr.prototype.g;Ee.prototype.send=Ee.prototype.u;Ee.prototype.open=Ee.prototype.m;Ee.prototype.close=Ee.prototype.close;Ur.NO_ERROR=0;Ur.TIMEOUT=8;Ur.HTTP_ERROR=6;oc.COMPLETE="complete";cc.EventType=Mn;Mn.OPEN="a";Mn.CLOSE="b";Mn.ERROR="c";Mn.MESSAGE="d";Q.prototype.listen=Q.prototype.N;z.prototype.listenOnce=z.prototype.O;z.prototype.getLastError=z.prototype.La;z.prototype.getLastErrorCode=z.prototype.Da;z.prototype.getStatus=z.prototype.ba;z.prototype.getResponseJson=z.prototype.Qa;z.prototype.getResponseText=z.prototype.ga;z.prototype.send=z.prototype.ea;var wg=function(){return new Xr},vg=function(){return Mr()},Gi=Ur,Ig=oc,Tg=Et,zc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Eg=jn,Jr=cc,bg=z;const Gc="@firebase/firestore";/**
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
 */class ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ge.UNAUTHENTICATED=new ge(null),ge.GOOGLE_CREDENTIALS=new ge("google-credentials-uid"),ge.FIRST_PARTY=new ge("first-party-uid"),ge.MOCK_USER=new ge("mock-user");/**
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
 */let Xt="9.6.3";/**
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
 */const At=new Zs("@firebase/firestore");function Wi(){return At.logLevel}function y(t,...e){if(At.logLevel<=D.DEBUG){const n=e.map(Qi);At.debug(`Firestore (${Xt}): ${t}`,...n)}}function me(t,...e){if(At.logLevel<=D.ERROR){const n=e.map(Qi);At.error(`Firestore (${Xt}): ${t}`,...n)}}function Wc(t,...e){if(At.logLevel<=D.WARN){const n=e.map(Qi);At.warn(`Firestore (${Xt}): ${t}`,...n)}}function Qi(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function T(t="Unexpected state"){const e=`FIRESTORE (${Xt}) INTERNAL ASSERTION FAILED: `+t;throw me(e),new Error(e)}function k(t,e){t||T()}function S(t,e){return t}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends $e{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pe{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class _g{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ge.UNAUTHENTICATED))}shutdown(){}}class kg{constructor(e){this.t=e,this.currentUser=ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Pe;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pe,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pe)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(k(typeof r.accessToken=="string"),new _g(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return k(e===null||typeof e=="string"),new ge(e)}}class Ag{constructor(e,n,r){this.type="FirstParty",this.user=ge.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class Cg{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new Ag(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ng{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=s=>{e.enqueueRetryable(()=>(i=>(i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`),n(i.token)))(s))};const r=s=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?r(s):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(k(typeof n.token=="string"),new Rg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class Re{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.p(r),this.T=r=>n.writeSequenceNumber(r))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function Dg(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */Re.I=-1;class Qc{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Dg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function R(t,e){return t<e?-1:t>e?1:0}function Jt(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}function Yc(t){return t+"\0"}/**
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
 */class te{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new te(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class C{constructor(e){this.timestamp=e}static fromTimestamp(e){return new C(e)}static min(){return new C(new te(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Xc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ct(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Jc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&T(),r===void 0?r=e.length-n:r>e.length-n&&T(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class P extends Wn{construct(e,n,r){return new P(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new P(n)}static emptyPath(){return new P([])}}const Og=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oe extends Wn{construct(e,n,r){return new oe(e,n,r)}static isValidIdentifier(e){return Og.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new oe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new oe(n)}static emptyPath(){return new oe([])}}/**
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
 */class Zt{constructor(e){this.fields=e,e.sort(oe.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Jt(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Y{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Y(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Y(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Y.EMPTY_BYTE_STRING=new Y("");const Pg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nt(t){if(k(!!t),typeof t=="string"){let e=0;const n=Pg.exec(t);if(k(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:G(t.seconds),nanos:G(t.nanos)}}function G(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function en(t){return typeof t=="string"?Y.fromBase64String(t):Y.fromUint8Array(t)}/**
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
 */function Zc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function eu(t){const e=t.mapValue.fields.__previous_value__;return Zc(e)?eu(e):e}function Qn(t){const e=nt(t.mapValue.fields.__local_write_time__.timestampValue);return new te(e.seconds,e.nanos)}/**
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
 */function tn(t){return t==null}function Zr(t){return t===0&&1/t==-1/0}function xg(t){return typeof t=="number"&&Number.isInteger(t)&&!Zr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(P.fromString(e))}static fromName(e){return new I(P.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&P.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return P.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new P(e.slice()))}}/**
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
 */function Rt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zc(t)?4:10:T()}function xe(t,e){if(t===e)return!0;const n=Rt(t);if(n!==Rt(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qn(t).isEqual(Qn(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=nt(r.timestampValue),o=nt(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return en(r.bytesValue).isEqual(en(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return G(r.geoPointValue.latitude)===G(s.geoPointValue.latitude)&&G(r.geoPointValue.longitude)===G(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return G(r.integerValue)===G(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=G(r.doubleValue),o=G(s.doubleValue);return i===o?Zr(i)===Zr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Jt(t.arrayValue.values||[],e.arrayValue.values||[],xe);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Xc(i)!==Xc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!xe(i[a],o[a])))return!1;return!0}(t,e);default:return T()}}function Yn(t,e){return(t.values||[]).find(n=>xe(n,e))!==void 0}function nn(t,e){if(t===e)return 0;const n=Rt(t),r=Rt(e);if(n!==r)return R(n,r);switch(n){case 0:return 0;case 1:return R(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=G(s.integerValue||s.doubleValue),a=G(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return tu(t.timestampValue,e.timestampValue);case 4:return tu(Qn(t),Qn(e));case 5:return R(t.stringValue,e.stringValue);case 6:return function(s,i){const o=en(s),a=en(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=R(o[c],a[c]);if(u!==0)return u}return R(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=R(G(s.latitude),G(i.latitude));return o!==0?o:R(G(s.longitude),G(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=nn(o[c],a[c]);if(u)return u}return R(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=R(a[l],u[l]);if(h!==0)return h;const d=nn(o[a[l]],c[u[l]]);if(d!==0)return d}return R(a.length,u.length)}(t.mapValue,e.mapValue);default:throw T()}}function tu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return R(t,e);const n=nt(t),r=nt(e),s=R(n.seconds,r.seconds);return s!==0?s:R(n.nanos,r.nanos)}function Yi(t){return Xi(t)}function Xi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=nt(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?en(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,I.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Xi(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Xi(r.fields[a])}`;return i+"}"}(t.mapValue):T();var e,n}function nu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ji(t){return!!t&&"integerValue"in t}function Zi(t){return!!t&&"arrayValue"in t}function ru(t){return!!t&&"nullValue"in t}function su(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function es(t){return!!t&&"mapValue"in t}function Xn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ct(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xn(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xn(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class de{constructor(e){this.value=e}static empty(){return new de({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!es(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xn(n)}setAll(e){let n=oe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Xn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());es(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];es(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ct(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new de(Xn(this.value))}}function iu(t){const e=[];return Ct(t.fields,(n,r)=>{const s=new oe([n]);if(es(r)){const i=iu(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Zt(e)}/**
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
 */class ${constructor(e,n,r,s,i){this.key=e,this.documentType=n,this.version=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new $(e,0,C.min(),de.empty(),0)}static newFoundDocument(e,n,r){return new $(e,1,n,r,0)}static newNoDocument(e,n){return new $(e,2,n,de.empty(),0)}static newUnknownDocument(e,n){return new $(e,3,n,de.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=de.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=de.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lg{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.R=null}}function ou(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Lg(t,e,n,r,s,i,o)}function Jn(t){const e=S(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ug(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),tn(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=rs(e.startAt)),e.endAt&&(n+="|ub:",n+=rs(e.endAt)),e.R=n}return e.R}function Mg(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Yi(r.value)}`;var r}).join(", ")}]`),tn(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+rs(t.startAt)),t.endAt&&(e+=", endAt: "+rs(t.endAt)),`Target(${e})`}function ts(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Hg(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!xe(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uu(t.startAt,e.startAt)&&uu(t.endAt,e.endAt)}function ns(t){return I.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class fe extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,r):new Fg(e,n,r):n==="array-contains"?new qg(e,r):n==="in"?new $g(e,r):n==="not-in"?new jg(e,r):n==="array-contains-any"?new Kg(e,r):new fe(e,n,r)}static P(e,n,r){return n==="in"?new Vg(e,r):new Bg(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(nn(n,this.value)):n!==null&&Rt(this.value)===Rt(n)&&this.v(nn(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Ug(t){return t.field.canonicalString()+t.op.toString()+Yi(t.value)}class Fg extends fe{constructor(e,n,r){super(e,n,r),this.key=I.fromName(r.referenceValue)}matches(e){const n=I.comparator(e.key,this.key);return this.v(n)}}class Vg extends fe{constructor(e,n){super(e,"in",n),this.keys=au("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Bg extends fe{constructor(e,n){super(e,"not-in",n),this.keys=au("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function au(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>I.fromName(r.referenceValue))}class qg extends fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zi(n)&&Yn(n.arrayValue,this.value)}}class $g extends fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yn(this.value.arrayValue,n)}}class jg extends fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yn(this.value.arrayValue,n)}}class Kg extends fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Yn(this.value.arrayValue,r))}}class eo{constructor(e,n){this.position=e,this.before=n}}function rs(t){return`${t.before?"b":"a"}:${t.position.map(e=>Yi(e)).join(",")}`}class rn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Hg(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function cu(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),n.key):r=nn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function uu(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xe(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class sn{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.D=null,this.startAt,this.endAt}}function zg(t,e,n,r,s,i,o,a){return new sn(t,e,n,r,s,i,o,a)}function ss(t){return new sn(t)}function is(t){return!tn(t.limit)&&t.limitType==="F"}function os(t){return!tn(t.limit)&&t.limitType==="L"}function to(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function no(t){for(const e of t.filters)if(e.V())return e.field;return null}function lu(t){return t.collectionGroup!==null}function Zn(t){const e=S(t);if(e.S===null){e.S=[];const n=no(e),r=to(e);if(n!==null&&r===null)n.isKeyField()||e.S.push(new rn(n)),e.S.push(new rn(oe.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.S.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new rn(oe.keyField(),i))}}}return e.S}function He(t){const e=S(t);if(!e.D)if(e.limitType==="F")e.D=ou(e.path,e.collectionGroup,Zn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Zn(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new rn(i.field,o))}const r=e.endAt?new eo(e.endAt.position,!e.endAt.before):null,s=e.startAt?new eo(e.startAt.position,!e.startAt.before):null;e.D=ou(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.D}function hu(t,e,n){return new sn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function as(t,e){return ts(He(t),He(e))&&t.limitType===e.limitType}function du(t){return`${Jn(He(t))}|lt:${t.limitType}`}function ro(t){return`Query(target=${Mg(He(t))}; limitType=${t.limitType})`}function er(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):I.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!cu(n.startAt,Zn(n),r)||n.endAt&&cu(n.endAt,Zn(n),r))}(t,e)}function fu(t){return(e,n)=>{let r=!1;for(const s of Zn(t)){const i=Gg(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Gg(t,e,n){const r=t.field.isKeyField()?I.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?nn(a,c):T()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
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
 */function pu(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zr(e)?"-0":e}}function gu(t){return{integerValue:""+t}}function Wg(t,e){return xg(e)?gu(e):pu(t,e)}/**
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
 */class cs{constructor(){this._=void 0}}function Qg(t,e,n){return t instanceof on?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof an?yu(t,e):t instanceof cn?wu(t,e):function(r,s){const i=mu(r,s),o=vu(i)+vu(r.N);return Ji(i)&&Ji(r.N)?gu(o):pu(r.k,o)}(t,e)}function Yg(t,e,n){return t instanceof an?yu(t,e):t instanceof cn?wu(t,e):n}function mu(t,e){return t instanceof tr?Ji(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class on extends cs{}class an extends cs{constructor(e){super(),this.elements=e}}function yu(t,e){const n=Iu(e);for(const r of t.elements)n.some(s=>xe(s,r))||n.push(r);return{arrayValue:{values:n}}}class cn extends cs{constructor(e){super(),this.elements=e}}function wu(t,e){let n=Iu(e);for(const r of t.elements)n=n.filter(s=>!xe(s,r));return{arrayValue:{values:n}}}class tr extends cs{constructor(e,n){super(),this.k=e,this.N=n}}function vu(t){return G(t.integerValue||t.doubleValue)}function Iu(t){return Zi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Tu{constructor(e,n){this.field=e,this.transform=n}}function Xg(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof an&&r instanceof an||n instanceof cn&&r instanceof cn?Jt(n.elements,r.elements,xe):n instanceof tr&&r instanceof tr?xe(n.N,r.N):n instanceof on&&r instanceof on}(t.transform,e.transform)}class Jg{constructor(e,n){this.version=e,this.transformResults=n}}class Ae{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ae}static exists(e){return new Ae(void 0,e)}static updateTime(e){return new Ae(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function us(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ls{}function Zg(t,e,n){t instanceof nr?function(r,s,i){const o=r.value.clone(),a=Su(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof rt?function(r,s,i){if(!us(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Su(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(_u(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function so(t,e,n){t instanceof nr?function(r,s,i){if(!us(r.precondition,s))return;const o=r.value.clone(),a=ku(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(bu(s),o).setHasLocalMutations()}(t,e,n):t instanceof rt?function(r,s,i){if(!us(r.precondition,s))return;const o=ku(r.fieldTransforms,i,s),a=s.data;a.setAll(_u(r)),a.setAll(o),s.convertToFoundDocument(bu(s),a).setHasLocalMutations()}(t,e,n):function(r,s){us(r.precondition,s)&&s.convertToNoDocument(C.min())}(t,e)}function em(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=mu(r.transform,s||null);i!=null&&(n==null&&(n=de.empty()),n.set(r.field,i))}return n||null}function Eu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Jt(n,r,(s,i)=>Xg(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function bu(t){return t.isFoundDocument()?t.version:C.min()}class nr extends ls{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class rt extends ls{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function _u(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Su(t,e,n){const r=new Map;k(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Yg(o,a,n[s]))}return r}function ku(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Qg(i,o,e))}return r}class io extends ls{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Au extends ls{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class tm{constructor(e){this.count=e}}/**
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
 */var W,N;function nm(t){switch(t){default:return T();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Cu(t){if(t===void 0)return me("GRPC error has no .code"),f.UNKNOWN;switch(t){case W.OK:return f.OK;case W.CANCELLED:return f.CANCELLED;case W.UNKNOWN:return f.UNKNOWN;case W.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case W.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case W.INTERNAL:return f.INTERNAL;case W.UNAVAILABLE:return f.UNAVAILABLE;case W.UNAUTHENTICATED:return f.UNAUTHENTICATED;case W.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case W.NOT_FOUND:return f.NOT_FOUND;case W.ALREADY_EXISTS:return f.ALREADY_EXISTS;case W.PERMISSION_DENIED:return f.PERMISSION_DENIED;case W.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case W.ABORTED:return f.ABORTED;case W.OUT_OF_RANGE:return f.OUT_OF_RANGE;case W.UNIMPLEMENTED:return f.UNIMPLEMENTED;case W.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(N=W||(W={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ne{constructor(e,n){this.comparator=e,this.root=n||re.EMPTY}insert(e,n){return new ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,re.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,re.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hs(this.root,e,this.comparator,!1)}getReverseIterator(){return new hs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hs(this.root,e,this.comparator,!0)}}class hs{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class re{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:re.RED,this.left=s!=null?s:re.EMPTY,this.right=i!=null?i:re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new re(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return re.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}re.EMPTY=null,re.RED=!0,re.BLACK=!1;re.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(t,e,n,r,s){return this}insert(t,e,n){return new re(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class V{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ru(this.data.getIterator())}getIteratorFrom(e){return new Ru(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof V)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new V(this.comparator);return n.data=e,n}}class Ru{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const rm=new ne(I.comparator);function Le(){return rm}const sm=new ne(I.comparator);function oo(){return sm}const im=new ne(I.comparator);function om(){return im}const am=new V(I.comparator);function x(...t){let e=am;for(const n of t)e=e.add(n);return e}const cm=new V(R);function Nu(){return cm}/**
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
 */class ds{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,rr.createSynthesizedTargetChangeForCurrentChange(e,n)),new ds(C.min(),r,Nu(),Le(),x())}}class rr{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new rr(Y.EMPTY_BYTE_STRING,n,x(),x(),x())}}/**
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
 */class fs{constructor(e,n,r,s){this.$=e,this.removedTargetIds=n,this.key=r,this.O=s}}class Du{constructor(e,n){this.targetId=e,this.M=n}}class Ou{constructor(e,n,r=Y.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Pu{constructor(){this.F=0,this.L=Lu(),this.B=Y.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=x(),n=x(),r=x();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:T()}}),new rr(this.B,this.U,e,n,r)}H(){this.q=!1,this.L=Lu()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class um{constructor(e){this.et=e,this.nt=new Map,this.st=Le(),this.it=xu(),this.rt=new V(R)}ot(e){for(const n of e.$)e.O&&e.O.isFoundDocument()?this.ct(n,e.O):this.at(n,e.key,e.O);for(const n of e.removedTargetIds)this.at(n,e.key,e.O)}ut(e){this.forEachTarget(e,n=>{const r=this.ht(n);switch(e.state){case 0:this.lt(n)&&r.W(e.resumeToken);break;case 1:r.Z(),r.K||r.H(),r.W(e.resumeToken);break;case 2:r.Z(),r.K||this.removeTarget(n);break;case 3:this.lt(n)&&(r.tt(),r.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),r.W(e.resumeToken));break;default:T()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((r,s)=>{this.lt(s)&&n(s)})}dt(e){const n=e.targetId,r=e.M.count,s=this.wt(n);if(s){const i=s.target;if(ns(i))if(r===0){const o=new I(i.path);this.at(n,o,$.newNoDocument(o,C.min()))}else k(r===1);else this._t(n)!==r&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&ns(a.target)){const c=new I(a.target.path);this.st.get(c)!==null||this.yt(o,c)||this.at(o,c,$.newNoDocument(c,e))}i.j&&(n.set(o,i.G()),i.H())}});let r=x();this.it.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))});const s=new ds(e,n,this.rt,this.st,r);return this.st=Le(),this.it=xu(),this.rt=new V(R),s}ct(e,n){if(!this.lt(e))return;const r=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,r),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}at(e,n,r){if(!this.lt(e))return;const s=this.ht(e);this.yt(e,n)?s.J(n,1):s.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),r&&(this.st=this.st.insert(n,r))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new Pu,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new V(R),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||y("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new Pu),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function xu(){return new ne(I.comparator)}function Lu(){return new ne(I.comparator)}/**
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
 */const lm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class dm{constructor(e,n){this.databaseId=e,this.C=n}}function sr(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mu(t,e){return t.C?e.toBase64():e.toUint8Array()}function fm(t,e){return sr(t,e.toTimestamp())}function be(t){return k(!!t),C.fromTimestamp(function(e){const n=nt(e);return new te(n.seconds,n.nanos)}(t))}function ao(t,e){return function(n){return new P(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Uu(t){const e=P.fromString(t);return k(Wu(e)),e}function ps(t,e){return ao(t.databaseId,e.path)}function Nt(t,e){const n=Uu(e);if(n.get(1)!==t.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new I(Vu(n))}function co(t,e){return ao(t.databaseId,e)}function Fu(t){const e=Uu(t);return e.length===4?P.emptyPath():Vu(e)}function uo(t){return new P(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vu(t){return k(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bu(t,e,n){return{name:ps(t,e),fields:n.value.mapValue.fields}}function pm(t,e,n){const r=Nt(t,e.name),s=be(e.updateTime),i=new de({mapValue:{fields:e.fields}}),o=$.newFoundDocument(r,s,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function gm(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.C?(k(u===void 0||typeof u=="string"),Y.fromBase64String(u||"")):(k(u===void 0||u instanceof Uint8Array),Y.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Cu(c.code);return new w(u,c.message||"")}(o);n=new Ou(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nt(t,r.document.name),i=be(r.document.updateTime),o=new de({mapValue:{fields:r.document.fields}}),a=$.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new fs(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Nt(t,r.document),i=r.readTime?be(r.readTime):C.min(),o=$.newNoDocument(s,i),a=r.removedTargetIds||[];n=new fs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Nt(t,r.document),i=r.removedTargetIds||[];n=new fs([],i,s,null)}else{if(!("filter"in e))return T();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new tm(s),o=r.targetId;n=new Du(o,i)}}return n}function lo(t,e){let n;if(e instanceof nr)n={update:Bu(t,e.key,e.value)};else if(e instanceof io)n={delete:ps(t,e.key)};else if(e instanceof rt)n={update:Bu(t,e.key,e.data),updateMask:Em(e.fieldMask)};else{if(!(e instanceof Au))return T();n={verify:ps(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof on)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof an)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof cn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof tr)return{fieldPath:i.field.canonicalString(),increment:o.N};throw T()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:fm(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:T()}(t,e.precondition)),n}function qu(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ae.updateTime(be(s.updateTime)):s.exists!==void 0?Ae.exists(s.exists):Ae.none()}(e.currentDocument):Ae.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)k(o.setToServerValue==="REQUEST_TIME"),a=new on;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new an(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new cn(u)}else"increment"in o?a=new tr(i,o.increment):T();const c=oe.fromServerFormat(o.fieldPath);return new Tu(c,a)}(t,s)):[];if(e.update){e.update.name;const s=Nt(t,e.update.name),i=new de({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Zt(c.map(u=>oe.fromServerFormat(u)))}(e.updateMask);return new rt(s,i,o,n,r)}return new nr(s,i,n,r)}if(e.delete){const s=Nt(t,e.delete);return new io(s,n)}if(e.verify){const s=Nt(t,e.verify);return new Au(s,n)}return T()}function mm(t,e){return t&&t.length>0?(k(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?be(r.updateTime):be(s);return i.isEqual(C.min())&&(i=be(s)),new Jg(i,r.transformResults||[])}(n,e))):[]}function $u(t,e){return{documents:[co(t,e.path)]}}function ju(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=co(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=co(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length===0)return;const c=a.map(u=>function(l){if(l.op==="=="){if(su(l.value))return{unaryFilter:{field:un(l.field),op:"IS_NAN"}};if(ru(l.value))return{unaryFilter:{field:un(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(su(l.value))return{unaryFilter:{field:un(l.field),op:"IS_NOT_NAN"}};if(ru(l.value))return{unaryFilter:{field:un(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:un(l.field),op:vm(l.op),value:l.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(c=>function(u){return{field:un(u.field),direction:wm(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.C||tn(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=zu(e.startAt)),e.endAt&&(n.structuredQuery.endAt=zu(e.endAt)),n}function Ku(t){let e=Fu(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){k(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Hu(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new rn(ln(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,tn(h)?null:h}(n.limit));let c=null;n.startAt&&(c=Gu(n.startAt));let u=null;return n.endAt&&(u=Gu(n.endAt)),zg(e,s,o,i,a,"F",c,u)}function ym(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Hu(t){return t?t.unaryFilter!==void 0?[Tm(t)]:t.fieldFilter!==void 0?[Im(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Hu(e)).reduce((e,n)=>e.concat(n)):T():[]}function zu(t){return{before:t.before,values:t.position}}function Gu(t){const e=!!t.before,n=t.values||[];return new eo(n,e)}function wm(t){return lm[t]}function vm(t){return hm[t]}function un(t){return{fieldPath:t.canonicalString()}}function ln(t){return oe.fromServerFormat(t.fieldPath)}function Im(t){return fe.create(ln(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(t.fieldFilter.op),t.fieldFilter.value)}function Tm(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ln(t.unaryFilter.field);return fe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ln(t.unaryFilter.field);return fe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ln(t.unaryFilter.field);return fe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ln(t.unaryFilter.field);return fe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return T()}}function Em(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Wu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function Ne(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Qu(e)),e=bm(t.get(n),e);return Qu(e)}function bm(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Qu(t){return t+""}function ze(t){const e=t.length;if(k(e>=2),e===2)return k(t.charAt(0)===""&&t.charAt(1)===""),P.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&T(),t.charAt(o+1)){case"":const a=t.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=t.substring(i,o),s+="\0";break;case"":s+=t.substring(i,o+1);break;default:T()}i=o+2}return new P(r)}/**
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
 */class _m{constructor(e,n){this.seconds=e,this.nanoseconds=n}}class _e{constructor(e,n,r){this.ownerId=e,this.allowTabSynchronization=n,this.leaseTimestampMs=r}}_e.store="owner",_e.key="owner";class st{constructor(e,n,r){this.userId=e,this.lastAcknowledgedBatchId=n,this.lastStreamToken=r}}st.store="mutationQueues",st.keyPath="userId";class L{constructor(e,n,r,s,i){this.userId=e,this.batchId=n,this.localWriteTimeMs=r,this.baseMutations=s,this.mutations=i}}L.store="mutations",L.keyPath="batchId",L.userMutationsIndex="userMutationsIndex",L.userMutationsKeyPath=["userId","batchId"];class ae{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,n){return[e,Ne(n)]}static key(e,n,r){return[e,Ne(n),r]}}ae.store="documentMutations",ae.PLACEHOLDER=new ae;class Sm{constructor(e,n){this.path=e,this.readTime=n}}class km{constructor(e,n){this.path=e,this.version=n}}class j{constructor(e,n,r,s,i,o){this.unknownDocument=e,this.noDocument=n,this.document=r,this.hasCommittedMutations=s,this.readTime=i,this.parentPath=o}}j.store="remoteDocuments",j.readTimeIndex="readTimeIndex",j.readTimeIndexPath="readTime",j.collectionReadTimeIndex="collectionReadTimeIndex",j.collectionReadTimeIndexPath=["parentPath","readTime"];class Me{constructor(e){this.byteSize=e}}Me.store="remoteDocumentGlobal",Me.key="remoteDocumentGlobalKey";class ye{constructor(e,n,r,s,i,o,a){this.targetId=e,this.canonicalId=n,this.readTime=r,this.resumeToken=s,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=a}}ye.store="targets",ye.keyPath="targetId",ye.queryTargetsIndexName="queryTargetsIndex",ye.queryTargetsKeyPath=["canonicalId","targetId"];class se{constructor(e,n,r){this.targetId=e,this.path=n,this.sequenceNumber=r}}se.store="targetDocuments",se.keyPath=["targetId","path"],se.documentTargetsIndex="documentTargetsIndex",se.documentTargetsKeyPath=["path","targetId"];class Se{constructor(e,n,r,s){this.highestTargetId=e,this.highestListenSequenceNumber=n,this.lastRemoteSnapshotVersion=r,this.targetCount=s}}Se.key="targetGlobalKey",Se.store="targetGlobal";class Dt{constructor(e,n){this.collectionId=e,this.parent=n}}Dt.store="collectionParents",Dt.keyPath=["collectionId","parent"];class Ge{constructor(e,n,r,s){this.clientId=e,this.updateTimeMs=n,this.networkEnabled=r,this.inForeground=s}}Ge.store="clientMetadata",Ge.keyPath="clientId";class hn{constructor(e,n,r){this.bundleId=e,this.createTime=n,this.version=r}}hn.store="bundles",hn.keyPath="bundleId";class dn{constructor(e,n,r){this.name=e,this.readTime=n,this.bundledQuery=r}}dn.store="namedQueries",dn.keyPath="name";const Am=[st.store,L.store,ae.store,j.store,ye.store,_e.store,Se.store,se.store,Ge.store,Me.store,Dt.store,hn.store,dn.store],Yu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new g((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):g.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):g.reject(n)}static resolve(e){return new g((n,r)=>{n(e)})}static reject(e){return new g((n,r)=>{r(e)})}static waitFor(e){return new g((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=g.resolve(!1);for(const r of e)n=n.next(s=>s?g.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}/**
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
 */class gs{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.It=new Pe,this.transaction.oncomplete=()=>{this.It.resolve()},this.transaction.onabort=()=>{n.error?this.It.reject(new ir(e,n.error)):this.It.resolve()},this.transaction.onerror=r=>{const s=ho(r.target.error);this.It.reject(new ir(e,s))}}static open(e,n,r,s){try{return new gs(n,e.transaction(s,r))}catch(i){throw new ir(n,i)}}get At(){return this.It.promise}abort(e){e&&this.It.reject(e),this.aborted||(y("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const n=this.transaction.objectStore(e);return new Rm(n)}}class We{constructor(e,n,r){this.name=e,this.version=n,this.Rt=r,We.bt(B())===12.2&&me("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return y("SimpleDb","Removing database:",e),Pt(window.indexedDB.deleteDatabase(e)).toPromise()}static Pt(){if(!Ca())return!1;if(We.vt())return!0;const e=B(),n=We.bt(e),r=0<n&&n<10,s=We.Vt(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static vt(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.St)==="YES"}static Dt(e,n){return e.store(n)}static bt(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static Vt(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Ct(e){return this.db||(y("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new ir(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new w(f.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new w(f.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ir(e,o))},s.onupgradeneeded=i=>{y("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.Rt.Nt(o,s.transaction,i.oldVersion,this.version).next(()=>{y("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.kt&&(this.db.onversionchange=n=>this.kt(n)),this.db}xt(e){this.kt=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.Ct(e);const a=gs.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).catch(u=>(a.abort(u),g.reject(u))).toPromise();return c.catch(()=>{}),await a.At,c}catch(a){const c=a.name!=="FirebaseError"&&o<3;if(y("SimpleDb","Transaction failed with error:",a.message,"Retrying:",c),this.close(),!c)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Cm{constructor(e){this.$t=e,this.Ot=!1,this.Mt=null}get isDone(){return this.Ot}get Ft(){return this.Mt}set cursor(e){this.$t=e}done(){this.Ot=!0}Lt(e){this.Mt=e}delete(){return Pt(this.$t.delete())}}class ir extends w{constructor(e,n){super(f.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ot(t){return t.name==="IndexedDbTransactionError"}class Rm{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(y("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(y("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Pt(r)}add(e){return y("SimpleDb","ADD",this.store.name,e,e),Pt(this.store.add(e))}get(e){return Pt(this.store.get(e)).next(n=>(n===void 0&&(n=null),y("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return y("SimpleDb","DELETE",this.store.name,e),Pt(this.store.delete(e))}count(){return y("SimpleDb","COUNT",this.store.name),Pt(this.store.count())}Bt(e,n){const r=this.cursor(this.options(e,n)),s=[];return this.Ut(r,(i,o)=>{s.push(o)}).next(()=>s)}qt(e,n){y("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Kt=!1;const s=this.cursor(r);return this.Ut(s,(i,o,a)=>a.delete())}jt(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.Ut(s,n)}Qt(e){const n=this.cursor({});return new g((r,s)=>{n.onerror=i=>{const o=ho(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Ut(e,n){const r=[];return new g((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new Cm(a),u=n(a.primaryKey,a.value,c);if(u instanceof g){const l=u.catch(h=>(c.done(),g.reject(h)));r.push(l)}c.isDone?s():c.Ft===null?a.continue():a.continue(c.Ft)}}).next(()=>g.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Kt?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Pt(t){return new g((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=ho(r.target.error);n(s)}})}let Ju=!1;function ho(t){const e=We.bt(B());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new w("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ju||(Ju=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class Zu extends Xu{constructor(e,n){super(),this.Wt=e,this.currentSequenceNumber=n}}function we(t,e){const n=S(t);return We.Dt(n.Wt,e)}/**
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
 */class fo{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Zg(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&so(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&so(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(C.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),x())}isEqual(e){return this.batchId===e.batchId&&Jt(this.mutations,e.mutations,(n,r)=>Eu(n,r))&&Jt(this.baseMutations,e.baseMutations,(n,r)=>Eu(n,r))}}class po{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){k(e.mutations.length===r.length);let s=om();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new po(e,n,r,s)}}/**
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
 */class it{constructor(e,n,r,s,i=C.min(),o=C.min(),a=Y.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new it(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new it(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new it(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class el{constructor(e){this.Gt=e}}function tl(t,e){if(e.document)return pm(t.Gt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const n=I.fromSegments(e.noDocument.path),r=pn(e.noDocument.readTime),s=$.newNoDocument(n,r);return e.hasCommittedMutations?s.setHasCommittedMutations():s}if(e.unknownDocument){const n=I.fromSegments(e.unknownDocument.path),r=pn(e.unknownDocument.version);return $.newUnknownDocument(n,r)}return T()}function nl(t,e,n){const r=rl(n),s=e.key.path.popLast().toArray();if(e.isFoundDocument()){const i=function(a,c){return{name:ps(a,c.key),fields:c.data.value.mapValue.fields,updateTime:sr(a,c.version.toTimestamp())}}(t.Gt,e),o=e.hasCommittedMutations;return new j(null,null,i,o,r,s)}if(e.isNoDocument()){const i=e.key.path.toArray(),o=fn(e.version),a=e.hasCommittedMutations;return new j(null,new Sm(i,o),null,a,r,s)}if(e.isUnknownDocument()){const i=e.key.path.toArray(),o=fn(e.version);return new j(new km(i,o),null,null,!0,r,s)}return T()}function rl(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Nm(t){const e=new te(t[0],t[1]);return C.fromTimestamp(e)}function fn(t){const e=t.toTimestamp();return new _m(e.seconds,e.nanoseconds)}function pn(t){const e=new te(t.seconds,t.nanoseconds);return C.fromTimestamp(e)}function gn(t,e){const n=(e.baseMutations||[]).map(i=>qu(t.Gt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>qu(t.Gt,i)),s=te.fromMillis(e.localWriteTimeMs);return new fo(e.batchId,s,n,r)}function or(t){const e=pn(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?pn(t.lastLimboFreeSnapshotVersion):C.min();let r;var s;return t.query.documents!==void 0?(k((s=t.query).documents.length===1),r=He(ss(Fu(s.documents[0])))):r=function(i){return He(Ku(i))}(t.query),new it(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Y.fromBase64String(t.resumeToken))}function sl(t,e){const n=fn(e.snapshotVersion),r=fn(e.lastLimboFreeSnapshotVersion);let s;s=ns(e.target)?$u(t.Gt,e.target):ju(t.Gt,e.target);const i=e.resumeToken.toBase64();return new ye(e.targetId,Jn(e.target),n,i,e.sequenceNumber,r,s)}function il(t){const e=Ku({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hu(e,e.limit,"L"):e}/**
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
 */class Dm{getBundleMetadata(e,n){return ol(e).get(n).next(r=>{if(r)return{id:(s=r).bundleId,createTime:pn(s.createTime),version:s.version};var s})}saveBundleMetadata(e,n){return ol(e).put({bundleId:(r=n).id,createTime:fn(be(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return al(e).get(n).next(r=>{if(r)return{name:(s=r).name,query:il(s.bundledQuery),readTime:pn(s.readTime)};var s})}saveNamedQuery(e,n){return al(e).put(function(r){return{name:r.name,readTime:fn(be(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function ol(t){return we(t,hn.store)}function al(t){return we(t,dn.store)}/**
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
 */class Om{constructor(){this.zt=new go}addToCollectionParentIndex(e,n){return this.zt.add(n),g.resolve()}getCollectionParents(e,n){return g.resolve(this.zt.getEntries(n))}}class go{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new V(P.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new V(P.comparator)).toArray()}}/**
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
 */class Pm{constructor(){this.Ht=new go}addToCollectionParentIndex(e,n){if(!this.Ht.has(n)){const r=n.lastSegment(),s=n.popLast();e.addOnCommittedListener(()=>{this.Ht.add(n)});const i={collectionId:r,parent:Ne(s)};return cl(e).put(i)}return g.resolve()}getCollectionParents(e,n){const r=[],s=IDBKeyRange.bound([n,""],[Yc(n),""],!1,!0);return cl(e).Bt(s).next(i=>{for(const o of i){if(o.collectionId!==n)break;r.push(ze(o.parent))}return r})}}function cl(t){return we(t,Dt.store)}/**
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
 */const ul={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ve{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new ve(e,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function ll(t,e,n){const r=t.store(L.store),s=t.store(ae.store),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.jt({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{k(a===1)}));const u=[];for(const l of n.mutations){const h=ae.key(e,l.key.path,n.batchId);i.push(s.delete(h)),u.push(l.key)}return g.waitFor(i).next(()=>u)}function ms(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw T();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */ve.DEFAULT_COLLECTION_PERCENTILE=10,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ve.DEFAULT=new ve(41943040,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ve.DISABLED=new ve(-1,0,0);class mo{constructor(e,n,r,s){this.userId=e,this.k=n,this.Jt=r,this.referenceDelegate=s,this.Yt={}}static Xt(e,n,r,s){k(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new mo(i,n,r,s)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ot(e).jt({index:L.userMutationsIndex,range:r},(s,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,s){const i=mn(e),o=ot(e);return o.add({}).next(a=>{k(typeof a=="number");const c=new fo(a,n,r,s),u=function(d,p,m){const b=m.baseMutations.map(O=>lo(d.Gt,O)),E=m.mutations.map(O=>lo(d.Gt,O));return new L(p,m.batchId,m.localWriteTime.toMillis(),b,E)}(this.k,this.userId,c),l=[];let h=new V((d,p)=>R(d.canonicalString(),p.canonicalString()));for(const d of s){const p=ae.key(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(p,ae.PLACEHOLDER))}return h.forEach(d=>{l.push(this.Jt.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Yt[a]=c.keys()}),g.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return ot(e).get(n).next(r=>r?(k(r.userId===this.userId),gn(this.k,r)):null)}Zt(e,n){return this.Yt[n]?g.resolve(this.Yt[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const s=r.keys();return this.Yt[n]=s,s}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return ot(e).jt({index:L.userMutationsIndex,range:s},(o,a,c)=>{a.userId===this.userId&&(k(a.batchId>=r),i=gn(this.k,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ot(e).jt({index:L.userMutationsIndex,range:n,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ot(e).Bt(L.userMutationsIndex,n).next(r=>r.map(s=>gn(this.k,s)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=ae.prefixForPath(this.userId,n.path),s=IDBKeyRange.lowerBound(r),i=[];return mn(e).jt({range:s},(o,a,c)=>{const[u,l,h]=o,d=ze(l);if(u===this.userId&&n.path.isEqual(d))return ot(e).get(h).next(p=>{if(!p)throw T();k(p.userId===this.userId),i.push(gn(this.k,p))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new V(R);const s=[];return n.forEach(i=>{const o=ae.prefixForPath(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=mn(e).jt({range:a},(u,l,h)=>{const[d,p,m]=u,b=ze(p);d===this.userId&&i.path.isEqual(b)?r=r.add(m):h.done()});s.push(c)}),g.waitFor(s).next(()=>this.te(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1,i=ae.prefixForPath(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new V(R);return mn(e).jt({range:o},(c,u,l)=>{const[h,d,p]=c,m=ze(d);h===this.userId&&r.isPrefixOf(m)?m.length===s&&(a=a.add(p)):l.done()}).next(()=>this.te(e,a))}te(e,n){const r=[],s=[];return n.forEach(i=>{s.push(ot(e).get(i).next(o=>{if(o===null)throw T();k(o.userId===this.userId),r.push(gn(this.k,o))}))}),g.waitFor(s).next(()=>r)}removeMutationBatch(e,n){return ll(e.Wt,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.ee(n.batchId)}),g.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}ee(e){delete this.Yt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return g.resolve();const r=IDBKeyRange.lowerBound(ae.prefixForUser(this.userId)),s=[];return mn(e).jt({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=ze(i[1]);s.push(c)}else a.done()}).next(()=>{k(s.length===0)})})}containsKey(e,n){return hl(e,this.userId,n)}ne(e){return dl(e).get(this.userId).next(n=>n||new st(this.userId,-1,""))}}function hl(t,e,n){const r=ae.prefixForPath(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return mn(t).jt({range:i,Kt:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),u.done()}).next(()=>o)}function ot(t){return we(t,L.store)}function mn(t){return we(t,ae.store)}function dl(t){return we(t,st.store)}/**
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
 */class xt{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new xt(0)}static re(){return new xt(-1)}}/**
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
 */class xm{constructor(e,n){this.referenceDelegate=e,this.k=n}allocateTargetId(e){return this.oe(e).next(n=>{const r=new xt(n.highestTargetId);return n.highestTargetId=r.next(),this.ce(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.oe(e).next(n=>C.fromTimestamp(new te(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.oe(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.oe(e).next(s=>(s.highestListenSequenceNumber=n,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),n>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=n),this.ce(e,s)))}addTargetData(e,n){return this.ae(e,n).next(()=>this.oe(e).next(r=>(r.targetCount+=1,this.ue(n,r),this.ce(e,r))))}updateTargetData(e,n){return this.ae(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>yn(e).delete(n.targetId)).next(()=>this.oe(e)).next(r=>(k(r.targetCount>0),r.targetCount-=1,this.ce(e,r)))}removeTargets(e,n,r){let s=0;const i=[];return yn(e).jt((o,a)=>{const c=or(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>g.waitFor(i)).next(()=>s)}forEachTarget(e,n){return yn(e).jt((r,s)=>{const i=or(s);n(i)})}oe(e){return fl(e).get(Se.key).next(n=>(k(n!==null),n))}ce(e,n){return fl(e).put(Se.key,n)}ae(e,n){return yn(e).put(sl(this.k,n))}ue(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.oe(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Jn(n),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return yn(e).jt({range:s,index:ye.queryTargetsIndexName},(o,a,c)=>{const u=or(a);ts(n,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,n,r){const s=[],i=at(e);return n.forEach(o=>{const a=Ne(o.path);s.push(i.put(new se(r,a))),s.push(this.referenceDelegate.addReference(e,r,o))}),g.waitFor(s)}removeMatchingKeys(e,n,r){const s=at(e);return g.forEach(n,i=>{const o=Ne(i.path);return g.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,n){const r=at(e),s=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),s=at(e);let i=x();return s.jt({range:r,Kt:!0},(o,a,c)=>{const u=ze(o[1]),l=new I(u);i=i.add(l)}).next(()=>i)}containsKey(e,n){const r=Ne(n.path),s=IDBKeyRange.bound([r],[Yc(r)],!1,!0);let i=0;return at(e).jt({index:se.documentTargetsIndex,Kt:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}Et(e,n){return yn(e).get(n).next(r=>r?or(r):null)}}function yn(t){return we(t,ye.store)}function fl(t){return we(t,Se.store)}function at(t){return we(t,se.store)}/**
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
 */async function wn(t){if(t.code!==f.FAILED_PRECONDITION||t.message!==Yu)throw t;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */function pl([t,e],[n,r]){const s=R(t,n);return s===0?R(e,r):s}class Lm{constructor(e){this.he=e,this.buffer=new V(pl),this.le=0}fe(){return++this.le}de(e){const n=[e,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();pl(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Mm{constructor(e,n){this.garbageCollector=e,this.asyncQueue=n,this.we=!1,this._e=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.me(e)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return this._e!==null}me(e){const n=this.we?3e5:6e4;y("LruGarbageCollector",`Garbage collection scheduled in ${n}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",n,async()=>{this._e=null,this.we=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){Ot(r)?y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await wn(r)}await this.me(e)})}}class Um{constructor(e,n){this.ge=e,this.params=n}calculateTargetCount(e,n){return this.ge.ye(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return g.resolve(Re.I);const r=new Lm(n);return this.ge.forEachTarget(e,s=>r.de(s.sequenceNumber)).next(()=>this.ge.pe(e,s=>r.de(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.ge.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.ge.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(y("LruGarbageCollector","Garbage collection skipped; disabled"),g.resolve(ul)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ul):this.Te(e,n))}getCacheSize(e){return this.ge.getCacheSize(e)}Te(e,n){let r,s,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Wi()<=D.DEBUG&&y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),g.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}/**
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
 */class Fm{constructor(e,n){this.db=e,this.garbageCollector=function(r,s){return new Um(r,s)}(this,n)}ye(e){const n=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Ee(e){let n=0;return this.pe(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}pe(e,n){return this.Ie(e,(r,s)=>n(s))}addReference(e,n,r){return ys(e,r)}removeReference(e,n,r){return ys(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return ys(e,n)}Ae(e,n){return function(r,s){let i=!1;return dl(r).Qt(o=>hl(r,o,s).next(a=>(a&&(i=!0),g.resolve(!a)))).next(()=>i)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Ie(e,(o,a)=>{if(a<=n){const c=this.Ae(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o),at(e).delete([0,Ne(o.path)])))});s.push(c)}}).next(()=>g.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return ys(e,n)}Ie(e,n){const r=at(e);let s,i=Re.I;return r.jt({index:se.documentTargetsIndex},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==Re.I&&n(new I(ze(s)),i),i=u,s=c):i=Re.I}).next(()=>{i!==Re.I&&n(new I(ze(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ys(t,e){return at(t).put(function(n,r){return new se(0,Ne(n.path),r)}(e,t.currentSequenceNumber))}/**
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
 */class vn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s!==void 0){for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),!0;return!1}forEach(e){Ct(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Jc(this.inner)}}/**
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
 */class gl{constructor(){this.changes=new vn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:C.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:$.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?g.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Vm{constructor(e,n){this.k=e,this.Jt=n}addEntry(e,n,r){return Lt(e).put(ws(n),r)}removeEntry(e,n){const r=Lt(e),s=ws(n);return r.delete(s)}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Re(e,r)))}getEntry(e,n){return Lt(e).get(ws(n)).next(r=>this.be(n,r))}Pe(e,n){return Lt(e).get(ws(n)).next(r=>({document:this.be(n,r),size:ms(r)}))}getEntries(e,n){let r=Le();return this.ve(e,n,(s,i)=>{const o=this.be(s,i);r=r.insert(s,o)}).next(()=>r)}Ve(e,n){let r=Le(),s=new ne(I.comparator);return this.ve(e,n,(i,o)=>{const a=this.be(i,o);r=r.insert(i,a),s=s.insert(i,ms(o))}).next(()=>({documents:r,Se:s}))}ve(e,n,r){if(n.isEmpty())return g.resolve();const s=IDBKeyRange.bound(n.first().path.toArray(),n.last().path.toArray()),i=n.getIterator();let o=i.getNext();return Lt(e).jt({range:s},(a,c,u)=>{const l=I.fromSegments(a);for(;o&&I.comparator(o,l)<0;)r(o,null),o=i.getNext();o&&o.isEqual(l)&&(r(o,c),o=i.hasNext()?i.getNext():null),o?u.Lt(o.path.toArray()):u.done()}).next(()=>{for(;o;)r(o,null),o=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(e,n,r){let s=Le();const i=n.path.length+1,o={};if(r.isEqual(C.min())){const a=n.path.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=n.path.toArray(),c=rl(r);o.range=IDBKeyRange.lowerBound([a,c],!0),o.index=j.collectionReadTimeIndex}return Lt(e).jt(o,(a,c,u)=>{if(a.length!==i)return;const l=tl(this.k,c);n.path.isPrefixOf(l.key.path)?er(n,l)&&(s=s.insert(l.key,l)):u.done()}).next(()=>s)}newChangeBuffer(e){return new Bm(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return ml(e).get(Me.key).next(n=>(k(!!n),n))}Re(e,n){return ml(e).put(Me.key,n)}be(e,n){if(n){const r=tl(this.k,n);if(!(r.isNoDocument()&&r.version.isEqual(C.min())))return r}return $.newInvalidDocument(e)}}class Bm extends gl{constructor(e,n){super(),this.De=e,this.trackRemovals=n,this.Ce=new vn(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const n=[];let r=0,s=new V((i,o)=>R(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Ce.get(i);if(o.document.isValidDocument()){const c=nl(this.De.k,o.document,this.getReadTime(i));s=s.add(i.path.popLast()),r+=ms(c)-a,n.push(this.De.addEntry(e,i,c))}else if(r-=a,this.trackRemovals){const c=nl(this.De.k,$.newNoDocument(i,C.min()),this.getReadTime(i));n.push(this.De.addEntry(e,i,c))}else n.push(this.De.removeEntry(e,i))}),s.forEach(i=>{n.push(this.De.Jt.addToCollectionParentIndex(e,i))}),n.push(this.De.updateMetadata(e,r)),g.waitFor(n)}getFromCache(e,n){return this.De.Pe(e,n).next(r=>(this.Ce.set(n,r.size),r.document))}getAllFromCache(e,n){return this.De.Ve(e,n).next(({documents:r,Se:s})=>(s.forEach((i,o)=>{this.Ce.set(i,o)}),r))}}function ml(t){return we(t,Me.store)}function Lt(t){return we(t,j.store)}function ws(t){return t.path.toArray()}/**
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
 */class qm{constructor(e){this.k=e}Nt(e,n,r,s){k(r<s&&r>=0&&s<=11);const i=new gs("createOrUpgrade",n);r<1&&s>=1&&(function(a){a.createObjectStore(_e.store)}(e),function(a){a.createObjectStore(st.store,{keyPath:st.keyPath}),a.createObjectStore(L.store,{keyPath:L.keyPath,autoIncrement:!0}).createIndex(L.userMutationsIndex,L.userMutationsKeyPath,{unique:!0}),a.createObjectStore(ae.store)}(e),yl(e),function(a){a.createObjectStore(j.store)}(e));let o=g.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore(se.store),a.deleteObjectStore(ye.store),a.deleteObjectStore(Se.store)}(e),yl(e)),o=o.next(()=>function(a){const c=a.store(Se.store),u=new Se(0,0,C.min().toTimestamp(),0);return c.put(Se.key,u)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store(L.store).Bt().next(u=>{a.deleteObjectStore(L.store),a.createObjectStore(L.store,{keyPath:L.keyPath,autoIncrement:!0}).createIndex(L.userMutationsIndex,L.userMutationsKeyPath,{unique:!0});const l=c.store(L.store),h=u.map(d=>l.put(d));return g.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore(Ge.store,{keyPath:Ge.keyPath})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Ne(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore(Me.store)}(e),this.ke(i)))),r<7&&s>=7&&(o=o.next(()=>this.xe(i))),r<8&&s>=8&&(o=o.next(()=>this.$e(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const c=a.objectStore(j.store);c.createIndex(j.readTimeIndex,j.readTimeIndexPath,{unique:!1}),c.createIndex(j.collectionReadTimeIndex,j.collectionReadTimeIndexPath,{unique:!1})}(n)})),r<10&&s>=10&&(o=o.next(()=>this.Oe(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(hn.store,{keyPath:hn.keyPath})})(e),function(a){a.createObjectStore(dn.store,{keyPath:dn.keyPath})}(e)})),o}ke(e){let n=0;return e.store(j.store).jt((r,s)=>{n+=ms(s)}).next(()=>{const r=new Me(n);return e.store(Me.store).put(Me.key,r)})}Ne(e){const n=e.store(st.store),r=e.store(L.store);return n.Bt().next(s=>g.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.Bt(L.userMutationsIndex,o).next(a=>g.forEach(a,c=>{k(c.userId===i.userId);const u=gn(this.k,c);return ll(e,i.userId,u).next(()=>{})}))}))}xe(e){const n=e.store(se.store),r=e.store(j.store);return e.store(Se.store).get(Se.key).next(s=>{const i=[];return r.jt((o,a)=>{const c=new P(o),u=function(l){return[0,Ne(l)]}(c);i.push(n.get(u).next(l=>l?g.resolve():(h=>n.put(new se(0,Ne(h),s.highestListenSequenceNumber)))(c)))}).next(()=>g.waitFor(i))})}$e(e,n){e.createObjectStore(Dt.store,{keyPath:Dt.keyPath});const r=n.store(Dt.store),s=new go,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Ne(c)})}};return n.store(j.store).jt({Kt:!0},(o,a)=>{const c=new P(o);return i(c.popLast())}).next(()=>n.store(ae.store).jt({Kt:!0},([o,a,c],u)=>{const l=ze(a);return i(l.popLast())}))}Oe(e){const n=e.store(ye.store);return n.jt((r,s)=>{const i=or(s),o=sl(this.k,i);return n.put(o)})}}function yl(t){t.createObjectStore(se.store,{keyPath:se.keyPath}).createIndex(se.documentTargetsIndex,se.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(ye.store,{keyPath:ye.keyPath}).createIndex(ye.queryTargetsIndexName,ye.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Se.store)}const yo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class wo{constructor(e,n,r,s,i,o,a,c,u,l){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Me=i,this.window=o,this.document=a,this.Fe=u,this.Le=l,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=h=>Promise.resolve(),!wo.Pt())throw new w(f.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Fm(this,s),this.Ge=n+"main",this.k=new el(c),this.ze=new We(this.Ge,11,new qm(this.k)),this.He=new xm(this.referenceDelegate,this.k),this.Jt=new Pm,this.Je=function(h,d){return new Vm(h,d)}(this.k,this.Jt),this.Ye=new Dm,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,l===!1&&me("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new w(f.FAILED_PRECONDITION,yo);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.He.getHighestSequenceNumber(e))}).then(e=>{this.Be=new Re(e,this.Fe)}).then(()=>{this.Ue=!0}).catch(e=>(this.ze&&this.ze.close(),Promise.reject(e)))}sn(e){return this.We=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ze.xt(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Me.enqueueAndForget(async()=>{this.started&&await this.Ze()}))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>vs(e).put(new Ge(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.rn(e).next(n=>{n||(this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)))})}).next(()=>this.on(e)).next(n=>this.isPrimary&&!n?this.cn(e).next(()=>!1):!!n&&this.an(e).next(()=>!0))).catch(e=>{if(Ot(e))return y("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return y("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Me.enqueueRetryable(()=>this.We(e)),this.isPrimary=e})}rn(e){return ar(e).get(_e.key).next(n=>g.resolve(this.un(n)))}hn(e){return vs(e).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=we(n,Ge.store);return r.Bt().next(s=>{const i=this.dn(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return g.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Xe)for(const n of e)this.Xe.removeItem(this.wn(n.clientId))}}nn(){this.je=this.Me.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ze().then(()=>this.ln()).then(()=>this.nn()))}un(e){return!!e&&e.ownerId===this.clientId}on(e){return this.Le?g.resolve(!0):ar(e).get(_e.key).next(n=>{if(n!==null&&this.fn(n.leaseTimestampMs,5e3)&&!this._n(n.ownerId)){if(this.un(n)&&this.networkEnabled)return!0;if(!this.un(n)){if(!n.allowTabSynchronization)throw new w(f.FAILED_PRECONDITION,yo);return!1}}return!(!this.networkEnabled||!this.inForeground)||vs(e).Bt().next(r=>this.dn(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&y("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[_e.store,Ge.store],e=>{const n=new Zu(e,Re.I);return this.cn(n).next(()=>this.hn(n))}),this.ze.close(),this.pn()}dn(e,n){return e.filter(r=>this.fn(r.updateTimeMs,n)&&!this._n(r.clientId))}Tn(){return this.runTransaction("getActiveClients","readonly",e=>vs(e).Bt().next(n=>this.dn(n,18e5).map(r=>r.clientId)))}get started(){return this.Ue}getMutationQueue(e){return mo.Xt(e,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(e,n,r){y("IndexedDbPersistence","Starting transaction:",e);const s=n==="readonly"?"readonly":"readwrite";let i;return this.ze.runTransaction(e,s,Am,o=>(i=new Zu(o,this.Be?this.Be.next():Re.I),n==="readwrite-primary"?this.rn(i).next(a=>!!a||this.on(i)).next(a=>{if(!a)throw me(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)),new w(f.FAILED_PRECONDITION,Yu);return r(i)}).next(a=>this.an(i).next(()=>a)):this.En(i).next(()=>r(i)))).then(o=>(i.raiseOnCommittedEvent(),o))}En(e){return ar(e).get(_e.key).next(n=>{if(n!==null&&this.fn(n.leaseTimestampMs,5e3)&&!this._n(n.ownerId)&&!this.un(n)&&!(this.Le||this.allowTabSynchronization&&n.allowTabSynchronization))throw new w(f.FAILED_PRECONDITION,yo)})}an(e){const n=new _e(this.clientId,this.allowTabSynchronization,Date.now());return ar(e).put(_e.key,n)}static Pt(){return We.Pt()}cn(e){const n=ar(e);return n.get(_e.key).next(r=>this.un(r)?(y("IndexedDbPersistence","Releasing primary lease."),n.delete(_e.key)):g.resolve())}fn(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(me(`Detected an update time that is in the future: ${e} > ${r}`),!1))}tn(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ke=()=>{this.Me.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ze()))},this.document.addEventListener("visibilitychange",this.Ke),this.inForeground=this.document.visibilityState==="visible")}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.qe=()=>{this.mn(),Tf()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Me.enterRestrictedMode(!0),this.Me.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(e){var n;try{const r=((n=this.Xe)===null||n===void 0?void 0:n.getItem(this.wn(e)))!==null;return y("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return me("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(e){me("Failed to set zombie client id.",e)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch{}}wn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ar(t){return we(t,_e.store)}function vs(t){return we(t,Ge.store)}function $m(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class wl{constructor(e,n,r){this.Je=e,this.An=n,this.Jt=r}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.bn(e,n,r))}bn(e,n,r){return this.Je.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}Pn(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}vn(e,n){return this.Je.getEntries(e,n).next(r=>this.Vn(e,r).next(()=>r))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.Pn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return I.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Sn(e,n.path):lu(n)?this.Dn(e,n,r):this.Cn(e,n,r)}Sn(e,n){return this.Rn(e,new I(n)).next(r=>{let s=oo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Dn(e,n,r){const s=n.collectionGroup;let i=oo();return this.Jt.getCollectionParents(e,s).next(o=>g.forEach(o,a=>{const c=function(u,l){return new sn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.Cn(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}Cn(e,n,r){let s,i;return this.Je.getDocumentsMatchingQuery(e,n,r).next(o=>(s=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Nn(e,i,s).next(a=>{s=a;for(const c of i)for(const u of c.mutations){const l=u.key;let h=s.get(l);h==null&&(h=$.newInvalidDocument(l),s=s.insert(l,h)),so(u,h,c.localWriteTime),h.isFoundDocument()||(s=s.remove(l))}}))).next(()=>(s.forEach((o,a)=>{er(n,a)||(s=s.remove(o))}),s))}Nn(e,n,r){let s=x();for(const o of n)for(const a of o.mutations)a instanceof rt&&r.get(a.key)===null&&(s=s.add(a.key));let i=r;return this.Je.getEntries(e,s).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
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
 */class vo{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.kn=r,this.xn=s}static $n(e,n){let r=x(),s=x();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vo(e,n.fromCache,r,s)}}/**
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
 */class vl{On(e){this.Mn=e}getDocumentsMatchingQuery(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(C.min())?this.Fn(e,n):this.Mn.vn(e,s).next(i=>{const o=this.Ln(n,i);return(is(n)||os(n))&&this.Bn(n.limitType,o,s,r)?this.Fn(e,n):(Wi()<=D.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ro(n)),this.Mn.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Ln(e,n){let r=new V(fu(e));return n.forEach((s,i)=>{er(e,i)&&(r=r.add(i))}),r}Bn(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(e,n){return Wi()<=D.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",ro(n)),this.Mn.getDocumentsMatchingQuery(e,n,C.min())}}/**
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
 */class jm{constructor(e,n,r,s){this.persistence=e,this.Un=n,this.k=s,this.qn=new ne(R),this.Kn=new vn(i=>Jn(i),ts),this.jn=C.min(),this.An=e.getMutationQueue(r),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new wl(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function Il(t,e,n,r){return new jm(t,e,n,r)}async function Tl(t,e){const n=S(t);let r=n.An,s=n.Wn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),s=new wl(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const u=[],l=[];let h=x();for(const d of a){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of c){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return s.vn(o,h).next(d=>({Gn:d,removedBatchIds:u,addedBatchIds:l}))})});return n.An=r,n.Wn=s,n.Un.On(n.Wn),i}function Km(t,e){const n=S(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=g.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(m=>{const b=c.docVersions.get(p);k(b!==null),m.version.compareTo(b)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&u.addEntry(m,c.commitVersion))})}),d.next(()=>o.An.removeMutationBatch(a,l))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.An.performConsistencyCheck(r)).next(()=>n.Wn.vn(r,s))})}function El(t){const e=S(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function Hm(t,e){const n=S(t),r=e.snapshotVersion;let s=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});s=n.qn;const a=[];e.targetChanges.forEach((u,l)=>{const h=s.get(l);if(!h)return;a.push(n.He.removeMatchingKeys(i,u.removedDocuments,l).next(()=>n.He.addMatchingKeys(i,u.addedDocuments,l)));let d=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(l)?d=d.withResumeToken(Y.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(l,d),function(p,m,b){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(h,d,u)&&a.push(n.He.updateTargetData(i,d))});let c=Le();if(e.documentUpdates.forEach((u,l)=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(zm(i,o,e.documentUpdates,r,void 0).next(u=>{c=u})),!r.isEqual(C.min())){const u=n.He.getLastRemoteSnapshotVersion(i).next(l=>n.He.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.Wn.Vn(i,c)).next(()=>c)}).then(i=>(n.qn=s,i))}function zm(t,e,n,r,s){let i=x();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=Le();return n.forEach((c,u)=>{const l=o.get(c),h=(s==null?void 0:s.get(c))||r;u.isNoDocument()&&u.version.isEqual(C.min())?(e.removeEntry(c,h),a=a.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u,h),a=a.insert(c,u)):y("LocalStore","Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)}),a})}function Gm(t,e){const n=S(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(r,e)))}function Wm(t,e){const n=S(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.He.getTargetData(r,e).next(i=>i?(s=i,g.resolve(s)):n.He.allocateTargetId(r).next(o=>(s=new it(e,o,0,r.currentSequenceNumber),n.He.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.qn.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qn=n.qn.insert(r.targetId,r),n.Kn.set(e,r.targetId)),r})}async function Io(t,e,n){const r=S(t),s=r.qn.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ot(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qn=r.qn.remove(e),r.Kn.delete(s.target)}function bl(t,e,n){const r=S(t);let s=C.min(),i=x();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=S(a),h=l.Kn.get(u);return h!==void 0?g.resolve(l.qn.get(h)):l.He.getTargetData(c,u)}(r,o,He(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Un.getDocumentsMatchingQuery(o,e,n?s:C.min(),n?i:x())).next(a=>({documents:a,zn:i})))}async function Qm(t){const e=S(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",n=>function(r){const s=Lt(r);let i=C.min();return s.jt({index:j.readTimeIndex,reverse:!0},(o,a,c)=>{a.readTime&&(i=Nm(a.readTime)),c.done()}).next(()=>i)}(n)).then(n=>{e.jn=n})}/**
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
 */class Ym{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return g.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var r;return this.Xn.set(n.id,{id:(r=n).id,version:r.version,createTime:be(r.createTime)}),g.resolve()}getNamedQuery(e,n){return g.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(r){return{name:r.name,query:il(r.bundledQuery),readTime:be(r.readTime)}}(n)),g.resolve()}}/**
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
 */class To{constructor(){this.ts=new V(X.es),this.ns=new V(X.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const r=new X(e,n);this.ts=this.ts.add(r),this.ns=this.ns.add(r)}rs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.os(new X(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new I(new P([])),r=new X(n,e),s=new X(n,e+1),i=[];return this.ns.forEachInRange([r,s],o=>{this.os(o),i.push(o.key)}),i}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new I(new P([])),r=new X(n,e),s=new X(n,e+1);let i=x();return this.ns.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new X(e,0),r=this.ts.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class X{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return I.comparator(e.key,n.key)||R(e.fs,n.fs)}static ss(e,n){return R(e.fs,n.fs)||I.comparator(e.key,n.key)}}/**
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
 */class Xm{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new V(X.es)}checkEmpty(e){return g.resolve(this.An.length===0)}addMutationBatch(e,n,r,s){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new fo(i,n,r,s);this.An.push(o);for(const a of s)this.ws=this.ws.add(new X(a.key,i)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,n){return g.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.gs(r),i=s<0?0:s;return g.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return g.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new X(n,0),s=new X(n,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([r,s],o=>{const a=this._s(o.fs);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new V(R);return n.forEach(s=>{const i=new X(s,0),o=new X(s,Number.POSITIVE_INFINITY);this.ws.forEachInRange([i,o],a=>{r=r.add(a.fs)})}),g.resolve(this.ys(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;I.isDocumentKey(i)||(i=i.child(""));const o=new X(new I(i),0);let a=new V(R);return this.ws.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.fs)),!0)},o),g.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(r=>{const s=this._s(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){k(this.ps(n.batchId,"removed")===0),this.An.shift();let r=this.ws;return g.forEach(n.mutations,s=>{const i=new X(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ws=r})}ee(e){}containsKey(e,n){const r=new X(n,0),s=this.ws.firstAfterOrEqual(r);return g.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.An.length,g.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
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
 */class Jm{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new ne(I.comparator),this.size=0}addEntry(e,n,r){const s=n.key,i=this.docs.get(s),o=i?i.size:0,a=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:a,readTime:r}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():$.newInvalidDocument(n))}getEntries(e,n){let r=Le();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():$.newInvalidDocument(s))}),g.resolve(r)}getDocumentsMatchingQuery(e,n,r){let s=Le();const i=new I(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:u}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;u.compareTo(r)<=0||er(n,c)&&(s=s.insert(c.key,c.mutableCopy()))}return g.resolve(s)}Es(e,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Zm(this)}getSize(e){return g.resolve(this.size)}}class Zm extends gl{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.document.isValidDocument()?n.push(this.De.addEntry(e,s.document,this.getReadTime(r))):this.De.removeEntry(r)}),g.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
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
 */class ey{constructor(e){this.persistence=e,this.Is=new vn(n=>Jn(n),ts),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.As=0,this.Rs=new To,this.targetCount=0,this.bs=xt.ie()}forEachTarget(e,n){return this.Is.forEach((r,s)=>n(s)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.As&&(this.As=n),g.resolve()}ae(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new xt(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,g.resolve()}updateTargetData(e,n){return this.ae(n),g.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Is.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),g.waitFor(i).next(()=>s)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,n){const r=this.Is.get(n)||null;return g.resolve(r)}addMatchingKeys(e,n,r){return this.Rs.rs(n,r),g.resolve()}removeMatchingKeys(e,n,r){this.Rs.cs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),g.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Rs.ls(n);return g.resolve(r)}containsKey(e,n){return g.resolve(this.Rs.containsKey(n))}}/**
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
 */class ty{constructor(e,n){this.Ps={},this.Be=new Re(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new ey(this),this.Jt=new Om,this.Je=function(r,s){return new Jm(r,s)}(this.Jt,r=>this.referenceDelegate.vs(r)),this.k=new el(n),this.Ye=new Ym(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.Ps[e.toKey()];return n||(n=new Xm(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,r){y("MemoryPersistence","Starting transaction:",e);const s=new ny(this.Be.next());return this.referenceDelegate.Vs(),r(s).next(i=>this.referenceDelegate.Ss(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ds(e,n){return g.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class ny extends Xu{constructor(e){super(),this.currentSequenceNumber=e}}class Eo{constructor(e){this.persistence=e,this.Cs=new To,this.Ns=null}static ks(e){return new Eo(e)}get xs(){if(this.Ns)return this.Ns;throw T()}addReference(e,n,r){return this.Cs.addReference(r,n),this.xs.delete(r.toString()),g.resolve()}removeReference(e,n,r){return this.Cs.removeReference(r,n),this.xs.add(r.toString()),g.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),g.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(s=>this.xs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.xs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.xs,r=>{const s=I.fromPath(r);return this.$s(e,s).next(i=>{i||n.removeEntry(s)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return g.or([()=>g.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}class _l{constructor(){this.activeTargetIds=Nu()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sl{constructor(){this.pi=new _l,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,n,r){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new _l,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class ry{Ei(e){}shutdown(){}}/**
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
 */class kl{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const sy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class iy{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}/**
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
 */class oy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,r,s,i){const o=this.Ui(e,n);y("RestConnection","Sending: ",o,r);const a={};return this.qi(a,s,i),this.Ki(e,o,a,r).then(c=>(y("RestConnection","Received: ",c),c),c=>{throw Wc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ji(e,n,r,s,i){return this.Bi(e,n,r,s,i)}qi(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Xt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Ui(e,n){const r=sy[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,r,s){return new Promise((i,o)=>{const a=new bg;a.listenOnce(Ig.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Gi.NO_ERROR:const u=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Gi.TIMEOUT:y("Connection",'RPC "'+e+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case Gi.HTTP_ERROR:const l=a.getStatus();if(y("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(m)>=0?m:f.UNKNOWN}(h.status);o(new w(d,h.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{y("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}Qi(e,n,r){const s=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=wg(),o=vg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Eg({})),this.qi(a.initMessageHeaders,n,r),_a()||ka()||vf()||Aa()||If()||Sa()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");y("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new iy({Vi:m=>{h?y("Connection","Not sending because WebChannel is closed:",m):(l||(y("Connection","Opening WebChannel transport."),u.open(),l=!0),y("Connection","WebChannel sending:",m),u.send(m))},Si:()=>u.close()}),p=(m,b,E)=>{m.listen(b,O=>{try{E(O)}catch(U){setTimeout(()=>{throw U},0)}})};return p(u,Jr.EventType.OPEN,()=>{h||y("Connection","WebChannel transport opened.")}),p(u,Jr.EventType.CLOSE,()=>{h||(h=!0,y("Connection","WebChannel transport closed"),d.Oi())}),p(u,Jr.EventType.ERROR,m=>{h||(h=!0,Wc("Connection","WebChannel transport errored:",m),d.Oi(new w(f.UNAVAILABLE,"The operation could not be completed")))}),p(u,Jr.EventType.MESSAGE,m=>{var b;if(!h){const E=m.data[0];k(!!E);const O=E,U=O.error||((b=O[0])===null||b===void 0?void 0:b.error);if(U){y("Connection","WebChannel received error:",U);const H=U.status;let F=function(qe){const wt=W[qe];if(wt!==void 0)return Cu(wt)}(H),De=U.message;F===void 0&&(F=f.INTERNAL,De="Unknown error status: "+H+" with message "+U.message),h=!0,d.Oi(new w(F,De)),u.close()}else y("Connection","WebChannel received:",E),d.Mi(E)}}),p(o,Tg.STAT_EVENT,m=>{m.stat===zc.PROXY?y("Connection","Detected buffering proxy"):m.stat===zc.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.$i()},0),d}}/**
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
 */function ay(){return typeof window!="undefined"?window:null}function Is(){return typeof document!="undefined"?document:null}/**
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
 */function Ts(t){return new dm(t,!0)}class Al{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Me=e,this.timerId=n,this.Wi=r,this.Gi=s,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),r=Math.max(0,Date.now()-this.Yi),s=Math.max(0,n-r);s>0&&y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,s,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
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
 */class Cl{constructor(e,n,r,s,i,o,a,c){this.Me=e,this.nr=r,this.sr=s,this.ir=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Al(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(me(n.toString()),me("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.rr===n&&this.Ir(r,s)},r=>{e(()=>{const s=new w(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ar(s)})})}Ir(e,n){const r=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{r(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(s=>{r(()=>this.Ar(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Me.enqueueAndForget(()=>this.rr===e?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cy extends Cl{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.k=i}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=gm(this.k,e),r=function(s){if(!("targetChange"in s))return C.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?C.min():i.readTime?be(i.readTime):C.min()}(e);return this.listener.br(n,r)}Pr(e){const n={};n.database=uo(this.k),n.addTarget=function(s,i){let o;const a=i.target;return o=ns(a)?{documents:$u(s,a)}:{query:ju(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Mu(s,i.resumeToken):i.snapshotVersion.compareTo(C.min())>0&&(o.readTime=sr(s,i.snapshotVersion.toTimestamp())),o}(this.k,e);const r=ym(this.k,e);r&&(n.labels=r),this.gr(n)}vr(e){const n={};n.database=uo(this.k),n.removeTarget=e,this.gr(n)}}class uy extends Cl{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(k(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=mm(e.writeResults,e.commitTime),r=be(e.commitTime);return this.listener.Cr(r,n)}return k(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=uo(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>lo(this.k,r))};this.gr(n)}}/**
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
 */class ly extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=r,this.k=s,this.$r=!1}Or(){if(this.$r)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.ir.Bi(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new w(f.UNKNOWN,s.toString())})}ji(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.ir.ji(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new w(f.UNKNOWN,s.toString())})}terminate(){this.$r=!0}}class hy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(me(n),this.Lr=!1):y("OnlineStateTracker",n)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
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
 */class dy{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(o=>{r.enqueueAndForget(async()=>{Mt(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=S(a);c.Gr.add(4),await cr(c),c.Jr.set("Unknown"),c.Gr.delete(4),await Es(c)}(this))})}),this.Jr=new hy(r,s)}}async function Es(t){if(Mt(t))for(const e of t.zr)await e(!0)}async function cr(t){for(const e of t.zr)await e(!1)}function Rl(t,e){const n=S(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),So(n)?_o(n):In(n).lr()&&bo(n,e))}function Nl(t,e){const n=S(t),r=In(n);n.Wr.delete(e),r.lr()&&Dl(n,e),n.Wr.size===0&&(r.lr()?r._r():Mt(n)&&n.Jr.set("Unknown"))}function bo(t,e){t.Yr.X(e.targetId),In(t).Pr(e)}function Dl(t,e){t.Yr.X(e),In(t).vr(e)}function _o(t){t.Yr=new um({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),In(t).start(),t.Jr.Br()}function So(t){return Mt(t)&&!In(t).hr()&&t.Wr.size>0}function Mt(t){return S(t).Gr.size===0}function Ol(t){t.Yr=void 0}async function fy(t){t.Wr.forEach((e,n)=>{bo(t,e)})}async function py(t,e){Ol(t),So(t)?(t.Jr.Kr(e),_o(t)):t.Jr.set("Unknown")}async function gy(t,e,n){if(t.Jr.set("Online"),e instanceof Ou&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Wr.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Wr.delete(o),r.Yr.removeTarget(o))}(t,e)}catch(r){y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bs(t,r)}else if(e instanceof fs?t.Yr.ot(e):e instanceof Du?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(C.min()))try{const r=await El(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Yr.gt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.Wr.get(c);u&&s.Wr.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.Wr.get(a);if(!c)return;s.Wr.set(a,c.withResumeToken(Y.EMPTY_BYTE_STRING,c.snapshotVersion)),Dl(s,a);const u=new it(c.target,a,1,c.sequenceNumber);bo(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){y("RemoteStore","Failed to raise snapshot:",r),await bs(t,r)}}async function bs(t,e,n){if(!Ot(e))throw e;t.Gr.add(1),await cr(t),t.Jr.set("Offline"),n||(n=()=>El(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Es(t)})}function Pl(t,e){return e().catch(n=>bs(t,n,e))}async function ur(t){const e=S(t),n=ct(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;my(e);)try{const s=await Gm(e.localStore,r);if(s===null){e.Qr.length===0&&n._r();break}r=s.batchId,yy(e,s)}catch(s){await bs(e,s)}xl(e)&&Ll(e)}function my(t){return Mt(t)&&t.Qr.length<10}function yy(t,e){t.Qr.push(e);const n=ct(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function xl(t){return Mt(t)&&!ct(t).hr()&&t.Qr.length>0}function Ll(t){ct(t).start()}async function wy(t){ct(t).kr()}async function vy(t){const e=ct(t);for(const n of t.Qr)e.Dr(n.mutations)}async function Iy(t,e,n){const r=t.Qr.shift(),s=po.from(r,e,n);await Pl(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ur(t)}async function Ty(t,e){e&&ct(t).Sr&&await async function(n,r){if(s=r.code,nm(s)&&s!==f.ABORTED){const i=n.Qr.shift();ct(n).wr(),await Pl(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await ur(n)}var s}(t,e),xl(t)&&Ll(t)}async function Ey(t,e){const n=S(t);e?(n.Gr.delete(2),await Es(n)):e||(n.Gr.add(2),await cr(n),n.Jr.set("Unknown"))}function In(t){return t.Xr||(t.Xr=function(e,n,r){const s=S(e);return s.Or(),new cy(n,s.ir,s.authCredentials,s.appCheckCredentials,s.k,r)}(t.datastore,t.asyncQueue,{Di:fy.bind(null,t),Ni:py.bind(null,t),br:gy.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),So(t)?_o(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Ol(t))})),t.Xr}function ct(t){return t.Zr||(t.Zr=function(e,n,r){const s=S(e);return s.Or(),new uy(n,s.ir,s.authCredentials,s.appCheckCredentials,s.k,r)}(t.datastore,t.asyncQueue,{Di:wy.bind(null,t),Ni:Ty.bind(null,t),Nr:vy.bind(null,t),Cr:Iy.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await ur(t)):(await t.Zr.stop(),t.Qr.length>0&&(y("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
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
 */class ko{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new ko(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ao(t,e){if(me("AsyncQueue",`${e}: ${t}`),Ot(t))return new w(f.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Tn{constructor(e){this.comparator=e?(n,r)=>e(n,r)||I.comparator(n.key,r.key):(n,r)=>I.comparator(n.key,r.key),this.keyedMap=oo(),this.sortedSet=new ne(this.comparator)}static emptySet(e){return new Tn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Tn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Tn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ml{constructor(){this.eo=new ne(I.comparator)}track(e){const n=e.doc.key,r=this.eo.get(n);r?e.type!==0&&r.type===3?this.eo=this.eo.insert(n,e):e.type===3&&r.type!==1?this.eo=this.eo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.eo=this.eo.remove(n):e.type===1&&r.type===2?this.eo=this.eo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):T():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,r)=>{e.push(r)}),e}}class En{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new En(e,n,Tn.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&as(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class by{constructor(){this.so=void 0,this.listeners=[]}}class _y{constructor(){this.queries=new vn(e=>du(e),as),this.onlineState="Unknown",this.io=new Set}}async function Ul(t,e){const n=S(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new by),s)try{i.so=await n.onListen(r)}catch(o){const a=Ao(o,`Initialization of query '${ro(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.ro(n.onlineState),i.so&&e.oo(i.so)&&Co(n)}async function Fl(t,e){const n=S(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Sy(t,e){const n=S(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.oo(s)&&(r=!0);o.so=s}}r&&Co(n)}function ky(t,e,n){const r=S(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Co(t){t.io.forEach(e=>{e.next()})}class Vl{constructor(e,n,r){this.query=e,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=r||{}}oo(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new En(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(e)&&(this.co.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.wo||!r)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=En.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}/**
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
 */class Bl{constructor(e){this.key=e}}class ql{constructor(e){this.key=e}}class Ay{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=x(),this.mutatedKeys=x(),this.Ao=fu(e),this.Ro=new Tn(this.Ao)}get bo(){return this.To}Po(e,n){const r=n?n.vo:new Ml,s=n?n.Ro:this.Ro;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=is(this.query)&&s.size===this.query.limit?s.last():null,u=os(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),p=er(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),b=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?m!==b&&(r.track({type:3,doc:p}),E=!0):this.Vo(d,p)||(r.track({type:2,doc:p}),E=!0,(c&&this.Ao(p,c)>0||u&&this.Ao(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(c||u)&&(a=!0)),E&&(p?(o=o.add(p),i=b?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),is(this.query)||os(this.query))for(;o.size>this.query.limit;){const l=is(this.query)?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Ro:o,vo:r,Bn:a,mutatedKeys:i}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort((u,l)=>function(h,d){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return p(h)-p(d)}(u.type,l.type)||this.Ao(u.doc,l.doc)),this.So(r);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,c=a!==this.Eo;return this.Eo=a,i.length!==0||c?{snapshot:new En(this.query,e.Ro,s,i,e.mutatedKeys,a===0,c,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Ml,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=x(),this.Ro.forEach(r=>{this.No(r.key)&&(this.Io=this.Io.add(r.key))});const n=[];return e.forEach(r=>{this.Io.has(r)||n.push(new ql(r))}),this.Io.forEach(r=>{e.has(r)||n.push(new Bl(r))}),n}ko(e){this.To=e.zn,this.Io=x();const n=this.Po(e.documents);return this.applyChanges(n,!0)}xo(){return En.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class Cy{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ry{constructor(e){this.key=e,this.$o=!1}}class Ny{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new vn(a=>du(a),as),this.Fo=new Map,this.Lo=new Set,this.Bo=new ne(I.comparator),this.Uo=new Map,this.qo=new To,this.Ko={},this.jo=new Map,this.Qo=xt.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function Dy(t,e){const n=qy(t);let r,s;const i=n.Mo.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.xo();else{const o=await Wm(n.localStore,He(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Oy(n,e,r,a==="current"),n.isPrimaryClient&&Rl(n.remoteStore,o)}return s}async function Oy(t,e,n,r){t.Go=(l,h,d)=>async function(p,m,b,E){let O=m.view.Po(b);O.Bn&&(O=await bl(p.localStore,m.query,!1).then(({documents:F})=>m.view.Po(F,O)));const U=E&&E.targetChanges.get(m.targetId),H=m.view.applyChanges(O,p.isPrimaryClient,U);return Gl(p,m.targetId,H.Co),H.snapshot}(t,l,h,d);const s=await bl(t.localStore,e,!0),i=new Ay(e,s.zn),o=i.Po(s.documents),a=rr.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Gl(t,n,c.Co);const u=new Cy(e,n,i);return t.Mo.set(e,u),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function Py(t,e){const n=S(t),r=n.Mo.get(e),s=n.Fo.get(r.targetId);if(s.length>1)return n.Fo.set(r.targetId,s.filter(i=>!as(i,e))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Io(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Nl(n.remoteStore,r.targetId),Ro(n,r.targetId)}).catch(wn)):(Ro(n,r.targetId),await Io(n.localStore,r.targetId,!0))}async function xy(t,e,n){const r=Wl(t);try{const s=await function(i,o){const a=S(i),c=te.now(),u=o.reduce((h,d)=>h.add(d.key),x());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,u).next(d=>{l=d;const p=[];for(const m of o){const b=em(m,l.get(m.key));b!=null&&p.push(new rt(m.key,b,iu(b.value.mapValue),Ae.exists(!0)))}return a.An.addMutationBatch(h,c,p,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.Ko[i.currentUser.toKey()];c||(c=new ne(R)),c=c.insert(o,a),i.Ko[i.currentUser.toKey()]=c}(r,s.batchId,n),await lr(r,s.changes),await ur(r.remoteStore)}catch(s){const i=Ao(s,"Failed to persist write");n.reject(i)}}async function $l(t,e){const n=S(t);try{const r=await Hm(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Uo.get(i);o&&(k(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.$o=!0:s.modifiedDocuments.size>0?k(o.$o):s.removedDocuments.size>0&&(k(o.$o),o.$o=!1))}),await lr(n,r,e)}catch(r){await wn(r)}}function jl(t,e,n){const r=S(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Mo.forEach((i,o)=>{const a=o.view.ro(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=S(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.ro(o)&&(c=!0)}),c&&Co(a)}(r.eventManager,e),s.length&&r.Oo.br(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ly(t,e,n){const r=S(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Uo.get(e),i=s&&s.key;if(i){let o=new ne(I.comparator);o=o.insert(i,$.newNoDocument(i,C.min()));const a=x().add(i),c=new ds(C.min(),new Map,new V(R),o,a);await $l(r,c),r.Bo=r.Bo.remove(i),r.Uo.delete(e),No(r)}else await Io(r.localStore,e,!1).then(()=>Ro(r,e,n)).catch(wn)}async function My(t,e){const n=S(t),r=e.batch.batchId;try{const s=await Km(n.localStore,e);Hl(n,r,null),Kl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lr(n,s)}catch(s){await wn(s)}}async function Uy(t,e,n){const r=S(t);try{const s=await function(i,o){const a=S(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.An.lookupMutationBatch(c,o).next(l=>(k(l!==null),u=l.keys(),a.An.removeMutationBatch(c,l))).next(()=>a.An.performConsistencyCheck(c)).next(()=>a.Wn.vn(c,u))})}(r.localStore,e);Hl(r,e,n),Kl(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lr(r,s)}catch(s){await wn(s)}}function Kl(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function Hl(t,e,n){const r=S(t);let s=r.Ko[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ko[r.currentUser.toKey()]=s}}function Ro(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Mo.delete(r),n&&t.Oo.zo(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(r=>{t.qo.containsKey(r)||zl(t,r)})}function zl(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(Nl(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),No(t))}function Gl(t,e,n){for(const r of n)r instanceof Bl?(t.qo.addReference(r.key,e),Fy(t,r)):r instanceof ql?(y("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||zl(t,r.key)):T()}function Fy(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(y("SyncEngine","New document in limbo: "+n),t.Lo.add(r),No(t))}function No(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new I(P.fromString(e)),r=t.Qo.next();t.Uo.set(r,new Ry(n)),t.Bo=t.Bo.insert(n,r),Rl(t.remoteStore,new it(He(ss(n.path)),r,2,Re.I))}}async function lr(t,e,n){const r=S(t),s=[],i=[],o=[];r.Mo.isEmpty()||(r.Mo.forEach((a,c)=>{o.push(r.Go(c,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),s.push(u);const l=vo.$n(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.Oo.br(s),await async function(a,c){const u=S(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>g.forEach(c,h=>g.forEach(h.kn,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>g.forEach(h.xn,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Ot(l))throw l;y("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qn.get(h),p=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(p);u.qn=u.qn.insert(h,m)}}}(r.localStore,i))}async function Vy(t,e){const n=S(t);if(!n.currentUser.isEqual(e)){y("SyncEngine","User change. New user:",e.toKey());const r=await Tl(n.localStore,e);n.currentUser=e,function(s,i){s.jo.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,i))})}),s.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lr(n,r.Gn)}}function By(t,e){const n=S(t),r=n.Uo.get(e);if(r&&r.$o)return x().add(r.key);{let s=x();const i=n.Fo.get(e);if(!i)return s;for(const o of i){const a=n.Mo.get(o);s=s.unionWith(a.view.bo)}return s}}function qy(t){const e=S(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$l.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=By.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ly.bind(null,e),e.Oo.br=Sy.bind(null,e.eventManager),e.Oo.zo=ky.bind(null,e.eventManager),e}function Wl(t){const e=S(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=My.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Uy.bind(null,e),e}class Ql{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Ts(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return Il(this.persistence,new vl,e.initialUser,this.k)}Yo(e){return new ty(Eo.ks,this.k)}Jo(e){return new Sl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $y extends Ql{constructor(e,n,r){super(),this.tc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await Qm(this.localStore),await this.tc.initialize(this,e),await Wl(this.tc.syncEngine),await ur(this.tc.remoteStore),await this.persistence.sn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Zo(e){return Il(this.persistence,new vl,e.initialUser,this.k)}Xo(e){const n=this.persistence.referenceDelegate.garbageCollector;return new Mm(n,e.asyncQueue)}Yo(e){const n=$m(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ve.withCacheSize(this.cacheSizeBytes):ve.DEFAULT;return new wo(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,ay(),Is(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(e){return new Sl}}class Yl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vy.bind(null,this.syncEngine),await Ey(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _y}createDatastore(e){const n=Ts(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new oy(s));var s;return function(i,o,a,c){return new ly(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>jl(this.syncEngine,a,0),o=kl.Pt()?new kl:new ry,new dy(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,u){const l=new Ny(r,s,i,o,a,c);return u&&(l.Wo=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=S(e);y("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await cr(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
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
 */class Xl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error?this.ec(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}nc(){this.muted=!0}ec(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class jy{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ge.UNAUTHENTICATED,this.clientId=Qc.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ao(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jl(t,e){t.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Tl(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Zl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ky(t);y("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>async function(i,o){const a=S(i);a.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const c=Mt(a);a.Gr.add(3),await cr(a),c&&a.Jr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Gr.delete(3),await Es(a)}(e.remoteStore,s)),t.onlineComponents=e}async function Ky(t){return t.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await Jl(t,new Ql)),t.offlineComponents}async function eh(t){return t.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await Zl(t,new Yl)),t.onlineComponents}function Hy(t){return eh(t).then(e=>e.syncEngine)}async function Do(t){const e=await eh(t),n=e.eventManager;return n.onListen=Dy.bind(null,e.syncEngine),n.onUnlisten=Py.bind(null,e.syncEngine),n}function zy(t,e,n={}){const r=new Pe;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new Xl({next:h=>{i.enqueueAndForget(()=>Fl(s,l)),h.fromCache&&a.source==="server"?c.reject(new w(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Vl(o,u,{includeMetadataChanges:!0,wo:!0});return Ul(s,l)}(await Do(t),t.asyncQueue,e,n,r)),r.promise}class Gy{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class hr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const th=new Map;/**
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
 */function nh(t,e,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wy(t,e,n,r){if(e===!0&&r===!0)throw new w(f.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rh(t){if(!I.isDocumentKey(t))throw new w(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sh(t){if(I.isDocumentKey(t))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _s(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":T()}function Ue(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_s(t);throw new w(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Qy(t,e){if(e<=0)throw new w(f.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class ih{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Wy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Oo{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ih({}),this._settingsFrozen=!1,e instanceof hr?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hr(s.options.projectId)}(e))}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ih(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Sg;switch(n.type){case"gapi":const r=n.client;return k(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new Cg(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=th.get(e);n&&(y("ComponentProvider","Removing Datastore"),th.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Ie{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ie(this.firestore,e,this._key)}}class ut{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ut(this.firestore,e,this._query)}}class lt extends ut{constructor(e,n,r){super(e,n,ss(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ie(this.firestore,null,new I(e))}withConverter(e){return new lt(this.firestore,e,this._path)}}function xE(t,e,...n){if(t=q(t),nh("collection","path",e),t instanceof Oo){const r=P.fromString(e,...n);return sh(r),new lt(t,null,r)}{if(!(t instanceof Ie||t instanceof lt))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(P.fromString(e,...n));return sh(r),new lt(t.firestore,null,r)}}function Yy(t,e,...n){if(t=q(t),arguments.length===1&&(e=Qc.A()),nh("doc","path",e),t instanceof Oo){const r=P.fromString(e,...n);return rh(r),new Ie(t,null,new I(r))}{if(!(t instanceof Ie||t instanceof lt))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(P.fromString(e,...n));return rh(r),new Ie(t.firestore,t instanceof lt?t.converter:null,new I(r))}}/**
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
 */class Xy{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Al(this,"async_queue_retry"),this.bc=()=>{const n=Is();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=Is();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const n=Is();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise(()=>{});const n=new Pe;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.gc.push(e),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(e){if(!Ot(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(e){const n=this.mc.then(()=>(this.Ic=!0,e().catch(r=>{this.Ec=r,this.Ic=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw me("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ic=!1,r))));return this.mc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.Rc.indexOf(e)>-1&&(n=0);const s=ko.createAndSchedule(this,e,n,r,i=>this.Sc(i));return this.Tc.push(s),s}Pc(){this.Ec&&T()}verifyOperationInProgress(){}async Dc(){let e;do e=this.mc,await e;while(e!==this.mc)}Cc(e){for(const n of this.Tc)if(n.timerId===e)return!0;return!1}Nc(e){return this.Dc().then(()=>{this.Tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Dc()})}kc(e){this.Rc.push(e)}Sc(e){const n=this.Tc.indexOf(e);this.Tc.splice(n,1)}}function oh(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ht extends Oo{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new Xy,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ah(this),this._firestoreClient.terminate()}}function LE(t=kr()){return Tt(t,"firestore").getImmediate()}function Ss(t){return t._firestoreClient||ah(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ah(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new Gy(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new jy(t._authCredentials,t._appCheckCredentials,t._queue,r)}function ME(t,e){Zy(t=Ue(t,ht));const n=Ss(t),r=t._freezeSettings(),s=new Yl;return Jy(n,s,new $y(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function Jy(t,e,n){const r=new Pe;return t.asyncQueue.enqueue(async()=>{try{await Jl(t,n),await Zl(t,e),r.resolve()}catch(s){if(!function(i){return i.name==="FirebaseError"?i.code===f.FAILED_PRECONDITION||i.code===f.UNIMPLEMENTED:typeof DOMException!="undefined"&&i instanceof DOMException?i.code===22||i.code===20||i.code===11:!0}(s))throw s;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function Zy(t){if(t._initialized||t._terminated)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class ks{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bn(Y.fromBase64String(e))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bn(Y.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class As{constructor(e){this._methodName=e}}/**
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
 */class Po{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}/**
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
 */const ew=/^__.*__$/;class tw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new rt(e,this.data,this.fieldMask,n,this.fieldTransforms):new nr(e,this.data,n,this.fieldTransforms)}}class ch{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new rt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class xo{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.k=r,this.ignoreUndefinedProperties=s,i===void 0&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new xo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Oc({path:r,Fc:!1});return s.Lc(e),s}Bc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Oc({path:r,Fc:!1});return s.xc(),s}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return Rs(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(e.length===0)throw this.qc("Document fields must not be empty");if(uh(this.$c)&&ew.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class nw{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=r||Ts(e)}Qc(e,n,r,s=!1){return new xo({$c:e,methodName:n,jc:r,path:oe.emptyPath(),Fc:!1,Kc:s},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Lo(t){const e=t._freezeSettings(),n=Ts(t._databaseId);return new nw(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rw(t,e,n,r,s,i={}){const o=t.Qc(i.merge||i.mergeFields?2:0,e,n,s);Uo("Data must be an object, but it was:",o,r);const a=lh(r,o);let c,u;if(i.merge)c=new Zt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Fo(e,h,n);if(!o.contains(d))throw new w(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);dh(l,d)||l.push(d)}c=new Zt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new tw(new de(a),c,u)}class Cs extends As{_toFieldTransform(e){if(e.$c!==2)throw e.$c===1?e.qc(`${this._methodName}() can only appear at the top level of your update data`):e.qc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cs}}class Mo extends As{_toFieldTransform(e){return new Tu(e.path,new on)}isEqual(e){return e instanceof Mo}}function sw(t,e,n,r){const s=t.Qc(1,e,n);Uo("Data must be an object, but it was:",s,r);const i=[],o=de.empty();Ct(r,(c,u)=>{const l=Vo(e,c,n);u=q(u);const h=s.Bc(l);if(u instanceof Cs)i.push(l);else{const d=dr(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new Zt(i);return new ch(o,a,s.fieldTransforms)}function iw(t,e,n,r,s,i){const o=t.Qc(1,e,n),a=[Fo(e,r,n)],c=[s];if(i.length%2!=0)throw new w(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Fo(e,i[d])),c.push(i[d+1]);const u=[],l=de.empty();for(let d=a.length-1;d>=0;--d)if(!dh(u,a[d])){const p=a[d];let m=c[d];m=q(m);const b=o.Bc(p);if(m instanceof Cs)u.push(p);else{const E=dr(m,b);E!=null&&(u.push(p),l.set(p,E))}}const h=new Zt(u);return new ch(l,h,o.fieldTransforms)}function ow(t,e,n,r=!1){return dr(n,t.Qc(r?4:3,e))}function dr(t,e){if(hh(t=q(t)))return Uo("Unsupported field value:",e,t),lh(t,e);if(t instanceof As)return function(n,r){if(!uh(r.$c))throw r.qc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.$c!==4)throw e.qc("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=dr(o,r.Uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=q(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Wg(r.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=te.fromDate(n);return{timestampValue:sr(r.k,s)}}if(n instanceof te){const s=new te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:sr(r.k,s)}}if(n instanceof Po)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof bn)return{bytesValue:Mu(r.k,n._byteString)};if(n instanceof Ie){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.qc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ao(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.qc(`Unsupported field value: ${_s(n)}`)}(t,e)}function lh(t,e){const n={};return Jc(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ct(t,(r,s)=>{const i=dr(s,e.Mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function hh(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof te||t instanceof Po||t instanceof bn||t instanceof Ie||t instanceof As)}function Uo(t,e,n){if(!hh(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=_s(n);throw r==="an object"?e.qc(t+" a custom object"):e.qc(t+" "+r)}}function Fo(t,e,n){if((e=q(e))instanceof ks)return e._internalPath;if(typeof e=="string")return Vo(t,e);throw Rs("Field path arguments must be of type string or ",t,!1,void 0,n)}const aw=new RegExp("[~\\*/\\[\\]]");function Vo(t,e,n){if(e.search(aw)>=0)throw Rs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ks(...e.split("."))._internalPath}catch{throw Rs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rs(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new w(f.INVALID_ARGUMENT,a+t+c)}function dh(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class fh{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ns("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cw extends fh{data(){return super.data()}}function Ns(t,e){return typeof e=="string"?Vo(t,e):e instanceof ks?e._internalPath:e._delegate._internalPath}/**
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
 */class fr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ph extends fh{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ds(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ns("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ds extends ph{data(e={}){return super.data(e)}}class gh{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new fr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ds(this._firestore,this._userDataWriter,r.key,r,new fr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ds(r._firestore,r._userDataWriter,o.doc.key,o.doc,new fr(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Ds(r._firestore,r._userDataWriter,o.doc.key,o.doc,new fr(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:uw(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uw(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}/**
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
 */function mh(t){if(os(t)&&t.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bo{}function UE(t,...e){for(const n of e)t=n._apply(t);return t}class lw extends Bo{constructor(e,n,r){super(),this.zc=e,this.Hc=n,this.Jc=r,this.type="where"}_apply(e){const n=Lo(e.firestore),r=function(s,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new w(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){wh(l,u);const p=[];for(const m of l)p.push(yh(a,s,m));h={arrayValue:{values:p}}}else h=yh(a,s,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||wh(l,u),h=ow(o,i,l,u==="in"||u==="not-in");const d=fe.create(c,u,h);return function(p,m){if(m.V()){const E=no(p);if(E!==null&&!E.isEqual(m.field))throw new w(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${E.toString()}' and '${m.field.toString()}'`);const O=to(p);O!==null&&vh(p,m.field,O)}const b=function(E,O){for(const U of E.filters)if(O.indexOf(U.op)>=0)return U.op;return null}(p,function(E){switch(E){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(b!==null)throw b===m.op?new w(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new w(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${b.toString()}' filters.`)}(s,d),d}(e._query,"where",n,e.firestore._databaseId,this.zc,this.Hc,this.Jc);return new ut(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new sn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function FE(t,e,n){const r=e,s=Ns("where",t);return new lw(s,r,n)}class hw extends Bo{constructor(e,n){super(),this.zc=e,this.Yc=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new w(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new w(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new rn(s,i);return function(a,c){if(to(a)===null){const u=no(a);u!==null&&vh(a,u,c.field)}}(r,o),o}(e._query,this.zc,this.Yc);return new ut(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new sn(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function VE(t,e="asc"){const n=e,r=Ns("orderBy",t);return new hw(r,n)}class dw extends Bo{constructor(e,n,r){super(),this.type=e,this.Xc=n,this.Zc=r}_apply(e){return new ut(e.firestore,e.converter,hu(e._query,this.Xc,this.Zc))}}function BE(t){return Qy("limitToLast",t),new dw("limitToLast",t,"L")}function yh(t,e,n){if(typeof(n=q(n))=="string"){if(n==="")throw new w(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lu(e)&&n.indexOf("/")!==-1)throw new w(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(P.fromString(n));if(!I.isDocumentKey(r))throw new w(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return nu(t,new I(r))}if(n instanceof Ie)return nu(t,n._key);throw new w(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_s(n)}.`)}function wh(t,e){if(!Array.isArray(t)||t.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new w(f.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function vh(t,e,n){if(!n.isEqual(e))throw new w(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class fw{convertValue(e,n="none"){switch(Rt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return G(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(en(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw T()}}convertObject(e,n){const r={};return Ct(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Po(G(e.latitude),G(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=eu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qn(e));default:return null}}convertTimestamp(e){const n=nt(e);return new te(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=P.fromString(e);k(Wu(r));const s=new hr(r.get(1),r.get(3)),i=new I(r.popFirst(5));return s.isEqual(n)||me(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function pw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class qo extends fw{constructor(e){super(),this.firestore=e}convertBytes(e){return new bn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ie(this.firestore,null,n)}}function qE(t){t=Ue(t,ut);const e=Ue(t.firestore,ht),n=Ss(e),r=new qo(e);return mh(t._query),zy(n,t._query).then(s=>new gh(e,r,t,s))}function $E(t,e,n,...r){t=Ue(t,Ie);const s=Ue(t.firestore,ht),i=Lo(s);let o;return o=typeof(e=q(e))=="string"||e instanceof ks?iw(i,"updateDoc",t._key,e,n,r):sw(i,"updateDoc",t._key,e),$o(s,[o.toMutation(t._key,Ae.exists(!0))])}function jE(t){return $o(Ue(t.firestore,ht),[new io(t._key,Ae.none())])}function KE(t,e){const n=Ue(t.firestore,ht),r=Yy(t),s=pw(t.converter,e);return $o(n,[rw(Lo(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ae.exists(!1))]).then(()=>r)}function HE(t,...e){var n,r,s;t=q(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||oh(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(oh(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(t instanceof Ie)u=Ue(t.firestore,ht),l=ss(t._key.path),c={next:h=>{e[o]&&e[o](gw(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ue(t,ut);u=Ue(h.firestore,ht),l=h._query;const d=new qo(u);c={next:p=>{e[o]&&e[o](new gh(u,d,h,p))},error:e[o+1],complete:e[o+2]},mh(t._query)}return function(h,d,p,m){const b=new Xl(m),E=new Vl(d,b,p);return h.asyncQueue.enqueueAndForget(async()=>Ul(await Do(h),E)),()=>{b.nc(),h.asyncQueue.enqueueAndForget(async()=>Fl(await Do(h),E))}}(Ss(u),l,a,c)}function $o(t,e){return function(n,r){const s=new Pe;return n.asyncQueue.enqueueAndForget(async()=>xy(await Hy(n),r,s)),s.promise}(Ss(t),e)}function gw(t,e,n){const r=n.docs.get(e._key),s=new qo(t);return new ph(t,s,e._key,r,new fr(n.hasPendingWrites,n.fromCache),e.converter)}function zE(){return new Mo("serverTimestamp")}(function(t,e=!0){(function(n){Xt=n})(Ht),Oe(new Ce("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new ht(s,new kg(n.getProvider("auth-internal")),new Ng(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Te(Gc,"3.4.3",t),Te(Gc,"3.4.3","esm2017")})();const Ih="@firebase/installations",jo="0.5.5";/**
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
 */const Th=1e4,Eh=`w:${jo}`,bh="FIS_v2",mw="https://firebaseinstallations.googleapis.com/v1",yw=60*60*1e3,ww="installations",vw="Installations";/**
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
 */const Iw={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ut=new vt(ww,vw,Iw);function _h(t){return t instanceof $e&&t.code.includes("request-failed")}/**
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
 */function Sh({projectId:t}){return`${mw}/projects/${t}/installations`}function kh(t){return{token:t.token,requestStatus:2,expiresIn:Ew(t.expiresIn),creationTime:Date.now()}}async function Ah(t,e){const r=(await e.json()).error;return Ut.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ch({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Tw(t,{refreshToken:e}){const n=Ch(t);return n.append("Authorization",bw(e)),n}async function Rh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ew(t){return Number(t.replace("s","000"))}function bw(t){return`${bh} ${t}`}/**
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
 */async function _w(t,{fid:e}){const n=Sh(t),r=Ch(t),s={fid:e,authVersion:bh,appId:t.appId,sdkVersion:Eh},i={method:"POST",headers:r,body:JSON.stringify(s)},o=await Rh(()=>fetch(n,i));if(o.ok){const a=await o.json();return{fid:a.fid||e,registrationStatus:2,refreshToken:a.refreshToken,authToken:kh(a.authToken)}}else throw await Ah("Create Installation",o)}/**
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
 */function Nh(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Sw(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const kw=/^[cdef][\w-]{21}$/,Ko="";function Aw(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Cw(t);return kw.test(n)?n:Ko}catch{return Ko}}function Cw(t){return Sw(t).substr(0,22)}/**
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
 */function Os(t){return`${t.appName}!${t.appId}`}/**
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
 */const Dh=new Map;function Oh(t,e){const n=Os(t);Ph(n,e),Rw(n,e)}function Ph(t,e){const n=Dh.get(t);if(!!n)for(const r of n)r(e)}function Rw(t,e){const n=Nw();n&&n.postMessage({key:t,fid:e}),Dw()}let Ft=null;function Nw(){return!Ft&&"BroadcastChannel"in self&&(Ft=new BroadcastChannel("[Firebase] FID Change"),Ft.onmessage=t=>{Ph(t.data.key,t.data.fid)}),Ft}function Dw(){Dh.size===0&&Ft&&(Ft.close(),Ft=null)}/**
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
 */const Ow="firebase-installations-database",Pw=1,Vt="firebase-installations-store";let Ho=null;function zo(){return Ho||(Ho=Qs(Ow,Pw,t=>{switch(t.oldVersion){case 0:t.createObjectStore(Vt)}})),Ho}async function Ps(t,e){const n=Os(t),s=(await zo()).transaction(Vt,"readwrite"),i=s.objectStore(Vt),o=await i.get(n);return await i.put(e,n),await s.complete,(!o||o.fid!==e.fid)&&Oh(t,e.fid),e}async function xh(t){const e=Os(t),r=(await zo()).transaction(Vt,"readwrite");await r.objectStore(Vt).delete(e),await r.complete}async function xs(t,e){const n=Os(t),s=(await zo()).transaction(Vt,"readwrite"),i=s.objectStore(Vt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.complete,a&&(!o||o.fid!==a.fid)&&Oh(t,a.fid),a}/**
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
 */async function Go(t){let e;const n=await xs(t,r=>{const s=xw(r),i=Lw(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Ko?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function xw(t){const e=t||{fid:Aw(),registrationStatus:0};return Mh(e)}function Lw(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ut.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Mw(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Uw(t)}:{installationEntry:e}}async function Mw(t,e){try{const n=await _w(t,e);return Ps(t,n)}catch(n){throw _h(n)&&n.customData.serverCode===409?await xh(t):await Ps(t,{fid:e.fid,registrationStatus:0}),n}}async function Uw(t){let e=await Lh(t);for(;e.registrationStatus===1;)await Nh(100),e=await Lh(t);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Go(t);return r||n}return e}function Lh(t){return xs(t,e=>{if(!e)throw Ut.create("installation-not-found");return Mh(e)})}function Mh(t){return Fw(t)?{fid:t.fid,registrationStatus:0}:t}function Fw(t){return t.registrationStatus===1&&t.registrationTime+Th<Date.now()}/**
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
 */async function Vw({appConfig:t,platformLoggerProvider:e},n){const r=Bw(t,n),s=Tw(t,n),i=e.getImmediate({optional:!0});i&&s.append("x-firebase-client",i.getPlatformInfoString());const o={installation:{sdkVersion:Eh}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Rh(()=>fetch(r,a));if(c.ok){const u=await c.json();return kh(u)}else throw await Ah("Generate Auth Token",c)}function Bw(t,{fid:e}){return`${Sh(t)}/${e}/authTokens:generate`}/**
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
 */async function Wo(t,e=!1){let n;const r=await xs(t.appConfig,i=>{if(!Fh(i))throw Ut.create("not-registered");const o=i.authToken;if(!e&&jw(o))return i;if(o.requestStatus===1)return n=qw(t,e),i;{if(!navigator.onLine)throw Ut.create("app-offline");const a=Hw(i);return n=$w(t,a),a}});return n?await n:r.authToken}async function qw(t,e){let n=await Uh(t.appConfig);for(;n.authToken.requestStatus===1;)await Nh(100),n=await Uh(t.appConfig);const r=n.authToken;return r.requestStatus===0?Wo(t,e):r}function Uh(t){return xs(t,e=>{if(!Fh(e))throw Ut.create("not-registered");const n=e.authToken;return zw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function $w(t,e){try{const n=await Vw(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ps(t.appConfig,r),n}catch(n){if(_h(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xh(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ps(t.appConfig,r)}throw n}}function Fh(t){return t!==void 0&&t.registrationStatus===2}function jw(t){return t.requestStatus===2&&!Kw(t)}function Kw(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+yw}function Hw(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function zw(t){return t.requestStatus===1&&t.requestTime+Th<Date.now()}/**
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
 */async function Gw(t){const e=t,{installationEntry:n,registrationPromise:r}=await Go(e.appConfig);return r?r.catch(console.error):Wo(e).catch(console.error),n.fid}/**
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
 */async function Ww(t,e=!1){const n=t;return await Qw(n.appConfig),(await Wo(n,e)).token}async function Qw(t){const{registrationPromise:e}=await Go(t);e&&await e}/**
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
 */function Yw(t){if(!t||!t.options)throw Qo("App Configuration");if(!t.name)throw Qo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Qo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Qo(t){return Ut.create("missing-app-config-values",{valueName:t})}/**
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
 */const Vh="installations",Xw="installations-internal",Jw=t=>{const e=t.getProvider("app").getImmediate(),n=Yw(e),r=Tt(e,"platform-logger");return{app:e,appConfig:n,platformLoggerProvider:r,_delete:()=>Promise.resolve()}},Zw=t=>{const e=t.getProvider("app").getImmediate(),n=Tt(e,Vh).getImmediate();return{getId:()=>Gw(n),getToken:s=>Ww(n,s)}};function ev(){Oe(new Ce(Vh,Jw,"PUBLIC")),Oe(new Ce(Xw,Zw,"PRIVATE"))}ev();Te(Ih,jo);Te(Ih,jo,"esm2017");/**
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
 */const tv="/firebase-messaging-sw.js",nv="/firebase-cloud-messaging-push-scope",Bh="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",rv="https://fcmregistrations.googleapis.com/v1",qh="google.c.a.c_id",sv="google.c.a.c_l",iv="google.c.a.ts",ov="google.c.a.e";var $h;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})($h||($h={}));/**
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
 */var pr;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(pr||(pr={}));/**
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
 */function Qe(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function av(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Yo="fcm_token_details_db",cv=5,jh="fcm_token_object_Store";async function uv(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Yo))return null;let e=null;return(await Qs(Yo,cv,async r=>{var s;if(r.oldVersion<2||!r.objectStoreNames.contains(jh))return;const i=r.transaction.objectStore(jh),o=await i.index("fcmSenderId").get(t);if(await i.clear(),!!o){if(r.oldVersion===2){const a=o;if(!a.auth||!a.p256dh||!a.endpoint)return;e={token:a.fcmToken,createTime:(s=a.createTime)!==null&&s!==void 0?s:Date.now(),subscriptionOptions:{auth:a.auth,p256dh:a.p256dh,endpoint:a.endpoint,swScope:a.swScope,vapidKey:typeof a.vapidKey=="string"?a.vapidKey:Qe(a.vapidKey)}}}else if(r.oldVersion===3){const a=o;e={token:a.fcmToken,createTime:a.createTime,subscriptionOptions:{auth:Qe(a.auth),p256dh:Qe(a.p256dh),endpoint:a.endpoint,swScope:a.swScope,vapidKey:Qe(a.vapidKey)}}}else if(r.oldVersion===4){const a=o;e={token:a.fcmToken,createTime:a.createTime,subscriptionOptions:{auth:Qe(a.auth),p256dh:Qe(a.p256dh),endpoint:a.endpoint,swScope:a.swScope,vapidKey:Qe(a.vapidKey)}}}}})).close(),await Ys(Yo),await Ys("fcm_vapid_details_db"),await Ys("undefined"),lv(e)?e:null}function lv(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const hv="firebase-messaging-database",dv=1,Bt="firebase-messaging-store";let Xo=null;function Jo(){return Xo||(Xo=Qs(hv,dv,t=>{switch(t.oldVersion){case 0:t.createObjectStore(Bt)}})),Xo}async function Kh(t){const e=ea(t),r=await(await Jo()).transaction(Bt).objectStore(Bt).get(e);if(r)return r;{const s=await uv(t.appConfig.senderId);if(s)return await Zo(t,s),s}}async function Zo(t,e){const n=ea(t),s=(await Jo()).transaction(Bt,"readwrite");return await s.objectStore(Bt).put(e,n),await s.complete,e}async function fv(t){const e=ea(t),r=(await Jo()).transaction(Bt,"readwrite");await r.objectStore(Bt).delete(e),await r.complete}function ea({appConfig:t}){return t.appId}/**
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
 */const pv={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ce=new vt("messaging","Messaging",pv);/**
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
 */async function gv(t,e){const n=await na(t),r=zh(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(ta(t.appConfig),s)).json()}catch(o){throw ce.create("token-subscribe-failed",{errorInfo:o})}if(i.error){const o=i.error.message;throw ce.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw ce.create("token-subscribe-no-token");return i.token}async function mv(t,e){const n=await na(t),r=zh(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${ta(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw ce.create("token-update-failed",{errorInfo:o})}if(i.error){const o=i.error.message;throw ce.create("token-update-failed",{errorInfo:o})}if(!i.token)throw ce.create("token-update-no-token");return i.token}async function Hh(t,e){const n=await na(t),r={method:"DELETE",headers:n};try{const i=await(await fetch(`${ta(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw ce.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw ce.create("token-unsubscribe-failed",{errorInfo:s})}}function ta({projectId:t}){return`${rv}/projects/${t}/registrations`}async function na({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function zh({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==Bh&&(s.web.applicationPubKey=r),s}/**
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
 */const yv=7*24*60*60*1e3;async function wv(t){const e=await Tv(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Qe(e.getKey("auth")),p256dh:Qe(e.getKey("p256dh"))},r=await Kh(t.firebaseDependencies);if(r){if(Ev(r.subscriptionOptions,n))return Date.now()>=r.createTime+yv?Iv(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Hh(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Gh(t.firebaseDependencies,n)}else return Gh(t.firebaseDependencies,n)}async function vv(t){const e=await Kh(t.firebaseDependencies);e&&(await Hh(t.firebaseDependencies,e.token),await fv(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Iv(t,e){try{const n=await mv(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Zo(t.firebaseDependencies,r),n}catch(n){throw await vv(t),n}}async function Gh(t,e){const r={token:await gv(t,e),createTime:Date.now(),subscriptionOptions:e};return await Zo(t,r),r.token}async function Tv(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:av(e)})}function Ev(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
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
 */function Wh(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return bv(e,t),_v(e,t),Sv(e,t),e}function bv(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s)}function _v(t,e){!e.data||(t.data=e.data)}function Sv(t,e){if(!e.fcmOptions)return;t.fcmOptions={};const n=e.fcmOptions.link;n&&(t.fcmOptions.link=n);const r=e.fcmOptions.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
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
 */function kv(t){return typeof t=="object"&&!!t&&qh in t}/**
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
 */Qh("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Qh("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Qh(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function Av(t){if(!t||!t.options)throw ra("App Configuration Object");if(!t.name)throw ra("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw ra(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ra(t){return ce.create("missing-app-config-values",{valueName:t})}/**
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
 */class Cv{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=Av(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function Rv(t){try{t.swRegistration=await navigator.serviceWorker.register(tv,{scope:nv}),t.swRegistration.update().catch(()=>{})}catch(e){throw ce.create("failed-service-worker-registration",{browserErrorMessage:e.message})}}/**
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
 */async function Nv(t,e){if(!e&&!t.swRegistration&&await Rv(t),!(!e&&!!t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw ce.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function Dv(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=Bh)}/**
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
 */async function Yh(t,e){if(!navigator)throw ce.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ce.create("permission-blocked");return await Dv(t,e==null?void 0:e.vapidKey),await Nv(t,e==null?void 0:e.serviceWorkerRegistration),wv(t)}/**
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
 */async function Ov(t,e,n){const r=Pv(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[qh],message_name:n[sv],message_time:n[iv],message_device_time:Math.floor(Date.now()/1e3)})}function Pv(t){switch(t){case pr.NOTIFICATION_CLICKED:return"notification_open";case pr.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function xv(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===pr.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Wh(n)):t.onMessageHandler.next(Wh(n)));const r=n.data;kv(r)&&r[ov]==="1"&&await Ov(t,n.messageType,r)}const Xh="@firebase/messaging",Jh="0.9.7";/**
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
 */const Lv=t=>{const e=new Cv(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>xv(e,n)),e},Mv=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>Yh(e,r)}};function Uv(){Oe(new Ce("messaging",Lv,"PUBLIC")),Oe(new Ce("messaging-internal",Mv,"PRIVATE")),Te(Xh,Jh),Te(Xh,Jh,"esm2017")}/**
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
 */async function Fv(){return typeof window!="undefined"&&Ca()&&await Ef()&&bf()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Vv(t,e){if(!navigator)throw ce.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function GE(t=kr()){return Fv().then(e=>{if(!e)throw ce.create("unsupported-browser")},e=>{throw ce.create("indexed-db-unsupported")}),Tt(q(t),"messaging").getImmediate()}async function WE(t,e){return t=q(t),Yh(t,e)}function QE(t,e){return t=q(t),Vv(t,e)}Uv();function Zh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bv=Zh,ed=new vt("auth","Firebase",Zh());/**
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
 */const td=new Zs("@firebase/auth");function Ls(t,...e){td.logLevel<=D.ERROR&&td.error(`Auth (${Ht}): ${t}`,...e)}/**
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
 */function Ye(t,...e){throw sa(t,...e)}function Fe(t,...e){return sa(t,...e)}function qv(t,e,n){const r=Object.assign(Object.assign({},Bv()),{[e]:n});return new vt("auth","Firebase",r).create(e,{appName:t.name})}function sa(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ed.create(t,...e)}function A(t,e,...n){if(!t)throw sa(e,...n)}function Xe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ls(e),new Error(e)}function Je(t,e){t||Xe(e)}/**
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
 */const nd=new Map;function Ze(t){Je(t instanceof Function,"Expected a class definition");let e=nd.get(t);return e?(Je(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nd.set(t,e),e)}/**
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
 */function $v(t,e){const n=Tt(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(br(i,e!=null?e:{}))return s;Ye(s,"already-initialized")}return n.initialize({options:e})}function jv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ze);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ia(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Kv(){return rd()==="http:"||rd()==="https:"}function rd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Hv(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kv()||Sa()||"connection"in navigator)?navigator.onLine:!0}function zv(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Je(n>e,"Short delay should be less than long delay!"),this.isMobile=_a()||ka()}get(){return Hv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function oa(t,e){Je(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sd{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Gv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Wv=new gr(3e4,6e4);function Qv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ms(t,e,n,r,s={}){return id(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Rn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),sd.fetch()(od(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function id(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Gv),e);try{const s=new Xv(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw aa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw aa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw aa(t,"email-already-in-use",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qv(t,l,u);Ye(t,l)}}catch(s){if(s instanceof $e)throw s;Ye(t,"network-request-failed")}}async function Yv(t,e,n,r,s={}){const i=await Ms(t,e,n,r,s);return"mfaPendingCredential"in i&&Ye(t,"multi-factor-auth-required",{_serverResponse:i}),i}function od(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?oa(t.config,s):`${t.config.apiScheme}://${s}`}class Xv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fe(this.auth,"network-request-failed")),Wv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Fe(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Jv(t,e){return Ms(t,"POST","/v1/accounts:delete",e)}async function Zv(t,e){return Ms(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function mr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eI(t,e=!1){const n=q(t),r=await n.getIdToken(e),s=ua(r);A(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:mr(ca(s.auth_time)),issuedAtTime:mr(ca(s.iat)),expirationTime:mr(ca(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ca(t){return Number(t)*1e3}function ua(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ls("JWT malformed, contained fewer than 3 sections"),null;try{const s=mf(n);return s?JSON.parse(s):(Ls("Failed to decode base64 JWT payload"),null)}catch(s){return Ls("Caught error parsing JWT payload as JSON",s),null}}function tI(t){const e=ua(t);return A(e,"internal-error"),A(typeof e.exp!="undefined","internal-error"),A(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $e&&nI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ad{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mr(this.lastLoginAt),this.creationTime=mr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Us(t){var e;const n=t.auth,r=await t.getIdToken(),s=await yr(t,Zv(n,{idToken:r}));A(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?oI(i.providerUserInfo):[],a=iI(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ad(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function sI(t){const e=q(t);await Us(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function oI(t){return t.map(e=>{var{providerId:n}=e,r=Xs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function aI(t,e){const n=await id(t,{},async()=>{const r=Rn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=od(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sd.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken!="undefined","internal-error"),A(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):tI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await aI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new wr;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(A(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(A(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wr,this.toJSON())}_performRefresh(){return Xe("not implemented")}}/**
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
 */function dt(t,e){A(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class qt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Xs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new rI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new ad(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await yr(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eI(this,e)}reload(){return sI(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Us(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yr(this,Jv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:H,emailVerified:F,isAnonymous:De,providerData:qe,stsTokenManager:wt}=n;A(H&&wt,e,"internal-error");const Cn=wr.fromJSON(this.name,wt);A(typeof H=="string",e,"internal-error"),dt(h,e.name),dt(d,e.name),A(typeof F=="boolean",e,"internal-error"),A(typeof De=="boolean",e,"internal-error"),dt(p,e.name),dt(m,e.name),dt(b,e.name),dt(E,e.name),dt(O,e.name),dt(U,e.name);const Ws=new qt({uid:H,auth:e,email:d,emailVerified:F,displayName:h,isAnonymous:De,photoURL:m,phoneNumber:p,tenantId:b,stsTokenManager:Cn,createdAt:O,lastLoginAt:U});return qe&&Array.isArray(qe)&&(Ws.providerData=qe.map(df=>Object.assign({},df))),E&&(Ws._redirectEventId=E),Ws}static async _fromIdTokenResponse(e,n,r=!1){const s=new wr;s.updateFromServerResponse(n);const i=new qt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Us(i),i}}/**
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
 */class cd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cd.type="NONE";const ud=cd;/**
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
 */function Fs(t,e,n){return`firebase:${t}:${e}:${n}`}class _n{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fs(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fs("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _n(Ze(ud),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ze(ud);const o=Fs(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=qt._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _n(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new _n(i,e,r))}}/**
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
 */function ld(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gd(e))return"Blackberry";if(md(e))return"Webos";if(la(e))return"Safari";if((e.includes("chrome/")||dd(e))&&!e.includes("edge/"))return"Chrome";if(pd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hd(t=B()){return/firefox\//i.test(t)}function la(t=B()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dd(t=B()){return/crios\//i.test(t)}function fd(t=B()){return/iemobile/i.test(t)}function pd(t=B()){return/android/i.test(t)}function gd(t=B()){return/blackberry/i.test(t)}function md(t=B()){return/webos/i.test(t)}function Vs(t=B()){return/iphone|ipad|ipod/i.test(t)}function cI(t=B()){var e;return Vs(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function uI(){return Aa()&&document.documentMode===10}function yd(t=B()){return Vs(t)||pd(t)||md(t)||gd(t)||/windows phone/i.test(t)||fd(t)}function lI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function wd(t,e=[]){let n;switch(t){case"Browser":n=ld(B());break;case"Worker":n=`${ld(B())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ht}/${r}`}/**
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
 */class hI{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Id(this),this.idTokenSubscription=new Id(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ed,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ze(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Us(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?q(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ze(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ze(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[Ze(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function vd(t){return q(t)}class Id{constructor(e){this.auth=e,this.observer=null,this.addObserver=Cf(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Td{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xe("not implemented")}_getIdTokenResponse(e){return Xe("not implemented")}_linkToIdToken(e,n){return Xe("not implemented")}_getReauthenticationResolver(e){return Xe("not implemented")}}/**
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
 */async function Sn(t,e){return Yv(t,"POST","/v1/accounts:signInWithIdp",Qv(t,e))}/**
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
 */const dI="http://localhost";class $t extends Td{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Xs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $t(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Sn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Sn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Sn(e,n)}buildRequest(){const e={requestUri:dI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rn(n)}return e}}/**
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
 */class Ed{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vr extends Ed{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ft extends vr{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";ft.PROVIDER_ID="facebook.com";/**
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
 */class pt extends vr{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return $t._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pt.credential(n,r)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
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
 */class gt extends vr{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
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
 */class mt extends vr{constructor(){super("twitter.com")}static credential(e,n){return $t._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
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
 */class kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await qt._fromIdTokenResponse(e,r,s),o=bd(r);return new kn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=bd(r);return new kn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function bd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Bs extends $e{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,Bs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Bs(e,n,r,s)}}function _d(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bs._fromErrorAndOperation(t,i,e,r):i})}async function fI(t,e,n=!1){const r=await yr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kn._forOperation(t,"link",r)}/**
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
 */async function pI(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await yr(t,_d(r,s,e,t),n);A(i.idToken,r,"internal-error");const o=ua(i.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(t.uid===a,r,"user-mismatch"),kn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),i}}/**
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
 */async function gI(t,e,n=!1){const r="signIn",s=await _d(t,r,e),i=await kn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}const qs="__sak";/**
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
 */class Sd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qs,"1"),this.storage.removeItem(qs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function mI(){const t=B();return la(t)||Vs(t)}const yI=1e3,wI=10;class kd extends Sd{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mI()&&lI(),this.fallbackToPolling=yd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,wI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kd.type="LOCAL";const vI=kd;/**
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
 */class Ad extends Sd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ad.type="SESSION";const Cd=Ad;/**
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
 */function II(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $s{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $s(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await II(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$s.receivers=[];/**
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
 */function ha(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class TI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=ha("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ve(){return window}function EI(t){Ve().location.href=t}/**
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
 */function Rd(){return typeof Ve().WorkerGlobalScope!="undefined"&&typeof Ve().importScripts=="function"}async function bI(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _I(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function SI(){return Rd()?self:null}/**
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
 */const Nd="firebaseLocalStorageDb",kI=1,js="firebaseLocalStorage",Dd="fbase_key";class Ir{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ks(t,e){return t.transaction([js],e?"readwrite":"readonly").objectStore(js)}function AI(){const t=indexedDB.deleteDatabase(Nd);return new Ir(t).toPromise()}function da(){const t=indexedDB.open(Nd,kI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(js,{keyPath:Dd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(js)?e(r):(r.close(),await AI(),e(await da()))})})}async function Od(t,e,n){const r=Ks(t,!0).put({[Dd]:e,value:n});return new Ir(r).toPromise()}async function CI(t,e){const n=Ks(t,!1).get(e),r=await new Ir(n).toPromise();return r===void 0?null:r.value}function Pd(t,e){const n=Ks(t,!0).delete(e);return new Ir(n).toPromise()}const RI=800,NI=3;class xd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await da(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$s._getInstance(SI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bI(),!this.activeServiceWorker)return;this.sender=new TI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_I()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await da();return await Od(e,qs,"1"),await Pd(e,qs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Od(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>CI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ks(s,!1).getAll();return new Ir(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xd.type="LOCAL";const DI=xd;/**
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
 */function OI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function PI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Fe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",OI().appendChild(r)})}function xI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new gr(3e4,6e4);/**
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
 */function LI(t,e){return e?Ze(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fa extends Td{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Sn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Sn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function MI(t){return gI(t.auth,new fa(t),t.bypassAuthState)}function UI(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),pI(n,new fa(t),t.bypassAuthState)}async function FI(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),fI(n,new fa(t),t.bypassAuthState)}/**
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
 */class Ld{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MI;case"linkViaPopup":case"linkViaRedirect":return FI;case"reauthViaPopup":case"reauthViaRedirect":return UI;default:Ye(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const VI=new gr(2e3,1e4);class An extends Ld{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=ha();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,VI.get())};e()}}An.currentPopupAction=null;/**
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
 */const BI="pendingRedirect",pa=new Map;class qI extends Ld{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=pa.get(this.auth._key());if(!e){try{const r=await $I(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pa.set(this.auth._key(),e)}return this.bypassAuthState||pa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $I(t,e){const n=KI(e),r=jI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function jI(t){return Ze(t._redirectPersistence)}function KI(t){return Fs(BI,t.config.apiKey,t.name)}async function HI(t,e,n=!1){const r=vd(t),s=LI(r,e),o=await new qI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const zI=10*60*1e3;class GI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ud(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Md(e))}saveEventToCache(e){this.cachedEventUids.add(Md(e)),this.lastProcessedEventTime=Date.now()}}function Md(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ud({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ud(t);default:return!1}}/**
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
 */async function QI(t,e={}){return Ms(t,"GET","/v1/projects",e)}/**
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
 */const YI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XI=/^https?/;async function JI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QI(t);for(const n of e)try{if(ZI(n))return}catch{}Ye(t,"unauthorized-domain")}function ZI(t){const e=ia(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XI.test(n))return!1;if(YI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const eT=new gr(3e4,6e4);function Fd(){const t=Ve().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tT(t){return new Promise((e,n)=>{var r,s,i;function o(){Fd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fd(),n(Fe(t,"network-request-failed"))},timeout:eT.get()})}if((s=(r=Ve().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((i=Ve().gapi)===null||i===void 0?void 0:i.load)o();else{const a=xI("iframefcb");return Ve()[a]=()=>{gapi.load?o():n(Fe(t,"network-request-failed"))},PI(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Hs=null,e})}let Hs=null;function nT(t){return Hs=Hs||tT(t),Hs}/**
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
 */const rT=new gr(5e3,15e3),sT="__/auth/iframe",iT="emulator/auth/iframe",oT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cT(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?oa(e,iT):`https://${t.config.authDomain}/${sT}`,r={apiKey:e.apiKey,appName:t.name,v:Ht},s=aT.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Rn(r).slice(1)}`}async function uT(t){const e=await nT(t),n=Ve().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:cT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Fe(t,"network-request-failed"),a=Ve().setTimeout(()=>{i(o)},rT.get());function c(){Ve().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const lT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hT=500,dT=600,fT="_blank",pT="http://localhost";class Vd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gT(t,e,n,r=hT,s=dT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},lT),{width:r.toString(),height:s.toString(),top:i,left:o}),u=B().toLowerCase();n&&(a=dd(u)?fT:n),hd(u)&&(e=e||pT,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(cI(u)&&a!=="_self")return mT(e||"",a),new Vd(null);const h=window.open(e||"",a,l);A(h,t,"popup-blocked");try{h.focus()}catch{}return new Vd(h)}function mT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yT="__/auth/handler",wT="emulator/auth/handler";function Bd(t,e,n,r,s,i){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ht,eventId:s};if(e instanceof Ed){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Af(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof vr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${vT(t)}?${Rn(a).slice(1)}`}function vT({config:t}){return t.emulator?oa(t,wT):`https://${t.authDomain}/${yT}`}/**
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
 */const ga="webStorageSupport";class IT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cd,this._completeRedirectFn=HI}async _openPopup(e,n,r,s){var i;Je((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Bd(e,n,r,ia(),s);return gT(e,o,ha())}async _openRedirect(e,n,r,s){return await this._originValidation(e),EI(Bd(e,n,r,ia(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Je(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uT(e),r=new GI(e);return n.register("authEvent",s=>(A(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ga,{type:ga},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ga];o!==void 0&&n(!!o),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yd()||la()||Vs()}}const TT=IT;var qd="@firebase/auth",$d="0.19.6";/**
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
 */class ET{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _T(t){Oe(new Ce("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{A(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),A(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wd(t)},c=new hI(o,a);return jv(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Oe(new Ce("auth-internal",e=>{const n=vd(e.getProvider("auth").getImmediate());return(r=>new ET(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Te(qd,$d,bT(t)),Te(qd,$d,"esm2017")}/**
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
 */function YE(t=kr()){const e=Tt(t,"auth");return e.isInitialized()?e.getImmediate():$v(t,{popupRedirectResolver:TT,persistence:[DI,vI,Cd]})}_T("Browser");/**
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
 */const jd="firebasestorage.googleapis.com",Kd="storageBucket",ST=2*60*1e3,kT=10*60*1e3;/**
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
 */class K extends $e{constructor(e,n){super(ma(e),`Firebase Storage: ${n} (${ma(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,K.prototype)}_codeEquals(e){return ma(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ma(t){return"storage/"+t}function ya(){const t="An unknown error occurred, please check the error payload for server response.";return new K("unknown",t)}function AT(t){return new K("object-not-found","Object '"+t+"' does not exist.")}function CT(t){return new K("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function RT(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new K("unauthenticated",t)}function NT(){return new K("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function DT(t){return new K("unauthorized","User does not have permission to access '"+t+"'.")}function OT(){return new K("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function PT(){return new K("canceled","User canceled the upload/download.")}function xT(t){return new K("invalid-url","Invalid URL '"+t+"'.")}function LT(t){return new K("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function MT(){return new K("no-default-bucket","No default bucket found. Did you set the '"+Kd+"' property when initializing the app?")}function UT(){return new K("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function FT(){return new K("no-download-url","The given file does not have any download URLs.")}function wa(t){return new K("invalid-argument",t)}function Hd(){return new K("app-deleted","The Firebase app was deleted.")}function VT(t){return new K("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Tr(t,e){return new K("invalid-format","String does not match format '"+t+"': "+e)}function Er(t){throw new K("internal-error","Internal error: "+t)}/**
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
 */class ke{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ke.makeFromUrl(e,n)}catch{return new ke(e,"")}if(r.path==="")return r;throw LT(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(F){F.path_=decodeURIComponent(F.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${s}/o${d}`,"i"),m={bucket:1,path:3},b=n===jd?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",O=new RegExp(`^https?://${b}/${s}/${E}`,"i"),H=[{regex:a,indices:c,postModify:i},{regex:p,indices:m,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let F=0;F<H.length;F++){const De=H[F],qe=De.regex.exec(e);if(qe){const wt=qe[De.indices.bucket];let Cn=qe[De.indices.path];Cn||(Cn=""),r=new ke(wt,Cn),De.postModify(r);break}}if(r==null)throw xT(e);return r}}class BT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function qT(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...E){u||(u=!0,e.apply(null,E))}function h(E){s=setTimeout(()=>{s=null,t(p,c())},E)}function d(){i&&clearTimeout(i)}function p(E,...O){if(u){d();return}if(E){d(),l.call(null,E,...O);return}if(c()||o){d(),l.call(null,E,...O);return}r<64&&(r*=2);let H;a===1?(a=2,H=0):H=(r+Math.random())*1e3,h(H)}let m=!1;function b(E){m||(m=!0,d(),!u&&(s!==null?(E||(a=2),clearTimeout(s),h(0)):E||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function $T(t){t(!1)}/**
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
 */function jT(t){return t!==void 0}function KT(t){return typeof t=="object"&&!Array.isArray(t)}function va(t){return typeof t=="string"||t instanceof String}function zd(t){return Ia()&&t instanceof Blob}function Ia(){return typeof Blob!="undefined"}function Gd(t,e,n,r){if(r<e)throw wa(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw wa(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ta(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Wd(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var jt;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(jt||(jt={}));/**
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
 */class HT{constructor(e,n,r,s,i,o,a,c,u,l,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new zs(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===jt.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const l=i.getErrorCode()===jt.ABORT;r(!1,new zs(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new zs(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());jT(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=ya();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Hd():PT();o(c)}else{const c=OT();o(c)}};this.canceled_?n(!1,new zs(!1,null,!0)):this.backoffId_=qT(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$T(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||i}}class zs{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function zT(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function GT(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function WT(t,e){e&&(t["X-Firebase-GMPID"]=e)}function QT(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function YT(t,e,n,r,s,i){const o=Wd(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return WT(c,e),zT(c,n),GT(c,i),QT(c,r),new HT(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
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
 */function XT(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function JT(...t){const e=XT();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ia())return new Blob(t);throw new K("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function ZT(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function eE(t){return atob(t)}/**
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
 */const Be={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ea{constructor(e,n){this.data=e,this.contentType=n||null}}function tE(t,e){switch(t){case Be.RAW:return new Ea(Qd(e));case Be.BASE64:case Be.BASE64URL:return new Ea(Yd(t,e));case Be.DATA_URL:return new Ea(rE(e),sE(e))}throw ya()}function Qd(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)==56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function nE(t){let e;try{e=decodeURIComponent(t)}catch{throw Tr(Be.DATA_URL,"Malformed data URL.")}return Qd(e)}function Yd(t,e){switch(t){case Be.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Tr(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Be.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Tr(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=eE(e)}catch{throw Tr(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Xd{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Tr(Be.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=iE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}}function rE(t){const e=new Xd(t);return e.base64?Yd(Be.BASE64,e.rest):nE(e.rest)}function sE(t){return new Xd(t).contentType}function iE(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class yt{constructor(e,n){let r=0,s="";zd(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(zd(this.data_)){const r=this.data_,s=ZT(r,e,n);return s===null?null:new yt(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new yt(r,!0)}}static getBlob(...e){if(Ia()){const n=e.map(r=>r instanceof yt?r.data_:r);return new yt(JT.apply(null,n))}else{const n=e.map(o=>va(o)?tE(Be.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new yt(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Jd(t){let e;try{e=JSON.parse(t)}catch{return null}return KT(e)?e:null}/**
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
 */function oE(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function aE(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Zd(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function cE(t,e){return e}class pe{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||cE}}let Gs=null;function uE(t){return!va(t)||t.length<2?t:Zd(t)}function ef(){if(Gs)return Gs;const t=[];t.push(new pe("bucket")),t.push(new pe("generation")),t.push(new pe("metageneration")),t.push(new pe("name","fullPath",!0));function e(i,o){return uE(o)}const n=new pe("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new pe("size");return s.xform=r,t.push(s),t.push(new pe("timeCreated")),t.push(new pe("updated")),t.push(new pe("md5Hash",null,!0)),t.push(new pe("cacheControl",null,!0)),t.push(new pe("contentDisposition",null,!0)),t.push(new pe("contentEncoding",null,!0)),t.push(new pe("contentLanguage",null,!0)),t.push(new pe("contentType",null,!0)),t.push(new pe("metadata","customMetadata",!0)),Gs=t,Gs}function lE(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new ke(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function hE(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return lE(r,t),r}function tf(t,e,n){const r=Jd(e);return r===null?null:hE(t,r,n)}function dE(t,e,n,r){const s=Jd(e);if(s===null||!va(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),p=Ta(d,n,r),m=Wd({alt:"media",token:u});return p+m})[0]}function fE(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class nf{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function rf(t){if(!t)throw ya()}function pE(t,e){function n(r,s){const i=tf(t,s,e);return rf(i!==null),i}return n}function gE(t,e){function n(r,s){const i=tf(t,s,e);return rf(i!==null),dE(i,s,t.host,t._protocol)}return n}function sf(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=NT():s=RT():n.getStatus()===402?s=CT(t.bucket):n.getStatus()===403?s=DT(t.path):s=r,s.serverResponse=r.serverResponse,s}return e}function mE(t){const e=sf(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=AT(t.path)),i.serverResponse=s.serverResponse,i}return n}function yE(t,e,n){const r=e.fullServerUrl(),s=Ta(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new nf(s,i,gE(t,n),o);return a.errorHandler=mE(e),a}function wE(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function vE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=wE(null,e)),r}function IE(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let H="";for(let F=0;F<2;F++)H=H+Math.random().toString().slice(2);return H}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=vE(e,r,s),l=fE(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=yt.getBlob(h,r,d);if(p===null)throw UT();const m={name:u.fullPath},b=Ta(i,t.host,t._protocol),E="POST",O=t.maxUploadRetryTime,U=new nf(b,E,pE(t,n),O);return U.urlParams=m,U.headers=o,U.body=p.uploadData(),U.errorHandler=sf(e),U}class TE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=jt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=jt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=jt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Er("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Er("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Er("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Er("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Er("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class EE extends TE{initXhr(){this.xhr_.responseType="text"}}function of(){return new EE}/**
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
 */class Kt{constructor(e,n){this._service=e,n instanceof ke?this._location=n:this._location=ke.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Kt(e,n)}get root(){const e=new ke(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zd(this._location.path)}get storage(){return this._service}get parent(){const e=oE(this._location.path);if(e===null)return null;const n=new ke(this._location.bucket,e);return new Kt(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw VT(e)}}function bE(t,e,n){t._throwIfRoot("uploadBytes");const r=IE(t.storage,t._location,ef(),new yt(e,!0),n);return t.storage.makeRequestWithTokens(r,of).then(s=>({metadata:s,ref:t}))}function _E(t){t._throwIfRoot("getDownloadURL");const e=yE(t.storage,t._location,ef());return t.storage.makeRequestWithTokens(e,of).then(n=>{if(n===null)throw FT();return n})}function SE(t,e){const n=aE(t._location.path,e),r=new ke(t._location.bucket,n);return new Kt(t.storage,r)}/**
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
 */function kE(t){return/^[A-Za-z]+:\/\//.test(t)}function AE(t,e){return new Kt(t,e)}function af(t,e){if(t instanceof ba){const n=t;if(n._bucket==null)throw MT();const r=new Kt(n,n._bucket);return e!=null?af(r,e):r}else return e!==void 0?SE(t,e):t}function CE(t,e){if(e&&kE(e)){if(t instanceof ba)return AE(t,e);throw wa("To use ref(service, url), the first argument must be a Storage instance.")}else return af(t,e)}function cf(t,e){const n=e==null?void 0:e[Kd];return n==null?null:ke.makeFromBucketSpec(n,t)}class ba{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=jd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ST,this._maxUploadRetryTime=kT,this._requests=new Set,s!=null?this._bucket=ke.makeFromBucketSpec(s,this._host):this._bucket=cf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ke.makeFromBucketSpec(this._url,e):this._bucket=cf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Gd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Gd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Kt(this,e)}_makeRequest(e,n,r,s){if(this._deleted)return new BT(Hd());{const i=YT(e,this._appId,r,s,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const uf="@firebase/storage",lf="0.9.1";/**
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
 */const hf="storage";function XE(t,e,n){return t=q(t),bE(t,e,n)}function JE(t){return t=q(t),_E(t)}function ZE(t,e){return t=q(t),CE(t,e)}function eb(t=kr(),e){return t=q(t),Tt(t,hf).getImmediate({identifier:e})}function RE(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new ba(n,r,s,e,Ht)}function NE(){Oe(new Ce(hf,RE,"PUBLIC").setMultipleInstances(!0)),Te(uf,lf,""),Te(uf,lf,"esm2017")}NE();export{LE as B,Yy as C,KE as E,BE as H,HE as I,ME as K,xE as S,jE as T,VE as W,qE as _,eb as a,GE as b,WE as c,ZE as d,JE as e,zE as f,YE as g,PE as i,FE as j,QE as o,$E as p,UE as q,Te as r,XE as u};
