var Tc=Object.defineProperty,Ic=Object.defineProperties;var Sc=Object.getOwnPropertyDescriptors;var Zi=Object.getOwnPropertySymbols;var Cc=Object.prototype.hasOwnProperty,Ac=Object.prototype.propertyIsEnumerable;var tr=(e,t,n)=>t in e?Tc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,os=(e,t)=>{for(var n in t||(t={}))Cc.call(t,n)&&tr(e,n,t[n]);if(Zi)for(var n of Zi(t))Ac.call(t,n)&&tr(e,n,t[n]);return e},as=(e,t)=>Ic(e,Sc(t));import{S as bc,i as _c,s as Dc,e as ct,k as kt,t as Ee,c as ut,a as lt,d as Y,m as Rt,h as Te,b as ft,N as Gt,g as fn,H as V,O as Nc,j as er,n as nr,P as kc,w as Rc}from"../chunks/index-6ab01601.js";const Mc={apiKey:"AIzaSyD1IKn9zzXO6ix2HCN4XQLT_Ql0_TK58CY",authDomain:"fervo-0.firebaseapp.com",projectId:"fervo-0",storageBucket:"fervo-0.appspot.com",messagingSenderId:"499027602939",appId:"1:499027602939:web:4c1ba998cffb71cfe32f5e"};/**
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
 */const ao=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Lc=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,h=r>>2,l=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[h],n[l],n[d],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ao(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Lc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||u==null||l==null)throw Error();const d=r<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),l!==64){const y=u<<6&192|l;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Oc=function(e){const t=ao(e);return xc.encodeByteArray(t,!0)},co=function(e){return Oc(e).replace(/\./g,"")};/**
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
 */class Pc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Mn(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mn())}function Fc(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Bc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uc(){return Mn().indexOf("Electron/")>=0}function $c(){const e=Mn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function jc(){return Mn().indexOf("MSAppHost/")>=0}function qc(){return typeof indexedDB=="object"}function Kc(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
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
 */const Hc="FirebaseError";class Ln extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Hc,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uo.prototype.create)}}class uo{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?zc(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ln(i,a,s)}}function zc(e,t){return e.replace(Gc,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Gc=/\{\$([^}]+)}/g;function Cs(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(sr(r)&&sr(o)){if(!Cs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function sr(e){return e!==null&&typeof e=="object"}/**
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
 */function yt(e){return e&&e._delegate?e._delegate:e}class Ae{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Nt="[DEFAULT]";/**
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
 */class Wc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Pc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yc(t))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=Nt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Nt){return this.instances.has(t)}getOptions(t=Nt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Xc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Nt){return this.component?this.component.multipleInstances?t:Nt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xc(e){return e===Nt?void 0:e}function Yc(e){return e.instantiationMode==="EAGER"}/**
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
 */class Qc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Wc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var N;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(N||(N={}));const Jc={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Zc=N.INFO,tu={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},eu=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=tu[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ho{constructor(t){this.name=t,this._logLevel=Zc,this._logHandler=eu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Jc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}const nu=(e,t)=>t.some(n=>e instanceof n);let ir,rr;function su(){return ir||(ir=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iu(){return rr||(rr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lo=new WeakMap,As=new WeakMap,fo=new WeakMap,cs=new WeakMap,Zs=new WeakMap;function ru(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(Et(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&lo.set(n,e)}).catch(()=>{}),Zs.set(t,e),t}function ou(e){if(As.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});As.set(e,t)}let bs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return As.get(e);if(t==="objectStoreNames")return e.objectStoreNames||fo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function au(e){bs=e(bs)}function cu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(us(this),t,...n);return fo.set(s,t.sort?t.sort():[t]),Et(s)}:iu().includes(e)?function(...t){return e.apply(us(this),t),Et(lo.get(this))}:function(...t){return Et(e.apply(us(this),t))}}function uu(e){return typeof e=="function"?cu(e):(e instanceof IDBTransaction&&ou(e),nu(e,su())?new Proxy(e,bs):e)}function Et(e){if(e instanceof IDBRequest)return ru(e);if(cs.has(e))return cs.get(e);const t=uu(e);return t!==e&&(cs.set(e,t),Zs.set(t,e)),t}const us=e=>Zs.get(e);function hu(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=Et(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Et(o.result),c.oldVersion,c.newVersion,Et(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const lu=["get","getKey","getAll","getAllKeys","count"],du=["put","add","delete","clear"],hs=new Map;function or(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(hs.get(t))return hs.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=du.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||lu.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return hs.set(t,r),r}au(e=>as(os({},e),{get:(t,n,s)=>or(t,n)||e.get(t,n,s),has:(t,n)=>!!or(t,n)||e.has(t,n)}));/**
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
 */class fu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pu(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function pu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const _s="@firebase/app",ar="0.7.24";/**
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
 */const ti=new ho("@firebase/app"),gu="@firebase/app-compat",mu="@firebase/analytics-compat",yu="@firebase/analytics",vu="@firebase/app-check-compat",wu="@firebase/app-check",Eu="@firebase/auth",Tu="@firebase/auth-compat",Iu="@firebase/database",Su="@firebase/database-compat",Cu="@firebase/functions",Au="@firebase/functions-compat",bu="@firebase/installations",_u="@firebase/installations-compat",Du="@firebase/messaging",Nu="@firebase/messaging-compat",ku="@firebase/performance",Ru="@firebase/performance-compat",Mu="@firebase/remote-config",Lu="@firebase/remote-config-compat",xu="@firebase/storage",Ou="@firebase/storage-compat",Pu="@firebase/firestore",Vu="@firebase/firestore-compat",Fu="firebase",Bu="9.8.1";/**
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
 */const po="[DEFAULT]",Uu={[_s]:"fire-core",[gu]:"fire-core-compat",[yu]:"fire-analytics",[mu]:"fire-analytics-compat",[wu]:"fire-app-check",[vu]:"fire-app-check-compat",[Eu]:"fire-auth",[Tu]:"fire-auth-compat",[Iu]:"fire-rtdb",[Su]:"fire-rtdb-compat",[Cu]:"fire-fn",[Au]:"fire-fn-compat",[bu]:"fire-iid",[_u]:"fire-iid-compat",[Du]:"fire-fcm",[Nu]:"fire-fcm-compat",[ku]:"fire-perf",[Ru]:"fire-perf-compat",[Mu]:"fire-rc",[Lu]:"fire-rc-compat",[xu]:"fire-gcs",[Ou]:"fire-gcs-compat",[Pu]:"fire-fst",[Vu]:"fire-fst-compat","fire-js":"fire-js",[Fu]:"fire-js-all"};/**
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
 */const pn=new Map,Ds=new Map;function $u(e,t){try{e.container.addComponent(t)}catch(n){ti.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function gn(e){const t=e.name;if(Ds.has(t))return ti.debug(`There were multiple attempts to register component ${t}.`),!1;Ds.set(t,e);for(const n of pn.values())$u(n,e);return!0}function ju(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const qu={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Pt=new uo("app","Firebase",qu);/**
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
 */class Ku{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ae("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
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
 */const Hu=Bu;function zu(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:po,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Pt.create("bad-app-name",{appName:String(s)});const i=pn.get(s);if(i){if(Cs(e,i.options)&&Cs(n,i.config))return i;throw Pt.create("duplicate-app",{appName:s})}const r=new Qc(s);for(const a of Ds.values())r.addComponent(a);const o=new Ku(e,n,r);return pn.set(s,o),o}function Gu(e=po){const t=pn.get(e);if(!t)throw Pt.create("no-app",{appName:e});return t}function Qt(e,t,n){var s;let i=(s=Uu[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ti.warn(a.join(" "));return}gn(new Ae(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Wu="firebase-heartbeat-database",Xu=1,be="firebase-heartbeat-store";let ls=null;function go(){return ls||(ls=hu(Wu,Xu,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(be)}}}).catch(e=>{throw Pt.create("storage-open",{originalErrorMessage:e.message})})),ls}async function Yu(e){try{return(await go()).transaction(be).objectStore(be).get(mo(e))}catch(t){throw Pt.create("storage-get",{originalErrorMessage:t.message})}}async function cr(e,t){try{const s=(await go()).transaction(be,"readwrite");return await s.objectStore(be).put(t,mo(e)),s.done}catch(n){throw Pt.create("storage-set",{originalErrorMessage:n.message})}}function mo(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Qu=1024,Ju=30*24*60*60*1e3;class Zu{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ur();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Ju}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ur(),{heartbeatsToSend:n,unsentEntries:s}=th(this._heartbeatsCache.heartbeats),i=co(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ur(){return new Date().toISOString().substring(0,10)}function th(e,t=Qu){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),hr(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hr(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class eh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qc()?Kc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function hr(e){return co(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function nh(e){gn(new Ae("platform-logger",t=>new fu(t),"PRIVATE")),gn(new Ae("heartbeat",t=>new Zu(t),"PRIVATE")),Qt(_s,ar,e),Qt(_s,ar,"esm2017"),Qt("fire-js","")}nh("");var sh="firebase",ih="9.8.1";/**
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
 */Qt(sh,ih,"app");var rh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},m,ei=ei||{},I=rh||self;function mn(){}function Ns(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Be(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function oh(e){return Object.prototype.hasOwnProperty.call(e,ds)&&e[ds]||(e[ds]=++ah)}var ds="closure_uid_"+(1e9*Math.random()>>>0),ah=0;function ch(e,t,n){return e.call.apply(e.bind,arguments)}function uh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function H(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?H=ch:H=uh,H.apply(null,arguments)}function nn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function X(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function bt(){this.s=this.s,this.o=this.o}var hh=0;bt.prototype.s=!1;bt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),hh!=0)&&oh(this)};bt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},vo=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function lh(e){t:{var t=nl;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function lr(e){return Array.prototype.concat.apply([],arguments)}function ni(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function yn(e){return/^[\s\xa0]*$/.test(e)}var dr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function tt(e,t){return e.indexOf(t)!=-1}function fs(e,t){return e<t?-1:e>t?1:0}var et;t:{var fr=I.navigator;if(fr){var pr=fr.userAgent;if(pr){et=pr;break t}}et=""}function si(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function wo(e){const t={};for(const n in e)t[n]=e[n];return t}var gr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Eo(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<gr.length;r++)n=gr[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function ii(e){return ii[" "](e),e}ii[" "]=mn;function dh(e){var t=gh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var fh=tt(et,"Opera"),ne=tt(et,"Trident")||tt(et,"MSIE"),To=tt(et,"Edge"),ks=To||ne,Io=tt(et,"Gecko")&&!(tt(et.toLowerCase(),"webkit")&&!tt(et,"Edge"))&&!(tt(et,"Trident")||tt(et,"MSIE"))&&!tt(et,"Edge"),ph=tt(et.toLowerCase(),"webkit")&&!tt(et,"Edge");function So(){var e=I.document;return e?e.documentMode:void 0}var vn;t:{var ps="",gs=function(){var e=et;if(Io)return/rv:([^\);]+)(\)|;)/.exec(e);if(To)return/Edge\/([\d\.]+)/.exec(e);if(ne)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(ph)return/WebKit\/(\S+)/.exec(e);if(fh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(gs&&(ps=gs?gs[1]:""),ne){var ms=So();if(ms!=null&&ms>parseFloat(ps)){vn=String(ms);break t}}vn=ps}var gh={};function mh(){return dh(function(){let e=0;const t=dr(String(vn)).split("."),n=dr("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=fs(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||fs(i[2].length==0,r[2].length==0)||fs(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Rs;if(I.document&&ne){var mr=So();Rs=mr||parseInt(vn,10)||void 0}else Rs=void 0;var yh=Rs,vh=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{I.addEventListener("test",mn,t),I.removeEventListener("test",mn,t)}catch{}return e}();function J(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};function _e(e,t){if(J.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Io){t:{try{ii(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:wh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&_e.Z.h.call(this)}}X(_e,J);var wh={2:"touch",3:"pen",4:"mouse"};_e.prototype.h=function(){_e.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),Eh=0;function Th(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++Eh,this.ca=this.fa=!1}function xn(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function On(e){this.src=e,this.g={},this.h=0}On.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Ls(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Th(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function Ms(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=yo(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(xn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ls(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var ri="closure_lm_"+(1e6*Math.random()|0),ys={};function Co(e,t,n,s,i){if(s&&s.once)return bo(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Co(e,t[r],n,s,i);return null}return n=ci(n),e&&e[Ue]?e.N(t,n,Be(s)?!!s.capture:!!s,i):Ao(e,t,n,!1,s,i)}function Ao(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Be(i)?!!i.capture:!!i,a=ai(e);if(a||(e[ri]=a=new On(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Ih(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)vh||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Do(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ih(){function e(n){return t.call(e.src,e.listener,n)}var t=Sh;return e}function bo(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)bo(e,t[r],n,s,i);return null}return n=ci(n),e&&e[Ue]?e.O(t,n,Be(s)?!!s.capture:!!s,i):Ao(e,t,n,!0,s,i)}function _o(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)_o(e,t[r],n,s,i);else s=Be(s)?!!s.capture:!!s,n=ci(n),e&&e[Ue]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Ls(r,n,s,i),-1<n&&(xn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=ai(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ls(t,n,s,i)),(n=-1<e?t[e]:null)&&oi(n))}function oi(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Ue])Ms(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Do(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ai(t))?(Ms(n,e),n.h==0&&(n.src=null,t[ri]=null)):xn(e)}}}function Do(e){return e in ys?ys[e]:ys[e]="on"+e}function Sh(e,t){if(e.ca)e=!0;else{t=new _e(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&oi(e),e=n.call(s,t)}return e}function ai(e){return e=e[ri],e instanceof On?e:null}var vs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ci(e){return typeof e=="function"?e:(e[vs]||(e[vs]=function(t){return e.handleEvent(t)}),e[vs])}function j(){bt.call(this),this.i=new On(this),this.P=this,this.I=null}X(j,bt);j.prototype[Ue]=!0;j.prototype.removeEventListener=function(e,t,n,s){_o(this,e,t,n,s)};function z(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new J(t,e);else if(t instanceof J)t.target=t.target||e;else{var i=t;t=new J(s,e),Eo(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=sn(o,s,!0,t)&&i}if(o=t.g=e,i=sn(o,s,!0,t)&&i,i=sn(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=sn(o,s,!1,t)&&i}j.prototype.M=function(){if(j.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)xn(n[s]);delete e.g[t],e.h--}}this.I=null};j.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};j.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function sn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Ms(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var ui=I.JSON.stringify;function Ch(){var e=ko;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ah{constructor(){this.h=this.g=null}add(t,n){const s=No.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var No=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new bh,e=>e.reset());class bh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _h(e){I.setTimeout(()=>{throw e},0)}function hi(e,t){xs||Dh(),Os||(xs(),Os=!0),ko.add(e,t)}var xs;function Dh(){var e=I.Promise.resolve(void 0);xs=function(){e.then(Nh)}}var Os=!1,ko=new Ah;function Nh(){for(var e;e=Ch();){try{e.h.call(e.g)}catch(n){_h(n)}var t=No;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Os=!1}function Pn(e,t){j.call(this),this.h=e||1,this.g=t||I,this.j=H(this.kb,this),this.l=Date.now()}X(Pn,j);m=Pn.prototype;m.da=!1;m.S=null;m.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),z(this,"tick"),this.da&&(li(this),this.start()))}};m.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function li(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}m.M=function(){Pn.Z.M.call(this),li(this),delete this.g};function di(e,t,n){if(typeof e=="function")n&&(e=H(e,n));else if(e&&typeof e.handleEvent=="function")e=H(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function Ro(e){e.g=di(()=>{e.g=null,e.i&&(e.i=!1,Ro(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class kh extends bt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ro(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function De(e){bt.call(this),this.h=e,this.g={}}X(De,bt);var yr=[];function Mo(e,t,n,s){Array.isArray(n)||(n&&(yr[0]=n.toString()),n=yr);for(var i=0;i<n.length;i++){var r=Co(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Lo(e){si(e.g,function(t,n){this.g.hasOwnProperty(n)&&oi(t)},e),e.g={}}De.prototype.M=function(){De.Z.M.call(this),Lo(this)};De.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vn(){this.g=!0}Vn.prototype.Aa=function(){this.g=!1};function Rh(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Mh(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Xt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+xh(e,n)+(s?" "+s:"")})}function Lh(e,t){e.info(function(){return"TIMEOUT: "+t})}Vn.prototype.info=function(){};function xh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ui(n)}catch{return t}}var Kt={},vr=null;function Fn(){return vr=vr||new j}Kt.Ma="serverreachability";function xo(e){J.call(this,Kt.Ma,e)}X(xo,J);function Ne(e){const t=Fn();z(t,new xo(t,e))}Kt.STAT_EVENT="statevent";function Oo(e,t){J.call(this,Kt.STAT_EVENT,e),this.stat=t}X(Oo,J);function nt(e){const t=Fn();z(t,new Oo(t,e))}Kt.Na="timingevent";function Po(e,t){J.call(this,Kt.Na,e),this.size=t}X(Po,J);function $e(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var Bn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Vo={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fi(){}fi.prototype.h=null;function wr(e){return e.h||(e.h=e.i())}function Fo(){}var je={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function pi(){J.call(this,"d")}X(pi,J);function gi(){J.call(this,"c")}X(gi,J);var Ps;function Un(){}X(Un,fi);Un.prototype.g=function(){return new XMLHttpRequest};Un.prototype.i=function(){return{}};Ps=new Un;function qe(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new De(this),this.P=Oh,e=ks?125:void 0,this.W=new Pn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Bo}function Bo(){this.i=null,this.g="",this.h=!1}var Oh=45e3,Vs={},wn={};m=qe.prototype;m.setTimeout=function(e){this.P=e};function Fs(e,t,n){e.K=1,e.v=jn(vt(t)),e.s=n,e.U=!0,Uo(e,null)}function Uo(e,t){e.F=Date.now(),Ke(e),e.A=vt(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Go(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Bo,e.g=fa(e.l,n?t:null,!e.s),0<e.O&&(e.L=new kh(H(e.Ia,e,e.g),e.O)),Mo(e.V,e.g,"readystatechange",e.gb),t=e.H?wo(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ne(1),Rh(e.j,e.u,e.A,e.m,e.X,e.s)}m.gb=function(e){e=e.target;const t=this.L;t&&gt(e)==3?t.l():this.Ia(e)};m.Ia=function(e){try{if(e==this.g)t:{const h=gt(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>h)&&(h!=3||ks||this.g&&(this.h.h||this.g.ga()||Sr(this.g)))){this.I||h!=4||t==7||(t==8||0>=l?Ne(3):Ne(2)),$n(this);var n=this.g.ba();this.N=n;e:if($o(this)){var s=Sr(this.g);e="";var i=s.length,r=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Mt(this),Ie(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Mh(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yn(a)){var u=a;break e}}u=null}if(n=u)Xt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Bs(this,n);else{this.i=!1,this.o=3,nt(12),Mt(this),Ie(this);break t}}this.U?(jo(this,h,o),ks&&this.i&&h==3&&(Mo(this.V,this.W,"tick",this.fb),this.W.start())):(Xt(this.j,this.m,o,null),Bs(this,o)),h==4&&Mt(this),this.i&&!this.I&&(h==4?ua(this.l,this):(this.i=!1,Ke(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),Mt(this),Ie(this)}}}catch{}finally{}};function $o(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function jo(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=Ph(e,n),i==wn){t==4&&(e.o=4,nt(14),s=!1),Xt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Vs){e.o=4,nt(15),Xt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Xt(e.j,e.m,i,null),Bs(e,i);$o(e)&&i!=wn&&i!=Vs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,nt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ci(t),t.L=!0,nt(11))):(Xt(e.j,e.m,n,"[Invalid Chunked Response]"),Mt(e),Ie(e))}m.fb=function(){if(this.g){var e=gt(this.g),t=this.g.ga();this.C<t.length&&($n(this),jo(this,e,t),this.i&&e!=4&&Ke(this))}};function Ph(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?wn:(n=Number(t.substring(n,s)),isNaN(n)?Vs:(s+=1,s+n>t.length?wn:(t=t.substr(s,n),e.C=s+n,t)))}m.cancel=function(){this.I=!0,Mt(this)};function Ke(e){e.Y=Date.now()+e.P,qo(e,e.P)}function qo(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=$e(H(e.eb,e),t)}function $n(e){e.B&&(I.clearTimeout(e.B),e.B=null)}m.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Lh(this.j,this.A),this.K!=2&&(Ne(3),nt(17)),Mt(this),this.o=2,Ie(this)):qo(this,this.Y-e)};function Ie(e){e.l.G==0||e.I||ua(e.l,e)}function Mt(e){$n(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,li(e.W),Lo(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Bs(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Us(n.i,e))){if(n.I=e.N,!e.J&&Us(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Sn(n),Hn(n);else break t;Si(n),nt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=$e(H(n.ab,n),6e3));if(1>=Yo(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Lt(n,11)}else if((e.J||n.g==e)&&Sn(n),!yn(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const h=u[3];h!=null&&(n.ma=h,n.h.info("VER="+n.ma));const l=u[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=e.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=s.i;!r.g&&(tt(y,"spdy")||tt(y,"quic")||tt(y,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(vi(r,r.h),r.h=null))}if(s.D){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.sa=T,O(s.F,s.D,T))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=da(s,s.H?s.la:null,s.W),o.J){Qo(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&($n(a),Ke(a)),s.g=o}else aa(s);0<n.l.length&&zn(n)}else u[0]!="stop"&&u[0]!="close"||Lt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Lt(n,7):Ii(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Ne(4)}catch{}}function Vh(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Ns(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function mi(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ns(e)||typeof e=="string")vo(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Ns(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=Vh(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function he(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof he)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}m=he.prototype;m.R=function(){yi(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};m.T=function(){return yi(this),this.g.concat()};function yi(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Vt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],Vt(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}m.get=function(e,t){return Vt(this.h,e)?this.h[e]:t};m.set=function(e,t){Vt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};m.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function Vt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Ko=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Fh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ft(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Ft){this.g=t!==void 0?t:e.g,En(this,e.j),this.s=e.s,Tn(this,e.i),In(this,e.m),this.l=e.l,t=e.h;var n=new ke;n.i=t.i,t.g&&(n.g=new he(t.g),n.h=t.h),Er(this,n),this.o=e.o}else e&&(n=String(e).match(Ko))?(this.g=!!t,En(this,n[1]||"",!0),this.s=Se(n[2]||""),Tn(this,n[3]||"",!0),In(this,n[4]),this.l=Se(n[5]||"",!0),Er(this,n[6]||"",!0),this.o=Se(n[7]||"")):(this.g=!!t,this.h=new ke(null,this.g))}Ft.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ve(t,Tr,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ve(t,Tr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(ve(n,n.charAt(0)=="/"?qh:jh,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ve(n,Hh)),e.join("")};function vt(e){return new Ft(e)}function En(e,t,n){e.j=n?Se(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Tn(e,t,n){e.i=n?Se(t,!0):t}function In(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Er(e,t,n){t instanceof ke?(e.h=t,zh(e.h,e.g)):(n||(t=ve(t,Kh)),e.h=new ke(t,e.g))}function O(e,t,n){e.h.set(t,n)}function jn(e){return O(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Bh(e){return e instanceof Ft?vt(e):new Ft(e,void 0)}function Uh(e,t,n,s){var i=new Ft(null,void 0);return e&&En(i,e),t&&Tn(i,t),n&&In(i,n),s&&(i.l=s),i}function Se(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ve(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,$h),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function $h(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Tr=/[#\/\?@]/g,jh=/[#\?:]/g,qh=/[#\?]/g,Kh=/[#\?@]/g,Hh=/#/g;function ke(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function _t(e){e.g||(e.g=new he,e.h=0,e.i&&Fh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=ke.prototype;m.add=function(e,t){_t(this),this.i=null,e=le(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ho(e,t){_t(e),t=le(e,t),Vt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Vt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&yi(e)))}function zo(e,t){return _t(e),t=le(e,t),Vt(e.g.h,t)}m.forEach=function(e,t){_t(this),this.g.forEach(function(n,s){vo(n,function(i){e.call(t,i,s,this)},this)},this)};m.T=function(){_t(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};m.R=function(e){_t(this);var t=[];if(typeof e=="string")zo(this,e)&&(t=lr(t,this.g.get(le(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=lr(t,e[n])}return t};m.set=function(e,t){return _t(this),this.i=null,e=le(this,e),zo(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Go(e,t,n){Ho(e,t),0<n.length&&(e.i=null,e.g.set(le(e,t),ni(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function le(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function zh(e,t){t&&!e.j&&(_t(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Ho(this,s),Go(this,i,n))},e)),e.j=t}var Gh=class{constructor(e,t){this.h=e,this.g=t}};function Wo(e){this.l=e||Wh,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ea&&I.g.Ea()&&I.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Wh=10;function Xo(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Yo(e){return e.h?1:e.g?e.g.size:0}function Us(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function vi(e,t){e.g?e.g.add(t):e.h=t}function Qo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Wo.prototype.cancel=function(){if(this.i=Jo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Jo(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ni(e.i)}function wi(){}wi.prototype.stringify=function(e){return I.JSON.stringify(e,void 0)};wi.prototype.parse=function(e){return I.JSON.parse(e,void 0)};function Xh(){this.g=new wi}function Yh(e,t,n){const s=n||"";try{mi(e,function(i,r){let o=i;Be(i)&&(o=ui(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Qh(e,t){const n=new Vn;if(I.Image){const s=new Image;s.onload=nn(rn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=nn(rn,n,s,"TestLoadImage: error",!1,t),s.onabort=nn(rn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=nn(rn,n,s,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function rn(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function He(e){this.l=e.$b||null,this.j=e.ib||!1}X(He,fi);He.prototype.g=function(){return new qn(this.l,this.j)};He.prototype.i=function(e){return function(){return e}}({});function qn(e,t){j.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ei,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}X(qn,j);var Ei=0;m=qn.prototype;m.open=function(e,t){if(this.readyState!=Ei)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Re(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||I).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ze(this)),this.readyState=Ei};m.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Re(this)),this.g&&(this.readyState=3,Re(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof I.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Zo(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Zo(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}m.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ze(this):Re(this),this.readyState==3&&Zo(this)}};m.Ua=function(e){this.g&&(this.response=this.responseText=e,ze(this))};m.Ta=function(e){this.g&&(this.response=e,ze(this))};m.ha=function(){this.g&&ze(this)};function ze(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Re(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Re(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(qn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Jh=I.JSON.parse;function U(e){j.call(this),this.headers=new he,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ta,this.K=this.L=!1}X(U,j);var ta="",Zh=/^https?$/i,tl=["POST","PUT"];m=U.prototype;m.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ps.g(),this.C=this.u?wr(this.u):wr(Ps),this.g.onreadystatechange=H(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Ir(this,r);return}e=n||"";const i=new he(this.headers);s&&mi(s,function(r,o){i.set(o,r)}),s=lh(i.T()),n=I.FormData&&e instanceof I.FormData,!(0<=yo(tl,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{sa(this),0<this.B&&((this.K=el(this.g))?(this.g.timeout=this.B,this.g.ontimeout=H(this.pa,this)):this.A=di(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Ir(this,r)}};function el(e){return ne&&mh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function nl(e){return e.toLowerCase()=="content-type"}m.pa=function(){typeof ei!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,z(this,"timeout"),this.abort(8))};function Ir(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ea(e),Kn(e)}function ea(e){e.D||(e.D=!0,z(e,"complete"),z(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,z(this,"complete"),z(this,"abort"),Kn(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kn(this,!0)),U.Z.M.call(this)};m.Fa=function(){this.s||(this.F||this.v||this.l?na(this):this.cb())};m.cb=function(){na(this)};function na(e){if(e.h&&typeof ei!="undefined"&&(!e.C[1]||gt(e)!=4||e.ba()!=2)){if(e.v&&gt(e)==4)di(e.Fa,0,e);else if(z(e,"readystatechange"),gt(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Ko)[1]||null;if(!i&&I.self&&I.self.location){var r=I.self.location.protocol;i=r.substr(0,r.length-1)}s=!Zh.test(i?i.toLowerCase():"")}n=s}if(n)z(e,"complete"),z(e,"success");else{e.m=6;try{var o=2<gt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",ea(e)}}finally{Kn(e)}}}}function Kn(e,t){if(e.g){sa(e);const n=e.g,s=e.C[0]?mn:null;e.g=null,e.C=null,t||z(e,"ready");try{n.onreadystatechange=s}catch{}}}function sa(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}function gt(e){return e.g?e.g.readyState:0}m.ba=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}};m.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Jh(t)}};function Sr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ta:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Da=function(){return this.m};m.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function sl(e){let t="";return si(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ti(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=sl(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):O(e,t,n))}function ye(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ia(e){this.za=0,this.l=[],this.h=new Vn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ye("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ye("baseRetryDelayMs",5e3,e),this.$a=ye("retryDelaySeedMs",1e4,e),this.Ya=ye("forwardChannelMaxRetries",2,e),this.ra=ye("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Wo(e&&e.concurrentRequestLimit),this.Ca=new Xh,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}m=ia.prototype;m.ma=8;m.G=1;function Ii(e){if(ra(e),e.G==3){var t=e.V++,n=vt(e.F);O(n,"SID",e.J),O(n,"RID",t),O(n,"TYPE","terminate"),Ge(e,n),t=new qe(e,e.h,t,void 0),t.K=2,t.v=jn(vt(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(t.v.toString(),"")),!n&&I.Image&&(new Image().src=t.v,n=!0),n||(t.g=fa(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ke(t)}la(e)}m.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function Hn(e){e.g&&(Ci(e),e.g.cancel(),e.g=null)}function ra(e){Hn(e),e.u&&(I.clearTimeout(e.u),e.u=null),Sn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function ws(e,t){e.l.push(new Gh(e.Za++,t)),e.G==3&&zn(e)}function zn(e){Xo(e.i)||e.m||(e.m=!0,hi(e.Ha,e),e.C=0)}function il(e,t){return Yo(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=$e(H(e.Ha,e,t),ha(e,e.C)),e.C++,!0)}m.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new qe(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=wo(r),Eo(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=oa(this,i,t),n=vt(this.F),O(n,"RID",e),O(n,"CVER",22),this.D&&O(n,"X-HTTP-Session-Id",this.D),Ge(this,n),this.o&&r&&Ti(n,this.o,r),vi(this.i,i),this.Ra&&O(n,"TYPE","init"),this.ja?(O(n,"$req",t),O(n,"SID","null"),i.$=!0,Fs(i,n,null)):Fs(i,n,t),this.G=2}}else this.G==3&&(e?Cr(this,e):this.l.length==0||Xo(this.i)||Cr(this))};function Cr(e,t){var n;t?n=t.m:n=e.V++;const s=vt(e.F);O(s,"SID",e.J),O(s,"RID",n),O(s,"AID",e.U),Ge(e,s),e.o&&e.s&&Ti(s,e.o,e.s),n=new qe(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=oa(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),vi(e.i,n),Fs(n,s,t)}function Ge(e,t){e.j&&mi({},function(n,s){O(t,s,n)})}function oa(e,t,n){n=Math.min(e.l.length,n);var s=e.j?H(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const h=i[c].g;if(u-=r,0>u)r=Math.max(0,i[c].h-100),a=!1;else try{Yh(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function aa(e){e.g||e.u||(e.Y=1,hi(e.Ga,e),e.A=0)}function Si(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=$e(H(e.Ga,e),ha(e,e.A)),e.A++,!0)}m.Ga=function(){if(this.u=null,ca(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=$e(H(this.bb,this),e)}};m.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,nt(10),Hn(this),ca(this))};function Ci(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function ca(e){e.g=new qe(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=vt(e.oa);O(t,"RID","rpc"),O(t,"SID",e.J),O(t,"CI",e.N?"0":"1"),O(t,"AID",e.U),Ge(e,t),O(t,"TYPE","xmlhttp"),e.o&&e.s&&Ti(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=jn(vt(t)),n.s=null,n.U=!0,Uo(n,e)}m.ab=function(){this.v!=null&&(this.v=null,Hn(this),Si(this),nt(19))};function Sn(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function ua(e,t){var n=null;if(e.g==t){Sn(e),Ci(e),e.g=null;var s=2}else if(Us(e.i,t))n=t.D,Qo(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=Fn(),z(s,new Po(s,n,t,i)),zn(e)}else aa(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&il(e,t)||s==2&&Si(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Lt(e,5);break;case 4:Lt(e,10);break;case 3:Lt(e,6);break;default:Lt(e,2)}}}function ha(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Lt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=H(e.jb,e);n||(n=new Ft("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||En(n,"https"),jn(n)),Qh(n.toString(),s)}else nt(2);e.G=0,e.j&&e.j.va(t),la(e),ra(e)}m.jb=function(e){e?(this.h.info("Successfully pinged google.com"),nt(2)):(this.h.info("Failed to ping google.com"),nt(1))};function la(e){e.G=0,e.I=-1,e.j&&((Jo(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,ni(e.l),e.l.length=0),e.j.ua())}function da(e,t,n){let s=Bh(n);if(s.i!="")t&&Tn(s,t+"."+s.i),In(s,s.m);else{const i=I.location;s=Uh(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&si(e.aa,function(i,r){O(s,r,i)}),t=e.D,n=e.sa,t&&n&&O(s,t,n),O(s,"VER",e.ma),Ge(e,s),s}function fa(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new U(new He({ib:!0})):new U(e.qa),t.L=e.H,t}function pa(){}m=pa.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Oa=function(){};function Cn(){if(ne&&!(10<=Number(yh)))throw Error("Environmental error: no available transport.")}Cn.prototype.g=function(e,t){return new ht(e,t)};function ht(e,t){j.call(this),this.g=new ia(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!yn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!yn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new de(this)}X(ht,j);ht.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),hi(H(e.hb,e,t))),nt(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=da(e,null,e.W),zn(e)};ht.prototype.close=function(){Ii(this.g)};ht.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,ws(this.g,t)}else this.v?(t={},t.__data__=ui(e),ws(this.g,t)):ws(this.g,e)};ht.prototype.M=function(){this.g.j=null,delete this.j,Ii(this.g),delete this.g,ht.Z.M.call(this)};function ga(e){pi.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}X(ga,pi);function ma(){gi.call(this),this.status=1}X(ma,gi);function de(e){this.g=e}X(de,pa);de.prototype.xa=function(){z(this.g,"a")};de.prototype.wa=function(e){z(this.g,new ga(e))};de.prototype.va=function(e){z(this.g,new ma(e))};de.prototype.ua=function(){z(this.g,"b")};Cn.prototype.createWebChannel=Cn.prototype.g;ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;Bn.NO_ERROR=0;Bn.TIMEOUT=8;Bn.HTTP_ERROR=6;Vo.COMPLETE="complete";Fo.EventType=je;je.OPEN="a";je.CLOSE="b";je.ERROR="c";je.MESSAGE="d";j.prototype.listen=j.prototype.N;U.prototype.listenOnce=U.prototype.O;U.prototype.getLastError=U.prototype.La;U.prototype.getLastErrorCode=U.prototype.Da;U.prototype.getStatus=U.prototype.ba;U.prototype.getResponseJson=U.prototype.Qa;U.prototype.getResponseText=U.prototype.ga;U.prototype.send=U.prototype.ea;var rl=function(){return new Cn},ol=function(){return Fn()},Es=Bn,al=Vo,cl=Kt,Ar={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ul=He,on=Fo,hl=U;const br="@firebase/firestore";/**
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
 */class st{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
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
 */let fe="9.8.0";/**
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
 */const Bt=new ho("@firebase/firestore");function _r(){return Bt.logLevel}function v(e,...t){if(Bt.logLevel<=N.DEBUG){const n=t.map(Ai);Bt.debug(`Firestore (${fe}): ${e}`,...n)}}function St(e,...t){if(Bt.logLevel<=N.ERROR){const n=t.map(Ai);Bt.error(`Firestore (${fe}): ${e}`,...n)}}function Dr(e,...t){if(Bt.logLevel<=N.WARN){const n=t.map(Ai);Bt.warn(`Firestore (${fe}): ${e}`,...n)}}function Ai(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function S(e="Unexpected state"){const t=`FIRESTORE (${fe}) INTERNAL ASSERTION FAILED: `+e;throw St(t),new Error(t)}function L(e,t){e||S()}function b(e,t){return e}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Ln{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class ll{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class dl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class fl{constructor(t){this.t=t,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Tt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Tt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(L(typeof s.accessToken=="string"),new ll(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new st(t)}}class pl{constructor(t,n,s){this.type="FirstParty",this.user=st.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class gl{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new pl(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ml{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yl{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(L(typeof n.token=="string"),this.p=n.token,new ml(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class bi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
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
 */function vl(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */bi.A=-1;class ya{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=vl(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function k(e,t){return e<t?-1:e>t?1:0}function se(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
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
 */class Z{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Z.fromMillis(Date.now())}static fromDate(t){return Z.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new Z(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _{constructor(t){this.timestamp=t}static fromTimestamp(t){return new _(t)}static min(){return new _(new Z(0,0))}static max(){return new _(new Z(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Nr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ht(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function va(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Me{constructor(t,n,s){n===void 0?n=0:n>t.length&&S(),s===void 0?s=t.length-n:s>t.length-n&&S(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Me.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Me?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class P extends Me{construct(t,n,s){return new P(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new P(n)}static emptyPath(){return new P([])}}const wl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Me{construct(t,n,s){return new it(t,n,s)}static isValidIdentifier(t){return wl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class _i{constructor(t){this.fields=t,t.sort(it.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return se(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class W{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new W(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new W(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}W.EMPTY_BYTE_STRING=new W("");const El=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ct(e){if(L(!!e),typeof e=="string"){let t=0;const n=El.exec(e);if(L(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:B(e.seconds),nanos:B(e.nanos)}}function B(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ie(e){return typeof e=="string"?W.fromBase64String(e):W.fromUint8Array(e)}/**
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
 */function wa(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ea(e){const t=e.mapValue.fields.__previous_value__;return wa(t)?Ea(t):t}function Le(e){const t=Ct(e.mapValue.fields.__local_write_time__.timestampValue);return new Z(t.seconds,t.nanos)}/**
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
 */class Tl{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class re{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new re("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof re&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */function Gn(e){return e==null}function An(e){return e===0&&1/e==-1/0}function Il(e){return typeof e=="number"&&Number.isInteger(e)&&!An(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(P.fromString(t))}static fromName(t){return new E(P.fromString(t).popFirst(5))}static empty(){return new E(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&P.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return P.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new P(t.slice()))}}/**
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
 */const an={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ut(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?wa(e)?4:Sl(e)?9007199254740991:10:S()}function pt(e,t){if(e===t)return!0;const n=Ut(e);if(n!==Ut(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Le(e).isEqual(Le(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Ct(s.timestampValue),o=Ct(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return ie(s.bytesValue).isEqual(ie(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return B(s.geoPointValue.latitude)===B(i.geoPointValue.latitude)&&B(s.geoPointValue.longitude)===B(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return B(s.integerValue)===B(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=B(s.doubleValue),o=B(i.doubleValue);return r===o?An(r)===An(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return se(e.arrayValue.values||[],t.arrayValue.values||[],pt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Nr(r)!==Nr(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!pt(r[a],o[a])))return!1;return!0}(e,t);default:return S()}}function xe(e,t){return(e.values||[]).find(n=>pt(n,t))!==void 0}function oe(e,t){if(e===t)return 0;const n=Ut(e),s=Ut(t);if(n!==s)return k(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return k(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=B(i.integerValue||i.doubleValue),a=B(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return kr(e.timestampValue,t.timestampValue);case 4:return kr(Le(e),Le(t));case 5:return k(e.stringValue,t.stringValue);case 6:return function(i,r){const o=ie(i),a=ie(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=k(o[c],a[c]);if(u!==0)return u}return k(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=k(B(i.latitude),B(r.latitude));return o!==0?o:k(B(i.longitude),B(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=oe(o[c],a[c]);if(u)return u}return k(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===an.mapValue&&r===an.mapValue)return 0;if(i===an.mapValue)return 1;if(r===an.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=k(a[h],u[h]);if(l!==0)return l;const d=oe(o[a[h]],c[u[h]]);if(d!==0)return d}return k(a.length,u.length)}(e.mapValue,t.mapValue);default:throw S()}}function kr(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return k(e,t);const n=Ct(e),s=Ct(t),i=k(n.seconds,s.seconds);return i!==0?i:k(n.nanos,s.nanos)}function Jt(e){return $s(e)}function $s(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=Ct(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ie(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=$s(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${$s(s.fields[a])}`;return r+"}"}(e.mapValue):S();var t,n}function js(e){return!!e&&"integerValue"in e}function Di(e){return!!e&&"arrayValue"in e}function Rr(e){return!!e&&"nullValue"in e}function Mr(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function un(e){return!!e&&"mapValue"in e}function Ce(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ht(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Ce(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ce(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Sl(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class dt{constructor(t){this.value=t}static empty(){return new dt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!un(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ce(n)}setAll(t){let n=it.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Ce(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());un(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return pt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];un(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Ht(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new dt(Ce(this.value))}}function Ta(e){const t=[];return Ht(e.fields,(n,s)=>{const i=new it([n]);if(un(s)){const r=Ta(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new _i(t)}/**
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
 */class Q{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new Q(t,0,_.min(),_.min(),dt.empty(),0)}static newFoundDocument(t,n,s){return new Q(t,1,n,_.min(),s,0)}static newNoDocument(t,n){return new Q(t,2,n,_.min(),dt.empty(),0)}static newUnknownDocument(t,n){return new Q(t,3,n,_.min(),dt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Q&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Q(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function Cl(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=_.fromTimestamp(s===1e9?new Z(n+1,0):new Z(n,s));return new $t(i,E.empty(),t)}function Al(e){return new $t(e.readTime,e.key,-1)}class $t{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new $t(_.min(),E.empty(),-1)}static max(){return new $t(_.max(),E.empty(),-1)}}function bl(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:k(e.largestBatchId,t.largestBatchId))}/**
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
 */class q{constructor(t,n){this.comparator=t,this.root=n||K.EMPTY}insert(t,n){return new q(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,K.BLACK,null,null))}remove(t){return new q(this.comparator,this.root.remove(t,this.comparator).copy(null,null,K.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new cn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new cn(this.root,t,this.comparator,!1)}getReverseIterator(){return new cn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new cn(this.root,t,this.comparator,!0)}}class cn{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class K{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:K.RED,this.left=i!=null?i:K.EMPTY,this.right=r!=null?r:K.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new K(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return K.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const t=this.left.check();if(t!==this.right.check())throw S();return t+(this.isRed()?0:1)}}K.EMPTY=null,K.RED=!0,K.BLACK=!1;K.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(e,t,n,s,i){return this}insert(e,t,n){return new K(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class G{constructor(t){this.comparator=t,this.data=new q(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lr(this.data.getIterator())}getIteratorFrom(t){return new Lr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof G)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new G(this.comparator);return n.data=t,n}}class Lr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class _l{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function xr(e,t=null,n=[],s=[],i=null,r=null,o=null){return new _l(e,t,n,s,i,r,o)}function Ni(e){const t=b(e);if(t.P===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Jt(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Gn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Jt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Jt(s)).join(",")),t.P=n}return t.P}function Dl(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Jt(s.value)}`;var s}).join(", ")}]`),Gn(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Jt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Jt(n)).join(",")),`Target(${t})`}function ki(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Pl(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!pt(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Pr(e.startAt,t.startAt)&&Pr(e.endAt,t.endAt)}function qs(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class rt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.V(t,n,s):new Nl(t,n,s):n==="array-contains"?new Ml(t,s):n==="in"?new Ll(t,s):n==="not-in"?new xl(t,s):n==="array-contains-any"?new Ol(t,s):new rt(t,n,s)}static V(t,n,s){return n==="in"?new kl(t,s):new Rl(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.v(oe(n,this.value)):n!==null&&Ut(this.value)===Ut(n)&&this.v(oe(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return S()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Nl extends rt{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.v(n)}}class kl extends rt{constructor(t,n){super(t,"in",n),this.keys=Ia("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Rl extends rt{constructor(t,n){super(t,"not-in",n),this.keys=Ia("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ia(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class Ml extends rt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Di(n)&&xe(n.arrayValue,this.value)}}class Ll extends rt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&xe(this.value.arrayValue,n)}}class xl extends rt{constructor(t,n){super(t,"not-in",n)}matches(t){if(xe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!xe(this.value.arrayValue,n)}}class Ol extends rt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Di(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>xe(this.value.arrayValue,s))}}class bn{constructor(t,n){this.position=t,this.inclusive=n}}class Zt{constructor(t,n="asc"){this.field=t,this.dir=n}}function Pl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Or(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=oe(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Pr(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!pt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class We{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function Vl(e,t,n,s,i,r,o,a){return new We(e,t,n,s,i,r,o,a)}function Wn(e){return new We(e)}function Fl(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Sa(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ca(e){for(const t of e.filters)if(t.S())return t.field;return null}function Bl(e){return e.collectionGroup!==null}function Oe(e){const t=b(e);if(t.D===null){t.D=[];const n=Ca(t),s=Sa(t);if(n!==null&&s===null)n.isKeyField()||t.D.push(new Zt(n)),t.D.push(new Zt(it.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.D.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new Zt(it.keyField(),r))}}}return t.D}function jt(e){const t=b(e);if(!t.C)if(t.limitType==="F")t.C=xr(t.path,t.collectionGroup,Oe(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Oe(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new Zt(r.field,o))}const s=t.endAt?new bn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new bn(t.startAt.position,t.startAt.inclusive):null;t.C=xr(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.C}function Ul(e,t,n){return new We(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Xn(e,t){return ki(jt(e),jt(t))&&e.limitType===t.limitType}function Aa(e){return`${Ni(jt(e))}|lt:${e.limitType}`}function Ks(e){return`Query(target=${Dl(jt(e))}; limitType=${e.limitType})`}function Ri(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Or(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Oe(n),s)||n.endAt&&!function(i,r,o){const a=Or(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Oe(n),s))}(e,t)}function $l(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ba(e){return(t,n)=>{let s=!1;for(const i of Oe(e)){const r=jl(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function jl(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?oe(a,c):S()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return S()}}/**
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
 */function _a(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:An(t)?"-0":t}}function Da(e){return{integerValue:""+e}}function ql(e,t){return Il(t)?Da(t):_a(e,t)}/**
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
 */class Yn{constructor(){this._=void 0}}function Kl(e,t,n){return e instanceof _n?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Pe?ka(e,t):e instanceof Ve?Ra(e,t):function(s,i){const r=Na(s,i),o=Vr(r)+Vr(s.k);return js(r)&&js(s.k)?Da(o):_a(s.M,o)}(e,t)}function Hl(e,t,n){return e instanceof Pe?ka(e,t):e instanceof Ve?Ra(e,t):n}function Na(e,t){return e instanceof Dn?js(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class _n extends Yn{}class Pe extends Yn{constructor(t){super(),this.elements=t}}function ka(e,t){const n=Ma(t);for(const s of e.elements)n.some(i=>pt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ve extends Yn{constructor(t){super(),this.elements=t}}function Ra(e,t){let n=Ma(t);for(const s of e.elements)n=n.filter(i=>!pt(i,s));return{arrayValue:{values:n}}}class Dn extends Yn{constructor(t,n){super(),this.M=t,this.k=n}}function Vr(e){return B(e.integerValue||e.doubleValue)}function Ma(e){return Di(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function zl(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Pe&&s instanceof Pe||n instanceof Ve&&s instanceof Ve?se(n.elements,s.elements,pt):n instanceof Dn&&s instanceof Dn?pt(n.k,s.k):n instanceof _n&&s instanceof _n}(e.transform,t.transform)}class Gl{constructor(t,n){this.version=t,this.transformResults=n}}class te{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new te}static exists(t){return new te(void 0,t)}static updateTime(t){return new te(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function hn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Qn{}function Wl(e,t,n){e instanceof Mi?function(s,i,r){const o=s.value.clone(),a=Ur(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Xe?function(s,i,r){if(!hn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ur(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(La(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function Hs(e,t,n){e instanceof Mi?function(s,i,r){if(!hn(s.precondition,i))return;const o=s.value.clone(),a=$r(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(Br(i),o).setHasLocalMutations()}(e,t,n):e instanceof Xe?function(s,i,r){if(!hn(s.precondition,i))return;const o=$r(s.fieldTransforms,r,i),a=i.data;a.setAll(La(s)),a.setAll(o),i.convertToFoundDocument(Br(i),a).setHasLocalMutations()}(e,t,n):function(s,i){hn(s.precondition,i)&&i.convertToNoDocument(_.min())}(e,t)}function Xl(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Na(s.transform,i||null);r!=null&&(n==null&&(n=dt.empty()),n.set(s.field,r))}return n||null}function Fr(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&se(n,s,(i,r)=>zl(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Br(e){return e.isFoundDocument()?e.version:_.min()}class Mi extends Qn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class Xe extends Qn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function La(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Ur(e,t,n){const s=new Map;L(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Hl(o,a,n[i]))}return s}function $r(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Kl(r,o,t))}return s}class Yl extends Qn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Ql extends Qn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class Jl{constructor(t){this.count=t}}/**
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
 */var F,D;function Zl(e){switch(e){default:return S();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function xa(e){if(e===void 0)return St("GRPC error has no .code"),f.UNKNOWN;switch(e){case F.OK:return f.OK;case F.CANCELLED:return f.CANCELLED;case F.UNKNOWN:return f.UNKNOWN;case F.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case F.INTERNAL:return f.INTERNAL;case F.UNAVAILABLE:return f.UNAVAILABLE;case F.UNAUTHENTICATED:return f.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case F.NOT_FOUND:return f.NOT_FOUND;case F.ALREADY_EXISTS:return f.ALREADY_EXISTS;case F.PERMISSION_DENIED:return f.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case F.ABORTED:return f.ABORTED;case F.OUT_OF_RANGE:return f.OUT_OF_RANGE;case F.UNIMPLEMENTED:return f.UNIMPLEMENTED;case F.DATA_LOSS:return f.DATA_LOSS;default:return S()}}(D=F||(F={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class pe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ht(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return va(this.inner)}size(){return this.innerSize}}/**
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
 */const td=new q(E.comparator);function qt(){return td}const ed=new q(E.comparator);function zs(...e){let t=ed;for(const n of e)t=t.insert(n.key,n);return t}function Ts(){return new pe(e=>e.toString(),(e,t)=>e.isEqual(t))}const nd=new q(E.comparator),sd=new G(E.comparator);function x(...e){let t=sd;for(const n of e)t=t.add(n);return t}const id=new G(k);function Oa(){return id}/**
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
 */class Jn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Ye.createSynthesizedTargetChangeForCurrentChange(t,n)),new Jn(_.min(),s,Oa(),qt(),x())}}class Ye{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Ye(W.EMPTY_BYTE_STRING,n,x(),x(),x())}}/**
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
 */class ln{constructor(t,n,s,i){this.O=t,this.removedTargetIds=n,this.key=s,this.F=i}}class Pa{constructor(t,n){this.targetId=t,this.$=n}}class Va{constructor(t,n,s=W.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class jr{constructor(){this.B=0,this.L=Kr(),this.U=W.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=x(),n=x(),s=x();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:S()}}),new Ye(this.U,this.q,t,n,s)}J(){this.K=!1,this.L=Kr()}Y(t,n){this.K=!0,this.L=this.L.insert(t,n)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class rd{constructor(t){this.nt=t,this.st=new Map,this.it=qt(),this.rt=qr(),this.ot=new G(k)}ut(t){for(const n of t.O)t.F&&t.F.isFoundDocument()?this.at(n,t.F):this.ct(n,t.key,t.F);for(const n of t.removedTargetIds)this.ct(n,t.key,t.F)}ht(t){this.forEachTarget(t,n=>{const s=this.lt(n);switch(t.state){case 0:this.ft(n)&&s.W(t.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(t.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(t.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(t.resumeToken));break;default:S()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.st.forEach((s,i)=>{this.ft(i)&&n(i)})}_t(t){const n=t.targetId,s=t.$.count,i=this.wt(n);if(i){const r=i.target;if(qs(r))if(s===0){const o=new E(r.path);this.ct(n,o,Q.newNoDocument(o,_.min()))}else L(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(t){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&qs(a.target)){const c=new E(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,Q.newNoDocument(c,t))}r.j&&(n.set(o,r.H()),r.J())}});let s=x();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.it.forEach((r,o)=>o.setReadTime(t));const i=new Jn(t,n,this.ot,this.it,s);return this.it=qt(),this.rt=qr(),this.ot=new G(k),i}at(t,n){if(!this.ft(t))return;const s=this.It(t,n.key)?2:0;this.lt(t).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(t))}ct(t,n,s){if(!this.ft(t))return;const i=this.lt(t);this.It(t,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(t)),s&&(this.it=this.it.insert(n,s))}removeTarget(t){this.st.delete(t)}gt(t){const n=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let n=this.st.get(t);return n||(n=new jr,this.st.set(t,n)),n}Tt(t){let n=this.rt.get(t);return n||(n=new G(k),this.rt=this.rt.insert(t,n)),n}ft(t){const n=this.wt(t)!==null;return n||v("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.st.get(t);return n&&n.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new jr),this.nt.getRemoteKeysForTarget(t).forEach(n=>{this.ct(t,n,null)})}It(t,n){return this.nt.getRemoteKeysForTarget(t).has(n)}}function qr(){return new q(E.comparator)}function Kr(){return new q(E.comparator)}/**
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
 */const od=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ad=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class cd{constructor(t,n){this.databaseId=t,this.N=n}}function Nn(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Fa(e,t){return e.N?t.toBase64():t.toUint8Array()}function ud(e,t){return Nn(e,t.toTimestamp())}function mt(e){return L(!!e),_.fromTimestamp(function(t){const n=Ct(t);return new Z(n.seconds,n.nanos)}(e))}function Li(e,t){return function(n){return new P(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Ba(e){const t=P.fromString(e);return L(ja(t)),t}function Gs(e,t){return Li(e.databaseId,t.path)}function Is(e,t){const n=Ba(t);if(n.get(1)!==e.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(Ua(n))}function Ws(e,t){return Li(e.databaseId,t)}function hd(e){const t=Ba(e);return t.length===4?P.emptyPath():Ua(t)}function Xs(e){return new P(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ua(e){return L(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Hr(e,t,n){return{name:Gs(e,t),fields:n.value.mapValue.fields}}function ld(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,u){return c.N?(L(u===void 0||typeof u=="string"),W.fromBase64String(u||"")):(L(u===void 0||u instanceof Uint8Array),W.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:xa(c.code);return new w(u,c.message||"")}(o);n=new Va(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Is(e,s.document.name),r=mt(s.document.updateTime),o=new dt({mapValue:{fields:s.document.fields}}),a=Q.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new ln(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Is(e,s.document),r=s.readTime?mt(s.readTime):_.min(),o=Q.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ln([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Is(e,s.document),r=s.removedTargetIds||[];n=new ln([],r,i,null)}else{if(!("filter"in t))return S();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new Jl(i),o=s.targetId;n=new Pa(o,r)}}return n}function dd(e,t){let n;if(t instanceof Mi)n={update:Hr(e,t.key,t.value)};else if(t instanceof Yl)n={delete:Gs(e,t.key)};else if(t instanceof Xe)n={update:Hr(e,t.key,t.data),updateMask:Id(t.fieldMask)};else{if(!(t instanceof Ql))return S();n={verify:Gs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof _n)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Pe)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ve)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Dn)return{fieldPath:r.field.canonicalString(),increment:o.k};throw S()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ud(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:S()}(e,t.precondition)),n}function fd(e,t){return e&&e.length>0?(L(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?mt(s.updateTime):mt(i);return r.isEqual(_.min())&&(r=mt(i)),new Gl(r,s.transformResults||[])}(n,t))):[]}function pd(e,t){return{documents:[Ws(e,t.path)]}}function gd(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Ws(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ws(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const u=c.map(h=>function(l){if(l.op==="=="){if(Mr(l.value))return{unaryFilter:{field:Wt(l.field),op:"IS_NAN"}};if(Rr(l.value))return{unaryFilter:{field:Wt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Mr(l.value))return{unaryFilter:{field:Wt(l.field),op:"IS_NOT_NAN"}};if(Rr(l.value))return{unaryFilter:{field:Wt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wt(l.field),op:wd(l.op),value:l.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:Wt(h.field),direction:vd(h.dir)}}(u))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,u){return c.N||Gn(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function md(e){let t=hd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){L(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=$a(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(l){return new Zt(Yt(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;n.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,Gn(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(h){const l=!!h.before,d=h.values||[];return new bn(d,l)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const l=!h.before,d=h.values||[];return new bn(d,l)}(n.endAt)),Vl(t,i,o,r,a,"F",c,u)}function yd(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return S()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function $a(e){return e?e.unaryFilter!==void 0?[Td(e)]:e.fieldFilter!==void 0?[Ed(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>$a(t)).reduce((t,n)=>t.concat(n)):S():[]}function vd(e){return od[e]}function wd(e){return ad[e]}function Wt(e){return{fieldPath:e.canonicalString()}}function Yt(e){return it.fromServerFormat(e.fieldPath)}function Ed(e){return rt.create(Yt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(e.fieldFilter.op),e.fieldFilter.value)}function Td(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Yt(e.unaryFilter.field);return rt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Yt(e.unaryFilter.field);return rt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yt(e.unaryFilter.field);return rt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Yt(e.unaryFilter.field);return rt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return S()}}function Id(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function ja(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */const Sd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,s)=>{n(t)})}static reject(t){return new p((n,s)=>{s(t)})}static waitFor(t){return new p((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=p.resolve(!1);for(const s of t)n=n.next(i=>i?p.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function Qe(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Ad{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Wl(r,t,s[i])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&Hs(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&Hs(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(_.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),x())}isEqual(t){return this.batchId===t.batchId&&se(this.mutations,t.mutations,(n,s)=>Fr(n,s))&&se(this.baseMutations,t.baseMutations,(n,s)=>Fr(n,s))}}class xi{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){L(t.mutations.length===s.length);let i=nd;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new xi(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class xt{constructor(t,n,s,i,r=_.min(),o=_.min(),a=W.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new xt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class _d{constructor(t){this.Jt=t}}function Dd(e){const t=md({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ul(t,t.limit,"L"):t}/**
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
 */class Nd{constructor(){this.qe=new kd}addToCollectionParentIndex(t,n){return this.qe.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.qe.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve($t.min())}updateCollectionGroup(t,n,s){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class kd{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new G(P.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new G(P.comparator)).toArray()}}/**
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
 */class ae{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new ae(0)}static yn(){return new ae(-1)}}/**
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
 */async function Je(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==Sd)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Rd{constructor(){this.changes=new pe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Q.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Md{constructor(t,n,s){this.ds=t,this.Bs=n,this.indexManager=s}Ls(t,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.Us(t,n,s))}Us(t,n,s){return this.ds.getEntry(t,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}qs(t,n){t.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}Ks(t,n){return this.ds.getEntries(t,n).next(s=>this.Gs(t,s).next(()=>s))}Gs(t,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.qs(n,s))}Qs(t,n,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.js(t,n.path):Bl(n)?this.Ws(t,n,s):this.zs(t,n,s)}js(t,n){return this.Ls(t,new E(n)).next(s=>{let i=zs();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}Ws(t,n,s){const i=n.collectionGroup;let r=zs();return this.indexManager.getCollectionParents(t,i).next(o=>p.forEach(o,a=>{const c=function(u,h){return new We(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.zs(t,c,s).next(u=>{u.forEach((h,l)=>{r=r.insert(h,l)})})}).next(()=>r))}zs(t,n,s){let i;return this.ds.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.Bs.getAllMutationBatchesAffectingQuery(t,n))).next(r=>{for(const o of r)for(const a of o.mutations){const c=a.key;let u=i.get(c);u==null&&(u=Q.newInvalidDocument(c),i=i.insert(c,u)),Hs(a,u,o.localWriteTime),u.isFoundDocument()||(i=i.remove(c))}}).next(()=>(i.forEach((r,o)=>{Ri(n,o)||(i=i.remove(r))}),i))}}/**
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
 */class Oi{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Hs=s,this.Js=i}static Ys(t,n){let s=x(),i=x();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Oi(t,n.fromCache,s,i)}}/**
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
 */class Ld{constructor(){this.Xs=!1}initialize(t,n){this.Zs=t,this.indexManager=n,this.Xs=!0}Qs(t,n,s,i){return this.ti(t,n).next(r=>r||this.ei(t,n,i,s)).next(r=>r||this.ni(t,n))}ti(t,n){return p.resolve(null)}ei(t,n,s,i){return Fl(n)||i.isEqual(_.min())?this.ni(t,n):this.Zs.Ks(t,s).next(r=>{const o=this.si(n,r);return this.ii(n,o,s,i)?this.ni(t,n):(_r()<=N.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ks(n)),this.ri(t,o,n,Cl(i,-1)))})}si(t,n){let s=new G(ba(t));return n.forEach((i,r)=>{Ri(t,r)&&(s=s.add(r))}),s}ii(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ni(t,n){return _r()<=N.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Ks(n)),this.Zs.Qs(t,n,$t.min())}ri(t,n,s,i){return this.Zs.Qs(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class xd{constructor(t,n,s,i){this.persistence=t,this.oi=n,this.M=i,this.ui=new q(k),this.ai=new pe(r=>Ni(r),ki),this.ci=new Map,this.hi=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.li(s)}li(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.fi=new Md(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ui))}}function Od(e,t,n,s){return new xd(e,t,n,s)}async function qa(e,t){const n=b(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.Bs.getAllMutationBatches(s).next(r=>(i=r,n.li(t),n.Bs.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=x();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.fi.Ks(s,c).next(u=>({di:u,removedBatchIds:o,addedBatchIds:a}))})})}function Pd(e,t){const n=b(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.hi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let d=p.resolve();return l.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const T=c.docVersions.get(g);L(T!==null),y.version.compareTo(T)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),d.next(()=>o.Bs.removeMutationBatch(a,h))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.Bs.performConsistencyCheck(s)).next(()=>n.fi.Ks(s,i))})}function Ka(e){const t=b(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.fs.getLastRemoteSnapshotVersion(n))}function Vd(e,t){const n=b(e),s=t.snapshotVersion;let i=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.hi.newChangeBuffer({trackRemovals:!0});i=n.ui;const a=[];t.targetChanges.forEach((u,h)=>{const l=i.get(h);if(!l)return;a.push(n.fs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.fs.addMatchingKeys(r,u.addedDocuments,h)));let d=l.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(h)?d=d.withResumeToken(W.EMPTY_BYTE_STRING,_.min()).withLastLimboFreeSnapshotVersion(_.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),i=i.insert(h,d),function(g,y,T){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(l,d,u)&&a.push(n.fs.updateTargetData(r,d))});let c=qt();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Fd(r,o,t.documentUpdates).next(u=>{c=u})),!s.isEqual(_.min())){const u=n.fs.getLastRemoteSnapshotVersion(r).next(h=>n.fs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>n.fi.Gs(r,c)).next(()=>c)}).then(r=>(n.ui=i,r))}function Fd(e,t,n){let s=x();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let r=qt();return n.forEach((o,a)=>{const c=i.get(o);a.isNoDocument()&&a.version.isEqual(_.min())?(t.removeEntry(o,a.readTime),r=r.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(a),r=r.insert(o,a)):v("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),r})}function Bd(e,t){const n=b(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.Bs.getNextMutationBatchAfterBatchId(s,t)))}function Ud(e,t){const n=b(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.fs.getTargetData(s,t).next(r=>r?(i=r,p.resolve(i)):n.fs.allocateTargetId(s).next(o=>(i=new xt(t,o,0,s.currentSequenceNumber),n.fs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ui=n.ui.insert(s.targetId,s),n.ai.set(t,s.targetId)),s})}async function Ys(e,t,n){const s=b(e),i=s.ui.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Qe(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.ui=s.ui.remove(t),s.ai.delete(i.target)}function zr(e,t,n){const s=b(e);let i=_.min(),r=x();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=b(a),l=h.ai.get(u);return l!==void 0?p.resolve(h.ui.get(l)):h.fs.getTargetData(c,u)}(s,o,jt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.oi.Qs(o,t,n?i:_.min(),n?r:x())).next(a=>($d(s,$l(t),a),{documents:a,_i:r})))}function $d(e,t,n){let s=_.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.ci.set(t,s)}/**
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
 */class jd{constructor(t){this.M=t,this.yi=new Map,this.pi=new Map}getBundleMetadata(t,n){return p.resolve(this.yi.get(n))}saveBundleMetadata(t,n){var s;return this.yi.set(n.id,{id:(s=n).id,version:s.version,createTime:mt(s.createTime)}),p.resolve()}getNamedQuery(t,n){return p.resolve(this.pi.get(n))}saveNamedQuery(t,n){return this.pi.set(n.name,function(s){return{name:s.name,query:Dd(s.bundledQuery),readTime:mt(s.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.overlays=new q(E.comparator),this.Ii=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.Xt(t,n,r)}),p.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.Ii.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Ii.delete(s)),p.resolve()}getOverlaysForCollection(t,n,s){const i=Ts(),r=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return p.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new q((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=Ts(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Ts(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return p.resolve(a)}Xt(t,n,s){if(s===null)return;const i=this.overlays.get(s.key);if(i!==null){const o=this.Ii.get(i.largestBatchId).delete(s.key);this.Ii.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new bd(n,s));let r=this.Ii.get(n);r===void 0&&(r=x(),this.Ii.set(n,r)),this.Ii.set(n,r.add(s.key))}}/**
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
 */class Pi{constructor(){this.Ti=new G($.Ei),this.Ai=new G($.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(t,n){const s=new $(t,n);this.Ti=this.Ti.add(s),this.Ai=this.Ai.add(s)}bi(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Pi(new $(t,n))}Vi(t,n){t.forEach(s=>this.removeReference(s,n))}vi(t){const n=new E(new P([])),s=new $(n,t),i=new $(n,t+1),r=[];return this.Ai.forEachInRange([s,i],o=>{this.Pi(o),r.push(o.key)}),r}Si(){this.Ti.forEach(t=>this.Pi(t))}Pi(t){this.Ti=this.Ti.delete(t),this.Ai=this.Ai.delete(t)}Di(t){const n=new E(new P([])),s=new $(n,t),i=new $(n,t+1);let r=x();return this.Ai.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new $(t,0),s=this.Ti.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class ${constructor(t,n){this.key=t,this.Ci=n}static Ei(t,n){return E.comparator(t.key,n.key)||k(t.Ci,n.Ci)}static Ri(t,n){return k(t.Ci,n.Ci)||E.comparator(t.key,n.key)}}/**
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
 */class Kd{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.Bs=[],this.xi=1,this.Ni=new G($.Ei)}checkEmpty(t){return p.resolve(this.Bs.length===0)}addMutationBatch(t,n,s,i){const r=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new Ad(r,n,s,i);this.Bs.push(o);for(const a of i)this.Ni=this.Ni.add(new $(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.ki(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.Mi(s),r=i<0?0:i;return p.resolve(this.Bs.length>r?this.Bs[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(t){return p.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new $(n,0),i=new $(n,Number.POSITIVE_INFINITY),r=[];return this.Ni.forEachInRange([s,i],o=>{const a=this.ki(o.Ci);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new G(k);return n.forEach(i=>{const r=new $(i,0),o=new $(i,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([r,o],a=>{s=s.add(a.Ci)})}),p.resolve(this.Oi(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new $(new E(r),0);let a=new G(k);return this.Ni.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.Ci)),!0)},o),p.resolve(this.Oi(a))}Oi(t){const n=[];return t.forEach(s=>{const i=this.ki(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){L(this.Fi(n.batchId,"removed")===0),this.Bs.shift();let s=this.Ni;return p.forEach(n.mutations,i=>{const r=new $(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Ni=s})}_n(t){}containsKey(t,n){const s=new $(n,0),i=this.Ni.firstAfterOrEqual(s);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.Bs.length,p.resolve()}Fi(t,n){return this.Mi(t)}Mi(t){return this.Bs.length===0?0:t-this.Bs[0].batchId}ki(t){const n=this.Mi(t);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
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
 */class Hd{constructor(t){this.$i=t,this.docs=new q(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.$i(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():Q.newInvalidDocument(n))}getEntries(t,n){let s=qt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Q.newInvalidDocument(i))}),p.resolve(s)}getAllFromCollection(t,n,s){let i=qt();const r=new E(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||bl(Al(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return p.resolve(i)}getAllFromCollectionGroup(t,n,s,i){S()}Bi(t,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new zd(this)}getSize(t){return p.resolve(this.size)}}class zd extends Rd{constructor(t){super(),this.Kn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Kn.addEntry(t,i)):this.Kn.removeEntry(s)}),p.waitFor(n)}getFromCache(t,n){return this.Kn.getEntry(t,n)}getAllFromCache(t,n){return this.Kn.getEntries(t,n)}}/**
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
 */class Gd{constructor(t){this.persistence=t,this.Li=new pe(n=>Ni(n),ki),this.lastRemoteSnapshotVersion=_.min(),this.highestTargetId=0,this.Ui=0,this.qi=new Pi,this.targetCount=0,this.Ki=ae.gn()}forEachTarget(t,n){return this.Li.forEach((s,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Ui)}allocateTargetId(t){return this.highestTargetId=this.Ki.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ui&&(this.Ui=n),p.resolve()}Tn(t){this.Li.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ki=new ae(n),this.highestTargetId=n),t.sequenceNumber>this.Ui&&(this.Ui=t.sequenceNumber)}addTargetData(t,n){return this.Tn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.Tn(n),p.resolve()}removeTargetData(t,n){return this.Li.delete(n.target),this.qi.vi(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Li.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Li.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),p.waitFor(r).next(()=>i)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const s=this.Li.get(n)||null;return p.resolve(s)}addMatchingKeys(t,n,s){return this.qi.bi(n,s),p.resolve()}removeMatchingKeys(t,n,s){this.qi.Vi(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.qi.vi(n),p.resolve()}getMatchingKeysForTargetId(t,n){const s=this.qi.Di(n);return p.resolve(s)}containsKey(t,n){return p.resolve(this.qi.containsKey(n))}}/**
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
 */class Wd{constructor(t,n){this.Gi={},this.overlays={},this.es=new bi(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new Gd(this),this.indexManager=new Nd,this.ds=function(s){return new Hd(s)}(s=>this.referenceDelegate.Qi(s)),this.M=new _d(n),this._s=new jd(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new qd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Gi[t.toKey()];return s||(s=new Kd(n,this.referenceDelegate),this.Gi[t.toKey()]=s),s}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const i=new Xd(this.es.next());return this.referenceDelegate.ji(),s(i).next(r=>this.referenceDelegate.Wi(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}zi(t,n){return p.or(Object.values(this.Gi).map(s=>()=>s.containsKey(t,n)))}}class Xd extends Cd{constructor(t){super(),this.currentSequenceNumber=t}}class Vi{constructor(t){this.persistence=t,this.Hi=new Pi,this.Ji=null}static Yi(t){return new Vi(t)}get Xi(){if(this.Ji)return this.Ji;throw S()}addReference(t,n,s){return this.Hi.addReference(s,n),this.Xi.delete(s.toString()),p.resolve()}removeReference(t,n,s){return this.Hi.removeReference(s,n),this.Xi.add(s.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Xi.add(n.toString()),p.resolve()}removeTarget(t,n){this.Hi.vi(n.targetId).forEach(i=>this.Xi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Xi.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}ji(){this.Ji=new Set}Wi(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Xi,s=>{const i=E.fromPath(s);return this.Zi(t,i).next(r=>{r||n.removeEntry(i,_.min())})}).next(()=>(this.Ji=null,n.apply(t)))}updateLimboDocument(t,n){return this.Zi(t,n).next(s=>{s?this.Xi.delete(n.toString()):this.Xi.add(n.toString())})}Qi(t){return 0}Zi(t,n){return p.or([()=>p.resolve(this.Hi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.zi(t,n)])}}class Gr{constructor(){this.activeTargetIds=Oa()}nr(t){this.activeTargetIds=this.activeTargetIds.add(t)}sr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}er(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Yd{constructor(){this.Ur=new Gr,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Ur.nr(t),this.qr[t]||"not-current"}updateQueryState(t,n,s){this.qr[t]=n}removeLocalQueryTarget(t){this.Ur.sr(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new Gr,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Qd{Kr(t){}shutdown(){}}/**
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
 */class Wr{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Wr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Jd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Zd{constructor(t){this.Jr=t.Jr,this.Yr=t.Yr}Xr(t){this.Zr=t}eo(t){this.no=t}onMessage(t){this.so=t}close(){this.Yr()}send(t){this.Jr(t)}io(){this.Zr()}ro(t){this.no(t)}oo(t){this.so(t)}}/**
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
 */class tf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.uo=n+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,n,s,i,r){const o=this.ho(t,n);v("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(t,o,a,s).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw Dr("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}_o(t,n,s,i,r){return this.co(t,n,s,i,r)}lo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+fe,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}ho(t,n){const s=Jd[t];return`${this.uo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,s,i){return new Promise((r,o)=>{const a=new hl;a.listenOnce(al.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Es.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),r(u);break;case Es.TIMEOUT:v("Connection",'RPC "'+t+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case Es.HTTP_ERROR:const h=a.getStatus();if(v("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(y)>=0?y:f.UNKNOWN}(l.status);o(new w(d,l.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{v("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}wo(t,n,s){const i=[this.uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=rl(),o=ol(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ul({})),this.lo(a.initMessageHeaders,n,s),Vc()||Bc()||Uc()||$c()||jc()||Fc()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");v("Connection","Creating WebChannel: "+c,a);const u=r.createWebChannel(c,a);let h=!1,l=!1;const d=new Zd({Jr:y=>{l?v("Connection","Not sending because WebChannel is closed:",y):(h||(v("Connection","Opening WebChannel transport."),u.open(),h=!0),v("Connection","WebChannel sending:",y),u.send(y))},Yr:()=>u.close()}),g=(y,T,C)=>{y.listen(T,M=>{try{C(M)}catch(A){setTimeout(()=>{throw A},0)}})};return g(u,on.EventType.OPEN,()=>{l||v("Connection","WebChannel transport opened.")}),g(u,on.EventType.CLOSE,()=>{l||(l=!0,v("Connection","WebChannel transport closed"),d.ro())}),g(u,on.EventType.ERROR,y=>{l||(l=!0,Dr("Connection","WebChannel transport errored:",y),d.ro(new w(f.UNAVAILABLE,"The operation could not be completed")))}),g(u,on.EventType.MESSAGE,y=>{var T;if(!l){const C=y.data[0];L(!!C);const M=C,A=M.error||((T=M[0])===null||T===void 0?void 0:T.error);if(A){v("Connection","WebChannel received error:",A);const R=A.status;let at=function(Dt){const me=F[Dt];if(me!==void 0)return xa(me)}(R),wt=A.message;at===void 0&&(at=f.INTERNAL,wt="Unknown error status: "+R+" with message "+A.message),l=!0,d.ro(new w(at,wt)),u.close()}else v("Connection","WebChannel received:",C),d.oo(C)}}),g(o,cl.STAT_EVENT,y=>{y.stat===Ar.PROXY?v("Connection","Detected buffering proxy"):y.stat===Ar.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.io()},0),d}}function Ss(){return typeof document!="undefined"?document:null}/**
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
 */function Zn(e){return new cd(e,!0)}class Ha{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Yn=t,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class za{constructor(t,n,s,i,r,o,a,c){this.Yn=t,this.Vo=s,this.vo=i,this.So=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Ha(t,n)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,t!==4?this.No.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(St(n.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.eo(n)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{t(()=>{const i=new w(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(t,n){const s=this.Go(this.Do);this.stream=this.Wo(t,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Go(t){return n=>{this.Yn.enqueueAndForget(()=>this.Do===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ef extends za{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.M=r}Wo(t,n){return this.So.wo("Listen",t,n)}onMessage(t){this.No.reset();const n=ld(this.M,t),s=function(i){if(!("targetChange"in i))return _.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?_.min():r.readTime?mt(r.readTime):_.min()}(t);return this.listener.zo(n,s)}Ho(t){const n={};n.database=Xs(this.M),n.addTarget=function(i,r){let o;const a=r.target;return o=qs(a)?{documents:pd(i,a)}:{query:gd(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Fa(i,r.resumeToken):r.snapshotVersion.compareTo(_.min())>0&&(o.readTime=Nn(i,r.snapshotVersion.toTimestamp())),o}(this.M,t);const s=yd(this.M,t);s&&(n.labels=s),this.Lo(n)}Jo(t){const n={};n.database=Xs(this.M),n.removeTarget=t,this.Lo(n)}}class nf extends za{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.M=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(t,n){return this.So.wo("Write",t,n)}onMessage(t){if(L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Yo){this.No.reset();const n=fd(t.writeResults,t.commitTime),s=mt(t.commitTime);return this.listener.tu(s,n)}return L(!t.writeResults||t.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const t={};t.database=Xs(this.M),this.Lo(t)}Zo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>dd(this.M,s))};this.Lo(n)}}/**
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
 */class sf extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.So=s,this.M=i,this.su=!1}iu(){if(this.su)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.co(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}_o(t,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So._o(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}terminate(){this.su=!0}}class rf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(t){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.fu(),this.ru=0,t==="Online"&&(this.uu=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(St(n),this.uu=!1):v("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class of{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.Kr(o=>{s.enqueueAndForget(async()=>{zt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=b(a);c.wu.add(4),await Ze(c),c.yu.set("Unknown"),c.wu.delete(4),await ts(c)}(this))})}),this.yu=new rf(s,i)}}async function ts(e){if(zt(e))for(const t of e.mu)await t(!0)}async function Ze(e){for(const t of e.mu)await t(!1)}function Ga(e,t){const n=b(e);n._u.has(t.targetId)||(n._u.set(t.targetId,t),Ui(n)?Bi(n):ge(n).Mo()&&Fi(n,t))}function Wa(e,t){const n=b(e),s=ge(n);n._u.delete(t),s.Mo()&&Xa(n,t),n._u.size===0&&(s.Mo()?s.$o():zt(n)&&n.yu.set("Unknown"))}function Fi(e,t){e.pu.Z(t.targetId),ge(e).Ho(t)}function Xa(e,t){e.pu.Z(t),ge(e).Jo(t)}function Bi(e){e.pu=new rd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e._u.get(t)||null}),ge(e).start(),e.yu.au()}function Ui(e){return zt(e)&&!ge(e).ko()&&e._u.size>0}function zt(e){return b(e).wu.size===0}function Ya(e){e.pu=void 0}async function af(e){e._u.forEach((t,n)=>{Fi(e,t)})}async function cf(e,t){Ya(e),Ui(e)?(e.yu.lu(t),Bi(e)):e.yu.set("Unknown")}async function uf(e,t,n){if(e.yu.set("Online"),t instanceof Va&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s._u.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s._u.delete(o),s.pu.removeTarget(o))}(e,t)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await kn(e,s)}else if(t instanceof ln?e.pu.ut(t):t instanceof Pa?e.pu._t(t):e.pu.ht(t),!n.isEqual(_.min()))try{const s=await Ka(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.pu.yt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i._u.get(c);u&&i._u.set(c,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i._u.get(a);if(!c)return;i._u.set(a,c.withResumeToken(W.EMPTY_BYTE_STRING,c.snapshotVersion)),Xa(i,a);const u=new xt(c.target,a,1,c.sequenceNumber);Fi(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await kn(e,s)}}async function kn(e,t,n){if(!Qe(t))throw t;e.wu.add(1),await Ze(e),e.yu.set("Offline"),n||(n=()=>Ka(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e.wu.delete(1),await ts(e)})}function Qa(e,t){return t().catch(n=>kn(e,n,t))}async function es(e){const t=b(e),n=At(t);let s=t.du.length>0?t.du[t.du.length-1].batchId:-1;for(;hf(t);)try{const i=await Bd(t.localStore,s);if(i===null){t.du.length===0&&n.$o();break}s=i.batchId,lf(t,i)}catch(i){await kn(t,i)}Ja(t)&&Za(t)}function hf(e){return zt(e)&&e.du.length<10}function lf(e,t){e.du.push(t);const n=At(e);n.Mo()&&n.Xo&&n.Zo(t.mutations)}function Ja(e){return zt(e)&&!At(e).ko()&&e.du.length>0}function Za(e){At(e).start()}async function df(e){At(e).nu()}async function ff(e){const t=At(e);for(const n of e.du)t.Zo(n.mutations)}async function pf(e,t,n){const s=e.du.shift(),i=xi.from(s,t,n);await Qa(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await es(e)}async function gf(e,t){t&&At(e).Xo&&await async function(n,s){if(i=s.code,Zl(i)&&i!==f.ABORTED){const r=n.du.shift();At(n).Fo(),await Qa(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await es(n)}var i}(e,t),Ja(e)&&Za(e)}async function Xr(e,t){const n=b(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=zt(n);n.wu.add(3),await Ze(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.wu.delete(3),await ts(n)}async function mf(e,t){const n=b(e);t?(n.wu.delete(2),await ts(n)):t||(n.wu.add(2),await Ze(n),n.yu.set("Unknown"))}function ge(e){return e.Iu||(e.Iu=function(t,n,s){const i=b(t);return i.iu(),new ef(n,i.So,i.authCredentials,i.appCheckCredentials,i.M,s)}(e.datastore,e.asyncQueue,{Xr:af.bind(null,e),eo:cf.bind(null,e),zo:uf.bind(null,e)}),e.mu.push(async t=>{t?(e.Iu.Fo(),Ui(e)?Bi(e):e.yu.set("Unknown")):(await e.Iu.stop(),Ya(e))})),e.Iu}function At(e){return e.Tu||(e.Tu=function(t,n,s){const i=b(t);return i.iu(),new nf(n,i.So,i.authCredentials,i.appCheckCredentials,i.M,s)}(e.datastore,e.asyncQueue,{Xr:df.bind(null,e),eo:gf.bind(null,e),eu:ff.bind(null,e),tu:pf.bind(null,e)}),e.mu.push(async t=>{t?(e.Tu.Fo(),await es(e)):(await e.Tu.stop(),e.du.length>0&&(v("RemoteStore",`Stopping write stream with ${e.du.length} pending writes`),e.du=[]))})),e.Tu}/**
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
 */class $i{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new $i(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ji(e,t){if(St("AsyncQueue",`${t}: ${e}`),Qe(e))return new w(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class ee{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=zs(),this.sortedSet=new q(this.comparator)}static emptySet(t){return new ee(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ee)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new ee;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Yr{constructor(){this.Eu=new q(E.comparator)}track(t){const n=t.doc.key,s=this.Eu.get(n);s?t.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,t):t.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Eu=this.Eu.remove(n):t.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:t.doc}):S():this.Eu=this.Eu.insert(n,t)}Au(){const t=[];return this.Eu.inorderTraversal((n,s)=>{t.push(s)}),t}}class ce{constructor(t,n,s,i,r,o,a,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new ce(t,n,ee.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class yf{constructor(){this.Ru=void 0,this.listeners=[]}}class vf{constructor(){this.queries=new pe(t=>Aa(t),Xn),this.onlineState="Unknown",this.bu=new Set}}async function tc(e,t){const n=b(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new yf),i)try{r.Ru=await n.onListen(s)}catch(o){const a=ji(o,`Initialization of query '${Ks(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Pu(n.onlineState),r.Ru&&t.Vu(r.Ru)&&qi(n)}async function ec(e,t){const n=b(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function wf(e,t){const n=b(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.Ru=i}}s&&qi(n)}function Ef(e,t,n){const s=b(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function qi(e){e.bu.forEach(t=>{t.next()})}class nc{constructor(t,n,s){this.query=t,this.vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}Vu(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new ce(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.Su?this.Cu(t)&&(this.vu.next(t),n=!0):this.xu(t,this.onlineState)&&(this.Nu(t),n=!0),this.Du=t,n}onError(t){this.vu.error(t)}Pu(t){this.onlineState=t;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),n=!0),n}xu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!t.docs.isEmpty()||n==="Offline")}Cu(t){if(t.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(t){t=ce.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Su=!0,this.vu.next(t)}}/**
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
 */class sc{constructor(t){this.key=t}}class ic{constructor(t){this.key=t}}class Tf{constructor(t,n){this.query=t,this.Uu=n,this.qu=null,this.current=!1,this.Ku=x(),this.mutatedKeys=x(),this.Gu=ba(t),this.Qu=new ee(this.Gu)}get ju(){return this.Uu}Wu(t,n){const s=n?n.zu:new Yr,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,l)=>{const d=i.get(h),g=Ri(this.query,l)?l:null,y=!!d&&this.mutatedKeys.has(d.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;d&&g?d.data.isEqual(g.data)?y!==T&&(s.track({type:3,doc:g}),C=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),C=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),C=!0):d&&!g&&(s.track({type:1,doc:d}),C=!0,(c||u)&&(a=!0)),C&&(g?(o=o.add(g),r=T?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Qu:o,zu:s,ii:a,mutatedKeys:r}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const r=t.zu.Au();r.sort((u,h)=>function(l,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return g(l)-g(d)}(u.type,h.type)||this.Gu(u.doc,h.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,r.length!==0||c?{snapshot:new ce(this.query,t.Qu,i,r,t.mutatedKeys,a===0,c,!1),Xu:o}:{Xu:o}}Pu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Yr,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=x(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return t.forEach(s=>{this.Ku.has(s)||n.push(new ic(s))}),this.Ku.forEach(s=>{t.has(s)||n.push(new sc(s))}),n}ta(t){this.Uu=t._i,this.Ku=x();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ea(){return ce.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class If{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Sf{constructor(t){this.key=t,this.na=!1}}class Cf{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sa={},this.ia=new pe(a=>Aa(a),Xn),this.ra=new Map,this.oa=new Set,this.ua=new q(E.comparator),this.aa=new Map,this.ca=new Pi,this.ha={},this.la=new Map,this.fa=ae.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function Af(e,t){const n=Of(e);let s,i;const r=n.ia.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ea();else{const o=await Ud(n.localStore,jt(t));n.isPrimaryClient&&Ga(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await bf(n,t,s,a==="current")}return i}async function bf(e,t,n,s){e._a=(h,l,d)=>async function(g,y,T,C){let M=y.view.Wu(T);M.ii&&(M=await zr(g.localStore,y.query,!1).then(({documents:at})=>y.view.Wu(at,M)));const A=C&&C.targetChanges.get(y.targetId),R=y.view.applyChanges(M,g.isPrimaryClient,A);return Jr(g,y.targetId,R.Xu),R.snapshot}(e,h,l,d);const i=await zr(e.localStore,t,!0),r=new Tf(t,i._i),o=r.Wu(i.documents),a=Ye.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),c=r.applyChanges(o,e.isPrimaryClient,a);Jr(e,n,c.Xu);const u=new If(t,n,r);return e.ia.set(t,u),e.ra.has(n)?e.ra.get(n).push(t):e.ra.set(n,[t]),c.snapshot}async function _f(e,t){const n=b(e),s=n.ia.get(t),i=n.ra.get(s.targetId);if(i.length>1)return n.ra.set(s.targetId,i.filter(r=>!Xn(r,t))),void n.ia.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ys(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Wa(n.remoteStore,s.targetId),Qs(n,s.targetId)}).catch(Je)):(Qs(n,s.targetId),await Ys(n.localStore,s.targetId,!0))}async function Df(e,t,n){const s=Pf(e);try{const i=await function(r,o){const a=b(r),c=Z.now(),u=o.reduce((l,d)=>l.add(d.key),x());let h;return a.persistence.runTransaction("Locally write mutations","readwrite",l=>a.fi.Ks(l,u).next(d=>{h=d;const g=[];for(const y of o){const T=Xl(y,h.get(y.key));T!=null&&g.push(new Xe(y.key,T,Ta(T.value.mapValue),te.exists(!0)))}return a.Bs.addMutationBatch(l,c,g,o)})).then(l=>(l.applyToLocalDocumentSet(h),{batchId:l.batchId,changes:h}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.ha[r.currentUser.toKey()];c||(c=new q(k)),c=c.insert(o,a),r.ha[r.currentUser.toKey()]=c}(s,i.batchId,n),await tn(s,i.changes),await es(s.remoteStore)}catch(i){const r=ji(i,"Failed to persist write");n.reject(r)}}async function rc(e,t){const n=b(e);try{const s=await Vd(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.aa.get(r);o&&(L(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.na=!0:i.modifiedDocuments.size>0?L(o.na):i.removedDocuments.size>0&&(L(o.na),o.na=!1))}),await tn(n,s,t)}catch(s){await Je(s)}}function Qr(e,t,n){const s=b(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ia.forEach((r,o)=>{const a=o.view.Pu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=b(r);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.Pu(o)&&(c=!0)}),c&&qi(a)}(s.eventManager,t),i.length&&s.sa.zo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Nf(e,t,n){const s=b(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.aa.get(t),r=i&&i.key;if(r){let o=new q(E.comparator);o=o.insert(r,Q.newNoDocument(r,_.min()));const a=x().add(r),c=new Jn(_.min(),new Map,new G(k),o,a);await rc(s,c),s.ua=s.ua.remove(r),s.aa.delete(t),Ki(s)}else await Ys(s.localStore,t,!1).then(()=>Qs(s,t,n)).catch(Je)}async function kf(e,t){const n=b(e),s=t.batch.batchId;try{const i=await Pd(n.localStore,t);ac(n,s,null),oc(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await tn(n,i)}catch(i){await Je(i)}}async function Rf(e,t,n){const s=b(e);try{const i=await function(r,o){const a=b(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.Bs.lookupMutationBatch(c,o).next(h=>(L(h!==null),u=h.keys(),a.Bs.removeMutationBatch(c,h))).next(()=>a.Bs.performConsistencyCheck(c)).next(()=>a.fi.Ks(c,u))})}(s.localStore,t);ac(s,t,n),oc(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await tn(s,i)}catch(i){await Je(i)}}function oc(e,t){(e.la.get(t)||[]).forEach(n=>{n.resolve()}),e.la.delete(t)}function ac(e,t,n){const s=b(e);let i=s.ha[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.ha[s.currentUser.toKey()]=i}}function Qs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ra.get(t))e.ia.delete(s),n&&e.sa.wa(s,n);e.ra.delete(t),e.isPrimaryClient&&e.ca.vi(t).forEach(s=>{e.ca.containsKey(s)||cc(e,s)})}function cc(e,t){e.oa.delete(t.path.canonicalString());const n=e.ua.get(t);n!==null&&(Wa(e.remoteStore,n),e.ua=e.ua.remove(t),e.aa.delete(n),Ki(e))}function Jr(e,t,n){for(const s of n)s instanceof sc?(e.ca.addReference(s.key,t),Mf(e,s)):s instanceof ic?(v("SyncEngine","Document no longer in limbo: "+s.key),e.ca.removeReference(s.key,t),e.ca.containsKey(s.key)||cc(e,s.key)):S()}function Mf(e,t){const n=t.key,s=n.path.canonicalString();e.ua.get(n)||e.oa.has(s)||(v("SyncEngine","New document in limbo: "+n),e.oa.add(s),Ki(e))}function Ki(e){for(;e.oa.size>0&&e.ua.size<e.maxConcurrentLimboResolutions;){const t=e.oa.values().next().value;e.oa.delete(t);const n=new E(P.fromString(t)),s=e.fa.next();e.aa.set(s,new Sf(n)),e.ua=e.ua.insert(n,s),Ga(e.remoteStore,new xt(jt(Wn(n.path)),s,2,bi.A))}}async function tn(e,t,n){const s=b(e),i=[],r=[],o=[];s.ia.isEmpty()||(s.ia.forEach((a,c)=>{o.push(s._a(c,t,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),i.push(u);const h=Oi.Ys(c.targetId,u);r.push(h)}}))}),await Promise.all(o),s.sa.zo(i),await async function(a,c){const u=b(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(c,l=>p.forEach(l.Hs,d=>u.persistence.referenceDelegate.addReference(h,l.targetId,d)).next(()=>p.forEach(l.Js,d=>u.persistence.referenceDelegate.removeReference(h,l.targetId,d)))))}catch(h){if(!Qe(h))throw h;v("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const d=u.ui.get(l),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.ui=u.ui.insert(l,y)}}}(s.localStore,r))}async function Lf(e,t){const n=b(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await qa(n.localStore,t);n.currentUser=t,function(i,r){i.la.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,r))})}),i.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await tn(n,s.di)}}function xf(e,t){const n=b(e),s=n.aa.get(t);if(s&&s.na)return x().add(s.key);{let i=x();const r=n.ra.get(t);if(!r)return i;for(const o of r){const a=n.ia.get(o);i=i.unionWith(a.view.ju)}return i}}function Of(e){const t=b(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=rc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Nf.bind(null,t),t.sa.zo=wf.bind(null,t.eventManager),t.sa.wa=Ef.bind(null,t.eventManager),t}function Pf(e){const t=b(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=kf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Rf.bind(null,t),t}class Vf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Zn(t.databaseInfo.databaseId),this.sharedClientState=this.ga(t),this.persistence=this.ya(t),await this.persistence.start(),this.gcScheduler=this.pa(t),this.localStore=this.Ia(t)}pa(t){return null}Ia(t){return Od(this.persistence,new Ld,t.initialUser,this.M)}ya(t){return new Wd(Vi.Yi,this.M)}ga(t){return new Yd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ff{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qr(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lf.bind(null,this.syncEngine),await mf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new vf}createDatastore(t){const n=Zn(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new tf(i));var i;return function(r,o,a,c){return new sf(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>Qr(this.syncEngine,a,0),o=Wr.vt()?new Wr:new Qd,new of(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,u){const h=new Cf(s,i,r,o,a,c);return u&&(h.da=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=b(t);v("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Ze(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */class uc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ea(this.observer.next,t)}error(t){this.observer.error?this.Ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Aa(){this.muted=!0}Ea(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class Bf{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=ya.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{v("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(v("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ji(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Uf(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await qa(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function $f(e,t){e.asyncQueue.verifyOperationInProgress();const n=await jf(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>Xr(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Xr(t.remoteStore,r)),e.onlineComponents=t}async function jf(e){return e.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await Uf(e,new Vf)),e.offlineComponents}async function hc(e){return e.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await $f(e,new Ff)),e.onlineComponents}function qf(e){return hc(e).then(t=>t.syncEngine)}async function Js(e){const t=await hc(e),n=t.eventManager;return n.onListen=Af.bind(null,t.syncEngine),n.onUnlisten=_f.bind(null,t.syncEngine),n}function Kf(e,t,n={}){const s=new Tt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const u=new uc({next:l=>{r.enqueueAndForget(()=>ec(i,h));const d=l.docs.has(o);!d&&l.fromCache?c.reject(new w(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&l.fromCache&&a&&a.source==="server"?c.reject(new w(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new nc(Wn(o.path),u,{includeMetadataChanges:!0,ku:!0});return tc(i,h)}(await Js(e),e.asyncQueue,t,n,s)),s.promise}const Zr=new Map;/**
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
 */function lc(e,t,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Hf(e,t,n,s){if(t===!0&&s===!0)throw new w(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function to(e){if(!E.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function eo(e){if(E.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Hi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":S()}function Ot(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hi(e);throw new w(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class no{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Hf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class zi{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new no({}),this._settingsFrozen=!1,t instanceof re?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new re(i.options.projectId)}(t))}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new no(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new dl;switch(n.type){case"gapi":const s=n.client;return L(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new gl(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Zr.get(t);n&&(v("ComponentProvider","Removing Datastore"),Zr.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class ot{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new It(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ot(this.firestore,t,this._key)}}class en{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new en(this.firestore,t,this._query)}}class It extends en{constructor(t,n,s){super(t,n,Wn(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new E(t))}withConverter(t){return new It(this.firestore,t,this._path)}}function zf(e,t,...n){if(e=yt(e),lc("collection","path",t),e instanceof zi){const s=P.fromString(t,...n);return eo(s),new It(e,null,s)}{if(!(e instanceof ot||e instanceof It))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(P.fromString(t,...n));return eo(s),new It(e.firestore,null,s)}}function Gf(e,t,...n){if(e=yt(e),arguments.length===1&&(t=ya.R()),lc("doc","path",t),e instanceof zi){const s=P.fromString(t,...n);return to(s),new ot(e,null,new E(s))}{if(!(e instanceof ot||e instanceof It))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(P.fromString(t,...n));return to(s),new ot(e.firestore,e instanceof It?e.converter:null,new E(s))}}/**
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
 */class Wf{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new Ha(this,"async_queue_retry"),this.Qa=()=>{const n=Ss();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const t=Ss();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ja(),this.Wa(t)}enterRestrictedMode(t){if(!this.Ba){this.Ba=!0,this.Ka=t||!1;const n=Ss();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Qa)}}enqueue(t){if(this.ja(),this.Ba)return new Promise(()=>{});const n=new Tt;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.$a.push(t),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(t){if(!Qe(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(t){const n=this.Fa.then(()=>(this.qa=!0,t().catch(s=>{this.Ua=s,this.qa=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw St("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.qa=!1,s))));return this.Fa=n,n}enqueueAfterDelay(t,n,s){this.ja(),this.Ga.indexOf(t)>-1&&(n=0);const i=$i.createAndSchedule(this,t,n,s,r=>this.Ha(r));return this.La.push(i),i}ja(){this.Ua&&S()}verifyOperationInProgress(){}async Ja(){let t;do t=this.Fa,await t;while(t!==this.Fa)}Ya(t){for(const n of this.La)if(n.timerId===t)return!0;return!1}Xa(t){return this.Ja().then(()=>{this.La.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.La)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Ja()})}Za(t){this.Ga.push(t)}Ha(t){const n=this.La.indexOf(t);this.La.splice(n,1)}}function so(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Fe extends zi{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new Wf,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||dc(this),this._firestoreClient.terminate()}}function Xf(e=Gu()){return ju(e,"firestore").getImmediate()}function Gi(e){return e._firestoreClient||dc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function dc(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Tl(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Bf(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class ns{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ue{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ue(W.fromBase64String(t))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ue(W.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Wi{constructor(t){this._methodName=t}}/**
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
 */class Xi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}/**
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
 */const Yf=/^__.*__$/;class fc{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Xe(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function pc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class Yi{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=i,r===void 0&&this.tc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(t){return new Yi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.nc({path:s,ic:!1});return i.rc(t),i}oc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.nc({path:s,ic:!1});return i.tc(),i}uc(t){return this.nc({path:void 0,ic:!0})}ac(t){return Rn(t,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}tc(){if(this.path)for(let t=0;t<this.path.length;t++)this.rc(this.path.get(t))}rc(t){if(t.length===0)throw this.ac("Document fields must not be empty");if(pc(this.ec)&&Yf.test(t))throw this.ac('Document fields cannot begin and end with "__"')}}class Qf{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.M=s||Zn(t)}lc(t,n,s,i=!1){return new Yi({ec:t,methodName:n,hc:s,path:it.emptyPath(),ic:!1,cc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Jf(e){const t=e._freezeSettings(),n=Zn(e._databaseId);return new Qf(e._databaseId,!!t.ignoreUndefinedProperties,n)}class ss extends Wi{_toFieldTransform(t){if(t.ec!==2)throw t.ec===1?t.ac(`${this._methodName}() can only appear at the top level of your update data`):t.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ss}}function Zf(e,t,n,s){const i=e.lc(1,t,n);mc("Data must be an object, but it was:",i,s);const r=[],o=dt.empty();Ht(s,(c,u)=>{const h=Qi(t,c,n);u=yt(u);const l=i.oc(h);if(u instanceof ss)r.push(h);else{const d=is(u,l);d!=null&&(r.push(h),o.set(h,d))}});const a=new _i(r);return new fc(o,a,i.fieldTransforms)}function tp(e,t,n,s,i,r){const o=e.lc(1,t,n),a=[io(t,s,n)],c=[i];if(r.length%2!=0)throw new w(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(io(t,r[d])),c.push(r[d+1]);const u=[],h=dt.empty();for(let d=a.length-1;d>=0;--d)if(!sp(u,a[d])){const g=a[d];let y=c[d];y=yt(y);const T=o.oc(g);if(y instanceof ss)u.push(g);else{const C=is(y,T);C!=null&&(u.push(g),h.set(g,C))}}const l=new _i(u);return new fc(h,l,o.fieldTransforms)}function is(e,t){if(gc(e=yt(e)))return mc("Unsupported field value:",t,e),ep(e,t);if(e instanceof Wi)return function(n,s){if(!pc(s.ec))throw s.ac(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ac(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ic&&t.ec!==4)throw t.ac("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=is(o,s.uc(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=yt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ql(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Z.fromDate(n);return{timestampValue:Nn(s.M,i)}}if(n instanceof Z){const i=new Z(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Nn(s.M,i)}}if(n instanceof Xi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ue)return{bytesValue:Fa(s.M,n._byteString)};if(n instanceof ot){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ac(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Li(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ac(`Unsupported field value: ${Hi(n)}`)}(e,t)}function ep(e,t){const n={};return va(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ht(e,(s,i)=>{const r=is(i,t.sc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function gc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Z||e instanceof Xi||e instanceof ue||e instanceof ot||e instanceof Wi)}function mc(e,t,n){if(!gc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Hi(n);throw s==="an object"?t.ac(e+" a custom object"):t.ac(e+" "+s)}}function io(e,t,n){if((t=yt(t))instanceof ns)return t._internalPath;if(typeof t=="string")return Qi(e,t);throw Rn("Field path arguments must be of type string or ",e,!1,void 0,n)}const np=new RegExp("[~\\*/\\[\\]]");function Qi(e,t,n){if(t.search(np)>=0)throw Rn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ns(...t.split("."))._internalPath}catch{throw Rn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Rn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new w(f.INVALID_ARGUMENT,a+e+c)}function sp(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class yc{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ip(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ji("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ip extends yc{data(){return super.data()}}function Ji(e,t){return typeof t=="string"?Qi(e,t):t instanceof ns?t._internalPath:t._delegate._internalPath}/**
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
 */class we{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class vc extends yc{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new dn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Ji("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class dn extends vc{data(t={}){return super.data(t)}}class rp{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new we(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new dn(this._firestore,this._userDataWriter,s.key,s,new we(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new dn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new we(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new dn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new we(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:op(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function op(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}/**
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
 */function ap(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cp{}function up(e,...t){for(const n of t)e=n._apply(e);return e}class hp extends cp{constructor(t,n){super(),this._c=t,this.gc=n,this.type="orderBy"}_apply(t){const n=function(s,i,r){if(s.startAt!==null)throw new w(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new w(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Zt(i,r);return function(a,c){if(Sa(a)===null){const u=Ca(a);u!==null&&dp(a,u,c.field)}}(s,o),o}(t._query,this._c,this.gc);return new en(t.firestore,t.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new We(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function lp(e,t="asc"){const n=t,s=Ji("orderBy",e);return new hp(s,n)}function dp(e,t,n){if(!n.isEqual(t))throw new w(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class fp{convertValue(t,n="none"){switch(Ut(t)){case 0:return null;case 1:return t.booleanValue;case 2:return B(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ie(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw S()}}convertObject(t,n){const s={};return Ht(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Xi(B(t.latitude),B(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Ea(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Le(t));default:return null}}convertTimestamp(t){const n=Ct(t);return new Z(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=P.fromString(t);L(ja(s));const i=new re(s.get(1),s.get(3)),r=new E(s.popFirst(5));return i.isEqual(n)||St(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function pp(e){e=Ot(e,ot);const t=Ot(e.firestore,Fe);return Kf(Gi(t),e._key).then(n=>Ec(t,e,n))}class wc extends fp{constructor(t){super(),this.firestore=t}convertBytes(t){return new ue(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function gp(e,t,n,...s){e=Ot(e,ot);const i=Ot(e.firestore,Fe),r=Jf(i);let o;return o=typeof(t=yt(t))=="string"||t instanceof ns?tp(r,"updateDoc",e._key,t,n,s):Zf(r,"updateDoc",e._key,t),yp(i,[o.toMutation(e._key,te.exists(!0))])}function mp(e,...t){var n,s,i;e=yt(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||so(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(so(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let c,u,h;if(e instanceof ot)u=Ot(e.firestore,Fe),h=Wn(e._key.path),c={next:l=>{t[o]&&t[o](Ec(u,e,l))},error:t[o+1],complete:t[o+2]};else{const l=Ot(e,en);u=Ot(l.firestore,Fe),h=l._query;const d=new wc(u);c={next:g=>{t[o]&&t[o](new rp(u,d,l,g))},error:t[o+1],complete:t[o+2]},ap(e._query)}return function(l,d,g,y){const T=new uc(y),C=new nc(d,T,g);return l.asyncQueue.enqueueAndForget(async()=>tc(await Js(l),C)),()=>{T.Aa(),l.asyncQueue.enqueueAndForget(async()=>ec(await Js(l),C))}}(Gi(u),h,a,c)}function yp(e,t){return function(n,s){const i=new Tt;return n.asyncQueue.enqueueAndForget(async()=>Df(await qf(n),s,i)),i.promise}(Gi(e),t)}function Ec(e,t,n){const s=n.docs.get(t._key),i=new wc(e);return new vc(e,i,t._key,s,new we(n.hasPendingWrites,n.fromCache),t.converter)}(function(e,t=!0){(function(n){fe=n})(Hu),gn(new Ae("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new Fe(i,new fl(n.getProvider("auth-internal")),new yl(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),Qt(br,"3.4.9",e),Qt(br,"3.4.9","esm2017")})();function ro(e,t,n){const s=e.slice();return s[7]=t[n].task,s[8]=t[n].desc,s[9]=t[n].isComplete,s[10]=t[n].id,s[12]=n,s}function vp(e){let t;return{c(){t=ct("hr"),this.h()},l(n){t=ut(n,"HR",{class:!0}),this.h()},h(){ft(t,"class","svelte-1l80vlc")},m(n,s){fn(n,t,s)},d(n){n&&Y(t)}}}function oo(e){let t,n,s,i,r,o=e[7]+"",a,c,u,h=e[8]+"",l,d,g,y,T;function C(){return e[2](e[10])}let M=e[12]!=2&&vp();return{c(){t=ct("li"),n=ct("div"),s=ct("div"),i=kt(),r=ct("h2"),a=Ee(o),c=kt(),u=ct("p"),l=Ee(h),d=kt(),M&&M.c(),g=kt(),this.h()},l(A){t=ut(A,"LI",{});var R=lt(t);n=ut(R,"DIV",{class:!0});var at=lt(n);s=ut(at,"DIV",{class:!0}),lt(s).forEach(Y),i=Rt(at),r=ut(at,"H2",{class:!0});var wt=lt(r);a=Te(wt,o),wt.forEach(Y),at.forEach(Y),c=Rt(R),u=ut(R,"P",{class:!0});var Dt=lt(u);l=Te(Dt,h),Dt.forEach(Y),d=Rt(R),M&&M.l(R),R.forEach(Y),g=Rt(A),this.h()},h(){ft(s,"class","circle svelte-1l80vlc"),Gt(s,"filled-circle",e[9]),ft(r,"class","text-[30px] font-bold mt-2 svelte-1l80vlc"),Gt(r,"strikethrough",e[9]),ft(n,"class","flex items-center mt-5 mb-2"),ft(u,"class","mb-16 svelte-1l80vlc"),Gt(u,"strikethrough",e[9])},m(A,R){fn(A,t,R),V(t,n),V(n,s),V(n,i),V(n,r),V(r,a),V(t,c),V(t,u),V(u,l),V(t,d),M&&M.m(t,null),fn(A,g,R),y||(T=Nc(n,"click",C),y=!0)},p(A,R){e=A,R&1&&Gt(s,"filled-circle",e[9]),R&1&&o!==(o=e[7]+"")&&er(a,o),R&1&&Gt(r,"strikethrough",e[9]),R&1&&h!==(h=e[8]+"")&&er(l,h),R&1&&Gt(u,"strikethrough",e[9])},d(A){A&&Y(t),M&&M.d(),A&&Y(g),y=!1,T()}}}function wp(e){let t,n,s,i,r,o,a,c,u,h,l,d,g,y=e[0],T=[];for(let C=0;C<y.length;C+=1)T[C]=oo(ro(e,y,C));return{c(){t=ct("main"),n=ct("section"),s=ct("div"),i=ct("h1"),r=Ee("To-do"),o=kt(),a=ct("h2"),c=Ee("Due @ 9:00 PM"),u=kt(),h=ct("div"),l=Ee("$5"),d=kt(),g=ct("ol");for(let C=0;C<T.length;C+=1)T[C].c();this.h()},l(C){t=ut(C,"MAIN",{class:!0});var M=lt(t);n=ut(M,"SECTION",{class:!0});var A=lt(n);s=ut(A,"DIV",{});var R=lt(s);i=ut(R,"H1",{class:!0});var at=lt(i);r=Te(at,"To-do"),at.forEach(Y),o=Rt(R),a=ut(R,"H2",{class:!0});var wt=lt(a);c=Te(wt,"Due @ 9:00 PM"),wt.forEach(Y),R.forEach(Y),u=Rt(A),h=ut(A,"DIV",{class:!0});var Dt=lt(h);l=Te(Dt,"$5"),Dt.forEach(Y),A.forEach(Y),d=Rt(M),g=ut(M,"OL",{});var me=lt(g);for(let rs=0;rs<T.length;rs+=1)T[rs].l(me);me.forEach(Y),M.forEach(Y),this.h()},h(){ft(i,"class","text-[50px]"),ft(a,"class","text-[30px]"),ft(h,"class","text-[50px]"),ft(n,"class","flex justify-between items-center font-bold mb-10"),ft(t,"class","text-white my-[49px] mx-[35px]")},m(C,M){fn(C,t,M),V(t,n),V(n,s),V(s,i),V(i,r),V(s,o),V(s,a),V(a,c),V(n,u),V(n,h),V(h,l),V(t,d),V(t,g);for(let A=0;A<T.length;A+=1)T[A].m(g,null)},p(C,[M]){if(M&3){y=C[0];let A;for(A=0;A<y.length;A+=1){const R=ro(C,y,A);T[A]?T[A].p(R,M):(T[A]=oo(R),T[A].c(),T[A].m(g,null))}for(;A<T.length;A+=1)T[A].d(1);T.length=y.length}},i:nr,o:nr,d(C){C&&Y(t),kc(T,C)}}}function Ep(e,t,n){let s=[],i;zu(Mc);const r=Xf(),o=zf(r,"todos"),a=up(o,lp("createdAt"));Rc(async()=>{mp(a,h=>{let l=[];h.docs.forEach(d=>{l.push(as(os({},d.data()),{id:d.id}))}),n(0,s=l),console.log(s)})});const c=h=>{const l=Gf(r,"todos",h);pp(l).then(d=>{gp(l,{isComplete:!d.data().isComplete}),console.log(i)})};return[s,c,h=>c(h)]}class Sp extends bc{constructor(t){super(),_c(this,t,Ep,wp,Dc,{})}}export{Sp as default};
