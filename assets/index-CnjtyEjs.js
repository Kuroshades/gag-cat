(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Fo(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const Tt={},jn=[],ue=()=>{},td=()=>!1,ei=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Lo=e=>e.startsWith("onUpdate:"),jt=Object.assign,Uo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ed=Object.prototype.hasOwnProperty,ut=(e,t)=>ed.call(e,t),rt=Array.isArray,$n=e=>ni(e)==="[object Map]",Zc=e=>ni(e)==="[object Set]",it=e=>typeof e=="function",Mt=e=>typeof e=="string",en=e=>typeof e=="symbol",bt=e=>e!==null&&typeof e=="object",tu=e=>(bt(e)||it(e))&&it(e.then)&&it(e.catch),eu=Object.prototype.toString,ni=e=>eu.call(e),nd=e=>ni(e).slice(8,-1),nu=e=>ni(e)==="[object Object]",Bo=e=>Mt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Sr=Fo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ri=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},rd=/-(\w)/g,Kn=ri(e=>e.replace(rd,(t,n)=>n?n.toUpperCase():"")),sd=/\B([A-Z])/g,er=ri(e=>e.replace(sd,"-$1").toLowerCase()),ru=ri(e=>e.charAt(0).toUpperCase()+e.slice(1)),ji=ri(e=>e?`on${ru(e)}`:""),Ye=(e,t)=>!Object.is(e,t),$i=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},su=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},id=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let bl;const iu=()=>bl||(bl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jo(e){if(rt(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Mt(r)?cd(r):jo(r);if(s)for(const o in s)t[o]=s[o]}return t}else if(Mt(e)||bt(e))return e}const od=/;(?![^(]*\))/g,ad=/:([^]+)/,ld=/\/\*[^]*?\*\//g;function cd(e){const t={};return e.replace(ld,"").split(od).forEach(n=>{if(n){const r=n.split(ad);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function si(e){let t="";if(Mt(e))t=e;else if(rt(e))for(let n=0;n<e.length;n++){const r=si(e[n]);r&&(t+=r+" ")}else if(bt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ud="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hd=Fo(ud);function ou(e){return!!e||e===""}const au=e=>!!(e&&e.__v_isRef===!0),lu=e=>Mt(e)?e:e==null?"":rt(e)||bt(e)&&(e.toString===eu||!it(e.toString))?au(e)?lu(e.value):JSON.stringify(e,cu,2):String(e),cu=(e,t)=>au(t)?cu(e,t.value):$n(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],o)=>(n[qi(r,o)+" =>"]=s,n),{})}:Zc(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>qi(n))}:en(t)?qi(t):bt(t)&&!rt(t)&&!nu(t)?String(t):t,qi=(e,t="")=>{var n;return en(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pe;class fd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=pe,!t&&pe&&(this.index=(pe.scopes||(pe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=pe;try{return pe=this,t()}finally{pe=n}}}on(){pe=this}off(){pe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function dd(e,t=pe){t&&t.active&&t.effects.push(e)}function pd(){return pe}let En;class $o{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,dd(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,nn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(gd(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),rn()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Ke,n=En;try{return Ke=!0,En=this,this._runnings++,Pl(this),this.fn()}finally{Sl(this),this._runnings--,En=n,Ke=t}}stop(){this.active&&(Pl(this),Sl(this),this.onStop&&this.onStop(),this.active=!1)}}function gd(e){return e.value}function Pl(e){e._trackId++,e._depsLength=0}function Sl(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)uu(e.deps[t],e);e.deps.length=e._depsLength}}function uu(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Ke=!0,io=0;const hu=[];function nn(){hu.push(Ke),Ke=!1}function rn(){const e=hu.pop();Ke=e===void 0?!0:e}function qo(){io++}function zo(){for(io--;!io&&oo.length;)oo.shift()()}function fu(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&uu(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const oo=[];function du(e,t,n){qo();for(const r of e.keys()){let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&oo.push(r.scheduler)))}zo()}const pu=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},ao=new WeakMap,vn=Symbol(""),lo=Symbol("");function ee(e,t,n){if(Ke&&En){let r=ao.get(e);r||ao.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=pu(()=>r.delete(n))),fu(En,s)}}function Ne(e,t,n,r,s,o){const a=ao.get(e);if(!a)return;let c=[];if(t==="clear")c=[...a.values()];else if(n==="length"&&rt(e)){const u=Number(r);a.forEach((f,p)=>{(p==="length"||!en(p)&&p>=u)&&c.push(f)})}else switch(n!==void 0&&c.push(a.get(n)),t){case"add":rt(e)?Bo(n)&&c.push(a.get("length")):(c.push(a.get(vn)),$n(e)&&c.push(a.get(lo)));break;case"delete":rt(e)||(c.push(a.get(vn)),$n(e)&&c.push(a.get(lo)));break;case"set":$n(e)&&c.push(a.get(vn));break}qo();for(const u of c)u&&du(u,4);zo()}const md=Fo("__proto__,__v_isRef,__isVue"),gu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(en)),Cl=_d();function _d(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=mt(this);for(let o=0,a=this.length;o<a;o++)ee(r,"get",o+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(mt)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){nn(),qo();const r=mt(this)[t].apply(this,n);return zo(),rn(),r}}),e}function yd(e){en(e)||(e=String(e));const t=mt(this);return ee(t,"has",e),t.hasOwnProperty(e)}class mu{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?Dd:vu:o?Eu:yu).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=rt(t);if(!s){if(a&&ut(Cl,n))return Reflect.get(Cl,n,r);if(n==="hasOwnProperty")return yd}const c=Reflect.get(t,n,r);return(en(n)?gu.has(n):md(n))||(s||ee(t,"get",n),o)?c:ne(c)?a&&Bo(n)?c:c.value:bt(c)?s?Tu(c):Go(c):c}}class _u extends mu{constructor(t=!1){super(!1,t)}set(t,n,r,s){let o=t[n];if(!this._isShallow){const u=Fr(o);if(!Bs(r)&&!Fr(r)&&(o=mt(o),r=mt(r)),!rt(t)&&ne(o)&&!ne(r))return u?!1:(o.value=r,!0)}const a=rt(t)&&Bo(n)?Number(n)<t.length:ut(t,n),c=Reflect.set(t,n,r,s);return t===mt(s)&&(a?Ye(r,o)&&Ne(t,"set",n,r):Ne(t,"add",n,r)),c}deleteProperty(t,n){const r=ut(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Ne(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!en(n)||!gu.has(n))&&ee(t,"has",n),r}ownKeys(t){return ee(t,"iterate",rt(t)?"length":vn),Reflect.ownKeys(t)}}class Ed extends mu{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const vd=new _u,Td=new Ed,Id=new _u(!0);const Ho=e=>e,ii=e=>Reflect.getPrototypeOf(e);function Ts(e,t,n=!1,r=!1){e=e.__v_raw;const s=mt(e),o=mt(t);n||(Ye(t,o)&&ee(s,"get",t),ee(s,"get",o));const{has:a}=ii(s),c=r?Ho:n?Qo:Lr;if(a.call(s,t))return c(e.get(t));if(a.call(s,o))return c(e.get(o));e!==s&&e.get(t)}function Is(e,t=!1){const n=this.__v_raw,r=mt(n),s=mt(e);return t||(Ye(e,s)&&ee(r,"has",e),ee(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function ws(e,t=!1){return e=e.__v_raw,!t&&ee(mt(e),"iterate",vn),Reflect.get(e,"size",e)}function Vl(e){e=mt(e);const t=mt(this);return ii(t).has.call(t,e)||(t.add(e),Ne(t,"add",e,e)),this}function Dl(e,t){t=mt(t);const n=mt(this),{has:r,get:s}=ii(n);let o=r.call(n,e);o||(e=mt(e),o=r.call(n,e));const a=s.call(n,e);return n.set(e,t),o?Ye(t,a)&&Ne(n,"set",e,t):Ne(n,"add",e,t),this}function xl(e){const t=mt(this),{has:n,get:r}=ii(t);let s=n.call(t,e);s||(e=mt(e),s=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return s&&Ne(t,"delete",e,void 0),o}function Nl(){const e=mt(this),t=e.size!==0,n=e.clear();return t&&Ne(e,"clear",void 0,void 0),n}function As(e,t){return function(r,s){const o=this,a=o.__v_raw,c=mt(a),u=t?Ho:e?Qo:Lr;return!e&&ee(c,"iterate",vn),a.forEach((f,p)=>r.call(s,u(f),u(p),o))}}function Rs(e,t,n){return function(...r){const s=this.__v_raw,o=mt(s),a=$n(o),c=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,f=s[e](...r),p=n?Ho:t?Qo:Lr;return!t&&ee(o,"iterate",u?lo:vn),{next(){const{value:E,done:T}=f.next();return T?{value:E,done:T}:{value:c?[p(E[0]),p(E[1])]:p(E),done:T}},[Symbol.iterator](){return this}}}}function $e(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function wd(){const e={get(o){return Ts(this,o)},get size(){return ws(this)},has:Is,add:Vl,set:Dl,delete:xl,clear:Nl,forEach:As(!1,!1)},t={get(o){return Ts(this,o,!1,!0)},get size(){return ws(this)},has:Is,add:Vl,set:Dl,delete:xl,clear:Nl,forEach:As(!1,!0)},n={get(o){return Ts(this,o,!0)},get size(){return ws(this,!0)},has(o){return Is.call(this,o,!0)},add:$e("add"),set:$e("set"),delete:$e("delete"),clear:$e("clear"),forEach:As(!0,!1)},r={get(o){return Ts(this,o,!0,!0)},get size(){return ws(this,!0)},has(o){return Is.call(this,o,!0)},add:$e("add"),set:$e("set"),delete:$e("delete"),clear:$e("clear"),forEach:As(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Rs(o,!1,!1),n[o]=Rs(o,!0,!1),t[o]=Rs(o,!1,!0),r[o]=Rs(o,!0,!0)}),[e,n,t,r]}const[Ad,Rd,bd,Pd]=wd();function Ko(e,t){const n=t?e?Pd:bd:e?Rd:Ad;return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(ut(n,s)&&s in r?n:r,s,o)}const Sd={get:Ko(!1,!1)},Cd={get:Ko(!1,!0)},Vd={get:Ko(!0,!1)};const yu=new WeakMap,Eu=new WeakMap,vu=new WeakMap,Dd=new WeakMap;function xd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nd(e){return e.__v_skip||!Object.isExtensible(e)?0:xd(nd(e))}function Go(e){return Fr(e)?e:Wo(e,!1,vd,Sd,yu)}function Od(e){return Wo(e,!1,Id,Cd,Eu)}function Tu(e){return Wo(e,!0,Td,Vd,vu)}function Wo(e,t,n,r,s){if(!bt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const a=Nd(e);if(a===0)return e;const c=new Proxy(e,a===2?r:n);return s.set(e,c),c}function Cr(e){return Fr(e)?Cr(e.__v_raw):!!(e&&e.__v_isReactive)}function Fr(e){return!!(e&&e.__v_isReadonly)}function Bs(e){return!!(e&&e.__v_isShallow)}function Iu(e){return e?!!e.__v_raw:!1}function mt(e){const t=e&&e.__v_raw;return t?mt(t):e}function Md(e){return Object.isExtensible(e)&&su(e,"__v_skip",!0),e}const Lr=e=>bt(e)?Go(e):e,Qo=e=>bt(e)?Tu(e):e;class wu{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new $o(()=>t(this._value),()=>Ds(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=mt(this);return(!t._cacheable||t.effect.dirty)&&Ye(t._value,t._value=t.effect.run())&&Ds(t,4),Au(t),t.effect._dirtyLevel>=2&&Ds(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function kd(e,t,n=!1){let r,s;const o=it(e);return o?(r=e,s=ue):(r=e.get,s=e.set),new wu(r,s,o||!s,n)}function Au(e){var t;Ke&&En&&(e=mt(e),fu(En,(t=e.dep)!=null?t:e.dep=pu(()=>e.dep=void 0,e instanceof wu?e:void 0)))}function Ds(e,t=4,n,r){e=mt(e);const s=e.dep;s&&du(s,t)}function ne(e){return!!(e&&e.__v_isRef===!0)}function Tr(e){return Fd(e,!1)}function Fd(e,t){return ne(e)?e:new Ld(e,t)}class Ld{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:mt(t),this._value=n?t:Lr(t)}get value(){return Au(this),this._value}set value(t){const n=this.__v_isShallow||Bs(t)||Fr(t);t=n?t:mt(t),Ye(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=n?t:Lr(t),Ds(this,4))}}function Ud(e){return ne(e)?e.value:e}const Bd={get:(e,t,n)=>Ud(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ne(s)&&!ne(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Ru(e){return Cr(e)?e:new Proxy(e,Bd)}/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ge(e,t,n,r){try{return r?e(...r):e()}catch(s){oi(s,t,n)}}function me(e,t,n,r){if(it(e)){const s=Ge(e,t,n,r);return s&&tu(s)&&s.catch(o=>{oi(o,t,n)}),s}if(rt(e)){const s=[];for(let o=0;o<e.length;o++)s.push(me(e[o],t,n,r));return s}}function oi(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const a=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const f=o.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,a,c)===!1)return}o=o.parent}const u=t.appContext.config.errorHandler;if(u){nn(),Ge(u,null,10,[e,a,c]),rn();return}}jd(e,n,s,r)}function jd(e,t,n,r=!0){console.error(e)}let Ur=!1,co=!1;const Gt=[];let ve=0;const qn=[];let qe=null,mn=0;const bu=Promise.resolve();let Xo=null;function $d(e){const t=Xo||bu;return e?t.then(this?e.bind(this):e):t}function qd(e){let t=ve+1,n=Gt.length;for(;t<n;){const r=t+n>>>1,s=Gt[r],o=Br(s);o<e||o===e&&s.pre?t=r+1:n=r}return t}function Yo(e){(!Gt.length||!Gt.includes(e,Ur&&e.allowRecurse?ve+1:ve))&&(e.id==null?Gt.push(e):Gt.splice(qd(e.id),0,e),Pu())}function Pu(){!Ur&&!co&&(co=!0,Xo=bu.then(Cu))}function zd(e){const t=Gt.indexOf(e);t>ve&&Gt.splice(t,1)}function Hd(e){rt(e)?qn.push(...e):(!qe||!qe.includes(e,e.allowRecurse?mn+1:mn))&&qn.push(e),Pu()}function Ol(e,t,n=Ur?ve+1:0){for(;n<Gt.length;n++){const r=Gt[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Gt.splice(n,1),n--,r()}}}function Su(e){if(qn.length){const t=[...new Set(qn)].sort((n,r)=>Br(n)-Br(r));if(qn.length=0,qe){qe.push(...t);return}for(qe=t,mn=0;mn<qe.length;mn++){const n=qe[mn];n.active!==!1&&n()}qe=null,mn=0}}const Br=e=>e.id==null?1/0:e.id,Kd=(e,t)=>{const n=Br(e)-Br(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Cu(e){co=!1,Ur=!0,Gt.sort(Kd);try{for(ve=0;ve<Gt.length;ve++){const t=Gt[ve];t&&t.active!==!1&&Ge(t,null,14)}}finally{ve=0,Gt.length=0,Su(),Ur=!1,Xo=null,(Gt.length||qn.length)&&Cu()}}function Gd(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Tt;let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in r){const p=`${a==="modelValue"?"model":a}Modifiers`,{number:E,trim:T}=r[p]||Tt;T&&(s=n.map(P=>Mt(P)?P.trim():P)),E&&(s=n.map(id))}let c,u=r[c=ji(t)]||r[c=ji(Kn(t))];!u&&o&&(u=r[c=ji(er(t))]),u&&me(u,e,6,s);const f=r[c+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,me(f,e,6,s)}}function Vu(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let a={},c=!1;if(!it(e)){const u=f=>{const p=Vu(f,t,!0);p&&(c=!0,jt(a,p))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!o&&!c?(bt(e)&&r.set(e,null),null):(rt(o)?o.forEach(u=>a[u]=null):jt(a,o),bt(e)&&r.set(e,a),a)}function ai(e,t){return!e||!ei(t)?!1:(t=t.slice(2).replace(/Once$/,""),ut(e,t[0].toLowerCase()+t.slice(1))||ut(e,er(t))||ut(e,t))}let Te=null,Du=null;function js(e){const t=Te;return Te=e,Du=e&&e.type.__scopeId||null,t}function Wd(e,t=Te,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Hl(-1);const o=js(t);let a;try{a=e(...s)}finally{js(o),r._d&&Hl(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function zi(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:f,renderCache:p,props:E,data:T,setupState:P,ctx:k,inheritAttrs:B}=e,L=js(e);let Z,tt;try{if(n.shapeFlag&4){const ot=s||r,wt=ot;Z=Ee(f.call(wt,ot,p,E,P,T,k)),tt=c}else{const ot=t;Z=Ee(ot.length>1?ot(E,{attrs:c,slots:a,emit:u}):ot(E,null)),tt=t.props?c:Qd(c)}}catch(ot){xr.length=0,oi(ot,e,1),Z=Tn(jr)}let W=Z;if(tt&&B!==!1){const ot=Object.keys(tt),{shapeFlag:wt}=W;ot.length&&wt&7&&(o&&ot.some(Lo)&&(tt=Xd(tt,o)),W=Gn(W,tt,!1,!0))}return n.dirs&&(W=Gn(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&(W.transition=n.transition),Z=W,js(L),Z}const Qd=e=>{let t;for(const n in e)(n==="class"||n==="style"||ei(n))&&((t||(t={}))[n]=e[n]);return t},Xd=(e,t)=>{const n={};for(const r in e)(!Lo(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Yd(e,t,n){const{props:r,children:s,component:o}=e,{props:a,children:c,patchFlag:u}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?Ml(r,a,f):!!a;if(u&8){const p=t.dynamicProps;for(let E=0;E<p.length;E++){const T=p[E];if(a[T]!==r[T]&&!ai(f,T))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Ml(r,a,f):!0:!!a;return!1}function Ml(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!ai(n,o))return!0}return!1}function Jd({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Zd=Symbol.for("v-ndc"),tp=e=>e.__isSuspense;function ep(e,t){t&&t.pendingBranch?rt(e)?t.effects.push(...e):t.effects.push(e):Hd(e)}function li(e,t,n=Jt,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...a)=>{nn();const c=Zr(n),u=me(t,n,e,a);return c(),rn(),u});return r?s.unshift(o):s.push(o),o}}const ke=e=>(t,n=Jt)=>{(!ui||e==="sp")&&li(e,(...r)=>t(...r),n)},np=ke("bm"),xu=ke("m"),rp=ke("bu"),sp=ke("u"),ip=ke("bum"),Jo=ke("um"),op=ke("sp"),ap=ke("rtg"),lp=ke("rtc");function cp(e,t=Jt){li("ec",e,t)}function dn(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let u=c.dir[r];u&&(nn(),me(u,n,8,[e.el,c,e,t]),rn())}}const xs=e=>!!e.type.__asyncLoader,uo=e=>e?Yu(e)?na(e):uo(e.parent):null,Vr=jt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>uo(e.parent),$root:e=>uo(e.root),$emit:e=>e.emit,$options:e=>Zo(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Yo(e.update)}),$nextTick:e=>e.n||(e.n=$d.bind(e.proxy)),$watch:e=>Vp.bind(e)}),Hi=(e,t)=>e!==Tt&&!e.__isScriptSetup&&ut(e,t),up={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:a,type:c,appContext:u}=e;let f;if(t[0]!=="$"){const P=a[t];if(P!==void 0)switch(P){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(Hi(r,t))return a[t]=1,r[t];if(s!==Tt&&ut(s,t))return a[t]=2,s[t];if((f=e.propsOptions[0])&&ut(f,t))return a[t]=3,o[t];if(n!==Tt&&ut(n,t))return a[t]=4,n[t];ho&&(a[t]=0)}}const p=Vr[t];let E,T;if(p)return t==="$attrs"&&ee(e.attrs,"get",""),p(e);if((E=c.__cssModules)&&(E=E[t]))return E;if(n!==Tt&&ut(n,t))return a[t]=4,n[t];if(T=u.config.globalProperties,ut(T,t))return T[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Hi(s,t)?(s[t]=n,!0):r!==Tt&&ut(r,t)?(r[t]=n,!0):ut(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==Tt&&ut(e,a)||Hi(t,a)||(c=o[0])&&ut(c,a)||ut(r,a)||ut(Vr,a)||ut(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ut(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function kl(e){return rt(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ho=!0;function hp(e){const t=Zo(e),n=e.proxy,r=e.ctx;ho=!1,t.beforeCreate&&Fl(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:a,watch:c,provide:u,inject:f,created:p,beforeMount:E,mounted:T,beforeUpdate:P,updated:k,activated:B,deactivated:L,beforeDestroy:Z,beforeUnmount:tt,destroyed:W,unmounted:ot,render:wt,renderTracked:J,renderTriggered:w,errorCaptured:g,serverPrefetch:y,expose:v,inheritAttrs:A,components:b,directives:_,filters:re}=t;if(f&&fp(f,r,null),a)for(const _t in a){const ft=a[_t];it(ft)&&(r[_t]=ft.bind(n))}if(s){const _t=s.call(n,n);bt(_t)&&(e.data=Go(_t))}if(ho=!0,o)for(const _t in o){const ft=o[_t],he=it(ft)?ft.bind(n,n):it(ft.get)?ft.get.bind(n,n):ue,on=!it(ft)&&it(ft.set)?ft.set.bind(n):ue,Pe=Jp({get:he,set:on});Object.defineProperty(r,_t,{enumerable:!0,configurable:!0,get:()=>Pe.value,set:Vt=>Pe.value=Vt})}if(c)for(const _t in c)Nu(c[_t],r,n,_t);if(u){const _t=it(u)?u.call(n):u;Reflect.ownKeys(_t).forEach(ft=>{yp(ft,_t[ft])})}p&&Fl(p,e,"c");function kt(_t,ft){rt(ft)?ft.forEach(he=>_t(he.bind(n))):ft&&_t(ft.bind(n))}if(kt(np,E),kt(xu,T),kt(rp,P),kt(sp,k),kt(Dp,B),kt(xp,L),kt(cp,g),kt(lp,J),kt(ap,w),kt(ip,tt),kt(Jo,ot),kt(op,y),rt(v))if(v.length){const _t=e.exposed||(e.exposed={});v.forEach(ft=>{Object.defineProperty(_t,ft,{get:()=>n[ft],set:he=>n[ft]=he})})}else e.exposed||(e.exposed={});wt&&e.render===ue&&(e.render=wt),A!=null&&(e.inheritAttrs=A),b&&(e.components=b),_&&(e.directives=_)}function fp(e,t,n=ue){rt(e)&&(e=fo(e));for(const r in e){const s=e[r];let o;bt(s)?"default"in s?o=Ns(s.from||r,s.default,!0):o=Ns(s.from||r):o=Ns(s),ne(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[r]=o}}function Fl(e,t,n){me(rt(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Nu(e,t,n,r){const s=r.includes(".")?Ku(n,r):()=>n[r];if(Mt(e)){const o=t[e];it(o)&&Gi(s,o)}else if(it(e))Gi(s,e.bind(n));else if(bt(e))if(rt(e))e.forEach(o=>Nu(o,t,n,r));else{const o=it(e.handler)?e.handler.bind(n):t[e.handler];it(o)&&Gi(s,o,e)}}function Zo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:!s.length&&!n&&!r?u=t:(u={},s.length&&s.forEach(f=>$s(u,f,a,!0)),$s(u,t,a)),bt(t)&&o.set(t,u),u}function $s(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&$s(e,o,n,!0),s&&s.forEach(a=>$s(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const c=dp[a]||n&&n[a];e[a]=c?c(e[a],t[a]):t[a]}return e}const dp={data:Ll,props:Ul,emits:Ul,methods:Ar,computed:Ar,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:Ar,directives:Ar,watch:gp,provide:Ll,inject:pp};function Ll(e,t){return t?e?function(){return jt(it(e)?e.call(this,this):e,it(t)?t.call(this,this):t)}:t:e}function pp(e,t){return Ar(fo(e),fo(t))}function fo(e){if(rt(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Yt(e,t){return e?[...new Set([].concat(e,t))]:t}function Ar(e,t){return e?jt(Object.create(null),e,t):t}function Ul(e,t){return e?rt(e)&&rt(t)?[...new Set([...e,...t])]:jt(Object.create(null),kl(e),kl(t??{})):t}function gp(e,t){if(!e)return t;if(!t)return e;const n=jt(Object.create(null),e);for(const r in t)n[r]=Yt(e[r],t[r]);return n}function Ou(){return{app:null,config:{isNativeTag:td,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mp=0;function _p(e,t){return function(r,s=null){it(r)||(r=jt({},r)),s!=null&&!bt(s)&&(s=null);const o=Ou(),a=new WeakSet;let c=!1;const u=o.app={_uid:mp++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:Zp,get config(){return o.config},set config(f){},use(f,...p){return a.has(f)||(f&&it(f.install)?(a.add(f),f.install(u,...p)):it(f)&&(a.add(f),f(u,...p))),u},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),u},component(f,p){return p?(o.components[f]=p,u):o.components[f]},directive(f,p){return p?(o.directives[f]=p,u):o.directives[f]},mount(f,p,E){if(!c){const T=Tn(r,s);return T.appContext=o,E===!0?E="svg":E===!1&&(E=void 0),p&&t?t(T,f):e(T,f,E),c=!0,u._container=f,f.__vue_app__=u,na(T.component)}},unmount(){c&&(e(null,u._container),delete u._container.__vue_app__)},provide(f,p){return o.provides[f]=p,u},runWithContext(f){const p=Dr;Dr=u;try{return f()}finally{Dr=p}}};return u}}let Dr=null;function yp(e,t){if(Jt){let n=Jt.provides;const r=Jt.parent&&Jt.parent.provides;r===n&&(n=Jt.provides=Object.create(r)),n[e]=t}}function Ns(e,t,n=!1){const r=Jt||Te;if(r||Dr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Dr._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&it(t)?t.call(r&&r.proxy):t}}const Mu={},ku=()=>Object.create(Mu),Fu=e=>Object.getPrototypeOf(e)===Mu;function Ep(e,t,n,r=!1){const s={},o=ku();e.propsDefaults=Object.create(null),Lu(e,t,s,o);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:Od(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function vp(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:a}}=e,c=mt(s),[u]=e.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let E=0;E<p.length;E++){let T=p[E];if(ai(e.emitsOptions,T))continue;const P=t[T];if(u)if(ut(o,T))P!==o[T]&&(o[T]=P,f=!0);else{const k=Kn(T);s[k]=po(u,c,k,P,e,!1)}else P!==o[T]&&(o[T]=P,f=!0)}}}else{Lu(e,t,s,o)&&(f=!0);let p;for(const E in c)(!t||!ut(t,E)&&((p=er(E))===E||!ut(t,p)))&&(u?n&&(n[E]!==void 0||n[p]!==void 0)&&(s[E]=po(u,c,E,void 0,e,!0)):delete s[E]);if(o!==c)for(const E in o)(!t||!ut(t,E))&&(delete o[E],f=!0)}f&&Ne(e.attrs,"set","")}function Lu(e,t,n,r){const[s,o]=e.propsOptions;let a=!1,c;if(t)for(let u in t){if(Sr(u))continue;const f=t[u];let p;s&&ut(s,p=Kn(u))?!o||!o.includes(p)?n[p]=f:(c||(c={}))[p]=f:ai(e.emitsOptions,u)||(!(u in r)||f!==r[u])&&(r[u]=f,a=!0)}if(o){const u=mt(n),f=c||Tt;for(let p=0;p<o.length;p++){const E=o[p];n[E]=po(s,u,E,f[E],e,!ut(f,E))}}return a}function po(e,t,n,r,s,o){const a=e[n];if(a!=null){const c=ut(a,"default");if(c&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&it(u)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const p=Zr(s);r=f[n]=u.call(null,t),p()}}else r=u}a[0]&&(o&&!c?r=!1:a[1]&&(r===""||r===er(n))&&(r=!0))}return r}function Uu(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!it(e)){const p=E=>{u=!0;const[T,P]=Uu(E,t,!0);jt(a,T),P&&c.push(...P)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!o&&!u)return bt(e)&&r.set(e,jn),jn;if(rt(o))for(let p=0;p<o.length;p++){const E=Kn(o[p]);Bl(E)&&(a[E]=Tt)}else if(o)for(const p in o){const E=Kn(p);if(Bl(E)){const T=o[p],P=a[E]=rt(T)||it(T)?{type:T}:jt({},T);if(P){const k=ql(Boolean,P.type),B=ql(String,P.type);P[0]=k>-1,P[1]=B<0||k<B,(k>-1||ut(P,"default"))&&c.push(E)}}}const f=[a,c];return bt(e)&&r.set(e,f),f}function Bl(e){return e[0]!=="$"&&!Sr(e)}function jl(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function $l(e,t){return jl(e)===jl(t)}function ql(e,t){return rt(t)?t.findIndex(n=>$l(n,e)):it(t)&&$l(t,e)?0:-1}const Bu=e=>e[0]==="_"||e==="$stable",ta=e=>rt(e)?e.map(Ee):[Ee(e)],Tp=(e,t,n)=>{if(t._n)return t;const r=Wd((...s)=>ta(t(...s)),n);return r._c=!1,r},ju=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Bu(s))continue;const o=e[s];if(it(o))t[s]=Tp(s,o,r);else if(o!=null){const a=ta(o);t[s]=()=>a}}},$u=(e,t)=>{const n=ta(t);e.slots.default=()=>n},Ip=(e,t)=>{const n=e.slots=ku();if(e.vnode.shapeFlag&32){const r=t._;r?(jt(n,t),su(n,"_",r,!0)):ju(t,n)}else t&&$u(e,t)},wp=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=Tt;if(r.shapeFlag&32){const c=t._;c?n&&c===1?o=!1:(jt(s,t),!n&&c===1&&delete s._):(o=!t.$stable,ju(t,s)),a=t}else t&&($u(e,t),a={default:1});if(o)for(const c in s)!Bu(c)&&a[c]==null&&delete s[c]};function go(e,t,n,r,s=!1){if(rt(e)){e.forEach((T,P)=>go(T,t&&(rt(t)?t[P]:t),n,r,s));return}if(xs(r)&&!s)return;const o=r.shapeFlag&4?na(r.component):r.el,a=s?null:o,{i:c,r:u}=e,f=t&&t.r,p=c.refs===Tt?c.refs={}:c.refs,E=c.setupState;if(f!=null&&f!==u&&(Mt(f)?(p[f]=null,ut(E,f)&&(E[f]=null)):ne(f)&&(f.value=null)),it(u))Ge(u,c,12,[a,p]);else{const T=Mt(u),P=ne(u);if(T||P){const k=()=>{if(e.f){const B=T?ut(E,u)?E[u]:p[u]:u.value;s?rt(B)&&Uo(B,o):rt(B)?B.includes(o)||B.push(o):T?(p[u]=[o],ut(E,u)&&(E[u]=p[u])):(u.value=[o],e.k&&(p[e.k]=u.value))}else T?(p[u]=a,ut(E,u)&&(E[u]=a)):P&&(u.value=a,e.k&&(p[e.k]=a))};a?(k.id=-1,Zt(k,n)):k()}}}const Zt=ep;function Ap(e){return Rp(e)}function Rp(e,t){const n=iu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:a,createText:c,createComment:u,setText:f,setElementText:p,parentNode:E,nextSibling:T,setScopeId:P=ue,insertStaticContent:k}=e,B=(m,I,C,V=null,D=null,F=null,$=void 0,M=null,U=!!I.dynamicChildren)=>{if(m===I)return;m&&!Ir(m,I)&&(V=Se(m),Vt(m,D,F,!0),m=null),I.patchFlag===-2&&(U=!1,I.dynamicChildren=null);const{type:x,ref:q,shapeFlag:G}=I;switch(x){case ci:L(m,I,C,V);break;case jr:Z(m,I,C,V);break;case Wi:m==null&&tt(I,C,V,$);break;case xe:b(m,I,C,V,D,F,$,M,U);break;default:G&1?wt(m,I,C,V,D,F,$,M,U):G&6?_(m,I,C,V,D,F,$,M,U):(G&64||G&128)&&x.process(m,I,C,V,D,F,$,M,U,_e)}q!=null&&D&&go(q,m&&m.ref,F,I||m,!I)},L=(m,I,C,V)=>{if(m==null)r(I.el=c(I.children),C,V);else{const D=I.el=m.el;I.children!==m.children&&f(D,I.children)}},Z=(m,I,C,V)=>{m==null?r(I.el=u(I.children||""),C,V):I.el=m.el},tt=(m,I,C,V)=>{[m.el,m.anchor]=k(m.children,I,C,V,m.el,m.anchor)},W=({el:m,anchor:I},C,V)=>{let D;for(;m&&m!==I;)D=T(m),r(m,C,V),m=D;r(I,C,V)},ot=({el:m,anchor:I})=>{let C;for(;m&&m!==I;)C=T(m),s(m),m=C;s(I)},wt=(m,I,C,V,D,F,$,M,U)=>{I.type==="svg"?$="svg":I.type==="math"&&($="mathml"),m==null?J(I,C,V,D,F,$,M,U):y(m,I,D,F,$,M,U)},J=(m,I,C,V,D,F,$,M)=>{let U,x;const{props:q,shapeFlag:G,transition:K,dirs:H}=m;if(U=m.el=a(m.type,F,q&&q.is,q),G&8?p(U,m.children):G&16&&g(m.children,U,null,V,D,Ki(m,F),$,M),H&&dn(m,null,V,"created"),w(U,m,m.scopeId,$,V),q){for(const gt in q)gt!=="value"&&!Sr(gt)&&o(U,gt,null,q[gt],F,m.children,V,D,fe);"value"in q&&o(U,"value",null,q.value,F),(x=q.onVnodeBeforeMount)&&ye(x,V,m)}H&&dn(m,null,V,"beforeMount");const Q=bp(D,K);Q&&K.beforeEnter(U),r(U,I,C),((x=q&&q.onVnodeMounted)||Q||H)&&Zt(()=>{x&&ye(x,V,m),Q&&K.enter(U),H&&dn(m,null,V,"mounted")},D)},w=(m,I,C,V,D)=>{if(C&&P(m,C),V)for(let F=0;F<V.length;F++)P(m,V[F]);if(D){let F=D.subTree;if(I===F){const $=D.vnode;w(m,$,$.scopeId,$.slotScopeIds,D.parent)}}},g=(m,I,C,V,D,F,$,M,U=0)=>{for(let x=U;x<m.length;x++){const q=m[x]=M?ze(m[x]):Ee(m[x]);B(null,q,I,C,V,D,F,$,M)}},y=(m,I,C,V,D,F,$)=>{const M=I.el=m.el;let{patchFlag:U,dynamicChildren:x,dirs:q}=I;U|=m.patchFlag&16;const G=m.props||Tt,K=I.props||Tt;let H;if(C&&pn(C,!1),(H=K.onVnodeBeforeUpdate)&&ye(H,C,I,m),q&&dn(I,m,C,"beforeUpdate"),C&&pn(C,!0),x?v(m.dynamicChildren,x,M,C,V,Ki(I,D),F):$||ft(m,I,M,null,C,V,Ki(I,D),F,!1),U>0){if(U&16)A(M,I,G,K,C,V,D);else if(U&2&&G.class!==K.class&&o(M,"class",null,K.class,D),U&4&&o(M,"style",G.style,K.style,D),U&8){const Q=I.dynamicProps;for(let gt=0;gt<Q.length;gt++){const ct=Q[gt],Pt=G[ct],se=K[ct];(se!==Pt||ct==="value")&&o(M,ct,Pt,se,D,m.children,C,V,fe)}}U&1&&m.children!==I.children&&p(M,I.children)}else!$&&x==null&&A(M,I,G,K,C,V,D);((H=K.onVnodeUpdated)||q)&&Zt(()=>{H&&ye(H,C,I,m),q&&dn(I,m,C,"updated")},V)},v=(m,I,C,V,D,F,$)=>{for(let M=0;M<I.length;M++){const U=m[M],x=I[M],q=U.el&&(U.type===xe||!Ir(U,x)||U.shapeFlag&70)?E(U.el):C;B(U,x,q,null,V,D,F,$,!0)}},A=(m,I,C,V,D,F,$)=>{if(C!==V){if(C!==Tt)for(const M in C)!Sr(M)&&!(M in V)&&o(m,M,C[M],null,$,I.children,D,F,fe);for(const M in V){if(Sr(M))continue;const U=V[M],x=C[M];U!==x&&M!=="value"&&o(m,M,x,U,$,I.children,D,F,fe)}"value"in V&&o(m,"value",C.value,V.value,$)}},b=(m,I,C,V,D,F,$,M,U)=>{const x=I.el=m?m.el:c(""),q=I.anchor=m?m.anchor:c("");let{patchFlag:G,dynamicChildren:K,slotScopeIds:H}=I;H&&(M=M?M.concat(H):H),m==null?(r(x,C,V),r(q,C,V),g(I.children||[],C,q,D,F,$,M,U)):G>0&&G&64&&K&&m.dynamicChildren?(v(m.dynamicChildren,K,C,D,F,$,M),(I.key!=null||D&&I===D.subTree)&&qu(m,I,!0)):ft(m,I,C,q,D,F,$,M,U)},_=(m,I,C,V,D,F,$,M,U)=>{I.slotScopeIds=M,m==null?I.shapeFlag&512?D.ctx.activate(I,C,V,$,U):re(I,C,V,D,F,$,U):Fe(m,I,U)},re=(m,I,C,V,D,F,$)=>{const M=m.component=Kp(m,V,D);if(Gu(m)&&(M.ctx.renderer=_e),Gp(M),M.asyncDep){if(D&&D.registerDep(M,kt,$),!m.el){const U=M.subTree=Tn(jr);Z(null,U,I,C)}}else kt(M,m,I,C,D,F,$)},Fe=(m,I,C)=>{const V=I.component=m.component;if(Yd(m,I,C))if(V.asyncDep&&!V.asyncResolved){_t(V,I,C);return}else V.next=I,zd(V.update),V.effect.dirty=!0,V.update();else I.el=m.el,V.vnode=I},kt=(m,I,C,V,D,F,$)=>{const M=()=>{if(m.isMounted){let{next:q,bu:G,u:K,parent:H,vnode:Q}=m;{const le=zu(m);if(le){q&&(q.el=Q.el,_t(m,q,$)),le.asyncDep.then(()=>{m.isUnmounted||M()});return}}let gt=q,ct;pn(m,!1),q?(q.el=Q.el,_t(m,q,$)):q=Q,G&&$i(G),(ct=q.props&&q.props.onVnodeBeforeUpdate)&&ye(ct,H,q,Q),pn(m,!0);const Pt=zi(m),se=m.subTree;m.subTree=Pt,B(se,Pt,E(se.el),Se(se),m,D,F),q.el=Pt.el,gt===null&&Jd(m,Pt.el),K&&Zt(K,D),(ct=q.props&&q.props.onVnodeUpdated)&&Zt(()=>ye(ct,H,q,Q),D)}else{let q;const{el:G,props:K}=I,{bm:H,m:Q,parent:gt}=m,ct=xs(I);if(pn(m,!1),H&&$i(H),!ct&&(q=K&&K.onVnodeBeforeMount)&&ye(q,gt,I),pn(m,!0),G&&Dn){const Pt=()=>{m.subTree=zi(m),Dn(G,m.subTree,m,D,null)};ct?I.type.__asyncLoader().then(()=>!m.isUnmounted&&Pt()):Pt()}else{const Pt=m.subTree=zi(m);B(null,Pt,C,V,m,D,F),I.el=Pt.el}if(Q&&Zt(Q,D),!ct&&(q=K&&K.onVnodeMounted)){const Pt=I;Zt(()=>ye(q,gt,Pt),D)}(I.shapeFlag&256||gt&&xs(gt.vnode)&&gt.vnode.shapeFlag&256)&&m.a&&Zt(m.a,D),m.isMounted=!0,I=C=V=null}},U=m.effect=new $o(M,ue,()=>Yo(x),m.scope),x=m.update=()=>{U.dirty&&U.run()};x.id=m.uid,pn(m,!0),x()},_t=(m,I,C)=>{I.component=m;const V=m.vnode.props;m.vnode=I,m.next=null,vp(m,I.props,V,C),wp(m,I.children,C),nn(),Ol(m),rn()},ft=(m,I,C,V,D,F,$,M,U=!1)=>{const x=m&&m.children,q=m?m.shapeFlag:0,G=I.children,{patchFlag:K,shapeFlag:H}=I;if(K>0){if(K&128){on(x,G,C,V,D,F,$,M,U);return}else if(K&256){he(x,G,C,V,D,F,$,M,U);return}}H&8?(q&16&&fe(x,D,F),G!==x&&p(C,G)):q&16?H&16?on(x,G,C,V,D,F,$,M,U):fe(x,D,F,!0):(q&8&&p(C,""),H&16&&g(G,C,V,D,F,$,M,U))},he=(m,I,C,V,D,F,$,M,U)=>{m=m||jn,I=I||jn;const x=m.length,q=I.length,G=Math.min(x,q);let K;for(K=0;K<G;K++){const H=I[K]=U?ze(I[K]):Ee(I[K]);B(m[K],H,C,null,D,F,$,M,U)}x>q?fe(m,D,F,!0,!1,G):g(I,C,V,D,F,$,M,U,G)},on=(m,I,C,V,D,F,$,M,U)=>{let x=0;const q=I.length;let G=m.length-1,K=q-1;for(;x<=G&&x<=K;){const H=m[x],Q=I[x]=U?ze(I[x]):Ee(I[x]);if(Ir(H,Q))B(H,Q,C,null,D,F,$,M,U);else break;x++}for(;x<=G&&x<=K;){const H=m[G],Q=I[K]=U?ze(I[K]):Ee(I[K]);if(Ir(H,Q))B(H,Q,C,null,D,F,$,M,U);else break;G--,K--}if(x>G){if(x<=K){const H=K+1,Q=H<q?I[H].el:V;for(;x<=K;)B(null,I[x]=U?ze(I[x]):Ee(I[x]),C,Q,D,F,$,M,U),x++}}else if(x>K)for(;x<=G;)Vt(m[x],D,F,!0),x++;else{const H=x,Q=x,gt=new Map;for(x=Q;x<=K;x++){const Qt=I[x]=U?ze(I[x]):Ee(I[x]);Qt.key!=null&&gt.set(Qt.key,x)}let ct,Pt=0;const se=K-Q+1;let le=!1,ar=0;const Le=new Array(se);for(x=0;x<se;x++)Le[x]=0;for(x=H;x<=G;x++){const Qt=m[x];if(Pt>=se){Vt(Qt,D,F,!0);continue}let ce;if(Qt.key!=null)ce=gt.get(Qt.key);else for(ct=Q;ct<=K;ct++)if(Le[ct-Q]===0&&Ir(Qt,I[ct])){ce=ct;break}ce===void 0?Vt(Qt,D,F,!0):(Le[ce-Q]=x+1,ce>=ar?ar=ce:le=!0,B(Qt,I[ce],C,null,D,F,$,M,U),Pt++)}const xn=le?Pp(Le):jn;for(ct=xn.length-1,x=se-1;x>=0;x--){const Qt=Q+x,ce=I[Qt],Nn=Qt+1<q?I[Qt+1].el:V;Le[x]===0?B(null,ce,C,Nn,D,F,$,M,U):le&&(ct<0||x!==xn[ct]?Pe(ce,C,Nn,2):ct--)}}},Pe=(m,I,C,V,D=null)=>{const{el:F,type:$,transition:M,children:U,shapeFlag:x}=m;if(x&6){Pe(m.component.subTree,I,C,V);return}if(x&128){m.suspense.move(I,C,V);return}if(x&64){$.move(m,I,C,_e);return}if($===xe){r(F,I,C);for(let G=0;G<U.length;G++)Pe(U[G],I,C,V);r(m.anchor,I,C);return}if($===Wi){W(m,I,C);return}if(V!==2&&x&1&&M)if(V===0)M.beforeEnter(F),r(F,I,C),Zt(()=>M.enter(F),D);else{const{leave:G,delayLeave:K,afterLeave:H}=M,Q=()=>r(F,I,C),gt=()=>{G(F,()=>{Q(),H&&H()})};K?K(F,Q,gt):gt()}else r(F,I,C)},Vt=(m,I,C,V=!1,D=!1)=>{const{type:F,props:$,ref:M,children:U,dynamicChildren:x,shapeFlag:q,patchFlag:G,dirs:K,memoIndex:H}=m;if(G===-2&&(D=!1),M!=null&&go(M,null,C,m,!0),H!=null&&(I.renderCache[H]=void 0),q&256){I.ctx.deactivate(m);return}const Q=q&1&&K,gt=!xs(m);let ct;if(gt&&(ct=$&&$.onVnodeBeforeUnmount)&&ye(ct,I,m),q&6)an(m.component,C,V);else{if(q&128){m.suspense.unmount(C,V);return}Q&&dn(m,null,I,"beforeUnmount"),q&64?m.type.remove(m,I,C,_e,V):x&&(F!==xe||G>0&&G&64)?fe(x,I,C,!1,!0):(F===xe&&G&384||!D&&q&16)&&fe(U,I,C),V&&Dt(m)}(gt&&(ct=$&&$.onVnodeUnmounted)||Q)&&Zt(()=>{ct&&ye(ct,I,m),Q&&dn(m,null,I,"unmounted")},C)},Dt=m=>{const{type:I,el:C,anchor:V,transition:D}=m;if(I===xe){bi(C,V);return}if(I===Wi){ot(m);return}const F=()=>{s(C),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(m.shapeFlag&1&&D&&!D.persisted){const{leave:$,delayLeave:M}=D,U=()=>$(C,F);M?M(m.el,F,U):U()}else F()},bi=(m,I)=>{let C;for(;m!==I;)C=T(m),s(m),m=C;s(I)},an=(m,I,C)=>{const{bum:V,scope:D,update:F,subTree:$,um:M,m:U,a:x}=m;zl(U),zl(x),V&&$i(V),D.stop(),F&&(F.active=!1,Vt($,m,I,C)),M&&Zt(M,I),Zt(()=>{m.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},fe=(m,I,C,V=!1,D=!1,F=0)=>{for(let $=F;$<m.length;$++)Vt(m[$],I,C,V,D)},Se=m=>m.shapeFlag&6?Se(m.component.subTree):m.shapeFlag&128?m.suspense.next():T(m.anchor||m.el);let or=!1;const os=(m,I,C)=>{m==null?I._vnode&&Vt(I._vnode,null,null,!0):B(I._vnode||null,m,I,null,null,null,C),or||(or=!0,Ol(),Su(),or=!1),I._vnode=m},_e={p:B,um:Vt,m:Pe,r:Dt,mt:re,mc:g,pc:ft,pbc:v,n:Se,o:e};let ln,Dn;return{render:os,hydrate:ln,createApp:_p(os,ln)}}function Ki({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function pn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function bp(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function qu(e,t,n=!1){const r=e.children,s=t.children;if(rt(r)&&rt(s))for(let o=0;o<r.length;o++){const a=r[o];let c=s[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[o]=ze(s[o]),c.el=a.el),!n&&c.patchFlag!==-2&&qu(a,c)),c.type===ci&&(c.el=a.el)}}function Pp(e){const t=e.slice(),n=[0];let r,s,o,a,c;const u=e.length;for(r=0;r<u;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(o=0,a=n.length-1;o<a;)c=o+a>>1,e[n[c]]<f?o=c+1:a=c;f<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=t[a];return n}function zu(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:zu(t)}function zl(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const Sp=Symbol.for("v-scx"),Cp=()=>Ns(Sp),bs={};function Gi(e,t,n){return Hu(e,t,n)}function Hu(e,t,{immediate:n,deep:r,flush:s,once:o,onTrack:a,onTrigger:c}=Tt){if(t&&o){const J=t;t=(...w)=>{J(...w),wt()}}const u=Jt,f=J=>r===!0?J:_n(J,r===!1?1:void 0);let p,E=!1,T=!1;if(ne(e)?(p=()=>e.value,E=Bs(e)):Cr(e)?(p=()=>f(e),E=!0):rt(e)?(T=!0,E=e.some(J=>Cr(J)||Bs(J)),p=()=>e.map(J=>{if(ne(J))return J.value;if(Cr(J))return f(J);if(it(J))return Ge(J,u,2)})):it(e)?t?p=()=>Ge(e,u,2):p=()=>(P&&P(),me(e,u,3,[k])):p=ue,t&&r){const J=p;p=()=>_n(J())}let P,k=J=>{P=W.onStop=()=>{Ge(J,u,4),P=W.onStop=void 0}},B;if(ui)if(k=ue,t?n&&me(t,u,3,[p(),T?[]:void 0,k]):p(),s==="sync"){const J=Cp();B=J.__watcherHandles||(J.__watcherHandles=[])}else return ue;let L=T?new Array(e.length).fill(bs):bs;const Z=()=>{if(!(!W.active||!W.dirty))if(t){const J=W.run();(r||E||(T?J.some((w,g)=>Ye(w,L[g])):Ye(J,L)))&&(P&&P(),me(t,u,3,[J,L===bs?void 0:T&&L[0]===bs?[]:L,k]),L=J)}else W.run()};Z.allowRecurse=!!t;let tt;s==="sync"?tt=Z:s==="post"?tt=()=>Zt(Z,u&&u.suspense):(Z.pre=!0,u&&(Z.id=u.uid),tt=()=>Yo(Z));const W=new $o(p,ue,tt),ot=pd(),wt=()=>{W.stop(),ot&&Uo(ot.effects,W)};return t?n?Z():L=W.run():s==="post"?Zt(W.run.bind(W),u&&u.suspense):W.run(),B&&B.push(wt),wt}function Vp(e,t,n){const r=this.proxy,s=Mt(e)?e.includes(".")?Ku(r,e):()=>r[e]:e.bind(r,r);let o;it(t)?o=t:(o=t.handler,n=t);const a=Zr(this),c=Hu(s,o.bind(r),n);return a(),c}function Ku(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function _n(e,t=1/0,n){if(t<=0||!bt(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ne(e))_n(e.value,t,n);else if(rt(e))for(let r=0;r<e.length;r++)_n(e[r],t,n);else if(Zc(e)||$n(e))e.forEach(r=>{_n(r,t,n)});else if(nu(e)){for(const r in e)_n(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&_n(e[r],t,n)}return e}const Gu=e=>e.type.__isKeepAlive;function Dp(e,t){Wu(e,"a",t)}function xp(e,t){Wu(e,"da",t)}function Wu(e,t,n=Jt){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(li(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Gu(s.parent.vnode)&&Np(r,t,n,s),s=s.parent}}function Np(e,t,n,r){const s=li(t,e,r,!0);Jo(()=>{Uo(r[t],s)},n)}function Qu(e,t){e.shapeFlag&6&&e.component?Qu(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}const Op=e=>e.__isTeleport,xe=Symbol.for("v-fgt"),ci=Symbol.for("v-txt"),jr=Symbol.for("v-cmt"),Wi=Symbol.for("v-stc"),xr=[];let ge=null;function Mp(e=!1){xr.push(ge=e?null:[])}function kp(){xr.pop(),ge=xr[xr.length-1]||null}let $r=1;function Hl(e){$r+=e}function Fp(e){return e.dynamicChildren=$r>0?ge||jn:null,kp(),$r>0&&ge&&ge.push(e),e}function Lp(e,t,n,r,s,o){return Fp(qs(e,t,n,r,s,o,!0))}function Up(e){return e?e.__v_isVNode===!0:!1}function Ir(e,t){return e.type===t.type&&e.key===t.key}const Xu=({key:e})=>e??null,Os=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Mt(e)||ne(e)||it(e)?{i:Te,r:e,k:t,f:!!n}:e:null);function qs(e,t=null,n=null,r=0,s=null,o=e===xe?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xu(t),ref:t&&Os(t),scopeId:Du,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Te};return c?(ea(u,n),o&128&&e.normalize(u)):n&&(u.shapeFlag|=Mt(n)?8:16),$r>0&&!a&&ge&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&ge.push(u),u}const Tn=Bp;function Bp(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===Zd)&&(e=jr),Up(e)){const c=Gn(e,t,!0);return n&&ea(c,n),$r>0&&!o&&ge&&(c.shapeFlag&6?ge[ge.indexOf(e)]=c:ge.push(c)),c.patchFlag=-2,c}if(Yp(e)&&(e=e.__vccOpts),t){t=jp(t);let{class:c,style:u}=t;c&&!Mt(c)&&(t.class=si(c)),bt(u)&&(Iu(u)&&!rt(u)&&(u=jt({},u)),t.style=jo(u))}const a=Mt(e)?1:tp(e)?128:Op(e)?64:bt(e)?4:it(e)?2:0;return qs(e,t,n,r,s,a,o,!0)}function jp(e){return e?Iu(e)||Fu(e)?jt({},e):e:null}function Gn(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:u}=e,f=t?qp(s||{},t):s,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Xu(f),ref:t&&t.ref?n&&o?rt(o)?o.concat(Os(t)):[o,Os(t)]:Os(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gn(e.ssContent),ssFallback:e.ssFallback&&Gn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&Qu(p,u.clone(p)),p}function $p(e=" ",t=0){return Tn(ci,null,e,t)}function Ee(e){return e==null||typeof e=="boolean"?Tn(jr):rt(e)?Tn(xe,null,e.slice()):typeof e=="object"?ze(e):Tn(ci,null,String(e))}function ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Gn(e)}function ea(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(rt(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),ea(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Fu(t)?t._ctx=Te:s===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else it(t)?(t={default:t,_ctx:Te},n=32):(t=String(t),r&64?(n=16,t=[$p(t)]):n=8);e.children=t,e.shapeFlag|=n}function qp(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=si([t.class,r.class]));else if(s==="style")t.style=jo([t.style,r.style]);else if(ei(s)){const o=t[s],a=r[s];a&&o!==a&&!(rt(o)&&o.includes(a))&&(t[s]=o?[].concat(o,a):a)}else s!==""&&(t[s]=r[s])}return t}function ye(e,t,n,r=null){me(e,t,7,[n,r])}const zp=Ou();let Hp=0;function Kp(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||zp,o={uid:Hp++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new fd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uu(r,s),emitsOptions:Vu(r,s),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:r.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Gd.bind(null,o),e.ce&&e.ce(o),o}let Jt=null,zs,mo;{const e=iu(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),o=>{s.length>1?s.forEach(a=>a(o)):s[0](o)}};zs=t("__VUE_INSTANCE_SETTERS__",n=>Jt=n),mo=t("__VUE_SSR_SETTERS__",n=>ui=n)}const Zr=e=>{const t=Jt;return zs(e),e.scope.on(),()=>{e.scope.off(),zs(t)}},Kl=()=>{Jt&&Jt.scope.off(),zs(null)};function Yu(e){return e.vnode.shapeFlag&4}let ui=!1;function Gp(e,t=!1){t&&mo(t);const{props:n,children:r}=e.vnode,s=Yu(e);Ep(e,n,s,t),Ip(e,r);const o=s?Wp(e,t):void 0;return t&&mo(!1),o}function Wp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,up);const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Xp(e):null,o=Zr(e);nn();const a=Ge(r,e,0,[e.props,s]);if(rn(),o(),tu(a)){if(a.then(Kl,Kl),t)return a.then(c=>{Gl(e,c,t)}).catch(c=>{oi(c,e,0)});e.asyncDep=a}else Gl(e,a,t)}else Ju(e,t)}function Gl(e,t,n){it(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:bt(t)&&(e.setupState=Ru(t)),Ju(e,n)}let Wl;function Ju(e,t,n){const r=e.type;if(!e.render){if(!t&&Wl&&!r.render){const s=r.template||Zo(e).template;if(s){const{isCustomElement:o,compilerOptions:a}=e.appContext.config,{delimiters:c,compilerOptions:u}=r,f=jt(jt({isCustomElement:o,delimiters:c},a),u);r.render=Wl(s,f)}}e.render=r.render||ue}{const s=Zr(e);nn();try{hp(e)}finally{rn(),s()}}}const Qp={get(e,t){return ee(e,"get",""),e[t]}};function Xp(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Qp),slots:e.slots,emit:e.emit,expose:t}}function na(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ru(Md(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Vr)return Vr[n](e)},has(t,n){return n in t||n in Vr}})):e.proxy}function Yp(e){return it(e)&&"__vccOpts"in e}const Jp=(e,t)=>kd(e,t,ui),Zp="3.4.31";/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const tg="http://www.w3.org/2000/svg",eg="http://www.w3.org/1998/Math/MathML",De=typeof document<"u"?document:null,Ql=De&&De.createElement("template"),ng={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?De.createElementNS(tg,e):t==="mathml"?De.createElementNS(eg,e):n?De.createElement(e,{is:n}):De.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>De.createTextNode(e),createComment:e=>De.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>De.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const a=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{Ql.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const c=Ql.content;if(r==="svg"||r==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}t.insertBefore(c,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},rg=Symbol("_vtc");function sg(e,t,n){const r=e[rg];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Xl=Symbol("_vod"),ig=Symbol("_vsh"),og=Symbol(""),ag=/(^|;)\s*display\s*:/;function lg(e,t,n){const r=e.style,s=Mt(n);let o=!1;if(n&&!s){if(t)if(Mt(t))for(const a of t.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Ms(r,c,"")}else for(const a in t)n[a]==null&&Ms(r,a,"");for(const a in n)a==="display"&&(o=!0),Ms(r,a,n[a])}else if(s){if(t!==n){const a=r[og];a&&(n+=";"+a),r.cssText=n,o=ag.test(n)}}else t&&e.removeAttribute("style");Xl in e&&(e[Xl]=o?r.display:"",e[ig]&&(r.display="none"))}const Yl=/\s*!important$/;function Ms(e,t,n){if(rt(n))n.forEach(r=>Ms(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=cg(e,t);Yl.test(n)?e.setProperty(er(r),n.replace(Yl,""),"important"):e[r]=n}}const Jl=["Webkit","Moz","ms"],Qi={};function cg(e,t){const n=Qi[t];if(n)return n;let r=Kn(t);if(r!=="filter"&&r in e)return Qi[t]=r;r=ru(r);for(let s=0;s<Jl.length;s++){const o=Jl[s]+r;if(o in e)return Qi[t]=o}return t}const Zl="http://www.w3.org/1999/xlink";function tc(e,t,n,r,s,o=hd(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Zl,t.slice(6,t.length)):e.setAttributeNS(Zl,t,n):n==null||o&&!ou(n)?e.removeAttribute(t):e.setAttribute(t,o?"":en(n)?String(n):n)}function ug(e,t,n,r,s,o,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,s,o),e[t]=n??"";return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){const f=c==="OPTION"?e.getAttribute("value")||"":e.value,p=n==null?"":String(n);(f!==p||!("_value"in e))&&(e.value=p),n==null&&e.removeAttribute(t),e._value=n;return}let u=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=ou(n):n==null&&f==="string"?(n="",u=!0):f==="number"&&(n=0,u=!0)}try{e[t]=n}catch{}u&&e.removeAttribute(t)}function hg(e,t,n,r){e.addEventListener(t,n,r)}function fg(e,t,n,r){e.removeEventListener(t,n,r)}const ec=Symbol("_vei");function dg(e,t,n,r,s=null){const o=e[ec]||(e[ec]={}),a=o[t];if(r&&a)a.value=r;else{const[c,u]=pg(t);if(r){const f=o[t]=_g(r,s);hg(e,c,f,u)}else a&&(fg(e,c,a,u),o[t]=void 0)}}const nc=/(?:Once|Passive|Capture)$/;function pg(e){let t;if(nc.test(e)){t={};let r;for(;r=e.match(nc);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):er(e.slice(2)),t]}let Xi=0;const gg=Promise.resolve(),mg=()=>Xi||(gg.then(()=>Xi=0),Xi=Date.now());function _g(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;me(yg(r,n.value),t,5,[r])};return n.value=e,n.attached=mg(),n}function yg(e,t){if(rt(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const rc=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Eg=(e,t,n,r,s,o,a,c,u)=>{const f=s==="svg";t==="class"?sg(e,r,f):t==="style"?lg(e,n,r):ei(t)?Lo(t)||dg(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):vg(e,t,r,f))?(ug(e,t,r,o,a,c,u),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&tc(e,t,r,f,a,t!=="value")):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),tc(e,t,r,f))};function vg(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&rc(t)&&it(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return rc(t)&&Mt(n)?!1:t in e}const Tg=jt({patchProp:Eg},ng);let sc;function Ig(){return sc||(sc=Ap(Tg))}const wg=(...e)=>{const t=Ig().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Rg(r);if(!s)return;const o=t._component;!it(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,Ag(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function Ag(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Rg(e){return Mt(e)?document.querySelector(e):e}var ic={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},bg=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],a=e[n++],c=e[n++],u=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},th={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],a=s+1<e.length,c=a?e[s+1]:0,u=s+2<e.length,f=u?e[s+2]:0,p=o>>2,E=(o&3)<<4|c>>4;let T=(c&15)<<2|f>>6,P=f&63;u||(P=64,a||(T=64)),r.push(n[p],n[E],n[T],n[P])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Zu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):bg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const f=s<e.length?n[e.charAt(s)]:64;++s;const E=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||c==null||f==null||E==null)throw new Pg;const T=o<<2|c>>4;if(r.push(T),f!==64){const P=c<<4&240|f>>2;if(r.push(P),E!==64){const k=f<<6&192|E;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Pg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sg=function(e){const t=Zu(e);return th.encodeByteArray(t,!0)},Hs=function(e){return Sg(e).replace(/\./g,"")},Cg=function(e){try{return th.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Vg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dg=()=>Vg().__FIREBASE_DEFAULTS__,xg=()=>{if(typeof process>"u"||typeof ic>"u")return;const e=ic.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ng=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Cg(e[1]);return t&&JSON.parse(t)},ra=()=>{try{return Dg()||xg()||Ng()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Og=e=>{var t,n;return(n=(t=ra())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Mg=e=>{const t=Og(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},eh=()=>{var e;return(e=ra())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Fg(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Hs(JSON.stringify(n)),Hs(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ug(){var e;const t=(e=ra())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bg(){return!Ug()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jg(){try{return typeof indexedDB=="object"}catch{return!1}}function $g(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="FirebaseError";class nr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=qg,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nh.prototype.create)}}class nh{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?zg(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new nr(s,c,r)}}function zg(e,t){return e.replace(Hg,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Hg=/\{\$([^}]+)}/g;function _o(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],a=t[s];if(oc(o)&&oc(a)){if(!_o(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function oc(e){return e!==null&&typeof e=="object"}/**
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
 */function wn(e){return e&&e._delegate?e._delegate:e}class qr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const gn="[DEFAULT]";/**
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
 */class Kg{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new kg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Wg(t))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=gn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=gn){return this.instances.has(t)}getOptions(t=gn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gg(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=gn){return this.component?this.component.multipleInstances?t:gn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gg(e){return e===gn?void 0:e}function Wg(e){return e.instantiationMode==="EAGER"}/**
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
 */class Qg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Kg(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ht||(ht={}));const Xg={debug:ht.DEBUG,verbose:ht.VERBOSE,info:ht.INFO,warn:ht.WARN,error:ht.ERROR,silent:ht.SILENT},Yg=ht.INFO,Jg={[ht.DEBUG]:"log",[ht.VERBOSE]:"log",[ht.INFO]:"info",[ht.WARN]:"warn",[ht.ERROR]:"error"},Zg=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Jg[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class rh{constructor(t){this.name=t,this._logLevel=Yg,this._logHandler=Zg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ht))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xg[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ht.DEBUG,...t),this._logHandler(this,ht.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ht.VERBOSE,...t),this._logHandler(this,ht.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ht.INFO,...t),this._logHandler(this,ht.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ht.WARN,...t),this._logHandler(this,ht.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ht.ERROR,...t),this._logHandler(this,ht.ERROR,...t)}}const tm=(e,t)=>t.some(n=>e instanceof n);let ac,lc;function em(){return ac||(ac=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nm(){return lc||(lc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sh=new WeakMap,yo=new WeakMap,ih=new WeakMap,Yi=new WeakMap,sa=new WeakMap;function rm(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(We(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&sh.set(n,e)}).catch(()=>{}),sa.set(t,e),t}function sm(e){if(yo.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});yo.set(e,t)}let Eo={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return yo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ih.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return We(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function im(e){Eo=e(Eo)}function om(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ji(this),t,...n);return ih.set(r,t.sort?t.sort():[t]),We(r)}:nm().includes(e)?function(...t){return e.apply(Ji(this),t),We(sh.get(this))}:function(...t){return We(e.apply(Ji(this),t))}}function am(e){return typeof e=="function"?om(e):(e instanceof IDBTransaction&&sm(e),tm(e,em())?new Proxy(e,Eo):e)}function We(e){if(e instanceof IDBRequest)return rm(e);if(Yi.has(e))return Yi.get(e);const t=am(e);return t!==e&&(Yi.set(e,t),sa.set(t,e)),t}const Ji=e=>sa.get(e);function lm(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(e,t),c=We(a);return r&&a.addEventListener("upgradeneeded",u=>{r(We(a.result),u.oldVersion,u.newVersion,We(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const cm=["get","getKey","getAll","getAllKeys","count"],um=["put","add","delete","clear"],Zi=new Map;function cc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Zi.get(t))return Zi.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=um.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||cm.includes(n)))return;const o=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),s&&u.done]))[0]};return Zi.set(t,o),o}im(e=>({...e,get:(t,n,r)=>cc(t,n)||e.get(t,n,r),has:(t,n)=>!!cc(t,n)||e.has(t,n)}));/**
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
 */class hm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fm(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const vo="@firebase/app",uc="0.10.5";/**
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
 */const An=new rh("@firebase/app"),dm="@firebase/app-compat",pm="@firebase/analytics-compat",gm="@firebase/analytics",mm="@firebase/app-check-compat",_m="@firebase/app-check",ym="@firebase/auth",Em="@firebase/auth-compat",vm="@firebase/database",Tm="@firebase/database-compat",Im="@firebase/functions",wm="@firebase/functions-compat",Am="@firebase/installations",Rm="@firebase/installations-compat",bm="@firebase/messaging",Pm="@firebase/messaging-compat",Sm="@firebase/performance",Cm="@firebase/performance-compat",Vm="@firebase/remote-config",Dm="@firebase/remote-config-compat",xm="@firebase/storage",Nm="@firebase/storage-compat",Om="@firebase/firestore",Mm="@firebase/vertexai-preview",km="@firebase/firestore-compat",Fm="firebase",Lm="10.12.2";/**
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
 */const To="[DEFAULT]",Um={[vo]:"fire-core",[dm]:"fire-core-compat",[gm]:"fire-analytics",[pm]:"fire-analytics-compat",[_m]:"fire-app-check",[mm]:"fire-app-check-compat",[ym]:"fire-auth",[Em]:"fire-auth-compat",[vm]:"fire-rtdb",[Tm]:"fire-rtdb-compat",[Im]:"fire-fn",[wm]:"fire-fn-compat",[Am]:"fire-iid",[Rm]:"fire-iid-compat",[bm]:"fire-fcm",[Pm]:"fire-fcm-compat",[Sm]:"fire-perf",[Cm]:"fire-perf-compat",[Vm]:"fire-rc",[Dm]:"fire-rc-compat",[xm]:"fire-gcs",[Nm]:"fire-gcs-compat",[Om]:"fire-fst",[km]:"fire-fst-compat",[Mm]:"fire-vertex","fire-js":"fire-js",[Fm]:"fire-js-all"};/**
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
 */const Ks=new Map,Bm=new Map,Io=new Map;function hc(e,t){try{e.container.addComponent(t)}catch(n){An.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Gs(e){const t=e.name;if(Io.has(t))return An.debug(`There were multiple attempts to register component ${t}.`),!1;Io.set(t,e);for(const n of Ks.values())hc(n,e);for(const n of Bm.values())hc(n,e);return!0}function jm(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const $m={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qe=new nh("app","Firebase",$m);/**
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
 */class qm{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}/**
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
 */const zm=Lm;function oh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:To,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Qe.create("bad-app-name",{appName:String(s)});if(n||(n=eh()),!n)throw Qe.create("no-options");const o=Ks.get(s);if(o){if(_o(n,o.options)&&_o(r,o.config))return o;throw Qe.create("duplicate-app",{appName:s})}const a=new Qg(s);for(const u of Io.values())a.addComponent(u);const c=new qm(n,r,a);return Ks.set(s,c),c}function Hm(e=To){const t=Ks.get(e);if(!t&&e===To&&eh())return oh();if(!t)throw Qe.create("no-app",{appName:e});return t}function zn(e,t,n){var r;let s=(r=Um[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),An.warn(c.join(" "));return}Gs(new qr(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Km="firebase-heartbeat-database",Gm=1,zr="firebase-heartbeat-store";let to=null;function ah(){return to||(to=lm(Km,Gm,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(zr)}catch(n){console.warn(n)}}}}).catch(e=>{throw Qe.create("idb-open",{originalErrorMessage:e.message})})),to}async function Wm(e){try{const n=(await ah()).transaction(zr),r=await n.objectStore(zr).get(lh(e));return await n.done,r}catch(t){if(t instanceof nr)An.warn(t.message);else{const n=Qe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});An.warn(n.message)}}}async function fc(e,t){try{const r=(await ah()).transaction(zr,"readwrite");await r.objectStore(zr).put(t,lh(e)),await r.done}catch(n){if(n instanceof nr)An.warn(n.message);else{const r=Qe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});An.warn(r.message)}}}function lh(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Qm=1024,Xm=30*24*60*60*1e3;class Ym{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=dc();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Xm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dc(),{heartbeatsToSend:r,unsentEntries:s}=Jm(this._heartbeatsCache.heartbeats),o=Hs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function dc(){return new Date().toISOString().substring(0,10)}function Jm(e,t=Qm){const n=[];let r=e.slice();for(const s of e){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),pc(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jg()?$g().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Wm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function pc(e){return Hs(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function t_(e){Gs(new qr("platform-logger",t=>new hm(t),"PRIVATE")),Gs(new qr("heartbeat",t=>new Ym(t),"PRIVATE")),zn(vo,uc,e),zn(vo,uc,"esm2017"),zn("fire-js","")}t_("");var gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var In,ch;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,g){function y(){}y.prototype=g.prototype,w.D=g.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(v,A,b){for(var _=Array(arguments.length-2),re=2;re<arguments.length;re++)_[re-2]=arguments[re];return g.prototype[A].apply(v,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,g,y){y||(y=0);var v=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)v[A]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(A=0;16>A;++A)v[A]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=w.g[0],y=w.g[1],A=w.g[2];var b=w.g[3],_=g+(b^y&(A^b))+v[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=b+(A^g&(y^A))+v[1]+3905402710&4294967295,b=g+(_<<12&4294967295|_>>>20),_=A+(y^b&(g^y))+v[2]+606105819&4294967295,A=b+(_<<17&4294967295|_>>>15),_=y+(g^A&(b^g))+v[3]+3250441966&4294967295,y=A+(_<<22&4294967295|_>>>10),_=g+(b^y&(A^b))+v[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=b+(A^g&(y^A))+v[5]+1200080426&4294967295,b=g+(_<<12&4294967295|_>>>20),_=A+(y^b&(g^y))+v[6]+2821735955&4294967295,A=b+(_<<17&4294967295|_>>>15),_=y+(g^A&(b^g))+v[7]+4249261313&4294967295,y=A+(_<<22&4294967295|_>>>10),_=g+(b^y&(A^b))+v[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=b+(A^g&(y^A))+v[9]+2336552879&4294967295,b=g+(_<<12&4294967295|_>>>20),_=A+(y^b&(g^y))+v[10]+4294925233&4294967295,A=b+(_<<17&4294967295|_>>>15),_=y+(g^A&(b^g))+v[11]+2304563134&4294967295,y=A+(_<<22&4294967295|_>>>10),_=g+(b^y&(A^b))+v[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=b+(A^g&(y^A))+v[13]+4254626195&4294967295,b=g+(_<<12&4294967295|_>>>20),_=A+(y^b&(g^y))+v[14]+2792965006&4294967295,A=b+(_<<17&4294967295|_>>>15),_=y+(g^A&(b^g))+v[15]+1236535329&4294967295,y=A+(_<<22&4294967295|_>>>10),_=g+(A^b&(y^A))+v[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=b+(y^A&(g^y))+v[6]+3225465664&4294967295,b=g+(_<<9&4294967295|_>>>23),_=A+(g^y&(b^g))+v[11]+643717713&4294967295,A=b+(_<<14&4294967295|_>>>18),_=y+(b^g&(A^b))+v[0]+3921069994&4294967295,y=A+(_<<20&4294967295|_>>>12),_=g+(A^b&(y^A))+v[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=b+(y^A&(g^y))+v[10]+38016083&4294967295,b=g+(_<<9&4294967295|_>>>23),_=A+(g^y&(b^g))+v[15]+3634488961&4294967295,A=b+(_<<14&4294967295|_>>>18),_=y+(b^g&(A^b))+v[4]+3889429448&4294967295,y=A+(_<<20&4294967295|_>>>12),_=g+(A^b&(y^A))+v[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=b+(y^A&(g^y))+v[14]+3275163606&4294967295,b=g+(_<<9&4294967295|_>>>23),_=A+(g^y&(b^g))+v[3]+4107603335&4294967295,A=b+(_<<14&4294967295|_>>>18),_=y+(b^g&(A^b))+v[8]+1163531501&4294967295,y=A+(_<<20&4294967295|_>>>12),_=g+(A^b&(y^A))+v[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=b+(y^A&(g^y))+v[2]+4243563512&4294967295,b=g+(_<<9&4294967295|_>>>23),_=A+(g^y&(b^g))+v[7]+1735328473&4294967295,A=b+(_<<14&4294967295|_>>>18),_=y+(b^g&(A^b))+v[12]+2368359562&4294967295,y=A+(_<<20&4294967295|_>>>12),_=g+(y^A^b)+v[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=b+(g^y^A)+v[8]+2272392833&4294967295,b=g+(_<<11&4294967295|_>>>21),_=A+(b^g^y)+v[11]+1839030562&4294967295,A=b+(_<<16&4294967295|_>>>16),_=y+(A^b^g)+v[14]+4259657740&4294967295,y=A+(_<<23&4294967295|_>>>9),_=g+(y^A^b)+v[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=b+(g^y^A)+v[4]+1272893353&4294967295,b=g+(_<<11&4294967295|_>>>21),_=A+(b^g^y)+v[7]+4139469664&4294967295,A=b+(_<<16&4294967295|_>>>16),_=y+(A^b^g)+v[10]+3200236656&4294967295,y=A+(_<<23&4294967295|_>>>9),_=g+(y^A^b)+v[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=b+(g^y^A)+v[0]+3936430074&4294967295,b=g+(_<<11&4294967295|_>>>21),_=A+(b^g^y)+v[3]+3572445317&4294967295,A=b+(_<<16&4294967295|_>>>16),_=y+(A^b^g)+v[6]+76029189&4294967295,y=A+(_<<23&4294967295|_>>>9),_=g+(y^A^b)+v[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=b+(g^y^A)+v[12]+3873151461&4294967295,b=g+(_<<11&4294967295|_>>>21),_=A+(b^g^y)+v[15]+530742520&4294967295,A=b+(_<<16&4294967295|_>>>16),_=y+(A^b^g)+v[2]+3299628645&4294967295,y=A+(_<<23&4294967295|_>>>9),_=g+(A^(y|~b))+v[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=b+(y^(g|~A))+v[7]+1126891415&4294967295,b=g+(_<<10&4294967295|_>>>22),_=A+(g^(b|~y))+v[14]+2878612391&4294967295,A=b+(_<<15&4294967295|_>>>17),_=y+(b^(A|~g))+v[5]+4237533241&4294967295,y=A+(_<<21&4294967295|_>>>11),_=g+(A^(y|~b))+v[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=b+(y^(g|~A))+v[3]+2399980690&4294967295,b=g+(_<<10&4294967295|_>>>22),_=A+(g^(b|~y))+v[10]+4293915773&4294967295,A=b+(_<<15&4294967295|_>>>17),_=y+(b^(A|~g))+v[1]+2240044497&4294967295,y=A+(_<<21&4294967295|_>>>11),_=g+(A^(y|~b))+v[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=b+(y^(g|~A))+v[15]+4264355552&4294967295,b=g+(_<<10&4294967295|_>>>22),_=A+(g^(b|~y))+v[6]+2734768916&4294967295,A=b+(_<<15&4294967295|_>>>17),_=y+(b^(A|~g))+v[13]+1309151649&4294967295,y=A+(_<<21&4294967295|_>>>11),_=g+(A^(y|~b))+v[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=b+(y^(g|~A))+v[11]+3174756917&4294967295,b=g+(_<<10&4294967295|_>>>22),_=A+(g^(b|~y))+v[2]+718787259&4294967295,A=b+(_<<15&4294967295|_>>>17),_=y+(b^(A|~g))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(A+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var y=g-this.blockSize,v=this.B,A=this.h,b=0;b<g;){if(A==0)for(;b<=y;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<g;)if(v[A++]=w.charCodeAt(b++),A==this.blockSize){s(this,v),A=0;break}}else for(;b<g;)if(v[A++]=w[b++],A==this.blockSize){s(this,v),A=0;break}}this.h=A,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var y=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=y&255,y/=256;for(this.u(w),w=Array(16),g=y=0;4>g;++g)for(var v=0;32>v;v+=8)w[y++]=this.g[g]>>>v&255;return w};function o(w,g){var y=c;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=g(w)}function a(w,g){this.h=g;for(var y=[],v=!0,A=w.length-1;0<=A;A--){var b=w[A]|0;v&&b==g||(y[A]=b,v=!1)}this.g=y}var c={};function u(w){return-128<=w&&128>w?o(w,function(g){return new a([g|0],0>g?-1:0)}):new a([w|0],0>w?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return E;if(0>w)return L(f(-w));for(var g=[],y=1,v=0;w>=y;v++)g[v]=w/y|0,y*=4294967296;return new a(g,0)}function p(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return L(p(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=f(Math.pow(g,8)),v=E,A=0;A<w.length;A+=8){var b=Math.min(8,w.length-A),_=parseInt(w.substring(A,A+b),g);8>b?(b=f(Math.pow(g,b)),v=v.j(b).add(f(_))):(v=v.j(y),v=v.add(f(_)))}return v}var E=u(0),T=u(1),P=u(16777216);e=a.prototype,e.m=function(){if(B(this))return-L(this).m();for(var w=0,g=1,y=0;y<this.g.length;y++){var v=this.i(y);w+=(0<=v?v:4294967296+v)*g,g*=4294967296}return w},e.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(B(this))return"-"+L(this).toString(w);for(var g=f(Math.pow(w,6)),y=this,v="";;){var A=ot(y,g).g;y=Z(y,A.j(g));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=A,k(y))return b+v;for(;6>b.length;)b="0"+b;v=b+v}},e.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function B(w){return w.h==-1}e.l=function(w){return w=Z(this,w),B(w)?-1:k(w)?0:1};function L(w){for(var g=w.g.length,y=[],v=0;v<g;v++)y[v]=~w.g[v];return new a(y,~w.h).add(T)}e.abs=function(){return B(this)?L(this):this},e.add=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],v=0,A=0;A<=g;A++){var b=v+(this.i(A)&65535)+(w.i(A)&65535),_=(b>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);v=_>>>16,b&=65535,_&=65535,y[A]=_<<16|b}return new a(y,y[y.length-1]&-2147483648?-1:0)};function Z(w,g){return w.add(L(g))}e.j=function(w){if(k(this)||k(w))return E;if(B(this))return B(w)?L(this).j(L(w)):L(L(this).j(w));if(B(w))return L(this.j(L(w)));if(0>this.l(P)&&0>w.l(P))return f(this.m()*w.m());for(var g=this.g.length+w.g.length,y=[],v=0;v<2*g;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var A=0;A<w.g.length;A++){var b=this.i(v)>>>16,_=this.i(v)&65535,re=w.i(A)>>>16,Fe=w.i(A)&65535;y[2*v+2*A]+=_*Fe,tt(y,2*v+2*A),y[2*v+2*A+1]+=b*Fe,tt(y,2*v+2*A+1),y[2*v+2*A+1]+=_*re,tt(y,2*v+2*A+1),y[2*v+2*A+2]+=b*re,tt(y,2*v+2*A+2)}for(v=0;v<g;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=g;v<2*g;v++)y[v]=0;return new a(y,0)};function tt(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function W(w,g){this.g=w,this.h=g}function ot(w,g){if(k(g))throw Error("division by zero");if(k(w))return new W(E,E);if(B(w))return g=ot(L(w),g),new W(L(g.g),L(g.h));if(B(g))return g=ot(w,L(g)),new W(L(g.g),g.h);if(30<w.g.length){if(B(w)||B(g))throw Error("slowDivide_ only works with positive integers.");for(var y=T,v=g;0>=v.l(w);)y=wt(y),v=wt(v);var A=J(y,1),b=J(v,1);for(v=J(v,2),y=J(y,2);!k(v);){var _=b.add(v);0>=_.l(w)&&(A=A.add(y),b=_),v=J(v,1),y=J(y,1)}return g=Z(w,A.j(g)),new W(A,g)}for(A=E;0<=w.l(g);){for(y=Math.max(1,Math.floor(w.m()/g.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),b=f(y),_=b.j(g);B(_)||0<_.l(w);)y-=v,b=f(y),_=b.j(g);k(b)&&(b=T),A=A.add(b),w=Z(w,_)}return new W(A,w)}e.A=function(w){return ot(this,w).h},e.and=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)&w.i(v);return new a(y,this.h&w.h)},e.or=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)|w.i(v);return new a(y,this.h|w.h)},e.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)^w.i(v);return new a(y,this.h^w.h)};function wt(w){for(var g=w.g.length+1,y=[],v=0;v<g;v++)y[v]=w.i(v)<<1|w.i(v-1)>>>31;return new a(y,w.h)}function J(w,g){var y=g>>5;g%=32;for(var v=w.g.length-y,A=[],b=0;b<v;b++)A[b]=0<g?w.i(b+y)>>>g|w.i(b+y+1)<<32-g:w.i(b+y);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ch=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,In=a}).apply(typeof gc<"u"?gc:typeof self<"u"?self:typeof window<"u"?window:{});var Ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uh,hh,Rr,fh,ks,wo,dh,ph,gh;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,h){return i==Array.prototype||i==Object.prototype||(i[l]=h.value),i};function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ps=="object"&&Ps];for(var l=0;l<i.length;++l){var h=i[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(i,l){if(l)t:{var h=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var R=i[d];if(!(R in h))break t;h=h[R]}i=i[i.length-1],d=h[i],l=l(d),l!=d&&l!=null&&t(h,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var h=0,d=!1,R={next:function(){if(!d&&h<i.length){var S=h++;return{value:l(S,i[S]),done:!1}}return d=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function f(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function p(i,l,h){return i.call.apply(i.bind,arguments)}function E(i,l,h){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,d),i.apply(l,R)}}return function(){return i.apply(l,arguments)}}function T(i,l,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:E,T.apply(null,arguments)}function P(i,l){var h=Array.prototype.slice.call(arguments,1);return function(){var d=h.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function k(i,l){function h(){}h.prototype=l.prototype,i.aa=l.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(d,R,S){for(var j=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)j[yt-2]=arguments[yt];return l.prototype[R].apply(d,j)}}function B(i){const l=i.length;if(0<l){const h=Array(l);for(let d=0;d<l;d++)h[d]=i[d];return h}return[]}function L(i,l){for(let h=1;h<arguments.length;h++){const d=arguments[h];if(u(d)){const R=i.length||0,S=d.length||0;i.length=R+S;for(let j=0;j<S;j++)i[R+j]=d[j]}else i.push(d)}}class Z{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function tt(i){return/^[\s\xa0]*$/.test(i)}function W(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function ot(i){return ot[" "](i),i}ot[" "]=function(){};var wt=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function J(i,l,h){for(const d in i)l.call(h,i[d],d,i)}function w(i,l){for(const h in i)l.call(void 0,i[h],h,i)}function g(i){const l={};for(const h in i)l[h]=i[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(i,l){let h,d;for(let R=1;R<arguments.length;R++){d=arguments[R];for(h in d)i[h]=d[h];for(let S=0;S<y.length;S++)h=y[S],Object.prototype.hasOwnProperty.call(d,h)&&(i[h]=d[h])}}function A(i){var l=1;i=i.split(":");const h=[];for(;0<l&&i.length;)h.push(i.shift()),l--;return i.length&&h.push(i.join(":")),h}function b(i){c.setTimeout(()=>{throw i},0)}function _(){var i=he;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class re{constructor(){this.h=this.g=null}add(l,h){const d=Fe.get();d.set(l,h),this.h?this.h.next=d:this.g=d,this.h=d}}var Fe=new Z(()=>new kt,i=>i.reset());class kt{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let _t,ft=!1,he=new re,on=()=>{const i=c.Promise.resolve(void 0);_t=()=>{i.then(Pe)}};var Pe=()=>{for(var i;i=_();){try{i.h.call(i.g)}catch(h){b(h)}var l=Fe;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}ft=!1};function Vt(){this.s=this.s,this.C=this.C}Vt.prototype.s=!1,Vt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Vt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Dt(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}Dt.prototype.h=function(){this.defaultPrevented=!0};var bi=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return i}();function an(i,l){if(Dt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(wt){t:{try{ot(l.nodeName);var R=!0;break t}catch{}R=!1}R||(l=null)}}else h=="mouseover"?l=i.fromElement:h=="mouseout"&&(l=i.toElement);this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:fe[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&an.aa.h.call(this)}}k(an,Dt);var fe={2:"touch",3:"pen",4:"mouse"};an.prototype.h=function(){an.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Se="closure_listenable_"+(1e6*Math.random()|0),or=0;function os(i,l,h,d,R){this.listener=i,this.proxy=null,this.src=l,this.type=h,this.capture=!!d,this.ha=R,this.key=++or,this.da=this.fa=!1}function _e(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function ln(i){this.src=i,this.g={},this.h=0}ln.prototype.add=function(i,l,h,d,R){var S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);var j=m(i,l,d,R);return-1<j?(l=i[j],h||(l.fa=!1)):(l=new os(l,this.src,S,!!d,R),l.fa=h,i.push(l)),l};function Dn(i,l){var h=l.type;if(h in i.g){var d=i.g[h],R=Array.prototype.indexOf.call(d,l,void 0),S;(S=0<=R)&&Array.prototype.splice.call(d,R,1),S&&(_e(l),i.g[h].length==0&&(delete i.g[h],i.h--))}}function m(i,l,h,d){for(var R=0;R<i.length;++R){var S=i[R];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==d)return R}return-1}var I="closure_lm_"+(1e6*Math.random()|0),C={};function V(i,l,h,d,R){if(Array.isArray(l)){for(var S=0;S<l.length;S++)V(i,l[S],h,d,R);return null}return h=K(h),i&&i[Se]?i.K(l,h,f(d)?!!d.capture:!!d,R):D(i,l,h,!1,d,R)}function D(i,l,h,d,R,S){if(!l)throw Error("Invalid event type");var j=f(R)?!!R.capture:!!R,yt=q(i);if(yt||(i[I]=yt=new ln(i)),h=yt.add(l,h,d,j,S),h.proxy)return h;if(d=F(),h.proxy=d,d.src=i,d.listener=h,i.addEventListener)bi||(R=j),R===void 0&&(R=!1),i.addEventListener(l.toString(),d,R);else if(i.attachEvent)i.attachEvent(U(l.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return h}function F(){function i(h){return l.call(i.src,i.listener,h)}const l=x;return i}function $(i,l,h,d,R){if(Array.isArray(l))for(var S=0;S<l.length;S++)$(i,l[S],h,d,R);else d=f(d)?!!d.capture:!!d,h=K(h),i&&i[Se]?(i=i.i,l=String(l).toString(),l in i.g&&(S=i.g[l],h=m(S,h,d,R),-1<h&&(_e(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete i.g[l],i.h--)))):i&&(i=q(i))&&(l=i.g[l.toString()],i=-1,l&&(i=m(l,h,d,R)),(h=-1<i?l[i]:null)&&M(h))}function M(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Se])Dn(l.i,i);else{var h=i.type,d=i.proxy;l.removeEventListener?l.removeEventListener(h,d,i.capture):l.detachEvent?l.detachEvent(U(h),d):l.addListener&&l.removeListener&&l.removeListener(d),(h=q(l))?(Dn(h,i),h.h==0&&(h.src=null,l[I]=null)):_e(i)}}}function U(i){return i in C?C[i]:C[i]="on"+i}function x(i,l){if(i.da)i=!0;else{l=new an(l,this);var h=i.listener,d=i.ha||i.src;i.fa&&M(i),i=h.call(d,l)}return i}function q(i){return i=i[I],i instanceof ln?i:null}var G="__closure_events_fn_"+(1e9*Math.random()>>>0);function K(i){return typeof i=="function"?i:(i[G]||(i[G]=function(l){return i.handleEvent(l)}),i[G])}function H(){Vt.call(this),this.i=new ln(this),this.M=this,this.F=null}k(H,Vt),H.prototype[Se]=!0,H.prototype.removeEventListener=function(i,l,h,d){$(this,i,l,h,d)};function Q(i,l){var h,d=i.F;if(d)for(h=[];d;d=d.F)h.push(d);if(i=i.M,d=l.type||l,typeof l=="string")l=new Dt(l,i);else if(l instanceof Dt)l.target=l.target||i;else{var R=l;l=new Dt(d,i),v(l,R)}if(R=!0,h)for(var S=h.length-1;0<=S;S--){var j=l.g=h[S];R=gt(j,d,!0,l)&&R}if(j=l.g=i,R=gt(j,d,!0,l)&&R,R=gt(j,d,!1,l)&&R,h)for(S=0;S<h.length;S++)j=l.g=h[S],R=gt(j,d,!1,l)&&R}H.prototype.N=function(){if(H.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var h=i.g[l],d=0;d<h.length;d++)_e(h[d]);delete i.g[l],i.h--}}this.F=null},H.prototype.K=function(i,l,h,d){return this.i.add(String(i),l,!1,h,d)},H.prototype.L=function(i,l,h,d){return this.i.add(String(i),l,!0,h,d)};function gt(i,l,h,d){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var R=!0,S=0;S<l.length;++S){var j=l[S];if(j&&!j.da&&j.capture==h){var yt=j.listener,Ft=j.ha||j.src;j.fa&&Dn(i.i,j),R=yt.call(Ft,d)!==!1&&R}}return R&&!d.defaultPrevented}function ct(i,l,h){if(typeof i=="function")h&&(i=T(i,h));else if(i&&typeof i.handleEvent=="function")i=T(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function Pt(i){i.g=ct(()=>{i.g=null,i.i&&(i.i=!1,Pt(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class se extends Vt{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Pt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function le(i){Vt.call(this),this.h=i,this.g={}}k(le,Vt);var ar=[];function Le(i){J(i.g,function(l,h){this.g.hasOwnProperty(h)&&M(l)},i),i.g={}}le.prototype.N=function(){le.aa.N.call(this),Le(this)},le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xn=c.JSON.stringify,Qt=c.JSON.parse,ce=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Nn(){}Nn.prototype.h=null;function Ma(i){return i.h||(i.h=i.i())}function ka(){}var lr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pi(){Dt.call(this,"d")}k(Pi,Dt);function Si(){Dt.call(this,"c")}k(Si,Dt);var cn={},Fa=null;function as(){return Fa=Fa||new H}cn.La="serverreachability";function La(i){Dt.call(this,cn.La,i)}k(La,Dt);function cr(i){const l=as();Q(l,new La(l))}cn.STAT_EVENT="statevent";function Ua(i,l){Dt.call(this,cn.STAT_EVENT,i),this.stat=l}k(Ua,Dt);function Xt(i){const l=as();Q(l,new Ua(l,i))}cn.Ma="timingevent";function Ba(i,l){Dt.call(this,cn.Ma,i),this.size=l}k(Ba,Dt);function ur(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function hr(){this.g=!0}hr.prototype.xa=function(){this.g=!1};function Df(i,l,h,d,R,S){i.info(function(){if(i.g)if(S)for(var j="",yt=S.split("&"),Ft=0;Ft<yt.length;Ft++){var dt=yt[Ft].split("=");if(1<dt.length){var $t=dt[0];dt=dt[1];var qt=$t.split("_");j=2<=qt.length&&qt[1]=="type"?j+($t+"="+dt+"&"):j+($t+"=redacted&")}}else j=null;else j=S;return"XMLHTTP REQ ("+d+") [attempt "+R+"]: "+l+`
`+h+`
`+j})}function xf(i,l,h,d,R,S,j){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+R+"]: "+l+`
`+h+`
`+S+" "+j})}function On(i,l,h,d){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Of(i,h)+(d?" "+d:"")})}function Nf(i,l){i.info(function(){return"TIMEOUT: "+l})}hr.prototype.info=function(){};function Of(i,l){if(!i.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var d=h[i];if(!(2>d.length)){var R=d[1];if(Array.isArray(R)&&!(1>R.length)){var S=R[0];if(S!="noop"&&S!="stop"&&S!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return xn(h)}catch{return l}}var ls={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ja={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ci;function cs(){}k(cs,Nn),cs.prototype.g=function(){return new XMLHttpRequest},cs.prototype.i=function(){return{}},Ci=new cs;function Ue(i,l,h,d){this.j=i,this.i=l,this.l=h,this.R=d||1,this.U=new le(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $a}function $a(){this.i=null,this.g="",this.h=!1}var qa={},Vi={};function Di(i,l,h){i.L=1,i.v=ds(Ce(l)),i.m=h,i.P=!0,za(i,null)}function za(i,l){i.F=Date.now(),us(i),i.A=Ce(i.v);var h=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),sl(h.i,"t",d),i.C=0,h=i.j.J,i.h=new $a,i.g=Il(i.j,h?l:null,!i.m),0<i.O&&(i.M=new se(T(i.Y,i,i.g),i.O)),l=i.U,h=i.g,d=i.ca;var R="readystatechange";Array.isArray(R)||(R&&(ar[0]=R.toString()),R=ar);for(var S=0;S<R.length;S++){var j=V(h,R[S],d||l.handleEvent,!1,l.h||l);if(!j)break;l.g[j.key]=j}l=i.H?g(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),cr(),Df(i.i,i.u,i.A,i.l,i.R,i.m)}Ue.prototype.ca=function(i){i=i.target;const l=this.M;l&&Ve(i)==3?l.j():this.Y(i)},Ue.prototype.Y=function(i){try{if(i==this.g)t:{const qt=Ve(this.g);var l=this.g.Ba();const Fn=this.g.Z();if(!(3>qt)&&(qt!=3||this.g&&(this.h.h||this.g.oa()||hl(this.g)))){this.J||qt!=4||l==7||(l==8||0>=Fn?cr(3):cr(2)),xi(this);var h=this.g.Z();this.X=h;e:if(Ha(this)){var d=hl(this.g);i="";var R=d.length,S=Ve(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),fr(this);var j="";break e}this.h.i=new c.TextDecoder}for(l=0;l<R;l++)this.h.h=!0,i+=this.h.i.decode(d[l],{stream:!(S&&l==R-1)});d.length=0,this.h.g+=i,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=h==200,xf(this.i,this.u,this.A,this.l,this.R,qt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var yt,Ft=this.g;if((yt=Ft.g?Ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tt(yt)){var dt=yt;break e}}dt=null}if(h=dt)On(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ni(this,h);else{this.o=!1,this.s=3,Xt(12),un(this),fr(this);break t}}if(this.P){h=!0;let de;for(;!this.J&&this.C<j.length;)if(de=Mf(this,j),de==Vi){qt==4&&(this.s=4,Xt(14),h=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(de==qa){this.s=4,Xt(15),On(this.i,this.l,j,"[Invalid Chunk]"),h=!1;break}else On(this.i,this.l,de,null),Ni(this,de);if(Ha(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qt!=4||j.length!=0||this.h.h||(this.s=1,Xt(16),h=!1),this.o=this.o&&h,!h)On(this.i,this.l,j,"[Invalid Chunked Response]"),un(this),fr(this);else if(0<j.length&&!this.W){this.W=!0;var $t=this.j;$t.g==this&&$t.ba&&!$t.M&&($t.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Ui($t),$t.M=!0,Xt(11))}}else On(this.i,this.l,j,null),Ni(this,j);qt==4&&un(this),this.o&&!this.J&&(qt==4?yl(this.j,this):(this.o=!1,us(this)))}else Jf(this.g),h==400&&0<j.indexOf("Unknown SID")?(this.s=3,Xt(12)):(this.s=0,Xt(13)),un(this),fr(this)}}}catch{}finally{}};function Ha(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Mf(i,l){var h=i.C,d=l.indexOf(`
`,h);return d==-1?Vi:(h=Number(l.substring(h,d)),isNaN(h)?qa:(d+=1,d+h>l.length?Vi:(l=l.slice(d,d+h),i.C=d+h,l)))}Ue.prototype.cancel=function(){this.J=!0,un(this)};function us(i){i.S=Date.now()+i.I,Ka(i,i.I)}function Ka(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ur(T(i.ba,i),l)}function xi(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Ue.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Nf(this.i,this.A),this.L!=2&&(cr(),Xt(17)),un(this),this.s=2,fr(this)):Ka(this,this.S-i)};function fr(i){i.j.G==0||i.J||yl(i.j,i)}function un(i){xi(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Le(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function Ni(i,l){try{var h=i.j;if(h.G!=0&&(h.g==i||Oi(h.h,i))){if(!i.K&&Oi(h.h,i)&&h.G==3){try{var d=h.Da.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var R=d;if(R[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)ys(h),ms(h);else break t;Li(h),Xt(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=ur(T(h.Za,h),6e3));if(1>=Qa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else fn(h,11)}else if((i.K||h.g==i)&&ys(h),!tt(l))for(R=h.Da.g.parse(l),l=0;l<R.length;l++){let dt=R[l];if(h.T=dt[0],dt=dt[1],h.G==2)if(dt[0]=="c"){h.K=dt[1],h.ia=dt[2];const $t=dt[3];$t!=null&&(h.la=$t,h.j.info("VER="+h.la));const qt=dt[4];qt!=null&&(h.Aa=qt,h.j.info("SVER="+h.Aa));const Fn=dt[5];Fn!=null&&typeof Fn=="number"&&0<Fn&&(d=1.5*Fn,h.L=d,h.j.info("backChannelRequestTimeoutMs_="+d)),d=h;const de=i.g;if(de){const vs=de.g?de.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vs){var S=d.h;S.g||vs.indexOf("spdy")==-1&&vs.indexOf("quic")==-1&&vs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Mi(S,S.h),S.h=null))}if(d.D){const Bi=de.g?de.g.getResponseHeader("X-HTTP-Session-Id"):null;Bi&&(d.ya=Bi,vt(d.I,d.D,Bi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),d=h;var j=i;if(d.qa=Tl(d,d.J?d.ia:null,d.W),j.K){Xa(d.h,j);var yt=j,Ft=d.L;Ft&&(yt.I=Ft),yt.B&&(xi(yt),us(yt)),d.g=j}else ml(d);0<h.i.length&&_s(h)}else dt[0]!="stop"&&dt[0]!="close"||fn(h,7);else h.G==3&&(dt[0]=="stop"||dt[0]=="close"?dt[0]=="stop"?fn(h,7):Fi(h):dt[0]!="noop"&&h.l&&h.l.ta(dt),h.v=0)}}cr(4)}catch{}}var kf=class{constructor(i,l){this.g=i,this.map=l}};function Ga(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wa(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Qa(i){return i.h?1:i.g?i.g.size:0}function Oi(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function Mi(i,l){i.g?i.g.add(l):i.h=l}function Xa(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Ga.prototype.cancel=function(){if(this.i=Ya(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ya(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const h of i.g.values())l=l.concat(h.D);return l}return B(i.i)}function Ff(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(u(i)){for(var l=[],h=i.length,d=0;d<h;d++)l.push(i[d]);return l}l=[],h=0;for(d in i)l[h++]=i[d];return l}function Lf(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(u(i)||typeof i=="string"){var l=[];i=i.length;for(var h=0;h<i;h++)l.push(h);return l}l=[],h=0;for(const d in i)l[h++]=d;return l}}}function Ja(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(u(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var h=Lf(i),d=Ff(i),R=d.length,S=0;S<R;S++)l.call(void 0,d[S],h&&h[S],i)}var Za=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uf(i,l){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var d=i[h].indexOf("="),R=null;if(0<=d){var S=i[h].substring(0,d);R=i[h].substring(d+1)}else S=i[h];l(S,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function hn(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof hn){this.h=i.h,hs(this,i.j),this.o=i.o,this.g=i.g,fs(this,i.s),this.l=i.l;var l=i.i,h=new gr;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),tl(this,h),this.m=i.m}else i&&(l=String(i).match(Za))?(this.h=!1,hs(this,l[1]||"",!0),this.o=dr(l[2]||""),this.g=dr(l[3]||"",!0),fs(this,l[4]),this.l=dr(l[5]||"",!0),tl(this,l[6]||"",!0),this.m=dr(l[7]||"")):(this.h=!1,this.i=new gr(null,this.h))}hn.prototype.toString=function(){var i=[],l=this.j;l&&i.push(pr(l,el,!0),":");var h=this.g;return(h||l=="file")&&(i.push("//"),(l=this.o)&&i.push(pr(l,el,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(pr(h,h.charAt(0)=="/"?$f:jf,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",pr(h,zf)),i.join("")};function Ce(i){return new hn(i)}function hs(i,l,h){i.j=h?dr(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function fs(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function tl(i,l,h){l instanceof gr?(i.i=l,Hf(i.i,i.h)):(h||(l=pr(l,qf)),i.i=new gr(l,i.h))}function vt(i,l,h){i.i.set(l,h)}function ds(i){return vt(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function dr(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function pr(i,l,h){return typeof i=="string"?(i=encodeURI(i).replace(l,Bf),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Bf(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var el=/[#\/\?@]/g,jf=/[#\?:]/g,$f=/[#\?]/g,qf=/[#\?@]/g,zf=/#/g;function gr(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function Be(i){i.g||(i.g=new Map,i.h=0,i.i&&Uf(i.i,function(l,h){i.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}e=gr.prototype,e.add=function(i,l){Be(this),this.i=null,i=Mn(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(l),this.h+=1,this};function nl(i,l){Be(i),l=Mn(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function rl(i,l){return Be(i),l=Mn(i,l),i.g.has(l)}e.forEach=function(i,l){Be(this),this.g.forEach(function(h,d){h.forEach(function(R){i.call(l,R,d,this)},this)},this)},e.na=function(){Be(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let d=0;d<l.length;d++){const R=i[d];for(let S=0;S<R.length;S++)h.push(l[d])}return h},e.V=function(i){Be(this);let l=[];if(typeof i=="string")rl(this,i)&&(l=l.concat(this.g.get(Mn(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)l=l.concat(i[h])}return l},e.set=function(i,l){return Be(this),this.i=null,i=Mn(this,i),rl(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},e.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function sl(i,l,h){nl(i,l),0<h.length&&(i.i=null,i.g.set(Mn(i,l),B(h)),i.h+=h.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var d=l[h];const S=encodeURIComponent(String(d)),j=this.V(d);for(d=0;d<j.length;d++){var R=S;j[d]!==""&&(R+="="+encodeURIComponent(String(j[d]))),i.push(R)}}return this.i=i.join("&")};function Mn(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Hf(i,l){l&&!i.j&&(Be(i),i.i=null,i.g.forEach(function(h,d){var R=d.toLowerCase();d!=R&&(nl(this,d),sl(this,R,h))},i)),i.j=l}function Kf(i,l){const h=new hr;if(c.Image){const d=new Image;d.onload=P(je,h,"TestLoadImage: loaded",!0,l,d),d.onerror=P(je,h,"TestLoadImage: error",!1,l,d),d.onabort=P(je,h,"TestLoadImage: abort",!1,l,d),d.ontimeout=P(je,h,"TestLoadImage: timeout",!1,l,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else l(!1)}function Gf(i,l){const h=new hr,d=new AbortController,R=setTimeout(()=>{d.abort(),je(h,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:d.signal}).then(S=>{clearTimeout(R),S.ok?je(h,"TestPingServer: ok",!0,l):je(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),je(h,"TestPingServer: error",!1,l)})}function je(i,l,h,d,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),d(h)}catch{}}function Wf(){this.g=new ce}function Qf(i,l,h){const d=h||"";try{Ja(i,function(R,S){let j=R;f(R)&&(j=xn(R)),l.push(d+S+"="+encodeURIComponent(j))})}catch(R){throw l.push(d+"type="+encodeURIComponent("_badmap")),R}}function mr(i){this.l=i.Ub||null,this.j=i.eb||!1}k(mr,Nn),mr.prototype.g=function(){return new ps(this.l,this.j)},mr.prototype.i=function(i){return function(){return i}}({});function ps(i,l){H.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(ps,H),e=ps.prototype,e.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,yr(this)},e.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_r(this)),this.readyState=0},e.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;il(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function il(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}e.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?_r(this):yr(this),this.readyState==3&&il(this)}},e.Ra=function(i){this.g&&(this.response=this.responseText=i,_r(this))},e.Qa=function(i){this.g&&(this.response=i,_r(this))},e.ga=function(){this.g&&_r(this)};function _r(i){i.readyState=4,i.l=null,i.j=null,i.v=null,yr(i)}e.setRequestHeader=function(i,l){this.u.append(i,l)},e.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=l.next();return i.join(`\r
`)};function yr(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ol(i){let l="";return J(i,function(h,d){l+=d,l+=":",l+=h,l+=`\r
`}),l}function ki(i,l,h){t:{for(d in h){var d=!1;break t}d=!0}d||(h=ol(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):vt(i,l,h))}function At(i){H.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(At,H);var Xf=/^https?$/i,Yf=["POST","PUT"];e=At.prototype,e.Ha=function(i){this.J=i},e.ea=function(i,l,h,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ci.g(),this.v=this.o?Ma(this.o):Ma(Ci),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(S){al(this,S);return}if(i=h||"",h=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var R in d)h.set(R,d[R]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const S of d.keys())h.set(S,d.get(S));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),R=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Yf,l,void 0))||d||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,j]of h)this.g.setRequestHeader(S,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ul(this),this.u=!0,this.g.send(i),this.u=!1}catch(S){al(this,S)}};function al(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,ll(i),gs(i)}function ll(i){i.A||(i.A=!0,Q(i,"complete"),Q(i,"error"))}e.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Q(this,"complete"),Q(this,"abort"),gs(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gs(this,!0)),At.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?cl(this):this.bb())},e.bb=function(){cl(this)};function cl(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ve(i)!=4||i.Z()!=2)){if(i.u&&Ve(i)==4)ct(i.Ea,0,i);else if(Q(i,"readystatechange"),Ve(i)==4){i.h=!1;try{const j=i.Z();t:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var d;if(d=j===0){var R=String(i.D).match(Za)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),d=!Xf.test(R?R.toLowerCase():"")}h=d}if(h)Q(i,"complete"),Q(i,"success");else{i.m=6;try{var S=2<Ve(i)?i.g.statusText:""}catch{S=""}i.l=S+" ["+i.Z()+"]",ll(i)}}finally{gs(i)}}}}function gs(i,l){if(i.g){ul(i);const h=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||Q(i,"ready");try{h.onreadystatechange=d}catch{}}}function ul(i){i.I&&(c.clearTimeout(i.I),i.I=null)}e.isActive=function(){return!!this.g};function Ve(i){return i.g?i.g.readyState:0}e.Z=function(){try{return 2<Ve(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),Qt(l)}};function hl(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Jf(i){const l={};i=(i.g&&2<=Ve(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(tt(i[d]))continue;var h=A(i[d]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[R]||[];l[R]=S,S.push(h)}w(l,function(d){return d.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Er(i,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||l}function fl(i){this.Aa=0,this.i=[],this.j=new hr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Er("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Er("baseRetryDelayMs",5e3,i),this.cb=Er("retryDelaySeedMs",1e4,i),this.Wa=Er("forwardChannelMaxRetries",2,i),this.wa=Er("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ga(i&&i.concurrentRequestLimit),this.Da=new Wf,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=fl.prototype,e.la=8,e.G=1,e.connect=function(i,l,h,d){Xt(0),this.W=i,this.H=l||{},h&&d!==void 0&&(this.H.OSID=h,this.H.OAID=d),this.F=this.X,this.I=Tl(this,null,this.W),_s(this)};function Fi(i){if(dl(i),i.G==3){var l=i.U++,h=Ce(i.I);if(vt(h,"SID",i.K),vt(h,"RID",l),vt(h,"TYPE","terminate"),vr(i,h),l=new Ue(i,i.j,l),l.L=2,l.v=ds(Ce(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=Il(l.j,null),l.g.ea(l.v)),l.F=Date.now(),us(l)}vl(i)}function ms(i){i.g&&(Ui(i),i.g.cancel(),i.g=null)}function dl(i){ms(i),i.u&&(c.clearTimeout(i.u),i.u=null),ys(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function _s(i){if(!Wa(i.h)&&!i.s){i.s=!0;var l=i.Ga;_t||on(),ft||(_t(),ft=!0),he.add(l,i),i.B=0}}function Zf(i,l){return Qa(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ur(T(i.Ga,i,l),El(i,i.B)),i.B++,!0)}e.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const R=new Ue(this,this.j,i);let S=this.o;if(this.S&&(S?(S=g(S),v(S,this.S)):S=this.S),this.m!==null||this.O||(R.H=S,S=null),this.P)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var d=this.i[h];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(l+=d,4096<l){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=gl(this,R,l),h=Ce(this.I),vt(h,"RID",i),vt(h,"CVER",22),this.D&&vt(h,"X-HTTP-Session-Id",this.D),vr(this,h),S&&(this.O?l="headers="+encodeURIComponent(String(ol(S)))+"&"+l:this.m&&ki(h,this.m,S)),Mi(this.h,R),this.Ua&&vt(h,"TYPE","init"),this.P?(vt(h,"$req",l),vt(h,"SID","null"),R.T=!0,Di(R,h,null)):Di(R,h,l),this.G=2}}else this.G==3&&(i?pl(this,i):this.i.length==0||Wa(this.h)||pl(this))};function pl(i,l){var h;l?h=l.l:h=i.U++;const d=Ce(i.I);vt(d,"SID",i.K),vt(d,"RID",h),vt(d,"AID",i.T),vr(i,d),i.m&&i.o&&ki(d,i.m,i.o),h=new Ue(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),l&&(i.i=l.D.concat(i.i)),l=gl(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Mi(i.h,h),Di(h,d,l)}function vr(i,l){i.H&&J(i.H,function(h,d){vt(l,d,h)}),i.l&&Ja({},function(h,d){vt(l,d,h)})}function gl(i,l,h){h=Math.min(i.i.length,h);var d=i.l?T(i.l.Na,i.l,i):null;t:{var R=i.i;let S=-1;for(;;){const j=["count="+h];S==-1?0<h?(S=R[0].g,j.push("ofs="+S)):S=0:j.push("ofs="+S);let yt=!0;for(let Ft=0;Ft<h;Ft++){let dt=R[Ft].g;const $t=R[Ft].map;if(dt-=S,0>dt)S=Math.max(0,R[Ft].g-100),yt=!1;else try{Qf($t,j,"req"+dt+"_")}catch{d&&d($t)}}if(yt){d=j.join("&");break t}}}return i=i.i.splice(0,h),l.D=i,d}function ml(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;_t||on(),ft||(_t(),ft=!0),he.add(l,i),i.v=0}}function Li(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ur(T(i.Fa,i),El(i,i.v)),i.v++,!0)}e.Fa=function(){if(this.u=null,_l(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ur(T(this.ab,this),i)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Xt(10),ms(this),_l(this))};function Ui(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function _l(i){i.g=new Ue(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Ce(i.qa);vt(l,"RID","rpc"),vt(l,"SID",i.K),vt(l,"AID",i.T),vt(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&vt(l,"TO",i.ja),vt(l,"TYPE","xmlhttp"),vr(i,l),i.m&&i.o&&ki(l,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=ds(Ce(l)),h.m=null,h.P=!0,za(h,i)}e.Za=function(){this.C!=null&&(this.C=null,ms(this),Li(this),Xt(19))};function ys(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function yl(i,l){var h=null;if(i.g==l){ys(i),Ui(i),i.g=null;var d=2}else if(Oi(i.h,l))h=l.D,Xa(i.h,l),d=1;else return;if(i.G!=0){if(l.o)if(d==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var R=i.B;d=as(),Q(d,new Ba(d,h)),_s(i)}else ml(i);else if(R=l.s,R==3||R==0&&0<l.X||!(d==1&&Zf(i,l)||d==2&&Li(i)))switch(h&&0<h.length&&(l=i.h,l.i=l.i.concat(h)),R){case 1:fn(i,5);break;case 4:fn(i,10);break;case 3:fn(i,6);break;default:fn(i,2)}}}function El(i,l){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*l}function fn(i,l){if(i.j.info("Error code "+l),l==2){var h=T(i.fb,i),d=i.Xa;const R=!d;d=new hn(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||hs(d,"https"),ds(d),R?Kf(d.toString(),h):Gf(d.toString(),h)}else Xt(2);i.G=0,i.l&&i.l.sa(l),vl(i),dl(i)}e.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Xt(2)):(this.j.info("Failed to ping google.com"),Xt(1))};function vl(i){if(i.G=0,i.ka=[],i.l){const l=Ya(i.h);(l.length!=0||i.i.length!=0)&&(L(i.ka,l),L(i.ka,i.i),i.h.i.length=0,B(i.i),i.i.length=0),i.l.ra()}}function Tl(i,l,h){var d=h instanceof hn?Ce(h):new hn(h);if(d.g!="")l&&(d.g=l+"."+d.g),fs(d,d.s);else{var R=c.location;d=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;var S=new hn(null);d&&hs(S,d),l&&(S.g=l),R&&fs(S,R),h&&(S.l=h),d=S}return h=i.D,l=i.ya,h&&l&&vt(d,h,l),vt(d,"VER",i.la),vr(i,d),d}function Il(i,l,h){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new At(new mr({eb:h})):new At(i.pa),l.Ha(i.J),l}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function wl(){}e=wl.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function Es(){}Es.prototype.g=function(i,l){return new ie(i,l)};function ie(i,l){H.call(this),this.g=new fl(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!tt(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!tt(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new kn(this)}k(ie,H),ie.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ie.prototype.close=function(){Fi(this.g)},ie.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=xn(i),i=h);l.i.push(new kf(l.Ya++,i)),l.G==3&&_s(l)},ie.prototype.N=function(){this.g.l=null,delete this.j,Fi(this.g),delete this.g,ie.aa.N.call(this)};function Al(i){Pi.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const h in l){i=h;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}k(Al,Pi);function Rl(){Si.call(this),this.status=1}k(Rl,Si);function kn(i){this.g=i}k(kn,wl),kn.prototype.ua=function(){Q(this.g,"a")},kn.prototype.ta=function(i){Q(this.g,new Al(i))},kn.prototype.sa=function(i){Q(this.g,new Rl)},kn.prototype.ra=function(){Q(this.g,"b")},Es.prototype.createWebChannel=Es.prototype.g,ie.prototype.send=ie.prototype.o,ie.prototype.open=ie.prototype.m,ie.prototype.close=ie.prototype.close,gh=function(){return new Es},ph=function(){return as()},dh=cn,wo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ls.NO_ERROR=0,ls.TIMEOUT=8,ls.HTTP_ERROR=6,ks=ls,ja.COMPLETE="complete",fh=ja,ka.EventType=lr,lr.OPEN="a",lr.CLOSE="b",lr.ERROR="c",lr.MESSAGE="d",H.prototype.listen=H.prototype.K,Rr=ka,hh=mr,At.prototype.listenOnce=At.prototype.L,At.prototype.getLastError=At.prototype.Ka,At.prototype.getLastErrorCode=At.prototype.Ba,At.prototype.getStatus=At.prototype.Z,At.prototype.getResponseJson=At.prototype.Oa,At.prototype.getResponseText=At.prototype.oa,At.prototype.send=At.prototype.ea,At.prototype.setWithCredentials=At.prototype.Ha,uh=At}).apply(typeof Ps<"u"?Ps:typeof self<"u"?self:typeof window<"u"?window:{});const mc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rr="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new rh("@firebase/firestore");function wr(){return Rn.logLevel}function z(e,...t){if(Rn.logLevel<=ht.DEBUG){const n=t.map(ia);Rn.debug(`Firestore (${rr}): ${e}`,...n)}}function Oe(e,...t){if(Rn.logLevel<=ht.ERROR){const n=t.map(ia);Rn.error(`Firestore (${rr}): ${e}`,...n)}}function Wn(e,...t){if(Rn.logLevel<=ht.WARN){const n=t.map(ia);Rn.warn(`Firestore (${rr}): ${e}`,...n)}}function ia(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e="Unexpected state"){const t=`FIRESTORE (${rr}) INTERNAL ASSERTION FAILED: `+e;throw Oe(t),new Error(t)}function Et(e,t){e||et()}function st(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends nr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class e_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ht.UNAUTHENTICATED))}shutdown(){}}class n_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class r_{constructor(t){this.t=t,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new Xe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Xe,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=o;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Xe)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Et(typeof r.accessToken=="string"),new mh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Et(t===null||typeof t=="string"),new Ht(t)}}class s_{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class i_{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new s_(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class o_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a_{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=o=>{o.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Et(typeof n.token=="string"),this.R=n.token,new o_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=l_(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<n&&(r+=t.charAt(s[o]%t.length))}return r}}function pt(e,t){return e<t?-1:e>t?1:0}function Qn(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new X(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new X(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new X(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Nt.fromMillis(Date.now())}static fromDate(t){return Nt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?pt(this.nanoseconds,t.nanoseconds):pt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new nt(t)}static min(){return new nt(new Nt(0,0))}static max(){return new nt(new Nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,n,r){n===void 0?n=0:n>t.length&&et(),r===void 0?r=t.length-n:r>t.length-n&&et(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Hr.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Hr?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const o=t.get(s),a=n.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Rt extends Hr{construct(t,n,r){return new Rt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new X(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Rt(n)}static emptyPath(){return new Rt([])}}const c_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends Hr{construct(t,n,r){return new Ut(t,n,r)}static isValidIdentifier(t){return c_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ut(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const o=()=>{if(r.length===0)throw new X(O.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new X(O.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new X(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new X(O.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ut(n)}static emptyPath(){return new Ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.path=t}static fromPath(t){return new Y(Rt.fromString(t))}static fromName(t){return new Y(Rt.fromString(t).popFirst(5))}static empty(){return new Y(Rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Rt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Rt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Y(new Rt(t.slice()))}}function u_(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=nt.fromTimestamp(r===1e9?new Nt(n+1,0):new Nt(n,r));return new Je(s,Y.empty(),t)}function h_(e){return new Je(e.readTime,e.key,-1)}class Je{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Je(nt.min(),Y.empty(),-1)}static max(){return new Je(nt.max(),Y.empty(),-1)}}function f_(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Y.comparator(e.documentKey,t.documentKey),n!==0?n:pt(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class p_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(e){if(e.code!==O.FAILED_PRECONDITION||e.message!==d_)throw e;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&et(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new N((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):N.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):N.reject(n)}static resolve(t){return new N((n,r)=>{n(t)})}static reject(t){return new N((n,r)=>{r(t)})}static waitFor(t){return new N((n,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&n()},u=>r(u))}),a=!0,o===s&&n()})}static or(t){let n=N.resolve(!1);for(const r of t)n=n.next(s=>s?N.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,o)=>{r.push(n.call(this,s,o))}),this.waitFor(r)}static mapArray(t,n){return new N((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let u=0;u<o;u++){const f=u;n(t[f]).next(p=>{a[f]=p,++c,c===o&&r(a)},p=>s(p))}})}static doWhile(t,n){return new N((r,s)=>{const o=()=>{t()===!0?n().next(()=>{o()},s):r()};o()})}}function g_(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function es(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class oa{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}oa.oe=-1;function hi(e){return e==null}function Ws(e){return e===0&&1/e==-1/0}function m_(e){return typeof e=="number"&&Number.isInteger(e)&&!Ws(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Cn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function yh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,n){this.comparator=t,this.root=n||Lt.EMPTY}insert(t,n){return new It(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(t){return new It(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ss(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ss(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ss(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ss(this.root,t,this.comparator,!0)}}class Ss{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=n?r(t.key,n):1,n&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Lt{constructor(t,n,r,s,o){this.key=t,this.value=n,this.color=r??Lt.RED,this.left=s??Lt.EMPTY,this.right=o??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,o){return new Lt(t??this.key,n??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,n,r),null):o===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw et();const t=this.left.check();if(t!==this.right.check())throw et();return t+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw et()}get value(){throw et()}get color(){throw et()}get left(){throw et()}get right(){throw et()}copy(t,n,r,s,o){return this}insert(t,n,r){return new Lt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.comparator=t,this.data=new It(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new yc(this.data.getIterator())}getIteratorFrom(t){return new yc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Bt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Bt(this.comparator);return n.data=t,n}}class yc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t){this.fields=t,t.sort(Ut.comparator)}static empty(){return new oe([])}unionWith(t){let n=new Bt(Ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new oe(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Qn(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Eh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Eh("Invalid base64 string: "+o):o}}(t);return new Wt(n)}static fromUint8Array(t){const n=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new Wt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return pt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const __=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ze(e){if(Et(!!e),typeof e=="string"){let t=0;const n=__.exec(e);if(Et(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ct(e.seconds),nanos:Ct(e.nanos)}}function Ct(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function bn(e){return typeof e=="string"?Wt.fromBase64String(e):Wt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function la(e){const t=e.mapValue.fields.__previous_value__;return aa(t)?la(t):t}function Kr(e){const t=Ze(e.mapValue.fields.__local_write_time__.timestampValue);return new Nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(t,n,r,s,o,a,c,u,f){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=f}}class Gr{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Gr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Gr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?aa(e)?4:E_(e)?9007199254740991:10:et()}function Re(e,t){if(e===t)return!0;const n=Pn(e);if(n!==Pn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Kr(e).isEqual(Kr(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Ze(s.timestampValue),c=Ze(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,o){return bn(s.bytesValue).isEqual(bn(o.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,o){return Ct(s.geoPointValue.latitude)===Ct(o.geoPointValue.latitude)&&Ct(s.geoPointValue.longitude)===Ct(o.geoPointValue.longitude)}(e,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Ct(s.integerValue)===Ct(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Ct(s.doubleValue),c=Ct(o.doubleValue);return a===c?Ws(a)===Ws(c):isNaN(a)&&isNaN(c)}return!1}(e,t);case 9:return Qn(e.arrayValue.values||[],t.arrayValue.values||[],Re);case 10:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(_c(a)!==_c(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Re(a[u],c[u])))return!1;return!0}(e,t);default:return et()}}function Wr(e,t){return(e.values||[]).find(n=>Re(n,t))!==void 0}function Xn(e,t){if(e===t)return 0;const n=Pn(e),r=Pn(t);if(n!==r)return pt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pt(e.booleanValue,t.booleanValue);case 2:return function(o,a){const c=Ct(o.integerValue||o.doubleValue),u=Ct(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(e,t);case 3:return Ec(e.timestampValue,t.timestampValue);case 4:return Ec(Kr(e),Kr(t));case 5:return pt(e.stringValue,t.stringValue);case 6:return function(o,a){const c=bn(o),u=bn(a);return c.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),u=a.split("/");for(let f=0;f<c.length&&f<u.length;f++){const p=pt(c[f],u[f]);if(p!==0)return p}return pt(c.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(o,a){const c=pt(Ct(o.latitude),Ct(a.latitude));return c!==0?c:pt(Ct(o.longitude),Ct(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(o,a){const c=o.values||[],u=a.values||[];for(let f=0;f<c.length&&f<u.length;++f){const p=Xn(c[f],u[f]);if(p)return p}return pt(c.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(o,a){if(o===Cs.mapValue&&a===Cs.mapValue)return 0;if(o===Cs.mapValue)return 1;if(a===Cs.mapValue)return-1;const c=o.fields||{},u=Object.keys(c),f=a.fields||{},p=Object.keys(f);u.sort(),p.sort();for(let E=0;E<u.length&&E<p.length;++E){const T=pt(u[E],p[E]);if(T!==0)return T;const P=Xn(c[u[E]],f[p[E]]);if(P!==0)return P}return pt(u.length,p.length)}(e.mapValue,t.mapValue);default:throw et()}}function Ec(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return pt(e,t);const n=Ze(e),r=Ze(t),s=pt(n.seconds,r.seconds);return s!==0?s:pt(n.nanos,r.nanos)}function Yn(e){return Ao(e)}function Ao(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Ze(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return bn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return Y.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const o of n.values||[])s?s=!1:r+=",",r+=Ao(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ao(n.fields[a])}`;return s+"}"}(e.mapValue):et()}function Ro(e){return!!e&&"integerValue"in e}function ca(e){return!!e&&"arrayValue"in e}function vc(e){return!!e&&"nullValue"in e}function Tc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Fs(e){return!!e&&"mapValue"in e}function Nr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Cn(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Nr(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Nr(e.arrayValue.values[n]);return t}return Object.assign({},e)}function E_(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t){this.value=t}static empty(){return new te({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Fs(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Nr(n)}setAll(t){let n=Ut.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=Nr(a):s.push(c.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,s)}delete(t){const n=this.field(t.popLast());Fs(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Re(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Fs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Cn(n,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new te(Nr(this.value))}}function vh(e){const t=[];return Cn(e.fields,(n,r)=>{const s=new Ut([n]);if(Fs(r)){const o=vh(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new oe(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,n,r,s,o,a,c){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Kt(t,0,nt.min(),nt.min(),nt.min(),te.empty(),0)}static newFoundDocument(t,n,r,s){return new Kt(t,1,n,nt.min(),r,s,0)}static newNoDocument(t,n){return new Kt(t,2,n,nt.min(),nt.min(),te.empty(),0)}static newUnknownDocument(t,n){return new Kt(t,3,n,nt.min(),nt.min(),te.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(nt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=te.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=te.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Kt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qs{constructor(t,n){this.position=t,this.inclusive=n}}function Ic(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const o=t[s],a=e.position[s];if(o.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),n.key):r=Xn(a,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function wc(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Re(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Xs{constructor(t,n="asc"){this.field=t,this.dir=n}}function v_(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Th{}class xt extends Th{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new I_(t,n,r):n==="array-contains"?new R_(t,r):n==="in"?new b_(t,r):n==="not-in"?new P_(t,r):n==="array-contains-any"?new S_(t,r):new xt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new w_(t,r):new A_(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xn(n,this.value)):n!==null&&Pn(this.value)===Pn(n)&&this.matchesComparison(Xn(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return et()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class be extends Th{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new be(t,n)}matches(t){return Ih(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ih(e){return e.op==="and"}function wh(e){return T_(e)&&Ih(e)}function T_(e){for(const t of e.filters)if(t instanceof be)return!1;return!0}function bo(e){if(e instanceof xt)return e.field.canonicalString()+e.op.toString()+Yn(e.value);if(wh(e))return e.filters.map(t=>bo(t)).join(",");{const t=e.filters.map(n=>bo(n)).join(",");return`${e.op}(${t})`}}function Ah(e,t){return e instanceof xt?function(r,s){return s instanceof xt&&r.op===s.op&&r.field.isEqual(s.field)&&Re(r.value,s.value)}(e,t):e instanceof be?function(r,s){return s instanceof be&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&Ah(a,s.filters[c]),!0):!1}(e,t):void et()}function Rh(e){return e instanceof xt?function(n){return`${n.field.canonicalString()} ${n.op} ${Yn(n.value)}`}(e):e instanceof be?function(n){return n.op.toString()+" {"+n.getFilters().map(Rh).join(" ,")+"}"}(e):"Filter"}class I_ extends xt{constructor(t,n,r){super(t,n,r),this.key=Y.fromName(r.referenceValue)}matches(t){const n=Y.comparator(t.key,this.key);return this.matchesComparison(n)}}class w_ extends xt{constructor(t,n){super(t,"in",n),this.keys=bh("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class A_ extends xt{constructor(t,n){super(t,"not-in",n),this.keys=bh("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function bh(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class R_ extends xt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ca(n)&&Wr(n.arrayValue,this.value)}}class b_ extends xt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Wr(this.value.arrayValue,n)}}class P_ extends xt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Wr(this.value.arrayValue,n)}}class S_ extends xt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ca(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Wr(this.value.arrayValue,r))}}/**
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
 */class C_{constructor(t,n=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function Ac(e,t=null,n=[],r=[],s=null,o=null,a=null){return new C_(e,t,n,r,s,o,a)}function ua(e){const t=st(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>bo(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),hi(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Yn(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Yn(r)).join(",")),t.ue=n}return t.ue}function ha(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!v_(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ah(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!wc(e.startAt,t.startAt)&&wc(e.endAt,t.endAt)}function Po(e){return Y.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,n=null,r=[],s=[],o=null,a="F",c=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function V_(e,t,n,r,s,o,a,c){return new fi(e,t,n,r,s,o,a,c)}function fa(e){return new fi(e)}function Rc(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function D_(e){return e.collectionGroup!==null}function Or(e){const t=st(e);if(t.ce===null){t.ce=[];const n=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),n.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Bt(Ut.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Xs(o,r))}),n.has(Ut.keyField().canonicalString())||t.ce.push(new Xs(Ut.keyField(),r))}return t.ce}function Ie(e){const t=st(e);return t.le||(t.le=x_(t,Or(e))),t.le}function x_(e,t){if(e.limitType==="F")return Ac(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Xs(s.field,o)});const n=e.endAt?new Qs(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Qs(e.startAt.position,e.startAt.inclusive):null;return Ac(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function So(e,t,n){return new fi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function di(e,t){return ha(Ie(e),Ie(t))&&e.limitType===t.limitType}function Ph(e){return`${ua(Ie(e))}|lt:${e.limitType}`}function Ln(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Rh(s)).join(", ")}]`),hi(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Yn(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Yn(s)).join(",")),`Target(${r})`}(Ie(e))}; limitType=${e.limitType})`}function pi(e,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):Y.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(e,t)&&function(r,s){for(const o of Or(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,c,u){const f=Ic(a,c,u);return a.inclusive?f<=0:f<0}(r.startAt,Or(r),s)||r.endAt&&!function(a,c,u){const f=Ic(a,c,u);return a.inclusive?f>=0:f>0}(r.endAt,Or(r),s))}(e,t)}function N_(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Sh(e){return(t,n)=>{let r=!1;for(const s of Or(e)){const o=O_(s,t,n);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function O_(e,t,n){const r=e.field.isKeyField()?Y.comparator(t.key,n.key):function(o,a,c){const u=a.data.field(o),f=c.data.field(o);return u!==null&&f!==null?Xn(u,f):et()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return et()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Cn(this.inner,(n,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return yh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=new It(Y.comparator);function Me(){return M_}const Ch=new It(Y.comparator);function br(...e){let t=Ch;for(const n of e)t=t.insert(n.key,n);return t}function Vh(e){let t=Ch;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function yn(){return Mr()}function Dh(){return Mr()}function Mr(){return new sr(e=>e.toString(),(e,t)=>e.isEqual(t))}const k_=new It(Y.comparator),F_=new Bt(Y.comparator);function at(...e){let t=F_;for(const n of e)t=t.add(n);return t}const L_=new Bt(pt);function U_(){return L_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ws(t)?"-0":t}}function Nh(e){return{integerValue:""+e}}function Oh(e,t){return m_(t)?Nh(t):xh(e,t)}/**
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
 */class gi{constructor(){this._=void 0}}function B_(e,t,n){return e instanceof Ys?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&aa(o)&&(o=la(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(n,t):e instanceof Qr?kh(e,t):e instanceof Xr?Fh(e,t):function(s,o){const a=Mh(s,o),c=bc(a)+bc(s.Pe);return Ro(a)&&Ro(s.Pe)?Nh(c):xh(s.serializer,c)}(e,t)}function j_(e,t,n){return e instanceof Qr?kh(e,t):e instanceof Xr?Fh(e,t):n}function Mh(e,t){return e instanceof Yr?function(r){return Ro(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Ys extends gi{}class Qr extends gi{constructor(t){super(),this.elements=t}}function kh(e,t){const n=Lh(t);for(const r of e.elements)n.some(s=>Re(s,r))||n.push(r);return{arrayValue:{values:n}}}class Xr extends gi{constructor(t){super(),this.elements=t}}function Fh(e,t){let n=Lh(t);for(const r of e.elements)n=n.filter(s=>!Re(s,r));return{arrayValue:{values:n}}}class Yr extends gi{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function bc(e){return Ct(e.integerValue||e.doubleValue)}function Lh(e){return ca(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(t,n){this.field=t,this.transform=n}}function q_(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Qr&&s instanceof Qr||r instanceof Xr&&s instanceof Xr?Qn(r.elements,s.elements,Re):r instanceof Yr&&s instanceof Yr?Re(r.Pe,s.Pe):r instanceof Ys&&s instanceof Ys}(e.transform,t.transform)}class z_{constructor(t,n){this.version=t,this.transformResults=n}}class we{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new we}static exists(t){return new we(void 0,t)}static updateTime(t){return new we(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ls(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class mi{}function Uh(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new jh(e.key,we.none()):new ns(e.key,e.data,we.none());{const n=e.data,r=te.empty();let s=new Bt(Ut.comparator);for(let o of t.fields)if(!s.has(o)){let a=n.field(o);a===null&&o.length>1&&(o=o.popLast(),a=n.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new sn(e.key,r,new oe(s.toArray()),we.none())}}function H_(e,t,n){e instanceof ns?function(s,o,a){const c=s.value.clone(),u=Sc(s.fieldTransforms,o,a.transformResults);c.setAll(u),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(e,t,n):e instanceof sn?function(s,o,a){if(!Ls(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Sc(s.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(Bh(s)),u.setAll(c),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(e,t,n):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function kr(e,t,n,r){return e instanceof ns?function(o,a,c,u){if(!Ls(o.precondition,a))return c;const f=o.value.clone(),p=Cc(o.fieldTransforms,u,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(e,t,n,r):e instanceof sn?function(o,a,c,u){if(!Ls(o.precondition,a))return c;const f=Cc(o.fieldTransforms,u,a),p=a.data;return p.setAll(Bh(o)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(e,t,n,r):function(o,a,c){return Ls(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(e,t,n)}function K_(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),o=Mh(r.transform,s||null);o!=null&&(n===null&&(n=te.empty()),n.set(r.field,o))}return n||null}function Pc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qn(r,s,(o,a)=>q_(o,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ns extends mi{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class sn extends mi{constructor(t,n,r,s,o=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Bh(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Sc(e,t,n){const r=new Map;Et(e.length===n.length);for(let s=0;s<n.length;s++){const o=e[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,j_(a,c,n[s]))}return r}function Cc(e,t,n){const r=new Map;for(const s of e){const o=s.transform,a=n.data.field(s.field);r.set(s.field,B_(o,a,t))}return r}class jh extends mi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class G_ extends mi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&H_(o,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=kr(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=kr(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Dh();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=n.has(s.key)?null:c;const u=Uh(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(nt.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),at())}isEqual(t){return this.batchId===t.batchId&&Qn(this.mutations,t.mutations,(n,r)=>Pc(n,r))&&Qn(this.baseMutations,t.baseMutations,(n,r)=>Pc(n,r))}}class da{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){Et(t.mutations.length===r.length);let s=function(){return k_}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new da(t,n,r,s)}}/**
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
 */class Q_{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class X_{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St,lt;function Y_(e){switch(e){default:return et();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function $h(e){if(e===void 0)return Oe("GRPC error has no .code"),O.UNKNOWN;switch(e){case St.OK:return O.OK;case St.CANCELLED:return O.CANCELLED;case St.UNKNOWN:return O.UNKNOWN;case St.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case St.INTERNAL:return O.INTERNAL;case St.UNAVAILABLE:return O.UNAVAILABLE;case St.UNAUTHENTICATED:return O.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case St.NOT_FOUND:return O.NOT_FOUND;case St.ALREADY_EXISTS:return O.ALREADY_EXISTS;case St.PERMISSION_DENIED:return O.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case St.ABORTED:return O.ABORTED;case St.OUT_OF_RANGE:return O.OUT_OF_RANGE;case St.UNIMPLEMENTED:return O.UNIMPLEMENTED;case St.DATA_LOSS:return O.DATA_LOSS;default:return et()}}(lt=St||(St={}))[lt.OK=0]="OK",lt[lt.CANCELLED=1]="CANCELLED",lt[lt.UNKNOWN=2]="UNKNOWN",lt[lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",lt[lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",lt[lt.NOT_FOUND=5]="NOT_FOUND",lt[lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",lt[lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",lt[lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",lt[lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",lt[lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",lt[lt.ABORTED=10]="ABORTED",lt[lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",lt[lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",lt[lt.INTERNAL=13]="INTERNAL",lt[lt.UNAVAILABLE=14]="UNAVAILABLE",lt[lt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function J_(){return new TextEncoder}/**
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
 */const Z_=new In([4294967295,4294967295],0);function Vc(e){const t=J_().encode(e),n=new ch;return n.update(t),new Uint8Array(n.digest())}function Dc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new In([n,r],0),new In([s,o],0)]}class pa{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Pr(`Invalid padding: ${n}`);if(r<0)throw new Pr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Pr(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Pr(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*t.length-n,this.Te=In.fromNumber(this.Ie)}Ee(t,n,r){let s=t.add(n.multiply(In.fromNumber(r)));return s.compare(Z_)===1&&(s=new In([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const n=Vc(t),[r,s]=Dc(n);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new pa(o,s,n);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const n=Vc(t),[r,s]=Dc(n);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Pr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,n,r,s,o){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,rs.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new _i(nt.min(),s,new It(pt),Me(),at())}}class rs{constructor(t,n,r,s,o){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new rs(r,n,at(),at(),at())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,n,r,s){this.Re=t,this.removedTargetIds=n,this.key=r,this.Ve=s}}class qh{constructor(t,n){this.targetId=t,this.me=n}}class zh{constructor(t,n,r=Wt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class xc{constructor(){this.fe=0,this.ge=Oc(),this.pe=Wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=at(),n=at(),r=at();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:et()}}),new rs(this.pe,this.ye,t,n,r)}ve(){this.we=!1,this.ge=Oc()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Et(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ty{constructor(t){this.Le=t,this.Be=new Map,this.ke=Me(),this.qe=Nc(),this.Qe=new It(pt)}Ke(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(n,t.Ve):this.Ue(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.Ue(n,t.key,t.Ve)}We(t){this.forEachTarget(t,n=>{const r=this.Ge(n);switch(t.state){case 0:this.ze(n)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(t.resumeToken));break;default:et()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(t){const n=t.targetId,r=t.me.count,s=this.Je(n);if(s){const o=s.target;if(Po(o))if(r===0){const a=new Y(o.path);this.Ue(n,a,Kt.newNoDocument(a,nt.min()))}else Et(r===1);else{const a=this.Ye(n);if(a!==r){const c=this.Ze(t),u=c?this.Xe(c,t,a):1;if(u!==0){this.je(n);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,f)}}}}}Ze(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=bn(r).toUint8Array()}catch(u){if(u instanceof Eh)return Wn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new pa(a,s,o)}catch(u){return Wn(u instanceof Pr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(t,n,r){return n.me.count===r-this.nt(t,n.targetId)?0:2}nt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(n,o,null),s++)}),s}rt(t){const n=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&Po(c.target)){const u=new Y(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Kt.newNoDocument(u,t))}o.be&&(n.set(a,o.Ce()),o.ve())}});let r=at();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(u=>{const f=this.Je(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new _i(t,n,this.Qe,this.ke,r);return this.ke=Me(),this.qe=Nc(),this.Qe=new It(pt),s}$e(t,n){if(!this.ze(t))return;const r=this.it(t,n.key)?2:0;this.Ge(t).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t))}Ue(t,n,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(t)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const n=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let n=this.Be.get(t);return n||(n=new xc,this.Be.set(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new Bt(pt),this.qe=this.qe.insert(t,n)),n}ze(t){const n=this.Je(t)!==null;return n||z("WatchChangeAggregator","Detected inactive target",t),n}Je(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new xc),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.Ue(t,n,null)})}it(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function Nc(){return new It(Y.comparator)}function Oc(){return new It(Y.comparator)}const ey={asc:"ASCENDING",desc:"DESCENDING"},ny={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ry={and:"AND",or:"OR"};class sy{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Co(e,t){return e.useProto3Json||hi(t)?t:{value:t}}function Js(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hh(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function iy(e,t){return Js(e,t.toTimestamp())}function Ae(e){return Et(!!e),nt.fromTimestamp(function(n){const r=Ze(n);return new Nt(r.seconds,r.nanos)}(e))}function ga(e,t){return Vo(e,t).canonicalString()}function Vo(e,t){const n=function(s){return new Rt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Kh(e){const t=Rt.fromString(e);return Et(Yh(t)),t}function Do(e,t){return ga(e.databaseId,t.path)}function eo(e,t){const n=Kh(t);if(n.get(1)!==e.databaseId.projectId)throw new X(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new X(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Y(Wh(n))}function Gh(e,t){return ga(e.databaseId,t)}function oy(e){const t=Kh(e);return t.length===4?Rt.emptyPath():Wh(t)}function xo(e){return new Rt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Wh(e){return Et(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Mc(e,t,n){return{name:Do(e,t),fields:n.value.mapValue.fields}}function ay(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:et()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(Et(p===void 0||typeof p=="string"),Wt.fromBase64String(p||"")):(Et(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Wt.fromUint8Array(p||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const p=f.code===void 0?O.UNKNOWN:$h(f.code);return new X(p,f.message||"")}(a);n=new zh(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=eo(e,r.document.name),o=Ae(r.document.updateTime),a=r.document.createTime?Ae(r.document.createTime):nt.min(),c=new te({mapValue:{fields:r.document.fields}}),u=Kt.newFoundDocument(s,o,a,c),f=r.targetIds||[],p=r.removedTargetIds||[];n=new Us(f,p,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=eo(e,r.document),o=r.readTime?Ae(r.readTime):nt.min(),a=Kt.newNoDocument(s,o),c=r.removedTargetIds||[];n=new Us([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=eo(e,r.document),o=r.removedTargetIds||[];n=new Us([],o,s,null)}else{if(!("filter"in t))return et();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new X_(s,o),c=r.targetId;n=new qh(c,a)}}return n}function ly(e,t){let n;if(t instanceof ns)n={update:Mc(e,t.key,t.value)};else if(t instanceof jh)n={delete:Do(e,t.key)};else if(t instanceof sn)n={update:Mc(e,t.key,t.data),updateMask:_y(t.fieldMask)};else{if(!(t instanceof G_))return et();n={verify:Do(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof Ys)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Qr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Xr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Yr)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw et()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:iy(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:et()}(e,t.precondition)),n}function cy(e,t){return e&&e.length>0?(Et(t!==void 0),e.map(n=>function(s,o){let a=s.updateTime?Ae(s.updateTime):Ae(o);return a.isEqual(nt.min())&&(a=Ae(o)),new z_(a,s.transformResults||[])}(n,t))):[]}function uy(e,t){return{documents:[Gh(e,t.path)]}}function hy(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Gh(e,s);const o=function(f){if(f.length!==0)return Xh(be.create(f,"and"))}(t.filters);o&&(n.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(p=>function(T){return{field:Un(T.field),direction:py(T.dir)}}(p))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Co(e,t.limit);return c!==null&&(n.structuredQuery.limit=c),t.startAt&&(n.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:n,parent:s}}function fy(e){let t=oy(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Et(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];n.where&&(o=function(E){const T=Qh(E);return T instanceof be&&wh(T)?T.getFilters():[T]}(n.where));let a=[];n.orderBy&&(a=function(E){return E.map(T=>function(k){return new Xs(Bn(k.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(T))}(n.orderBy));let c=null;n.limit&&(c=function(E){let T;return T=typeof E=="object"?E.value:E,hi(T)?null:T}(n.limit));let u=null;n.startAt&&(u=function(E){const T=!!E.before,P=E.values||[];return new Qs(P,T)}(n.startAt));let f=null;return n.endAt&&(f=function(E){const T=!E.before,P=E.values||[];return new Qs(P,T)}(n.endAt)),V_(t,s,a,o,c,"F",u,f)}function dy(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return et()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Qh(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Bn(n.unaryFilter.field);return xt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Bn(n.unaryFilter.field);return xt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Bn(n.unaryFilter.field);return xt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Bn(n.unaryFilter.field);return xt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return et()}}(e):e.fieldFilter!==void 0?function(n){return xt.create(Bn(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return et()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return be.create(n.compositeFilter.filters.map(r=>Qh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return et()}}(n.compositeFilter.op))}(e):et()}function py(e){return ey[e]}function gy(e){return ny[e]}function my(e){return ry[e]}function Un(e){return{fieldPath:e.canonicalString()}}function Bn(e){return Ut.fromServerFormat(e.fieldPath)}function Xh(e){return e instanceof xt?function(n){if(n.op==="=="){if(Tc(n.value))return{unaryFilter:{field:Un(n.field),op:"IS_NAN"}};if(vc(n.value))return{unaryFilter:{field:Un(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Tc(n.value))return{unaryFilter:{field:Un(n.field),op:"IS_NOT_NAN"}};if(vc(n.value))return{unaryFilter:{field:Un(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Un(n.field),op:gy(n.op),value:n.value}}}(e):e instanceof be?function(n){const r=n.getFilters().map(s=>Xh(s));return r.length===1?r[0]:{compositeFilter:{op:my(n.op),filters:r}}}(e):et()}function _y(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Yh(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,n,r,s,o=nt.min(),a=nt.min(),c=Wt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(t){return new He(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(t){this.ct=t}}function Ey(e){const t=fy({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?So(t,t.limit,"L"):t}/**
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
 */class vy{constructor(){this._n=new Ty}addToCollectionParentIndex(t,n){return this._n.add(n),N.resolve()}getCollectionParents(t,n){return N.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return N.resolve()}deleteFieldIndex(t,n){return N.resolve()}deleteAllFieldIndexes(t){return N.resolve()}createTargetIndexes(t,n){return N.resolve()}getDocumentsMatchingTarget(t,n){return N.resolve(null)}getIndexType(t,n){return N.resolve(0)}getFieldIndexes(t,n){return N.resolve([])}getNextCollectionGroupToUpdate(t){return N.resolve(null)}getMinOffset(t,n){return N.resolve(Je.min())}getMinOffsetFromCollectionGroup(t,n){return N.resolve(Je.min())}updateCollectionGroup(t,n,r){return N.resolve()}updateIndexEntries(t,n){return N.resolve()}}class Ty{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Bt(Rt.comparator),o=!s.has(r);return this.index[n]=s.add(r),o}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Bt(Rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Jn(0)}static Ln(){return new Jn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(){this.changes=new sr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Kt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wy{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&kr(r.mutation,s,oe.empty(),Nt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,at()).next(()=>r))}getLocalViewOfDocuments(t,n,r=at()){const s=yn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(o=>{let a=br();return o.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=yn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,at()))}populateOverlays(t,n,r){const s=[];return r.forEach(o=>{n.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{n.set(a,c)})})}computeViews(t,n,r,s){let o=Me();const a=Mr(),c=function(){return Mr()}();return n.forEach((u,f)=>{const p=r.get(f.key);s.has(f.key)&&(p===void 0||p.mutation instanceof sn)?o=o.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),kr(p.mutation,f,p.mutation.getFieldMask(),Nt.now())):a.set(f.key,oe.empty())}),this.recalculateAndSaveOverlays(t,o).next(u=>(u.forEach((f,p)=>a.set(f,p)),n.forEach((f,p)=>{var E;return c.set(f,new wy(p,(E=a.get(f))!==null&&E!==void 0?E:null))}),c))}recalculateAndSaveOverlays(t,n){const r=Mr();let s=new It((a,c)=>a-c),o=at();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const c of a)c.keys().forEach(u=>{const f=n.get(u);if(f===null)return;let p=r.get(u)||oe.empty();p=c.applyToLocalView(f,p),r.set(u,p);const E=(s.get(c.batchId)||at()).add(u);s=s.insert(c.batchId,E)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),f=u.key,p=u.value,E=Dh();p.forEach(T=>{if(!o.has(T)){const P=Uh(n.get(T),r.get(T));P!==null&&E.set(T,P),o=o.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,E))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(a){return Y.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):D_(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-o.size):N.resolve(yn());let c=-1,u=o;return a.next(f=>N.forEach(f,(p,E)=>(c<E.largestBatchId&&(c=E.largestBatchId),o.get(p)?N.resolve():this.remoteDocumentCache.getEntry(t,p).next(T=>{u=u.insert(p,T)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,u,f,at())).next(p=>({batchId:c,changes:Vh(p)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Y(n)).next(r=>{let s=br();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const o=n.collectionGroup;let a=br();return this.indexManager.getCollectionParents(t,o).next(c=>N.forEach(c,u=>{const f=function(E,T){return new fi(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(p=>{p.forEach((E,T)=>{a=a.insert(E,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,o,s))).next(a=>{o.forEach((u,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,Kt.newInvalidDocument(p)))});let c=br();return a.forEach((u,f)=>{const p=o.get(u);p!==void 0&&kr(p.mutation,f,oe.empty(),Nt.now()),pi(n,f)&&(c=c.insert(u,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return N.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ae(s.createTime)}}(n)),N.resolve()}getNamedQuery(t,n){return N.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Ey(s.bundledQuery),readTime:Ae(s.readTime)}}(n)),N.resolve()}}/**
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
 */class by{constructor(){this.overlays=new It(Y.comparator),this.hr=new Map}getOverlay(t,n){return N.resolve(this.overlays.get(n))}getOverlays(t,n){const r=yn();return N.forEach(n,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,o)=>{this.ht(t,n,o)}),N.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),N.resolve()}getOverlaysForCollection(t,n,r){const s=yn(),o=n.length+1,a=new Y(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,f=u.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===o&&u.largestBatchId>r&&s.set(u.getKey(),u)}return N.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let o=new It((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let p=o.get(f.largestBatchId);p===null&&(p=yn(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const c=yn(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,p)=>c.set(f,p)),!(c.size()>=s)););return N.resolve(c)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Q_(n,r));let o=this.hr.get(n);o===void 0&&(o=at(),this.hr.set(n,o)),this.hr.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this.Pr=new Bt(Ot.Ir),this.Tr=new Bt(Ot.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new Ot(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new Ot(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new Y(new Rt([])),r=new Ot(n,t),s=new Ot(n,t+1),o=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new Y(new Rt([])),r=new Ot(n,t),s=new Ot(n,t+1);let o=at();return this.Tr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const n=new Ot(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ot{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return Y.comparator(t.key,n.key)||pt(t.pr,n.pr)}static Er(t,n){return pt(t.pr,n.pr)||Y.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Bt(Ot.Ir)}checkEmpty(t){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new W_(o,n,r,s);this.mutationQueue.push(a);for(const c of s)this.wr=this.wr.add(new Ot(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(t,n){return N.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),o=s<0?0:s;return N.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ot(n,0),s=new Ot(n,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,s],a=>{const c=this.Sr(a.pr);o.push(c)}),N.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Bt(pt);return n.forEach(s=>{const o=new Ot(s,0),a=new Ot(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],c=>{r=r.add(c.pr)})}),N.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let o=r;Y.isDocumentKey(o)||(o=o.child(""));const a=new Ot(new Y(o),0);let c=new Bt(pt);return this.wr.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(u.pr)),!0)},a),N.resolve(this.Dr(c))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Et(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return N.forEach(n.mutations,s=>{const o=new Ot(s.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new Ot(n,0),s=this.wr.firstAfterOrEqual(r);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,N.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(t){this.vr=t,this.docs=function(){return new It(Y.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),o=s?s.size:0,a=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():Kt.newInvalidDocument(n))}getEntries(t,n){let r=Me();return n.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Kt.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let o=Me();const a=n.path,c=new Y(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:f,value:{document:p}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||f_(h_(p),r)<=0||(s.has(p.key)||pi(n,p))&&(o=o.insert(p.key,p.mutableCopy()))}return N.resolve(o)}getAllFromCollectionGroup(t,n,r,s){et()}Fr(t,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Cy(this)}getSize(t){return N.resolve(this.size)}}class Cy extends Iy{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),N.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(t){this.persistence=t,this.Mr=new sr(n=>ua(n),ha),this.lastRemoteSnapshotVersion=nt.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ma,this.targetCount=0,this.Lr=Jn.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),N.resolve()}getLastRemoteSnapshotVersion(t){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return N.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),N.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new Jn(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,N.resolve()}updateTargetData(t,n){return this.qn(n),N.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(t,n,r){let s=0;const o=[];return this.Mr.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),N.waitFor(o).next(()=>s)}getTargetCount(t){return N.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return N.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),N.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,o=[];return s&&n.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),N.waitFor(o)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),N.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return N.resolve(r)}containsKey(t,n){return N.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(t,n){this.Br={},this.overlays={},this.kr=new oa(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Vy(this),this.indexManager=new vy,this.remoteDocumentCache=function(s){return new Sy(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new yy(n),this.$r=new Ry(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new by,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new Py(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){z("MemoryPersistence","Starting transaction:",t);const s=new xy(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,n){return N.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class xy extends p_{constructor(t){super(),this.currentSequenceNumber=t}}class _a{constructor(t){this.persistence=t,this.zr=new ma,this.jr=null}static Hr(t){return new _a(t)}get Jr(){if(this.jr)return this.jr;throw et()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),N.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),N.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Jr,r=>{const s=Y.fromPath(r);return this.Yr(t,s).next(o=>{o||n.removeEntry(s,nt.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return N.or([()=>N.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=at(),s=at();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ya(t,n.fromCache,r,s)}}/**
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
 */class Ny{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Oy{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Bg()?8:g_(Lg())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const o={result:null};return this.ji(t,n).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(t,n,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Ny;return this.Ji(t,n,a).next(c=>{if(o.result=c,this.Ui)return this.Yi(t,n,a,c.size)})}).next(()=>o.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?(wr()<=ht.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Ln(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),N.resolve()):(wr()<=ht.DEBUG&&z("QueryEngine","Query:",Ln(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(wr()<=ht.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Ln(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ie(n))):N.resolve())}ji(t,n){if(Rc(n))return N.resolve(null);let r=Ie(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=So(n,null,"F"),r=Ie(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=at(...o);return this.zi.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(u=>{const f=this.Zi(n,c);return this.Xi(n,f,a,u.readTime)?this.ji(t,So(n,null,"F")):this.es(t,f,n,u)}))})))}Hi(t,n,r,s){return Rc(n)||s.isEqual(nt.min())?N.resolve(null):this.zi.getDocuments(t,r).next(o=>{const a=this.Zi(n,o);return this.Xi(n,a,r,s)?N.resolve(null):(wr()<=ht.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ln(n)),this.es(t,a,n,u_(s,-1)).next(c=>c))})}Zi(t,n){let r=new Bt(Sh(t));return n.forEach((s,o)=>{pi(t,o)&&(r=r.add(o))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const o=t.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,n,r){return wr()<=ht.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Ln(n)),this.zi.getDocumentsMatchingQuery(t,n,Je.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(o=>(n.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new It(pt),this.rs=new sr(o=>ua(o),ha),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ay(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function ky(e,t,n,r){return new My(e,t,n,r)}async function Jh(e,t){const n=st(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let u=at();for(const f of s){a.push(f.batchId);for(const p of f.mutations)u=u.add(p.key)}for(const f of o){c.push(f.batchId);for(const p of f.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(f=>({us:f,removedBatchIds:a,addedBatchIds:c}))})})}function Fy(e,t){const n=st(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=n.os.newChangeBuffer({trackRemovals:!0});return function(c,u,f,p){const E=f.batch,T=E.keys();let P=N.resolve();return T.forEach(k=>{P=P.next(()=>p.getEntry(u,k)).next(B=>{const L=f.docVersions.get(k);Et(L!==null),B.version.compareTo(L)<0&&(E.applyToRemoteDocument(B,f),B.isValidDocument()&&(B.setReadTime(f.commitVersion),p.addEntry(B)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(u,E))}(n,r,t,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=at();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(u=u.add(c.batch.mutations[f].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Zh(e){const t=st(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function Ly(e,t){const n=st(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];t.targetChanges.forEach((p,E)=>{const T=s.get(E);if(!T)return;c.push(n.Qr.removeMatchingKeys(o,p.removedDocuments,E).next(()=>n.Qr.addMatchingKeys(o,p.addedDocuments,E)));let P=T.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?P=P.withResumeToken(Wt.EMPTY_BYTE_STRING,nt.min()).withLastLimboFreeSnapshotVersion(nt.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,r)),s=s.insert(E,P),function(B,L,Z){return B.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=3e8?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0}(T,P,p)&&c.push(n.Qr.updateTargetData(o,P))});let u=Me(),f=at();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(Uy(o,a,t.documentUpdates).next(p=>{u=p.cs,f=p.ls})),!r.isEqual(nt.min())){const p=n.Qr.getLastRemoteSnapshotVersion(o).next(E=>n.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(p)}return N.waitFor(c).next(()=>a.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,u,f)).next(()=>u)}).then(o=>(n.ns=s,o))}function Uy(e,t,n){let r=at(),s=at();return n.forEach(o=>r=r.add(o)),t.getEntries(e,r).next(o=>{let a=Me();return n.forEach((c,u)=>{const f=o.get(c);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(nt.min())?(t.removeEntry(c,u.readTime),a=a.insert(c,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(u),a=a.insert(c,u)):z("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",u.version)}),{cs:a,ls:s}})}function By(e,t){const n=st(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function jy(e,t){const n=st(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(o=>o?(s=o,N.resolve(s)):n.Qr.allocateTargetId(r).next(a=>(s=new He(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function No(e,t,n){const r=st(e),s=r.ns.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!es(a))throw a;z("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function kc(e,t,n){const r=st(e);let s=nt.min(),o=at();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,f,p){const E=st(u),T=E.rs.get(p);return T!==void 0?N.resolve(E.ns.get(T)):E.Qr.getTargetData(f,p)}(r,a,Ie(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,c.targetId).next(u=>{o=u})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,n?s:nt.min(),n?o:at())).next(c=>($y(r,N_(t),c),{documents:c,hs:o})))}function $y(e,t,n){let r=e.ss.get(t)||nt.min();n.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),e.ss.set(t,r)}class Fc{constructor(){this.activeTargetIds=U_()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class qy{constructor(){this.no=new Fc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Fc,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class zy{io(t){}shutdown(){}}/**
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
 */class Lc{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vs=null;function no(){return Vs===null?Vs=function(){return 268435456+Math.round(2147483648*Math.random())}():Vs++,"0x"+Vs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="WebChannelConnection";class Gy extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(n,r,s,o,a){const c=no(),u=this.vo(n,r.toUriEncodedString());z("RestConnection",`Sending RPC '${n}' ${c}:`,u,s);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,a),this.Mo(n,u,f,s).then(p=>(z("RestConnection",`Received RPC '${n}' ${c}: `,p),p),p=>{throw Wn("RestConnection",`RPC '${n}' ${c} failed with error: `,p,"url: ",u,"request:",s),p})}xo(n,r,s,o,a,c){return this.Co(n,r,s,o,a)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>n[a]=o),s&&s.headers.forEach((o,a)=>n[a]=o)}vo(n,r){const s=Hy[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,n,r,s){const o=no();return new Promise((a,c)=>{const u=new uh;u.setWithCredentials(!0),u.listenOnce(fh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ks.NO_ERROR:const p=u.getResponseJson();z(zt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case ks.TIMEOUT:z(zt,`RPC '${t}' ${o} timed out`),c(new X(O.DEADLINE_EXCEEDED,"Request time out"));break;case ks.HTTP_ERROR:const E=u.getStatus();if(z(zt,`RPC '${t}' ${o} failed with status:`,E,"response text:",u.getResponseText()),E>0){let T=u.getResponseJson();Array.isArray(T)&&(T=T[0]);const P=T==null?void 0:T.error;if(P&&P.status&&P.message){const k=function(L){const Z=L.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(Z)>=0?Z:O.UNKNOWN}(P.status);c(new X(k,P.message))}else c(new X(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new X(O.UNAVAILABLE,"Connection failed."));break;default:et()}}finally{z(zt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);z(zt,`RPC '${t}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}Oo(t,n,r){const s=no(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=gh(),c=ph(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.xmlHttpFactory=new hh({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=o.join("");z(zt,`Creating RPC '${t}' stream ${s}: ${p}`,u);const E=a.createWebChannel(p,u);let T=!1,P=!1;const k=new Ky({lo:L=>{P?z(zt,`Not sending because RPC '${t}' stream ${s} is closed:`,L):(T||(z(zt,`Opening RPC '${t}' stream ${s} transport.`),E.open(),T=!0),z(zt,`RPC '${t}' stream ${s} sending:`,L),E.send(L))},ho:()=>E.close()}),B=(L,Z,tt)=>{L.listen(Z,W=>{try{tt(W)}catch(ot){setTimeout(()=>{throw ot},0)}})};return B(E,Rr.EventType.OPEN,()=>{P||(z(zt,`RPC '${t}' stream ${s} transport opened.`),k.mo())}),B(E,Rr.EventType.CLOSE,()=>{P||(P=!0,z(zt,`RPC '${t}' stream ${s} transport closed`),k.po())}),B(E,Rr.EventType.ERROR,L=>{P||(P=!0,Wn(zt,`RPC '${t}' stream ${s} transport errored:`,L),k.po(new X(O.UNAVAILABLE,"The operation could not be completed")))}),B(E,Rr.EventType.MESSAGE,L=>{var Z;if(!P){const tt=L.data[0];Et(!!tt);const W=tt,ot=W.error||((Z=W[0])===null||Z===void 0?void 0:Z.error);if(ot){z(zt,`RPC '${t}' stream ${s} received error:`,ot);const wt=ot.status;let J=function(y){const v=St[y];if(v!==void 0)return $h(v)}(wt),w=ot.message;J===void 0&&(J=O.INTERNAL,w="Unknown error status: "+wt+" with message "+ot.message),P=!0,k.po(new X(J,w)),E.close()}else z(zt,`RPC '${t}' stream ${s} received:`,tt),k.yo(tt)}}),B(c,dh.STAT_EVENT,L=>{L.stat===wo.PROXY?z(zt,`RPC '${t}' stream ${s} detected buffering proxy`):L.stat===wo.NOPROXY&&z(zt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.fo()},0),k}}function ro(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(e){return new sy(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t,n,r=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=n,this.No=r,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t,n,r,s,o,a,c,u){this.oi=t,this.Go=r,this.zo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new tf(t,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Oe(n.toString()),Oe("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(n)}__(){}auth(){this.state=1;const t=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{t(()=>{const s=new X(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,n){const r=this.a_(this.jo);this.stream=this.l_(t,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return z("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return n=>{this.oi.enqueueAndForget(()=>this.jo===t?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Wy extends ef{constructor(t,n,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=o}l_(t,n){return this.connection.Oo("Listen",t,n)}onMessage(t){this.Yo.reset();const n=ay(this.serializer,t),r=function(o){if(!("targetChange"in o))return nt.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?nt.min():a.readTime?Ae(a.readTime):nt.min()}(t);return this.listener.h_(n,r)}P_(t){const n={};n.database=xo(this.serializer),n.addTarget=function(o,a){let c;const u=a.target;if(c=Po(u)?{documents:uy(o,u)}:{query:hy(o,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Hh(o,a.resumeToken);const f=Co(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(nt.min())>0){c.readTime=Js(o,a.snapshotVersion.toTimestamp());const f=Co(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=dy(this.serializer,t);r&&(n.labels=r),this.i_(n)}I_(t){const n={};n.database=xo(this.serializer),n.removeTarget=t,this.i_(n)}}class Qy extends ef{constructor(t,n,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,n){return this.connection.Oo("Write",t,n)}onMessage(t){if(Et(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const n=cy(t.writeResults,t.commitTime),r=Ae(t.commitTime);return this.listener.A_(r,n)}return Et(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=xo(this.serializer),this.i_(t)}d_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>ly(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new X(O.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(t,Vo(n,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(O.UNKNOWN,o.toString())})}xo(t,n,r,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.xo(t,Vo(n,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new X(O.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Yy{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Oe(n),this.y_=!1):z("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(t,n,r,s,o){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{Vn(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const f=st(u);f.M_.add(4),await ss(f),f.N_.set("Unknown"),f.M_.delete(4),await Ei(f)}(this))})}),this.N_=new Yy(r,s)}}async function Ei(e){if(Vn(e))for(const t of e.x_)await t(!0)}async function ss(e){for(const t of e.x_)await t(!1)}function nf(e,t){const n=st(e);n.F_.has(t.targetId)||(n.F_.set(t.targetId,t),Ia(n)?Ta(n):ir(n).Xo()&&va(n,t))}function Ea(e,t){const n=st(e),r=ir(n);n.F_.delete(t),r.Xo()&&rf(n,t),n.F_.size===0&&(r.Xo()?r.n_():Vn(n)&&n.N_.set("Unknown"))}function va(e,t){if(e.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(nt.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ir(e).P_(t)}function rf(e,t){e.L_.xe(t),ir(e).I_(t)}function Ta(e){e.L_=new ty({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.F_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),ir(e).start(),e.N_.w_()}function Ia(e){return Vn(e)&&!ir(e).Zo()&&e.F_.size>0}function Vn(e){return st(e).M_.size===0}function sf(e){e.L_=void 0}async function Zy(e){e.N_.set("Online")}async function tE(e){e.F_.forEach((t,n)=>{va(e,t)})}async function eE(e,t){sf(e),Ia(e)?(e.N_.D_(t),Ta(e)):e.N_.set("Unknown")}async function nE(e,t,n){if(e.N_.set("Online"),t instanceof zh&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.F_.delete(c),s.L_.removeTarget(c))}(e,t)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Zs(e,r)}else if(t instanceof Us?e.L_.Ke(t):t instanceof qh?e.L_.He(t):e.L_.We(t),!n.isEqual(nt.min()))try{const r=await Zh(e.localStore);n.compareTo(r)>=0&&await function(o,a){const c=o.L_.rt(a);return c.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const p=o.F_.get(f);p&&o.F_.set(f,p.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,f)=>{const p=o.F_.get(u);if(!p)return;o.F_.set(u,p.withResumeToken(Wt.EMPTY_BYTE_STRING,p.snapshotVersion)),rf(o,u);const E=new He(p.target,u,f,p.sequenceNumber);va(o,E)}),o.remoteSyncer.applyRemoteEvent(c)}(e,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await Zs(e,r)}}async function Zs(e,t,n){if(!es(t))throw t;e.M_.add(1),await ss(e),e.N_.set("Offline"),n||(n=()=>Zh(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),e.M_.delete(1),await Ei(e)})}function of(e,t){return t().catch(n=>Zs(e,n,t))}async function vi(e){const t=st(e),n=tn(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;rE(t);)try{const s=await By(t.localStore,r);if(s===null){t.v_.length===0&&n.n_();break}r=s.batchId,sE(t,s)}catch(s){await Zs(t,s)}af(t)&&lf(t)}function rE(e){return Vn(e)&&e.v_.length<10}function sE(e,t){e.v_.push(t);const n=tn(e);n.Xo()&&n.E_&&n.d_(t.mutations)}function af(e){return Vn(e)&&!tn(e).Zo()&&e.v_.length>0}function lf(e){tn(e).start()}async function iE(e){tn(e).V_()}async function oE(e){const t=tn(e);for(const n of e.v_)t.d_(n.mutations)}async function aE(e,t,n){const r=e.v_.shift(),s=da.from(r,t,n);await of(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await vi(e)}async function lE(e,t){t&&tn(e).E_&&await async function(r,s){if(function(a){return Y_(a)&&a!==O.ABORTED}(s.code)){const o=r.v_.shift();tn(r).t_(),await of(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await vi(r)}}(e,t),af(e)&&lf(e)}async function Uc(e,t){const n=st(e);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=Vn(n);n.M_.add(3),await ss(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.M_.delete(3),await Ei(n)}async function cE(e,t){const n=st(e);t?(n.M_.delete(2),await Ei(n)):t||(n.M_.add(2),await ss(n),n.N_.set("Unknown"))}function ir(e){return e.B_||(e.B_=function(n,r,s){const o=st(n);return o.f_(),new Wy(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(e.datastore,e.asyncQueue,{Po:Zy.bind(null,e),To:tE.bind(null,e),Ao:eE.bind(null,e),h_:nE.bind(null,e)}),e.x_.push(async t=>{t?(e.B_.t_(),Ia(e)?Ta(e):e.N_.set("Unknown")):(await e.B_.stop(),sf(e))})),e.B_}function tn(e){return e.k_||(e.k_=function(n,r,s){const o=st(n);return o.f_(),new Qy(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(e.datastore,e.asyncQueue,{Po:()=>Promise.resolve(),To:iE.bind(null,e),Ao:lE.bind(null,e),R_:oE.bind(null,e),A_:aE.bind(null,e)}),e.x_.push(async t=>{t?(e.k_.t_(),await vi(e)):(await e.k_.stop(),e.v_.length>0&&(z("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]))})),e.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,n,r,s,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Xe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,o){const a=Date.now()+r,c=new wa(t,n,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(O.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Aa(e,t){if(Oe("AsyncQueue",`${t}: ${e}`),es(e))return new X(O.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t){this.comparator=t?(n,r)=>t(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=br(),this.sortedSet=new It(this.comparator)}static emptySet(t){return new Hn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Hn)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Hn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.q_=new It(Y.comparator)}track(t){const n=t.doc.key,r=this.q_.get(n);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(n,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(n):t.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:t.doc}):et():this.q_=this.q_.insert(n,t)}Q_(){const t=[];return this.q_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Zn{constructor(t,n,r,s,o,a,c,u,f){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(t,n,r,s,o){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new Zn(t,n,Hn.emptySet(n),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&di(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class hE{constructor(){this.queries=new sr(t=>Ph(t),di),this.onlineState="Unknown",this.z_=new Set}}async function fE(e,t){const n=st(e);let r=3;const s=t.query;let o=n.queries.get(s);o?!o.W_()&&t.G_()&&(r=2):(o=new uE,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await n.onListen(s,!0);break;case 1:o.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=Aa(a,`Initialization of query '${Ln(t.query)}' failed`);return void t.onError(c)}n.queries.set(s,o),o.U_.push(t),t.j_(n.onlineState),o.K_&&t.H_(o.K_)&&Ra(n)}async function dE(e,t){const n=st(e),r=t.query;let s=3;const o=n.queries.get(r);if(o){const a=o.U_.indexOf(t);a>=0&&(o.U_.splice(a,1),o.U_.length===0?s=t.G_()?0:1:!o.W_()&&t.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function pE(e,t){const n=st(e);let r=!1;for(const s of t){const o=s.query,a=n.queries.get(o);if(a){for(const c of a.U_)c.H_(s)&&(r=!0);a.K_=s}}r&&Ra(n)}function gE(e,t,n){const r=st(e),s=r.queries.get(t);if(s)for(const o of s.U_)o.onError(n);r.queries.delete(t)}function Ra(e){e.z_.forEach(t=>{t.next()})}var Oo,jc;(jc=Oo||(Oo={})).J_="default",jc.Cache="cache";class mE{constructor(t,n,r){this.query=t,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Zn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),n=!0):this.ta(t,this.onlineState)&&(this.na(t),n=!0),this.X_=t,n}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),n=!0),n}ta(t,n){if(!t.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(t){t=Zn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Oo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t){this.key=t}}class uf{constructor(t){this.key=t}}class _E{constructor(t,n){this.query=t,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=at(),this.mutatedKeys=at(),this.Ia=Sh(t),this.Ta=new Hn(this.Ia)}get Ea(){return this.la}da(t,n){const r=n?n.Aa:new Bc,s=n?n.Ta:this.Ta;let o=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,E)=>{const T=s.get(p),P=pi(this.query,E)?E:null,k=!!T&&this.mutatedKeys.has(T.key),B=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let L=!1;T&&P?T.data.isEqual(P.data)?k!==B&&(r.track({type:3,doc:P}),L=!0):this.Ra(T,P)||(r.track({type:2,doc:P}),L=!0,(u&&this.Ia(P,u)>0||f&&this.Ia(P,f)<0)&&(c=!0)):!T&&P?(r.track({type:0,doc:P}),L=!0):T&&!P&&(r.track({type:1,doc:T}),L=!0,(u||f)&&(c=!0)),L&&(P?(a=a.add(P),o=B?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ta:a,Aa:r,Xi:c,mutatedKeys:o}}Ra(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((p,E)=>function(P,k){const B=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return et()}};return B(P)-B(k)}(p.type,E.type)||this.Ia(p.doc,E.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],u=this.Pa.size===0&&this.current&&!s?1:0,f=u!==this.ha;return this.ha=u,a.length!==0||f?{snapshot:new Zn(this.query,t.Ta,o,a,t.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Bc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(n=>this.la=this.la.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=at(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return t.forEach(r=>{this.Pa.has(r)||n.push(new uf(r))}),this.Pa.forEach(r=>{t.has(r)||n.push(new cf(r))}),n}pa(t){this.la=t.hs,this.Pa=at();const n=this.da(t.documents);return this.applyChanges(n,!0)}ya(){return Zn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class yE{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class EE{constructor(t){this.key=t,this.wa=!1}}class vE{constructor(t,n,r,s,o,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new sr(c=>Ph(c),di),this.Da=new Map,this.Ca=new Set,this.va=new It(Y.comparator),this.Fa=new Map,this.Ma=new ma,this.xa={},this.Oa=new Map,this.Na=Jn.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function TE(e,t,n=!0){const r=mf(e);let s;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ya()):s=await hf(r,t,n,!0),s}async function IE(e,t){const n=mf(e);await hf(n,t,!0,!1)}async function hf(e,t,n,r){const s=await jy(e.localStore,Ie(t)),o=s.targetId,a=n?e.sharedClientState.addLocalQueryTarget(o):"not-current";let c;return r&&(c=await wE(e,t,o,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&nf(e.remoteStore,s),c}async function wE(e,t,n,r,s){e.Ba=(E,T,P)=>async function(B,L,Z,tt){let W=L.view.da(Z);W.Xi&&(W=await kc(B.localStore,L.query,!1).then(({documents:w})=>L.view.da(w,W)));const ot=tt&&tt.targetChanges.get(L.targetId),wt=tt&&tt.targetMismatches.get(L.targetId)!=null,J=L.view.applyChanges(W,B.isPrimaryClient,ot,wt);return qc(B,L.targetId,J.fa),J.snapshot}(e,E,T,P);const o=await kc(e.localStore,t,!0),a=new _E(t,o.hs),c=a.da(o.documents),u=rs.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),f=a.applyChanges(c,e.isPrimaryClient,u);qc(e,n,f.fa);const p=new yE(t,n,a);return e.ba.set(t,p),e.Da.has(n)?e.Da.get(n).push(t):e.Da.set(n,[t]),f.snapshot}async function AE(e,t,n){const r=st(e),s=r.ba.get(t),o=r.Da.get(s.targetId);if(o.length>1)return r.Da.set(s.targetId,o.filter(a=>!di(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await No(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ea(r.remoteStore,s.targetId),Mo(r,s.targetId)}).catch(ts)):(Mo(r,s.targetId),await No(r.localStore,s.targetId,!0))}async function RE(e,t){const n=st(e),r=n.ba.get(t),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ea(n.remoteStore,r.targetId))}async function bE(e,t,n){const r=NE(e);try{const s=await function(a,c){const u=st(a),f=Nt.now(),p=c.reduce((P,k)=>P.add(k.key),at());let E,T;return u.persistence.runTransaction("Locally write mutations","readwrite",P=>{let k=Me(),B=at();return u.os.getEntries(P,p).next(L=>{k=L,k.forEach((Z,tt)=>{tt.isValidDocument()||(B=B.add(Z))})}).next(()=>u.localDocuments.getOverlayedDocuments(P,k)).next(L=>{E=L;const Z=[];for(const tt of c){const W=K_(tt,E.get(tt.key).overlayedDocument);W!=null&&Z.push(new sn(tt.key,W,vh(W.value.mapValue),we.exists(!0)))}return u.mutationQueue.addMutationBatch(P,f,Z,c)}).next(L=>{T=L;const Z=L.applyToLocalDocumentSet(E,B);return u.documentOverlayCache.saveOverlays(P,L.batchId,Z)})}).then(()=>({batchId:T.batchId,changes:Vh(E)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let f=a.xa[a.currentUser.toKey()];f||(f=new It(pt)),f=f.insert(c,u),a.xa[a.currentUser.toKey()]=f}(r,s.batchId,n),await is(r,s.changes),await vi(r.remoteStore)}catch(s){const o=Aa(s,"Failed to persist write");n.reject(o)}}async function ff(e,t){const n=st(e);try{const r=await Ly(n.localStore,t);t.targetChanges.forEach((s,o)=>{const a=n.Fa.get(o);a&&(Et(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?Et(a.wa):s.removedDocuments.size>0&&(Et(a.wa),a.wa=!1))}),await is(n,r,t)}catch(r){await ts(r)}}function $c(e,t,n){const r=st(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((o,a)=>{const c=a.view.j_(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=st(a);u.onlineState=c;let f=!1;u.queries.forEach((p,E)=>{for(const T of E.U_)T.j_(c)&&(f=!0)}),f&&Ra(u)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function PE(e,t,n){const r=st(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Fa.get(t),o=s&&s.key;if(o){let a=new It(Y.comparator);a=a.insert(o,Kt.newNoDocument(o,nt.min()));const c=at().add(o),u=new _i(nt.min(),new Map,new It(pt),a,c);await ff(r,u),r.va=r.va.remove(o),r.Fa.delete(t),ba(r)}else await No(r.localStore,t,!1).then(()=>Mo(r,t,n)).catch(ts)}async function SE(e,t){const n=st(e),r=t.batch.batchId;try{const s=await Fy(n.localStore,t);pf(n,r,null),df(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await is(n,s)}catch(s){await ts(s)}}async function CE(e,t,n){const r=st(e);try{const s=await function(a,c){const u=st(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return u.mutationQueue.lookupMutationBatch(f,c).next(E=>(Et(E!==null),p=E.keys(),u.mutationQueue.removeMutationBatch(f,E))).next(()=>u.mutationQueue.performConsistencyCheck(f)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(f,p,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>u.localDocuments.getDocuments(f,p))})}(r.localStore,t);pf(r,t,n),df(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await is(r,s)}catch(s){await ts(s)}}function df(e,t){(e.Oa.get(t)||[]).forEach(n=>{n.resolve()}),e.Oa.delete(t)}function pf(e,t,n){const r=st(e);let s=r.xa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(n?o.reject(n):o.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}function Mo(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Da.get(t))e.ba.delete(r),n&&e.Sa.ka(r,n);e.Da.delete(t),e.isPrimaryClient&&e.Ma.Vr(t).forEach(r=>{e.Ma.containsKey(r)||gf(e,r)})}function gf(e,t){e.Ca.delete(t.path.canonicalString());const n=e.va.get(t);n!==null&&(Ea(e.remoteStore,n),e.va=e.va.remove(t),e.Fa.delete(n),ba(e))}function qc(e,t,n){for(const r of n)r instanceof cf?(e.Ma.addReference(r.key,t),VE(e,r)):r instanceof uf?(z("SyncEngine","Document no longer in limbo: "+r.key),e.Ma.removeReference(r.key,t),e.Ma.containsKey(r.key)||gf(e,r.key)):et()}function VE(e,t){const n=t.key,r=n.path.canonicalString();e.va.get(n)||e.Ca.has(r)||(z("SyncEngine","New document in limbo: "+n),e.Ca.add(r),ba(e))}function ba(e){for(;e.Ca.size>0&&e.va.size<e.maxConcurrentLimboResolutions;){const t=e.Ca.values().next().value;e.Ca.delete(t);const n=new Y(Rt.fromString(t)),r=e.Na.next();e.Fa.set(r,new EE(n)),e.va=e.va.insert(n,r),nf(e.remoteStore,new He(Ie(fa(n.path)),r,"TargetPurposeLimboResolution",oa.oe))}}async function is(e,t,n){const r=st(e),s=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((c,u)=>{a.push(r.Ba(u,t,n).then(f=>{if((f||n)&&r.isPrimaryClient){const p=f&&!f.fromCache;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(f){s.push(f);const p=ya.Ki(u.targetId,f);o.push(p)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(u,f){const p=st(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>N.forEach(f,T=>N.forEach(T.qi,P=>p.persistence.referenceDelegate.addReference(E,T.targetId,P)).next(()=>N.forEach(T.Qi,P=>p.persistence.referenceDelegate.removeReference(E,T.targetId,P)))))}catch(E){if(!es(E))throw E;z("LocalStore","Failed to update sequence numbers: "+E)}for(const E of f){const T=E.targetId;if(!E.fromCache){const P=p.ns.get(T),k=P.snapshotVersion,B=P.withLastLimboFreeSnapshotVersion(k);p.ns=p.ns.insert(T,B)}}}(r.localStore,o))}async function DE(e,t){const n=st(e);if(!n.currentUser.isEqual(t)){z("SyncEngine","User change. New user:",t.toKey());const r=await Jh(n.localStore,t);n.currentUser=t,function(o,a){o.Oa.forEach(c=>{c.forEach(u=>{u.reject(new X(O.CANCELLED,a))})}),o.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await is(n,r.us)}}function xE(e,t){const n=st(e),r=n.Fa.get(t);if(r&&r.wa)return at().add(r.key);{let s=at();const o=n.Da.get(t);if(!o)return s;for(const a of o){const c=n.ba.get(a);s=s.unionWith(c.view.Ea)}return s}}function mf(e){const t=st(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ff.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xE.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=PE.bind(null,t),t.Sa.h_=pE.bind(null,t.eventManager),t.Sa.ka=gE.bind(null,t.eventManager),t}function NE(e){const t=st(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=SE.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=CE.bind(null,t),t}class zc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=yi(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return ky(this.persistence,new Oy,t.initialUser,this.serializer)}createPersistence(t){return new Dy(_a.Hr,this.serializer)}createSharedClientState(t){return new qy}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class OE{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$c(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DE.bind(null,this.syncEngine),await cE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new hE}()}createDatastore(t){const n=yi(t.databaseInfo.databaseId),r=function(o){return new Gy(o)}(t.databaseInfo);return function(o,a,c,u){return new Xy(o,a,c,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,o,a,c){return new Jy(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,n=>$c(this.syncEngine,n,0),function(){return Lc.D()?new Lc:new zy}())}createSyncEngine(t,n){return function(s,o,a,c,u,f,p){const E=new vE(s,o,a,c,u,f);return p&&(E.La=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=st(r);z("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await ss(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ME{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Oe("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ht.UNAUTHENTICATED,this.clientId=_h.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Aa(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function so(e,t){e.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Jh(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Hc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await LE(e);z("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Uc(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Uc(t.remoteStore,s)),e._onlineComponents=t}function FE(e){return e.name==="FirebaseError"?e.code===O.FAILED_PRECONDITION||e.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function LE(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await so(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!FE(n))throw n;Wn("Error using user provided cache. Falling back to memory cache: "+n),await so(e,new zc)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await so(e,new zc);return e._offlineComponents}async function _f(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Hc(e,e._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Hc(e,new OE))),e._onlineComponents}function UE(e){return _f(e).then(t=>t.syncEngine)}async function BE(e){const t=await _f(e),n=t.eventManager;return n.onListen=TE.bind(null,t.syncEngine),n.onUnlisten=AE.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=IE.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=RE.bind(null,t.syncEngine),n}function jE(e,t,n={}){const r=new Xe;return e.asyncQueue.enqueueAndForget(async()=>function(o,a,c,u,f){const p=new ME({next:T=>{a.enqueueAndForget(()=>dE(o,E));const P=T.docs.has(c);!P&&T.fromCache?f.reject(new X(O.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&T.fromCache&&u&&u.source==="server"?f.reject(new X(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(T)},error:T=>f.reject(T)}),E=new mE(fa(c.path),p,{includeMetadataChanges:!0,ra:!0});return fE(o,E)}(await BE(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function yf(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(e,t,n){if(!n)throw new X(O.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function qE(e,t,n,r){if(t===!0&&r===!0)throw new X(O.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Gc(e){if(!Y.isDocumentKey(e))throw new X(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Pa(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":et()}function Sn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new X(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pa(e);throw new X(O.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new X(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new X(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yf((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new X(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new X(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new X(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Sa{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new X(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wc(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new e_;switch(r.type){case"firstParty":return new i_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Kc.get(n);r&&(z("ComponentProvider","Removing Datastore"),Kc.delete(n),r.terminate())}(this),Promise.resolve()}}function zE(e,t,n,r={}){var s;const o=(e=Sn(e,Sa))._getSettings(),a=`${t}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Ht.MOCK_USER;else{c=Fg(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new X(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ht(f)}e._authCredentials=new n_(new mh(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ca(this.firestore,t,this._query)}}class ae{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ae(this.firestore,t,this._key)}}class Jr extends Ca{constructor(t,n,r){super(t,n,fa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ae(this.firestore,null,new Y(t))}withConverter(t){return new Jr(this.firestore,t,this._path)}}function HE(e,t,...n){if(e=wn(e),arguments.length===1&&(t=_h.newId()),$E("doc","path",t),e instanceof Sa){const r=Rt.fromString(t,...n);return Gc(r),new ae(e,null,new Y(r))}{if(!(e instanceof ae||e instanceof Jr))throw new X(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Rt.fromString(t,...n));return Gc(r),new ae(e.firestore,e instanceof Jr?e.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new tf(this,"async_queue_retry"),this.hu=()=>{const n=ro();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const t=ro();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const n=ro();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Xe;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!es(t))throw t;z("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const n=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Oe("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(t,n,r){this.Pu(),this.lu.indexOf(t)>-1&&(n=0);const s=wa.createAndSchedule(this,t,n,r,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&et()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const n of this._u)if(n.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const n=this._u.indexOf(t);this._u.splice(n,1)}}class Ti extends Sa{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new KE}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vf(this),this._firestoreClient.terminate()}}function GE(e,t){const n=typeof e=="object"?e:Hm(),r=typeof e=="string"?e:"(default)",s=jm(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Mg("firestore");o&&zE(s,...o)}return s}function Ef(e){return e._firestoreClient||vf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function vf(e){var t,n,r;const s=e._freezeSettings(),o=function(c,u,f,p){return new y_(c,u,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,yf(p.experimentalLongPollingOptions),p.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new kE(e._authCredentials,e._appCheckCredentials,e._queue,o),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new tr(Wt.fromBase64String(t))}catch(n){throw new X(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new tr(Wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new X(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new X(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new X(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return pt(this._lat,t._lat)||pt(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=/^__.*__$/;class QE{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new sn(t,this.data,this.fieldMask,n,this.fieldTransforms):new ns(t,this.data,n,this.fieldTransforms)}}class Tf{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new sn(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function If(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw et()}}class Da{constructor(t,n,r,s,o,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Da(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return ti(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(If(this.fu)&&WE.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class XE{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||yi(t)}Fu(t,n,r,s=!1){return new Da({fu:t,methodName:n,vu:r,path:Ut.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wf(e){const t=e._freezeSettings(),n=yi(e._databaseId);return new XE(e._databaseId,!!t.ignoreUndefinedProperties,n)}function YE(e,t,n,r,s,o={}){const a=e.Fu(o.merge||o.mergeFields?2:0,t,n,s);Na("Data must be an object, but it was:",a,r);const c=Af(r,a);let u,f;if(o.merge)u=new oe(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const E of o.mergeFields){const T=ko(t,E,n);if(!a.contains(T))throw new X(O.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);bf(p,T)||p.push(T)}u=new oe(p),f=a.fieldTransforms.filter(E=>u.covers(E.field))}else u=null,f=a.fieldTransforms;return new QE(new te(c),u,f)}class Ai extends wi{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ai}}class xa extends wi{constructor(t,n){super(t),this.xu=n}_toFieldTransform(t){const n=new Yr(t.serializer,Oh(t.serializer,this.xu));return new $_(t.path,n)}isEqual(t){return t instanceof xa&&this.xu===t.xu}}function JE(e,t,n,r){const s=e.Fu(1,t,n);Na("Data must be an object, but it was:",s,r);const o=[],a=te.empty();Cn(r,(u,f)=>{const p=Oa(t,u,n);f=wn(f);const E=s.Su(p);if(f instanceof Ai)o.push(p);else{const T=Ri(f,E);T!=null&&(o.push(p),a.set(p,T))}});const c=new oe(o);return new Tf(a,c,s.fieldTransforms)}function ZE(e,t,n,r,s,o){const a=e.Fu(1,t,n),c=[ko(t,r,n)],u=[s];if(o.length%2!=0)throw new X(O.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<o.length;T+=2)c.push(ko(t,o[T])),u.push(o[T+1]);const f=[],p=te.empty();for(let T=c.length-1;T>=0;--T)if(!bf(f,c[T])){const P=c[T];let k=u[T];k=wn(k);const B=a.Su(P);if(k instanceof Ai)f.push(P);else{const L=Ri(k,B);L!=null&&(f.push(P),p.set(P,L))}}const E=new oe(f);return new Tf(p,E,a.fieldTransforms)}function Ri(e,t){if(Rf(e=wn(e)))return Na("Unsupported field value:",t,e),Af(e,t);if(e instanceof wi)return function(r,s){if(!If(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let u=Ri(c,s.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(e,t)}return function(r,s){if((r=wn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Oh(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Nt.fromDate(r);return{timestampValue:Js(s.serializer,o)}}if(r instanceof Nt){const o=new Nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Js(s.serializer,o)}}if(r instanceof Va)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof tr)return{bytesValue:Hh(s.serializer,r._byteString)};if(r instanceof ae){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ga(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Pa(r)}`)}(e,t)}function Af(e,t){const n={};return yh(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Cn(e,(r,s)=>{const o=Ri(s,t.pu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function Rf(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Nt||e instanceof Va||e instanceof tr||e instanceof ae||e instanceof wi)}function Na(e,t,n){if(!Rf(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Pa(n);throw r==="an object"?t.Du(e+" a custom object"):t.Du(e+" "+r)}}function ko(e,t,n){if((t=wn(t))instanceof Ii)return t._internalPath;if(typeof t=="string")return Oa(e,t);throw ti("Field path arguments must be of type string or ",e,!1,void 0,n)}const tv=new RegExp("[~\\*/\\[\\]]");function Oa(e,t,n){if(t.search(tv)>=0)throw ti(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ii(...t.split("."))._internalPath}catch{throw ti(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ti(e,t,n,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new X(O.INVALID_ARGUMENT,c+e+u)}function bf(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t,n,r,s,o){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ev(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Sf("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ev extends Pf{data(){return super.data()}}function Sf(e,t){return typeof t=="string"?Oa(e,t):t instanceof Ii?t._internalPath:t._delegate._internalPath}class nv{convertValue(t,n="none"){switch(Pn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ct(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(bn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw et()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Cn(t,(s,o)=>{r[s]=this.convertValue(o,n)}),r}convertGeoPoint(t){return new Va(Ct(t.latitude),Ct(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=la(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Kr(t));default:return null}}convertTimestamp(t){const n=Ze(t);return new Nt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Rt.fromString(t);Et(Yh(r));const s=new Gr(r.get(1),r.get(3)),o=new Y(r.popFirst(5));return s.isEqual(n)||Oe(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(e,t,n){let r;return r=e?e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Cf extends Pf{constructor(t,n,r,s,o,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new iv(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Sf("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class iv extends Cf{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(e){e=Sn(e,ae);const t=Sn(e.firestore,Ti);return jE(Ef(t),e._key).then(n=>lv(t,e,n))}class ov extends nv{constructor(t){super(),this.firestore=t}convertBytes(t){return new tr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ae(this.firestore,null,n)}}function av(e,t,n){e=Sn(e,ae);const r=Sn(e.firestore,Ti),s=rv(e.converter,t);return Vf(r,[YE(wf(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,we.none())])}function Xc(e,t,n,...r){e=Sn(e,ae);const s=Sn(e.firestore,Ti),o=wf(s);let a;return a=typeof(t=wn(t))=="string"||t instanceof Ii?ZE(o,"updateDoc",e._key,t,n,r):JE(o,"updateDoc",e._key,t),Vf(s,[a.toMutation(e._key,we.exists(!0))])}function Vf(e,t){return function(r,s){const o=new Xe;return r.asyncQueue.enqueueAndForget(async()=>bE(await UE(r),s,o)),o.promise}(Ef(e),t)}function lv(e,t,n){const r=n.docs.get(t._key),s=new ov(e);return new Cf(e,s,t._key,r,new sv(n.hasPendingWrites,n.fromCache),t.converter)}function Yc(e){return new xa("increment",e)}(function(t,n=!0){(function(s){rr=s})(zm),Gs(new qr("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Ti(new r_(r.getProvider("auth-internal")),new a_(r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new X(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gr(f.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),zn(mc,"4.6.3",t),zn(mc,"4.6.3","esm2017")})();var cv="firebase",uv="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn(cv,uv,"app");const hv={apiKey:"AIzaSyByt_MPqJi3lTt8JMr-uzOhlaEVbLu5Mxo",authDomain:"gag-cat.firebaseapp.com",projectId:"gag-cat",storageBucket:"gag-cat.appspot.com",messagingSenderId:"1011173065479",appId:"1:1011173065479:web:f6fafcf3f5b7e77aa2bba2",measurementId:"G-Q0E3VEZZPB"},fv=oh(hv),dv=GE(fv),pv="/gag-cat/assets/img1-vu_vVAPk.png",Jc="/gag-cat/assets/img2-BL8eTzGQ.png",gv="/gag-cat/assets/sound-b58jd773.mp3",mv=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},_v={class:"flex flex-col justify-center items-center h-screen"},yv=["src"],Ev={class:"text-xl"},vv={__name:"App",setup(e){const t=Tr(Jc),n=new Audio(gv),r=Tr(!1),s=Tr(!1),o=Tr(0),a=Tr(0),c=HE(dv,"gags","count");let u=null;xu(async()=>{const T=await Qc(c);T.exists()?o.value=T.data().count:await av(c,{count:0}),u=setInterval(f,6e4),window.addEventListener("beforeunload",p)}),Jo(()=>{clearInterval(u),window.removeEventListener("beforeunload",p)});const f=async()=>{await Xc(c,{count:Yc(a.value)});const T=await Qc(c);o.value=T.data().count,a.value=0},p=async()=>{a.value>0&&await Xc(c,{count:Yc(a.value)})},E=async()=>{s.value||(t.value=pv,n.play(),r.value=!0,s.value=!0,a.value++,o.value++,setTimeout(()=>{t.value=Jc,r.value=!1,s.value=!1},n.duration*1e3))};return(T,P)=>(Mp(),Lp("div",_v,[qs("img",{src:t.value,onClick:E,alt:"Clickable Image",class:si(["object-cover rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mb-4",{"shake-animation":r.value,"cursor-pointer":!s.value,"cursor-default":s.value}])},null,10,yv),qs("p",Ev,"Gag Count: "+lu(o.value),1)]))}},Tv=mv(vv,[["__scopeId","data-v-c991fb67"]]);wg(Tv).mount("#app");
