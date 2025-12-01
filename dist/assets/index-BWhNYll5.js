(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function MI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var X_={exports:{}},wu={},J_={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),UI=Symbol.for("react.portal"),FI=Symbol.for("react.fragment"),jI=Symbol.for("react.strict_mode"),BI=Symbol.for("react.profiler"),zI=Symbol.for("react.provider"),$I=Symbol.for("react.context"),HI=Symbol.for("react.forward_ref"),qI=Symbol.for("react.suspense"),GI=Symbol.for("react.memo"),WI=Symbol.for("react.lazy"),Vm=Symbol.iterator;function KI(t){return t===null||typeof t!="object"?null:(t=Vm&&t[Vm]||t["@@iterator"],typeof t=="function"?t:null)}var Z_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ev=Object.assign,tv={};function Ti(t,e,n){this.props=t,this.context=e,this.refs=tv,this.updater=n||Z_}Ti.prototype.isReactComponent={};Ti.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ti.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nv(){}nv.prototype=Ti.prototype;function Ud(t,e,n){this.props=t,this.context=e,this.refs=tv,this.updater=n||Z_}var Fd=Ud.prototype=new nv;Fd.constructor=Ud;ev(Fd,Ti.prototype);Fd.isPureReactComponent=!0;var Mm=Array.isArray,rv=Object.prototype.hasOwnProperty,jd={current:null},sv={key:!0,ref:!0,__self:!0,__source:!0};function iv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)rv.call(e,r)&&!sv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:la,type:t,key:i,ref:o,props:s,_owner:jd.current}}function QI(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function YI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Um=/\/+/g;function kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?YI(""+t.key):e.toString(36)}function ul(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case la:case UI:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+kc(o,0):r,Mm(s)?(n="",t!=null&&(n=t.replace(Um,"$&/")+"/"),ul(s,e,n,"",function(c){return c})):s!=null&&(Bd(s)&&(s=QI(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Um,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Mm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+kc(i,l);o+=ul(i,e,n,u,s)}else if(u=KI(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+kc(i,l++),o+=ul(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ua(t,e,n){if(t==null)return t;var r=[],s=0;return ul(t,r,"","",function(i){return e.call(n,i,s++)}),r}function XI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},cl={transition:null},JI={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:cl,ReactCurrentOwner:jd};function ov(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Ua,forEach:function(t,e,n){Ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ua(t,function(){e++}),e},toArray:function(t){return Ua(t,function(e){return e})||[]},only:function(t){if(!Bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Ti;ne.Fragment=FI;ne.Profiler=BI;ne.PureComponent=Ud;ne.StrictMode=jI;ne.Suspense=qI;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JI;ne.act=ov;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ev({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=jd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)rv.call(e,u)&&!sv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:la,type:t.type,key:s,ref:i,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:$I,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zI,_context:t},t.Consumer=t};ne.createElement=iv;ne.createFactory=function(t){var e=iv.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:HI,render:t}};ne.isValidElement=Bd;ne.lazy=function(t){return{$$typeof:WI,_payload:{_status:-1,_result:t},_init:XI}};ne.memo=function(t,e){return{$$typeof:GI,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};ne.unstable_act=ov;ne.useCallback=function(t,e){return ft.current.useCallback(t,e)};ne.useContext=function(t){return ft.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};ne.useEffect=function(t,e){return ft.current.useEffect(t,e)};ne.useId=function(){return ft.current.useId()};ne.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return ft.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};ne.useRef=function(t){return ft.current.useRef(t)};ne.useState=function(t){return ft.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return ft.current.useTransition()};ne.version="18.3.1";J_.exports=ne;var X=J_.exports;const av=MI(X);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZI=X,eS=Symbol.for("react.element"),tS=Symbol.for("react.fragment"),nS=Object.prototype.hasOwnProperty,rS=ZI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sS={key:!0,ref:!0,__self:!0,__source:!0};function lv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)nS.call(e,r)&&!sS.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:eS,type:t,key:i,ref:o,props:s,_owner:rS.current}}wu.Fragment=tS;wu.jsx=lv;wu.jsxs=lv;X_.exports=wu;var C=X_.exports,gh={},uv={exports:{}},bt={},cv={exports:{}},hv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,U){var z=V.length;V.push(U);e:for(;0<z;){var W=z-1>>>1,te=V[W];if(0<s(te,U))V[W]=U,V[z]=te,z=W;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var U=V[0],z=V.pop();if(z!==U){V[0]=z;e:for(var W=0,te=V.length,mt=te>>>1;W<mt;){var oe=2*(W+1)-1,ot=V[oe],at=oe+1,Gt=V[at];if(0>s(ot,z))at<te&&0>s(Gt,ot)?(V[W]=Gt,V[at]=z,W=at):(V[W]=ot,V[oe]=z,W=oe);else if(at<te&&0>s(Gt,z))V[W]=Gt,V[at]=z,W=at;else break e}}return U}function s(V,U){var z=V.sortIndex-U.sortIndex;return z!==0?z:V.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,T=!1,P=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(V){for(var U=n(c);U!==null;){if(U.callback===null)r(c);else if(U.startTime<=V)r(c),U.sortIndex=U.expirationTime,e(u,U);else break;U=n(c)}}function D(V){if(x=!1,S(V),!P)if(n(u)!==null)P=!0,$r(j);else{var U=n(c);U!==null&&Hr(D,U.startTime-V)}}function j(V,U){P=!1,x&&(x=!1,A(y),y=-1),T=!0;var z=m;try{for(S(U),p=n(u);p!==null&&(!(p.expirationTime>U)||V&&!R());){var W=p.callback;if(typeof W=="function"){p.callback=null,m=p.priorityLevel;var te=W(p.expirationTime<=U);U=t.unstable_now(),typeof te=="function"?p.callback=te:p===n(u)&&r(u),S(U)}else r(u);p=n(u)}if(p!==null)var mt=!0;else{var oe=n(c);oe!==null&&Hr(D,oe.startTime-U),mt=!1}return mt}finally{p=null,m=z,T=!1}}var B=!1,v=null,y=-1,E=5,I=-1;function R(){return!(t.unstable_now()-I<E)}function k(){if(v!==null){var V=t.unstable_now();I=V;var U=!0;try{U=v(!0,V)}finally{U?w():(B=!1,v=null)}}else B=!1}var w;if(typeof _=="function")w=function(){_(k)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,qt=Le.port2;Le.port1.onmessage=k,w=function(){qt.postMessage(null)}}else w=function(){b(k,0)};function $r(V){v=V,B||(B=!0,w())}function Hr(V,U){y=b(function(){V(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){P||T||(P=!0,$r(j))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(V){switch(m){case 1:case 2:case 3:var U=3;break;default:U=m}var z=m;m=U;try{return V()}finally{m=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,U){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var z=m;m=V;try{return U()}finally{m=z}},t.unstable_scheduleCallback=function(V,U,z){var W=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?W+z:W):z=W,V){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=z+te,V={id:f++,callback:U,priorityLevel:V,startTime:z,expirationTime:te,sortIndex:-1},z>W?(V.sortIndex=z,e(c,V),n(u)===null&&V===n(c)&&(x?(A(y),y=-1):x=!0,Hr(D,z-W))):(V.sortIndex=te,e(u,V),P||T||(P=!0,$r(j))),V},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(V){var U=m;return function(){var z=m;m=U;try{return V.apply(this,arguments)}finally{m=z}}}})(hv);cv.exports=hv;var iS=cv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oS=X,Ot=iS;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dv=new Set,bo={};function Is(t,e){ui(t,e),ui(t+"Capture",e)}function ui(t,e){for(bo[t]=e,t=0;t<e.length;t++)dv.add(e[t])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yh=Object.prototype.hasOwnProperty,aS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fm={},jm={};function lS(t){return yh.call(jm,t)?!0:yh.call(Fm,t)?!1:aS.test(t)?jm[t]=!0:(Fm[t]=!0,!1)}function uS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cS(t,e,n,r){if(e===null||typeof e>"u"||uS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var zd=/[\-:]([a-z])/g;function $d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zd,$d);Ke[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zd,$d);Ke[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zd,$d);Ke[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hd(t,e,n,r){var s=Ke.hasOwnProperty(e)?Ke[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cS(e,n,s,r)&&(n=null),r||s===null?lS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=oS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fa=Symbol.for("react.element"),Fs=Symbol.for("react.portal"),js=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),_h=Symbol.for("react.profiler"),fv=Symbol.for("react.provider"),pv=Symbol.for("react.context"),Gd=Symbol.for("react.forward_ref"),vh=Symbol.for("react.suspense"),Eh=Symbol.for("react.suspense_list"),Wd=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),mv=Symbol.for("react.offscreen"),Bm=Symbol.iterator;function Qi(t){return t===null||typeof t!="object"?null:(t=Bm&&t[Bm]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,Nc;function oo(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var xc=!1;function Dc(t,e){if(!t||xc)return"";xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oo(t):""}function hS(t){switch(t.tag){case 5:return oo(t.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 2:case 15:return t=Dc(t.type,!1),t;case 11:return t=Dc(t.type.render,!1),t;case 1:return t=Dc(t.type,!0),t;default:return""}}function wh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case js:return"Fragment";case Fs:return"Portal";case _h:return"Profiler";case qd:return"StrictMode";case vh:return"Suspense";case Eh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pv:return(t.displayName||"Context")+".Consumer";case fv:return(t._context.displayName||"Context")+".Provider";case Gd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wd:return e=t.displayName||null,e!==null?e:wh(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return wh(t(e))}catch{}}return null}function dS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wh(e);case 8:return e===qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fS(t){var e=gv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ja(t){t._valueTracker||(t._valueTracker=fS(t))}function yv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=gv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Th(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _v(t,e){e=e.checked,e!=null&&Hd(t,"checked",e,!1)}function Ih(t,e){_v(t,e);var n=Cr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sh(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sh(t,e,n){(e!=="number"||Dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ao=Array.isArray;function Js(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(ao(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function vv(t,e){var n=Cr(e.value),r=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ev(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ev(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,wv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pS=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(t){pS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yo[e]=yo[t]})});function Tv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yo.hasOwnProperty(t)&&yo[t]?(""+e).trim():e+"px"}function Iv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Tv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var mS=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ch(t,e){if(e){if(mS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Ph(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kh=null;function Kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nh=null,Zs=null,ei=null;function Gm(t){if(t=ha(t)){if(typeof Nh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Ru(e),Nh(t.stateNode,t.type,e))}}function Sv(t){Zs?ei?ei.push(t):ei=[t]:Zs=t}function Av(){if(Zs){var t=Zs,e=ei;if(ei=Zs=null,Gm(t),e)for(t=0;t<e.length;t++)Gm(e[t])}}function Rv(t,e){return t(e)}function Cv(){}var Oc=!1;function Pv(t,e,n){if(Oc)return t(e,n);Oc=!0;try{return Rv(t,e,n)}finally{Oc=!1,(Zs!==null||ei!==null)&&(Cv(),Av())}}function Vo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ru(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var xh=!1;if(Ln)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){xh=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{xh=!1}function gS(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var _o=!1,Ol=null,bl=!1,Dh=null,yS={onError:function(t){_o=!0,Ol=t}};function _S(t,e,n,r,s,i,o,l,u){_o=!1,Ol=null,gS.apply(yS,arguments)}function vS(t,e,n,r,s,i,o,l,u){if(_S.apply(this,arguments),_o){if(_o){var c=Ol;_o=!1,Ol=null}else throw Error(F(198));bl||(bl=!0,Dh=c)}}function Ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function kv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wm(t){if(Ss(t)!==t)throw Error(F(188))}function ES(t){var e=t.alternate;if(!e){if(e=Ss(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Wm(s),t;if(i===r)return Wm(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Nv(t){return t=ES(t),t!==null?xv(t):null}function xv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xv(t);if(e!==null)return e;t=t.sibling}return null}var Dv=Ot.unstable_scheduleCallback,Km=Ot.unstable_cancelCallback,wS=Ot.unstable_shouldYield,TS=Ot.unstable_requestPaint,ke=Ot.unstable_now,IS=Ot.unstable_getCurrentPriorityLevel,Qd=Ot.unstable_ImmediatePriority,Ov=Ot.unstable_UserBlockingPriority,Ll=Ot.unstable_NormalPriority,SS=Ot.unstable_LowPriority,bv=Ot.unstable_IdlePriority,Tu=null,pn=null;function AS(t){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Tu,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:PS,RS=Math.log,CS=Math.LN2;function PS(t){return t>>>=0,t===0?32:31-(RS(t)/CS|0)|0}var za=64,$a=4194304;function lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=lo(l):(i&=o,i!==0&&(r=lo(i)))}else o=n&~s,o!==0?r=lo(o):i!==0&&(r=lo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),s=1<<n,r|=t[n],e&=~s;return r}function kS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function NS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Jt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=kS(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Oh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lv(){var t=za;return za<<=1,!(za&4194240)&&(za=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function xS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Jt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Yd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ce=0;function Vv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mv,Xd,Uv,Fv,jv,bh=!1,Ha=[],fr=null,pr=null,mr=null,Mo=new Map,Uo=new Map,sr=[],DS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qm(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(e.pointerId)}}function Xi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ha(e),e!==null&&Xd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function OS(t,e,n,r,s){switch(e){case"focusin":return fr=Xi(fr,t,e,n,r,s),!0;case"dragenter":return pr=Xi(pr,t,e,n,r,s),!0;case"mouseover":return mr=Xi(mr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Mo.set(i,Xi(Mo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Uo.set(i,Xi(Uo.get(i)||null,t,e,n,r,s)),!0}return!1}function Bv(t){var e=Zr(t.target);if(e!==null){var n=Ss(e);if(n!==null){if(e=n.tag,e===13){if(e=kv(n),e!==null){t.blockedOn=e,jv(t.priority,function(){Uv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kh=r,n.target.dispatchEvent(r),kh=null}else return e=ha(n),e!==null&&Xd(e),t.blockedOn=n,!1;e.shift()}return!0}function Ym(t,e,n){hl(t)&&n.delete(e)}function bS(){bh=!1,fr!==null&&hl(fr)&&(fr=null),pr!==null&&hl(pr)&&(pr=null),mr!==null&&hl(mr)&&(mr=null),Mo.forEach(Ym),Uo.forEach(Ym)}function Ji(t,e){t.blockedOn===e&&(t.blockedOn=null,bh||(bh=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,bS)))}function Fo(t){function e(s){return Ji(s,t)}if(0<Ha.length){Ji(Ha[0],t);for(var n=1;n<Ha.length;n++){var r=Ha[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fr!==null&&Ji(fr,t),pr!==null&&Ji(pr,t),mr!==null&&Ji(mr,t),Mo.forEach(e),Uo.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)Bv(n),n.blockedOn===null&&sr.shift()}var ti=Hn.ReactCurrentBatchConfig,Ml=!0;function LS(t,e,n,r){var s=ce,i=ti.transition;ti.transition=null;try{ce=1,Jd(t,e,n,r)}finally{ce=s,ti.transition=i}}function VS(t,e,n,r){var s=ce,i=ti.transition;ti.transition=null;try{ce=4,Jd(t,e,n,r)}finally{ce=s,ti.transition=i}}function Jd(t,e,n,r){if(Ml){var s=Lh(t,e,n,r);if(s===null)Hc(t,e,r,Ul,n),Qm(t,r);else if(OS(s,t,e,n,r))r.stopPropagation();else if(Qm(t,r),e&4&&-1<DS.indexOf(t)){for(;s!==null;){var i=ha(s);if(i!==null&&Mv(i),i=Lh(t,e,n,r),i===null&&Hc(t,e,r,Ul,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Hc(t,e,r,null,n)}}var Ul=null;function Lh(t,e,n,r){if(Ul=null,t=Kd(r),t=Zr(t),t!==null)if(e=Ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=kv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ul=t,null}function zv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(IS()){case Qd:return 1;case Ov:return 4;case Ll:case SS:return 16;case bv:return 536870912;default:return 16}default:return 16}}var cr=null,Zd=null,dl=null;function $v(){if(dl)return dl;var t,e=Zd,n=e.length,r,s="value"in cr?cr.value:cr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return dl=s.slice(t,1<r?1-r:void 0)}function fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function Xm(){return!1}function Lt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qa:Xm,this.isPropagationStopped=Xm,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var Ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=Lt(Ii),ca=Te({},Ii,{view:0,detail:0}),MS=Lt(ca),Lc,Vc,Zi,Iu=Te({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zi&&(Zi&&t.type==="mousemove"?(Lc=t.screenX-Zi.screenX,Vc=t.screenY-Zi.screenY):Vc=Lc=0,Zi=t),Lc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),Jm=Lt(Iu),US=Te({},Iu,{dataTransfer:0}),FS=Lt(US),jS=Te({},ca,{relatedTarget:0}),Mc=Lt(jS),BS=Te({},Ii,{animationName:0,elapsedTime:0,pseudoElement:0}),zS=Lt(BS),$S=Te({},Ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HS=Lt($S),qS=Te({},Ii,{data:0}),Zm=Lt(qS),GS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KS[t])?!!e[t]:!1}function tf(){return QS}var YS=Te({},ca,{key:function(t){if(t.key){var e=GS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?WS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XS=Lt(YS),JS=Te({},Iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eg=Lt(JS),ZS=Te({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),eA=Lt(ZS),tA=Te({},Ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),nA=Lt(tA),rA=Te({},Iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sA=Lt(rA),iA=[9,13,27,32],nf=Ln&&"CompositionEvent"in window,vo=null;Ln&&"documentMode"in document&&(vo=document.documentMode);var oA=Ln&&"TextEvent"in window&&!vo,Hv=Ln&&(!nf||vo&&8<vo&&11>=vo),tg=" ",ng=!1;function qv(t,e){switch(t){case"keyup":return iA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bs=!1;function aA(t,e){switch(t){case"compositionend":return Gv(e);case"keypress":return e.which!==32?null:(ng=!0,tg);case"textInput":return t=e.data,t===tg&&ng?null:t;default:return null}}function lA(t,e){if(Bs)return t==="compositionend"||!nf&&qv(t,e)?(t=$v(),dl=Zd=cr=null,Bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hv&&e.locale!=="ko"?null:e.data;default:return null}}var uA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uA[t.type]:e==="textarea"}function Wv(t,e,n,r){Sv(r),e=Fl(e,"onChange"),0<e.length&&(n=new ef("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Eo=null,jo=null;function cA(t){sE(t,0)}function Su(t){var e=Hs(t);if(yv(e))return t}function hA(t,e){if(t==="change")return e}var Kv=!1;if(Ln){var Uc;if(Ln){var Fc="oninput"in document;if(!Fc){var sg=document.createElement("div");sg.setAttribute("oninput","return;"),Fc=typeof sg.oninput=="function"}Uc=Fc}else Uc=!1;Kv=Uc&&(!document.documentMode||9<document.documentMode)}function ig(){Eo&&(Eo.detachEvent("onpropertychange",Qv),jo=Eo=null)}function Qv(t){if(t.propertyName==="value"&&Su(jo)){var e=[];Wv(e,jo,t,Kd(t)),Pv(cA,e)}}function dA(t,e,n){t==="focusin"?(ig(),Eo=e,jo=n,Eo.attachEvent("onpropertychange",Qv)):t==="focusout"&&ig()}function fA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Su(jo)}function pA(t,e){if(t==="click")return Su(e)}function mA(t,e){if(t==="input"||t==="change")return Su(e)}function gA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:gA;function Bo(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!yh.call(e,s)||!nn(t[s],e[s]))return!1}return!0}function og(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ag(t,e){var n=og(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=og(n)}}function Yv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xv(){for(var t=window,e=Dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dl(t.document)}return e}function rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yA(t){var e=Xv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yv(n.ownerDocument.documentElement,n)){if(r!==null&&rf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=ag(n,i);var o=ag(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _A=Ln&&"documentMode"in document&&11>=document.documentMode,zs=null,Vh=null,wo=null,Mh=!1;function lg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mh||zs==null||zs!==Dl(r)||(r=zs,"selectionStart"in r&&rf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wo&&Bo(wo,r)||(wo=r,r=Fl(Vh,"onSelect"),0<r.length&&(e=new ef("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zs)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},jc={},Jv={};Ln&&(Jv=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Au(t){if(jc[t])return jc[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jv)return jc[t]=e[n];return t}var Zv=Au("animationend"),eE=Au("animationiteration"),tE=Au("animationstart"),nE=Au("transitionend"),rE=new Map,ug="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){rE.set(t,e),Is(e,[t])}for(var Bc=0;Bc<ug.length;Bc++){var zc=ug[Bc],vA=zc.toLowerCase(),EA=zc[0].toUpperCase()+zc.slice(1);Vr(vA,"on"+EA)}Vr(Zv,"onAnimationEnd");Vr(eE,"onAnimationIteration");Vr(tE,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(nE,"onTransitionEnd");ui("onMouseEnter",["mouseout","mouseover"]);ui("onMouseLeave",["mouseout","mouseover"]);ui("onPointerEnter",["pointerout","pointerover"]);ui("onPointerLeave",["pointerout","pointerover"]);Is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Is("onBeforeInput",["compositionend","keypress","textInput","paste"]);Is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wA=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function cg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vS(r,e,void 0,t),t.currentTarget=null}function sE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;cg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;cg(s,l,c),i=u}}}if(bl)throw t=Dh,bl=!1,Dh=null,t}function me(t,e){var n=e[zh];n===void 0&&(n=e[zh]=new Set);var r=t+"__bubble";n.has(r)||(iE(e,t,2,!1),n.add(r))}function $c(t,e,n){var r=0;e&&(r|=4),iE(n,t,r,e)}var Wa="_reactListening"+Math.random().toString(36).slice(2);function zo(t){if(!t[Wa]){t[Wa]=!0,dv.forEach(function(n){n!=="selectionchange"&&(wA.has(n)||$c(n,!1,t),$c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wa]||(e[Wa]=!0,$c("selectionchange",!1,e))}}function iE(t,e,n,r){switch(zv(e)){case 1:var s=LS;break;case 4:s=VS;break;default:s=Jd}n=s.bind(null,e,n,t),s=void 0,!xh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Hc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Zr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Pv(function(){var c=i,f=Kd(n),p=[];e:{var m=rE.get(t);if(m!==void 0){var T=ef,P=t;switch(t){case"keypress":if(fl(n)===0)break e;case"keydown":case"keyup":T=XS;break;case"focusin":P="focus",T=Mc;break;case"focusout":P="blur",T=Mc;break;case"beforeblur":case"afterblur":T=Mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=FS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=eA;break;case Zv:case eE:case tE:T=zS;break;case nE:T=nA;break;case"scroll":T=MS;break;case"wheel":T=sA;break;case"copy":case"cut":case"paste":T=HS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=eg}var x=(e&4)!==0,b=!x&&t==="scroll",A=x?m!==null?m+"Capture":null:m;x=[];for(var _=c,S;_!==null;){S=_;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,A!==null&&(D=Vo(_,A),D!=null&&x.push($o(_,D,S)))),b)break;_=_.return}0<x.length&&(m=new T(m,P,null,n,f),p.push({event:m,listeners:x}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&n!==kh&&(P=n.relatedTarget||n.fromElement)&&(Zr(P)||P[Vn]))break e;if((T||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,T?(P=n.relatedTarget||n.toElement,T=c,P=P?Zr(P):null,P!==null&&(b=Ss(P),P!==b||P.tag!==5&&P.tag!==6)&&(P=null)):(T=null,P=c),T!==P)){if(x=Jm,D="onMouseLeave",A="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=eg,D="onPointerLeave",A="onPointerEnter",_="pointer"),b=T==null?m:Hs(T),S=P==null?m:Hs(P),m=new x(D,_+"leave",T,n,f),m.target=b,m.relatedTarget=S,D=null,Zr(f)===c&&(x=new x(A,_+"enter",P,n,f),x.target=S,x.relatedTarget=b,D=x),b=D,T&&P)t:{for(x=T,A=P,_=0,S=x;S;S=Ds(S))_++;for(S=0,D=A;D;D=Ds(D))S++;for(;0<_-S;)x=Ds(x),_--;for(;0<S-_;)A=Ds(A),S--;for(;_--;){if(x===A||A!==null&&x===A.alternate)break t;x=Ds(x),A=Ds(A)}x=null}else x=null;T!==null&&hg(p,m,T,x,!1),P!==null&&b!==null&&hg(p,b,P,x,!0)}}e:{if(m=c?Hs(c):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var j=hA;else if(rg(m))if(Kv)j=mA;else{j=fA;var B=dA}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=pA);if(j&&(j=j(t,c))){Wv(p,j,n,f);break e}B&&B(t,m,c),t==="focusout"&&(B=m._wrapperState)&&B.controlled&&m.type==="number"&&Sh(m,"number",m.value)}switch(B=c?Hs(c):window,t){case"focusin":(rg(B)||B.contentEditable==="true")&&(zs=B,Vh=c,wo=null);break;case"focusout":wo=Vh=zs=null;break;case"mousedown":Mh=!0;break;case"contextmenu":case"mouseup":case"dragend":Mh=!1,lg(p,n,f);break;case"selectionchange":if(_A)break;case"keydown":case"keyup":lg(p,n,f)}var v;if(nf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Bs?qv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Hv&&n.locale!=="ko"&&(Bs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Bs&&(v=$v()):(cr=f,Zd="value"in cr?cr.value:cr.textContent,Bs=!0)),B=Fl(c,y),0<B.length&&(y=new Zm(y,t,null,n,f),p.push({event:y,listeners:B}),v?y.data=v:(v=Gv(n),v!==null&&(y.data=v)))),(v=oA?aA(t,n):lA(t,n))&&(c=Fl(c,"onBeforeInput"),0<c.length&&(f=new Zm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=v))}sE(p,e)})}function $o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Vo(t,n),i!=null&&r.unshift($o(t,i,s)),i=Vo(t,e),i!=null&&r.push($o(t,i,s))),t=t.return}return r}function Ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Vo(n,i),u!=null&&o.unshift($o(n,u,l))):s||(u=Vo(n,i),u!=null&&o.push($o(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TA=/\r\n?/g,IA=/\u0000|\uFFFD/g;function dg(t){return(typeof t=="string"?t:""+t).replace(TA,`
`).replace(IA,"")}function Ka(t,e,n){if(e=dg(e),dg(t)!==e&&n)throw Error(F(425))}function jl(){}var Uh=null,Fh=null;function jh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bh=typeof setTimeout=="function"?setTimeout:void 0,SA=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,AA=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(t){return fg.resolve(null).then(t).catch(RA)}:Bh;function RA(t){setTimeout(function(){throw t})}function qc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Fo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Fo(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Si=Math.random().toString(36).slice(2),hn="__reactFiber$"+Si,Ho="__reactProps$"+Si,Vn="__reactContainer$"+Si,zh="__reactEvents$"+Si,CA="__reactListeners$"+Si,PA="__reactHandles$"+Si;function Zr(t){var e=t[hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vn]||n[hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pg(t);t!==null;){if(n=t[hn])return n;t=pg(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[hn]||t[Vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Ru(t){return t[Ho]||null}var $h=[],qs=-1;function Mr(t){return{current:t}}function ye(t){0>qs||(t.current=$h[qs],$h[qs]=null,qs--)}function fe(t,e){qs++,$h[qs]=t.current,t.current=e}var Pr={},st=Mr(Pr),It=Mr(!1),us=Pr;function ci(t,e){var n=t.type.contextTypes;if(!n)return Pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function St(t){return t=t.childContextTypes,t!=null}function Bl(){ye(It),ye(st)}function mg(t,e,n){if(st.current!==Pr)throw Error(F(168));fe(st,e),fe(It,n)}function oE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,dS(t)||"Unknown",s));return Te({},n,r)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,us=st.current,fe(st,t),fe(It,It.current),!0}function gg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=oE(t,e,us),r.__reactInternalMemoizedMergedChildContext=t,ye(It),ye(st),fe(st,t)):ye(It),fe(It,n)}var Rn=null,Cu=!1,Gc=!1;function aE(t){Rn===null?Rn=[t]:Rn.push(t)}function kA(t){Cu=!0,aE(t)}function Ur(){if(!Gc&&Rn!==null){Gc=!0;var t=0,e=ce;try{var n=Rn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,Cu=!1}catch(s){throw Rn!==null&&(Rn=Rn.slice(t+1)),Dv(Qd,Ur),s}finally{ce=e,Gc=!1}}return null}var Gs=[],Ws=0,$l=null,Hl=0,Mt=[],Ut=0,cs=null,Pn=1,kn="";function Yr(t,e){Gs[Ws++]=Hl,Gs[Ws++]=$l,$l=t,Hl=e}function lE(t,e,n){Mt[Ut++]=Pn,Mt[Ut++]=kn,Mt[Ut++]=cs,cs=t;var r=Pn;t=kn;var s=32-Jt(r)-1;r&=~(1<<s),n+=1;var i=32-Jt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Pn=1<<32-Jt(e)+s|n<<s|r,kn=i+t}else Pn=1<<i|n<<s|r,kn=t}function sf(t){t.return!==null&&(Yr(t,1),lE(t,1,0))}function of(t){for(;t===$l;)$l=Gs[--Ws],Gs[Ws]=null,Hl=Gs[--Ws],Gs[Ws]=null;for(;t===cs;)cs=Mt[--Ut],Mt[Ut]=null,kn=Mt[--Ut],Mt[Ut]=null,Pn=Mt[--Ut],Mt[Ut]=null}var Dt=null,kt=null,ve=!1,Yt=null;function uE(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dt=t,kt=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=cs!==null?{id:Pn,overflow:kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dt=t,kt=null,!0):!1;default:return!1}}function Hh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qh(t){if(ve){var e=kt;if(e){var n=e;if(!yg(t,e)){if(Hh(t))throw Error(F(418));e=gr(n.nextSibling);var r=Dt;e&&yg(t,e)?uE(r,n):(t.flags=t.flags&-4097|2,ve=!1,Dt=t)}}else{if(Hh(t))throw Error(F(418));t.flags=t.flags&-4097|2,ve=!1,Dt=t}}}function _g(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function Qa(t){if(t!==Dt)return!1;if(!ve)return _g(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jh(t.type,t.memoizedProps)),e&&(e=kt)){if(Hh(t))throw cE(),Error(F(418));for(;e;)uE(t,e),e=gr(e.nextSibling)}if(_g(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=Dt?gr(t.stateNode.nextSibling):null;return!0}function cE(){for(var t=kt;t;)t=gr(t.nextSibling)}function hi(){kt=Dt=null,ve=!1}function af(t){Yt===null?Yt=[t]:Yt.push(t)}var NA=Hn.ReactCurrentBatchConfig;function eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ya(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vg(t){var e=t._init;return e(t._payload)}function hE(t){function e(A,_){if(t){var S=A.deletions;S===null?(A.deletions=[_],A.flags|=16):S.push(_)}}function n(A,_){if(!t)return null;for(;_!==null;)e(A,_),_=_.sibling;return null}function r(A,_){for(A=new Map;_!==null;)_.key!==null?A.set(_.key,_):A.set(_.index,_),_=_.sibling;return A}function s(A,_){return A=Er(A,_),A.index=0,A.sibling=null,A}function i(A,_,S){return A.index=S,t?(S=A.alternate,S!==null?(S=S.index,S<_?(A.flags|=2,_):S):(A.flags|=2,_)):(A.flags|=1048576,_)}function o(A){return t&&A.alternate===null&&(A.flags|=2),A}function l(A,_,S,D){return _===null||_.tag!==6?(_=Zc(S,A.mode,D),_.return=A,_):(_=s(_,S),_.return=A,_)}function u(A,_,S,D){var j=S.type;return j===js?f(A,_,S.props.children,D,S.key):_!==null&&(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tr&&vg(j)===_.type)?(D=s(_,S.props),D.ref=eo(A,_,S),D.return=A,D):(D=El(S.type,S.key,S.props,null,A.mode,D),D.ref=eo(A,_,S),D.return=A,D)}function c(A,_,S,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=eh(S,A.mode,D),_.return=A,_):(_=s(_,S.children||[]),_.return=A,_)}function f(A,_,S,D,j){return _===null||_.tag!==7?(_=os(S,A.mode,D,j),_.return=A,_):(_=s(_,S),_.return=A,_)}function p(A,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Zc(""+_,A.mode,S),_.return=A,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Fa:return S=El(_.type,_.key,_.props,null,A.mode,S),S.ref=eo(A,null,_),S.return=A,S;case Fs:return _=eh(_,A.mode,S),_.return=A,_;case tr:var D=_._init;return p(A,D(_._payload),S)}if(ao(_)||Qi(_))return _=os(_,A.mode,S,null),_.return=A,_;Ya(A,_)}return null}function m(A,_,S,D){var j=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:l(A,_,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Fa:return S.key===j?u(A,_,S,D):null;case Fs:return S.key===j?c(A,_,S,D):null;case tr:return j=S._init,m(A,_,j(S._payload),D)}if(ao(S)||Qi(S))return j!==null?null:f(A,_,S,D,null);Ya(A,S)}return null}function T(A,_,S,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return A=A.get(S)||null,l(_,A,""+D,j);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Fa:return A=A.get(D.key===null?S:D.key)||null,u(_,A,D,j);case Fs:return A=A.get(D.key===null?S:D.key)||null,c(_,A,D,j);case tr:var B=D._init;return T(A,_,S,B(D._payload),j)}if(ao(D)||Qi(D))return A=A.get(S)||null,f(_,A,D,j,null);Ya(_,D)}return null}function P(A,_,S,D){for(var j=null,B=null,v=_,y=_=0,E=null;v!==null&&y<S.length;y++){v.index>y?(E=v,v=null):E=v.sibling;var I=m(A,v,S[y],D);if(I===null){v===null&&(v=E);break}t&&v&&I.alternate===null&&e(A,v),_=i(I,_,y),B===null?j=I:B.sibling=I,B=I,v=E}if(y===S.length)return n(A,v),ve&&Yr(A,y),j;if(v===null){for(;y<S.length;y++)v=p(A,S[y],D),v!==null&&(_=i(v,_,y),B===null?j=v:B.sibling=v,B=v);return ve&&Yr(A,y),j}for(v=r(A,v);y<S.length;y++)E=T(v,A,y,S[y],D),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?y:E.key),_=i(E,_,y),B===null?j=E:B.sibling=E,B=E);return t&&v.forEach(function(R){return e(A,R)}),ve&&Yr(A,y),j}function x(A,_,S,D){var j=Qi(S);if(typeof j!="function")throw Error(F(150));if(S=j.call(S),S==null)throw Error(F(151));for(var B=j=null,v=_,y=_=0,E=null,I=S.next();v!==null&&!I.done;y++,I=S.next()){v.index>y?(E=v,v=null):E=v.sibling;var R=m(A,v,I.value,D);if(R===null){v===null&&(v=E);break}t&&v&&R.alternate===null&&e(A,v),_=i(R,_,y),B===null?j=R:B.sibling=R,B=R,v=E}if(I.done)return n(A,v),ve&&Yr(A,y),j;if(v===null){for(;!I.done;y++,I=S.next())I=p(A,I.value,D),I!==null&&(_=i(I,_,y),B===null?j=I:B.sibling=I,B=I);return ve&&Yr(A,y),j}for(v=r(A,v);!I.done;y++,I=S.next())I=T(v,A,y,I.value,D),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?y:I.key),_=i(I,_,y),B===null?j=I:B.sibling=I,B=I);return t&&v.forEach(function(k){return e(A,k)}),ve&&Yr(A,y),j}function b(A,_,S,D){if(typeof S=="object"&&S!==null&&S.type===js&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Fa:e:{for(var j=S.key,B=_;B!==null;){if(B.key===j){if(j=S.type,j===js){if(B.tag===7){n(A,B.sibling),_=s(B,S.props.children),_.return=A,A=_;break e}}else if(B.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tr&&vg(j)===B.type){n(A,B.sibling),_=s(B,S.props),_.ref=eo(A,B,S),_.return=A,A=_;break e}n(A,B);break}else e(A,B);B=B.sibling}S.type===js?(_=os(S.props.children,A.mode,D,S.key),_.return=A,A=_):(D=El(S.type,S.key,S.props,null,A.mode,D),D.ref=eo(A,_,S),D.return=A,A=D)}return o(A);case Fs:e:{for(B=S.key;_!==null;){if(_.key===B)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(A,_.sibling),_=s(_,S.children||[]),_.return=A,A=_;break e}else{n(A,_);break}else e(A,_);_=_.sibling}_=eh(S,A.mode,D),_.return=A,A=_}return o(A);case tr:return B=S._init,b(A,_,B(S._payload),D)}if(ao(S))return P(A,_,S,D);if(Qi(S))return x(A,_,S,D);Ya(A,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(A,_.sibling),_=s(_,S),_.return=A,A=_):(n(A,_),_=Zc(S,A.mode,D),_.return=A,A=_),o(A)):n(A,_)}return b}var di=hE(!0),dE=hE(!1),ql=Mr(null),Gl=null,Ks=null,lf=null;function uf(){lf=Ks=Gl=null}function cf(t){var e=ql.current;ye(ql),t._currentValue=e}function Gh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ni(t,e){Gl=t,lf=Ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function zt(t){var e=t._currentValue;if(lf!==t)if(t={context:t,memoizedValue:e,next:null},Ks===null){if(Gl===null)throw Error(F(308));Ks=t,Gl.dependencies={lanes:0,firstContext:t}}else Ks=Ks.next=t;return e}var es=null;function hf(t){es===null?es=[t]:es.push(t)}function fE(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,hf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Mn(t,r)}function Mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Mn(t,n)}return s=r.interleaved,s===null?(e.next=e,hf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Mn(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yd(t,n)}}function Eg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,r){var s=t.updateQueue;nr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=c=u=null,l=i;do{var m=l.lane,T=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,x=l;switch(m=e,T=n,x.tag){case 1:if(P=x.payload,typeof P=="function"){p=P.call(T,p,m);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=x.payload,m=typeof P=="function"?P.call(T,p,m):P,m==null)break e;p=Te({},p,m);break e;case 2:nr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[l]:m.push(l))}else T={eventTime:T,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=T,u=p):f=f.next=T,o|=m;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;m=l,l=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ds|=o,t.lanes=o,t.memoizedState=p}}function wg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var da={},mn=Mr(da),qo=Mr(da),Go=Mr(da);function ts(t){if(t===da)throw Error(F(174));return t}function ff(t,e){switch(fe(Go,e),fe(qo,t),fe(mn,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rh(e,t)}ye(mn),fe(mn,e)}function fi(){ye(mn),ye(qo),ye(Go)}function mE(t){ts(Go.current);var e=ts(mn.current),n=Rh(e,t.type);e!==n&&(fe(qo,t),fe(mn,n))}function pf(t){qo.current===t&&(ye(mn),ye(qo))}var Ee=Mr(0);function Kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function mf(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var ml=Hn.ReactCurrentDispatcher,Kc=Hn.ReactCurrentBatchConfig,hs=0,we=null,Me=null,ze=null,Ql=!1,To=!1,Wo=0,xA=0;function Xe(){throw Error(F(321))}function gf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function yf(t,e,n,r,s,i){if(hs=i,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?LA:VA,t=n(r,s),To){i=0;do{if(To=!1,Wo=0,25<=i)throw Error(F(301));i+=1,ze=Me=null,e.updateQueue=null,ml.current=MA,t=n(r,s)}while(To)}if(ml.current=Yl,e=Me!==null&&Me.next!==null,hs=0,ze=Me=we=null,Ql=!1,e)throw Error(F(300));return t}function _f(){var t=Wo!==0;return Wo=0,t}function un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?we.memoizedState=ze=t:ze=ze.next=t,ze}function $t(){if(Me===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=ze===null?we.memoizedState:ze.next;if(e!==null)ze=e,Me=t;else{if(t===null)throw Error(F(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},ze===null?we.memoizedState=ze=t:ze=ze.next=t}return ze}function Ko(t,e){return typeof e=="function"?e(t):e}function Qc(t){var e=$t(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Me,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((hs&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,we.lanes|=f,ds|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,nn(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,we.lanes|=i,ds|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yc(t){var e=$t(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);nn(i,e.memoizedState)||(Tt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function gE(){}function yE(t,e){var n=we,r=$t(),s=e(),i=!nn(r.memoizedState,s);if(i&&(r.memoizedState=s,Tt=!0),r=r.queue,vf(EE.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,Qo(9,vE.bind(null,n,r,s,e),void 0,null),$e===null)throw Error(F(349));hs&30||_E(n,e,s)}return s}function _E(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vE(t,e,n,r){e.value=n,e.getSnapshot=r,wE(e)&&TE(t)}function EE(t,e,n){return n(function(){wE(e)&&TE(t)})}function wE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function TE(t){var e=Mn(t,1);e!==null&&Zt(e,t,1,-1)}function Tg(t){var e=un();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:t},e.queue=t,t=t.dispatch=bA.bind(null,we,t),[e.memoizedState,t]}function Qo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function IE(){return $t().memoizedState}function gl(t,e,n,r){var s=un();we.flags|=t,s.memoizedState=Qo(1|e,n,void 0,r===void 0?null:r)}function Pu(t,e,n,r){var s=$t();r=r===void 0?null:r;var i=void 0;if(Me!==null){var o=Me.memoizedState;if(i=o.destroy,r!==null&&gf(r,o.deps)){s.memoizedState=Qo(e,n,i,r);return}}we.flags|=t,s.memoizedState=Qo(1|e,n,i,r)}function Ig(t,e){return gl(8390656,8,t,e)}function vf(t,e){return Pu(2048,8,t,e)}function SE(t,e){return Pu(4,2,t,e)}function AE(t,e){return Pu(4,4,t,e)}function RE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function CE(t,e,n){return n=n!=null?n.concat([t]):null,Pu(4,4,RE.bind(null,e,t),n)}function Ef(){}function PE(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function kE(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function NE(t,e,n){return hs&21?(nn(n,e)||(n=Lv(),we.lanes|=n,ds|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function DA(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Kc.transition;Kc.transition={};try{t(!1),e()}finally{ce=n,Kc.transition=r}}function xE(){return $t().memoizedState}function OA(t,e,n){var r=vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},DE(t))OE(e,n);else if(n=fE(t,e,n,r),n!==null){var s=dt();Zt(n,t,r,s),bE(n,e,r)}}function bA(t,e,n){var r=vr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(DE(t))OE(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,nn(l,o)){var u=e.interleaved;u===null?(s.next=s,hf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=fE(t,e,s,r),n!==null&&(s=dt(),Zt(n,t,r,s),bE(n,e,r))}}function DE(t){var e=t.alternate;return t===we||e!==null&&e===we}function OE(t,e){To=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function bE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yd(t,n)}}var Yl={readContext:zt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},LA={readContext:zt,useCallback:function(t,e){return un().memoizedState=[t,e===void 0?null:e],t},useContext:zt,useEffect:Ig,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,RE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=un();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=un();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=OA.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=un();return t={current:t},e.memoizedState=t},useState:Tg,useDebugValue:Ef,useDeferredValue:function(t){return un().memoizedState=t},useTransition:function(){var t=Tg(!1),e=t[0];return t=DA.bind(null,t[1]),un().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,s=un();if(ve){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),$e===null)throw Error(F(349));hs&30||_E(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Ig(EE.bind(null,r,i,t),[t]),r.flags|=2048,Qo(9,vE.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=un(),e=$e.identifierPrefix;if(ve){var n=kn,r=Pn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VA={readContext:zt,useCallback:PE,useContext:zt,useEffect:vf,useImperativeHandle:CE,useInsertionEffect:SE,useLayoutEffect:AE,useMemo:kE,useReducer:Qc,useRef:IE,useState:function(){return Qc(Ko)},useDebugValue:Ef,useDeferredValue:function(t){var e=$t();return NE(e,Me.memoizedState,t)},useTransition:function(){var t=Qc(Ko)[0],e=$t().memoizedState;return[t,e]},useMutableSource:gE,useSyncExternalStore:yE,useId:xE,unstable_isNewReconciler:!1},MA={readContext:zt,useCallback:PE,useContext:zt,useEffect:vf,useImperativeHandle:CE,useInsertionEffect:SE,useLayoutEffect:AE,useMemo:kE,useReducer:Yc,useRef:IE,useState:function(){return Yc(Ko)},useDebugValue:Ef,useDeferredValue:function(t){var e=$t();return Me===null?e.memoizedState=t:NE(e,Me.memoizedState,t)},useTransition:function(){var t=Yc(Ko)[0],e=$t().memoizedState;return[t,e]},useMutableSource:gE,useSyncExternalStore:yE,useId:xE,unstable_isNewReconciler:!1};function Kt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ku={isMounted:function(t){return(t=t._reactInternals)?Ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),s=vr(t),i=Dn(r,s);i.payload=e,n!=null&&(i.callback=n),e=yr(t,i,s),e!==null&&(Zt(e,t,s,r),pl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),s=vr(t),i=Dn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=yr(t,i,s),e!==null&&(Zt(e,t,s,r),pl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=vr(t),s=Dn(n,r);s.tag=2,e!=null&&(s.callback=e),e=yr(t,s,r),e!==null&&(Zt(e,t,r,n),pl(e,t,r))}};function Sg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Bo(n,r)||!Bo(s,i):!0}function LE(t,e,n){var r=!1,s=Pr,i=e.contextType;return typeof i=="object"&&i!==null?i=zt(i):(s=St(e)?us:st.current,r=e.contextTypes,i=(r=r!=null)?ci(t,s):Pr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ku,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Ag(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ku.enqueueReplaceState(e,e.state,null)}function Kh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},df(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=zt(i):(i=St(e)?us:st.current,s.context=ci(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Wh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&ku.enqueueReplaceState(s,s.state,null),Wl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function pi(t,e){try{var n="",r=e;do n+=hS(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Xc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var UA=typeof WeakMap=="function"?WeakMap:Map;function VE(t,e,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Jl||(Jl=!0,id=r),Qh(t,e)},n}function ME(t,e,n){n=Dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Qh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Qh(t,e),typeof r!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new UA;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=JA.bind(null,t,e,n),e.then(t,t))}function Cg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dn(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var FA=Hn.ReactCurrentOwner,Tt=!1;function ht(t,e,n,r){e.child=t===null?dE(e,null,n,r):di(e,t.child,n,r)}function kg(t,e,n,r,s){n=n.render;var i=e.ref;return ni(e,s),r=yf(t,e,n,r,i,s),n=_f(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Un(t,e,s)):(ve&&n&&sf(e),e.flags|=1,ht(t,e,r,s),e.child)}function Ng(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Pf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,UE(t,e,i,r,s)):(t=El(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Bo,n(o,r)&&t.ref===e.ref)return Un(t,e,s)}return e.flags|=1,t=Er(i,r),t.ref=e.ref,t.return=e,e.child=t}function UE(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Bo(i,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,Un(t,e,s)}return Yh(t,e,n,r,s)}function FE(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Ys,Pt),Pt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Ys,Pt),Pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,fe(Ys,Pt),Pt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,fe(Ys,Pt),Pt|=r;return ht(t,e,s,n),e.child}function jE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yh(t,e,n,r,s){var i=St(n)?us:st.current;return i=ci(e,i),ni(e,s),n=yf(t,e,n,r,i,s),r=_f(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Un(t,e,s)):(ve&&r&&sf(e),e.flags|=1,ht(t,e,n,s),e.child)}function xg(t,e,n,r,s){if(St(n)){var i=!0;zl(e)}else i=!1;if(ni(e,s),e.stateNode===null)yl(t,e),LE(e,n,r),Kh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=zt(c):(c=St(n)?us:st.current,c=ci(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ag(e,o,r,c),nr=!1;var m=e.memoizedState;o.state=m,Wl(e,r,o,s),u=e.memoizedState,l!==r||m!==u||It.current||nr?(typeof f=="function"&&(Wh(e,n,f,r),u=e.memoizedState),(l=nr||Sg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,pE(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Kt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=zt(u):(u=St(n)?us:st.current,u=ci(e,u));var T=n.getDerivedStateFromProps;(f=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Ag(e,o,r,u),nr=!1,m=e.memoizedState,o.state=m,Wl(e,r,o,s);var P=e.memoizedState;l!==p||m!==P||It.current||nr?(typeof T=="function"&&(Wh(e,n,T,r),P=e.memoizedState),(c=nr||Sg(e,n,c,r,m,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Xh(t,e,n,r,i,s)}function Xh(t,e,n,r,s,i){jE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&gg(e,n,!1),Un(t,e,i);r=e.stateNode,FA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=di(e,t.child,null,i),e.child=di(e,null,l,i)):ht(t,e,l,i),e.memoizedState=r.state,s&&gg(e,n,!0),e.child}function BE(t){var e=t.stateNode;e.pendingContext?mg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mg(t,e.context,!1),ff(t,e.containerInfo)}function Dg(t,e,n,r,s){return hi(),af(s),e.flags|=256,ht(t,e,n,r),e.child}var Jh={dehydrated:null,treeContext:null,retryLane:0};function Zh(t){return{baseLanes:t,cachePool:null,transitions:null}}function zE(t,e,n){var r=e.pendingProps,s=Ee.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),fe(Ee,s&1),t===null)return qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Du(o,r,0,null),t=os(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Zh(n),e.memoizedState=Jh,t):wf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return jA(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Er(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Er(l,i):(i=os(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Zh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Jh,r}return i=t.child,t=i.sibling,r=Er(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wf(t,e){return e=Du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xa(t,e,n,r){return r!==null&&af(r),di(e,t.child,null,n),t=wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jA(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Xc(Error(F(422))),Xa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Du({mode:"visible",children:r.children},s,0,null),i=os(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&di(e,t.child,null,o),e.child.memoizedState=Zh(o),e.memoizedState=Jh,i);if(!(e.mode&1))return Xa(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=Xc(i,r,void 0),Xa(t,e,o,r)}if(l=(o&t.childLanes)!==0,Tt||l){if(r=$e,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Mn(t,s),Zt(r,t,s,-1))}return Cf(),r=Xc(Error(F(421))),Xa(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=ZA.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,kt=gr(s.nextSibling),Dt=e,ve=!0,Yt=null,t!==null&&(Mt[Ut++]=Pn,Mt[Ut++]=kn,Mt[Ut++]=cs,Pn=t.id,kn=t.overflow,cs=e),e=wf(e,r.children),e.flags|=4096,e)}function Og(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gh(t.return,e,n)}function Jc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function $E(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ht(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Og(t,n,e);else if(t.tag===19)Og(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Kl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Jc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Kl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Jc(e,!0,n,null,i);break;case"together":Jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ds|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BA(t,e,n){switch(e.tag){case 3:BE(e),hi();break;case 5:mE(e);break;case 1:St(e.type)&&zl(e);break;case 4:ff(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;fe(ql,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?zE(t,e,n):(fe(Ee,Ee.current&1),t=Un(t,e,n),t!==null?t.sibling:null);fe(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return $E(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),fe(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,FE(t,e,n)}return Un(t,e,n)}var HE,ed,qE,GE;HE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ed=function(){};qE=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ts(mn.current);var i=null;switch(n){case"input":s=Th(t,s),r=Th(t,r),i=[];break;case"select":s=Te({},s,{value:void 0}),r=Te({},r,{value:void 0}),i=[];break;case"textarea":s=Ah(t,s),r=Ah(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=jl)}Ch(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};GE=function(t,e,n,r){n!==r&&(e.flags|=4)};function to(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zA(t,e,n){var r=e.pendingProps;switch(of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return St(e.type)&&Bl(),Je(e),null;case 3:return r=e.stateNode,fi(),ye(It),ye(st),mf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yt!==null&&(ld(Yt),Yt=null))),ed(t,e),Je(e),null;case 5:pf(e);var s=ts(Go.current);if(n=e.type,t!==null&&e.stateNode!=null)qE(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Je(e),null}if(t=ts(mn.current),Qa(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[hn]=e,r[Ho]=i,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(s=0;s<uo.length;s++)me(uo[s],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":zm(r,i),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},me("invalid",r);break;case"textarea":Hm(r,i),me("invalid",r)}Ch(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ka(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ka(r.textContent,l,t),s=["children",""+l]):bo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":ja(r),$m(r,i,!0);break;case"textarea":ja(r),qm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=jl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ev(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[hn]=e,t[Ho]=r,HE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ph(n,r),n){case"dialog":me("cancel",t),me("close",t),s=r;break;case"iframe":case"object":case"embed":me("load",t),s=r;break;case"video":case"audio":for(s=0;s<uo.length;s++)me(uo[s],t);s=r;break;case"source":me("error",t),s=r;break;case"img":case"image":case"link":me("error",t),me("load",t),s=r;break;case"details":me("toggle",t),s=r;break;case"input":zm(t,r),s=Th(t,r),me("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Te({},r,{value:void 0}),me("invalid",t);break;case"textarea":Hm(t,r),s=Ah(t,r),me("invalid",t);break;default:s=r}Ch(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Iv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&wv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Lo(t,u):typeof u=="number"&&Lo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(bo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&me("scroll",t):u!=null&&Hd(t,i,u,o))}switch(n){case"input":ja(t),$m(t,r,!1);break;case"textarea":ja(t),qm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Cr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Js(t,!!r.multiple,i,!1):r.defaultValue!=null&&Js(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)GE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ts(Go.current),ts(mn.current),Qa(e)){if(r=e.stateNode,n=e.memoizedProps,r[hn]=e,(i=r.nodeValue!==n)&&(t=Dt,t!==null))switch(t.tag){case 3:Ka(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ka(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=e,e.stateNode=r}return Je(e),null;case 13:if(ye(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&kt!==null&&e.mode&1&&!(e.flags&128))cE(),hi(),e.flags|=98560,i=!1;else if(i=Qa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[hn]=e}else hi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),i=!1}else Yt!==null&&(ld(Yt),Yt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?Ue===0&&(Ue=3):Cf())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return fi(),ed(t,e),t===null&&zo(e.stateNode.containerInfo),Je(e),null;case 10:return cf(e.type._context),Je(e),null;case 17:return St(e.type)&&Bl(),Je(e),null;case 19:if(ye(Ee),i=e.memoizedState,i===null)return Je(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)to(i,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kl(t),o!==null){for(e.flags|=128,to(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(Ee,Ee.current&1|2),e.child}t=t.sibling}i.tail!==null&&ke()>mi&&(e.flags|=128,r=!0,to(i,!1),e.lanes=4194304)}else{if(!r)if(t=Kl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),to(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ve)return Je(e),null}else 2*ke()-i.renderingStartTime>mi&&n!==1073741824&&(e.flags|=128,r=!0,to(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ke(),e.sibling=null,n=Ee.current,fe(Ee,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return Rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Pt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function $A(t,e){switch(of(e),e.tag){case 1:return St(e.type)&&Bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fi(),ye(It),ye(st),mf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pf(e),null;case 13:if(ye(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));hi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Ee),null;case 4:return fi(),null;case 10:return cf(e.type._context),null;case 22:case 23:return Rf(),null;case 24:return null;default:return null}}var Ja=!1,tt=!1,HA=typeof WeakSet=="function"?WeakSet:Set,G=null;function Qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function td(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var bg=!1;function qA(t,e){if(Uh=Ml,t=Xv(),rf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var T;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(T=p.firstChild)!==null;)m=p,p=T;for(;;){if(p===t)break t;if(m===n&&++c===s&&(l=o),m===i&&++f===r&&(u=o),(T=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fh={focusedElem:t,selectionRange:n},Ml=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var x=P.memoizedProps,b=P.memoizedState,A=e.stateNode,_=A.getSnapshotBeforeUpdate(e.elementType===e.type?x:Kt(e.type,x),b);A.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){Ae(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return P=bg,bg=!1,P}function Io(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&td(e,n,i)}s=s.next}while(s!==r)}}function Nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function WE(t){var e=t.alternate;e!==null&&(t.alternate=null,WE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hn],delete e[Ho],delete e[zh],delete e[CA],delete e[PA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function KE(t){return t.tag===5||t.tag===3||t.tag===4}function Lg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||KE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jl));else if(r!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}function sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}var He=null,Qt=!1;function Zn(t,e,n){for(n=n.child;n!==null;)QE(t,e,n),n=n.sibling}function QE(t,e,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Tu,n)}catch{}switch(n.tag){case 5:tt||Qs(n,e);case 6:var r=He,s=Qt;He=null,Zn(t,e,n),He=r,Qt=s,He!==null&&(Qt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Qt?(t=He,n=n.stateNode,t.nodeType===8?qc(t.parentNode,n):t.nodeType===1&&qc(t,n),Fo(t)):qc(He,n.stateNode));break;case 4:r=He,s=Qt,He=n.stateNode.containerInfo,Qt=!0,Zn(t,e,n),He=r,Qt=s;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&td(n,e,o),s=s.next}while(s!==r)}Zn(t,e,n);break;case 1:if(!tt&&(Qs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}Zn(t,e,n);break;case 21:Zn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Zn(t,e,n),tt=r):Zn(t,e,n);break;default:Zn(t,e,n)}}function Vg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HA),e.forEach(function(r){var s=e1.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:He=l.stateNode,Qt=!1;break e;case 3:He=l.stateNode.containerInfo,Qt=!0;break e;case 4:He=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if(He===null)throw Error(F(160));QE(i,o,s),He=null,Qt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Ae(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)YE(e,t),e=e.sibling}function YE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),ln(t),r&4){try{Io(3,t,t.return),Nu(3,t)}catch(x){Ae(t,t.return,x)}try{Io(5,t,t.return)}catch(x){Ae(t,t.return,x)}}break;case 1:Wt(e,t),ln(t),r&512&&n!==null&&Qs(n,n.return);break;case 5:if(Wt(e,t),ln(t),r&512&&n!==null&&Qs(n,n.return),t.flags&32){var s=t.stateNode;try{Lo(s,"")}catch(x){Ae(t,t.return,x)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&_v(s,i),Ph(l,o);var c=Ph(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Iv(s,p):f==="dangerouslySetInnerHTML"?wv(s,p):f==="children"?Lo(s,p):Hd(s,f,p,c)}switch(l){case"input":Ih(s,i);break;case"textarea":vv(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var T=i.value;T!=null?Js(s,!!i.multiple,T,!1):m!==!!i.multiple&&(i.defaultValue!=null?Js(s,!!i.multiple,i.defaultValue,!0):Js(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ho]=i}catch(x){Ae(t,t.return,x)}}break;case 6:if(Wt(e,t),ln(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(x){Ae(t,t.return,x)}}break;case 3:if(Wt(e,t),ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fo(e.containerInfo)}catch(x){Ae(t,t.return,x)}break;case 4:Wt(e,t),ln(t);break;case 13:Wt(e,t),ln(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Sf=ke())),r&4&&Vg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||f,Wt(e,t),tt=c):Wt(e,t),ln(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(G=t,f=t.child;f!==null;){for(p=G=f;G!==null;){switch(m=G,T=m.child,m.tag){case 0:case 11:case 14:case 15:Io(4,m,m.return);break;case 1:Qs(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(x){Ae(r,n,x)}}break;case 5:Qs(m,m.return);break;case 22:if(m.memoizedState!==null){Ug(p);continue}}T!==null?(T.return=m,G=T):Ug(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Tv("display",o))}catch(x){Ae(t,t.return,x)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){Ae(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Wt(e,t),ln(t),r&4&&Vg(t);break;case 21:break;default:Wt(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(KE(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Lo(s,""),r.flags&=-33);var i=Lg(t);sd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Lg(t);rd(t,l,o);break;default:throw Error(F(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function GA(t,e,n){G=t,XE(t)}function XE(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var s=G,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Ja;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||tt;l=Ja;var c=tt;if(Ja=o,(tt=u)&&!c)for(G=s;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?Fg(s):u!==null?(u.return=o,G=u):Fg(s);for(;i!==null;)G=i,XE(i),i=i.sibling;G=s,Ja=l,tt=c}Mg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,G=i):Mg(t)}}function Mg(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||Nu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Kt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&wg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Fo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}tt||e.flags&512&&nd(e)}catch(m){Ae(e,e.return,m)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function Ug(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function Fg(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nu(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ae(e,s,u)}}var i=e.return;try{nd(e)}catch(u){Ae(e,i,u)}break;case 5:var o=e.return;try{nd(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var WA=Math.ceil,Xl=Hn.ReactCurrentDispatcher,Tf=Hn.ReactCurrentOwner,Bt=Hn.ReactCurrentBatchConfig,le=0,$e=null,De=null,We=0,Pt=0,Ys=Mr(0),Ue=0,Yo=null,ds=0,xu=0,If=0,So=null,_t=null,Sf=0,mi=1/0,An=null,Jl=!1,id=null,_r=null,Za=!1,hr=null,Zl=0,Ao=0,od=null,_l=-1,vl=0;function dt(){return le&6?ke():_l!==-1?_l:_l=ke()}function vr(t){return t.mode&1?le&2&&We!==0?We&-We:NA.transition!==null?(vl===0&&(vl=Lv()),vl):(t=ce,t!==0||(t=window.event,t=t===void 0?16:zv(t.type)),t):1}function Zt(t,e,n,r){if(50<Ao)throw Ao=0,od=null,Error(F(185));ua(t,n,r),(!(le&2)||t!==$e)&&(t===$e&&(!(le&2)&&(xu|=n),Ue===4&&ir(t,We)),At(t,r),n===1&&le===0&&!(e.mode&1)&&(mi=ke()+500,Cu&&Ur()))}function At(t,e){var n=t.callbackNode;NS(t,e);var r=Vl(t,t===$e?We:0);if(r===0)n!==null&&Km(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Km(n),e===1)t.tag===0?kA(jg.bind(null,t)):aE(jg.bind(null,t)),AA(function(){!(le&6)&&Ur()}),n=null;else{switch(Vv(r)){case 1:n=Qd;break;case 4:n=Ov;break;case 16:n=Ll;break;case 536870912:n=bv;break;default:n=Ll}n=iw(n,JE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function JE(t,e){if(_l=-1,vl=0,le&6)throw Error(F(327));var n=t.callbackNode;if(ri()&&t.callbackNode!==n)return null;var r=Vl(t,t===$e?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=eu(t,r);else{e=r;var s=le;le|=2;var i=ew();($e!==t||We!==e)&&(An=null,mi=ke()+500,is(t,e));do try{YA();break}catch(l){ZE(t,l)}while(!0);uf(),Xl.current=i,le=s,De!==null?e=0:($e=null,We=0,e=Ue)}if(e!==0){if(e===2&&(s=Oh(t),s!==0&&(r=s,e=ad(t,s))),e===1)throw n=Yo,is(t,0),ir(t,r),At(t,ke()),n;if(e===6)ir(t,r);else{if(s=t.current.alternate,!(r&30)&&!KA(s)&&(e=eu(t,r),e===2&&(i=Oh(t),i!==0&&(r=i,e=ad(t,i))),e===1))throw n=Yo,is(t,0),ir(t,r),At(t,ke()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Xr(t,_t,An);break;case 3:if(ir(t,r),(r&130023424)===r&&(e=Sf+500-ke(),10<e)){if(Vl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Bh(Xr.bind(null,t,_t,An),e);break}Xr(t,_t,An);break;case 4:if(ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Jt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*WA(r/1960))-r,10<r){t.timeoutHandle=Bh(Xr.bind(null,t,_t,An),r);break}Xr(t,_t,An);break;case 5:Xr(t,_t,An);break;default:throw Error(F(329))}}}return At(t,ke()),t.callbackNode===n?JE.bind(null,t):null}function ad(t,e){var n=So;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=eu(t,e),t!==2&&(e=_t,_t=n,e!==null&&ld(e)),t}function ld(t){_t===null?_t=t:_t.push.apply(_t,t)}function KA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!nn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~If,e&=~xu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function jg(t){if(le&6)throw Error(F(327));ri();var e=Vl(t,0);if(!(e&1))return At(t,ke()),null;var n=eu(t,e);if(t.tag!==0&&n===2){var r=Oh(t);r!==0&&(e=r,n=ad(t,r))}if(n===1)throw n=Yo,is(t,0),ir(t,e),At(t,ke()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,_t,An),At(t,ke()),null}function Af(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(mi=ke()+500,Cu&&Ur())}}function fs(t){hr!==null&&hr.tag===0&&!(le&6)&&ri();var e=le;le|=1;var n=Bt.transition,r=ce;try{if(Bt.transition=null,ce=1,t)return t()}finally{ce=r,Bt.transition=n,le=e,!(le&6)&&Ur()}}function Rf(){Pt=Ys.current,ye(Ys)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SA(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(of(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bl();break;case 3:fi(),ye(It),ye(st),mf();break;case 5:pf(r);break;case 4:fi();break;case 13:ye(Ee);break;case 19:ye(Ee);break;case 10:cf(r.type._context);break;case 22:case 23:Rf()}n=n.return}if($e=t,De=t=Er(t.current,null),We=Pt=e,Ue=0,Yo=null,If=xu=ds=0,_t=So=null,es!==null){for(e=0;e<es.length;e++)if(n=es[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}es=null}return t}function ZE(t,e){do{var n=De;try{if(uf(),ml.current=Yl,Ql){for(var r=we.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ql=!1}if(hs=0,ze=Me=we=null,To=!1,Wo=0,Tf.current=null,n===null||n.return===null){Ue=1,Yo=e,De=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var T=Cg(o);if(T!==null){T.flags&=-257,Pg(T,o,l,i,e),T.mode&1&&Rg(i,c,e),e=T,u=c;var P=e.updateQueue;if(P===null){var x=new Set;x.add(u),e.updateQueue=x}else P.add(u);break e}else{if(!(e&1)){Rg(i,c,e),Cf();break e}u=Error(F(426))}}else if(ve&&l.mode&1){var b=Cg(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Pg(b,o,l,i,e),af(pi(u,l));break e}}i=u=pi(u,l),Ue!==4&&(Ue=2),So===null?So=[i]:So.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var A=VE(i,u,e);Eg(i,A);break e;case 1:l=u;var _=i.type,S=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(_r===null||!_r.has(S)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=ME(i,l,e);Eg(i,D);break e}}i=i.return}while(i!==null)}nw(n)}catch(j){e=j,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function ew(){var t=Xl.current;return Xl.current=Yl,t===null?Yl:t}function Cf(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),$e===null||!(ds&268435455)&&!(xu&268435455)||ir($e,We)}function eu(t,e){var n=le;le|=2;var r=ew();($e!==t||We!==e)&&(An=null,is(t,e));do try{QA();break}catch(s){ZE(t,s)}while(!0);if(uf(),le=n,Xl.current=r,De!==null)throw Error(F(261));return $e=null,We=0,Ue}function QA(){for(;De!==null;)tw(De)}function YA(){for(;De!==null&&!wS();)tw(De)}function tw(t){var e=sw(t.alternate,t,Pt);t.memoizedProps=t.pendingProps,e===null?nw(t):De=e,Tf.current=null}function nw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$A(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,De=null;return}}else if(n=zA(n,e,Pt),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Ue===0&&(Ue=5)}function Xr(t,e,n){var r=ce,s=Bt.transition;try{Bt.transition=null,ce=1,XA(t,e,n,r)}finally{Bt.transition=s,ce=r}return null}function XA(t,e,n,r){do ri();while(hr!==null);if(le&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(xS(t,i),t===$e&&(De=$e=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Za||(Za=!0,iw(Ll,function(){return ri(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Bt.transition,Bt.transition=null;var o=ce;ce=1;var l=le;le|=4,Tf.current=null,qA(t,n),YE(n,t),yA(Fh),Ml=!!Uh,Fh=Uh=null,t.current=n,GA(n),TS(),le=l,ce=o,Bt.transition=i}else t.current=n;if(Za&&(Za=!1,hr=t,Zl=s),i=t.pendingLanes,i===0&&(_r=null),AS(n.stateNode),At(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Jl)throw Jl=!1,t=id,id=null,t;return Zl&1&&t.tag!==0&&ri(),i=t.pendingLanes,i&1?t===od?Ao++:(Ao=0,od=t):Ao=0,Ur(),null}function ri(){if(hr!==null){var t=Vv(Zl),e=Bt.transition,n=ce;try{if(Bt.transition=null,ce=16>t?16:t,hr===null)var r=!1;else{if(t=hr,hr=null,Zl=0,le&6)throw Error(F(331));var s=le;for(le|=4,G=t.current;G!==null;){var i=G,o=i.child;if(G.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(G=c;G!==null;){var f=G;switch(f.tag){case 0:case 11:case 15:Io(8,f,i)}var p=f.child;if(p!==null)p.return=f,G=p;else for(;G!==null;){f=G;var m=f.sibling,T=f.return;if(WE(f),f===c){G=null;break}if(m!==null){m.return=T,G=m;break}G=T}}}var P=i.alternate;if(P!==null){var x=P.child;if(x!==null){P.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}G=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,G=o;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Io(9,i,i.return)}var A=i.sibling;if(A!==null){A.return=i.return,G=A;break e}G=i.return}}var _=t.current;for(G=_;G!==null;){o=G;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,G=S;else e:for(o=_;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Nu(9,l)}}catch(j){Ae(l,l.return,j)}if(l===o){G=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,G=D;break e}G=l.return}}if(le=s,Ur(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Tu,t)}catch{}r=!0}return r}finally{ce=n,Bt.transition=e}}return!1}function Bg(t,e,n){e=pi(n,e),e=VE(t,e,1),t=yr(t,e,1),e=dt(),t!==null&&(ua(t,1,e),At(t,e))}function Ae(t,e,n){if(t.tag===3)Bg(t,t,n);else for(;e!==null;){if(e.tag===3){Bg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_r===null||!_r.has(r))){t=pi(n,t),t=ME(e,t,1),e=yr(e,t,1),t=dt(),e!==null&&(ua(e,1,t),At(e,t));break}}e=e.return}}function JA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(We&n)===n&&(Ue===4||Ue===3&&(We&130023424)===We&&500>ke()-Sf?is(t,0):If|=n),At(t,e)}function rw(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=dt();t=Mn(t,e),t!==null&&(ua(t,e,n),At(t,n))}function ZA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rw(t,n)}function e1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),rw(t,n)}var sw;sw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||It.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,BA(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,ve&&e.flags&1048576&&lE(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yl(t,e),t=e.pendingProps;var s=ci(e,st.current);ni(e,n),s=yf(null,e,r,t,s,n);var i=_f();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(i=!0,zl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,df(e),s.updater=ku,e.stateNode=s,s._reactInternals=e,Kh(e,r,t,n),e=Xh(null,e,r,!0,i,n)):(e.tag=0,ve&&i&&sf(e),ht(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=n1(r),t=Kt(r,t),s){case 0:e=Yh(null,e,r,t,n);break e;case 1:e=xg(null,e,r,t,n);break e;case 11:e=kg(null,e,r,t,n);break e;case 14:e=Ng(null,e,r,Kt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Kt(r,s),Yh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Kt(r,s),xg(t,e,r,s,n);case 3:e:{if(BE(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,pE(t,e),Wl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=pi(Error(F(423)),e),e=Dg(t,e,r,n,s);break e}else if(r!==s){s=pi(Error(F(424)),e),e=Dg(t,e,r,n,s);break e}else for(kt=gr(e.stateNode.containerInfo.firstChild),Dt=e,ve=!0,Yt=null,n=dE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hi(),r===s){e=Un(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return mE(e),t===null&&qh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,jh(r,s)?o=null:i!==null&&jh(r,i)&&(e.flags|=32),jE(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&qh(e),null;case 13:return zE(t,e,n);case 4:return ff(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=di(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Kt(r,s),kg(t,e,r,s,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,fe(ql,r._currentValue),r._currentValue=o,i!==null)if(nn(i.value,o)){if(i.children===s.children&&!It.current){e=Un(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Dn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Gh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Gh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ht(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,ni(e,n),s=zt(s),r=r(s),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,s=Kt(r,e.pendingProps),s=Kt(r.type,s),Ng(t,e,r,s,n);case 15:return UE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Kt(r,s),yl(t,e),e.tag=1,St(r)?(t=!0,zl(e)):t=!1,ni(e,n),LE(e,r,s),Kh(e,r,s,n),Xh(null,e,r,!0,t,n);case 19:return $E(t,e,n);case 22:return FE(t,e,n)}throw Error(F(156,e.tag))};function iw(t,e){return Dv(t,e)}function t1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new t1(t,e,n,r)}function Pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function n1(t){if(typeof t=="function")return Pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gd)return 11;if(t===Wd)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function El(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Pf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case js:return os(n.children,s,i,e);case qd:o=8,s|=8;break;case _h:return t=jt(12,n,e,s|2),t.elementType=_h,t.lanes=i,t;case vh:return t=jt(13,n,e,s),t.elementType=vh,t.lanes=i,t;case Eh:return t=jt(19,n,e,s),t.elementType=Eh,t.lanes=i,t;case mv:return Du(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fv:o=10;break e;case pv:o=9;break e;case Gd:o=11;break e;case Wd:o=14;break e;case tr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=jt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function os(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function Du(t,e,n,r){return t=jt(22,t,r,e),t.elementType=mv,t.lanes=n,t.stateNode={isHidden:!1},t}function Zc(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function eh(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function r1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function kf(t,e,n,r,s,i,o,l,u){return t=new r1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=jt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(i),t}function s1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ow(t){if(!t)return Pr;t=t._reactInternals;e:{if(Ss(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(St(n))return oE(t,n,e)}return e}function aw(t,e,n,r,s,i,o,l,u){return t=kf(n,r,!0,t,s,i,o,l,u),t.context=ow(null),n=t.current,r=dt(),s=vr(n),i=Dn(r,s),i.callback=e??null,yr(n,i,s),t.current.lanes=s,ua(t,s,r),At(t,r),t}function Ou(t,e,n,r){var s=e.current,i=dt(),o=vr(s);return n=ow(n),e.context===null?e.context=n:e.pendingContext=n,e=Dn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yr(s,e,o),t!==null&&(Zt(t,s,o,i),pl(t,s,o)),o}function tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nf(t,e){zg(t,e),(t=t.alternate)&&zg(t,e)}function i1(){return null}var lw=typeof reportError=="function"?reportError:function(t){console.error(t)};function xf(t){this._internalRoot=t}bu.prototype.render=xf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Ou(t,e,null,null)};bu.prototype.unmount=xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fs(function(){Ou(null,t,null,null)}),e[Vn]=null}};function bu(t){this._internalRoot=t}bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&Bv(t)}};function Df(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $g(){}function o1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=tu(o);i.call(c)}}var o=aw(e,r,t,0,null,!1,!1,"",$g);return t._reactRootContainer=o,t[Vn]=o.current,zo(t.nodeType===8?t.parentNode:t),fs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=tu(u);l.call(c)}}var u=kf(t,0,!1,null,null,!1,!1,"",$g);return t._reactRootContainer=u,t[Vn]=u.current,zo(t.nodeType===8?t.parentNode:t),fs(function(){Ou(e,u,n,r)}),u}function Vu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=tu(o);l.call(u)}}Ou(e,o,t,s)}else o=o1(n,e,t,s,r);return tu(o)}Mv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=lo(e.pendingLanes);n!==0&&(Yd(e,n|1),At(e,ke()),!(le&6)&&(mi=ke()+500,Ur()))}break;case 13:fs(function(){var r=Mn(t,1);if(r!==null){var s=dt();Zt(r,t,1,s)}}),Nf(t,1)}};Xd=function(t){if(t.tag===13){var e=Mn(t,134217728);if(e!==null){var n=dt();Zt(e,t,134217728,n)}Nf(t,134217728)}};Uv=function(t){if(t.tag===13){var e=vr(t),n=Mn(t,e);if(n!==null){var r=dt();Zt(n,t,e,r)}Nf(t,e)}};Fv=function(){return ce};jv=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Nh=function(t,e,n){switch(e){case"input":if(Ih(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Ru(r);if(!s)throw Error(F(90));yv(r),Ih(r,s)}}}break;case"textarea":vv(t,n);break;case"select":e=n.value,e!=null&&Js(t,!!n.multiple,e,!1)}};Rv=Af;Cv=fs;var a1={usingClientEntryPoint:!1,Events:[ha,Hs,Ru,Sv,Av,Af]},no={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},l1={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nv(t),t===null?null:t.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||i1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Tu=el.inject(l1),pn=el}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a1;bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(e))throw Error(F(200));return s1(t,e,null,n)};bt.createRoot=function(t,e){if(!Df(t))throw Error(F(299));var n=!1,r="",s=lw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=kf(t,1,!1,null,null,n,!1,r,s),t[Vn]=e.current,zo(t.nodeType===8?t.parentNode:t),new xf(e)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Nv(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return fs(t)};bt.hydrate=function(t,e,n){if(!Lu(e))throw Error(F(200));return Vu(null,t,e,!0,n)};bt.hydrateRoot=function(t,e,n){if(!Df(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=lw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=aw(e,null,t,1,n??null,s,!1,i,o),t[Vn]=e.current,zo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new bu(e)};bt.render=function(t,e,n){if(!Lu(e))throw Error(F(200));return Vu(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!Lu(t))throw Error(F(40));return t._reactRootContainer?(fs(function(){Vu(null,null,t,!1,function(){t._reactRootContainer=null,t[Vn]=null})}),!0):!1};bt.unstable_batchedUpdates=Af;bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Lu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Vu(t,e,n,!1,r)};bt.version="18.3.1-next-f1338f8080-20240426";function uw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uw)}catch(t){console.error(t)}}uw(),uv.exports=bt;var u1=uv.exports,Hg=u1;gh.createRoot=Hg.createRoot,gh.hydrateRoot=Hg.hydrateRoot;const c1="modulepreload",h1=function(t){return"/"+t},qg={},Fr=function(e,n,r){let s=Promise.resolve();return n&&n.length>0&&(document.getElementsByTagName("link"),s=Promise.all(n.map(i=>{if(i=h1(i),i in qg)return;qg[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":c1,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})}))),s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var d1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const f1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Rt=(t,e)=>{const n=X.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,children:l,...u},c)=>X.createElement("svg",{ref:c,...d1,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:`lucide lucide-${f1(t)}`,...u},[...e.map(([f,p])=>X.createElement(f,p)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n},p1=Rt("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]),m1=Rt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),g1=Rt("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),y1=Rt("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),_1=Rt("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]),v1=Rt("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]),E1=Rt("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),w1=Rt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),T1=Rt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),cw=Rt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),I1=Rt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),S1=Rt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),A1=Rt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),hw=Rt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ro=({icon:t,label:e,active:n,onClick:r})=>C.jsxs("button",{onClick:r,className:`w-full flex items-center justify-center lg:justify-start px-4 py-3 rounded-full transition-all duration-200 group relative
    ${n?"bg-blue-100/50 text-blue-700 font-medium":"text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`,children:[av.cloneElement(t,{className:`w-5 h-5 ${n?"text-blue-600":"text-gray-400 group-hover:text-gray-600"}`}),C.jsx("span",{className:"ml-3 text-sm",children:e})]}),R1=({children:t,currentView:e,onNavigate:n})=>C.jsxs("div",{className:"min-h-screen flex font-sans bg-white text-gray-900",children:[C.jsxs("aside",{className:"w-20 lg:w-64 border-r border-gray-200 flex flex-col bg-gray-50/80 backdrop-blur-md fixed h-full z-20",children:[C.jsx("div",{className:"h-20 flex items-center justify-center lg:justify-start lg:px-8",children:C.jsx("div",{className:"flex items-center gap-2.5 cursor-pointer",onClick:()=>n("INSIGHT"),children:C.jsx("img",{src:"/logo.png",alt:"Baro.ai Logo",className:"w-auto h-8 object-contain"})})}),C.jsxs("nav",{className:"flex-1 py-6 px-3 space-y-1",children:[C.jsx(ro,{icon:C.jsx(g1,{}),label:"인사이트",active:e==="INSIGHT",onClick:()=>n("INSIGHT")}),C.jsx(ro,{icon:C.jsx(v1,{}),label:"보드",active:e==="BOARD",onClick:()=>n("BOARD")}),C.jsx(ro,{icon:C.jsx(y1,{}),label:"Gemini Pro",active:e==="GEMINI",onClick:()=>n("GEMINI")}),C.jsx("div",{className:"pt-2"}),C.jsx(ro,{icon:C.jsx(p1,{}),label:"보관함",active:e==="ARCHIVE",onClick:()=>n("ARCHIVE")}),C.jsx(ro,{icon:C.jsx(S1,{}),label:"설정",active:e==="SETTINGS",onClick:()=>n("SETTINGS")})]}),C.jsx("div",{className:"p-6 border-t border-gray-100",children:C.jsxs("div",{className:"bg-white p-4 rounded-2xl border border-gray-200 shadow-sm",children:[C.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[C.jsx(A1,{className:"w-4 h-4 text-blue-600"}),C.jsx("p",{className:"text-xs font-semibold text-gray-600",children:"AI 크레딧"})]}),C.jsx("div",{className:"w-full bg-gray-100 rounded-full h-1.5 mb-2",children:C.jsx("div",{className:"bg-blue-600 h-1.5 rounded-full w-[45%]"})}),C.jsxs("div",{className:"flex justify-between text-[10px] text-gray-500 font-medium",children:[C.jsx("span",{children:"450 사용"}),C.jsx("span",{children:"1000 한도"})]})]})})]}),C.jsxs("main",{className:"flex-1 ml-20 lg:ml-64 flex flex-col h-screen overflow-hidden relative",children:[e==="BOARD"&&C.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"}),t]})]});var vt=(t=>(t.REQUESTED="REQUESTED",t.CHECKED="CHECKED",t.WIP="WIP",t.FEEDBACK="FEEDBACK",t.DONE="DONE",t.CANCELLED="CANCELLED",t.ARCHIVED="ARCHIVED",t.TRASH="TRASH",t))(vt||{}),Xs=(t=>(t.HIGH="HIGH",t.MEDIUM="MEDIUM",t.LOW="LOW",t))(Xs||{});const C1=()=>{};var Gg={};/**
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
 */const dw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},P1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},fw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(m=64)),r.push(n[f],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):P1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||p==null)throw new k1;const m=i<<2|l>>4;if(r.push(m),c!==64){const T=l<<4&240|c>>2;if(r.push(T),p!==64){const P=c<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class k1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N1=function(t){const e=dw(t);return fw.encodeByteArray(e,!0)},nu=function(t){return N1(t).replace(/\./g,"")},pw=function(t){try{return fw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function x1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const D1=()=>x1().__FIREBASE_DEFAULTS__,O1=()=>{if(typeof process>"u"||typeof Gg>"u")return;const t=Gg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},b1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pw(t[1]);return e&&JSON.parse(e)},Mu=()=>{try{return C1()||D1()||O1()||b1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mw=t=>{var e,n;return(n=(e=Mu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},gw=t=>{const e=mw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yw=()=>{var t;return(t=Mu())==null?void 0:t.config},_w=t=>{var e;return(e=Mu())==null?void 0:e[`_${t}`]};/**
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
 */class L1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Of(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function vw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[nu(JSON.stringify(n)),nu(JSON.stringify(o)),""].join(".")}const Ro={};function V1(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ro))Ro[e]?t.emulator.push(e):t.prod.push(e);return t}function M1(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Wg=!1;function bf(t,e){if(typeof window>"u"||typeof document>"u"||!jr(window.location.host)||Ro[t]===e||Ro[t]||Wg)return;Ro[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=V1().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,T){m.setAttribute("width","24"),m.setAttribute("id",T),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Wg=!0,o()},m}function f(m,T){m.setAttribute("id",T),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=M1(r),T=n("text"),P=document.getElementById(T)||document.createElement("span"),x=n("learnmore"),b=document.getElementById(x)||document.createElement("a"),A=n("preprendIcon"),_=document.getElementById(A)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const S=m.element;l(S),f(b,x);const D=c();u(_,A),S.append(_,P,b,D),document.body.appendChild(S)}i?(P.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function U1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function F1(){var e;const t=(e=Mu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function j1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function B1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function z1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $1(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function H1(){return!F1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function q1(){try{return typeof indexedDB=="object"}catch{return!1}}function G1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const W1="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=W1,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fa.prototype.create)}}class fa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?K1(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Sn(s,l,r)}}function K1(t,e){return t.replace(Q1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Q1=/\{\$([^}]+)}/g;function Y1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ps(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Kg(i)&&Kg(o)){if(!ps(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Kg(t){return t!==null&&typeof t=="object"}/**
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
 */function pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function co(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ho(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function X1(t,e){const n=new J1(t,e);return n.subscribe.bind(n)}class J1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Z1(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=th),s.error===void 0&&(s.error=th),s.complete===void 0&&(s.complete=th);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Z1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function th(){}/**
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
 */function _e(t){return t&&t._delegate?t._delegate:t}class kr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jr="[DEFAULT]";/**
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
 */class eR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new L1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nR(e))try{this.getOrInitializeService({instanceIdentifier:Jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jr){return this.instances.has(e)}getOptions(e=Jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jr){return this.component?this.component.multipleInstances?e:Jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tR(t){return t===Jr?void 0:t}function nR(t){return t.instantiationMode==="EAGER"}/**
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
 */class rR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const sR={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},iR=re.INFO,oR={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},aR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=oR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lf{constructor(e){this.name=e,this._logLevel=iR,this._logHandler=aR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const lR=(t,e)=>e.some(n=>t instanceof n);let Qg,Yg;function uR(){return Qg||(Qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cR(){return Yg||(Yg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ew=new WeakMap,ud=new WeakMap,ww=new WeakMap,nh=new WeakMap,Vf=new WeakMap;function hR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ew.set(n,t)}).catch(()=>{}),Vf.set(e,t),e}function dR(t){if(ud.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ud.set(t,e)}let cd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ud.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ww.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fR(t){cd=t(cd)}function pR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rh(this),e,...n);return ww.set(r,e.sort?e.sort():[e]),wr(r)}:cR().includes(t)?function(...e){return t.apply(rh(this),e),wr(Ew.get(this))}:function(...e){return wr(t.apply(rh(this),e))}}function mR(t){return typeof t=="function"?pR(t):(t instanceof IDBTransaction&&dR(t),lR(t,uR())?new Proxy(t,cd):t)}function wr(t){if(t instanceof IDBRequest)return hR(t);if(nh.has(t))return nh.get(t);const e=mR(t);return e!==t&&(nh.set(t,e),Vf.set(e,t)),e}const rh=t=>Vf.get(t);function gR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=wr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(wr(o.result),u.oldVersion,u.newVersion,wr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const yR=["get","getKey","getAll","getAllKeys","count"],_R=["put","add","delete","clear"],sh=new Map;function Xg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sh.get(e))return sh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=_R.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yR.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return sh.set(e,i),i}fR(t=>({...t,get:(e,n,r)=>Xg(e,n)||t.get(e,n,r),has:(e,n)=>!!Xg(e,n)||t.has(e,n)}));/**
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
 */class vR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ER(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ER(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",Jg="0.14.6";/**
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
 */const Fn=new Lf("@firebase/app"),wR="@firebase/app-compat",TR="@firebase/analytics-compat",IR="@firebase/analytics",SR="@firebase/app-check-compat",AR="@firebase/app-check",RR="@firebase/auth",CR="@firebase/auth-compat",PR="@firebase/database",kR="@firebase/data-connect",NR="@firebase/database-compat",xR="@firebase/functions",DR="@firebase/functions-compat",OR="@firebase/installations",bR="@firebase/installations-compat",LR="@firebase/messaging",VR="@firebase/messaging-compat",MR="@firebase/performance",UR="@firebase/performance-compat",FR="@firebase/remote-config",jR="@firebase/remote-config-compat",BR="@firebase/storage",zR="@firebase/storage-compat",$R="@firebase/firestore",HR="@firebase/ai",qR="@firebase/firestore-compat",GR="firebase",WR="12.6.0";/**
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
 */const dd="[DEFAULT]",KR={[hd]:"fire-core",[wR]:"fire-core-compat",[IR]:"fire-analytics",[TR]:"fire-analytics-compat",[AR]:"fire-app-check",[SR]:"fire-app-check-compat",[RR]:"fire-auth",[CR]:"fire-auth-compat",[PR]:"fire-rtdb",[kR]:"fire-data-connect",[NR]:"fire-rtdb-compat",[xR]:"fire-fn",[DR]:"fire-fn-compat",[OR]:"fire-iid",[bR]:"fire-iid-compat",[LR]:"fire-fcm",[VR]:"fire-fcm-compat",[MR]:"fire-perf",[UR]:"fire-perf-compat",[FR]:"fire-rc",[jR]:"fire-rc-compat",[BR]:"fire-gcs",[zR]:"fire-gcs-compat",[$R]:"fire-fst",[qR]:"fire-fst-compat",[HR]:"fire-vertex","fire-js":"fire-js",[GR]:"fire-js-all"};/**
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
 */const ru=new Map,QR=new Map,fd=new Map;function Zg(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ms(t){const e=t.name;if(fd.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;fd.set(e,t);for(const n of ru.values())Zg(n,t);for(const n of QR.values())Zg(n,t);return!0}function Uu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Et(t){return t==null?!1:t.settings!==void 0}/**
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
 */const YR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new fa("app","Firebase",YR);/**
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
 */class XR{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
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
 */const As=WR;function Tw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:dd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Tr.create("bad-app-name",{appName:String(s)});if(n||(n=yw()),!n)throw Tr.create("no-options");const i=ru.get(s);if(i){if(ps(n,i.options)&&ps(r,i.config))return i;throw Tr.create("duplicate-app",{appName:s})}const o=new rR(s);for(const u of fd.values())o.addComponent(u);const l=new XR(n,r,o);return ru.set(s,l),l}function Mf(t=dd){const e=ru.get(t);if(!e&&t===dd&&yw())return Tw();if(!e)throw Tr.create("no-app",{appName:t});return e}function gn(t,e,n){let r=KR[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(o.join(" "));return}ms(new kr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const JR="firebase-heartbeat-database",ZR=1,Xo="firebase-heartbeat-store";let ih=null;function Iw(){return ih||(ih=gR(JR,ZR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tr.create("idb-open",{originalErrorMessage:t.message})})),ih}async function eC(t){try{const n=(await Iw()).transaction(Xo),r=await n.objectStore(Xo).get(Sw(t));return await n.done,r}catch(e){if(e instanceof Sn)Fn.warn(e.message);else{const n=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function ey(t,e){try{const r=(await Iw()).transaction(Xo,"readwrite");await r.objectStore(Xo).put(e,Sw(t)),await r.done}catch(n){if(n instanceof Sn)Fn.warn(n.message);else{const r=Tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function Sw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tC=1024,nC=30;class rC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ty();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>nC){const o=oC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ty(),{heartbeatsToSend:r,unsentEntries:s}=sC(this._heartbeatsCache.heartbeats),i=nu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Fn.warn(n),""}}}function ty(){return new Date().toISOString().substring(0,10)}function sC(t,e=tC){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ny(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ny(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return q1()?G1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ey(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ey(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ny(t){return nu(JSON.stringify({version:2,heartbeats:t})).length}function oC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function aC(t){ms(new kr("platform-logger",e=>new vR(e),"PRIVATE")),ms(new kr("heartbeat",e=>new rC(e),"PRIVATE")),gn(hd,Jg,t),gn(hd,Jg,"esm2020"),gn("fire-js","")}aC("");var lC="firebase",uC="12.6.0";/**
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
 */gn(lC,uC,"app");var ry=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ir,Aw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function E(){}E.prototype=y.prototype,v.F=y.prototype,v.prototype=new E,v.prototype.constructor=v,v.D=function(I,R,k){for(var w=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)w[Le-2]=arguments[Le];return y.prototype[R].apply(I,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,y,E){E||(E=0);const I=Array(16);if(typeof y=="string")for(var R=0;R<16;++R)I[R]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(R=0;R<16;++R)I[R]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=v.g[0],E=v.g[1],R=v.g[2];let k=v.g[3],w;w=y+(k^E&(R^k))+I[0]+3614090360&4294967295,y=E+(w<<7&4294967295|w>>>25),w=k+(R^y&(E^R))+I[1]+3905402710&4294967295,k=y+(w<<12&4294967295|w>>>20),w=R+(E^k&(y^E))+I[2]+606105819&4294967295,R=k+(w<<17&4294967295|w>>>15),w=E+(y^R&(k^y))+I[3]+3250441966&4294967295,E=R+(w<<22&4294967295|w>>>10),w=y+(k^E&(R^k))+I[4]+4118548399&4294967295,y=E+(w<<7&4294967295|w>>>25),w=k+(R^y&(E^R))+I[5]+1200080426&4294967295,k=y+(w<<12&4294967295|w>>>20),w=R+(E^k&(y^E))+I[6]+2821735955&4294967295,R=k+(w<<17&4294967295|w>>>15),w=E+(y^R&(k^y))+I[7]+4249261313&4294967295,E=R+(w<<22&4294967295|w>>>10),w=y+(k^E&(R^k))+I[8]+1770035416&4294967295,y=E+(w<<7&4294967295|w>>>25),w=k+(R^y&(E^R))+I[9]+2336552879&4294967295,k=y+(w<<12&4294967295|w>>>20),w=R+(E^k&(y^E))+I[10]+4294925233&4294967295,R=k+(w<<17&4294967295|w>>>15),w=E+(y^R&(k^y))+I[11]+2304563134&4294967295,E=R+(w<<22&4294967295|w>>>10),w=y+(k^E&(R^k))+I[12]+1804603682&4294967295,y=E+(w<<7&4294967295|w>>>25),w=k+(R^y&(E^R))+I[13]+4254626195&4294967295,k=y+(w<<12&4294967295|w>>>20),w=R+(E^k&(y^E))+I[14]+2792965006&4294967295,R=k+(w<<17&4294967295|w>>>15),w=E+(y^R&(k^y))+I[15]+1236535329&4294967295,E=R+(w<<22&4294967295|w>>>10),w=y+(R^k&(E^R))+I[1]+4129170786&4294967295,y=E+(w<<5&4294967295|w>>>27),w=k+(E^R&(y^E))+I[6]+3225465664&4294967295,k=y+(w<<9&4294967295|w>>>23),w=R+(y^E&(k^y))+I[11]+643717713&4294967295,R=k+(w<<14&4294967295|w>>>18),w=E+(k^y&(R^k))+I[0]+3921069994&4294967295,E=R+(w<<20&4294967295|w>>>12),w=y+(R^k&(E^R))+I[5]+3593408605&4294967295,y=E+(w<<5&4294967295|w>>>27),w=k+(E^R&(y^E))+I[10]+38016083&4294967295,k=y+(w<<9&4294967295|w>>>23),w=R+(y^E&(k^y))+I[15]+3634488961&4294967295,R=k+(w<<14&4294967295|w>>>18),w=E+(k^y&(R^k))+I[4]+3889429448&4294967295,E=R+(w<<20&4294967295|w>>>12),w=y+(R^k&(E^R))+I[9]+568446438&4294967295,y=E+(w<<5&4294967295|w>>>27),w=k+(E^R&(y^E))+I[14]+3275163606&4294967295,k=y+(w<<9&4294967295|w>>>23),w=R+(y^E&(k^y))+I[3]+4107603335&4294967295,R=k+(w<<14&4294967295|w>>>18),w=E+(k^y&(R^k))+I[8]+1163531501&4294967295,E=R+(w<<20&4294967295|w>>>12),w=y+(R^k&(E^R))+I[13]+2850285829&4294967295,y=E+(w<<5&4294967295|w>>>27),w=k+(E^R&(y^E))+I[2]+4243563512&4294967295,k=y+(w<<9&4294967295|w>>>23),w=R+(y^E&(k^y))+I[7]+1735328473&4294967295,R=k+(w<<14&4294967295|w>>>18),w=E+(k^y&(R^k))+I[12]+2368359562&4294967295,E=R+(w<<20&4294967295|w>>>12),w=y+(E^R^k)+I[5]+4294588738&4294967295,y=E+(w<<4&4294967295|w>>>28),w=k+(y^E^R)+I[8]+2272392833&4294967295,k=y+(w<<11&4294967295|w>>>21),w=R+(k^y^E)+I[11]+1839030562&4294967295,R=k+(w<<16&4294967295|w>>>16),w=E+(R^k^y)+I[14]+4259657740&4294967295,E=R+(w<<23&4294967295|w>>>9),w=y+(E^R^k)+I[1]+2763975236&4294967295,y=E+(w<<4&4294967295|w>>>28),w=k+(y^E^R)+I[4]+1272893353&4294967295,k=y+(w<<11&4294967295|w>>>21),w=R+(k^y^E)+I[7]+4139469664&4294967295,R=k+(w<<16&4294967295|w>>>16),w=E+(R^k^y)+I[10]+3200236656&4294967295,E=R+(w<<23&4294967295|w>>>9),w=y+(E^R^k)+I[13]+681279174&4294967295,y=E+(w<<4&4294967295|w>>>28),w=k+(y^E^R)+I[0]+3936430074&4294967295,k=y+(w<<11&4294967295|w>>>21),w=R+(k^y^E)+I[3]+3572445317&4294967295,R=k+(w<<16&4294967295|w>>>16),w=E+(R^k^y)+I[6]+76029189&4294967295,E=R+(w<<23&4294967295|w>>>9),w=y+(E^R^k)+I[9]+3654602809&4294967295,y=E+(w<<4&4294967295|w>>>28),w=k+(y^E^R)+I[12]+3873151461&4294967295,k=y+(w<<11&4294967295|w>>>21),w=R+(k^y^E)+I[15]+530742520&4294967295,R=k+(w<<16&4294967295|w>>>16),w=E+(R^k^y)+I[2]+3299628645&4294967295,E=R+(w<<23&4294967295|w>>>9),w=y+(R^(E|~k))+I[0]+4096336452&4294967295,y=E+(w<<6&4294967295|w>>>26),w=k+(E^(y|~R))+I[7]+1126891415&4294967295,k=y+(w<<10&4294967295|w>>>22),w=R+(y^(k|~E))+I[14]+2878612391&4294967295,R=k+(w<<15&4294967295|w>>>17),w=E+(k^(R|~y))+I[5]+4237533241&4294967295,E=R+(w<<21&4294967295|w>>>11),w=y+(R^(E|~k))+I[12]+1700485571&4294967295,y=E+(w<<6&4294967295|w>>>26),w=k+(E^(y|~R))+I[3]+2399980690&4294967295,k=y+(w<<10&4294967295|w>>>22),w=R+(y^(k|~E))+I[10]+4293915773&4294967295,R=k+(w<<15&4294967295|w>>>17),w=E+(k^(R|~y))+I[1]+2240044497&4294967295,E=R+(w<<21&4294967295|w>>>11),w=y+(R^(E|~k))+I[8]+1873313359&4294967295,y=E+(w<<6&4294967295|w>>>26),w=k+(E^(y|~R))+I[15]+4264355552&4294967295,k=y+(w<<10&4294967295|w>>>22),w=R+(y^(k|~E))+I[6]+2734768916&4294967295,R=k+(w<<15&4294967295|w>>>17),w=E+(k^(R|~y))+I[13]+1309151649&4294967295,E=R+(w<<21&4294967295|w>>>11),w=y+(R^(E|~k))+I[4]+4149444226&4294967295,y=E+(w<<6&4294967295|w>>>26),w=k+(E^(y|~R))+I[11]+3174756917&4294967295,k=y+(w<<10&4294967295|w>>>22),w=R+(y^(k|~E))+I[2]+718787259&4294967295,R=k+(w<<15&4294967295|w>>>17),w=E+(k^(R|~y))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,v.g[2]=v.g[2]+R&4294967295,v.g[3]=v.g[3]+k&4294967295}r.prototype.v=function(v,y){y===void 0&&(y=v.length);const E=y-this.blockSize,I=this.C;let R=this.h,k=0;for(;k<y;){if(R==0)for(;k<=E;)s(this,v,k),k+=this.blockSize;if(typeof v=="string"){for(;k<y;)if(I[R++]=v.charCodeAt(k++),R==this.blockSize){s(this,I),R=0;break}}else for(;k<y;)if(I[R++]=v[k++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=y},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var E=v.length-8;E<v.length;++E)v[E]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,E=0;E<4;++E)for(let I=0;I<32;I+=8)v[y++]=this.g[E]>>>I&255;return v};function i(v,y){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=y(v)}function o(v,y){this.h=y;const E=[];let I=!0;for(let R=v.length-1;R>=0;R--){const k=v[R]|0;I&&k==y||(E[R]=k,I=!1)}this.g=E}var l={};function u(v){return-128<=v&&v<128?i(v,function(y){return new o([y|0],y<0?-1:0)}):new o([v|0],v<0?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return b(c(-v));const y=[];let E=1;for(let I=0;v>=E;I++)y[I]=v/E|0,E*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return b(f(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(y,8));let I=p;for(let k=0;k<v.length;k+=8){var R=Math.min(8,v.length-k);const w=parseInt(v.substring(k,k+R),y);R<8?(R=c(Math.pow(y,R)),I=I.j(R).add(c(w))):(I=I.j(E),I=I.add(c(w)))}return I}var p=u(0),m=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-b(this).m();let v=0,y=1;for(let E=0;E<this.g.length;E++){const I=this.i(E);v+=(I>=0?I:4294967296+I)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(x(this))return"-"+b(this).toString(v);const y=c(Math.pow(v,6));var E=this;let I="";for(;;){const R=D(E,y).g;E=A(E,R.j(y));let k=((E.g.length>0?E.g[0]:E.h)>>>0).toString(v);if(E=R,P(E))return k+I;for(;k.length<6;)k="0"+k;I=k+I}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function x(v){return v.h==-1}t.l=function(v){return v=A(this,v),x(v)?-1:P(v)?0:1};function b(v){const y=v.g.length,E=[];for(let I=0;I<y;I++)E[I]=~v.g[I];return new o(E,~v.h).add(m)}t.abs=function(){return x(this)?b(this):this},t.add=function(v){const y=Math.max(this.g.length,v.g.length),E=[];let I=0;for(let R=0;R<=y;R++){let k=I+(this.i(R)&65535)+(v.i(R)&65535),w=(k>>>16)+(this.i(R)>>>16)+(v.i(R)>>>16);I=w>>>16,k&=65535,w&=65535,E[R]=w<<16|k}return new o(E,E[E.length-1]&-2147483648?-1:0)};function A(v,y){return v.add(b(y))}t.j=function(v){if(P(this)||P(v))return p;if(x(this))return x(v)?b(this).j(b(v)):b(b(this).j(v));if(x(v))return b(this.j(b(v)));if(this.l(T)<0&&v.l(T)<0)return c(this.m()*v.m());const y=this.g.length+v.g.length,E=[];for(var I=0;I<2*y;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(let R=0;R<v.g.length;R++){const k=this.i(I)>>>16,w=this.i(I)&65535,Le=v.i(R)>>>16,qt=v.i(R)&65535;E[2*I+2*R]+=w*qt,_(E,2*I+2*R),E[2*I+2*R+1]+=k*qt,_(E,2*I+2*R+1),E[2*I+2*R+1]+=w*Le,_(E,2*I+2*R+1),E[2*I+2*R+2]+=k*Le,_(E,2*I+2*R+2)}for(v=0;v<y;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=y;v<2*y;v++)E[v]=0;return new o(E,0)};function _(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function S(v,y){this.g=v,this.h=y}function D(v,y){if(P(y))throw Error("division by zero");if(P(v))return new S(p,p);if(x(v))return y=D(b(v),y),new S(b(y.g),b(y.h));if(x(y))return y=D(v,b(y)),new S(b(y.g),y.h);if(v.g.length>30){if(x(v)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,I=y;I.l(v)<=0;)E=j(E),I=j(I);var R=B(E,1),k=B(I,1);for(I=B(I,2),E=B(E,2);!P(I);){var w=k.add(I);w.l(v)<=0&&(R=R.add(E),k=w),I=B(I,1),E=B(E,1)}return y=A(v,R.j(y)),new S(R,y)}for(R=p;v.l(y)>=0;){for(E=Math.max(1,Math.floor(v.m()/y.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),k=c(E),w=k.j(y);x(w)||w.l(v)>0;)E-=I,k=c(E),w=k.j(y);P(k)&&(k=m),R=R.add(k),v=A(v,w)}return new S(R,v)}t.B=function(v){return D(this,v).h},t.and=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let I=0;I<y;I++)E[I]=this.i(I)&v.i(I);return new o(E,this.h&v.h)},t.or=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let I=0;I<y;I++)E[I]=this.i(I)|v.i(I);return new o(E,this.h|v.h)},t.xor=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let I=0;I<y;I++)E[I]=this.i(I)^v.i(I);return new o(E,this.h^v.h)};function j(v){const y=v.g.length+1,E=[];for(let I=0;I<y;I++)E[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(E,v.h)}function B(v,y){const E=y>>5;y%=32;const I=v.g.length-E,R=[];for(let k=0;k<I;k++)R[k]=y>0?v.i(k+E)>>>y|v.i(k+E+1)<<32-y:v.i(k+E);return new o(R,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Aw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Ir=o}).apply(typeof ry<"u"?ry:typeof self<"u"?self:typeof window<"u"?window:{});var tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rw,fo,Cw,wl,pd,Pw,kw,Nw;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof tl=="object"&&tl];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in d))break e;d=d[N]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,N,O){for(var $=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)$[ee-2]=arguments[ee];return h.prototype[N].apply(g,$)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function T(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function P(a,h){for(let g=1;g<arguments.length;g++){const N=arguments[g];var d=typeof N;if(d=d!="object"?d:N?Array.isArray(N)?"array":d:"null",d=="array"||d=="object"&&typeof N.length=="number"){d=a.length||0;const O=N.length||0;a.length=d+O;for(let $=0;$<O;$++)a[d+$]=N[$]}else a.push(N)}}class x{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function A(){var a=v;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,d){const g=S.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var S=new x(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let j,B=!1,v=new _,y=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(E)}};function E(){for(var a;a=A();){try{a.h.call(a.g)}catch(d){b(d)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}B=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function w(a){return/^[\s\xa0]*$/.test(a)}function Le(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Le,R),Le.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Le.Z.h.call(this)},Le.prototype.h=function(){Le.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var qt="closure_listenable_"+(Math.random()*1e6|0),$r=0;function Hr(a,h,d,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=N,this.key=++$r,this.da=this.fa=!1}function V(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function U(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function z(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function W(a){const h={};for(const d in a)h[d]=a[d];return h}const te="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mt(a,h){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)a[d]=g[d];for(let O=0;O<te.length;O++)d=te[O],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function oe(a){this.src=a,this.g={},this.h=0}oe.prototype.add=function(a,h,d,g,N){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const $=at(a,h,g,N);return $>-1?(h=a[$],d||(h.fa=!1)):(h=new Hr(h,this.src,O,!!g,N),h.fa=d,a.push(h)),h};function ot(a,h){const d=h.type;if(d in a.g){var g=a.g[d],N=Array.prototype.indexOf.call(g,h,void 0),O;(O=N>=0)&&Array.prototype.splice.call(g,N,1),O&&(V(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function at(a,h,d,g){for(let N=0;N<a.length;++N){const O=a[N];if(!O.da&&O.listener==h&&O.capture==!!d&&O.ha==g)return N}return-1}var Gt="closure_lm_"+(Math.random()*1e6|0),lc={};function Up(a,h,d,g,N){if(Array.isArray(h)){for(let O=0;O<h.length;O++)Up(a,h[O],d,g,N);return null}return d=Bp(d),a&&a[qt]?a.J(h,d,l(g)?!!g.capture:!1,N):lI(a,h,d,!1,g,N)}function lI(a,h,d,g,N,O){if(!h)throw Error("Invalid event type");const $=l(N)?!!N.capture:!!N;let ee=cc(a);if(ee||(a[Gt]=ee=new oe(a)),d=ee.add(h,d,g,$,O),d.proxy)return d;if(g=uI(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)k||(N=$),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(jp(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function uI(){function a(d){return h.call(a.src,a.listener,d)}const h=cI;return a}function Fp(a,h,d,g,N){if(Array.isArray(h))for(var O=0;O<h.length;O++)Fp(a,h[O],d,g,N);else g=l(g)?!!g.capture:!!g,d=Bp(d),a&&a[qt]?(a=a.i,O=String(h).toString(),O in a.g&&(h=a.g[O],d=at(h,d,g,N),d>-1&&(V(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[O],a.h--)))):a&&(a=cc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=at(h,d,g,N)),(d=a>-1?h[a]:null)&&uc(d))}function uc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[qt])ot(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(jp(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=cc(h))?(ot(d,a),d.h==0&&(d.src=null,h[Gt]=null)):V(a)}}}function jp(a){return a in lc?lc[a]:lc[a]="on"+a}function cI(a,h){if(a.da)a=!0;else{h=new Le(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&uc(a),a=d.call(g,h)}return a}function cc(a){return a=a[Gt],a instanceof oe?a:null}var hc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Bp(a){return typeof a=="function"?a:(a[hc]||(a[hc]=function(h){return a.handleEvent(h)}),a[hc])}function Ye(){I.call(this),this.i=new oe(this),this.M=this,this.G=null}p(Ye,I),Ye.prototype[qt]=!0,Ye.prototype.removeEventListener=function(a,h,d,g){Fp(this,a,h,d,g)};function lt(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var N=h;h=new R(g,a),mt(h,N)}N=!0;let O,$;if(d)for($=d.length-1;$>=0;$--)O=h.g=d[$],N=Ra(O,g,!0,h)&&N;if(O=h.g=a,N=Ra(O,g,!0,h)&&N,N=Ra(O,g,!1,h)&&N,d)for($=0;$<d.length;$++)O=h.g=d[$],N=Ra(O,g,!1,h)&&N}Ye.prototype.N=function(){if(Ye.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)V(d[g]);delete a.g[h],a.h--}}this.G=null},Ye.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},Ye.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Ra(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let O=0;O<h.length;++O){const $=h[O];if($&&!$.da&&$.capture==d){const ee=$.listener,Ve=$.ha||$.src;$.fa&&ot(a.i,$),N=ee.call(Ve,g)!==!1&&N}}return N&&!g.defaultPrevented}function hI(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function zp(a){a.g=hI(()=>{a.g=null,a.i&&(a.i=!1,zp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class dI extends I{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:zp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oi(a){I.call(this),this.h=a,this.g={}}p(Oi,I);var $p=[];function Hp(a){U(a.g,function(h,d){this.g.hasOwnProperty(d)&&uc(h)},a),a.g={}}Oi.prototype.N=function(){Oi.Z.N.call(this),Hp(this)},Oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dc=o.JSON.stringify,fI=o.JSON.parse,pI=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function qp(){}function Gp(){}var bi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function fc(){R.call(this,"d")}p(fc,R);function pc(){R.call(this,"c")}p(pc,R);var qr={},Wp=null;function Ca(){return Wp=Wp||new Ye}qr.Ia="serverreachability";function Kp(a){R.call(this,qr.Ia,a)}p(Kp,R);function Li(a){const h=Ca();lt(h,new Kp(h))}qr.STAT_EVENT="statevent";function Qp(a,h){R.call(this,qr.STAT_EVENT,a),this.stat=h}p(Qp,R);function ut(a){const h=Ca();lt(h,new Qp(h,a))}qr.Ja="timingevent";function Yp(a,h){R.call(this,qr.Ja,a),this.size=h}p(Yp,R);function Vi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Mi(){this.g=!0}Mi.prototype.ua=function(){this.g=!1};function mI(a,h,d,g,N,O){a.info(function(){if(a.g)if(O){var $="",ee=O.split("&");for(let he=0;he<ee.length;he++){var Ve=ee[he].split("=");if(Ve.length>1){const je=Ve[0];Ve=Ve[1];const an=je.split("_");$=an.length>=2&&an[1]=="type"?$+(je+"="+Ve+"&"):$+(je+"=redacted&")}}}else $=null;else $=O;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+d+`
`+$})}function gI(a,h,d,g,N,O,$){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+d+`
`+O+" "+$})}function ks(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+_I(a,d)+(g?" "+g:"")})}function yI(a,h){a.info(function(){return"TIMEOUT: "+h})}Mi.prototype.info=function(){};function _I(a,h){if(!a.g)return h;if(!h)return null;try{const O=JSON.parse(h);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var d=O[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let $=1;$<g.length;$++)g[$]=""}}}}return dc(O)}catch{return h}}var Pa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Jp;function mc(){}p(mc,qp),mc.prototype.g=function(){return new XMLHttpRequest},Jp=new mc;function Ui(a){return encodeURIComponent(String(a))}function vI(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Wn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new Oi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Zp}function Zp(){this.i=null,this.g="",this.h=!1}var em={},gc={};function yc(a,h,d){a.M=1,a.A=Na(on(h)),a.u=d,a.R=!0,tm(a,null)}function tm(a,h){a.F=Date.now(),ka(a),a.B=on(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),pm(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Zp,a.g=Dm(a.j,d?h:null,!a.u),a.P>0&&(a.O=new dI(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var N="readystatechange";Array.isArray(N)||(N&&($p[0]=N.toString()),N=$p);for(let O=0;O<N.length;O++){const $=Up(d,N[O],g||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.J?W(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Li(),mI(a.i,a.v,a.B,a.l,a.S,a.u)}Wn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Yn(a)==3?h.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Yn(this.g),Ve=this.g.ya(),he=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||wm(this.g)))){this.K||ee!=4||Ve==7||(Ve==8||he<=0?Li(3):Li(2)),_c(this);var h=this.g.ca();this.X=h;var d=EI(this);if(this.o=h==200,gI(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(g)){var O=g;break t}}O=null}if(a=O)ks(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,vc(this,a);else{this.o=!1,this.m=3,ut(12),Gr(this),Fi(this);break e}}if(this.R){a=!0;let je;for(;!this.K&&this.C<d.length;)if(je=wI(this,d),je==gc){ee==4&&(this.m=4,ut(14),a=!1),ks(this.i,this.l,null,"[Incomplete Response]");break}else if(je==em){this.m=4,ut(15),ks(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ks(this.i,this.l,je,null),vc(this,je);if(nm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||d.length!=0||this.h.h||(this.m=1,ut(16),a=!1),this.o=this.o&&a,!a)ks(this.i,this.l,d,"[Invalid Chunked Response]"),Gr(this),Fi(this);else if(d.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Cc($),$.P=!0,ut(11))}}else ks(this.i,this.l,d,null),vc(this,d);ee==4&&Gr(this),this.o&&!this.K&&(ee==4?Pm(this.j,this):(this.o=!1,ka(this)))}else LI(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,ut(12)):(this.m=0,ut(13)),Gr(this),Fi(this)}}}catch{}finally{}};function EI(a){if(!nm(a))return a.g.la();const h=wm(a.g);if(h==="")return"";let d="";const g=h.length,N=Yn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Gr(a),Fi(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<g;O++)a.h.h=!0,d+=a.h.i.decode(h[O],{stream:!(N&&O==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function nm(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function wI(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?gc:(d=Number(h.substring(d,g)),isNaN(d)?em:(g+=1,g+d>h.length?gc:(h=h.slice(g,g+d),a.C=g+d,h)))}Wn.prototype.cancel=function(){this.K=!0,Gr(this)};function ka(a){a.T=Date.now()+a.H,rm(a,a.H)}function rm(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Vi(c(a.aa,a),h)}function _c(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Wn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(yI(this.i,this.B),this.M!=2&&(Li(),ut(17)),Gr(this),this.m=2,Fi(this)):rm(this,this.T-a)};function Fi(a){a.j.I==0||a.K||Pm(a.j,a)}function Gr(a){_c(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Hp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function vc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Ec(d.h,a))){if(!a.L&&Ec(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)La(d),Oa(d);else break e;Rc(d),ut(18)}}else d.xa=N[1],0<d.xa-d.K&&N[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Vi(c(d.Va,d),6e3));om(d.h)<=1&&d.ta&&(d.ta=void 0)}else Kr(d,11)}else if((a.L||d.g==a)&&La(d),!w(h))for(N=d.Ba.g.parse(h),h=0;h<N.length;h++){let he=N[h];const je=he[0];if(!(je<=d.K))if(d.K=je,he=he[1],d.I==2)if(he[0]=="c"){d.M=he[1],d.ba=he[2];const an=he[3];an!=null&&(d.ka=an,d.j.info("VER="+d.ka));const Qr=he[4];Qr!=null&&(d.za=Qr,d.j.info("SVER="+d.za));const Xn=he[5];Xn!=null&&typeof Xn=="number"&&Xn>0&&(g=1.5*Xn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Jn=a.g;if(Jn){const Ma=Jn.g?Jn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ma){var O=g.h;O.g||Ma.indexOf("spdy")==-1&&Ma.indexOf("quic")==-1&&Ma.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(wc(O,O.h),O.h=null))}if(g.G){const Pc=Jn.g?Jn.g.getResponseHeader("X-HTTP-Session-Id"):null;Pc&&(g.wa=Pc,pe(g.J,g.G,Pc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var $=a;if(g.na=xm(g,g.L?g.ba:null,g.W),$.L){am(g.h,$);var ee=$,Ve=g.O;Ve&&(ee.H=Ve),ee.D&&(_c(ee),ka(ee)),g.g=$}else Rm(g);d.i.length>0&&ba(d)}else he[0]!="stop"&&he[0]!="close"||Kr(d,7);else d.I==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Kr(d,7):Ac(d):he[0]!="noop"&&d.l&&d.l.qa(he),d.A=0)}}Li(4)}catch{}}var TI=class{constructor(a,h){this.g=a,this.map=h}};function sm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function im(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function om(a){return a.h?1:a.g?a.g.size:0}function Ec(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function wc(a,h){a.g?a.g.add(h):a.h=h}function am(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}sm.prototype.cancel=function(){if(this.i=lm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function lm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return T(a.i)}var um=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function II(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let N,O=null;g>=0?(N=a[d].substring(0,g),O=a[d].substring(g+1)):N=a[d],h(N,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Kn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Kn?(this.l=a.l,ji(this,a.j),this.o=a.o,this.g=a.g,Bi(this,a.u),this.h=a.h,Tc(this,mm(a.i)),this.m=a.m):a&&(h=String(a).match(um))?(this.l=!1,ji(this,h[1]||"",!0),this.o=zi(h[2]||""),this.g=zi(h[3]||"",!0),Bi(this,h[4]),this.h=zi(h[5]||"",!0),Tc(this,h[6]||"",!0),this.m=zi(h[7]||"")):(this.l=!1,this.i=new Hi(null,this.l))}Kn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push($i(h,cm,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push($i(h,cm,!0),"@"),a.push(Ui(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push($i(d,d.charAt(0)=="/"?RI:AI,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",$i(d,PI)),a.join("")},Kn.prototype.resolve=function(a){const h=on(this);let d=!!a.j;d?ji(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)Bi(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=h.h.lastIndexOf("/");N!=-1&&(g=h.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const O=[];for(let $=0;$<N.length;){const ee=N[$++];ee=="."?g&&$==N.length&&O.push(""):ee==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),g&&$==N.length&&O.push("")):(O.push(ee),g=!0)}g=O.join("/")}else g=N}return d?h.h=g:d=a.i.toString()!=="",d?Tc(h,mm(a.i)):d=!!a.m,d&&(h.m=a.m),h};function on(a){return new Kn(a)}function ji(a,h,d){a.j=d?zi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Bi(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Tc(a,h,d){h instanceof Hi?(a.i=h,kI(a.i,a.l)):(d||(h=$i(h,CI)),a.i=new Hi(h,a.l))}function pe(a,h,d){a.i.set(h,d)}function Na(a){return pe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function zi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function $i(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,SI),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function SI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var cm=/[#\/\?@]/g,AI=/[#\?:]/g,RI=/[#\?]/g,CI=/[#\?@]/g,PI=/#/g;function Hi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Wr(a){a.g||(a.g=new Map,a.h=0,a.i&&II(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Hi.prototype,t.add=function(a,h){Wr(this),this.i=null,a=Ns(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function hm(a,h){Wr(a),h=Ns(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function dm(a,h){return Wr(a),h=Ns(a,h),a.g.has(h)}t.forEach=function(a,h){Wr(this),this.g.forEach(function(d,g){d.forEach(function(N){a.call(h,N,g,this)},this)},this)};function fm(a,h){Wr(a);let d=[];if(typeof h=="string")dm(a,h)&&(d=d.concat(a.g.get(Ns(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Wr(this),this.i=null,a=Ns(this,a),dm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=fm(this,a),a.length>0?String(a[0]):h):h};function pm(a,h,d){hm(a,h),d.length>0&&(a.i=null,a.g.set(Ns(a,h),T(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const N=Ui(d);d=fm(this,d);for(let O=0;O<d.length;O++){let $=N;d[O]!==""&&($+="="+Ui(d[O])),a.push($)}}return this.i=a.join("&")};function mm(a){const h=new Hi;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ns(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function kI(a,h){h&&!a.j&&(Wr(a),a.i=null,a.g.forEach(function(d,g){const N=g.toLowerCase();g!=N&&(hm(this,g),pm(this,N,d))},a)),a.j=h}function NI(a,h){const d=new Mi;if(o.Image){const g=new Image;g.onload=f(Qn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(Qn,d,"TestLoadImage: error",!1,h,g),g.onabort=f(Qn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(Qn,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function xI(a,h){const d=new Mi,g=new AbortController,N=setTimeout(()=>{g.abort(),Qn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(N),O.ok?Qn(d,"TestPingServer: ok",!0,h):Qn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Qn(d,"TestPingServer: error",!1,h)})}function Qn(a,h,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function DI(){this.g=new pI}function Ic(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Ic,qp),Ic.prototype.g=function(){return new xa(this.i,this.h)};function xa(a,h){Ye.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(xa,Ye),t=xa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Gi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,qi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Gi(this)),this.g&&(this.readyState=3,Gi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;gm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function gm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?qi(this):Gi(this),this.readyState==3&&gm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,qi(this))},t.Na=function(a){this.g&&(this.response=a,qi(this))},t.ga=function(){this.g&&qi(this)};function qi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Gi(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Gi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ym(a){let h="";return U(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Sc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=ym(d),typeof a=="string"?d!=null&&Ui(d):pe(a,h,d))}function Se(a){Ye.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Se,Ye);var OI=/^https?$/i,bI=["POST","PUT"];t=Se.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Jp.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){_m(this,O);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())d.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(bI,h,void 0)>=0)||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of d)this.g.setRequestHeader(O,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){_m(this,O)}};function _m(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,vm(a),Da(a)}function vm(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,lt(this,"complete"),lt(this,"abort"),Da(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Da(this,!0)),Se.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Em(this):this.Xa())},t.Xa=function(){Em(this)};function Em(a){if(a.h&&typeof i<"u"){if(a.v&&Yn(a)==4)setTimeout(a.Ca.bind(a),0);else if(lt(a,"readystatechange"),Yn(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=O===0){let $=String(a.D).match(um)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),g=!OI.test($?$.toLowerCase():"")}d=g}if(d)lt(a,"complete"),lt(a,"success");else{a.o=6;try{var N=Yn(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",vm(a)}}finally{Da(a)}}}}function Da(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||lt(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Yn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Yn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),fI(h)}};function wm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function LI(a){const h={};a=(a.g&&Yn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var d=vI(a[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=h[N]||[];h[N]=O,O.push(d)}z(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wi(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Tm(a){this.za=0,this.i=[],this.j=new Mi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Wi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Wi("baseRetryDelayMs",5e3,a),this.Za=Wi("retryDelaySeedMs",1e4,a),this.Ta=Wi("forwardChannelMaxRetries",2,a),this.va=Wi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new sm(a&&a.concurrentRequestLimit),this.Ba=new DI,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Tm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){ut(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=xm(this,null,this.W),ba(this)};function Ac(a){if(Im(a),a.I==3){var h=a.V++,d=on(a.J);if(pe(d,"SID",a.M),pe(d,"RID",h),pe(d,"TYPE","terminate"),Ki(a,d),h=new Wn(a,a.j,h),h.M=2,h.A=Na(on(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Dm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ka(h)}Nm(a)}function Oa(a){a.g&&(Cc(a),a.g.cancel(),a.g=null)}function Im(a){Oa(a),a.v&&(o.clearTimeout(a.v),a.v=null),La(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ba(a){if(!im(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||y(),B||(j(),B=!0),v.add(h,a),a.D=0}}function VI(a,h){return om(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Vi(c(a.Ea,a,h),km(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new Wn(this,this.j,a);let O=this.o;if(this.U&&(O?(O=W(O),mt(O,this.U)):O=this.U),this.u!==null||this.R||(N.J=O,O=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Am(this,N,h),d=on(this.J),pe(d,"RID",a),pe(d,"CVER",22),this.G&&pe(d,"X-HTTP-Session-Id",this.G),Ki(this,d),O&&(this.R?h="headers="+Ui(ym(O))+"&"+h:this.u&&Sc(d,this.u,O)),wc(this.h,N),this.Ra&&pe(d,"TYPE","init"),this.S?(pe(d,"$req",h),pe(d,"SID","null"),N.U=!0,yc(N,d,null)):yc(N,d,h),this.I=2}}else this.I==3&&(a?Sm(this,a):this.i.length==0||im(this.h)||Sm(this))};function Sm(a,h){var d;h?d=h.l:d=a.V++;const g=on(a.J);pe(g,"SID",a.M),pe(g,"RID",d),pe(g,"AID",a.K),Ki(a,g),a.u&&a.o&&Sc(g,a.u,a.o),d=new Wn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Am(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),wc(a.h,d),yc(d,g,h)}function Ki(a,h){a.H&&U(a.H,function(d,g){pe(h,g,d)}),a.l&&U({},function(d,g){pe(h,g,d)})}function Am(a,h,d){d=Math.min(a.i.length,d);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var N=a.i;let ee=-1;for(;;){const Ve=["count="+d];ee==-1?d>0?(ee=N[0].g,Ve.push("ofs="+ee)):ee=0:Ve.push("ofs="+ee);let he=!0;for(let je=0;je<d;je++){var O=N[je].g;const an=N[je].map;if(O-=ee,O<0)ee=Math.max(0,N[je].g-100),he=!1;else try{O="req"+O+"_"||"";try{var $=an instanceof Map?an:Object.entries(an);for(const[Qr,Xn]of $){let Jn=Xn;l(Xn)&&(Jn=dc(Xn)),Ve.push(O+Qr+"="+encodeURIComponent(Jn))}}catch(Qr){throw Ve.push(O+"type="+encodeURIComponent("_badmap")),Qr}}catch{g&&g(an)}}if(he){$=Ve.join("&");break e}}$=void 0}return a=a.i.splice(0,d),h.G=a,$}function Rm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||y(),B||(j(),B=!0),v.add(h,a),a.A=0}}function Rc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Vi(c(a.Da,a),km(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Cm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Vi(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ut(10),Oa(this),Cm(this))};function Cc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Cm(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=on(a.na);pe(h,"RID","rpc"),pe(h,"SID",a.M),pe(h,"AID",a.K),pe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&pe(h,"TO",a.ia),pe(h,"TYPE","xmlhttp"),Ki(a,h),a.u&&a.o&&Sc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Na(on(h)),d.u=null,d.R=!0,tm(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Oa(this),Rc(this),ut(19))};function La(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Pm(a,h){var d=null;if(a.g==h){La(a),Cc(a),a.g=null;var g=2}else if(Ec(a.h,h))d=h.G,am(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;g=Ca(),lt(g,new Yp(g,d)),ba(a)}else Rm(a);else if(N=h.m,N==3||N==0&&h.X>0||!(g==1&&VI(a,h)||g==2&&Rc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),N){case 1:Kr(a,5);break;case 4:Kr(a,10);break;case 3:Kr(a,6);break;default:Kr(a,2)}}}function km(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Kr(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),g=a.Ua;const N=!g;g=new Kn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ji(g,"https"),Na(g),N?NI(g.toString(),d):xI(g.toString(),d)}else ut(2);a.I=0,a.l&&a.l.pa(h),Nm(a),Im(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Nm(a){if(a.I=0,a.ja=[],a.l){const h=lm(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.oa()}}function xm(a,h,d){var g=d instanceof Kn?on(d):new Kn(d);if(g.g!="")h&&(g.g=h+"."+g.g),Bi(g,g.u);else{var N=o.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const O=new Kn(null);g&&ji(O,g),h&&(O.g=h),N&&Bi(O,N),d&&(O.h=d),g=O}return d=a.G,h=a.wa,d&&h&&pe(g,d,h),pe(g,"VER",a.ka),Ki(a,g),g}function Dm(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Se(new Ic({ab:d})):new Se(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Om(){}t=Om.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Va(){}Va.prototype.g=function(a,h){return new Ct(a,h)};function Ct(a,h){Ye.call(this),this.g=new Tm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!w(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new xs(this)}p(Ct,Ye),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Ac(this.g)},Ct.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=dc(a),a=d);h.i.push(new TI(h.Ya++,a)),h.I==3&&ba(h)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Ac(this.g),delete this.g,Ct.Z.N.call(this)};function bm(a){fc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(bm,fc);function Lm(){pc.call(this),this.status=1}p(Lm,pc);function xs(a){this.g=a}p(xs,Om),xs.prototype.ra=function(){lt(this.g,"a")},xs.prototype.qa=function(a){lt(this.g,new bm(a))},xs.prototype.pa=function(a){lt(this.g,new Lm)},xs.prototype.oa=function(){lt(this.g,"b")},Va.prototype.createWebChannel=Va.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,Nw=function(){return new Va},kw=function(){return Ca()},Pw=qr,pd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Pa.NO_ERROR=0,Pa.TIMEOUT=8,Pa.HTTP_ERROR=6,wl=Pa,Xp.COMPLETE="complete",Cw=Xp,Gp.EventType=bi,bi.OPEN="a",bi.CLOSE="b",bi.ERROR="c",bi.MESSAGE="d",Ye.prototype.listen=Ye.prototype.J,fo=Gp,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,Rw=Se}).apply(typeof tl<"u"?tl:typeof self<"u"?self:typeof window<"u"?window:{});const sy="@firebase/firestore",iy="4.9.2";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let Ai="12.3.0";/**
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
 */const gs=new Lf("@firebase/firestore");function Ls(){return gs.logLevel}function q(t,...e){if(gs.logLevel<=re.DEBUG){const n=e.map(Uf);gs.debug(`Firestore (${Ai}): ${t}`,...n)}}function jn(t,...e){if(gs.logLevel<=re.ERROR){const n=e.map(Uf);gs.error(`Firestore (${Ai}): ${t}`,...n)}}function gi(t,...e){if(gs.logLevel<=re.WARN){const n=e.map(Uf);gs.warn(`Firestore (${Ai}): ${t}`,...n)}}function Uf(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,xw(t,r,n)}function xw(t,e,n){let r=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw jn(r),new Error(r)}function ue(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||xw(e,s,r)}function Z(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class On{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Dw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class hC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dC{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new On;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new On,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new On)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new Dw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new et(e)}}class fC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new fC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Et(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ue(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new oy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new oy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function gC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ff{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=gC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function md(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return oh(s)===oh(i)?se(s,i):oh(s)?1:-1}return se(t.length,e.length)}const yC=55296,_C=57343;function oh(t){const e=t.charCodeAt(0);return e>=yC&&e<=_C}function yi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const ay="__name__";class cn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=cn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return se(e.length,n.length)}static compareSegments(e,n){const r=cn.isNumericId(e),s=cn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?cn.extractNumericId(e).compare(cn.extractNumericId(n)):md(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ir.fromString(e.substring(4,e.length-2))}}class de extends cn{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new de(n)}static emptyPath(){return new de([])}}const vC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends cn{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return vC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ay}static keyField(){return new Ge([ay])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(de.fromString(e))}static fromName(e){return new K(de.fromString(e).popFirst(5))}static empty(){return new K(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new de(e.slice()))}}/**
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
 */function Ow(t,e,n){if(!n)throw new H(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function EC(t,e,n,r){if(e===!0&&r===!0)throw new H(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ly(t){if(!K.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uy(t){if(K.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Fu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function Tn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fu(t);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t,e){const n={typeString:t};return e&&(n.value=e),n}function ma(t,e){if(!bw(t))throw new H(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new H(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const cy=-62135596800,hy=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*hy);return new ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<cy)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hy}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ma(e,ge._jsonSchema))return new ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-cy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:be("string",ge._jsonSchemaVersion),seconds:be("number"),nanoseconds:be("number")};/**
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
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new ge(0,0))}static max(){return new J(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Jo=-1;function wC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new ge(n+1,0):new ge(n,r));return new Nr(s,K.empty(),e)}function TC(t){return new Nr(t.readTime,t.key,Jo)}class Nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Nr(J.min(),K.empty(),Jo)}static max(){return new Nr(J.max(),K.empty(),Jo)}}function IC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
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
 */const SC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ri(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==SC)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function RC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ci(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ju{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ju.ce=-1;/**
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
 */const jf=-1;function Bu(t){return t==null}function su(t){return t===0&&1/t==-1/0}function CC(t){return typeof t=="number"&&Number.isInteger(t)&&!su(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Lw="";function PC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=dy(e)),e=kC(t.get(n),e);return dy(e)}function kC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Lw:n+="";break;default:n+=i}}return n}function dy(t){return t+Lw+""}/**
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
 */function fy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nl(this.root,e,this.comparator,!1)}getReverseIterator(){return new nl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nl(this.root,e,this.comparator,!0)}}class nl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??qe.RED,this.left=s??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fe{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new py(this.data.getIterator())}getIteratorFrom(e){return new py(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class py{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new Fe(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Mw("Invalid base64 string: "+i):i}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const NC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(t){if(ue(!!t,39018),typeof t=="string"){let e=0;const n=NC.exec(t);if(ue(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dr(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
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
 */const Uw="server_timestamp",Fw="__type__",jw="__previous_value__",Bw="__local_write_time__";function Bf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Fw])==null?void 0:r.stringValue)===Uw}function zu(t){const e=t.mapValue.fields[jw];return Bf(e)?zu(e):e}function Zo(t){const e=xr(t.mapValue.fields[Bw].timestampValue);return new ge(e.seconds,e.nanos)}/**
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
 */class xC{constructor(e,n,r,s,i,o,l,u,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f}}const gd="(default)";class ea{constructor(e,n){this.projectId=e,this.database=n||gd}static empty(){return new ea("","")}get isDefaultDatabase(){return this.database===gd}isEqual(e){return e instanceof ea&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const zw="__type__",DC="__max__",rl={mapValue:{}},$w="__vector__",iu="value";function Or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bf(t)?4:bC(t)?9007199254740991:OC(t)?10:11:Y(28295,{value:t})}function In(t,e){if(t===e)return!0;const n=Or(t);if(n!==Or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zo(t).isEqual(Zo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=xr(s.timestampValue),l=xr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Dr(s.bytesValue).isEqual(Dr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Pe(s.geoPointValue.latitude)===Pe(i.geoPointValue.latitude)&&Pe(s.geoPointValue.longitude)===Pe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Pe(s.integerValue)===Pe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Pe(s.doubleValue),l=Pe(i.doubleValue);return o===l?su(o)===su(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return yi(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(fy(o)!==fy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!In(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function ta(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function _i(t,e){if(t===e)return 0;const n=Or(t),r=Or(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Pe(i.integerValue||i.doubleValue),u=Pe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return my(t.timestampValue,e.timestampValue);case 4:return my(Zo(t),Zo(e));case 5:return md(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Dr(i),u=Dr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=se(l[c],u[c]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=se(Pe(i.latitude),Pe(o.latitude));return l!==0?l:se(Pe(i.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return gy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,T,P,x;const l=i.fields||{},u=o.fields||{},c=(m=l[iu])==null?void 0:m.arrayValue,f=(T=u[iu])==null?void 0:T.arrayValue,p=se(((P=c==null?void 0:c.values)==null?void 0:P.length)||0,((x=f==null?void 0:f.values)==null?void 0:x.length)||0);return p!==0?p:gy(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===rl.mapValue&&o===rl.mapValue)return 0;if(i===rl.mapValue)return 1;if(o===rl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=md(u[p],f[p]);if(m!==0)return m;const T=_i(l[u[p]],c[f[p]]);if(T!==0)return T}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{he:n})}}function my(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=xr(t),r=xr(e),s=se(n.seconds,r.seconds);return s!==0?s:se(n.nanos,r.nanos)}function gy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_i(n[s],r[s]);if(i)return i}return se(n.length,r.length)}function vi(t){return yd(t)}function yd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=yd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${yd(n.fields[o])}`;return s+"}"}(t.mapValue):Y(61005,{value:t})}function Tl(t){switch(Or(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zu(t);return e?16+Tl(e):16;case 5:return 2*t.stringValue.length;case 6:return Dr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Tl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Br(r.fields,(i,o)=>{s+=i.length+Tl(o)}),s}(t.mapValue);default:throw Y(13486,{value:t})}}function yy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _d(t){return!!t&&"integerValue"in t}function zf(t){return!!t&&"arrayValue"in t}function _y(t){return!!t&&"nullValue"in t}function vy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Il(t){return!!t&&"mapValue"in t}function OC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[zw])==null?void 0:r.stringValue)===$w}function Co(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Co(t.arrayValue.values[n]);return e}return{...t}}function bC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===DC}/**
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
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Il(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Co(n)}setAll(e){let n=Ge.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Co(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Il(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Il(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wt(Co(this.value))}}function Hw(t){const e=[];return Br(t.fields,(n,r)=>{const s=new Ge([n]);if(Il(r)){const i=Hw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Nt(e)}/**
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
 */class nt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,J.min(),J.min(),J.min(),wt.empty(),0)}static newFoundDocument(e,n,r,s){return new nt(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new nt(e,2,n,J.min(),J.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,J.min(),J.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ou{constructor(e,n){this.position=e,this.inclusive=n}}function Ey(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=_i(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class na{constructor(e,n="asc"){this.field=e,this.dir=n}}function LC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class qw{}class Oe extends qw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MC(e,n,r):n==="array-contains"?new jC(e,r):n==="in"?new BC(e,r):n==="not-in"?new zC(e,r):n==="array-contains-any"?new $C(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UC(e,r):new FC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(_i(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(_i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends qw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new rn(e,n)}matches(e){return Gw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Gw(t){return t.op==="and"}function Ww(t){return VC(t)&&Gw(t)}function VC(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function vd(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+vi(t.value);if(Ww(t))return t.filters.map(e=>vd(e)).join(",");{const e=t.filters.map(n=>vd(n)).join(",");return`${t.op}(${e})`}}function Kw(t,e){return t instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&In(r.value,s.value)}(t,e):t instanceof rn?function(r,s){return s instanceof rn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Kw(o,s.filters[l]),!0):!1}(t,e):void Y(19439)}function Qw(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${vi(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(Qw).join(" ,")+"}"}(t):"Filter"}class MC extends Oe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class UC extends Oe{constructor(e,n){super(e,"in",n),this.keys=Yw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FC extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=Yw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Yw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class jC extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zf(n)&&ta(n.arrayValue,this.value)}}class BC extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ta(this.value.arrayValue,n)}}class zC extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ta(this.value.arrayValue,n)}}class $C extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ta(this.value.arrayValue,r))}}/**
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
 */class HC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Ty(t,e=null,n=[],r=[],s=null,i=null,o=null){return new HC(t,e,n,r,s,i,o)}function $f(t){const e=Z(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vi(r)).join(",")),e.Te=n}return e.Te}function Hf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wy(t.startAt,e.startAt)&&wy(t.endAt,e.endAt)}function Ed(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Pi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function qC(t,e,n,r,s,i,o,l){return new Pi(t,e,n,r,s,i,o,l)}function qf(t){return new Pi(t)}function Iy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Xw(t){return t.collectionGroup!==null}function Po(t){const e=Z(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Fe(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new na(i,r))}),n.has(Ge.keyField().canonicalString())||e.Ie.push(new na(Ge.keyField(),r))}return e.Ie}function yn(t){const e=Z(t);return e.Ee||(e.Ee=GC(e,Po(t))),e.Ee}function GC(t,e){if(t.limitType==="F")return Ty(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new na(s.field,i)});const n=t.endAt?new ou(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ou(t.startAt.position,t.startAt.inclusive):null;return Ty(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wd(t,e){const n=t.filters.concat([e]);return new Pi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Td(t,e,n){return new Pi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $u(t,e){return Hf(yn(t),yn(e))&&t.limitType===e.limitType}function Jw(t){return`${$f(yn(t))}|lt:${t.limitType}`}function Vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Qw(s)).join(", ")}]`),Bu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>vi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>vi(s)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function Hu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Po(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=Ey(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Po(r),s)||r.endAt&&!function(o,l,u){const c=Ey(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Po(r),s))}(t,e)}function WC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zw(t){return(e,n)=>{let r=!1;for(const s of Po(t)){const i=KC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function KC(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?_i(u,c):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
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
 */class Rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Vw(this.inner)}size(){return this.innerSize}}/**
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
 */const QC=new Ie(K.comparator);function Bn(){return QC}const e0=new Ie(K.comparator);function po(...t){let e=e0;for(const n of t)e=e.insert(n.key,n);return e}function t0(t){let e=e0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ns(){return ko()}function n0(){return ko()}function ko(){return new Rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const YC=new Ie(K.comparator),XC=new Fe(K.comparator);function ie(...t){let e=XC;for(const n of t)e=e.add(n);return e}const JC=new Fe(se);function ZC(){return JC}/**
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
 */function Gf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:su(e)?"-0":e}}function r0(t){return{integerValue:""+t}}function eP(t,e){return CC(e)?r0(e):Gf(t,e)}/**
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
 */class qu{constructor(){this._=void 0}}function tP(t,e,n){return t instanceof au?function(s,i){const o={fields:{[Fw]:{stringValue:Uw},[Bw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Bf(i)&&(i=zu(i)),i&&(o.fields[jw]=i),{mapValue:o}}(n,e):t instanceof ra?i0(t,e):t instanceof sa?o0(t,e):function(s,i){const o=s0(s,i),l=Sy(o)+Sy(s.Ae);return _d(o)&&_d(s.Ae)?r0(l):Gf(s.serializer,l)}(t,e)}function nP(t,e,n){return t instanceof ra?i0(t,e):t instanceof sa?o0(t,e):n}function s0(t,e){return t instanceof lu?function(r){return _d(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class au extends qu{}class ra extends qu{constructor(e){super(),this.elements=e}}function i0(t,e){const n=a0(e);for(const r of t.elements)n.some(s=>In(s,r))||n.push(r);return{arrayValue:{values:n}}}class sa extends qu{constructor(e){super(),this.elements=e}}function o0(t,e){let n=a0(e);for(const r of t.elements)n=n.filter(s=>!In(s,r));return{arrayValue:{values:n}}}class lu extends qu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Sy(t){return Pe(t.integerValue||t.doubleValue)}function a0(t){return zf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rP(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ra&&s instanceof ra||r instanceof sa&&s instanceof sa?yi(r.elements,s.elements,In):r instanceof lu&&s instanceof lu?In(r.Ae,s.Ae):r instanceof au&&s instanceof au}(t.transform,e.transform)}class sP{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gu{}function l0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wf(t.key,en.none()):new ga(t.key,t.data,en.none());{const n=t.data,r=wt.empty();let s=new Fe(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new zr(t.key,r,new Nt(s.toArray()),en.none())}}function iP(t,e,n){t instanceof ga?function(s,i,o){const l=s.value.clone(),u=Ry(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(s,i,o){if(!Sl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ry(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(u0(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function No(t,e,n,r){return t instanceof ga?function(i,o,l,u){if(!Sl(i.precondition,o))return l;const c=i.value.clone(),f=Cy(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(i,o,l,u){if(!Sl(i.precondition,o))return l;const c=Cy(i.fieldTransforms,u,o),f=o.data;return f.setAll(u0(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Sl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function oP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=s0(r.transform,s||null);i!=null&&(n===null&&(n=wt.empty()),n.set(r.field,i))}return n||null}function Ay(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&yi(r,s,(i,o)=>rP(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ga extends Gu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zr extends Gu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function u0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ry(t,e,n){const r=new Map;ue(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,nP(o,l,n[s]))}return r}function Cy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,tP(i,o,e))}return r}class Wf extends Gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aP extends Gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&iP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=No(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=No(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=n0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=l0(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&yi(this.mutations,e.mutations,(n,r)=>Ay(n,r))&&yi(this.baseMutations,e.baseMutations,(n,r)=>Ay(n,r))}}class Kf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ue(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return YC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Kf(e,n,r,s)}}/**
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
 */class uP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var xe,ae;function hP(t){switch(t){case L.OK:return Y(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function c0(t){if(t===void 0)return jn("GRPC error has no .code"),L.UNKNOWN;switch(t){case xe.OK:return L.OK;case xe.CANCELLED:return L.CANCELLED;case xe.UNKNOWN:return L.UNKNOWN;case xe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case xe.INTERNAL:return L.INTERNAL;case xe.UNAVAILABLE:return L.UNAVAILABLE;case xe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case xe.NOT_FOUND:return L.NOT_FOUND;case xe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case xe.ABORTED:return L.ABORTED;case xe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case xe.DATA_LOSS:return L.DATA_LOSS;default:return Y(39323,{code:t})}}(ae=xe||(xe={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(){return new TextEncoder}/**
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
 */const fP=new Ir([4294967295,4294967295],0);function Py(t){const e=dP().encode(t),n=new Aw;return n.update(e),new Uint8Array(n.digest())}function ky(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ir([n,r],0),new Ir([s,i],0)]}class Qf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new mo(`Invalid padding: ${n}`);if(r<0)throw new mo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new mo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ir.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Ir.fromNumber(r)));return s.compare(fP)===1&&(s=new Ir([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Py(e),[r,s]=ky(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Qf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Py(e),[r,s]=ky(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class mo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Wu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ya.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wu(J.min(),s,new Ie(se),Bn(),ie())}}class ya{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ya(r,n,ie(),ie(),ie())}}/**
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
 */class Al{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class h0{constructor(e,n){this.targetId=e,this.Ce=n}}class d0{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ny{constructor(){this.ve=0,this.Fe=xy(),this.Me=Qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ie(),n=ie(),r=ie();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y(38017,{changeType:i})}}),new ya(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=xy()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class pP{constructor(e){this.Ge=e,this.ze=new Map,this.je=Bn(),this.Je=sl(),this.He=sl(),this.Ye=new Ie(se)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Ed(i))if(r===0){const o=new K(i.path);this.et(n,o,nt.newNoDocument(o,J.min()))}else ue(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Dr(r).toUint8Array()}catch(u){if(u instanceof Mw)return gi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Qf(o,s,i)}catch(u){return gi(u instanceof mo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Ed(l.target)){const u=new K(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,nt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=ie();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Wu(e,n,this.Ye,this.je,r);return this.je=Bn(),this.Je=sl(),this.He=sl(),this.Ye=new Ie(se),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Ny,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Fe(se),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Fe(se),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ny),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function sl(){return new Ie(K.comparator)}function xy(){return new Ie(K.comparator)}const mP={asc:"ASCENDING",desc:"DESCENDING"},gP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yP={and:"AND",or:"OR"};class _P{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Id(t,e){return t.useProto3Json||Bu(e)?e:{value:e}}function uu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function f0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vP(t,e){return uu(t,e.toTimestamp())}function _n(t){return ue(!!t,49232),J.fromTimestamp(function(n){const r=xr(n);return new ge(r.seconds,r.nanos)}(t))}function Yf(t,e){return Sd(t,e).canonicalString()}function Sd(t,e){const n=function(s){return new de(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function p0(t){const e=de.fromString(t);return ue(v0(e),10190,{key:e.toString()}),e}function Ad(t,e){return Yf(t.databaseId,e.path)}function ah(t,e){const n=p0(e);if(n.get(1)!==t.databaseId.projectId)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(g0(n))}function m0(t,e){return Yf(t.databaseId,e)}function EP(t){const e=p0(t);return e.length===4?de.emptyPath():g0(e)}function Rd(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function g0(t){return ue(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Dy(t,e,n){return{name:Ad(t,e),fields:n.value.mapValue.fields}}function wP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(ue(f===void 0||typeof f=="string",58123),Qe.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?L.UNKNOWN:c0(c.code);return new H(f,c.message||"")}(o);n=new d0(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ah(t,r.document.name),i=_n(r.document.updateTime),o=r.document.createTime?_n(r.document.createTime):J.min(),l=new wt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Al(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ah(t,r.document),i=r.readTime?_n(r.readTime):J.min(),o=nt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Al([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ah(t,r.document),i=r.removedTargetIds||[];n=new Al([],i,s,null)}else{if(!("filter"in e))return Y(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new cP(s,i),l=r.targetId;n=new h0(l,o)}}return n}function TP(t,e){let n;if(e instanceof ga)n={update:Dy(t,e.key,e.value)};else if(e instanceof Wf)n={delete:Ad(t,e.key)};else if(e instanceof zr)n={update:Dy(t,e.key,e.data),updateMask:xP(e.fieldMask)};else{if(!(e instanceof aP))return Y(16599,{Vt:e.type});n={verify:Ad(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof au)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ra)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof lu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:vP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)}(t,e.precondition)),n}function IP(t,e){return t&&t.length>0?(ue(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?_n(s.updateTime):_n(i);return o.isEqual(J.min())&&(o=_n(i)),new sP(o,s.transformResults||[])}(n,e))):[]}function SP(t,e){return{documents:[m0(t,e.path)]}}function AP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=m0(t,s);const i=function(c){if(c.length!==0)return _0(rn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:Ms(m.field),direction:PP(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Id(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function RP(t){let e=EP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ue(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=y0(p);return m instanceof rn&&Ww(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new na(Us(P.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Bu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,T=p.values||[];return new ou(T,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,T=p.values||[];return new ou(T,m)}(n.endAt)),qC(e,s,o,i,l,"F",u,c)}function CP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function y0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Us(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Us(n.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Us(n.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Us(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(Us(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>y0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function PP(t){return mP[t]}function kP(t){return gP[t]}function NP(t){return yP[t]}function Ms(t){return{fieldPath:t.canonicalString()}}function Us(t){return Ge.fromServerFormat(t.fieldPath)}function _0(t){return t instanceof Oe?function(n){if(n.op==="=="){if(vy(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NAN"}};if(_y(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vy(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NOT_NAN"}};if(_y(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ms(n.field),op:kP(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(s=>_0(s));return r.length===1?r[0]:{compositeFilter:{op:NP(n.op),filters:r}}}(t):Y(54877,{filter:t})}function xP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function v0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class dr{constructor(e,n,r,s,i=J.min(),o=J.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class DP{constructor(e){this.yt=e}}function OP(t){const e=RP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Td(e,e.limit,"L"):e}/**
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
 */class bP{constructor(){this.Cn=new LP}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Nr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Nr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class LP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Fe(de.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Fe(de.comparator)).toArray()}}/**
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
 */const Oy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},E0=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(E0,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
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
 */class Ei{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ei(0)}static cr(){return new Ei(-1)}}/**
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
 */const by="LruGarbageCollector",VP=1048576;function Ly([t,e],[n,r]){const s=se(t,n);return s===0?se(e,r):s}class MP{constructor(e){this.Ir=e,this.buffer=new Fe(Ly),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ly(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class UP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){q(by,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ci(n)?q(by,"Ignoring IndexedDB error during garbage collection: ",n):await Ri(n)}await this.Vr(3e5)})}}class FP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(ju.ce);const r=new MP(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Oy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Oy):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Ls()<=re.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function jP(t,e){return new FP(t,e)}/**
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
 */class BP{constructor(){this.changes=new Rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class $P{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&No(r.mutation,s,Nt.empty(),ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const s=ns();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=po();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ns();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Bn();const o=ko(),l=function(){return ko()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof zr)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),No(f.mutation,c,f.mutation.getFieldMask(),ge.now())):o.set(c.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new zP(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ko();let s=new Ie((o,l)=>o-l),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Nt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(s.get(l.batchId)||ie()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=n0();f.forEach(m=>{if(!i.has(m)){const T=l0(n.get(m),r.get(m));T!==null&&p.set(m,T),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Xw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(ns());let l=Jo,u=i;return o.next(c=>M.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,ie())).next(f=>({batchId:l,changes:t0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=po();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=po();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const c=function(p,m){return new Pi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,nt.newInvalidDocument(f)))});let l=po();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&No(f.mutation,c,Nt.empty(),ge.now()),Hu(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class HP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return M.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:_n(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:OP(s.bundledQuery),readTime:_n(s.readTime)}}(n)),M.resolve()}}/**
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
 */class qP{constructor(){this.overlays=new Ie(K.comparator),this.qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ns();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=ns(),i=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ie((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=ns(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=ns(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return M.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uP(n,r));let i=this.qr.get(n);i===void 0&&(i=ie(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Xf{constructor(){this.Qr=new Fe(Be.$r),this.Ur=new Fe(Be.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Be(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new K(new de([])),r=new Be(n,e),s=new Be(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new K(new de([])),r=new Be(n,e),s=new Be(n,e+1);let i=ie();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Be(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return K.comparator(e.key,n.key)||se(e.Yr,n.Yr)}static Kr(e,n){return se(e.Yr,n.Yr)||K.comparator(e.key,n.key)}}/**
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
 */class WP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Fe(Be.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lP(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new Be(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?jf:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),s=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(se);return n.forEach(s=>{const i=new Be(s,0),o=new Be(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new Be(new K(i),0);let l=new Fe(se);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Yr)),!0)},o),M.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ue(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(n.mutations,s=>{const i=new Be(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Be(n,0),s=this.Zr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class KP{constructor(e){this.ri=e,this.docs=function(){return new Ie(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Bn();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||IC(TC(f),r)<=0||(s.has(f.key)||Hu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y(9500)}ii(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QP(this)}getSize(e){return M.resolve(this.size)}}class QP extends BP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class YP{constructor(e){this.persistence=e,this.si=new Rs(n=>$f(n),Hf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.oi=0,this._i=new Xf,this.targetCount=0,this.ai=Ei.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),M.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ei(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Pr(n),M.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this._i.containsKey(n))}}/**
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
 */class w0{constructor(e,n){this.ui={},this.overlays={},this.ci=new ju(0),this.li=!1,this.li=!0,this.hi=new GP,this.referenceDelegate=e(this),this.Pi=new YP(this),this.indexManager=new bP,this.remoteDocumentCache=function(s){return new KP(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new DP(n),this.Ii=new HP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new WP(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new XP(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return M.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class XP extends AC{constructor(e){super(),this.currentSequenceNumber=e}}class Jf{constructor(e){this.persistence=e,this.Ri=new Xf,this.Vi=null}static mi(e){return new Jf(e)}get fi(){if(this.Vi)return this.Vi;throw Y(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,r=>{const s=K.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class cu{constructor(e,n){this.persistence=e,this.pi=new Rs(r=>PC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=jP(this,n)}static mi(e,n){return new cu(e,n)}Ei(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return M.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,J.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Tl(e.data.value)),n}br(e,n,r){return M.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Zf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=ie(),s=ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ZP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return H1()?8:RC(it())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new JP;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Ls()<=re.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(Ls()<=re.DEBUG&&q("QueryEngine","Query:",Vs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ls()<=re.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):M.resolve())}ys(e,n){if(Iy(n))return M.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Td(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ie(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,Td(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,s){return Iy(n)||s.isEqual(J.min())?M.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?M.resolve(null):(Ls()<=re.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Vs(n)),this.vs(e,o,n,wC(s,Jo)).next(l=>l))})}Ds(e,n){let r=new Fe(Zw(e));return n.forEach((s,i)=>{Hu(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Ls()<=re.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Vs(n)),this.ps.getDocumentsMatchingQuery(e,n,Nr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const ep="LocalStore",ek=3e8;class tk{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ie(se),this.xs=new Rs(i=>$f(i),Hf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $P(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function nk(t,e,n,r){return new tk(t,e,n,r)}async function T0(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ie();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function rk(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let T=M.resolve();return m.forEach(P=>{T=T.next(()=>f.getEntry(u,P)).next(x=>{const b=c.docVersions.get(P);ue(b!==null,48541),x.version.compareTo(b)<0&&(p.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),f.addEntry(x)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function I0(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function sk(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let T=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Qe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),s=s.insert(p,T),function(x,b,A){return x.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=ek?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(m,T,f)&&l.push(n.Pi.updateTargetData(i,T))});let u=Bn(),c=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(ik(i,o,e.documentUpdates).next(f=>{u=f.ks,c=f.qs})),!r.isEqual(J.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Ms=s,i))}function ik(t,e,n){let r=ie(),s=ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Bn();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q(ep,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:s}})}function ok(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=jf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ak(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Cd(t,e,n){const r=Z(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ci(o))throw o;q(ep,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Vy(t,e,n){const r=Z(t);let s=J.min(),i=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=Z(u),m=p.xs.get(f);return m!==void 0?M.resolve(p.Ms.get(m)):p.Pi.getTargetData(c,f)}(r,o,yn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:ie())).next(l=>(lk(r,WC(e),l),{documents:l,Qs:i})))}function lk(t,e,n){let r=t.Os.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class My{constructor(){this.activeTargetIds=ZC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uk{constructor(){this.Mo=new My,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new My,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ck{Oo(e){}shutdown(){}}/**
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
 */const Uy="ConnectivityMonitor";class Fy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){q(Uy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){q(Uy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il=null;function Pd(){return il===null?il=function(){return 268435456+Math.round(2147483648*Math.random())}():il++,"0x"+il.toString(16)}/**
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
 */const lh="RestConnection",hk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class dk{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===gd?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Pd(),l=this.zo(e,n.toUriEncodedString());q(lh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:c}=new URL(l),f=jr(c);return this.Jo(e,l,u,r,f).then(p=>(q(lh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw gi(lh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ai}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=hk[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class fk{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ze="WebChannelConnection";class pk extends dk{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Pd();return new Promise((l,u)=>{const c=new Rw;c.setWithCredentials(!0),c.listenOnce(Cw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case wl.NO_ERROR:const p=c.getResponseJson();q(Ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case wl.TIMEOUT:q(Ze,`RPC '${e}' ${o} timed out`),u(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case wl.HTTP_ERROR:const m=c.getStatus();if(q(Ze,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let T=c.getResponseJson();Array.isArray(T)&&(T=T[0]);const P=T==null?void 0:T.error;if(P&&P.status&&P.message){const x=function(A){const _=A.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(_)>=0?_:L.UNKNOWN}(P.status);u(new H(x,P.message))}else u(new H(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new H(L.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{q(Ze,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);q(Ze,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Pd(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Nw(),l=kw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");q(Ze,`Creating RPC '${e}' stream ${s}: ${f}`,u);const p=o.createWebChannel(f,u);this.I_(p);let m=!1,T=!1;const P=new fk({Yo:b=>{T?q(Ze,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(m||(q(Ze,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),q(Ze,`RPC '${e}' stream ${s} sending:`,b),p.send(b))},Zo:()=>p.close()}),x=(b,A,_)=>{b.listen(A,S=>{try{_(S)}catch(D){setTimeout(()=>{throw D},0)}})};return x(p,fo.EventType.OPEN,()=>{T||(q(Ze,`RPC '${e}' stream ${s} transport opened.`),P.o_())}),x(p,fo.EventType.CLOSE,()=>{T||(T=!0,q(Ze,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(p))}),x(p,fo.EventType.ERROR,b=>{T||(T=!0,gi(Ze,`RPC '${e}' stream ${s} transport errored. Name:`,b.name,"Message:",b.message),P.a_(new H(L.UNAVAILABLE,"The operation could not be completed")))}),x(p,fo.EventType.MESSAGE,b=>{var A;if(!T){const _=b.data[0];ue(!!_,16349);const S=_,D=(S==null?void 0:S.error)||((A=S[0])==null?void 0:A.error);if(D){q(Ze,`RPC '${e}' stream ${s} received error:`,D);const j=D.status;let B=function(E){const I=xe[E];if(I!==void 0)return c0(I)}(j),v=D.message;B===void 0&&(B=L.INTERNAL,v="Unknown error status: "+j+" with message "+D.message),T=!0,P.a_(new H(B,v)),p.close()}else q(Ze,`RPC '${e}' stream ${s} received:`,_),P.u_(_)}}),x(l,Pw.STAT_EVENT,b=>{b.stat===pd.PROXY?q(Ze,`RPC '${e}' stream ${s} detected buffering proxy`):b.stat===pd.NOPROXY&&q(Ze,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function uh(){return typeof document<"u"?document:null}/**
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
 */function Ku(t){return new _P(t,!0)}/**
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
 */class S0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const jy="PersistentStream";class A0{constructor(e,n,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new S0(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new H(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(jy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(q(jy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mk extends A0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=wP(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?_n(o.readTime):J.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Rd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Ed(u)?{documents:SP(i,u)}:{query:AP(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=f0(i,o.resumeToken);const c=Id(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=uu(i,o.snapshotVersion.toTimestamp());const c=Id(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=CP(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Rd(this.serializer),n.removeTarget=e,this.q_(n)}}class gk extends A0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=IP(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Rd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TP(this.serializer,r))};this.q_(n)}}/**
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
 */class yk{}class _k extends yk{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Sd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(L.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Sd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class vk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(jn(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ys="RemoteStore";class Ek{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Cs(this)&&(q(ys,"Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.Ea.add(4),await _a(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Qu(c)}(this))})}),this.Ra=new vk(r,s)}}async function Qu(t){if(Cs(t))for(const e of t.da)await e(!0)}async function _a(t){for(const e of t.da)await e(!1)}function R0(t,e){const n=Z(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),sp(n)?rp(n):ki(n).O_()&&np(n,e))}function tp(t,e){const n=Z(t),r=ki(n);n.Ia.delete(e),r.O_()&&C0(n,e),n.Ia.size===0&&(r.O_()?r.L_():Cs(n)&&n.Ra.set("Unknown"))}function np(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ki(t).Y_(e)}function C0(t,e){t.Va.Ue(e),ki(t).Z_(e)}function rp(t){t.Va=new pP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ki(t).start(),t.Ra.ua()}function sp(t){return Cs(t)&&!ki(t).x_()&&t.Ia.size>0}function Cs(t){return Z(t).Ea.size===0}function P0(t){t.Va=void 0}async function wk(t){t.Ra.set("Online")}async function Tk(t){t.Ia.forEach((e,n)=>{np(t,e)})}async function Ik(t,e){P0(t),sp(t)?(t.Ra.ha(e),rp(t)):t.Ra.set("Unknown")}async function Sk(t,e,n){if(t.Ra.set("Online"),e instanceof d0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){q(ys,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hu(t,r)}else if(e instanceof Al?t.Va.Ze(e):e instanceof h0?t.Va.st(e):t.Va.tt(e),!n.isEqual(J.min()))try{const r=await I0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(c);f&&i.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Qe.EMPTY_BYTE_STRING,f.snapshotVersion)),C0(i,u);const p=new dr(f.target,u,c,f.sequenceNumber);np(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(ys,"Failed to raise snapshot:",r),await hu(t,r)}}async function hu(t,e,n){if(!Ci(e))throw e;t.Ea.add(1),await _a(t),t.Ra.set("Offline"),n||(n=()=>I0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(ys,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Qu(t)})}function k0(t,e){return e().catch(n=>hu(t,n,e))}async function Yu(t){const e=Z(t),n=br(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:jf;for(;Ak(e);)try{const s=await ok(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,Rk(e,s)}catch(s){await hu(e,s)}N0(e)&&x0(e)}function Ak(t){return Cs(t)&&t.Ta.length<10}function Rk(t,e){t.Ta.push(e);const n=br(t);n.O_()&&n.X_&&n.ea(e.mutations)}function N0(t){return Cs(t)&&!br(t).x_()&&t.Ta.length>0}function x0(t){br(t).start()}async function Ck(t){br(t).ra()}async function Pk(t){const e=br(t);for(const n of t.Ta)e.ea(n.mutations)}async function kk(t,e,n){const r=t.Ta.shift(),s=Kf.from(r,e,n);await k0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Yu(t)}async function Nk(t,e){e&&br(t).X_&&await async function(r,s){if(function(o){return hP(o)&&o!==L.ABORTED}(s.code)){const i=r.Ta.shift();br(r).B_(),await k0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Yu(r)}}(t,e),N0(t)&&x0(t)}async function By(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),q(ys,"RemoteStore received new credentials");const r=Cs(n);n.Ea.add(3),await _a(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Qu(n)}async function xk(t,e){const n=Z(t);e?(n.Ea.delete(2),await Qu(n)):e||(n.Ea.add(2),await _a(n),n.Ra.set("Unknown"))}function ki(t){return t.ma||(t.ma=function(n,r,s){const i=Z(n);return i.sa(),new mk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:wk.bind(null,t),t_:Tk.bind(null,t),r_:Ik.bind(null,t),H_:Sk.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),sp(t)?rp(t):t.Ra.set("Unknown")):(await t.ma.stop(),P0(t))})),t.ma}function br(t){return t.fa||(t.fa=function(n,r,s){const i=Z(n);return i.sa(),new gk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:Ck.bind(null,t),r_:Nk.bind(null,t),ta:Pk.bind(null,t),na:kk.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Yu(t)):(await t.fa.stop(),t.Ta.length>0&&(q(ys,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class ip{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ip(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function op(t,e){if(jn("AsyncQueue",`${e}: ${t}`),Ci(t))return new H(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class si{static emptySet(e){return new si(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=po(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof si)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new si;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class zy{constructor(){this.ga=new Ie(K.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Y(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class wi{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new wi(e,n,si.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$u(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Dk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Ok{constructor(){this.queries=$y(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=Z(n),i=s.queries;s.queries=$y(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new H(L.ABORTED,"Firestore shutting down"))}}function $y(){return new Rs(t=>Jw(t),$u)}async function D0(t,e){const n=Z(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Dk,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=op(o,`Initialization of query '${Vs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&ap(n)}async function O0(t,e){const n=Z(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bk(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&ap(n)}function Lk(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function ap(t){t.Ca.forEach(e=>{e.next()})}var kd,Hy;(Hy=kd||(kd={})).Ma="default",Hy.Cache="cache";class b0{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new wi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=wi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==kd.Cache}}/**
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
 */class L0{constructor(e){this.key=e}}class V0{constructor(e){this.key=e}}class Vk{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ie(),this.mutatedKeys=ie(),this.eu=Zw(e),this.tu=new si(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new zy,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),T=Hu(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),x=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let b=!1;m&&T?m.data.isEqual(T.data)?P!==x&&(r.track({type:3,doc:T}),b=!0):this.su(m,T)||(r.track({type:2,doc:T}),b=!0,(u&&this.eu(T,u)>0||c&&this.eu(T,c)<0)&&(l=!0)):!m&&T?(r.track({type:0,doc:T}),b=!0):m&&!T&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(l=!0)),b&&(T?(o=o.add(T),i=x?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(T,P){const x=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Rt:b})}};return x(T)-x(P)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new wi(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new zy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ie(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new V0(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new L0(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return wi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const lp="SyncEngine";class Mk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Uk{constructor(e){this.key=e,this.hu=!1}}class Fk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Rs(l=>Jw(l),$u),this.Iu=new Map,this.Eu=new Set,this.du=new Ie(K.comparator),this.Au=new Map,this.Ru=new Xf,this.Vu={},this.mu=new Map,this.fu=Ei.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function jk(t,e,n=!0){const r=z0(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await M0(r,e,n,!0),s}async function Bk(t,e){const n=z0(t);await M0(n,e,!0,!1)}async function M0(t,e,n,r){const s=await ak(t.localStore,yn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await zk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&R0(t.remoteStore,s),l}async function zk(t,e,n,r,s){t.pu=(p,m,T)=>async function(x,b,A,_){let S=b.view.ru(A);S.Cs&&(S=await Vy(x.localStore,b.query,!1).then(({documents:v})=>b.view.ru(v,S)));const D=_&&_.targetChanges.get(b.targetId),j=_&&_.targetMismatches.get(b.targetId)!=null,B=b.view.applyChanges(S,x.isPrimaryClient,D,j);return Gy(x,b.targetId,B.au),B.snapshot}(t,p,m,T);const i=await Vy(t.localStore,e,!0),o=new Vk(e,i.Qs),l=o.ru(i.documents),u=ya.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);Gy(t,n,c.au);const f=new Mk(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function $k(t,e,n){const r=Z(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!$u(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Cd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&tp(r.remoteStore,s.targetId),Nd(r,s.targetId)}).catch(Ri)):(Nd(r,s.targetId),await Cd(r.localStore,s.targetId,!0))}async function Hk(t,e){const n=Z(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),tp(n.remoteStore,r.targetId))}async function qk(t,e,n){const r=Jk(t);try{const s=await function(o,l){const u=Z(o),c=ge.now(),f=l.reduce((T,P)=>T.add(P.key),ie());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let P=Bn(),x=ie();return u.Ns.getEntries(T,f).next(b=>{P=b,P.forEach((A,_)=>{_.isValidDocument()||(x=x.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,P)).next(b=>{p=b;const A=[];for(const _ of l){const S=oP(_,p.get(_.key).overlayedDocument);S!=null&&A.push(new zr(_.key,S,Hw(S.value.mapValue),en.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,A,l)}).next(b=>{m=b;const A=b.applyToLocalDocumentSet(p,x);return u.documentOverlayCache.saveOverlays(T,b.batchId,A)})}).then(()=>({batchId:m.batchId,changes:t0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Ie(se)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,s.batchId,n),await va(r,s.changes),await Yu(r.remoteStore)}catch(s){const i=op(s,"Failed to persist write");n.reject(i)}}async function U0(t,e){const n=Z(t);try{const r=await sk(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ue(o.hu,14607):s.removedDocuments.size>0&&(ue(o.hu,42227),o.hu=!1))}),await va(n,r,e)}catch(r){await Ri(r)}}function qy(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.Sa)m.va(l)&&(c=!0)}),c&&ap(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Gk(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ie(K.comparator);o=o.insert(i,nt.newNoDocument(i,J.min()));const l=ie().add(i),u=new Wu(J.min(),new Map,new Ie(se),o,l);await U0(r,u),r.du=r.du.remove(i),r.Au.delete(e),up(r)}else await Cd(r.localStore,e,!1).then(()=>Nd(r,e,n)).catch(Ri)}async function Wk(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await rk(n.localStore,e);j0(n,r,null),F0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await va(n,s)}catch(s){await Ri(s)}}async function Kk(t,e,n){const r=Z(t);try{const s=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ue(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);j0(r,e,n),F0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await va(r,s)}catch(s){await Ri(s)}}function F0(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function j0(t,e,n){const r=Z(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Nd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||B0(t,r)})}function B0(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(tp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),up(t))}function Gy(t,e,n){for(const r of n)r instanceof L0?(t.Ru.addReference(r.key,e),Qk(t,r)):r instanceof V0?(q(lp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||B0(t,r.key)):Y(19791,{wu:r})}function Qk(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(q(lp,"New document in limbo: "+n),t.Eu.add(r),up(t))}function up(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new K(de.fromString(e)),r=t.fu.next();t.Au.set(r,new Uk(n)),t.du=t.du.insert(n,r),R0(t.remoteStore,new dr(yn(qf(n.path)),r,"TargetPurposeLimboResolution",ju.ce))}}async function va(t,e,n){const r=Z(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){s.push(c);const p=Zf.As(u.targetId,c);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,c){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,m=>M.forEach(m.Es,T=>f.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>M.forEach(m.ds,T=>f.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!Ci(p))throw p;q(ep,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const T=f.Ms.get(m),P=T.snapshotVersion,x=T.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(m,x)}}}(r.localStore,i))}async function Yk(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){q(lp,"User change. New user:",e.toKey());const r=await T0(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new H(L.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await va(n,r.Ls)}}function Xk(t,e){const n=Z(t),r=n.Au.get(e);if(r&&r.hu)return ie().add(r.key);{let s=ie();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function z0(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=U0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gk.bind(null,e),e.Pu.H_=bk.bind(null,e.eventManager),e.Pu.yu=Lk.bind(null,e.eventManager),e}function Jk(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Wk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Kk.bind(null,e),e}class du{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ku(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return nk(this.persistence,new ZP,e.initialUser,this.serializer)}Cu(e){return new w0(Jf.mi,this.serializer)}Du(e){return new uk}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}du.provider={build:()=>new du};class Zk extends du{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ue(this.persistence.referenceDelegate instanceof cu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new UP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new w0(r=>cu.mi(r,n),this.serializer)}}class xd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yk.bind(null,this.syncEngine),await xk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ok}()}createDatastore(e){const n=Ku(e.databaseInfo.databaseId),r=function(i){return new pk(i)}(e.databaseInfo);return function(i,o,l,u){return new _k(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new Ek(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>qy(this.syncEngine,n,0),function(){return Fy.v()?new Fy:new ck}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const p=new Fk(s,i,o,l,u,c);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Z(s);q(ys,"RemoteStore shutting down."),i.Ea.add(5),await _a(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}xd.provider={build:()=>new xd};/**
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
 */class $0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Lr="FirestoreClient";class eN{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=et.UNAUTHENTICATED,this.clientId=Ff.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(Lr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(Lr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=op(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ch(t,e){t.asyncQueue.verifyOperationInProgress(),q(Lr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await T0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tN(t);q(Lr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>By(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>By(e.remoteStore,s)),t._onlineComponents=e}async function tN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(Lr,"Using user provided OfflineComponentProvider");try{await ch(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;gi("Error using user provided cache. Falling back to memory cache: "+n),await ch(t,new du)}}else q(Lr,"Using default OfflineComponentProvider"),await ch(t,new Zk(void 0));return t._offlineComponents}async function H0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(Lr,"Using user provided OnlineComponentProvider"),await Wy(t,t._uninitializedComponentsProvider._online)):(q(Lr,"Using default OnlineComponentProvider"),await Wy(t,new xd))),t._onlineComponents}function nN(t){return H0(t).then(e=>e.syncEngine)}async function q0(t){const e=await H0(t),n=e.eventManager;return n.onListen=jk.bind(null,e.syncEngine),n.onUnlisten=$k.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Bk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Hk.bind(null,e.syncEngine),n}function rN(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new $0({next:m=>{f.Nu(),o.enqueueAndForget(()=>O0(i,p));const T=m.docs.has(l);!T&&m.fromCache?c.reject(new H(L.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&u&&u.source==="server"?c.reject(new H(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new b0(qf(l.path),f,{includeMetadataChanges:!0,qa:!0});return D0(i,p)}(await q0(t),t.asyncQueue,e,n,r)),r.promise}function sN(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new $0({next:m=>{f.Nu(),o.enqueueAndForget(()=>O0(i,p)),m.fromCache&&u.source==="server"?c.reject(new H(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new b0(l,f,{includeMetadataChanges:!0,qa:!0});return D0(i,p)}(await q0(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ky=new Map;/**
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
 */const W0="firestore.googleapis.com",Qy=!0;class Yy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=W0,this.ssl=Qy}else this.host=e.host,this.ssl=e.ssl??Qy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=E0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VP)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}EC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=G0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cC;switch(r.type){case"firstParty":return new pC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ky.get(n);r&&(q("ComponentProvider","Removing Datastore"),Ky.delete(n),r.terminate())}(this),Promise.resolve()}}function iN(t,e,n,r={}){var c;t=Tn(t,Xu);const s=jr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Of(`https://${l}`),bf("Firestore",!0)),i.host!==W0&&i.host!==l&&gi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!ps(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=et.MOCK_USER;else{f=vw(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new et(m)}t._authCredentials=new hC(new Dw(f,p))}}/**
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
 */class Ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ps(this.firestore,e,this._query)}}class Ne{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}toJSON(){return{type:Ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ma(n,Ne._jsonSchema))return new Ne(e,r||null,new K(de.fromString(n.referencePath)))}}Ne._jsonSchemaVersion="firestore/documentReference/1.0",Ne._jsonSchema={type:be("string",Ne._jsonSchemaVersion),referencePath:be("string")};class Sr extends Ps{constructor(e,n,r){super(e,n,qf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new K(e))}withConverter(e){return new Sr(this.firestore,e,this._path)}}function Xy(t,e,...n){if(t=_e(t),Ow("collection","path",e),t instanceof Xu){const r=de.fromString(e,...n);return uy(r),new Sr(t,null,r)}{if(!(t instanceof Ne||t instanceof Sr))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return uy(r),new Sr(t.firestore,null,r)}}function rs(t,e,...n){if(t=_e(t),arguments.length===1&&(e=Ff.newId()),Ow("doc","path",e),t instanceof Xu){const r=de.fromString(e,...n);return ly(r),new Ne(t,null,new K(r))}{if(!(t instanceof Ne||t instanceof Sr))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return ly(r),new Ne(t.firestore,t instanceof Sr?t.converter:null,new K(r))}}/**
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
 */const Jy="AsyncQueue";class Zy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new S0(this,"async_queue_retry"),this._c=()=>{const r=uh();r&&q(Jy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=uh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=uh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new On;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ci(e))throw e;q(Jy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,jn("INTERNAL UNHANDLED ERROR: ",e_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=ip.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Y(47125,{Pc:e_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function e_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ni extends Xu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Zy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zy(e),this._firestoreClient=void 0,await e}}}function oN(t,e){const n=typeof t=="object"?t:Mf(),r=typeof t=="string"?t:e,s=Uu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=gw("firestore");i&&iN(s,...i)}return s}function cp(t){if(t._terminated)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||aN(t),t._firestoreClient}function aN(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,c,f){return new xC(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,G0(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new eN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(Qe.fromBase64String(e))}catch(n){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ft(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ma(e,Ft._jsonSchema))return Ft.fromBase64String(e.bytes)}}Ft._jsonSchemaVersion="firestore/bytes/1.0",Ft._jsonSchema={type:be("string",Ft._jsonSchemaVersion),bytes:be("string")};/**
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
 */class Ju{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hp{constructor(e){this._methodName=e}}/**
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
 */class vn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:vn._jsonSchemaVersion}}static fromJSON(e){if(ma(e,vn._jsonSchema))return new vn(e.latitude,e.longitude)}}vn._jsonSchemaVersion="firestore/geoPoint/1.0",vn._jsonSchema={type:be("string",vn._jsonSchemaVersion),latitude:be("number"),longitude:be("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:En._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ma(e,En._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new En(e.vectorValues);throw new H(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}En._jsonSchemaVersion="firestore/vectorValue/1.0",En._jsonSchema={type:be("string",En._jsonSchemaVersion),vectorValues:be("object")};/**
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
 */const lN=/^__.*__$/;class uN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ga(e,this.data,n,this.fieldTransforms)}}class K0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Q0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{Ac:t})}}class dp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new dp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return fu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Q0(this.Ac)&&lN.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class cN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ku(e)}Cc(e,n,r,s=!1){return new dp({Ac:e,methodName:n,Dc:r,path:Ge.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fp(t){const e=t._freezeSettings(),n=Ku(t._databaseId);return new cN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hN(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);pp("Data must be an object, but it was:",o,r);const l=Y0(r,o);let u,c;if(i.merge)u=new Nt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Dd(e,p,n);if(!o.contains(m))throw new H(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);J0(f,m)||f.push(m)}u=new Nt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new uN(new wt(l),u,c)}class Zu extends hp{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zu}}function dN(t,e,n,r){const s=t.Cc(1,e,n);pp("Data must be an object, but it was:",s,r);const i=[],o=wt.empty();Br(r,(u,c)=>{const f=mp(e,u,n);c=_e(c);const p=s.yc(f);if(c instanceof Zu)i.push(f);else{const m=Ea(c,p);m!=null&&(i.push(f),o.set(f,m))}});const l=new Nt(i);return new K0(o,l,s.fieldTransforms)}function fN(t,e,n,r,s,i){const o=t.Cc(1,e,n),l=[Dd(e,r,n)],u=[s];if(i.length%2!=0)throw new H(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Dd(e,i[m])),u.push(i[m+1]);const c=[],f=wt.empty();for(let m=l.length-1;m>=0;--m)if(!J0(c,l[m])){const T=l[m];let P=u[m];P=_e(P);const x=o.yc(T);if(P instanceof Zu)c.push(T);else{const b=Ea(P,x);b!=null&&(c.push(T),f.set(T,b))}}const p=new Nt(c);return new K0(f,p,o.fieldTransforms)}function pN(t,e,n,r=!1){return Ea(n,t.Cc(r?4:3,e))}function Ea(t,e){if(X0(t=_e(t)))return pp("Unsupported field value:",e,t),Y0(t,e);if(t instanceof hp)return function(r,s){if(!Q0(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Ea(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=_e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ge.fromDate(r);return{timestampValue:uu(s.serializer,i)}}if(r instanceof ge){const i=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uu(s.serializer,i)}}if(r instanceof vn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ft)return{bytesValue:f0(s.serializer,r._byteString)};if(r instanceof Ne){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof En)return function(o,l){return{mapValue:{fields:{[zw]:{stringValue:$w},[iu]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Gf(l.serializer,c)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Fu(r)}`)}(t,e)}function Y0(t,e){const n={};return Vw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,(r,s)=>{const i=Ea(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function X0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof vn||t instanceof Ft||t instanceof Ne||t instanceof hp||t instanceof En)}function pp(t,e,n){if(!X0(n)||!bw(n)){const r=Fu(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Dd(t,e,n){if((e=_e(e))instanceof Ju)return e._internalPath;if(typeof e=="string")return mp(t,e);throw fu("Field path arguments must be of type string or ",t,!1,void 0,n)}const mN=new RegExp("[~\\*/\\[\\]]");function mp(t,e,n){if(e.search(mN)>=0)throw fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ju(...e.split("."))._internalPath}catch{throw fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new H(L.INVALID_ARGUMENT,l+t+u)}function J0(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Z0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ec("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gN extends Z0{data(){return super.data()}}function ec(t,e){return typeof e=="string"?mp(t,e):e instanceof Ju?e._internalPath:e._delegate._internalPath}/**
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
 */function yN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gp{}class eT extends gp{}function t_(t,e,...n){let r=[];e instanceof gp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof yp).length,l=i.filter(u=>u instanceof tc).length;if(o>1||o>0&&l>0)throw new H(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class tc extends eT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new tc(e,n,r)}_apply(e){const n=this._parse(e);return tT(e._query,n),new Ps(e.firestore,e.converter,wd(e._query,n))}_parse(e){const n=fp(e.firestore);return function(i,o,l,u,c,f,p){let m;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new H(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){r_(p,f);const P=[];for(const x of p)P.push(n_(u,i,x));m={arrayValue:{values:P}}}else m=n_(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||r_(p,f),m=pN(l,o,p,f==="in"||f==="not-in");return Oe.create(c,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function _N(t,e,n){const r=e,s=ec("where",t);return tc._create(s,r,n)}class yp extends gp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:rn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)tT(o,u),o=wd(o,u)}(e._query,n),new Ps(e.firestore,e.converter,wd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _p extends eT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new _p(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new H(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new H(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new na(i,o)}(e._query,this._field,this._direction);return new Ps(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Pi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function vN(t,e="asc"){const n=e,r=ec("orderBy",t);return _p._create(r,n)}function n_(t,e,n){if(typeof(n=_e(n))=="string"){if(n==="")throw new H(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xw(e)&&n.indexOf("/")!==-1)throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(de.fromString(n));if(!K.isDocumentKey(r))throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yy(t,new K(r))}if(n instanceof Ne)return yy(t,n._key);throw new H(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fu(n)}.`)}function r_(t,e){if(!Array.isArray(t)||t.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tT(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class EN{convertValue(e,n="none"){switch(Or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[iu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Pe(o.doubleValue));return new En(n)}convertGeoPoint(e){return new vn(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Zo(e));default:return null}}convertTimestamp(e){const n=xr(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);ue(v0(r),9688,{name:e});const s=new ea(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function wN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class go{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class as extends Z0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ec("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=as._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}as._jsonSchemaVersion="firestore/documentSnapshot/1.0",as._jsonSchema={type:be("string",as._jsonSchemaVersion),bundleSource:be("string","DocumentSnapshot"),bundleName:be("string"),bundle:be("string")};class Rl extends as{data(e={}){return super.data(e)}}class ii{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new go(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Rl(this._firestore,this._userDataWriter,r.key,r,new go(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Rl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new go(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Rl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new go(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:TN(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ii._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ff.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function TN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
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
 */function IN(t){t=Tn(t,Ne);const e=Tn(t.firestore,Ni);return rN(cp(e),t._key).then(n=>RN(e,t,n))}ii._jsonSchemaVersion="firestore/querySnapshot/1.0",ii._jsonSchema={type:be("string",ii._jsonSchemaVersion),bundleSource:be("string","QuerySnapshot"),bundleName:be("string"),bundle:be("string")};class nT extends EN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function SN(t){t=Tn(t,Ps);const e=Tn(t.firestore,Ni),n=cp(e),r=new nT(e);return yN(t._query),sN(n,t._query).then(s=>new ii(e,r,t,s))}function Od(t,e,n){t=Tn(t,Ne);const r=Tn(t.firestore,Ni),s=wN(t.converter,e,n);return vp(r,[hN(fp(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,en.none())])}function s_(t,e,n,...r){t=Tn(t,Ne);const s=Tn(t.firestore,Ni),i=fp(s);let o;return o=typeof(e=_e(e))=="string"||e instanceof Ju?fN(i,"updateDoc",t._key,e,n,r):dN(i,"updateDoc",t._key,e),vp(s,[o.toMutation(t._key,en.exists(!0))])}function AN(t){return vp(Tn(t.firestore,Ni),[new Wf(t._key,en.none())])}function vp(t,e){return function(r,s){const i=new On;return r.asyncQueue.enqueueAndForget(async()=>qk(await nN(r),s,i)),i.promise}(cp(t),e)}function RN(t,e,n){const r=n.docs.get(e._key),s=new nT(t);return new as(t,s,e._key,r,new go(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ai=s})(As),ms(new kr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ni(new dC(r.getProvider("auth-internal")),new mC(o,r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(c.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),gn(sy,iy,e),gn(sy,iy,"esm2020")})();function rT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CN=rT,sT=new fa("auth","Firebase",rT());/**
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
 */const pu=new Lf("@firebase/auth");function PN(t,...e){pu.logLevel<=re.WARN&&pu.warn(`Auth (${As}): ${t}`,...e)}function Cl(t,...e){pu.logLevel<=re.ERROR&&pu.error(`Auth (${As}): ${t}`,...e)}/**
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
 */function Ht(t,...e){throw wp(t,...e)}function tn(t,...e){return wp(t,...e)}function Ep(t,e,n){const r={...CN(),[e]:n};return new fa("auth","Firebase",r).create(e,{appName:t.name})}function bn(t){return Ep(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ht(t,"argument-error"),Ep(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return sT.create(t,...e)}function Q(t,e,...n){if(!t)throw wp(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cl(e),new Error(e)}function zn(t,e){t||Nn(e)}/**
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
 */function bd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function NN(){return i_()==="http:"||i_()==="https:"}function i_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function xN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NN()||B1()||"connection"in navigator)?navigator.onLine:!0}function DN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=U1()||z1()}get(){return xN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tp(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class iT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ON={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],LN=new wa(3e4,6e4);function qn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function sn(t,e,n,r,s={}){return oT(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=pa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return j1()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&jr(t.emulatorConfig.host)&&(c.credentials="include"),iT.fetch()(await aT(t,t.config.apiHost,n,l),c)})}async function oT(t,e,n){t._canInitEmulator=!1;const r={...ON,...e};try{const s=new MN(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ol(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ol(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ol(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ol(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ep(t,f,c);Ht(t,f)}}catch(s){if(s instanceof Sn)throw s;Ht(t,"network-request-failed",{message:String(s)})}}async function Ta(t,e,n,r,s={}){const i=await sn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ht(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function aT(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Tp(t.config,s):`${t.config.apiScheme}://${s}`;return bN.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function VN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class MN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),LN.get())})}}function ol(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}function o_(t){return t!==void 0&&t.enterprise!==void 0}class UN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return VN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function FN(t,e){return sn(t,"GET","/v2/recaptchaConfig",qn(t,e))}/**
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
 */async function jN(t,e){return sn(t,"POST","/v1/accounts:delete",e)}async function mu(t,e){return sn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BN(t,e=!1){const n=_e(t),r=await n.getIdToken(e),s=Ip(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xo(hh(s.auth_time)),issuedAtTime:xo(hh(s.iat)),expirationTime:xo(hh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function hh(t){return Number(t)*1e3}function Ip(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cl("JWT malformed, contained fewer than 3 sections"),null;try{const s=pw(n);return s?JSON.parse(s):(Cl("Failed to decode base64 JWT payload"),null)}catch(s){return Cl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function a_(t){const e=Ip(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _s(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&zN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $N{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ld{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xo(this.lastLoginAt),this.creationTime=xo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await _s(t,mu(e,{idToken:n}));Q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?lT(s.providerUserInfo):[],o=qN(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ld(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function HN(t){const e=_e(t);await gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lT(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function GN(t,e){const n=await oT(t,{},async()=>{const r=pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await aT(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&jr(t.emulatorConfig.host)&&(u.credentials="include"),iT.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function WN(t,e){return sn(t,"POST","/v2/accounts:revokeToken",qn(t,e))}/**
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
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):a_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=a_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await GN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new oi;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
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
 */function er(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new $N(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ld(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _s(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BN(this,e)}reload(){return HN(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Et(this.auth.app))return Promise.reject(bn(this.auth));const e=await this.getIdToken();return await _s(this,jN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:T,providerData:P,stsTokenManager:x}=n;Q(p&&x,e,"internal-error");const b=oi.fromJSON(this.name,x);Q(typeof p=="string",e,"internal-error"),er(r,e.name),er(s,e.name),Q(typeof m=="boolean",e,"internal-error"),Q(typeof T=="boolean",e,"internal-error"),er(i,e.name),er(o,e.name),er(l,e.name),er(u,e.name),er(c,e.name),er(f,e.name);const A=new Xt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:T,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:f});return P&&Array.isArray(P)&&(A.providerData=P.map(_=>({..._}))),u&&(A._redirectEventId=u),A}static async _fromIdTokenResponse(e,n,r=!1){const s=new oi;s.updateFromServerResponse(n);const i=new Xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await gu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?lT(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new oi;l.updateFromIdToken(r);const u=new Xt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ld(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const l_=new Map;function xn(t){zn(t instanceof Function,"Expected a class definition");let e=l_.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,l_.set(t,e),e)}/**
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
 */class uT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uT.type="NONE";const u_=uT;/**
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
 */function Pl(t,e,n){return`firebase:${t}:${e}:${n}`}class ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Pl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Pl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await mu(this.auth,{idToken:e}).catch(()=>{});return n?Xt._fromGetAccountInfoResponse(this.auth,n,e):null}return Xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ai(xn(u_),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||xn(u_);const o=Pl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const m=await mu(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Xt._fromGetAccountInfoResponse(e,m,f)}else p=Xt._fromJSON(e,f);c!==i&&(l=p),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ai(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ai(i,e,r))}}/**
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
 */function c_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mT(e))return"Blackberry";if(gT(e))return"Webos";if(hT(e))return"Safari";if((e.includes("chrome/")||dT(e))&&!e.includes("edge/"))return"Chrome";if(pT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cT(t=it()){return/firefox\//i.test(t)}function hT(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dT(t=it()){return/crios\//i.test(t)}function fT(t=it()){return/iemobile/i.test(t)}function pT(t=it()){return/android/i.test(t)}function mT(t=it()){return/blackberry/i.test(t)}function gT(t=it()){return/webos/i.test(t)}function Sp(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KN(t=it()){var e;return Sp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function QN(){return $1()&&document.documentMode===10}function yT(t=it()){return Sp(t)||pT(t)||gT(t)||mT(t)||/windows phone/i.test(t)||fT(t)}/**
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
 */function _T(t,e=[]){let n;switch(t){case"Browser":n=c_(it());break;case"Worker":n=`${c_(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${As}/${r}`}/**
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
 */class YN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XN(t,e={}){return sn(t,"GET","/v2/passwordPolicy",qn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=6;class ZN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??JN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ex{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new h_(this),this.idTokenSubscription=new h_(this),this.beforeStateQueue=new YN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await mu(this,{idToken:e}),r=await Xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Et(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Et(this.app))return Promise.reject(bn(this));const n=e?_e(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Et(this.app)?Promise.reject(bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Et(this.app)?Promise.reject(bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XN(this),n=new ZN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await WN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_T(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&PN(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Gn(t){return _e(t)}class h_{constructor(e){this.auth=e,this.observer=null,this.addObserver=X1(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tx(t){nc=t}function vT(t){return nc.loadJS(t)}function nx(){return nc.recaptchaEnterpriseScript}function rx(){return nc.gapiScript}function sx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ix{constructor(){this.enterprise=new ox}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ox{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const ax="recaptcha-enterprise",ET="NO_RECAPTCHA";class lx{constructor(e){this.type=ax,this.auth=Gn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{FN(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new UN(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;o_(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(ET)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ix().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&o_(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=nx();u.length!==0&&(u+=l),vT(u).then(()=>{s(l,i,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function d_(t,e,n,r=!1,s=!1){const i=new lx(t);let o;if(s)o=ET;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function yu(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await d_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await d_(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function ux(t,e){const n=Uu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ps(i,e??{}))return s;Ht(s,"already-initialized")}return n.initialize({options:e})}function cx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hx(t,e,n){const r=Gn(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=wT(e),{host:o,port:l}=dx(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(ps(c,r.config.emulator)&&ps(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,jr(o)?(Of(`${i}//${o}${u}`),bf("Auth",!0)):fx()}function wT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dx(t){const e=wT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:f_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:f_(o)}}}function f_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ap{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function px(t,e){return sn(t,"POST","/v1/accounts:update",e)}async function mx(t,e){return sn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function gx(t,e){return Ta(t,"POST","/v1/accounts:signInWithPassword",qn(t,e))}async function yx(t,e){return sn(t,"POST","/v1/accounts:sendOobCode",qn(t,e))}async function _x(t,e){return yx(t,e)}/**
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
 */async function vx(t,e){return Ta(t,"POST","/v1/accounts:signInWithEmailLink",qn(t,e))}async function Ex(t,e){return Ta(t,"POST","/v1/accounts:signInWithEmailLink",qn(t,e))}/**
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
 */class ia extends Ap{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ia(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ia(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yu(e,n,"signInWithPassword",gx);case"emailLink":return vx(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yu(e,r,"signUpPassword",mx);case"emailLink":return Ex(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function li(t,e){return Ta(t,"POST","/v1/accounts:signInWithIdp",qn(t,e))}/**
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
 */const wx="http://localhost";class vs extends Ap{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new vs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,li(e,n)}buildRequest(){const e={requestUri:wx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pa(n)}return e}}/**
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
 */function Tx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ix(t){const e=co(ho(t)).link,n=e?co(ho(e)).deep_link_id:null,r=co(ho(t)).deep_link_id;return(r?co(ho(r)).link:null)||r||n||e||t}class Rp{constructor(e){const n=co(ho(e)),r=n.apiKey??null,s=n.oobCode??null,i=Tx(n.mode??null);Q(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Ix(e);try{return new Rp(n)}catch{return null}}}/**
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
 */class xi{constructor(){this.providerId=xi.PROVIDER_ID}static credential(e,n){return ia._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rp.parseLink(n);return Q(r,"argument-error"),ia._fromEmailAndCode(e,r.code,r.tenantId)}}xi.PROVIDER_ID="password";xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Cp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ia extends Cp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class or extends Ia{constructor(){super("facebook.com")}static credential(e){return vs._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
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
 */class dn extends Ia{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vs._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
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
 */class ar extends Ia{constructor(){super("github.com")}static credential(e){return vs._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
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
 */class lr extends Ia{constructor(){super("twitter.com")}static credential(e,n){return vs._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
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
 */async function Sx(t,e){return Ta(t,"POST","/v1/accounts:signUp",qn(t,e))}/**
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
 */class Es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Xt._fromIdTokenResponse(e,r,s),o=p_(r);return new Es({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=p_(r);return new Es({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function p_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class _u extends Sn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_u.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _u(e,n,r,s)}}function TT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_u._fromErrorAndOperation(t,i,e,r):i})}async function Ax(t,e,n=!1){const r=await _s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Es._forOperation(t,"link",r)}/**
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
 */async function Rx(t,e,n=!1){const{auth:r}=t;if(Et(r.app))return Promise.reject(bn(r));const s="reauthenticate";try{const i=await _s(t,TT(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=Ip(i.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),Es._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),i}}/**
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
 */async function IT(t,e,n=!1){if(Et(t.app))return Promise.reject(bn(t));const r="signIn",s=await TT(t,r,e),i=await Es._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Cx(t,e){return IT(Gn(t),e)}/**
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
 */async function ST(t){const e=Gn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Px(t,e,n){const r=Gn(t);await yu(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",_x)}async function kx(t,e,n){if(Et(t.app))return Promise.reject(bn(t));const r=Gn(t),o=await yu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Sx).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ST(t),u}),l=await Es._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Nx(t,e,n){return Et(t.app)?Promise.reject(bn(t)):Cx(_e(t),xi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ST(t),r})}/**
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
 */async function xx(t,e){return sn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function dh(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=_e(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await _s(r,xx(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Dx(t,e){return Ox(_e(t),null,e)}async function Ox(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(i.password=n);const o=await _s(t,px(r,i));await t._updateTokensIfNecessary(o,!0)}function bx(t,e,n,r){return _e(t).onIdTokenChanged(e,n,r)}function Lx(t,e,n){return _e(t).beforeAuthStateChanged(e,n)}function Vx(t,e,n,r){return _e(t).onAuthStateChanged(e,n,r)}function Mx(t){return _e(t).signOut()}const vu="__sak";/**
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
 */class AT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vu,"1"),this.storage.removeItem(vu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ux=1e3,Fx=10;class RT extends AT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);QN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ux)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}RT.type="LOCAL";const jx=RT;/**
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
 */class CT extends AT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}CT.type="SESSION";const PT=CT;/**
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
 */function Bx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await Bx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rc.receivers=[];/**
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
 */function Pp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=Pp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wn(){return window}function $x(t){wn().location.href=t}/**
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
 */function kT(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function Hx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Gx(){return kT()?self:null}/**
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
 */const NT="firebaseLocalStorageDb",Wx=1,Eu="firebaseLocalStorage",xT="fbase_key";class Sa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sc(t,e){return t.transaction([Eu],e?"readwrite":"readonly").objectStore(Eu)}function Kx(){const t=indexedDB.deleteDatabase(NT);return new Sa(t).toPromise()}function Vd(){const t=indexedDB.open(NT,Wx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Eu,{keyPath:xT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Eu)?e(r):(r.close(),await Kx(),e(await Vd()))})})}async function m_(t,e,n){const r=sc(t,!0).put({[xT]:e,value:n});return new Sa(r).toPromise()}async function Qx(t,e){const n=sc(t,!1).get(e),r=await new Sa(n).toPromise();return r===void 0?null:r.value}function g_(t,e){const n=sc(t,!0).delete(e);return new Sa(n).toPromise()}const Yx=800,Xx=3;class DT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Xx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(Gx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Hx(),!this.activeServiceWorker)return;this.sender=new zx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vd();return await m_(e,vu,"1"),await g_(e,vu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>m_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>g_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=sc(s,!1).getAll();return new Sa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}DT.type="LOCAL";const Jx=DT;new wa(3e4,6e4);/**
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
 */function OT(t,e){return e?xn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class kp extends Ap{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zx(t){return IT(t.auth,new kp(t),t.bypassAuthState)}function e2(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),Rx(n,new kp(t),t.bypassAuthState)}async function t2(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),Ax(n,new kp(t),t.bypassAuthState)}/**
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
 */class bT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zx;case"linkViaPopup":case"linkViaRedirect":return t2;case"reauthViaPopup":case"reauthViaRedirect":return e2;default:Ht(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const n2=new wa(2e3,1e4);async function r2(t,e,n){if(Et(t.app))return Promise.reject(tn(t,"operation-not-supported-in-this-environment"));const r=Gn(t);kN(t,e,Cp);const s=OT(r,n);return new ss(r,"signInViaPopup",e,s).executeNotNull()}class ss extends bT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ss.currentPopupAction&&ss.currentPopupAction.cancel(),ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=Pp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,n2.get())};e()}}ss.currentPopupAction=null;/**
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
 */const s2="pendingRedirect",kl=new Map;class i2 extends bT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=kl.get(this.auth._key());if(!e){try{const r=await o2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}kl.set(this.auth._key(),e)}return this.bypassAuthState||kl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o2(t,e){const n=u2(e),r=l2(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function a2(t,e){kl.set(t._key(),e)}function l2(t){return xn(t._redirectPersistence)}function u2(t){return Pl(s2,t.config.apiKey,t.name)}async function c2(t,e,n=!1){if(Et(t.app))return Promise.reject(bn(t));const r=Gn(t),s=OT(r,e),o=await new i2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const h2=10*60*1e3;class d2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!LT(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=h2&&this.cachedEventUids.clear(),this.cachedEventUids.has(y_(e))}saveEventToCache(e){this.cachedEventUids.add(y_(e)),this.lastProcessedEventTime=Date.now()}}function y_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function LT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return LT(t);default:return!1}}/**
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
 */async function p2(t,e={}){return sn(t,"GET","/v1/projects",e)}/**
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
 */const m2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g2=/^https?/;async function y2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await p2(t);for(const n of e)try{if(_2(n))return}catch{}Ht(t,"unauthorized-domain")}function _2(t){const e=bd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!g2.test(n))return!1;if(m2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const v2=new wa(3e4,6e4);function __(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function E2(t){return new Promise((e,n)=>{var s,i,o;function r(){__(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{__(),n(tn(t,"network-request-failed"))},timeout:v2.get()})}if((i=(s=wn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=wn().gapi)!=null&&o.load)r();else{const l=sx("iframefcb");return wn()[l]=()=>{gapi.load?r():n(tn(t,"network-request-failed"))},vT(`${rx()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Nl=null,e})}let Nl=null;function w2(t){return Nl=Nl||E2(t),Nl}/**
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
 */const T2=new wa(5e3,15e3),I2="__/auth/iframe",S2="emulator/auth/iframe",A2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function C2(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tp(e,S2):`https://${t.config.authDomain}/${I2}`,r={apiKey:e.apiKey,appName:t.name,v:As},s=R2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${pa(r).slice(1)}`}async function P2(t){const e=await w2(t),n=wn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:C2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),l=wn().setTimeout(()=>{i(o)},T2.get());function u(){wn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const k2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},N2=500,x2=600,D2="_blank",O2="http://localhost";class v_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b2(t,e,n,r=N2,s=x2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...k2,width:r.toString(),height:s.toString(),top:i,left:o},c=it().toLowerCase();n&&(l=dT(c)?D2:n),cT(c)&&(e=e||O2,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[T,P])=>`${m}${T}=${P},`,"");if(KN(c)&&l!=="_self")return L2(e||"",l),new v_(null);const p=window.open(e||"",l,f);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new v_(p)}function L2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const V2="__/auth/handler",M2="emulator/auth/handler",U2=encodeURIComponent("fac");async function E_(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:As,eventId:s};if(e instanceof Cp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Y1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ia){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${U2}=${encodeURIComponent(u)}`:"";return`${F2(t)}?${pa(l).slice(1)}${c}`}function F2({config:t}){return t.emulator?Tp(t,M2):`https://${t.authDomain}/${V2}`}/**
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
 */const fh="webStorageSupport";class j2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=PT,this._completeRedirectFn=c2,this._overrideRedirectResult=a2}async _openPopup(e,n,r,s){var o;zn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await E_(e,n,r,bd(),s);return b2(e,i,Pp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await E_(e,n,r,bd(),s);return $x(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(zn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await P2(e),r=new d2(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fh,{type:fh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[fh];i!==void 0&&n(!!i),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=y2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yT()||hT()||Sp()}}const B2=j2;var w_="@firebase/auth",T_="1.11.1";/**
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
 */class z2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function H2(t){ms(new kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_T(t)},c=new ex(r,s,i,u);return cx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ms(new kr("auth-internal",e=>{const n=Gn(e.getProvider("auth").getImmediate());return(r=>new z2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(w_,T_,$2(t)),gn(w_,T_,"esm2020")}/**
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
 */const q2=5*60,G2=_w("authIdTokenMaxAge")||q2;let I_=null;const W2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>G2)return;const s=n==null?void 0:n.token;I_!==s&&(I_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function K2(t=Mf()){const e=Uu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ux(t,{popupRedirectResolver:B2,persistence:[Jx,jx,PT]}),r=_w("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=W2(i.toString());Lx(n,o,()=>o(n.currentUser)),bx(n,l=>o(l))}}const s=mw("auth");return s&&hx(n,`http://${s}`),n}function Q2(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}tx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Q2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});H2("Browser");/**
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
 */const VT="firebasestorage.googleapis.com",MT="storageBucket",Y2=2*60*1e3,X2=10*60*1e3;/**
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
 */class Ce extends Sn{constructor(e,n,r=0){super(ph(e),`Firebase Storage: ${n} (${ph(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ph(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Re;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Re||(Re={}));function ph(t){return"storage/"+t}function Np(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce(Re.UNKNOWN,t)}function J2(t){return new Ce(Re.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Z2(t){return new Ce(Re.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function eD(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce(Re.UNAUTHENTICATED,t)}function tD(){return new Ce(Re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nD(t){return new Ce(Re.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function rD(){return new Ce(Re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function sD(){return new Ce(Re.CANCELED,"User canceled the upload/download.")}function iD(t){return new Ce(Re.INVALID_URL,"Invalid URL '"+t+"'.")}function oD(t){return new Ce(Re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function aD(){return new Ce(Re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+MT+"' property when initializing the app?")}function lD(){return new Ce(Re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function uD(){return new Ce(Re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cD(t){return new Ce(Re.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Md(t){return new Ce(Re.INVALID_ARGUMENT,t)}function UT(){return new Ce(Re.APP_DELETED,"The Firebase app was deleted.")}function hD(t){return new Ce(Re.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Do(t,e){return new Ce(Re.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function so(t){throw new Ce(Re.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=xt.makeFromUrl(e,n)}catch{return new xt(e,"")}if(r.path==="")return r;throw oD(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),P={bucket:1,path:3},x=n===VT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",A=new RegExp(`^https?://${x}/${s}/${b}`,"i"),S=[{regex:l,indices:u,postModify:i},{regex:T,indices:P,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<S.length;D++){const j=S[D],B=j.regex.exec(e);if(B){const v=B[j.indices.bucket];let y=B[j.indices.path];y||(y=""),r=new xt(v,y),j.postModify(r);break}}if(r==null)throw iD(e);return r}}class dD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function fD(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...b){c||(c=!0,e.apply(null,b))}function p(b){s=setTimeout(()=>{s=null,t(T,u())},b)}function m(){i&&clearTimeout(i)}function T(b,...A){if(c){m();return}if(b){m(),f.call(null,b,...A);return}if(u()||o){m(),f.call(null,b,...A);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,p(S)}let P=!1;function x(b){P||(P=!0,m(),!c&&(s!==null?(b||(l=2),clearTimeout(s),p(0)):b||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,x(!0)},n),x}function pD(t){t(!1)}/**
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
 */function mD(t){return t!==void 0}function gD(t){return typeof t=="object"&&!Array.isArray(t)}function xp(t){return typeof t=="string"||t instanceof String}function S_(t){return Dp()&&t instanceof Blob}function Dp(){return typeof Blob<"u"}function A_(t,e,n,r){if(r<e)throw Md(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Md(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ic(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function FT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ls;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ls||(ls={}));/**
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
 */function yD(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class _D{constructor(e,n,r,s,i,o,l,u,c,f,p,m=!0,T=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,x)=>{this.resolve_=P,this.reject_=x,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new al(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===ls.NO_ERROR,u=i.getStatus();if(!l||yD(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===ls.ABORT;r(!1,new al(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new al(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());mD(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Np();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?UT():sD();o(u)}else{const u=rD();o(u)}};this.canceled_?n(!1,new al(!1,null,!0)):this.backoffId_=fD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class al{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function vD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ED(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function wD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function TD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ID(t,e,n,r,s,i,o=!0,l=!1){const u=FT(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return wD(f,e),vD(f,n),ED(f,i),TD(f,r),new _D(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function SD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function AD(...t){const e=SD();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Dp())return new Blob(t);throw new Ce(Re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function RD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function CD(t){if(typeof atob>"u")throw cD("base-64");return atob(t)}/**
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
 */const fn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class mh{constructor(e,n){this.data=e,this.contentType=n||null}}function PD(t,e){switch(t){case fn.RAW:return new mh(jT(e));case fn.BASE64:case fn.BASE64URL:return new mh(BT(t,e));case fn.DATA_URL:return new mh(ND(e),xD(e))}throw Np()}function jT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function kD(t){let e;try{e=decodeURIComponent(t)}catch{throw Do(fn.DATA_URL,"Malformed data URL.")}return jT(e)}function BT(t,e){switch(t){case fn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Do(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case fn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Do(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=CD(e)}catch(s){throw s.message.includes("polyfill")?s:Do(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class zT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Do(fn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=DD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function ND(t){const e=new zT(t);return e.base64?BT(fn.BASE64,e.rest):kD(e.rest)}function xD(t){return new zT(t).contentType}function DD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ur{constructor(e,n){let r=0,s="";S_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(S_(this.data_)){const r=this.data_,s=RD(r,e,n);return s===null?null:new ur(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ur(r,!0)}}static getBlob(...e){if(Dp()){const n=e.map(r=>r instanceof ur?r.data_:r);return new ur(AD.apply(null,n))}else{const n=e.map(o=>xp(o)?PD(fn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new ur(s,!0)}}uploadData(){return this.data_}}/**
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
 */function $T(t){let e;try{e=JSON.parse(t)}catch{return null}return gD(e)?e:null}/**
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
 */function OD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function bD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function HT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function LD(t,e){return e}class ct{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||LD}}let ll=null;function VD(t){return!xp(t)||t.length<2?t:HT(t)}function qT(){if(ll)return ll;const t=[];t.push(new ct("bucket")),t.push(new ct("generation")),t.push(new ct("metageneration")),t.push(new ct("name","fullPath",!0));function e(i,o){return VD(o)}const n=new ct("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new ct("size");return s.xform=r,t.push(s),t.push(new ct("timeCreated")),t.push(new ct("updated")),t.push(new ct("md5Hash",null,!0)),t.push(new ct("cacheControl",null,!0)),t.push(new ct("contentDisposition",null,!0)),t.push(new ct("contentEncoding",null,!0)),t.push(new ct("contentLanguage",null,!0)),t.push(new ct("contentType",null,!0)),t.push(new ct("metadata","customMetadata",!0)),ll=t,ll}function MD(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new xt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function UD(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return MD(r,t),r}function GT(t,e,n){const r=$T(e);return r===null?null:UD(t,r,n)}function FD(t,e,n,r){const s=$T(e);if(s===null||!xp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const f=t.bucket,p=t.fullPath,m="/b/"+o(f)+"/o/"+o(p),T=ic(m,n,r),P=FT({alt:"media",token:c});return T+P})[0]}function jD(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Op{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function WT(t){if(!t)throw Np()}function BD(t,e){function n(r,s){const i=GT(t,s,e);return WT(i!==null),i}return n}function zD(t,e){function n(r,s){const i=GT(t,s,e);return WT(i!==null),FD(i,s,t.host,t._protocol)}return n}function KT(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=tD():s=eD():n.getStatus()===402?s=Z2(t.bucket):n.getStatus()===403?s=nD(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function QT(t){const e=KT(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=J2(t.path)),i.serverResponse=s.serverResponse,i}return n}function $D(t,e,n){const r=e.fullServerUrl(),s=ic(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new Op(s,i,zD(t,n),o);return l.errorHandler=QT(e),l}function HD(t,e){const n=e.fullServerUrl(),r=ic(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(u,c){}const l=new Op(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=QT(e),l}function qD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function GD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=qD(null,e)),r}function WD(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let D=0;D<2;D++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=GD(e,r,s),f=jD(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",T=ur.getBlob(p,r,m);if(T===null)throw lD();const P={name:c.fullPath},x=ic(i,t.host,t._protocol),b="POST",A=t.maxUploadRetryTime,_=new Op(x,b,BD(t,n),A);return _.urlParams=P,_.headers=o,_.body=T.uploadData(),_.errorHandler=KT(e),_}class KD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ls.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ls.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ls.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw so("cannot .send() more than once");if(jr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw so("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw so("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw so("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw so("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class QD extends KD{initXhr(){this.xhr_.responseType="text"}}function bp(){return new QD}/**
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
 */class ws{constructor(e,n){this._service=e,n instanceof xt?this._location=n:this._location=xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ws(e,n)}get root(){const e=new xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return HT(this._location.path)}get storage(){return this._service}get parent(){const e=OD(this._location.path);if(e===null)return null;const n=new xt(this._location.bucket,e);return new ws(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw hD(e)}}function YD(t,e,n){t._throwIfRoot("uploadBytes");const r=WD(t.storage,t._location,qT(),new ur(e,!0),n);return t.storage.makeRequestWithTokens(r,bp).then(s=>({metadata:s,ref:t}))}function XD(t){t._throwIfRoot("getDownloadURL");const e=$D(t.storage,t._location,qT());return t.storage.makeRequestWithTokens(e,bp).then(n=>{if(n===null)throw uD();return n})}function JD(t){t._throwIfRoot("deleteObject");const e=HD(t.storage,t._location);return t.storage.makeRequestWithTokens(e,bp)}function ZD(t,e){const n=bD(t._location.path,e),r=new xt(t._location.bucket,n);return new ws(t.storage,r)}/**
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
 */function eO(t){return/^[A-Za-z]+:\/\//.test(t)}function tO(t,e){return new ws(t,e)}function YT(t,e){if(t instanceof Lp){const n=t;if(n._bucket==null)throw aD();const r=new ws(n,n._bucket);return e!=null?YT(r,e):r}else return e!==void 0?ZD(t,e):t}function nO(t,e){if(e&&eO(e)){if(t instanceof Lp)return tO(t,e);throw Md("To use ref(service, url), the first argument must be a Storage instance.")}else return YT(t,e)}function R_(t,e){const n=e==null?void 0:e[MT];return n==null?null:xt.makeFromBucketSpec(n,t)}function rO(t,e,n,r={}){t.host=`${e}:${n}`;const s=jr(e);s&&(Of(`https://${t.host}/b`),bf("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:vw(i,t.app.options.projectId))}class Lp{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=VT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Y2,this._maxUploadRetryTime=X2,this._requests=new Set,s!=null?this._bucket=xt.makeFromBucketSpec(s,this._host):this._bucket=R_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=xt.makeFromBucketSpec(this._url,e):this._bucket=R_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){A_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){A_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ws(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new dD(UT());{const o=ID(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const C_="@firebase/storage",P_="0.14.0";/**
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
 */const XT="storage";function sO(t,e,n){return t=_e(t),YD(t,e,n)}function iO(t){return t=_e(t),XD(t)}function oO(t){return t=_e(t),JD(t)}function k_(t,e){return t=_e(t),nO(t,e)}function aO(t=Mf(),e){t=_e(t);const r=Uu(t,XT).getImmediate({identifier:e}),s=gw("storage");return s&&lO(r,...s),r}function lO(t,e,n,r={}){rO(t,e,n,r)}function uO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Lp(n,r,s,e,As)}function cO(){ms(new kr(XT,uO,"PUBLIC").setMultipleInstances(!0)),gn(C_,P_,""),gn(C_,P_,"esm2020")}cO();const hO={projectId:"my-vertex-demo-477402",appId:"1:951182156991:web:f3d9a719d286edb79d120a",storageBucket:"my-vertex-demo-477402.firebasestorage.app",apiKey:"AIzaSyBMrcD659wimRmDjztaq0g1WPcCdVdv7pE",authDomain:"my-vertex-demo-477402.firebaseapp.com",messagingSenderId:"951182156991",measurementId:"G-X9MG3S33N4"},Vp=Tw(hO),Vt=K2(Vp);new dn;const N_=aO(Vp),Cn=oN(Vp,"workflow111"),Os="tasks",x_=t=>JSON.parse(JSON.stringify(t)),gt={getAllTasks:async t=>{try{let e;t?e=t_(Xy(Cn,Os),_N("userId","==",t)):e=t_(Xy(Cn,Os),vN("createdAt","desc"));const r=(await SN(e)).docs.map(s=>s.data());return t&&r.sort((s,i)=>{const o=s.createdAt||0;return(i.createdAt||0)-o}),r}catch(e){return console.error("Error fetching tasks:",e),[]}},createTask:async t=>{const e={...t,createdAt:Date.now(),updatedAt:Date.now()},n=x_(e);try{return await Od(rs(Cn,Os,e.id),n),e}catch(r){throw console.error("Error creating task:",r),r}},updateTask:async t=>{const e={...t,updatedAt:Date.now()},n=x_(e);try{return await s_(rs(Cn,Os,t.id),n),e}catch(r){throw console.error("Error updating task:",r),r}},deleteTask:async t=>{try{await AN(rs(Cn,Os,t))}catch(e){throw console.error("Error deleting task:",e),e}},updateStatus:async(t,e)=>{try{const n=rs(Cn,Os,t);return await s_(n,{status:e,updatedAt:Date.now()}),{id:t,status:e}}catch(n){throw console.error("Error updating status:",n),n}},exportTasks:async()=>{const t=await gt.getAllTasks(),e=JSON.stringify(t,null,2),n=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(n),s=document.createElement("a");s.href=r,s.download=`baro-ai-tasks-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(r)}},dO=new dn,Ar={loginEmail:async(t,e)=>await Nx(Vt,t,e),loginGoogle:async()=>await r2(Vt,dO),signup:async(t,e,n,r)=>{const s=await kx(Vt,t,e);await dh(s.user,{displayName:n});const i={id:s.user.uid,email:t,name:n,role:"REQUESTER",createdAt:Date.now(),updatedAt:Date.now(),...r};return await Od(rs(Cn,"users",s.user.uid),i),s},resetPassword:async t=>{await Px(Vt,t)},getUserProfile:async t=>{const e=await IN(rs(Cn,"users",t));return e.exists()?e.data():null},updateUserProfile:async(t,e)=>{await Od(rs(Cn,"users",t),{...e,updatedAt:Date.now()},{merge:!0}),e.name&&Vt.currentUser&&await dh(Vt.currentUser,{displayName:e.name}),e.profileImageUrl&&Vt.currentUser&&await dh(Vt.currentUser,{photoURL:e.profileImageUrl})},changePassword:async t=>{if(Vt.currentUser)await Dx(Vt.currentUser,t);else throw new Error("No authenticated user")},uploadProfileImage:async(t,e)=>{const n=k_(N_,`users/${t}/profile.jpg`);return await sO(n,e),await iO(n)},deleteProfileImage:async t=>{const e=k_(N_,`users/${t}/profile.jpg`);try{await oO(e)}catch(n){console.warn("Image might not exist in storage",n)}},logout:async()=>{await Mx(Vt)}},fO=({onProfileComplete:t})=>{const[e,n]=X.useState(!1),[r,s]=X.useState(""),[i,o]=X.useState(""),[l,u]=X.useState(""),[c,f]=X.useState(!1),[p,m]=X.useState(!1),[T,P]=X.useState(!1),[x,b]=X.useState(null),A=async S=>{S.preventDefault(),n(!0),s("");try{await Ar.loginEmail(i,l)}catch(D){console.error(D),D.code==="auth/invalid-credential"||D.code==="auth/user-not-found"?s("이메일 또는 비밀번호가 올바르지 않습니다."):D.code==="auth/wrong-password"?s("비밀번호가 올바르지 않습니다."):D.code==="auth/invalid-email"?s("올바른 이메일 형식이 아닙니다."):s("로그인 중 오류가 발생했습니다: "+D.message)}finally{n(!1)}},_=async()=>{n(!0),s("");try{const S=await Ar.loginGoogle(),D=await Ar.getUserProfile(S.user.uid);(!D||!D.department||!D.team)&&(b(S.user),P(!0))}catch(S){console.error(S),s("Google 로그인 실패: "+S.message)}finally{n(!1)}};return C.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4",children:[C.jsxs("div",{className:"w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden p-8 animate-fade-in",children:[C.jsxs("div",{className:"text-center mb-8",children:[C.jsx("img",{src:"/logo.png",alt:"Logo",className:"h-10 mx-auto mb-4"}),C.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Welcome back"}),C.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"업무 효율의 시작, Nexus AI와 함께하세요."})]}),r&&C.jsxs("div",{className:"mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm",children:[C.jsx("div",{className:"w-1 h-8 bg-red-400 rounded-full"}),r]}),C.jsxs("form",{onSubmit:A,className:"space-y-4",children:[C.jsxs("div",{className:"space-y-1",children:[C.jsx("label",{className:"text-xs font-bold text-gray-500 ml-1",children:"이메일"}),C.jsxs("div",{className:"relative",children:[C.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:C.jsx(cw,{className:"h-5 w-5 text-gray-400"})}),C.jsx("input",{type:"email",required:!0,value:i,onChange:S=>o(S.target.value),className:"block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",placeholder:"name@company.com"})]})]}),C.jsxs("div",{className:"space-y-1",children:[C.jsxs("div",{className:"flex justify-between items-center ml-1",children:[C.jsx("label",{className:"text-xs font-bold text-gray-500",children:"비밀번호"}),C.jsx("button",{type:"button",onClick:()=>m(!0),className:"text-xs text-blue-600 hover:underline",children:"비밀번호를 잊으셨나요?"})]}),C.jsxs("div",{className:"relative",children:[C.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:C.jsx(w1,{className:"h-5 w-5 text-gray-400"})}),C.jsx("input",{type:"password",required:!0,value:l,onChange:S=>u(S.target.value),className:"block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",placeholder:"••••••••"})]})]}),C.jsxs("button",{type:"submit",disabled:e,className:"w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200 disabled:opacity-70",children:[e?C.jsx(E1,{className:"w-5 h-5 animate-spin"}):C.jsx("span",{children:"로그인"}),!e&&C.jsx(m1,{className:"w-4 h-4"})]})]}),C.jsxs("div",{className:"my-8 flex items-center gap-4",children:[C.jsx("div",{className:"h-px bg-gray-200 flex-1"}),C.jsx("span",{className:"text-xs text-gray-400 font-medium",children:"OR"}),C.jsx("div",{className:"h-px bg-gray-200 flex-1"})]}),C.jsxs("button",{onClick:_,disabled:e,className:"w-full flex items-center justify-center gap-3 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 active:scale-95 transition-all",children:[C.jsx(_1,{className:"w-5 h-5 text-blue-500"}),C.jsx("span",{children:"Google 계정으로 계속하기"})]}),C.jsx("div",{className:"mt-8 text-center",children:C.jsxs("p",{className:"text-sm text-gray-500",children:["계정이 없으신가요?"," ",C.jsx("button",{onClick:()=>f(!0),className:"text-blue-600 font-bold hover:underline",children:"회원가입"})]})})]}),c&&C.jsx(mO,{onClose:()=>f(!1)}),p&&C.jsx(gO,{onClose:()=>m(!1)}),T&&x&&C.jsx(pO,{user:x,onClose:()=>{P(!1),t&&t()}})]})},pO=({user:t,onClose:e})=>{const[n,r]=X.useState(!1),[s,i]=X.useState({name:t.displayName||"",department:"",team:"",position:"",jobTitle:""}),o=u=>{i({...s,[u.target.name]:u.target.value})},l=async u=>{u.preventDefault(),r(!0);try{await Ar.updateUserProfile(t.uid,s),alert("정보가 저장되었습니다."),e()}catch(c){console.error(c),alert("저장 실패: "+c.message)}finally{r(!1)}};return C.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in",children:C.jsxs("div",{className:"bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto",children:[C.jsx("div",{className:"px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50",children:C.jsx("h3",{className:"text-lg font-bold text-gray-900",children:"추가 정보 입력"})}),C.jsxs("form",{onSubmit:l,className:"p-6 space-y-4",children:[C.jsx("div",{className:"p-4 bg-blue-50 rounded-xl text-blue-600 text-sm mb-4",children:"원활한 서비스 이용을 위해 추가 정보를 입력해주세요."}),C.jsxs("div",{className:"space-y-3",children:[C.jsx("h4",{className:"text-xs font-bold text-gray-400 uppercase",children:"필수 정보"}),C.jsx("input",{name:"name",type:"text",placeholder:"이름",required:!0,value:s.name,onChange:o,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"})]}),C.jsxs("div",{className:"space-y-3 pt-2",children:[C.jsx("h4",{className:"text-xs font-bold text-gray-400 uppercase",children:"부가 정보 (선택)"}),C.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[C.jsx("input",{name:"department",type:"text",placeholder:"본부",onChange:o,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),C.jsx("input",{name:"team",type:"text",placeholder:"팀",onChange:o,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),C.jsx("input",{name:"position",type:"text",placeholder:"직급",onChange:o,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),C.jsx("input",{name:"jobTitle",type:"text",placeholder:"직책",onChange:o,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"})]})]}),C.jsx("button",{type:"submit",disabled:n,className:"w-full py-3.5 mt-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-70",children:n?"저장 후 시작하기":"완료"})]})]})})},mO=({onClose:t})=>{const[e,n]=X.useState(!1),[r,s]=X.useState({email:"",password:"",confirmPassword:"",name:"",department:"",team:"",position:"",jobTitle:""}),i=l=>{s({...r,[l.target.name]:l.target.value})},o=async l=>{if(l.preventDefault(),r.password!==r.confirmPassword){alert("비밀번호가 일치하지 않습니다.");return}if(r.password.length<6){alert("비밀번호는 6자 이상이어야 합니다.");return}n(!0);try{await Ar.signup(r.email,r.password,r.name,{department:r.department,team:r.team,position:r.position,jobTitle:r.jobTitle}),alert("회원가입이 완료되었습니다."),t()}catch(u){console.error(u),u.code==="auth/email-already-in-use"?alert("이미 사용 중인 이메일입니다."):u.code==="auth/invalid-email"?alert("올바른 이메일 형식이 아닙니다."):alert("회원가입 실패: "+u.message)}finally{n(!1)}};return C.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in",children:C.jsxs("div",{className:"bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto",children:[C.jsxs("div",{className:"px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50",children:[C.jsx("h3",{className:"text-lg font-bold text-gray-900",children:"회원가입"}),C.jsx("button",{onClick:t,children:C.jsx(hw,{className:"w-5 h-5 text-gray-400 hover:text-gray-600"})})]}),C.jsxs("form",{onSubmit:o,className:"p-6 space-y-4",children:[C.jsxs("div",{className:"space-y-3",children:[C.jsx("h4",{className:"text-xs font-bold text-gray-400 uppercase",children:"필수 정보"}),C.jsx("input",{name:"email",type:"email",placeholder:"이메일 (ID)",required:!0,onChange:i,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),C.jsx("input",{name:"password",type:"password",placeholder:"비밀번호 (6자 이상)",required:!0,onChange:i,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),C.jsx("input",{name:"confirmPassword",type:"password",placeholder:"비밀번호 확인",required:!0,onChange:i,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),C.jsx("input",{name:"name",type:"text",placeholder:"이름",required:!0,onChange:i,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"})]}),C.jsxs("div",{className:"space-y-3 pt-2",children:[C.jsx("h4",{className:"text-xs font-bold text-gray-400 uppercase",children:"부가 정보 (선택)"}),C.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[C.jsx("input",{name:"department",type:"text",placeholder:"본부",onChange:i,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),C.jsx("input",{name:"team",type:"text",placeholder:"팀",onChange:i,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),C.jsx("input",{name:"position",type:"text",placeholder:"직급",onChange:i,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),C.jsx("input",{name:"jobTitle",type:"text",placeholder:"직책",onChange:i,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"})]})]}),C.jsx("button",{type:"submit",disabled:e,className:"w-full py-3.5 mt-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-70",children:e?"처리 중...":"가입하기"})]})]})})},gO=({onClose:t})=>{const[e,n]=X.useState(""),[r,s]=X.useState(!1),[i,o]=X.useState(!1),l=async u=>{u.preventDefault(),s(!0);try{await Ar.resetPassword(e),o(!0)}catch(c){alert("전송 실패: "+c.message)}finally{s(!1)}};return C.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in",children:C.jsxs("div",{className:"bg-white w-full max-w-md rounded-2xl shadow-xl p-6 text-center",children:[C.jsx("div",{className:"flex justify-end mb-2",children:C.jsx("button",{onClick:t,children:C.jsx(hw,{className:"w-5 h-5 text-gray-400"})})}),i?C.jsxs("div",{className:"py-6",children:[C.jsx("div",{className:"w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4",children:C.jsx(cw,{className:"w-6 h-6"})}),C.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:"이메일 전송 완료"}),C.jsx("p",{className:"text-sm text-gray-500 mb-6",children:"메일함을 확인하여 비밀번호를 재설정해주세요."}),C.jsx("button",{onClick:t,className:"w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200",children:"닫기"})]}):C.jsxs(C.Fragment,{children:[C.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-2",children:"비밀번호 재설정"}),C.jsxs("p",{className:"text-sm text-gray-500 mb-6",children:["가입하신 이메일 주소를 입력하시면",C.jsx("br",{}),"비밀번호 재설정 링크를 보내드립니다."]}),C.jsxs("form",{onSubmit:l,className:"space-y-4",children:[C.jsx("input",{type:"email",placeholder:"name@company.com",required:!0,value:e,onChange:u=>n(u.target.value),className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-center"}),C.jsx("button",{type:"submit",disabled:r,className:"w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-70",children:r?"전송 중...":"재설정 링크 보내기"})]})]})]})})};var D_;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(D_||(D_={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O_;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(O_||(O_={}));var b_;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(b_||(b_={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=["user","model","function","system"];var V_;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(V_||(V_={}));var M_;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(M_||(M_={}));var U_;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(U_||(U_={}));var F_;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(F_||(F_={}));var Oo;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.OTHER="OTHER"})(Oo||(Oo={}));var j_;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(j_||(j_={}));var B_;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(B_||(B_={}));var z_;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(z_||(z_={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class bs extends rt{constructor(e,n){super(e),this.response=n}}class JT extends rt{constructor(e,n,r,s){super(e),this.status=n,this.statusText=r,this.errorDetails=s}}class Rr extends rt{}class ZT extends rt{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO="https://generativelanguage.googleapis.com",_O="v1beta",vO="0.24.1",EO="genai-js";var Ts;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Ts||(Ts={}));class wO{constructor(e,n,r,s,i){this.model=e,this.task=n,this.apiKey=r,this.stream=s,this.requestOptions=i}toString(){var e,n;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||_O;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||yO}/${r}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function TO(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${EO}/${vO}`),e.join(" ")}async function IO(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",TO(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let r=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(s){throw new Rr(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${s.message}`)}for(const[s,i]of r.entries()){if(s==="x-goog-api-key")throw new Rr(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new Rr(`Header name ${s} can only be set using the apiClient field`);n.append(s,i)}}return n}async function SO(t,e,n,r,s,i){const o=new wO(t,e,n,r,i);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},PO(i)),{method:"POST",headers:await IO(o),body:s})}}async function Aa(t,e,n,r,s,i={},o=fetch){const{url:l,fetchOptions:u}=await SO(t,e,n,r,s,i);return AO(l,u,o)}async function AO(t,e,n=fetch){let r;try{r=await n(t,e)}catch(s){RO(s,t)}return r.ok||await CO(r,t),r}function RO(t,e){let n=t;throw n.name==="AbortError"?(n=new ZT(`Request aborted when fetching ${e.toString()}: ${t.message}`),n.stack=t.stack):t instanceof JT||t instanceof Rr||(n=new rt(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function CO(t,e){let n="",r;try{const s=await t.json();n=s.error.message,s.error.details&&(n+=` ${JSON.stringify(s.error.details)}`,r=s.error.details)}catch{}throw new JT(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,r)}function PO(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),xl(t.candidates[0]))throw new bs(`${rr(t)}`,t);return kO(t)}else if(t.promptFeedback)throw new bs(`Text not available. ${rr(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),xl(t.candidates[0]))throw new bs(`${rr(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),$_(t)[0]}else if(t.promptFeedback)throw new bs(`Function call not available. ${rr(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),xl(t.candidates[0]))throw new bs(`${rr(t)}`,t);return $_(t)}else if(t.promptFeedback)throw new bs(`Function call not available. ${rr(t)}`,t)},t}function kO(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.text&&i.push(o.text),o.executableCode&&i.push("\n```"+o.executableCode.language+`
`+o.executableCode.code+"\n```\n"),o.codeExecutionResult&&i.push("\n```\n"+o.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function $_(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.functionCall&&i.push(o.functionCall);if(i.length>0)return i}const NO=[Oo.RECITATION,Oo.SAFETY,Oo.LANGUAGE];function xl(t){return!!t.finishReason&&NO.includes(t.finishReason)}function rr(t){var e,n,r;let s="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)s+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(s+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const i=t.candidates[0];xl(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}function oa(t){return this instanceof oa?(this.v=t,this):new oa(t)}function xO(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),s,i=[];return s={},o("next"),o("throw"),o("return"),s[Symbol.asyncIterator]=function(){return this},s;function o(m){r[m]&&(s[m]=function(T){return new Promise(function(P,x){i.push([m,T,P,x])>1||l(m,T)})})}function l(m,T){try{u(r[m](T))}catch(P){p(i[0][3],P)}}function u(m){m.value instanceof oa?Promise.resolve(m.value.v).then(c,f):p(i[0][2],m)}function c(m){l("next",m)}function f(m){l("throw",m)}function p(m,T){m(T),i.shift(),i.length&&l(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function DO(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=LO(e),[r,s]=n.tee();return{stream:bO(r),response:OO(s)}}async function OO(t){const e=[],n=t.getReader();for(;;){const{done:r,value:s}=await n.read();if(r)return Mp(VO(e));e.push(s)}}function bO(t){return xO(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:s}=yield oa(n.read());if(s)break;yield yield oa(Mp(r))}})}function LO(t){const e=t.getReader();return new ReadableStream({start(r){let s="";return i();function i(){return e.read().then(({value:o,done:l})=>{if(l){if(s.trim()){r.error(new rt("Failed to parse stream"));return}r.close();return}s+=o;let u=s.match(H_),c;for(;u;){try{c=JSON.parse(u[1])}catch{r.error(new rt(`Error parsing JSON response: "${u[1]}"`));return}r.enqueue(c),s=s.substring(u[0].length),u=s.match(H_)}return i()}).catch(o=>{let l=o;throw l.stack=o.stack,l.name==="AbortError"?l=new ZT("Request aborted when reading from the stream"):l=new rt("Error reading from the stream"),l})}}})}function VO(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t){if(r.candidates){let s=0;for(const i of r.candidates)if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:s}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].groundingMetadata=i.groundingMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const o={};for(const l of i.content.parts)l.text&&(o.text=l.text),l.functionCall&&(o.functionCall=l.functionCall),l.executableCode&&(o.executableCode=l.executableCode),l.codeExecutionResult&&(o.codeExecutionResult=l.codeExecutionResult),Object.keys(o).length===0&&(o.text=""),n.candidates[s].content.parts.push(o)}s++}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(t,e,n,r){const s=await Aa(e,Ts.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return DO(s)}async function tI(t,e,n,r){const i=await(await Aa(e,Ts.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)).json();return{response:Mp(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function aa(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return MO(e)}function MO(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,s=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),s=!0):(e.parts.push(i),r=!0);if(r&&s)throw new rt("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!s)throw new rt("No content is provided for sending chat message.");return r?e:n}function UO(t,e){var n;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const s=t.generateContentRequest!=null;if(t.contents){if(s)throw new Rr("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=t.contents}else if(s)r=Object.assign(Object.assign({},r),t.generateContentRequest);else{const i=aa(t);r.contents=[i]}return{generateContentRequest:r}}function q_(t){let e;return t.contents?e=t:e={contents:[aa(t)]},t.systemInstruction&&(e.systemInstruction=nI(t.systemInstruction)),e}function FO(t){return typeof t=="string"||Array.isArray(t)?{content:aa(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],jO={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function BO(t){let e=!1;for(const n of t){const{role:r,parts:s}=n;if(!e&&r!=="user")throw new rt(`First content should be with role 'user', got ${r}`);if(!L_.includes(r))throw new rt(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(L_)}`);if(!Array.isArray(s))throw new rt("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new rt("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const l of s)for(const u of G_)u in l&&(i[u]+=1);const o=jO[r];for(const l of G_)if(!o.includes(l)&&i[l]>0)throw new rt(`Content with role '${r}' can't contain '${l}' part`);e=!0}}function W_(t){var e;if(t.candidates===void 0||t.candidates.length===0)return!1;const n=(e=t.candidates[0])===null||e===void 0?void 0:e.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const r of n.parts)if(r===void 0||Object.keys(r).length===0||r.text!==void 0&&r.text==="")return!1;return!0}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="SILENT_ERROR";class zO{constructor(e,n,r,s={}){this.model=n,this.params=r,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(BO(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var r,s,i,o,l,u;await this._sendPromise;const c=aa(e),f={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,c]},p=Object.assign(Object.assign({},this._requestOptions),n);let m;return this._sendPromise=this._sendPromise.then(()=>tI(this._apiKey,this.model,f,p)).then(T=>{var P;if(W_(T.response)){this._history.push(c);const x=Object.assign({parts:[],role:"model"},(P=T.response.candidates)===null||P===void 0?void 0:P[0].content);this._history.push(x)}else{const x=rr(T.response);x&&console.warn(`sendMessage() was unsuccessful. ${x}. Inspect response object for details.`)}m=T}).catch(T=>{throw this._sendPromise=Promise.resolve(),T}),await this._sendPromise,m}async sendMessageStream(e,n={}){var r,s,i,o,l,u;await this._sendPromise;const c=aa(e),f={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,c]},p=Object.assign(Object.assign({},this._requestOptions),n),m=eI(this._apiKey,this.model,f,p);return this._sendPromise=this._sendPromise.then(()=>m).catch(T=>{throw new Error(K_)}).then(T=>T.response).then(T=>{if(W_(T)){this._history.push(c);const P=Object.assign({},T.candidates[0].content);P.role||(P.role="model"),this._history.push(P)}else{const P=rr(T);P&&console.warn(`sendMessageStream() was unsuccessful. ${P}. Inspect response object for details.`)}}).catch(T=>{T.message!==K_&&console.error(T)}),m}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $O(t,e,n,r){return(await Aa(e,Ts.COUNT_TOKENS,t,!1,JSON.stringify(n),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HO(t,e,n,r){return(await Aa(e,Ts.EMBED_CONTENT,t,!1,JSON.stringify(n),r)).json()}async function qO(t,e,n,r){const s=n.requests.map(o=>Object.assign(Object.assign({},o),{model:e}));return(await Aa(e,Ts.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:s}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n,r={}){this.apiKey=e,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=nI(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var r;const s=q_(e),i=Object.assign(Object.assign({},this._requestOptions),n);return tI(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},s),i)}async generateContentStream(e,n={}){var r;const s=q_(e),i=Object.assign(Object.assign({},this._requestOptions),n);return eI(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},s),i)}startChat(e){var n;return new zO(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const r=UO(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),n);return $O(this.apiKey,this.model,r,s)}async embedContent(e,n={}){const r=FO(e),s=Object.assign(Object.assign({},this._requestOptions),n);return HO(this.apiKey,this.model,r,s)}async batchEmbedContents(e,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return qO(this.apiKey,this.model,e,r)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new rt("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Q_(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,r){if(!e.name)throw new Rr("Cached content must contain a `name` field.");if(!e.model)throw new Rr("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const o of s)if(n!=null&&n[o]&&e[o]&&(n==null?void 0:n[o])!==e[o]){if(o==="model"){const l=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,u=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(l===u)continue}throw new Rr(`Different value for "${o}" specified in modelParams (${n[o]}) and cachedContent (${e[o]})`)}const i=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new Q_(this.apiKey,i,r)}}const $n={MODEL_FAST:"gemini-pro",MODEL_SMART:"gemini-pro",MAX_TOKENS:2e3},vb=[{id:"gemini-pro",name:"Gemini Pro",description:"Google의 멀티모달 생성형 AI 모델",isPro:!1}],Eb={NEW_TASK_TITLE:"새로운 업무 요청",NEW_TASK_DESC_PLACEHOLDER:"여기에 상세 내용을 작성하세요...",DRAFT_PLACEHOLDER:"예: 이번 여름 프로모션 랜딩 페이지 기획안 작성해줘. 타겟은 20대 대학생이고, 밝고 경쾌한 느낌이어야 해. (A사 레퍼런스 참고)"},wb=[{id:vt.REQUESTED,label:"요청됨",dotColor:"bg-gray-400"},{id:vt.WIP,label:"진행 중",dotColor:"bg-blue-500"},{id:vt.CHECKED,label:"검토/승인",dotColor:"bg-purple-500"},{id:vt.DONE,label:"완료",dotColor:"bg-green-500"}];Xs.HIGH,vt.WIP,Xs.MEDIUM,vt.REQUESTED,Xs.HIGH,vt.CHECKED,Xs.LOW,vt.DONE;const WO={EXECUTION_PLAN_GUIDE:`
# 실행 계획 가이드

## 일반
1. 요구사항 분석 및 기획
2. 기술 설계 및 아키텍처 검토
3. 구현 및 개발
4. 테스트 및 검증
5. 배포 및 모니터링

## 기능
1. UI/UX 디자인 검토
2. 프론트엔드/백엔드 인터페이스 정의
3. 핵심 로직 구현
4. 단위 테스트 작성
5. 통합 테스트 수행

## 버그
1. 버그 재현 및 로그 분석
2. 원인 파악 및 디버깅
3. 핫픽스 개발
4. 회귀 테스트
5. 패치 배포
`,DOD_GUIDE:`
# 완료 조건(DoD) 가이드

## 일반
- 모든 기능 요구사항이 충족되었습니다.
- 코드 리뷰가 완료되고 승인되었습니다.
- CI/CD 파이프라인을 통과했습니다.

## 기능
- UI가 디자인 시안과 일치합니다.
- 크로스 브라우저 테스트를 통과했습니다.
- 모바일 반응형이 확인되었습니다.

## 버그
- 해당 버그가 더 이상 재현되지 않습니다.
- 기존 기능에 부작용이 없음을 확인했습니다(회귀 테스트).
`};class KO{constructor(){this.cache=new Map}async loadGuide(e){if(this.cache.has(e))return this.cache.get(e);const n=WO[e];return n?(this.cache.set(e,n),n):(console.warn(`⚠️ [KnowledgeBase] Guide not found: ${e}`),"")}extractSection(e,n){const r=new RegExp(`## ${n}[\\s\\S]*?(?=##|$)`,"i"),s=e.match(r);return s?s[0]:""}async getRelevantContext(e,n){const r=await this.loadGuide(e);if(!r)return"";const s={버그:["버그","일반"],기능:["기능","일반"],디자인:["기능","일반"],default:["일반"]},o=(s[n]||s.default).map(l=>this.extractSection(r,l)).filter(l=>l.length>0);return o.length>0?o.join(`

---

`):r}}const Y_=new KO,rI={PM_EXPERT:`당신은 글로벌 IT 기업에서 10년 이상 경력을 가진 수석 프로젝트 매니저입니다.

[당신의 역할]
- 업무를 명확하고 실행 가능한 단위로 분해하는 전문가
- 팀원들이 즉시 이해하고 실행할 수 있는 가이드를 제공
- 산업 표준과 베스트 프랙티스를 항상 준수

[당신의 커뮤니케이션 스타일]
- 구체적이고 측정 가능한 언어 사용
- 모호함을 배제하고 명확성을 최우선으로
- 전문적이면서도 이해하기 쉬운 톤

[당신의 작업 원칙]
- 품질과 완성도를 중시
- 실행 가능성과 현실성 고려
- 팀의 역량과 리소스를 감안한 제안`,QA_EXPERT:`당신은 엔터프라이즈급 소프트웨어 품질 보증을 담당하는 QA 리더입니다.

[당신의 역할]
- 업무의 완료 조건(Definition of Done)을 명확히 정의
- 품질 기준과 검증 방법을 구체화
- 릴리스 승인의 최종 게이트키퍼

[당신의 작업 원칙]
- 모든 조건은 측정 가능하고 검증 가능해야 함
- 개발, 테스트, 문서화, 배포, 보안을 균형있게 고려
- 비즈니스 가치와 기술적 완성도를 모두 만족`,TECH_LEAD:`당신은 최신 기술 트렌드에 정통한 수석 엔지니어입니다.

[당신의 역할]
- 복잡한 기술 문제에 대한 솔루션 설계
- 아키텍처 의사결정 및 구현 가이드 제공
- 코드 품질과 유지보수성 확보

[당신의 작업 원칙]
- 실용적이고 확장 가능한 솔루션 선호
- 과도한 엔지니어링 지양, 적절한 복잡도 유지
- 팀의 기술 스택과 역량을 고려한 제안`,ASSISTANT:`당신은 업무를 돕는 친절하고 전문적인 AI 어시스턴트입니다.

[당신의 역할]
- 사용자의 질문에 정확하고 유용한 답변 제공
- 업무 컨텍스트를 이해하고 관련된 조언 제공
- 필요시 추가 질문으로 명확성 확보`},QO=[{task:{title:"사용자 대시보드 성능 개선",type:"기능",description:"현재 대시보드 로딩이 5초 이상 걸리는 문제를 해결하고 1초 이내로 개선"},output:[{title:"성능 병목 지점 분석 및 프로파일링"},{title:"불필요한 API 호출 제거 및 데이터 페칭 최적화"},{title:"컴포넌트 메모이제이션 및 가상화 적용"},{title:"번들 사이즈 분석 및 Code Splitting 구현"},{title:"성능 테스트 및 목표치 달성 검증"}],rationale:"성능 개선은 분석 → 최적화 → 검증 순서로 진행. 측정 가능한 목표(1초) 제시"},{task:{title:"로그인 페이지 인증 버그 수정",type:"버그",description:"특정 이메일 형식에서 로그인이 실패하는 이슈"},output:[{title:"버그 재현 및 영향 범위 확인"},{title:"인증 로직 코드 분석 및 원인 파악"},{title:"이메일 검증 로직 수정 및 로컬 테스트"},{title:"회귀 테스트 및 QA 검증"}],rationale:"버그 수정은 재현 → 원인 파악 → 수정 → 검증 흐름. 4단계로 간결하게"}],YO=[{task:{title:"결제 모듈 API 개발",type:"백엔드",description:"신용카드 및 계좌이체 결제 처리 API 구현"},output:["REST API 엔드포인트가 설계 명세에 따라 구현되었습니다","단위 테스트 및 통합 테스트가 작성되고 모두 통과했습니다","PCI-DSS 보안 요구사항을 충족합니다","API 문서가 Swagger로 작성되고 개발자 포털에 게시되었습니다","부하 테스트를 통해 초당 100건 이상 처리 가능함을 확인했습니다","에러 핸들링 및 트랜잭션 롤백이 적절히 구현되었습니다","PO 및 보안팀의 최종 승인을 받았습니다"],rationale:"결제 기능은 보안이 중요. PCI-DSS 및 부하 테스트 포함"}];class oc{constructor(){this.sections=[]}addSystemPrompt(e){return this.sections.push(`# 시스템 역할 (System Role)

${rI[e]}`),this}async addKnowledgeBase(e,n){const r=n?await Y_.getRelevantContext(e,n):await Y_.loadGuide(e);return r&&this.sections.push(`# 지식 베이스 (Knowledge Base)

${r}`),this}addFewShotExamples(e,n="execution"){if(e.length===0)return this;let r=`# 우수 사례 (Few-Shot Examples)

`;return r+=`다음은 고품질 결과물의 예시입니다. 이 패턴을 참고하여 응답하세요:

`,e.forEach((s,i)=>{r+=`## 예시 ${i+1}
`,r+=`**업무:** ${s.task.title}
`,r+=`**타입:** ${s.task.type}
`,s.task.description&&(r+=`**설명:** ${s.task.description}
`),r+=`
**결과:**
`,r+="```json\n",r+=JSON.stringify(s.output,null,2),r+="\n```\n",s.rationale&&(r+=`
**설명:** ${s.rationale}
`),r+=`
---

`}),this.sections.push(r),this}addConstraints(e){let n=`# 제약 조건 (Constraints)

`;return n+=`다음 규칙을 **반드시** 준수해야 합니다:

`,e.forEach((r,s)=>{n+=`${s+1}. ${r}
`}),this.sections.push(n),this}addUserRequest(e,n){let r=`# 사용자 요청 (User Request)

`;return r+=`${n}

`,r+=`## 업무 정보
`,r+=`- **제목:** ${e.title}
`,e.description&&(r+=`- **설명:** ${e.description}
`),e.product&&(r+=`- **제품:** ${e.product}
`),e.type&&(r+=`- **타입:** ${e.type}
`),e.priority&&(r+=`- **우선순위:** ${e.priority}
`),this.sections.push(r),this}addOutputFormat(e){return this.sections.push(`# 출력 형식 (Output Format)

${e}`),this}build(){return this.sections.join(`

`)}getSize(){const e=this.build();return{chars:e.length,estimatedTokens:Math.ceil(e.length/4)}}}async function XO(t){const e=new oc;return await e.addSystemPrompt("PM_EXPERT").addKnowledgeBase("EXECUTION_PLAN_GUIDE",t.type||"일반").addFewShotExamples(QO.filter(n=>!t.type||n.task.type===t.type).slice(0,2),"execution").addConstraints(["4-6개의 실행 가능한 단계로 분해해야 합니다","각 단계는 동사로 시작하는 구체적인 액션이어야 합니다","논리적 순서로 배열해야 합니다 (계획 → 설계 → 구현 → 검증 → 배포)","지식 베이스의 패턴을 참고하되, 업무의 특성을 반영해야 합니다","한국어로 작성해야 합니다"]).addUserRequest(t,"위 업무를 실행 가능한 단계로 분해해주세요.").addOutputFormat('다음 JSON 배열 형식으로 출력하세요:\n```json\n[{"title": "단계1"}, {"title": "단계2"}, ...]\n```'),e.build()}async function JO(t){const e=new oc;return await e.addSystemPrompt("QA_EXPERT").addKnowledgeBase("DOD_GUIDE",t.type||"일반").addFewShotExamples(YO.filter(n=>!t.type||n.task.type===t.type).slice(0,1),"dod").addConstraints(["**반드시 정확히 7개의 항목**으로 구성해야 합니다 (7개 미만이나 초과 절대 불가)",'각 항목은 "~되었습니다" 형태의 완료형 문장이어야 합니다',"개발, 테스트, 문서화, 배포, 보안, 성능, 승인 관점을 골고루 포함해야 합니다","측정 가능하고 검증 가능한 조건이어야 합니다","지식 베이스의 베스트 프랙티스를 참고해야 합니다","한국어로 작성해야 합니다"]).addUserRequest(t,"위 업무의 완료 조건(Definition of Done)을 생성해주세요.").addOutputFormat('다음 JSON 배열 형식으로 출력하세요:\n```json\n["조건1", "조건2", "조건3", "조건4", "조건5", "조건6", "조건7"]\n```'),e.build()}async function ZO(t){const e=new oc;return await e.addSystemPrompt("TECH_LEAD").addConstraints(["마크다운 형식으로 작성해야 합니다","코드 예시는 TypeScript/React를 사용해야 합니다","실용적이고 구현 가능한 솔루션을 제시해야 합니다","아키텍처 다이어그램이 필요한 경우 텍스트로 설명해야 합니다"]).addUserRequest(t,"위 업무를 구현하기 위한 기술적 솔루션 초안을 작성해주세요.").addOutputFormat(`마크다운 형식으로 다음 섹션을 포함하세요:
- 구현 접근 방식
- 주요 기술 스택
- 코드 예시
- 고려사항`),e.build()}async function eb(t){const e=new oc;return await e.addSystemPrompt("TECH_LEAD").addConstraints(["공식 문서나 신뢰할 수 있는 출처를 우선해야 합니다","실무에 바로 적용 가능한 자료를 추천해야 합니다","최신 기술 트렌드를 반영해야 합니다","정확히 3개의 자료를 추천해야 합니다"]).addUserRequest(t,"위 업무와 관련된 학습 자료를 추천해주세요.").addOutputFormat('다음 JSON 배열 형식으로 출력하세요:\n```json\n[{"title": "자료명", "url": "링크", "description": "추천 이유"}]\n```'),e.build()}function tb(t){return`${rI.ASSISTANT}

[현재 업무 컨텍스트]
제목: ${t.title}
설명: ${t.description||"(설명 없음)"}
타입: ${t.type||"일반"}
우선순위: ${t.priority||"MEDIUM"}

[지침]
- 위 업무와 관련된 질문에 정확하고 유용하게 답변하세요
- 필요시 업무 개선 제안을 제공하세요
- 친절하고 전문적인 톤을 유지하세요
- 한국어로 답변하세요`}function nb(t,e=6e3){const n=Math.ceil(t.length/4);if(n<=e)return t;console.warn(`⚠️ 프롬프트 크기 초과: ${n} tokens (최대: ${e})`);const r=t.split("# 지식 베이스");if(r.length>1){const s=r[1].split(`

# `)[0],i=s.substring(0,Math.floor(s.length*.6));return r[0]+`# 지식 베이스
`+i+`

# `+r[1].split(`

# `).slice(1).join(`

# `)}return t}var rb={};const sI=rb.VITE_GEMINI_API_KEY||"",iI=new GO(sI);async function Di(t,e=$n.MODEL_FAST,n){if(!sI)throw console.error("❌ Gemini API Key is missing. Please check .env file."),new Error("API Key가 설정되지 않았습니다.");try{const r=nb(t,8e3),s={chars:r.length,tokens:Math.ceil(r.length/4)};return console.log(`📊 [Prompt Size] ${s.chars} chars (~${s.tokens} tokens)`),(await(await iI.getGenerativeModel({model:e,generationConfig:{temperature:(n==null?void 0:n.temperature)??.7,maxOutputTokens:(n==null?void 0:n.maxTokens)??$n.MAX_TOKENS}}).generateContent(r)).response).text()}catch(r){throw console.error("❌ [Gemini API Error]",r),new Error(`AI 생성 실패: ${r.message||"알 수 없는 오류"}`)}}function ac(t){try{const e=t.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim();return JSON.parse(e)}catch(e){throw console.error("❌ [JSON Parse Error]",e),console.log("Raw response:",t),new Error("AI 응답을 JSON으로 파싱할 수 없습니다")}}function oI(t,e,n){if(!Array.isArray(t))return console.warn(`⚠️ [Type Error] Expected array, got ${typeof t}`),Array(e).fill(n);if(t.length===e)return t;if(console.warn(`⚠️ [Array Length Mismatch] Expected ${e}, got ${t.length}`),t.length<e)for(;t.length<e;)t.push(n);else t=t.slice(0,e);return t}async function Tb(t){const e=`
# 시스템 역할 (System Role)

당신은 IT 선도 기업의 수석 PM(Project Manager)입니다.

[당신의 역할]
- 거친 업무 아이디어를 전문적인 명세서로 변환하는 전문가
- 개발팀이 즉시 착수할 수 있는 명확한 문서 작성
- 다양한 스타일로 유연하게 대응

# 사용자 요청 (User Request)

사용자가 입력한 거친(Rough) 업무 아이디어를 분석하여, 개발팀이나 디자인팀이 즉시 착수할 수 있는 "전문적인 업무 명세서" 초안을 **3가지 스타일**로 제안하세요.

[입력 메시지]
"${t}"

# 제약 조건 (Constraints)

1. 반드시 3가지 스타일(표준, 상세, 간결)을 모두 제공해야 합니다
2. 각 스타일의 특성을 명확히 구분해야 합니다:
   - **표준(Standard)**: 균형잡힌 전문적 스타일 (2-3 문단)
   - **상세(Detailed)**: 배경, 요건, 기대효과까지 구체적으로 (4-5 문단)
   - **간결(Concise)**: 핵심만 빠르게 (1-2 문단)
3. 입력에서 추론 가능한 제품군, 업무 타입, 우선순위를 포함해야 합니다
4. 한국어로 작성해야 합니다

# 출력 형식 (Output Format)

다음 필드를 가진 JSON 배열을 출력하세요:

\`\`\`json
[
  {
    "title": "명확하고 전문적인 제목",
    "description": "스타일에 맞춘 상세 설명 (줄바꿈 포함 가능)",
    "priority": "HIGH | MEDIUM | LOW",
    "product": "제품군 추론",
    "type": "기능 | 버그 | UX | 디자인 | 인프라 등",
    "styleTag": "표준 | 상세 | 간결"
  }
]
\`\`\`
  `,n=await Di(e,$n.MODEL_SMART);return ac(n)}async function sb(t){const e=await XO(t),n=await Di(e,$n.MODEL_SMART,{temperature:.7,maxTokens:1e3}),r=ac(n);return(r.length<4||r.length>6)&&console.warn(`⚠️ [Step Count] Expected 4-6, got ${r.length}`),r.map((s,i)=>({id:`ep-${Date.now()}-${i}`,title:s.title||s,completed:!1}))}async function ib(t){const e=await JO(t),n=await Di(e,$n.MODEL_SMART,{temperature:.5,maxTokens:1e3});let r=ac(n);const s=["기능 요구사항을 충족합니다","단위 테스트 및 통합 테스트를 통과했습니다","코드 리뷰가 완료되고 승인되었습니다","관련 문서가 업데이트되었습니다","스테이징 환경에서 검증되었습니다","보안 스캔을 통과했습니다","이해관계자의 최종 승인을 받았습니다"];return r=oI(r,7,s[r.length%s.length]),console.log(`✅ [DoD Generated] ${r.length} criteria`),r}async function ob(t){const e=await ZO(t),n=await Di(e,$n.MODEL_SMART,{temperature:.8,maxTokens:2e3});return console.log(`✅ [Solution Draft] ${n.length} chars`),n}async function ab(t){const e=await eb(t),n=await Di(e,$n.MODEL_FAST,{temperature:.6,maxTokens:1e3}),r=ac(n),i=oI(r,3,{title:"관련 기술 문서",url:"https://developer.mozilla.org",description:"기본 웹 기술 참고 자료"});return console.log(`✅ [Resources] ${i.length} recommendations`),i}async function Ib(t,e,n){const r=tb(n),o=await(await iI.getGenerativeModel({model:$n.MODEL_FAST}).startChat({history:[{role:"user",parts:[{text:r}]},{role:"model",parts:[{text:"네, 해당 업무에 대해 도와드리겠습니다. 무엇이 궁금하신가요?"}]},...t]}).sendMessage(e)).response;return console.log(`💬 [Chat] User: "${e.substring(0,50)}..." → Response: ${o.text().length} chars`),o.text()}async function Sb(t,e){const n=`
# 시스템 역할 (System Role)

당신은 데이터 기반으로 팀의 성과를 분석하는 AI 전문가입니다.

[당신의 역할]
- 프로젝트 데이터를 분석하여 핵심 인사이트 도출
- 팀 리더가 실행 가능한 조언 제공
- 긍정적이면서도 현실적인 피드백

# 데이터 분석 (Data Analysis)

다음 프로젝트 데이터를 분석하여, 팀 리더에게 제공할 **주간 핵심 인사이트**를 2~3문장으로 요약해 주세요.

## 팀 통계
- 전체 업무 수: ${e.total}
- 완료율: ${e.completionRate}%
- 진행 중 업무: ${e.inProgress}
- 마감 기한 초과: ${e.overdue}
- 업무가 가장 많은 팀원: ${e.busiestMember}

# 제약 조건 (Constraints)

1. 현재 팀의 **긍정적인 흐름**을 먼저 언급하세요 (예: 완료율이 높음, 진행이 원활함)
2. **주의가 필요한 부분**이나 **리스크**(예: 특정 인원 과부하, 마감 초과)를 부드럽게 지적하세요
3. 구체적인 **액션 아이템** 하나를 제안하세요
4. 전문적이면서도 격려하는 톤으로 작성하세요
5. 답변은 JSON이 아닌 **일반 텍스트**로 제공하세요
6. 2-3문장으로 간결하게 작성하세요

# 출력 형식 (Output Format)

일반 텍스트로 2-3문장의 인사이트를 제공하세요.
  `,r=await Di(n,$n.MODEL_FAST,{temperature:.7,maxTokens:500});return console.log(`📊 [Insights] Generated: ${r.length} chars`),r.trim()}const io=({title:t,subtitle:e,user:n,onLogout:r,onNavigateProfile:s,children:i})=>{var o;return C.jsxs("header",{className:"h-20 flex items-center justify-between px-8 z-10 shrink-0 backdrop-blur-sm bg-white/50 sticky top-0",children:[C.jsxs("div",{children:[C.jsx("h1",{className:"text-2xl font-bold text-gray-900 tracking-tight",children:t}),C.jsx("p",{className:"text-sm text-gray-500 mt-1",children:e})]}),C.jsxs("div",{className:"flex items-center gap-4",children:[i,C.jsxs("div",{className:"flex items-center gap-3 pl-4 border-l border-gray-200",children:[C.jsxs("button",{onClick:s,className:"group flex items-center gap-2 outline-none",children:[n!=null&&n.photoURL?C.jsx("img",{src:n.photoURL,alt:n.displayName||"User",className:"w-10 h-10 rounded-full border border-gray-200 group-hover:ring-2 ring-gray-200 transition-all object-cover"}):C.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors",children:((o=n==null?void 0:n.email)==null?void 0:o.charAt(0).toUpperCase())||"U"}),C.jsxs("div",{className:"text-left hidden md:block",children:[C.jsx("p",{className:"text-sm font-bold text-gray-700 leading-none",children:(n==null?void 0:n.displayName)||"User"}),C.jsx("p",{className:"text-[10px] text-gray-400 mt-1",children:"프로필 관리"})]})]}),C.jsx("button",{onClick:r,className:"text-gray-400 hover:text-red-600 transition-colors p-2 ml-2",title:"로그아웃",children:C.jsx(T1,{className:"w-5 h-5"})})]})]})]})},lb=X.lazy(()=>Fr(()=>import("./Kanban-CNOXtH_s.js"),__vite__mapDeps([0,1,2,3,4])).then(t=>({default:t.KanbanBoard}))),ub=X.lazy(()=>Fr(()=>import("./AIModal-DXjvDM6U.js"),__vite__mapDeps([5,4,6,7,2,8,3])).then(t=>({default:t.AIModal}))),cb=X.lazy(()=>Fr(()=>import("./GeminiPage-KWXAf6Di.js"),__vite__mapDeps([9,10,3,2,6])).then(t=>({default:t.GeminiPage}))),hb=X.lazy(()=>Fr(()=>import("./SettingsPage-C33b8H0E.js"),__vite__mapDeps([11,8,10])).then(t=>({default:t.SettingsPage}))),db=X.lazy(()=>Fr(()=>import("./Insights-BuCR-3Dk.js"),__vite__mapDeps([])).then(t=>({default:t.Insights}))),fb=X.lazy(()=>Fr(()=>import("./ArchivePage-CKBMyd5O.js"),__vite__mapDeps([12,1,2,3,7])).then(t=>({default:t.ArchivePage}))),pb=X.lazy(()=>Fr(()=>import("./ProfilePage-BuYorWZZ.js"),__vite__mapDeps([13,4,2])).then(t=>({default:t.ProfilePage}))),mb=X.lazy(()=>Fr(()=>import("./GoogleProfileModal-XEXAp73R.js"),__vite__mapDeps([])).then(t=>({default:t.GoogleProfileModal})));function gb(){const[t,e]=X.useState("BOARD"),[n,r]=X.useState([]),[s,i]=X.useState(null),[o,l]=X.useState(!1),[u,c]=X.useState(null),[f,p]=X.useState(null),[m,T]=X.useState(!0),[P,x]=X.useState(!1),[b,A]=X.useState(!1);X.useEffect(()=>{const V=Vx(Vt,async U=>{p(U),U?await _(U.uid):(x(!1),T(!1))});return()=>V()},[]);const _=async V=>{A(!0);try{const U=await Ar.getUserProfile(V);U&&U.name?(x(!0),D()):x(!1)}catch(U){console.error("Profile check failed",U),x(!1)}finally{A(!1),T(!1)}},S=()=>{x(!0),D()},D=async()=>{try{const V=await gt.getAllTasks();r(V)}catch(V){console.error("Failed to load tasks",V)}},j=async()=>{try{await Ar.logout()}catch(V){console.error("Logout failed",V)}},B=X.useCallback(V=>{i(V),c(null),l(!0)},[]),v=async V=>{if(u)c(V);else{r(U=>U.map(z=>z.id===V.id?V:z)),i(V);try{await gt.updateTask(V)}catch(U){console.error("Failed to update task",U),alert("수정사항 저장에 실패했습니다."),f&&D()}}},y=async(V,U)=>{r(z=>z.map(W=>W.id===V?{...W,status:U}:W));try{await gt.updateStatus(V,U)}catch(z){console.error("Failed to update status",z),alert("상태 변경에 실패했습니다."),f&&D()}},E=async V=>{if(!confirm("이 업무를 보관함으로 이동하시겠습니까?"))return;const U=n.find(W=>W.id===V);if(!U)return;const z={...U,archived:!0,originalStatus:U.status,status:vt.ARCHIVED};r(W=>W.map(te=>te.id===V?z:te));try{await gt.updateTask(z)}catch(W){console.error("Failed to archive task",W),alert("보관함 이동 실패"),D()}},I=async V=>{if(!confirm(`완료된 ${V.length}개의 업무를 모두 보관함으로 이동하시겠습니까?`))return;const U=V.map(z=>({...z,archived:!0,originalStatus:z.status,status:vt.ARCHIVED}));r(z=>z.map(W=>U.find(mt=>mt.id===W.id)||W));try{await Promise.all(U.map(z=>gt.updateTask(z)))}catch(z){console.error("Failed to bulk archive",z),alert("일괄 보관 실패"),D()}},R=async V=>{if(!confirm("이 업무를 다시 보드로 복구하시겠습니까?"))return;const U=n.find(W=>W.id===V);if(!U)return;const z={...U,archived:!1,inTrash:!1,status:U.originalStatus||vt.DONE};r(W=>W.map(te=>te.id===V?z:te));try{await gt.updateTask(z)}catch(W){console.error("Failed to restore task",W),alert("복구 실패"),D()}},k=async V=>{const U=n.find(W=>W.id===V);if(!U)return;const z={...U,inTrash:!0,originalStatus:U.status,status:vt.TRASH};r(W=>W.map(te=>te.id===V?z:te)),(s==null?void 0:s.id)===V&&(l(!1),i(null));try{await gt.updateTask(z)}catch(W){console.error("Failed to move to trash",W),alert("휴지통 이동 실패"),D()}},w=async V=>{r(U=>U.filter(z=>z.id!==V));try{await gt.deleteTask(V)}catch(U){console.error("Failed to delete task",U),alert("영구 삭제 실패"),D()}},Le=async()=>{if(!confirm("휴지통을 비우시겠습니까? 이 작업은 되돌릴 수 없습니다."))return;const V=n.filter(U=>U.inTrash);r(U=>U.filter(z=>!z.inTrash));try{await Promise.all(V.map(U=>gt.deleteTask(U.id)))}catch(U){console.error("Failed to empty trash",U),alert("휴지통 비우기 실패"),D()}},qt=async()=>{if(!f)return;let V={name:f.displayName||"User",avatar:f.photoURL||void 0};const U={id:`t${Date.now()}`,title:"새로운 업무 요청",description:"",product:"일반",type:"기타",priority:Xs.MEDIUM,status:vt.REQUESTED,dueDate:new Date().toISOString(),ownerUid:f.uid,ownerEmail:f.email||void 0,assigneeId:f.uid,assigneeName:V.name,assigneeAvatar:V.avatar,requesterId:f.uid,subtasks:[],createdAt:Date.now(),updatedAt:Date.now(),userId:f.uid,archived:!1,inTrash:!1};c(U),i(null),l(!0)},$r=async V=>{try{const U={...V,aiStatus:"GENERATING"},z=await gt.createTask(U);r(W=>[...W,z]),l(!1),c(null),(async()=>{try{let W={lastUpdated:Date.now(),executionPlan:[],acceptanceCriteria:[],solutionDraft:"",learningResources:[]};const te=async oe=>{W={...W,...oe};const ot={...z,aiAnalysis:W};await gt.updateTask(ot),r(at=>at.map(Gt=>Gt.id===z.id?ot:Gt))};try{const oe=await sb(z);await te({executionPlan:oe.map((ot,at)=>({id:`ep-${Date.now()}-${at}`,title:ot.title,completed:!1}))})}catch(oe){console.error("Strategy Gen Failed",oe)}try{const oe=await ib(z);await te({acceptanceCriteria:oe})}catch(oe){console.error("DoD Gen Failed",oe)}try{const oe=await ob(z);await te({solutionDraft:oe})}catch(oe){console.error("Solution Gen Failed",oe)}try{const oe=await ab(z);await te({learningResources:oe})}catch(oe){console.error("Resources Gen Failed",oe)}const mt={...z,aiAnalysis:W,aiStatus:"COMPLETED"};await gt.updateTask(mt),r(oe=>oe.map(ot=>ot.id===z.id?mt:ot))}catch(W){console.error("Background AI Analysis Failed",W);const te={...z,aiStatus:"FAILED"};await gt.updateTask(te),r(mt=>mt.map(oe=>oe.id===z.id?te:oe))}})()}catch(U){console.error("Failed to create task",U),alert(`저장 실패: ${U.message}`)}},Hr=()=>{switch(t){case"INSIGHT":return C.jsxs("div",{className:"flex flex-col h-full",children:[C.jsx(io,{title:"팀 인사이트",subtitle:"데이터 기반의 의사결정을 위한 분석 대시보드입니다.",user:f,onLogout:j,onNavigateProfile:()=>e("PROFILE")}),C.jsx(X.Suspense,{fallback:C.jsx("div",{className:"p-8",children:"Loading Insights..."}),children:C.jsx(db,{tasks:n})})]});case"ARCHIVE":return C.jsx(X.Suspense,{fallback:C.jsx("div",{className:"p-8",children:"Loading Archive..."}),children:C.jsx(fb,{tasks:n,onRestoreTask:R,onDeleteTask:w,onEmptyTrash:Le,onTaskClick:B,currentUser:f})});case"PROFILE":return C.jsxs("div",{className:"flex flex-col h-full",children:[C.jsx(io,{title:"프로필 관리",subtitle:"개인 정보 및 계정 설정을 관리하세요.",user:f,onLogout:j,onNavigateProfile:()=>e("PROFILE")}),C.jsx(X.Suspense,{fallback:C.jsx("div",{className:"p-8",children:"Loading Profile..."}),children:C.jsx(pb,{currentUser:f})})]});case"BOARD":return C.jsxs(C.Fragment,{children:[C.jsx(io,{title:"프로젝트 보드",subtitle:"팀의 업무 흐름을 AI와 함께 최적화하세요.",user:f,onLogout:j,onNavigateProfile:()=>e("PROFILE"),children:C.jsxs("button",{onClick:qt,className:"flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg active:scale-95",children:[C.jsx(I1,{className:"w-4 h-4"}),C.jsx("span",{children:"새 요청 만들기"})]})}),C.jsx("div",{className:"flex-1 overflow-x-auto overflow-y-hidden p-8 pt-4",children:C.jsx(X.Suspense,{fallback:C.jsx("div",{className:"p-8",children:"Loading Board..."}),children:C.jsx(lb,{tasks:n,onTaskClick:B,onStatusChange:y,onDeleteTask:k,onArchiveTask:E,onArchiveAll:I,currentUser:f})})})]});case"GEMINI":return C.jsxs("div",{className:"flex flex-col h-full",children:[C.jsx(io,{title:"Gemini Pro",subtitle:"AI와 대화하며 업무 효율을 높이세요.",user:f,onLogout:j,onNavigateProfile:()=>e("PROFILE")}),C.jsx(X.Suspense,{fallback:C.jsx("div",{className:"p-8",children:"Loading Gemini..."}),children:C.jsx(cb,{})})]});case"SETTINGS":return C.jsxs("div",{className:"flex flex-col h-full",children:[C.jsx(io,{title:"환경 설정",subtitle:"앱의 기본 설정을 변경합니다.",user:f,onLogout:j,onNavigateProfile:()=>e("PROFILE")}),C.jsx(X.Suspense,{fallback:C.jsx("div",{className:"p-8",children:"Loading Settings..."}),children:C.jsx(hb,{})})]});default:return null}};return m||b?C.jsx("div",{className:"flex h-screen w-screen items-center justify-center bg-gray-50",children:C.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"})}):f?P?C.jsxs(R1,{currentView:t,onNavigate:e,children:[Hr(),(s||u)&&C.jsx(X.Suspense,{fallback:null,children:C.jsx(ub,{task:s||u,isOpen:o,onClose:()=>{l(!1),c(null)},onUpdateTask:v,onCreateTask:u?$r:void 0,onDeleteTask:k})})]}):C.jsx(X.Suspense,{fallback:C.jsx("div",{children:"Loading..."}),children:C.jsx(mb,{user:f,onClose:S})}):C.jsx(fO,{})}const aI=document.getElementById("root");if(!aI)throw new Error("Could not find root element to mount to");const yb=gh.createRoot(aI);yb.render(C.jsx(av.StrictMode,{children:C.jsx(gb,{})}));export{p1 as A,y1 as B,wb as K,v1 as L,Xs as P,A1 as S,vt as T,Eb as U,hw as X,E1 as a,Ib as b,Rt as c,Tb as d,ib as e,ob as f,sb as g,ab as h,vb as i,C as j,S1 as k,Sb as l,Ar as m,w1 as n,X as r,gt as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Kanban-CNOXtH_s.js","assets/TaskCard-hpMuFqCR.js","assets/trash-2-D4YKPC91.js","assets/calendar-DYNEwCHX.js","assets/user-C8BhFaIl.js","assets/AIModal-DXjvDM6U.js","assets/send-CsUYsvxc.js","assets/rotate-ccw-Cq4ufDDm.js","assets/code-2-CO-YXxR7.js","assets/GeminiPage-KWXAf6Di.js","assets/chevron-down-BzVFte0D.js","assets/SettingsPage-C33b8H0E.js","assets/ArchivePage-CKBMyd5O.js","assets/ProfilePage-BuYorWZZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}