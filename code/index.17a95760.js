var Uo=Object.defineProperty,Mo=Object.defineProperties;var Lo=Object.getOwnPropertyDescriptors;var Me=Object.getOwnPropertySymbols;var Bo=Object.prototype.hasOwnProperty,Do=Object.prototype.propertyIsEnumerable;var Le=(e,t,r)=>t in e?Uo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Be=(e,t)=>{for(var r in t||(t={}))Bo.call(t,r)&&Le(e,r,t[r]);if(Me)for(var r of Me(t))Do.call(t,r)&&Le(e,r,t[r]);return e},De=(e,t)=>Mo(e,Lo(t));const Ho=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}};Ho();const Io="modulepreload",He={},jo="/pwa-hello/",Vo=function(t,r){return!r||r.length===0?t():Promise.all(r.map(o=>{if(o=`${jo}${o}`,o in He)return;He[o]=!0;const n=o.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":Io,n||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),n)return new Promise((d,a)=>{s.addEventListener("load",d),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=window,ye=xt.ShadowRoot&&(xt.ShadyCSS===void 0||xt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,we=Symbol(),Ie=new WeakMap;class Hr{constructor(t,r,o){if(this._$cssResult$=!0,o!==we)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(ye&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Ie.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ie.set(r,t))}return t}toString(){return this.cssText}}const zo=e=>new Hr(typeof e=="string"?e:e+"",void 0,we),Ht=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,n,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1],e[0]);return new Hr(r,e,we)},Fo=(e,t)=>{ye?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const o=document.createElement("style"),n=xt.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,e.appendChild(o)})},je=ye?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return zo(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wt;const Tt=window,Ve=Tt.trustedTypes,Wo=Ve?Ve.emptyScript:"",ze=Tt.reactiveElementPolyfillSupport,ae={toAttribute(e,t){switch(t){case Boolean:e=e?Wo:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ir=(e,t)=>t!==e&&(t==t||e==e),qt={attribute:!0,type:String,converter:ae,reflect:!1,hasChanged:Ir};class q extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;(r=this.h)!==null&&r!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,o)=>{const n=this._$Ep(o,r);n!==void 0&&(this._$Ev.set(n,o),t.push(n))}),t}static createProperty(t,r=qt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,r);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,r,o){return{get(){return this[r]},set(n){const i=this[t];this[r]=n,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||qt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,o=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const n of o)this.createProperty(n,r[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)r.unshift(je(n))}else t!==void 0&&r.push(je(t));return r}static _$Ep(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,o;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Fo(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostConnected)===null||o===void 0?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostDisconnected)===null||o===void 0?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EO(t,r,o=qt){var n;const i=this.constructor._$Ep(t,o);if(i!==void 0&&o.reflect===!0){const s=(((n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?o.converter:ae).toAttribute(r,o.type);this._$El=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(t,r){var o;const n=this.constructor,i=n._$Ev.get(t);if(i!==void 0&&this._$El!==i){const s=n.getPropertyOptions(i),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:ae;this._$El=i,this[i]=d.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,o){let n=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Ir)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,i)=>this[i]=n),this._$Ei=void 0);let r=!1;const o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdate)===null||i===void 0?void 0:i.call(n)}),this.update(o)):this._$Ek()}catch(n){throw r=!1,this._$Ek(),n}r&&this._$AE(o)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,o)=>this._$EO(o,this[o],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}q.finalized=!0,q.elementProperties=new Map,q.elementStyles=[],q.shadowRootOptions={mode:"open"},ze==null||ze({ReactiveElement:q}),((Wt=Tt.reactiveElementVersions)!==null&&Wt!==void 0?Wt:Tt.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kt;const Ot=window,Z=Ot.trustedTypes,Fe=Z?Z.createPolicy("lit-html",{createHTML:e=>e}):void 0,L=`lit$${(Math.random()+"").slice(9)}$`,jr="?"+L,qo=`<${jr}>`,Q=document,pt=(e="")=>Q.createComment(e),ft=e=>e===null||typeof e!="object"&&typeof e!="function",Vr=Array.isArray,Ko=e=>Vr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,We=/-->/g,qe=/>/g,I=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ke=/'/g,Je=/"/g,zr=/^(?:script|style|textarea|title)$/i,Jo=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),mt=Jo(1),tt=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Ge=new WeakMap,Go=(e,t,r)=>{var o,n;const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:t;let s=i._$litPart$;if(s===void 0){const d=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;i._$litPart$=s=new $t(t.insertBefore(pt(),d),d,void 0,r!=null?r:{})}return s._$AI(e),s},Y=Q.createTreeWalker(Q,129,null,!1),Yo=(e,t)=>{const r=e.length-1,o=[];let n,i=t===2?"<svg>":"",s=st;for(let a=0;a<r;a++){const l=e[a];let u,c,h=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===st?c[1]==="!--"?s=We:c[1]!==void 0?s=qe:c[2]!==void 0?(zr.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=I):c[3]!==void 0&&(s=I):s===I?c[0]===">"?(s=n!=null?n:st,h=-1):c[1]===void 0?h=-2:(h=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?I:c[3]==='"'?Je:Ke):s===Je||s===Ke?s=I:s===We||s===qe?s=st:(s=I,n=void 0);const f=s===I&&e[a+1].startsWith("/>")?" ":"";i+=s===st?l+qo:h>=0?(o.push(u),l.slice(0,h)+"$lit$"+l.slice(h)+L+f):l+L+(h===-2?(o.push(void 0),a):f)}const d=i+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Fe!==void 0?Fe.createHTML(d):d,o]};class vt{constructor({strings:t,_$litType$:r},o){let n;this.parts=[];let i=0,s=0;const d=t.length-1,a=this.parts,[l,u]=Yo(t,r);if(this.el=vt.createElement(l,o),Y.currentNode=this.el.content,r===2){const c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(n=Y.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const h of n.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(L)){const p=u[s++];if(c.push(h),p!==void 0){const f=n.getAttribute(p.toLowerCase()+"$lit$").split(L),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:i,name:m[2],strings:f,ctor:m[1]==="."?Zo:m[1]==="?"?tn:m[1]==="@"?en:It})}else a.push({type:6,index:i})}for(const h of c)n.removeAttribute(h)}if(zr.test(n.tagName)){const c=n.textContent.split(L),h=c.length-1;if(h>0){n.textContent=Z?Z.emptyScript:"";for(let p=0;p<h;p++)n.append(c[p],pt()),Y.nextNode(),a.push({type:2,index:++i});n.append(c[h],pt())}}}else if(n.nodeType===8)if(n.data===jr)a.push({type:2,index:i});else{let c=-1;for(;(c=n.data.indexOf(L,c+1))!==-1;)a.push({type:7,index:i}),c+=L.length-1}i++}}static createElement(t,r){const o=Q.createElement("template");return o.innerHTML=t,o}}function et(e,t,r=e,o){var n,i,s,d;if(t===tt)return t;let a=o!==void 0?(n=r._$Cl)===null||n===void 0?void 0:n[o]:r._$Cu;const l=ft(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,r,o)),o!==void 0?((s=(d=r)._$Cl)!==null&&s!==void 0?s:d._$Cl=[])[o]=a:r._$Cu=a),a!==void 0&&(t=et(e,a._$AS(e,t.values),a,o)),t}class Xo{constructor(t,r){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var r;const{el:{content:o},parts:n}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Q).importNode(o,!0);Y.currentNode=i;let s=Y.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let u;l.type===2?u=new $t(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new rn(s,this,t)),this.v.push(u),l=n[++a]}d!==(l==null?void 0:l.index)&&(s=Y.nextNode(),d++)}return i}m(t){let r=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class $t{constructor(t,r,o,n){var i;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=n,this._$C_=(i=n==null?void 0:n.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$C_}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=et(this,t,r),ft(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==tt&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Ko(t)?this.O(t):this.$(t)}S(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==S&&ft(this._$AH)?this._$AA.nextSibling.data=t:this.k(Q.createTextNode(t)),this._$AH=t}T(t){var r;const{values:o,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=vt.createElement(n.h,this.options)),n);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.m(o);else{const s=new Xo(i,this),d=s.p(this.options);s.m(o),this.k(d),this._$AH=s}}_$AC(t){let r=Ge.get(t.strings);return r===void 0&&Ge.set(t.strings,r=new vt(t)),r}O(t){Vr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,n=0;for(const i of t)n===r.length?r.push(o=new $t(this.S(pt()),this.S(pt()),this,this.options)):o=r[n],o._$AI(i),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var r;this._$AM===void 0&&(this._$C_=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class It{constructor(t,r,o,n,i){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,o,n){const i=this.strings;let s=!1;if(i===void 0)t=et(this,t,r,0),s=!ft(t)||t!==this._$AH&&t!==tt,s&&(this._$AH=t);else{const d=t;let a,l;for(t=i[0],a=0;a<i.length-1;a++)l=et(this,d[o+a],r,a),l===tt&&(l=this._$AH[a]),s||(s=!ft(l)||l!==this._$AH[a]),l===S?t=S:t!==S&&(t+=(l!=null?l:"")+i[a+1]),this._$AH[a]=l}s&&!n&&this.P(t)}P(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Zo extends It{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===S?void 0:t}}const Qo=Z?Z.emptyScript:"";class tn extends It{constructor(){super(...arguments),this.type=4}P(t){t&&t!==S?this.element.setAttribute(this.name,Qo):this.element.removeAttribute(this.name)}}class en extends It{constructor(t,r,o,n,i){super(t,r,o,n,i),this.type=5}_$AI(t,r=this){var o;if((t=(o=et(this,t,r,0))!==null&&o!==void 0?o:S)===tt)return;const n=this._$AH,i=t===S&&n!==S||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==S&&(n===S||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class rn{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const Ye=Ot.litHtmlPolyfillSupport;Ye==null||Ye(vt,$t),((Kt=Ot.litHtmlVersions)!==null&&Kt!==void 0?Kt:Ot.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Jt,Gt;class V extends q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r;const o=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=o.firstChild),o}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Go(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return tt}}V.finalized=!0,V._$litElement$=!0,(Jt=globalThis.litElementHydrateSupport)===null||Jt===void 0||Jt.call(globalThis,{LitElement:V});const Xe=globalThis.litElementPolyfillSupport;Xe==null||Xe({LitElement:V});((Gt=globalThis.litElementVersions)!==null&&Gt!==void 0?Gt:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=e=>t=>typeof t=="function"?((r,o)=>(customElements.define(r,o),o))(e,t):((r,o)=>{const{kind:n,elements:i}=o;return{kind:n,elements:i,finisher(s){customElements.define(r,s)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const on=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?De(Be({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function Se(e){return(t,r)=>r!==void 0?((o,n,i)=>{n.constructor.createProperty(i,o)})(e,t,r):on(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Yt;((Yt=window.HTMLSlotElement)===null||Yt===void 0?void 0:Yt.prototype.assignedElements)!=null;function Nt(e){return e=e||[],Array.isArray(e)?e:[e]}function O(e){return`[Vaadin.Router] ${e}`}function nn(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const Rt="module",Ut="nomodule",le=[Rt,Ut];function Ze(e){if(!e.match(/.+\.[m]?js$/))throw new Error(O(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function Fr(e){if(!e||!T(e.path))throw new Error(O('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,r=["component","redirect","bundle"];if(!z(e.action)&&!Array.isArray(e.children)&&!z(e.children)&&!Mt(t)&&!r.some(o=>T(e[o])))throw new Error(O(`Expected route config "${e.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(t)if(T(t))Ze(t);else if(le.some(o=>o in t))le.forEach(o=>o in t&&Ze(t[o]));else throw new Error(O('Expected route bundle to include either "'+Ut+'" or "'+Rt+'" keys, or both'));e.redirect&&["bundle","component"].forEach(o=>{o in e&&console.warn(O(`Route config "${e.path}" has both "redirect" and "${o}" properties, and "redirect" will always override the latter. Did you mean to only use "${o}"?`))})}function Qe(e){Nt(e).forEach(t=>Fr(t))}function tr(e,t){let r=document.head.querySelector('script[src="'+e+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",e),t===Rt?r.setAttribute("type",Rt):t===Ut&&r.setAttribute(Ut,""),r.async=!0),new Promise((o,n)=>{r.onreadystatechange=r.onload=i=>{r.__dynamicImportLoaded=!0,o(i)},r.onerror=i=>{r.parentNode&&r.parentNode.removeChild(r),n(i)},r.parentNode===null?document.head.appendChild(r):r.__dynamicImportLoaded&&o()})}function sn(e){return T(e)?tr(e):Promise.race(le.filter(t=>t in e).map(t=>tr(e[t],t)))}function dt(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function Mt(e){return typeof e=="object"&&!!e}function z(e){return typeof e=="function"}function T(e){return typeof e=="string"}function Wr(e){const t=new Error(O(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const J=new class{};function an(e){const t=e.port,r=e.protocol,i=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${i}`}function er(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e.composedPath?e.composedPath():e.path||[];for(let d=0;d<r.length;d++){const a=r[d];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){t=a;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||an(t))!==window.location.origin)return;const{pathname:n,search:i,hash:s}=t;dt("go",{pathname:n,search:i,hash:s})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const ln={activate(){window.document.addEventListener("click",er)},inactivate(){window.document.removeEventListener("click",er)}},dn=/Trident/.test(navigator.userAgent);dn&&!z(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var r=document.createEvent("Event");return r.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),r.state=t.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);function rr(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:r,hash:o}=window.location;dt("go",{pathname:t,search:r,hash:o})}const cn={activate(){window.addEventListener("popstate",rr)},inactivate(){window.removeEventListener("popstate",rr)}};var it=Xr,hn=Ee,un=vn,pn=Jr,fn=Yr,qr="/",Kr="./",mn=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ee(e,t){for(var r=[],o=0,n=0,i="",s=t&&t.delimiter||qr,d=t&&t.delimiters||Kr,a=!1,l;(l=mn.exec(e))!==null;){var u=l[0],c=l[1],h=l.index;if(i+=e.slice(n,h),n=h+u.length,c){i+=c[1],a=!0;continue}var p="",f=e[n],m=l[2],A=l[3],P=l[4],x=l[5];if(!a&&i.length){var E=i.length-1;d.indexOf(i[E])>-1&&(p=i[E],i=i.slice(0,E))}i&&(r.push(i),i="",a=!1);var Oo=p!==""&&f!==void 0&&f!==p,No=x==="+"||x==="*",Ro=x==="?"||x==="*",Re=p||s,Ue=A||P;r.push({name:m||o++,prefix:p,delimiter:Re,optional:Ro,repeat:No,partial:Oo,pattern:Ue?gn(Ue):"[^"+M(Re)+"]+?"})}return(i||n<e.length)&&r.push(i+e.substr(n)),r}function vn(e,t){return Jr(Ee(e,t))}function Jr(e){for(var t=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(o,n){for(var i="",s=n&&n.encode||encodeURIComponent,d=0;d<e.length;d++){var a=e[d];if(typeof a=="string"){i+=a;continue}var l=o?o[a.name]:void 0,u;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var c=0;c<l.length;c++){if(u=s(l[c],a),!t[d].test(u))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(c===0?a.prefix:a.delimiter)+u}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(u=s(String(l),a),!t[d].test(u))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+u+'"');i+=a.prefix+u;continue}if(a.optional){a.partial&&(i+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return i}}function M(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function gn(e){return e.replace(/([=!:$/()])/g,"\\$1")}function Gr(e){return e&&e.sensitive?"":"i"}function bn(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var o=0;o<r.length;o++)t.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function _n(e,t,r){for(var o=[],n=0;n<e.length;n++)o.push(Xr(e[n],t,r).source);return new RegExp("(?:"+o.join("|")+")",Gr(r))}function yn(e,t,r){return Yr(Ee(e,r),t,r)}function Yr(e,t,r){r=r||{};for(var o=r.strict,n=r.start!==!1,i=r.end!==!1,s=M(r.delimiter||qr),d=r.delimiters||Kr,a=[].concat(r.endsWith||[]).map(M).concat("$").join("|"),l=n?"^":"",u=e.length===0,c=0;c<e.length;c++){var h=e[c];if(typeof h=="string")l+=M(h),u=c===e.length-1&&d.indexOf(h[h.length-1])>-1;else{var p=h.repeat?"(?:"+h.pattern+")(?:"+M(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;t&&t.push(h),h.optional?h.partial?l+=M(h.prefix)+"("+p+")?":l+="(?:"+M(h.prefix)+"("+p+"))?":l+=M(h.prefix)+"("+p+")"}}return i?(o||(l+="(?:"+s+")?"),l+=a==="$"?"$":"(?="+a+")"):(o||(l+="(?:"+s+"(?="+a+"))?"),u||(l+="(?="+s+"|"+a+")")),new RegExp(l,Gr(r))}function Xr(e,t,r){return e instanceof RegExp?bn(e,t):Array.isArray(e)?_n(e,t,r):yn(e,t,r)}it.parse=hn;it.compile=un;it.tokensToFunction=pn;it.tokensToRegExp=fn;const{hasOwnProperty:wn}=Object.prototype,de=new Map;de.set("|false",{keys:[],pattern:/(?:)/});function or(e){try{return decodeURIComponent(e)}catch{return e}}function $n(e,t,r,o,n){r=!!r;const i=`${e}|${r}`;let s=de.get(i);if(!s){const l=[];s={keys:l,pattern:it(e,l,{end:r,strict:e===""})},de.set(i,s)}const d=s.pattern.exec(t);if(!d)return null;const a=Object.assign({},n);for(let l=1;l<d.length;l++){const u=s.keys[l-1],c=u.name,h=d[l];(h!==void 0||!wn.call(a,c))&&(u.repeat?a[c]=h?h.split(u.delimiter).map(or):[]:a[c]=h&&or(h))}return{path:d[0],keys:(o||[]).concat(s.keys),params:a}}function Zr(e,t,r,o,n){let i,s,d=0,a=e.path||"";return a.charAt(0)==="/"&&(r&&(a=a.substr(1)),r=!0),{next(l){if(e===l)return{done:!0};const u=e.__children=e.__children||e.children;if(!i&&(i=$n(a,t,!u,o,n),i))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&u)for(;d<u.length;){if(!s){const h=u[d];h.parent=e;let p=i.path.length;p>0&&t.charAt(p)==="/"&&(p+=1),s=Zr(h,t.substr(p),r,i.keys,i.params)}const c=s.next(l);if(!c.done)return{done:!1,value:c.value};s=null,d++}return{done:!0}}}}function Sn(e){if(z(e.route.action))return e.route.action(e)}function En(e,t){let r=t;for(;r;)if(r=r.parent,r===e)return!0;return!1}function An(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const r=(e.route||{}).path;return r&&(t+=` Resolution had failed on route: '${r}'`),t}function xn(e,t){const{route:r,path:o}=t;if(r&&!r.__synthetic){const n={path:o,route:r};if(!e.chain)e.chain=[];else if(r.parent){let i=e.chain.length;for(;i--&&e.chain[i].route&&e.chain[i].route!==r.parent;)e.chain.pop()}e.chain.push(n)}}class gt{constructor(t,r={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r.baseUrl||"",this.errorHandler=r.errorHandler,this.resolveRoute=r.resolveRoute||Sn,this.context=Object.assign({resolver:this},r.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){Qe(t);const r=[...Nt(t)];this.root.__children=r}addRoutes(t){return Qe(t),this.root.__children.push(...Nt(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const r=Object.assign({},this.context,T(t)?{pathname:t}:t),o=Zr(this.root,this.__normalizePathname(r.pathname),this.baseUrl),n=this.resolveRoute;let i=null,s=null,d=r;function a(l,u=i.value.route,c){const h=c===null&&i.value.route;return i=s||o.next(h),s=null,!l&&(i.done||!En(u,i.value.route))?(s=i,Promise.resolve(J)):i.done?Promise.reject(Wr(r)):(d=Object.assign(d?{chain:d.chain?d.chain.slice(0):[]}:{},r,i.value),xn(d,i.value),Promise.resolve(n(d)).then(p=>p!=null&&p!==J?(d.result=p.result||p,d):a(l,u,p)))}return r.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const u=An(d);if(l?console.warn(u):l=new Error(u),l.context=l.context||d,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return d.result=this.errorHandler(l),d;throw l})}static __createUrl(t,r){return new URL(t,r)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,o=this.constructor.__createUrl(t,r).href;if(o.slice(0,r.length)===r)return o.slice(r.length)}}gt.pathToRegexp=it;const{pathToRegexp:nr}=gt,ir=new Map;function Qr(e,t,r){const o=t.name||t.component;if(o&&(e.has(o)?e.get(o).push(t):e.set(o,[t])),Array.isArray(r))for(let n=0;n<r.length;n++){const i=r[n];i.parent=t,Qr(e,i,i.__children||i.children)}}function sr(e,t){const r=e.get(t);if(r&&r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r&&r[0]}function ar(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function Cn(e,t={}){if(!(e instanceof gt))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(o,n)=>{let i=sr(r,o);if(!i&&(r.clear(),Qr(r,e.root,e.root.__children),i=sr(r,o),!i))throw new Error(`Route "${o}" not found`);let s=ir.get(i.fullPath);if(!s){let a=ar(i),l=i.parent;for(;l;){const p=ar(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const u=nr.parse(a),c=nr.tokensToFunction(u),h=Object.create(null);for(let p=0;p<u.length;p++)T(u[p])||(h[u[p].name]=!0);s={toPath:c,keys:h},ir.set(a,s),i.fullPath=a}let d=s.toPath(n,t)||"/";if(t.stringifyQueryParams&&n){const a={},l=Object.keys(n);for(let c=0;c<l.length;c++){const h=l[c];s.keys[h]||(a[h]=n[h])}const u=t.stringifyQueryParams(a);u&&(d+=u.charAt(0)==="?"?u:`?${u}`)}return d}}let lr=[];function Pn(e){lr.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),lr=e}const kn=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},Tn=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};function dr(e,t){return e.classList.add(t),new Promise(r=>{if(kn(e)){const o=e.getBoundingClientRect(),n=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;e.setAttribute("style",`position: absolute; ${n}`),Tn(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}const On=256;function Xt(e){return e!=null}function Nn(e){const t=Object.assign({},e);return delete t.next,t}function k({pathname:e="",search:t="",hash:r="",chain:o=[],params:n={},redirectFrom:i,resolver:s},d){const a=o.map(l=>l.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:r,routes:a,route:d||a.length&&a[a.length-1]||null,params:n,redirectFrom:i,getUrl:(l={})=>Pt(H.pathToRegexp.compile(to(a))(Object.assign({},n,l)),s)}}function cr(e,t){const r=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:r}}}function Rn(e,t){t.location=k(e);const r=e.chain.map(o=>o.route).indexOf(e.route);return e.chain[r].element=t,t}function Ct(e,t,r){if(z(e))return e.apply(r,t)}function hr(e,t,r){return o=>{if(o&&(o.cancel||o.redirect))return o;if(r)return Ct(r[e],t,r)}}function Un(e,t){if(!Array.isArray(e)&&!Mt(e))throw new Error(O(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const r=Nt(e);for(let o=0;o<r.length;o++)Fr(r[o]),t.__children.push(r[o])}function At(e){if(e&&e.length){const t=e[0].parentNode;for(let r=0;r<e.length;r++)t.removeChild(e[r])}}function Pt(e,t){const r=t.__effectiveBaseUrl;return r?t.constructor.__createUrl(e.replace(/^\//,""),r).pathname:e}function to(e){return e.map(t=>t.path).reduce((t,r)=>r.length?t.replace(/\/$/,"")+"/"+r.replace(/^\//,""):t,"")}class H extends gt{constructor(t,r){const o=document.head.querySelector("base"),n=o&&o.getAttribute("href");super([],Object.assign({baseUrl:n&&gt.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},r));this.resolveRoute=s=>this.__resolveRoute(s);const i=H.NavigationTrigger;H.setTriggers.apply(H,Object.keys(i).map(s=>i[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=k({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const r=t.route;let o=Promise.resolve();z(r.children)&&(o=o.then(()=>r.children(Nn(t))).then(i=>{!Xt(i)&&!z(r.children)&&(i=r.children),Un(i,r)}));const n={redirect:i=>cr(t,i),component:i=>{const s=document.createElement(i);return this.__createdByRouter.set(s,!0),s}};return o.then(()=>{if(this.__isLatestRender(t))return Ct(r.action,[t,n],r)}).then(i=>{if(Xt(i)&&(i instanceof HTMLElement||i.redirect||i===J))return i;if(T(r.redirect))return n.redirect(r.redirect);if(r.bundle)return sn(r.bundle).then(()=>{},()=>{throw new Error(O(`Bundle not found: ${r.bundle}. Check if the file name is correct`))})}).then(i=>{if(Xt(i))return i;if(T(r.component))return n.component(r.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,r=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),r||this.__onNavigationEvent(),this.ready}render(t,r){const o=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},T(t)?{pathname:t}:t,{__renderId:o});return this.ready=this.resolve(n).then(i=>this.__fullyResolveChain(i)).then(i=>{if(this.__isLatestRender(i)){const s=this.__previousContext;if(i===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=k(i),r&&this.__updateBrowserHistory(i,o===1),dt("location-changed",{router:this,location:this.location}),i.__skipAttach)return this.__copyUnchangedElements(i,s),this.__previousContext=i,this.location;this.__addAppearingContent(i,s);const d=this.__animateIfNeeded(i);return this.__runOnAfterEnterCallbacks(i),this.__runOnAfterLeaveCallbacks(i,s),d.then(()=>{if(this.__isLatestRender(i))return this.__removeDisappearingContent(),this.__previousContext=i,this.location})}}).catch(i=>{if(o===this.__lastStartedRenderId)throw r&&this.__updateBrowserHistory(n),At(this.__outlet&&this.__outlet.children),this.location=k(Object.assign(n,{resolver:this})),dt("error",Object.assign({router:this,error:i},n)),i}),this.ready}__fullyResolveChain(t,r=t){return this.__findComponentContextAfterAllRedirects(r).then(o=>{const i=o!==r?o:t,d=Pt(to(o.chain),o.resolver)===o.pathname,a=(l,u=l.route,c)=>l.next(void 0,u,c).then(h=>h===null||h===J?d?l:u.parent!==null?a(l,u.parent,h):h:h);return a(o).then(l=>{if(l===null||l===J)throw Wr(i);return l&&l!==J&&l!==o?this.__fullyResolveChain(i,l):this.__amendWithOnBeforeCallbacks(o)})})}__findComponentContextAfterAllRedirects(t){const r=t.result;return r instanceof HTMLElement?(Rn(t,r),Promise.resolve(t)):r.redirect?this.__redirect(r.redirect,t.__redirectCount,t.__renderId).then(o=>this.__findComponentContextAfterAllRedirects(o)):r instanceof Error?Promise.reject(r):Promise.reject(new Error(O(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${nn(r)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(r=>r===this.__previousContext||r===t?r:this.__fullyResolveChain(r))}__runOnBeforeCallbacks(t){const r=this.__previousContext||{},o=r.chain||[],n=t.chain;let i=Promise.resolve();const s=()=>({cancel:!0}),d=a=>cr(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,o.length){for(let a=0;a<Math.min(o.length,n.length)&&!(o[a].route!==n[a].route||o[a].path!==n[a].path&&o[a].element!==n[a].element||!this.__isReusableElement(o[a].element,n[a].element));a=++t.__divergedChainIndex);if(t.__skipAttach=n.length===o.length&&t.__divergedChainIndex==n.length&&this.__isReusableElement(t.result,r.result),t.__skipAttach){for(let a=n.length-1;a>=0;a--)i=this.__runOnBeforeLeaveCallbacks(i,t,{prevent:s},o[a]);for(let a=0;a<n.length;a++)i=this.__runOnBeforeEnterCallbacks(i,t,{prevent:s,redirect:d},n[a]),o[a].element.location=k(t,o[a].route)}else for(let a=o.length-1;a>=t.__divergedChainIndex;a--)i=this.__runOnBeforeLeaveCallbacks(i,t,{prevent:s},o[a])}if(!t.__skipAttach)for(let a=0;a<n.length;a++)a<t.__divergedChainIndex?a<o.length&&o[a].element&&(o[a].element.location=k(t,o[a].route)):(i=this.__runOnBeforeEnterCallbacks(i,t,{prevent:s,redirect:d},n[a]),n[a].element&&(n[a].element.location=k(t,n[a].route)));return i.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,r,o,n){const i=k(r);return t.then(s=>{if(this.__isLatestRender(r))return hr("onBeforeLeave",[i,o,this],n.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(t,r,o,n){const i=k(r,n.route);return t.then(s=>{if(this.__isLatestRender(r))return hr("onBeforeEnter",[i,o,this],n.element)(s)})}__isReusableElement(t,r){return t&&r?this.__createdByRouter.get(t)&&this.__createdByRouter.get(r)?t.localName===r.localName:t===r:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,r,o){if(r>On)throw new Error(O(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(r||0)+1,__renderId:o})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(O(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:r="",hash:o=""},n){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==o){const i=n?"replaceState":"pushState";window.history[i](null,document.title,t+r+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,r){let o=this.__outlet;for(let n=0;n<t.__divergedChainIndex;n++){const i=r&&r.chain[n].element;if(i)if(i.parentNode===o)t.chain[n].element=i,o=i;else break}return o}__addAppearingContent(t,r){this.__ensureOutlet(),this.__removeAppearingContent();const o=this.__copyUnchangedElements(t,r);this.__appearingContent=[],this.__disappearingContent=Array.from(o.children).filter(i=>this.__addedByRouter.get(i)&&i!==t.result);let n=o;for(let i=t.__divergedChainIndex;i<t.chain.length;i++){const s=t.chain[i].element;s&&(n.appendChild(s),this.__addedByRouter.set(s,!0),n===o&&this.__appearingContent.push(s),n=s)}}__removeDisappearingContent(){this.__disappearingContent&&At(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(At(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,r){if(!!r)for(let o=r.chain.length-1;o>=t.__divergedChainIndex&&this.__isLatestRender(t);o--){const n=r.chain[o].element;if(!!n)try{const i=k(t);Ct(n.onAfterLeave,[i,{},r.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&At(n.children)}}}__runOnAfterEnterCallbacks(t){for(let r=t.__divergedChainIndex;r<t.chain.length&&this.__isLatestRender(t);r++){const o=t.chain[r].element||{},n=k(t,t.chain[r].route);Ct(o.onAfterEnter,[n,{},t.resolver],o)}}__animateIfNeeded(t){const r=(this.__disappearingContent||[])[0],o=(this.__appearingContent||[])[0],n=[],i=t.chain;let s;for(let d=i.length;d>0;d--)if(i[d-1].route.animate){s=i[d-1].route.animate;break}if(r&&o&&s){const d=Mt(s)&&s.leave||"leaving",a=Mt(s)&&s.enter||"entering";n.push(dr(r,d)),n.push(dr(o,a))}return Promise.all(n).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:r,search:o,hash:n}=t?t.detail:window.location;T(this.__normalizePathname(r))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:r,search:o,hash:n},!0))}static setTriggers(...t){Pn(t)}urlForName(t,r){return this.__urlForName||(this.__urlForName=Cn(this)),Pt(this.__urlForName(t,r),this)}urlForPath(t,r){return Pt(H.pathToRegexp.compile(t)(r),this)}static go(t){const{pathname:r,search:o,hash:n}=T(t)?this.__createUrl(t,"http://a"):t;return dt("go",{pathname:r,search:o,hash:n})}}const Mn=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,kt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Ln(){function e(){return!0}return eo(e)}function Bn(){try{return Dn()?!0:Hn()?kt?!In():!Ln():!1}catch{return!1}}function Dn(){return localStorage.getItem("vaadin.developmentmode.force")}function Hn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function In(){return!!(kt&&Object.keys(kt).map(t=>kt[t]).filter(t=>t.productionMode).length>0)}function eo(e,t){if(typeof e!="function")return;const r=Mn.exec(e.toString());if(r)try{e=new Function(r[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return e(t)}window.Vaadin=window.Vaadin||{};const ur=function(e,t){if(window.Vaadin.developmentMode)return eo(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Bn());function jn(){}const Vn=function(){if(typeof ur=="function")return ur(jn)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Vn();H.NavigationTrigger={POPSTATE:cn,CLICK:ln};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const pr=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,ce=(e,t,r=null)=>{for(;t!==r;){const o=t.nextSibling;e.removeChild(t),t=o}},U=`{{lit-${String(Math.random()).slice(2)}}}`,ro=`<!--${U}-->`,fr=new RegExp(`${U}|${ro}`);class oo{constructor(t,r){this.parts=[],this.element=r;const o=[],n=[],i=document.createTreeWalker(r.content,133,null,!1);let s=0,d=-1,a=0;const{strings:l,values:{length:u}}=t;for(;a<u;){const c=i.nextNode();if(c!==null){if(d++,c.nodeType===1){if(c.hasAttributes()){const h=c.attributes,{length:p}=h;let f=0;for(let m=0;m<p;m++)mr(h[m].name,"$lit$")&&f++;for(;f-- >0;){const m=l[a],A=he.exec(m)[2],P=A.toLowerCase()+"$lit$",x=c.getAttribute(P);c.removeAttribute(P);const E=x.split(fr);this.parts.push({type:"attribute",index:d,name:A,strings:E}),a+=E.length-1}}c.tagName==="TEMPLATE"&&(n.push(c),i.currentNode=c.content)}else if(c.nodeType===3){const h=c.data;if(h.indexOf(U)>=0){const p=c.parentNode,f=h.split(fr),m=f.length-1;for(let A=0;A<m;A++){let P,x=f[A];if(x==="")P=B();else{const E=he.exec(x);E!==null&&mr(E[2],"$lit$")&&(x=x.slice(0,E.index)+E[1]+E[2].slice(0,-5)+E[3]),P=document.createTextNode(x)}p.insertBefore(P,c),this.parts.push({type:"node",index:++d})}f[m]===""?(p.insertBefore(B(),c),o.push(c)):c.data=f[m],a+=m}}else if(c.nodeType===8)if(c.data===U){const h=c.parentNode;c.previousSibling!==null&&d!==s||(d++,h.insertBefore(B(),c)),s=d,this.parts.push({type:"node",index:d}),c.nextSibling===null?c.data="":(o.push(c),d--),a++}else{let h=-1;for(;(h=c.data.indexOf(U,h+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=n.pop()}for(const c of o)c.parentNode.removeChild(c)}}const mr=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},no=e=>e.index!==-1,B=()=>document.createComment(""),he=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function vr(e,t){const{element:{content:r},parts:o}=e,n=document.createTreeWalker(r,133,null,!1);let i=ct(o),s=o[i],d=-1,a=0;const l=[];let u=null;for(;n.nextNode();){d++;const c=n.currentNode;for(c.previousSibling===u&&(u=null),t.has(c)&&(l.push(c),u===null&&(u=c)),u!==null&&a++;s!==void 0&&s.index===d;)s.index=u!==null?-1:s.index-a,i=ct(o,i),s=o[i]}l.forEach(c=>c.parentNode.removeChild(c))}const zn=e=>{let t=e.nodeType===11?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},ct=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const o=e[r];if(no(o))return r}return-1};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Fn=new WeakMap,bt=e=>typeof e=="function"&&Fn.has(e),N={},gr={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class ue{constructor(t,r,o){this.__parts=[],this.template=t,this.processor=r,this.options=o}update(t){let r=0;for(const o of this.__parts)o!==void 0&&o.setValue(t[r]),r++;for(const o of this.__parts)o!==void 0&&o.commit()}_clone(){const t=pr?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],o=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,s=0,d=0,a=n.nextNode();for(;s<o.length;)if(i=o[s],no(i)){for(;d<i.index;)d++,a.nodeName==="TEMPLATE"&&(r.push(a),n.currentNode=a.content),(a=n.nextNode())===null&&(n.currentNode=r.pop(),a=n.nextNode());if(i.type==="node"){const l=this.processor.handleTextExpression(this.options);l.insertAfterNode(a.previousSibling),this.__parts.push(l)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));s++}else this.__parts.push(void 0),s++;return pr&&(document.adoptNode(t),customElements.upgrade(t)),t}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Wn=` ${U} `;class io{constructor(t,r,o,n){this.strings=t,this.values=r,this.type=o,this.processor=n}getHTML(){const t=this.strings.length-1;let r="",o=!1;for(let n=0;n<t;n++){const i=this.strings[n],s=i.lastIndexOf("<!--");o=(s>-1||o)&&i.indexOf("-->",s+1)===-1;const d=he.exec(i);r+=d===null?i+(o?Wn:ro):i.substr(0,d.index)+d[1]+d[2]+"$lit$"+d[3]+U}return r+=this.strings[t],r}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ae=e=>e===null||!(typeof e=="object"||typeof e=="function"),so=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class ao{constructor(t,r,o){this.dirty=!0,this.element=t,this.name=r,this.strings=o,this.parts=[];for(let n=0;n<o.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new lo(this)}_getValue(){const t=this.strings,r=t.length-1;let o="";for(let n=0;n<r;n++){o+=t[n];const i=this.parts[n];if(i!==void 0){const s=i.value;if(Ae(s)||!so(s))o+=typeof s=="string"?s:String(s);else for(const d of s)o+=typeof d=="string"?d:String(d)}}return o+=t[r],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class lo{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===N||Ae(t)&&t===this.value||(this.value=t,bt(t)||(this.committer.dirty=!0))}commit(){for(;bt(this.value);){const t=this.value;this.value=N,t(this)}this.value!==N&&this.committer.commit()}}class jt{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(B()),this.endNode=t.appendChild(B())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=B()),t.__insert(this.endNode=B())}insertAfterPart(t){t.__insert(this.startNode=B()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;bt(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=N,r(this)}const t=this.__pendingValue;t!==N&&(Ae(t)?t!==this.value&&this.__commitText(t):t instanceof io?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):so(t)?this.__commitIterable(t):t===gr?(this.value=gr,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const r=this.startNode.nextSibling,o=typeof(t=t==null?"":t)=="string"?t:String(t);r===this.endNode.previousSibling&&r.nodeType===3?r.data=o:this.__commitNode(document.createTextNode(o)),this.value=t}__commitTemplateResult(t){const r=this.options.templateFactory(t);if(this.value instanceof ue&&this.value.template===r)this.value.update(t.values);else{const o=new ue(r,t.processor,this.options),n=o._clone();o.update(t.values),this.__commitNode(n),this.value=o}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const r=this.value;let o,n=0;for(const i of t)o=r[n],o===void 0&&(o=new jt(this.options),r.push(o),n===0?o.appendIntoPart(this):o.insertAfterPart(r[n-1])),o.setValue(i),o.commit(),n++;n<r.length&&(r.length=n,this.clear(o&&o.endNode))}clear(t=this.startNode){ce(this.startNode.parentNode,t.nextSibling,this.endNode)}}class qn{constructor(t,r,o){if(this.value=void 0,this.__pendingValue=void 0,o.length!==2||o[0]!==""||o[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=r,this.strings=o}setValue(t){this.__pendingValue=t}commit(){for(;bt(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=N,r(this)}if(this.__pendingValue===N)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=N}}class Kn extends ao{constructor(t,r,o){super(t,r,o),this.single=o.length===2&&o[0]===""&&o[1]===""}_createPart(){return new Jn(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Jn extends lo{}let co=!1;(()=>{try{const e={get capture(){return co=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{}})();class Gn{constructor(t,r,o){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=r,this.eventContext=o,this.__boundHandleEvent=n=>this.handleEvent(n)}setValue(t){this.__pendingValue=t}commit(){for(;bt(this.__pendingValue);){const i=this.__pendingValue;this.__pendingValue=N,i(this)}if(this.__pendingValue===N)return;const t=this.__pendingValue,r=this.value,o=t==null||r!=null&&(t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive),n=t!=null&&(r==null||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=Yn(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=N}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Yn=e=>e&&(co?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function Xn(e){let t=_t.get(e.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},_t.set(e.type,t));let r=t.stringsArray.get(e.strings);if(r!==void 0)return r;const o=e.strings.join(U);return r=t.keyString.get(o),r===void 0&&(r=new oo(e,e.getTemplateElement()),t.keyString.set(o,r)),t.stringsArray.set(e.strings,r),r}const _t=new Map,W=new WeakMap;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Zn=new class{handleAttributeExpressions(e,t,r,o){const n=t[0];return n==="."?new Kn(e,t.slice(1),r).parts:n==="@"?[new Gn(e,t.slice(1),o.eventContext)]:n==="?"?[new qn(e,t.slice(1),r)]:new ao(e,t,r).parts}handleTextExpression(e){return new jt(e)}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const C=(e,...t)=>new io(e,t,"html",Zn),ho=(e,t)=>`${e}--${t}`;let Lt=!0;window.ShadyCSS===void 0?Lt=!1:window.ShadyCSS.prepareTemplateDom===void 0&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Lt=!1);const Qn=e=>t=>{const r=ho(t.type,e);let o=_t.get(r);o===void 0&&(o={stringsArray:new WeakMap,keyString:new Map},_t.set(r,o));let n=o.stringsArray.get(t.strings);if(n!==void 0)return n;const i=t.strings.join(U);if(n=o.keyString.get(i),n===void 0){const s=t.getTemplateElement();Lt&&window.ShadyCSS.prepareTemplateDom(s,e),n=new oo(t,s),o.keyString.set(i,n)}return o.stringsArray.set(t.strings,n),n},ti=["html","svg"],uo=new Set,ei=(e,t,r)=>{uo.add(e);const o=r?r.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:i}=n;if(i===0)return void window.ShadyCSS.prepareTemplateStyles(o,e);const s=document.createElement("style");for(let l=0;l<i;l++){const u=n[l];u.parentNode.removeChild(u),s.textContent+=u.textContent}(l=>{ti.forEach(u=>{const c=_t.get(ho(u,l));c!==void 0&&c.keyString.forEach(h=>{const{element:{content:p}}=h,f=new Set;Array.from(p.querySelectorAll("style")).forEach(m=>{f.add(m)}),vr(h,f)})})})(e);const d=o.content;r?function(l,u,c=null){const{element:{content:h},parts:p}=l;if(c==null)return void h.appendChild(u);const f=document.createTreeWalker(h,133,null,!1);let m=ct(p),A=0,P=-1;for(;f.nextNode();)for(P++,f.currentNode===c&&(A=zn(u),c.parentNode.insertBefore(u,c));m!==-1&&p[m].index===P;){if(A>0){for(;m!==-1;)p[m].index+=A,m=ct(p,m);return}m=ct(p,m)}}(r,s,d.firstChild):d.insertBefore(s,d.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const a=d.querySelector("style");if(window.ShadyCSS.nativeShadow&&a!==null)t.insertBefore(a.cloneNode(!0),t.firstChild);else if(r){d.insertBefore(s,d.firstChild);const l=new Set;l.add(s),vr(r,l)}};window.JSCompiler_renameProperty=(e,t)=>e;const pe={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return e!==null;case Number:return e===null?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},po=(e,t)=>t!==e&&(t==t||e==e),Zt={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:po};class fo extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((r,o)=>{const n=this._attributeNameForProperty(o,r);n!==void 0&&(this._attributeToPropertyMap.set(n,o),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;t!==void 0&&t.forEach((r,o)=>this._classProperties.set(o,r))}}static createProperty(t,r=Zt){if(this._ensureClassProperties(),this._classProperties.set(t,r),r.noAccessor||this.prototype.hasOwnProperty(t))return;const o=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,r);n!==void 0&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,r,o){return{get(){return this[r]},set(n){const i=this[t];this[r]=n,this._requestUpdate(t,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Zt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const r=this.properties,o=[...Object.getOwnPropertyNames(r),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(r):[]];for(const n of o)this.createProperty(n,r[n])}}static _attributeNameForProperty(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}static _valueHasChanged(t,r,o=po){return o(t,r)}static _propertyValueFromAttribute(t,r){const o=r.type,n=r.converter||pe,i=typeof n=="function"?n:n.fromAttribute;return i?i(t,o):t}static _propertyValueToAttribute(t,r){if(r.reflect===void 0)return;const o=r.type,n=r.converter;return(n&&n.toAttribute||pe.toAttribute)(t,o)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,r)=>{if(this.hasOwnProperty(r)){const o=this[r];delete this[r],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(r,o)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,r)=>this[r]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,r,o){r!==o&&this._attributeToProperty(t,o)}_propertyToAttribute(t,r,o=Zt){const n=this.constructor,i=n._attributeNameForProperty(t,o);if(i!==void 0){const s=n._propertyValueToAttribute(r,o);if(s===void 0)return;this._updateState=8|this._updateState,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._updateState=-9&this._updateState}}_attributeToProperty(t,r){if(8&this._updateState)return;const o=this.constructor,n=o._attributeToPropertyMap.get(t);if(n!==void 0){const i=o.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=o._propertyValueFromAttribute(r,i),this._updateState=-17&this._updateState}}_requestUpdate(t,r){let o=!0;if(t!==void 0){const n=this.constructor,i=n.getPropertyOptions(t);n._valueHasChanged(this[t],r,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,r),i.reflect!==!0||16&this._updateState||(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,r){return this._requestUpdate(t,r),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch{}const t=this.performUpdate();return t!=null&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const r=this._changedProperties;try{t=this.shouldUpdate(r),t?this.update(r):this._markUpdated()}catch(o){throw t=!1,this._markUpdated(),o}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(r)),this.updated(r))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((r,o)=>this._propertyToAttribute(o,this[o],r)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}fo.finalized=!0;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ri=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function $(e){return(t,r)=>r!==void 0?((o,n,i)=>{n.constructor.createProperty(i,o)})(e,t,r):ri(e,t)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const mo="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vo=Symbol();class br{constructor(t,r){if(r!==vo)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return this._styleSheet===void 0&&(mo?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const oi=(e,...t)=>{const r=t.reduce((o,n,i)=>o+(s=>{if(s instanceof br)return s.cssText;if(typeof s=="number")return s;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${s}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[i+1],e[0]);return new br(r,vo)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const _r={};class fe extends fo{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(t===void 0)this._styles=[];else if(Array.isArray(t)){const r=(i,s)=>i.reduceRight((d,a)=>Array.isArray(a)?r(a,d):(d.add(a),d),s),o=r(t,new Set),n=[];o.forEach(i=>n.unshift(i)),this._styles=n}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;t.length!==0&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?mo?this.renderRoot.adoptedStyleSheets=t.map(r=>r.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(r=>r.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(t){const r=this.render();super.update(t),r!==_r&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(o=>{const n=document.createElement("style");n.textContent=o.cssText,this.renderRoot.appendChild(n)}))}render(){return _r}}fe.finalized=!0,fe.render=(e,t,r)=>{if(!r||typeof r!="object"||!r.scopeName)throw new Error("The `scopeName` option is required.");const o=r.scopeName,n=W.has(t),i=Lt&&t.nodeType===11&&!!t.host,s=i&&!uo.has(o),d=s?document.createDocumentFragment():t;if(((a,l,u)=>{let c=W.get(l);c===void 0&&(ce(l,l.firstChild),W.set(l,c=new jt(Object.assign({templateFactory:Xn},u))),c.appendInto(l)),c.setValue(a),c.commit()})(e,d,Object.assign({templateFactory:Qn(o)},r)),s){const a=W.get(d);W.delete(d);const l=a.value instanceof ue?a.value.template:void 0;ei(o,d,l),ce(t,t.firstChild),t.appendChild(d),W.set(t,a)}!n&&i&&window.ShadyCSS.styleElement(t.host)};var y=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,o);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};let _=class extends fe{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",e=>this.handleInstallPromptEvent(e)),document.addEventListener("keyup",e=>{e.key==="Escape"&&this.cancel()})}static get styles(){return oi`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#openButton:focus{outline:auto;outline:-webkit-focus-ring-color auto 1px}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch{console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(e){this.deferredprompt=e,this.hasprompt=!0,e.preventDefault()}checkManifest(e){e.icons&&e.icons[0]?e.name?e.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const e=await fetch(this.manifestpath),t=await e.json();if(this.manifestdata=t,this.manifestdata)return this.checkManifest(this.manifestdata),t}catch{return null}}scrollToLeft(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:-e.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:e.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let e=new CustomEvent("show");this.dispatchEvent(e)}closePrompt(){this.openmodal=!1;let e=new CustomEvent("hide");this.dispatchEvent(e)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let e=new CustomEvent("show");if(this.dispatchEvent(e),(await this.deferredprompt.userChoice).outcome==="accepted"){await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!0}{await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((e,t)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let r=new CustomEvent("hide");this.dispatchEvent(r),e()})}render(){return C`${"standalone"in navigator&&navigator.standalone===!1||this.usecustom!==!0&&this.shouldShowInstall()&&this.installed===!1?C`<button part="openButton" id="openButton" @click="${()=>this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>`:null} ${this.openmodal===!0?C`<div id="installModalWrapper">${this.openmodal?C`<div id="background" @click="${()=>this.cancel()}"></div>`:null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath?this.iconpath:this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${()=>this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features?C`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(e=>C`<li>${e}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?C`<div id="screenshotsContainer"><button @click="${()=>this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map(e=>C`<div><img alt="App Screenshot" src="${e.src}"></div>`)}</section><button @click="${()=>this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS?C`<p id="iosText">${this.iosinstallinfotext}</p>`:C`<div id="buttonsContainer">${this.deferredprompt?C`<button id="installButton" @click="${()=>this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>`:C`<button @click="${()=>this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};var Qt;y([$({type:String})],_.prototype,"manifestpath",void 0),y([$({type:String})],_.prototype,"iconpath",void 0),y([$({type:Object})],_.prototype,"manifestdata",void 0),y([$({type:Boolean})],_.prototype,"openmodal",void 0),y([$({type:Boolean})],_.prototype,"showopen",void 0),y([$({type:Boolean})],_.prototype,"isSupportingBrowser",void 0),y([$({type:Boolean})],_.prototype,"isIOS",void 0),y([$({type:Boolean})],_.prototype,"installed",void 0),y([$({type:Boolean})],_.prototype,"hasprompt",void 0),y([$({type:Boolean})],_.prototype,"usecustom",void 0),y([$({type:Array})],_.prototype,"relatedApps",void 0),y([$({type:String})],_.prototype,"explainer",void 0),y([$({type:String})],_.prototype,"featuresheader",void 0),y([$({type:String})],_.prototype,"descriptionheader",void 0),y([$({type:String})],_.prototype,"installbuttontext",void 0),y([$({type:String})],_.prototype,"cancelbuttontext",void 0),y([$({type:String})],_.prototype,"iosinstallinfotext",void 0),y([$()],_.prototype,"deferredprompt",void 0),_=y([(Qt="pwa-install",e=>typeof e=="function"?((t,r)=>(window.customElements.define(t,r),r))(Qt,e):((t,r)=>{const{kind:o,elements:n}=r;return{kind:o,elements:n,finisher(i){window.customElements.define(t,i)}}})(Qt,e))],_);var xe=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ce=Symbol(),yr=new Map,go=class{constructor(e,t){if(this._$cssResult$=!0,t!==Ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=yr.get(this.cssText);return xe&&e===void 0&&(yr.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},ni=e=>new go(typeof e=="string"?e:e+"",Ce),Vt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,n,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1],e[0]);return new go(r,Ce)},ii=(e,t)=>{xe?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const o=document.createElement("style"),n=window.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,e.appendChild(o)})},wr=xe?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return ni(r)})(e):e,te,$r=window.trustedTypes,si=$r?$r.emptyScript:"",Sr=window.reactiveElementPolyfillSupport,me={toAttribute(e,t){switch(t){case Boolean:e=e?si:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},bo=(e,t)=>t!==e&&(t==t||e==e),ee={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:bo},K=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const o=this._$Eh(r,t);o!==void 0&&(this._$Eu.set(o,r),e.push(o))}),e}static createProperty(e,t=ee){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(o){const n=this[e];this[t]=o,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ee}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of r)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(wr(o))}else e!==void 0&&t.push(wr(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ii(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=ee){var o,n;const i=this.constructor._$Eh(e,r);if(i!==void 0&&r.reflect===!0){const s=((n=(o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&n!==void 0?n:me.toAttribute)(t,r.type);this._$Ei=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Ei=null}}_$AK(e,t){var r,o,n;const i=this.constructor,s=i._$Eu.get(e);if(s!==void 0&&this._$Ei!==s){const d=i.getPropertyOptions(s),a=d.converter,l=(n=(o=(r=a)===null||r===void 0?void 0:r.fromAttribute)!==null&&o!==void 0?o:typeof a=="function"?a:null)!==null&&n!==void 0?n:me.fromAttribute;this._$Ei=s,this[s]=l(t,d.type),this._$Ei=null}}requestUpdate(e,t,r){let o=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||bo)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((o,n)=>this[n]=o),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(r)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$ES(r,this[r],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}};K.finalized=!0,K.elementProperties=new Map,K.elementStyles=[],K.shadowRootOptions={mode:"open"},Sr==null||Sr({ReactiveElement:K}),((te=globalThis.reactiveElementVersions)!==null&&te!==void 0?te:globalThis.reactiveElementVersions=[]).push("1.3.2");var re,rt=globalThis.trustedTypes,Er=rt?rt.createPolicy("lit-html",{createHTML:e=>e}):void 0,D=`lit$${(Math.random()+"").slice(9)}$`,_o="?"+D,ai=`<${_o}>`,ot=document,yt=(e="")=>ot.createComment(e),wt=e=>e===null||typeof e!="object"&&typeof e!="function",yo=Array.isArray,li=e=>{var t;return yo(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ar=/-->/g,xr=/>/g,j=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Cr=/'/g,Pr=/"/g,wo=/^(?:script|style|textarea|title)$/i,di=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Pe=di(1),F=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),kr=new WeakMap,ci=(e,t,r)=>{var o,n;const i=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:t;let s=i._$litPart$;if(s===void 0){const d=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;i._$litPart$=s=new zt(t.insertBefore(yt(),d),d,void 0,r!=null?r:{})}return s._$AI(e),s},X=ot.createTreeWalker(ot,129,null,!1),hi=(e,t)=>{const r=e.length-1,o=[];let n,i=t===2?"<svg>":"",s=at;for(let a=0;a<r;a++){const l=e[a];let u,c,h=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===at?c[1]==="!--"?s=Ar:c[1]!==void 0?s=xr:c[2]!==void 0?(wo.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=j):c[3]!==void 0&&(s=j):s===j?c[0]===">"?(s=n!=null?n:at,h=-1):c[1]===void 0?h=-2:(h=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?j:c[3]==='"'?Pr:Cr):s===Pr||s===Cr?s=j:s===Ar||s===xr?s=at:(s=j,n=void 0);const f=s===j&&e[a+1].startsWith("/>")?" ":"";i+=s===at?l+ai:h>=0?(o.push(u),l.slice(0,h)+"$lit$"+l.slice(h)+D+f):l+D+(h===-2?(o.push(void 0),a):f)}const d=i+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Er!==void 0?Er.createHTML(d):d,o]},Bt=class{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let n=0,i=0;const s=e.length-1,d=this.parts,[a,l]=hi(e,t);if(this.el=Bt.createElement(a,r),X.currentNode=this.el.content,t===2){const u=this.el.content,c=u.firstChild;c.remove(),u.append(...c.childNodes)}for(;(o=X.nextNode())!==null&&d.length<s;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const c of o.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(D)){const h=l[i++];if(u.push(c),h!==void 0){const p=o.getAttribute(h.toLowerCase()+"$lit$").split(D),f=/([.?@])?(.*)/.exec(h);d.push({type:1,index:n,name:f[2],strings:p,ctor:f[1]==="."?pi:f[1]==="?"?mi:f[1]==="@"?vi:Ft})}else d.push({type:6,index:n})}for(const c of u)o.removeAttribute(c)}if(wo.test(o.tagName)){const u=o.textContent.split(D),c=u.length-1;if(c>0){o.textContent=rt?rt.emptyScript:"";for(let h=0;h<c;h++)o.append(u[h],yt()),X.nextNode(),d.push({type:2,index:++n});o.append(u[c],yt())}}}else if(o.nodeType===8)if(o.data===_o)d.push({type:2,index:n});else{let u=-1;for(;(u=o.data.indexOf(D,u+1))!==-1;)d.push({type:7,index:n}),u+=D.length-1}n++}}static createElement(e,t){const r=ot.createElement("template");return r.innerHTML=e,r}};function nt(e,t,r=e,o){var n,i,s,d;if(t===F)return t;let a=o!==void 0?(n=r._$Cl)===null||n===void 0?void 0:n[o]:r._$Cu;const l=wt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,r,o)),o!==void 0?((s=(d=r)._$Cl)!==null&&s!==void 0?s:d._$Cl=[])[o]=a:r._$Cu=a),a!==void 0&&(t=nt(e,a._$AS(e,t.values),a,o)),t}var ui=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:o}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ot).importNode(r,!0);X.currentNode=n;let i=X.nextNode(),s=0,d=0,a=o[0];for(;a!==void 0;){if(s===a.index){let l;a.type===2?l=new zt(i,i.nextSibling,this,e):a.type===1?l=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(l=new gi(i,this,e)),this.v.push(l),a=o[++d]}s!==(a==null?void 0:a.index)&&(i=X.nextNode(),s++)}return n}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},zt=class{constructor(e,t,r,o){var n;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cg=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=nt(this,e,t),wt(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==F&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):li(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==w&&wt(this._$AH)?this._$AA.nextSibling.data=e:this.k(ot.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Bt.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.m(r);else{const i=new ui(n,this),s=i.p(this.options);i.m(r),this.k(s),this._$AH=i}}_$AC(e){let t=kr.get(e.strings);return t===void 0&&kr.set(e.strings,t=new Bt(e)),t}S(e){yo(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const n of e)o===t.length?t.push(r=new zt(this.M(yt()),this.M(yt()),this,this.options)):r=t[o],r._$AI(n),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ft=class{constructor(e,t,r,o,n){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,o){const n=this.strings;let i=!1;if(n===void 0)e=nt(this,e,t,0),i=!wt(e)||e!==this._$AH&&e!==F,i&&(this._$AH=e);else{const s=e;let d,a;for(e=n[0],d=0;d<n.length-1;d++)a=nt(this,s[r+d],t,d),a===F&&(a=this._$AH[d]),i||(i=!wt(a)||a!==this._$AH[d]),a===w?e=w:e!==w&&(e+=(a!=null?a:"")+n[d+1]),this._$AH[d]=a}i&&!o&&this.C(e)}C(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},pi=class extends Ft{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===w?void 0:e}},fi=rt?rt.emptyScript:"",mi=class extends Ft{constructor(){super(...arguments),this.type=4}C(e){e&&e!==w?this.element.setAttribute(this.name,fi):this.element.removeAttribute(this.name)}},vi=class extends Ft{constructor(e,t,r,o,n){super(e,t,r,o,n),this.type=5}_$AI(e,t=this){var r;if((e=(r=nt(this,e,t,0))!==null&&r!==void 0?r:w)===F)return;const o=this._$AH,n=e===w&&o!==w||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==w&&(o===w||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},gi=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){nt(this,e)}},Tr=window.litHtmlPolyfillSupport;Tr==null||Tr(Bt,zt),((re=globalThis.litHtmlVersions)!==null&&re!==void 0?re:globalThis.litHtmlVersions=[]).push("2.2.4");var oe,ne,ht=class extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=ci(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return F}};ht.finalized=!0,ht._$litElement$=!0,(oe=globalThis.litElementHydrateSupport)===null||oe===void 0||oe.call(globalThis,{LitElement:ht});var Or=globalThis.litElementPolyfillSupport;Or==null||Or({LitElement:ht});((ne=globalThis.litElementVersions)!==null&&ne!==void 0?ne:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ke=Vt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,bi=Vt`
  ${ke}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,$o=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},_i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},yi=e=>(...t)=>({_$litDirective$:e,values:t}),wi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var So=yi(class extends wi{constructor(e){var t;if(super(e),e.type!==_i.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.et===void 0){this.et=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.st)===null||r===void 0)&&r.has(i))&&this.et.add(i);return this.render(t)}const n=e.element.classList;this.et.forEach(i=>{i in t||(n.remove(i),this.et.delete(i))});for(const i in t){const s=!!t[i];s===this.et.has(i)||((o=this.st)===null||o===void 0?void 0:o.has(i))||(s?(n.add(i),this.et.add(i)):(n.remove(i),this.et.delete(i)))}return F}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Eo=Object.defineProperty,$i=Object.defineProperties,Si=Object.getOwnPropertyDescriptor,Ei=Object.getOwnPropertyDescriptors,Nr=Object.getOwnPropertySymbols,Ai=Object.prototype.hasOwnProperty,xi=Object.prototype.propertyIsEnumerable,Rr=(e,t,r)=>t in e?Eo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,St=(e,t)=>{for(var r in t||(t={}))Ai.call(t,r)&&Rr(e,r,t[r]);if(Nr)for(var r of Nr(t))xi.call(t,r)&&Rr(e,r,t[r]);return e},Te=(e,t)=>$i(e,Ei(t)),v=(e,t,r,o)=>{for(var n=o>1?void 0:o?Si(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&Eo(t,r,n),n},Oe=e=>t=>typeof t=="function"?((r,o)=>(window.customElements.define(r,o),o))(e,t):((r,o)=>{const{kind:n,elements:i}=o;return{kind:n,elements:i,finisher(s){window.customElements.define(r,s)}}})(e,t),Ci=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Te(St({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function b(e){return(t,r)=>r!==void 0?((o,n,i)=>{n.constructor.createProperty(i,o)})(e,t,r):Ci(e,t)}function Pi(e){return b(Te(St({},e),{state:!0}))}var ki=({finisher:e,descriptor:t})=>(r,o)=>{var n;if(o===void 0){const i=(n=r.originalKey)!==null&&n!==void 0?n:r.key,s=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(r.key)}:Te(St({},r),{key:i});return e!=null&&(s.finisher=function(d){e(d,i)}),s}{const i=r.constructor;t!==void 0&&Object.defineProperty(r,o,t(o)),e==null||e(i,o)}};function Ti(e,t){return ki({descriptor:r=>{const o={get(){var n,i;return(i=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(t){const n=typeof r=="symbol"?Symbol():"__"+r;o.get=function(){var i,s;return this[n]===void 0&&(this[n]=(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&s!==void 0?s:null),this[n]}}return o}})}var ie;((ie=window.HTMLSlotElement)===null||ie===void 0?void 0:ie.prototype.assignedElements)!=null;var Et=class extends ht{};v([b()],Et.prototype,"dir",2);v([b()],Et.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ve=class extends Et{constructor(){super(...arguments);this.hasSlotController=new $o(this,"footer","header","image")}render(){return Pe`
      <div
        part="base"
        class=${So({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <div part="image" class="card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};ve.styles=bi;ve=v([Oe("sl-card")],ve);var Oi=Vt`
  ${ke}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Ni=class extends Event{constructor(e){super("formdata");this.formData=e}},Ri=class extends FormData{constructor(e){var t=(...r)=>{super(...r)};e?(t(e),this.form=e,e.dispatchEvent(new Ni(this))):t()}append(e,t){if(!this.form)return super.append(e,t);let r=this.form.elements[e];if(r||(r=document.createElement("input"),r.type="hidden",r.name=e,this.form.appendChild(r)),this.has(e)){const o=this.getAll(e),n=o.indexOf(r.value);n!==-1&&o.splice(n,1),o.push(t),this.set(e,o)}else super.append(e,t);r.value=t}};function Ui(){const e=document.createElement("form");let t=!1;return document.body.append(e),e.addEventListener("submit",r=>{new FormData(r.target),r.preventDefault()}),e.addEventListener("formdata",()=>t=!0),e.dispatchEvent(new Event("submit",{cancelable:!0})),e.remove(),t}function Ur(){!window.FormData||Ui()||(window.FormData=Ri,window.addEventListener("submit",e=>{e.defaultPrevented||new FormData(e.target)}))}document.readyState==="complete"?Ur():window.addEventListener("DOMContentLoaded",()=>Ur());var lt=new WeakMap,Mi=class{constructor(e,t){(this.host=e).addController(this),this.options=St({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>r.disabled,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,o)=>{r.value=o}},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),lt.has(this.form)||(lt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),lt.has(this.form)&&(this.form.reportValidity=lt.get(this.form),lt.delete(this.form)),this.form=void 0)}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host);!t&&typeof r=="string"&&typeof o!="undefined"&&(Array.isArray(o)?o.forEach(n=>{e.formData.append(r,n.toString())}):e.formData.append(r,o.toString()))}handleFormSubmit(e){const t=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&!t&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host))}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&["formaction","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))}),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},Ao=Symbol.for(""),Li=e=>{var t,r;if(((t=e)===null||t===void 0?void 0:t.r)===Ao)return(r=e)===null||r===void 0?void 0:r._$litStatic$},Mr=(e,...t)=>({_$litStatic$:t.reduce((r,o,n)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[n+1],e[0]),r:Ao}),Lr=new Map,Bi=e=>(t,...r)=>{const o=r.length;let n,i;const s=[],d=[];let a,l=0,u=!1;for(;l<o;){for(a=t[l];l<o&&(i=r[l],(n=Li(i))!==void 0);)a+=n+t[++l],u=!0;d.push(i),s.push(a),l++}if(l===o&&s.push(t[o]),u){const c=s.join("$$lit$$");(t=Lr.get(c))===void 0&&(s.raw=s,Lr.set(c,t=s)),r=d}return e(t,...r)},se=Bi(Pe);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ge=new Set,Di=new MutationObserver(Po),G=new Map,xo=document.documentElement.dir||"ltr",Co=document.documentElement.lang||navigator.language,ut;Di.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Hi(...e){e.map(t=>{const r=t.$code.toLowerCase();G.has(r)?G.set(r,Object.assign(Object.assign({},G.get(r)),t)):G.set(r,t),ut||(ut=t)}),Po()}function Po(){xo=document.documentElement.dir||"ltr",Co=document.documentElement.lang||navigator.language,[...ge.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Ii=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ge.add(this.host)}hostDisconnected(){ge.delete(this.host)}dir(){return`${this.host.dir||xo}`.toLowerCase()}lang(){return`${this.host.lang||Co}`.toLowerCase()}term(e,...t){const r=this.lang().toLowerCase().slice(0,2),o=this.lang().length>2?this.lang().toLowerCase():"",n=G.get(o),i=G.get(r);let s;if(n&&n[e])s=n[e];else if(i&&i[e])s=i[e];else if(ut&&ut[e])s=ut[e];else return console.error(`No translation found for: ${String(e)}`),e;return typeof s=="function"?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},ko=class extends Ii{},ji={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Hi(ji);var R=e=>e!=null?e:w;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Br(e,t,r){const o=new CustomEvent(t,St({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return e.dispatchEvent(o),o}var g=class extends Et{constructor(){super(...arguments);this.formSubmitController=new Mi(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new $o(this,"[default]","prefix","suffix"),this.localize=new ko(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,Br(this,"sl-blur")}handleFocus(){this.hasFocus=!0,Br(this,"sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}render(){const e=!!this.href,t=e?Mr`a`:Mr`button`;return se`
      <${t}
        part="base"
        class=${So({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${R(e?void 0:this.disabled)}
        type=${R(e?void 0:this.type)}
        name=${R(e?void 0:this.name)}
        value=${R(e?void 0:this.value)}
        href=${R(e?this.href:void 0)}
        target=${R(e?this.target:void 0)}
        download=${R(e?this.download:void 0)}
        rel=${R(e&&this.target?"noreferrer noopener":void 0)}
        role=${R(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?se`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?se`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};g.styles=Oi;v([Ti(".button")],g.prototype,"button",2);v([Pi()],g.prototype,"hasFocus",2);v([b({reflect:!0})],g.prototype,"variant",2);v([b({reflect:!0})],g.prototype,"size",2);v([b({type:Boolean,reflect:!0})],g.prototype,"caret",2);v([b({type:Boolean,reflect:!0})],g.prototype,"disabled",2);v([b({type:Boolean,reflect:!0})],g.prototype,"loading",2);v([b({type:Boolean,reflect:!0})],g.prototype,"outline",2);v([b({type:Boolean,reflect:!0})],g.prototype,"pill",2);v([b({type:Boolean,reflect:!0})],g.prototype,"circle",2);v([b()],g.prototype,"type",2);v([b()],g.prototype,"name",2);v([b()],g.prototype,"value",2);v([b()],g.prototype,"href",2);v([b()],g.prototype,"target",2);v([b()],g.prototype,"download",2);v([b()],g.prototype,"form",2);v([b({attribute:"formaction"})],g.prototype,"formAction",2);v([b({attribute:"formmethod"})],g.prototype,"formMethod",2);v([b({attribute:"formnovalidate",type:Boolean})],g.prototype,"formNoValidate",2);v([b({attribute:"formtarget"})],g.prototype,"formTarget",2);g=v([Oe("sl-button")],g);var Vi=Vt`
  ${ke}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,be=class extends Et{constructor(){super(...arguments);this.localize=new ko(this)}render(){return Pe`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};be.styles=Vi;be=v([Oe("sl-spinner")],be);const zi=Ht`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 80px;
  }
`;var Fi=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,To=(e,t,r,o)=>{for(var n=o>1?void 0:o?Wi(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&Fi(t,r,n),n};let _e=class extends V{constructor(){super();this.message="Welcome!"}static get styles(){return[zi,Ht`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }

      @media(min-width: 750px) {
        sl-card {
          width: 70vw;
        }
      }


      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }
    `]}async firstUpdated(){console.log("This is your home page")}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}render(){return mt`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <a href="https://github.com/pwa-builder/pwa-starter/wiki/Getting-Started">
                Documentation on Github</a>.
            </p>

            <p id="mainInfo">
              Welcome to the
              <a href="https://pwabuilder.com">PWABuilder</a>
              pwa-starter! Be sure to head back to
              <a href="https://pwabuilder.com">PWABuilder</a>
              when you are ready to ship this PWA to the Microsoft Store, Google Play
              and the Apple App Store!
            </p>

            ${"share"in navigator?mt`<sl-button slot="footer" variant="primary" @click="${this.share}">Share this Starter!</sl-button>`:null}
          </sl-card>

          <sl-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </li>

              <li>
                <a href="https://lit.dev">lit</a>
              </li>

              <li>
                <a href="https://shoelace.style/">Shoelace</a>
              </li>

              <li>
                <a href="https://vaadin.github.io/vaadin-router/vaadin-router/demo/#vaadin-router-getting-started-demos"
                  >Vaadin Router</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${"/pwa-hello/"}about" variant="primary">Navigate to About</sl-button>
        </div>

        <pwa-install>Install PWA Starter</pwa-install>
      </main>
    `}};To([Se()],_e.prototype,"message",2);_e=To([$e("app-home")],_e);var qi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,Ne=(e,t,r,o)=>{for(var n=o>1?void 0:o?Ki(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&qi(t,r,n),n};let Dt=class extends V{constructor(){super();this.title="PWA Starter",this.enableBack=!1}static get styles(){return Ht`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--app-color-primary);
        color: white;
        height: 4em;
        padding-left: 16px;
        padding-top: 12px;

        position: fixed;
        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        height: env(titlebar-area-height, 50px);
        width: env(titlebar-area-width, 100%);
        -webkit-app-region: drag;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav a {
        margin-left: 10px;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 12em;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }

        nav a {
          color: initial;
        }
      }
    `}render(){return mt`
      <header>

        <div id="back-button-block">
          ${this.enableBack?mt`<sl-button href="${"/pwa-hello/"}">
            Back
          </sl-button>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};Ne([Se({type:String})],Dt.prototype,"title",2);Ne([Se({type:Boolean})],Dt.prototype,"enableBack",2);Dt=Ne([$e("app-header")],Dt);var Ji=Object.defineProperty,Gi=Object.getOwnPropertyDescriptor,Yi=(e,t,r,o)=>{for(var n=o>1?void 0:o?Gi(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(n=(o?s(t,r,n):s(n))||n);return o&&n&&Ji(t,r,n),n};let Dr=class extends V{static get styles(){return Ht`
      main {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 16px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `}constructor(){super()}firstUpdated(){var t;new H((t=this.shadowRoot)==null?void 0:t.querySelector("#routerOutlet")).setRoutes([{path:"/pwa-hello/",animate:!0,children:[{path:"",component:"app-home"},{path:"about",component:"app-about",action:async()=>{await Vo(()=>import("./app-about.1fbc7b09.js"),[])}}]}])}render(){return mt`
      <div>
        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `}};Dr=Yi([$e("app-index")],Dr);export{zi as a,$e as e,Ht as i,V as s,mt as y};
//# sourceMappingURL=index.17a95760.js.map
