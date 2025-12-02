(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function mP(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var pE={exports:{}},Vc={},mE={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sl=Symbol.for("react.element"),gP=Symbol.for("react.portal"),yP=Symbol.for("react.fragment"),_P=Symbol.for("react.strict_mode"),vP=Symbol.for("react.profiler"),wP=Symbol.for("react.provider"),EP=Symbol.for("react.context"),TP=Symbol.for("react.forward_ref"),IP=Symbol.for("react.suspense"),SP=Symbol.for("react.memo"),AP=Symbol.for("react.lazy"),Qy=Symbol.iterator;function CP(t){return t===null||typeof t!="object"?null:(t=Qy&&t[Qy]||t["@@iterator"],typeof t=="function"?t:null)}var gE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yE=Object.assign,_E={};function ao(t,e,n){this.props=t,this.context=e,this.refs=_E,this.updater=n||gE}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vE(){}vE.prototype=ao.prototype;function Dp(t,e,n){this.props=t,this.context=e,this.refs=_E,this.updater=n||gE}var bp=Dp.prototype=new vE;bp.constructor=Dp;yE(bp,ao.prototype);bp.isPureReactComponent=!0;var Yy=Array.isArray,wE=Object.prototype.hasOwnProperty,Op={current:null},EE={key:!0,ref:!0,__self:!0,__source:!0};function TE(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)wE.call(e,r)&&!EE.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:sl,type:t,key:i,ref:o,props:s,_owner:Op.current}}function PP(t,e){return{$$typeof:sl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vp(t){return typeof t=="object"&&t!==null&&t.$$typeof===sl}function RP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xy=/\/+/g;function Xh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?RP(""+t.key):e.toString(36)}function fu(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case sl:case gP:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Xh(o,0):r,Yy(s)?(n="",t!=null&&(n=t.replace(Xy,"$&/")+"/"),fu(s,e,n,"",function(c){return c})):s!=null&&(Vp(s)&&(s=PP(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Xy,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Yy(t))for(var a=0;a<t.length;a++){i=t[a];var u=r+Xh(i,a);o+=fu(i,e,n,u,s)}else if(u=CP(t),typeof u=="function")for(t=u.call(t),a=0;!(i=t.next()).done;)i=i.value,u=r+Xh(i,a++),o+=fu(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ul(t,e,n){if(t==null)return t;var r=[],s=0;return fu(t,r,"","",function(i){return e.call(n,i,s++)}),r}function xP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ct={current:null},pu={transition:null},kP={ReactCurrentDispatcher:Ct,ReactCurrentBatchConfig:pu,ReactCurrentOwner:Op};function IE(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Ul,forEach:function(t,e,n){Ul(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ul(t,function(){e++}),e},toArray:function(t){return Ul(t,function(e){return e})||[]},only:function(t){if(!Vp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=ao;ie.Fragment=yP;ie.Profiler=vP;ie.PureComponent=Dp;ie.StrictMode=_P;ie.Suspense=IP;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kP;ie.act=IE;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=yE({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Op.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)wE.call(e,u)&&!EE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:sl,type:t.type,key:s,ref:i,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:EP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wP,_context:t},t.Consumer=t};ie.createElement=TE;ie.createFactory=function(t){var e=TE.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:TP,render:t}};ie.isValidElement=Vp;ie.lazy=function(t){return{$$typeof:AP,_payload:{_status:-1,_result:t},_init:xP}};ie.memo=function(t,e){return{$$typeof:SP,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=pu.transition;pu.transition={};try{t()}finally{pu.transition=e}};ie.unstable_act=IE;ie.useCallback=function(t,e){return Ct.current.useCallback(t,e)};ie.useContext=function(t){return Ct.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Ct.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Ct.current.useEffect(t,e)};ie.useId=function(){return Ct.current.useId()};ie.useImperativeHandle=function(t,e,n){return Ct.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Ct.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Ct.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Ct.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Ct.current.useReducer(t,e,n)};ie.useRef=function(t){return Ct.current.useRef(t)};ie.useState=function(t){return Ct.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Ct.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Ct.current.useTransition()};ie.version="18.3.1";mE.exports=ie;var $=mE.exports;const Lc=mP($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NP=$,DP=Symbol.for("react.element"),bP=Symbol.for("react.fragment"),OP=Object.prototype.hasOwnProperty,VP=NP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LP={key:!0,ref:!0,__self:!0,__source:!0};function SE(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)OP.call(e,r)&&!LP.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:DP,type:t,key:i,ref:o,props:s,_owner:VP.current}}Vc.Fragment=bP;Vc.jsx=SE;Vc.jsxs=SE;pE.exports=Vc;var R=pE.exports,Yd={},AE={exports:{}},Wt={},CE={exports:{}},PE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,Q){var j=H.length;H.push(Q);e:for(;0<j;){var U=j-1>>>1,G=H[U];if(0<s(G,Q))H[U]=Q,H[j]=G,j=U;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var Q=H[0],j=H.pop();if(j!==Q){H[0]=j;e:for(var U=0,G=H.length,te=G>>>1;U<te;){var he=2*(U+1)-1,et=H[he],re=he+1,Ge=H[re];if(0>s(et,j))re<G&&0>s(Ge,et)?(H[U]=Ge,H[re]=j,U=re):(H[U]=et,H[he]=j,U=he);else if(re<G&&0>s(Ge,j))H[U]=Ge,H[re]=j,U=re;else break e}}return Q}function s(H,Q){var j=H.sortIndex-Q.sortIndex;return j!==0?j:H.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,p=3,g=!1,T=!1,A=!1,N=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(H){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=H)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function k(H){if(A=!1,w(H),!T)if(n(u)!==null)T=!0,_e(V);else{var Q=n(c);Q!==null&&at(k,Q.startTime-H)}}function V(H,Q){T=!1,A&&(A=!1,I(y),y=-1),g=!0;var j=p;try{for(w(Q),f=n(u);f!==null&&(!(f.expirationTime>Q)||H&&!x());){var U=f.callback;if(typeof U=="function"){f.callback=null,p=f.priorityLevel;var G=U(f.expirationTime<=Q);Q=t.unstable_now(),typeof G=="function"?f.callback=G:f===n(u)&&r(u),w(Q)}else r(u);f=n(u)}if(f!==null)var te=!0;else{var he=n(c);he!==null&&at(k,he.startTime-Q),te=!1}return te}finally{f=null,p=j,g=!1}}var F=!1,E=null,y=-1,S=5,P=-1;function x(){return!(t.unstable_now()-P<S)}function D(){if(E!==null){var H=t.unstable_now();P=H;var Q=!0;try{Q=E(!0,H)}finally{Q?C():(F=!1,E=null)}}else F=!1}var C;if(typeof v=="function")C=function(){v(D)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,He=ue.port2;ue.port1.onmessage=D,C=function(){He.postMessage(null)}}else C=function(){N(D,0)};function _e(H){E=H,F||(F=!0,C())}function at(H,Q){y=N(function(){H(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){T||g||(T=!0,_e(V))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(H){switch(p){case 1:case 2:case 3:var Q=3;break;default:Q=p}var j=p;p=Q;try{return H()}finally{p=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,Q){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var j=p;p=H;try{return Q()}finally{p=j}},t.unstable_scheduleCallback=function(H,Q,j){var U=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?U+j:U):j=U,H){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=j+G,H={id:h++,callback:Q,priorityLevel:H,startTime:j,expirationTime:G,sortIndex:-1},j>U?(H.sortIndex=j,e(c,H),n(u)===null&&H===n(c)&&(A?(I(y),y=-1):A=!0,at(k,j-U))):(H.sortIndex=G,e(u,H),T||g||(T=!0,_e(V))),H},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(H){var Q=p;return function(){var j=p;p=Q;try{return H.apply(this,arguments)}finally{p=j}}}})(PE);CE.exports=PE;var MP=CE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UP=$,Gt=MP;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var RE=new Set,Pa={};function Zs(t,e){qi(t,e),qi(t+"Capture",e)}function qi(t,e){for(Pa[t]=e,t=0;t<e.length;t++)RE.add(e[t])}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xd=Object.prototype.hasOwnProperty,FP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jy={},Zy={};function jP(t){return Xd.call(Zy,t)?!0:Xd.call(Jy,t)?!1:FP.test(t)?Zy[t]=!0:(Jy[t]=!0,!1)}function BP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $P(t,e,n,r){if(e===null||typeof e>"u"||BP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new Pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lp=/[\-:]([a-z])/g;function Mp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lp,Mp);it[e]=new Pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lp,Mp);it[e]=new Pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lp,Mp);it[e]=new Pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Up(t,e,n,r){var s=it.hasOwnProperty(e)?it[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($P(e,n,s,r)&&(n=null),r||s===null?jP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var hr=UP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fl=Symbol.for("react.element"),_i=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),Fp=Symbol.for("react.strict_mode"),Jd=Symbol.for("react.profiler"),xE=Symbol.for("react.provider"),kE=Symbol.for("react.context"),jp=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),ef=Symbol.for("react.suspense_list"),Bp=Symbol.for("react.memo"),Ir=Symbol.for("react.lazy"),NE=Symbol.for("react.offscreen"),e_=Symbol.iterator;function Vo(t){return t===null||typeof t!="object"?null:(t=e_&&t[e_]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,Jh;function Qo(t){if(Jh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jh=e&&e[1]||""}return`
`+Jh+t}var Zh=!1;function ed(t,e){if(!t||Zh)return"";Zh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Zh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qo(t):""}function zP(t){switch(t.tag){case 5:return Qo(t.type);case 16:return Qo("Lazy");case 13:return Qo("Suspense");case 19:return Qo("SuspenseList");case 0:case 2:case 15:return t=ed(t.type,!1),t;case 11:return t=ed(t.type.render,!1),t;case 1:return t=ed(t.type,!0),t;default:return""}}function tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vi:return"Fragment";case _i:return"Portal";case Jd:return"Profiler";case Fp:return"StrictMode";case Zd:return"Suspense";case ef:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kE:return(t.displayName||"Context")+".Consumer";case xE:return(t._context.displayName||"Context")+".Provider";case jp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bp:return e=t.displayName||null,e!==null?e:tf(t.type)||"Memo";case Ir:e=t._payload,t=t._init;try{return tf(t(e))}catch{}}return null}function HP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tf(e);case 8:return e===Fp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function DE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function GP(t){var e=DE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jl(t){t._valueTracker||(t._valueTracker=GP(t))}function bE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=DE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Uu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nf(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function t_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function OE(t,e){e=e.checked,e!=null&&Up(t,"checked",e,!1)}function rf(t,e){OE(t,e);var n=Xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sf(t,e.type,n):e.hasOwnProperty("defaultValue")&&sf(t,e.type,Xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function n_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sf(t,e,n){(e!=="number"||Uu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yo=Array.isArray;function Vi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function r_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Yo(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xr(n)}}function VE(t,e){var n=Xr(e.value),r=Xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function s_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function LE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function af(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?LE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Bl,ME=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Bl=Bl||document.createElement("div"),Bl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Bl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qP=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){qP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function UE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function FE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=UE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var WP=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lf(t,e){if(e){if(WP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function uf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=null;function $p(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hf=null,Li=null,Mi=null;function i_(t){if(t=al(t)){if(typeof hf!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Bc(e),hf(t.stateNode,t.type,e))}}function jE(t){Li?Mi?Mi.push(t):Mi=[t]:Li=t}function BE(){if(Li){var t=Li,e=Mi;if(Mi=Li=null,i_(t),e)for(t=0;t<e.length;t++)i_(e[t])}}function $E(t,e){return t(e)}function zE(){}var td=!1;function HE(t,e,n){if(td)return t(e,n);td=!0;try{return $E(t,e,n)}finally{td=!1,(Li!==null||Mi!==null)&&(zE(),BE())}}function xa(t,e){var n=t.stateNode;if(n===null)return null;var r=Bc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var df=!1;if(nr)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){df=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{df=!1}function KP(t,e,n,r,s,i,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var aa=!1,Fu=null,ju=!1,ff=null,QP={onError:function(t){aa=!0,Fu=t}};function YP(t,e,n,r,s,i,o,a,u){aa=!1,Fu=null,KP.apply(QP,arguments)}function XP(t,e,n,r,s,i,o,a,u){if(YP.apply(this,arguments),aa){if(aa){var c=Fu;aa=!1,Fu=null}else throw Error(B(198));ju||(ju=!0,ff=c)}}function ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function GE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function o_(t){if(ei(t)!==t)throw Error(B(188))}function JP(t){var e=t.alternate;if(!e){if(e=ei(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return o_(s),t;if(i===r)return o_(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function qE(t){return t=JP(t),t!==null?WE(t):null}function WE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=WE(t);if(e!==null)return e;t=t.sibling}return null}var KE=Gt.unstable_scheduleCallback,a_=Gt.unstable_cancelCallback,ZP=Gt.unstable_shouldYield,eR=Gt.unstable_requestPaint,Le=Gt.unstable_now,tR=Gt.unstable_getCurrentPriorityLevel,zp=Gt.unstable_ImmediatePriority,QE=Gt.unstable_UserBlockingPriority,Bu=Gt.unstable_NormalPriority,nR=Gt.unstable_LowPriority,YE=Gt.unstable_IdlePriority,Mc=null,Pn=null;function rR(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Mc,t,void 0,(t.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:oR,sR=Math.log,iR=Math.LN2;function oR(t){return t>>>=0,t===0?32:31-(sR(t)/iR|0)|0}var $l=64,zl=4194304;function Xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $u(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=Xo(a):(i&=o,i!==0&&(r=Xo(i)))}else o=n&~s,o!==0?r=Xo(o):i!==0&&(r=Xo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dn(e),s=1<<n,r|=t[n],e&=~s;return r}function aR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-dn(i),a=1<<o,u=s[o];u===-1?(!(a&n)||a&r)&&(s[o]=aR(a,e)):u<=e&&(t.expiredLanes|=a),i&=~a}}function pf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function XE(){var t=$l;return $l<<=1,!($l&4194240)&&($l=64),t}function nd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function il(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dn(e),t[e]=n}function uR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-dn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Hp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var pe=0;function JE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ZE,Gp,eT,tT,nT,mf=!1,Hl=[],Lr=null,Mr=null,Ur=null,ka=new Map,Na=new Map,Pr=[],cR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function l_(t,e){switch(t){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(e.pointerId)}}function Mo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=al(e),e!==null&&Gp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function hR(t,e,n,r,s){switch(e){case"focusin":return Lr=Mo(Lr,t,e,n,r,s),!0;case"dragenter":return Mr=Mo(Mr,t,e,n,r,s),!0;case"mouseover":return Ur=Mo(Ur,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ka.set(i,Mo(ka.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Na.set(i,Mo(Na.get(i)||null,t,e,n,r,s)),!0}return!1}function rT(t){var e=Ps(t.target);if(e!==null){var n=ei(e);if(n!==null){if(e=n.tag,e===13){if(e=GE(n),e!==null){t.blockedOn=e,nT(t.priority,function(){eT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);cf=r,n.target.dispatchEvent(r),cf=null}else return e=al(n),e!==null&&Gp(e),t.blockedOn=n,!1;e.shift()}return!0}function u_(t,e,n){mu(t)&&n.delete(e)}function dR(){mf=!1,Lr!==null&&mu(Lr)&&(Lr=null),Mr!==null&&mu(Mr)&&(Mr=null),Ur!==null&&mu(Ur)&&(Ur=null),ka.forEach(u_),Na.forEach(u_)}function Uo(t,e){t.blockedOn===e&&(t.blockedOn=null,mf||(mf=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,dR)))}function Da(t){function e(s){return Uo(s,t)}if(0<Hl.length){Uo(Hl[0],t);for(var n=1;n<Hl.length;n++){var r=Hl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Lr!==null&&Uo(Lr,t),Mr!==null&&Uo(Mr,t),Ur!==null&&Uo(Ur,t),ka.forEach(e),Na.forEach(e),n=0;n<Pr.length;n++)r=Pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Pr.length&&(n=Pr[0],n.blockedOn===null);)rT(n),n.blockedOn===null&&Pr.shift()}var Ui=hr.ReactCurrentBatchConfig,zu=!0;function fR(t,e,n,r){var s=pe,i=Ui.transition;Ui.transition=null;try{pe=1,qp(t,e,n,r)}finally{pe=s,Ui.transition=i}}function pR(t,e,n,r){var s=pe,i=Ui.transition;Ui.transition=null;try{pe=4,qp(t,e,n,r)}finally{pe=s,Ui.transition=i}}function qp(t,e,n,r){if(zu){var s=gf(t,e,n,r);if(s===null)dd(t,e,r,Hu,n),l_(t,r);else if(hR(s,t,e,n,r))r.stopPropagation();else if(l_(t,r),e&4&&-1<cR.indexOf(t)){for(;s!==null;){var i=al(s);if(i!==null&&ZE(i),i=gf(t,e,n,r),i===null&&dd(t,e,r,Hu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else dd(t,e,r,null,n)}}var Hu=null;function gf(t,e,n,r){if(Hu=null,t=$p(r),t=Ps(t),t!==null)if(e=ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=GE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hu=t,null}function sT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tR()){case zp:return 1;case QE:return 4;case Bu:case nR:return 16;case YE:return 536870912;default:return 16}default:return 16}}var br=null,Wp=null,gu=null;function iT(){if(gu)return gu;var t,e=Wp,n=e.length,r,s="value"in br?br.value:br.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return gu=s.slice(t,1<r?1-r:void 0)}function yu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function c_(){return!1}function Kt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Gl:c_,this.isPropagationStopped=c_,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kp=Kt(lo),ol=xe({},lo,{view:0,detail:0}),mR=Kt(ol),rd,sd,Fo,Uc=xe({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(rd=t.screenX-Fo.screenX,sd=t.screenY-Fo.screenY):sd=rd=0,Fo=t),rd)},movementY:function(t){return"movementY"in t?t.movementY:sd}}),h_=Kt(Uc),gR=xe({},Uc,{dataTransfer:0}),yR=Kt(gR),_R=xe({},ol,{relatedTarget:0}),id=Kt(_R),vR=xe({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),wR=Kt(vR),ER=xe({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TR=Kt(ER),IR=xe({},lo,{data:0}),d_=Kt(IR),SR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=CR[t])?!!e[t]:!1}function Qp(){return PR}var RR=xe({},ol,{key:function(t){if(t.key){var e=SR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qp,charCode:function(t){return t.type==="keypress"?yu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xR=Kt(RR),kR=xe({},Uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),f_=Kt(kR),NR=xe({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qp}),DR=Kt(NR),bR=xe({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),OR=Kt(bR),VR=xe({},Uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LR=Kt(VR),MR=[9,13,27,32],Yp=nr&&"CompositionEvent"in window,la=null;nr&&"documentMode"in document&&(la=document.documentMode);var UR=nr&&"TextEvent"in window&&!la,oT=nr&&(!Yp||la&&8<la&&11>=la),p_=" ",m_=!1;function aT(t,e){switch(t){case"keyup":return MR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wi=!1;function FR(t,e){switch(t){case"compositionend":return lT(e);case"keypress":return e.which!==32?null:(m_=!0,p_);case"textInput":return t=e.data,t===p_&&m_?null:t;default:return null}}function jR(t,e){if(wi)return t==="compositionend"||!Yp&&aT(t,e)?(t=iT(),gu=Wp=br=null,wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return oT&&e.locale!=="ko"?null:e.data;default:return null}}var BR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function g_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BR[t.type]:e==="textarea"}function uT(t,e,n,r){jE(r),e=Gu(e,"onChange"),0<e.length&&(n=new Kp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ua=null,ba=null;function $R(t){wT(t,0)}function Fc(t){var e=Ii(t);if(bE(e))return t}function zR(t,e){if(t==="change")return e}var cT=!1;if(nr){var od;if(nr){var ad="oninput"in document;if(!ad){var y_=document.createElement("div");y_.setAttribute("oninput","return;"),ad=typeof y_.oninput=="function"}od=ad}else od=!1;cT=od&&(!document.documentMode||9<document.documentMode)}function __(){ua&&(ua.detachEvent("onpropertychange",hT),ba=ua=null)}function hT(t){if(t.propertyName==="value"&&Fc(ba)){var e=[];uT(e,ba,t,$p(t)),HE($R,e)}}function HR(t,e,n){t==="focusin"?(__(),ua=e,ba=n,ua.attachEvent("onpropertychange",hT)):t==="focusout"&&__()}function GR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fc(ba)}function qR(t,e){if(t==="click")return Fc(e)}function WR(t,e){if(t==="input"||t==="change")return Fc(e)}function KR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:KR;function Oa(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Xd.call(e,s)||!gn(t[s],e[s]))return!1}return!0}function v_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function w_(t,e){var n=v_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=v_(n)}}function dT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fT(){for(var t=window,e=Uu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Uu(t.document)}return e}function Xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function QR(t){var e=fT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dT(n.ownerDocument.documentElement,n)){if(r!==null&&Xp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=w_(n,i);var o=w_(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var YR=nr&&"documentMode"in document&&11>=document.documentMode,Ei=null,yf=null,ca=null,_f=!1;function E_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_f||Ei==null||Ei!==Uu(r)||(r=Ei,"selectionStart"in r&&Xp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ca&&Oa(ca,r)||(ca=r,r=Gu(yf,"onSelect"),0<r.length&&(e=new Kp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ei)))}function ql(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ti={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},ld={},pT={};nr&&(pT=document.createElement("div").style,"AnimationEvent"in window||(delete Ti.animationend.animation,delete Ti.animationiteration.animation,delete Ti.animationstart.animation),"TransitionEvent"in window||delete Ti.transitionend.transition);function jc(t){if(ld[t])return ld[t];if(!Ti[t])return t;var e=Ti[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in pT)return ld[t]=e[n];return t}var mT=jc("animationend"),gT=jc("animationiteration"),yT=jc("animationstart"),_T=jc("transitionend"),vT=new Map,T_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ls(t,e){vT.set(t,e),Zs(e,[t])}for(var ud=0;ud<T_.length;ud++){var cd=T_[ud],XR=cd.toLowerCase(),JR=cd[0].toUpperCase()+cd.slice(1);ls(XR,"on"+JR)}ls(mT,"onAnimationEnd");ls(gT,"onAnimationIteration");ls(yT,"onAnimationStart");ls("dblclick","onDoubleClick");ls("focusin","onFocus");ls("focusout","onBlur");ls(_T,"onTransitionEnd");qi("onMouseEnter",["mouseout","mouseover"]);qi("onMouseLeave",["mouseout","mouseover"]);qi("onPointerEnter",["pointerout","pointerover"]);qi("onPointerLeave",["pointerout","pointerover"]);Zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function I_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,XP(r,e,void 0,t),t.currentTarget=null}function wT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&s.isPropagationStopped())break e;I_(s,a,c),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&s.isPropagationStopped())break e;I_(s,a,c),i=u}}}if(ju)throw t=ff,ju=!1,ff=null,t}function we(t,e){var n=e[If];n===void 0&&(n=e[If]=new Set);var r=t+"__bubble";n.has(r)||(ET(e,t,2,!1),n.add(r))}function hd(t,e,n){var r=0;e&&(r|=4),ET(n,t,r,e)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function Va(t){if(!t[Wl]){t[Wl]=!0,RE.forEach(function(n){n!=="selectionchange"&&(ZR.has(n)||hd(n,!1,t),hd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wl]||(e[Wl]=!0,hd("selectionchange",!1,e))}}function ET(t,e,n,r){switch(sT(e)){case 1:var s=fR;break;case 4:s=pR;break;default:s=qp}n=s.bind(null,e,n,t),s=void 0,!df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function dd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;a!==null;){if(o=Ps(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}HE(function(){var c=i,h=$p(n),f=[];e:{var p=vT.get(t);if(p!==void 0){var g=Kp,T=t;switch(t){case"keypress":if(yu(n)===0)break e;case"keydown":case"keyup":g=xR;break;case"focusin":T="focus",g=id;break;case"focusout":T="blur",g=id;break;case"beforeblur":case"afterblur":g=id;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=h_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=yR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=DR;break;case mT:case gT:case yT:g=wR;break;case _T:g=OR;break;case"scroll":g=mR;break;case"wheel":g=LR;break;case"copy":case"cut":case"paste":g=TR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=f_}var A=(e&4)!==0,N=!A&&t==="scroll",I=A?p!==null?p+"Capture":null:p;A=[];for(var v=c,w;v!==null;){w=v;var k=w.stateNode;if(w.tag===5&&k!==null&&(w=k,I!==null&&(k=xa(v,I),k!=null&&A.push(La(v,k,w)))),N)break;v=v.return}0<A.length&&(p=new g(p,T,null,n,h),f.push({event:p,listeners:A}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==cf&&(T=n.relatedTarget||n.fromElement)&&(Ps(T)||T[rr]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(T=n.relatedTarget||n.toElement,g=c,T=T?Ps(T):null,T!==null&&(N=ei(T),T!==N||T.tag!==5&&T.tag!==6)&&(T=null)):(g=null,T=c),g!==T)){if(A=h_,k="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(A=f_,k="onPointerLeave",I="onPointerEnter",v="pointer"),N=g==null?p:Ii(g),w=T==null?p:Ii(T),p=new A(k,v+"leave",g,n,h),p.target=N,p.relatedTarget=w,k=null,Ps(h)===c&&(A=new A(I,v+"enter",T,n,h),A.target=w,A.relatedTarget=N,k=A),N=k,g&&T)t:{for(A=g,I=T,v=0,w=A;w;w=hi(w))v++;for(w=0,k=I;k;k=hi(k))w++;for(;0<v-w;)A=hi(A),v--;for(;0<w-v;)I=hi(I),w--;for(;v--;){if(A===I||I!==null&&A===I.alternate)break t;A=hi(A),I=hi(I)}A=null}else A=null;g!==null&&S_(f,p,g,A,!1),T!==null&&N!==null&&S_(f,N,T,A,!0)}}e:{if(p=c?Ii(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var V=zR;else if(g_(p))if(cT)V=WR;else{V=GR;var F=HR}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(V=qR);if(V&&(V=V(t,c))){uT(f,V,n,h);break e}F&&F(t,p,c),t==="focusout"&&(F=p._wrapperState)&&F.controlled&&p.type==="number"&&sf(p,"number",p.value)}switch(F=c?Ii(c):window,t){case"focusin":(g_(F)||F.contentEditable==="true")&&(Ei=F,yf=c,ca=null);break;case"focusout":ca=yf=Ei=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,E_(f,n,h);break;case"selectionchange":if(YR)break;case"keydown":case"keyup":E_(f,n,h)}var E;if(Yp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else wi?aT(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(oT&&n.locale!=="ko"&&(wi||y!=="onCompositionStart"?y==="onCompositionEnd"&&wi&&(E=iT()):(br=h,Wp="value"in br?br.value:br.textContent,wi=!0)),F=Gu(c,y),0<F.length&&(y=new d_(y,t,null,n,h),f.push({event:y,listeners:F}),E?y.data=E:(E=lT(n),E!==null&&(y.data=E)))),(E=UR?FR(t,n):jR(t,n))&&(c=Gu(c,"onBeforeInput"),0<c.length&&(h=new d_("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=E))}wT(f,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=xa(t,n),i!=null&&r.unshift(La(t,i,s)),i=xa(t,e),i!=null&&r.push(La(t,i,s))),t=t.return}return r}function hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function S_(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,s?(u=xa(n,i),u!=null&&o.unshift(La(n,u,a))):s||(u=xa(n,i),u!=null&&o.push(La(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ex=/\r\n?/g,tx=/\u0000|\uFFFD/g;function A_(t){return(typeof t=="string"?t:""+t).replace(ex,`
`).replace(tx,"")}function Kl(t,e,n){if(e=A_(e),A_(t)!==e&&n)throw Error(B(425))}function qu(){}var vf=null,wf=null;function Ef(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tf=typeof setTimeout=="function"?setTimeout:void 0,nx=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,rx=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(t){return C_.resolve(null).then(t).catch(sx)}:Tf;function sx(t){setTimeout(function(){throw t})}function fd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Da(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Da(e)}function Fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function P_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),Sn="__reactFiber$"+uo,Ma="__reactProps$"+uo,rr="__reactContainer$"+uo,If="__reactEvents$"+uo,ix="__reactListeners$"+uo,ox="__reactHandles$"+uo;function Ps(t){var e=t[Sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[rr]||n[Sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=P_(t);t!==null;){if(n=t[Sn])return n;t=P_(t)}return e}t=n,n=t.parentNode}return null}function al(t){return t=t[Sn]||t[rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ii(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Bc(t){return t[Ma]||null}var Sf=[],Si=-1;function us(t){return{current:t}}function Te(t){0>Si||(t.current=Sf[Si],Sf[Si]=null,Si--)}function ye(t,e){Si++,Sf[Si]=t.current,t.current=e}var Jr={},yt=us(Jr),Vt=us(!1),Fs=Jr;function Wi(t,e){var n=t.type.contextTypes;if(!n)return Jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Lt(t){return t=t.childContextTypes,t!=null}function Wu(){Te(Vt),Te(yt)}function R_(t,e,n){if(yt.current!==Jr)throw Error(B(168));ye(yt,e),ye(Vt,n)}function TT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,HP(t)||"Unknown",s));return xe({},n,r)}function Ku(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Fs=yt.current,ye(yt,t),ye(Vt,Vt.current),!0}function x_(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=TT(t,e,Fs),r.__reactInternalMemoizedMergedChildContext=t,Te(Vt),Te(yt),ye(yt,t)):Te(Vt),ye(Vt,n)}var Hn=null,$c=!1,pd=!1;function IT(t){Hn===null?Hn=[t]:Hn.push(t)}function ax(t){$c=!0,IT(t)}function cs(){if(!pd&&Hn!==null){pd=!0;var t=0,e=pe;try{var n=Hn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Hn=null,$c=!1}catch(s){throw Hn!==null&&(Hn=Hn.slice(t+1)),KE(zp,cs),s}finally{pe=e,pd=!1}}return null}var Ai=[],Ci=0,Qu=null,Yu=0,Jt=[],Zt=0,js=null,qn=1,Wn="";function Ts(t,e){Ai[Ci++]=Yu,Ai[Ci++]=Qu,Qu=t,Yu=e}function ST(t,e,n){Jt[Zt++]=qn,Jt[Zt++]=Wn,Jt[Zt++]=js,js=t;var r=qn;t=Wn;var s=32-dn(r)-1;r&=~(1<<s),n+=1;var i=32-dn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,qn=1<<32-dn(e)+s|n<<s|r,Wn=i+t}else qn=1<<i|n<<s|r,Wn=t}function Jp(t){t.return!==null&&(Ts(t,1),ST(t,1,0))}function Zp(t){for(;t===Qu;)Qu=Ai[--Ci],Ai[Ci]=null,Yu=Ai[--Ci],Ai[Ci]=null;for(;t===js;)js=Jt[--Zt],Jt[Zt]=null,Wn=Jt[--Zt],Jt[Zt]=null,qn=Jt[--Zt],Jt[Zt]=null}var Ht=null,Bt=null,Ae=!1,cn=null;function AT(t,e){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function k_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,Bt=Fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,Bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=js!==null?{id:qn,overflow:Wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,Bt=null,!0):!1;default:return!1}}function Af(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cf(t){if(Ae){var e=Bt;if(e){var n=e;if(!k_(t,e)){if(Af(t))throw Error(B(418));e=Fr(n.nextSibling);var r=Ht;e&&k_(t,e)?AT(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Ht=t)}}else{if(Af(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ae=!1,Ht=t}}}function N_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function Ql(t){if(t!==Ht)return!1;if(!Ae)return N_(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ef(t.type,t.memoizedProps)),e&&(e=Bt)){if(Af(t))throw CT(),Error(B(418));for(;e;)AT(t,e),e=Fr(e.nextSibling)}if(N_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bt=Fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bt=null}}else Bt=Ht?Fr(t.stateNode.nextSibling):null;return!0}function CT(){for(var t=Bt;t;)t=Fr(t.nextSibling)}function Ki(){Bt=Ht=null,Ae=!1}function em(t){cn===null?cn=[t]:cn.push(t)}var lx=hr.ReactCurrentBatchConfig;function jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Yl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function D_(t){var e=t._init;return e(t._payload)}function PT(t){function e(I,v){if(t){var w=I.deletions;w===null?(I.deletions=[v],I.flags|=16):w.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function s(I,v){return I=zr(I,v),I.index=0,I.sibling=null,I}function i(I,v,w){return I.index=w,t?(w=I.alternate,w!==null?(w=w.index,w<v?(I.flags|=2,v):w):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function a(I,v,w,k){return v===null||v.tag!==6?(v=Ed(w,I.mode,k),v.return=I,v):(v=s(v,w),v.return=I,v)}function u(I,v,w,k){var V=w.type;return V===vi?h(I,v,w.props.children,k,w.key):v!==null&&(v.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ir&&D_(V)===v.type)?(k=s(v,w.props),k.ref=jo(I,v,w),k.return=I,k):(k=Su(w.type,w.key,w.props,null,I.mode,k),k.ref=jo(I,v,w),k.return=I,k)}function c(I,v,w,k){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=Td(w,I.mode,k),v.return=I,v):(v=s(v,w.children||[]),v.return=I,v)}function h(I,v,w,k,V){return v===null||v.tag!==7?(v=Vs(w,I.mode,k,V),v.return=I,v):(v=s(v,w),v.return=I,v)}function f(I,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ed(""+v,I.mode,w),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Fl:return w=Su(v.type,v.key,v.props,null,I.mode,w),w.ref=jo(I,null,v),w.return=I,w;case _i:return v=Td(v,I.mode,w),v.return=I,v;case Ir:var k=v._init;return f(I,k(v._payload),w)}if(Yo(v)||Vo(v))return v=Vs(v,I.mode,w,null),v.return=I,v;Yl(I,v)}return null}function p(I,v,w,k){var V=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return V!==null?null:a(I,v,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Fl:return w.key===V?u(I,v,w,k):null;case _i:return w.key===V?c(I,v,w,k):null;case Ir:return V=w._init,p(I,v,V(w._payload),k)}if(Yo(w)||Vo(w))return V!==null?null:h(I,v,w,k,null);Yl(I,w)}return null}function g(I,v,w,k,V){if(typeof k=="string"&&k!==""||typeof k=="number")return I=I.get(w)||null,a(v,I,""+k,V);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Fl:return I=I.get(k.key===null?w:k.key)||null,u(v,I,k,V);case _i:return I=I.get(k.key===null?w:k.key)||null,c(v,I,k,V);case Ir:var F=k._init;return g(I,v,w,F(k._payload),V)}if(Yo(k)||Vo(k))return I=I.get(w)||null,h(v,I,k,V,null);Yl(v,k)}return null}function T(I,v,w,k){for(var V=null,F=null,E=v,y=v=0,S=null;E!==null&&y<w.length;y++){E.index>y?(S=E,E=null):S=E.sibling;var P=p(I,E,w[y],k);if(P===null){E===null&&(E=S);break}t&&E&&P.alternate===null&&e(I,E),v=i(P,v,y),F===null?V=P:F.sibling=P,F=P,E=S}if(y===w.length)return n(I,E),Ae&&Ts(I,y),V;if(E===null){for(;y<w.length;y++)E=f(I,w[y],k),E!==null&&(v=i(E,v,y),F===null?V=E:F.sibling=E,F=E);return Ae&&Ts(I,y),V}for(E=r(I,E);y<w.length;y++)S=g(E,I,y,w[y],k),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?y:S.key),v=i(S,v,y),F===null?V=S:F.sibling=S,F=S);return t&&E.forEach(function(x){return e(I,x)}),Ae&&Ts(I,y),V}function A(I,v,w,k){var V=Vo(w);if(typeof V!="function")throw Error(B(150));if(w=V.call(w),w==null)throw Error(B(151));for(var F=V=null,E=v,y=v=0,S=null,P=w.next();E!==null&&!P.done;y++,P=w.next()){E.index>y?(S=E,E=null):S=E.sibling;var x=p(I,E,P.value,k);if(x===null){E===null&&(E=S);break}t&&E&&x.alternate===null&&e(I,E),v=i(x,v,y),F===null?V=x:F.sibling=x,F=x,E=S}if(P.done)return n(I,E),Ae&&Ts(I,y),V;if(E===null){for(;!P.done;y++,P=w.next())P=f(I,P.value,k),P!==null&&(v=i(P,v,y),F===null?V=P:F.sibling=P,F=P);return Ae&&Ts(I,y),V}for(E=r(I,E);!P.done;y++,P=w.next())P=g(E,I,y,P.value,k),P!==null&&(t&&P.alternate!==null&&E.delete(P.key===null?y:P.key),v=i(P,v,y),F===null?V=P:F.sibling=P,F=P);return t&&E.forEach(function(D){return e(I,D)}),Ae&&Ts(I,y),V}function N(I,v,w,k){if(typeof w=="object"&&w!==null&&w.type===vi&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Fl:e:{for(var V=w.key,F=v;F!==null;){if(F.key===V){if(V=w.type,V===vi){if(F.tag===7){n(I,F.sibling),v=s(F,w.props.children),v.return=I,I=v;break e}}else if(F.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Ir&&D_(V)===F.type){n(I,F.sibling),v=s(F,w.props),v.ref=jo(I,F,w),v.return=I,I=v;break e}n(I,F);break}else e(I,F);F=F.sibling}w.type===vi?(v=Vs(w.props.children,I.mode,k,w.key),v.return=I,I=v):(k=Su(w.type,w.key,w.props,null,I.mode,k),k.ref=jo(I,v,w),k.return=I,I=k)}return o(I);case _i:e:{for(F=w.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){n(I,v.sibling),v=s(v,w.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=Td(w,I.mode,k),v.return=I,I=v}return o(I);case Ir:return F=w._init,N(I,v,F(w._payload),k)}if(Yo(w))return T(I,v,w,k);if(Vo(w))return A(I,v,w,k);Yl(I,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(n(I,v.sibling),v=s(v,w),v.return=I,I=v):(n(I,v),v=Ed(w,I.mode,k),v.return=I,I=v),o(I)):n(I,v)}return N}var Qi=PT(!0),RT=PT(!1),Xu=us(null),Ju=null,Pi=null,tm=null;function nm(){tm=Pi=Ju=null}function rm(t){var e=Xu.current;Te(Xu),t._currentValue=e}function Pf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fi(t,e){Ju=t,tm=Pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(tm!==t)if(t={context:t,memoizedValue:e,next:null},Pi===null){if(Ju===null)throw Error(B(308));Pi=t,Ju.dependencies={lanes:0,firstContext:t}}else Pi=Pi.next=t;return e}var Rs=null;function sm(t){Rs===null?Rs=[t]:Rs.push(t)}function xT(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,sm(e)):(n.next=s.next,s.next=n),e.interleaved=n,sr(t,r)}function sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sr=!1;function im(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,sr(t,n)}return s=r.interleaved,s===null?(e.next=e,sm(r)):(e.next=s.next,s.next=e),r.interleaved=e,sr(t,n)}function _u(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hp(t,n)}}function b_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zu(t,e,n,r){var s=t.updateQueue;Sr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(i!==null){var f=s.baseState;o=0,h=c=u=null,a=i;do{var p=a.lane,g=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,A=a;switch(p=e,g=n,A.tag){case 1:if(T=A.payload,typeof T=="function"){f=T.call(g,f,p);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=A.payload,p=typeof T=="function"?T.call(g,f,p):T,p==null)break e;f=xe({},f,p);break e;case 2:Sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=s.effects,p===null?s.effects=[a]:p.push(a))}else g={eventTime:g,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,u=f):h=h.next=g,o|=p;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;p=a,a=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(h===null&&(u=f),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);$s|=o,t.lanes=o,t.memoizedState=f}}function O_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var ll={},Rn=us(ll),Ua=us(ll),Fa=us(ll);function xs(t){if(t===ll)throw Error(B(174));return t}function om(t,e){switch(ye(Fa,e),ye(Ua,t),ye(Rn,ll),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:af(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=af(e,t)}Te(Rn),ye(Rn,e)}function Yi(){Te(Rn),Te(Ua),Te(Fa)}function NT(t){xs(Fa.current);var e=xs(Rn.current),n=af(e,t.type);e!==n&&(ye(Ua,t),ye(Rn,n))}function am(t){Ua.current===t&&(Te(Rn),Te(Ua))}var Ce=us(0);function ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var md=[];function lm(){for(var t=0;t<md.length;t++)md[t]._workInProgressVersionPrimary=null;md.length=0}var vu=hr.ReactCurrentDispatcher,gd=hr.ReactCurrentBatchConfig,Bs=0,Re=null,We=null,Je=null,tc=!1,ha=!1,ja=0,ux=0;function ut(){throw Error(B(321))}function um(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function cm(t,e,n,r,s,i){if(Bs=i,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vu.current=t===null||t.memoizedState===null?fx:px,t=n(r,s),ha){i=0;do{if(ha=!1,ja=0,25<=i)throw Error(B(301));i+=1,Je=We=null,e.updateQueue=null,vu.current=mx,t=n(r,s)}while(ha)}if(vu.current=nc,e=We!==null&&We.next!==null,Bs=0,Je=We=Re=null,tc=!1,e)throw Error(B(300));return t}function hm(){var t=ja!==0;return ja=0,t}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Re.memoizedState=Je=t:Je=Je.next=t,Je}function sn(){if(We===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var e=Je===null?Re.memoizedState:Je.next;if(e!==null)Je=e,We=t;else{if(t===null)throw Error(B(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Je===null?Re.memoizedState=Je=t:Je=Je.next=t}return Je}function Ba(t,e){return typeof e=="function"?e(t):e}function yd(t){var e=sn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=We,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,u=null,c=i;do{var h=c.lane;if((Bs&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Re.lanes|=h,$s|=h}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=a,gn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Re.lanes|=i,$s|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _d(t){var e=sn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);gn(i,e.memoizedState)||(Ot=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function DT(){}function bT(t,e){var n=Re,r=sn(),s=e(),i=!gn(r.memoizedState,s);if(i&&(r.memoizedState=s,Ot=!0),r=r.queue,dm(LT.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,$a(9,VT.bind(null,n,r,s,e),void 0,null),Ze===null)throw Error(B(349));Bs&30||OT(n,e,s)}return s}function OT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function VT(t,e,n,r){e.value=n,e.getSnapshot=r,MT(e)&&UT(t)}function LT(t,e,n){return n(function(){MT(e)&&UT(t)})}function MT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function UT(t){var e=sr(t,1);e!==null&&fn(e,t,1,-1)}function V_(t){var e=Tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},e.queue=t,t=t.dispatch=dx.bind(null,Re,t),[e.memoizedState,t]}function $a(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function FT(){return sn().memoizedState}function wu(t,e,n,r){var s=Tn();Re.flags|=t,s.memoizedState=$a(1|e,n,void 0,r===void 0?null:r)}function zc(t,e,n,r){var s=sn();r=r===void 0?null:r;var i=void 0;if(We!==null){var o=We.memoizedState;if(i=o.destroy,r!==null&&um(r,o.deps)){s.memoizedState=$a(e,n,i,r);return}}Re.flags|=t,s.memoizedState=$a(1|e,n,i,r)}function L_(t,e){return wu(8390656,8,t,e)}function dm(t,e){return zc(2048,8,t,e)}function jT(t,e){return zc(4,2,t,e)}function BT(t,e){return zc(4,4,t,e)}function $T(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zT(t,e,n){return n=n!=null?n.concat([t]):null,zc(4,4,$T.bind(null,e,t),n)}function fm(){}function HT(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&um(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function GT(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&um(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function qT(t,e,n){return Bs&21?(gn(n,e)||(n=XE(),Re.lanes|=n,$s|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function cx(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=gd.transition;gd.transition={};try{t(!1),e()}finally{pe=n,gd.transition=r}}function WT(){return sn().memoizedState}function hx(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},KT(t))QT(e,n);else if(n=xT(t,e,n,r),n!==null){var s=At();fn(n,t,r,s),YT(n,e,r)}}function dx(t,e,n){var r=$r(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(KT(t))QT(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,gn(a,o)){var u=e.interleaved;u===null?(s.next=s,sm(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=xT(t,e,s,r),n!==null&&(s=At(),fn(n,t,r,s),YT(n,e,r))}}function KT(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function QT(t,e){ha=tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function YT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hp(t,n)}}var nc={readContext:rn,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},fx={readContext:rn,useCallback:function(t,e){return Tn().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:L_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wu(4194308,4,$T.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wu(4194308,4,t,e)},useInsertionEffect:function(t,e){return wu(4,2,t,e)},useMemo:function(t,e){var n=Tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=hx.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=Tn();return t={current:t},e.memoizedState=t},useState:V_,useDebugValue:fm,useDeferredValue:function(t){return Tn().memoizedState=t},useTransition:function(){var t=V_(!1),e=t[0];return t=cx.bind(null,t[1]),Tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,s=Tn();if(Ae){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),Ze===null)throw Error(B(349));Bs&30||OT(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,L_(LT.bind(null,r,i,t),[t]),r.flags|=2048,$a(9,VT.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Tn(),e=Ze.identifierPrefix;if(Ae){var n=Wn,r=qn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ja++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ux++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},px={readContext:rn,useCallback:HT,useContext:rn,useEffect:dm,useImperativeHandle:zT,useInsertionEffect:jT,useLayoutEffect:BT,useMemo:GT,useReducer:yd,useRef:FT,useState:function(){return yd(Ba)},useDebugValue:fm,useDeferredValue:function(t){var e=sn();return qT(e,We.memoizedState,t)},useTransition:function(){var t=yd(Ba)[0],e=sn().memoizedState;return[t,e]},useMutableSource:DT,useSyncExternalStore:bT,useId:WT,unstable_isNewReconciler:!1},mx={readContext:rn,useCallback:HT,useContext:rn,useEffect:dm,useImperativeHandle:zT,useInsertionEffect:jT,useLayoutEffect:BT,useMemo:GT,useReducer:_d,useRef:FT,useState:function(){return _d(Ba)},useDebugValue:fm,useDeferredValue:function(t){var e=sn();return We===null?e.memoizedState=t:qT(e,We.memoizedState,t)},useTransition:function(){var t=_d(Ba)[0],e=sn().memoizedState;return[t,e]},useMutableSource:DT,useSyncExternalStore:bT,useId:WT,unstable_isNewReconciler:!1};function ln(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hc={isMounted:function(t){return(t=t._reactInternals)?ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=At(),s=$r(t),i=Xn(r,s);i.payload=e,n!=null&&(i.callback=n),e=jr(t,i,s),e!==null&&(fn(e,t,s,r),_u(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=At(),s=$r(t),i=Xn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=jr(t,i,s),e!==null&&(fn(e,t,s,r),_u(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=At(),r=$r(t),s=Xn(n,r);s.tag=2,e!=null&&(s.callback=e),e=jr(t,s,r),e!==null&&(fn(e,t,r,n),_u(e,t,r))}};function M_(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Oa(n,r)||!Oa(s,i):!0}function XT(t,e,n){var r=!1,s=Jr,i=e.contextType;return typeof i=="object"&&i!==null?i=rn(i):(s=Lt(e)?Fs:yt.current,r=e.contextTypes,i=(r=r!=null)?Wi(t,s):Jr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function U_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hc.enqueueReplaceState(e,e.state,null)}function xf(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},im(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=rn(i):(i=Lt(e)?Fs:yt.current,s.context=Wi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Rf(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Hc.enqueueReplaceState(s,s.state,null),Zu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Xi(t,e){try{var n="",r=e;do n+=zP(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function vd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gx=typeof WeakMap=="function"?WeakMap:Map;function JT(t,e,n){n=Xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sc||(sc=!0,jf=r),kf(t,e)},n}function ZT(t,e,n){n=Xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){kf(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){kf(t,e),typeof r!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function F_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new gx;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=kx.bind(null,t,e,n),e.then(t,t))}function j_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function B_(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xn(-1,1),e.tag=2,jr(n,e,1))),n.lanes|=1),t)}var yx=hr.ReactCurrentOwner,Ot=!1;function St(t,e,n,r){e.child=t===null?RT(e,null,n,r):Qi(e,t.child,n,r)}function $_(t,e,n,r,s){n=n.render;var i=e.ref;return Fi(e,s),r=cm(t,e,n,r,i,s),n=hm(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,ir(t,e,s)):(Ae&&n&&Jp(e),e.flags|=1,St(t,e,r,s),e.child)}function z_(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Em(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,eI(t,e,i,r,s)):(t=Su(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Oa,n(o,r)&&t.ref===e.ref)return ir(t,e,s)}return e.flags|=1,t=zr(i,r),t.ref=e.ref,t.return=e,e.child=t}function eI(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Oa(i,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,ir(t,e,s)}return Nf(t,e,n,r,s)}function tI(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(xi,jt),jt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(xi,jt),jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ye(xi,jt),jt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ye(xi,jt),jt|=r;return St(t,e,s,n),e.child}function nI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nf(t,e,n,r,s){var i=Lt(n)?Fs:yt.current;return i=Wi(e,i),Fi(e,s),n=cm(t,e,n,r,i,s),r=hm(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,ir(t,e,s)):(Ae&&r&&Jp(e),e.flags|=1,St(t,e,n,s),e.child)}function H_(t,e,n,r,s){if(Lt(n)){var i=!0;Ku(e)}else i=!1;if(Fi(e,s),e.stateNode===null)Eu(t,e),XT(e,n,r),xf(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=rn(c):(c=Lt(n)?Fs:yt.current,c=Wi(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&U_(e,o,r,c),Sr=!1;var p=e.memoizedState;o.state=p,Zu(e,r,o,s),u=e.memoizedState,a!==r||p!==u||Vt.current||Sr?(typeof h=="function"&&(Rf(e,n,h,r),u=e.memoizedState),(a=Sr||M_(e,n,a,r,p,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,kT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ln(e.type,a),o.props=c,f=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=rn(u):(u=Lt(n)?Fs:yt.current,u=Wi(e,u));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==u)&&U_(e,o,r,u),Sr=!1,p=e.memoizedState,o.state=p,Zu(e,r,o,s);var T=e.memoizedState;a!==f||p!==T||Vt.current||Sr?(typeof g=="function"&&(Rf(e,n,g,r),T=e.memoizedState),(c=Sr||M_(e,n,c,r,p,T,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Df(t,e,n,r,i,s)}function Df(t,e,n,r,s,i){nI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&x_(e,n,!1),ir(t,e,i);r=e.stateNode,yx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qi(e,t.child,null,i),e.child=Qi(e,null,a,i)):St(t,e,a,i),e.memoizedState=r.state,s&&x_(e,n,!0),e.child}function rI(t){var e=t.stateNode;e.pendingContext?R_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&R_(t,e.context,!1),om(t,e.containerInfo)}function G_(t,e,n,r,s){return Ki(),em(s),e.flags|=256,St(t,e,n,r),e.child}var bf={dehydrated:null,treeContext:null,retryLane:0};function Of(t){return{baseLanes:t,cachePool:null,transitions:null}}function sI(t,e,n){var r=e.pendingProps,s=Ce.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ye(Ce,s&1),t===null)return Cf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Wc(o,r,0,null),t=Vs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Of(n),e.memoizedState=bf,t):pm(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return _x(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=zr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=zr(a,i):(i=Vs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Of(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=bf,r}return i=t.child,t=i.sibling,r=zr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function pm(t,e){return e=Wc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xl(t,e,n,r){return r!==null&&em(r),Qi(e,t.child,null,n),t=pm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _x(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=vd(Error(B(422))),Xl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Wc({mode:"visible",children:r.children},s,0,null),i=Vs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Qi(e,t.child,null,o),e.child.memoizedState=Of(o),e.memoizedState=bf,i);if(!(e.mode&1))return Xl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(B(419)),r=vd(i,r,void 0),Xl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=Ze,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,sr(t,s),fn(r,t,s,-1))}return wm(),r=vd(Error(B(421))),Xl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Nx.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Bt=Fr(s.nextSibling),Ht=e,Ae=!0,cn=null,t!==null&&(Jt[Zt++]=qn,Jt[Zt++]=Wn,Jt[Zt++]=js,qn=t.id,Wn=t.overflow,js=e),e=pm(e,r.children),e.flags|=4096,e)}function q_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Pf(t.return,e,n)}function wd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function iI(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(St(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&q_(t,n,e);else if(t.tag===19)q_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ec(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),wd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ec(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}wd(e,!0,n,null,i);break;case"together":wd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Eu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$s|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vx(t,e,n){switch(e.tag){case 3:rI(e),Ki();break;case 5:NT(e);break;case 1:Lt(e.type)&&Ku(e);break;case 4:om(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ye(Xu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?sI(t,e,n):(ye(Ce,Ce.current&1),t=ir(t,e,n),t!==null?t.sibling:null);ye(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return iI(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ye(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,tI(t,e,n)}return ir(t,e,n)}var oI,Vf,aI,lI;oI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vf=function(){};aI=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,xs(Rn.current);var i=null;switch(n){case"input":s=nf(t,s),r=nf(t,r),i=[];break;case"select":s=xe({},s,{value:void 0}),r=xe({},r,{value:void 0}),i=[];break;case"textarea":s=of(t,s),r=of(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qu)}lf(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pa.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&we("scroll",t),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};lI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bo(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function wx(t,e,n){var r=e.pendingProps;switch(Zp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return Lt(e.type)&&Wu(),ct(e),null;case 3:return r=e.stateNode,Yi(),Te(Vt),Te(yt),lm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ql(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(zf(cn),cn=null))),Vf(t,e),ct(e),null;case 5:am(e);var s=xs(Fa.current);if(n=e.type,t!==null&&e.stateNode!=null)aI(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return ct(e),null}if(t=xs(Rn.current),Ql(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Sn]=e,r[Ma]=i,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(s=0;s<Jo.length;s++)we(Jo[s],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":t_(r,i),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},we("invalid",r);break;case"textarea":r_(r,i),we("invalid",r)}lf(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Kl(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Kl(r.textContent,a,t),s=["children",""+a]):Pa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":jl(r),n_(r,i,!0);break;case"textarea":jl(r),s_(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=qu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=LE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sn]=e,t[Ma]=r,oI(t,e,!1,!1),e.stateNode=t;e:{switch(o=uf(n,r),n){case"dialog":we("cancel",t),we("close",t),s=r;break;case"iframe":case"object":case"embed":we("load",t),s=r;break;case"video":case"audio":for(s=0;s<Jo.length;s++)we(Jo[s],t);s=r;break;case"source":we("error",t),s=r;break;case"img":case"image":case"link":we("error",t),we("load",t),s=r;break;case"details":we("toggle",t),s=r;break;case"input":t_(t,r),s=nf(t,r),we("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=xe({},r,{value:void 0}),we("invalid",t);break;case"textarea":r_(t,r),s=of(t,r),we("invalid",t);break;default:s=r}lf(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?FE(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ME(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ra(t,u):typeof u=="number"&&Ra(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Pa.hasOwnProperty(i)?u!=null&&i==="onScroll"&&we("scroll",t):u!=null&&Up(t,i,u,o))}switch(n){case"input":jl(t),n_(t,r,!1);break;case"textarea":jl(t),s_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Vi(t,!!r.multiple,i,!1):r.defaultValue!=null&&Vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=qu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)lI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=xs(Fa.current),xs(Rn.current),Ql(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sn]=e,(i=r.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:Kl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Kl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=e,e.stateNode=r}return ct(e),null;case 13:if(Te(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Bt!==null&&e.mode&1&&!(e.flags&128))CT(),Ki(),e.flags|=98560,i=!1;else if(i=Ql(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[Sn]=e}else Ki(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),i=!1}else cn!==null&&(zf(cn),cn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Ke===0&&(Ke=3):wm())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return Yi(),Vf(t,e),t===null&&Va(e.stateNode.containerInfo),ct(e),null;case 10:return rm(e.type._context),ct(e),null;case 17:return Lt(e.type)&&Wu(),ct(e),null;case 19:if(Te(Ce),i=e.memoizedState,i===null)return ct(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Bo(i,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ec(t),o!==null){for(e.flags|=128,Bo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ce,Ce.current&1|2),e.child}t=t.sibling}i.tail!==null&&Le()>Ji&&(e.flags|=128,r=!0,Bo(i,!1),e.lanes=4194304)}else{if(!r)if(t=ec(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ae)return ct(e),null}else 2*Le()-i.renderingStartTime>Ji&&n!==1073741824&&(e.flags|=128,r=!0,Bo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Le(),e.sibling=null,n=Ce.current,ye(Ce,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return vm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?jt&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function Ex(t,e){switch(Zp(e),e.tag){case 1:return Lt(e.type)&&Wu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Yi(),Te(Vt),Te(yt),lm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return am(e),null;case 13:if(Te(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ce),null;case 4:return Yi(),null;case 10:return rm(e.type._context),null;case 22:case 23:return vm(),null;case 24:return null;default:return null}}var Jl=!1,pt=!1,Tx=typeof WeakSet=="function"?WeakSet:Set,K=null;function Ri(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function Lf(t,e,n){try{n()}catch(r){De(t,e,r)}}var W_=!1;function Ix(t,e){if(vf=zu,t=fT(),Xp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var g;f!==n||s!==0&&f.nodeType!==3||(a=o+s),f!==i||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===s&&(a=o),p===i&&++h===r&&(u=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wf={focusedElem:t,selectionRange:n},zu=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var A=T.memoizedProps,N=T.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?A:ln(e.type,A),N);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(k){De(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return T=W_,W_=!1,T}function da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Lf(e,n,i)}s=s.next}while(s!==r)}}function Gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Mf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uI(t){var e=t.alternate;e!==null&&(t.alternate=null,uI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sn],delete e[Ma],delete e[If],delete e[ix],delete e[ox])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cI(t){return t.tag===5||t.tag===3||t.tag===4}function K_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qu));else if(r!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}function Ff(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ff(t,e,n),t=t.sibling;t!==null;)Ff(t,e,n),t=t.sibling}var tt=null,un=!1;function wr(t,e,n){for(n=n.child;n!==null;)hI(t,e,n),n=n.sibling}function hI(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Mc,n)}catch{}switch(n.tag){case 5:pt||Ri(n,e);case 6:var r=tt,s=un;tt=null,wr(t,e,n),tt=r,un=s,tt!==null&&(un?(t=tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(un?(t=tt,n=n.stateNode,t.nodeType===8?fd(t.parentNode,n):t.nodeType===1&&fd(t,n),Da(t)):fd(tt,n.stateNode));break;case 4:r=tt,s=un,tt=n.stateNode.containerInfo,un=!0,wr(t,e,n),tt=r,un=s;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Lf(n,e,o),s=s.next}while(s!==r)}wr(t,e,n);break;case 1:if(!pt&&(Ri(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){De(n,e,a)}wr(t,e,n);break;case 21:wr(t,e,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,wr(t,e,n),pt=r):wr(t,e,n);break;default:wr(t,e,n)}}function Q_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Tx),e.forEach(function(r){var s=Dx.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:tt=a.stateNode,un=!1;break e;case 3:tt=a.stateNode.containerInfo,un=!0;break e;case 4:tt=a.stateNode.containerInfo,un=!0;break e}a=a.return}if(tt===null)throw Error(B(160));hI(i,o,s),tt=null,un=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){De(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dI(e,t),e=e.sibling}function dI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),En(t),r&4){try{da(3,t,t.return),Gc(3,t)}catch(A){De(t,t.return,A)}try{da(5,t,t.return)}catch(A){De(t,t.return,A)}}break;case 1:an(e,t),En(t),r&512&&n!==null&&Ri(n,n.return);break;case 5:if(an(e,t),En(t),r&512&&n!==null&&Ri(n,n.return),t.flags&32){var s=t.stateNode;try{Ra(s,"")}catch(A){De(t,t.return,A)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&OE(s,i),uf(a,o);var c=uf(a,i);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?FE(s,f):h==="dangerouslySetInnerHTML"?ME(s,f):h==="children"?Ra(s,f):Up(s,h,f,c)}switch(a){case"input":rf(s,i);break;case"textarea":VE(s,i);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Vi(s,!!i.multiple,g,!1):p!==!!i.multiple&&(i.defaultValue!=null?Vi(s,!!i.multiple,i.defaultValue,!0):Vi(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ma]=i}catch(A){De(t,t.return,A)}}break;case 6:if(an(e,t),En(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(A){De(t,t.return,A)}}break;case 3:if(an(e,t),En(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Da(e.containerInfo)}catch(A){De(t,t.return,A)}break;case 4:an(e,t),En(t);break;case 13:an(e,t),En(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(ym=Le())),r&4&&Q_(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(pt=(c=pt)||h,an(e,t),pt=c):an(e,t),En(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(K=t,h=t.child;h!==null;){for(f=K=h;K!==null;){switch(p=K,g=p.child,p.tag){case 0:case 11:case 14:case 15:da(4,p,p.return);break;case 1:Ri(p,p.return);var T=p.stateNode;if(typeof T.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(A){De(r,n,A)}}break;case 5:Ri(p,p.return);break;case 22:if(p.memoizedState!==null){X_(f);continue}}g!==null?(g.return=p,K=g):X_(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{s=f.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=UE("display",o))}catch(A){De(t,t.return,A)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){De(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:an(e,t),En(t),r&4&&Q_(t);break;case 21:break;default:an(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cI(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ra(s,""),r.flags&=-33);var i=K_(t);Ff(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=K_(t);Uf(t,a,o);break;default:throw Error(B(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sx(t,e,n){K=t,fI(t)}function fI(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var s=K,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Jl;if(!o){var a=s.alternate,u=a!==null&&a.memoizedState!==null||pt;a=Jl;var c=pt;if(Jl=o,(pt=u)&&!c)for(K=s;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?J_(s):u!==null?(u.return=o,K=u):J_(s);for(;i!==null;)K=i,fI(i),i=i.sibling;K=s,Jl=a,pt=c}Y_(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,K=i):Y_(t)}}function Y_(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pt||Gc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&O_(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}O_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Da(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}pt||e.flags&512&&Mf(e)}catch(p){De(e,e.return,p)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function X_(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function J_(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gc(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){De(e,s,u)}}var i=e.return;try{Mf(e)}catch(u){De(e,i,u)}break;case 5:var o=e.return;try{Mf(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var Ax=Math.ceil,rc=hr.ReactCurrentDispatcher,mm=hr.ReactCurrentOwner,nn=hr.ReactCurrentBatchConfig,de=0,Ze=null,Be=null,st=0,jt=0,xi=us(0),Ke=0,za=null,$s=0,qc=0,gm=0,fa=null,kt=null,ym=0,Ji=1/0,zn=null,sc=!1,jf=null,Br=null,Zl=!1,Or=null,ic=0,pa=0,Bf=null,Tu=-1,Iu=0;function At(){return de&6?Le():Tu!==-1?Tu:Tu=Le()}function $r(t){return t.mode&1?de&2&&st!==0?st&-st:lx.transition!==null?(Iu===0&&(Iu=XE()),Iu):(t=pe,t!==0||(t=window.event,t=t===void 0?16:sT(t.type)),t):1}function fn(t,e,n,r){if(50<pa)throw pa=0,Bf=null,Error(B(185));il(t,n,r),(!(de&2)||t!==Ze)&&(t===Ze&&(!(de&2)&&(qc|=n),Ke===4&&Rr(t,st)),Mt(t,r),n===1&&de===0&&!(e.mode&1)&&(Ji=Le()+500,$c&&cs()))}function Mt(t,e){var n=t.callbackNode;lR(t,e);var r=$u(t,t===Ze?st:0);if(r===0)n!==null&&a_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&a_(n),e===1)t.tag===0?ax(Z_.bind(null,t)):IT(Z_.bind(null,t)),rx(function(){!(de&6)&&cs()}),n=null;else{switch(JE(r)){case 1:n=zp;break;case 4:n=QE;break;case 16:n=Bu;break;case 536870912:n=YE;break;default:n=Bu}n=EI(n,pI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function pI(t,e){if(Tu=-1,Iu=0,de&6)throw Error(B(327));var n=t.callbackNode;if(ji()&&t.callbackNode!==n)return null;var r=$u(t,t===Ze?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=oc(t,r);else{e=r;var s=de;de|=2;var i=gI();(Ze!==t||st!==e)&&(zn=null,Ji=Le()+500,Os(t,e));do try{Rx();break}catch(a){mI(t,a)}while(!0);nm(),rc.current=i,de=s,Be!==null?e=0:(Ze=null,st=0,e=Ke)}if(e!==0){if(e===2&&(s=pf(t),s!==0&&(r=s,e=$f(t,s))),e===1)throw n=za,Os(t,0),Rr(t,r),Mt(t,Le()),n;if(e===6)Rr(t,r);else{if(s=t.current.alternate,!(r&30)&&!Cx(s)&&(e=oc(t,r),e===2&&(i=pf(t),i!==0&&(r=i,e=$f(t,i))),e===1))throw n=za,Os(t,0),Rr(t,r),Mt(t,Le()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Is(t,kt,zn);break;case 3:if(Rr(t,r),(r&130023424)===r&&(e=ym+500-Le(),10<e)){if($u(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){At(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Tf(Is.bind(null,t,kt,zn),e);break}Is(t,kt,zn);break;case 4:if(Rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-dn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ax(r/1960))-r,10<r){t.timeoutHandle=Tf(Is.bind(null,t,kt,zn),r);break}Is(t,kt,zn);break;case 5:Is(t,kt,zn);break;default:throw Error(B(329))}}}return Mt(t,Le()),t.callbackNode===n?pI.bind(null,t):null}function $f(t,e){var n=fa;return t.current.memoizedState.isDehydrated&&(Os(t,e).flags|=256),t=oc(t,e),t!==2&&(e=kt,kt=n,e!==null&&zf(e)),t}function zf(t){kt===null?kt=t:kt.push.apply(kt,t)}function Cx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!gn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rr(t,e){for(e&=~gm,e&=~qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dn(e),r=1<<n;t[n]=-1,e&=~r}}function Z_(t){if(de&6)throw Error(B(327));ji();var e=$u(t,0);if(!(e&1))return Mt(t,Le()),null;var n=oc(t,e);if(t.tag!==0&&n===2){var r=pf(t);r!==0&&(e=r,n=$f(t,r))}if(n===1)throw n=za,Os(t,0),Rr(t,e),Mt(t,Le()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Is(t,kt,zn),Mt(t,Le()),null}function _m(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(Ji=Le()+500,$c&&cs())}}function zs(t){Or!==null&&Or.tag===0&&!(de&6)&&ji();var e=de;de|=1;var n=nn.transition,r=pe;try{if(nn.transition=null,pe=1,t)return t()}finally{pe=r,nn.transition=n,de=e,!(de&6)&&cs()}}function vm(){jt=xi.current,Te(xi)}function Os(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nx(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(Zp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wu();break;case 3:Yi(),Te(Vt),Te(yt),lm();break;case 5:am(r);break;case 4:Yi();break;case 13:Te(Ce);break;case 19:Te(Ce);break;case 10:rm(r.type._context);break;case 22:case 23:vm()}n=n.return}if(Ze=t,Be=t=zr(t.current,null),st=jt=e,Ke=0,za=null,gm=qc=$s=0,kt=fa=null,Rs!==null){for(e=0;e<Rs.length;e++)if(n=Rs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Rs=null}return t}function mI(t,e){do{var n=Be;try{if(nm(),vu.current=nc,tc){for(var r=Re.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}tc=!1}if(Bs=0,Je=We=Re=null,ha=!1,ja=0,mm.current=null,n===null||n.return===null){Ke=1,za=e,Be=null;break}e:{var i=t,o=n.return,a=n,u=e;if(e=st,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=j_(o);if(g!==null){g.flags&=-257,B_(g,o,a,i,e),g.mode&1&&F_(i,c,e),e=g,u=c;var T=e.updateQueue;if(T===null){var A=new Set;A.add(u),e.updateQueue=A}else T.add(u);break e}else{if(!(e&1)){F_(i,c,e),wm();break e}u=Error(B(426))}}else if(Ae&&a.mode&1){var N=j_(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),B_(N,o,a,i,e),em(Xi(u,a));break e}}i=u=Xi(u,a),Ke!==4&&(Ke=2),fa===null?fa=[i]:fa.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var I=JT(i,u,e);b_(i,I);break e;case 1:a=u;var v=i.type,w=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Br===null||!Br.has(w)))){i.flags|=65536,e&=-e,i.lanes|=e;var k=ZT(i,a,e);b_(i,k);break e}}i=i.return}while(i!==null)}_I(n)}catch(V){e=V,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function gI(){var t=rc.current;return rc.current=nc,t===null?nc:t}function wm(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Ze===null||!($s&268435455)&&!(qc&268435455)||Rr(Ze,st)}function oc(t,e){var n=de;de|=2;var r=gI();(Ze!==t||st!==e)&&(zn=null,Os(t,e));do try{Px();break}catch(s){mI(t,s)}while(!0);if(nm(),de=n,rc.current=r,Be!==null)throw Error(B(261));return Ze=null,st=0,Ke}function Px(){for(;Be!==null;)yI(Be)}function Rx(){for(;Be!==null&&!ZP();)yI(Be)}function yI(t){var e=wI(t.alternate,t,jt);t.memoizedProps=t.pendingProps,e===null?_I(t):Be=e,mm.current=null}function _I(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ex(n,e),n!==null){n.flags&=32767,Be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,Be=null;return}}else if(n=wx(n,e,jt),n!==null){Be=n;return}if(e=e.sibling,e!==null){Be=e;return}Be=e=t}while(e!==null);Ke===0&&(Ke=5)}function Is(t,e,n){var r=pe,s=nn.transition;try{nn.transition=null,pe=1,xx(t,e,n,r)}finally{nn.transition=s,pe=r}return null}function xx(t,e,n,r){do ji();while(Or!==null);if(de&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(uR(t,i),t===Ze&&(Be=Ze=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zl||(Zl=!0,EI(Bu,function(){return ji(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=nn.transition,nn.transition=null;var o=pe;pe=1;var a=de;de|=4,mm.current=null,Ix(t,n),dI(n,t),QR(wf),zu=!!vf,wf=vf=null,t.current=n,Sx(n),eR(),de=a,pe=o,nn.transition=i}else t.current=n;if(Zl&&(Zl=!1,Or=t,ic=s),i=t.pendingLanes,i===0&&(Br=null),rR(n.stateNode),Mt(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(sc)throw sc=!1,t=jf,jf=null,t;return ic&1&&t.tag!==0&&ji(),i=t.pendingLanes,i&1?t===Bf?pa++:(pa=0,Bf=t):pa=0,cs(),null}function ji(){if(Or!==null){var t=JE(ic),e=nn.transition,n=pe;try{if(nn.transition=null,pe=16>t?16:t,Or===null)var r=!1;else{if(t=Or,Or=null,ic=0,de&6)throw Error(B(331));var s=de;for(de|=4,K=t.current;K!==null;){var i=K,o=i.child;if(K.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(K=c;K!==null;){var h=K;switch(h.tag){case 0:case 11:case 15:da(8,h,i)}var f=h.child;if(f!==null)f.return=h,K=f;else for(;K!==null;){h=K;var p=h.sibling,g=h.return;if(uI(h),h===c){K=null;break}if(p!==null){p.return=g,K=p;break}K=g}}}var T=i.alternate;if(T!==null){var A=T.child;if(A!==null){T.child=null;do{var N=A.sibling;A.sibling=null,A=N}while(A!==null)}}K=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,K=o;else e:for(;K!==null;){if(i=K,i.flags&2048)switch(i.tag){case 0:case 11:case 15:da(9,i,i.return)}var I=i.sibling;if(I!==null){I.return=i.return,K=I;break e}K=i.return}}var v=t.current;for(K=v;K!==null;){o=K;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,K=w;else e:for(o=v;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gc(9,a)}}catch(V){De(a,a.return,V)}if(a===o){K=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,K=k;break e}K=a.return}}if(de=s,cs(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Mc,t)}catch{}r=!0}return r}finally{pe=n,nn.transition=e}}return!1}function ev(t,e,n){e=Xi(n,e),e=JT(t,e,1),t=jr(t,e,1),e=At(),t!==null&&(il(t,1,e),Mt(t,e))}function De(t,e,n){if(t.tag===3)ev(t,t,n);else for(;e!==null;){if(e.tag===3){ev(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Br===null||!Br.has(r))){t=Xi(n,t),t=ZT(e,t,1),e=jr(e,t,1),t=At(),e!==null&&(il(e,1,t),Mt(e,t));break}}e=e.return}}function kx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=At(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(st&n)===n&&(Ke===4||Ke===3&&(st&130023424)===st&&500>Le()-ym?Os(t,0):gm|=n),Mt(t,e)}function vI(t,e){e===0&&(t.mode&1?(e=zl,zl<<=1,!(zl&130023424)&&(zl=4194304)):e=1);var n=At();t=sr(t,e),t!==null&&(il(t,e,n),Mt(t,n))}function Nx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vI(t,n)}function Dx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),vI(t,n)}var wI;wI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,vx(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Ae&&e.flags&1048576&&ST(e,Yu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Eu(t,e),t=e.pendingProps;var s=Wi(e,yt.current);Fi(e,n),s=cm(null,e,r,t,s,n);var i=hm();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Lt(r)?(i=!0,Ku(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,im(e),s.updater=Hc,e.stateNode=s,s._reactInternals=e,xf(e,r,t,n),e=Df(null,e,r,!0,i,n)):(e.tag=0,Ae&&i&&Jp(e),St(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Eu(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Ox(r),t=ln(r,t),s){case 0:e=Nf(null,e,r,t,n);break e;case 1:e=H_(null,e,r,t,n);break e;case 11:e=$_(null,e,r,t,n);break e;case 14:e=z_(null,e,r,ln(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),Nf(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),H_(t,e,r,s,n);case 3:e:{if(rI(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,kT(t,e),Zu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Xi(Error(B(423)),e),e=G_(t,e,r,n,s);break e}else if(r!==s){s=Xi(Error(B(424)),e),e=G_(t,e,r,n,s);break e}else for(Bt=Fr(e.stateNode.containerInfo.firstChild),Ht=e,Ae=!0,cn=null,n=RT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ki(),r===s){e=ir(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return NT(e),t===null&&Cf(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Ef(r,s)?o=null:i!==null&&Ef(r,i)&&(e.flags|=32),nI(t,e),St(t,e,o,n),e.child;case 6:return t===null&&Cf(e),null;case 13:return sI(t,e,n);case 4:return om(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qi(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),$_(t,e,r,s,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ye(Xu,r._currentValue),r._currentValue=o,i!==null)if(gn(i.value,o)){if(i.children===s.children&&!Vt.current){e=ir(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Xn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Pf(i.return,n,e),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Pf(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}St(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Fi(e,n),s=rn(s),r=r(s),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,s=ln(r,e.pendingProps),s=ln(r.type,s),z_(t,e,r,s,n);case 15:return eI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),Eu(t,e),e.tag=1,Lt(r)?(t=!0,Ku(e)):t=!1,Fi(e,n),XT(e,r,s),xf(e,r,s,n),Df(null,e,r,!0,t,n);case 19:return iI(t,e,n);case 22:return tI(t,e,n)}throw Error(B(156,e.tag))};function EI(t,e){return KE(t,e)}function bx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,n,r){return new bx(t,e,n,r)}function Em(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ox(t){if(typeof t=="function")return Em(t)?1:0;if(t!=null){if(t=t.$$typeof,t===jp)return 11;if(t===Bp)return 14}return 2}function zr(t,e){var n=t.alternate;return n===null?(n=tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Su(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Em(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vi:return Vs(n.children,s,i,e);case Fp:o=8,s|=8;break;case Jd:return t=tn(12,n,e,s|2),t.elementType=Jd,t.lanes=i,t;case Zd:return t=tn(13,n,e,s),t.elementType=Zd,t.lanes=i,t;case ef:return t=tn(19,n,e,s),t.elementType=ef,t.lanes=i,t;case NE:return Wc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xE:o=10;break e;case kE:o=9;break e;case jp:o=11;break e;case Bp:o=14;break e;case Ir:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=tn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Vs(t,e,n,r){return t=tn(7,t,r,e),t.lanes=n,t}function Wc(t,e,n,r){return t=tn(22,t,r,e),t.elementType=NE,t.lanes=n,t.stateNode={isHidden:!1},t}function Ed(t,e,n){return t=tn(6,t,null,e),t.lanes=n,t}function Td(t,e,n){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Vx(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nd(0),this.expirationTimes=nd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Tm(t,e,n,r,s,i,o,a,u){return t=new Vx(t,e,n,a,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=tn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},im(i),t}function Lx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_i,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function TI(t){if(!t)return Jr;t=t._reactInternals;e:{if(ei(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Lt(n))return TT(t,n,e)}return e}function II(t,e,n,r,s,i,o,a,u){return t=Tm(n,r,!0,t,s,i,o,a,u),t.context=TI(null),n=t.current,r=At(),s=$r(n),i=Xn(r,s),i.callback=e??null,jr(n,i,s),t.current.lanes=s,il(t,s,r),Mt(t,r),t}function Kc(t,e,n,r){var s=e.current,i=At(),o=$r(s);return n=TI(n),e.context===null?e.context=n:e.pendingContext=n,e=Xn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=jr(s,e,o),t!==null&&(fn(t,s,o,i),_u(t,s,o)),o}function ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Im(t,e){tv(t,e),(t=t.alternate)&&tv(t,e)}function Mx(){return null}var SI=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sm(t){this._internalRoot=t}Qc.prototype.render=Sm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Kc(t,e,null,null)};Qc.prototype.unmount=Sm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zs(function(){Kc(null,t,null,null)}),e[rr]=null}};function Qc(t){this._internalRoot=t}Qc.prototype.unstable_scheduleHydration=function(t){if(t){var e=tT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pr.length&&e!==0&&e<Pr[n].priority;n++);Pr.splice(n,0,t),n===0&&rT(t)}};function Am(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nv(){}function Ux(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=ac(o);i.call(c)}}var o=II(e,r,t,0,null,!1,!1,"",nv);return t._reactRootContainer=o,t[rr]=o.current,Va(t.nodeType===8?t.parentNode:t),zs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var c=ac(u);a.call(c)}}var u=Tm(t,0,!1,null,null,!1,!1,"",nv);return t._reactRootContainer=u,t[rr]=u.current,Va(t.nodeType===8?t.parentNode:t),zs(function(){Kc(e,u,n,r)}),u}function Xc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var u=ac(o);a.call(u)}}Kc(e,o,t,s)}else o=Ux(n,e,t,s,r);return ac(o)}ZE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xo(e.pendingLanes);n!==0&&(Hp(e,n|1),Mt(e,Le()),!(de&6)&&(Ji=Le()+500,cs()))}break;case 13:zs(function(){var r=sr(t,1);if(r!==null){var s=At();fn(r,t,1,s)}}),Im(t,1)}};Gp=function(t){if(t.tag===13){var e=sr(t,134217728);if(e!==null){var n=At();fn(e,t,134217728,n)}Im(t,134217728)}};eT=function(t){if(t.tag===13){var e=$r(t),n=sr(t,e);if(n!==null){var r=At();fn(n,t,e,r)}Im(t,e)}};tT=function(){return pe};nT=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};hf=function(t,e,n){switch(e){case"input":if(rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Bc(r);if(!s)throw Error(B(90));bE(r),rf(r,s)}}}break;case"textarea":VE(t,n);break;case"select":e=n.value,e!=null&&Vi(t,!!n.multiple,e,!1)}};$E=_m;zE=zs;var Fx={usingClientEntryPoint:!1,Events:[al,Ii,Bc,jE,BE,_m]},$o={findFiberByHostInstance:Ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jx={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qE(t),t===null?null:t.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||Mx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eu.isDisabled&&eu.supportsFiber)try{Mc=eu.inject(jx),Pn=eu}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fx;Wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Am(e))throw Error(B(200));return Lx(t,e,null,n)};Wt.createRoot=function(t,e){if(!Am(t))throw Error(B(299));var n=!1,r="",s=SI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Tm(t,1,!1,null,null,n,!1,r,s),t[rr]=e.current,Va(t.nodeType===8?t.parentNode:t),new Sm(e)};Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=qE(e),t=t===null?null:t.stateNode,t};Wt.flushSync=function(t){return zs(t)};Wt.hydrate=function(t,e,n){if(!Yc(e))throw Error(B(200));return Xc(null,t,e,!0,n)};Wt.hydrateRoot=function(t,e,n){if(!Am(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=SI;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=II(e,null,t,1,n??null,s,!1,i,o),t[rr]=e.current,Va(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Qc(e)};Wt.render=function(t,e,n){if(!Yc(e))throw Error(B(200));return Xc(null,t,e,!1,n)};Wt.unmountComponentAtNode=function(t){if(!Yc(t))throw Error(B(40));return t._reactRootContainer?(zs(function(){Xc(null,null,t,!1,function(){t._reactRootContainer=null,t[rr]=null})}),!0):!1};Wt.unstable_batchedUpdates=_m;Wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yc(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Xc(t,e,n,!1,r)};Wt.version="18.3.1-next-f1338f8080-20240426";function AI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(AI)}catch(t){console.error(t)}}AI(),AE.exports=Wt;var Bx=AE.exports,rv=Bx;Yd.createRoot=rv.createRoot,Yd.hydrateRoot=rv.hydrateRoot;const $x="modulepreload",zx=function(t){return"/"+t},sv={},hs=function(e,n,r){let s=Promise.resolve();return n&&n.length>0&&(document.getElementsByTagName("link"),s=Promise.all(n.map(i=>{if(i=zx(i),i in sv)return;sv[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":$x,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((c,h)=>{u.addEventListener("load",c),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})}))),s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var Hx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Gx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vt=(t,e)=>{const n=$.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,children:a,...u},c)=>$.createElement("svg",{ref:c,...Hx,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:`lucide lucide-${Gx(t)}`,...u},[...e.map(([h,f])=>$.createElement(h,f)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${t}`,n},qx=vt("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]),Wx=vt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Kx=vt("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),Qx=vt("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),Yx=vt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),Xx=vt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Jx=vt("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]),Zx=vt("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]),ek=vt("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),tk=vt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),nk=vt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),CI=vt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),rk=vt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),sk=vt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),iv=vt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),PI=vt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),zo=({icon:t,label:e,active:n,onClick:r,collapsed:s})=>R.jsxs("button",{onClick:r,className:`w-full flex items-center ${s?"justify-center px-2":"justify-start px-4"} py-3 rounded-full transition-all duration-200 group relative
    ${n?"bg-blue-100/50 text-blue-700 font-medium":"text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`,title:s?e:void 0,children:[Lc.cloneElement(t,{className:`w-5 h-5 flex-shrink-0 ${n?"text-blue-600":"text-gray-400 group-hover:text-gray-600"}`}),!s&&R.jsx("span",{className:"ml-3 text-sm truncate transition-opacity duration-200",children:e})]}),ik=({children:t,currentView:e,onNavigate:n})=>{const[r,s]=$.useState(!0),i=()=>{s(!r)};return R.jsxs("div",{className:"min-h-screen flex font-sans bg-white text-gray-900",children:[R.jsxs("aside",{className:`${r?"w-64":"w-20"} 
        transition-all duration-300 ease-in-out border-r border-gray-200 flex flex-col bg-gray-50/80 backdrop-blur-md fixed h-full z-20`,children:[R.jsx("button",{onClick:i,className:"absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-gray-600 z-50 hover:scale-110 transition-transform",children:r?R.jsx(Yx,{className:"w-3 h-3"}):R.jsx(Xx,{className:"w-3 h-3"})}),R.jsx("div",{className:`h-20 flex items-center ${r?"px-8 justify-start":"justify-center"} transition-all duration-300`,children:R.jsx("div",{className:"flex items-center gap-2.5 cursor-pointer",onClick:()=>n("INSIGHT"),children:r?R.jsx("img",{src:"/logo.png",alt:"Baro.ai Logo",className:"w-auto h-8 object-contain"}):R.jsx("img",{src:"/logo.png",alt:"Logo",className:"w-8 h-8 object-contain"})})}),R.jsxs("nav",{className:"flex-1 py-6 px-3 space-y-1",children:[R.jsx(zo,{icon:R.jsx(Kx,{}),label:"인사이트",active:e==="INSIGHT",onClick:()=>n("INSIGHT"),collapsed:!r}),R.jsx(zo,{icon:R.jsx(Zx,{}),label:"보드",active:e==="BOARD",onClick:()=>n("BOARD"),collapsed:!r}),R.jsx(zo,{icon:R.jsx(Qx,{}),label:"Gemini Pro",active:e==="GEMINI",onClick:()=>n("GEMINI"),collapsed:!r}),R.jsx("div",{className:"pt-2"}),R.jsx(zo,{icon:R.jsx(qx,{}),label:"보관함",active:e==="ARCHIVE",onClick:()=>n("ARCHIVE"),collapsed:!r}),R.jsx(zo,{icon:R.jsx(sk,{}),label:"설정",active:e==="SETTINGS",onClick:()=>n("SETTINGS"),collapsed:!r})]}),R.jsx("div",{className:`p-6 border-t border-gray-100 transition-all duration-300 ${!r&&"px-2"}`,children:r?R.jsxs("div",{className:"bg-white p-4 rounded-2xl border border-gray-200 shadow-sm",children:[R.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[R.jsx(iv,{className:"w-4 h-4 text-blue-600"}),R.jsx("p",{className:"text-xs font-semibold text-gray-600",children:"AI 크레딧"})]}),R.jsx("div",{className:"w-full bg-gray-100 rounded-full h-1.5 mb-2",children:R.jsx("div",{className:"bg-blue-600 h-1.5 rounded-full w-[45%]"})}),R.jsxs("div",{className:"flex justify-between text-[10px] text-gray-500 font-medium",children:[R.jsx("span",{children:"450 사용"}),R.jsx("span",{children:"1000 한도"})]})]}):R.jsxs("div",{className:"bg-white p-2 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center gap-1 group relative cursor-help",children:[R.jsx(iv,{className:"w-4 h-4 text-blue-600"}),R.jsx("div",{className:"w-full bg-gray-100 rounded-full h-1 w-8",children:R.jsx("div",{className:"bg-blue-600 h-1 rounded-full w-[45%]"})}),R.jsx("div",{className:"absolute left-full ml-2 bottom-0 w-32 bg-gray-800 text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none z-50",children:"AI 크레딧: 450/1000"})]})})]}),R.jsxs("main",{className:`flex-1 flex flex-col h-screen overflow-hidden relative transition-all duration-300 ease-in-out
        ${r?"ml-64":"ml-20"}`,children:[e==="BOARD"&&R.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"}),t]})]})};var Nt=(t=>(t.REQUESTED="REQUESTED",t.CHECKED="CHECKED",t.WIP="WIP",t.FEEDBACK="FEEDBACK",t.DONE="DONE",t.CANCELLED="CANCELLED",t.ARCHIVED="ARCHIVED",t.TRASH="TRASH",t))(Nt||{}),ki=(t=>(t.HIGH="HIGH",t.MEDIUM="MEDIUM",t.LOW="LOW",t))(ki||{});const ok=()=>{};var ov={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ak=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},xI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;u||(g=64,o||(p=64)),r.push(n[h],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(RI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ak(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw new lk;const p=i<<2|a>>4;if(r.push(p),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uk=function(t){const e=RI(t);return xI.encodeByteArray(e,!0)},lc=function(t){return uk(t).replace(/\./g,"")},kI=function(t){try{return xI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ck(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hk=()=>ck().__FIREBASE_DEFAULTS__,dk=()=>{if(typeof process>"u"||typeof ov>"u")return;const t=ov.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kI(t[1]);return e&&JSON.parse(e)},Jc=()=>{try{return ok()||hk()||dk()||fk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},NI=t=>{var e,n;return(n=(e=Jc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},DI=t=>{const e=NI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bI=()=>{var t;return(t=Jc())==null?void 0:t.config},OI=t=>{var e;return(e=Jc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ds(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cm(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function VI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[lc(JSON.stringify(n)),lc(JSON.stringify(o)),""].join(".")}const ma={};function mk(){const t={prod:[],emulator:[]};for(const e of Object.keys(ma))ma[e]?t.emulator.push(e):t.prod.push(e);return t}function gk(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let av=!1;function Pm(t,e){if(typeof window>"u"||typeof document>"u"||!ds(window.location.host)||ma[t]===e||ma[t]||av)return;ma[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",i=mk().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function u(p,g){p.setAttribute("width","24"),p.setAttribute("id",g),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function c(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{av=!0,o()},p}function h(p,g){p.setAttribute("id",g),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=gk(r),g=n("text"),T=document.getElementById(g)||document.createElement("span"),A=n("learnmore"),N=document.getElementById(A)||document.createElement("a"),I=n("preprendIcon"),v=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const w=p.element;a(w),h(N,A);const k=c();u(v,I),w.append(v,T,N,k),document.body.appendChild(w)}i?(T.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,T.innerText="Preview backend running in this workspace."),T.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function _k(){var e;const t=(e=Jc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ek(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tk(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ik(){return!_k()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sk(){try{return typeof indexedDB=="object"}catch{return!1}}function Ak(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ck,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ul.prototype.create)}}class ul{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Pk(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Fn(s,a,r)}}function Pk(t,e){return t.replace(Rk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Rk=/\{\$([^}]+)}/g;function xk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(lv(i)&&lv(o)){if(!Hs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function lv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ea(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kk(t,e){const n=new Nk(t,e);return n.subscribe.bind(n)}class Nk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Dk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Id),s.error===void 0&&(s.error=Id),s.complete===void 0&&(s.complete=Id);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Id(){}/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}class Zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ss="[DEFAULT]";/**
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
 */class bk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vk(e))try{this.getOrInitializeService({instanceIdentifier:Ss})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ss){return this.instances.has(e)}getOptions(e=Ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ok(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ss){return this.component?this.component.multipleInstances?e:Ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ok(t){return t===Ss?void 0:t}function Vk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Lk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const Mk={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Uk=oe.INFO,Fk={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},jk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Fk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rm{constructor(e){this.name=e,this._logLevel=Uk,this._logHandler=jk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const Bk=(t,e)=>e.some(n=>t instanceof n);let uv,cv;function $k(){return uv||(uv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zk(){return cv||(cv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const LI=new WeakMap,Hf=new WeakMap,MI=new WeakMap,Sd=new WeakMap,xm=new WeakMap;function Hk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Hr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&LI.set(n,t)}).catch(()=>{}),xm.set(e,t),e}function Gk(t){if(Hf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hf.set(t,e)}let Gf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||MI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qk(t){Gf=t(Gf)}function Wk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ad(this),e,...n);return MI.set(r,e.sort?e.sort():[e]),Hr(r)}:zk().includes(t)?function(...e){return t.apply(Ad(this),e),Hr(LI.get(this))}:function(...e){return Hr(t.apply(Ad(this),e))}}function Kk(t){return typeof t=="function"?Wk(t):(t instanceof IDBTransaction&&Gk(t),Bk(t,$k())?new Proxy(t,Gf):t)}function Hr(t){if(t instanceof IDBRequest)return Hk(t);if(Sd.has(t))return Sd.get(t);const e=Kk(t);return e!==t&&(Sd.set(t,e),xm.set(e,t)),e}const Ad=t=>xm.get(t);function Qk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Hr(o.result),u.oldVersion,u.newVersion,Hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Yk=["get","getKey","getAll","getAllKeys","count"],Xk=["put","add","delete","clear"],Cd=new Map;function hv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cd.get(e))return Cd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Xk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yk.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&u.done]))[0]};return Cd.set(e,i),i}qk(t=>({...t,get:(e,n,r)=>hv(e,n)||t.get(e,n,r),has:(e,n)=>!!hv(e,n)||t.has(e,n)}));/**
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
 */class Jk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qf="@firebase/app",dv="0.14.6";/**
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
 */const or=new Rm("@firebase/app"),eN="@firebase/app-compat",tN="@firebase/analytics-compat",nN="@firebase/analytics",rN="@firebase/app-check-compat",sN="@firebase/app-check",iN="@firebase/auth",oN="@firebase/auth-compat",aN="@firebase/database",lN="@firebase/data-connect",uN="@firebase/database-compat",cN="@firebase/functions",hN="@firebase/functions-compat",dN="@firebase/installations",fN="@firebase/installations-compat",pN="@firebase/messaging",mN="@firebase/messaging-compat",gN="@firebase/performance",yN="@firebase/performance-compat",_N="@firebase/remote-config",vN="@firebase/remote-config-compat",wN="@firebase/storage",EN="@firebase/storage-compat",TN="@firebase/firestore",IN="@firebase/ai",SN="@firebase/firestore-compat",AN="firebase",CN="12.6.0";/**
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
 */const Wf="[DEFAULT]",PN={[qf]:"fire-core",[eN]:"fire-core-compat",[nN]:"fire-analytics",[tN]:"fire-analytics-compat",[sN]:"fire-app-check",[rN]:"fire-app-check-compat",[iN]:"fire-auth",[oN]:"fire-auth-compat",[aN]:"fire-rtdb",[lN]:"fire-data-connect",[uN]:"fire-rtdb-compat",[cN]:"fire-fn",[hN]:"fire-fn-compat",[dN]:"fire-iid",[fN]:"fire-iid-compat",[pN]:"fire-fcm",[mN]:"fire-fcm-compat",[gN]:"fire-perf",[yN]:"fire-perf-compat",[_N]:"fire-rc",[vN]:"fire-rc-compat",[wN]:"fire-gcs",[EN]:"fire-gcs-compat",[TN]:"fire-fst",[SN]:"fire-fst-compat",[IN]:"fire-vertex","fire-js":"fire-js",[AN]:"fire-js-all"};/**
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
 */const uc=new Map,RN=new Map,Kf=new Map;function fv(t,e){try{t.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gs(t){const e=t.name;if(Kf.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Kf.set(e,t);for(const n of uc.values())fv(n,t);for(const n of RN.values())fv(n,t);return!0}function Zc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const xN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new ul("app","Firebase",xN);/**
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
 */class kN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
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
 */const ti=CN;function UI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Wf,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Gr.create("bad-app-name",{appName:String(s)});if(n||(n=bI()),!n)throw Gr.create("no-options");const i=uc.get(s);if(i){if(Hs(n,i.options)&&Hs(r,i.config))return i;throw Gr.create("duplicate-app",{appName:s})}const o=new Lk(s);for(const u of Kf.values())o.addComponent(u);const a=new kN(n,r,o);return uc.set(s,a),a}function km(t=Wf){const e=uc.get(t);if(!e&&t===Wf&&bI())return UI();if(!e)throw Gr.create("no-app",{appName:t});return e}function xn(t,e,n){let r=PN[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(o.join(" "));return}Gs(new Zr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const NN="firebase-heartbeat-database",DN=1,Ha="firebase-heartbeat-store";let Pd=null;function FI(){return Pd||(Pd=Qk(NN,DN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ha)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),Pd}async function bN(t){try{const n=(await FI()).transaction(Ha),r=await n.objectStore(Ha).get(jI(t));return await n.done,r}catch(e){if(e instanceof Fn)or.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(n.message)}}}async function pv(t,e){try{const r=(await FI()).transaction(Ha,"readwrite");await r.objectStore(Ha).put(e,jI(t)),await r.done}catch(n){if(n instanceof Fn)or.warn(n.message);else{const r=Gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(r.message)}}}function jI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ON=1024,VN=30;class LN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new UN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>VN){const o=FN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mv(),{heartbeatsToSend:r,unsentEntries:s}=MN(this._heartbeatsCache.heartbeats),i=lc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return or.warn(n),""}}}function mv(){return new Date().toISOString().substring(0,10)}function MN(t,e=ON){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),gv(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class UN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sk()?Ak().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return pv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return pv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function gv(t){return lc(JSON.stringify({version:2,heartbeats:t})).length}function FN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function jN(t){Gs(new Zr("platform-logger",e=>new Jk(e),"PRIVATE")),Gs(new Zr("heartbeat",e=>new LN(e),"PRIVATE")),xn(qf,dv,t),xn(qf,dv,"esm2020"),xn("fire-js","")}jN("");var BN="firebase",$N="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(BN,$N,"app");var yv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qr,BI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function S(){}S.prototype=y.prototype,E.F=y.prototype,E.prototype=new S,E.prototype.constructor=E,E.D=function(P,x,D){for(var C=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)C[ue-2]=arguments[ue];return y.prototype[x].apply(P,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,S){S||(S=0);const P=Array(16);if(typeof y=="string")for(var x=0;x<16;++x)P[x]=y.charCodeAt(S++)|y.charCodeAt(S++)<<8|y.charCodeAt(S++)<<16|y.charCodeAt(S++)<<24;else for(x=0;x<16;++x)P[x]=y[S++]|y[S++]<<8|y[S++]<<16|y[S++]<<24;y=E.g[0],S=E.g[1],x=E.g[2];let D=E.g[3],C;C=y+(D^S&(x^D))+P[0]+3614090360&4294967295,y=S+(C<<7&4294967295|C>>>25),C=D+(x^y&(S^x))+P[1]+3905402710&4294967295,D=y+(C<<12&4294967295|C>>>20),C=x+(S^D&(y^S))+P[2]+606105819&4294967295,x=D+(C<<17&4294967295|C>>>15),C=S+(y^x&(D^y))+P[3]+3250441966&4294967295,S=x+(C<<22&4294967295|C>>>10),C=y+(D^S&(x^D))+P[4]+4118548399&4294967295,y=S+(C<<7&4294967295|C>>>25),C=D+(x^y&(S^x))+P[5]+1200080426&4294967295,D=y+(C<<12&4294967295|C>>>20),C=x+(S^D&(y^S))+P[6]+2821735955&4294967295,x=D+(C<<17&4294967295|C>>>15),C=S+(y^x&(D^y))+P[7]+4249261313&4294967295,S=x+(C<<22&4294967295|C>>>10),C=y+(D^S&(x^D))+P[8]+1770035416&4294967295,y=S+(C<<7&4294967295|C>>>25),C=D+(x^y&(S^x))+P[9]+2336552879&4294967295,D=y+(C<<12&4294967295|C>>>20),C=x+(S^D&(y^S))+P[10]+4294925233&4294967295,x=D+(C<<17&4294967295|C>>>15),C=S+(y^x&(D^y))+P[11]+2304563134&4294967295,S=x+(C<<22&4294967295|C>>>10),C=y+(D^S&(x^D))+P[12]+1804603682&4294967295,y=S+(C<<7&4294967295|C>>>25),C=D+(x^y&(S^x))+P[13]+4254626195&4294967295,D=y+(C<<12&4294967295|C>>>20),C=x+(S^D&(y^S))+P[14]+2792965006&4294967295,x=D+(C<<17&4294967295|C>>>15),C=S+(y^x&(D^y))+P[15]+1236535329&4294967295,S=x+(C<<22&4294967295|C>>>10),C=y+(x^D&(S^x))+P[1]+4129170786&4294967295,y=S+(C<<5&4294967295|C>>>27),C=D+(S^x&(y^S))+P[6]+3225465664&4294967295,D=y+(C<<9&4294967295|C>>>23),C=x+(y^S&(D^y))+P[11]+643717713&4294967295,x=D+(C<<14&4294967295|C>>>18),C=S+(D^y&(x^D))+P[0]+3921069994&4294967295,S=x+(C<<20&4294967295|C>>>12),C=y+(x^D&(S^x))+P[5]+3593408605&4294967295,y=S+(C<<5&4294967295|C>>>27),C=D+(S^x&(y^S))+P[10]+38016083&4294967295,D=y+(C<<9&4294967295|C>>>23),C=x+(y^S&(D^y))+P[15]+3634488961&4294967295,x=D+(C<<14&4294967295|C>>>18),C=S+(D^y&(x^D))+P[4]+3889429448&4294967295,S=x+(C<<20&4294967295|C>>>12),C=y+(x^D&(S^x))+P[9]+568446438&4294967295,y=S+(C<<5&4294967295|C>>>27),C=D+(S^x&(y^S))+P[14]+3275163606&4294967295,D=y+(C<<9&4294967295|C>>>23),C=x+(y^S&(D^y))+P[3]+4107603335&4294967295,x=D+(C<<14&4294967295|C>>>18),C=S+(D^y&(x^D))+P[8]+1163531501&4294967295,S=x+(C<<20&4294967295|C>>>12),C=y+(x^D&(S^x))+P[13]+2850285829&4294967295,y=S+(C<<5&4294967295|C>>>27),C=D+(S^x&(y^S))+P[2]+4243563512&4294967295,D=y+(C<<9&4294967295|C>>>23),C=x+(y^S&(D^y))+P[7]+1735328473&4294967295,x=D+(C<<14&4294967295|C>>>18),C=S+(D^y&(x^D))+P[12]+2368359562&4294967295,S=x+(C<<20&4294967295|C>>>12),C=y+(S^x^D)+P[5]+4294588738&4294967295,y=S+(C<<4&4294967295|C>>>28),C=D+(y^S^x)+P[8]+2272392833&4294967295,D=y+(C<<11&4294967295|C>>>21),C=x+(D^y^S)+P[11]+1839030562&4294967295,x=D+(C<<16&4294967295|C>>>16),C=S+(x^D^y)+P[14]+4259657740&4294967295,S=x+(C<<23&4294967295|C>>>9),C=y+(S^x^D)+P[1]+2763975236&4294967295,y=S+(C<<4&4294967295|C>>>28),C=D+(y^S^x)+P[4]+1272893353&4294967295,D=y+(C<<11&4294967295|C>>>21),C=x+(D^y^S)+P[7]+4139469664&4294967295,x=D+(C<<16&4294967295|C>>>16),C=S+(x^D^y)+P[10]+3200236656&4294967295,S=x+(C<<23&4294967295|C>>>9),C=y+(S^x^D)+P[13]+681279174&4294967295,y=S+(C<<4&4294967295|C>>>28),C=D+(y^S^x)+P[0]+3936430074&4294967295,D=y+(C<<11&4294967295|C>>>21),C=x+(D^y^S)+P[3]+3572445317&4294967295,x=D+(C<<16&4294967295|C>>>16),C=S+(x^D^y)+P[6]+76029189&4294967295,S=x+(C<<23&4294967295|C>>>9),C=y+(S^x^D)+P[9]+3654602809&4294967295,y=S+(C<<4&4294967295|C>>>28),C=D+(y^S^x)+P[12]+3873151461&4294967295,D=y+(C<<11&4294967295|C>>>21),C=x+(D^y^S)+P[15]+530742520&4294967295,x=D+(C<<16&4294967295|C>>>16),C=S+(x^D^y)+P[2]+3299628645&4294967295,S=x+(C<<23&4294967295|C>>>9),C=y+(x^(S|~D))+P[0]+4096336452&4294967295,y=S+(C<<6&4294967295|C>>>26),C=D+(S^(y|~x))+P[7]+1126891415&4294967295,D=y+(C<<10&4294967295|C>>>22),C=x+(y^(D|~S))+P[14]+2878612391&4294967295,x=D+(C<<15&4294967295|C>>>17),C=S+(D^(x|~y))+P[5]+4237533241&4294967295,S=x+(C<<21&4294967295|C>>>11),C=y+(x^(S|~D))+P[12]+1700485571&4294967295,y=S+(C<<6&4294967295|C>>>26),C=D+(S^(y|~x))+P[3]+2399980690&4294967295,D=y+(C<<10&4294967295|C>>>22),C=x+(y^(D|~S))+P[10]+4293915773&4294967295,x=D+(C<<15&4294967295|C>>>17),C=S+(D^(x|~y))+P[1]+2240044497&4294967295,S=x+(C<<21&4294967295|C>>>11),C=y+(x^(S|~D))+P[8]+1873313359&4294967295,y=S+(C<<6&4294967295|C>>>26),C=D+(S^(y|~x))+P[15]+4264355552&4294967295,D=y+(C<<10&4294967295|C>>>22),C=x+(y^(D|~S))+P[6]+2734768916&4294967295,x=D+(C<<15&4294967295|C>>>17),C=S+(D^(x|~y))+P[13]+1309151649&4294967295,S=x+(C<<21&4294967295|C>>>11),C=y+(x^(S|~D))+P[4]+4149444226&4294967295,y=S+(C<<6&4294967295|C>>>26),C=D+(S^(y|~x))+P[11]+3174756917&4294967295,D=y+(C<<10&4294967295|C>>>22),C=x+(y^(D|~S))+P[2]+718787259&4294967295,x=D+(C<<15&4294967295|C>>>17),C=S+(D^(x|~y))+P[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(x+(C<<21&4294967295|C>>>11))&4294967295,E.g[2]=E.g[2]+x&4294967295,E.g[3]=E.g[3]+D&4294967295}r.prototype.v=function(E,y){y===void 0&&(y=E.length);const S=y-this.blockSize,P=this.C;let x=this.h,D=0;for(;D<y;){if(x==0)for(;D<=S;)s(this,E,D),D+=this.blockSize;if(typeof E=="string"){for(;D<y;)if(P[x++]=E.charCodeAt(D++),x==this.blockSize){s(this,P),x=0;break}}else for(;D<y;)if(P[x++]=E[D++],x==this.blockSize){s(this,P),x=0;break}}this.h=x,this.o+=y},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var S=E.length-8;S<E.length;++S)E[S]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,S=0;S<4;++S)for(let P=0;P<32;P+=8)E[y++]=this.g[S]>>>P&255;return E};function i(E,y){var S=a;return Object.prototype.hasOwnProperty.call(S,E)?S[E]:S[E]=y(E)}function o(E,y){this.h=y;const S=[];let P=!0;for(let x=E.length-1;x>=0;x--){const D=E[x]|0;P&&D==y||(S[x]=D,P=!1)}this.g=S}var a={};function u(E){return-128<=E&&E<128?i(E,function(y){return new o([y|0],y<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return f;if(E<0)return N(c(-E));const y=[];let S=1;for(let P=0;E>=S;P++)y[P]=E/S|0,S*=4294967296;return new o(y,0)}function h(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return N(h(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=c(Math.pow(y,8));let P=f;for(let D=0;D<E.length;D+=8){var x=Math.min(8,E.length-D);const C=parseInt(E.substring(D,D+x),y);x<8?(x=c(Math.pow(y,x)),P=P.j(x).add(c(C))):(P=P.j(S),P=P.add(c(C)))}return P}var f=u(0),p=u(1),g=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-N(this).m();let E=0,y=1;for(let S=0;S<this.g.length;S++){const P=this.i(S);E+=(P>=0?P:4294967296+P)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(T(this))return"0";if(A(this))return"-"+N(this).toString(E);const y=c(Math.pow(E,6));var S=this;let P="";for(;;){const x=k(S,y).g;S=I(S,x.j(y));let D=((S.g.length>0?S.g[0]:S.h)>>>0).toString(E);if(S=x,T(S))return D+P;for(;D.length<6;)D="0"+D;P=D+P}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function T(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function A(E){return E.h==-1}t.l=function(E){return E=I(this,E),A(E)?-1:T(E)?0:1};function N(E){const y=E.g.length,S=[];for(let P=0;P<y;P++)S[P]=~E.g[P];return new o(S,~E.h).add(p)}t.abs=function(){return A(this)?N(this):this},t.add=function(E){const y=Math.max(this.g.length,E.g.length),S=[];let P=0;for(let x=0;x<=y;x++){let D=P+(this.i(x)&65535)+(E.i(x)&65535),C=(D>>>16)+(this.i(x)>>>16)+(E.i(x)>>>16);P=C>>>16,D&=65535,C&=65535,S[x]=C<<16|D}return new o(S,S[S.length-1]&-2147483648?-1:0)};function I(E,y){return E.add(N(y))}t.j=function(E){if(T(this)||T(E))return f;if(A(this))return A(E)?N(this).j(N(E)):N(N(this).j(E));if(A(E))return N(this.j(N(E)));if(this.l(g)<0&&E.l(g)<0)return c(this.m()*E.m());const y=this.g.length+E.g.length,S=[];for(var P=0;P<2*y;P++)S[P]=0;for(P=0;P<this.g.length;P++)for(let x=0;x<E.g.length;x++){const D=this.i(P)>>>16,C=this.i(P)&65535,ue=E.i(x)>>>16,He=E.i(x)&65535;S[2*P+2*x]+=C*He,v(S,2*P+2*x),S[2*P+2*x+1]+=D*He,v(S,2*P+2*x+1),S[2*P+2*x+1]+=C*ue,v(S,2*P+2*x+1),S[2*P+2*x+2]+=D*ue,v(S,2*P+2*x+2)}for(E=0;E<y;E++)S[E]=S[2*E+1]<<16|S[2*E];for(E=y;E<2*y;E++)S[E]=0;return new o(S,0)};function v(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function w(E,y){this.g=E,this.h=y}function k(E,y){if(T(y))throw Error("division by zero");if(T(E))return new w(f,f);if(A(E))return y=k(N(E),y),new w(N(y.g),N(y.h));if(A(y))return y=k(E,N(y)),new w(N(y.g),y.h);if(E.g.length>30){if(A(E)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var S=p,P=y;P.l(E)<=0;)S=V(S),P=V(P);var x=F(S,1),D=F(P,1);for(P=F(P,2),S=F(S,2);!T(P);){var C=D.add(P);C.l(E)<=0&&(x=x.add(S),D=C),P=F(P,1),S=F(S,1)}return y=I(E,x.j(y)),new w(x,y)}for(x=f;E.l(y)>=0;){for(S=Math.max(1,Math.floor(E.m()/y.m())),P=Math.ceil(Math.log(S)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),D=c(S),C=D.j(y);A(C)||C.l(E)>0;)S-=P,D=c(S),C=D.j(y);T(D)&&(D=p),x=x.add(D),E=I(E,C)}return new w(x,E)}t.B=function(E){return k(this,E).h},t.and=function(E){const y=Math.max(this.g.length,E.g.length),S=[];for(let P=0;P<y;P++)S[P]=this.i(P)&E.i(P);return new o(S,this.h&E.h)},t.or=function(E){const y=Math.max(this.g.length,E.g.length),S=[];for(let P=0;P<y;P++)S[P]=this.i(P)|E.i(P);return new o(S,this.h|E.h)},t.xor=function(E){const y=Math.max(this.g.length,E.g.length),S=[];for(let P=0;P<y;P++)S[P]=this.i(P)^E.i(P);return new o(S,this.h^E.h)};function V(E){const y=E.g.length+1,S=[];for(let P=0;P<y;P++)S[P]=E.i(P)<<1|E.i(P-1)>>>31;return new o(S,E.h)}function F(E,y){const S=y>>5;y%=32;const P=E.g.length-S,x=[];for(let D=0;D<P;D++)x[D]=y>0?E.i(D+S)>>>y|E.i(D+S+1)<<32-y:E.i(D+S);return new o(x,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,BI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,qr=o}).apply(typeof yv<"u"?yv:typeof self<"u"?self:typeof window<"u"?window:{});var tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $I,ta,zI,Au,Qf,HI,GI,qI;(function(){var t,e=Object.defineProperty;function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof tu=="object"&&tu];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(l,d){if(d)e:{var m=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var b=l[_];if(!(b in m))break e;m=m[b]}l=l[l.length-1],_=m[l],d=d(_),d!=_&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(l){return l||function(d){var m=[],_;for(_ in d)Object.prototype.hasOwnProperty.call(d,_)&&m.push([_,d[_]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function u(l,d,m){return l.call.apply(l.bind,arguments)}function c(l,d,m){return c=u,c.apply(null,arguments)}function h(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function f(l,d){function m(){}m.prototype=d.prototype,l.Z=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Ob=function(_,b,O){for(var z=Array(arguments.length-2),se=2;se<arguments.length;se++)z[se-2]=arguments[se];return d.prototype[b].apply(_,z)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function g(l){const d=l.length;if(d>0){const m=Array(d);for(let _=0;_<d;_++)m[_]=l[_];return m}return[]}function T(l,d){for(let _=1;_<arguments.length;_++){const b=arguments[_];var m=typeof b;if(m=m!="object"?m:b?Array.isArray(b)?"array":m:"null",m=="array"||m=="object"&&typeof b.length=="number"){m=l.length||0;const O=b.length||0;l.length=m+O;for(let z=0;z<O;z++)l[m+z]=b[z]}else l.push(b)}}class A{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function N(l){o.setTimeout(()=>{throw l},0)}function I(){var l=E;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class v{constructor(){this.h=this.g=null}add(d,m){const _=w.get();_.set(d,m),this.h?this.h.next=_:this.g=_,this.h=_}}var w=new A(()=>new k,l=>l.reset());class k{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let V,F=!1,E=new v,y=()=>{const l=Promise.resolve(void 0);V=()=>{l.then(S)}};function S(){for(var l;l=I();){try{l.h.call(l.g)}catch(m){N(m)}var d=w;d.j(l),d.h<100&&(d.h++,l.next=d.g,d.g=l)}F=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};o.addEventListener("test",m,d),o.removeEventListener("test",m,d)}catch{}return l}();function C(l){return/^[\s\xa0]*$/.test(l)}function ue(l,d){x.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,d)}f(ue,x),ue.prototype.init=function(l,d){const m=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget,d||(m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement)),this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var He="closure_listenable_"+(Math.random()*1e6|0),_e=0;function at(l,d,m,_,b){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!_,this.ha=b,this.key=++_e,this.da=this.fa=!1}function H(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Q(l,d,m){for(const _ in l)d.call(m,l[_],_,l)}function j(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function U(l){const d={};for(const m in l)d[m]=l[m];return d}const G="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function te(l,d){let m,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(m in _)l[m]=_[m];for(let O=0;O<G.length;O++)m=G[O],Object.prototype.hasOwnProperty.call(_,m)&&(l[m]=_[m])}}function he(l){this.src=l,this.g={},this.h=0}he.prototype.add=function(l,d,m,_,b){const O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);const z=re(l,d,_,b);return z>-1?(d=l[z],m||(d.fa=!1)):(d=new at(d,this.src,O,!!_,b),d.fa=m,l.push(d)),d};function et(l,d){const m=d.type;if(m in l.g){var _=l.g[m],b=Array.prototype.indexOf.call(_,d,void 0),O;(O=b>=0)&&Array.prototype.splice.call(_,b,1),O&&(H(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function re(l,d,m,_){for(let b=0;b<l.length;++b){const O=l[b];if(!O.da&&O.listener==d&&O.capture==!!m&&O.ha==_)return b}return-1}var Ge="closure_lm_"+(Math.random()*1e6|0),jn={};function Bn(l,d,m,_,b){if(Array.isArray(d)){for(let O=0;O<d.length;O++)Bn(l,d[O],m,_,b);return null}return m=ey(m),l&&l[He]?l.J(d,m,a(_)?!!_.capture:!1,b):ai(l,d,m,!1,_,b)}function ai(l,d,m,_,b,O){if(!d)throw Error("Invalid event type");const z=a(b)?!!b.capture:!!b;let se=Dh(l);if(se||(l[Ge]=se=new he(l)),m=se.add(d,m,_,z,O),m.proxy)return m;if(_=$n(),m.proxy=_,_.src=l,_.listener=m,l.addEventListener)D||(b=z),b===void 0&&(b=!1),l.addEventListener(d.toString(),_,b);else if(l.attachEvent)l.attachEvent(Zg(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function $n(){function l(m){return d.call(l.src,l.listener,m)}const d=$C;return l}function kh(l,d,m,_,b){if(Array.isArray(d))for(var O=0;O<d.length;O++)kh(l,d[O],m,_,b);else _=a(_)?!!_.capture:!!_,m=ey(m),l&&l[He]?(l=l.i,O=String(d).toString(),O in l.g&&(d=l.g[O],m=re(d,m,_,b),m>-1&&(H(d[m]),Array.prototype.splice.call(d,m,1),d.length==0&&(delete l.g[O],l.h--)))):l&&(l=Dh(l))&&(d=l.g[d.toString()],l=-1,d&&(l=re(d,m,_,b)),(m=l>-1?d[l]:null)&&Nh(m))}function Nh(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[He])et(d.i,l);else{var m=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(m,_,l.capture):d.detachEvent?d.detachEvent(Zg(m),_):d.addListener&&d.removeListener&&d.removeListener(_),(m=Dh(d))?(et(m,l),m.h==0&&(m.src=null,d[Ge]=null)):H(l)}}}function Zg(l){return l in jn?jn[l]:jn[l]="on"+l}function $C(l,d){if(l.da)l=!0;else{d=new ue(d,this);const m=l.listener,_=l.ha||l.src;l.fa&&Nh(l),l=m.call(_,d)}return l}function Dh(l){return l=l[Ge],l instanceof he?l:null}var bh="__closure_events_fn_"+(Math.random()*1e9>>>0);function ey(l){return typeof l=="function"?l:(l[bh]||(l[bh]=function(d){return l.handleEvent(d)}),l[bh])}function lt(){P.call(this),this.i=new he(this),this.M=this,this.G=null}f(lt,P),lt.prototype[He]=!0,lt.prototype.removeEventListener=function(l,d,m,_){kh(this,l,d,m,_)};function wt(l,d){var m,_=l.G;if(_)for(m=[];_;_=_.G)m.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new x(d,l);else if(d instanceof x)d.target=d.target||l;else{var b=d;d=new x(_,l),te(d,b)}b=!0;let O,z;if(m)for(z=m.length-1;z>=0;z--)O=d.g=m[z],b=Cl(O,_,!0,d)&&b;if(O=d.g=l,b=Cl(O,_,!0,d)&&b,b=Cl(O,_,!1,d)&&b,m)for(z=0;z<m.length;z++)O=d.g=m[z],b=Cl(O,_,!1,d)&&b}lt.prototype.N=function(){if(lt.Z.N.call(this),this.i){var l=this.i;for(const d in l.g){const m=l.g[d];for(let _=0;_<m.length;_++)H(m[_]);delete l.g[d],l.h--}}this.G=null},lt.prototype.J=function(l,d,m,_){return this.i.add(String(l),d,!1,m,_)},lt.prototype.K=function(l,d,m,_){return this.i.add(String(l),d,!0,m,_)};function Cl(l,d,m,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();let b=!0;for(let O=0;O<d.length;++O){const z=d[O];if(z&&!z.da&&z.capture==m){const se=z.listener,qe=z.ha||z.src;z.fa&&et(l.i,z),b=se.call(qe,_)!==!1&&b}}return b&&!_.defaultPrevented}function zC(l,d){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=c(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(l,d||0)}function ty(l){l.g=zC(()=>{l.g=null,l.i&&(l.i=!1,ty(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class HC extends P{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ty(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vo(l){P.call(this),this.h=l,this.g={}}f(vo,P);var ny=[];function ry(l){Q(l.g,function(d,m){this.g.hasOwnProperty(m)&&Nh(d)},l),l.g={}}vo.prototype.N=function(){vo.Z.N.call(this),ry(this)},vo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oh=o.JSON.stringify,GC=o.JSON.parse,qC=class{stringify(l){return o.JSON.stringify(l,void 0)}parse(l){return o.JSON.parse(l,void 0)}};function sy(){}function iy(){}var wo={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Vh(){x.call(this,"d")}f(Vh,x);function Lh(){x.call(this,"c")}f(Lh,x);var gs={},oy=null;function Pl(){return oy=oy||new lt}gs.Ia="serverreachability";function ay(l){x.call(this,gs.Ia,l)}f(ay,x);function Eo(l){const d=Pl();wt(d,new ay(d))}gs.STAT_EVENT="statevent";function ly(l,d){x.call(this,gs.STAT_EVENT,l),this.stat=d}f(ly,x);function Et(l){const d=Pl();wt(d,new ly(d,l))}gs.Ja="timingevent";function uy(l,d){x.call(this,gs.Ja,l),this.size=d}f(uy,x);function To(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){l()},d)}function Io(){this.g=!0}Io.prototype.ua=function(){this.g=!1};function WC(l,d,m,_,b,O){l.info(function(){if(l.g)if(O){var z="",se=O.split("&");for(let me=0;me<se.length;me++){var qe=se[me].split("=");if(qe.length>1){const Ye=qe[0];qe=qe[1];const wn=Ye.split("_");z=wn.length>=2&&wn[1]=="type"?z+(Ye+"="+qe+"&"):z+(Ye+"=redacted&")}}}else z=null;else z=O;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+d+`
`+m+`
`+z})}function KC(l,d,m,_,b,O,z){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+d+`
`+m+`
`+O+" "+z})}function li(l,d,m,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+YC(l,m)+(_?" "+_:"")})}function QC(l,d){l.info(function(){return"TIMEOUT: "+d})}Io.prototype.info=function(){};function YC(l,d){if(!l.g)return d;if(!d)return null;try{const O=JSON.parse(d);if(O){for(l=0;l<O.length;l++)if(Array.isArray(O[l])){var m=O[l];if(!(m.length<2)){var _=m[1];if(Array.isArray(_)&&!(_.length<1)){var b=_[0];if(b!="noop"&&b!="stop"&&b!="close")for(let z=1;z<_.length;z++)_[z]=""}}}}return Oh(O)}catch{return d}}var Rl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},cy={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},hy;function Mh(){}f(Mh,sy),Mh.prototype.g=function(){return new XMLHttpRequest},hy=new Mh;function So(l){return encodeURIComponent(String(l))}function XC(l){var d=1;l=l.split(":");const m=[];for(;d>0&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function pr(l,d,m,_){this.j=l,this.i=d,this.l=m,this.S=_||1,this.V=new vo(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new dy}function dy(){this.i=null,this.g="",this.h=!1}var fy={},Uh={};function Fh(l,d,m){l.M=1,l.A=kl(vn(d)),l.u=m,l.R=!0,py(l,null)}function py(l,d){l.F=Date.now(),xl(l),l.B=vn(l.A);var m=l.B,_=l.S;Array.isArray(_)||(_=[String(_)]),Py(m.i,"t",_),l.C=0,m=l.j.L,l.h=new dy,l.g=Gy(l.j,m?d:null,!l.u),l.P>0&&(l.O=new HC(c(l.Y,l,l.g),l.P)),d=l.V,m=l.g,_=l.ba;var b="readystatechange";Array.isArray(b)||(b&&(ny[0]=b.toString()),b=ny);for(let O=0;O<b.length;O++){const z=Bn(m,b[O],_||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=l.J?U(l.J):{},l.u?(l.v||(l.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,d)):(l.v="GET",l.g.ea(l.B,l.v,null,d)),Eo(),WC(l.i,l.v,l.B,l.l,l.S,l.u)}pr.prototype.ba=function(l){l=l.target;const d=this.O;d&&yr(l)==3?d.j():this.Y(l)},pr.prototype.Y=function(l){try{if(l==this.g)e:{const se=yr(this.g),qe=this.g.ya(),me=this.g.ca();if(!(se<3)&&(se!=3||this.g&&(this.h.h||this.g.la()||Oy(this.g)))){this.K||se!=4||qe==7||(qe==8||me<=0?Eo(3):Eo(2)),jh(this);var d=this.g.ca();this.X=d;var m=JC(this);if(this.o=d==200,KC(this.i,this.v,this.B,this.l,this.S,se,d),this.o){if(this.U&&!this.L){t:{if(this.g){var _,b=this.g;if((_=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(_)){var O=_;break t}}O=null}if(l=O)li(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Bh(this,l);else{this.o=!1,this.m=3,Et(12),ys(this),Ao(this);break e}}if(this.R){l=!0;let Ye;for(;!this.K&&this.C<m.length;)if(Ye=ZC(this,m),Ye==Uh){se==4&&(this.m=4,Et(14),l=!1),li(this.i,this.l,null,"[Incomplete Response]");break}else if(Ye==fy){this.m=4,Et(15),li(this.i,this.l,m,"[Invalid Chunk]"),l=!1;break}else li(this.i,this.l,Ye,null),Bh(this,Ye);if(my(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),se!=4||m.length!=0||this.h.h||(this.m=1,Et(16),l=!1),this.o=this.o&&l,!l)li(this.i,this.l,m,"[Invalid Chunked Response]"),ys(this),Ao(this);else if(m.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),Qh(z),z.P=!0,Et(11))}}else li(this.i,this.l,m,null),Bh(this,m);se==4&&ys(this),this.o&&!this.K&&(se==4?By(this.j,this):(this.o=!1,xl(this)))}else fP(this.g),d==400&&m.indexOf("Unknown SID")>0?(this.m=3,Et(12)):(this.m=0,Et(13)),ys(this),Ao(this)}}}catch{}finally{}};function JC(l){if(!my(l))return l.g.la();const d=Oy(l.g);if(d==="")return"";let m="";const _=d.length,b=yr(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return ys(l),Ao(l),"";l.h.i=new o.TextDecoder}for(let O=0;O<_;O++)l.h.h=!0,m+=l.h.i.decode(d[O],{stream:!(b&&O==_-1)});return d.length=0,l.h.g+=m,l.C=0,l.h.g}function my(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function ZC(l,d){var m=l.C,_=d.indexOf(`
`,m);return _==-1?Uh:(m=Number(d.substring(m,_)),isNaN(m)?fy:(_+=1,_+m>d.length?Uh:(d=d.slice(_,_+m),l.C=_+m,d)))}pr.prototype.cancel=function(){this.K=!0,ys(this)};function xl(l){l.T=Date.now()+l.H,gy(l,l.H)}function gy(l,d){if(l.D!=null)throw Error("WatchDog timer not null");l.D=To(c(l.aa,l),d)}function jh(l){l.D&&(o.clearTimeout(l.D),l.D=null)}pr.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(QC(this.i,this.B),this.M!=2&&(Eo(),Et(17)),ys(this),this.m=2,Ao(this)):gy(this,this.T-l)};function Ao(l){l.j.I==0||l.K||By(l.j,l)}function ys(l){jh(l);var d=l.O;d&&typeof d.dispose=="function"&&d.dispose(),l.O=null,ry(l.V),l.g&&(d=l.g,l.g=null,d.abort(),d.dispose())}function Bh(l,d){try{var m=l.j;if(m.I!=0&&(m.g==l||$h(m.h,l))){if(!l.L&&$h(m.h,l)&&m.I==3){try{var _=m.Ba.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<l.F)Vl(m),bl(m);else break e;Kh(m),Et(18)}}else m.xa=b[1],0<m.xa-m.K&&b[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=To(c(m.Va,m),6e3));vy(m.h)<=1&&m.ta&&(m.ta=void 0)}else vs(m,11)}else if((l.L||m.g==l)&&Vl(m),!C(d))for(b=m.Ba.g.parse(d),d=0;d<b.length;d++){let me=b[d];const Ye=me[0];if(!(Ye<=m.K))if(m.K=Ye,me=me[1],m.I==2)if(me[0]=="c"){m.M=me[1],m.ba=me[2];const wn=me[3];wn!=null&&(m.ka=wn,m.j.info("VER="+m.ka));const ws=me[4];ws!=null&&(m.za=ws,m.j.info("SVER="+m.za));const _r=me[5];_r!=null&&typeof _r=="number"&&_r>0&&(_=1.5*_r,m.O=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const vr=l.g;if(vr){const Ml=vr.g?vr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ml){var O=_.h;O.g||Ml.indexOf("spdy")==-1&&Ml.indexOf("quic")==-1&&Ml.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(zh(O,O.h),O.h=null))}if(_.G){const Yh=vr.g?vr.g.getResponseHeader("X-HTTP-Session-Id"):null;Yh&&(_.wa=Yh,ve(_.J,_.G,Yh))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-l.F,m.j.info("Handshake RTT: "+m.T+"ms")),_=m;var z=l;if(_.na=Hy(_,_.L?_.ba:null,_.W),z.L){wy(_.h,z);var se=z,qe=_.O;qe&&(se.H=qe),se.D&&(jh(se),xl(se)),_.g=z}else Fy(_);m.i.length>0&&Ol(m)}else me[0]!="stop"&&me[0]!="close"||vs(m,7);else m.I==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?vs(m,7):Wh(m):me[0]!="noop"&&m.l&&m.l.qa(me),m.A=0)}}Eo(4)}catch{}}var eP=class{constructor(l,d){this.g=l,this.map=d}};function yy(l){this.l=l||10,o.PerformanceNavigationTiming?(l=o.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function _y(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function vy(l){return l.h?1:l.g?l.g.size:0}function $h(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function zh(l,d){l.g?l.g.add(d):l.h=d}function wy(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}yy.prototype.cancel=function(){if(this.i=Ey(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ey(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.G);return d}return g(l.i)}var Ty=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tP(l,d){if(l){l=l.split("&");for(let m=0;m<l.length;m++){const _=l[m].indexOf("=");let b,O=null;_>=0?(b=l[m].substring(0,_),O=l[m].substring(_+1)):b=l[m],d(b,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function mr(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;l instanceof mr?(this.l=l.l,Co(this,l.j),this.o=l.o,this.g=l.g,Po(this,l.u),this.h=l.h,Hh(this,Ry(l.i)),this.m=l.m):l&&(d=String(l).match(Ty))?(this.l=!1,Co(this,d[1]||"",!0),this.o=Ro(d[2]||""),this.g=Ro(d[3]||"",!0),Po(this,d[4]),this.h=Ro(d[5]||"",!0),Hh(this,d[6]||"",!0),this.m=Ro(d[7]||"")):(this.l=!1,this.i=new ko(null,this.l))}mr.prototype.toString=function(){const l=[];var d=this.j;d&&l.push(xo(d,Iy,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(xo(d,Iy,!0),"@"),l.push(So(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&l.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(xo(m,m.charAt(0)=="/"?sP:rP,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",xo(m,oP)),l.join("")},mr.prototype.resolve=function(l){const d=vn(this);let m=!!l.j;m?Co(d,l.j):m=!!l.o,m?d.o=l.o:m=!!l.g,m?d.g=l.g:m=l.u!=null;var _=l.h;if(m)Po(d,l.u);else if(m=!!l.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var b=d.h.lastIndexOf("/");b!=-1&&(_=d.h.slice(0,b+1)+_)}if(b=_,b==".."||b==".")_="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){_=b.lastIndexOf("/",0)==0,b=b.split("/");const O=[];for(let z=0;z<b.length;){const se=b[z++];se=="."?_&&z==b.length&&O.push(""):se==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),_&&z==b.length&&O.push("")):(O.push(se),_=!0)}_=O.join("/")}else _=b}return m?d.h=_:m=l.i.toString()!=="",m?Hh(d,Ry(l.i)):m=!!l.m,m&&(d.m=l.m),d};function vn(l){return new mr(l)}function Co(l,d,m){l.j=m?Ro(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Po(l,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);l.u=d}else l.u=null}function Hh(l,d,m){d instanceof ko?(l.i=d,aP(l.i,l.l)):(m||(d=xo(d,iP)),l.i=new ko(d,l.l))}function ve(l,d,m){l.i.set(d,m)}function kl(l){return ve(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Ro(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function xo(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,nP),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function nP(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Iy=/[#\/\?@]/g,rP=/[#\?:]/g,sP=/[#\?]/g,iP=/[#\?@]/g,oP=/#/g;function ko(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function _s(l){l.g||(l.g=new Map,l.h=0,l.i&&tP(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=ko.prototype,t.add=function(l,d){_s(this),this.i=null,l=ui(this,l);let m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function Sy(l,d){_s(l),d=ui(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Ay(l,d){return _s(l),d=ui(l,d),l.g.has(d)}t.forEach=function(l,d){_s(this),this.g.forEach(function(m,_){m.forEach(function(b){l.call(d,b,_,this)},this)},this)};function Cy(l,d){_s(l);let m=[];if(typeof d=="string")Ay(l,d)&&(m=m.concat(l.g.get(ui(l,d))));else for(l=Array.from(l.g.values()),d=0;d<l.length;d++)m=m.concat(l[d]);return m}t.set=function(l,d){return _s(this),this.i=null,l=ui(this,l),Ay(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=Cy(this,l),l.length>0?String(l[0]):d):d};function Py(l,d,m){Sy(l,d),m.length>0&&(l.i=null,l.g.set(ui(l,d),g(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(let _=0;_<d.length;_++){var m=d[_];const b=So(m);m=Cy(this,m);for(let O=0;O<m.length;O++){let z=b;m[O]!==""&&(z+="="+So(m[O])),l.push(z)}}return this.i=l.join("&")};function Ry(l){const d=new ko;return d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),d}function ui(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function aP(l,d){d&&!l.j&&(_s(l),l.i=null,l.g.forEach(function(m,_){const b=_.toLowerCase();_!=b&&(Sy(this,_),Py(this,b,m))},l)),l.j=d}function lP(l,d){const m=new Io;if(o.Image){const _=new Image;_.onload=h(gr,m,"TestLoadImage: loaded",!0,d,_),_.onerror=h(gr,m,"TestLoadImage: error",!1,d,_),_.onabort=h(gr,m,"TestLoadImage: abort",!1,d,_),_.ontimeout=h(gr,m,"TestLoadImage: timeout",!1,d,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function uP(l,d){const m=new Io,_=new AbortController,b=setTimeout(()=>{_.abort(),gr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(O=>{clearTimeout(b),O.ok?gr(m,"TestPingServer: ok",!0,d):gr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(b),gr(m,"TestPingServer: error",!1,d)})}function gr(l,d,m,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(m)}catch{}}function cP(){this.g=new qC}function Gh(l){this.i=l.Sb||null,this.h=l.ab||!1}f(Gh,sy),Gh.prototype.g=function(){return new Nl(this.i,this.h)};function Nl(l,d){lt.call(this),this.H=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Nl,lt),t=Nl.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=d,this.readyState=1,Do(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(d.body=l),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,No(this)),this.readyState=0},t.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Do(this)),this.g&&(this.readyState=3,Do(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;xy(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function xy(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}t.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?No(this):Do(this),this.readyState==3&&xy(this)}},t.Oa=function(l){this.g&&(this.response=this.responseText=l,No(this))},t.Na=function(l){this.g&&(this.response=l,No(this))},t.ga=function(){this.g&&No(this)};function No(l){l.readyState=4,l.l=null,l.j=null,l.B=null,Do(l)}t.setRequestHeader=function(l,d){this.A.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function Do(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Nl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ky(l){let d="";return Q(l,function(m,_){d+=_,d+=":",d+=m,d+=`\r
`}),d}function qh(l,d,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=ky(m),typeof l=="string"?m!=null&&So(m):ve(l,d,m))}function Ne(l){lt.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Ne,lt);var hP=/^https?$/i,dP=["POST","PUT"];t=Ne.prototype,t.Fa=function(l){this.H=l},t.ea=function(l,d,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hy.g(),this.g.onreadystatechange=p(c(this.Ca,this));try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(O){Ny(this,O);return}if(l=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)m.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())m.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(O=>O.toLowerCase()=="content-type"),b=o.FormData&&l instanceof o.FormData,!(Array.prototype.indexOf.call(dP,d,void 0)>=0)||_||b||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of m)this.g.setRequestHeader(O,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(O){Ny(this,O)}};function Ny(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.o=5,Dy(l),Dl(l)}function Dy(l){l.A||(l.A=!0,wt(l,"complete"),wt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,wt(this,"complete"),wt(this,"abort"),Dl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Dl(this,!0)),Ne.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?by(this):this.Xa())},t.Xa=function(){by(this)};function by(l){if(l.h&&typeof i<"u"){if(l.v&&yr(l)==4)setTimeout(l.Ca.bind(l),0);else if(wt(l,"readystatechange"),yr(l)==4){l.h=!1;try{const O=l.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var _;if(_=O===0){let z=String(l.D).match(Ty)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),_=!hP.test(z?z.toLowerCase():"")}m=_}if(m)wt(l,"complete"),wt(l,"success");else{l.o=6;try{var b=yr(l)>2?l.g.statusText:""}catch{b=""}l.l=b+" ["+l.ca()+"]",Dy(l)}}finally{Dl(l)}}}}function Dl(l,d){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const m=l.g;l.g=null,d||wt(l,"ready");try{m.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function yr(l){return l.g?l.g.readyState:0}t.ca=function(){try{return yr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),GC(d)}};function Oy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function fP(l){const d={};l=(l.g&&yr(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(C(l[_]))continue;var m=XC(l[_]);const b=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const O=d[b]||[];d[b]=O,O.push(m)}j(d,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function bo(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function Vy(l){this.za=0,this.i=[],this.j=new Io,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=bo("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=bo("baseRetryDelayMs",5e3,l),this.Za=bo("retryDelaySeedMs",1e4,l),this.Ta=bo("forwardChannelMaxRetries",2,l),this.va=bo("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new yy(l&&l.concurrentRequestLimit),this.Ba=new cP,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Vy.prototype,t.ka=8,t.I=1,t.connect=function(l,d,m,_){Et(0),this.W=l,this.H=d||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.J=Hy(this,null,this.W),Ol(this)};function Wh(l){if(Ly(l),l.I==3){var d=l.V++,m=vn(l.J);if(ve(m,"SID",l.M),ve(m,"RID",d),ve(m,"TYPE","terminate"),Oo(l,m),d=new pr(l,l.j,d),d.M=2,d.A=kl(vn(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=d.A,m=!0),m||(d.g=Gy(d.j,null),d.g.ea(d.A)),d.F=Date.now(),xl(d)}zy(l)}function bl(l){l.g&&(Qh(l),l.g.cancel(),l.g=null)}function Ly(l){bl(l),l.v&&(o.clearTimeout(l.v),l.v=null),Vl(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&o.clearTimeout(l.m),l.m=null)}function Ol(l){if(!_y(l.h)&&!l.m){l.m=!0;var d=l.Ea;V||y(),F||(V(),F=!0),E.add(d,l),l.D=0}}function pP(l,d){return vy(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=d.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=To(c(l.Ea,l,d),$y(l,l.D)),l.D++,!0)}t.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const b=new pr(this,this.j,l);let O=this.o;if(this.U&&(O?(O=U(O),te(O,this.U)):O=this.U),this.u!==null||this.R||(b.J=O,O=null),this.S)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,d>4096){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=Uy(this,b,d),m=vn(this.J),ve(m,"RID",l),ve(m,"CVER",22),this.G&&ve(m,"X-HTTP-Session-Id",this.G),Oo(this,m),O&&(this.R?d="headers="+So(ky(O))+"&"+d:this.u&&qh(m,this.u,O)),zh(this.h,b),this.Ra&&ve(m,"TYPE","init"),this.S?(ve(m,"$req",d),ve(m,"SID","null"),b.U=!0,Fh(b,m,null)):Fh(b,m,d),this.I=2}}else this.I==3&&(l?My(this,l):this.i.length==0||_y(this.h)||My(this))};function My(l,d){var m;d?m=d.l:m=l.V++;const _=vn(l.J);ve(_,"SID",l.M),ve(_,"RID",m),ve(_,"AID",l.K),Oo(l,_),l.u&&l.o&&qh(_,l.u,l.o),m=new pr(l,l.j,m,l.D+1),l.u===null&&(m.J=l.o),d&&(l.i=d.G.concat(l.i)),d=Uy(l,m,1e3),m.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),zh(l.h,m),Fh(m,_,d)}function Oo(l,d){l.H&&Q(l.H,function(m,_){ve(d,_,m)}),l.l&&Q({},function(m,_){ve(d,_,m)})}function Uy(l,d,m){m=Math.min(l.i.length,m);const _=l.l?c(l.l.Ka,l.l,l):null;e:{var b=l.i;let se=-1;for(;;){const qe=["count="+m];se==-1?m>0?(se=b[0].g,qe.push("ofs="+se)):se=0:qe.push("ofs="+se);let me=!0;for(let Ye=0;Ye<m;Ye++){var O=b[Ye].g;const wn=b[Ye].map;if(O-=se,O<0)se=Math.max(0,b[Ye].g-100),me=!1;else try{O="req"+O+"_"||"";try{var z=wn instanceof Map?wn:Object.entries(wn);for(const[ws,_r]of z){let vr=_r;a(_r)&&(vr=Oh(_r)),qe.push(O+ws+"="+encodeURIComponent(vr))}}catch(ws){throw qe.push(O+"type="+encodeURIComponent("_badmap")),ws}}catch{_&&_(wn)}}if(me){z=qe.join("&");break e}}z=void 0}return l=l.i.splice(0,m),d.G=l,z}function Fy(l){if(!l.g&&!l.v){l.Y=1;var d=l.Da;V||y(),F||(V(),F=!0),E.add(d,l),l.A=0}}function Kh(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=To(c(l.Da,l),$y(l,l.A)),l.A++,!0)}t.Da=function(){if(this.v=null,jy(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=To(c(this.Wa,this),l)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Et(10),bl(this),jy(this))};function Qh(l){l.B!=null&&(o.clearTimeout(l.B),l.B=null)}function jy(l){l.g=new pr(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var d=vn(l.na);ve(d,"RID","rpc"),ve(d,"SID",l.M),ve(d,"AID",l.K),ve(d,"CI",l.F?"0":"1"),!l.F&&l.ia&&ve(d,"TO",l.ia),ve(d,"TYPE","xmlhttp"),Oo(l,d),l.u&&l.o&&qh(d,l.u,l.o),l.O&&(l.g.H=l.O);var m=l.g;l=l.ba,m.M=1,m.A=kl(vn(d)),m.u=null,m.R=!0,py(m,l)}t.Va=function(){this.C!=null&&(this.C=null,bl(this),Kh(this),Et(19))};function Vl(l){l.C!=null&&(o.clearTimeout(l.C),l.C=null)}function By(l,d){var m=null;if(l.g==d){Vl(l),Qh(l),l.g=null;var _=2}else if($h(l.h,d))m=d.G,wy(l.h,d),_=1;else return;if(l.I!=0){if(d.o)if(_==1){m=d.u?d.u.length:0,d=Date.now()-d.F;var b=l.D;_=Pl(),wt(_,new uy(_,m)),Ol(l)}else Fy(l);else if(b=d.m,b==3||b==0&&d.X>0||!(_==1&&pP(l,d)||_==2&&Kh(l)))switch(m&&m.length>0&&(d=l.h,d.i=d.i.concat(m)),b){case 1:vs(l,5);break;case 4:vs(l,10);break;case 3:vs(l,6);break;default:vs(l,2)}}}function $y(l,d){let m=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(m*=2),m*d}function vs(l,d){if(l.j.info("Error code "+d),d==2){var m=c(l.bb,l),_=l.Ua;const b=!_;_=new mr(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Co(_,"https"),kl(_),b?lP(_.toString(),m):uP(_.toString(),m)}else Et(2);l.I=0,l.l&&l.l.pa(d),zy(l),Ly(l)}t.bb=function(l){l?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function zy(l){if(l.I=0,l.ja=[],l.l){const d=Ey(l.h);(d.length!=0||l.i.length!=0)&&(T(l.ja,d),T(l.ja,l.i),l.h.i.length=0,g(l.i),l.i.length=0),l.l.oa()}}function Hy(l,d,m){var _=m instanceof mr?vn(m):new mr(m);if(_.g!="")d&&(_.g=d+"."+_.g),Po(_,_.u);else{var b=o.location;_=b.protocol,d=d?d+"."+b.hostname:b.hostname,b=+b.port;const O=new mr(null);_&&Co(O,_),d&&(O.g=d),b&&Po(O,b),m&&(O.h=m),_=O}return m=l.G,d=l.wa,m&&d&&ve(_,m,d),ve(_,"VER",l.ka),Oo(l,_),_}function Gy(l,d,m){if(d&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Aa&&!l.ma?new Ne(new Gh({ab:m})):new Ne(l.ma),d.Fa(l.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function qy(){}t=qy.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ll(){}Ll.prototype.g=function(l,d){return new Ft(l,d)};function Ft(l,d){lt.call(this),this.g=new Vy(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(l?l["X-WebChannel-Client-Profile"]=d.sa:l={"X-WebChannel-Client-Profile":d.sa}),this.g.U=l,(l=d&&d.Qb)&&!C(l)&&(this.g.u=l),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!C(d)&&(this.g.G=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ci(this)}f(Ft,lt),Ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Wh(this.g)},Ft.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.v&&(m={},m.__data__=Oh(l),l=m);d.i.push(new eP(d.Ya++,l)),d.I==3&&Ol(d)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Wh(this.g),delete this.g,Ft.Z.N.call(this)};function Wy(l){Vh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}f(Wy,Vh);function Ky(){Lh.call(this),this.status=1}f(Ky,Lh);function ci(l){this.g=l}f(ci,qy),ci.prototype.ra=function(){wt(this.g,"a")},ci.prototype.qa=function(l){wt(this.g,new Wy(l))},ci.prototype.pa=function(l){wt(this.g,new Ky)},ci.prototype.oa=function(){wt(this.g,"b")},Ll.prototype.createWebChannel=Ll.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,qI=function(){return new Ll},GI=function(){return Pl()},HI=gs,Qf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Rl.NO_ERROR=0,Rl.TIMEOUT=8,Rl.HTTP_ERROR=6,Au=Rl,cy.COMPLETE="complete",zI=cy,iy.EventType=wo,wo.OPEN="a",wo.CLOSE="b",wo.ERROR="c",wo.MESSAGE="d",lt.prototype.listen=lt.prototype.J,ta=iy,Ne.prototype.listenOnce=Ne.prototype.K,Ne.prototype.getLastError=Ne.prototype.Ha,Ne.prototype.getLastErrorCode=Ne.prototype.ya,Ne.prototype.getStatus=Ne.prototype.ca,Ne.prototype.getResponseJson=Ne.prototype.La,Ne.prototype.getResponseText=Ne.prototype.la,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Fa,$I=Ne}).apply(typeof tu<"u"?tu:typeof self<"u"?self:typeof window<"u"?window:{});const _v="@firebase/firestore",vv="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new Rm("@firebase/firestore");function pi(){return qs.logLevel}function W(t,...e){if(qs.logLevel<=oe.DEBUG){const n=e.map(Nm);qs.debug(`Firestore (${co}): ${t}`,...n)}}function ar(t,...e){if(qs.logLevel<=oe.ERROR){const n=e.map(Nm);qs.error(`Firestore (${co}): ${t}`,...n)}}function Zi(t,...e){if(qs.logLevel<=oe.WARN){const n=e.map(Nm);qs.warn(`Firestore (${co}): ${t}`,...n)}}function Nm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Z(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,WI(t,r,n)}function WI(t,e,n){let r=`FIRESTORE (${co}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ar(r),new Error(r)}function fe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||WI(e,s,r)}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class HN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GN{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string",31837,{l:r}),new KI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class qN{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class WN{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new qN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){fe(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new wv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new wv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=QN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Yf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Rd(s)===Rd(i)?ae(s,i):Rd(s)?1:-1}return ae(t.length,e.length)}const YN=55296,XN=57343;function Rd(t){const e=t.charCodeAt(0);return e>=YN&&e<=XN}function eo(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="__name__";class In{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Z(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return In.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof In?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=In.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ae(e.length,n.length)}static compareSegments(e,n){const r=In.isNumericId(e),s=In.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?In.extractNumericId(e).compare(In.extractNumericId(n)):Yf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qr.fromString(e.substring(4,e.length-2))}}class ge extends In{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const JN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends In{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return JN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ev}static keyField(){return new rt([Ev])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(ge.fromString(e))}static fromName(e){return new Y(ge.fromString(e).popFirst(5))}static empty(){return new Y(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t,e,n){if(!n)throw new q(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ZN(t,e,n,r){if(e===!0&&r===!0)throw new q(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tv(t){if(!Y.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Iv(t){if(Y.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function YI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function eh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z(12329,{type:typeof t})}function Ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=eh(t);throw new q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ze(t,e){const n={typeString:t};return e&&(n.value=e),n}function hl(t,e){if(!YI(t))throw new q(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new q(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=-62135596800,Av=1e6;class Ee{static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Av);return new Ee(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Sv)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Av}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(hl(e,Ee._jsonSchema))return new Ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ee._jsonSchemaVersion="firestore/timestamp/1.0",Ee._jsonSchema={type:ze("string",Ee._jsonSchemaVersion),seconds:ze("number"),nanoseconds:ze("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ee(0,0))}static max(){return new ee(new Ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ga=-1;function eD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new Ee(n+1,0):new Ee(n,r));return new es(s,Y.empty(),e)}function tD(t){return new es(t.readTime,t.key,Ga)}class es{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new es(ee.min(),Y.empty(),Ga)}static max(){return new es(ee.max(),Y.empty(),Ga)}}function nD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==rD)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function iD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class th{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}th.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=-1;function nh(t){return t==null}function cc(t){return t===0&&1/t==-1/0}function oD(t){return typeof t=="number"&&Number.isInteger(t)&&!cc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="";function aD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Cv(e)),e=lD(t.get(n),e);return Cv(e)}function lD(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case XI:n+="";break;default:n+=i}}return n}function Cv(t){return t+XI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function JI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nu(this.root,e,this.comparator,!1)}getReverseIterator(){return new nu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nu(this.root,e,this.comparator,!0)}}class nu{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=i??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new nt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rv(this.data.getIterator())}getIteratorFrom(e){return new Rv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Rv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new $t([])}unionWith(e){let n=new Qe(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return eo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ZI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ZI("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const uD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ts(t){if(fe(!!t,39018),typeof t=="string"){let e=0;const n=uD.exec(t);if(fe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ns(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="server_timestamp",tS="__type__",nS="__previous_value__",rS="__local_write_time__";function Om(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[tS])==null?void 0:r.stringValue)===eS}function rh(t){const e=t.mapValue.fields[nS];return Om(e)?rh(e):e}function qa(t){const e=ts(t.mapValue.fields[rS].timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n,r,s,i,o,a,u,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=h}}const Xf="(default)";class Wa{constructor(e,n){this.projectId=e,this.database=n||Xf}static empty(){return new Wa("","")}get isDefaultDatabase(){return this.database===Xf}isEqual(e){return e instanceof Wa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="__type__",hD="__max__",ru={mapValue:{}},iS="__vector__",hc="value";function rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Om(t)?4:fD(t)?9007199254740991:dD(t)?10:11:Z(28295,{value:t})}function Mn(t,e){if(t===e)return!0;const n=rs(t);if(n!==rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qa(t).isEqual(qa(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ts(s.timestampValue),a=ts(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ns(s.bytesValue).isEqual(ns(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ve(s.doubleValue),a=Ve(i.doubleValue);return o===a?cc(o)===cc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return eo(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Pv(o)!==Pv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Mn(o[u],a[u])))return!1;return!0}(t,e);default:return Z(52216,{left:t})}}function Ka(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function to(t,e){if(t===e)return 0;const n=rs(t),r=rs(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ve(i.integerValue||i.doubleValue),u=Ve(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return xv(t.timestampValue,e.timestampValue);case 4:return xv(qa(t),qa(e));case 5:return Yf(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ns(i),u=ns(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=ae(a[c],u[c]);if(h!==0)return h}return ae(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ae(Ve(i.latitude),Ve(o.latitude));return a!==0?a:ae(Ve(i.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return kv(t.arrayValue,e.arrayValue);case 10:return function(i,o){var p,g,T,A;const a=i.fields||{},u=o.fields||{},c=(p=a[hc])==null?void 0:p.arrayValue,h=(g=u[hc])==null?void 0:g.arrayValue,f=ae(((T=c==null?void 0:c.values)==null?void 0:T.length)||0,((A=h==null?void 0:h.values)==null?void 0:A.length)||0);return f!==0?f:kv(c,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ru.mapValue&&o===ru.mapValue)return 0;if(i===ru.mapValue)return 1;if(o===ru.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const p=Yf(u[f],h[f]);if(p!==0)return p;const g=to(a[u[f]],c[h[f]]);if(g!==0)return g}return ae(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Z(23264,{he:n})}}function xv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=ts(t),r=ts(e),s=ae(n.seconds,r.seconds);return s!==0?s:ae(n.nanos,r.nanos)}function kv(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=to(n[s],r[s]);if(i)return i}return ae(n.length,r.length)}function no(t){return Jf(t)}function Jf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ts(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ns(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Jf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Jf(n.fields[o])}`;return s+"}"}(t.mapValue):Z(61005,{value:t})}function Cu(t){switch(rs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=rh(t);return e?16+Cu(e):16;case 5:return 2*t.stringValue.length;case 6:return ns(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Cu(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return fs(r.fields,(i,o)=>{s+=i.length+Cu(o)}),s}(t.mapValue);default:throw Z(13486,{value:t})}}function Nv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Zf(t){return!!t&&"integerValue"in t}function Vm(t){return!!t&&"arrayValue"in t}function Dv(t){return!!t&&"nullValue"in t}function bv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pu(t){return!!t&&"mapValue"in t}function dD(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[sS])==null?void 0:r.stringValue)===iS}function ga(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ga(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ga(t.arrayValue.values[n]);return e}return{...t}}function fD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===hD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ga(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ga(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Pu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Pu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){fs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new bt(ga(this.value))}}function oS(t){const e=[];return fs(t.fields,(n,r)=>{const s=new rt([n]);if(Pu(r)){const i=oS(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new $t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new mt(e,0,ee.min(),ee.min(),ee.min(),bt.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,ee.min(),ee.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,ee.min(),ee.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dc{constructor(e,n){this.position=e,this.inclusive=n}}function Ov(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=to(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qa{constructor(e,n="asc"){this.field=e,this.dir=n}}function pD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class aS{}class $e extends aS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new gD(e,n,r):n==="array-contains"?new vD(e,r):n==="in"?new wD(e,r):n==="not-in"?new ED(e,r):n==="array-contains-any"?new TD(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new yD(e,r):new _D(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(to(n,this.value)):n!==null&&rs(this.value)===rs(n)&&this.matchesComparison(to(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends aS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new yn(e,n)}matches(e){return lS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function lS(t){return t.op==="and"}function uS(t){return mD(t)&&lS(t)}function mD(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function ep(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+no(t.value);if(uS(t))return t.filters.map(e=>ep(e)).join(",");{const e=t.filters.map(n=>ep(n)).join(",");return`${t.op}(${e})`}}function cS(t,e){return t instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&Mn(r.value,s.value)}(t,e):t instanceof yn?function(r,s){return s instanceof yn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&cS(o,s.filters[a]),!0):!1}(t,e):void Z(19439)}function hS(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${no(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(hS).join(" ,")+"}"}(t):"Filter"}class gD extends $e{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class yD extends $e{constructor(e,n){super(e,"in",n),this.keys=dS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _D extends $e{constructor(e,n){super(e,"not-in",n),this.keys=dS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dS(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class vD extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vm(n)&&Ka(n.arrayValue,this.value)}}class wD extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ka(this.value.arrayValue,n)}}class ED extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ka(this.value.arrayValue,n)}}class TD extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ka(this.value.arrayValue,r))}}/**
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
 */class ID{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function Lv(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ID(t,e,n,r,s,i,o)}function Lm(t){const e=ne(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ep(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),nh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>no(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>no(r)).join(",")),e.Te=n}return e.Te}function Mm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vv(t.startAt,e.startAt)&&Vv(t.endAt,e.endAt)}function tp(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function SD(t,e,n,r,s,i,o,a){return new po(t,e,n,r,s,i,o,a)}function Um(t){return new po(t)}function Mv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fS(t){return t.collectionGroup!==null}function ya(t){const e=ne(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Qe(rt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Qa(i,r))}),n.has(rt.keyField().canonicalString())||e.Ie.push(new Qa(rt.keyField(),r))}return e.Ie}function kn(t){const e=ne(t);return e.Ee||(e.Ee=AD(e,ya(t))),e.Ee}function AD(t,e){if(t.limitType==="F")return Lv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Qa(s.field,i)});const n=t.endAt?new dc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new dc(t.startAt.position,t.startAt.inclusive):null;return Lv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function np(t,e){const n=t.filters.concat([e]);return new po(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function rp(t,e,n){return new po(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sh(t,e){return Mm(kn(t),kn(e))&&t.limitType===e.limitType}function pS(t){return`${Lm(kn(t))}|lt:${t.limitType}`}function mi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>hS(s)).join(", ")}]`),nh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>no(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>no(s)).join(",")),`Target(${r})`}(kn(t))}; limitType=${t.limitType})`}function ih(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ya(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,u){const c=Ov(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ya(r),s)||r.endAt&&!function(o,a,u){const c=Ov(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ya(r),s))}(t,e)}function CD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mS(t){return(e,n)=>{let r=!1;for(const s of ya(t)){const i=PD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function PD(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?to(u,c):Z(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return JI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD=new ke(Y.comparator);function lr(){return RD}const gS=new ke(Y.comparator);function na(...t){let e=gS;for(const n of t)e=e.insert(n.key,n);return e}function yS(t){let e=gS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ks(){return _a()}function _S(){return _a()}function _a(){return new ni(t=>t.toString(),(t,e)=>t.isEqual(e))}const xD=new ke(Y.comparator),kD=new Qe(Y.comparator);function le(...t){let e=kD;for(const n of t)e=e.add(n);return e}const ND=new Qe(ae);function DD(){return ND}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cc(e)?"-0":e}}function vS(t){return{integerValue:""+t}}function bD(t,e){return oD(e)?vS(e):Fm(t,e)}/**
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
 */class oh{constructor(){this._=void 0}}function OD(t,e,n){return t instanceof fc?function(s,i){const o={fields:{[tS]:{stringValue:eS},[rS]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Om(i)&&(i=rh(i)),i&&(o.fields[nS]=i),{mapValue:o}}(n,e):t instanceof Ya?ES(t,e):t instanceof Xa?TS(t,e):function(s,i){const o=wS(s,i),a=Uv(o)+Uv(s.Ae);return Zf(o)&&Zf(s.Ae)?vS(a):Fm(s.serializer,a)}(t,e)}function VD(t,e,n){return t instanceof Ya?ES(t,e):t instanceof Xa?TS(t,e):n}function wS(t,e){return t instanceof pc?function(r){return Zf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class fc extends oh{}class Ya extends oh{constructor(e){super(),this.elements=e}}function ES(t,e){const n=IS(e);for(const r of t.elements)n.some(s=>Mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Xa extends oh{constructor(e){super(),this.elements=e}}function TS(t,e){let n=IS(e);for(const r of t.elements)n=n.filter(s=>!Mn(s,r));return{arrayValue:{values:n}}}class pc extends oh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Uv(t){return Ve(t.integerValue||t.doubleValue)}function IS(t){return Vm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function LD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ya&&s instanceof Ya||r instanceof Xa&&s instanceof Xa?eo(r.elements,s.elements,Mn):r instanceof pc&&s instanceof pc?Mn(r.Ae,s.Ae):r instanceof fc&&s instanceof fc}(t.transform,e.transform)}class MD{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ru(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ah{}function SS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jm(t.key,pn.none()):new dl(t.key,t.data,pn.none());{const n=t.data,r=bt.empty();let s=new Qe(rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ps(t.key,r,new $t(s.toArray()),pn.none())}}function UD(t,e,n){t instanceof dl?function(s,i,o){const a=s.value.clone(),u=jv(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ps?function(s,i,o){if(!Ru(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=jv(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(AS(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function va(t,e,n,r){return t instanceof dl?function(i,o,a,u){if(!Ru(i.precondition,o))return a;const c=i.value.clone(),h=Bv(i.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ps?function(i,o,a,u){if(!Ru(i.precondition,o))return a;const c=Bv(i.fieldTransforms,u,o),h=o.data;return h.setAll(AS(i)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return Ru(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function FD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=wS(r.transform,s||null);i!=null&&(n===null&&(n=bt.empty()),n.set(r.field,i))}return n||null}function Fv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&eo(r,s,(i,o)=>LD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class dl extends ah{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ps extends ah{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function AS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jv(t,e,n){const r=new Map;fe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,VD(o,a,n[s]))}return r}function Bv(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,OD(i,o,e))}return r}class jm extends ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jD extends ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&UD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=va(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=va(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_S();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=SS(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&eo(this.mutations,e.mutations,(n,r)=>Fv(n,r))&&eo(this.baseMutations,e.baseMutations,(n,r)=>Fv(n,r))}}class Bm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){fe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return xD}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Bm(e,n,r,s)}}/**
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
 */class $D{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class zD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,ce;function HD(t){switch(t){case L.OK:return Z(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Z(15467,{code:t})}}function CS(t){if(t===void 0)return ar("GRPC error has no .code"),L.UNKNOWN;switch(t){case Fe.OK:return L.OK;case Fe.CANCELLED:return L.CANCELLED;case Fe.UNKNOWN:return L.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return L.INTERNAL;case Fe.UNAVAILABLE:return L.UNAVAILABLE;case Fe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Fe.NOT_FOUND:return L.NOT_FOUND;case Fe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Fe.ABORTED:return L.ABORTED;case Fe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Fe.DATA_LOSS:return L.DATA_LOSS;default:return Z(39323,{code:t})}}(ce=Fe||(Fe={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function GD(){return new TextEncoder}/**
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
 */const qD=new qr([4294967295,4294967295],0);function $v(t){const e=GD().encode(t),n=new BI;return n.update(e),new Uint8Array(n.digest())}function zv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qr([n,r],0),new qr([s,i],0)]}class $m{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ra(`Invalid padding: ${n}`);if(r<0)throw new ra(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ra(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ra(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=qr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(qr.fromNumber(r)));return s.compare(qD)===1&&(s=new qr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=$v(e),[r,s]=zv(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new $m(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=$v(e),[r,s]=zv(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,fl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new lh(ee.min(),s,new ke(ae),lr(),le())}}class fl{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fl(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class PS{constructor(e,n){this.targetId=e,this.Ce=n}}class RS{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Hv{constructor(){this.ve=0,this.Fe=Gv(),this.Me=ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=le(),n=le(),r=le();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z(38017,{changeType:i})}}),new fl(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Gv()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,fe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class WD{constructor(e){this.Ge=e,this.ze=new Map,this.je=lr(),this.Je=su(),this.He=su(),this.Ye=new ke(ae)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(tp(i))if(r===0){const o=new Y(i.path);this.et(n,o,mt.newNoDocument(o,ee.min()))}else fe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),u=a?this.ct(a,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ns(r).toUint8Array()}catch(u){if(u instanceof ZI)return Zi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new $m(o,s,i)}catch(u){return Zi(u instanceof ra?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&tp(a.target)){const u=new Y(a.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,mt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=le();this.He.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new lh(e,n,this.Ye,this.je,r);return this.je=lr(),this.Je=su(),this.He=su(),this.Ye=new ke(ae),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Hv,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Qe(ae),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Qe(ae),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Hv),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function su(){return new ke(Y.comparator)}function Gv(){return new ke(Y.comparator)}const KD={asc:"ASCENDING",desc:"DESCENDING"},QD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YD={and:"AND",or:"OR"};class XD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sp(t,e){return t.useProto3Json||nh(e)?e:{value:e}}function mc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function JD(t,e){return mc(t,e.toTimestamp())}function Nn(t){return fe(!!t,49232),ee.fromTimestamp(function(n){const r=ts(n);return new Ee(r.seconds,r.nanos)}(t))}function zm(t,e){return ip(t,e).canonicalString()}function ip(t,e){const n=function(s){return new ge(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function kS(t){const e=ge.fromString(t);return fe(VS(e),10190,{key:e.toString()}),e}function op(t,e){return zm(t.databaseId,e.path)}function xd(t,e){const n=kS(e);if(n.get(1)!==t.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(DS(n))}function NS(t,e){return zm(t.databaseId,e)}function ZD(t){const e=kS(t);return e.length===4?ge.emptyPath():DS(e)}function ap(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function DS(t){return fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function qv(t,e,n){return{name:op(t,e),fields:n.value.mapValue.fields}}function eb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,h){return c.useProto3Json?(fe(h===void 0||typeof h=="string",58123),ot.fromBase64String(h||"")):(fe(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ot.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?L.UNKNOWN:CS(c.code);return new q(h,c.message||"")}(o);n=new RS(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xd(t,r.document.name),i=Nn(r.document.updateTime),o=r.document.createTime?Nn(r.document.createTime):ee.min(),a=new bt({mapValue:{fields:r.document.fields}}),u=mt.newFoundDocument(s,i,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new xu(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xd(t,r.document),i=r.readTime?Nn(r.readTime):ee.min(),o=mt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new xu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xd(t,r.document),i=r.removedTargetIds||[];n=new xu([],i,s,null)}else{if(!("filter"in e))return Z(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new zD(s,i),a=r.targetId;n=new PS(a,o)}}return n}function tb(t,e){let n;if(e instanceof dl)n={update:qv(t,e.key,e.value)};else if(e instanceof jm)n={delete:op(t,e.key)};else if(e instanceof ps)n={update:qv(t,e.key,e.data),updateMask:cb(e.fieldMask)};else{if(!(e instanceof jD))return Z(16599,{Vt:e.type});n={verify:op(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof fc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ya)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Xa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof pc)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Z(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:JD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z(27497)}(t,e.precondition)),n}function nb(t,e){return t&&t.length>0?(fe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Nn(s.updateTime):Nn(i);return o.isEqual(ee.min())&&(o=Nn(i)),new MD(o,s.transformResults||[])}(n,e))):[]}function rb(t,e){return{documents:[NS(t,e.path)]}}function sb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=NS(t,s);const i=function(c){if(c.length!==0)return OS(yn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:gi(p.field),direction:ab(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=sp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function ib(t){let e=ZD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){fe(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const p=bS(f);return p instanceof yn&&uS(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(T){return new Qa(yi(T.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,nh(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,g=f.values||[];return new dc(g,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,g=f.values||[];return new dc(g,p)}(n.endAt)),SD(e,s,o,i,a,"F",u,c)}function ob(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=yi(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=yi(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yi(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=yi(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(t):t.fieldFilter!==void 0?function(n){return $e.create(yi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>bS(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(n.compositeFilter.op))}(t):Z(30097,{filter:t})}function ab(t){return KD[t]}function lb(t){return QD[t]}function ub(t){return YD[t]}function gi(t){return{fieldPath:t.canonicalString()}}function yi(t){return rt.fromServerFormat(t.fieldPath)}function OS(t){return t instanceof $e?function(n){if(n.op==="=="){if(bv(n.value))return{unaryFilter:{field:gi(n.field),op:"IS_NAN"}};if(Dv(n.value))return{unaryFilter:{field:gi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bv(n.value))return{unaryFilter:{field:gi(n.field),op:"IS_NOT_NAN"}};if(Dv(n.value))return{unaryFilter:{field:gi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gi(n.field),op:lb(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(s=>OS(s));return r.length===1?r[0]:{compositeFilter:{op:ub(n.op),filters:r}}}(t):Z(54877,{filter:t})}function cb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function VS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r,s,i=ee.min(),o=ee.min(),a=ot.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.yt=e}}function db(t){const e=ib({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rp(e,e.limit,"L"):e}/**
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
 */class fb{constructor(){this.Cn=new pb}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(es.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(es.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class pb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(ge.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(ge.comparator)).toArray()}}/**
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
 */const Wv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},LS=41943040;class xt{static withCacheSize(e){return new xt(e,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(LS,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ro(0)}static cr(){return new ro(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv="LruGarbageCollector",mb=1048576;function Qv([t,e],[n,r]){const s=ae(t,n);return s===0?ae(e,r):s}class gb{constructor(e){this.Ir=e,this.buffer=new Qe(Qv),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Qv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class yb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){W(Kv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fo(n)?W(Kv,"Ignoring IndexedDB error during garbage collection: ",n):await ho(n)}await this.Vr(3e5)})}}class _b{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(th.ce);const r=new gb(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Wv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wv):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,a,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),pi()<=oe.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function vb(t,e){return new _b(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(){this.changes=new ni(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Eb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&va(r.mutation,s,$t.empty(),Ee.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const s=ks();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=na();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ks();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=lr();const o=_a(),a=function(){return _a()}();return n.forEach((u,c)=>{const h=r.get(c.key);s.has(c.key)&&(h===void 0||h.mutation instanceof ps)?i=i.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),va(h.mutation,c,h.mutation.getFieldMask(),Ee.now())):o.set(c.key,$t.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>a.set(c,new Eb(h,o.get(c)??null))),a))}recalculateAndSaveOverlays(e,n){const r=_a();let s=new ke((o,a)=>o-a),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||$t.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(s.get(a.batchId)||le()).add(u);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=_S();h.forEach(p=>{if(!i.has(p)){const g=SS(n.get(p),r.get(p));g!==null&&f.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(ks());let a=Ga,u=i;return o.next(c=>M.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?M.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,le())).next(h=>({batchId:a,changes:yS(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=na();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=na();return this.indexManager.getCollectionParents(e,i).next(a=>M.forEach(a,u=>{const c=function(f,p){return new po(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,mt.newInvalidDocument(h)))});let a=na();return o.forEach((u,c)=>{const h=i.get(u);h!==void 0&&va(h.mutation,c,$t.empty(),Ee.now()),ih(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return M.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Nn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:db(s.bundledQuery),readTime:Nn(s.readTime)}}(n)),M.resolve()}}/**
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
 */class Sb{constructor(){this.overlays=new ke(Y.comparator),this.qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ks();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=ks(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ke((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=i.get(c.largestBatchId);h===null&&(h=ks(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ks(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=s)););return M.resolve(a)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $D(n,r));let i=this.qr.get(n);i===void 0&&(i=le(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class Ab{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(){this.Qr=new Qe(Xe.$r),this.Ur=new Qe(Xe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Xe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new Y(new ge([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Y(new ge([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=le();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Y.comparator(e.key,n.key)||ae(e.Yr,n.Yr)}static Kr(e,n){return ae(e.Yr,n.Yr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Qe(Xe.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new BD(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new Xe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?bm:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const a=this.Xr(o.Yr);i.push(a)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(ae);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],a=>{r=r.add(a.Yr)})}),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new Y(i),0);let a=new Qe(ae);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.Yr)),!0)},o),M.resolve(this.ti(a))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){fe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Xe(n,0),s=this.Zr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.ri=e,this.docs=function(){return new ke(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=lr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=lr();const o=n.path,a=new Y(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||nD(tD(h),r)<=0||(s.has(h.key)||ih(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z(9500)}ii(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Rb(this)}getSize(e){return M.resolve(this.size)}}class Rb extends wb{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.persistence=e,this.si=new ni(n=>Lm(n),Mm),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.oi=0,this._i=new Hm,this.targetCount=0,this.ai=ro.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),M.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ro(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Pr(n),M.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n){this.ui={},this.overlays={},this.ci=new th(0),this.li=!1,this.li=!0,this.hi=new Ab,this.referenceDelegate=e(this),this.Pi=new xb(this),this.indexManager=new fb,this.remoteDocumentCache=function(s){return new Pb(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new hb(n),this.Ii=new Ib(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Sb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new Cb(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new kb(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return M.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class kb extends sD{constructor(e){super(),this.currentSequenceNumber=e}}class Gm{constructor(e){this.persistence=e,this.Ri=new Hm,this.Vi=null}static mi(e){return new Gm(e)}get fi(){if(this.Vi)return this.Vi;throw Z(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,r=>{const s=Y.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class gc{constructor(e,n){this.persistence=e,this.pi=new ni(r=>aD(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=vb(this,n)}static mi(e,n){return new gc(e,n)}Ei(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return M.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(a=>{a||(r++,i.removeEntry(o,ee.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Cu(e.data.value)),n}br(e,n,r){return M.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=le(),s=le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qm(e,n.fromCache,r,s)}}/**
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
 */class Nb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Db{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Ik()?8:iD(_t())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Nb;return this.Ss(e,n,o).next(a=>{if(i.result=a,this.Vs)return this.bs(e,n,o,a.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(pi()<=oe.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",mi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(pi()<=oe.DEBUG&&W("QueryEngine","Query:",mi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(pi()<=oe.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",mi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):M.resolve())}ys(e,n){if(Mv(n))return M.resolve(null);let r=kn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=rp(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=le(...i);return this.ps.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,a);return this.Cs(n,c,o,u.readTime)?this.ys(e,rp(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,s){return Mv(n)||s.isEqual(ee.min())?M.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?M.resolve(null):(pi()<=oe.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),mi(n)),this.vs(e,o,n,eD(s,Ga)).next(a=>a))})}Ds(e,n){let r=new Qe(mS(e));return n.forEach((s,i)=>{ih(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return pi()<=oe.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",mi(n)),this.ps.getDocumentsMatchingQuery(e,n,es.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="LocalStore",bb=3e8;class Ob{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new ke(ae),this.xs=new ni(i=>Lm(i),Mm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Tb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function Vb(t,e,n,r){return new Ob(t,e,n,r)}async function US(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=le();for(const c of s){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:a}))})})}function Lb(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,p=f.keys();let g=M.resolve();return p.forEach(T=>{g=g.next(()=>h.getEntry(u,T)).next(A=>{const N=c.docVersions.get(T);fe(N!==null,48541),A.version.compareTo(N)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),h.addEntry(A)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=le();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function FS(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function Mb(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const a=[];e.targetChanges.forEach((h,f)=>{const p=s.get(f);if(!p)return;a.push(n.Pi.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.Pi.addMatchingKeys(i,h.addedDocuments,f)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(ot.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(f,g),function(A,N,I){return A.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=bb?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(p,g,h)&&a.push(n.Pi.updateTargetData(i,g))});let u=lr(),c=le();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(Ub(i,o,e.documentUpdates).next(h=>{u=h.ks,c=h.qs})),!r.isEqual(ee.min())){const h=n.Pi.getLastRemoteSnapshotVersion(i).next(f=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return M.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Ms=s,i))}function Ub(t,e,n){let r=le(),s=le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=lr();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):W(Wm,"Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:s}})}function Fb(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=bm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jb(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function lp(t,e,n){const r=ne(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!fo(o))throw o;W(Wm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Yv(t,e,n){const r=ne(t);let s=ee.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=ne(u),p=f.xs.get(h);return p!==void 0?M.resolve(f.Ms.get(p)):f.Pi.getTargetData(c,h)}(r,o,kn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:le())).next(a=>(Bb(r,CD(e),a),{documents:a,Qs:i})))}function Bb(t,e,n){let r=t.Os.get(e)||ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class Xv{constructor(){this.activeTargetIds=DD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $b{constructor(){this.Mo=new Xv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Xv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zb{Oo(e){}shutdown(){}}/**
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
 */const Jv="ConnectivityMonitor";class Zv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){W(Jv,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){W(Jv,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let iu=null;function up(){return iu===null?iu=function(){return 268435456+Math.round(2147483648*Math.random())}():iu++,"0x"+iu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="RestConnection",Hb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Gb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Xf?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=up(),a=this.zo(e,n.toUriEncodedString());W(kd,`Sending RPC '${e}' ${o}:`,a,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:c}=new URL(a),h=ds(c);return this.Jo(e,a,u,r,h).then(f=>(W(kd,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Zi(kd,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+co}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=Hb[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class Wb extends Gb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=up();return new Promise((a,u)=>{const c=new $I;c.setWithCredentials(!0),c.listenOnce(zI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Au.NO_ERROR:const f=c.getResponseJson();W(ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Au.TIMEOUT:W(ht,`RPC '${e}' ${o} timed out`),u(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case Au.HTTP_ERROR:const p=c.getStatus();if(W(ht,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const T=g==null?void 0:g.error;if(T&&T.status&&T.message){const A=function(I){const v=I.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(v)>=0?v:L.UNKNOWN}(T.status);u(new q(A,T.message))}else u(new q(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new q(L.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{W(ht,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);W(ht,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",h,r,15)})}T_(e,n,r){const s=up(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qI(),a=GI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=i.join("");W(ht,`Creating RPC '${e}' stream ${s}: ${h}`,u);const f=o.createWebChannel(h,u);this.I_(f);let p=!1,g=!1;const T=new qb({Yo:N=>{g?W(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(p||(W(ht,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),W(ht,`RPC '${e}' stream ${s} sending:`,N),f.send(N))},Zo:()=>f.close()}),A=(N,I,v)=>{N.listen(I,w=>{try{v(w)}catch(k){setTimeout(()=>{throw k},0)}})};return A(f,ta.EventType.OPEN,()=>{g||(W(ht,`RPC '${e}' stream ${s} transport opened.`),T.o_())}),A(f,ta.EventType.CLOSE,()=>{g||(g=!0,W(ht,`RPC '${e}' stream ${s} transport closed`),T.a_(),this.E_(f))}),A(f,ta.EventType.ERROR,N=>{g||(g=!0,Zi(ht,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),T.a_(new q(L.UNAVAILABLE,"The operation could not be completed")))}),A(f,ta.EventType.MESSAGE,N=>{var I;if(!g){const v=N.data[0];fe(!!v,16349);const w=v,k=(w==null?void 0:w.error)||((I=w[0])==null?void 0:I.error);if(k){W(ht,`RPC '${e}' stream ${s} received error:`,k);const V=k.status;let F=function(S){const P=Fe[S];if(P!==void 0)return CS(P)}(V),E=k.message;F===void 0&&(F=L.INTERNAL,E="Unknown error status: "+V+" with message "+k.message),g=!0,T.a_(new q(F,E)),f.close()}else W(ht,`RPC '${e}' stream ${s} received:`,v),T.u_(v)}}),A(a,HI.STAT_EVENT,N=>{N.stat===Qf.PROXY?W(ht,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Qf.NOPROXY&&W(ht,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.__()},0),T}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Nd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t){return new XD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0="PersistentStream";class BS{constructor(e,n,r,s,i,o,a,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new jS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(ar(n.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(e0,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(W(e0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Kb extends BS{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=eb(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Nn(o.readTime):ee.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=ap(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=tp(u)?{documents:rb(i,u)}:{query:sb(i,u).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xS(i,o.resumeToken);const c=sp(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=mc(i,o.snapshotVersion.toTimestamp());const c=sp(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=ob(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=ap(this.serializer),n.removeTarget=e,this.q_(n)}}class Qb extends BS{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=nb(e.writeResults,e.commitTime),r=Nn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=ap(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>tb(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{}class Xb extends Yb{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,ip(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(L.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Ho(e,ip(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Jb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ar(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="RemoteStore";class Zb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ri(this)&&(W(Ws,"Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.Ea.add(4),await pl(c),c.Ra.set("Unknown"),c.Ea.delete(4),await ch(c)}(this))})}),this.Ra=new Jb(r,s)}}async function ch(t){if(ri(t))for(const e of t.da)await e(!0)}async function pl(t){for(const e of t.da)await e(!1)}function $S(t,e){const n=ne(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Xm(n)?Ym(n):mo(n).O_()&&Qm(n,e))}function Km(t,e){const n=ne(t),r=mo(n);n.Ia.delete(e),r.O_()&&zS(n,e),n.Ia.size===0&&(r.O_()?r.L_():ri(n)&&n.Ra.set("Unknown"))}function Qm(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}mo(t).Y_(e)}function zS(t,e){t.Va.Ue(e),mo(t).Z_(e)}function Ym(t){t.Va=new WD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),mo(t).start(),t.Ra.ua()}function Xm(t){return ri(t)&&!mo(t).x_()&&t.Ia.size>0}function ri(t){return ne(t).Ea.size===0}function HS(t){t.Va=void 0}async function e2(t){t.Ra.set("Online")}async function t2(t){t.Ia.forEach((e,n)=>{Qm(t,e)})}async function n2(t,e){HS(t),Xm(t)?(t.Ra.ha(e),Ym(t)):t.Ra.set("Unknown")}async function r2(t,e,n){if(t.Ra.set("Online"),e instanceof RS&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))}(t,e)}catch(r){W(Ws,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yc(t,r)}else if(e instanceof xu?t.Va.Ze(e):e instanceof PS?t.Va.st(e):t.Va.tt(e),!n.isEqual(ee.min()))try{const r=await FS(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=i.Ia.get(c);h&&i.Ia.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=i.Ia.get(u);if(!h)return;i.Ia.set(u,h.withResumeToken(ot.EMPTY_BYTE_STRING,h.snapshotVersion)),zS(i,u);const f=new Vr(h.target,u,c,h.sequenceNumber);Qm(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W(Ws,"Failed to raise snapshot:",r),await yc(t,r)}}async function yc(t,e,n){if(!fo(e))throw e;t.Ea.add(1),await pl(t),t.Ra.set("Offline"),n||(n=()=>FS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(Ws,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ch(t)})}function GS(t,e){return e().catch(n=>yc(t,n,e))}async function hh(t){const e=ne(t),n=ss(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:bm;for(;s2(e);)try{const s=await Fb(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,i2(e,s)}catch(s){await yc(e,s)}qS(e)&&WS(e)}function s2(t){return ri(t)&&t.Ta.length<10}function i2(t,e){t.Ta.push(e);const n=ss(t);n.O_()&&n.X_&&n.ea(e.mutations)}function qS(t){return ri(t)&&!ss(t).x_()&&t.Ta.length>0}function WS(t){ss(t).start()}async function o2(t){ss(t).ra()}async function a2(t){const e=ss(t);for(const n of t.Ta)e.ea(n.mutations)}async function l2(t,e,n){const r=t.Ta.shift(),s=Bm.from(r,e,n);await GS(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await hh(t)}async function u2(t,e){e&&ss(t).X_&&await async function(r,s){if(function(o){return HD(o)&&o!==L.ABORTED}(s.code)){const i=r.Ta.shift();ss(r).B_(),await GS(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await hh(r)}}(t,e),qS(t)&&WS(t)}async function t0(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),W(Ws,"RemoteStore received new credentials");const r=ri(n);n.Ea.add(3),await pl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ch(n)}async function c2(t,e){const n=ne(t);e?(n.Ea.delete(2),await ch(n)):e||(n.Ea.add(2),await pl(n),n.Ra.set("Unknown"))}function mo(t){return t.ma||(t.ma=function(n,r,s){const i=ne(n);return i.sa(),new Kb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:e2.bind(null,t),t_:t2.bind(null,t),r_:n2.bind(null,t),H_:r2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Xm(t)?Ym(t):t.Ra.set("Unknown")):(await t.ma.stop(),HS(t))})),t.ma}function ss(t){return t.fa||(t.fa=function(n,r,s){const i=ne(n);return i.sa(),new Qb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:o2.bind(null,t),r_:u2.bind(null,t),ta:a2.bind(null,t),na:l2.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await hh(t)):(await t.fa.stop(),t.Ta.length>0&&(W(Ws,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Jm(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zm(t,e){if(ar("AsyncQueue",`${e}: ${t}`),fo(t))return new q(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{static emptySet(e){return new Bi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=na(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(){this.ga=new ke(Y.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Z(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class so{constructor(e,n,r,s,i,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new so(e,n,Bi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class d2{constructor(){this.queries=r0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ne(n),i=s.queries;s.queries=r0(),i.forEach((o,a)=>{for(const u of a.Sa)u.onError(r)})})(this,new q(L.ABORTED,"Firestore shutting down"))}}function r0(){return new ni(t=>pS(t),sh)}async function KS(t,e){const n=ne(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new h2,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Zm(o,`Initialization of query '${mi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&eg(n)}async function QS(t,e){const n=ne(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function f2(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(r=!0);o.wa=s}}r&&eg(n)}function p2(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function eg(t){t.Ca.forEach(e=>{e.next()})}var cp,s0;(s0=cp||(cp={})).Ma="default",s0.Cache="cache";class YS{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new so(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=so.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==cp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.key=e}}class JS{constructor(e){this.key=e}}class m2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=le(),this.mutatedKeys=le(),this.eu=mS(e),this.tu=new Bi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new n0,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const p=s.get(h),g=ih(this.query,f)?f:null,T=!!p&&this.mutatedKeys.has(p.key),A=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;p&&g?p.data.isEqual(g.data)?T!==A&&(r.track({type:3,doc:g}),N=!0):this.su(p,g)||(r.track({type:2,doc:g}),N=!0,(u&&this.eu(g,u)>0||c&&this.eu(g,c)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),N=!0):p&&!g&&(r.track({type:1,doc:p}),N=!0,(u||c)&&(a=!0)),N&&(g?(o=o.add(g),i=A?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Cs:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,f)=>function(g,T){const A=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Rt:N})}};return A(g)-A(T)}(h.type,f.type)||this.eu(h.doc,f.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new so(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new n0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=le(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new JS(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new XS(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=le();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return so.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const tg="SyncEngine";class g2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class y2{constructor(e){this.key=e,this.hu=!1}}class _2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ni(a=>pS(a),sh),this.Iu=new Map,this.Eu=new Set,this.du=new ke(Y.comparator),this.Au=new Map,this.Ru=new Hm,this.Vu={},this.mu=new Map,this.fu=ro.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function v2(t,e,n=!0){const r=sA(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await ZS(r,e,n,!0),s}async function w2(t,e){const n=sA(t);await ZS(n,e,!0,!1)}async function ZS(t,e,n,r){const s=await jb(t.localStore,kn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await E2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&$S(t.remoteStore,s),a}async function E2(t,e,n,r,s){t.pu=(f,p,g)=>async function(A,N,I,v){let w=N.view.ru(I);w.Cs&&(w=await Yv(A.localStore,N.query,!1).then(({documents:E})=>N.view.ru(E,w)));const k=v&&v.targetChanges.get(N.targetId),V=v&&v.targetMismatches.get(N.targetId)!=null,F=N.view.applyChanges(w,A.isPrimaryClient,k,V);return o0(A,N.targetId,F.au),F.snapshot}(t,f,p,g);const i=await Yv(t.localStore,e,!0),o=new m2(e,i.Qs),a=o.ru(i.documents),u=fl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,u);o0(t,n,c.au);const h=new g2(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function T2(t,e,n){const r=ne(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!sh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await lp(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Km(r.remoteStore,s.targetId),hp(r,s.targetId)}).catch(ho)):(hp(r,s.targetId),await lp(r.localStore,s.targetId,!0))}async function I2(t,e){const n=ne(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Km(n.remoteStore,r.targetId))}async function S2(t,e,n){const r=N2(t);try{const s=await function(o,a){const u=ne(o),c=Ee.now(),h=a.reduce((g,T)=>g.add(T.key),le());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let T=lr(),A=le();return u.Ns.getEntries(g,h).next(N=>{T=N,T.forEach((I,v)=>{v.isValidDocument()||(A=A.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,T)).next(N=>{f=N;const I=[];for(const v of a){const w=FD(v,f.get(v.key).overlayedDocument);w!=null&&I.push(new ps(v.key,w,oS(w.value.mapValue),pn.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,I,a)}).next(N=>{p=N;const I=N.applyToLocalDocumentSet(f,A);return u.documentOverlayCache.saveOverlays(g,N.batchId,I)})}).then(()=>({batchId:p.batchId,changes:yS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new ke(ae)),c=c.insert(a,u),o.Vu[o.currentUser.toKey()]=c}(r,s.batchId,n),await ml(r,s.changes),await hh(r.remoteStore)}catch(s){const i=Zm(s,"Failed to persist write");n.reject(i)}}async function eA(t,e){const n=ne(t);try{const r=await Mb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?fe(o.hu,14607):s.removedDocuments.size>0&&(fe(o.hu,42227),o.hu=!1))}),await ml(n,r,e)}catch(r){await ho(r)}}function i0(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=ne(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const p of f.Sa)p.va(a)&&(c=!0)}),c&&eg(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function A2(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new ke(Y.comparator);o=o.insert(i,mt.newNoDocument(i,ee.min()));const a=le().add(i),u=new lh(ee.min(),new Map,new ke(ae),o,a);await eA(r,u),r.du=r.du.remove(i),r.Au.delete(e),ng(r)}else await lp(r.localStore,e,!1).then(()=>hp(r,e,n)).catch(ho)}async function C2(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await Lb(n.localStore,e);nA(n,r,null),tA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ml(n,s)}catch(s){await ho(s)}}async function P2(t,e,n){const r=ne(t);try{const s=await function(o,a){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(fe(f!==null,37113),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);nA(r,e,n),tA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ml(r,s)}catch(s){await ho(s)}}function tA(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function nA(t,e,n){const r=ne(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function hp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||rA(t,r)})}function rA(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Km(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),ng(t))}function o0(t,e,n){for(const r of n)r instanceof XS?(t.Ru.addReference(r.key,e),R2(t,r)):r instanceof JS?(W(tg,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||rA(t,r.key)):Z(19791,{wu:r})}function R2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(W(tg,"New document in limbo: "+n),t.Eu.add(r),ng(t))}function ng(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Y(ge.fromString(e)),r=t.fu.next();t.Au.set(r,new y2(n)),t.du=t.du.insert(n,r),$S(t.remoteStore,new Vr(kn(Um(n.path)),r,"TargetPurposeLimboResolution",th.ce))}}async function ml(t,e,n){const r=ne(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,u)=>{o.push(r.pu(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){s.push(c);const f=qm.As(u.targetId,c);i.push(f)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,c){const h=ne(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(c,p=>M.forEach(p.Es,g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>M.forEach(p.ds,g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!fo(f))throw f;W(Wm,"Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const g=h.Ms.get(p),T=g.snapshotVersion,A=g.withLastLimboFreeSnapshotVersion(T);h.Ms=h.Ms.insert(p,A)}}}(r.localStore,i))}async function x2(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){W(tg,"User change. New user:",e.toKey());const r=await US(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(u=>{u.reject(new q(L.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ml(n,r.Ls)}}function k2(t,e){const n=ne(t),r=n.Au.get(e);if(r&&r.hu)return le().add(r.key);{let s=le();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function sA(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=eA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=k2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=A2.bind(null,e),e.Pu.H_=f2.bind(null,e.eventManager),e.Pu.yu=p2.bind(null,e.eventManager),e}function N2(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=C2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=P2.bind(null,e),e}class _c{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=uh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Vb(this.persistence,new Db,e.initialUser,this.serializer)}Cu(e){return new MS(Gm.mi,this.serializer)}Du(e){return new $b}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_c.provider={build:()=>new _c};class D2 extends _c{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){fe(this.persistence.referenceDelegate instanceof gc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new yb(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new MS(r=>gc.mi(r,n),this.serializer)}}class dp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>i0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=x2.bind(null,this.syncEngine),await c2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new d2}()}createDatastore(e){const n=uh(e.databaseInfo.databaseId),r=function(i){return new Wb(i)}(e.databaseInfo);return function(i,o,a,u){return new Xb(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new Zb(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>i0(this.syncEngine,n,0),function(){return Zv.v()?new Zv:new zb}())}createSyncEngine(e,n){return function(s,i,o,a,u,c,h){const f=new _2(s,i,o,a,u,c);return h&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ne(s);W(Ws,"RemoteStore shutting down."),i.Ea.add(5),await pl(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}dp.provider={build:()=>new dp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ar("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="FirestoreClient";class b2{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=Dm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W(is,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(is,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dd(t,e){t.asyncQueue.verifyOperationInProgress(),W(is,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await US(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function a0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await O2(t);W(is,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>t0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>t0(e.remoteStore,s)),t._onlineComponents=e}async function O2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(is,"Using user provided OfflineComponentProvider");try{await Dd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Zi("Error using user provided cache. Falling back to memory cache: "+n),await Dd(t,new _c)}}else W(is,"Using default OfflineComponentProvider"),await Dd(t,new D2(void 0));return t._offlineComponents}async function oA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(is,"Using user provided OnlineComponentProvider"),await a0(t,t._uninitializedComponentsProvider._online)):(W(is,"Using default OnlineComponentProvider"),await a0(t,new dp))),t._onlineComponents}function V2(t){return oA(t).then(e=>e.syncEngine)}async function aA(t){const e=await oA(t),n=e.eventManager;return n.onListen=v2.bind(null,e.syncEngine),n.onUnlisten=T2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=w2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=I2.bind(null,e.syncEngine),n}function L2(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const h=new iA({next:p=>{h.Nu(),o.enqueueAndForget(()=>QS(i,f));const g=p.docs.has(a);!g&&p.fromCache?c.reject(new q(L.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&u&&u.source==="server"?c.reject(new q(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new YS(Um(a.path),h,{includeMetadataChanges:!0,qa:!0});return KS(i,f)}(await aA(t),t.asyncQueue,e,n,r)),r.promise}function M2(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const h=new iA({next:p=>{h.Nu(),o.enqueueAndForget(()=>QS(i,f)),p.fromCache&&u.source==="server"?c.reject(new q(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new YS(a,h,{includeMetadataChanges:!0,qa:!0});return KS(i,f)}(await aA(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function lA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA="firestore.googleapis.com",u0=!0;class c0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uA,this.ssl=u0}else this.host=e.host,this.ssl=e.ssl??u0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=LS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mb)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lA(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new c0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new c0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zN;switch(r.type){case"firstParty":return new WN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=l0.get(n);r&&(W("ComponentProvider","Removing Datastore"),l0.delete(n),r.terminate())}(this),Promise.resolve()}}function U2(t,e,n,r={}){var c;t=Ln(t,dh);const s=ds(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(Cm(`https://${a}`),Pm("Firestore",!0)),i.host!==uA&&i.host!==a&&Zi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:a,ssl:s,emulatorOptions:r};if(!Hs(u,o)&&(t._setSettings(u),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=ft.MOCK_USER;else{h=VI(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ft(p)}t._authCredentials=new HN(new KI(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new si(this.firestore,e,this._query)}}class Ue{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}toJSON(){return{type:Ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(hl(n,Ue._jsonSchema))return new Ue(e,r||null,new Y(ge.fromString(n.referencePath)))}}Ue._jsonSchemaVersion="firestore/documentReference/1.0",Ue._jsonSchema={type:ze("string",Ue._jsonSchemaVersion),referencePath:ze("string")};class Wr extends si{constructor(e,n,r){super(e,n,Um(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new Y(e))}withConverter(e){return new Wr(this.firestore,e,this._path)}}function h0(t,e,...n){if(t=Se(t),QI("collection","path",e),t instanceof dh){const r=ge.fromString(e,...n);return Iv(r),new Wr(t,null,r)}{if(!(t instanceof Ue||t instanceof Wr))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Iv(r),new Wr(t.firestore,null,r)}}function Ns(t,e,...n){if(t=Se(t),arguments.length===1&&(e=Dm.newId()),QI("doc","path",e),t instanceof dh){const r=ge.fromString(e,...n);return Tv(r),new Ue(t,null,new Y(r))}{if(!(t instanceof Ue||t instanceof Wr))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Tv(r),new Ue(t.firestore,t instanceof Wr?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="AsyncQueue";class f0{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new jS(this,"async_queue_retry"),this._c=()=>{const r=Nd();r&&W(d0,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Nd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Nd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Jn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!fo(e))throw e;W(d0,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,ar("INTERNAL UNHANDLED ERROR: ",p0(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Jm.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Z(47125,{Pc:p0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function p0(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class go extends dh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new f0,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new f0(e),this._firestoreClient=void 0,await e}}}function F2(t,e){const n=typeof t=="object"?t:km(),r=typeof t=="string"?t:e,s=Zc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=DI("firestore");i&&U2(s,...i)}return s}function rg(t){if(t._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||j2(t),t._firestoreClient}function j2(t){var r,s,i;const e=t._freezeSettings(),n=function(a,u,c,h){return new cD(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,lA(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new b2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this._byteString=e}static fromBase64String(e){try{return new en(ot.fromBase64String(e))}catch(n){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new en(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:en._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(hl(e,en._jsonSchema))return en.fromBase64String(e.bytes)}}en._jsonSchemaVersion="firestore/bytes/1.0",en._jsonSchema={type:ze("string",en._jsonSchemaVersion),bytes:ze("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Dn._jsonSchemaVersion}}static fromJSON(e){if(hl(e,Dn._jsonSchema))return new Dn(e.latitude,e.longitude)}}Dn._jsonSchemaVersion="firestore/geoPoint/1.0",Dn._jsonSchema={type:ze("string",Dn._jsonSchemaVersion),latitude:ze("number"),longitude:ze("number")};/**
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
 */class bn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:bn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(hl(e,bn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new bn(e.vectorValues);throw new q(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bn._jsonSchemaVersion="firestore/vectorValue/1.0",bn._jsonSchema={type:ze("string",bn._jsonSchemaVersion),vectorValues:ze("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2=/^__.*__$/;class $2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new dl(e,this.data,n,this.fieldTransforms)}}class cA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ps(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{Ac:t})}}class ig{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ig({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return vc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(hA(this.Ac)&&B2.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class z2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||uh(e)}Cc(e,n,r,s=!1){return new ig({Ac:e,methodName:n,Dc:r,path:rt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function og(t){const e=t._freezeSettings(),n=uh(t._databaseId);return new z2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function H2(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);ag("Data must be an object, but it was:",o,r);const a=dA(r,o);let u,c;if(i.merge)u=new $t(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const p=fp(e,f,n);if(!o.contains(p))throw new q(L.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);pA(h,p)||h.push(p)}u=new $t(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new $2(new bt(a),u,c)}class ph extends sg{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ph}}function G2(t,e,n,r){const s=t.Cc(1,e,n);ag("Data must be an object, but it was:",s,r);const i=[],o=bt.empty();fs(r,(u,c)=>{const h=lg(e,u,n);c=Se(c);const f=s.yc(h);if(c instanceof ph)i.push(h);else{const p=gl(c,f);p!=null&&(i.push(h),o.set(h,p))}});const a=new $t(i);return new cA(o,a,s.fieldTransforms)}function q2(t,e,n,r,s,i){const o=t.Cc(1,e,n),a=[fp(e,r,n)],u=[s];if(i.length%2!=0)throw new q(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(fp(e,i[p])),u.push(i[p+1]);const c=[],h=bt.empty();for(let p=a.length-1;p>=0;--p)if(!pA(c,a[p])){const g=a[p];let T=u[p];T=Se(T);const A=o.yc(g);if(T instanceof ph)c.push(g);else{const N=gl(T,A);N!=null&&(c.push(g),h.set(g,N))}}const f=new $t(c);return new cA(h,f,o.fieldTransforms)}function W2(t,e,n,r=!1){return gl(n,t.Cc(r?4:3,e))}function gl(t,e){if(fA(t=Se(t)))return ag("Unsupported field value:",e,t),dA(t,e);if(t instanceof sg)return function(r,s){if(!hA(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=gl(a,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ee.fromDate(r);return{timestampValue:mc(s.serializer,i)}}if(r instanceof Ee){const i=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mc(s.serializer,i)}}if(r instanceof Dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof en)return{bytesValue:xS(s.serializer,r._byteString)};if(r instanceof Ue){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof bn)return function(o,a){return{mapValue:{fields:{[sS]:{stringValue:iS},[hc]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Sc("VectorValues must only contain numeric values.");return Fm(a.serializer,c)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${eh(r)}`)}(t,e)}function dA(t,e){const n={};return JI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(t,(r,s)=>{const i=gl(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function fA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ee||t instanceof Dn||t instanceof en||t instanceof Ue||t instanceof sg||t instanceof bn)}function ag(t,e,n){if(!fA(n)||!YI(n)){const r=eh(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function fp(t,e,n){if((e=Se(e))instanceof fh)return e._internalPath;if(typeof e=="string")return lg(t,e);throw vc("Field path arguments must be of type string or ",t,!1,void 0,n)}const K2=new RegExp("[~\\*/\\[\\]]");function lg(t,e,n){if(e.search(K2)>=0)throw vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fh(...e.split("."))._internalPath}catch{throw vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new q(L.INVALID_ARGUMENT,a+t+u)}function pA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Q2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Q2 extends mA{data(){return super.data()}}function mh(t,e){return typeof e=="string"?lg(t,e):e instanceof fh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ug{}class gA extends ug{}function m0(t,e,...n){let r=[];e instanceof ug&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof cg).length,a=i.filter(u=>u instanceof gh).length;if(o>1||o>0&&a>0)throw new q(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class gh extends gA{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new gh(e,n,r)}_apply(e){const n=this._parse(e);return yA(e._query,n),new si(e.firestore,e.converter,np(e._query,n))}_parse(e){const n=og(e.firestore);return function(i,o,a,u,c,h,f){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new q(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){y0(f,h);const T=[];for(const A of f)T.push(g0(u,i,A));p={arrayValue:{values:T}}}else p=g0(u,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||y0(f,h),p=W2(a,o,f,h==="in"||h==="not-in");return $e.create(c,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function X2(t,e,n){const r=e,s=mh("where",t);return gh._create(s,r,n)}class cg extends ug{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new cg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)yA(o,u),o=np(o,u)}(e._query,n),new si(e.firestore,e.converter,np(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hg extends gA{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new hg(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new q(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new q(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qa(i,o)}(e._query,this._field,this._direction);return new si(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new po(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function J2(t,e="asc"){const n=e,r=mh("orderBy",t);return hg._create(r,n)}function g0(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new q(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fS(e)&&n.indexOf("/")!==-1)throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!Y.isDocumentKey(r))throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nv(t,new Y(r))}if(n instanceof Ue)return Nv(t,n._key);throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${eh(n)}.`)}function y0(t,e){if(!Array.isArray(t)||t.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yA(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Z2{convertValue(e,n="none"){switch(rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[hc].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ve(o.doubleValue));return new bn(n)}convertGeoPoint(e){return new Dn(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=rh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qa(e));default:return null}}convertTimestamp(e){const n=ts(e);return new Ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);fe(VS(r),9688,{name:e});const s=new Wa(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||ar(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class sa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ls extends mA{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ls._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ls._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ls._jsonSchema={type:ze("string",Ls._jsonSchemaVersion),bundleSource:ze("string","DocumentSnapshot"),bundleName:ze("string"),bundle:ze("string")};class ku extends Ls{data(e={}){return super.data(e)}}class $i{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new sa(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ku(this._firestore,this._userDataWriter,r.key,r,new sa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new ku(s._firestore,s._userDataWriter,a.doc.key,a.doc,new sa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new ku(s._firestore,s._userDataWriter,a.doc.key,a.doc,new sa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:tO(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=$i._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Dm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(t){t=Ln(t,Ue);const e=Ln(t.firestore,go);return L2(rg(e),t._key).then(n=>iO(e,t,n))}$i._jsonSchemaVersion="firestore/querySnapshot/1.0",$i._jsonSchema={type:ze("string",$i._jsonSchemaVersion),bundleSource:ze("string","QuerySnapshot"),bundleName:ze("string"),bundle:ze("string")};class _A extends Z2{constructor(e){super(),this.firestore=e}convertBytes(e){return new en(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}function rO(t){t=Ln(t,si);const e=Ln(t.firestore,go),n=rg(e),r=new _A(e);return Y2(t._query),M2(n,t._query).then(s=>new $i(e,r,t,s))}function pp(t,e,n){t=Ln(t,Ue);const r=Ln(t.firestore,go),s=eO(t.converter,e,n);return dg(r,[H2(og(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,pn.none())])}function _0(t,e,n,...r){t=Ln(t,Ue);const s=Ln(t.firestore,go),i=og(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof fh?q2(i,"updateDoc",t._key,e,n,r):G2(i,"updateDoc",t._key,e),dg(s,[o.toMutation(t._key,pn.exists(!0))])}function sO(t){return dg(Ln(t.firestore,go),[new jm(t._key,pn.none())])}function dg(t,e){return function(r,s){const i=new Jn;return r.asyncQueue.enqueueAndForget(async()=>S2(await V2(r),s,i)),i.promise}(rg(t),e)}function iO(t,e,n){const r=n.docs.get(e._key),s=new _A(t);return new Ls(t,s,e._key,r,new sa(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){co=s})(ti),Gs(new Zr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new go(new GN(r.getProvider("auth-internal")),new KN(o,r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wa(c.options.projectId,h)}(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),xn(_v,vv,e),xn(_v,vv,"esm2020")})();function vA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oO=vA,wA=new ul("auth","Firebase",vA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new Rm("@firebase/auth");function aO(t,...e){wc.logLevel<=oe.WARN&&wc.warn(`Auth (${ti}): ${t}`,...e)}function Nu(t,...e){wc.logLevel<=oe.ERROR&&wc.error(`Auth (${ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,...e){throw pg(t,...e)}function mn(t,...e){return pg(t,...e)}function fg(t,e,n){const r={...oO(),[e]:n};return new ul("auth","Firebase",r).create(e,{appName:t.name})}function Zn(t){return fg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lO(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&on(t,"argument-error"),fg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wA.create(t,...e)}function J(t,e,...n){if(!t)throw pg(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nu(e),new Error(e)}function ur(t,e){t||Kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function uO(){return v0()==="http:"||v0()==="https:"}function v0(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uO()||wk()||"connection"in navigator)?navigator.onLine:!0}function hO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ur(n>e,"Short delay should be less than long delay!"),this.isMobile=yk()||Ek()}get(){return cO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t,e){ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pO=new yl(3e4,6e4);function dr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function _n(t,e,n,r,s={}){return TA(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=cl({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return vk()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ds(t.emulatorConfig.host)&&(c.credentials="include"),EA.fetch()(await IA(t,t.config.apiHost,n,a),c)})}async function TA(t,e,n){t._canInitEmulator=!1;const r={...dO,...e};try{const s=new gO(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ou(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ou(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ou(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ou(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fg(t,h,c);on(t,h)}}catch(s){if(s instanceof Fn)throw s;on(t,"network-request-failed",{message:String(s)})}}async function _l(t,e,n,r,s={}){const i=await _n(t,e,n,r,s);return"mfaPendingCredential"in i&&on(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function IA(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?mg(t.config,s):`${t.config.apiScheme}://${s}`;return fO.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function mO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),pO.get())})}}function ou(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=mn(t,e,r);return s.customData._tokenResponse=n,s}function w0(t){return t!==void 0&&t.enterprise!==void 0}class yO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _O(t,e){return _n(t,"GET","/v2/recaptchaConfig",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vO(t,e){return _n(t,"POST","/v1/accounts:delete",e)}async function Ec(t,e){return _n(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wO(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=gg(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wa(bd(s.auth_time)),issuedAtTime:wa(bd(s.iat)),expirationTime:wa(bd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function bd(t){return Number(t)*1e3}function gg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Nu("JWT malformed, contained fewer than 3 sections"),null;try{const s=kI(n);return s?JSON.parse(s):(Nu("Failed to decode base64 JWT payload"),null)}catch(s){return Nu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function E0(t){const e=gg(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&EO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function EO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wa(this.lastLoginAt),this.creationTime=wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tc(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Ks(t,Ec(e,{idToken:n}));J(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?SA(s.providerUserInfo):[],o=SO(t.providerData,i),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=a?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new gp(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function IO(t){const e=Se(t);await Tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SO(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function SA(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AO(t,e){const n=await TA(t,{},async()=>{const r=cl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await IA(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:a,body:r};return t.emulatorConfig&&ds(t.emulatorConfig.host)&&(u.credentials="include"),EA.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CO(t,e){return _n(t,"POST","/v2/accounts:revokeToken",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):E0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=E0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await AO(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new zi;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new TO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ks(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wO(this,e)}reload(){return IO(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await Ks(this,vO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:f,emailVerified:p,isAnonymous:g,providerData:T,stsTokenManager:A}=n;J(f&&A,e,"internal-error");const N=zi.fromJSON(this.name,A);J(typeof f=="string",e,"internal-error"),Er(r,e.name),Er(s,e.name),J(typeof p=="boolean",e,"internal-error"),J(typeof g=="boolean",e,"internal-error"),Er(i,e.name),Er(o,e.name),Er(a,e.name),Er(u,e.name),Er(c,e.name),Er(h,e.name);const I=new hn({uid:f,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:N,createdAt:c,lastLoginAt:h});return T&&Array.isArray(T)&&(I.providerData=T.map(v=>({...v}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new zi;s.updateFromServerResponse(n);const i=new hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Tc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?SA(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new zi;a.updateFromIdToken(r);const u=new hn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new gp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=new Map;function Qn(t){ur(t instanceof Function,"Expected a class definition");let e=T0.get(t);return e?(ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,T0.set(t,e),e)}/**
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
 */class AA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}AA.type="NONE";const I0=AA;/**
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
 */function Du(t,e,n){return`firebase:${t}:${e}:${n}`}class Hi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Du(this.userKey,s.apiKey,i),this.fullPersistenceKey=Du("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ec(this.auth,{idToken:e}).catch(()=>{});return n?hn._fromGetAccountInfoResponse(this.auth,n,e):null}return hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hi(Qn(I0),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Qn(I0);const o=Du(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){let f;if(typeof h=="string"){const p=await Ec(e,{idToken:h}).catch(()=>{});if(!p)break;f=await hn._fromGetAccountInfoResponse(e,p,h)}else f=hn._fromJSON(e,h);c!==i&&(a=f),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Hi(i,e,r):(i=u[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Hi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(CA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(NA(e))return"Blackberry";if(DA(e))return"Webos";if(PA(e))return"Safari";if((e.includes("chrome/")||RA(e))&&!e.includes("edge/"))return"Chrome";if(kA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function CA(t=_t()){return/firefox\//i.test(t)}function PA(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function RA(t=_t()){return/crios\//i.test(t)}function xA(t=_t()){return/iemobile/i.test(t)}function kA(t=_t()){return/android/i.test(t)}function NA(t=_t()){return/blackberry/i.test(t)}function DA(t=_t()){return/webos/i.test(t)}function yg(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PO(t=_t()){var e;return yg(t)&&!!((e=window.navigator)!=null&&e.standalone)}function RO(){return Tk()&&document.documentMode===10}function bA(t=_t()){return yg(t)||kA(t)||DA(t)||NA(t)||/windows phone/i.test(t)||xA(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t,e=[]){let n;switch(t){case"Browser":n=S0(_t());break;case"Worker":n=`${S0(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${r}`}/**
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
 */class xO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const u=e(i);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function kO(t,e={}){return _n(t,"GET","/v2/passwordPolicy",dr(t,e))}/**
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
 */const NO=6;class DO{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??NO,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new A0(this),this.idTokenSubscription=new A0(this),this.beforeStateQueue=new xO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ec(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(Zn(this));const n=e?Se(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kO(this),n=new DO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ul("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await CO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[Qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=OA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&aO(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function fr(t){return Se(t)}class A0{constructor(e){this.auth=e,this.observer=null,this.addObserver=kk(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OO(t){yh=t}function VA(t){return yh.loadJS(t)}function VO(){return yh.recaptchaEnterpriseScript}function LO(){return yh.gapiScript}function MO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class UO{constructor(){this.enterprise=new FO}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class FO{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const jO="recaptcha-enterprise",LA="NO_RECAPTCHA";class BO{constructor(e){this.type=jO,this.auth=fr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{_O(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new yO(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function s(i,o,a){const u=window.grecaptcha;w0(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(LA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new UO().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&w0(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=VO();u.length!==0&&(u+=a),VA(u).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function C0(t,e,n,r=!1,s=!1){const i=new BO(t);let o;if(s)o=LA;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const u=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const u=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ic(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await C0(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await C0(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(t,e){const n=Zc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Hs(i,e??{}))return s;on(s,"already-initialized")}return n.initialize({options:e})}function zO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HO(t,e,n){const r=fr(t);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=MA(e),{host:o,port:a}=GO(e),u=a===null?"":`:${a}`,c={url:`${i}//${o}${u}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(Hs(c,r.config.emulator)&&Hs(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,ds(o)?(Cm(`${i}//${o}${u}`),Pm("Auth",!0)):qO()}function MA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GO(t){const e=MA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:P0(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:P0(o)}}}function P0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}async function WO(t,e){return _n(t,"POST","/v1/accounts:update",e)}async function KO(t,e){return _n(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QO(t,e){return _l(t,"POST","/v1/accounts:signInWithPassword",dr(t,e))}async function YO(t,e){return _n(t,"POST","/v1/accounts:sendOobCode",dr(t,e))}async function XO(t,e){return YO(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JO(t,e){return _l(t,"POST","/v1/accounts:signInWithEmailLink",dr(t,e))}async function ZO(t,e){return _l(t,"POST","/v1/accounts:signInWithEmailLink",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends _g{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ja(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ja(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ic(e,n,"signInWithPassword",QO);case"emailLink":return JO(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ic(e,r,"signUpPassword",KO);case"emailLink":return ZO(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(t,e){return _l(t,"POST","/v1/accounts:signInWithIdp",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eV="http://localhost";class Qs extends _g{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Qs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gi(e,n)}buildRequest(){const e={requestUri:eV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tV(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nV(t){const e=Zo(ea(t)).link,n=e?Zo(ea(e)).deep_link_id:null,r=Zo(ea(t)).deep_link_id;return(r?Zo(ea(r)).link:null)||r||n||e||t}class vg{constructor(e){const n=Zo(ea(e)),r=n.apiKey??null,s=n.oobCode??null,i=tV(n.mode??null);J(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=nV(e);try{return new vg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.providerId=yo.PROVIDER_ID}static credential(e,n){return Ja._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vg.parseLink(n);return J(r,"argument-error"),Ja._fromEmailAndCode(e,r.code,r.tenantId)}}yo.PROVIDER_ID="password";yo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vl extends wg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends vl{constructor(){super("facebook.com")}static credential(e){return Qs._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends vl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qs._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return An.credential(n,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends vl{constructor(){super("github.com")}static credential(e){return Qs._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends vl{constructor(){super("twitter.com")}static credential(e,n){return Qs._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rV(t,e){return _l(t,"POST","/v1/accounts:signUp",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hn._fromIdTokenResponse(e,r,s),o=R0(r);return new Ys({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=R0(r);return new Ys({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function R0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc extends Fn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Sc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Sc(e,n,r,s)}}function UA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Sc._fromErrorAndOperation(t,i,e,r):i})}async function sV(t,e,n=!1){const r=await Ks(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ys._forOperation(t,"link",r)}/**
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
 */async function iV(t,e,n=!1){const{auth:r}=t;if(Dt(r.app))return Promise.reject(Zn(r));const s="reauthenticate";try{const i=await Ks(t,UA(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=gg(i.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),Ys._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&on(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(t,e,n=!1){if(Dt(t.app))return Promise.reject(Zn(t));const r="signIn",s=await UA(t,r,e),i=await Ys._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function oV(t,e){return FA(fr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(t){const e=fr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function aV(t,e,n){const r=fr(t);await Ic(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",XO)}async function lV(t,e,n){if(Dt(t.app))return Promise.reject(Zn(t));const r=fr(t),o=await Ic(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rV).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&jA(t),u}),a=await Ys._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function uV(t,e,n){return Dt(t.app)?Promise.reject(Zn(t)):oV(Se(t),yo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jA(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cV(t,e){return _n(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Od(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Se(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ks(r,cV(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function hV(t,e){return dV(Se(t),null,e)}async function dV(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(i.password=n);const o=await Ks(t,WO(r,i));await t._updateTokensIfNecessary(o,!0)}function fV(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function pV(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function mV(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function gV(t){return Se(t).signOut()}const Ac="__sak";/**
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
 */class BA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ac,"1"),this.storage.removeItem(Ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yV=1e3,_V=10;class $A extends BA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);RO()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_V):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$A.type="LOCAL";const vV=$A;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA extends BA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zA.type="SESSION";const HA=zA;/**
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
 */function wV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _h{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new _h(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),u=await wV(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_h.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class EV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,u)=>{const c=Eg("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return window}function TV(t){On().location.href=t}/**
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
 */function GA(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function IV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SV(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function AV(){return GA()?self:null}/**
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
 */const qA="firebaseLocalStorageDb",CV=1,Cc="firebaseLocalStorage",WA="fbase_key";class wl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vh(t,e){return t.transaction([Cc],e?"readwrite":"readonly").objectStore(Cc)}function PV(){const t=indexedDB.deleteDatabase(qA);return new wl(t).toPromise()}function yp(){const t=indexedDB.open(qA,CV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cc,{keyPath:WA})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cc)?e(r):(r.close(),await PV(),e(await yp()))})})}async function x0(t,e,n){const r=vh(t,!0).put({[WA]:e,value:n});return new wl(r).toPromise()}async function RV(t,e){const n=vh(t,!1).get(e),r=await new wl(n).toPromise();return r===void 0?null:r.value}function k0(t,e){const n=vh(t,!0).delete(e);return new wl(n).toPromise()}const xV=800,kV=3;class KA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return GA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_h._getInstance(AV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await IV(),!this.activeServiceWorker)return;this.sender=new EV(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yp();return await x0(e,Ac,"1"),await k0(e,Ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>x0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RV(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>k0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=vh(s,!1).getAll();return new wl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}KA.type="LOCAL";const NV=KA;new yl(3e4,6e4);/**
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
 */function QA(t,e){return e?Qn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Tg extends _g{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DV(t){return FA(t.auth,new Tg(t),t.bypassAuthState)}function bV(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),iV(n,new Tg(t),t.bypassAuthState)}async function OV(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),sV(n,new Tg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DV;case"linkViaPopup":case"linkViaRedirect":return OV;case"reauthViaPopup":case"reauthViaRedirect":return bV;default:on(this.auth,"internal-error")}}resolve(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VV=new yl(2e3,1e4);async function LV(t,e,n){if(Dt(t.app))return Promise.reject(mn(t,"operation-not-supported-in-this-environment"));const r=fr(t);lO(t,e,wg);const s=QA(r,n);return new Ds(r,"signInViaPopup",e,s).executeNotNull()}class Ds extends YA{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ds.currentPopupAction&&Ds.currentPopupAction.cancel(),Ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const e=Eg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VV.get())};e()}}Ds.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MV="pendingRedirect",bu=new Map;class UV extends YA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bu.get(this.auth._key());if(!e){try{const r=await FV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bu.set(this.auth._key(),e)}return this.bypassAuthState||bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FV(t,e){const n=$V(e),r=BV(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function jV(t,e){bu.set(t._key(),e)}function BV(t){return Qn(t._redirectPersistence)}function $V(t){return Du(MV,t.config.apiKey,t.name)}async function zV(t,e,n=!1){if(Dt(t.app))return Promise.reject(Zn(t));const r=fr(t),s=QA(r,e),o=await new UV(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HV=10*60*1e3;class GV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!XA(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HV&&this.cachedEventUids.clear(),this.cachedEventUids.has(N0(e))}saveEventToCache(e){this.cachedEventUids.add(N0(e)),this.lastProcessedEventTime=Date.now()}}function N0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function XA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return XA(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WV(t,e={}){return _n(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QV=/^https?/;async function YV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WV(t);for(const n of e)try{if(XV(n))return}catch{}on(t,"unauthorized-domain")}function XV(t){const e=mp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!QV.test(n))return!1;if(KV.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const JV=new yl(3e4,6e4);function D0(){const t=On().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZV(t){return new Promise((e,n)=>{var s,i,o;function r(){D0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{D0(),n(mn(t,"network-request-failed"))},timeout:JV.get()})}if((i=(s=On().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=On().gapi)!=null&&o.load)r();else{const a=MO("iframefcb");return On()[a]=()=>{gapi.load?r():n(mn(t,"network-request-failed"))},VA(`${LO()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Ou=null,e})}let Ou=null;function eL(t){return Ou=Ou||ZV(t),Ou}/**
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
 */const tL=new yl(5e3,15e3),nL="__/auth/iframe",rL="emulator/auth/iframe",sL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oL(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mg(e,rL):`https://${t.config.authDomain}/${nL}`,r={apiKey:e.apiKey,appName:t.name,v:ti},s=iL.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${cl(r).slice(1)}`}async function aL(t){const e=await eL(t),n=On().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:oL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sL,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),a=On().setTimeout(()=>{i(o)},tL.get());function u(){On().clearTimeout(a),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const lL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uL=500,cL=600,hL="_blank",dL="http://localhost";class b0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fL(t,e,n,r=uL,s=cL){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u={...lL,width:r.toString(),height:s.toString(),top:i,left:o},c=_t().toLowerCase();n&&(a=RA(c)?hL:n),CA(c)&&(e=e||dL,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[g,T])=>`${p}${g}=${T},`,"");if(PO(c)&&a!=="_self")return pL(e||"",a),new b0(null);const f=window.open(e||"",a,h);J(f,t,"popup-blocked");try{f.focus()}catch{}return new b0(f)}function pL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const mL="__/auth/handler",gL="emulator/auth/handler",yL=encodeURIComponent("fac");async function O0(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ti,eventId:s};if(e instanceof wg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof vl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${yL}=${encodeURIComponent(u)}`:"";return`${_L(t)}?${cl(a).slice(1)}${c}`}function _L({config:t}){return t.emulator?mg(t,gL):`https://${t.authDomain}/${mL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="webStorageSupport";class vL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=HA,this._completeRedirectFn=zV,this._overrideRedirectResult=jV}async _openPopup(e,n,r,s){var o;ur((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await O0(e,n,r,mp(),s);return fL(e,i,Eg())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await O0(e,n,r,mp(),s);return TV(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ur(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aL(e),r=new GV(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vd,{type:Vd},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Vd];i!==void 0&&n(!!i),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bA()||PA()||yg()}}const wL=vL;var V0="@firebase/auth",L0="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IL(t){Gs(new Zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:OA(t)},c=new bO(r,s,i,u);return zO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gs(new Zr("auth-internal",e=>{const n=fr(e.getProvider("auth").getImmediate());return(r=>new EL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(V0,L0,TL(t)),xn(V0,L0,"esm2020")}/**
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
 */const SL=5*60,AL=OI("authIdTokenMaxAge")||SL;let M0=null;const CL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AL)return;const s=n==null?void 0:n.token;M0!==s&&(M0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function PL(t=km()){const e=Zc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$O(t,{popupRedirectResolver:wL,persistence:[NV,vV,HA]}),r=OI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=CL(i.toString());pV(n,o,()=>o(n.currentUser)),fV(n,a=>o(a))}}const s=NI("auth");return s&&HO(n,`http://${s}`),n}function RL(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}OO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=mn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",RL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IL("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="firebasestorage.googleapis.com",ZA="storageBucket",xL=2*60*1e3,kL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Fn{constructor(e,n,r=0){super(Ld(e),`Firebase Storage: ${n} (${Ld(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ld(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(be||(be={}));function Ld(t){return"storage/"+t}function Ig(){const t="An unknown error occurred, please check the error payload for server response.";return new Oe(be.UNKNOWN,t)}function NL(t){return new Oe(be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function DL(t){return new Oe(be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function bL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Oe(be.UNAUTHENTICATED,t)}function OL(){return new Oe(be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function VL(t){return new Oe(be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function LL(){return new Oe(be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ML(){return new Oe(be.CANCELED,"User canceled the upload/download.")}function UL(t){return new Oe(be.INVALID_URL,"Invalid URL '"+t+"'.")}function FL(t){return new Oe(be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function jL(){return new Oe(be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ZA+"' property when initializing the app?")}function BL(){return new Oe(be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $L(){return new Oe(be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function zL(t){return new Oe(be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _p(t){return new Oe(be.INVALID_ARGUMENT,t)}function e1(){return new Oe(be.APP_DELETED,"The Firebase app was deleted.")}function HL(t){return new Oe(be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ea(t,e){return new Oe(be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ho(t){throw new Oe(be.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=zt.makeFromUrl(e,n)}catch{return new zt(e,"")}if(r.path==="")return r;throw FL(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(k){k.path_=decodeURIComponent(k.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${s}/o${p}`,"i"),T={bucket:1,path:3},A=n===JA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",I=new RegExp(`^https?://${A}/${s}/${N}`,"i"),w=[{regex:a,indices:u,postModify:i},{regex:g,indices:T,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let k=0;k<w.length;k++){const V=w[k],F=V.regex.exec(e);if(F){const E=F[V.indices.bucket];let y=F[V.indices.path];y||(y=""),r=new zt(E,y),V.postModify(r);break}}if(r==null)throw UL(e);return r}}class GL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qL(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...N){c||(c=!0,e.apply(null,N))}function f(N){s=setTimeout(()=>{s=null,t(g,u())},N)}function p(){i&&clearTimeout(i)}function g(N,...I){if(c){p();return}if(N){p(),h.call(null,N,...I);return}if(u()||o){p(),h.call(null,N,...I);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,f(w)}let T=!1;function A(N){T||(T=!0,p(),!c&&(s!==null?(N||(a=2),clearTimeout(s),f(0)):N||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,A(!0)},n),A}function WL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KL(t){return t!==void 0}function QL(t){return typeof t=="object"&&!Array.isArray(t)}function Sg(t){return typeof t=="string"||t instanceof String}function U0(t){return Ag()&&t instanceof Blob}function Ag(){return typeof Blob<"u"}function F0(t,e,n,r){if(r<e)throw _p(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _p(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function t1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Ms;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ms||(Ms={}));/**
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
 */function YL(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e,n,r,s,i,o,a,u,c,h,f,p=!0,g=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,A)=>{this.resolve_=T,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new au(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ms.NO_ERROR,u=i.getStatus();if(!a||YL(u,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Ms.ABORT;r(!1,new au(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new au(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());KL(u)?i(u):i()}catch(u){o(u)}else if(a!==null){const u=Ig();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(s.canceled){const u=this.appDelete_?e1():ML();o(u)}else{const u=LL();o(u)}};this.canceled_?n(!1,new au(!1,null,!0)):this.backoffId_=qL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class au{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function JL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ZL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function nM(t,e,n,r,s,i,o=!0,a=!1){const u=t1(t.urlParams),c=t.url+u,h=Object.assign({},t.headers);return eM(h,e),JL(h,n),ZL(h,i),tM(h,r),new XL(c,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sM(...t){const e=rM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ag())return new Blob(t);throw new Oe(be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function iM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function oM(t){if(typeof atob>"u")throw zL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Md{constructor(e,n){this.data=e,this.contentType=n||null}}function aM(t,e){switch(t){case Cn.RAW:return new Md(n1(e));case Cn.BASE64:case Cn.BASE64URL:return new Md(r1(t,e));case Cn.DATA_URL:return new Md(uM(e),cM(e))}throw Ig()}function n1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function lM(t){let e;try{e=decodeURIComponent(t)}catch{throw Ea(Cn.DATA_URL,"Malformed data URL.")}return n1(e)}function r1(t,e){switch(t){case Cn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ea(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Cn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ea(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=oM(e)}catch(s){throw s.message.includes("polyfill")?s:Ea(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class s1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ea(Cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=hM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function uM(t){const e=new s1(t);return e.base64?r1(Cn.BASE64,e.rest):lM(e.rest)}function cM(t){return new s1(t).contentType}function hM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n){let r=0,s="";U0(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(U0(this.data_)){const r=this.data_,s=iM(r,e,n);return s===null?null:new Dr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Dr(r,!0)}}static getBlob(...e){if(Ag()){const n=e.map(r=>r instanceof Dr?r.data_:r);return new Dr(sM.apply(null,n))}else{const n=e.map(o=>Sg(o)?aM(Cn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Dr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(t){let e;try{e=JSON.parse(t)}catch{return null}return QL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function fM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function o1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(t,e){return e}class Tt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||pM}}let lu=null;function mM(t){return!Sg(t)||t.length<2?t:o1(t)}function a1(){if(lu)return lu;const t=[];t.push(new Tt("bucket")),t.push(new Tt("generation")),t.push(new Tt("metageneration")),t.push(new Tt("name","fullPath",!0));function e(i,o){return mM(o)}const n=new Tt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Tt("size");return s.xform=r,t.push(s),t.push(new Tt("timeCreated")),t.push(new Tt("updated")),t.push(new Tt("md5Hash",null,!0)),t.push(new Tt("cacheControl",null,!0)),t.push(new Tt("contentDisposition",null,!0)),t.push(new Tt("contentEncoding",null,!0)),t.push(new Tt("contentLanguage",null,!0)),t.push(new Tt("contentType",null,!0)),t.push(new Tt("metadata","customMetadata",!0)),lu=t,lu}function gM(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new zt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function yM(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return gM(r,t),r}function l1(t,e,n){const r=i1(e);return r===null?null:yM(t,r,n)}function _M(t,e,n,r){const s=i1(e);if(s===null||!Sg(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const h=t.bucket,f=t.fullPath,p="/b/"+o(h)+"/o/"+o(f),g=wh(p,n,r),T=t1({alt:"media",token:c});return g+T})[0]}function vM(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Cg{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t){if(!t)throw Ig()}function wM(t,e){function n(r,s){const i=l1(t,s,e);return u1(i!==null),i}return n}function EM(t,e){function n(r,s){const i=l1(t,s,e);return u1(i!==null),_M(i,s,t.host,t._protocol)}return n}function c1(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=OL():s=bL():n.getStatus()===402?s=DL(t.bucket):n.getStatus()===403?s=VL(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function h1(t){const e=c1(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=NL(t.path)),i.serverResponse=s.serverResponse,i}return n}function TM(t,e,n){const r=e.fullServerUrl(),s=wh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Cg(s,i,EM(t,n),o);return a.errorHandler=h1(e),a}function IM(t,e){const n=e.fullServerUrl(),r=wh(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(u,c){}const a=new Cg(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=h1(e),a}function SM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function AM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=SM(null,e)),r}function CM(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let k=0;k<2;k++)w=w+Math.random().toString().slice(2);return w}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=AM(e,r,s),h=vM(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+u+"--",g=Dr.getBlob(f,r,p);if(g===null)throw BL();const T={name:c.fullPath},A=wh(i,t.host,t._protocol),N="POST",I=t.maxUploadRetryTime,v=new Cg(A,N,wM(t,n),I);return v.urlParams=T,v.headers=o,v.body=g.uploadData(),v.errorHandler=c1(e),v}class PM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ms.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ms.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ms.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Ho("cannot .send() more than once");if(ds(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ho("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ho("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ho("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ho("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class RM extends PM{initXhr(){this.xhr_.responseType="text"}}function Pg(){return new RM}/**
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
 */class Xs{constructor(e,n){this._service=e,n instanceof zt?this._location=n:this._location=zt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xs(e,n)}get root(){const e=new zt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return o1(this._location.path)}get storage(){return this._service}get parent(){const e=dM(this._location.path);if(e===null)return null;const n=new zt(this._location.bucket,e);return new Xs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw HL(e)}}function xM(t,e,n){t._throwIfRoot("uploadBytes");const r=CM(t.storage,t._location,a1(),new Dr(e,!0),n);return t.storage.makeRequestWithTokens(r,Pg).then(s=>({metadata:s,ref:t}))}function kM(t){t._throwIfRoot("getDownloadURL");const e=TM(t.storage,t._location,a1());return t.storage.makeRequestWithTokens(e,Pg).then(n=>{if(n===null)throw $L();return n})}function NM(t){t._throwIfRoot("deleteObject");const e=IM(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Pg)}function DM(t,e){const n=fM(t._location.path,e),r=new zt(t._location.bucket,n);return new Xs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(t){return/^[A-Za-z]+:\/\//.test(t)}function OM(t,e){return new Xs(t,e)}function d1(t,e){if(t instanceof Rg){const n=t;if(n._bucket==null)throw jL();const r=new Xs(n,n._bucket);return e!=null?d1(r,e):r}else return e!==void 0?DM(t,e):t}function VM(t,e){if(e&&bM(e)){if(t instanceof Rg)return OM(t,e);throw _p("To use ref(service, url), the first argument must be a Storage instance.")}else return d1(t,e)}function j0(t,e){const n=e==null?void 0:e[ZA];return n==null?null:zt.makeFromBucketSpec(n,t)}function LM(t,e,n,r={}){t.host=`${e}:${n}`;const s=ds(e);s&&(Cm(`https://${t.host}/b`),Pm("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:VI(i,t.app.options.projectId))}class Rg{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=JA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xL,this._maxUploadRetryTime=kL,this._requests=new Set,s!=null?this._bucket=zt.makeFromBucketSpec(s,this._host):this._bucket=j0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=zt.makeFromBucketSpec(this._url,e):this._bucket=j0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){F0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){F0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new GL(e1());{const o=nM(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const B0="@firebase/storage",$0="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1="storage";function MM(t,e,n){return t=Se(t),xM(t,e,n)}function UM(t){return t=Se(t),kM(t)}function FM(t){return t=Se(t),NM(t)}function z0(t,e){return t=Se(t),VM(t,e)}function jM(t=km(),e){t=Se(t);const r=Zc(t,f1).getImmediate({identifier:e}),s=DI("storage");return s&&BM(r,...s),r}function BM(t,e,n,r={}){LM(t,e,n,r)}function $M(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Rg(n,r,s,e,ti)}function zM(){Gs(new Zr(f1,$M,"PUBLIC").setMultipleInstances(!0)),xn(B0,$0,""),xn(B0,$0,"esm2020")}zM();const HM={projectId:"my-vertex-demo-477402",appId:"1:951182156991:web:f3d9a719d286edb79d120a",storageBucket:"my-vertex-demo-477402.firebasestorage.app",apiKey:"AIzaSyBMrcD659wimRmDjztaq0g1WPcCdVdv7pE",authDomain:"my-vertex-demo-477402.firebaseapp.com",messagingSenderId:"951182156991",measurementId:"G-X9MG3S33N4"},xg=UI(HM),Yt=PL(xg);new An;const H0=jM(xg),Gn=F2(xg,"workflow111"),di="tasks",G0=t=>JSON.parse(JSON.stringify(t)),Rt={getAllTasks:async t=>{try{let e;t?e=m0(h0(Gn,di),X2("userId","==",t)):e=m0(h0(Gn,di),J2("createdAt","desc"));const r=(await rO(e)).docs.map(s=>s.data());return t&&r.sort((s,i)=>{const o=s.createdAt||0;return(i.createdAt||0)-o}),r}catch(e){return console.error("Error fetching tasks:",e),[]}},createTask:async t=>{const e={...t,createdAt:Date.now(),updatedAt:Date.now()},n=G0(e);try{return await pp(Ns(Gn,di,e.id),n),e}catch(r){throw console.error("Error creating task:",r),r}},updateTask:async t=>{const e={...t,updatedAt:Date.now()},n=G0(e);try{return await _0(Ns(Gn,di,t.id),n),e}catch(r){throw console.error("Error updating task:",r),r}},deleteTask:async t=>{try{await sO(Ns(Gn,di,t))}catch(e){throw console.error("Error deleting task:",e),e}},updateStatus:async(t,e)=>{try{const n=Ns(Gn,di,t);return await _0(n,{status:e,updatedAt:Date.now()}),{id:t,status:e}}catch(n){throw console.error("Error updating status:",n),n}},exportTasks:async()=>{const t=await Rt.getAllTasks(),e=JSON.stringify(t,null,2),n=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(n),s=document.createElement("a");s.href=r,s.download=`baro-ai-tasks-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(r)}},GM=new An,Kr={loginEmail:async(t,e)=>await uV(Yt,t,e),loginGoogle:async()=>await LV(Yt,GM),signup:async(t,e,n,r)=>{const s=await lV(Yt,t,e);await Od(s.user,{displayName:n});const i={id:s.user.uid,email:t,name:n,role:"REQUESTER",createdAt:Date.now(),updatedAt:Date.now(),...r};return await pp(Ns(Gn,"users",s.user.uid),i),s},resetPassword:async t=>{await aV(Yt,t)},getUserProfile:async t=>{const e=await nO(Ns(Gn,"users",t));return e.exists()?e.data():null},updateUserProfile:async(t,e)=>{await pp(Ns(Gn,"users",t),{...e,updatedAt:Date.now()},{merge:!0}),e.name&&Yt.currentUser&&await Od(Yt.currentUser,{displayName:e.name}),e.profileImageUrl&&Yt.currentUser&&await Od(Yt.currentUser,{photoURL:e.profileImageUrl})},changePassword:async t=>{if(Yt.currentUser)await hV(Yt.currentUser,t);else throw new Error("No authenticated user")},uploadProfileImage:async(t,e)=>{const n=z0(H0,`users/${t}/profile.jpg`);return await MM(n,e),await UM(n)},deleteProfileImage:async t=>{const e=z0(H0,`users/${t}/profile.jpg`);try{await FM(e)}catch(n){console.warn("Image might not exist in storage",n)}},logout:async()=>{await gV(Yt)}},qM=({onProfileComplete:t})=>{const[e,n]=$.useState(!1),[r,s]=$.useState(""),[i,o]=$.useState(""),[a,u]=$.useState(""),[c,h]=$.useState(!1),[f,p]=$.useState(!1),[g,T]=$.useState(!1),[A,N]=$.useState(null),I=async w=>{w.preventDefault(),n(!0),s("");try{await Kr.loginEmail(i,a)}catch(k){console.error(k),k.code==="auth/invalid-credential"||k.code==="auth/user-not-found"?s("이메일 또는 비밀번호가 올바르지 않습니다."):k.code==="auth/wrong-password"?s("비밀번호가 올바르지 않습니다."):k.code==="auth/invalid-email"?s("올바른 이메일 형식이 아닙니다."):s("로그인 중 오류가 발생했습니다: "+k.message)}finally{n(!1)}},v=async()=>{n(!0),s("");try{const w=await Kr.loginGoogle(),k=await Kr.getUserProfile(w.user.uid);(!k||!k.department||!k.team)&&(N(w.user),T(!0))}catch(w){console.error(w),s("Google 로그인 실패: "+w.message)}finally{n(!1)}};return R.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4",children:[R.jsxs("div",{className:"w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden p-8 animate-fade-in",children:[R.jsxs("div",{className:"text-center mb-8",children:[R.jsx("img",{src:"/logo.png",alt:"Logo",className:"h-10 mx-auto mb-4"}),R.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Welcome back"}),R.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"업무 효율의 시작, Nexus AI와 함께하세요."})]}),r&&R.jsxs("div",{className:"mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm",children:[R.jsx("div",{className:"w-1 h-8 bg-red-400 rounded-full"}),r]}),R.jsxs("form",{onSubmit:I,className:"space-y-4",children:[R.jsxs("div",{className:"space-y-1",children:[R.jsx("label",{className:"text-xs font-bold text-gray-500 ml-1",children:"이메일"}),R.jsxs("div",{className:"relative",children:[R.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:R.jsx(CI,{className:"h-5 w-5 text-gray-400"})}),R.jsx("input",{type:"email",required:!0,value:i,onChange:w=>o(w.target.value),className:"block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",placeholder:"name@company.com"})]})]}),R.jsxs("div",{className:"space-y-1",children:[R.jsxs("div",{className:"flex justify-between items-center ml-1",children:[R.jsx("label",{className:"text-xs font-bold text-gray-500",children:"비밀번호"}),R.jsx("button",{type:"button",onClick:()=>p(!0),className:"text-xs text-blue-600 hover:underline",children:"비밀번호를 잊으셨나요?"})]}),R.jsxs("div",{className:"relative",children:[R.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:R.jsx(tk,{className:"h-5 w-5 text-gray-400"})}),R.jsx("input",{type:"password",required:!0,value:a,onChange:w=>u(w.target.value),className:"block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all",placeholder:"••••••••"})]})]}),R.jsxs("button",{type:"submit",disabled:e,className:"w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200 disabled:opacity-70",children:[e?R.jsx(ek,{className:"w-5 h-5 animate-spin"}):R.jsx("span",{children:"로그인"}),!e&&R.jsx(Wx,{className:"w-4 h-4"})]})]}),R.jsxs("div",{className:"my-8 flex items-center gap-4",children:[R.jsx("div",{className:"h-px bg-gray-200 flex-1"}),R.jsx("span",{className:"text-xs text-gray-400 font-medium",children:"OR"}),R.jsx("div",{className:"h-px bg-gray-200 flex-1"})]}),R.jsxs("button",{onClick:v,disabled:e,className:"w-full flex items-center justify-center gap-3 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 active:scale-95 transition-all",children:[R.jsx(Jx,{className:"w-5 h-5 text-blue-500"}),R.jsx("span",{children:"Google 계정으로 계속하기"})]}),R.jsx("div",{className:"mt-8 text-center",children:R.jsxs("p",{className:"text-sm text-gray-500",children:["계정이 없으신가요?"," ",R.jsx("button",{onClick:()=>h(!0),className:"text-blue-600 font-bold hover:underline",children:"회원가입"})]})})]}),c&&R.jsx(KM,{onClose:()=>h(!1)}),f&&R.jsx(QM,{onClose:()=>p(!1)}),g&&A&&R.jsx(WM,{user:A,onClose:()=>{T(!1),t&&t()}})]})},WM=({user:t,onClose:e})=>{const[n,r]=$.useState(!1),[s,i]=$.useState({name:t.displayName||"",department:"",team:"",position:"",jobTitle:""}),o=u=>{i({...s,[u.target.name]:u.target.value})},a=async u=>{u.preventDefault(),r(!0);try{await Kr.updateUserProfile(t.uid,s),alert("정보가 저장되었습니다."),e()}catch(c){console.error(c),alert("저장 실패: "+c.message)}finally{r(!1)}};return R.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in",children:R.jsxs("div",{className:"bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto",children:[R.jsx("div",{className:"px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50",children:R.jsx("h3",{className:"text-lg font-bold text-gray-900",children:"추가 정보 입력"})}),R.jsxs("form",{onSubmit:a,className:"p-6 space-y-4",children:[R.jsx("div",{className:"p-4 bg-blue-50 rounded-xl text-blue-600 text-sm mb-4",children:"원활한 서비스 이용을 위해 추가 정보를 입력해주세요."}),R.jsxs("div",{className:"space-y-3",children:[R.jsx("h4",{className:"text-xs font-bold text-gray-400 uppercase",children:"필수 정보"}),R.jsx("input",{name:"name",type:"text",placeholder:"이름",required:!0,value:s.name,onChange:o,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"})]}),R.jsxs("div",{className:"space-y-3 pt-2",children:[R.jsx("h4",{className:"text-xs font-bold text-gray-400 uppercase",children:"부가 정보 (선택)"}),R.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[R.jsx("input",{name:"department",type:"text",placeholder:"본부",onChange:o,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),R.jsx("input",{name:"team",type:"text",placeholder:"팀",onChange:o,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),R.jsx("input",{name:"position",type:"text",placeholder:"직급",onChange:o,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),R.jsx("input",{name:"jobTitle",type:"text",placeholder:"직책",onChange:o,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"})]})]}),R.jsx("button",{type:"submit",disabled:n,className:"w-full py-3.5 mt-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-70",children:n?"저장 후 시작하기":"완료"})]})]})})},KM=({onClose:t})=>{const[e,n]=$.useState(!1),[r,s]=$.useState({email:"",password:"",confirmPassword:"",name:"",department:"",team:"",position:"",jobTitle:""}),i=a=>{s({...r,[a.target.name]:a.target.value})},o=async a=>{if(a.preventDefault(),r.password!==r.confirmPassword){alert("비밀번호가 일치하지 않습니다.");return}if(r.password.length<6){alert("비밀번호는 6자 이상이어야 합니다.");return}n(!0);try{await Kr.signup(r.email,r.password,r.name,{department:r.department,team:r.team,position:r.position,jobTitle:r.jobTitle}),alert("회원가입이 완료되었습니다."),t()}catch(u){console.error(u),u.code==="auth/email-already-in-use"?alert("이미 사용 중인 이메일입니다."):u.code==="auth/invalid-email"?alert("올바른 이메일 형식이 아닙니다."):alert("회원가입 실패: "+u.message)}finally{n(!1)}};return R.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in",children:R.jsxs("div",{className:"bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto",children:[R.jsxs("div",{className:"px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50",children:[R.jsx("h3",{className:"text-lg font-bold text-gray-900",children:"회원가입"}),R.jsx("button",{onClick:t,children:R.jsx(PI,{className:"w-5 h-5 text-gray-400 hover:text-gray-600"})})]}),R.jsxs("form",{onSubmit:o,className:"p-6 space-y-4",children:[R.jsxs("div",{className:"space-y-3",children:[R.jsx("h4",{className:"text-xs font-bold text-gray-400 uppercase",children:"필수 정보"}),R.jsx("input",{name:"email",type:"email",placeholder:"이메일 (ID)",required:!0,onChange:i,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),R.jsx("input",{name:"password",type:"password",placeholder:"비밀번호 (6자 이상)",required:!0,onChange:i,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),R.jsx("input",{name:"confirmPassword",type:"password",placeholder:"비밀번호 확인",required:!0,onChange:i,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),R.jsx("input",{name:"name",type:"text",placeholder:"이름",required:!0,onChange:i,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"})]}),R.jsxs("div",{className:"space-y-3 pt-2",children:[R.jsx("h4",{className:"text-xs font-bold text-gray-400 uppercase",children:"부가 정보 (선택)"}),R.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[R.jsx("input",{name:"department",type:"text",placeholder:"본부",onChange:i,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),R.jsx("input",{name:"team",type:"text",placeholder:"팀",onChange:i,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),R.jsx("input",{name:"position",type:"text",placeholder:"직급",onChange:i,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"}),R.jsx("input",{name:"jobTitle",type:"text",placeholder:"직책",onChange:i,className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"})]})]}),R.jsx("button",{type:"submit",disabled:e,className:"w-full py-3.5 mt-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-70",children:e?"처리 중...":"가입하기"})]})]})})},QM=({onClose:t})=>{const[e,n]=$.useState(""),[r,s]=$.useState(!1),[i,o]=$.useState(!1),a=async u=>{u.preventDefault(),s(!0);try{await Kr.resetPassword(e),o(!0)}catch(c){alert("전송 실패: "+c.message)}finally{s(!1)}};return R.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in",children:R.jsxs("div",{className:"bg-white w-full max-w-md rounded-2xl shadow-xl p-6 text-center",children:[R.jsx("div",{className:"flex justify-end mb-2",children:R.jsx("button",{onClick:t,children:R.jsx(PI,{className:"w-5 h-5 text-gray-400"})})}),i?R.jsxs("div",{className:"py-6",children:[R.jsx("div",{className:"w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4",children:R.jsx(CI,{className:"w-6 h-6"})}),R.jsx("h3",{className:"text-lg font-bold text-gray-900 mb-2",children:"이메일 전송 완료"}),R.jsx("p",{className:"text-sm text-gray-500 mb-6",children:"메일함을 확인하여 비밀번호를 재설정해주세요."}),R.jsx("button",{onClick:t,className:"w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200",children:"닫기"})]}):R.jsxs(R.Fragment,{children:[R.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-2",children:"비밀번호 재설정"}),R.jsxs("p",{className:"text-sm text-gray-500 mb-6",children:["가입하신 이메일 주소를 입력하시면",R.jsx("br",{}),"비밀번호 재설정 링크를 보내드립니다."]}),R.jsxs("form",{onSubmit:a,className:"space-y-4",children:[R.jsx("input",{type:"email",placeholder:"name@company.com",required:!0,value:e,onChange:u=>n(u.target.value),className:"w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-center"}),R.jsx("button",{type:"submit",disabled:r,className:"w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-70",children:r?"전송 중...":"재설정 링크 보내기"})]})]})]})})},p1=$.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Eh=$.createContext({}),kg=$.createContext(null),Th=typeof document<"u",YM=Th?$.useLayoutEffect:$.useEffect,m1=$.createContext({strict:!1}),Ng=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),XM="framerAppearId",g1="data-"+Ng(XM);function JM(t,e,n,r){const{visualElement:s}=$.useContext(Eh),i=$.useContext(m1),o=$.useContext(kg),a=$.useContext(p1).reducedMotion,u=$.useRef();r=r||i.renderer,!u.current&&r&&(u.current=r(t,{visualState:e,parent:s,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const c=u.current;$.useInsertionEffect(()=>{c&&c.update(n,o)});const h=$.useRef(!!(n[g1]&&!window.HandoffComplete));return YM(()=>{c&&(c.render(),h.current&&c.animationState&&c.animationState.animateChanges())}),$.useEffect(()=>{c&&(c.updateFeatures(),!h.current&&c.animationState&&c.animationState.animateChanges(),h.current&&(h.current=!1,window.HandoffComplete=!0))}),c}function Ni(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function ZM(t,e,n){return $.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):Ni(n)&&(n.current=r))},[e])}function Za(t){return typeof t=="string"||Array.isArray(t)}function Ih(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Dg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],bg=["initial",...Dg];function Sh(t){return Ih(t.animate)||bg.some(e=>Za(t[e]))}function y1(t){return!!(Sh(t)||t.variants)}function e4(t,e){if(Sh(t)){const{initial:n,animate:r}=t;return{initial:n===!1||Za(n)?n:void 0,animate:Za(r)?r:void 0}}return t.inherit!==!1?e:{}}function t4(t){const{initial:e,animate:n}=e4(t,$.useContext(Eh));return $.useMemo(()=>({initial:e,animate:n}),[q0(e),q0(n)])}function q0(t){return Array.isArray(t)?t.join(" "):t}const W0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},el={};for(const t in W0)el[t]={isEnabled:e=>W0[t].some(n=>!!e[n])};function n4(t){for(const e in t)el[e]={...el[e],...t[e]}}const _1=$.createContext({}),v1=$.createContext({}),r4=Symbol.for("motionComponentSymbol");function s4({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:s}){t&&n4(t);function i(a,u){let c;const h={...$.useContext(p1),...a,layoutId:i4(a)},{isStatic:f}=h,p=t4(a),g=r(a,f);if(!f&&Th){p.visualElement=JM(s,g,h,e);const T=$.useContext(v1),A=$.useContext(m1).strict;p.visualElement&&(c=p.visualElement.loadFeatures(h,A,t,T))}return $.createElement(Eh.Provider,{value:p},c&&p.visualElement?$.createElement(c,{visualElement:p.visualElement,...h}):null,n(s,a,ZM(g,p.visualElement,u),g,f,p.visualElement))}const o=$.forwardRef(i);return o[r4]=s,o}function i4({layoutId:t}){const e=$.useContext(_1).id;return e&&t!==void 0?e+"-"+t:t}function o4(t){function e(r,s={}){return s4(t(r,s))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(r,s)=>(n.has(s)||n.set(s,e(s)),n.get(s))})}const a4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Og(t){return typeof t!="string"||t.includes("-")?!1:!!(a4.indexOf(t)>-1||/[A-Z]/.test(t))}const Pc={};function l4(t){Object.assign(Pc,t)}const El=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ii=new Set(El);function w1(t,{layout:e,layoutId:n}){return ii.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Pc[t]||t==="opacity")}const Ut=t=>!!(t&&t.getVelocity),u4={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},c4=El.length;function h4(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},r,s){let i="";for(let o=0;o<c4;o++){const a=El[o];if(t[a]!==void 0){const u=u4[a]||a;i+=`${u}(${t[a]}) `}}return e&&!t.z&&(i+="translateZ(0)"),i=i.trim(),s?i=s(t,r?"":i):n&&r&&(i="none"),i}const E1=t=>e=>typeof e=="string"&&e.startsWith(t),T1=E1("--"),vp=E1("var(--"),d4=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,f4=(t,e)=>e&&typeof t=="number"?e.transform(t):t,os=(t,e,n)=>Math.min(Math.max(n,t),e),oi={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ta={...oi,transform:t=>os(0,1,t)},uu={...oi,default:1},Ia=t=>Math.round(t*1e5)/1e5,Ah=/(-)?([\d]*\.?[\d])+/g,I1=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,p4=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Tl(t){return typeof t=="string"}const Il=t=>({test:e=>Tl(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Tr=Il("deg"),Vn=Il("%"),X=Il("px"),m4=Il("vh"),g4=Il("vw"),K0={...Vn,parse:t=>Vn.parse(t)/100,transform:t=>Vn.transform(t*100)},Q0={...oi,transform:Math.round},S1={borderWidth:X,borderTopWidth:X,borderRightWidth:X,borderBottomWidth:X,borderLeftWidth:X,borderRadius:X,radius:X,borderTopLeftRadius:X,borderTopRightRadius:X,borderBottomRightRadius:X,borderBottomLeftRadius:X,width:X,maxWidth:X,height:X,maxHeight:X,size:X,top:X,right:X,bottom:X,left:X,padding:X,paddingTop:X,paddingRight:X,paddingBottom:X,paddingLeft:X,margin:X,marginTop:X,marginRight:X,marginBottom:X,marginLeft:X,rotate:Tr,rotateX:Tr,rotateY:Tr,rotateZ:Tr,scale:uu,scaleX:uu,scaleY:uu,scaleZ:uu,skew:Tr,skewX:Tr,skewY:Tr,distance:X,translateX:X,translateY:X,translateZ:X,x:X,y:X,z:X,perspective:X,transformPerspective:X,opacity:Ta,originX:K0,originY:K0,originZ:X,zIndex:Q0,fillOpacity:Ta,strokeOpacity:Ta,numOctaves:Q0};function Vg(t,e,n,r){const{style:s,vars:i,transform:o,transformOrigin:a}=t;let u=!1,c=!1,h=!0;for(const f in e){const p=e[f];if(T1(f)){i[f]=p;continue}const g=S1[f],T=f4(p,g);if(ii.has(f)){if(u=!0,o[f]=T,!h)continue;p!==(g.default||0)&&(h=!1)}else f.startsWith("origin")?(c=!0,a[f]=T):s[f]=T}if(e.transform||(u||r?s.transform=h4(t.transform,n,h,r):s.transform&&(s.transform="none")),c){const{originX:f="50%",originY:p="50%",originZ:g=0}=a;s.transformOrigin=`${f} ${p} ${g}`}}const Lg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function A1(t,e,n){for(const r in e)!Ut(e[r])&&!w1(r,n)&&(t[r]=e[r])}function y4({transformTemplate:t},e,n){return $.useMemo(()=>{const r=Lg();return Vg(r,e,{enableHardwareAcceleration:!n},t),Object.assign({},r.vars,r.style)},[e])}function _4(t,e,n){const r=t.style||{},s={};return A1(s,r,t),Object.assign(s,y4(t,e,n)),t.transformValues?t.transformValues(s):s}function v4(t,e,n){const r={},s=_4(t,e,n);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=s,r}const w4=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Rc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||w4.has(t)}let C1=t=>!Rc(t);function E4(t){t&&(C1=e=>e.startsWith("on")?!Rc(e):t(e))}try{E4(require("@emotion/is-prop-valid").default)}catch{}function T4(t,e,n){const r={};for(const s in t)s==="values"&&typeof t.values=="object"||(C1(s)||n===!0&&Rc(s)||!e&&!Rc(s)||t.draggable&&s.startsWith("onDrag"))&&(r[s]=t[s]);return r}function Y0(t,e,n){return typeof t=="string"?t:X.transform(e+n*t)}function I4(t,e,n){const r=Y0(e,t.x,t.width),s=Y0(n,t.y,t.height);return`${r} ${s}`}const S4={offset:"stroke-dashoffset",array:"stroke-dasharray"},A4={offset:"strokeDashoffset",array:"strokeDasharray"};function C4(t,e,n=1,r=0,s=!0){t.pathLength=1;const i=s?S4:A4;t[i.offset]=X.transform(-r);const o=X.transform(e),a=X.transform(n);t[i.array]=`${o} ${a}`}function Mg(t,{attrX:e,attrY:n,attrScale:r,originX:s,originY:i,pathLength:o,pathSpacing:a=1,pathOffset:u=0,...c},h,f,p){if(Vg(t,c,h,p),f){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:g,style:T,dimensions:A}=t;g.transform&&(A&&(T.transform=g.transform),delete g.transform),A&&(s!==void 0||i!==void 0||T.transform)&&(T.transformOrigin=I4(A,s!==void 0?s:.5,i!==void 0?i:.5)),e!==void 0&&(g.x=e),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),o!==void 0&&C4(g,o,a,u,!1)}const P1=()=>({...Lg(),attrs:{}}),Ug=t=>typeof t=="string"&&t.toLowerCase()==="svg";function P4(t,e,n,r){const s=$.useMemo(()=>{const i=P1();return Mg(i,e,{enableHardwareAcceleration:!1},Ug(r),t.transformTemplate),{...i.attrs,style:{...i.style}}},[e]);if(t.style){const i={};A1(i,t.style,t),s.style={...i,...s.style}}return s}function R4(t=!1){return(n,r,s,{latestValues:i},o)=>{const u=(Og(n)?P4:v4)(r,i,o,n),h={...T4(r,typeof n=="string",t),...u,ref:s},{children:f}=r,p=$.useMemo(()=>Ut(f)?f.get():f,[f]);return $.createElement(n,{...h,children:p})}}function R1(t,{style:e,vars:n},r,s){Object.assign(t.style,e,s&&s.getProjectionStyles(r));for(const i in n)t.style.setProperty(i,n[i])}const x1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function k1(t,e,n,r){R1(t,e,void 0,r);for(const s in e.attrs)t.setAttribute(x1.has(s)?s:Ng(s),e.attrs[s])}function Fg(t,e){const{style:n}=t,r={};for(const s in n)(Ut(n[s])||e.style&&Ut(e.style[s])||w1(s,t))&&(r[s]=n[s]);return r}function N1(t,e){const n=Fg(t,e);for(const r in t)if(Ut(t[r])||Ut(e[r])){const s=El.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=t[r]}return n}function jg(t,e,n,r={},s={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,s)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,s)),e}function x4(t){const e=$.useRef(null);return e.current===null&&(e.current=t()),e.current}const xc=t=>Array.isArray(t),k4=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),N4=t=>xc(t)?t[t.length-1]||0:t;function Vu(t){const e=Ut(t)?t.get():t;return k4(e)?e.toValue():e}function D4({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,s,i){const o={latestValues:b4(r,s,i,t),renderState:e()};return n&&(o.mount=a=>n(r,a,o)),o}const D1=t=>(e,n)=>{const r=$.useContext(Eh),s=$.useContext(kg),i=()=>D4(t,e,r,s);return n?i():x4(i)};function b4(t,e,n,r){const s={},i=r(t,{});for(const p in i)s[p]=Vu(i[p]);let{initial:o,animate:a}=t;const u=Sh(t),c=y1(t);e&&c&&!u&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let h=n?n.initial===!1:!1;h=h||o===!1;const f=h?a:o;return f&&typeof f!="boolean"&&!Ih(f)&&(Array.isArray(f)?f:[f]).forEach(g=>{const T=jg(t,g);if(!T)return;const{transitionEnd:A,transition:N,...I}=T;for(const v in I){let w=I[v];if(Array.isArray(w)){const k=h?w.length-1:0;w=w[k]}w!==null&&(s[v]=w)}for(const v in A)s[v]=A[v]}),s}const Me=t=>t;class X0{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function O4(t){let e=new X0,n=new X0,r=0,s=!1,i=!1;const o=new WeakSet,a={schedule:(u,c=!1,h=!1)=>{const f=h&&s,p=f?e:n;return c&&o.add(u),p.add(u)&&f&&s&&(r=e.order.length),u},cancel:u=>{n.remove(u),o.delete(u)},process:u=>{if(s){i=!0;return}if(s=!0,[e,n]=[n,e],n.clear(),r=e.order.length,r)for(let c=0;c<r;c++){const h=e.order[c];h(u),o.has(h)&&(a.schedule(h),t())}s=!1,i&&(i=!1,a.process(u))}};return a}const cu=["prepare","read","update","preRender","render","postRender"],V4=40;function L4(t,e){let n=!1,r=!0;const s={delta:0,timestamp:0,isProcessing:!1},i=cu.reduce((f,p)=>(f[p]=O4(()=>n=!0),f),{}),o=f=>i[f].process(s),a=()=>{const f=performance.now();n=!1,s.delta=r?1e3/60:Math.max(Math.min(f-s.timestamp,V4),1),s.timestamp=f,s.isProcessing=!0,cu.forEach(o),s.isProcessing=!1,n&&e&&(r=!1,t(a))},u=()=>{n=!0,r=!0,s.isProcessing||t(a)};return{schedule:cu.reduce((f,p)=>{const g=i[p];return f[p]=(T,A=!1,N=!1)=>(n||u(),g.schedule(T,A,N)),f},{}),cancel:f=>cu.forEach(p=>i[p].cancel(f)),state:s,steps:i}}const{schedule:Ie,cancel:cr,state:dt,steps:Ud}=L4(typeof requestAnimationFrame<"u"?requestAnimationFrame:Me,!0),M4={useVisualState:D1({scrapeMotionValuesFromProps:N1,createRenderState:P1,onMount:(t,e,{renderState:n,latestValues:r})=>{Ie.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Ie.render(()=>{Mg(n,r,{enableHardwareAcceleration:!1},Ug(e.tagName),t.transformTemplate),k1(e,n)})}})},U4={useVisualState:D1({scrapeMotionValuesFromProps:Fg,createRenderState:Lg})};function F4(t,{forwardMotionProps:e=!1},n,r){return{...Og(t)?M4:U4,preloadedFeatures:n,useRender:R4(e),createVisualElement:r,Component:t}}function Yn(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}const b1=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Ch(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const j4=t=>e=>b1(e)&&t(e,Ch(e));function er(t,e,n,r){return Yn(t,e,j4(n),r)}const B4=(t,e)=>n=>e(t(n)),Qr=(...t)=>t.reduce(B4);function O1(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const J0=O1("dragHorizontal"),Z0=O1("dragVertical");function V1(t){let e=!1;if(t==="y")e=Z0();else if(t==="x")e=J0();else{const n=J0(),r=Z0();n&&r?e=()=>{n(),r()}:(n&&n(),r&&r())}return e}function L1(){const t=V1(!0);return t?(t(),!1):!0}class ms{constructor(e){this.isMounted=!1,this.node=e}update(){}}function ew(t,e){const n="pointer"+(e?"enter":"leave"),r="onHover"+(e?"Start":"End"),s=(i,o)=>{if(i.pointerType==="touch"||L1())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[r]&&Ie.update(()=>a[r](i,o))};return er(t.current,n,s,{passive:!t.getProps()[r]})}class $4 extends ms{mount(){this.unmount=Qr(ew(this.node,!0),ew(this.node,!1))}unmount(){}}class z4 extends ms{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Qr(Yn(this.node.current,"focus",()=>this.onFocus()),Yn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const M1=(t,e)=>e?t===e?!0:M1(t,e.parentElement):!1;function Fd(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Ch(n))}class H4 extends ms{constructor(){super(...arguments),this.removeStartListeners=Me,this.removeEndListeners=Me,this.removeAccessibleListeners=Me,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),i=er(window,"pointerup",(a,u)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:h,globalTapTarget:f}=this.node.getProps();Ie.update(()=>{!f&&!M1(this.node.current,a.target)?h&&h(a,u):c&&c(a,u)})},{passive:!(r.onTap||r.onPointerUp)}),o=er(window,"pointercancel",(a,u)=>this.cancelPress(a,u),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Qr(i,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=i=>{if(i.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Fd("up",(u,c)=>{const{onTap:h}=this.node.getProps();h&&Ie.update(()=>h(u,c))})};this.removeEndListeners(),this.removeEndListeners=Yn(this.node.current,"keyup",o),Fd("down",(a,u)=>{this.startPress(a,u)})},n=Yn(this.node.current,"keydown",e),r=()=>{this.isPressing&&Fd("cancel",(i,o)=>this.cancelPress(i,o))},s=Yn(this.node.current,"blur",r);this.removeAccessibleListeners=Qr(n,s)}}startPress(e,n){this.isPressing=!0;const{onTapStart:r,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&Ie.update(()=>r(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!L1()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&Ie.update(()=>r(e,n))}mount(){const e=this.node.getProps(),n=er(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=Yn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Qr(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const wp=new WeakMap,jd=new WeakMap,G4=t=>{const e=wp.get(t.target);e&&e(t)},q4=t=>{t.forEach(G4)};function W4({root:t,...e}){const n=t||document;jd.has(n)||jd.set(n,{});const r=jd.get(n),s=JSON.stringify(e);return r[s]||(r[s]=new IntersectionObserver(q4,{root:t,...e})),r[s]}function K4(t,e,n){const r=W4(e);return wp.set(t,n),r.observe(t),()=>{wp.delete(t),r.unobserve(t)}}const Q4={some:0,all:1};class Y4 extends ms{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:s="some",once:i}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof s=="number"?s:Q4[s]},a=u=>{const{isIntersecting:c}=u;if(this.isInView===c||(this.isInView=c,i&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:h,onViewportLeave:f}=this.node.getProps(),p=c?h:f;p&&p(u)};return K4(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(X4(e,n))&&this.startObserver()}unmount(){}}function X4({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const J4={inView:{Feature:Y4},tap:{Feature:H4},focus:{Feature:z4},hover:{Feature:$4}};function U1(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function Z4(t){const e={};return t.values.forEach((n,r)=>e[r]=n.get()),e}function eU(t){const e={};return t.values.forEach((n,r)=>e[r]=n.getVelocity()),e}function Ph(t,e,n){const r=t.getProps();return jg(r,e,n!==void 0?n:r.custom,Z4(t),eU(t))}let Bg=Me;const Us=t=>t*1e3,tr=t=>t/1e3,tU={current:!1},F1=t=>Array.isArray(t)&&typeof t[0]=="number";function j1(t){return!!(!t||typeof t=="string"&&B1[t]||F1(t)||Array.isArray(t)&&t.every(j1))}const ia=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,B1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ia([0,.65,.55,1]),circOut:ia([.55,0,1,.45]),backIn:ia([.31,.01,.66,-.59]),backOut:ia([.33,1.53,.69,.99])};function $1(t){if(t)return F1(t)?ia(t):Array.isArray(t)?t.map($1):B1[t]}function nU(t,e,n,{delay:r=0,duration:s,repeat:i=0,repeatType:o="loop",ease:a,times:u}={}){const c={[e]:n};u&&(c.offset=u);const h=$1(a);return Array.isArray(h)&&(c.easing=h),t.animate(c,{delay:r,duration:s,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:i+1,direction:o==="reverse"?"alternate":"normal"})}function rU(t,{repeat:e,repeatType:n="loop"}){const r=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[r]}const z1=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,sU=1e-7,iU=12;function oU(t,e,n,r,s){let i,o,a=0;do o=e+(n-e)/2,i=z1(o,r,s)-t,i>0?n=o:e=o;while(Math.abs(i)>sU&&++a<iU);return o}function Sl(t,e,n,r){if(t===e&&n===r)return Me;const s=i=>oU(i,0,1,t,n);return i=>i===0||i===1?i:z1(s(i),e,r)}const aU=Sl(.42,0,1,1),lU=Sl(0,0,.58,1),H1=Sl(.42,0,.58,1),uU=t=>Array.isArray(t)&&typeof t[0]!="number",G1=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,q1=t=>e=>1-t(1-e),$g=t=>1-Math.sin(Math.acos(t)),W1=q1($g),cU=G1($g),K1=Sl(.33,1.53,.69,.99),zg=q1(K1),hU=G1(zg),dU=t=>(t*=2)<1?.5*zg(t):.5*(2-Math.pow(2,-10*(t-1))),fU={linear:Me,easeIn:aU,easeInOut:H1,easeOut:lU,circIn:$g,circInOut:cU,circOut:W1,backIn:zg,backInOut:hU,backOut:K1,anticipate:dU},tw=t=>{if(Array.isArray(t)){Bg(t.length===4);const[e,n,r,s]=t;return Sl(e,n,r,s)}else if(typeof t=="string")return fU[t];return t},Hg=(t,e)=>n=>!!(Tl(n)&&p4.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),Q1=(t,e,n)=>r=>{if(!Tl(r))return r;const[s,i,o,a]=r.match(Ah);return{[t]:parseFloat(s),[e]:parseFloat(i),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},pU=t=>os(0,255,t),Bd={...oi,transform:t=>Math.round(pU(t))},bs={test:Hg("rgb","red"),parse:Q1("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+Bd.transform(t)+", "+Bd.transform(e)+", "+Bd.transform(n)+", "+Ia(Ta.transform(r))+")"};function mU(t){let e="",n="",r="",s="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),s=t.substring(4,5),e+=e,n+=n,r+=r,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const Ep={test:Hg("#"),parse:mU,transform:bs.transform},Di={test:Hg("hsl","hue"),parse:Q1("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+Vn.transform(Ia(e))+", "+Vn.transform(Ia(n))+", "+Ia(Ta.transform(r))+")"},It={test:t=>bs.test(t)||Ep.test(t)||Di.test(t),parse:t=>bs.test(t)?bs.parse(t):Di.test(t)?Di.parse(t):Ep.parse(t),transform:t=>Tl(t)?t:t.hasOwnProperty("red")?bs.transform(t):Di.transform(t)},Pe=(t,e,n)=>-n*t+n*e+t;function $d(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function gU({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let s=0,i=0,o=0;if(!e)s=i=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,u=2*n-a;s=$d(u,a,t+1/3),i=$d(u,a,t),o=$d(u,a,t-1/3)}return{red:Math.round(s*255),green:Math.round(i*255),blue:Math.round(o*255),alpha:r}}const zd=(t,e,n)=>{const r=t*t;return Math.sqrt(Math.max(0,n*(e*e-r)+r))},yU=[Ep,bs,Di],_U=t=>yU.find(e=>e.test(t));function nw(t){const e=_U(t);let n=e.parse(t);return e===Di&&(n=gU(n)),n}const Y1=(t,e)=>{const n=nw(t),r=nw(e),s={...n};return i=>(s.red=zd(n.red,r.red,i),s.green=zd(n.green,r.green,i),s.blue=zd(n.blue,r.blue,i),s.alpha=Pe(n.alpha,r.alpha,i),bs.transform(s))};function vU(t){var e,n;return isNaN(t)&&Tl(t)&&(((e=t.match(Ah))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(I1))===null||n===void 0?void 0:n.length)||0)>0}const X1={regex:d4,countKey:"Vars",token:"${v}",parse:Me},J1={regex:I1,countKey:"Colors",token:"${c}",parse:It.parse},Z1={regex:Ah,countKey:"Numbers",token:"${n}",parse:oi.parse};function Hd(t,{regex:e,countKey:n,token:r,parse:s}){const i=t.tokenised.match(e);i&&(t["num"+n]=i.length,t.tokenised=t.tokenised.replace(e,r),t.values.push(...i.map(s)))}function kc(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Hd(n,X1),Hd(n,J1),Hd(n,Z1),n}function eC(t){return kc(t).values}function tC(t){const{values:e,numColors:n,numVars:r,tokenised:s}=kc(t),i=e.length;return o=>{let a=s;for(let u=0;u<i;u++)u<r?a=a.replace(X1.token,o[u]):u<r+n?a=a.replace(J1.token,It.transform(o[u])):a=a.replace(Z1.token,Ia(o[u]));return a}}const wU=t=>typeof t=="number"?0:t;function EU(t){const e=eC(t);return tC(t)(e.map(wU))}const as={test:vU,parse:eC,createTransformer:tC,getAnimatableNone:EU},nC=(t,e)=>n=>`${n>0?e:t}`;function rC(t,e){return typeof t=="number"?n=>Pe(t,e,n):It.test(t)?Y1(t,e):t.startsWith("var(")?nC(t,e):iC(t,e)}const sC=(t,e)=>{const n=[...t],r=n.length,s=t.map((i,o)=>rC(i,e[o]));return i=>{for(let o=0;o<r;o++)n[o]=s[o](i);return n}},TU=(t,e)=>{const n={...t,...e},r={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(r[s]=rC(t[s],e[s]));return s=>{for(const i in r)n[i]=r[i](s);return n}},iC=(t,e)=>{const n=as.createTransformer(e),r=kc(t),s=kc(e);return r.numVars===s.numVars&&r.numColors===s.numColors&&r.numNumbers>=s.numNumbers?Qr(sC(r.values,s.values),n):nC(t,e)},tl=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},rw=(t,e)=>n=>Pe(t,e,n);function IU(t){return typeof t=="number"?rw:typeof t=="string"?It.test(t)?Y1:iC:Array.isArray(t)?sC:typeof t=="object"?TU:rw}function SU(t,e,n){const r=[],s=n||IU(t[0]),i=t.length-1;for(let o=0;o<i;o++){let a=s(t[o],t[o+1]);if(e){const u=Array.isArray(e)?e[o]||Me:e;a=Qr(u,a)}r.push(a)}return r}function oC(t,e,{clamp:n=!0,ease:r,mixer:s}={}){const i=t.length;if(Bg(i===e.length),i===1)return()=>e[0];t[0]>t[i-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=SU(e,r,s),a=o.length,u=c=>{let h=0;if(a>1)for(;h<t.length-2&&!(c<t[h+1]);h++);const f=tl(t[h],t[h+1],c);return o[h](f)};return n?c=>u(os(t[0],t[i-1],c)):u}function AU(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const s=tl(0,e,r);t.push(Pe(n,1,s))}}function CU(t){const e=[0];return AU(e,t.length-1),e}function PU(t,e){return t.map(n=>n*e)}function RU(t,e){return t.map(()=>e||H1).splice(0,t.length-1)}function Nc({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const s=uU(r)?r.map(tw):tw(r),i={done:!1,value:e[0]},o=PU(n&&n.length===e.length?n:CU(e),t),a=oC(o,e,{ease:Array.isArray(s)?s:RU(e,s)});return{calculatedDuration:t,next:u=>(i.value=a(u),i.done=u>=t,i)}}function aC(t,e){return e?t*(1e3/e):0}const xU=5;function lC(t,e,n){const r=Math.max(e-xU,0);return aC(n-t(r),e-r)}const Gd=.001,kU=.01,NU=10,DU=.05,bU=1;function OU({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let s,i,o=1-e;o=os(DU,bU,o),t=os(kU,NU,tr(t)),o<1?(s=c=>{const h=c*o,f=h*t,p=h-n,g=Tp(c,o),T=Math.exp(-f);return Gd-p/g*T},i=c=>{const f=c*o*t,p=f*n+n,g=Math.pow(o,2)*Math.pow(c,2)*t,T=Math.exp(-f),A=Tp(Math.pow(c,2),o);return(-s(c)+Gd>0?-1:1)*((p-g)*T)/A}):(s=c=>{const h=Math.exp(-c*t),f=(c-n)*t+1;return-Gd+h*f},i=c=>{const h=Math.exp(-c*t),f=(n-c)*(t*t);return h*f});const a=5/t,u=LU(s,i,a);if(t=Us(t),isNaN(u))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(u,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:t}}}const VU=12;function LU(t,e,n){let r=n;for(let s=1;s<VU;s++)r=r-t(r)/e(r);return r}function Tp(t,e){return t*Math.sqrt(1-e*e)}const MU=["duration","bounce"],UU=["stiffness","damping","mass"];function sw(t,e){return e.some(n=>t[n]!==void 0)}function FU(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!sw(t,UU)&&sw(t,MU)){const n=OU(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function uC({keyframes:t,restDelta:e,restSpeed:n,...r}){const s=t[0],i=t[t.length-1],o={done:!1,value:s},{stiffness:a,damping:u,mass:c,duration:h,velocity:f,isResolvedFromDuration:p}=FU({...r,velocity:-tr(r.velocity||0)}),g=f||0,T=u/(2*Math.sqrt(a*c)),A=i-s,N=tr(Math.sqrt(a/c)),I=Math.abs(A)<5;n||(n=I?.01:2),e||(e=I?.005:.5);let v;if(T<1){const w=Tp(N,T);v=k=>{const V=Math.exp(-T*N*k);return i-V*((g+T*N*A)/w*Math.sin(w*k)+A*Math.cos(w*k))}}else if(T===1)v=w=>i-Math.exp(-N*w)*(A+(g+N*A)*w);else{const w=N*Math.sqrt(T*T-1);v=k=>{const V=Math.exp(-T*N*k),F=Math.min(w*k,300);return i-V*((g+T*N*A)*Math.sinh(F)+w*A*Math.cosh(F))/w}}return{calculatedDuration:p&&h||null,next:w=>{const k=v(w);if(p)o.done=w>=h;else{let V=g;w!==0&&(T<1?V=lC(v,w,k):V=0);const F=Math.abs(V)<=n,E=Math.abs(i-k)<=e;o.done=F&&E}return o.value=o.done?i:k,o}}}function iw({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:s=10,bounceStiffness:i=500,modifyTarget:o,min:a,max:u,restDelta:c=.5,restSpeed:h}){const f=t[0],p={done:!1,value:f},g=y=>a!==void 0&&y<a||u!==void 0&&y>u,T=y=>a===void 0?u:u===void 0||Math.abs(a-y)<Math.abs(u-y)?a:u;let A=n*e;const N=f+A,I=o===void 0?N:o(N);I!==N&&(A=I-f);const v=y=>-A*Math.exp(-y/r),w=y=>I+v(y),k=y=>{const S=v(y),P=w(y);p.done=Math.abs(S)<=c,p.value=p.done?I:P};let V,F;const E=y=>{g(p.value)&&(V=y,F=uC({keyframes:[p.value,T(p.value)],velocity:lC(w,y,p.value),damping:s,stiffness:i,restDelta:c,restSpeed:h}))};return E(0),{calculatedDuration:null,next:y=>{let S=!1;return!F&&V===void 0&&(S=!0,k(y),E(y)),V!==void 0&&y>V?F.next(y-V):(!S&&k(y),p)}}}const jU=t=>{const e=({timestamp:n})=>t(n);return{start:()=>Ie.update(e,!0),stop:()=>cr(e),now:()=>dt.isProcessing?dt.timestamp:performance.now()}},ow=2e4;function aw(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<ow;)e+=n,r=t.next(e);return e>=ow?1/0:e}const BU={decay:iw,inertia:iw,tween:Nc,keyframes:Nc,spring:uC};function Dc({autoplay:t=!0,delay:e=0,driver:n=jU,keyframes:r,type:s="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",onPlay:u,onStop:c,onComplete:h,onUpdate:f,...p}){let g=1,T=!1,A,N;const I=()=>{N=new Promise(U=>{A=U})};I();let v;const w=BU[s]||Nc;let k;w!==Nc&&typeof r[0]!="number"&&(k=oC([0,100],r,{clamp:!1}),r=[0,100]);const V=w({...p,keyframes:r});let F;a==="mirror"&&(F=w({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let E="idle",y=null,S=null,P=null;V.calculatedDuration===null&&i&&(V.calculatedDuration=aw(V));const{calculatedDuration:x}=V;let D=1/0,C=1/0;x!==null&&(D=x+o,C=D*(i+1)-o);let ue=0;const He=U=>{if(S===null)return;g>0&&(S=Math.min(S,U)),g<0&&(S=Math.min(U-C/g,S)),y!==null?ue=y:ue=Math.round(U-S)*g;const G=ue-e*(g>=0?1:-1),te=g>=0?G<0:G>C;ue=Math.max(G,0),E==="finished"&&y===null&&(ue=C);let he=ue,et=V;if(i){const Bn=Math.min(ue,C)/D;let ai=Math.floor(Bn),$n=Bn%1;!$n&&Bn>=1&&($n=1),$n===1&&ai--,ai=Math.min(ai,i+1),!!(ai%2)&&(a==="reverse"?($n=1-$n,o&&($n-=o/D)):a==="mirror"&&(et=F)),he=os(0,1,$n)*D}const re=te?{done:!1,value:r[0]}:et.next(he);k&&(re.value=k(re.value));let{done:Ge}=re;!te&&x!==null&&(Ge=g>=0?ue>=C:ue<=0);const jn=y===null&&(E==="finished"||E==="running"&&Ge);return f&&f(re.value),jn&&H(),re},_e=()=>{v&&v.stop(),v=void 0},at=()=>{E="idle",_e(),A(),I(),S=P=null},H=()=>{E="finished",h&&h(),_e(),A()},Q=()=>{if(T)return;v||(v=n(He));const U=v.now();u&&u(),y!==null?S=U-y:(!S||E==="finished")&&(S=U),E==="finished"&&I(),P=S,y=null,E="running",v.start()};t&&Q();const j={then(U,G){return N.then(U,G)},get time(){return tr(ue)},set time(U){U=Us(U),ue=U,y!==null||!v||g===0?y=U:S=v.now()-U/g},get duration(){const U=V.calculatedDuration===null?aw(V):V.calculatedDuration;return tr(U)},get speed(){return g},set speed(U){U===g||!v||(g=U,j.time=tr(ue))},get state(){return E},play:Q,pause:()=>{E="paused",y=ue},stop:()=>{T=!0,E!=="idle"&&(E="idle",c&&c(),at())},cancel:()=>{P!==null&&He(P),at()},complete:()=>{E="finished"},sample:U=>(S=0,He(U))};return j}function $U(t){let e;return()=>(e===void 0&&(e=t()),e)}const zU=$U(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),HU=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),hu=10,GU=2e4,qU=(t,e)=>e.type==="spring"||t==="backgroundColor"||!j1(e.ease);function WU(t,e,{onUpdate:n,onComplete:r,...s}){if(!(zU()&&HU.has(e)&&!s.repeatDelay&&s.repeatType!=="mirror"&&s.damping!==0&&s.type!=="inertia"))return!1;let o=!1,a,u,c=!1;const h=()=>{u=new Promise(w=>{a=w})};h();let{keyframes:f,duration:p=300,ease:g,times:T}=s;if(qU(e,s)){const w=Dc({...s,repeat:0,delay:0});let k={done:!1,value:f[0]};const V=[];let F=0;for(;!k.done&&F<GU;)k=w.sample(F),V.push(k.value),F+=hu;T=void 0,f=V,p=F-hu,g="linear"}const A=nU(t.owner.current,e,f,{...s,duration:p,ease:g,times:T}),N=()=>{c=!1,A.cancel()},I=()=>{c=!0,Ie.update(N),a(),h()};return A.onfinish=()=>{c||(t.set(rU(f,s)),r&&r(),I())},{then(w,k){return u.then(w,k)},attachTimeline(w){return A.timeline=w,A.onfinish=null,Me},get time(){return tr(A.currentTime||0)},set time(w){A.currentTime=Us(w)},get speed(){return A.playbackRate},set speed(w){A.playbackRate=w},get duration(){return tr(p)},play:()=>{o||(A.play(),cr(N))},pause:()=>A.pause(),stop:()=>{if(o=!0,A.playState==="idle")return;const{currentTime:w}=A;if(w){const k=Dc({...s,autoplay:!1});t.setWithVelocity(k.sample(w-hu).value,k.sample(w).value,hu)}I()},complete:()=>{c||A.finish()},cancel:I}}function KU({keyframes:t,delay:e,onUpdate:n,onComplete:r}){const s=()=>(n&&n(t[t.length-1]),r&&r(),{time:0,speed:1,duration:0,play:Me,pause:Me,stop:Me,then:i=>(i(),Promise.resolve()),cancel:Me,complete:Me});return e?Dc({keyframes:[0,1],duration:0,delay:e,onComplete:s}):s()}const QU={type:"spring",stiffness:500,damping:25,restSpeed:10},YU=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),XU={type:"keyframes",duration:.8},JU={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ZU=(t,{keyframes:e})=>e.length>2?XU:ii.has(t)?t.startsWith("scale")?YU(e[1]):QU:JU,Ip=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(as.test(e)||e==="0")&&!e.startsWith("url(")),eF=new Set(["brightness","contrast","saturate","opacity"]);function tF(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(Ah)||[];if(!r)return t;const s=n.replace(r,"");let i=eF.has(e)?1:0;return r!==n&&(i*=100),e+"("+i+s+")"}const nF=/([a-z-]*)\(.*?\)/g,Sp={...as,getAnimatableNone:t=>{const e=t.match(nF);return e?e.map(tF).join(" "):t}},rF={...S1,color:It,backgroundColor:It,outlineColor:It,fill:It,stroke:It,borderColor:It,borderTopColor:It,borderRightColor:It,borderBottomColor:It,borderLeftColor:It,filter:Sp,WebkitFilter:Sp},Gg=t=>rF[t];function cC(t,e){let n=Gg(t);return n!==Sp&&(n=as),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const hC=t=>/^0[^.\s]+$/.test(t);function sF(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||hC(t)}function iF(t,e,n,r){const s=Ip(e,n);let i;Array.isArray(n)?i=[...n]:i=[null,n];const o=r.from!==void 0?r.from:t.get();let a;const u=[];for(let c=0;c<i.length;c++)i[c]===null&&(i[c]=c===0?o:i[c-1]),sF(i[c])&&u.push(c),typeof i[c]=="string"&&i[c]!=="none"&&i[c]!=="0"&&(a=i[c]);if(s&&u.length&&a)for(let c=0;c<u.length;c++){const h=u[c];i[h]=cC(e,a)}return i}function oF({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:s,repeat:i,repeatType:o,repeatDelay:a,from:u,elapsed:c,...h}){return!!Object.keys(h).length}function qg(t,e){return t[e]||t.default||t}const aF={skipAnimations:!1},Wg=(t,e,n,r={})=>s=>{const i=qg(r,t)||{},o=i.delay||r.delay||0;let{elapsed:a=0}=r;a=a-Us(o);const u=iF(e,t,n,i),c=u[0],h=u[u.length-1],f=Ip(t,c),p=Ip(t,h);let g={keyframes:u,velocity:e.getVelocity(),ease:"easeOut",...i,delay:-a,onUpdate:T=>{e.set(T),i.onUpdate&&i.onUpdate(T)},onComplete:()=>{s(),i.onComplete&&i.onComplete()}};if(oF(i)||(g={...g,...ZU(t,g)}),g.duration&&(g.duration=Us(g.duration)),g.repeatDelay&&(g.repeatDelay=Us(g.repeatDelay)),!f||!p||tU.current||i.type===!1||aF.skipAnimations)return KU(g);if(!r.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const T=WU(e,t,g);if(T)return T}return Dc(g)};function bc(t){return!!(Ut(t)&&t.add)}const dC=t=>/^\-?\d*\.?\d+$/.test(t);function Kg(t,e){t.indexOf(e)===-1&&t.push(e)}function Qg(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Yg{constructor(){this.subscriptions=[]}add(e){return Kg(this.subscriptions,e),()=>Qg(this.subscriptions,e)}notify(e,n,r){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,n,r);else for(let i=0;i<s;i++){const o=this.subscriptions[i];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const lF=t=>!isNaN(parseFloat(t));class uF{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,s=!0)=>{this.prev=this.current,this.current=r;const{delta:i,timestamp:o}=dt;this.lastUpdated!==o&&(this.timeDelta=i,this.lastUpdated=o,Ie.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Ie.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=lF(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Yg);const r=this.events[e].add(n);return e==="change"?()=>{r(),Ie.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=e,this.timeDelta=r}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?aC(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function io(t,e){return new uF(t,e)}const fC=t=>e=>e.test(t),cF={test:t=>t==="auto",parse:t=>t},pC=[oi,X,Vn,Tr,g4,m4,cF],Go=t=>pC.find(fC(t)),hF=[...pC,It,as],dF=t=>hF.find(fC(t));function fF(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,io(n))}function pF(t,e){const n=Ph(t,e);let{transitionEnd:r={},transition:s={},...i}=n?t.makeTargetAnimatable(n,!1):{};i={...i,...r};for(const o in i){const a=N4(i[o]);fF(t,o,a)}}function mF(t,e,n){var r,s;const i=Object.keys(e).filter(a=>!t.hasValue(a)),o=i.length;if(o)for(let a=0;a<o;a++){const u=i[a],c=e[u];let h=null;Array.isArray(c)&&(h=c[0]),h===null&&(h=(s=(r=n[u])!==null&&r!==void 0?r:t.readValue(u))!==null&&s!==void 0?s:e[u]),h!=null&&(typeof h=="string"&&(dC(h)||hC(h))?h=parseFloat(h):!dF(h)&&as.test(c)&&(h=cC(u,c)),t.addValue(u,io(h,{owner:t})),n[u]===void 0&&(n[u]=h),h!==null&&t.setBaseTarget(u,h))}}function gF(t,e){return e?(e[t]||e.default||e).from:void 0}function yF(t,e,n){const r={};for(const s in t){const i=gF(s,e);if(i!==void 0)r[s]=i;else{const o=n.getValue(s);o&&(r[s]=o.get())}}return r}function _F({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function vF(t,e){const n=t.get();if(Array.isArray(e)){for(let r=0;r<e.length;r++)if(e[r]!==n)return!0}else return n!==e}function mC(t,e,{delay:n=0,transitionOverride:r,type:s}={}){let{transition:i=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const u=t.getValue("willChange");r&&(i=r);const c=[],h=s&&t.animationState&&t.animationState.getState()[s];for(const f in a){const p=t.getValue(f),g=a[f];if(!p||g===void 0||h&&_F(h,f))continue;const T={delay:n,elapsed:0,...qg(i||{},f)};if(window.HandoffAppearAnimations){const I=t.getProps()[g1];if(I){const v=window.HandoffAppearAnimations(I,f,p,Ie);v!==null&&(T.elapsed=v,T.isHandoff=!0)}}let A=!T.isHandoff&&!vF(p,g);if(T.type==="spring"&&(p.getVelocity()||T.velocity)&&(A=!1),p.animation&&(A=!1),A)continue;p.start(Wg(f,p,g,t.shouldReduceMotion&&ii.has(f)?{type:!1}:T));const N=p.animation;bc(u)&&(u.add(f),N.then(()=>u.remove(f))),c.push(N)}return o&&Promise.all(c).then(()=>{o&&pF(t,o)}),c}function Ap(t,e,n={}){const r=Ph(t,e,n.custom);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const i=r?()=>Promise.all(mC(t,r,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:h,staggerDirection:f}=s;return wF(t,e,c+u,h,f,n)}:()=>Promise.resolve(),{when:a}=s;if(a){const[u,c]=a==="beforeChildren"?[i,o]:[o,i];return u().then(()=>c())}else return Promise.all([i(),o(n.delay)])}function wF(t,e,n=0,r=0,s=1,i){const o=[],a=(t.variantChildren.size-1)*r,u=s===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(t.variantChildren).sort(EF).forEach((c,h)=>{c.notify("AnimationStart",e),o.push(Ap(c,e,{...i,delay:n+u(h)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function EF(t,e){return t.sortNodePosition(e)}function TF(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const s=e.map(i=>Ap(t,i,n));r=Promise.all(s)}else if(typeof e=="string")r=Ap(t,e,n);else{const s=typeof e=="function"?Ph(t,e,n.custom):e;r=Promise.all(mC(t,s,n))}return r.then(()=>t.notify("AnimationComplete",e))}const IF=[...Dg].reverse(),SF=Dg.length;function AF(t){return e=>Promise.all(e.map(({animation:n,options:r})=>TF(t,n,r)))}function CF(t){let e=AF(t);const n=RF();let r=!0;const s=(u,c)=>{const h=Ph(t,c);if(h){const{transition:f,transitionEnd:p,...g}=h;u={...u,...g,...p}}return u};function i(u){e=u(t)}function o(u,c){const h=t.getProps(),f=t.getVariantContext(!0)||{},p=[],g=new Set;let T={},A=1/0;for(let I=0;I<SF;I++){const v=IF[I],w=n[v],k=h[v]!==void 0?h[v]:f[v],V=Za(k),F=v===c?w.isActive:null;F===!1&&(A=I);let E=k===f[v]&&k!==h[v]&&V;if(E&&r&&t.manuallyAnimateOnMount&&(E=!1),w.protectedKeys={...T},!w.isActive&&F===null||!k&&!w.prevProp||Ih(k)||typeof k=="boolean")continue;let S=PF(w.prevProp,k)||v===c&&w.isActive&&!E&&V||I>A&&V,P=!1;const x=Array.isArray(k)?k:[k];let D=x.reduce(s,{});F===!1&&(D={});const{prevResolvedValues:C={}}=w,ue={...C,...D},He=_e=>{S=!0,g.has(_e)&&(P=!0,g.delete(_e)),w.needsAnimating[_e]=!0};for(const _e in ue){const at=D[_e],H=C[_e];if(T.hasOwnProperty(_e))continue;let Q=!1;xc(at)&&xc(H)?Q=!U1(at,H):Q=at!==H,Q?at!==void 0?He(_e):g.add(_e):at!==void 0&&g.has(_e)?He(_e):w.protectedKeys[_e]=!0}w.prevProp=k,w.prevResolvedValues=D,w.isActive&&(T={...T,...D}),r&&t.blockInitialAnimation&&(S=!1),S&&(!E||P)&&p.push(...x.map(_e=>({animation:_e,options:{type:v,...u}})))}if(g.size){const I={};g.forEach(v=>{const w=t.getBaseTarget(v);w!==void 0&&(I[v]=w)}),p.push({animation:I})}let N=!!p.length;return r&&(h.initial===!1||h.initial===h.animate)&&!t.manuallyAnimateOnMount&&(N=!1),r=!1,N?e(p):Promise.resolve()}function a(u,c,h){var f;if(n[u].isActive===c)return Promise.resolve();(f=t.variantChildren)===null||f===void 0||f.forEach(g=>{var T;return(T=g.animationState)===null||T===void 0?void 0:T.setActive(u,c)}),n[u].isActive=c;const p=o(h,u);for(const g in n)n[g].protectedKeys={};return p}return{animateChanges:o,setActive:a,setAnimateFunction:i,getState:()=>n}}function PF(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!U1(e,t):!1}function Es(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function RF(){return{animate:Es(!0),whileInView:Es(),whileHover:Es(),whileTap:Es(),whileDrag:Es(),whileFocus:Es(),exit:Es()}}class xF extends ms{constructor(e){super(e),e.animationState||(e.animationState=CF(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Ih(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let kF=0;class NF extends ms{constructor(){super(...arguments),this.id=kF++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===s)return;const i=this.node.animationState.setActive("exit",!e,{custom:r??this.node.getProps().custom});n&&!e&&i.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const DF={animation:{Feature:xF},exit:{Feature:NF}},lw=(t,e)=>Math.abs(t-e);function bF(t,e){const n=lw(t.x,e.x),r=lw(t.y,e.y);return Math.sqrt(n**2+r**2)}class gC{constructor(e,n,{transformPagePoint:r,contextWindow:s,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Wd(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=bF(f.offset,{x:0,y:0})>=3;if(!p&&!g)return;const{point:T}=f,{timestamp:A}=dt;this.history.push({...T,timestamp:A});const{onStart:N,onMove:I}=this.handlers;p||(N&&N(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),I&&I(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=qd(p,this.transformPagePoint),Ie.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:g,onSessionEnd:T,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const N=Wd(f.type==="pointercancel"?this.lastMoveEventInfo:qd(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,N),T&&T(f,N)},!b1(e))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.contextWindow=s||window;const o=Ch(e),a=qd(o,this.transformPagePoint),{point:u}=a,{timestamp:c}=dt;this.history=[{...u,timestamp:c}];const{onSessionStart:h}=n;h&&h(e,Wd(a,this.history)),this.removeListeners=Qr(er(this.contextWindow,"pointermove",this.handlePointerMove),er(this.contextWindow,"pointerup",this.handlePointerUp),er(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),cr(this.updatePoint)}}function qd(t,e){return e?{point:e(t.point)}:t}function uw(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Wd({point:t},e){return{point:t,delta:uw(t,yC(e)),offset:uw(t,OF(e)),velocity:VF(e,.1)}}function OF(t){return t[0]}function yC(t){return t[t.length-1]}function VF(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const s=yC(t);for(;n>=0&&(r=t[n],!(s.timestamp-r.timestamp>Us(e)));)n--;if(!r)return{x:0,y:0};const i=tr(s.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const o={x:(s.x-r.x)/i,y:(s.y-r.y)/i};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function qt(t){return t.max-t.min}function Cp(t,e=0,n=.01){return Math.abs(t-e)<=n}function cw(t,e,n,r=.5){t.origin=r,t.originPoint=Pe(e.min,e.max,t.origin),t.scale=qt(n)/qt(e),(Cp(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=Pe(n.min,n.max,t.origin)-t.originPoint,(Cp(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Sa(t,e,n,r){cw(t.x,e.x,n.x,r?r.originX:void 0),cw(t.y,e.y,n.y,r?r.originY:void 0)}function hw(t,e,n){t.min=n.min+e.min,t.max=t.min+qt(e)}function LF(t,e,n){hw(t.x,e.x,n.x),hw(t.y,e.y,n.y)}function dw(t,e,n){t.min=e.min-n.min,t.max=t.min+qt(e)}function Aa(t,e,n){dw(t.x,e.x,n.x),dw(t.y,e.y,n.y)}function MF(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?Pe(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?Pe(n,t,r.max):Math.min(t,n)),t}function fw(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function UF(t,{top:e,left:n,bottom:r,right:s}){return{x:fw(t.x,n,s),y:fw(t.y,e,r)}}function pw(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function FF(t,e){return{x:pw(t.x,e.x),y:pw(t.y,e.y)}}function jF(t,e){let n=.5;const r=qt(t),s=qt(e);return s>r?n=tl(e.min,e.max-r,t.min):r>s&&(n=tl(t.min,t.max-s,e.min)),os(0,1,n)}function BF(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Pp=.35;function $F(t=Pp){return t===!1?t=0:t===!0&&(t=Pp),{x:mw(t,"left","right"),y:mw(t,"top","bottom")}}function mw(t,e,n){return{min:gw(t,e),max:gw(t,n)}}function gw(t,e){return typeof t=="number"?t:t[e]||0}const yw=()=>({translate:0,scale:1,origin:0,originPoint:0}),bi=()=>({x:yw(),y:yw()}),_w=()=>({min:0,max:0}),je=()=>({x:_w(),y:_w()});function Xt(t){return[t("x"),t("y")]}function _C({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function zF({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function HF(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Kd(t){return t===void 0||t===1}function Rp({scale:t,scaleX:e,scaleY:n}){return!Kd(t)||!Kd(e)||!Kd(n)}function As(t){return Rp(t)||vC(t)||t.z||t.rotate||t.rotateX||t.rotateY}function vC(t){return vw(t.x)||vw(t.y)}function vw(t){return t&&t!=="0%"}function Oc(t,e,n){const r=t-n,s=e*r;return n+s}function ww(t,e,n,r,s){return s!==void 0&&(t=Oc(t,s,r)),Oc(t,n,r)+e}function xp(t,e=0,n=1,r,s){t.min=ww(t.min,e,n,r,s),t.max=ww(t.max,e,n,r,s)}function wC(t,{x:e,y:n}){xp(t.x,e.translate,e.scale,e.originPoint),xp(t.y,n.translate,n.scale,n.originPoint)}function GF(t,e,n,r=!1){const s=n.length;if(!s)return;e.x=e.y=1;let i,o;for(let a=0;a<s;a++){i=n[a],o=i.projectionDelta;const u=i.instance;u&&u.style&&u.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&Oi(t,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,wC(t,o)),r&&As(i.latestValues)&&Oi(t,i.latestValues))}e.x=Ew(e.x),e.y=Ew(e.y)}function Ew(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function Ar(t,e){t.min=t.min+e,t.max=t.max+e}function Tw(t,e,[n,r,s]){const i=e[s]!==void 0?e[s]:.5,o=Pe(t.min,t.max,i);xp(t,e[n],e[r],o,e.scale)}const qF=["x","scaleX","originX"],WF=["y","scaleY","originY"];function Oi(t,e){Tw(t.x,e,qF),Tw(t.y,e,WF)}function EC(t,e){return _C(HF(t.getBoundingClientRect(),e))}function KF(t,e,n){const r=EC(t,n),{scroll:s}=e;return s&&(Ar(r.x,s.offset.x),Ar(r.y,s.offset.y)),r}const TC=({current:t})=>t?t.ownerDocument.defaultView:null,QF=new WeakMap;class YF{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=je(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=h=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ch(h,"page").point)},i=(h,f)=>{const{drag:p,dragPropagation:g,onDragStart:T}=this.getProps();if(p&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=V1(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xt(N=>{let I=this.getAxisMotionValue(N).get()||0;if(Vn.test(I)){const{projection:v}=this.visualElement;if(v&&v.layout){const w=v.layout.layoutBox[N];w&&(I=qt(w)*(parseFloat(I)/100))}}this.originPoint[N]=I}),T&&Ie.update(()=>T(h,f),!1,!0);const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},o=(h,f)=>{const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:T,onDrag:A}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:N}=f;if(g&&this.currentDirection===null){this.currentDirection=XF(N),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",f.point,N),this.updateAxis("y",f.point,N),this.visualElement.render(),A&&A(h,f)},a=(h,f)=>this.stop(h,f),u=()=>Xt(h=>{var f;return this.getAnimationState(h)==="paused"&&((f=this.getAxisMotionValue(h).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new gC(e,{onSessionStart:s,onStart:i,onMove:o,onSessionEnd:a,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:TC(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:i}=this.getProps();i&&Ie.update(()=>i(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:s}=this.getProps();if(!r||!du(e,s,this.currentDirection))return;const i=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=MF(o,this.constraints[e],this.elastic[e])),i.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:r}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,i=this.constraints;n&&Ni(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&s?this.constraints=UF(s.layoutBox,n):this.constraints=!1,this.elastic=$F(r),i!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Xt(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=BF(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ni(e))return!1;const r=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const i=KF(r,s.root,this.visualElement.getTransformPagePoint());let o=FF(s.layout.layoutBox,i);if(n){const a=n(zF(o));this.hasMutatedConstraints=!!a,a&&(o=_C(a))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:s,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),u=this.constraints||{},c=Xt(h=>{if(!du(h,n,this.currentDirection))return;let f=u&&u[h]||{};o&&(f={min:0,max:0});const p=s?200:1e6,g=s?40:1e7,T={type:"inertia",velocity:r?e[h]:0,bounceStiffness:p,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...i,...f};return this.startAxisValueAnimation(h,T)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return r.start(Wg(e,r,0,n))}stopAnimation(){Xt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Xt(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),r=this.visualElement.getProps(),s=r[n];return s||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Xt(n=>{const{drag:r}=this.getProps();if(!du(n,r,this.currentDirection))return;const{projection:s}=this.visualElement,i=this.getAxisMotionValue(n);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[n];i.set(e[n]-Pe(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ni(n)||!r||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Xt(o=>{const a=this.getAxisMotionValue(o);if(a){const u=a.get();s[o]=jF({min:u,max:u},this.constraints[o])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Xt(o=>{if(!du(o,e,null))return;const a=this.getAxisMotionValue(o),{min:u,max:c}=this.constraints[o];a.set(Pe(u,c,s[o]))})}addListeners(){if(!this.visualElement.current)return;QF.set(this.visualElement,this);const e=this.visualElement.current,n=er(e,"pointerdown",u=>{const{drag:c,dragListener:h=!0}=this.getProps();c&&h&&this.start(u)}),r=()=>{const{dragConstraints:u}=this.getProps();Ni(u)&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,i=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),r();const o=Yn(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(Xt(h=>{const f=this.getAxisMotionValue(h);f&&(this.originPoint[h]+=u[h].translate,f.set(f.get()+u[h].translate))}),this.visualElement.render())});return()=>{o(),n(),i(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:s=!1,dragConstraints:i=!1,dragElastic:o=Pp,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:s,dragConstraints:i,dragElastic:o,dragMomentum:a}}}function du(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function XF(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class JF extends ms{constructor(e){super(e),this.removeGroupControls=Me,this.removeListeners=Me,this.controls=new YF(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Me}unmount(){this.removeGroupControls(),this.removeListeners()}}const Iw=t=>(e,n)=>{t&&Ie.update(()=>t(e,n))};class ZF extends ms{constructor(){super(...arguments),this.removePointerDownListener=Me}onPointerDown(e){this.session=new gC(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:TC(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:s}=this.node.getProps();return{onSessionStart:Iw(e),onStart:Iw(n),onMove:r,onEnd:(i,o)=>{delete this.session,s&&Ie.update(()=>s(i,o))}}}mount(){this.removePointerDownListener=er(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function e3(){const t=$.useContext(kg);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:r}=t,s=$.useId();return $.useEffect(()=>r(s),[]),!e&&n?[!1,()=>n&&n(s)]:[!0]}const Lu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Sw(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const qo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(X.test(t))t=parseFloat(t);else return t;const n=Sw(t,e.target.x),r=Sw(t,e.target.y);return`${n}% ${r}%`}},t3={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,s=as.parse(t);if(s.length>5)return r;const i=as.createTransformer(t),o=typeof s[0]!="number"?1:0,a=n.x.scale*e.x,u=n.y.scale*e.y;s[0+o]/=a,s[1+o]/=u;const c=Pe(a,u,.5);return typeof s[2+o]=="number"&&(s[2+o]/=c),typeof s[3+o]=="number"&&(s[3+o]/=c),i(s)}};class n3 extends Lc.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:s}=this.props,{projection:i}=e;l4(r3),i&&(n.group&&n.group.add(i),r&&r.register&&s&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),Lu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:s,isPresent:i}=this.props,o=r.projection;return o&&(o.isPresent=i,s||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?o.promote():o.relegate()||Ie.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),r&&r.deregister&&r.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function IC(t){const[e,n]=e3(),r=$.useContext(_1);return Lc.createElement(n3,{...t,layoutGroup:r,switchLayoutGroup:$.useContext(v1),isPresent:e,safeToRemove:n})}const r3={borderRadius:{...qo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:qo,borderTopRightRadius:qo,borderBottomLeftRadius:qo,borderBottomRightRadius:qo,boxShadow:t3},SC=["TopLeft","TopRight","BottomLeft","BottomRight"],s3=SC.length,Aw=t=>typeof t=="string"?parseFloat(t):t,Cw=t=>typeof t=="number"||X.test(t);function i3(t,e,n,r,s,i){s?(t.opacity=Pe(0,n.opacity!==void 0?n.opacity:1,o3(r)),t.opacityExit=Pe(e.opacity!==void 0?e.opacity:1,0,a3(r))):i&&(t.opacity=Pe(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<s3;o++){const a=`border${SC[o]}Radius`;let u=Pw(e,a),c=Pw(n,a);if(u===void 0&&c===void 0)continue;u||(u=0),c||(c=0),u===0||c===0||Cw(u)===Cw(c)?(t[a]=Math.max(Pe(Aw(u),Aw(c),r),0),(Vn.test(c)||Vn.test(u))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Pe(e.rotate||0,n.rotate||0,r))}function Pw(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const o3=AC(0,.5,W1),a3=AC(.5,.95,Me);function AC(t,e,n){return r=>r<t?0:r>e?1:n(tl(t,e,r))}function Rw(t,e){t.min=e.min,t.max=e.max}function Qt(t,e){Rw(t.x,e.x),Rw(t.y,e.y)}function xw(t,e,n,r,s){return t-=e,t=Oc(t,1/n,r),s!==void 0&&(t=Oc(t,1/s,r)),t}function l3(t,e=0,n=1,r=.5,s,i=t,o=t){if(Vn.test(e)&&(e=parseFloat(e),e=Pe(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Pe(i.min,i.max,r);t===i&&(a-=e),t.min=xw(t.min,e,n,a,s),t.max=xw(t.max,e,n,a,s)}function kw(t,e,[n,r,s],i,o){l3(t,e[n],e[r],e[s],e.scale,i,o)}const u3=["x","scaleX","originX"],c3=["y","scaleY","originY"];function Nw(t,e,n,r){kw(t.x,e,u3,n?n.x:void 0,r?r.x:void 0),kw(t.y,e,c3,n?n.y:void 0,r?r.y:void 0)}function Dw(t){return t.translate===0&&t.scale===1}function CC(t){return Dw(t.x)&&Dw(t.y)}function h3(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function PC(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function bw(t){return qt(t.x)/qt(t.y)}class d3{constructor(){this.members=[]}add(e){Kg(this.members,e),e.scheduleRender()}remove(e){if(Qg(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(s=>e===s);if(n===0)return!1;let r;for(let s=n;s>=0;s--){const i=this.members[s];if(i.isPresent!==!1){r=i;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Ow(t,e,n){let r="";const s=t.x.translate/e.x,i=t.y.translate/e.y;if((s||i)&&(r=`translate3d(${s}px, ${i}px, 0) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:u,rotateX:c,rotateY:h}=n;u&&(r+=`rotate(${u}deg) `),c&&(r+=`rotateX(${c}deg) `),h&&(r+=`rotateY(${h}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(r+=`scale(${o}, ${a})`),r||"none"}const f3=(t,e)=>t.depth-e.depth;class p3{constructor(){this.children=[],this.isDirty=!1}add(e){Kg(this.children,e),this.isDirty=!0}remove(e){Qg(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(f3),this.isDirty=!1,this.children.forEach(e)}}function m3(t,e){const n=performance.now(),r=({timestamp:s})=>{const i=s-n;i>=e&&(cr(r),t(i-e))};return Ie.read(r,!0),()=>cr(r)}function g3(t){window.MotionDebug&&window.MotionDebug.record(t)}function y3(t){return t instanceof SVGElement&&t.tagName!=="svg"}function _3(t,e,n){const r=Ut(t)?t:io(t);return r.start(Wg("",r,e,n)),r.animation}const Vw=["","X","Y","Z"],v3={visibility:"hidden"},Lw=1e3;let w3=0;const Cs={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function RC({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:s}){return class{constructor(o={},a=e==null?void 0:e()){this.id=w3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Cs.totalNodes=Cs.resolvedTargetDeltas=Cs.recalculatedProjection=0,this.nodes.forEach(I3),this.nodes.forEach(R3),this.nodes.forEach(x3),this.nodes.forEach(S3),g3(Cs)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new p3)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Yg),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const u=this.eventHandlers.get(o);u&&u.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=y3(o),this.instance=o;const{layoutId:u,layout:c,visualElement:h}=this.options;if(h&&!h.current&&h.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||u)&&(this.isLayoutDirty=!0),t){let f;const p=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=m3(p,250),Lu.hasAnimatedSinceResize&&(Lu.hasAnimatedSinceResize=!1,this.nodes.forEach(Uw))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&h&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:g,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const A=this.options.transition||h.getDefaultTransition()||O3,{onLayoutAnimationStart:N,onLayoutAnimationComplete:I}=h.getProps(),v=!this.targetLayout||!PC(this.targetLayout,T)||g,w=!p&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||w||p&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,w);const k={...qg(A,"layout"),onPlay:N,onComplete:I};(h.shouldReduceMotion||this.options.layoutRoot)&&(k.delay=0,k.type=!1),this.startAnimation(k)}else p||Uw(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,cr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(k3),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const f=this.path[h];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:u}=this.options;if(a===void 0&&!u)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Mw);return}this.isUpdating||this.nodes.forEach(C3),this.isUpdating=!1,this.nodes.forEach(P3),this.nodes.forEach(E3),this.nodes.forEach(T3),this.clearAllSnapshots();const a=performance.now();dt.delta=os(0,1e3/60,a-dt.timestamp),dt.timestamp=a,dt.isProcessing=!0,Ud.update.process(dt),Ud.preRender.process(dt),Ud.render.process(dt),dt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(A3),this.sharedNodes.forEach(N3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ie.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ie.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let u=0;u<this.path.length;u++)this.path[u].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=je(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!CC(this.projectionDelta),u=this.getTransformTemplate(),c=u?u(this.latestValues,""):void 0,h=c!==this.prevTransformTemplateValue;o&&(a||As(this.latestValues)||h)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let u=this.removeElementScroll(a);return o&&(u=this.removeTransform(u)),V3(u),{animationId:this.root.animationId,measuredBox:a,layoutBox:u,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return je();const a=o.measureViewportBox(),{scroll:u}=this.root;return u&&(Ar(a.x,u.offset.x),Ar(a.y,u.offset.y)),a}removeElementScroll(o){const a=je();Qt(a,o);for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:h,options:f}=c;if(c!==this.root&&h&&f.layoutScroll){if(h.isRoot){Qt(a,o);const{scroll:p}=this.root;p&&(Ar(a.x,-p.offset.x),Ar(a.y,-p.offset.y))}Ar(a.x,h.offset.x),Ar(a.y,h.offset.y)}}return a}applyTransform(o,a=!1){const u=je();Qt(u,o);for(let c=0;c<this.path.length;c++){const h=this.path[c];!a&&h.options.layoutScroll&&h.scroll&&h!==h.root&&Oi(u,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),As(h.latestValues)&&Oi(u,h.latestValues)}return As(this.latestValues)&&Oi(u,this.latestValues),u}removeTransform(o){const a=je();Qt(a,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!As(c.latestValues))continue;Rp(c.latestValues)&&c.updateSnapshot();const h=je(),f=c.measurePageBox();Qt(h,f),Nw(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,h)}return As(this.latestValues)&&Nw(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==dt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==u;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=dt.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=je(),this.relativeTargetOrigin=je(),Aa(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Qt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=je(),this.targetWithTransforms=je()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),LF(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Qt(this.target,this.layout.layoutBox),wC(this.target,this.targetDelta)):Qt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=je(),this.relativeTargetOrigin=je(),Aa(this.relativeTargetOrigin,this.target,g.target),Qt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Cs.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Rp(this.parent.latestValues)||vC(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),u=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===dt.timestamp&&(c=!1),c)return;const{layout:h,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||f))return;Qt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,g=this.treeScale.y;GF(this.layoutCorrected,this.treeScale,this.path,u),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:T}=a;if(!T){this.projectionTransform&&(this.projectionDelta=bi(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=bi(),this.projectionDeltaWithTransform=bi());const A=this.projectionTransform;Sa(this.projectionDelta,this.layoutCorrected,T,this.latestValues),this.projectionTransform=Ow(this.projectionDelta,this.treeScale),(this.projectionTransform!==A||this.treeScale.x!==p||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T)),Cs.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const u=this.snapshot,c=u?u.latestValues:{},h={...this.latestValues},f=bi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=je(),g=u?u.source:void 0,T=this.layout?this.layout.source:void 0,A=g!==T,N=this.getStack(),I=!N||N.members.length<=1,v=!!(A&&!I&&this.options.crossfade===!0&&!this.path.some(b3));this.animationProgress=0;let w;this.mixTargetDelta=k=>{const V=k/1e3;Fw(f.x,o.x,V),Fw(f.y,o.y,V),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Aa(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),D3(this.relativeTarget,this.relativeTargetOrigin,p,V),w&&h3(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=je()),Qt(w,this.relativeTarget)),A&&(this.animationValues=h,i3(h,c,this.latestValues,V,v,I)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=V},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(cr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ie.update(()=>{Lu.hasAnimatedSinceResize=!0,this.currentAnimation=_3(0,Lw,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Lw),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:u,layout:c,latestValues:h}=o;if(!(!a||!u||!c)){if(this!==o&&this.layout&&c&&xC(this.options.animationType,this.layout.layoutBox,c.layoutBox)){u=this.target||je();const f=qt(this.layout.layoutBox.x);u.x.min=o.target.x.min,u.x.max=u.x.min+f;const p=qt(this.layout.layoutBox.y);u.y.min=o.target.y.min,u.y.max=u.y.min+p}Qt(a,u),Oi(a,h),Sa(this.projectionDeltaWithTransform,this.layoutCorrected,a,h)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new d3),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:u}={}){const c=this.getStack();c&&c.promote(this,u),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:u}=o;if((u.rotate||u.rotateX||u.rotateY||u.rotateZ)&&(a=!0),!a)return;const c={};for(let h=0;h<Vw.length;h++){const f="rotate"+Vw[h];u[f]&&(c[f]=u[f],o.setStaticValue(f,0))}o.render();for(const h in c)o.setStaticValue(h,c[h]);o.scheduleRender()}getProjectionStyles(o){var a,u;if(!this.instance||this.isSVG)return;if(!this.isVisible)return v3;const c={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Vu(o==null?void 0:o.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const A={};return this.options.layoutId&&(A.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,A.pointerEvents=Vu(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!As(this.latestValues)&&(A.transform=h?h({},""):"none",this.hasProjected=!1),A}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=Ow(this.projectionDeltaWithTransform,this.treeScale,p),h&&(c.transform=h(p,c.transform));const{x:g,y:T}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${T.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const A in Pc){if(p[A]===void 0)continue;const{correct:N,applyTo:I}=Pc[A],v=c.transform==="none"?p[A]:N(p[A],f);if(I){const w=I.length;for(let k=0;k<w;k++)c[I[k]]=v}else c[A]=v}return this.options.layoutId&&(c.pointerEvents=f===this?Vu(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Mw),this.root.sharedNodes.clear()}}}function E3(t){t.updateLayout()}function T3(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:s}=t.layout,{animationType:i}=t.options,o=n.source!==t.layout.source;i==="size"?Xt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=qt(p);p.min=r[f].min,p.max=p.min+g}):xC(i,n.layoutBox,r)&&Xt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],g=qt(r[f]);p.max=p.min+g,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+g)});const a=bi();Sa(a,r,n.layoutBox);const u=bi();o?Sa(u,t.applyTransform(s,!0),n.measuredBox):Sa(u,r,n.layoutBox);const c=!CC(a);let h=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:g}=f;if(p&&g){const T=je();Aa(T,n.layoutBox,p.layoutBox);const A=je();Aa(A,r,g.layoutBox),PC(T,A)||(h=!0),f.options.layoutRoot&&(t.relativeTarget=A,t.relativeTargetOrigin=T,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:u,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:h})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function I3(t){Cs.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function S3(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function A3(t){t.clearSnapshot()}function Mw(t){t.clearMeasurements()}function C3(t){t.isLayoutDirty=!1}function P3(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Uw(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function R3(t){t.resolveTargetDelta()}function x3(t){t.calcProjection()}function k3(t){t.resetRotation()}function N3(t){t.removeLeadSnapshot()}function Fw(t,e,n){t.translate=Pe(e.translate,0,n),t.scale=Pe(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function jw(t,e,n,r){t.min=Pe(e.min,n.min,r),t.max=Pe(e.max,n.max,r)}function D3(t,e,n,r){jw(t.x,e.x,n.x,r),jw(t.y,e.y,n.y,r)}function b3(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const O3={duration:.45,ease:[.4,0,.1,1]},Bw=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),$w=Bw("applewebkit/")&&!Bw("chrome/")?Math.round:Me;function zw(t){t.min=$w(t.min),t.max=$w(t.max)}function V3(t){zw(t.x),zw(t.y)}function xC(t,e,n){return t==="position"||t==="preserve-aspect"&&!Cp(bw(e),bw(n),.2)}const L3=RC({attachResizeListener:(t,e)=>Yn(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Qd={current:void 0},kC=RC({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Qd.current){const t=new L3({});t.mount(window),t.setOptions({layoutScroll:!0}),Qd.current=t}return Qd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),M3={pan:{Feature:ZF},drag:{Feature:JF,ProjectionNode:kC,MeasureLayout:IC}},U3=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function F3(t){const e=U3.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]}function kp(t,e,n=1){const[r,s]=F3(t);if(!r)return;const i=window.getComputedStyle(e).getPropertyValue(r);if(i){const o=i.trim();return dC(o)?parseFloat(o):o}else return vp(s)?kp(s,e,n+1):s}function j3(t,{...e},n){const r=t.current;if(!(r instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(s=>{const i=s.get();if(!vp(i))return;const o=kp(i,r);o&&s.set(o)});for(const s in e){const i=e[s];if(!vp(i))continue;const o=kp(i,r);o&&(e[s]=o,n||(n={}),n[s]===void 0&&(n[s]=i))}return{target:e,transitionEnd:n}}const B3=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),NC=t=>B3.has(t),$3=t=>Object.keys(t).some(NC),Hw=t=>t===oi||t===X,Gw=(t,e)=>parseFloat(t.split(", ")[e]),qw=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const s=r.match(/^matrix3d\((.+)\)$/);if(s)return Gw(s[1],e);{const i=r.match(/^matrix\((.+)\)$/);return i?Gw(i[1],t):0}},z3=new Set(["x","y","z"]),H3=El.filter(t=>!z3.has(t));function G3(t){const e=[];return H3.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const oo={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:qw(4,13),y:qw(5,14)};oo.translateX=oo.x;oo.translateY=oo.y;const q3=(t,e,n)=>{const r=e.measureViewportBox(),s=e.current,i=getComputedStyle(s),{display:o}=i,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(c=>{a[c]=oo[c](r,i)}),e.render();const u=e.measureViewportBox();return n.forEach(c=>{const h=e.getValue(c);h&&h.jump(a[c]),t[c]=oo[c](u,i)}),t},W3=(t,e,n={},r={})=>{e={...e},r={...r};const s=Object.keys(e).filter(NC);let i=[],o=!1;const a=[];if(s.forEach(u=>{const c=t.getValue(u);if(!t.hasValue(u))return;let h=n[u],f=Go(h);const p=e[u];let g;if(xc(p)){const T=p.length,A=p[0]===null?1:0;h=p[A],f=Go(h);for(let N=A;N<T&&p[N]!==null;N++)g?Bg(Go(p[N])===g):g=Go(p[N])}else g=Go(p);if(f!==g)if(Hw(f)&&Hw(g)){const T=c.get();typeof T=="string"&&c.set(parseFloat(T)),typeof p=="string"?e[u]=parseFloat(p):Array.isArray(p)&&g===X&&(e[u]=p.map(parseFloat))}else f!=null&&f.transform&&(g!=null&&g.transform)&&(h===0||p===0)?h===0?c.set(g.transform(h)):e[u]=f.transform(p):(o||(i=G3(t),o=!0),a.push(u),r[u]=r[u]!==void 0?r[u]:e[u],c.jump(p))}),a.length){const u=a.indexOf("height")>=0?window.pageYOffset:null,c=q3(e,t,a);return i.length&&i.forEach(([h,f])=>{t.getValue(h).set(f)}),t.render(),Th&&u!==null&&window.scrollTo({top:u}),{target:c,transitionEnd:r}}else return{target:e,transitionEnd:r}};function K3(t,e,n,r){return $3(e)?W3(t,e,n,r):{target:e,transitionEnd:r}}const Q3=(t,e,n,r)=>{const s=j3(t,e,r);return e=s.target,r=s.transitionEnd,K3(t,e,n,r)},Np={current:null},DC={current:!1};function Y3(){if(DC.current=!0,!!Th)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Np.current=t.matches;t.addListener(e),e()}else Np.current=!1}function X3(t,e,n){const{willChange:r}=e;for(const s in e){const i=e[s],o=n[s];if(Ut(i))t.addValue(s,i),bc(r)&&r.add(s);else if(Ut(o))t.addValue(s,io(i,{owner:t})),bc(r)&&r.remove(s);else if(o!==i)if(t.hasValue(s)){const a=t.getValue(s);!a.hasAnimated&&a.set(i)}else{const a=t.getStaticValue(s);t.addValue(s,io(a!==void 0?a:i,{owner:t}))}}for(const s in n)e[s]===void 0&&t.removeValue(s);return e}const Ww=new WeakMap,bC=Object.keys(el),J3=bC.length,Kw=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Z3=bg.length;class ej{constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:s,visualState:i},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Ie.render(this.render,!1,!0);const{latestValues:a,renderState:u}=i;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=o,this.isControllingVariants=Sh(n),this.isVariantNode=y1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...h}=this.scrapeMotionValuesFromProps(n,{});for(const f in h){const p=h[f];a[f]!==void 0&&Ut(p)&&(p.set(a[f],!1),bc(c)&&c.add(f))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,Ww.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),DC.current||Y3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Np.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ww.delete(this.current),this.projection&&this.projection.unmount(),cr(this.notifyUpdate),cr(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const r=ii.has(e),s=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&Ie.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{s(),i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},r,s,i){let o,a;for(let u=0;u<J3;u++){const c=bC[u],{isEnabled:h,Feature:f,ProjectionNode:p,MeasureLayout:g}=el[c];p&&(o=p),h(n)&&(!this.features[c]&&f&&(this.features[c]=new f(this)),g&&(a=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:u,layout:c,drag:h,dragConstraints:f,layoutScroll:p,layoutRoot:g}=n;this.projection.setOptions({layoutId:u,layout:c,alwaysMeasureLayout:!!h||f&&Ni(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:i,layoutScroll:p,layoutRoot:g})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):je()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Kw.length;r++){const s=Kw[r];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const i=e["on"+s];i&&(this.propEventSubscriptions[s]=this.on(s,i))}this.prevMotionValues=X3(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<Z3;r++){const s=bg[r],i=this.props[s];(Za(i)||i===!1)&&(n[s]=i)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=io(n,{owner:this}),this.addValue(e,r)),r}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props,s=typeof r=="string"||typeof r=="object"?(n=jg(this.props,r))===null||n===void 0?void 0:n[e]:void 0;if(r&&s!==void 0)return s;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!Ut(i)?i:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Yg),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class OC extends ej{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...r},{transformValues:s},i){let o=yF(r,e||{},this);if(s&&(n&&(n=s(n)),r&&(r=s(r)),o&&(o=s(o))),i){mF(this,r,o);const a=Q3(this,r,o,n);n=a.transitionEnd,r=a.target}return{transition:e,transitionEnd:n,...r}}}function tj(t){return window.getComputedStyle(t)}class nj extends OC{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(ii.has(n)){const r=Gg(n);return r&&r.default||0}else{const r=tj(e),s=(T1(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return EC(e,n)}build(e,n,r,s){Vg(e,n,r,s.transformTemplate)}scrapeMotionValuesFromProps(e,n){return Fg(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ut(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,r,s){R1(e,n,r,s)}}class rj extends OC{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ii.has(n)){const r=Gg(n);return r&&r.default||0}return n=x1.has(n)?n:Ng(n),e.getAttribute(n)}measureInstanceViewportBox(){return je()}scrapeMotionValuesFromProps(e,n){return N1(e,n)}build(e,n,r,s){Mg(e,n,r,this.isSVGTag,s.transformTemplate)}renderInstance(e,n,r,s){k1(e,n,r,s)}mount(e){this.isSVGTag=Ug(e.tagName),super.mount(e)}}const sj=(t,e)=>Og(t)?new rj(e,{enableHardwareAcceleration:!1}):new nj(e,{enableHardwareAcceleration:!0}),ij={layout:{ProjectionNode:kC,MeasureLayout:IC}},oj={...DF,...J4,...M3,...ij},Wo=o4((t,e)=>F4(t,e,oj,sj)),aj=({rows:t=5,cols:e=5})=>{const n=t*e,[r,s]=$.useState(null),i={"--rows":t,"--cols":e};return R.jsx("div",{className:"cube-grid-container",children:R.jsx("div",{className:"cube-grid",style:i,children:Array.from({length:n}).map((o,a)=>R.jsx(lj,{index:a},a))})})},lj=({index:t})=>{const[e,n]=$.useState(!1),r=()=>{n(!0),setTimeout(()=>n(!1),1e3)};return R.jsxs("div",{className:`cube ${e?"is-hovered":""}`,onMouseEnter:r,children:[R.jsx("div",{className:"cube-face front"}),R.jsx("div",{className:"cube-face back"}),R.jsx("div",{className:"cube-face right"}),R.jsx("div",{className:"cube-face left"}),R.jsx("div",{className:"cube-face top"}),R.jsx("div",{className:"cube-face bottom"})]})},uj=({onStart:t})=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:10}}};return R.jsxs("div",{className:"relative flex flex-col items-center justify-center min-h-screen overflow-hidden font-sans",children:[R.jsxs("div",{className:"landing-animation-container",children:[R.jsx("div",{className:"wave"}),R.jsx("div",{className:"wave"}),R.jsx("div",{className:"wave"})]}),R.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-0 opacity-30 pointer-events-auto",children:R.jsx("div",{className:"scale-125 mix-blend-overlay",children:R.jsx(aj,{rows:6,cols:8})})}),R.jsxs(Wo.div,{className:"relative z-10 px-6 max-w-5xl mx-auto w-full flex flex-col items-center text-center pointer-events-none",variants:e,initial:"hidden",animate:"visible",children:[R.jsx(Wo.div,{variants:n,className:"mb-10 w-full flex justify-center",children:R.jsx("h1",{className:"pop-art-text text-[6rem] sm:text-[8rem] md:text-[10rem] leading-none tracking-tighter pointer-events-auto select-none",children:"Baro.AI"})}),R.jsxs(Wo.div,{variants:n,className:"mb-12 space-y-2",children:[R.jsx("p",{className:"text-xl md:text-2xl text-white font-bold leading-relaxed drop-shadow-lg",children:"AI와 함께 팀의 워크플로우를"}),R.jsx("p",{className:"text-xl md:text-2xl text-white font-bold leading-relaxed drop-shadow-lg",children:"새로운 차원으로 끌어올리세요."})]}),R.jsx(Wo.div,{variants:n,children:R.jsx("button",{onClick:t,className:"pointer-events-auto px-16 py-5 bg-white text-[#FF6B6B] text-xl font-bold rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(255,107,107,0.4)] hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300",children:"시작하기"})})]}),R.jsx(Wo.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:1},className:"absolute bottom-10 z-10 text-white/30 text-xs tracking-widest uppercase pointer-events-none",children:"© 2024 Nexus AI Corp."})]})};var Qw;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(Qw||(Qw={}));/**
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
 */var Yw;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(Yw||(Yw={}));var Xw;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(Xw||(Xw={}));/**
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
 */const Jw=["user","model","function","system"];var Zw;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(Zw||(Zw={}));var eE;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(eE||(eE={}));var tE;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(tE||(tE={}));var nE;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(nE||(nE={}));var Ca;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.OTHER="OTHER"})(Ca||(Ca={}));var rE;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(rE||(rE={}));var sE;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(sE||(sE={}));var iE;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(iE||(iE={}));/**
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
 */class gt extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class fi extends gt{constructor(e,n){super(e),this.response=n}}class VC extends gt{constructor(e,n,r,s){super(e),this.status=n,this.statusText=r,this.errorDetails=s}}class Yr extends gt{}class LC extends gt{}/**
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
 */const cj="https://generativelanguage.googleapis.com",hj="v1beta",dj="0.24.1",fj="genai-js";var Js;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Js||(Js={}));class pj{constructor(e,n,r,s,i){this.model=e,this.task=n,this.apiKey=r,this.stream=s,this.requestOptions=i}toString(){var e,n;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||hj;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||cj}/${r}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function mj(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${fj}/${dj}`),e.join(" ")}async function gj(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",mj(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let r=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(s){throw new Yr(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${s.message}`)}for(const[s,i]of r.entries()){if(s==="x-goog-api-key")throw new Yr(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new Yr(`Header name ${s} can only be set using the apiClient field`);n.append(s,i)}}return n}async function yj(t,e,n,r,s,i){const o=new pj(t,e,n,r,i);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},Ej(i)),{method:"POST",headers:await gj(o),body:s})}}async function Al(t,e,n,r,s,i={},o=fetch){const{url:a,fetchOptions:u}=await yj(t,e,n,r,s,i);return _j(a,u,o)}async function _j(t,e,n=fetch){let r;try{r=await n(t,e)}catch(s){vj(s,t)}return r.ok||await wj(r,t),r}function vj(t,e){let n=t;throw n.name==="AbortError"?(n=new LC(`Request aborted when fetching ${e.toString()}: ${t.message}`),n.stack=t.stack):t instanceof VC||t instanceof Yr||(n=new gt(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function wj(t,e){let n="",r;try{const s=await t.json();n=s.error.message,s.error.details&&(n+=` ${JSON.stringify(s.error.details)}`,r=s.error.details)}catch{}throw new VC(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,r)}function Ej(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
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
 */function Xg(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Mu(t.candidates[0]))throw new fi(`${Cr(t)}`,t);return Tj(t)}else if(t.promptFeedback)throw new fi(`Text not available. ${Cr(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Mu(t.candidates[0]))throw new fi(`${Cr(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),oE(t)[0]}else if(t.promptFeedback)throw new fi(`Function call not available. ${Cr(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Mu(t.candidates[0]))throw new fi(`${Cr(t)}`,t);return oE(t)}else if(t.promptFeedback)throw new fi(`Function call not available. ${Cr(t)}`,t)},t}function Tj(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.text&&i.push(o.text),o.executableCode&&i.push("\n```"+o.executableCode.language+`
`+o.executableCode.code+"\n```\n"),o.codeExecutionResult&&i.push("\n```\n"+o.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function oE(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.functionCall&&i.push(o.functionCall);if(i.length>0)return i}const Ij=[Ca.RECITATION,Ca.SAFETY,Ca.LANGUAGE];function Mu(t){return!!t.finishReason&&Ij.includes(t.finishReason)}function Cr(t){var e,n,r;let s="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)s+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(s+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const i=t.candidates[0];Mu(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}function nl(t){return this instanceof nl?(this.v=t,this):new nl(t)}function Sj(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),s,i=[];return s={},o("next"),o("throw"),o("return"),s[Symbol.asyncIterator]=function(){return this},s;function o(p){r[p]&&(s[p]=function(g){return new Promise(function(T,A){i.push([p,g,T,A])>1||a(p,g)})})}function a(p,g){try{u(r[p](g))}catch(T){f(i[0][3],T)}}function u(p){p.value instanceof nl?Promise.resolve(p.value.v).then(c,h):f(i[0][2],p)}function c(p){a("next",p)}function h(p){a("throw",p)}function f(p,g){p(g),i.shift(),i.length&&a(i[0][0],i[0][1])}}/**
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
 */const aE=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Aj(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=Rj(e),[r,s]=n.tee();return{stream:Pj(r),response:Cj(s)}}async function Cj(t){const e=[],n=t.getReader();for(;;){const{done:r,value:s}=await n.read();if(r)return Xg(xj(e));e.push(s)}}function Pj(t){return Sj(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:s}=yield nl(n.read());if(s)break;yield yield nl(Xg(r))}})}function Rj(t){const e=t.getReader();return new ReadableStream({start(r){let s="";return i();function i(){return e.read().then(({value:o,done:a})=>{if(a){if(s.trim()){r.error(new gt("Failed to parse stream"));return}r.close();return}s+=o;let u=s.match(aE),c;for(;u;){try{c=JSON.parse(u[1])}catch{r.error(new gt(`Error parsing JSON response: "${u[1]}"`));return}r.enqueue(c),s=s.substring(u[0].length),u=s.match(aE)}return i()}).catch(o=>{let a=o;throw a.stack=o.stack,a.name==="AbortError"?a=new LC("Request aborted when reading from the stream"):a=new gt("Error reading from the stream"),a})}}})}function xj(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t){if(r.candidates){let s=0;for(const i of r.candidates)if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:s}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].groundingMetadata=i.groundingMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const o={};for(const a of i.content.parts)a.text&&(o.text=a.text),a.functionCall&&(o.functionCall=a.functionCall),a.executableCode&&(o.executableCode=a.executableCode),a.codeExecutionResult&&(o.codeExecutionResult=a.codeExecutionResult),Object.keys(o).length===0&&(o.text=""),n.candidates[s].content.parts.push(o)}s++}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
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
 */async function MC(t,e,n,r){const s=await Al(e,Js.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return Aj(s)}async function UC(t,e,n,r){const i=await(await Al(e,Js.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)).json();return{response:Xg(i)}}/**
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
 */function FC(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function rl(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return kj(e)}function kj(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,s=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),s=!0):(e.parts.push(i),r=!0);if(r&&s)throw new gt("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!s)throw new gt("No content is provided for sending chat message.");return r?e:n}function Nj(t,e){var n;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const s=t.generateContentRequest!=null;if(t.contents){if(s)throw new Yr("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=t.contents}else if(s)r=Object.assign(Object.assign({},r),t.generateContentRequest);else{const i=rl(t);r.contents=[i]}return{generateContentRequest:r}}function lE(t){let e;return t.contents?e=t:e={contents:[rl(t)]},t.systemInstruction&&(e.systemInstruction=FC(t.systemInstruction)),e}function Dj(t){return typeof t=="string"||Array.isArray(t)?{content:rl(t)}:t}/**
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
 */const uE=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],bj={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Oj(t){let e=!1;for(const n of t){const{role:r,parts:s}=n;if(!e&&r!=="user")throw new gt(`First content should be with role 'user', got ${r}`);if(!Jw.includes(r))throw new gt(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(Jw)}`);if(!Array.isArray(s))throw new gt("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new gt("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const a of s)for(const u of uE)u in a&&(i[u]+=1);const o=bj[r];for(const a of uE)if(!o.includes(a)&&i[a]>0)throw new gt(`Content with role '${r}' can't contain '${a}' part`);e=!0}}function cE(t){var e;if(t.candidates===void 0||t.candidates.length===0)return!1;const n=(e=t.candidates[0])===null||e===void 0?void 0:e.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const r of n.parts)if(r===void 0||Object.keys(r).length===0||r.text!==void 0&&r.text==="")return!1;return!0}/**
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
 */const hE="SILENT_ERROR";class Vj{constructor(e,n,r,s={}){this.model=n,this.params=r,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(Oj(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var r,s,i,o,a,u;await this._sendPromise;const c=rl(e),h={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,c]},f=Object.assign(Object.assign({},this._requestOptions),n);let p;return this._sendPromise=this._sendPromise.then(()=>UC(this._apiKey,this.model,h,f)).then(g=>{var T;if(cE(g.response)){this._history.push(c);const A=Object.assign({parts:[],role:"model"},(T=g.response.candidates)===null||T===void 0?void 0:T[0].content);this._history.push(A)}else{const A=Cr(g.response);A&&console.warn(`sendMessage() was unsuccessful. ${A}. Inspect response object for details.`)}p=g}).catch(g=>{throw this._sendPromise=Promise.resolve(),g}),await this._sendPromise,p}async sendMessageStream(e,n={}){var r,s,i,o,a,u;await this._sendPromise;const c=rl(e),h={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,c]},f=Object.assign(Object.assign({},this._requestOptions),n),p=MC(this._apiKey,this.model,h,f);return this._sendPromise=this._sendPromise.then(()=>p).catch(g=>{throw new Error(hE)}).then(g=>g.response).then(g=>{if(cE(g)){this._history.push(c);const T=Object.assign({},g.candidates[0].content);T.role||(T.role="model"),this._history.push(T)}else{const T=Cr(g);T&&console.warn(`sendMessageStream() was unsuccessful. ${T}. Inspect response object for details.`)}}).catch(g=>{g.message!==hE&&console.error(g)}),p}}/**
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
 */async function Lj(t,e,n,r){return(await Al(e,Js.COUNT_TOKENS,t,!1,JSON.stringify(n),r)).json()}/**
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
 */async function Mj(t,e,n,r){return(await Al(e,Js.EMBED_CONTENT,t,!1,JSON.stringify(n),r)).json()}async function Uj(t,e,n,r){const s=n.requests.map(o=>Object.assign(Object.assign({},o),{model:e}));return(await Al(e,Js.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:s}),r)).json()}/**
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
 */class dE{constructor(e,n,r={}){this.apiKey=e,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=FC(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var r;const s=lE(e),i=Object.assign(Object.assign({},this._requestOptions),n);return UC(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},s),i)}async generateContentStream(e,n={}){var r;const s=lE(e),i=Object.assign(Object.assign({},this._requestOptions),n);return MC(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},s),i)}startChat(e){var n;return new Vj(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const r=Nj(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),n);return Lj(this.apiKey,this.model,r,s)}async embedContent(e,n={}){const r=Dj(e),s=Object.assign(Object.assign({},this._requestOptions),n);return Mj(this.apiKey,this.model,r,s)}async batchEmbedContents(e,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return Uj(this.apiKey,this.model,e,r)}}/**
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
 */class Fj{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new gt("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new dE(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,r){if(!e.name)throw new Yr("Cached content must contain a `name` field.");if(!e.model)throw new Yr("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const o of s)if(n!=null&&n[o]&&e[o]&&(n==null?void 0:n[o])!==e[o]){if(o==="model"){const a=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,u=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(a===u)continue}throw new Yr(`Different value for "${o}" specified in modelParams (${n[o]}) and cachedContent (${e[o]})`)}const i=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new dE(this.apiKey,i,r)}}const Un={MODEL_FAST:"gemini-2.0-flash-exp",MODEL_SMART:"gemini-2.0-flash-exp",MAX_TOKENS:4e3},g6=[{id:"gemini-2.0-flash-exp",name:"Gemini 2.0 Flash",description:"Google의 최신 차세대 모델",isPro:!0}],y6={NEW_TASK_TITLE:"새로운 업무 요청",NEW_TASK_DESC_PLACEHOLDER:"여기에 상세 내용을 작성하세요...",DRAFT_PLACEHOLDER:"예: 이번 여름 프로모션 랜딩 페이지 기획안 작성해줘. 타겟은 20대 대학생이고, 밝고 경쾌한 느낌이어야 해. (A사 레퍼런스 참고)"},_6=[{id:Nt.REQUESTED,label:"요청됨",dotColor:"bg-gray-400"},{id:Nt.WIP,label:"진행 중",dotColor:"bg-blue-500"},{id:Nt.CHECKED,label:"검토/승인",dotColor:"bg-purple-500"},{id:Nt.DONE,label:"완료",dotColor:"bg-green-500"}];ki.HIGH,Nt.WIP,ki.MEDIUM,Nt.REQUESTED,ki.HIGH,Nt.CHECKED,ki.LOW,Nt.DONE;const jj=`# 실행 전략(Execution Plan) 생성 가이드

## 목차
1. [기본 원칙](#기본-원칙)
2. [업무 타입별 실행 전략](#업무-타입별-실행-전략)
3. [단계 구성 패턴](#단계-구성-패턴)
4. [산업별 베스트 프랙티스](#산업별-베스트-프랙티스)
5. [AI 생성 시 고려사항](#ai-생성-시-고려사항)

---

## 기본 원칙

### 실행 전략의 목적
- **명확한 로드맵 제공**: 업무를 처음 접하는 사람도 어떻게 시작해야 할지 알 수 있어야 함
- **실행 가능성**: 각 단계가 구체적이고 실행 가능한 액션으로 구성
- **순차적 진행**: 논리적인 순서로 배열되어 의존성이 명확해야 함
- **완결성**: 모든 단계를 완료하면 업무가 완성되어야 함

### 단계 수 가이드라인
- **표준 범위**: 4-6개의 주요 단계
- **단순 업무**: 3-4개 단계 (버그 수정, 간단한 설정 변경)
- **중간 복잡도**: 4-5개 단계 (기능 추가, 디자인 작업)
- **복잡한 업무**: 5-6개 단계 (아키텍처 설계, 대규모 리팩토링)

### 좋은 실행 전략의 특징
1. **구체적**: "테스트 진행" ❌ → "단위 테스트 및 통합 테스트 케이스 작성 및 실행" ✅
2. **동사 중심**: 각 단계는 행동을 나타내는 동사로 시작
3. **측정 가능**: 완료 여부를 명확히 판단 가능
4. **맥락 포함**: 왜 그 단계가 필요한지 이해 가능
5. **독립적**: 각 단계가 의미 있는 진전을 나타냄

---

## 업무 타입별 실행 전략

### 1. 소프트웨어 개발 (기능 구현)

#### 프론트엔드 개발
**표준 실행 전략 (5단계):**

1. **요구사항 분석 및 설계**
   - UI/UX 명세서 검토 및 컴포넌트 구조 설계
   - 필요한 API 엔드포인트 및 데이터 모델 정의
   - 재사용 가능한 컴포넌트 식별

2. **개발 환경 설정 및 기본 구조 구축**
   - 브랜치 생성 및 개발 환경 설정
   - 라우팅 및 기본 컴포넌트 스캐폴딩
   - 필요한 라이브러리 설치 및 설정

3. **UI 컴포넌트 구현 및 스타일링**
   - HTML/JSX 마크업 작성
   - CSS/Tailwind를 활용한 스타일링
   - 반응형 디자인 및 접근성 적용

4. **비즈니스 로직 및 API 연동**
   - 상태 관리 로직 구현 (useState, Redux 등)
   - API 호출 및 데이터 핸들링
   - 에러 처리 및 로딩 상태 관리

5. **테스트 및 최적화**
   - 컴포넌트 단위 테스트 작성
   - 크로스 브라우저 검증 및 성능 최적화
   - 코드 리뷰 준비 및 문서화

#### 백엔드 개발
**표준 실행 전략 (5단계):**

1. **API 설계 및 데이터 모델링**
   - REST/GraphQL API 엔드포인트 설계
   - 데이터베이스 스키마 설계 및 ERD 작성
   - 비즈니스 로직 플로우 정의

2. **데이터베이스 및 모델 구현**
   - 마이그레이션 스크립트 작성
   - ORM 모델 정의 (Prisma, TypeORM 등)
   - 인덱스 및 제약조건 설정

3. **API 엔드포인트 및 비즈니스 로직 구현**
   - 라우터 및 컨트롤러 작성
   - 서비스 레이어 비즈니스 로직 구현
   - 인증 및 권한 검증 로직 추가

4. **에러 핸들링 및 검증**
   - 입력 데이터 검증 로직 구현
   - 예외 처리 및 에러 응답 표준화
   - 로깅 시스템 통합

5. **테스트 및 문서화**
   - 단위 테스트 및 통합 테스트 작성
   - API 문서 자동 생성 (Swagger/OpenAPI)
   - 성능 테스트 및 최적화

#### 모바일 앱 개발
**표준 실행 전략 (6단계):**

1. **화면 설계 및 네비게이션 구조 정의**
   - 화면 플로우 및 네비게이션 구조 설계
   - 플랫폼별 UI 가이드라인 검토 (iOS/Android)
   - 필요한 라이브러리 및 패키지 선정

2. **UI 레이아웃 및 컴포넌트 구현**
   - 화면별 레이아웃 작성
   - 공통 컴포넌트 및 위젯 개발
   - 다양한 화면 크기 대응

3. **비즈니스 로직 및 상태 관리**
   - 상태 관리 패턴 구현 (Provider, Redux 등)
   - API 통신 및 데이터 핸들링
   - 로컬 데이터 저장소 연동

4. **네이티브 기능 통합**
   - 카메라, 위치, 푸시 알림 등 통합
   - 플랫폼별 권한 요청 처리
   - 오프라인 모드 대응

5. **테스트 및 디버깅**
   - 실기기 테스트 (iOS/Android)
   - 다양한 OS 버전 호환성 검증
   - 크래시 및 버그 수정

6. **배포 준비 및 스토어 제출**
   - 앱 아이콘, 스플래시 화면 최종 점검
   - 빌드 및 서명 설정
   - App Store / Play Store 메타데이터 작성

### 2. 버그 수정

#### 일반 버그 수정
**표준 실행 전략 (4단계):**

1. **버그 재현 및 근본 원인 파악**
   - 버그 재현 단계 정리 및 환경 확인
   - 로그 및 스택 트레이스 분석
   - 관련 코드 영역 식별

2. **수정 방안 설계 및 구현**
   - 최적의 수정 방법 결정
   - 코드 수정 및 로컬 검증
   - 사이드 이펙트 최소화

3. **테스트 케이스 작성 및 검증**
   - 버그 재발 방지를 위한 테스트 케이스 작성
   - 회귀 테스트 수행
   - 관련 기능 정상 작동 확인

4. **코드 리뷰 및 배포**
   - Pull Request 생성 및 리뷰 요청
   - 피드백 반영 및 병합
   - 스테이징 및 프로덕션 배포

#### 긴급 버그 (Hotfix)
**표준 실행 전략 (3단계):**

1. **즉시 원인 파악 및 임시 조치**
   - 긴급 트러블슈팅 및 영향 범위 확인
   - 필요시 임시 workaround 적용
   - 팀 및 이해관계자에게 상황 공유

2. **핫픽스 적용 및 긴급 배포**
   - Hotfix 브랜치 생성 및 수정
   - 최소한의 검증 및 긴급 배포
   - 모니터링으로 정상 작동 확인

3. **후속 조치 및 문서화**
   - 인시던트 보고서 작성
   - 장기적 해결 방안 백로그 등록
   - 재발 방지 대책 수립

### 3. 데이터 분석 및 리서치

#### 데이터 분석 태스크
**표준 실행 전략 (5단계):**

1. **분석 목적 정의 및 가설 수립**
   - 비즈니스 질문 명확화
   - 분석 가설 및 성공 지표 정의
   - 필요한 데이터 소스 식별

2. **데이터 수집 및 정제**
   - 다양한 소스에서 데이터 추출
   - 데이터 품질 검증 및 클렌징
   - 분석에 적합한 형태로 변환

3. **탐색적 데이터 분석 (EDA)**
   - 기술 통계 및 분포 확인
   - 이상치 및 결측치 처리
   - 변수 간 상관관계 분석

4. **분석 수행 및 시각화**
   - 통계 분석 또는 머신러닝 모델 적용
   - 인사이트 도출을 위한 시각화 생성
   - 결과 해석 및 검증

5. **리포트 작성 및 발표**
   - 분석 결과 문서화
   - 비즈니스 권장사항 제시
   - 이해관계자에게 발표 및 피드백 수렴

#### 사용자 리서치
**표준 실행 전략 (5단계):**

1. **리서치 목표 및 방법론 설계**
   - 리서치 질문 및 목표 정의
   - 적절한 방법론 선정 (인터뷰, 설문, 사용성 테스트 등)
   - 참가자 모집 기준 수립

2. **참가자 모집 및 리서치 준비**
   - 타겟 참가자 모집
   - 질문지 또는 시나리오 작성
   - 리서치 도구 및 환경 준비

3. **리서치 세션 진행**
   - 참가자와 세션 진행
   - 관찰 및 녹화 (동의 하에)
   - 실시간 노트 및 인사이트 기록

4. **데이터 분석 및 패턴 도출**
   - 녹화 내용 전사 및 정리
   - 주요 테마 및 패턴 식별
   - 정량적/정성적 데이터 종합

5. **인사이트 정리 및 권장사항 제시**
   - 주요 발견사항 문서화
   - 페르소나 또는 여정 지도 업데이트
   - 디자인 또는 제품 개선 권장사항 제시

### 4. 디자인 작업

#### UI/UX 디자인
**표준 실행 전략 (5단계):**

1. **리서치 및 요구사항 분석**
   - 사용자 니즈 및 비즈니스 목표 파악
   - 경쟁사 분석 및 디자인 트렌드 조사
   - 디자인 제약사항 및 가이드라인 확인

2. **정보 구조 및 와이어프레임**
   - IA(Information Architecture) 설계
   - 로우 피델리티 와이어프레임 작성
   - 사용자 플로우 정의

3. **하이 피델리티 디자인**
   - 비주얼 디자인 및 컬러 스킴 적용
   - 타이포그래피 및 스페이싱 조정
   - 인터랙션 및 마이크로 애니메이션 설계

4. **프로토타입 및 사용성 테스트**
   - 인터랙티브 프로토타입 제작
   - 내부 또는 외부 사용성 테스트 진행
   - 피드백 반영 및 디자인 개선

5. **개발 핸드오프 및 검수**
   - 디자인 시스템 컴포넌트 정리
   - 개발팀에 스펙 및 에셋 전달
   - 개발 결과물 검수 및 QA 지원

#### 그래픽 디자인
**표준 실행 전략 (4단계):**

1. **브리프 분석 및 컨셉 개발**
   - 클라이언트 요구사항 및 브랜드 가이드라인 검토
   - 무드보드 및 레퍼런스 수집
   - 2-3개의 초기 컨셉 스케치

2. **디자인 시안 제작**
   - 선택된 컨셉 기반 시안 제작
   - 다양한 크기 및 매체 대응 버전 준비
   - 타이포그래피, 컬러, 레이아웃 정교화

3. **피드백 반영 및 수정**
   - 클라이언트 또는 이해관계자 리뷰
   - 피드백 기반 수정 및 개선
   - 최종 승인 획득

4. **최종 파일 정리 및 전달**
   - 다양한 포맷 (AI, PNG, SVG, PDF 등) 내보내기
   - 파일명 정리 및 폴더 구조화
   - 사용 가이드 또는 스타일 가이드 작성

### 5. 인프라 및 DevOps

#### 인프라 구축
**표준 실행 전략 (5단계):**

1. **요구사항 분석 및 아키텍처 설계**
   - 서비스 요구사항 및 트래픽 예상
   - 인프라 아키텍처 다이어그램 작성
   - 비용 및 리소스 계획 수립

2. **Infrastructure as Code (IaC) 작성**
   - Terraform, CloudFormation 등으로 코드화
   - 환경별 설정 분리 (dev, staging, prod)
   - VPC, 서브넷, 보안 그룹 등 네트워크 설정

3. **리소스 프로비저닝 및 배포**
   - IaC 실행하여 리소스 생성
   - 서버, 데이터베이스, 스토리지 등 구성
   - 초기 설정 및 보안 강화

4. **모니터링 및 알람 설정**
   - CloudWatch, Prometheus 등 모니터링 도구 설정
   - CPU, 메모리, 디스크 사용률 알람
   - 로그 수집 및 중앙화

5. **문서화 및 백업 체계 구축**
   - 인프라 문서 및 위키 업데이트
   - 자동 백업 스케줄 설정
   - 재해 복구 계획 수립

#### CI/CD 파이프라인 구축
**표준 실행 전략 (5단계):**

1. **파이프라인 요구사항 정의**
   - 빌드, 테스트, 배포 단계 정의
   - 환경별 배포 전략 수립
   - 필요한 도구 및 플랫폼 선정

2. **CI 파이프라인 구성**
   - GitHub Actions, Jenkins, GitLab CI 등 설정
   - 빌드 스크립트 작성
   - 자동 테스트 실행 통합

3. **CD 파이프라인 구성**
   - 스테이징 및 프로덕션 배포 자동화
   - Blue-Green 또는 Canary 배포 전략 구현
   - 롤백 메커니즘 설정

4. **보안 및 품질 검사 통합**
   - SAST/DAST 보안 스캔 도구 통합
   - 코드 품질 분석 (SonarQube 등)
   - 의존성 취약점 검사

5. **문서화 및 팀 교육**
   - 파이프라인 사용 가이드 작성
   - 팀원 대상 교육 세션 진행
   - 지속적 개선 프로세스 수립

### 6. 테스트 작업

#### 테스트 케이스 작성
**표준 실행 전략 (4단계):**

1. **요구사항 분석 및 테스트 범위 정의**
   - 기능 명세서 및 사용자 스토리 검토
   - 테스트해야 할 시나리오 식별
   - 우선순위 및 위험도 평가

2. **테스트 케이스 설계**
   - 긍정/부정 시나리오 작성
   - 경계값 및 예외 케이스 포함
   - 테스트 데이터 준비

3. **테스트 케이스 문서화**
   - 테스트 관리 도구에 등록 (Jira, TestRail 등)
   - 단계별 실행 방법 및 예상 결과 명시
   - 테스트 환경 및 전제조건 기록

4. **리뷰 및 승인**
   - 동료 또는 QA 리더 검토
   - 피드백 반영 및 수정
   - 최종 승인 및 테스트 준비 완료

#### QA 테스트 수행
**표준 실행 전략 (4단계):**

1. **테스트 환경 준비 및 검증**
   - 테스트 환경 구성 및 접근 권한 확인
   - 필요한 테스트 데이터 준비
   - 빌드 버전 및 배포 상태 확인

2. **기능 테스트 수행**
   - 계획된 테스트 케이스 순차 실행
   - 결과 기록 (Pass/Fail)
   - 발견된 버그 즉시 이슈 등록

3. **회귀 테스트 및 재검증**
   - 수정된 버그 재테스트
   - 주요 기능 회귀 테스트
   - 최종 검증 체크리스트 완료

4. **테스트 보고서 작성 및 릴리스 승인**
   - 테스트 결과 요약 보고서 작성
   - 미해결 이슈 및 리스크 명시
   - 릴리스 승인 여부 결정 및 전달

### 7. 문서화 작업

#### 기술 문서 작성
**표준 실행 전략 (4단계):**

1. **문서 구조 및 목차 설계**
   - 대상 독자 및 목적 정의
   - 문서 구조 및 섹션 구성
   - 참조할 소스 및 자료 수집

2. **초안 작성**
   - 각 섹션별 내용 작성
   - 코드 예제 및 스크린샷 추가
   - 다이어그램 및 플로우차트 삽입

3. **기술 검토 및 수정**
   - SME(Subject Matter Expert) 검토 요청
   - 피드백 반영 및 내용 보완
   - 정확성 및 최신성 검증

4. **최종 편집 및 배포**
   - 문법 및 맞춤법 검토
   - 포맷팅 및 스타일 통일
   - 문서 플랫폼에 게시 및 접근 권한 설정

#### API 문서화
**표준 실행 전략 (4단계):**

1. **API 명세 정리**
   - 모든 엔드포인트 목록 작성
   - 요청/응답 파라미터 정의
   - 인증 방법 및 에러 코드 정리

2. **자동 문서화 도구 설정**
   - Swagger/OpenAPI 스펙 작성
   - 코드에서 자동 생성 설정 (어노테이션 등)
   - Swagger UI 또는 Redoc 설정

3. **예제 및 가이드 추가**
   - 각 엔드포인트별 요청 예제 작성
   - 다양한 언어의 코드 샘플 제공
   - 일반적인 사용 시나리오 가이드 작성

4. **테스트 및 배포**
   - 문서와 실제 API 동작 일치 여부 확인
   - 개발자 포털에 배포
   - 변경 이력(Changelog) 유지

### 8. 마케팅 및 콘텐츠

#### 콘텐츠 제작
**표준 실행 전략 (5단계):**

1. **콘텐츠 기획 및 리서치**
   - 타겟 오디언스 및 목표 정의
   - 키워드 리서치 및 SEO 전략 수립
   - 콘텐츠 개요 및 구조 작성

2. **초안 작성**
   - 브랜드 톤앤매너에 맞춰 작성
   - 헤드라인, 본문, CTA 포함
   - 이미지 및 멀티미디어 소싱

3. **편집 및 최적화**
   - 문법 및 가독성 검토
   - SEO 최적화 (메타 태그, 키워드 배치)
   - 이미지 압축 및 alt 텍스트 추가

4. **검토 및 승인**
   - 편집자 또는 마케팅 리더 검토
   - 법적 검토 (필요시)
   - 피드백 반영 및 최종 승인

5. **게시 및 홍보**
   - CMS에 콘텐츠 업로드
   - 소셜 미디어 및 이메일 뉴스레터 홍보
   - 성과 추적 설정 (Google Analytics 등)

#### 캠페인 실행
**표준 실행 전략 (6단계):**

1. **캠페인 목표 및 전략 수립**
   - KPI 및 성공 지표 정의
   - 타겟 오디언스 세그먼트 분석
   - 캠페인 메시지 및 크리에이티브 방향 설정

2. **크리에이티브 자산 제작**
   - 광고 배너, 비디오, 카피 작성
   - 랜딩 페이지 디자인 및 개발
   - A/B 테스트용 변형 준비

3. **캠페인 설정 및 타겟팅**
   - 광고 플랫폼 설정 (Google Ads, Facebook 등)
   - 타겟팅 옵션 및 예산 설정
   - 추적 픽셀 및 UTM 파라미터 설정

4. **캠페인 런칭 및 모니터링**
   - 캠페인 활성화
   - 초기 성과 모니터링
   - 실시간 최적화 및 조정

5. **A/B 테스트 및 최적화**
   - 변형 간 성과 비교
   - 승자 식별 및 예산 재분배
   - 지속적 개선 적용

6. **결과 분석 및 보고**
   - 캠페인 성과 데이터 분석
   - ROI 계산 및 인사이트 도출
   - 이해관계자에게 결과 보고 및 학습 사항 공유

### 9. 프로젝트 관리

#### 스프린트 계획
**표준 실행 전략 (4단계):**

1. **백로그 리뷰 및 우선순위 조정**
   - 프로덕트 백로그 검토
   - 비즈니스 가치 및 긴급도 평가
   - 스프린트 목표 정의

2. **사용자 스토리 추정 및 선택**
   - 플래닝 포커 또는 추정 세션 진행
   - 팀 용량 고려하여 스토리 선택
   - 스프린트 백로그 확정

3. **태스크 분해 및 할당**
   - 사용자 스토리를 구체적 태스크로 분해
   - 팀원에게 태스크 할당
   - 의존성 및 리스크 식별

4. **킥오프 및 일정 설정**
   - 스프린트 킥오프 미팅 진행
   - 일일 스탠드업 일정 확정
   - 스프린트 보드 및 도구 준비

#### 릴리스 준비
**표준 실행 전략 (5단계):**

1. **릴리스 범위 확정 및 체크리스트 작성**
   - 포함될 기능 및 버그 픽스 확정
   - 릴리스 체크리스트 준비
   - 의존성 및 리스크 검토

2. **QA 및 스테이징 환경 검증**
   - 전체 기능 통합 테스트
   - 스테이징 환경 배포 및 검증
   - 성능 및 보안 최종 점검

3. **릴리스 노트 및 문서 준비**
   - 릴리스 노트 작성
   - 사용자 가이드 업데이트
   - 고객 지원팀 교육 자료 준비

4. **배포 계획 및 롤백 준비**
   - 배포 일정 및 담당자 확정
   - 배포 스크립트 및 절차 검토
   - 롤백 계획 및 테스트

5. **배포 실행 및 모니터링**
   - 프로덕션 배포 실행
   - 실시간 모니터링 및 알람 확인
   - 이해관계자에게 릴리스 완료 공지

### 10. 고객 지원

#### 지원 티켓 해결
**표준 실행 전략 (4단계):**

1. **티켓 분석 및 우선순위 평가**
   - 고객 문의 내용 정확히 파악
   - 심각도 및 영향 범위 평가
   - 관련 정보 및 로그 수집

2. **문제 해결 또는 에스컬레이션**
   - 즉시 해결 가능하면 솔루션 제공
   - 복잡한 경우 담당 팀에 에스컬레이션
   - 임시 workaround 안내 (필요시)

3. **해결책 전달 및 고객 확인**
   - 명확하고 친절한 언어로 해결책 설명
   - 고객의 추가 질문 답변
   - 고객 만족 확인

4. **문서화 및 후속 조치**
   - 해결 과정 및 솔루션 문서화
   - FAQ 또는 지식베이스 업데이트
   - 유사 문제 재발 방지 조치 제안

---

## 단계 구성 패턴

### 일반적인 단계 흐름
대부분의 업무는 다음과 같은 흐름을 따릅니다:

1. **계획/분석** → 2. **설계/준비** → 3. **실행/구현** → 4. **검증/테스트** → 5. **배포/완료**

### 각 단계의 특징

#### 1단계: 계획/분석
- **목적**: 무엇을 해야 하는지 명확히 함
- **키워드**: 분석, 리서치, 요구사항, 목표, 범위
- **예시**:
  - "요구사항 분석 및 설계"
  - "비즈니스 목표 및 성공 지표 정의"
  - "현황 파악 및 문제점 분석"

#### 2단계: 설계/준비
- **목적**: 어떻게 할 것인지 계획 수립
- **키워드**: 설계, 아키텍처, 구조, 환경 설정
- **예시**:
  - "데이터 모델 및 API 설계"
  - "개발 환경 설정 및 기본 구조 구축"
  - "테스트 케이스 설계"

#### 3단계: 실행/구현
- **목적**: 실제로 만들거나 수행함
- **키워드**: 구현, 개발, 작성, 제작
- **예시**:
  - "UI 컴포넌트 구현 및 스타일링"
  - "비즈니스 로직 및 API 연동"
  - "콘텐츠 작성 및 편집"

#### 4단계: 검증/테스트
- **목적**: 제대로 작동하는지 확인
- **키워드**: 테스트, 검증, 리뷰, 피드백
- **예시**:
  - "단위 테스트 및 통합 테스트 수행"
  - "코드 리뷰 및 피드백 반영"
  - "사용성 테스트 및 QA"

#### 5단계: 배포/완료
- **목적**: 최종 결과물을 전달하거나 배포
- **키워드**: 배포, 릴리스, 문서화, 전달
- **예시**:
  - "프로덕션 배포 및 모니터링"
  - "문서화 및 팀 공유"
  - "최종 승인 및 프로젝트 종료"

### 복잡도별 단계 조정

#### 간단한 업무 (3-4단계)
- 계획 + 실행 + 검증 또는
- 분석 + 구현 + 테스트 + 배포

**예시 (설정 변경):**
1. 현재 설정 검토 및 변경 사항 확인
2. 설정 파일 수정 및 로컬 테스트
3. 스테이징 및 프로덕션 배포
4. 모니터링 및 검증

#### 중간 복잡도 (4-5단계)
- 계획 + 설계 + 구현 + 테스트 + 배포

**예시 (신규 기능 추가):**
1. 요구사항 분석 및 기능 명세 작성
2. UI/UX 설계 및 API 스펙 정의
3. 프론트엔드 및 백엔드 구현
4. 통합 테스트 및 QA
5. 배포 및 문서화

#### 복잡한 업무 (5-6단계)
- 상세한 계획 + 다단계 구현 + 다층 검증 + 단계적 배포

**예시 (아키텍처 리팩토링):**
1. 현재 아키텍처 분석 및 개선 목표 정의
2. 새로운 아키텍처 설계 및 마이그레이션 전략 수립
3. 단계별 코드 리팩토링 및 모듈화
4. 기능 검증 및 성능 테스트
5. 단계적 배포 및 모니터링
6. 문서화 및 팀 교육

---

## 산업별 베스트 프랙티스

### 스타트업 환경
**특징:**
- 빠른 실행과 검증 중요
- 리소스 제약
- 유연성과 적응력 필요

**실행 전략 조정:**
- MVP 중심으로 핵심 단계만 포함
- 병렬 작업 가능한 부분 식별
- "완벽"보다 "작동하는 것" 우선

**예시 (MVP 개발):**
1. 핵심 기능 정의 및 최소 요구사항 확정
2. 빠른 프로토타입 제작 및 사용자 피드백
3. 핵심 기능 구현 (80/20 법칙)
4. 기본 테스트 및 버그 수정
5. 빠른 배포 및 실사용자 피드백 수집

### 엔터프라이즈 환경
**특징:**
- 엄격한 프로세스와 승인 단계
- 규정 준수 중요
- 다양한 이해관계자

**실행 전략 조정:**
- 각 단계마다 검토 및 승인 포함
- 상세한 문서화 단계 추가
- 보안 및 컴플라이언스 체크

**예시 (엔터프라이즈 기능 추가):**
1. 비즈니스 요구사항 분석 및 승인
2. 상세 설계 및 아키텍처 리뷰
3. 개발 및 코드 리뷰 (다단계)
4. QA 테스트 및 보안 스캔
5. UAT(사용자 승인 테스트)
6. 변경 관리 위원회(CAB) 승인 및 프로덕션 배포

### SaaS 제품
**특징:**
- 지속적 배포
- Feature flag 활용
- 다양한 고객 환경

**실행 전략 조정:**
- Feature flag를 활용한 점진적 롤아웃 단계
- A/B 테스트 준비
- 카나리 배포 고려

**예시 (SaaS 신기능 출시):**
1. 기능 설계 및 Feature flag 설정
2. 개발 및 내부 테스트
3. 베타 고객 대상 제한적 릴리스
4. 피드백 수집 및 개선
5. Feature flag로 점진적 확대
6. 전체 고객 대상 오픈 및 모니터링

---

## AI 생성 시 고려사항

### 1. 태스크 컨텍스트 파악

#### 제목 키워드 분석
- **"구현", "개발", "추가"** → 개발 중심 실행 전략
- **"수정", "버그"** → 버그 수정 실행 전략
- **"분석", "리서치"** → 분석/조사 실행 전략
- **"디자인", "UI/UX"** → 디자인 실행 전략
- **"배포", "릴리스"** → 배포 중심 실행 전략
- **"문서화"** → 문서 작성 실행 전략

#### 설명 내용 분석
- 기술 스택 언급 → 해당 기술 특화 단계 포함
- 기한 언급 → 긴급도에 따라 단계 조정
- 이해관계자 언급 → 승인/리뷰 단계 강조

### 2. 적절한 단계 수 결정

**판단 기준:**
- **단순 (3-4단계)**: 명확한 작은 단위 업무, 변경 범위 제한적
- **표준 (4-5단계)**: 일반적인 기능 개발, 중간 복잡도
- **복잡 (5-6단계)**: 아키텍처 변경, 다수 컴포넌트 관련, 높은 리스크

### 3. 구체성과 실행 가능성

#### 좋은 단계 예시:
✅ "요구사항 분석 후 데이터 모델 및 API 엔드포인트 설계"
✅ "React 컴포넌트 구현 및 Tailwind CSS로 스타일링"
✅ "Jest를 활용한 단위 테스트 작성 및 코드 리뷰 요청"

#### 나쁜 단계 예시:
❌ "준비하기"
❌ "작업 진행"
❌ "마무리"

### 4. 논리적 순서 유지

각 단계는:
- 이전 단계의 결과물을 활용
- 다음 단계의 전제조건 충족
- 독립적으로 완료 가능한 의미 있는 단위

### 5. 역할 및 팀 구조 고려

- **개발자**: 코드 구현, 테스트 작성 중심
- **디자이너**: 리서치, 프로토타입, 핸드오프 중심
- **PM**: 요구사항, 우선순위, 이해관계자 조율 중심
- **QA**: 테스트 케이스, 검증, 품질 보증 중심

---

## 자주 사용되는 실행 전략 문구 라이브러리

### 계획/분석 단계
- "요구사항 분석 및 비즈니스 목표 정의"
- "현황 파악 및 문제점 분석"
- "타겟 오디언스 및 사용자 니즈 조사"
- "경쟁사 분석 및 시장 리서치"
- "리스크 및 제약사항 식별"

### 설계/준비 단계
- "아키텍처 설계 및 기술 스택 선정"
- "데이터 모델 및 API 스펙 정의"
- "UI/UX 와이어프레임 및 프로토타입 제작"
- "개발 환경 설정 및 브랜치 생성"
- "테스트 시나리오 및 케이스 설계"

### 실행/구현 단계
- "프론트엔드 컴포넌트 구현 및 스타일링"
- "백엔드 API 개발 및 비즈니스 로직 구현"
- "데이터베이스 스키마 생성 및 마이그레이션"
- "서드파티 API 연동 및 통합"
- "콘텐츠 작성 및 편집"

### 검증/테스트 단계
- "단위 테스트 및 통합 테스트 작성"
- "QA 테스트 수행 및 버그 리포팅"
- "코드 리뷰 및 피드백 반영"
- "성능 테스트 및 최적화"
- "보안 스캔 및 취약점 분석"

### 배포/완료 단계
- "스테이징 환경 배포 및 검증"
- "프로덕션 배포 및 모니터링 설정"
- "문서화 및 사용 가이드 작성"
- "이해관계자 리뷰 및 최종 승인"
- "릴리스 노트 작성 및 팀 공지"

---

## 마무리

이 가이드는 다양한 업무 타입과 산업에 맞춰 실행 전략을 생성하기 위한 종합 지식 베이스입니다. AI는 이 정보를 바탕으로:

1. **업무의 성격 파악**: 개발, 디자인, 분석, 배포 등
2. **복잡도 평가**: 단순/중간/복잡
3. **적절한 단계 수 결정**: 3-6단계
4. **구체적이고 실행 가능한 단계 작성**: 동사 중심, 명확한 액션
5. **논리적 순서 유지**: 선행 단계 → 후행 단계

### 핵심 원칙
- **실행 가능성**: 각 단계가 구체적 행동
- **명확성**: 무엇을 해야 하는지 분명히 알 수 있음
- **완결성**: 모든 단계 완료 시 업무 완성
- **유연성**: 업무 특성에 맞춰 조정

이 지식을 활용하여 팀이 업무를 효과적으로 수행할 수 있도록 명확한 실행 로드맵을 제공하시기 바랍니다.`,Bj=`# 태스크 완료 조건(Definition of Done) 지식 베이스

## 목차
1. [기본 원칙](#기본-원칙)
2. [태스크 타입별 완료 조건](#태스크-타입별-완료-조건)
3. [산업별 베스트 프랙티스](#산업별-베스트-프랙티스)
4. [체크리스트 템플릿](#체크리스트-템플릿)

---

## 기본 원칙

### DoD 작성 시 고려사항
- **명확성**: 완료 여부를 명확하게 판단할 수 있어야 함
- **측정 가능성**: 객관적으로 확인 가능한 기준
- **실행 가능성**: 현실적으로 달성 가능한 조건
- **완전성**: 태스크가 진정으로 "완료"되기 위한 모든 요소 포함
- **팀 합의**: 모든 이해관계자가 동의하는 기준
- **일관성 (7개 원칙)**: 모든 태스크는 품질 표준화를 위해 **7개의 핵심 완료 조건**을 가집니다.

### 일반적인 DoD 구조
1. 기능 요구사항 충족
2. 품질 검증 완료
3. 문서화 완료
4. 배포 준비 완료
5. 이해관계자 승인

---

## 태스크 타입별 완료 조건

### 1. 소프트웨어 개발 (기능 구현)

#### 프론트엔드 개발
**완료 조건:**
- UI/UX 디자인 가이드라인을 준수하여 구현되었습니다
- 모든 타겟 브라우저(Chrome, Firefox, Safari, Edge)에서 정상 작동합니다
- 반응형 디자인이 적용되어 모바일, 태블릿, 데스크톱에서 올바르게 표시됩니다
- 접근성(WCAG 2.1 레벨 AA) 기준을 충족합니다
- 사용자 인터랙션에 대한 피드백(로딩, 에러 메시지 등)이 적절히 구현되었습니다
- 컴포넌트 단위 테스트가 작성되고 통과되었습니다
- 코드 리뷰가 완료되고 승인되었습니다
- 번들 사이즈 최적화가 적용되었습니다 (lazy loading, code splitting)
- 성능 테스트를 통과했습니다 (Lighthouse 점수 90점 이상)

#### 백엔드 개발
**완료 조건:**
- API 명세서(Swagger/OpenAPI)가 작성되고 최신 상태입니다
- 모든 엔드포인트에 대한 단위 테스트가 작성되고 통과되었습니다
- 통합 테스트가 작성되고 통과되었습니다
- 에러 핸들링이 적절하게 구현되었습니다 (4xx, 5xx 에러 처리)
- 보안 검증이 완료되었습니다 (인증, 권한, SQL injection 방지 등)
- 로깅 시스템이 구현되어 주요 이벤트가 기록됩니다
- 데이터베이스 마이그레이션 스크립트가 작성되었습니다
- 성능 테스트를 통과했습니다 (응답 시간, 처리량)
- 코드 리뷰가 완료되고 승인되었습니다
- API 문서가 개발자 포털에 게시되었습니다

#### 모바일 앱 개발
**완료 조건:**
- iOS와 Android 모두에서 정상 작동합니다
- 다양한 화면 크기와 해상도에서 올바르게 표시됩니다
- 오프라인 모드가 적절히 처리됩니다
- 푸시 알림이 정상 작동합니다
- 앱 스토어 제출 가이드라인을 준수합니다
- 배터리 소모 및 메모리 사용이 최적화되었습니다
- 단위 테스트 및 UI 테스트가 작성되고 통과되었습니다
- 크래시 리포팅 시스템이 통합되었습니다
- 베타 테스트가 완료되고 주요 버그가 수정되었습니다

### 2. 버그 수정

#### 일반 버그 수정
**완료 조건:**
- 버그의 근본 원인이 파악되고 문서화되었습니다
- 수정 사항이 구현되고 로컬에서 검증되었습니다
- 관련된 모든 테스트 케이스가 통과되었습니다
- 회귀 테스트를 통해 다른 기능에 영향이 없음을 확인했습니다
- 버그 수정 내역이 changelog에 기록되었습니다
- QA 팀의 검증을 완료했습니다
- 코드 리뷰가 완료되고 승인되었습니다
- 프로덕션 환경에 배포되었습니다
- 모니터링을 통해 버그가 재발하지 않음을 확인했습니다

#### 긴급 버그 (Hotfix)
**완료 조건:**
- 버그가 수정되고 즉시 테스트되었습니다
- 영향 범위 분석이 완료되었습니다
- 최소한의 회귀 테스트가 수행되었습니다
- 비상 배포 프로세스에 따라 프로덕션에 적용되었습니다
- 모니터링 대시보드에서 정상 작동을 확인했습니다
- 임시 해결책이 적용된 경우, 장기 해결 방안이 백로그에 등록되었습니다
- 인시던트 보고서가 작성되었습니다
- 관련 이해관계자에게 알림이 전달되었습니다

### 3. 데이터 분석 및 리서치

#### 데이터 분석 태스크
**완료 조건:**
- 분석 목적과 가설이 명확하게 정의되었습니다
- 필요한 데이터가 수집되고 정제되었습니다
- 적절한 분석 기법이 적용되었습니다
- 분석 결과가 시각화되었습니다 (차트, 그래프, 대시보드)
- 인사이트와 권장 사항이 도출되었습니다
- 분석 방법론과 한계점이 문서화되었습니다
- 이해관계자에게 결과가 발표되었습니다
- 후속 액션 아이템이 정의되었습니다
- 분석 코드와 데이터가 버전 관리 시스템에 저장되었습니다

#### 사용자 리서치
**완료 조건:**
- 리서치 목표와 질문이 명확하게 정의되었습니다
- 적절한 참가자가 모집되었습니다 (최소 5-10명)
- 리서치 세션이 계획대로 진행되었습니다
- 세션이 녹화되고 기록되었습니다 (동의 획득 후)
- 데이터가 분석되고 패턴이 도출되었습니다
- 주요 발견 사항이 문서화되었습니다
- 사용자 페르소나 또는 여정 지도가 업데이트되었습니다
- 디자인 권장 사항이 제시되었습니다
- 팀에 결과가 공유되었습니다

### 4. 디자인 작업

#### UI/UX 디자인
**완료 조건:**
- 사용자 요구사항과 비즈니스 목표가 반영되었습니다
- 와이어프레임 또는 로우 피델리티 프로토타입이 검토되었습니다
- 하이 피델리티 디자인이 완성되었습니다
- 디자인 시스템과 브랜드 가이드라인을 준수합니다
- 인터랙션 플로우가 정의되었습니다
- 반응형 디자인 스펙이 제공되었습니다
- 접근성 요구사항이 고려되었습니다
- 개발 팀에 디자인 핸드오프가 완료되었습니다 (Figma, Zeplin 등)
- 이해관계자의 승인을 받았습니다
- 프로토타입으로 사용성 테스트가 진행되었습니다

#### 그래픽 디자인
**완료 조건:**
- 브리프 요구사항을 모두 충족합니다
- 브랜드 아이덴티티와 일관성을 유지합니다
- 최소 2-3개의 컨셉이 제시되었습니다
- 선택된 디자인이 다양한 크기와 매체에서 테스트되었습니다
- 최종 파일이 요구된 형식으로 제공되었습니다 (AI, PNG, SVG 등)
- 색상 코드와 폰트 정보가 문서화되었습니다
- 클라이언트 또는 이해관계자의 승인을 받았습니다
- 저작권과 라이선스가 확인되었습니다

### 5. 인프라 및 DevOps

#### 인프라 구축
**완료 조건:**
- 인프라 요구사항이 명확하게 정의되었습니다
- Infrastructure as Code(IaC)로 구성이 작성되었습니다 (Terraform, CloudFormation)
- 보안 그룹과 네트워크 설정이 보안 정책을 준수합니다
- 모니터링과 알림이 설정되었습니다
- 백업 및 복구 절차가 수립되었습니다
- 비용 최적화가 검토되었습니다
- 문서가 작성되고 위키에 게시되었습니다
- 변경 사항이 변경 관리 시스템에 기록되었습니다
- 관련 팀에 교육이 제공되었습니다

#### CI/CD 파이프라인
**완료 조건:**
- 파이프라인이 구현되고 테스트되었습니다
- 빌드, 테스트, 배포 단계가 자동화되었습니다
- 실패 시 롤백 메커니즘이 구현되었습니다
- 알림 시스템이 통합되었습니다 (Slack, 이메일)
- 환경별 구성이 분리되었습니다 (dev, staging, production)
- 배포 로그가 저장되고 추적 가능합니다
- 보안 스캔이 통합되었습니다
- 문서가 작성되고 팀에 공유되었습니다
- 파이프라인 성능이 최적화되었습니다 (빌드 시간 단축)

### 6. 테스트 작업

#### 테스트 케이스 작성
**완료 조건:**
- 기능 요구사항을 모두 커버하는 테스트 케이스가 작성되었습니다
- 긍정 시나리오와 부정 시나리오가 모두 포함되었습니다
- 경계값 테스트가 포함되었습니다
- 테스트 데이터가 준비되었습니다
- 예상 결과가 명확하게 정의되었습니다
- 테스트 관리 도구에 등록되었습니다
- 우선순위가 지정되었습니다
- 리뷰 및 승인이 완료되었습니다

#### QA 테스트 수행
**완료 조건:**
- 모든 계획된 테스트 케이스가 실행되었습니다
- 테스트 결과가 기록되고 문서화되었습니다
- 발견된 버그가 이슈 트래킹 시스템에 등록되었습니다
- 크리티컬 및 블로커 버그가 모두 해결되었습니다
- 회귀 테스트가 완료되었습니다
- 테스트 커버리지가 목표치를 달성했습니다 (예: 80% 이상)
- 테스트 보고서가 작성되고 공유되었습니다
- 릴리스 승인이 제공되었습니다

### 7. 문서화 작업

#### 기술 문서 작성
**완료 조건:**
- 문서의 대상 독자가 명확하게 정의되었습니다
- 내용이 정확하고 최신 상태입니다
- 구조가 논리적이고 읽기 쉽습니다
- 코드 예제와 스크린샷이 포함되었습니다
- 관련 링크와 참조가 제공됩니다
- 기술 검토가 완료되었습니다
- 문서가 버전 관리되고 있습니다
- 적절한 위치에 게시되었습니다 (위키, 문서 포털)
- 접근 권한이 올바르게 설정되었습니다

#### API 문서화
**완료 조건:**
- 모든 엔드포인트가 문서화되었습니다
- 요청/응답 예제가 제공됩니다
- 인증 방법이 설명되어 있습니다
- 에러 코드와 메시지가 정의되어 있습니다
- 속도 제한(Rate limiting) 정보가 포함되어 있습니다
- 변경 이력(Changelog)이 유지되고 있습니다
- 인터랙티브 API 테스트 기능이 제공됩니다 (Swagger UI)
- 코드 샘플이 여러 언어로 제공됩니다

### 8. 마케팅 및 콘텐츠

#### 콘텐츠 제작
**완료 조건:**
- 콘텐츠가 목표 청중에 맞게 작성되었습니다
- SEO 최적화가 적용되었습니다 (키워드, 메타 태그)
- 문법과 맞춤법이 검토되었습니다
- 이미지와 멀티미디어가 최적화되었습니다
- 법적 검토가 완료되었습니다 (필요한 경우)
- CTA(Call-to-Action)가 명확하게 포함되었습니다
- 브랜드 톤앤매너를 준수합니다
- 편집자의 승인을 받았습니다
- CMS에 게시되었습니다
- 소셜 미디어 홍보 계획이 수립되었습니다

#### 캠페인 실행
**완료 조건:**
- 캠페인 목표가 명확하게 정의되었습니다 (KPI)
- 타겟 오디언스가 세그먼트화되었습니다
- 크리에이티브 자산이 준비되었습니다
- 랜딩 페이지가 구축되고 테스트되었습니다
- 추적 코드가 설치되었습니다 (Google Analytics, Facebook Pixel)
- A/B 테스트 계획이 수립되었습니다
- 예산이 할당되고 승인되었습니다
- 캠페인이 시작되었습니다
- 초기 성과 모니터링이 진행 중입니다

### 9. 프로젝트 관리

#### 스프린트 계획
**완료 조건:**
- 스프린트 목표가 명확하게 정의되었습니다
- 모든 사용자 스토리가 추정되었습니다
- 팀 용량이 고려되었습니다
- 태스크가 팀원에게 할당되었습니다
- 의존성이 식별되고 해결 계획이 수립되었습니다
- 스프린트 백로그가 확정되었습니다
- 킥오프 미팅이 진행되었습니다
- 일일 스탠드업 일정이 설정되었습니다

#### 릴리스 준비
**완료 조건:**
- 릴리스 노트가 작성되었습니다
- 모든 기능이 통합되고 테스트되었습니다
- 프로덕션 환경이 준비되었습니다
- 롤백 계획이 수립되었습니다
- 모니터링 대시보드가 설정되었습니다
- 이해관계자에게 알림이 전달되었습니다
- 고객 지원 팀이 교육받았습니다
- 배포 체크리스트가 완료되었습니다
- 배포 승인을 받았습니다

### 10. 고객 지원

#### 지원 티켓 해결
**완료 조건:**
- 고객 문의가 완전히 이해되었습니다
- 근본 원인이 파악되었습니다
- 해결책이 제공되고 고객에게 전달되었습니다
- 고객이 해결책을 확인하고 만족했습니다
- 관련 문서가 업데이트되었습니다 (FAQ, 지식베이스)
- 유사한 문제 재발 방지를 위한 조치가 취해졌습니다
- 티켓이 종료되고 분류되었습니다
- 고객 만족도 조사가 전송되었습니다

---

## 산업별 베스트 프랙티스

### 스타트업 환경
**특징:**
- 빠른 이터레이션이 중요
- 리소스 제약이 있음
- MVP 중심 개발

**DoD 조정:**
- 필수 기능에 집중
- 완벽함보다 출시 속도 우선
- 기술 부채를 의식적으로 관리
- 최소한의 문서화로 시작

**예시:**
- 핵심 기능이 작동합니다
- 주요 사용자 시나리오가 테스트되었습니다
- 크리티컬 버그가 없습니다
- 프로덕션에 배포 가능한 상태입니다
- 기술 부채가 백로그에 기록되었습니다

### 엔터프라이즈 환경
**특징:**
- 엄격한 규정 준수 요구
- 복잡한 승인 프로세스
- 높은 품질 기준

**DoD 조정:**
- 상세한 문서화 필수
- 다단계 검증 프로세스
- 보안 및 컴플라이언스 체크
- 변경 관리 절차 준수

**예시:**
- 모든 코드 리뷰가 완료되고 승인되었습니다
- 보안 스캔을 통과했습니다 (SAST, DAST)
- 규정 준수 체크리스트가 완료되었습니다
- 상세한 기술 문서가 작성되었습니다
- 변경 관리 위원회(CAB)의 승인을 받았습니다
- 재해 복구 계획이 업데이트되었습니다
- 감사 로그가 활성화되었습니다

### SaaS 제품
**특징:**
- 지속적인 배포
- 높은 가용성 요구
- 다양한 고객 환경

**DoD 조정:**
- 블루-그린 배포 또는 카나리 배포 사용
- Feature flag로 점진적 롤아웃
- 실시간 모니터링 강화
- 고객 영향도 분석

**예시:**
- Feature flag가 구현되어 있습니다
- 카나리 배포 전략이 준비되었습니다
- 롤백 절차가 테스트되었습니다
- APM 모니터링이 설정되었습니다
- 고객 세그먼트별 영향도가 분석되었습니다
- SLA 모니터링이 활성화되었습니다
- 고객 공지 계획이 수립되었습니다

### E-커머스
**특징:**
- 높은 트래픽과 전환율 중요
- 결제 및 개인정보 보안 중요
- 사용자 경험이 매출에 직접 영향

**DoD 조정:**
- 성능 최적화 필수
- 보안 강화 (PCI-DSS, GDPR)
- A/B 테스트 준비
- 다양한 결제 시나리오 테스트

**예시:**
- 페이지 로딩 시간이 3초 이하입니다
- 모든 결제 플로우가 테스트되었습니다
- 보안 취약점 스캔을 통과했습니다
- 개인정보 처리 방침이 업데이트되었습니다
- A/B 테스트 설정이 완료되었습니다
- 장바구니 이탈률 추적이 구현되었습니다
- 다양한 결제 수단이 검증되었습니다

### 헬스케어/금융
**특징:**
- 엄격한 규제 준수
- 데이터 보안과 프라이버시 최우선
- 감사 추적 필수

**DoD 조정:**
- 규제 준수 검증 강화
- 상세한 감사 로그
- 데이터 암호화 필수
- 접근 제어 엄격히 관리

**예시:**
- HIPAA/GDPR 규정을 준수합니다
- 데이터가 암호화되어 저장됩니다 (at rest, in transit)
- 감사 로그가 생성되고 보존됩니다
- 접근 권한이 역할 기반으로 설정되었습니다
- 데이터 프라이버시 영향 평가(DPIA)가 완료되었습니다
- 보안 담당자의 승인을 받았습니다
- 컴플라이언스 체크리스트가 완료되었습니다
- 데이터 보존 정책이 구현되었습니다

---

## 체크리스트 템플릿

### 공통 DoD 체크리스트

#### 개발 단계
- [ ] 요구사항이 명확하게 이해되었습니다
- [ ] 코드가 작성되고 로컬에서 테스트되었습니다
- [ ] 단위 테스트가 작성되고 통과되었습니다
- [ ] 코드 품질 기준을 충족합니다 (linting, formatting)
- [ ] 코드 리뷰가 완료되고 승인되었습니다
- [ ] 주요 브랜치에 병합되었습니다

#### 테스트 단계
- [ ] 기능 테스트가 완료되었습니다
- [ ] 통합 테스트가 완료되었습니다
- [ ] 회귀 테스트가 완료되었습니다
- [ ] 크로스 브라우저/플랫폼 테스트가 완료되었습니다
- [ ] 성능 테스트를 통과했습니다
- [ ] 보안 테스트가 완료되었습니다
- [ ] 크리티컬 버그가 모두 해결되었습니다

#### 문서화 단계
- [ ] 코드 주석이 작성되었습니다
- [ ] API 문서가 업데이트되었습니다
- [ ] 사용자 문서가 업데이트되었습니다
- [ ] Changelog가 업데이트되었습니다
- [ ] README 파일이 최신 상태입니다

#### 배포 단계
- [ ] 스테이징 환경에 배포되고 검증되었습니다
- [ ] 프로덕션 배포 계획이 수립되었습니다
- [ ] 롤백 계획이 준비되었습니다
- [ ] 모니터링 알람이 설정되었습니다
- [ ] 이해관계자에게 알림이 전달되었습니다
- [ ] 프로덕션에 배포되었습니다
- [ ] 배포 후 검증이 완료되었습니다

#### 종료 단계
- [ ] 태스크가 이해관계자에게 승인되었습니다
- [ ] 관련 티켓/이슈가 종료되었습니다
- [ ] 학습 사항이 문서화되었습니다
- [ ] 후속 태스크가 생성되었습니다 (필요한 경우)

### 우선순위별 DoD 조정

#### P0 (긴급)
**최소 DoD:**
- 핵심 기능이 작동합니다
- 즉시 테스트가 완료되었습니다
- 프로덕션에 배포되었습니다
- 모니터링으로 정상 작동 확인되었습니다

#### P1 (높음)
**표준 DoD:**
- 모든 요구사항이 구현되었습니다
- 테스트가 완료되었습니다
- 코드 리뷰가 승인되었습니다
- 문서가 업데이트되었습니다
- 배포되고 검증되었습니다

#### P2 (중간)
**확장 DoD:**
- 표준 DoD +
- 성능 최적화가 적용되었습니다
- 추가 테스트 커버리지가 확보되었습니다
- 상세한 문서가 작성되었습니다

#### P3 (낮음)
**포괄적 DoD:**
- 확장 DoD +
- 리팩토링이 완료되었습니다
- 기술 부채가 해소되었습니다
- 베스트 프랙티스가 적용되었습니다

---

## 태스크 컨텍스트 기반 DoD 생성 가이드

### 태스크 제목 키워드 분석

#### "구현", "개발", "추가"
→ 기능 개발 DoD 적용
- 요구사항 충족
- 테스트 완료
- 코드 리뷰
- 문서화

#### "수정", "버그", "오류"
→ 버그 수정 DoD 적용
- 근본 원인 파악
- 회귀 테스트
- 검증 완료

#### "분석", "조사", "리서치"
→ 분석 작업 DoD 적용
- 데이터 수집
- 인사이트 도출
- 보고서 작성

#### "디자인", "UI", "UX"
→ 디자인 작업 DoD 적용
- 프로토타입 완성
- 피드백 반영
- 핸드오프 완료

#### "테스트", "QA"
→ 테스트 작업 DoD 적용
- 테스트 케이스 실행
- 결과 문서화
- 버그 리포팅

#### "배포", "릴리스"
→ 배포 작업 DoD 적용
- 환경 준비
- 체크리스트 완료
- 모니터링 설정

### 태그 기반 DoD 커스터마이징

**#frontend**
- UI/UX 가이드라인 준수
- 크로스 브라우저 테스트
- 반응형 검증
- 접근성 확인

**#backend**
- API 문서화
- 보안 검증
- 성능 테스트
- 에러 핸들링

**#mobile**
- iOS/Android 검증
- 다양한 화면 크기 테스트
- 오프라인 동작 확인
- 앱 스토어 가이드라인 준수

**#database**
- 마이그레이션 스크립트
- 백업 계획
- 성능 최적화
- 데이터 무결성 검증

**#security**
- 보안 스캔 통과
- 취약점 분석
- 접근 제어 검증
- 감사 로그 구현

**#performance**
- 성능 벤치마크
- 최적화 적용
- 로딩 시간 측정
- 리소스 사용량 분석

### 팀 역할 기반 DoD

**개발자 관점:**
- 코드 품질
- 테스트 커버리지
- 기술 부채 관리
- 문서화

**QA 관점:**
- 테스트 완료
- 버그 해결
- 품질 기준 충족
- 릴리스 승인

**프로덕트 매니저 관점:**
- 비즈니스 요구사항 충족
- 사용자 가치 제공
- 이해관계자 승인
- 성공 지표 달성

**디자이너 관점:**
- 디자인 일관성
- 사용자 경험
- 접근성
- 브랜드 가이드라인 준수

---

## AI 생성 시 고려사항

### 컨텍스트 파악
1. **태스크 제목**: 어떤 작업인가?
2. **태스크 설명**: 상세 요구사항은?
3. **태그**: 기술 스택, 우선순위, 카테고리
4. **담당자**: 역할과 전문성
5. **프로젝트**: 산업, 규모, 환경

### DoD 개수 조정
- **표준화된 출력**: 모든 태스크에 대해 **7개의 핵심 완료 조건**을 생성합니다.
- **구성**:
  1. 기능/요구사항 충족 여부
  2. 코드 품질 및 리뷰
  3. 테스트 통과 여부
  4. 문서화 상태
  5. 배포 및 환경 설정
  6. 보안 및 성능 (관련된 경우)
  7. 이해관계자 승인

### 구체성 수준
- **명확하고 측정 가능하게** 작성
- **모호한 표현 지양**: "적절히", "잘", "충분히" 등
- **동사 사용**: "~되었습니다", "~완료되었습니다"

### 현실성
- 주어진 시간과 리소스 내에서 달성 가능한 조건
- 팀의 역량과 도구를 고려
- 과도하게 많거나 까다로운 조건은 지양

---

## 자주 사용되는 DoD 문구 라이브러리

### 개발 관련
- "요구사항을 충족하도록 구현되었습니다"
- "코드 리뷰가 완료되고 승인되었습니다"
- "단위 테스트가 작성되고 통과되었습니다"
- "통합 테스트가 완료되었습니다"
- "코딩 표준을 준수합니다"
- "기술 부채가 문서화되었습니다"

### 테스트 관련
- "QA 팀의 검증을 완료했습니다"
- "회귀 테스트를 통과했습니다"
- "크리티컬 버그가 모두 해결되었습니다"
- "테스트 커버리지가 목표치를 달성했습니다"
- "성능 기준을 충족합니다"
- "크로스 브라우저 테스트가 완료되었습니다"

### 배포 관련
- "스테이징 환경에서 검증되었습니다"
- "프로덕션 환경에 배포되었습니다"
- "롤백 계획이 준비되어 있습니다"
- "모니터링 알람이 설정되었습니다"
- "배포 후 정상 작동이 확인되었습니다"
- "이해관계자에게 알림이 전달되었습니다"

### 문서화 관련
- "기술 문서가 작성되고 업데이트되었습니다"
- "API 문서가 최신 상태입니다"
- "사용자 가이드가 제공됩니다"
- "Changelog가 업데이트되었습니다"
- "코드 주석이 작성되었습니다"

### 보안 관련
- "보안 스캔을 통과했습니다"
- "취약점 분석이 완료되었습니다"
- "인증 및 권한 검증이 구현되었습니다"
- "데이터가 암호화되어 저장됩니다"
- "보안 정책을 준수합니다"

### 승인 관련
- "이해관계자의 승인을 받았습니다"
- "프로덕트 오너가 검증했습니다"
- "디자인 팀의 승인을 받았습니다"
- "법무 검토가 완료되었습니다"

---

## 마무리

이 지식 베이스는 다양한 태스크 유형, 산업, 팀 환경에 맞춰 완료 조건(DoD)을 생성하기 위한 포괄적인 가이드입니다. AI는 이 정보를 바탕으로 주어진 태스크의 컨텍스트를 분석하고, 가장 적절하고 실용적인 완료 조건을 제안해야 합니다.

### 핵심 원칙
1. **컨텍스트 이해**: 태스크의 성격, 복잡도, 우선순위를 파악
2. **적절한 상세도**: 너무 많지도, 적지도 않게
3. **측정 가능성**: 완료 여부를 명확히 판단 가능
4. **실행 가능성**: 현실적으로 달성 가능
5. **일관성**: 유사한 태스크에 유사한 기준 적용

이 지식을 활용하여 프로젝트의 품질과 완성도를 높이는 데 기여하시기 바랍니다.`,$j={EXECUTION_PLAN_GUIDE:jj,DOD_GUIDE:Bj};class zj{constructor(){this.cache=new Map}async loadGuide(e){if(this.cache.has(e))return this.cache.get(e);const n=$j[e];return n?(this.cache.set(e,n),n):(console.warn(`⚠️ [KnowledgeBase] Guide not found: ${e}`),"")}extractSection(e,n){const r=new RegExp(`(#{2,3})\\s+${n}[\\s\\S]*?(?=(#{2,3})\\s|$)`,"i"),s=e.match(r);return s?s[0]:""}async getRelevantContext(e,n){return await this.loadGuide(e)||""}}const fE=new zj,jC={PM_EXPERT:`당신은 글로벌 IT 기업에서 10년 이상 경력을 가진 수석 프로젝트 매니저입니다.

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
- 필요시 추가 질문으로 명확성 확보`},Hj=[{task:{title:"사용자 대시보드 성능 개선",type:"기능",description:"현재 대시보드 로딩이 5초 이상 걸리는 문제를 해결하고 1초 이내로 개선"},output:[{title:"성능 병목 지점 분석 및 프로파일링"},{title:"불필요한 API 호출 제거 및 데이터 페칭 최적화"},{title:"컴포넌트 메모이제이션 및 가상화 적용"},{title:"번들 사이즈 분석 및 Code Splitting 구현"},{title:"성능 테스트 및 목표치 달성 검증"}],rationale:"성능 개선은 분석 → 최적화 → 검증 순서로 진행. 측정 가능한 목표(1초) 제시"},{task:{title:"로그인 페이지 인증 버그 수정",type:"버그",description:"특정 이메일 형식에서 로그인이 실패하는 이슈"},output:[{title:"버그 재현 및 영향 범위 확인"},{title:"인증 로직 코드 분석 및 원인 파악"},{title:"이메일 검증 로직 수정 및 로컬 테스트"},{title:"회귀 테스트 및 QA 검증"}],rationale:"버그 수정은 재현 → 원인 파악 → 수정 → 검증 흐름. 4단계로 간결하게"}],Gj=[{task:{title:"결제 모듈 API 개발",type:"백엔드",description:"신용카드 및 계좌이체 결제 처리 API 구현"},output:["REST API 엔드포인트가 설계 명세에 따라 구현되었습니다","단위 테스트 및 통합 테스트가 작성되고 모두 통과했습니다","PCI-DSS 보안 요구사항을 충족합니다","API 문서가 Swagger로 작성되고 개발자 포털에 게시되었습니다","부하 테스트를 통해 초당 100건 이상 처리 가능함을 확인했습니다","에러 핸들링 및 트랜잭션 롤백이 적절히 구현되었습니다","PO 및 보안팀의 최종 승인을 받았습니다"],rationale:"결제 기능은 보안이 중요. PCI-DSS 및 부하 테스트 포함"}];class Rh{constructor(){this.sections=[]}addSystemPrompt(e){return this.sections.push(`# 시스템 역할 (System Role)

${jC[e]}`),this}async addKnowledgeBase(e,n){const r=n?await fE.getRelevantContext(e,n):await fE.loadGuide(e);return r&&this.sections.push(`# 지식 베이스 (Knowledge Base)

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

`)}getSize(){const e=this.build();return{chars:e.length,estimatedTokens:Math.ceil(e.length/4)}}}async function qj(t){const e=new Rh;return e.addSystemPrompt("PM_EXPERT"),await e.addKnowledgeBase("EXECUTION_PLAN_GUIDE",t.type||"일반"),e.addFewShotExamples(Hj.filter(n=>!t.type||n.task.type===t.type).slice(0,2),"execution").addConstraints(["4-6개의 실행 가능한 단계로 분해해야 합니다","각 단계는 동사로 시작하는 구체적인 액션이어야 합니다","논리적 순서로 배열해야 합니다 (계획 → 설계 → 구현 → 검증 → 배포)","지식 베이스의 패턴을 참고하되, 업무의 특성을 반영해야 합니다","한국어로 작성해야 합니다"]).addUserRequest(t,"위 업무를 실행 가능한 단계로 분해해주세요.").addOutputFormat('다음 JSON 배열 형식으로 출력하세요:\n```json\n[{"title": "단계1"}, {"title": "단계2"}, ...]\n```'),e.build()}async function Wj(t){const e=new Rh;return e.addSystemPrompt("QA_EXPERT"),await e.addKnowledgeBase("DOD_GUIDE",t.type||"일반"),e.addFewShotExamples(Gj.filter(n=>!t.type||n.task.type===t.type).slice(0,1),"dod").addConstraints(["**반드시 정확히 7개의 항목**으로 구성해야 합니다 (7개 미만이나 초과 절대 불가)",'각 항목은 "~되었습니다" 형태의 완료형 문장이어야 합니다',"개발, 테스트, 문서화, 배포, 보안, 성능, 승인 관점을 골고루 포함해야 합니다","측정 가능하고 검증 가능한 조건이어야 합니다","지식 베이스의 베스트 프랙티스를 참고해야 합니다","한국어로 작성해야 합니다"]).addUserRequest(t,"위 업무의 완료 조건(Definition of Done)을 생성해주세요.").addOutputFormat('다음 JSON 배열 형식으로 출력하세요:\n```json\n["조건1", "조건2", "조건3", "조건4", "조건5", "조건6", "조건7"]\n```'),e.build()}async function Kj(t){const e=new Rh;return e.addSystemPrompt("TECH_LEAD").addConstraints(["마크다운 형식으로 작성해야 합니다","코드 예시는 TypeScript/React를 사용해야 합니다","실용적이고 구현 가능한 솔루션을 제시해야 합니다","아키텍처 다이어그램이 필요한 경우 텍스트로 설명해야 합니다"]).addUserRequest(t,"위 업무를 구현하기 위한 기술적 솔루션 초안을 작성해주세요.").addOutputFormat(`마크다운 형식으로 다음 섹션을 포함하세요:
- 구현 접근 방식
- 주요 기술 스택
- 코드 예시
- 고려사항`),e.build()}async function Qj(t){const e=new Rh;return e.addSystemPrompt("TECH_LEAD").addConstraints(["공식 문서나 신뢰할 수 있는 출처를 우선해야 합니다","실무에 바로 적용 가능한 자료를 추천해야 합니다","최신 기술 트렌드를 반영해야 합니다","정확히 3개의 자료를 추천해야 합니다"]).addUserRequest(t,"위 업무와 관련된 학습 자료를 추천해주세요.").addOutputFormat('다음 JSON 배열 형식으로 출력하세요:\n```json\n[{"title": "자료명", "url": "링크", "description": "추천 이유"}]\n```'),e.build()}function Yj(t){return`${jC.ASSISTANT}

[현재 업무 컨텍스트]
제목: ${t.title}
설명: ${t.description||"(설명 없음)"}
타입: ${t.type||"일반"}
우선순위: ${t.priority||"MEDIUM"}

[지침]
- 위 업무와 관련된 질문에 정확하고 유용하게 답변하세요
- 필요시 업무 개선 제안을 제공하세요
- 친절하고 전문적인 톤을 유지하세요
- 한국어로 답변하세요`}function Xj(t,e=6e3){const n=Math.ceil(t.length/4);if(n<=e)return t;console.warn(`⚠️ 프롬프트 크기 초과: ${n} tokens (최대: ${e})`);const r=t.split("# 지식 베이스");if(r.length>1){const s=r[1].split(`

# `)[0],i=s.substring(0,Math.floor(s.length*.6));return r[0]+`# 지식 베이스
`+i+`

# `+r[1].split(`

# `).slice(1).join(`

# `)}return t}const Jj="AIzaSyAZfKtZGcFEcUsOg-s3kXSTSeTp40pfUoI",Jg=new Fj(Jj);async function _o(t,e=Un.MODEL_FAST,n){try{const r=Xj(t,8e3),s={chars:r.length,tokens:Math.ceil(r.length/4)};return console.log(`📊 [Prompt Size] ${s.chars} chars (~${s.tokens} tokens)`),(await(await Jg.getGenerativeModel({model:e,generationConfig:{temperature:(n==null?void 0:n.temperature)??.7,maxOutputTokens:(n==null?void 0:n.maxTokens)??Un.MAX_TOKENS}}).generateContent(r)).response).text()}catch(r){console.error("❌ [Gemini API Error]",r);let s=r.message||"알 수 없는 오류";throw s.includes("403")||s.includes("BLOCKED")?s="API 호출이 거부되었습니다. (403 Forbidden). 해당 API Key에 Gemini API 사용 권한이 있는지 확인해주세요.":s.includes("404")?s=`모델을 찾을 수 없습니다 (${e}). 모델명을 확인해주세요.`:s.includes("429")&&(s="요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요."),new Error(`AI 생성 실패: ${s}`)}}function xh(t){try{let e=t.replace(/```json\n?/g,"").replace(/```\n?/g,"");const n=e.indexOf("{"),r=e.indexOf("[");let s=-1;if(n!==-1&&r!==-1?s=Math.min(n,r):n!==-1?s=n:r!==-1&&(s=r),s!==-1){const i=e.lastIndexOf("}"),o=e.lastIndexOf("]"),a=Math.max(i,o);a!==-1&&a>s&&(e=e.substring(s,a+1))}return JSON.parse(e.trim())}catch(e){throw console.error("❌ [JSON Parse Error]",e),console.log("Raw response:",t),new Error("AI 응답을 JSON으로 파싱할 수 없습니다")}}function Zj(t,e,n){if(!Array.isArray(t))return console.warn(`⚠️ [Type Error] Expected array, got ${typeof t}`),Array(e).fill(n);if(t.length===e)return t;if(t.length<e)for(;t.length<e;)t.push(n);else t=t.slice(0,e);return t}async function v6(t){const e=`
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
  `,n=await _o(e,Un.MODEL_SMART);return xh(n)}async function e6(t){const e=await qj(t),n=await _o(e,Un.MODEL_SMART,{temperature:.7,maxTokens:1e3});return xh(n).map((s,i)=>({id:`ep-${Date.now()}-${i}`,title:s.title||s,completed:!1}))}async function t6(t){const e=await Wj(t),n=await _o(e,Un.MODEL_SMART,{temperature:.5,maxTokens:1e3});let r=xh(n);return Array.isArray(r)||(console.warn("AI response is not an array, attempting to fix",r),r=[]),r.map((s,i)=>{const o=typeof s=="string"?s:s.content||s.text||s.description||"내용 없음";return{id:`ac-${Date.now()}-${i}`,content:o,checked:!1}})}async function n6(t){const e=await Kj(t);return await _o(e,Un.MODEL_SMART,{temperature:.8,maxTokens:2e3})}async function r6(t){const e=await Qj(t),n=await _o(e,Un.MODEL_FAST,{temperature:.6,maxTokens:1e3}),r=xh(n);return Zj(r,3,{title:"관련 기술 문서",url:"https://developer.mozilla.org",description:"기본 웹 기술 참고 자료"})}async function w6(t,e,n){const r=Yj(n);return(await(await Jg.getGenerativeModel({model:Un.MODEL_FAST}).startChat({history:[{role:"user",parts:[{text:r}]},{role:"model",parts:[{text:"네, 해당 업무에 대해 도와드리겠습니다. 무엇이 궁금하신가요?"}]},...t]}).sendMessage(e)).response).text()}async function E6(t,e){const n=`
# 시스템 역할 (System Role)
당신은 데이터 기반으로 팀의 성과를 분석하는 AI 전문가입니다.

# 데이터 분석 (Data Analysis)
다음 프로젝트 데이터를 분석하여, 팀 리더에게 제공할 **주간 핵심 인사이트**를 2~3문장으로 요약해 주세요.

## 팀 통계
- 전체 업무 수: ${e.total}
- 완료율: ${e.completionRate}%
- 진행 중 업무: ${e.inProgress}
- 마감 기한 초과: ${e.overdue}
- 업무가 가장 많은 팀원: ${e.busiestMember}

# 출력 형식 (Output Format)
일반 텍스트로 2-3문장의 인사이트를 제공하세요.
  `;return(await _o(n,Un.MODEL_FAST,{temperature:.7,maxTokens:500})).trim()}async function T6(t,e,n){const s=`
# Role: Nexus AI Project Manager
당신은 사용자의 전체 프로젝트와 업무(Task) 상황을 꿰뚫어 보고 있는 유능한 AI PM입니다.

# Context (User's Tasks)
현재 사용자가 관리 중인 업무 목록은 다음과 같습니다.
특히 **[✅우선/달성됨]** 표시가 있는 완료 조건은 사용자가 이미 확인했거나 가장 중요하게 생각하는 기준이므로,
답변 시 이를 최우선으로 고려하고 반영해야 합니다.

${n.map((i,o)=>{var h,f,p,g,T,A;const a=(f=(h=i.aiAnalysis)==null?void 0:h.acceptanceCriteria)==null?void 0:f.filter(N=>N.checked).map(N=>`- [✅우선/달성됨] ${N.content}`).join(`
      `),u=(g=(p=i.aiAnalysis)==null?void 0:p.acceptanceCriteria)==null?void 0:g.filter(N=>!N.checked).map(N=>`- ${N.content}`).join(`
      `),c=(A=(T=i.aiAnalysis)==null?void 0:T.executionPlan)==null?void 0:A.map(N=>`- ${N.title} (${N.completed?"완료":"진행전"})`).join(`
      `);return`
    [TASK #${o+1}] ${i.title}
    - 상태: ${i.status} | 우선순위: ${i.priority} | 마감일: ${i.dueDate}
    - 담당자: ${i.assigneeName||"미지정"}
    - 설명: ${i.description}
    - 완료 조건 (DoD) - 체크박스(✅) 항목 우선 반영:
      ${a||""}
      ${u||""}
    - 실행 계획:
      ${c||"(없음)"}
    `}).join(`
----------------------------------
`)}

# Instruction
위 컨텍스트를 바탕으로 사용자의 질문에 답변하세요.
- 사용자의 질문이 특정 업무와 관련 있다면, 해당 업무의 상태, 완료 조건(특히 체크된 항목), 실행 계획을 구체적으로 언급하며 조언하세요.
- 업무 간의 연관성이나 일정 충돌 등이 보이면 선제적으로 경고하거나 제안하세요.
- 답변은 전문적이고 친절한 어조로 작성하세요.
  `;try{return(await(await Jg.getGenerativeModel({model:Un.MODEL_SMART}).startChat({history:[{role:"user",parts:[{text:s}]},{role:"model",parts:[{text:"네, 사용자의 모든 업무 상황과 우선순위(체크된 완료조건 포함)를 숙지했습니다. 어떤 도움이 필요하신가요?"}]},...t]}).sendMessage(e)).response).text()}catch(i){throw console.error("❌ Chat with Task Context Error:",i),new Error("채팅 서비스 연결 실패: "+i.message)}}const Ko=({title:t,subtitle:e,user:n,onLogout:r,onNavigateProfile:s,children:i})=>{var o;return R.jsxs("header",{className:"h-20 flex items-center justify-between px-8 z-10 shrink-0 backdrop-blur-sm bg-white/50 sticky top-0",children:[R.jsxs("div",{children:[R.jsx("h1",{className:"text-2xl font-bold text-gray-900 tracking-tight",children:t}),R.jsx("p",{className:"text-sm text-gray-500 mt-1",children:e})]}),R.jsxs("div",{className:"flex items-center gap-4",children:[i,R.jsxs("div",{className:"flex items-center gap-3 pl-4 border-l border-gray-200",children:[R.jsxs("button",{onClick:s,className:"group flex items-center gap-2 outline-none",children:[n!=null&&n.photoURL?R.jsx("img",{src:n.photoURL,alt:n.displayName||"User",className:"w-10 h-10 rounded-full border border-gray-200 group-hover:ring-2 ring-gray-200 transition-all object-cover"}):R.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-200 transition-colors",children:((o=n==null?void 0:n.email)==null?void 0:o.charAt(0).toUpperCase())||"U"}),R.jsxs("div",{className:"text-left hidden md:block",children:[R.jsx("p",{className:"text-sm font-bold text-gray-700 leading-none",children:(n==null?void 0:n.displayName)||"User"}),R.jsx("p",{className:"text-[10px] text-gray-400 mt-1",children:"프로필 관리"})]})]}),R.jsx("button",{onClick:r,className:"text-gray-400 hover:text-red-600 transition-colors p-2 ml-2",title:"로그아웃",children:R.jsx(nk,{className:"w-5 h-5"})})]})]})]})},s6=$.lazy(()=>hs(()=>import("./Kanban-CbXN15Ei.js"),__vite__mapDeps([0,1,2,3,4])).then(t=>({default:t.KanbanBoard}))),i6=$.lazy(()=>hs(()=>import("./AIModal-xkXPB8Y7.js"),__vite__mapDeps([5,4,6,7,2,8,3])).then(t=>({default:t.AIModal}))),o6=$.lazy(()=>hs(()=>import("./GeminiPage-BCEvdWRP.js"),__vite__mapDeps([9,10,6,3,2])).then(t=>({default:t.GeminiPage}))),a6=$.lazy(()=>hs(()=>import("./SettingsPage-CW-TXbR4.js"),__vite__mapDeps([11,8,10])).then(t=>({default:t.SettingsPage}))),l6=$.lazy(()=>hs(()=>import("./Insights--2c8H22A.js"),__vite__mapDeps([])).then(t=>({default:t.Insights}))),u6=$.lazy(()=>hs(()=>import("./ArchivePage-UUzoF23e.js"),__vite__mapDeps([12,1,2,3,7])).then(t=>({default:t.ArchivePage}))),c6=$.lazy(()=>hs(()=>import("./ProfilePage-CfWaBLm_.js"),__vite__mapDeps([13,4,2])).then(t=>({default:t.ProfilePage}))),h6=$.lazy(()=>hs(()=>import("./GoogleProfileModal-Dkt4_j7x.js"),__vite__mapDeps([])).then(t=>({default:t.GoogleProfileModal})));function d6(){const[t,e]=$.useState(()=>typeof window<"u"?!new URLSearchParams(window.location.search).has("view"):!0),[n,r]=$.useState(()=>{if(typeof window<"u"){const U=new URLSearchParams(window.location.search).get("view");if(U&&["BOARD","INSIGHT","ARCHIVE","PROFILE","GEMINI","SETTINGS"].includes(U))return U}return"BOARD"}),[s,i]=$.useState([]),[o,a]=$.useState(null),[u,c]=$.useState(!1),[h,f]=$.useState(null),[p,g]=$.useState(null),[T,A]=$.useState(!0),[N,I]=$.useState(!1),[v,w]=$.useState(!1),k=j=>{r(j);const U=new URL(window.location.href);U.searchParams.set("view",j),window.history.pushState({},"",U)};$.useEffect(()=>{const j=()=>{const G=new URLSearchParams(window.location.search).get("view");G&&["BOARD","INSIGHT","ARCHIVE","PROFILE","GEMINI","SETTINGS"].includes(G)?(r(G),e(!1)):G?r("BOARD"):e(!0)};return window.addEventListener("popstate",j),()=>window.removeEventListener("popstate",j)},[]),$.useEffect(()=>{const j=mV(Yt,async U=>{g(U),U?await V(U.uid):(I(!1),A(!1))});return()=>j()},[]);const V=async j=>{w(!0);try{const U=await Kr.getUserProfile(j);U&&U.name?(I(!0),E()):I(!1)}catch(U){console.error("Profile check failed",U),I(!1)}finally{w(!1),A(!1)}},F=()=>{I(!0),E()},E=async()=>{try{const j=await Rt.getAllTasks();i(j)}catch(j){console.error("Failed to load tasks",j)}},y=async()=>{try{await Kr.logout(),e(!0);const j=new URL(window.location.href);j.searchParams.delete("view"),window.history.pushState({},"",j)}catch(j){console.error("Logout failed",j)}},S=$.useCallback(j=>{a(j),f(null),c(!0)},[]),P=async j=>{if(h)f(j);else{i(U=>U.map(G=>G.id===j.id?j:G)),a(j);try{await Rt.updateTask(j)}catch(U){console.error("Failed to update task",U),alert("수정사항 저장에 실패했습니다."),p&&E()}}},x=async(j,U)=>{i(G=>G.map(te=>te.id===j?{...te,status:U}:te));try{await Rt.updateStatus(j,U)}catch(G){console.error("Failed to update status",G),alert("상태 변경에 실패했습니다."),p&&E()}},D=async j=>{if(!confirm("이 업무를 보관함으로 이동하시겠습니까?"))return;const U=s.find(te=>te.id===j);if(!U)return;const G={...U,archived:!0,originalStatus:U.status,status:Nt.ARCHIVED};i(te=>te.map(he=>he.id===j?G:he));try{await Rt.updateTask(G)}catch(te){console.error("Failed to archive task",te),alert("보관함 이동 실패"),E()}},C=async j=>{if(!confirm(`완료된 ${j.length}개의 업무를 모두 보관함으로 이동하시겠습니까?`))return;const U=j.map(G=>({...G,archived:!0,originalStatus:G.status,status:Nt.ARCHIVED}));i(G=>G.map(te=>U.find(et=>et.id===te.id)||te));try{await Promise.all(U.map(G=>Rt.updateTask(G)))}catch(G){console.error("Failed to bulk archive",G),alert("일괄 보관 실패"),E()}},ue=async j=>{if(!confirm("이 업무를 다시 보드로 복구하시겠습니까?"))return;const U=s.find(te=>te.id===j);if(!U)return;const G={...U,archived:!1,inTrash:!1,status:U.originalStatus||Nt.DONE};i(te=>te.map(he=>he.id===j?G:he));try{await Rt.updateTask(G)}catch(te){console.error("Failed to restore task",te),alert("복구 실패"),E()}},He=async j=>{const U=s.find(te=>te.id===j);if(!U)return;const G={...U,inTrash:!0,originalStatus:U.status,status:Nt.TRASH};i(te=>te.map(he=>he.id===j?G:he)),(o==null?void 0:o.id)===j&&(c(!1),a(null));try{await Rt.updateTask(G)}catch(te){console.error("Failed to move to trash",te),alert("휴지통 이동 실패"),E()}},_e=async j=>{i(U=>U.filter(G=>G.id!==j));try{await Rt.deleteTask(j)}catch(U){console.error("Failed to delete task",U),alert("영구 삭제 실패"),E()}},at=async()=>{if(!confirm("휴지통을 비우시겠습니까? 이 작업은 되돌릴 수 없습니다."))return;const j=s.filter(U=>U.inTrash);i(U=>U.filter(G=>!G.inTrash));try{await Promise.all(j.map(U=>Rt.deleteTask(U.id)))}catch(U){console.error("Failed to empty trash",U),alert("휴지통 비우기 실패"),E()}},H=async()=>{if(!p)return;let j={name:p.displayName||"User",avatar:p.photoURL||void 0};const U={id:`t${Date.now()}`,title:"새로운 업무 요청",description:"",product:"일반",type:"기타",priority:ki.MEDIUM,status:Nt.REQUESTED,dueDate:new Date().toISOString(),ownerUid:p.uid,ownerEmail:p.email||void 0,assigneeId:p.uid,assigneeName:j.name,assigneeAvatar:j.avatar,requesterId:p.uid,subtasks:[],createdAt:Date.now(),updatedAt:Date.now(),userId:p.uid,archived:!1,inTrash:!1};f(U),a(null),c(!0)},Q=async j=>{try{const U={...j,aiStatus:"GENERATING"},G=await Rt.createTask(U);i(te=>[...te,G]),c(!1),f(null),(async()=>{try{let te={lastUpdated:Date.now(),executionPlan:[],acceptanceCriteria:[],solutionDraft:"",learningResources:[]};const he=async re=>{te={...te,...re};const Ge={...G,aiAnalysis:te};await Rt.updateTask(Ge),i(jn=>jn.map(Bn=>Bn.id===G.id?Ge:Bn))};try{const re=await e6(G);await he({executionPlan:re.map((Ge,jn)=>({id:`ep-${Date.now()}-${jn}`,title:Ge.title,completed:!1}))})}catch(re){console.error("Strategy Gen Failed",re)}try{const re=await t6(G);await he({acceptanceCriteria:re})}catch(re){console.error("DoD Gen Failed",re)}try{const re=await n6(G);await he({solutionDraft:re})}catch(re){console.error("Solution Gen Failed",re)}try{const re=await r6(G);await he({learningResources:re})}catch(re){console.error("Resources Gen Failed",re)}const et={...G,aiAnalysis:te,aiStatus:"COMPLETED"};await Rt.updateTask(et),i(re=>re.map(Ge=>Ge.id===G.id?et:Ge))}catch(te){console.error("Background AI Analysis Failed",te);const he={...G,aiStatus:"FAILED"};await Rt.updateTask(he),i(et=>et.map(re=>re.id===G.id?he:re))}})()}catch(U){console.error("Failed to create task",U),alert(`저장 실패: ${U.message}`)}};return T||v?R.jsx("div",{className:"flex h-screen w-screen items-center justify-center bg-gray-50",children:R.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"})}):t?R.jsx(uj,{onStart:()=>{e(!1),k("BOARD")}}):p?N?R.jsxs(ik,{currentView:n,onNavigate:k,children:[(()=>{switch(n){case"INSIGHT":return R.jsxs("div",{className:"flex flex-col h-full",children:[R.jsx(Ko,{title:"프로젝트 인사이트",subtitle:"실시간 데이터 기반으로 팀의 업무 효율을 분석합니다.",user:p,onLogout:y,onNavigateProfile:()=>k("PROFILE")}),R.jsx($.Suspense,{fallback:R.jsx("div",{className:"p-8",children:"Loading Insights..."}),children:R.jsx(l6,{tasks:s})})]});case"ARCHIVE":return R.jsx($.Suspense,{fallback:R.jsx("div",{className:"p-8",children:"Loading Archive..."}),children:R.jsx(u6,{tasks:s,onRestoreTask:ue,onDeleteTask:_e,onEmptyTrash:at,onTaskClick:S,currentUser:p})});case"PROFILE":return R.jsxs("div",{className:"flex flex-col h-full",children:[R.jsx(Ko,{title:"프로필 관리",subtitle:"개인 정보 및 계정 설정을 관리하세요.",user:p,onLogout:y,onNavigateProfile:()=>k("PROFILE")}),R.jsx($.Suspense,{fallback:R.jsx("div",{className:"p-8",children:"Loading Profile..."}),children:R.jsx(c6,{currentUser:p})})]});case"BOARD":return R.jsxs(R.Fragment,{children:[R.jsx(Ko,{title:"프로젝트 보드",subtitle:"팀의 업무 흐름을 AI와 함께 최적화하세요.",user:p,onLogout:y,onNavigateProfile:()=>k("PROFILE"),children:R.jsxs("button",{onClick:H,className:"flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg active:scale-95",children:[R.jsx(rk,{className:"w-4 h-4"}),R.jsx("span",{children:"새 요청 만들기"})]})}),R.jsx("div",{className:"flex-1 overflow-x-auto overflow-y-hidden p-8 pt-4",children:R.jsx($.Suspense,{fallback:R.jsx("div",{className:"p-8",children:"Loading Board..."}),children:R.jsx(s6,{tasks:s,onTaskClick:S,onStatusChange:x,onDeleteTask:He,onArchiveTask:D,onArchiveAll:C,currentUser:p})})})]});case"GEMINI":return R.jsxs("div",{className:"flex flex-col h-full",children:[R.jsx(Ko,{title:"Gemini Pro",subtitle:"AI와 대화하며 업무 효율을 높이세요.",user:p,onLogout:y,onNavigateProfile:()=>k("PROFILE")}),R.jsx($.Suspense,{fallback:R.jsx("div",{className:"p-8",children:"Loading Gemini..."}),children:R.jsx(o6,{tasks:s,currentUser:p})})]});case"SETTINGS":return R.jsxs("div",{className:"flex flex-col h-full",children:[R.jsx(Ko,{title:"환경 설정",subtitle:"앱의 기본 설정을 변경합니다.",user:p,onLogout:y,onNavigateProfile:()=>k("PROFILE")}),R.jsx($.Suspense,{fallback:R.jsx("div",{className:"p-8",children:"Loading Settings..."}),children:R.jsx(a6,{})})]});default:return null}})(),(o||h)&&R.jsx($.Suspense,{fallback:null,children:R.jsx(i6,{task:o||h,isOpen:u,onClose:()=>{c(!1),f(null)},onUpdateTask:P,onCreateTask:h?Q:void 0,onDeleteTask:He})})]}):R.jsx($.Suspense,{fallback:R.jsx("div",{children:"Loading..."}),children:R.jsx(h6,{user:p,onClose:F})}):R.jsx(qM,{})}const BC=document.getElementById("root");if(!BC)throw new Error("Could not find root element to mount to");const f6=Yd.createRoot(BC);f6.render(R.jsx(Lc.StrictMode,{children:R.jsx(d6,{})}));export{qx as A,Qx as B,_6 as K,Zx as L,ki as P,iv as S,Nt as T,y6 as U,PI as X,ek as a,w6 as b,vt as c,v6 as d,t6 as e,n6 as f,e6 as g,r6 as h,g6 as i,R as j,sk as k,E6 as l,Kr as m,tk as n,$ as r,T6 as s,Rt as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Kanban-CbXN15Ei.js","assets/TaskCard-DLrV7_Sd.js","assets/trash-2-B4FIQgNi.js","assets/calendar-BgtCyN6k.js","assets/user-DMgfVlDd.js","assets/AIModal-xkXPB8Y7.js","assets/send--HtAELx-.js","assets/rotate-ccw-BM5tNFyR.js","assets/code-2-DM8PZZ1B.js","assets/GeminiPage-BCEvdWRP.js","assets/chevron-down-STyv7Nyb.js","assets/SettingsPage-CW-TXbR4.js","assets/ArchivePage-UUzoF23e.js","assets/ProfilePage-CfWaBLm_.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}