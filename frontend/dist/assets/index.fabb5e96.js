const sc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};sc();function _t(){}function oc(i,e){for(const t in e)i[t]=e[t];return i}function il(i){return i()}function io(){return Object.create(null)}function ln(i){i.forEach(il)}function ks(i){return typeof i=="function"}function qe(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function ac(i){return Object.keys(i).length===0}function Lr(i,...e){if(i==null)return _t;const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Pn(i){let e;return Lr(i,t=>e=t)(),e}function et(i,e,t){i.$$.on_destroy.push(Lr(e,t))}function At(i,e,t,n){if(i){const r=rl(i,e,t,n);return i[0](r)}}function rl(i,e,t,n){return i[1]&&n?oc(t.ctx.slice(),i[1](n(e))):t.ctx}function Tt(i,e,t,n){if(i[2]&&n){const r=i[2](n(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function Ct(i,e,t,n,r,s){if(r){const o=rl(e,t,n,s);i.p(o,r)}}function Pt(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function wt(i,e,t){return i.set(t),e}function lc(i){return i&&ks(i.destroy)?i.destroy:_t}function mt(i,e){i.appendChild(e)}function ze(i,e,t){i.insertBefore(e,t||null)}function Ie(i){i.parentNode.removeChild(i)}function sl(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function ft(i){return document.createElement(i)}function Cn(i){return document.createTextNode(i)}function je(){return Cn(" ")}function ol(){return Cn("")}function ot(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function Ue(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function qn(i){return i===""?null:+i}function cc(i){return Array.from(i.childNodes)}function Vs(i,e){e=""+e,i.wholeText!==e&&(i.data=e)}function An(i,e){i.value=e==null?"":e}function uc(i,e,{bubbles:t=!1,cancelable:n=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(i,t,n,e),r}let Wi;function Hi(i){Wi=i}function Yi(){if(!Wi)throw new Error("Function called outside component initialization");return Wi}function Gs(i){Yi().$$.on_mount.push(i)}function ct(i){Yi().$$.on_destroy.push(i)}function Jn(){const i=Yi();return(e,t,{cancelable:n=!1}={})=>{const r=i.$$.callbacks[e];if(r){const s=uc(e,t,{cancelable:n});return r.slice().forEach(o=>{o.call(i,s)}),!s.defaultPrevented}return!0}}function gn(i,e){return Yi().$$.context.set(i,e),e}function Dn(i){return Yi().$$.context.get(i)}function Fe(i,e){const t=i.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Bi=[],yt=[],Sr=[],Ts=[],al=Promise.resolve();let Cs=!1;function ll(){Cs||(Cs=!0,al.then(cl))}function Cr(){return ll(),al}function Ps(i){Sr.push(i)}function Gt(i){Ts.push(i)}const jr=new Set;let tr=0;function cl(){const i=Wi;do{for(;tr<Bi.length;){const e=Bi[tr];tr++,Hi(e),fc(e.$$)}for(Hi(null),Bi.length=0,tr=0;yt.length;)yt.pop()();for(let e=0;e<Sr.length;e+=1){const t=Sr[e];jr.has(t)||(jr.add(t),t())}Sr.length=0}while(Bi.length);for(;Ts.length;)Ts.pop()();Cs=!1,jr.clear(),Hi(i)}function fc(i){if(i.fragment!==null){i.update(),ln(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(Ps)}}const Er=new Set;let Hn;function Fn(){Hn={r:0,c:[],p:Hn}}function zn(){Hn.r||ln(Hn.c),Hn=Hn.p}function ce(i,e){i&&i.i&&(Er.delete(i),i.i(e))}function he(i,e,t,n){if(i&&i.o){if(Er.has(i))return;Er.add(i),Hn.c.push(()=>{Er.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function Ht(i,e,t){const n=i.$$.props[e];n!==void 0&&(i.$$.bound[n]=t,t(i.$$.ctx[n]))}function Pe(i){i&&i.c()}function Ae(i,e,t,n){const{fragment:r,on_mount:s,on_destroy:o,after_update:a}=i.$$;r&&r.m(e,t),n||Ps(()=>{const l=s.map(il).filter(ks);o?o.push(...l):ln(l),i.$$.on_mount=[]}),a.forEach(Ps)}function Te(i,e){const t=i.$$;t.fragment!==null&&(ln(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function hc(i,e){i.$$.dirty[0]===-1&&(Bi.push(i),ll(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function Qe(i,e,t,n,r,s,o,a=[-1]){const l=Wi;Hi(i);const c=i.$$={fragment:null,ctx:null,props:s,update:_t,not_equal:r,bound:io(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:io(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(i,e.props||{},(h,p,...m)=>{const g=m.length?m[0]:p;return c.ctx&&r(c.ctx[h],c.ctx[h]=g)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](g),u&&hc(i,h)),p}):[],c.update(),u=!0,ln(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const h=cc(e.target);c.fragment&&c.fragment.l(h),h.forEach(Ie)}else c.fragment&&c.fragment.c();e.intro&&ce(i.$$.fragment),Ae(i,e.target,e.anchor,e.customElement),cl()}Hi(l)}class Je{$destroy(){Te(this,1),this.$destroy=_t}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!ac(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const si=[];function ul(i,e){return{subscribe:gt(i,e).subscribe}}function gt(i,e=_t){let t;const n=new Set;function r(a){if(qe(i,a)&&(i=a,t)){const l=!si.length;for(const c of n)c[1](),si.push(c,i);if(l){for(let c=0;c<si.length;c+=2)si[c][0](si[c+1]);si.length=0}}}function s(a){r(a(i))}function o(a,l=_t){const c=[a,l];return n.add(c),n.size===1&&(t=e(r)||_t),a(i),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:r,update:s,subscribe:o}}function dc(i,e,t){const n=!Array.isArray(i),r=n?[i]:i,s=e.length<2;return ul(t,o=>{let a=!1;const l=[];let c=0,u=_t;const h=()=>{if(c)return;u();const m=e(n?l[0]:l,o);s?o(m):u=ks(m)?m:_t},p=r.map((m,g)=>Lr(m,f=>{l[g]=f,c&=~(1<<g),a&&h()},()=>{c|=1<<g}));return a=!0,h(),function(){ln(p),u()}})}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hs="142",oi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pc=0,ro=1,mc=2,fl=1,hl=2,ki=3,ji=0,Jt=1,Ai=2,gc=1,Ln=0,Si=1,so=2,oo=3,ao=4,_c=5,yi=100,vc=101,xc=102,lo=103,co=104,wc=200,bc=201,yc=202,Mc=203,dl=204,pl=205,Sc=206,Ec=207,Ac=208,Tc=209,Cc=210,Pc=0,Lc=1,Dc=2,Ls=3,Rc=4,Ic=5,Fc=6,zc=7,Ws=0,Oc=1,Nc=2,an=0,Uc=1,Bc=2,kc=3,ml=4,Vc=5,gl=300,Ti=301,Ci=302,Ds=303,Rs=304,Dr=306,Is=1e3,Qt=1001,Fs=1002,Et=1003,uo=1004,fo=1005,Nt=1006,Gc=1007,Rr=1008,Qn=1009,Hc=1010,Wc=1011,_l=1012,jc=1013,Wn=1014,jn=1015,Xi=1016,Xc=1017,qc=1018,Ei=1020,Yc=1021,Zc=1022,on=1023,Qc=1024,Jc=1025,Yn=1026,Pi=1027,Kc=1028,$c=1029,eu=1030,tu=1031,nu=1033,Xr=33776,qr=33777,Yr=33778,Zr=33779,ho=35840,po=35841,mo=35842,go=35843,iu=36196,_o=37492,vo=37496,xo=37808,wo=37809,bo=37810,yo=37811,Mo=37812,So=37813,Eo=37814,Ao=37815,To=37816,Co=37817,Po=37818,Lo=37819,Do=37820,Ro=37821,Io=36492,Rn=3e3,Ye=3001,ru=3200,su=3201,js=0,ou=1,pn="srgb",Xn="srgb-linear",Qr=7680,au=519,Fo=35044,zo="300 es",zs=1035;class Kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];const Jr=Math.PI/180,Oo=180/Math.PI;function Zi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[i&255]+dt[i>>8&255]+dt[i>>16&255]+dt[i>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function lu(i,e){return(i%e+e)%e}function Kr(i,e,t){return(1-t)*i+t*e}function No(i){return(i&i-1)===0&&i!==0}function Os(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],m=n[5],g=n[8],f=r[0],d=r[3],_=r[6],x=r[1],w=r[4],y=r[7],b=r[2],S=r[5],F=r[8];return s[0]=o*f+a*x+l*b,s[3]=o*d+a*w+l*S,s[6]=o*_+a*y+l*F,s[1]=c*f+u*x+h*b,s[4]=c*d+u*w+h*S,s[7]=c*_+u*y+h*F,s[2]=p*f+m*x+g*b,s[5]=p*d+m*w+g*S,s[8]=p*_+m*y+g*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,p=a*l-u*s,m=c*s-o*l,g=t*h+n*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return e[0]=h*f,e[1]=(r*c-u*n)*f,e[2]=(a*n-r*o)*f,e[3]=p*f,e[4]=(u*t-r*l)*f,e[5]=(r*s-a*t)*f,e[6]=m*f,e[7]=(n*l-c*t)*f,e[8]=(o*t-n*s)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*o+n*c,r[6]=t*a+n*u,r[1]=-n*s+t*l,r[4]=-n*o+t*c,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function vl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>65535)return!0;return!1}function qi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const $r={[pn]:{[Xn]:Zn},[Xn]:{[pn]:Ar}},jt={legacyMode:!0,get workingColorSpace(){return Xn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if($r[e]&&$r[e][t]!==void 0){const n=$r[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},st={r:0,g:0,b:0},Xt={h:0,s:0,l:0},nr={h:0,s:0,l:0};function es(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function ir(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Xn){return this.r=e,this.g=t,this.b=n,jt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Xn){if(e=lu(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=es(o,s,e+1/3),this.g=es(o,s,e),this.b=es(o,s,e-1/3)}return jt.toWorkingColorSpace(this,r),this}setStyle(e,t=pn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,jt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,jt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,jt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,jt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=pn){const n=xl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return jt.fromWorkingColorSpace(ir(this,st),e),bt(st.r*255,0,255)<<16^bt(st.g*255,0,255)<<8^bt(st.b*255,0,255)<<0}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xn){jt.fromWorkingColorSpace(ir(this,st),t);const n=st.r,r=st.g,s=st.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xn){return jt.fromWorkingColorSpace(ir(this,st),t),e.r=st.r,e.g=st.g,e.b=st.b,e}getStyle(e=pn){return jt.fromWorkingColorSpace(ir(this,st),e),e!==pn?`color(${e} ${st.r} ${st.g} ${st.b})`:`rgb(${st.r*255|0},${st.g*255|0},${st.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Xt),Xt.h+=e,Xt.s+=t,Xt.l+=n,this.setHSL(Xt.h,Xt.s,Xt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xt),e.getHSL(nr);const n=Kr(Xt.h,nr.h,t),r=Kr(Xt.s,nr.s,t),s=Kr(Xt.l,nr.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Re.NAMES=xl;let li;class wl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{li===void 0&&(li=qi("canvas")),li.width=e.width,li.height=e.height;const n=li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class bl{constructor(e=null){this.isSource=!0,this.uuid=Zi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ts(r[o].image)):s.push(ts(r[o]))}else s=ts(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ts(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cu=0;class Wt extends Kn{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=Qt,r=Qt,s=Nt,o=Rr,a=on,l=Qn,c=1,u=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Zi(),this.name="",this.source=new bl(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case Fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case Fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=gl;class Ze{constructor(e=0,t=0,n=0,r=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],m=l[5],g=l[9],f=l[2],d=l[6],_=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-f)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+f)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(m+1)/2,b=(_+1)/2,S=(u+p)/4,F=(h+f)/4,v=(g+d)/4;return w>y&&w>b?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=S/n,s=F/n):y>b?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=S/r,s=v/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=F/s,r=v/s),this.set(n,r,s,t),this}let x=Math.sqrt((d-g)*(d-g)+(h-f)*(h-f)+(p-u)*(p-u));return Math.abs(x)<.001&&(x=1),this.x=(d-g)/x,this.y=(h-f)/x,this.z=(p-u)/x,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class In extends Kn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Wt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yl extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uu extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $t{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const p=s[o+0],m=s[o+1],g=s[o+2],f=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=f;return}if(h!==f||l!==p||c!==m||u!==g){let d=1-a;const _=l*p+c*m+u*g+h*f,x=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const b=Math.sqrt(w),S=Math.atan2(b,_*x);d=Math.sin(d*S)/b,a=Math.sin(a*S)/b}const y=a*x;if(l=l*d+p*y,c=c*d+m*y,u=u*d+g*y,h=h*d+f*y,d===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],p=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*m-c*p,e[t+1]=l*g+u*p+c*h-a*m,e[t+2]=c*g+u*m+a*p-l*h,e[t+3]=u*g-a*h-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),p=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=p*u*h+c*m*g,this._y=c*m*h-p*u*g,this._z=c*u*g+p*m*h,this._w=c*u*h-p*m*g;break;case"YXZ":this._x=p*u*h+c*m*g,this._y=c*m*h-p*u*g,this._z=c*u*g-p*m*h,this._w=c*u*h+p*m*g;break;case"ZXY":this._x=p*u*h-c*m*g,this._y=c*m*h+p*u*g,this._z=c*u*g+p*m*h,this._w=c*u*h-p*m*g;break;case"ZYX":this._x=p*u*h-c*m*g,this._y=c*m*h+p*u*g,this._z=c*u*g-p*m*h,this._w=c*u*h+p*m*g;break;case"YZX":this._x=p*u*h+c*m*g,this._y=c*m*h+p*u*g,this._z=c*u*g-p*m*h,this._w=c*u*h-p*m*g;break;case"XZY":this._x=p*u*h-c*m*g,this._y=c*m*h-p*u*g,this._z=c*u*g+p*m*h,this._w=c*u*h+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=n+a+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Uo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,p=-s*t-o*n-a*r;return this.x=c*l+p*-s+u*-a-h*-o,this.y=u*l+p*-o+h*-s-c*-a,this.z=h*l+p*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ns.copy(this).projectOnVector(e),this.sub(ns)}reflect(e){return this.sub(ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ns=new R,Uo=new $t;class $n{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],p=e[l+2];u<t&&(t=u),h<n&&(n=h),p<r&&(r=p),u>s&&(s=u),h>o&&(o=h),p>a&&(a=p)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),p=e.getZ(l);u<t&&(t=u),h<n&&(n=h),p<r&&(r=p),u>s&&(s=u),h>o&&(o=h),p>a&&(a=p)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Nn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Nn)}else n.boundingBox===null&&n.computeBoundingBox(),is.copy(n.boundingBox),is.applyMatrix4(e.matrixWorld),this.union(is);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),rr.subVectors(this.max,zi),ci.subVectors(e.a,zi),ui.subVectors(e.b,zi),fi.subVectors(e.c,zi),xn.subVectors(ui,ci),wn.subVectors(fi,ui),Un.subVectors(ci,fi);let t=[0,-xn.z,xn.y,0,-wn.z,wn.y,0,-Un.z,Un.y,xn.z,0,-xn.x,wn.z,0,-wn.x,Un.z,0,-Un.x,-xn.y,xn.x,0,-wn.y,wn.x,0,-Un.y,Un.x,0];return!rs(t,ci,ui,fi,rr)||(t=[1,0,0,0,1,0,0,0,1],!rs(t,ci,ui,fi,rr))?!1:(sr.crossVectors(xn,wn),t=[sr.x,sr.y,sr.z],rs(t,ci,ui,fi,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Nn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new R,new R,new R,new R,new R,new R,new R,new R],Nn=new R,is=new $n,ci=new R,ui=new R,fi=new R,xn=new R,wn=new R,Un=new R,zi=new R,rr=new R,sr=new R,Bn=new R;function rs(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Bn.fromArray(i,s);const a=r.x*Math.abs(Bn.x)+r.y*Math.abs(Bn.y)+r.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const fu=new $n,Bo=new R,or=new R,ss=new R;class Ir{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ss.subVectors(e,this.center);const t=ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(ss.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?or.set(0,0,1).multiplyScalar(e.radius):or.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Bo.copy(e.center).add(or)),this.expandByPoint(Bo.copy(e.center).sub(or)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new R,os=new R,ar=new R,bn=new R,as=new R,lr=new R,ls=new R;class Ml{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.direction).multiplyScalar(t).add(this.origin),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){os.copy(e).add(t).multiplyScalar(.5),ar.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(os);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ar),a=bn.dot(this.direction),l=-bn.dot(ar),c=bn.lengthSq(),u=Math.abs(1-o*o);let h,p,m,g;if(u>0)if(h=o*l-a,p=o*a-l,g=s*u,h>=0)if(p>=-g)if(p<=g){const f=1/u;h*=f,p*=f,m=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+c);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(ar).multiplyScalar(p).add(os),m}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),r=un.dot(un)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||s>r||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,r,s){as.subVectors(t,e),lr.subVectors(n,e),ls.crossVectors(as,lr);let o=this.direction.dot(ls),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bn.subVectors(this.origin,e);const l=a*this.direction.dot(lr.crossVectors(bn,lr));if(l<0)return null;const c=a*this.direction.dot(as.cross(bn));if(c<0||l+c>o)return null;const u=-a*bn.dot(ls);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c,u,h,p,m,g,f,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=p,_[3]=m,_[7]=g,_[11]=f,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/hi.setFromMatrixColumn(e,0).length(),s=1/hi.setFromMatrixColumn(e,1).length(),o=1/hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*u,m=o*h,g=a*u,f=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=p-f*c,t[9]=-a*l,t[2]=f-p*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*u,m=l*h,g=c*u,f=c*h;t[0]=p+f*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=f+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*u,m=l*h,g=c*u,f=c*h;t[0]=p-f*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=f-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*u,m=o*h,g=a*u,f=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=p*c+f,t[1]=l*h,t[5]=f*c+p,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,g=a*l,f=a*c;t[0]=l*u,t[4]=f-p*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=p-f*h}else if(e.order==="XZY"){const p=o*l,m=o*c,g=a*l,f=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+f,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=f*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hu,e,du)}lookAt(e,t,n){const r=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),yn.crossVectors(n,Dt),yn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),yn.crossVectors(n,Dt)),yn.normalize(),cr.crossVectors(Dt,yn),r[0]=yn.x,r[4]=cr.x,r[8]=Dt.x,r[1]=yn.y,r[5]=cr.y,r[9]=Dt.y,r[2]=yn.z,r[6]=cr.z,r[10]=Dt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],m=n[13],g=n[2],f=n[6],d=n[10],_=n[14],x=n[3],w=n[7],y=n[11],b=n[15],S=r[0],F=r[4],v=r[8],T=r[12],D=r[1],U=r[5],z=r[9],N=r[13],P=r[2],W=r[6],G=r[10],q=r[14],Y=r[3],I=r[7],O=r[11],ee=r[15];return s[0]=o*S+a*D+l*P+c*Y,s[4]=o*F+a*U+l*W+c*I,s[8]=o*v+a*z+l*G+c*O,s[12]=o*T+a*N+l*q+c*ee,s[1]=u*S+h*D+p*P+m*Y,s[5]=u*F+h*U+p*W+m*I,s[9]=u*v+h*z+p*G+m*O,s[13]=u*T+h*N+p*q+m*ee,s[2]=g*S+f*D+d*P+_*Y,s[6]=g*F+f*U+d*W+_*I,s[10]=g*v+f*z+d*G+_*O,s[14]=g*T+f*N+d*q+_*ee,s[3]=x*S+w*D+y*P+b*Y,s[7]=x*F+w*U+y*W+b*I,s[11]=x*v+w*z+y*G+b*O,s[15]=x*T+w*N+y*q+b*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],m=e[14],g=e[3],f=e[7],d=e[11],_=e[15];return g*(+s*l*h-r*c*h-s*a*p+n*c*p+r*a*m-n*l*m)+f*(+t*l*m-t*c*p+s*o*p-r*o*m+r*c*u-s*l*u)+d*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+_*(-r*a*u-t*l*h+t*a*p+r*o*h-n*o*p+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],m=e[11],g=e[12],f=e[13],d=e[14],_=e[15],x=h*d*c-f*p*c+f*l*m-a*d*m-h*l*_+a*p*_,w=g*p*c-u*d*c-g*l*m+o*d*m+u*l*_-o*p*_,y=u*f*c-g*h*c+g*a*m-o*f*m-u*a*_+o*h*_,b=g*h*l-u*f*l-g*a*p+o*f*p+u*a*d-o*h*d,S=t*x+n*w+r*y+s*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/S;return e[0]=x*F,e[1]=(f*p*s-h*d*s-f*r*m+n*d*m+h*r*_-n*p*_)*F,e[2]=(a*d*s-f*l*s+f*r*c-n*d*c-a*r*_+n*l*_)*F,e[3]=(h*l*s-a*p*s-h*r*c+n*p*c+a*r*m-n*l*m)*F,e[4]=w*F,e[5]=(u*d*s-g*p*s+g*r*m-t*d*m-u*r*_+t*p*_)*F,e[6]=(g*l*s-o*d*s-g*r*c+t*d*c+o*r*_-t*l*_)*F,e[7]=(o*p*s-u*l*s+u*r*c-t*p*c-o*r*m+t*l*m)*F,e[8]=y*F,e[9]=(g*h*s-u*f*s-g*n*m+t*f*m+u*n*_-t*h*_)*F,e[10]=(o*f*s-g*a*s+g*n*c-t*f*c-o*n*_+t*a*_)*F,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*F,e[12]=b*F,e[13]=(u*f*r-g*h*r+g*n*p-t*f*p-u*n*d+t*h*d)*F,e[14]=(g*a*r-o*f*r-g*n*l+t*f*l+o*n*d-t*a*d)*F,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*p+t*a*p)*F,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,p=s*c,m=s*u,g=s*h,f=o*u,d=o*h,_=a*h,x=l*c,w=l*u,y=l*h,b=n.x,S=n.y,F=n.z;return r[0]=(1-(f+_))*b,r[1]=(m+y)*b,r[2]=(g-w)*b,r[3]=0,r[4]=(m-y)*S,r[5]=(1-(p+_))*S,r[6]=(d+x)*S,r[7]=0,r[8]=(g+w)*F,r[9]=(d-x)*F,r[10]=(1-(p+f))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=hi.set(r[0],r[1],r[2]).length();const o=hi.set(r[4],r[5],r[6]).length(),a=hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const c=1/s,u=1/o,h=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=h,qt.elements[9]*=h,qt.elements[10]*=h,t.setFromRotationMatrix(qt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),p=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=p,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,p=(n+r)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-p,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hi=new R,qt=new We,hu=new R(0,0,0),du=new R(1,1,1),yn=new R,cr=new R,Dt=new R,ko=new We,Vo=new $t;class ei{constructor(e=0,t=0,n=0,r=ei.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ko.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ko,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vo.setFromEuler(this),this.setFromQuaternion(Vo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ei.DefaultOrder="XYZ";ei.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Xs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pu=0;const Go=new R,di=new $t,fn=new We,ur=new R,Oi=new R,mu=new R,gu=new $t,Ho=new R(1,0,0),Wo=new R(0,1,0),jo=new R(0,0,1),_u={type:"added"},Xo={type:"removed"};class Xe extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DefaultUp.clone();const e=new R,t=new ei,n=new $t,r=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new We},normalMatrix:{value:new Bt}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=Xe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(Ho,e)}rotateY(e){return this.rotateOnAxis(Wo,e)}rotateZ(e){return this.rotateOnAxis(jo,e)}translateOnAxis(e,t){return Go.copy(e).applyQuaternion(this.quaternion),this.position.add(Go.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ho,e)}translateY(e){return this.translateOnAxis(Wo,e)}translateZ(e){return this.translateOnAxis(jo,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Oi,ur,this.up):fn.lookAt(ur,Oi,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),di.setFromRotationMatrix(fn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_u)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Xo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,e,mu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Xe.DefaultUp=new R(0,1,0);Xe.DefaultMatrixAutoUpdate=!0;const Yt=new R,hn=new R,cs=new R,dn=new R,pi=new R,mi=new R,qo=new R,us=new R,fs=new R,hs=new R;class mn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Yt.subVectors(r,t),hn.subVectors(n,t),cs.subVectors(e,t);const o=Yt.dot(Yt),a=Yt.dot(hn),l=Yt.dot(cs),c=hn.dot(hn),u=hn.dot(cs),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const p=1/h,m=(c*l-a*u)*p,g=(o*u-a*l)*p;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,dn),dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,dn),l.set(0,0),l.addScaledVector(s,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(a,dn.z),l}static isFrontFacing(e,t,n,r){return Yt.subVectors(n,t),hn.subVectors(e,t),Yt.cross(hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Yt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return mn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;pi.subVectors(r,n),mi.subVectors(s,n),us.subVectors(e,n);const l=pi.dot(us),c=mi.dot(us);if(l<=0&&c<=0)return t.copy(n);fs.subVectors(e,r);const u=pi.dot(fs),h=mi.dot(fs);if(u>=0&&h<=u)return t.copy(r);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(pi,o);hs.subVectors(e,s);const m=pi.dot(hs),g=mi.dot(hs);if(g>=0&&m<=g)return t.copy(s);const f=m*c-l*g;if(f<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(mi,a);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return qo.subVectors(s,r),a=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(qo,a);const _=1/(d+f+p);return o=f*_,a=p*_,t.copy(n).addScaledVector(pi,o).addScaledVector(mi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let vu=0;class ti extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Si,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=dl,this.blendDst=pl,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===gc;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==ji&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sl extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new R,fr=new we;class Kt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Fo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Re),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new we),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new R),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Ze),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class El extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Al extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xu=0;const Ot=new We,ds=new Xe,gi=new R,Rt=new $n,Ni=new $n,lt=new R;class en extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vl(e)?Al:El)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Bt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return ds.lookAt(e),ds.updateMatrix(),this.applyMatrix4(ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ni.setFromBufferAttribute(a),this.morphTargetsRelative?(lt.addVectors(Rt.min,Ni.min),Rt.expandByPoint(lt),lt.addVectors(Rt.max,Ni.max),Rt.expandByPoint(lt)):(Rt.expandByPoint(Ni.min),Rt.expandByPoint(Ni.max))}Rt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)lt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)lt.fromBufferAttribute(a,c),l&&(gi.fromBufferAttribute(e,c),lt.add(gi)),r=Math.max(r,n.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new R,u[D]=new R;const h=new R,p=new R,m=new R,g=new we,f=new we,d=new we,_=new R,x=new R;function w(D,U,z){h.fromArray(r,D*3),p.fromArray(r,U*3),m.fromArray(r,z*3),g.fromArray(o,D*2),f.fromArray(o,U*2),d.fromArray(o,z*2),p.sub(h),m.sub(h),f.sub(g),d.sub(g);const N=1/(f.x*d.y-d.x*f.y);!isFinite(N)||(_.copy(p).multiplyScalar(d.y).addScaledVector(m,-f.y).multiplyScalar(N),x.copy(m).multiplyScalar(f.x).addScaledVector(p,-d.x).multiplyScalar(N),c[D].add(_),c[U].add(_),c[z].add(_),u[D].add(x),u[U].add(x),u[z].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let D=0,U=y.length;D<U;++D){const z=y[D],N=z.start,P=z.count;for(let W=N,G=N+P;W<G;W+=3)w(n[W+0],n[W+1],n[W+2])}const b=new R,S=new R,F=new R,v=new R;function T(D){F.fromArray(s,D*3),v.copy(F);const U=c[D];b.copy(U),b.sub(F.multiplyScalar(F.dot(U))).normalize(),S.crossVectors(v,U);const N=S.dot(u[D])<0?-1:1;l[D*4]=b.x,l[D*4+1]=b.y,l[D*4+2]=b.z,l[D*4+3]=N}for(let D=0,U=y.length;D<U;++D){const z=y[D],N=z.start,P=z.count;for(let W=N,G=N+P;W<G;W+=3)T(n[W+0]),T(n[W+1]),T(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),f=e.getX(p+1),d=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,f),o.fromBufferAttribute(t,d),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const o=n[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,p=c;h<u;h++,p++)o[p]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,p=new c.constructor(l.length*u);let m=0,g=0;for(let f=0,d=l.length;f<d;f++){a.isInterleavedBufferAttribute?m=l[f]*a.data.stride+a.offset:m=l[f]*u;for(let _=0;_<u;_++)p[g++]=c[m++]}return new Kt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const p=c[u],m=e(p,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let p=0,m=h.length;p<m;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yo=new We,_i=new Ml,ps=new Ir,Mn=new R,Sn=new R,En=new R,ms=new R,gs=new R,_s=new R,hr=new R,dr=new R,pr=new R,mr=new we,gr=new we,_r=new we,vs=new R,vr=new R;class kt extends Xe{constructor(e=new en,t=new Sl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(s),e.ray.intersectsSphere(ps)===!1)||(Yo.copy(s).invert(),_i.copy(e.ray).applyMatrix4(Yo),n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,p=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let f=0,d=m.length;f<d;f++){const _=m[f],x=r[_.materialIndex],w=Math.max(_.start,g.start),y=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let b=w,S=y;b<S;b+=3){const F=a.getX(b),v=a.getX(b+1),T=a.getX(b+2);o=xr(this,x,e,_i,l,c,u,h,p,F,v,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const f=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=f,x=d;_<x;_+=3){const w=a.getX(_),y=a.getX(_+1),b=a.getX(_+2);o=xr(this,r,e,_i,l,c,u,h,p,w,y,b),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let f=0,d=m.length;f<d;f++){const _=m[f],x=r[_.materialIndex],w=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let b=w,S=y;b<S;b+=3){const F=b,v=b+1,T=b+2;o=xr(this,x,e,_i,l,c,u,h,p,F,v,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const f=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=f,x=d;_<x;_+=3){const w=_,y=_+1,b=_+2;o=xr(this,r,e,_i,l,c,u,h,p,w,y,b),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function wu(i,e,t,n,r,s,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==Ai,a),l===null)return null;vr.copy(a),vr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vr);return c<t.near||c>t.far?null:{distance:c,point:vr.clone(),object:i}}function xr(i,e,t,n,r,s,o,a,l,c,u,h){Mn.fromBufferAttribute(r,c),Sn.fromBufferAttribute(r,u),En.fromBufferAttribute(r,h);const p=i.morphTargetInfluences;if(s&&p){hr.set(0,0,0),dr.set(0,0,0),pr.set(0,0,0);for(let g=0,f=s.length;g<f;g++){const d=p[g],_=s[g];d!==0&&(ms.fromBufferAttribute(_,c),gs.fromBufferAttribute(_,u),_s.fromBufferAttribute(_,h),o?(hr.addScaledVector(ms,d),dr.addScaledVector(gs,d),pr.addScaledVector(_s,d)):(hr.addScaledVector(ms.sub(Mn),d),dr.addScaledVector(gs.sub(Sn),d),pr.addScaledVector(_s.sub(En),d)))}Mn.add(hr),Sn.add(dr),En.add(pr)}i.isSkinnedMesh&&(i.boneTransform(c,Mn),i.boneTransform(u,Sn),i.boneTransform(h,En));const m=wu(i,e,t,n,Mn,Sn,En,vs);if(m){a&&(mr.fromBufferAttribute(a,c),gr.fromBufferAttribute(a,u),_r.fromBufferAttribute(a,h),m.uv=mn.getUV(vs,Mn,Sn,En,mr,gr,_r,new we)),l&&(mr.fromBufferAttribute(l,c),gr.fromBufferAttribute(l,u),_r.fromBufferAttribute(l,h),m.uv2=mn.getUV(vs,Mn,Sn,En,mr,gr,_r,new we));const g={a:c,b:u,c:h,normal:new R,materialIndex:0};mn.getNormal(Mn,Sn,En,g.normal),m.face=g}return m}class Qi extends en{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let p=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(h,2));function g(f,d,_,x,w,y,b,S,F,v,T){const D=y/F,U=b/v,z=y/2,N=b/2,P=S/2,W=F+1,G=v+1;let q=0,Y=0;const I=new R;for(let O=0;O<G;O++){const ee=O*U-N;for(let K=0;K<W;K++){const $=K*D-z;I[f]=$*x,I[d]=ee*w,I[_]=P,c.push(I.x,I.y,I.z),I[f]=0,I[d]=0,I[_]=S>0?1:-1,u.push(I.x,I.y,I.z),h.push(K/F),h.push(1-O/v),q+=1}}for(let O=0;O<v;O++)for(let ee=0;ee<F;ee++){const K=p+ee+W*O,$=p+ee+W*(O+1),de=p+(ee+1)+W*(O+1),Z=p+(ee+1)+W*O;l.push(K,$,Z),l.push($,de,Z),Y+=6}a.addGroup(m,Y,T),m+=Y,p+=q}}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function pt(i){const e={};for(let t=0;t<i.length;t++){const n=Li(i[t]);for(const r in n)e[r]=n[r]}return e}const qs={clone:Li,merge:pt};var bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=bu,this.fragmentShader=yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ys extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ut extends Ys{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=90,xi=1;class Mu extends Xe{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new Ut(vi,xi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(1,0,0)),this.add(r);const s=new Ut(vi,xi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(-1,0,0)),this.add(s);const o=new Ut(vi,xi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new R(0,1,0)),this.add(o);const a=new Ut(vi,xi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new R(0,-1,0)),this.add(a);const l=new Ut(vi,xi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const c=new Ut(vi,xi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,p=e.xr.enabled;e.toneMapping=an,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Tl extends Wt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ti,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Su extends In{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Tl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qi(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Ln});s.uniforms.tEquirect.value=t;const o=new kt(r,s),a=t.minFilter;return t.minFilter===Rr&&(t.minFilter=Nt),new Mu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const xs=new R,Eu=new R,Au=new Bt;class kn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=xs.subVectors(n,t).cross(Eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(xs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Au.getNormalMatrix(e),r=this.coplanarPoint(xs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new Ir,wr=new R;class Fr{constructor(e=new kn,t=new kn,n=new kn,r=new kn,s=new kn,o=new kn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],p=n[8],m=n[9],g=n[10],f=n[11],d=n[12],_=n[13],x=n[14],w=n[15];return t[0].setComponents(a-r,h-l,f-p,w-d).normalize(),t[1].setComponents(a+r,h+l,f+p,w+d).normalize(),t[2].setComponents(a+s,h+c,f+m,w+_).normalize(),t[3].setComponents(a-s,h-c,f-m,w-_).normalize(),t[4].setComponents(a-o,h-u,f-g,w-x).normalize(),t[5].setComponents(a+o,h+u,f+g,w+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(wr.x=r.normal.x>0?e.max.x:e.min.x,wr.y=r.normal.y>0?e.max.y:e.min.y,wr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cl(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Tu(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,p=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,p),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const p=u.array,m=u.updateRange;i.bindBuffer(h,c),m.count===-1?i.bufferSubData(h,0,p):(t?i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Zs extends en{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,p=t/l,m=[],g=[],f=[],d=[];for(let _=0;_<u;_++){const x=_*p-o;for(let w=0;w<c;w++){const y=w*h-s;g.push(y,-x,0),f.push(0,0,1),d.push(w/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<a;x++){const w=x+c*_,y=x+c*(_+1),b=x+1+c*(_+1),S=x+1+c*_;m.push(w,y,S),m.push(y,b,S)}this.setIndex(m),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(d,2))}static fromJSON(e){return new Zs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ru=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fu="vec3 transformed = vec3( position );",zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ou=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Nu=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Uu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Yu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",tf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,df=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mf=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,gf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_f=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,yf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Mf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Tf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,If=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Gf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,$f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,th=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ih=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sh=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,oh=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ah=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,lh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ch=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,fh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ph=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_h=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,vh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,xh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,wh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,bh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,yh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Mh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Sh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Eh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ah=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Th=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ch=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ph=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Rh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ih=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Oh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kh=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vh=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$h=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ed=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,td=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,id=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,De={alphamap_fragment:Cu,alphamap_pars_fragment:Pu,alphatest_fragment:Lu,alphatest_pars_fragment:Du,aomap_fragment:Ru,aomap_pars_fragment:Iu,begin_vertex:Fu,beginnormal_vertex:zu,bsdfs:Ou,iridescence_fragment:Nu,bumpmap_pars_fragment:Uu,clipping_planes_fragment:Bu,clipping_planes_pars_fragment:ku,clipping_planes_pars_vertex:Vu,clipping_planes_vertex:Gu,color_fragment:Hu,color_pars_fragment:Wu,color_pars_vertex:ju,color_vertex:Xu,common:qu,cube_uv_reflection_fragment:Yu,defaultnormal_vertex:Zu,displacementmap_pars_vertex:Qu,displacementmap_vertex:Ju,emissivemap_fragment:Ku,emissivemap_pars_fragment:$u,encodings_fragment:ef,encodings_pars_fragment:tf,envmap_fragment:nf,envmap_common_pars_fragment:rf,envmap_pars_fragment:sf,envmap_pars_vertex:of,envmap_physical_pars_fragment:_f,envmap_vertex:af,fog_vertex:lf,fog_pars_vertex:cf,fog_fragment:uf,fog_pars_fragment:ff,gradientmap_pars_fragment:hf,lightmap_fragment:df,lightmap_pars_fragment:pf,lights_lambert_vertex:mf,lights_pars_begin:gf,lights_toon_fragment:vf,lights_toon_pars_fragment:xf,lights_phong_fragment:wf,lights_phong_pars_fragment:bf,lights_physical_fragment:yf,lights_physical_pars_fragment:Mf,lights_fragment_begin:Sf,lights_fragment_maps:Ef,lights_fragment_end:Af,logdepthbuf_fragment:Tf,logdepthbuf_pars_fragment:Cf,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:Lf,map_fragment:Df,map_pars_fragment:Rf,map_particle_fragment:If,map_particle_pars_fragment:Ff,metalnessmap_fragment:zf,metalnessmap_pars_fragment:Of,morphcolor_vertex:Nf,morphnormal_vertex:Uf,morphtarget_pars_vertex:Bf,morphtarget_vertex:kf,normal_fragment_begin:Vf,normal_fragment_maps:Gf,normal_pars_fragment:Hf,normal_pars_vertex:Wf,normal_vertex:jf,normalmap_pars_fragment:Xf,clearcoat_normal_fragment_begin:qf,clearcoat_normal_fragment_maps:Yf,clearcoat_pars_fragment:Zf,iridescence_pars_fragment:Qf,output_fragment:Jf,packing:Kf,premultiplied_alpha_fragment:$f,project_vertex:eh,dithering_fragment:th,dithering_pars_fragment:nh,roughnessmap_fragment:ih,roughnessmap_pars_fragment:rh,shadowmap_pars_fragment:sh,shadowmap_pars_vertex:oh,shadowmap_vertex:ah,shadowmask_pars_fragment:lh,skinbase_vertex:ch,skinning_pars_vertex:uh,skinning_vertex:fh,skinnormal_vertex:hh,specularmap_fragment:dh,specularmap_pars_fragment:ph,tonemapping_fragment:mh,tonemapping_pars_fragment:gh,transmission_fragment:_h,transmission_pars_fragment:vh,uv_pars_fragment:xh,uv_pars_vertex:wh,uv_vertex:bh,uv2_pars_fragment:yh,uv2_pars_vertex:Mh,uv2_vertex:Sh,worldpos_vertex:Eh,background_vert:Ah,background_frag:Th,cube_vert:Ch,cube_frag:Ph,depth_vert:Lh,depth_frag:Dh,distanceRGBA_vert:Rh,distanceRGBA_frag:Ih,equirect_vert:Fh,equirect_frag:zh,linedashed_vert:Oh,linedashed_frag:Nh,meshbasic_vert:Uh,meshbasic_frag:Bh,meshlambert_vert:kh,meshlambert_frag:Vh,meshmatcap_vert:Gh,meshmatcap_frag:Hh,meshnormal_vert:Wh,meshnormal_frag:jh,meshphong_vert:Xh,meshphong_frag:qh,meshphysical_vert:Yh,meshphysical_frag:Zh,meshtoon_vert:Qh,meshtoon_frag:Jh,points_vert:Kh,points_frag:$h,shadow_vert:ed,shadow_frag:td,sprite_vert:nd,sprite_frag:id},le={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Bt},uv2Transform:{value:new Bt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Bt}}},Zt={basic:{uniforms:pt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:pt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.fog,le.lights,{emissive:{value:new Re(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:pt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:pt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:pt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Re(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:pt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:pt([le.points,le.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:pt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:pt([le.common,le.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:pt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:pt([le.sprite,le.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null}},vertexShader:De.background_vert,fragmentShader:De.background_frag},cube:{uniforms:pt([le.envmap,{opacity:{value:1}}]),vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:pt([le.common,le.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:pt([le.lights,le.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Zt.physical={uniforms:pt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new we(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};function rd(i,e,t,n,r,s){const o=new Re(0);let a=r===!0?0:1,l,c,u=null,h=0,p=null;function m(f,d){let _=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=e.get(x));const w=i.xr,y=w.getSession&&w.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?g(o,a):x&&x.isColor&&(g(x,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Dr)?(c===void 0&&(c=new kt(new Qi(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Li(Zt.cube.uniforms),vertexShader:Zt.cube.vertexShader,fragmentShader:Zt.cube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||h!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,p=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new kt(new Zs(2,2),new _n({name:"BackgroundMaterial",uniforms:Li(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,p=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function g(f,d){t.buffers.color.setClear(f.r,f.g,f.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(f,d=1){o.set(f),a=d,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(f){a=f,g(o,a)},render:m}}function sd(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=d(null);let c=l,u=!1;function h(P,W,G,q,Y){let I=!1;if(o){const O=f(q,G,W);c!==O&&(c=O,m(c.object)),I=_(P,q,G,Y),I&&x(P,q,G,Y)}else{const O=W.wireframe===!0;(c.geometry!==q.id||c.program!==G.id||c.wireframe!==O)&&(c.geometry=q.id,c.program=G.id,c.wireframe=O,I=!0)}Y!==null&&t.update(Y,34963),(I||u)&&(u=!1,v(P,W,G,q),Y!==null&&i.bindBuffer(34963,t.get(Y).buffer))}function p(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function f(P,W,G){const q=G.wireframe===!0;let Y=a[P.id];Y===void 0&&(Y={},a[P.id]=Y);let I=Y[W.id];I===void 0&&(I={},Y[W.id]=I);let O=I[q];return O===void 0&&(O=d(p()),I[q]=O),O}function d(P){const W=[],G=[],q=[];for(let Y=0;Y<r;Y++)W[Y]=0,G[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:G,attributeDivisors:q,object:P,attributes:{},index:null}}function _(P,W,G,q){const Y=c.attributes,I=W.attributes;let O=0;const ee=G.getAttributes();for(const K in ee)if(ee[K].location>=0){const de=Y[K];let Z=I[K];if(Z===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),de===void 0||de.attribute!==Z||Z&&de.data!==Z.data)return!0;O++}return c.attributesNum!==O||c.index!==q}function x(P,W,G,q){const Y={},I=W.attributes;let O=0;const ee=G.getAttributes();for(const K in ee)if(ee[K].location>=0){let de=I[K];de===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(de=P.instanceColor));const Z={};Z.attribute=de,de&&de.data&&(Z.data=de.data),Y[K]=Z,O++}c.attributes=Y,c.attributesNum=O,c.index=q}function w(){const P=c.newAttributes;for(let W=0,G=P.length;W<G;W++)P[W]=0}function y(P){b(P,0)}function b(P,W){const G=c.newAttributes,q=c.enabledAttributes,Y=c.attributeDivisors;G[P]=1,q[P]===0&&(i.enableVertexAttribArray(P),q[P]=1),Y[P]!==W&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,W),Y[P]=W)}function S(){const P=c.newAttributes,W=c.enabledAttributes;for(let G=0,q=W.length;G<q;G++)W[G]!==P[G]&&(i.disableVertexAttribArray(G),W[G]=0)}function F(P,W,G,q,Y,I){n.isWebGL2===!0&&(G===5124||G===5125)?i.vertexAttribIPointer(P,W,G,Y,I):i.vertexAttribPointer(P,W,G,q,Y,I)}function v(P,W,G,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const Y=q.attributes,I=G.getAttributes(),O=W.defaultAttributeValues;for(const ee in I){const K=I[ee];if(K.location>=0){let $=Y[ee];if($===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){const de=$.normalized,Z=$.itemSize,B=t.get($);if(B===void 0)continue;const Ke=B.buffer,Ee=B.type,be=B.bytesPerElement;if($.isInterleavedBufferAttribute){const k=$.data,pe=k.stride,ge=$.offset;if(k.isInstancedInterleavedBuffer){for(let _e=0;_e<K.locationSize;_e++)b(K.location+_e,k.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let _e=0;_e<K.locationSize;_e++)y(K.location+_e);i.bindBuffer(34962,Ke);for(let _e=0;_e<K.locationSize;_e++)F(K.location+_e,Z/K.locationSize,Ee,de,pe*be,(ge+Z/K.locationSize*_e)*be)}else{if($.isInstancedBufferAttribute){for(let k=0;k<K.locationSize;k++)b(K.location+k,$.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let k=0;k<K.locationSize;k++)y(K.location+k);i.bindBuffer(34962,Ke);for(let k=0;k<K.locationSize;k++)F(K.location+k,Z/K.locationSize,Ee,de,Z*be,Z/K.locationSize*k*be)}}else if(O!==void 0){const de=O[ee];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(K.location,de);break;case 3:i.vertexAttrib3fv(K.location,de);break;case 4:i.vertexAttrib4fv(K.location,de);break;default:i.vertexAttrib1fv(K.location,de)}}}}S()}function T(){z();for(const P in a){const W=a[P];for(const G in W){const q=W[G];for(const Y in q)g(q[Y].object),delete q[Y];delete W[G]}delete a[P]}}function D(P){if(a[P.id]===void 0)return;const W=a[P.id];for(const G in W){const q=W[G];for(const Y in q)g(q[Y].object),delete q[Y];delete W[G]}delete a[P.id]}function U(P){for(const W in a){const G=a[W];if(G[P.id]===void 0)continue;const q=G[P.id];for(const Y in q)g(q[Y].object),delete q[Y];delete G[P.id]}}function z(){N(),u=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:y,disableUnusedAttributes:S}}function od(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let p,m;if(r)p=i,m="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function ad(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(F){if(F==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),p=i.getParameter(35660),m=i.getParameter(3379),g=i.getParameter(34076),f=i.getParameter(34921),d=i.getParameter(36347),_=i.getParameter(36348),x=i.getParameter(36349),w=p>0,y=o||e.has("OES_texture_float"),b=w&&y,S=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:w,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:S}}function ld(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new kn,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p,m){const g=h.length!==0||p||n!==0||r;return r=p,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,p,m){const g=h.clippingPlanes,f=h.clipIntersection,d=h.clipShadows,_=i.get(h);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const x=s?0:n,w=x*4;let y=_.clippingState||null;l.value=y,y=u(g,p,w,m);for(let b=0;b!==w;++b)y[b]=t[b];_.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,m,g){const f=h!==null?h.length:0;let d=null;if(f!==0){if(d=l.value,g!==!0||d===null){const _=m+f*4,x=p.matrixWorldInverse;a.getNormalMatrix(x),(d===null||d.length<_)&&(d=new Float32Array(_));for(let w=0,y=m;w!==f;++w,y+=4)o.copy(h[w]).applyMatrix4(x,a),o.normal.toArray(d,y),d[y+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,d}}function cd(i){let e=new WeakMap;function t(o,a){return a===Ds?o.mapping=Ti:a===Rs&&(o.mapping=Ci),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ds||a===Rs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Su(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ji extends Ys{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mi=4,Zo=[.125,.215,.35,.446,.526,.582],Gn=20,ws=new Ji,Qo=new Re;let bs=null;const Vn=(1+Math.sqrt(5))/2,bi=1/Vn,Jo=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Vn,bi),new R(0,Vn,-bi),new R(bi,0,Vn),new R(-bi,0,Vn),new R(Vn,bi,0),new R(-Vn,bi,0)];class Ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){bs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ta(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ea(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bs),e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Xi,format:on,encoding:Rn,depthBuffer:!1},r=$o(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$o(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ud(s)),this._blurMaterial=fd(s,e,t)}return r}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,ws)}_sceneToCubeUV(e,t,n,r){const a=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Qo),u.toneMapping=an,u.autoClear=!1;const m=new Sl({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new kt(new Qi,m);let f=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,f=!0):(m.color.copy(Qo),f=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):x===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const w=this._cubeSize;br(r,x*w,_>2?w:0,w,w),u.setRenderTarget(r),f&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ti||e.mapping===Ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ta()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ea());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ws)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jo[(r-1)%Jo.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new kt(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Gn-1),f=s/g,d=isFinite(s)?1+Math.floor(u*f):Gn;d>Gn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Gn}`);const _=[];let x=0;for(let F=0;F<Gn;++F){const v=F/f,T=Math.exp(-v*v/2);_.push(T),F===0?x+=T:F<d&&(x+=2*T)}for(let F=0;F<_.length;F++)_[F]=_[F]/x;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=_,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:w}=this;p.dTheta.value=g,p.mipInt.value=w-n;const y=this._sizeLods[r],b=3*y*(r>w-Mi?r-w+Mi:0),S=4*(this._cubeSize-y);br(t,b,S,3*y,2*y),l.setRenderTarget(t),l.render(h,ws)}}function ud(i){const e=[],t=[],n=[];let r=i;const s=i-Mi+1+Zo.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Mi?l=Zo[o-i+Mi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,f=3,d=2,_=1,x=new Float32Array(f*g*m),w=new Float32Array(d*g*m),y=new Float32Array(_*g*m);for(let S=0;S<m;S++){const F=S%3*2/3-1,v=S>2?0:-1,T=[F,v,0,F+2/3,v,0,F+2/3,v+1,0,F,v,0,F+2/3,v+1,0,F,v+1,0];x.set(T,f*g*S),w.set(p,d*g*S);const D=[S,S,S,S,S,S];y.set(D,_*g*S)}const b=new en;b.setAttribute("position",new Kt(x,f)),b.setAttribute("uv",new Kt(w,d)),b.setAttribute("faceIndex",new Kt(y,_)),e.push(b),r>Mi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $o(i,e,t){const n=new In(i,e,t);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function fd(i,e,t){const n=new Float32Array(Gn),r=new R(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ea(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ta(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Qs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hd(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ds||l===Rs,u=l===Ti||l===Ci;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ko(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Ko(i));const p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function dd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function pd(i,e,t,n){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const g in p)e.update(p[g],34962);const m=h.morphAttributes;for(const g in m){const f=m[g];for(let d=0,_=f.length;d<_;d++)e.update(f[d],34962)}}function c(h){const p=[],m=h.index,g=h.attributes.position;let f=0;if(m!==null){const x=m.array;f=m.version;for(let w=0,y=x.length;w<y;w+=3){const b=x[w+0],S=x[w+1],F=x[w+2];p.push(b,S,S,F,F,b)}}else{const x=g.array;f=g.version;for(let w=0,y=x.length/3-1;w<y;w+=3){const b=w+0,S=w+1,F=w+2;p.push(b,S,S,F,F,b)}}const d=new(vl(p)?Al:El)(p,1);d.version=f;const _=s.get(h);_&&e.remove(_),s.set(h,d)}function u(h){const p=s.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function md(i,e,t,n){const r=n.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,m){i.drawElements(s,m,a,p*l),t.update(m,s,1)}function h(p,m,g){if(g===0)return;let f,d;if(r)f=i,d="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,m,a,p*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function gd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function _d(i,e){return i[0]-e[0]}function vd(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ys(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function xd(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Ze,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,p){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=f!==void 0?f.length:0;let _=s.get(u);if(_===void 0||_.count!==d){let G=function(){P.dispose(),s.delete(u),u.removeEventListener("dispose",G)};var g=G;_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,F=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let D=0;y===!0&&(D=1),b===!0&&(D=2),S===!0&&(D=3);let U=u.attributes.position.count*D,z=1;U>e.maxTextureSize&&(z=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const N=new Float32Array(U*z*4*d),P=new yl(N,U,z,d);P.type=jn,P.needsUpdate=!0;const W=D*4;for(let q=0;q<d;q++){const Y=F[q],I=v[q],O=T[q],ee=U*z*4*q;for(let K=0;K<Y.count;K++){const $=K*W;y===!0&&(o.fromBufferAttribute(Y,K),Y.normalized===!0&&ys(o,Y),N[ee+$+0]=o.x,N[ee+$+1]=o.y,N[ee+$+2]=o.z,N[ee+$+3]=0),b===!0&&(o.fromBufferAttribute(I,K),I.normalized===!0&&ys(o,I),N[ee+$+4]=o.x,N[ee+$+5]=o.y,N[ee+$+6]=o.z,N[ee+$+7]=0),S===!0&&(o.fromBufferAttribute(O,K),O.normalized===!0&&ys(o,O),N[ee+$+8]=o.x,N[ee+$+9]=o.y,N[ee+$+10]=o.z,N[ee+$+11]=O.itemSize===4?o.w:1)}}_={count:d,texture:P,size:new we(U,z)},s.set(u,_),u.addEventListener("dispose",G)}let x=0;for(let y=0;y<m.length;y++)x+=m[y];const w=u.morphTargetsRelative?1:1-x;p.getUniforms().setValue(i,"morphTargetBaseInfluence",w),p.getUniforms().setValue(i,"morphTargetInfluences",m),p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const f=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==f){d=[];for(let b=0;b<f;b++)d[b]=[b,0];n[u.id]=d}for(let b=0;b<f;b++){const S=d[b];S[0]=b,S[1]=m[b]}d.sort(vd);for(let b=0;b<8;b++)b<f&&d[b][1]?(a[b][0]=d[b][0],a[b][1]=d[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(_d);const _=u.morphAttributes.position,x=u.morphAttributes.normal;let w=0;for(let b=0;b<8;b++){const S=a[b],F=S[0],v=S[1];F!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+b)!==_[F]&&u.setAttribute("morphTarget"+b,_[F]),x&&u.getAttribute("morphNormal"+b)!==x[F]&&u.setAttribute("morphNormal"+b,x[F]),r[b]=v,w+=v):(_&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),x&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const y=u.morphTargetsRelative?1:1-w;p.getUniforms().setValue(i,"morphTargetBaseInfluence",y),p.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function wd(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Pl=new Wt,Ll=new yl,Dl=new uu,Rl=new Tl,na=[],ia=[],ra=new Float32Array(16),sa=new Float32Array(9),oa=new Float32Array(4);function Di(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=na[r];if(s===void 0&&(s=new Float32Array(r),na[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zr(i,e){let t=ia[e];t===void 0&&(t=new Int32Array(e),ia[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function Md(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function Sd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function Ed(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;oa.set(n),i.uniformMatrix2fv(this.addr,!1,oa),St(t,n)}}function Ad(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;sa.set(n),i.uniformMatrix3fv(this.addr,!1,sa),St(t,n)}}function Td(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;ra.set(n),i.uniformMatrix4fv(this.addr,!1,ra),St(t,n)}}function Cd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Pd(i,e){const t=this.cache;Mt(t,e)||(i.uniform2iv(this.addr,e),St(t,e))}function Ld(i,e){const t=this.cache;Mt(t,e)||(i.uniform3iv(this.addr,e),St(t,e))}function Dd(i,e){const t=this.cache;Mt(t,e)||(i.uniform4iv(this.addr,e),St(t,e))}function Rd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Id(i,e){const t=this.cache;Mt(t,e)||(i.uniform2uiv(this.addr,e),St(t,e))}function Fd(i,e){const t=this.cache;Mt(t,e)||(i.uniform3uiv(this.addr,e),St(t,e))}function zd(i,e){const t=this.cache;Mt(t,e)||(i.uniform4uiv(this.addr,e),St(t,e))}function Od(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Pl,r)}function Nd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Dl,r)}function Ud(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Rl,r)}function Bd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ll,r)}function kd(i){switch(i){case 5126:return bd;case 35664:return yd;case 35665:return Md;case 35666:return Sd;case 35674:return Ed;case 35675:return Ad;case 35676:return Td;case 5124:case 35670:return Cd;case 35667:case 35671:return Pd;case 35668:case 35672:return Ld;case 35669:case 35673:return Dd;case 5125:return Rd;case 36294:return Id;case 36295:return Fd;case 36296:return zd;case 35678:case 36198:case 36298:case 36306:case 35682:return Od;case 35679:case 36299:case 36307:return Nd;case 35680:case 36300:case 36308:case 36293:return Ud;case 36289:case 36303:case 36311:case 36292:return Bd}}function Vd(i,e){i.uniform1fv(this.addr,e)}function Gd(i,e){const t=Di(e,this.size,2);i.uniform2fv(this.addr,t)}function Hd(i,e){const t=Di(e,this.size,3);i.uniform3fv(this.addr,t)}function Wd(i,e){const t=Di(e,this.size,4);i.uniform4fv(this.addr,t)}function jd(i,e){const t=Di(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xd(i,e){const t=Di(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qd(i,e){const t=Di(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yd(i,e){i.uniform1iv(this.addr,e)}function Zd(i,e){i.uniform2iv(this.addr,e)}function Qd(i,e){i.uniform3iv(this.addr,e)}function Jd(i,e){i.uniform4iv(this.addr,e)}function Kd(i,e){i.uniform1uiv(this.addr,e)}function $d(i,e){i.uniform2uiv(this.addr,e)}function ep(i,e){i.uniform3uiv(this.addr,e)}function tp(i,e){i.uniform4uiv(this.addr,e)}function np(i,e,t){const n=e.length,r=zr(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Pl,r[s])}function ip(i,e,t){const n=e.length,r=zr(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Dl,r[s])}function rp(i,e,t){const n=e.length,r=zr(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Rl,r[s])}function sp(i,e,t){const n=e.length,r=zr(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Ll,r[s])}function op(i){switch(i){case 5126:return Vd;case 35664:return Gd;case 35665:return Hd;case 35666:return Wd;case 35674:return jd;case 35675:return Xd;case 35676:return qd;case 5124:case 35670:return Yd;case 35667:case 35671:return Zd;case 35668:case 35672:return Qd;case 35669:case 35673:return Jd;case 5125:return Kd;case 36294:return $d;case 36295:return ep;case 36296:return tp;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return rp;case 36289:case 36303:case 36311:case 36292:return sp}}class ap{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=kd(t.type)}}class lp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=op(t.type)}}class cp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ms=/(\w+)(\])?(\[|\.)?/g;function aa(i,e){i.seq.push(e),i.map[e.id]=e}function up(i,e,t){const n=i.name,r=n.length;for(Ms.lastIndex=0;;){const s=Ms.exec(n),o=Ms.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){aa(t,c===void 0?new ap(a,i,e):new lp(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new cp(a),aa(t,h)),t=h}}}class Tr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);up(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function la(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let fp=0;function hp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function dp(i){switch(i){case Rn:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function ca(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+hp(i.getShaderSource(e),o)}else return r}function pp(i,e){const t=dp(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function mp(i,e){let t;switch(e){case Uc:t="Linear";break;case Bc:t="Reinhard";break;case kc:t="OptimizedCineon";break;case ml:t="ACESFilmic";break;case Vc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gp(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vi).join(`
`)}function _p(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vp(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Vi(i){return i!==""}function ua(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ns(i){return i.replace(xp,wp)}function wp(i,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ns(t)}const bp=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ha(i){return i.replace(yp,Il).replace(bp,Mp)}function Mp(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Il(i,e,t,n)}function Il(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function da(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function Ep(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ti:case Ci:e="ENVMAP_TYPE_CUBE";break;case Dr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ap(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ci:e="ENVMAP_MODE_REFRACTION";break}return e}function Tp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ws:e="ENVMAP_BLENDING_MULTIPLY";break;case Oc:e="ENVMAP_BLENDING_MIX";break;case Nc:e="ENVMAP_BLENDING_ADD";break}return e}function Cp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pp(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Sp(t),c=Ep(t),u=Ap(t),h=Tp(t),p=Cp(t),m=t.isWebGL2?"":gp(t),g=_p(s),f=r.createProgram();let d,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Vi).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(Vi).join(`
`),_.length>0&&(_+=`
`)):(d=[da(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),_=[m,da(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?De.tonemapping_pars_fragment:"",t.toneMapping!==an?mp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,pp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vi).join(`
`)),o=Ns(o),o=ua(o,t),o=fa(o,t),a=Ns(a),a=ua(a,t),a=fa(a,t),o=ha(o),a=ha(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=x+d+o,y=x+_+a,b=la(r,35633,w),S=la(r,35632,y);if(r.attachShader(f,b),r.attachShader(f,S),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f),i.debug.checkShaderErrors){const T=r.getProgramInfoLog(f).trim(),D=r.getShaderInfoLog(b).trim(),U=r.getShaderInfoLog(S).trim();let z=!0,N=!0;if(r.getProgramParameter(f,35714)===!1){z=!1;const P=ca(r,b,"vertex"),W=ca(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,35715)+`

Program Info Log: `+T+`
`+P+`
`+W)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||U==="")&&(N=!1);N&&(this.diagnostics={runnable:z,programLog:T,vertexShader:{log:D,prefix:d},fragmentShader:{log:U,prefix:_}})}r.deleteShader(b),r.deleteShader(S);let F;this.getUniforms=function(){return F===void 0&&(F=new Tr(r,f)),F};let v;return this.getAttributes=function(){return v===void 0&&(v=vp(r,f)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=fp++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=S,this}let Lp=0;class Dp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Rp(e);t.set(e,n)}return t.get(e)}}class Rp{constructor(e){this.id=Lp++,this.code=e,this.usedTimes=0}}function Ip(i,e,t,n,r,s,o){const a=new Xs,l=new Dp,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v,T,D,U,z){const N=U.fog,P=z.geometry,W=v.isMeshStandardMaterial?U.environment:null,G=(v.isMeshStandardMaterial?t:e).get(v.envMap||W),q=!!G&&G.mapping===Dr?G.image.height:null,Y=g[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const I=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,O=I!==void 0?I.length:0;let ee=0;P.morphAttributes.position!==void 0&&(ee=1),P.morphAttributes.normal!==void 0&&(ee=2),P.morphAttributes.color!==void 0&&(ee=3);let K,$,de,Z;if(Y){const pe=Zt[Y];K=pe.vertexShader,$=pe.fragmentShader}else K=v.vertexShader,$=v.fragmentShader,l.update(v),de=l.getVertexShaderID(v),Z=l.getFragmentShaderID(v);const B=i.getRenderTarget(),Ke=v.alphaTest>0,Ee=v.clearcoat>0,be=v.iridescence>0;return{isWebGL2:u,shaderID:Y,shaderName:v.type,vertexShader:K,fragmentShader:$,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:z.isInstancedMesh===!0,instancingColor:z.isInstancedMesh===!0&&z.instanceColor!==null,supportsVertexTextures:p,outputEncoding:B===null?i.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:Rn,map:!!v.map,matcap:!!v.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:q,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===ou,tangentSpaceNormalMap:v.normalMapType===js,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ye,clearcoat:Ee,clearcoatMap:Ee&&!!v.clearcoatMap,clearcoatRoughnessMap:Ee&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Ee&&!!v.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!v.iridescenceMap,iridescenceThicknessMap:be&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Si,alphaMap:!!v.alphaMap,alphaTest:Ke,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!P.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!N,useFog:v.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ee,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:an,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ai,flipSided:v.side===Jt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)T.push(D),T.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(T,v),x(T,v),T.push(i.outputEncoding)),T.push(v.customProgramCacheKey),T.join()}function _(v,T){v.push(T.precision),v.push(T.outputEncoding),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.combine),v.push(T.vertexUvs),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function x(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),T.fog&&a.enable(33),v.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.morphTargets&&a.enable(4),T.morphNormals&&a.enable(5),T.morphColors&&a.enable(6),T.premultipliedAlpha&&a.enable(7),T.shadowMapEnabled&&a.enable(8),T.physicallyCorrectLights&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.specularIntensityMap&&a.enable(14),T.specularColorMap&&a.enable(15),T.transmission&&a.enable(16),T.transmissionMap&&a.enable(17),T.thicknessMap&&a.enable(18),T.sheen&&a.enable(19),T.sheenColorMap&&a.enable(20),T.sheenRoughnessMap&&a.enable(21),T.decodeVideoTexture&&a.enable(22),T.opaque&&a.enable(23),v.push(a.mask)}function w(v){const T=g[v.type];let D;if(T){const U=Zt[T];D=qs.clone(U.uniforms)}else D=v.uniforms;return D}function y(v,T){let D;for(let U=0,z=c.length;U<z;U++){const N=c[U];if(N.cacheKey===T){D=N,++D.usedTimes;break}}return D===void 0&&(D=new Pp(i,T,v,s),c.push(D)),D}function b(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),v.destroy()}}function S(v){l.remove(v)}function F(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:w,acquireProgram:y,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:F}}function Fp(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ma(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,p,m,g,f,d){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:p,material:m,groupOrder:g,renderOrder:h.renderOrder,z:f,group:d},i[e]=_):(_.id=h.id,_.object=h,_.geometry=p,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=f,_.group=d),e++,_}function a(h,p,m,g,f,d){const _=o(h,p,m,g,f,d);m.transmission>0?n.push(_):m.transparent===!0?r.push(_):t.push(_)}function l(h,p,m,g,f,d){const _=o(h,p,m,g,f,d);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function c(h,p){t.length>1&&t.sort(h||zp),n.length>1&&n.sort(p||pa),r.length>1&&r.sort(p||pa)}function u(){for(let h=e,p=i.length;h<p;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Op(){let i=new WeakMap;function e(n,r){let s;return i.has(n)===!1?(s=new ma,i.set(n,[s])):r>=i.get(n).length?(s=new ma,i.get(n).push(s)):s=i.get(n)[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Np(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Re};break;case"SpotLight":t={position:new R,direction:new R,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Up(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Bp=0;function kp(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function Vp(i,e){const t=new Np,n=Up(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new R);const s=new R,o=new We,a=new We;function l(u,h){let p=0,m=0,g=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let f=0,d=0,_=0,x=0,w=0,y=0,b=0,S=0;u.sort(kp);const F=h!==!0?Math.PI:1;for(let T=0,D=u.length;T<D;T++){const U=u[T],z=U.color,N=U.intensity,P=U.distance,W=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)p+=z.r*N*F,m+=z.g*N*F,g+=z.b*N*F;else if(U.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(U.sh.coefficients[G],N);else if(U.isDirectionalLight){const G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*F),U.castShadow){const q=U.shadow,Y=n.get(U);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.directionalShadow[f]=Y,r.directionalShadowMap[f]=W,r.directionalShadowMatrix[f]=U.shadow.matrix,y++}r.directional[f]=G,f++}else if(U.isSpotLight){const G=t.get(U);if(G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(z).multiplyScalar(N*F),G.distance=P,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,U.castShadow){const q=U.shadow,Y=n.get(U);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,r.spotShadow[_]=Y,r.spotShadowMap[_]=W,r.spotShadowMatrix[_]=U.shadow.matrix,S++}r.spot[_]=G,_++}else if(U.isRectAreaLight){const G=t.get(U);G.color.copy(z).multiplyScalar(N),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),r.rectArea[x]=G,x++}else if(U.isPointLight){const G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*F),G.distance=U.distance,G.decay=U.decay,U.castShadow){const q=U.shadow,Y=n.get(U);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,r.pointShadow[d]=Y,r.pointShadowMap[d]=W,r.pointShadowMatrix[d]=U.shadow.matrix,b++}r.point[d]=G,d++}else if(U.isHemisphereLight){const G=t.get(U);G.skyColor.copy(U.color).multiplyScalar(N*F),G.groundColor.copy(U.groundColor).multiplyScalar(N*F),r.hemi[w]=G,w++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=g;const v=r.hash;(v.directionalLength!==f||v.pointLength!==d||v.spotLength!==_||v.rectAreaLength!==x||v.hemiLength!==w||v.numDirectionalShadows!==y||v.numPointShadows!==b||v.numSpotShadows!==S)&&(r.directional.length=f,r.spot.length=_,r.rectArea.length=x,r.point.length=d,r.hemi.length=w,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotShadowMatrix.length=S,v.directionalLength=f,v.pointLength=d,v.spotLength=_,v.rectAreaLength=x,v.hemiLength=w,v.numDirectionalShadows=y,v.numPointShadows=b,v.numSpotShadows=S,r.version=Bp++)}function c(u,h){let p=0,m=0,g=0,f=0,d=0;const _=h.matrixWorldInverse;for(let x=0,w=u.length;x<w;x++){const y=u[x];if(y.isDirectionalLight){const b=r.directional[p];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),p++}else if(y.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const b=r.rectArea[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),f++}else if(y.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const b=r.hemi[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:r}}function ga(i,e){const t=new Vp(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Gp(i,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new ga(i,e),t.set(s,[a])):o>=t.get(s).length?(a=new ga(i,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:n,dispose:r}}class Hp extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wp extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qp(i,e,t){let n=new Fr;const r=new we,s=new we,o=new Ze,a=new Hp({depthPacking:su}),l=new Wp,c={},u=t.maxTextureSize,h={0:Jt,1:ji,2:Ai},p=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:jp,fragmentShader:Xp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new en;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new kt(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fl,this.render=function(y,b,S){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||y.length===0)return;const F=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Ln),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let U=0,z=y.length;U<z;U++){const N=y[U],P=N.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const W=P.getFrameExtents();if(r.multiply(W),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,P.mapSize.y=s.y)),P.map===null){const q=this.type!==ki?{minFilter:Et,magFilter:Et}:{};P.map=new In(r.x,r.y,q),P.map.texture.name=N.name+".shadowMap",P.camera.updateProjectionMatrix()}i.setRenderTarget(P.map),i.clear();const G=P.getViewportCount();for(let q=0;q<G;q++){const Y=P.getViewport(q);o.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),D.viewport(o),P.updateMatrices(N,q),n=P.getFrustum(),w(b,S,P.camera,N,this.type)}P.isPointLightShadow!==!0&&this.type===ki&&_(P,S),P.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(F,v,T)};function _(y,b){const S=e.update(f);p.defines.VSM_SAMPLES!==y.blurSamples&&(p.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new In(r.x,r.y)),p.uniforms.shadow_pass.value=y.map.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(b,null,S,p,f,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(b,null,S,m,f,null)}function x(y,b,S,F,v,T){let D=null;const U=S.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(U!==void 0?D=U:D=S.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const z=D.uuid,N=b.uuid;let P=c[z];P===void 0&&(P={},c[z]=P);let W=P[N];W===void 0&&(W=D.clone(),P[N]=W),D=W}return D.visible=b.visible,D.wireframe=b.wireframe,T===ki?D.side=b.shadowSide!==null?b.shadowSide:b.side:D.side=b.shadowSide!==null?b.shadowSide:h[b.side],D.alphaMap=b.alphaMap,D.alphaTest=b.alphaTest,D.clipShadows=b.clipShadows,D.clippingPlanes=b.clippingPlanes,D.clipIntersection=b.clipIntersection,D.displacementMap=b.displacementMap,D.displacementScale=b.displacementScale,D.displacementBias=b.displacementBias,D.wireframeLinewidth=b.wireframeLinewidth,D.linewidth=b.linewidth,S.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(S.matrixWorld),D.nearDistance=F,D.farDistance=v),D}function w(y,b,S,F,v){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===ki)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,y.matrixWorld);const U=e.update(y),z=y.material;if(Array.isArray(z)){const N=U.groups;for(let P=0,W=N.length;P<W;P++){const G=N[P],q=z[G.materialIndex];if(q&&q.visible){const Y=x(y,q,F,S.near,S.far,v);i.renderBufferDirect(S,null,U,Y,y,G)}}}else if(z.visible){const N=x(y,z,F,S.near,S.far,v);i.renderBufferDirect(S,null,U,N,y,null)}}const D=y.children;for(let U=0,z=D.length;U<z;U++)w(D[U],b,S,F,v)}}function Yp(i,e,t){const n=t.isWebGL2;function r(){let L=!1;const re=new Ze;let ne=null;const ve=new Ze(0,0,0,0);return{setMask:function(ue){ne!==ue&&!L&&(i.colorMask(ue,ue,ue,ue),ne=ue)},setLocked:function(ue){L=ue},setClear:function(ue,me,se,Me,Ve){Ve===!0&&(ue*=Me,me*=Me,se*=Me),re.set(ue,me,se,Me),ve.equals(re)===!1&&(i.clearColor(ue,me,se,Me),ve.copy(re))},reset:function(){L=!1,ne=null,ve.set(-1,0,0,0)}}}function s(){let L=!1,re=null,ne=null,ve=null;return{setTest:function(ue){ue?Z(2929):B(2929)},setMask:function(ue){re!==ue&&!L&&(i.depthMask(ue),re=ue)},setFunc:function(ue){if(ne!==ue){if(ue)switch(ue){case Pc:i.depthFunc(512);break;case Lc:i.depthFunc(519);break;case Dc:i.depthFunc(513);break;case Ls:i.depthFunc(515);break;case Rc:i.depthFunc(514);break;case Ic:i.depthFunc(518);break;case Fc:i.depthFunc(516);break;case zc:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);ne=ue}},setLocked:function(ue){L=ue},setClear:function(ue){ve!==ue&&(i.clearDepth(ue),ve=ue)},reset:function(){L=!1,re=null,ne=null,ve=null}}}function o(){let L=!1,re=null,ne=null,ve=null,ue=null,me=null,se=null,Me=null,Ve=null;return{setTest:function(Ge){L||(Ge?Z(2960):B(2960))},setMask:function(Ge){re!==Ge&&!L&&(i.stencilMask(Ge),re=Ge)},setFunc:function(Ge,vt,tn){(ne!==Ge||ve!==vt||ue!==tn)&&(i.stencilFunc(Ge,vt,tn),ne=Ge,ve=vt,ue=tn)},setOp:function(Ge,vt,tn){(me!==Ge||se!==vt||Me!==tn)&&(i.stencilOp(Ge,vt,tn),me=Ge,se=vt,Me=tn)},setLocked:function(Ge){L=Ge},setClear:function(Ge){Ve!==Ge&&(i.clearStencil(Ge),Ve=Ge)},reset:function(){L=!1,re=null,ne=null,ve=null,ue=null,me=null,se=null,Me=null,Ve=null}}}const a=new r,l=new s,c=new o;let u={},h={},p=new WeakMap,m=[],g=null,f=!1,d=null,_=null,x=null,w=null,y=null,b=null,S=null,F=!1,v=null,T=null,D=null,U=null,z=null;const N=i.getParameter(35661);let P=!1,W=0;const G=i.getParameter(7938);G.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(G)[1]),P=W>=1):G.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),P=W>=2);let q=null,Y={};const I=i.getParameter(3088),O=i.getParameter(2978),ee=new Ze().fromArray(I),K=new Ze().fromArray(O);function $(L,re,ne){const ve=new Uint8Array(4),ue=i.createTexture();i.bindTexture(L,ue),i.texParameteri(L,10241,9728),i.texParameteri(L,10240,9728);for(let me=0;me<ne;me++)i.texImage2D(re+me,0,6408,1,1,0,6408,5121,ve);return ue}const de={};de[3553]=$(3553,3553,1),de[34067]=$(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Z(2929),l.setFunc(Ls),it(!1),at(ro),Z(2884),ge(Ln);function Z(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function B(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Ke(L,re){return h[L]!==re?(i.bindFramebuffer(L,re),h[L]=re,n&&(L===36009&&(h[36160]=re),L===36160&&(h[36009]=re)),!0):!1}function Ee(L,re){let ne=m,ve=!1;if(L)if(ne=p.get(re),ne===void 0&&(ne=[],p.set(re,ne)),L.isWebGLMultipleRenderTargets){const ue=L.texture;if(ne.length!==ue.length||ne[0]!==36064){for(let me=0,se=ue.length;me<se;me++)ne[me]=36064+me;ne.length=ue.length,ve=!0}}else ne[0]!==36064&&(ne[0]=36064,ve=!0);else ne[0]!==1029&&(ne[0]=1029,ve=!0);ve&&(t.isWebGL2?i.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function be(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const k={[yi]:32774,[vc]:32778,[xc]:32779};if(n)k[lo]=32775,k[co]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(k[lo]=L.MIN_EXT,k[co]=L.MAX_EXT)}const pe={[wc]:0,[bc]:1,[yc]:768,[dl]:770,[Cc]:776,[Ac]:774,[Sc]:772,[Mc]:769,[pl]:771,[Tc]:775,[Ec]:773};function ge(L,re,ne,ve,ue,me,se,Me){if(L===Ln){f===!0&&(B(3042),f=!1);return}if(f===!1&&(Z(3042),f=!0),L!==_c){if(L!==d||Me!==F){if((_!==yi||y!==yi)&&(i.blendEquation(32774),_=yi,y=yi),Me)switch(L){case Si:i.blendFuncSeparate(1,771,1,771);break;case so:i.blendFunc(1,1);break;case oo:i.blendFuncSeparate(0,769,0,1);break;case ao:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Si:i.blendFuncSeparate(770,771,1,771);break;case so:i.blendFunc(770,1);break;case oo:i.blendFuncSeparate(0,769,0,1);break;case ao:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,w=null,b=null,S=null,d=L,F=Me}return}ue=ue||re,me=me||ne,se=se||ve,(re!==_||ue!==y)&&(i.blendEquationSeparate(k[re],k[ue]),_=re,y=ue),(ne!==x||ve!==w||me!==b||se!==S)&&(i.blendFuncSeparate(pe[ne],pe[ve],pe[me],pe[se]),x=ne,w=ve,b=me,S=se),d=L,F=null}function _e(L,re){L.side===Ai?B(2884):Z(2884);let ne=L.side===Jt;re&&(ne=!ne),it(ne),L.blending===Si&&L.transparent===!1?ge(Ln):ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ve=L.stencilWrite;c.setTest(ve),ve&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Lt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(32926):B(32926)}function it(L){v!==L&&(L?i.frontFace(2304):i.frontFace(2305),v=L)}function at(L){L!==pc?(Z(2884),L!==T&&(L===ro?i.cullFace(1029):L===mc?i.cullFace(1028):i.cullFace(1032))):B(2884),T=L}function ut(L){L!==D&&(P&&i.lineWidth(L),D=L)}function Lt(L,re,ne){L?(Z(32823),(U!==re||z!==ne)&&(i.polygonOffset(re,ne),U=re,z=ne)):B(32823)}function rt(L){L?Z(3089):B(3089)}function ke(L){L===void 0&&(L=33984+N-1),q!==L&&(i.activeTexture(L),q=L)}function Ft(L,re){q===null&&ke();let ne=Y[q];ne===void 0&&(ne={type:void 0,texture:void 0},Y[q]=ne),(ne.type!==L||ne.texture!==re)&&(i.bindTexture(L,re||de[L]),ne.type=L,ne.texture=re)}function zt(){const L=Y[q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function C(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function M(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function E(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(L){ee.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function ae(L){K.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function ie(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},q=null,Y={},h={},p=new WeakMap,m=[],g=null,f=!1,d=null,_=null,x=null,w=null,y=null,b=null,S=null,F=!1,v=null,T=null,D=null,U=null,z=null,ee.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Z,disable:B,bindFramebuffer:Ke,drawBuffers:Ee,useProgram:be,setBlending:ge,setMaterial:_e,setFlipSided:it,setCullFace:at,setLineWidth:ut,setPolygonOffset:Lt,setScissorTest:rt,activeTexture:ke,bindTexture:Ft,unbindTexture:zt,compressedTexImage2D:C,texImage2D:xe,texImage3D:E,texStorage2D:oe,texStorage3D:fe,texSubImage2D:M,texSubImage3D:X,compressedTexSubImage2D:te,scissor:J,viewport:ae,reset:ie}}function Zp(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return _?new OffscreenCanvas(C,M):qi("canvas")}function w(C,M,X,te){let oe=1;if((C.width>te||C.height>te)&&(oe=te/Math.max(C.width,C.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const fe=M?Os:Math.floor,xe=fe(oe*C.width),E=fe(oe*C.height);f===void 0&&(f=x(xe,E));const J=X?x(xe,E):f;return J.width=xe,J.height=E,J.getContext("2d").drawImage(C,0,0,xe,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+xe+"x"+E+")."),J}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return No(C.width)&&No(C.height)}function b(C){return a?!1:C.wrapS!==Qt||C.wrapT!==Qt||C.minFilter!==Et&&C.minFilter!==Nt}function S(C,M){return C.generateMipmaps&&M&&C.minFilter!==Et&&C.minFilter!==Nt}function F(C){i.generateMipmap(C)}function v(C,M,X,te,oe=!1){if(a===!1)return M;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe=M;return M===6403&&(X===5126&&(fe=33326),X===5131&&(fe=33325),X===5121&&(fe=33321)),M===33319&&(X===5126&&(fe=33328),X===5131&&(fe=33327),X===5121&&(fe=33323)),M===6408&&(X===5126&&(fe=34836),X===5131&&(fe=34842),X===5121&&(fe=te===Ye&&oe===!1?35907:32856),X===32819&&(fe=32854),X===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function T(C,M,X){return S(C,X)===!0||C.isFramebufferTexture&&C.minFilter!==Et&&C.minFilter!==Nt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function D(C){return C===Et||C===uo||C===fo?9728:9729}function U(C){const M=C.target;M.removeEventListener("dispose",U),N(M),M.isVideoTexture&&g.delete(M)}function z(C){const M=C.target;M.removeEventListener("dispose",z),W(M)}function N(C){const M=n.get(C);if(M.__webglInit===void 0)return;const X=C.source,te=d.get(X);if(te){const oe=te[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&P(C),Object.keys(te).length===0&&d.delete(X)}n.remove(C)}function P(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const X=C.source,te=d.get(X);delete te[M.__cacheKey],o.memory.textures--}function W(C){const M=C.texture,X=n.get(C),te=n.get(M);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)i.deleteFramebuffer(X.__webglFramebuffer[oe]),X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer[oe]);else{if(i.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&i.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let oe=0;oe<X.__webglColorRenderbuffer.length;oe++)X.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(X.__webglColorRenderbuffer[oe]);X.__webglDepthRenderbuffer&&i.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let oe=0,fe=M.length;oe<fe;oe++){const xe=n.get(M[oe]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(M[oe])}n.remove(M),n.remove(C)}let G=0;function q(){G=0}function Y(){const C=G;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),G+=1,C}function I(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.encoding),M.join()}function O(C,M){const X=n.get(C);if(C.isVideoTexture&&Ft(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(X,C,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,X.__webglTexture)}function ee(C,M){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Ee(X,C,M);return}t.activeTexture(33984+M),t.bindTexture(35866,X.__webglTexture)}function K(C,M){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Ee(X,C,M);return}t.activeTexture(33984+M),t.bindTexture(32879,X.__webglTexture)}function $(C,M){const X=n.get(C);if(C.version>0&&X.__version!==C.version){be(X,C,M);return}t.activeTexture(33984+M),t.bindTexture(34067,X.__webglTexture)}const de={[Is]:10497,[Qt]:33071,[Fs]:33648},Z={[Et]:9728,[uo]:9984,[fo]:9986,[Nt]:9729,[Gc]:9985,[Rr]:9987};function B(C,M,X){if(X?(i.texParameteri(C,10242,de[M.wrapS]),i.texParameteri(C,10243,de[M.wrapT]),(C===32879||C===35866)&&i.texParameteri(C,32882,de[M.wrapR]),i.texParameteri(C,10240,Z[M.magFilter]),i.texParameteri(C,10241,Z[M.minFilter])):(i.texParameteri(C,10242,33071),i.texParameteri(C,10243,33071),(C===32879||C===35866)&&i.texParameteri(C,32882,33071),(M.wrapS!==Qt||M.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,10240,D(M.magFilter)),i.texParameteri(C,10241,D(M.minFilter)),M.minFilter!==Et&&M.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.type===jn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Xi&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Ke(C,M){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",U));const te=M.source;let oe=d.get(te);oe===void 0&&(oe={},d.set(te,oe));const fe=I(M);if(fe!==C.__cacheKey){oe[fe]===void 0&&(oe[fe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),oe[fe].usedTimes++;const xe=oe[C.__cacheKey];xe!==void 0&&(oe[C.__cacheKey].usedTimes--,xe.usedTimes===0&&P(M)),C.__cacheKey=fe,C.__webglTexture=oe[fe].texture}return X}function Ee(C,M,X){let te=3553;M.isDataArrayTexture&&(te=35866),M.isData3DTexture&&(te=32879);const oe=Ke(C,M),fe=M.source;if(t.activeTexture(33984+X),t.bindTexture(te,C.__webglTexture),fe.version!==fe.__currentVersion||oe===!0){i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const xe=b(M)&&y(M.image)===!1;let E=w(M.image,xe,!1,u);E=zt(M,E);const J=y(E)||a,ae=s.convert(M.format,M.encoding);let ie=s.convert(M.type),L=v(M.internalFormat,ae,ie,M.encoding,M.isVideoTexture);B(te,M,J);let re;const ne=M.mipmaps,ve=a&&M.isVideoTexture!==!0,ue=fe.__currentVersion===void 0||oe===!0,me=T(M,E,J);if(M.isDepthTexture)L=6402,a?M.type===jn?L=36012:M.type===Wn?L=33190:M.type===Ei?L=35056:L=33189:M.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Yn&&L===6402&&M.type!==_l&&M.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Wn,ie=s.convert(M.type)),M.format===Pi&&L===6402&&(L=34041,M.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ei,ie=s.convert(M.type))),ue&&(ve?t.texStorage2D(3553,1,L,E.width,E.height):t.texImage2D(3553,0,L,E.width,E.height,0,ae,ie,null));else if(M.isDataTexture)if(ne.length>0&&J){ve&&ue&&t.texStorage2D(3553,me,L,ne[0].width,ne[0].height);for(let se=0,Me=ne.length;se<Me;se++)re=ne[se],ve?t.texSubImage2D(3553,se,0,0,re.width,re.height,ae,ie,re.data):t.texImage2D(3553,se,L,re.width,re.height,0,ae,ie,re.data);M.generateMipmaps=!1}else ve?(ue&&t.texStorage2D(3553,me,L,E.width,E.height),t.texSubImage2D(3553,0,0,0,E.width,E.height,ae,ie,E.data)):t.texImage2D(3553,0,L,E.width,E.height,0,ae,ie,E.data);else if(M.isCompressedTexture){ve&&ue&&t.texStorage2D(3553,me,L,ne[0].width,ne[0].height);for(let se=0,Me=ne.length;se<Me;se++)re=ne[se],M.format!==on?ae!==null?ve?t.compressedTexSubImage2D(3553,se,0,0,re.width,re.height,ae,re.data):t.compressedTexImage2D(3553,se,L,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?t.texSubImage2D(3553,se,0,0,re.width,re.height,ae,ie,re.data):t.texImage2D(3553,se,L,re.width,re.height,0,ae,ie,re.data)}else if(M.isDataArrayTexture)ve?(ue&&t.texStorage3D(35866,me,L,E.width,E.height,E.depth),t.texSubImage3D(35866,0,0,0,0,E.width,E.height,E.depth,ae,ie,E.data)):t.texImage3D(35866,0,L,E.width,E.height,E.depth,0,ae,ie,E.data);else if(M.isData3DTexture)ve?(ue&&t.texStorage3D(32879,me,L,E.width,E.height,E.depth),t.texSubImage3D(32879,0,0,0,0,E.width,E.height,E.depth,ae,ie,E.data)):t.texImage3D(32879,0,L,E.width,E.height,E.depth,0,ae,ie,E.data);else if(M.isFramebufferTexture){if(ue)if(ve)t.texStorage2D(3553,me,L,E.width,E.height);else{let se=E.width,Me=E.height;for(let Ve=0;Ve<me;Ve++)t.texImage2D(3553,Ve,L,se,Me,0,ae,ie,null),se>>=1,Me>>=1}}else if(ne.length>0&&J){ve&&ue&&t.texStorage2D(3553,me,L,ne[0].width,ne[0].height);for(let se=0,Me=ne.length;se<Me;se++)re=ne[se],ve?t.texSubImage2D(3553,se,0,0,ae,ie,re):t.texImage2D(3553,se,L,ae,ie,re);M.generateMipmaps=!1}else ve?(ue&&t.texStorage2D(3553,me,L,E.width,E.height),t.texSubImage2D(3553,0,0,0,ae,ie,E)):t.texImage2D(3553,0,L,ae,ie,E);S(M,J)&&F(te),fe.__currentVersion=fe.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function be(C,M,X){if(M.image.length!==6)return;const te=Ke(C,M),oe=M.source;if(t.activeTexture(33984+X),t.bindTexture(34067,C.__webglTexture),oe.version!==oe.__currentVersion||te===!0){i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const fe=M.isCompressedTexture||M.image[0].isCompressedTexture,xe=M.image[0]&&M.image[0].isDataTexture,E=[];for(let se=0;se<6;se++)!fe&&!xe?E[se]=w(M.image[se],!1,!0,c):E[se]=xe?M.image[se].image:M.image[se],E[se]=zt(M,E[se]);const J=E[0],ae=y(J)||a,ie=s.convert(M.format,M.encoding),L=s.convert(M.type),re=v(M.internalFormat,ie,L,M.encoding),ne=a&&M.isVideoTexture!==!0,ve=oe.__currentVersion===void 0||te===!0;let ue=T(M,J,ae);B(34067,M,ae);let me;if(fe){ne&&ve&&t.texStorage2D(34067,ue,re,J.width,J.height);for(let se=0;se<6;se++){me=E[se].mipmaps;for(let Me=0;Me<me.length;Me++){const Ve=me[Me];M.format!==on?ie!==null?ne?t.compressedTexSubImage2D(34069+se,Me,0,0,Ve.width,Ve.height,ie,Ve.data):t.compressedTexImage2D(34069+se,Me,re,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?t.texSubImage2D(34069+se,Me,0,0,Ve.width,Ve.height,ie,L,Ve.data):t.texImage2D(34069+se,Me,re,Ve.width,Ve.height,0,ie,L,Ve.data)}}}else{me=M.mipmaps,ne&&ve&&(me.length>0&&ue++,t.texStorage2D(34067,ue,re,E[0].width,E[0].height));for(let se=0;se<6;se++)if(xe){ne?t.texSubImage2D(34069+se,0,0,0,E[se].width,E[se].height,ie,L,E[se].data):t.texImage2D(34069+se,0,re,E[se].width,E[se].height,0,ie,L,E[se].data);for(let Me=0;Me<me.length;Me++){const Ge=me[Me].image[se].image;ne?t.texSubImage2D(34069+se,Me+1,0,0,Ge.width,Ge.height,ie,L,Ge.data):t.texImage2D(34069+se,Me+1,re,Ge.width,Ge.height,0,ie,L,Ge.data)}}else{ne?t.texSubImage2D(34069+se,0,0,0,ie,L,E[se]):t.texImage2D(34069+se,0,re,ie,L,E[se]);for(let Me=0;Me<me.length;Me++){const Ve=me[Me];ne?t.texSubImage2D(34069+se,Me+1,0,0,ie,L,Ve.image[se]):t.texImage2D(34069+se,Me+1,re,ie,L,Ve.image[se])}}}S(M,ae)&&F(34067),oe.__currentVersion=oe.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function k(C,M,X,te,oe){const fe=s.convert(X.format,X.encoding),xe=s.convert(X.type),E=v(X.internalFormat,fe,xe,X.encoding);n.get(M).__hasExternalTextures||(oe===32879||oe===35866?t.texImage3D(oe,0,E,M.width,M.height,M.depth,0,fe,xe,null):t.texImage2D(oe,0,E,M.width,M.height,0,fe,xe,null)),t.bindFramebuffer(36160,C),ke(M)?p.framebufferTexture2DMultisampleEXT(36160,te,oe,n.get(X).__webglTexture,0,rt(M)):i.framebufferTexture2D(36160,te,oe,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function pe(C,M,X){if(i.bindRenderbuffer(36161,C),M.depthBuffer&&!M.stencilBuffer){let te=33189;if(X||ke(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===jn?te=36012:oe.type===Wn&&(te=33190));const fe=rt(M);ke(M)?p.renderbufferStorageMultisampleEXT(36161,fe,te,M.width,M.height):i.renderbufferStorageMultisample(36161,fe,te,M.width,M.height)}else i.renderbufferStorage(36161,te,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,C)}else if(M.depthBuffer&&M.stencilBuffer){const te=rt(M);X&&ke(M)===!1?i.renderbufferStorageMultisample(36161,te,35056,M.width,M.height):ke(M)?p.renderbufferStorageMultisampleEXT(36161,te,35056,M.width,M.height):i.renderbufferStorage(36161,34041,M.width,M.height),i.framebufferRenderbuffer(36160,33306,36161,C)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<te.length;oe++){const fe=te[oe],xe=s.convert(fe.format,fe.encoding),E=s.convert(fe.type),J=v(fe.internalFormat,xe,E,fe.encoding),ae=rt(M);X&&ke(M)===!1?i.renderbufferStorageMultisample(36161,ae,J,M.width,M.height):ke(M)?p.renderbufferStorageMultisampleEXT(36161,ae,J,M.width,M.height):i.renderbufferStorage(36161,J,M.width,M.height)}}i.bindRenderbuffer(36161,null)}function ge(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),O(M.depthTexture,0);const te=n.get(M.depthTexture).__webglTexture,oe=rt(M);if(M.depthTexture.format===Yn)ke(M)?p.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,oe):i.framebufferTexture2D(36160,36096,3553,te,0);else if(M.depthTexture.format===Pi)ke(M)?p.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,oe):i.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function _e(C){const M=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ge(M.__webglFramebuffer,C)}else if(X){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=i.createRenderbuffer(),pe(M.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),pe(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function it(C,M,X){const te=n.get(C);M!==void 0&&k(te.__webglFramebuffer,C,C.texture,36064,3553),X!==void 0&&_e(C)}function at(C){const M=C.texture,X=n.get(C),te=n.get(M);C.addEventListener("dispose",z),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=M.version,o.memory.textures++);const oe=C.isWebGLCubeRenderTarget===!0,fe=C.isWebGLMultipleRenderTargets===!0,xe=y(C)||a;if(oe){X.__webglFramebuffer=[];for(let E=0;E<6;E++)X.__webglFramebuffer[E]=i.createFramebuffer()}else{if(X.__webglFramebuffer=i.createFramebuffer(),fe)if(r.drawBuffers){const E=C.texture;for(let J=0,ae=E.length;J<ae;J++){const ie=n.get(E[J]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ke(C)===!1){const E=fe?M:[M];X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let J=0;J<E.length;J++){const ae=E[J];X.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(36161,X.__webglColorRenderbuffer[J]);const ie=s.convert(ae.format,ae.encoding),L=s.convert(ae.type),re=v(ae.internalFormat,ie,L,ae.encoding),ne=rt(C);i.renderbufferStorageMultisample(36161,ne,re,C.width,C.height),i.framebufferRenderbuffer(36160,36064+J,36161,X.__webglColorRenderbuffer[J])}i.bindRenderbuffer(36161,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(oe){t.bindTexture(34067,te.__webglTexture),B(34067,M,xe);for(let E=0;E<6;E++)k(X.__webglFramebuffer[E],C,M,36064,34069+E);S(M,xe)&&F(34067),t.unbindTexture()}else if(fe){const E=C.texture;for(let J=0,ae=E.length;J<ae;J++){const ie=E[J],L=n.get(ie);t.bindTexture(3553,L.__webglTexture),B(3553,ie,xe),k(X.__webglFramebuffer,C,ie,36064+J,3553),S(ie,xe)&&F(3553)}t.unbindTexture()}else{let E=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?E=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(E,te.__webglTexture),B(E,M,xe),k(X.__webglFramebuffer,C,M,36064,E),S(M,xe)&&F(E),t.unbindTexture()}C.depthBuffer&&_e(C)}function ut(C){const M=y(C)||a,X=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,oe=X.length;te<oe;te++){const fe=X[te];if(S(fe,M)){const xe=C.isWebGLCubeRenderTarget?34067:3553,E=n.get(fe).__webglTexture;t.bindTexture(xe,E),F(xe),t.unbindTexture()}}}function Lt(C){if(a&&C.samples>0&&ke(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],X=C.width,te=C.height;let oe=16384;const fe=[],xe=C.stencilBuffer?33306:36096,E=n.get(C),J=C.isWebGLMultipleRenderTargets===!0;if(J)for(let ae=0;ae<M.length;ae++)t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ae,36161,null),t.bindFramebuffer(36160,E.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ae,3553,null,0);t.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,E.__webglFramebuffer);for(let ae=0;ae<M.length;ae++){fe.push(36064+ae),C.depthBuffer&&fe.push(xe);const ie=E.__ignoreDepthValues!==void 0?E.__ignoreDepthValues:!1;if(ie===!1&&(C.depthBuffer&&(oe|=256),C.stencilBuffer&&(oe|=1024)),J&&i.framebufferRenderbuffer(36008,36064,36161,E.__webglColorRenderbuffer[ae]),ie===!0&&(i.invalidateFramebuffer(36008,[xe]),i.invalidateFramebuffer(36009,[xe])),J){const L=n.get(M[ae]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,L,0)}i.blitFramebuffer(0,0,X,te,0,0,X,te,oe,9728),m&&i.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),J)for(let ae=0;ae<M.length;ae++){t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ae,36161,E.__webglColorRenderbuffer[ae]);const ie=n.get(M[ae]).__webglTexture;t.bindFramebuffer(36160,E.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ae,3553,ie,0)}t.bindFramebuffer(36009,E.__webglMultisampledFramebuffer)}}function rt(C){return Math.min(h,C.samples)}function ke(C){const M=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ft(C){const M=o.render.frame;g.get(C)!==M&&(g.set(C,M),C.update())}function zt(C,M){const X=C.encoding,te=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===zs||X!==Rn&&(X===Ye?a===!1?e.has("EXT_sRGB")===!0&&te===on?(C.format=zs,C.minFilter=Nt,C.generateMipmaps=!1):M=wl.sRGBToLinear(M):(te!==on||oe!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),M}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=O,this.setTexture2DArray=ee,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=it,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=k,this.useMultisampledRTT=ke}function Qp(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===Qn)return 5121;if(s===Xc)return 32819;if(s===qc)return 32820;if(s===Hc)return 5120;if(s===Wc)return 5122;if(s===_l)return 5123;if(s===jc)return 5124;if(s===Wn)return 5125;if(s===jn)return 5126;if(s===Xi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Yc)return 6406;if(s===on)return 6408;if(s===Qc)return 6409;if(s===Jc)return 6410;if(s===Yn)return 6402;if(s===Pi)return 34041;if(s===Kc)return 6403;if(s===Zc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===zs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===$c)return 36244;if(s===eu)return 33319;if(s===tu)return 33320;if(s===nu)return 36249;if(s===Xr||s===qr||s===Yr||s===Zr)if(o===Ye)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Xr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Xr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ho||s===po||s===mo||s===go)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ho)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===po)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===go)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===iu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===_o||s===vo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===_o)return o===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===vo)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xo||s===wo||s===bo||s===yo||s===Mo||s===So||s===Eo||s===Ao||s===To||s===Co||s===Po||s===Lo||s===Do||s===Ro)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===xo)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wo)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bo)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yo)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Mo)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===So)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Eo)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ao)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===To)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Co)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Po)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Lo)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Do)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ro)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Io)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Io)return o===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ei?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Jp extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gi extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kp={type:"move"};class Ss{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const f of e.hand.values()){const d=t.getJointPose(f,n);if(c.joints[f.jointName]===void 0){const x=new Gi;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[f.jointName]=x,c.add(x)}const _=c.joints[f.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class $p extends Wt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Yn,u!==Yn&&u!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Yn&&(n=Wn),n===void 0&&u===Pi&&(n=Ei),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1}}class em extends Kn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,p=null,m=null;const g=t.getContextAttributes();let f=null,d=null;const _=[],x=[],w=new Ut;w.layers.enable(1),w.viewport=new Ze;const y=new Ut;y.layers.enable(2),y.viewport=new Ze;const b=[w,y],S=new Jp;S.layers.enable(1),S.layers.enable(2);let F=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let O=_[I];return O===void 0&&(O=new Ss,_[I]=O),O.getTargetRaySpace()},this.getControllerGrip=function(I){let O=_[I];return O===void 0&&(O=new Ss,_[I]=O),O.getGripSpace()},this.getHand=function(I){let O=_[I];return O===void 0&&(O=new Ss,_[I]=O),O.getHandSpace()};function T(I){const O=x.indexOf(I.inputSource);if(O===-1)return;const ee=_[O];ee!==void 0&&ee.dispatchEvent({type:I.type,data:I.inputSource})}function D(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",U);for(let I=0;I<_.length;I++){const O=x[I];O!==null&&(x[I]=null,_[I].disconnect(O))}F=null,v=null,e.setRenderTarget(f),p=null,h=null,u=null,r=null,d=null,Y.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",D),r.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,O),r.updateRenderState({baseLayer:p}),d=new In(p.framebufferWidth,p.framebufferHeight,{format:on,type:Qn,encoding:e.outputEncoding})}else{let O=null,ee=null,K=null;g.depth&&(K=g.stencil?35056:33190,O=g.stencil?Pi:Yn,ee=g.stencil?Ei:Wn);const $={colorFormat:32856,depthFormat:K,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer($),r.updateRenderState({layers:[h]}),d=new In(h.textureWidth,h.textureHeight,{format:on,type:Qn,depthTexture:new $p(h.textureWidth,h.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const de=e.properties.get(d);de.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),Y.setContext(r),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(I){for(let O=0;O<I.removed.length;O++){const ee=I.removed[O],K=x.indexOf(ee);K>=0&&(x[K]=null,_[K].dispatchEvent({type:"disconnected",data:ee}))}for(let O=0;O<I.added.length;O++){const ee=I.added[O];let K=x.indexOf(ee);if(K===-1){for(let de=0;de<_.length;de++)if(de>=x.length){x.push(ee),K=de;break}else if(x[de]===null){x[de]=ee,K=de;break}if(K===-1)break}const $=_[K];$&&$.dispatchEvent({type:"connected",data:ee})}}const z=new R,N=new R;function P(I,O,ee){z.setFromMatrixPosition(O.matrixWorld),N.setFromMatrixPosition(ee.matrixWorld);const K=z.distanceTo(N),$=O.projectionMatrix.elements,de=ee.projectionMatrix.elements,Z=$[14]/($[10]-1),B=$[14]/($[10]+1),Ke=($[9]+1)/$[5],Ee=($[9]-1)/$[5],be=($[8]-1)/$[0],k=(de[8]+1)/de[0],pe=Z*be,ge=Z*k,_e=K/(-be+k),it=_e*-be;O.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(it),I.translateZ(_e),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const at=Z+_e,ut=B+_e,Lt=pe-it,rt=ge+(K-it),ke=Ke*B/ut*at,Ft=Ee*B/ut*at;I.projectionMatrix.makePerspective(Lt,rt,ke,Ft,at,ut)}function W(I,O){O===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(O.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;S.near=y.near=w.near=I.near,S.far=y.far=w.far=I.far,(F!==S.near||v!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),F=S.near,v=S.far);const O=I.parent,ee=S.cameras;W(S,O);for(let $=0;$<ee.length;$++)W(ee[$],O);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),I.position.copy(S.position),I.quaternion.copy(S.quaternion),I.scale.copy(S.scale),I.matrix.copy(S.matrix),I.matrixWorld.copy(S.matrixWorld);const K=I.children;for(let $=0,de=K.length;$<de;$++)K[$].updateMatrixWorld(!0);ee.length===2?P(S,w,y):S.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(p!==null)return p.fixedFoveation},this.setFoveation=function(I){h!==null&&(h.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)};let G=null;function q(I,O){if(c=O.getViewerPose(l||o),m=O,c!==null){const ee=c.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let K=!1;ee.length!==S.cameras.length&&(S.cameras.length=0,K=!0);for(let $=0;$<ee.length;$++){const de=ee[$];let Z=null;if(p!==null)Z=p.getViewport(de);else{const Ke=u.getViewSubImage(h,de);Z=Ke.viewport,$===0&&(e.setRenderTargetTextures(d,Ke.colorTexture,h.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(d))}let B=b[$];B===void 0&&(B=new Ut,B.layers.enable($),B.viewport=new Ze,b[$]=B),B.matrix.fromArray(de.transform.matrix),B.projectionMatrix.fromArray(de.projectionMatrix),B.viewport.set(Z.x,Z.y,Z.width,Z.height),$===0&&S.matrix.copy(B.matrix),K===!0&&S.cameras.push(B)}}for(let ee=0;ee<_.length;ee++){const K=x[ee],$=_[ee];K!==null&&$!==void 0&&$.update(K,O,l||o)}G&&G(I,O),m=null}const Y=new Cl;Y.setAnimationLoop(q),this.setAnimationLoop=function(I){G=I},this.dispose=function(){}}}function tm(i,e){function t(f,d){f.fogColor.value.copy(d.color),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function n(f,d,_,x,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),u(f,d)):d.isMeshPhongMaterial?(r(f,d),c(f,d)):d.isMeshStandardMaterial?(r(f,d),h(f,d),d.isMeshPhysicalMaterial&&p(f,d,w)):d.isMeshMatcapMaterial?(r(f,d),m(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),g(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(s(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?a(f,d,_,x):d.isSpriteMaterial?l(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map),d.alphaMap&&(f.alphaMap.value=d.alphaMap),d.bumpMap&&(f.bumpMap.value=d.bumpMap,f.bumpScale.value=d.bumpScale,d.side===Jt&&(f.bumpScale.value*=-1)),d.displacementMap&&(f.displacementMap.value=d.displacementMap,f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap),d.normalMap&&(f.normalMap.value=d.normalMap,f.normalScale.value.copy(d.normalScale),d.side===Jt&&f.normalScale.value.negate()),d.specularMap&&(f.specularMap.value=d.specularMap),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;const y=i.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*y}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity);let x;d.map?x=d.map:d.specularMap?x=d.specularMap:d.displacementMap?x=d.displacementMap:d.normalMap?x=d.normalMap:d.bumpMap?x=d.bumpMap:d.roughnessMap?x=d.roughnessMap:d.metalnessMap?x=d.metalnessMap:d.alphaMap?x=d.alphaMap:d.emissiveMap?x=d.emissiveMap:d.clearcoatMap?x=d.clearcoatMap:d.clearcoatNormalMap?x=d.clearcoatNormalMap:d.clearcoatRoughnessMap?x=d.clearcoatRoughnessMap:d.iridescenceMap?x=d.iridescenceMap:d.iridescenceThicknessMap?x=d.iridescenceThicknessMap:d.specularIntensityMap?x=d.specularIntensityMap:d.specularColorMap?x=d.specularColorMap:d.transmissionMap?x=d.transmissionMap:d.thicknessMap?x=d.thicknessMap:d.sheenColorMap?x=d.sheenColorMap:d.sheenRoughnessMap&&(x=d.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uvTransform.value.copy(x.matrix));let w;d.aoMap?w=d.aoMap:d.lightMap&&(w=d.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),f.uv2Transform.value.copy(w.matrix))}function s(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function a(f,d,_,x){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*_,f.scale.value=x*.5,d.map&&(f.map.value=d.map),d.alphaMap&&(f.alphaMap.value=d.alphaMap),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let w;d.map?w=d.map:d.alphaMap&&(w=d.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),f.uvTransform.value.copy(w.matrix))}function l(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map),d.alphaMap&&(f.alphaMap.value=d.alphaMap),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function c(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function h(f,d){f.roughness.value=d.roughness,f.metalness.value=d.metalness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function p(f,d,_){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),f.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Jt&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap)}function m(f,d){d.matcap&&(f.matcap.value=d.matcap)}function g(f,d){f.referencePosition.value.copy(d.referencePosition),f.nearDistance.value=d.nearDistance,f.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function nm(){const i=qi("canvas");return i.style.display="block",i}function Fl(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:nm(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,p=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Rn,this.physicallyCorrectLights=!1,this.toneMapping=an,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const f=this;let d=!1,_=0,x=0,w=null,y=-1,b=null;const S=new Ze,F=new Ze;let v=null,T=e.width,D=e.height,U=1,z=null,N=null;const P=new Ze(0,0,T,D),W=new Ze(0,0,T,D);let G=!1;const q=new Fr;let Y=!1,I=!1,O=null;const ee=new We,K=new we,$=new R,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Z(){return w===null?U:1}let B=t;function Ke(A,V){for(let j=0;j<A.length;j++){const H=A[j],Q=e.getContext(H,V);if(Q!==null)return Q}return null}try{const A={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hs}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",ne,!1),B===null){const V=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&V.shift(),B=Ke(V,A),B===null)throw Ke(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ee,be,k,pe,ge,_e,it,at,ut,Lt,rt,ke,Ft,zt,C,M,X,te,oe,fe,xe,E,J;function ae(){Ee=new dd(B),be=new ad(B,Ee,i),Ee.init(be),E=new Qp(B,Ee,be),k=new Yp(B,Ee,be),pe=new gd,ge=new Fp,_e=new Zp(B,Ee,k,ge,be,E,pe),it=new cd(f),at=new hd(f),ut=new Tu(B,be),J=new sd(B,Ee,ut,be),Lt=new pd(B,ut,pe,J),rt=new wd(B,Lt,ut,pe),oe=new xd(B,be,_e),M=new ld(ge),ke=new Ip(f,it,at,Ee,be,J,M),Ft=new tm(f,ge),zt=new Op,C=new Gp(Ee,be),te=new rd(f,it,k,rt,u,o),X=new qp(f,rt,be),fe=new od(B,Ee,pe,be),xe=new md(B,Ee,pe,be),pe.programs=ke.programs,f.capabilities=be,f.extensions=Ee,f.properties=ge,f.renderLists=zt,f.shadowMap=X,f.state=k,f.info=pe}ae();const ie=new em(f,B);this.xr=ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(A){A!==void 0&&(U=A,this.setSize(T,D,!1))},this.getSize=function(A){return A.set(T,D)},this.setSize=function(A,V,j){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=A,D=V,e.width=Math.floor(A*U),e.height=Math.floor(V*U),j!==!1&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(T*U,D*U).floor()},this.setDrawingBufferSize=function(A,V,j){T=A,D=V,U=j,e.width=Math.floor(A*j),e.height=Math.floor(V*j),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(P)},this.setViewport=function(A,V,j,H){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,V,j,H),k.viewport(S.copy(P).multiplyScalar(U).floor())},this.getScissor=function(A){return A.copy(W)},this.setScissor=function(A,V,j,H){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,V,j,H),k.scissor(F.copy(W).multiplyScalar(U).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(A){k.setScissorTest(G=A)},this.setOpaqueSort=function(A){z=A},this.setTransparentSort=function(A){N=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(A=!0,V=!0,j=!0){let H=0;A&&(H|=16384),V&&(H|=256),j&&(H|=1024),B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",ne,!1),zt.dispose(),C.dispose(),ge.dispose(),it.dispose(),at.dispose(),rt.dispose(),J.dispose(),ke.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ve),ie.removeEventListener("sessionend",Ge),O&&(O.dispose(),O=null),vt.stop()};function L(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const A=pe.autoReset,V=X.enabled,j=X.autoUpdate,H=X.needsUpdate,Q=X.type;ae(),pe.autoReset=A,X.enabled=V,X.autoUpdate=j,X.needsUpdate=H,X.type=Q}function ne(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ve(A){const V=A.target;V.removeEventListener("dispose",ve),ue(V)}function ue(A){me(A),ge.remove(A)}function me(A){const V=ge.get(A).programs;V!==void 0&&(V.forEach(function(j){ke.releaseProgram(j)}),A.isShaderMaterial&&ke.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,j,H,Q,ye){V===null&&(V=de);const Se=Q.isMesh&&Q.matrixWorld.determinant()<0,Le=nc(A,V,j,H,Q);k.setMaterial(H,Se);let Ce=j.index;const He=j.attributes.position;if(Ce===null){if(He===void 0||He.count===0)return}else if(Ce.count===0)return;let Oe=1;H.wireframe===!0&&(Ce=Lt.getWireframeAttribute(j),Oe=2),J.setup(Q,H,Le,j,Ce);let Ne,$e=fe;Ce!==null&&(Ne=ut.get(Ce),$e=xe,$e.setIndex(Ne));const On=Ce!==null?Ce.count:He.count,ni=j.drawRange.start*Oe,ii=j.drawRange.count*Oe,nn=ye!==null?ye.start*Oe:0,Be=ye!==null?ye.count*Oe:1/0,ri=Math.max(ni,nn),tt=Math.min(On,ni+ii,nn+Be)-1,rn=Math.max(0,tt-ri+1);if(rn!==0){if(Q.isMesh)H.wireframe===!0?(k.setLineWidth(H.wireframeLinewidth*Z()),$e.setMode(1)):$e.setMode(4);else if(Q.isLine){let vn=H.linewidth;vn===void 0&&(vn=1),k.setLineWidth(vn*Z()),Q.isLineSegments?$e.setMode(1):Q.isLineLoop?$e.setMode(2):$e.setMode(3)}else Q.isPoints?$e.setMode(0):Q.isSprite&&$e.setMode(4);if(Q.isInstancedMesh)$e.renderInstances(ri,rn,Q.count);else if(j.isInstancedBufferGeometry){const vn=Math.min(j.instanceCount,j._maxInstanceCount);$e.renderInstances(ri,rn,vn)}else $e.render(ri,rn)}},this.compile=function(A,V){p=C.get(A),p.init(),g.push(p),A.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights(f.physicallyCorrectLights),A.traverse(function(j){const H=j.material;if(H)if(Array.isArray(H))for(let Q=0;Q<H.length;Q++){const ye=H[Q];Gr(ye,A,j)}else Gr(H,A,j)}),g.pop(),p=null};let se=null;function Me(A){se&&se(A)}function Ve(){vt.stop()}function Ge(){vt.start()}const vt=new Cl;vt.setAnimationLoop(Me),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(A){se=A,ie.setAnimationLoop(A),A===null?vt.stop():vt.start()},ie.addEventListener("sessionstart",Ve),ie.addEventListener("sessionend",Ge),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(V),V=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(f,A,V,w),p=C.get(A,g.length),p.init(),g.push(p),ee.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),q.setFromProjectionMatrix(ee),I=this.localClippingEnabled,Y=M.init(this.clippingPlanes,I,V),h=zt.get(A,m.length),h.init(),m.push(h),tn(A,V,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(z,N),Y===!0&&M.beginShadows();const j=p.state.shadowsArray;if(X.render(j,A,V),Y===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(h,A),p.setupLights(f.physicallyCorrectLights),V.isArrayCamera){const H=V.cameras;for(let Q=0,ye=H.length;Q<ye;Q++){const Se=H[Q];to(h,A,Se,Se.viewport)}}else to(h,A,V);w!==null&&(_e.updateMultisampleRenderTarget(w),_e.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(f,A,V),J.resetDefaultState(),y=-1,b=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function tn(A,V,j,H){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){H&&$.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);const Se=rt.update(A),Le=A.material;Le.visible&&h.push(A,Se,Le,j,$.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==pe.render.frame&&(A.skeleton.update(),A.skeleton.frame=pe.render.frame),!A.frustumCulled||q.intersectsObject(A))){H&&$.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);const Se=rt.update(A),Le=A.material;if(Array.isArray(Le)){const Ce=Se.groups;for(let He=0,Oe=Ce.length;He<Oe;He++){const Ne=Ce[He],$e=Le[Ne.materialIndex];$e&&$e.visible&&h.push(A,Se,$e,j,$.z,Ne)}}else Le.visible&&h.push(A,Se,Le,j,$.z,null)}}const ye=A.children;for(let Se=0,Le=ye.length;Se<Le;Se++)tn(ye[Se],V,j,H)}function to(A,V,j,H){const Q=A.opaque,ye=A.transmissive,Se=A.transparent;p.setupLightsView(j),ye.length>0&&ec(Q,V,j),H&&k.viewport(S.copy(H)),Q.length>0&&er(Q,V,j),ye.length>0&&er(ye,V,j),Se.length>0&&er(Se,V,j),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function ec(A,V,j){const H=be.isWebGL2;O===null&&(O=new In(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Xi:Qn,minFilter:Rr,samples:H&&s===!0?4:0})),f.getDrawingBufferSize(K),H?O.setSize(K.x,K.y):O.setSize(Os(K.x),Os(K.y));const Q=f.getRenderTarget();f.setRenderTarget(O),f.clear();const ye=f.toneMapping;f.toneMapping=an,er(A,V,j),f.toneMapping=ye,_e.updateMultisampleRenderTarget(O),_e.updateRenderTargetMipmap(O),f.setRenderTarget(Q)}function er(A,V,j){const H=V.isScene===!0?V.overrideMaterial:null;for(let Q=0,ye=A.length;Q<ye;Q++){const Se=A[Q],Le=Se.object,Ce=Se.geometry,He=H===null?Se.material:H,Oe=Se.group;Le.layers.test(j.layers)&&tc(Le,V,j,Ce,He,Oe)}}function tc(A,V,j,H,Q,ye){A.onBeforeRender(f,V,j,H,Q,ye),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(f,V,j,H,A,ye),Q.transparent===!0&&Q.side===Ai?(Q.side=Jt,Q.needsUpdate=!0,f.renderBufferDirect(j,V,H,Q,A,ye),Q.side=ji,Q.needsUpdate=!0,f.renderBufferDirect(j,V,H,Q,A,ye),Q.side=Ai):f.renderBufferDirect(j,V,H,Q,A,ye),A.onAfterRender(f,V,j,H,Q,ye)}function Gr(A,V,j){V.isScene!==!0&&(V=de);const H=ge.get(A),Q=p.state.lights,ye=p.state.shadowsArray,Se=Q.state.version,Le=ke.getParameters(A,Q.state,ye,V,j),Ce=ke.getProgramCacheKey(Le);let He=H.programs;H.environment=A.isMeshStandardMaterial?V.environment:null,H.fog=V.fog,H.envMap=(A.isMeshStandardMaterial?at:it).get(A.envMap||H.environment),He===void 0&&(A.addEventListener("dispose",ve),He=new Map,H.programs=He);let Oe=He.get(Ce);if(Oe!==void 0){if(H.currentProgram===Oe&&H.lightsStateVersion===Se)return no(A,Le),Oe}else Le.uniforms=ke.getUniforms(A),A.onBuild(j,Le,f),A.onBeforeCompile(Le,f),Oe=ke.acquireProgram(Le,Ce),He.set(Ce,Oe),H.uniforms=Le.uniforms;const Ne=H.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=M.uniform),no(A,Le),H.needsLights=rc(A),H.lightsStateVersion=Se,H.needsLights&&(Ne.ambientLightColor.value=Q.state.ambient,Ne.lightProbe.value=Q.state.probe,Ne.directionalLights.value=Q.state.directional,Ne.directionalLightShadows.value=Q.state.directionalShadow,Ne.spotLights.value=Q.state.spot,Ne.spotLightShadows.value=Q.state.spotShadow,Ne.rectAreaLights.value=Q.state.rectArea,Ne.ltc_1.value=Q.state.rectAreaLTC1,Ne.ltc_2.value=Q.state.rectAreaLTC2,Ne.pointLights.value=Q.state.point,Ne.pointLightShadows.value=Q.state.pointShadow,Ne.hemisphereLights.value=Q.state.hemi,Ne.directionalShadowMap.value=Q.state.directionalShadowMap,Ne.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ne.spotShadowMap.value=Q.state.spotShadowMap,Ne.spotShadowMatrix.value=Q.state.spotShadowMatrix,Ne.pointShadowMap.value=Q.state.pointShadowMap,Ne.pointShadowMatrix.value=Q.state.pointShadowMatrix);const $e=Oe.getUniforms(),On=Tr.seqWithValue($e.seq,Ne);return H.currentProgram=Oe,H.uniformsList=On,Oe}function no(A,V){const j=ge.get(A);j.outputEncoding=V.outputEncoding,j.instancing=V.instancing,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function nc(A,V,j,H,Q){V.isScene!==!0&&(V=de),_e.resetTextureUnits();const ye=V.fog,Se=H.isMeshStandardMaterial?V.environment:null,Le=w===null?f.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Rn,Ce=(H.isMeshStandardMaterial?at:it).get(H.envMap||Se),He=H.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Oe=!!H.normalMap&&!!j.attributes.tangent,Ne=!!j.morphAttributes.position,$e=!!j.morphAttributes.normal,On=!!j.morphAttributes.color,ni=H.toneMapped?f.toneMapping:an,ii=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,nn=ii!==void 0?ii.length:0,Be=ge.get(H),ri=p.state.lights;if(Y===!0&&(I===!0||A!==b)){const sn=A===b&&H.id===y;M.setState(H,A,sn)}let tt=!1;H.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ri.state.version||Be.outputEncoding!==Le||Q.isInstancedMesh&&Be.instancing===!1||!Q.isInstancedMesh&&Be.instancing===!0||Q.isSkinnedMesh&&Be.skinning===!1||!Q.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Ce||H.fog===!0&&Be.fog!==ye||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==M.numPlanes||Be.numIntersection!==M.numIntersection)||Be.vertexAlphas!==He||Be.vertexTangents!==Oe||Be.morphTargets!==Ne||Be.morphNormals!==$e||Be.morphColors!==On||Be.toneMapping!==ni||be.isWebGL2===!0&&Be.morphTargetsCount!==nn)&&(tt=!0):(tt=!0,Be.__version=H.version);let rn=Be.currentProgram;tt===!0&&(rn=Gr(H,V,Q));let vn=!1,Ii=!1,Hr=!1;const xt=rn.getUniforms(),Fi=Be.uniforms;if(k.useProgram(rn.program)&&(vn=!0,Ii=!0,Hr=!0),H.id!==y&&(y=H.id,Ii=!0),vn||b!==A){if(xt.setValue(B,"projectionMatrix",A.projectionMatrix),be.logarithmicDepthBuffer&&xt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),b!==A&&(b=A,Ii=!0,Hr=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const sn=xt.map.cameraPosition;sn!==void 0&&sn.setValue(B,$.setFromMatrixPosition(A.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||Q.isSkinnedMesh)&&xt.setValue(B,"viewMatrix",A.matrixWorldInverse)}if(Q.isSkinnedMesh){xt.setOptional(B,Q,"bindMatrix"),xt.setOptional(B,Q,"bindMatrixInverse");const sn=Q.skeleton;sn&&(be.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),xt.setValue(B,"boneTexture",sn.boneTexture,_e),xt.setValue(B,"boneTextureSize",sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Wr=j.morphAttributes;return(Wr.position!==void 0||Wr.normal!==void 0||Wr.color!==void 0&&be.isWebGL2===!0)&&oe.update(Q,j,H,rn),(Ii||Be.receiveShadow!==Q.receiveShadow)&&(Be.receiveShadow=Q.receiveShadow,xt.setValue(B,"receiveShadow",Q.receiveShadow)),Ii&&(xt.setValue(B,"toneMappingExposure",f.toneMappingExposure),Be.needsLights&&ic(Fi,Hr),ye&&H.fog===!0&&Ft.refreshFogUniforms(Fi,ye),Ft.refreshMaterialUniforms(Fi,H,U,D,O),Tr.upload(B,Be.uniformsList,Fi,_e)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Tr.upload(B,Be.uniformsList,Fi,_e),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xt.setValue(B,"center",Q.center),xt.setValue(B,"modelViewMatrix",Q.modelViewMatrix),xt.setValue(B,"normalMatrix",Q.normalMatrix),xt.setValue(B,"modelMatrix",Q.matrixWorld),rn}function ic(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function rc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,V,j){ge.get(A.texture).__webglTexture=V,ge.get(A.depthTexture).__webglTexture=j;const H=ge.get(A);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=j===void 0,H.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,V){const j=ge.get(A);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,j=0){w=A,_=V,x=j;let H=!0;if(A){const Ce=ge.get(A);Ce.__useDefaultFramebuffer!==void 0?(k.bindFramebuffer(36160,null),H=!1):Ce.__webglFramebuffer===void 0?_e.setupRenderTarget(A):Ce.__hasExternalTextures&&_e.rebindTextures(A,ge.get(A.texture).__webglTexture,ge.get(A.depthTexture).__webglTexture)}let Q=null,ye=!1,Se=!1;if(A){const Ce=A.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture)&&(Se=!0);const He=ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Q=He[V],ye=!0):be.isWebGL2&&A.samples>0&&_e.useMultisampledRTT(A)===!1?Q=ge.get(A).__webglMultisampledFramebuffer:Q=He,S.copy(A.viewport),F.copy(A.scissor),v=A.scissorTest}else S.copy(P).multiplyScalar(U).floor(),F.copy(W).multiplyScalar(U).floor(),v=G;if(k.bindFramebuffer(36160,Q)&&be.drawBuffers&&H&&k.drawBuffers(A,Q),k.viewport(S),k.scissor(F),k.setScissorTest(v),ye){const Ce=ge.get(A.texture);B.framebufferTexture2D(36160,36064,34069+V,Ce.__webglTexture,j)}else if(Se){const Ce=ge.get(A.texture),He=V||0;B.framebufferTextureLayer(36160,36064,Ce.__webglTexture,j||0,He)}y=-1},this.readRenderTargetPixels=function(A,V,j,H,Q,ye,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Le=Le[Se]),Le){k.bindFramebuffer(36160,Le);try{const Ce=A.texture,He=Ce.format,Oe=Ce.type;if(He!==on&&E.convert(He)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Oe===Xi&&(Ee.has("EXT_color_buffer_half_float")||be.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Oe!==Qn&&E.convert(Oe)!==B.getParameter(35738)&&!(Oe===jn&&(be.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-H&&j>=0&&j<=A.height-Q&&B.readPixels(V,j,H,Q,E.convert(He),E.convert(Oe),ye)}finally{const Ce=w!==null?ge.get(w).__webglFramebuffer:null;k.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(A,V,j=0){const H=Math.pow(2,-j),Q=Math.floor(V.image.width*H),ye=Math.floor(V.image.height*H);_e.setTexture2D(V,0),B.copyTexSubImage2D(3553,j,0,0,A.x,A.y,Q,ye),k.unbindTexture()},this.copyTextureToTexture=function(A,V,j,H=0){const Q=V.image.width,ye=V.image.height,Se=E.convert(j.format),Le=E.convert(j.type);_e.setTexture2D(j,0),B.pixelStorei(37440,j.flipY),B.pixelStorei(37441,j.premultiplyAlpha),B.pixelStorei(3317,j.unpackAlignment),V.isDataTexture?B.texSubImage2D(3553,H,A.x,A.y,Q,ye,Se,Le,V.image.data):V.isCompressedTexture?B.compressedTexSubImage2D(3553,H,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,Se,V.mipmaps[0].data):B.texSubImage2D(3553,H,A.x,A.y,Se,Le,V.image),H===0&&j.generateMipmaps&&B.generateMipmap(3553),k.unbindTexture()},this.copyTextureToTexture3D=function(A,V,j,H,Q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=A.max.x-A.min.x+1,Se=A.max.y-A.min.y+1,Le=A.max.z-A.min.z+1,Ce=E.convert(H.format),He=E.convert(H.type);let Oe;if(H.isData3DTexture)_e.setTexture3D(H,0),Oe=32879;else if(H.isDataArrayTexture)_e.setTexture2DArray(H,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,H.flipY),B.pixelStorei(37441,H.premultiplyAlpha),B.pixelStorei(3317,H.unpackAlignment);const Ne=B.getParameter(3314),$e=B.getParameter(32878),On=B.getParameter(3316),ni=B.getParameter(3315),ii=B.getParameter(32877),nn=j.isCompressedTexture?j.mipmaps[0]:j.image;B.pixelStorei(3314,nn.width),B.pixelStorei(32878,nn.height),B.pixelStorei(3316,A.min.x),B.pixelStorei(3315,A.min.y),B.pixelStorei(32877,A.min.z),j.isDataTexture||j.isData3DTexture?B.texSubImage3D(Oe,Q,V.x,V.y,V.z,ye,Se,Le,Ce,He,nn.data):j.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Oe,Q,V.x,V.y,V.z,ye,Se,Le,Ce,nn.data)):B.texSubImage3D(Oe,Q,V.x,V.y,V.z,ye,Se,Le,Ce,He,nn),B.pixelStorei(3314,Ne),B.pixelStorei(32878,$e),B.pixelStorei(3316,On),B.pixelStorei(3315,ni),B.pixelStorei(32877,ii),Q===0&&H.generateMipmaps&&B.generateMipmap(Oe),k.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?_e.setTextureCube(A,0):A.isData3DTexture?_e.setTexture3D(A,0):A.isDataArrayTexture?_e.setTexture2DArray(A,0):_e.setTexture2D(A,0),k.unbindTexture()},this.resetState=function(){_=0,x=0,w=null,k.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class im extends Fl{}im.prototype.isWebGL1Renderer=!0;class rm extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class _a extends Kt{constructor(e,t,n,r=1){typeof n=="number"&&(r=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const va=new We,xa=new We,yr=[],Ui=new kt;class wa extends kt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _a(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ui.geometry=this.geometry,Ui.material=this.material,Ui.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,va),xa.multiplyMatrices(n,va),Ui.matrixWorld=xa,Ui.raycast(e,yr);for(let o=0,a=yr.length;o<a;o++){const l=yr[o];l.instanceId=s,l.object=this,t.push(l)}yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _a(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Js extends en{constructor(e=1,t=1,n=1,r=8,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],p=[],m=[];let g=0;const f=[],d=n/2;let _=0;x(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(p,3)),this.setAttribute("uv",new ht(m,2));function x(){const y=new R,b=new R;let S=0;const F=(t-e)/n;for(let v=0;v<=s;v++){const T=[],D=v/s,U=D*(t-e)+e;for(let z=0;z<=r;z++){const N=z/r,P=N*l+a,W=Math.sin(P),G=Math.cos(P);b.x=U*W,b.y=-D*n+d,b.z=U*G,h.push(b.x,b.y,b.z),y.set(W,F,G).normalize(),p.push(y.x,y.y,y.z),m.push(N,1-D),T.push(g++)}f.push(T)}for(let v=0;v<r;v++)for(let T=0;T<s;T++){const D=f[T][v],U=f[T+1][v],z=f[T+1][v+1],N=f[T][v+1];u.push(D,U,N),u.push(U,z,N),S+=6}c.addGroup(_,S,0),_+=S}function w(y){const b=g,S=new we,F=new R;let v=0;const T=y===!0?e:t,D=y===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,d*D,0),p.push(0,D,0),m.push(.5,.5),g++;const U=g;for(let z=0;z<=r;z++){const P=z/r*l+a,W=Math.cos(P),G=Math.sin(P);F.x=T*G,F.y=d*D,F.z=T*W,h.push(F.x,F.y,F.z),p.push(0,D,0),S.x=W*.5+.5,S.y=G*.5*D+.5,m.push(S.x,S.y),g++}for(let z=0;z<r;z++){const N=b+z,P=U+z;y===!0?u.push(P,P+1,N):u.push(P+1,P,N),v+=3}c.addGroup(_,v,y===!0?1:2),_+=v}}static fromJSON(e){return new Js(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Or extends en{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new R,p=new R,m=[],g=[],f=[],d=[];for(let _=0;_<=n;_++){const x=[],w=_/n;let y=0;_==0&&o==0?y=.5/t:_==n&&l==Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){const S=b/t;h.x=-e*Math.cos(r+S*s)*Math.sin(o+w*a),h.y=e*Math.cos(o+w*a),h.z=e*Math.sin(r+S*s)*Math.sin(o+w*a),g.push(h.x,h.y,h.z),p.copy(h).normalize(),f.push(p.x,p.y,p.z),d.push(S+y,1-w),x.push(c++)}u.push(x)}for(let _=0;_<n;_++)for(let x=0;x<t;x++){const w=u[_][x+1],y=u[_][x],b=u[_+1][x],S=u[_+1][x+1];(_!==0||o>0)&&m.push(w,y,S),(_!==n-1||l<Math.PI)&&m.push(y,b,S)}this.setIndex(m),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(d,2))}static fromJSON(e){return new Or(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Us extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=js,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sm extends ti{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=js,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class om extends ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ba={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class am{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const lm=new am;class zl{constructor(e){this.manager=e!==void 0?e:lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class cm extends zl{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ba.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=qi("img");function l(){u(),ba.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ya extends zl{constructor(e){super(e)}load(e,t,n,r){const s=new Wt,o=new cm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ol extends Xe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class um extends Ol{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DefaultUp),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ma=new We,Sa=new R,Ea=new R;class fm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sa),Ea.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ea),t.updateMatrixWorld(),Ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hm extends fm{constructor(){super(new Ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dm extends Ol{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DefaultUp),this.updateMatrix(),this.target=new Xe,this.shadow=new hm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Aa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Aa();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Aa(){return(typeof performance>"u"?Date:performance).now()}class Ul{constructor(e,t,n=0,r=1/0){this.ray=new Ml(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Bs(e,this,n,t),n.sort(Ta),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Bs(e[r],this,n,t);return n.sort(Ta),n}}function Ta(i,e){return i.distance-e.distance}function Bs(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Bs(r[s],e,t,!0)}}class Ca{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Pa=new R,Mr=new R;class pm{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Pa.subVectors(e,this.start),Mr.subVectors(this.end,this.start);const n=Mr.dot(Mr);let s=Mr.dot(Pa)/n;return t&&(s=bt(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hs);const mm=1e6,Ks=200,Bl={minX:0,maxX:0,minY:0,maxY:0,minZ:0,maxZ:0},gm=new sm,_m=new om({color:"black"});new Us({color:"red"});const vm={points:[new R],cylinders:[],mat:gm,width:.5,bounds:Bl},xm={points:[new R],cylinders:[],mat:_m,width:.1,bounds:Bl};function*La(i){let e=0,t=i.n;for(;;){let n=Math.floor(t*i.b/i.d);t=t*i.b%i.d,e+=n,yield e}}function Da(i){let e=[],t=0,n=i.n;for(let r=0;r<Ks;r++){let s=Math.floor(n*i.b/i.d);n=n*i.b%i.d,t+=s,e=[...e,t]}return e}function*wm(i){let e=i.n;for(;;){let t=Math.floor(e*i.b/i.d);e=e*i.b%i.d,yield t}}function bm(i){let e=[],t=i.n;for(let n=0;n<Ks;n++){let r=Math.floor(t*i.b/i.d);t=t*i.b%i.d,e=[...e,r]}return e}const ym=i=>[i.n,i.d,i.b].map(e=>e.toString()).join(","),Mm=i=>{const e=i.split(",");return{n:parseInt(e[0]),d:parseInt(e[1]),b:parseInt(e[2])}},Sm={n:7,d:213,b:4},Em={n:21,d:11,b:9},Am={n:8,d:9,b:10},$s=(i,e,t)=>({initParams:[i,e,t],angles:[{iterator:La({n:i.n,d:i.d,b:i.b}),preview:Da({n:i.n,d:i.d,b:i.b}),base:i.b,usage:[{dimension:"X",angleFn:"cos"},{dimension:"Y",angleFn:"sin"},{dimension:"Z",angleFn:"sin"}]},{iterator:La({n:e.n,d:e.d,b:e.b}),preview:Da({n:e.n,d:e.d,b:e.b}),base:e.b,usage:[{dimension:"X",angleFn:"sin"},{dimension:"Z",angleFn:"sin"}]}],distance:wm({n:t.n,d:t.d,b:t.b}),distance_preview:bm({n:t.n,d:t.d,b:t.b}),sleepTimeMs:10});let Pr=gt($s(Sm,Em,Am)),Tn=gt({running:!1,pathWidth:.5,displayPreview:!0,allowControls:!0});const Tm=()=>{try{const e=location.href.split("#")[1].split(";"),[t,n,r]=e.slice(0,3).map(Mm);Tn.update(s=>(s.pathWidth=parseFloat(e[3]),{...s,displayPreview:!1,allowControls:!1,running:!0})),Pr.set($s(t,n,r))}catch(i){Tn.update(e=>({...e,allowControls:!0,displayPreview:!0})),console.log("Could not parse URL params using defaults",i)}},kl=(i,e,t)=>t==="cos"?Math.cos(2*Math.PI/e*i):Math.sin(2*Math.PI/e*i),Cm=(i,e=!1)=>{const t=i.distance.next().value;let n=t,r=t,s=t;return i.angles.forEach(o=>{const a=o.iterator.next().value;o.usage.forEach(l=>{let c=kl(a,o.base,l.angleFn);l.dimension==="X"?n*=c:l.dimension==="Y"?r*=c:l.dimension==="Z"&&(s*=c)})}),[n,r,s]},Pm=i=>{let e=new R,t=[e];for(let n=0;n<Ks;n++){const r=i.distance_preview[n];let s=r,o=r,a=r;i.angles.forEach(c=>{const u=c.preview[n];c.usage.forEach(h=>{let p=kl(u,c.base,h.angleFn);h.dimension==="X"?s*=p:h.dimension==="Y"?o*=p:h.dimension==="Z"&&(a*=p)})});let l=new R(s,o,a);t=[...t,l.add(e)],e=l}return t},Lm=i=>[new R],Dm=new R(0,1,0),Vl=(i,e)=>{let t=e.clone().sub(i).length(),n=i.clone().sub(e),r=new $t().setFromUnitVectors(Dm,n.normalize()),s=new ei().setFromQuaternion(r);return{position:i.clone().add(e).multiplyScalar(.5),scale:{y:t},rotation:s}},Rm=i=>{let e=[];for(let t=1;t<i.points.length;t++){let n=Vl(i.points[t-1],i.points[t]);e=[...e,n]}return e},Ra=i=>{if(i.points.length==1)return[];let e=Vl(i.points[i.points.length-2],i.points[i.points.length-1]);return[...i.cylinders,e]},Im=(i,e)=>(e.minX=Math.min(i.x,e.minX),e.maxX=Math.max(i.x,e.maxX),e.minY=Math.min(i.y,e.minY),e.maxY=Math.max(i.y,e.maxY),e.minZ=Math.min(i.z,e.minZ),e.maxZ=Math.max(i.z,e.maxZ),e),Ia=i=>{let e=new R;return e.x=(i.minX+i.maxX)/2,e.y=(i.minY+i.maxY)/2,e.z=(i.minZ+i.maxZ)/2,e},Fa={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Nr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const Fm=new Ji(-1,1,1,-1,0,1),eo=new en;eo.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3));eo.setAttribute("uv",new ht([0,2,0,0,2,0],2));class zm{constructor(e){this._mesh=new kt(eo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class za extends Nr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof _n?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qs.clone(e.uniforms),this.material=new _n({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new zm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Oa extends Nr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Om extends Nr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Nm{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new we);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new In(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Fa===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),za===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new za(Fa),this.clock=new Nl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Oa!==void 0&&(o instanceof Oa?n=!0:o instanceof Om&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new Ji(-1,1,1,-1,0,1);const Gl=new en;Gl.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3));Gl.setAttribute("uv",new ht([0,2,0,0,2,0],2));class Hl extends Nr{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const Um=(i,e,t)=>{i.renderer=new Fl({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),i.composer=new Nm(i.renderer),i.composer.addPass(new Hl(i.scene,Pn(i.camera)))},Na=(i,e,t)=>{!i.renderer||(e?i.renderer.outputEncoding=Rn:i.renderer.outputEncoding=Ye,t?i.renderer.toneMapping=an:i.renderer.toneMapping=ml)},Ua=(i,e,t)=>{!i.renderer||!i.composer||(i.renderer.setSize(e.width,e.height),i.renderer.setPixelRatio(t),i.composer.setSize(e.width,e.height),i.composer.setPixelRatio(t))},Ba=(i,e,t)=>{!i.renderer||(i.renderer.shadowMap.enabled=e,i.renderer.shadowMap.type=t)},Vt=i=>i.userData,Bm=(i,e)=>{i.pointer.update(t=>i.renderer?t.set(e.offsetX/i.renderer.domElement.clientWidth*2-1,-(e.offsetY/i.renderer.domElement.clientHeight)*2+1):t)},Wl=(i,e,t,n)=>(i.raycaster.setFromCamera(e,t),i.raycaster.intersectObjects(n,!1)),km=(i,e)=>i.object.uuid!==e.object.uuid||i.instanceId!==e.instanceId,Vm=(i,e,t)=>{let n=Pn(i.camera);const r=i.camera.subscribe(c=>n=c);ct(r);let s=Pn(i.pointer);const o=i.pointer.subscribe(c=>s=c);ct(o);let a;const l=c=>{var p,m;c.preventDefault();const u=c.type;i.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,Bm(i,c);const h=Gm(e,s,n);if(u==="pointerdown"&&(a=h?{object:h.object,instanceId:h.instanceId}:null),u==="click"){if(!Hm(h,a)){a=null;return}a=null}!h||(m=(p=Vt(h.object)).eventDispatcher)==null||m.call(p,u,{...h,event:c})};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function Gm(i,e,t){if(i.interactiveObjects.size===0||i.raycastableObjects.size===0)return null;const n=Wl(i,e,t,Array.from(i.raycastableObjects));return n.length===0||!i.interactiveObjects.has(n[0].object)?null:n[0]}function Hm(i,e){return!i||!e?!1:i.object.uuid===e.object.uuid&&i.instanceId===e.instanceId}const Wm=(i,e)=>{let t=Pn(i.pointerOverCanvas);const n=i.pointerOverCanvas.subscribe(c=>t=c);ct(n);let r=Pn(i.camera);const s=i.camera.subscribe(c=>r=c);ct(s);let o=Pn(i.pointer);const a=i.pointer.subscribe(c=>o=c);return ct(a),{raycast:()=>{var h,p,m,g,f,d,_,x;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?Wl(e,o,r,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&km(e.lastIntersection,u)&&((d=(f=Vt(e.lastIntersection.object)).eventDispatcher)==null||d.call(f,"pointerleave",e.lastIntersection),(x=(_=Vt(u.object)).eventDispatcher)==null||x.call(_,"pointerenter",u)):(g=(m=Vt(u.object)).eventDispatcher)==null||g.call(m,"pointerenter",u):e.lastIntersection&&((p=(h=Vt(e.lastIntersection.object)).eventDispatcher)==null||p.call(h,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},Ur=typeof window<"u",jm=i=>{if(!Ur)return;let e;const t=()=>{i(),e=requestAnimationFrame(t)};t(),ct(()=>{!e||cancelAnimationFrame(e)})},Xm=(i,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let r=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++r}),r>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((r,s)=>s.order?!0:r,!1),n=i.clock.getDelta();t?Array.from(e.frameHandlers).sort((r,s)=>{var o,a;return((o=r.order)!=null?o:0)>((a=s.order)!=null?a:0)?1:-1}).forEach(r=>r.fn(i,n)):e.frameHandlers.forEach(r=>r.fn(i,n))},qm=i=>{!i.debugFrameloop||(i.frame+=1,console.log(`frame: ${i.frame}${Object.keys(i.invalidations).length>0?", requested by \u21B4":""}`),Object.keys(i.invalidations).length>0&&console.table(i.invalidations),i.invalidations={})},Ym=(i,e,t)=>{let n=Pn(i.camera);const r=i.camera.subscribe(o=>n=o);ct(r);const{raycast:s}=Wm(i,e);jm(()=>{const o=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(o||t.pointerInvalidated)&&(s(),t.pointerInvalidated=!1),o&&(!n||!i.composer||!i.renderer||(Xm(i,t),i.composer.passes.length>1?i.composer.render():i.renderer.render(i.scene,n),qm(t),t.frameInvalidated=!1,t.advance=!1))})},Zm=()=>{const i=new Ut(75,0,.1,1e3);return Vt(i).threlteDefaultCamera=!0,i.position.z=5,i.lookAt(0,0,0),i},Qm=i=>{const e=i.size.subscribe(t=>{Vt(Pn(i.camera)).threlteDefaultCamera&&i.camera.update(n=>{const r=n;return r.aspect=t.width/t.height,r.updateProjectionMatrix(),i.invalidate("Default camera: aspect ratio changed"),r})});ct(e)},Jm=(i,e,t,n,r,s,o)=>{const a={audioListeners:new Map,addAudioListener:(f,d)=>{if(d=d!=null?d:"default",a.audioListeners.has(d)){console.warn(`An AudioListener with the id "${d}" has already been added, aborting.`);return}a.audioListeners.set(d,f)},removeAudioListener:f=>{if(f=f!=null?f:"default",!a.audioListeners.has(f)){console.warn(`No AudioListener with the id "${f}" found, aborting.`);return}a.audioListeners.delete(f)},getAudioListener:f=>{if(f=f!=null?f:"default",!a.audioListeners.has(f)){console.warn(`No AudioListener with the id "${f}" found, aborting.`);return}return a.audioListeners.get(f)}},l={debugFrameloop:s,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:dc([n,r],([f,d])=>f||d),pointer:gt(new we),pointerOverCanvas:gt(!1),clock:new Nl,camera:gt(Zm()),scene:new rm,renderer:void 0,composer:void 0,invalidate:f=>{l.frameInvalidated=!0,l.debugFrameloop&&f&&(l.invalidations[f]=l.invalidations[f]?l.invalidations[f]+1:1)},advance:()=>{l.advance=!0}},u={flat:gt(e),linear:gt(i),dpr:gt(t),setCamera:f=>{c.camera.set(f),c.composer&&(c.composer.passes.forEach(d=>{d instanceof Hl&&(d.camera=f)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Ul,lastIntersection:null,addRaycastableObject:f=>{u.raycastableObjects.add(f)},removeRaycastableObject:f=>{u.raycastableObjects.delete(f)},addInteractiveObject:f=>{u.interactiveObjects.add(f)},removeInteractiveObject:f=>{u.interactiveObjects.delete(f)},addPass:f=>{!c.composer||(c.composer.addPass(f),c.invalidate("Canvas: adding pass"))},removePass:f=>{!c.composer||(c.composer.removePass(f),c.invalidate("Canvas: removing pass"))}};return gn("threlte",c),gn("threlte-root",u),gn("threlte-render-context",l),gn("threlte-audio-context",a),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:a,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>a}};function Br(i){const e=gt(i);let t=i;const n=e.subscribe(s=>t=s);return ct(n),{...e,set:s=>{if(!s||!t)return e.set(s);s.uuid!==t.uuid&&e.set(s)}}}const It=()=>Dn("threlte");function Km(i){let e;const t=i[8].default,n=At(t,i,i[7],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&128)&&Ct(n,t,r,r[7],e?Tt(t,r[7],s,null):Pt(r[7]),null)},i(r){e||(ce(n,r),e=!0)},o(r){he(n,r),e=!1},d(r){n&&n.d(r)}}}const $m=()=>({onChildMount:Dn("threlte-hierarchical-object-on-mount"),onChildDestroy:Dn("threlte-hierarchical-object-on-destroy")}),jl=()=>Dn("threlte-hierarchical-parent-context");function eg(i,e,t){var _;let n,{$$slots:r={},$$scope:s}=e,{object:o=void 0}=e;const a=Br(o);let{children:l=[]}=e,{onChildMount:c=void 0}=e;const u=x=>{l.push(x),t(1,l),c==null||c(x)};let{onChildDestroy:h=void 0}=e;const p=x=>{const w=l.findIndex(y=>y.uuid===x.uuid);w!==-1&&l.splice(w,1),t(1,l),h==null||h(x)},{invalidate:m}=It(),g=jl();et(i,g,x=>t(6,n=x));let{parent:f=n}=e;const d=$m();return m("HierarchicalObject: object added"),o&&((_=d.onChildMount)==null||_.call(d,o)),ct(()=>{var x;o&&((x=d.onChildDestroy)==null||x.call(d,o)),m("HierarchicalObject: object removed")}),gn("threlte-hierarchical-object-on-mount",u),gn("threlte-hierarchical-object-on-destroy",p),gn("threlte-hierarchical-parent-context",a),i.$$set=x=>{"object"in x&&t(3,o=x.object),"children"in x&&t(1,l=x.children),"onChildMount"in x&&t(4,c=x.onChildMount),"onChildDestroy"in x&&t(5,h=x.onChildDestroy),"parent"in x&&t(2,f=x.parent),"$$scope"in x&&t(7,s=x.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&a.set(o),i.$$.dirty&64&&t(2,f=n)},[g,l,f,o,c,h,n,s,r]}class tg extends Je{constructor(e){super(),Qe(this,e,eg,Km,qe,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function ng(i){let e;const t=i[1].default,n=At(t,i,i[4],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&16)&&Ct(n,t,r,r[4],e?Tt(t,r[4],s,null):Pt(r[4]),null)},i(r){e||(ce(n,r),e=!0)},o(r){he(n,r),e=!1},d(r){n&&n.d(r)}}}function ig(i){let e,t;return e=new tg({props:{object:i[0],onChildMount:i[2],onChildDestroy:i[3],$$slots:{default:[ng]},$$scope:{ctx:i}}}),{c(){Pe(e.$$.fragment)},m(n,r){Ae(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.object=n[0]),r&1&&(s.onChildMount=n[2]),r&1&&(s.onChildDestroy=n[3]),r&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ce(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function rg(i,e,t){let{$$slots:n={},$$scope:r}=e,{object:s}=e;const o=l=>s.add(l),a=l=>s.remove(l);return i.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,r=l.$$scope)},[s,n,o,a,r]}class kr extends Je{constructor(e){super(),Qe(this,e,rg,ig,qe,{object:0})}}const sg=()=>{const i=gt({width:0,height:0});let e={width:0,height:0};const t=i.subscribe(o=>e=o);ct(t);let n;const r=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:l}=n.parentElement;(a!==o.width||l!==o.height)&&i.set({width:a,height:l})},s=o=>{n=o,r(),window.addEventListener("resize",r)};return Ur?(ct(()=>{window.removeEventListener("resize",r)}),{parentSizeAction:s,parentSize:i}):{parentSize:i,parentSizeAction:s}};function ka(i){let e,t;return e=new kr({props:{object:i[0].scene,$$slots:{default:[og]},$$scope:{ctx:i}}}),{c(){Pe(e.$$.fragment)},m(n,r){Ae(e,n,r),t=!0},p(n,r){const s={};r[1]&4&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ce(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function og(i){let e;const t=i[29].default,n=At(t,i,i[33],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s[1]&4)&&Ct(n,t,r,r[33],e?Tt(t,r[33],s,null):Pt(r[33]),null)},i(r){e||(ce(n,r),e=!0)},o(r){he(n,r),e=!1},d(r){n&&n.d(r)}}}function ag(i){let e,t,n,r,s=i[2]&&ka(i);return{c(){e=ft("canvas"),s&&s.c(),Ue(e,"class","svelte-o3oskp")},m(o,a){ze(o,e,a),s&&s.m(e,null),i[30](e),t=!0,n||(r=[lc(i[3].call(null,e)),ot(e,"click",i[9]),ot(e,"contextmenu",i[10]),ot(e,"pointerup",i[13]),ot(e,"pointerdown",i[11]),ot(e,"pointermove",i[12]),ot(e,"pointerenter",i[31]),ot(e,"pointerleave",i[32])],n=!0)},p(o,a){o[2]?s?(s.p(o,a),a[0]&4&&ce(s,1)):(s=ka(o),s.c(),ce(s,1),s.m(e,null)):s&&(Fn(),he(s,1,1,()=>{s=null}),zn())},i(o){t||(ce(s),t=!0)},o(o){he(s),t=!1},d(o){o&&Ie(e),s&&s.d(),i[30](null),n=!1,ln(r)}}}const Va=new Set;function lg(i,e,t){let n,r,s,o,{$$slots:a={},$$scope:l}=e,{dpr:c=Ur?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:h=!1}=e,{frameloop:p="demand"}=e,{debugFrameloop:m=!1}=e,{shadows:g=!0}=e,{shadowMapType:f=hl}=e,{size:d=void 0}=e,{rendererParameters:_=void 0}=e,x,w=!1;const y=gt(d),{parentSize:b,parentSizeAction:S}=sg(),F=Jm(h,u,c,y,b,m,p),{getCtx:v,renderCtx:T}=F,{ctx:D,rootCtx:U,audioCtx:z}=F;Qm(D),Va.add(D.invalidate),ct(()=>{Va.delete(D.invalidate)});const{size:N,scene:P}=D;et(i,N,B=>t(26,r=B));const{flat:W,linear:G,dpr:q}=U;et(i,W,B=>t(27,s=B)),et(i,G,B=>t(28,o=B)),et(i,q,B=>t(25,n=B)),gn("threlte-parent",gt(P)),Gs(()=>{!x||(Um(D,x,_),Na(D,o,s),Ua(D,r,n),Ba(D,g,f),t(2,w=!0))}),Ym(D,U,T);const{onClick:Y,onContextMenu:I,onPointerDown:O,onPointerMove:ee,onPointerUp:K}=Vm(D,U,T);function $(B){yt[B?"unshift":"push"](()=>{x=B,t(1,x)})}const de=()=>v().pointerOverCanvas.set(!0),Z=()=>v().pointerOverCanvas.set(!1);return i.$$set=B=>{"dpr"in B&&t(14,c=B.dpr),"flat"in B&&t(15,u=B.flat),"linear"in B&&t(16,h=B.linear),"frameloop"in B&&t(17,p=B.frameloop),"debugFrameloop"in B&&t(18,m=B.debugFrameloop),"shadows"in B&&t(19,g=B.shadows),"shadowMapType"in B&&t(20,f=B.shadowMapType),"size"in B&&t(21,d=B.size),"rendererParameters"in B&&t(22,_=B.rendererParameters),"$$scope"in B&&t(33,l=B.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&2097152&&y.set(d),i.$$.dirty[0]&65536&&wt(G,o=h,o),i.$$.dirty[0]&32768&&wt(W,s=u,s),i.$$.dirty[0]&16384&&wt(q,n=c,n),i.$$.dirty[0]&402653184&&Na(v(),o,s),i.$$.dirty[0]&100663296&&Ua(v(),r,n),i.$$.dirty[0]&1572864&&Ba(v(),g,f)},[D,x,w,S,v,N,W,G,q,Y,I,O,ee,K,c,u,h,p,m,g,f,d,_,U,z,n,r,s,o,a,$,de,Z,l]}class cg extends Je{constructor(e){super(),Qe(this,e,lg,ag,qe,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Ki=()=>Dn("threlte-root");function ug(i,e,t){let n,r,{object:s}=e;const o=Br(s);et(i,o,c=>t(4,r=c));const a=Dn("threlte-layers");et(i,a,c=>t(3,n=c));const{invalidate:l}=It();return i.$$set=c=>{"object"in c&&t(2,s=c.object)},i.$$.update=()=>{if(i.$$.dirty&4&&o.set(s),i.$$.dirty&24){if(n==="all")r.layers.enableAll();else if(n==="none")r.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const u=c;n.includes(u)?r.layers.enable(c):r.layers.disable(c)}else n!==void 0&&r.layers.set(n);l("LayerableObject")}},[o,a,s,n,r]}class fg extends Je{constructor(e){super(),Qe(this,e,ug,null,qe,{object:2})}}const Ri=(i,e)=>{var a;if(!Ur)return{start:()=>{},stop:()=>{},started:ul(!1)};const t=Dn("threlte-render-context"),n={fn:i,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},r=gt(!1),s=()=>{t.frameHandlers.delete(n),r.set(!1)},o=()=>{t.frameHandlers.add(n),r.set(!0)};return((a=e==null?void 0:e.autostart)==null||a)&&o(),ct(()=>{s()}),{start:o,stop:s,started:{subscribe:r.subscribe}}},Xl=()=>{const i=gt(!1);return(async()=>{await Cr(),i.set(!0)})(),i};function hg(i,e,t){let n,r,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new R,h=Jn(),{invalidate:p}=It(),m=Xl();et(i,m,w=>t(8,r=w));const g=async()=>{r||await Cr(),h("transform")},f=async()=>{p("TransformableObject: transformed"),await g()};Vt(s).onTransform=f;const{start:d,stop:_}=Ri(async()=>{c&&!l&&c instanceof Xe&&(c.getWorldPosition(u),s.lookAt(u),await g())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),x=Br(s);return et(i,x,w=>t(7,n=w)),i.$$set=w=>{"object"in w&&t(2,s=w.object),"position"in w&&t(3,o=w.position),"scale"in w&&t(4,a=w.scale),"rotation"in w&&t(5,l=w.rotation),"lookAt"in w&&t(6,c=w.lookAt)},i.$$.update=()=>{var w,y,b,S,F,v,T,D,U,z,N,P,W;i.$$.dirty&4&&x.set(s),i.$$.dirty&232&&(o&&(n.position.set((w=o.x)!=null?w:0,(y=o.y)!=null?y:0,(b=o.z)!=null?b:0),f()),c&&!l&&(c instanceof Xe?d():(_(),n.lookAt((S=c.x)!=null?S:0,(F=c.y)!=null?F:0,(v=c.z)!=null?v:0),f())),c||_()),i.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set((T=a.x)!=null?T:1,(D=a.y)!=null?D:1,(U=a.z)!=null?U:1),f()),i.$$.dirty&160&&l&&(n.rotation.set((z=l.x)!=null?z:0,(N=l.y)!=null?N:0,(P=l.z)!=null?P:0,(W=l.order)!=null?W:"XYZ"),f())},[m,x,s,o,a,l,c,n]}class Vr extends Je{constructor(e){super(),Qe(this,e,hg,null,qe,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function dg(i,e,t){let n,r,s,{object:o}=e,{viewportAware:a=!1}=e;const l=Jn(),{camera:c,invalidate:u}=It();et(i,c,S=>t(8,s=S));const h=new Fr,p=new We,m=S=>S.type==="Mesh",g=new R,f=()=>s?(p.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),h.setFromProjectionMatrix(p),m(o)?h.intersectsObject(o):(o.getWorldPosition(g),h.containsPoint(g))):!0,d=Xl();et(i,d,S=>t(7,r=S));let{inViewport:_=f()}=e;const x=async S=>{S?(r||await Cr(),l("viewportenter",o)):(r||await Cr(),l("viewportleave",o))},{start:w,stop:y,started:b}=Ri(()=>{const S=f();_===void 0?(t(3,_=f()),x(_)):S!==_&&(x(S),t(3,_=S))},{autostart:a,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return et(i,b,S=>t(6,n=S)),u("ViewportAwareObject"),i.$$set=S=>{"object"in S&&t(4,o=S.object),"viewportAware"in S&&t(5,a=S.viewportAware),"inViewport"in S&&t(3,_=S.inViewport)},i.$$.update=()=>{i.$$.dirty&96&&(a&&!n?w():!a&&n&&y())},[c,d,b,_,o,a,n]}class pg extends Je{constructor(e){super(),Qe(this,e,dg,null,qe,{object:4,viewportAware:5,inViewport:3})}}function mg(i){let e;const t=i[12].default,n=At(t,i,i[16],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&65536)&&Ct(n,t,r,r[16],e?Tt(t,r[16],s,null):Pt(r[16]),null)},i(r){e||(ce(n,r),e=!0)},o(r){he(n,r),e=!1},d(r){n&&n.d(r)}}}function gg(i){let e,t,n,r,s,o,a,l,c;e=new fg({props:{object:i[1]}}),n=new Vr({props:{object:i[1],position:i[2],rotation:i[4],scale:i[3],lookAt:i[5]}}),s=new kr({props:{object:i[1],$$slots:{default:[mg]},$$scope:{ctx:i}}});function u(p){i[13](p)}let h={object:i[1],viewportAware:i[6]};return i[0]!==void 0&&(h.inViewport=i[0]),a=new pg({props:h}),yt.push(()=>Ht(a,"inViewport",u)),a.$on("viewportenter",i[14]),a.$on("viewportleave",i[15]),{c(){Pe(e.$$.fragment),t=je(),Pe(n.$$.fragment),r=je(),Pe(s.$$.fragment),o=je(),Pe(a.$$.fragment)},m(p,m){Ae(e,p,m),ze(p,t,m),Ae(n,p,m),ze(p,r,m),Ae(s,p,m),ze(p,o,m),Ae(a,p,m),c=!0},p(p,[m]){const g={};m&2&&(g.object=p[1]),e.$set(g);const f={};m&2&&(f.object=p[1]),m&4&&(f.position=p[2]),m&16&&(f.rotation=p[4]),m&8&&(f.scale=p[3]),m&32&&(f.lookAt=p[5]),n.$set(f);const d={};m&2&&(d.object=p[1]),m&65536&&(d.$$scope={dirty:m,ctx:p}),s.$set(d);const _={};m&2&&(_.object=p[1]),m&64&&(_.viewportAware=p[6]),!l&&m&1&&(l=!0,_.inViewport=p[0],Gt(()=>l=!1)),a.$set(_)},i(p){c||(ce(e.$$.fragment,p),ce(n.$$.fragment,p),ce(s.$$.fragment,p),ce(a.$$.fragment,p),c=!0)},o(p){he(e.$$.fragment,p),he(n.$$.fragment,p),he(s.$$.fragment,p),he(a.$$.fragment,p),c=!1},d(p){Te(e,p),p&&Ie(t),Te(n,p),p&&Ie(r),Te(s,p),p&&Ie(o),Te(a,p)}}}function _g(i,e,t){let{$$slots:n={},$$scope:r}=e,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:h=!1}=e,{castShadow:p=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:f=void 0}=e,{visible:d=void 0}=e;const{invalidate:_}=It(),x=()=>s;function w(S){h=S,t(0,h)}function y(S){Fe.call(this,i,S)}function b(S){Fe.call(this,i,S)}return i.$$set=S=>{"object"in S&&t(1,s=S.object),"position"in S&&t(2,o=S.position),"scale"in S&&t(3,a=S.scale),"rotation"in S&&t(4,l=S.rotation),"lookAt"in S&&t(5,c=S.lookAt),"viewportAware"in S&&t(6,u=S.viewportAware),"inViewport"in S&&t(0,h=S.inViewport),"castShadow"in S&&t(7,p=S.castShadow),"receiveShadow"in S&&t(8,m=S.receiveShadow),"frustumCulled"in S&&t(9,g=S.frustumCulled),"renderOrder"in S&&t(10,f=S.renderOrder),"visible"in S&&t(11,d=S.visible),"$$scope"in S&&t(16,r=S.$$scope)},i.$$.update=()=>{i.$$.dirty&3968&&(d!==void 0&&(x().visible=d),p!==void 0&&(x().castShadow=p),m!==void 0&&(x().receiveShadow=m),g!==void 0&&(x().frustumCulled=g),f!==void 0&&(x().renderOrder=f),_("Object3DInstance: props changed"))},[h,s,o,a,l,c,u,p,m,g,f,d,n,w,y,b,r]}class $i extends Je{constructor(e){super(),Qe(this,e,_g,gg,qe,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11})}}function vg(i){let e;const t=i[15].default,n=At(t,i,i[19],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&524288)&&Ct(n,t,r,r[19],e?Tt(t,r[19],s,null):Pt(r[19]),null)},i(r){e||(ce(n,r),e=!0)},o(r){he(n,r),e=!1},d(r){n&&n.d(r)}}}function xg(i){let e,t,n;function r(o){i[16](o)}let s={object:i[1],lookAt:i[5],castShadow:i[7],receiveShadow:i[8],frustumCulled:i[9],renderOrder:i[10],position:i[2],scale:i[3],rotation:i[4],viewportAware:i[6],visible:i[11],$$slots:{default:[vg]},$$scope:{ctx:i}};return i[0]!==void 0&&(s.inViewport=i[0]),e=new $i({props:s}),yt.push(()=>Ht(e,"inViewport",r)),e.$on("viewportenter",i[17]),e.$on("viewportleave",i[18]),{c(){Pe(e.$$.fragment)},m(o,a){Ae(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.object=o[1]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&524288&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],Gt(()=>t=!1)),e.$set(l)},i(o){n||(ce(e.$$.fragment,o),n=!0)},o(o){he(e.$$.fragment,o),n=!1},d(o){Te(e,o)}}}function wg(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{camera:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:h=!1}=e,{inViewport:p=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:g=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:d=void 0}=e,{visible:_=void 0}=e,{useCamera:x=!1}=e;const w=Br(o);et(i,w,v=>t(14,n=v));const{setCamera:y}=Ki();function b(v){p=v,t(0,p)}function S(v){Fe.call(this,i,v)}function F(v){Fe.call(this,i,v)}return i.$$set=v=>{"camera"in v&&t(1,o=v.camera),"position"in v&&t(2,a=v.position),"scale"in v&&t(3,l=v.scale),"rotation"in v&&t(4,c=v.rotation),"lookAt"in v&&t(5,u=v.lookAt),"viewportAware"in v&&t(6,h=v.viewportAware),"inViewport"in v&&t(0,p=v.inViewport),"castShadow"in v&&t(7,m=v.castShadow),"receiveShadow"in v&&t(8,g=v.receiveShadow),"frustumCulled"in v&&t(9,f=v.frustumCulled),"renderOrder"in v&&t(10,d=v.renderOrder),"visible"in v&&t(11,_=v.visible),"useCamera"in v&&t(13,x=v.useCamera),"$$scope"in v&&t(19,s=v.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&w.set(o),i.$$.dirty&24576&&x&&y(n)},[p,o,a,l,c,u,h,m,g,f,d,_,w,x,n,r,b,S,F,s]}class bg extends Je{constructor(e){super(),Qe(this,e,wg,xg,qe,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,useCamera:13})}}function yg(i){let e;const t=i[18].default,n=At(t,i,i[22],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&4194304)&&Ct(n,t,r,r[22],e?Tt(t,r[22],s,null):Pt(r[22]),null)},i(r){e||(ce(n,r),e=!0)},o(r){he(n,r),e=!1},d(r){n&&n.d(r)}}}function Mg(i){let e,t,n;function r(o){i[19](o)}let s={camera:i[0],position:i[2],scale:i[3],rotation:i[4],castShadow:i[7],receiveShadow:i[8],frustumCulled:i[9],renderOrder:i[10],visible:i[11],viewportAware:i[6],lookAt:i[5],useCamera:i[12],$$slots:{default:[yg]},$$scope:{ctx:i}};return i[1]!==void 0&&(s.inViewport=i[1]),e=new bg({props:s}),yt.push(()=>Ht(e,"inViewport",r)),e.$on("viewportenter",i[20]),e.$on("viewportleave",i[21]),{c(){Pe(e.$$.fragment)},m(o,a){Ae(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.camera=o[0]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&2048&&(l.visible=o[11]),a&64&&(l.viewportAware=o[6]),a&32&&(l.lookAt=o[5]),a&4096&&(l.useCamera=o[12]),a&4194304&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],Gt(()=>t=!1)),e.$set(l)},i(o){n||(ce(e.$$.fragment,o),n=!0)},o(o){he(e.$$.fragment,o),n=!1},d(o){Te(e,o)}}}function Sg(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:h=!1}=e,{castShadow:p=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:f=void 0}=e,{visible:d=void 0}=e,{useCamera:_=!0}=e,{near:x=void 0}=e,{far:w=void 0}=e,{zoom:y=void 0}=e;const{size:b,invalidate:S}=It();et(i,b,z=>t(17,n=z));const{setCamera:F}=Ki(),v=new Ji(n.width/-2,n.width/2,n.height/2,n.height/-2,x,w);function T(z){h=z,t(1,h)}function D(z){Fe.call(this,i,z)}function U(z){Fe.call(this,i,z)}return i.$$set=z=>{"position"in z&&t(2,o=z.position),"scale"in z&&t(3,a=z.scale),"rotation"in z&&t(4,l=z.rotation),"lookAt"in z&&t(5,c=z.lookAt),"viewportAware"in z&&t(6,u=z.viewportAware),"inViewport"in z&&t(1,h=z.inViewport),"castShadow"in z&&t(7,p=z.castShadow),"receiveShadow"in z&&t(8,m=z.receiveShadow),"frustumCulled"in z&&t(9,g=z.frustumCulled),"renderOrder"in z&&t(10,f=z.renderOrder),"visible"in z&&t(11,d=z.visible),"useCamera"in z&&t(12,_=z.useCamera),"near"in z&&t(14,x=z.near),"far"in z&&t(15,w=z.far),"zoom"in z&&t(16,y=z.zoom),"$$scope"in z&&t(22,s=z.$$scope)},i.$$.update=()=>{i.$$.dirty&131073&&(t(0,v.left=n.width/-2,v),t(0,v.right=n.width/2,v),t(0,v.top=n.height/2,v),t(0,v.bottom=n.height/-2,v),v.updateProjectionMatrix(),S("OrthographicCamera: onResize")),i.$$.dirty&114689&&(x!==void 0&&t(0,v.near=x,v),w!==void 0&&t(0,v.far=w,v),y!==void 0&&t(0,v.zoom=y,v),v.updateProjectionMatrix(),S("OrthographicCamera: props changed")),i.$$.dirty&4097&&_&&F(v)},[v,h,o,a,l,c,u,p,m,g,f,d,_,b,x,w,y,n,r,T,D,U,s]}class Eg extends Je{constructor(e){super(),Qe(this,e,Sg,Mg,qe,{position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:1,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,useCamera:12,near:14,far:15,zoom:16,camera:0})}get camera(){return this.$$.ctx[0]}}const Ga=[],Ag=(i,e)=>{const t=Ga.find(r=>r instanceof i);if(t)return t;const n=e();return Ga.push(n),n};const Ha={type:"change"},Es={type:"start"},Wa={type:"end"};class Tg extends Kn{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oi.ROTATE,MIDDLE:oi.DOLLY,RIGHT:oi.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",zt),this._domElementKeyEvents=E},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ha),n.update(),s=r.NONE},this.update=function(){const E=new R,J=new $t().setFromUnitVectors(e.up,new R(0,1,0)),ae=J.clone().invert(),ie=new R,L=new $t,re=2*Math.PI;return function(){const ve=n.object.position;E.copy(ve).sub(n.target),E.applyQuaternion(J),a.setFromVector3(E),n.autoRotate&&s===r.NONE&&T(F()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ue=n.minAzimuthAngle,me=n.maxAzimuthAngle;return isFinite(ue)&&isFinite(me)&&(ue<-Math.PI?ue+=re:ue>Math.PI&&(ue-=re),me<-Math.PI?me+=re:me>Math.PI&&(me-=re),ue<=me?a.theta=Math.max(ue,Math.min(me,a.theta)):a.theta=a.theta>(ue+me)/2?Math.max(ue,a.theta):Math.min(me,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),E.setFromSpherical(a),E.applyQuaternion(ae),ve.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ie.distanceToSquared(n.object.position)>o||8*(1-L.dot(n.object.quaternion))>o?(n.dispatchEvent(Ha),ie.copy(n.object.position),L.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",X),n.domElement.removeEventListener("pointerdown",it),n.domElement.removeEventListener("pointercancel",Lt),n.domElement.removeEventListener("wheel",Ft),n.domElement.removeEventListener("pointermove",at),n.domElement.removeEventListener("pointerup",ut),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",zt)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Ca,l=new Ca;let c=1;const u=new R;let h=!1;const p=new we,m=new we,g=new we,f=new we,d=new we,_=new we,x=new we,w=new we,y=new we,b=[],S={};function F(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function T(E){l.theta-=E}function D(E){l.phi-=E}const U=function(){const E=new R;return function(ae,ie){E.setFromMatrixColumn(ie,0),E.multiplyScalar(-ae),u.add(E)}}(),z=function(){const E=new R;return function(ae,ie){n.screenSpacePanning===!0?E.setFromMatrixColumn(ie,1):(E.setFromMatrixColumn(ie,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(ae),u.add(E)}}(),N=function(){const E=new R;return function(ae,ie){const L=n.domElement;if(n.object.isPerspectiveCamera){const re=n.object.position;E.copy(re).sub(n.target);let ne=E.length();ne*=Math.tan(n.object.fov/2*Math.PI/180),U(2*ae*ne/L.clientHeight,n.object.matrix),z(2*ie*ne/L.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(ae*(n.object.right-n.object.left)/n.object.zoom/L.clientWidth,n.object.matrix),z(ie*(n.object.top-n.object.bottom)/n.object.zoom/L.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(E){n.object.isPerspectiveCamera?c/=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*E)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(E){n.object.isPerspectiveCamera?c*=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/E)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(E){p.set(E.clientX,E.clientY)}function q(E){x.set(E.clientX,E.clientY)}function Y(E){f.set(E.clientX,E.clientY)}function I(E){m.set(E.clientX,E.clientY),g.subVectors(m,p).multiplyScalar(n.rotateSpeed);const J=n.domElement;T(2*Math.PI*g.x/J.clientHeight),D(2*Math.PI*g.y/J.clientHeight),p.copy(m),n.update()}function O(E){w.set(E.clientX,E.clientY),y.subVectors(w,x),y.y>0?P(v()):y.y<0&&W(v()),x.copy(w),n.update()}function ee(E){d.set(E.clientX,E.clientY),_.subVectors(d,f).multiplyScalar(n.panSpeed),N(_.x,_.y),f.copy(d),n.update()}function K(E){E.deltaY<0?W(v()):E.deltaY>0&&P(v()),n.update()}function $(E){let J=!1;switch(E.code){case n.keys.UP:N(0,n.keyPanSpeed),J=!0;break;case n.keys.BOTTOM:N(0,-n.keyPanSpeed),J=!0;break;case n.keys.LEFT:N(n.keyPanSpeed,0),J=!0;break;case n.keys.RIGHT:N(-n.keyPanSpeed,0),J=!0;break}J&&(E.preventDefault(),n.update())}function de(){if(b.length===1)p.set(b[0].pageX,b[0].pageY);else{const E=.5*(b[0].pageX+b[1].pageX),J=.5*(b[0].pageY+b[1].pageY);p.set(E,J)}}function Z(){if(b.length===1)f.set(b[0].pageX,b[0].pageY);else{const E=.5*(b[0].pageX+b[1].pageX),J=.5*(b[0].pageY+b[1].pageY);f.set(E,J)}}function B(){const E=b[0].pageX-b[1].pageX,J=b[0].pageY-b[1].pageY,ae=Math.sqrt(E*E+J*J);x.set(0,ae)}function Ke(){n.enableZoom&&B(),n.enablePan&&Z()}function Ee(){n.enableZoom&&B(),n.enableRotate&&de()}function be(E){if(b.length==1)m.set(E.pageX,E.pageY);else{const ae=xe(E),ie=.5*(E.pageX+ae.x),L=.5*(E.pageY+ae.y);m.set(ie,L)}g.subVectors(m,p).multiplyScalar(n.rotateSpeed);const J=n.domElement;T(2*Math.PI*g.x/J.clientHeight),D(2*Math.PI*g.y/J.clientHeight),p.copy(m)}function k(E){if(b.length===1)d.set(E.pageX,E.pageY);else{const J=xe(E),ae=.5*(E.pageX+J.x),ie=.5*(E.pageY+J.y);d.set(ae,ie)}_.subVectors(d,f).multiplyScalar(n.panSpeed),N(_.x,_.y),f.copy(d)}function pe(E){const J=xe(E),ae=E.pageX-J.x,ie=E.pageY-J.y,L=Math.sqrt(ae*ae+ie*ie);w.set(0,L),y.set(0,Math.pow(w.y/x.y,n.zoomSpeed)),P(y.y),x.copy(w)}function ge(E){n.enableZoom&&pe(E),n.enablePan&&k(E)}function _e(E){n.enableZoom&&pe(E),n.enableRotate&&be(E)}function it(E){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",at),n.domElement.addEventListener("pointerup",ut)),te(E),E.pointerType==="touch"?C(E):rt(E))}function at(E){n.enabled!==!1&&(E.pointerType==="touch"?M(E):ke(E))}function ut(E){oe(E),b.length===0&&(n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",at),n.domElement.removeEventListener("pointerup",ut)),n.dispatchEvent(Wa),s=r.NONE}function Lt(E){oe(E)}function rt(E){let J;switch(E.button){case 0:J=n.mouseButtons.LEFT;break;case 1:J=n.mouseButtons.MIDDLE;break;case 2:J=n.mouseButtons.RIGHT;break;default:J=-1}switch(J){case oi.DOLLY:if(n.enableZoom===!1)return;q(E),s=r.DOLLY;break;case oi.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;Y(E),s=r.PAN}else{if(n.enableRotate===!1)return;G(E),s=r.ROTATE}break;case oi.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;G(E),s=r.ROTATE}else{if(n.enablePan===!1)return;Y(E),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Es)}function ke(E){if(n.enabled!==!1)switch(s){case r.ROTATE:if(n.enableRotate===!1)return;I(E);break;case r.DOLLY:if(n.enableZoom===!1)return;O(E);break;case r.PAN:if(n.enablePan===!1)return;ee(E);break}}function Ft(E){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(E.preventDefault(),n.dispatchEvent(Es),K(E),n.dispatchEvent(Wa))}function zt(E){n.enabled===!1||n.enablePan===!1||$(E)}function C(E){switch(fe(E),b.length){case 1:switch(n.touches.ONE){case ai.ROTATE:if(n.enableRotate===!1)return;de(),s=r.TOUCH_ROTATE;break;case ai.PAN:if(n.enablePan===!1)return;Z(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ai.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ke(),s=r.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ee(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Es)}function M(E){switch(fe(E),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;be(E),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;k(E),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ge(E),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(E),n.update();break;default:s=r.NONE}}function X(E){n.enabled!==!1&&E.preventDefault()}function te(E){b.push(E)}function oe(E){delete S[E.pointerId];for(let J=0;J<b.length;J++)if(b[J].pointerId==E.pointerId){b.splice(J,1);return}}function fe(E){let J=S[E.pointerId];J===void 0&&(J=new we,S[E.pointerId]=J),J.set(E.pageX,E.pageY)}function xe(E){const J=E.pointerId===b[0].pointerId?b[1]:b[0];return S[J.pointerId]}n.domElement.addEventListener("contextmenu",X),n.domElement.addEventListener("pointerdown",it),n.domElement.addEventListener("pointercancel",Lt),n.domElement.addEventListener("wheel",Ft,{passive:!1}),this.update()}}function Cg(i){let e,t;return e=new Vr({props:{object:i[2],position:i[0]}}),e.$on("transform",i[3]),{c(){Pe(e.$$.fragment)},m(n,r){Ae(e,n,r),t=!0},p(n,r){const s={};r[0]&1&&(s.position=n[0]),e.$set(s)},i(n){t||(ce(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function Pg(i,e,t){let n,{autoRotate:r=void 0}=e,{autoRotateSpeed:s=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:h=void 0}=e,{keyPanSpeed:p=void 0}=e,{keys:m=void 0}=e,{maxAzimuthAngle:g=void 0}=e,{maxDistance:f=void 0}=e,{maxPolarAngle:d=void 0}=e,{maxZoom:_=void 0}=e,{minAzimuthAngle:x=void 0}=e,{minDistance:w=void 0}=e,{minPolarAngle:y=void 0}=e,{minZoom:b=void 0}=e,{mouseButtons:S=void 0}=e,{panSpeed:F=void 0}=e,{rotateSpeed:v=void 0}=e,{screenSpacePanning:T=void 0}=e,{touches:D=void 0}=e,{zoomSpeed:U=void 0}=e,{target:z=void 0}=e;const N=jl();et(i,N,Z=>t(29,n=Z));const{renderer:P,invalidate:W}=It();if(!P)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof Ys))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const G=Jn(),q=()=>{W("Orbitcontrols: change event"),G("change")},Y=()=>G("start"),I=()=>G("end"),O=new Tg(n,P.domElement);Vt(n).orbitControls=O,O.addEventListener("change",q),O.addEventListener("start",Y),O.addEventListener("end",I),ct(()=>{n&&delete Vt(n).orbitControls,O.removeEventListener("change",q),O.removeEventListener("start",Y),O.removeEventListener("end",I)});const{start:ee,stop:K}=Ri(()=>O.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),$=new Xe,de=()=>{t(4,O.target=$.position,O),O.update(),W("OrbitControls: target changed")};return ct(()=>{O.dispose(),W("OrbitControls: onDestroy")}),i.$$set=Z=>{"autoRotate"in Z&&t(5,r=Z.autoRotate),"autoRotateSpeed"in Z&&t(6,s=Z.autoRotateSpeed),"dampingFactor"in Z&&t(7,o=Z.dampingFactor),"enableDamping"in Z&&t(8,a=Z.enableDamping),"enabled"in Z&&t(9,l=Z.enabled),"enablePan"in Z&&t(10,c=Z.enablePan),"enableRotate"in Z&&t(11,u=Z.enableRotate),"enableZoom"in Z&&t(12,h=Z.enableZoom),"keyPanSpeed"in Z&&t(13,p=Z.keyPanSpeed),"keys"in Z&&t(14,m=Z.keys),"maxAzimuthAngle"in Z&&t(15,g=Z.maxAzimuthAngle),"maxDistance"in Z&&t(16,f=Z.maxDistance),"maxPolarAngle"in Z&&t(17,d=Z.maxPolarAngle),"maxZoom"in Z&&t(18,_=Z.maxZoom),"minAzimuthAngle"in Z&&t(19,x=Z.minAzimuthAngle),"minDistance"in Z&&t(20,w=Z.minDistance),"minPolarAngle"in Z&&t(21,y=Z.minPolarAngle),"minZoom"in Z&&t(22,b=Z.minZoom),"mouseButtons"in Z&&t(23,S=Z.mouseButtons),"panSpeed"in Z&&t(24,F=Z.panSpeed),"rotateSpeed"in Z&&t(25,v=Z.rotateSpeed),"screenSpacePanning"in Z&&t(26,T=Z.screenSpacePanning),"touches"in Z&&t(27,D=Z.touches),"zoomSpeed"in Z&&t(28,U=Z.zoomSpeed),"target"in Z&&t(0,z=Z.target)},i.$$.update=()=>{i.$$.dirty[0]&536870896&&(r!==void 0&&t(4,O.autoRotate=r,O),s!==void 0&&t(4,O.autoRotateSpeed=s,O),o!==void 0&&t(4,O.dampingFactor=o,O),a!==void 0&&t(4,O.enableDamping=a,O),l!==void 0&&t(4,O.enabled=l,O),c!==void 0&&t(4,O.enablePan=c,O),u!==void 0&&t(4,O.enableRotate=u,O),h!==void 0&&t(4,O.enableZoom=h,O),p!==void 0&&t(4,O.keyPanSpeed=p,O),m!==void 0&&t(4,O.keys=m,O),g!==void 0&&t(4,O.maxAzimuthAngle=g,O),f!==void 0&&t(4,O.maxDistance=f,O),d!==void 0&&t(4,O.maxPolarAngle=d,O),_!==void 0&&t(4,O.maxZoom=_,O),x!==void 0&&t(4,O.minAzimuthAngle=x,O),w!==void 0&&t(4,O.minDistance=w,O),y!==void 0&&t(4,O.minPolarAngle=y,O),b!==void 0&&t(4,O.minZoom=b,O),S!==void 0&&t(4,O.mouseButtons=S,O),F!==void 0&&t(4,O.panSpeed=F,O),v!==void 0&&t(4,O.rotateSpeed=v,O),T!==void 0&&t(4,O.screenSpacePanning=T,O),D!==void 0&&t(4,O.touches=D,O),U!==void 0&&t(4,O.zoomSpeed=U,O),O.update(),W("OrbitControls: props changed")),i.$$.dirty[0]&288&&(r||a?ee():K())},[z,N,$,de,O,r,s,o,a,l,c,u,h,p,m,g,f,d,_,x,w,y,b,S,F,v,T,D,U]}class Lg extends Je{constructor(e){super(),Qe(this,e,Pg,Cg,qe,{autoRotate:5,autoRotateSpeed:6,dampingFactor:7,enableDamping:8,enabled:9,enablePan:10,enableRotate:11,enableZoom:12,keyPanSpeed:13,keys:14,maxAzimuthAngle:15,maxDistance:16,maxPolarAngle:17,maxZoom:18,minAzimuthAngle:19,minDistance:20,minPolarAngle:21,minZoom:22,mouseButtons:23,panSpeed:24,rotateSpeed:25,screenSpacePanning:26,touches:27,zoomSpeed:28,target:0,controls:4},null,[-1,-1])}get controls(){return this.$$.ctx[4]}}const A0=new Ul,T0=new R,C0=new R,P0=new $t,L0={X:new R(1,0,0),Y:new R(0,1,0),Z:new R(0,0,1)};const D0=new ei,R0=new R(0,1,0),I0=new R(0,0,0),F0=new We,z0=new $t,O0=new $t,N0=new R,U0=new We,B0=new R(1,0,0),k0=new R(0,1,0),V0=new R(0,0,1),G0=new R,H0=new R,W0=new R;const ql=(i,e)=>e?new Re(i):new Re().setHex(new Re(i).getHex()).convertSRGBToLinear();function Dg(i){let e;const t=i[16].default,n=At(t,i,i[20],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&1048576)&&Ct(n,t,r,r[20],e?Tt(t,r[20],s,null):Pt(r[20]),null)},i(r){e||(ce(n,r),e=!0)},o(r){he(n,r),e=!1},d(r){n&&n.d(r)}}}function Rg(i){let e,t,n;function r(o){i[17](o)}let s={object:i[0],lookAt:i[5],castShadow:i[7],receiveShadow:i[8],frustumCulled:i[9],renderOrder:i[10],position:i[2],scale:i[3],rotation:i[4],viewportAware:i[6],visible:i[11],$$slots:{default:[Dg]},$$scope:{ctx:i}};return i[1]!==void 0&&(s.inViewport=i[1]),e=new $i({props:s}),yt.push(()=>Ht(e,"inViewport",r)),e.$on("viewportenter",i[18]),e.$on("viewportleave",i[19]),{c(){Pe(e.$$.fragment)},m(o,a){Ae(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.object=o[0]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&1048576&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],Gt(()=>t=!1)),e.$set(l)},i(o){n||(ce(e.$$.fragment,o),n=!0)},o(o){he(e.$$.fragment,o),n=!1},d(o){Te(e,o)}}}function Ig(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{light:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:h=!1}=e,{inViewport:p=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:g=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:d=void 0}=e,{visible:_=void 0}=e,{color:x=void 0}=e,{intensity:w=void 0}=e;const{invalidate:y}=It(),{linear:b}=Ki();et(i,b,T=>t(15,n=T));function S(T){p=T,t(1,p)}function F(T){Fe.call(this,i,T)}function v(T){Fe.call(this,i,T)}return i.$$set=T=>{"light"in T&&t(0,o=T.light),"position"in T&&t(2,a=T.position),"scale"in T&&t(3,l=T.scale),"rotation"in T&&t(4,c=T.rotation),"lookAt"in T&&t(5,u=T.lookAt),"viewportAware"in T&&t(6,h=T.viewportAware),"inViewport"in T&&t(1,p=T.inViewport),"castShadow"in T&&t(7,m=T.castShadow),"receiveShadow"in T&&t(8,g=T.receiveShadow),"frustumCulled"in T&&t(9,f=T.frustumCulled),"renderOrder"in T&&t(10,d=T.renderOrder),"visible"in T&&t(11,_=T.visible),"color"in T&&t(13,x=T.color),"intensity"in T&&t(14,w=T.intensity),"$$scope"in T&&t(20,s=T.$$scope)},i.$$.update=()=>{i.$$.dirty&57344&&(w!==void 0&&t(0,o.intensity=w,o),x!==void 0&&t(0,o.color=ql(x,n),o),y("LightInstance: props changed"))},[o,p,a,l,c,u,h,m,g,f,d,_,b,x,w,n,r,S,F,v,s]}class Yl extends Je{constructor(e){super(),Qe(this,e,Ig,Rg,qe,{light:0,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:1,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,color:13,intensity:14})}}function ja(i){let e,t,n,r;return e=new kr({props:{object:i[14]}}),n=new Vr({props:{object:i[14],position:i[13]}}),{c(){Pe(e.$$.fragment),t=je(),Pe(n.$$.fragment)},m(s,o){Ae(e,s,o),ze(s,t,o),Ae(n,s,o),r=!0},p(s,o){const a={};o&8192&&(a.position=s[13]),n.$set(a)},i(s){r||(ce(e.$$.fragment,s),ce(n.$$.fragment,s),r=!0)},o(s){he(e.$$.fragment,s),he(n.$$.fragment,s),r=!1},d(s){Te(e,s),s&&Ie(t),Te(n,s)}}}function Fg(i){let e;const t=i[16].default,n=At(t,i,i[20],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&1048576)&&Ct(n,t,r,r[20],e?Tt(t,r[20],s,null):Pt(r[20]),null)},i(r){e||(ce(n,r),e=!0)},o(r){he(n,r),e=!1},d(r){n&&n.d(r)}}}function zg(i){let e,t,n,r,s=i[13]&&!(i[13]instanceof Xe)&&ja(i);function o(l){i[17](l)}let a={light:i[1],position:i[2],scale:i[3],rotation:i[4],castShadow:!!i[12],receiveShadow:i[5],frustumCulled:i[6],renderOrder:i[7],visible:i[8],viewportAware:i[9],color:i[10],intensity:i[11],$$slots:{default:[Fg]},$$scope:{ctx:i}};return i[0]!==void 0&&(a.inViewport=i[0]),t=new Yl({props:a}),yt.push(()=>Ht(t,"inViewport",o)),t.$on("viewportenter",i[18]),t.$on("viewportleave",i[19]),{c(){s&&s.c(),e=je(),Pe(t.$$.fragment)},m(l,c){s&&s.m(l,c),ze(l,e,c),Ae(t,l,c),r=!0},p(l,[c]){l[13]&&!(l[13]instanceof Xe)?s?(s.p(l,c),c&8192&&ce(s,1)):(s=ja(l),s.c(),ce(s,1),s.m(e.parentNode,e)):s&&(Fn(),he(s,1,1,()=>{s=null}),zn());const u={};c&2&&(u.light=l[1]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&4096&&(u.castShadow=!!l[12]),c&32&&(u.receiveShadow=l[5]),c&64&&(u.frustumCulled=l[6]),c&128&&(u.renderOrder=l[7]),c&256&&(u.visible=l[8]),c&512&&(u.viewportAware=l[9]),c&1024&&(u.color=l[10]),c&2048&&(u.intensity=l[11]),c&1048576&&(u.$$scope={dirty:c,ctx:l}),!n&&c&1&&(n=!0,u.inViewport=l[0],Gt(()=>n=!1)),t.$set(u)},i(l){r||(ce(s),ce(t.$$.fragment,l),r=!0)},o(l){he(s),he(t.$$.fragment,l),r=!1},d(l){s&&s.d(l),l&&Ie(e),Te(t,l)}}}function Og(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{receiveShadow:c=void 0}=e,{frustumCulled:u=void 0}=e,{renderOrder:h=void 0}=e,{visible:p=void 0}=e,{viewportAware:m=!1}=e,{inViewport:g=!1}=e,{color:f=void 0}=e,{intensity:d=void 0}=e,{shadow:_=void 0}=e,{target:x=void 0}=e;const w=new dm(f,d),{invalidate:y}=It(),b=w.target,{start:S,stop:F,started:v}=Ri(()=>{},{autostart:!1,debugFrameloopMessage:"DirectionalLight: tracking target"});et(i,v,P=>t(21,n=P));const T=P=>{P&&P instanceof Xe&&!n?(t(1,w.target=P,w),S(),y("DirectionalLight: target changed")):(!P||!(P instanceof Xe))&&n&&(t(1,w.target=b,w),F(),y("DirectionalLight: target changed"))},D=P=>{if(P){const{mapSize:W=[512,512],camera:{left:G=-5,bottom:q=-5,right:Y=5,top:I=5,near:O=.5,far:ee=500}={},bias:K=0,radius:$=1}=P===!0?{}:P;w.shadow.mapSize.set(W[0],W[1]),t(1,w.shadow.camera.left=G,w),t(1,w.shadow.camera.top=I,w),t(1,w.shadow.camera.right=Y,w),t(1,w.shadow.camera.bottom=q,w),t(1,w.shadow.camera.near=O,w),t(1,w.shadow.camera.far=ee,w),t(1,w.shadow.bias=K,w),t(1,w.shadow.radius=$,w)}y("DirectionalLight: shadow changed")};function U(P){g=P,t(0,g)}function z(P){Fe.call(this,i,P)}function N(P){Fe.call(this,i,P)}return i.$$set=P=>{"position"in P&&t(2,o=P.position),"scale"in P&&t(3,a=P.scale),"rotation"in P&&t(4,l=P.rotation),"receiveShadow"in P&&t(5,c=P.receiveShadow),"frustumCulled"in P&&t(6,u=P.frustumCulled),"renderOrder"in P&&t(7,h=P.renderOrder),"visible"in P&&t(8,p=P.visible),"viewportAware"in P&&t(9,m=P.viewportAware),"inViewport"in P&&t(0,g=P.inViewport),"color"in P&&t(10,f=P.color),"intensity"in P&&t(11,d=P.intensity),"shadow"in P&&t(12,_=P.shadow),"target"in P&&t(13,x=P.target),"$$scope"in P&&t(20,s=P.$$scope)},i.$$.update=()=>{i.$$.dirty&8192&&T(x),i.$$.dirty&4096&&D(_)},[g,w,o,a,l,c,u,h,p,m,f,d,_,x,b,v,r,U,z,N,s]}class Ng extends Je{constructor(e){super(),Qe(this,e,Og,zg,qe,{position:2,scale:3,rotation:4,receiveShadow:5,frustumCulled:6,renderOrder:7,visible:8,viewportAware:9,inViewport:0,color:10,intensity:11,shadow:12,target:13,light:1})}get light(){return this.$$.ctx[1]}}function Ug(i){let e;const t=i[17].default,n=At(t,i,i[21],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&2097152)&&Ct(n,t,r,r[21],e?Tt(t,r[21],s,null):Pt(r[21]),null)},i(r){e||(ce(n,r),e=!0)},o(r){he(n,r),e=!1},d(r){n&&n.d(r)}}}function Bg(i){let e,t,n;function r(o){i[18](o)}let s={light:i[1],lookAt:i[5],position:i[2],scale:i[3],rotation:i[4],castShadow:i[6],receiveShadow:i[7],frustumCulled:i[9],renderOrder:i[10],visible:i[11],viewportAware:i[8],color:i[13],intensity:i[12],$$slots:{default:[Ug]},$$scope:{ctx:i}};return i[0]!==void 0&&(s.inViewport=i[0]),e=new Yl({props:s}),yt.push(()=>Ht(e,"inViewport",r)),e.$on("viewportenter",i[19]),e.$on("viewportleave",i[20]),{c(){Pe(e.$$.fragment)},m(o,a){Ae(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.light=o[1]),a&32&&(l.lookAt=o[5]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&2048&&(l.visible=o[11]),a&256&&(l.viewportAware=o[8]),a&8192&&(l.color=o[13]),a&4096&&(l.intensity=o[12]),a&2097152&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],Gt(()=>t=!1)),e.$set(l)},i(o){n||(ce(e.$$.fragment,o),n=!0)},o(o){he(e.$$.fragment,o),n=!1},d(o){Te(e,o)}}}function kg(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:u=void 0}=e,{receiveShadow:h=void 0}=e,{viewportAware:p=!1}=e,{inViewport:m=!1}=e,{frustumCulled:g=void 0}=e,{renderOrder:f=void 0}=e,{visible:d=void 0}=e,{intensity:_=void 0}=e,{skyColor:x=void 0}=e,{groundColor:w=void 0}=e;const y=new um(x,w,_),{invalidate:b}=It(),{linear:S}=Ki();et(i,S,D=>t(16,n=D));function F(D){m=D,t(0,m)}function v(D){Fe.call(this,i,D)}function T(D){Fe.call(this,i,D)}return i.$$set=D=>{"position"in D&&t(2,o=D.position),"scale"in D&&t(3,a=D.scale),"rotation"in D&&t(4,l=D.rotation),"lookAt"in D&&t(5,c=D.lookAt),"castShadow"in D&&t(6,u=D.castShadow),"receiveShadow"in D&&t(7,h=D.receiveShadow),"viewportAware"in D&&t(8,p=D.viewportAware),"inViewport"in D&&t(0,m=D.inViewport),"frustumCulled"in D&&t(9,g=D.frustumCulled),"renderOrder"in D&&t(10,f=D.renderOrder),"visible"in D&&t(11,d=D.visible),"intensity"in D&&t(12,_=D.intensity),"skyColor"in D&&t(13,x=D.skyColor),"groundColor"in D&&t(15,w=D.groundColor),"$$scope"in D&&t(21,s=D.$$scope)},i.$$.update=()=>{i.$$.dirty&98304&&w!==void 0&&(t(1,y.groundColor=ql(w,n),y),b("HemisphereLight: props changed"))},[m,y,o,a,l,c,u,h,p,g,f,d,_,x,S,w,n,r,F,v,T,s]}class Vg extends Je{constructor(e){super(),Qe(this,e,kg,Bg,qe,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,viewportAware:8,inViewport:0,frustumCulled:9,renderOrder:10,visible:11,intensity:12,skyColor:13,groundColor:15,light:1})}get light(){return this.$$.ctx[1]}}function Gg(i,e,t){let{object:n}=e,r=n,{interactive:s=!1}=e,{ignorePointer:o=!1}=e;const a=Jn(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:h}=Ki(),{invalidate:p}=It(),m=f=>{h(f),c(f),delete Vt(f).eventDispatcher},g=(f,d,_)=>{Vt(f).eventDispatcher=a,d?(h(f),c(f)):(u(f),_?l(f):c(f))};return ct(()=>{m(n),p("InteractiveObject: object removed")}),i.$$set=f=>{"object"in f&&t(0,n=f.object),"interactive"in f&&t(1,s=f.interactive),"ignorePointer"in f&&t(2,o=f.ignorePointer)},i.$$.update=()=>{i.$$.dirty&15&&(n!==r?(m(r),g(n,o,s),p("InteractiveObject: object changed"),t(3,r=n)):n===r&&(g(n,o,s),p("InteractiveObject: props changed")))},[n,s,o,r]}class Hg extends Je{constructor(e){super(),Qe(this,e,Gg,null,qe,{object:0,interactive:1,ignorePointer:2})}}function Wg(i){let e;const t=i[14].default,n=At(t,i,i[25],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&33554432)&&Ct(n,t,r,r[25],e?Tt(t,r[25],s,null):Pt(r[25]),null)},i(r){e||(ce(n,r),e=!0)},o(r){he(n,r),e=!1},d(r){n&&n.d(r)}}}function jg(i){let e,t,n,r,s;function o(l){i[15](l)}let a={object:i[1],lookAt:i[5],position:i[2],scale:i[3],rotation:i[4],castShadow:i[7],receiveShadow:i[8],frustumCulled:i[9],renderOrder:i[10],visible:i[11],viewportAware:i[6],$$slots:{default:[Wg]},$$scope:{ctx:i}};return i[0]!==void 0&&(a.inViewport=i[0]),e=new $i({props:a}),yt.push(()=>Ht(e,"inViewport",o)),e.$on("viewportenter",i[16]),e.$on("viewportleave",i[17]),r=new Hg({props:{object:i[1],interactive:i[12],ignorePointer:i[13]}}),r.$on("click",i[18]),r.$on("contextmenu",i[19]),r.$on("pointerup",i[20]),r.$on("pointerdown",i[21]),r.$on("pointerenter",i[22]),r.$on("pointerleave",i[23]),r.$on("pointermove",i[24]),{c(){Pe(e.$$.fragment),n=je(),Pe(r.$$.fragment)},m(l,c){Ae(e,l,c),ze(l,n,c),Ae(r,l,c),s=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&64&&(u.viewportAware=l[6]),c&33554432&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],Gt(()=>t=!1)),e.$set(u);const h={};c&2&&(h.object=l[1]),c&4096&&(h.interactive=l[12]),c&8192&&(h.ignorePointer=l[13]),r.$set(h)},i(l){s||(ce(e.$$.fragment,l),ce(r.$$.fragment,l),s=!0)},o(l){he(e.$$.fragment,l),he(r.$$.fragment,l),s=!1},d(l){Te(e,l),l&&Ie(n),Te(r,l)}}}function Xg(i,e,t){let{$$slots:n={},$$scope:r}=e,{mesh:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:h=!1}=e,{castShadow:p=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:f=void 0}=e,{visible:d=void 0}=e,{interactive:_=!1}=e,{ignorePointer:x=!1}=e;function w(N){h=N,t(0,h)}function y(N){Fe.call(this,i,N)}function b(N){Fe.call(this,i,N)}function S(N){Fe.call(this,i,N)}function F(N){Fe.call(this,i,N)}function v(N){Fe.call(this,i,N)}function T(N){Fe.call(this,i,N)}function D(N){Fe.call(this,i,N)}function U(N){Fe.call(this,i,N)}function z(N){Fe.call(this,i,N)}return i.$$set=N=>{"mesh"in N&&t(1,s=N.mesh),"position"in N&&t(2,o=N.position),"scale"in N&&t(3,a=N.scale),"rotation"in N&&t(4,l=N.rotation),"lookAt"in N&&t(5,c=N.lookAt),"viewportAware"in N&&t(6,u=N.viewportAware),"inViewport"in N&&t(0,h=N.inViewport),"castShadow"in N&&t(7,p=N.castShadow),"receiveShadow"in N&&t(8,m=N.receiveShadow),"frustumCulled"in N&&t(9,g=N.frustumCulled),"renderOrder"in N&&t(10,f=N.renderOrder),"visible"in N&&t(11,d=N.visible),"interactive"in N&&t(12,_=N.interactive),"ignorePointer"in N&&t(13,x=N.ignorePointer),"$$scope"in N&&t(25,r=N.$$scope)},[h,s,o,a,l,c,u,p,m,g,f,d,_,x,n,w,y,b,S,F,v,T,D,U,z,r]}class Zl extends Je{constructor(e){super(),Qe(this,e,Xg,jg,qe,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,interactive:12,ignorePointer:13})}}function qg(i){let e;const t=i[18].default,n=At(t,i,i[29],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s[0]&536870912)&&Ct(n,t,r,r[29],e?Tt(t,r[29],s,null):Pt(r[29]),null)},i(r){e||(ce(n,r),e=!0)},o(r){he(n,r),e=!1},d(r){n&&n.d(r)}}}function Yg(i){let e,t,n;function r(o){i[19](o)}let s={mesh:i[13],position:i[1],scale:i[2],rotation:i[3],lookAt:i[12],castShadow:i[5],receiveShadow:i[6],frustumCulled:i[7],renderOrder:i[8],visible:i[9],interactive:i[10],ignorePointer:i[11],viewportAware:i[4],$$slots:{default:[qg]},$$scope:{ctx:i}};return i[0]!==void 0&&(s.inViewport=i[0]),e=new Zl({props:s}),yt.push(()=>Ht(e,"inViewport",r)),e.$on("click",i[20]),e.$on("contextmenu",i[21]),e.$on("pointerup",i[22]),e.$on("pointerdown",i[23]),e.$on("pointerenter",i[24]),e.$on("pointerleave",i[25]),e.$on("pointermove",i[26]),e.$on("viewportenter",i[27]),e.$on("viewportleave",i[28]),{c(){Pe(e.$$.fragment)},m(o,a){Ae(e,o,a),n=!0},p(o,a){const l={};a[0]&2&&(l.position=o[1]),a[0]&4&&(l.scale=o[2]),a[0]&8&&(l.rotation=o[3]),a[0]&4096&&(l.lookAt=o[12]),a[0]&32&&(l.castShadow=o[5]),a[0]&64&&(l.receiveShadow=o[6]),a[0]&128&&(l.frustumCulled=o[7]),a[0]&256&&(l.renderOrder=o[8]),a[0]&512&&(l.visible=o[9]),a[0]&1024&&(l.interactive=o[10]),a[0]&2048&&(l.ignorePointer=o[11]),a[0]&16&&(l.viewportAware=o[4]),a[0]&536870912&&(l.$$scope={dirty:a,ctx:o}),!t&&a[0]&1&&(t=!0,l.inViewport=o[0],Gt(()=>t=!1)),e.$set(l)},i(o){n||(ce(e.$$.fragment,o),n=!0)},o(o){he(e.$$.fragment,o),n=!1},d(o){Te(e,o)}}}function Zg(i,e,t){let{$$slots:n={},$$scope:r}=e,{position:s=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:h=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:m=void 0}=e,{visible:g=void 0}=e,{interactive:f=!1}=e,{ignorePointer:d=!1}=e,{lookAt:_=void 0}=e,{geometry:x}=e,{material:w}=e,y=w,b=x;const{invalidate:S}=It(),F=new kt(x,w),v=()=>F;function T(I){c=I,t(0,c)}function D(I){Fe.call(this,i,I)}function U(I){Fe.call(this,i,I)}function z(I){Fe.call(this,i,I)}function N(I){Fe.call(this,i,I)}function P(I){Fe.call(this,i,I)}function W(I){Fe.call(this,i,I)}function G(I){Fe.call(this,i,I)}function q(I){Fe.call(this,i,I)}function Y(I){Fe.call(this,i,I)}return i.$$set=I=>{"position"in I&&t(1,s=I.position),"scale"in I&&t(2,o=I.scale),"rotation"in I&&t(3,a=I.rotation),"viewportAware"in I&&t(4,l=I.viewportAware),"inViewport"in I&&t(0,c=I.inViewport),"castShadow"in I&&t(5,u=I.castShadow),"receiveShadow"in I&&t(6,h=I.receiveShadow),"frustumCulled"in I&&t(7,p=I.frustumCulled),"renderOrder"in I&&t(8,m=I.renderOrder),"visible"in I&&t(9,g=I.visible),"interactive"in I&&t(10,f=I.interactive),"ignorePointer"in I&&t(11,d=I.ignorePointer),"lookAt"in I&&t(12,_=I.lookAt),"geometry"in I&&t(14,x=I.geometry),"material"in I&&t(15,w=I.material),"$$scope"in I&&t(29,r=I.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&98304&&(w!==y?(v().material=w,S("Mesh: material changed")):S("Mesh: material props changed"),t(16,y=w)),i.$$.dirty[0]&147456&&(x!==b?(v().geometry=x,S("Mesh: geometry changed")):S("Mesh: geometry props changed"),t(17,b=x))},[c,s,o,a,l,u,h,p,m,g,f,d,_,F,x,w,y,b,n,T,D,U,z,N,P,W,G,q,Y,r]}class Xa extends Je{constructor(e){super(),Qe(this,e,Zg,Yg,qe,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,interactive:10,ignorePointer:11,lookAt:12,geometry:14,material:15,mesh:13},null,[-1,-1])}get mesh(){return this.$$.ctx[13]}}const Qg=(i,e)=>{let t=i;return{onChange:(r,s)=>{(e&&!e(r,t)||!e&&r!==t)&&(s(r,t),t=r)}}};function qa(i){let e,t,n;function r(o){i[22](o)}let s={mesh:i[13],castShadow:i[5],receiveShadow:i[6],frustumCulled:void 0,renderOrder:i[7],visible:i[8],interactive:i[9],ignorePointer:i[10],viewportAware:i[4]};return i[0]!==void 0&&(s.inViewport=i[0]),e=new Zl({props:s}),yt.push(()=>Ht(e,"inViewport",r)),e.$on("click",i[16]),e.$on("contextmenu",i[16]),e.$on("pointerup",i[16]),e.$on("pointerdown",i[16]),e.$on("pointerenter",i[16]),e.$on("pointerleave",i[16]),e.$on("pointermove",i[16]),e.$on("viewportenter",i[23]),e.$on("viewportleave",i[24]),{c(){Pe(e.$$.fragment)},m(o,a){Ae(e,o,a),n=!0},p(o,a){const l={};a[0]&8192&&(l.mesh=o[13]),a[0]&32&&(l.castShadow=o[5]),a[0]&64&&(l.receiveShadow=o[6]),a[0]&128&&(l.renderOrder=o[7]),a[0]&256&&(l.visible=o[8]),a[0]&512&&(l.interactive=o[9]),a[0]&1024&&(l.ignorePointer=o[10]),a[0]&16&&(l.viewportAware=o[4]),!t&&a[0]&1&&(t=!0,l.inViewport=o[0],Gt(()=>t=!1)),e.$set(l)},i(o){n||(ce(e.$$.fragment,o),n=!0)},o(o){he(e.$$.fragment,o),n=!1},d(o){Te(e,o)}}}function Jg(i){let e=i[13].uuid,t,n,r=qa(i);const s=i[21].default,o=At(s,i,i[25],null);return{c(){r.c(),t=je(),o&&o.c()},m(a,l){r.m(a,l),ze(a,t,l),o&&o.m(a,l),n=!0},p(a,l){l[0]&8192&&qe(e,e=a[13].uuid)?(Fn(),he(r,1,1,_t),zn(),r=qa(a),r.c(),ce(r,1),r.m(t.parentNode,t)):r.p(a,l),o&&o.p&&(!n||l[0]&33554432)&&Ct(o,s,a,a[25],n?Tt(s,a[25],l,null):Pt(a[25]),null)},i(a){n||(ce(r),ce(o,a),n=!0)},o(a){he(r),he(o,a),n=!1},d(a){r.d(a),a&&Ie(t),o&&o.d(a)}}}function Kg(i){let e,t;return e=new $i({props:{object:i[14],position:i[1],scale:i[2],rotation:i[3],lookAt:i[11],$$slots:{default:[Jg]},$$scope:{ctx:i}}}),{c(){Pe(e.$$.fragment)},m(n,r){Ae(e,n,r),t=!0},p(n,r){const s={};r[0]&2&&(s.position=n[1]),r[0]&4&&(s.scale=n[2]),r[0]&8&&(s.rotation=n[3]),r[0]&2048&&(s.lookAt=n[11]),r[0]&33564657&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ce(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}const Ql=new Xe;Ql.scale.set(0,0,0);const Ya={matrix:Ql.matrix,color:null},$g=new We().fromArray(new Array(16).fill(0)),As=new Re(16777215),Jl="threlte-instanced-mesh-context",e0=i=>Dn(Jl+i);function t0(i,e,t){let n,r=_t,s=()=>(r(),r=Lr(U,k=>t(13,n=k)),U),o;i.$$.on_destroy.push(()=>r());let{$$slots:a={},$$scope:l}=e,{position:c=void 0}=e,{scale:u=void 0}=e,{rotation:h=void 0}=e,{viewportAware:p=!1}=e,{inViewport:m=!1}=e,{castShadow:g=void 0}=e,{receiveShadow:f=void 0}=e,{renderOrder:d=void 0}=e,{visible:_=void 0}=e,{interactive:x=!1}=e,{ignorePointer:w=!1}=e,{lookAt:y=void 0}=e,{geometry:b}=e,{material:S}=e,{count:F=void 0}=e,{id:v=""}=e;const{onChange:T}=Qg(S),D=k=>k===void 0,U=gt(new wa(b,S,D(F)?0:F));s();const z=new Xe,N=[],{invalidate:P}=It(),W=(k,pe)=>{const ge=N.findIndex(_e=>_e===k);if(ge===-1){console.warn("Instanced Mesh: Instance not found");return}pe(ge)},{start:G,stop:q,started:Y}=Ri(()=>{n.dispose(),wt(U,n=new wa(b,S,N.length),n),N.forEach((k,pe)=>{$(k,pe),k.color?n.setColorAt(pe,k.color):n.setColorAt(pe,As)}),wt(U,n.instanceMatrix.needsUpdate=!0,n),n.instanceColor&&wt(U,n.instanceColor.needsUpdate=!0,n),q()},{autostart:!1,debugFrameloopMessage:"Instanced Mesh: auto instance count change queued"});et(i,Y,k=>t(27,o=k));const I=k=>{if(D(F))N.push(k),o||G();else{const pe=N.findIndex(ge=>ge===Ya);pe!==-1?N[pe]=k:N.push(k),N.length>F&&console.warn("Instanced Mesh: More instances requested than allocated, increase count on <")}ee(k),P("Instanced Mesh: Instance added")},O=k=>{if(D(F)){const pe=N.findIndex(ge=>ge===k);N.splice(pe,1),o||G()}else{K(k);const pe=N.findIndex(ge=>ge===k);pe>=F?N.splice(pe,1):N.splice(pe,1,Ya)}P("Instanced Mesh: Instance removed")},ee=k=>{k.color||W(k,pe=>{n.setColorAt(pe,As),n.instanceColor&&wt(U,n.instanceColor.needsUpdate=!0,n)})},K=k=>{W(k,pe=>{n.setMatrixAt(pe,$g),wt(U,n.instanceMatrix.needsUpdate=!0,n),P("Instanced Mesh: instance matrix resetted")})},$=(k,pe)=>{n.setMatrixAt(pe,k.matrix),wt(U,n.instanceMatrix.needsUpdate=!0,n),P("Instanced Mesh: instance matrix set")},de=k=>{W(k,pe=>{$(k,pe)})},Z=k=>{W(k,pe=>{var ge;n.setColorAt(pe,(ge=k.color)!=null?ge:As),n.instanceColor&&wt(U,n.instanceColor.needsUpdate=!0,n),P("Instanced Mesh: instance color set")})};gn(Jl+v,{registerInstance:I,removeInstance:O,setInstanceMatrix:de,setInstanceColor:Z,parentObject:z});const B=k=>{if(k.detail.instanceId===void 0)return;const pe=N[k.detail.instanceId];pe&&pe.pointerEventDispatcher&&pe.pointerEventDispatcher(k.type,k.detail)};function Ke(k){m=k,t(0,m)}function Ee(k){Fe.call(this,i,k)}function be(k){Fe.call(this,i,k)}return i.$$set=k=>{"position"in k&&t(1,c=k.position),"scale"in k&&t(2,u=k.scale),"rotation"in k&&t(3,h=k.rotation),"viewportAware"in k&&t(4,p=k.viewportAware),"inViewport"in k&&t(0,m=k.inViewport),"castShadow"in k&&t(5,g=k.castShadow),"receiveShadow"in k&&t(6,f=k.receiveShadow),"renderOrder"in k&&t(7,d=k.renderOrder),"visible"in k&&t(8,_=k.visible),"interactive"in k&&t(9,x=k.interactive),"ignorePointer"in k&&t(10,w=k.ignorePointer),"lookAt"in k&&t(11,y=k.lookAt),"geometry"in k&&t(17,b=k.geometry),"material"in k&&t(18,S=k.material),"count"in k&&t(19,F=k.count),"id"in k&&t(20,v=k.id),"$$scope"in k&&t(25,l=k.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&262144&&T(S,k=>{wt(U,n.material=k,n)})},[m,c,u,h,p,g,f,d,_,x,w,y,U,n,z,Y,B,b,S,F,v,a,Ke,Ee,be,l]}class Za extends Je{constructor(e){super(),Qe(this,e,t0,Kg,qe,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,renderOrder:7,visible:8,interactive:9,ignorePointer:10,lookAt:11,geometry:17,material:18,count:19,id:20,instancedMesh:12},null,[-1,-1])}get instancedMesh(){return this.$$.ctx[12]}}function n0(i){let e;const t=i[8].default,n=At(t,i,i[9],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&512)&&Ct(n,t,r,r[9],e?Tt(t,r[9],s,null):Pt(r[9]),null)},i(r){e||(ce(n,r),e=!0)},o(r){he(n,r),e=!1},d(r){n&&n.d(r)}}}function i0(i){let e,t,n,r;return e=new kr({props:{object:i[4],$$slots:{default:[n0]},$$scope:{ctx:i}}}),n=new Vr({props:{object:i[4],position:i[0],scale:i[1],rotation:i[2],lookAt:i[3]}}),n.$on("transform",i[5]),{c(){Pe(e.$$.fragment),t=je(),Pe(n.$$.fragment)},m(s,o){Ae(e,s,o),ze(s,t,o),Ae(n,s,o),r=!0},p(s,[o]){const a={};o&512&&(a.$$scope={dirty:o,ctx:s}),e.$set(a);const l={};o&1&&(l.position=s[0]),o&2&&(l.scale=s[1]),o&4&&(l.rotation=s[2]),o&8&&(l.lookAt=s[3]),n.$set(l)},i(s){r||(ce(e.$$.fragment,s),ce(n.$$.fragment,s),r=!0)},o(s){he(e.$$.fragment,s),he(n.$$.fragment,s),r=!1},d(s){Te(e,s),s&&Ie(t),Te(n,s)}}}function r0(i,e,t){let{$$slots:n={},$$scope:r}=e,{position:s=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{color:c=void 0}=e,{id:u=""}=e;const{registerInstance:h,setInstanceMatrix:p,removeInstance:m,setInstanceColor:g,parentObject:f}=e0(u),d=new Xe,_=new We,x=Jn(),w=()=>{var z;return f.uuid===((z=d.parent)==null?void 0:z.uuid)},y=z=>z!==void 0?z instanceof Re?z:new Re(z):null,b={color:y(c),matrix:d.matrix,pointerEventDispatcher:x},S=z=>{b.color=y(z),g(b)},F=()=>{let z=d.parent;const N=[];for(;z&&f&&z.uuid!==f.uuid&&(N.push(z),!!z.parent);)z=z.parent;d.updateMatrix(),_.copy(d.matrix),N.forEach(P=>{P.updateMatrix(),_.premultiply(P.matrix)}),b.matrix=_},v=()=>{d.updateMatrix(),b.matrix=d.matrix},T=()=>{v(),p(b)},{start:D}=Ri(()=>{F(),p(b)},{autostart:!1,debugFrameloopMessage:"Instance: tracking non-direct child instance"});h(b),Gs(()=>{w()?T():D(),S(c)});const U=()=>{w()&&T()};return ct(()=>{m(b)}),i.$$set=z=>{"position"in z&&t(0,s=z.position),"scale"in z&&t(1,o=z.scale),"rotation"in z&&t(2,a=z.rotation),"lookAt"in z&&t(3,l=z.lookAt),"color"in z&&t(6,c=z.color),"id"in z&&t(7,u=z.id),"$$scope"in z&&t(9,r=z.$$scope)},i.$$.update=()=>{i.$$.dirty&64&&S(c)},[s,o,a,l,d,U,c,u,n,r]}class Kl extends Je{constructor(e){super(),Qe(this,e,r0,i0,qe,{position:0,scale:1,rotation:2,lookAt:3,color:6,id:7})}}function s0(i){let e;const t=i[12].default,n=At(t,i,i[16],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&65536)&&Ct(n,t,r,r[16],e?Tt(t,r[16],s,null):Pt(r[16]),null)},i(r){e||(ce(n,r),e=!0)},o(r){he(n,r),e=!1},d(r){n&&n.d(r)}}}function o0(i){let e,t,n;function r(o){i[13](o)}let s={object:i[11],position:i[1],scale:i[2],rotation:i[3],lookAt:i[4],frustumCulled:i[8],renderOrder:i[9],visible:i[10],castShadow:i[6],receiveShadow:i[7],viewportAware:i[5],$$slots:{default:[s0]},$$scope:{ctx:i}};return i[0]!==void 0&&(s.inViewport=i[0]),e=new $i({props:s}),yt.push(()=>Ht(e,"inViewport",r)),e.$on("viewportenter",i[14]),e.$on("viewportleave",i[15]),{c(){Pe(e.$$.fragment)},m(o,a){Ae(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.position=o[1]),a&4&&(l.scale=o[2]),a&8&&(l.rotation=o[3]),a&16&&(l.lookAt=o[4]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&32&&(l.viewportAware=o[5]),a&65536&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],Gt(()=>t=!1)),e.$set(l)},i(o){n||(ce(e.$$.fragment,o),n=!0)},o(o){he(e.$$.fragment,o),n=!1},d(o){Te(e,o)}}}function a0(i,e,t){let{$$slots:n={},$$scope:r}=e,{position:s=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{viewportAware:c=!1}=e,{inViewport:u=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:m=void 0}=e,{renderOrder:g=void 0}=e,{visible:f=void 0}=e;const d=new Gi;function _(y){u=y,t(0,u)}function x(y){Fe.call(this,i,y)}function w(y){Fe.call(this,i,y)}return i.$$set=y=>{"position"in y&&t(1,s=y.position),"scale"in y&&t(2,o=y.scale),"rotation"in y&&t(3,a=y.rotation),"lookAt"in y&&t(4,l=y.lookAt),"viewportAware"in y&&t(5,c=y.viewportAware),"inViewport"in y&&t(0,u=y.inViewport),"castShadow"in y&&t(6,h=y.castShadow),"receiveShadow"in y&&t(7,p=y.receiveShadow),"frustumCulled"in y&&t(8,m=y.frustumCulled),"renderOrder"in y&&t(9,g=y.renderOrder),"visible"in y&&t(10,f=y.visible),"$$scope"in y&&t(16,r=y.$$scope)},[u,s,o,a,l,c,h,p,m,g,f,d,n,_,x,w,r]}class l0 extends Je{constructor(e){super(),Qe(this,e,a0,o0,qe,{position:1,scale:2,rotation:3,lookAt:4,viewportAware:5,inViewport:0,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,group:11})}get group(){return this.$$.ctx[11]}}const j0=new $n,X0=new R;le.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new we(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Zt.line={uniforms:qs.merge([le.common,le.fog,le.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};const q0=new R,Y0=new R,Z0=new Ze,Q0=new Ze,J0=new Ze,K0=new R,$0=new We,e_=new pm,t_=new R,n_=new $n,i_=new Ir,r_=new Ze;Ag(ya,()=>new ya);function c0(i){let e,t,n,r,s,o,a,l,c,u,h,p,m,g,f,d,_;return{c(){e=ft("h4"),t=Cn(i[1]),n=je(),r=ft("label"),s=Cn(`num:
	`),o=ft("input"),l=je(),c=ft("label"),u=Cn(`den:
	`),h=ft("input"),p=je(),m=ft("label"),g=Cn(`base:
	`),f=ft("input"),Ue(e,"class","svelte-1midul0"),Ue(o,"type","number"),Ue(o,"step","1"),Ue(o,"min","0"),Ue(o,"max",a=i[0].d),Ue(o,"class","svelte-1midul0"),Ue(r,"class","svelte-1midul0"),Ue(h,"type","number"),Ue(h,"step","1"),Ue(h,"min","1"),Ue(h,"class","svelte-1midul0"),Ue(c,"class","svelte-1midul0"),Ue(f,"type","number"),Ue(f,"step","1"),Ue(f,"min","2"),Ue(f,"class","svelte-1midul0"),Ue(m,"class","svelte-1midul0")},m(x,w){ze(x,e,w),mt(e,t),ze(x,n,w),ze(x,r,w),mt(r,s),mt(r,o),An(o,i[0].n),ze(x,l,w),ze(x,c,w),mt(c,u),mt(c,h),An(h,i[0].d),ze(x,p,w),ze(x,m,w),mt(m,g),mt(m,f),An(f,i[0].b),d||(_=[ot(o,"input",i[3]),ot(o,"change",i[4]),ot(h,"input",i[5]),ot(h,"change",i[6]),ot(f,"input",i[7]),ot(f,"change",i[8])],d=!0)},p(x,[w]){w&2&&Vs(t,x[1]),w&1&&a!==(a=x[0].d)&&Ue(o,"max",a),w&1&&qn(o.value)!==x[0].n&&An(o,x[0].n),w&1&&qn(h.value)!==x[0].d&&An(h,x[0].d),w&1&&qn(f.value)!==x[0].b&&An(f,x[0].b)},i:_t,o:_t,d(x){x&&Ie(e),x&&Ie(n),x&&Ie(r),x&&Ie(l),x&&Ie(c),x&&Ie(p),x&&Ie(m),d=!1,ln(_)}}}function u0(i,e,t){const n=Jn();let{name:r}=e,{rational:s}=e;function o(){s.n=qn(this.value),t(0,s)}const a=()=>n("paramchange",{});function l(){s.d=qn(this.value),t(0,s)}const c=()=>n("paramchange",{});function u(){s.b=qn(this.value),t(0,s)}const h=()=>n("paramchange",{});return i.$$set=p=>{"name"in p&&t(1,r=p.name),"rational"in p&&t(0,s=p.rational)},[s,r,n,o,a,l,c,u,h]}class Qa extends Je{constructor(e){super(),Qe(this,e,u0,c0,qe,{name:1,rational:0})}}function Ja(i){let e,t=i[2].displayPreview?"hide preview":"show preview",n,r,s,o,a,l,c,u,h,p,m,g;function f(w){i[8](w)}let d={name:"Yaw"};i[0]!==void 0&&(d.rational=i[0]),s=new Qa({props:d}),yt.push(()=>Ht(s,"rational",f)),s.$on("paramchange",i[5]);function _(w){i[9](w)}let x={name:"Pitch"};return i[1]!==void 0&&(x.rational=i[1]),l=new Qa({props:x}),yt.push(()=>Ht(l,"rational",_)),l.$on("paramchange",i[5]),{c(){e=ft("button"),n=Cn(t),r=je(),Pe(s.$$.fragment),a=je(),Pe(l.$$.fragment),u=je(),h=ft("button"),h.textContent="Share",Ue(e,"class","svelte-1htu8eh"),Ue(h,"class","svelte-1htu8eh")},m(w,y){ze(w,e,y),mt(e,n),ze(w,r,y),Ae(s,w,y),ze(w,a,y),Ae(l,w,y),ze(w,u,y),ze(w,h,y),p=!0,m||(g=[ot(e,"click",i[4]),ot(h,"click",i[6])],m=!0)},p(w,y){(!p||y&4)&&t!==(t=w[2].displayPreview?"hide preview":"show preview")&&Vs(n,t);const b={};!o&&y&1&&(o=!0,b.rational=w[0],Gt(()=>o=!1)),s.$set(b);const S={};!c&&y&2&&(c=!0,S.rational=w[1],Gt(()=>c=!1)),l.$set(S)},i(w){p||(ce(s.$$.fragment,w),ce(l.$$.fragment,w),p=!0)},o(w){he(s.$$.fragment,w),he(l.$$.fragment,w),p=!1},d(w){w&&Ie(e),w&&Ie(r),Te(s,w),w&&Ie(a),Te(l,w),w&&Ie(u),w&&Ie(h),m=!1,ln(g)}}}function f0(i){let e,t,n,r,s=i[2].running?"Pause":"Play",o,a,l,c,u,h,p,m=i[2].allowControls&&Ja(i);return{c(){e=ft("section"),t=ft("button"),t.textContent="Reset",n=je(),r=ft("button"),o=Cn(s),a=je(),l=ft("input"),c=je(),m&&m.c(),Ue(t,"class","svelte-1htu8eh"),Ue(r,"class","svelte-1htu8eh"),Ue(l,"type","range"),Ue(l,"min","0.01"),Ue(l,"max","10"),Ue(l,"step",".01"),Ue(e,"class","svelte-1htu8eh")},m(g,f){ze(g,e,f),mt(e,t),mt(e,n),mt(e,r),mt(r,o),mt(e,a),mt(e,l),An(l,i[2].pathWidth),mt(e,c),m&&m.m(e,null),u=!0,h||(p=[ot(t,"click",i[5]),ot(r,"click",i[3]),ot(l,"change",i[7]),ot(l,"input",i[7])],h=!0)},p(g,[f]){(!u||f&4)&&s!==(s=g[2].running?"Pause":"Play")&&Vs(o,s),f&4&&An(l,g[2].pathWidth),g[2].allowControls?m?(m.p(g,f),f&4&&ce(m,1)):(m=Ja(g),m.c(),ce(m,1),m.m(e,null)):m&&(Fn(),he(m,1,1,()=>{m=null}),zn())},i(g){u||(ce(m),u=!0)},o(g){he(m),u=!1},d(g){g&&Ie(e),m&&m.d(),h=!1,ln(p)}}}function h0(i,e,t){let n,r;et(i,Pr,d=>t(11,n=d)),et(i,Tn,d=>t(2,r=d));let s,o,a;const l=Jn(),c=()=>{wt(Tn,r.running=!r.running,r)},u=()=>{wt(Tn,r.displayPreview=!r.displayPreview,r)},h=()=>{wt(Pr,n=$s(s,o,a),n),wt(Tn,r.running=!1,r),l("paramchange",{})},p=async()=>{const _=`${[s,o,a].map(ym).join(";")};${r.pathWidth}`,x=`${location.href.split("#")[0]}#${_}`;try{await navigator.clipboard.writeText(x),alert(`Copied ${x} to clipboard. Share it with friends!`)}catch{alert(`Failed to copy the URL to the clipboard. Manually share it with friends via ${x}`)}};s=n.initParams[0],o=n.initParams[1],a=n.initParams[2];function m(){r.pathWidth=qn(this.value),Tn.set(r)}function g(d){s=d,t(0,s)}function f(d){o=d,t(1,o)}return[s,o,r,c,u,h,p,m,g,f]}class d0 extends Je{constructor(e){super(),Qe(this,e,h0,f0,qe,{})}}function Ka(i,e,t){const n=i.slice();return n[3]=e[t],n}function $a(i,e,t){const n=i.slice();return n[6]=e[t],n}function el(i){let e,t;return e=new Kl({props:{position:i[6],scale:i[0].width}}),{c(){Pe(e.$$.fragment)},m(n,r){Ae(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.position=n[6]),r&1&&(s.scale=n[0].width),e.$set(s)},i(n){t||(ce(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function p0(i){let e,t,n=i[0].points,r=[];for(let o=0;o<n.length;o+=1)r[o]=el($a(i,n,o));const s=o=>he(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=ol()},m(o,a){for(let l=0;l<r.length;l+=1)r[l].m(o,a);ze(o,e,a),t=!0},p(o,a){if(a&1){n=o[0].points;let l;for(l=0;l<n.length;l+=1){const c=$a(o,n,l);r[l]?(r[l].p(c,a),ce(r[l],1)):(r[l]=el(c),r[l].c(),ce(r[l],1),r[l].m(e.parentNode,e))}for(Fn(),l=n.length;l<r.length;l+=1)s(l);zn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)ce(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)he(r[a]);t=!1},d(o){sl(r,o),o&&Ie(e)}}}function tl(i){let e,t;return e=new Kl({props:{position:i[3].position,rotation:i[3].rotation,scale:{x:i[0].width,y:i[3].scale.y,z:i[0].width}}}),{c(){Pe(e.$$.fragment)},m(n,r){Ae(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.position=n[3].position),r&1&&(s.rotation=n[3].rotation),r&1&&(s.scale={x:n[0].width,y:n[3].scale.y,z:n[0].width}),e.$set(s)},i(n){t||(ce(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function m0(i){let e,t,n=i[0].cylinders,r=[];for(let o=0;o<n.length;o+=1)r[o]=tl(Ka(i,n,o));const s=o=>he(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=ol()},m(o,a){for(let l=0;l<r.length;l+=1)r[l].m(o,a);ze(o,e,a),t=!0},p(o,a){if(a&1){n=o[0].cylinders;let l;for(l=0;l<n.length;l+=1){const c=Ka(o,n,l);r[l]?(r[l].p(c,a),ce(r[l],1)):(r[l]=tl(c),r[l].c(),ce(r[l],1),r[l].m(e.parentNode,e))}for(Fn(),l=n.length;l<r.length;l+=1)s(l);zn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)ce(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)he(r[a]);t=!1},d(o){sl(r,o),o&&Ie(e)}}}function g0(i){let e,t,n,r;return e=new Za({props:{castShadow:!0,receiveShadow:!0,geometry:i[1],material:i[0].mat,$$slots:{default:[p0]},$$scope:{ctx:i}}}),n=new Za({props:{castShadow:!0,receiveShadow:!0,geometry:i[2],material:i[0].mat,$$slots:{default:[m0]},$$scope:{ctx:i}}}),{c(){Pe(e.$$.fragment),t=je(),Pe(n.$$.fragment)},m(s,o){Ae(e,s,o),ze(s,t,o),Ae(n,s,o),r=!0},p(s,o){const a={};o&1&&(a.material=s[0].mat),o&513&&(a.$$scope={dirty:o,ctx:s}),e.$set(a);const l={};o&1&&(l.material=s[0].mat),o&513&&(l.$$scope={dirty:o,ctx:s}),n.$set(l)},i(s){r||(ce(e.$$.fragment,s),ce(n.$$.fragment,s),r=!0)},o(s){he(e.$$.fragment,s),he(n.$$.fragment,s),r=!1},d(s){Te(e,s),s&&Ie(t),Te(n,s)}}}function _0(i){let e,t;return e=new l0({props:{$$slots:{default:[g0]},$$scope:{ctx:i}}}),{c(){Pe(e.$$.fragment)},m(n,r){Ae(e,n,r),t=!0},p(n,[r]){const s={};r&513&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ce(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function v0(i,e,t){let{turtle:n}=e;const r=new Or(1),s=new Js(1,1,1,20,1,!0);return i.$$set=o=>{"turtle"in o&&t(0,n=o.turtle)},[n,r,s]}class $l extends Je{constructor(e){super(),Qe(this,e,v0,_0,qe,{turtle:0})}}function x0(i){let e,t,n,r,s;return t=new d0({}),t.$on("paramchange",i[7]),r=new cg({props:{$$slots:{default:[y0]},$$scope:{ctx:i}}}),{c(){e=ft("div"),Pe(t.$$.fragment),n=je(),Pe(r.$$.fragment),Ue(e,"class","container svelte-feins2")},m(o,a){ze(o,e,a),Ae(t,e,null),mt(e,n),Ae(r,e,null),s=!0},p(o,a){const l={};a&8207&&(l.$$scope={dirty:a,ctx:o}),r.$set(l)},i(o){s||(ce(t.$$.fragment,o),ce(r.$$.fragment,o),s=!0)},o(o){he(t.$$.fragment,o),he(r.$$.fragment,o),s=!1},d(o){o&&Ie(e),Te(t),Te(r)}}}function w0(i){let e;return{c(){e=ft("div"),e.innerHTML='<div class="svelte-feins2">Loading...</div>',Ue(e,"class","loading--wrapper svelte-feins2")},m(t,n){ze(t,e,n)},p:_t,i:_t,o:_t,d(t){t&&Ie(e)}}}function b0(i){let e,t;return e=new Lg({props:{enableDamping:!0,autoRotate:!0,autoRotateSpeed:.5,target:Ia(i[0].bounds)}}),{c(){Pe(e.$$.fragment)},m(n,r){Ae(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.target=Ia(n[0].bounds)),e.$set(s)},i(n){t||(ce(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function nl(i){let e,t;return e=new $l({props:{turtle:i[1]}}),{c(){Pe(e.$$.fragment)},m(n,r){Ae(e,n,r),t=!0},p(n,r){const s={};r&2&&(s.turtle=n[1]),e.$set(s)},i(n){t||(ce(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function y0(i){let e,t,n,r,s,o,a,l,c,u,h,p,m;e=new Eg({props:{far:1e12,position:i[6],$$slots:{default:[b0]},$$scope:{ctx:i}}}),n=new Ng({props:{shadow:!0,color:"#EDBD9C",position:{x:-15,y:45,z:20}}}),s=new Vg({props:{skyColor:5017260,groundColor:11306060,intensity:.6}}),a=new $l({props:{turtle:i[0]}});let g=i[2]&&nl(i);return u=new Xa({props:{geometry:i[5],material:new Us({color:"black"})}}),p=new Xa({props:{geometry:i[5],position:new R(...i[3]),material:new Us({color:"green"})}}),{c(){Pe(e.$$.fragment),t=je(),Pe(n.$$.fragment),r=je(),Pe(s.$$.fragment),o=je(),Pe(a.$$.fragment),l=je(),g&&g.c(),c=je(),Pe(u.$$.fragment),h=je(),Pe(p.$$.fragment)},m(f,d){Ae(e,f,d),ze(f,t,d),Ae(n,f,d),ze(f,r,d),Ae(s,f,d),ze(f,o,d),Ae(a,f,d),ze(f,l,d),g&&g.m(f,d),ze(f,c,d),Ae(u,f,d),ze(f,h,d),Ae(p,f,d),m=!0},p(f,d){const _={};d&8193&&(_.$$scope={dirty:d,ctx:f}),e.$set(_);const x={};d&1&&(x.turtle=f[0]),a.$set(x),f[2]?g?(g.p(f,d),d&4&&ce(g,1)):(g=nl(f),g.c(),ce(g,1),g.m(c.parentNode,c)):g&&(Fn(),he(g,1,1,()=>{g=null}),zn());const w={};d&8&&(w.position=new R(...f[3])),p.$set(w)},i(f){m||(ce(e.$$.fragment,f),ce(n.$$.fragment,f),ce(s.$$.fragment,f),ce(a.$$.fragment,f),ce(g),ce(u.$$.fragment,f),ce(p.$$.fragment,f),m=!0)},o(f){he(e.$$.fragment,f),he(n.$$.fragment,f),he(s.$$.fragment,f),he(a.$$.fragment,f),he(g),he(u.$$.fragment,f),he(p.$$.fragment,f),m=!1},d(f){Te(e,f),f&&Ie(t),Te(n,f),f&&Ie(r),Te(s,f),f&&Ie(o),Te(a,f),f&&Ie(l),g&&g.d(f),f&&Ie(c),Te(u,f),f&&Ie(h),Te(p,f)}}}function M0(i){let e,t,n,r;const s=[w0,x0],o=[];function a(l,c){return l[4]?0:1}return t=a(i),n=o[t]=s[t](i),{c(){e=ft("div"),n.c(),Ue(e,"class","wrapper")},m(l,c){ze(l,e,c),o[t].m(e,null),r=!0},p(l,[c]){let u=t;t=a(l),t===u?o[t].p(l,c):(Fn(),he(o[u],1,1,()=>{o[u]=null}),zn(),n=o[t],n?n.p(l,c):(n=o[t]=s[t](l),n.c()),ce(n,1),n.m(e,null))},i(l){r||(ce(n),r=!0)},o(l){he(n),r=!1},d(l){l&&Ie(e),o[t].d()}}}function S0(i,e,t){let n;et(i,Pr,d=>t(8,n=d));const r=new Or(1);let s,o,a=vm,l=xm,c={x:1,y:1,z:1},u=[0,0,0],h=0;const p=()=>{if(h<mm){const[d,_,x]=Cm(n),w=[u[0]+d,u[1]+_,u[2]+x];t(0,a.points=[...a.points,new R(...w)],a),t(0,a.cylinders=Ra(a),a),t(0,a.bounds=Im(new R(...w),a.bounds),a),t(3,u=w),h+=1}};let m;Tn.subscribe(d=>{o=d.running,t(2,s=d.displayPreview),t(0,a.width=d.pathWidth,a),clearInterval(m),o&&(m=setInterval(p,n.sleepTimeMs))});const g=()=>{clearInterval(m),t(3,u=[0,0,0]),h=0,t(0,a.bounds={minX:0,maxX:0,minY:0,maxY:0,minZ:0,maxZ:0},a)};let f=!0;return Gs(()=>{Tm(),t(4,f=!1)}),i.$$.update=()=>{i.$$.dirty&256&&t(0,a.points=Lm(),a),i.$$.dirty&1&&t(0,a.cylinders=Ra(a),a),i.$$.dirty&256&&t(1,l.points=Pm(n),l),i.$$.dirty&2&&t(1,l.cylinders=Rm(l),l)},[a,l,s,u,f,r,c,g,n]}class E0 extends Je{constructor(e){super(),Qe(this,e,S0,M0,qe,{})}}new E0({target:document.getElementById("app")});
