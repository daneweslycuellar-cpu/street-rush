var zp=0,Wu=1,kp=2;var xr=1,Hp=2,_o=3,Gs=0,On=1,Bn=2,_r=0,Vs=1,Mi=2,Xu=3,qu=4,Gp=5;var yr=100,Vp=101,Wp=102,Xp=103,qp=104,Yp=200,Zp=201,Jp=202,Kp=203,Yu=204,Zu=205,$p=206,Qp=207,jp=208,em=209,tm=210,nm=211,im=212,sm=213,rm=214,Wl=0,Xl=1,ql=2,no=3,Yl=4,Zl=5,Jl=6,Kl=7,Ju=0,om=1,am=2,Zi=0,Ku=1,$u=2,Qu=3,za=4,ju=5,ef=6,tf=7;var nf=300,vr=301,yo=302,Cc=303,Ic=304,io=1e3,Gi=1001,$l=1002,Tn=1003,lm=1004;var ka=1005;var ni=1006,Pc=1007;var ps=1008;var oi=1009,sf=1010,rf=1011,vo=1012,Lc=1013,Li=1014,Si=1015,Di=1016,Dc=1017,Nc=1018,Mr=1020,of=35902,af=35899,lf=1021,cf=1022,Ni=1023,us=1026,ms=1027,Uc=1028,Fc=1029,Ws=1030,Oc=1031;var Bc=1033,Ha=33776,Ga=33777,Va=33778,Wa=33779,zc=35840,kc=35841,Hc=35842,Gc=35843,Vc=36196,Wc=37492,Xc=37496,qc=37488,Yc=37489,Xa=37490,Zc=37491,Jc=37808,Kc=37809,$c=37810,Qc=37811,jc=37812,eh=37813,th=37814,nh=37815,ih=37816,sh=37817,rh=37818,oh=37819,ah=37820,lh=37821,ch=36492,hh=36494,uh=36495,fh=36283,dh=36284,qa=36285,ph=36286;var ca=2300,Ql=2301,Gl=2302,Pu=2303,Lu=2400,Du=2401,Nu=2402;var cm=3200;var mh=0,hm=1,gs="",Fn="srgb",ha="srgb-linear",ua="linear",Dt="srgb";var Vl=7680;var um=519,fm=512,dm=513,pm=514,hf=515,mm=516,gm=517,uf=518,ff=519,xm=35044,df=35048;var pf="300 es",vi=2e3,so=2001;function Lg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Dg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _m(){let n=fa("canvas");return n.style.display="block",n}var jd={},ro=null;function mf(...n){let e="THREE."+n.shift();ro?ro("log",e,...n):console.log(e,...n)}function ym(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ve(...n){n=ym(n);let e="THREE."+n.shift();if(ro)ro("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ze(...n){n=ym(n);let e="THREE."+n.shift();if(ro)ro("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function cr(...n){let e=n.join(" ");e in jd||(jd[e]=!0,Ve(...n))}function vm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Mm={[Wl]:Wl,[ql]:Jl,[Yl]:Yl,[no]:Zl,[Xl]:Xl,[Jl]:ql,[Kl]:Kl,[Zl]:no},Vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ep=1234567,ra=Math.PI/180,oo=180/Math.PI;function Sr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]).toLowerCase()}function gt(n,e,t){return Math.max(e,Math.min(t,n))}function gf(n,e){return(n%e+e)%e}function Ng(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ug(n,e,t){return n!==e?(t-n)/(e-n):0}function oa(n,e,t){return(1-t)*n+t*e}function Fg(n,e,t,i){return oa(n,e,1-Math.exp(-t*i))}function Og(n,e=1){return e-Math.abs(gf(n,e*2)-e)}function Bg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function zg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function kg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Hg(n,e){return n+Math.random()*(e-n)}function Gg(n){return n*(.5-Math.random())}function Vg(n){n!==void 0&&(ep=n);let e=ep+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wg(n){return n*ra}function Xg(n){return n*oo}function qg(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Yg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zg(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),f=r((e-i)/2),u=o((e-i)/2),d=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*f,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*f,a*c);break;case"ZXZ":n.set(l*f,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*p,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*p,a*c);break;case"ZYZ":n.set(l*p,l*d,a*h,a*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _f(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Sm(n,e){if(e.constructor===Float32Array)return n;let t=_f(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function bm(n,e){if(e.constructor===Float32Array)return n;let t=_f(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var gh={DEG2RAD:ra,RAD2DEG:oo,generateUUID:Sr,clamp:gt,euclideanModulo:gf,mapLinear:Ng,inverseLerp:Ug,lerp:oa,damp:Fg,pingpong:Og,smoothstep:Bg,smootherstep:zg,randInt:kg,randFloat:Hg,randFloatSpread:Gg,seededRandom:Vg,degToRad:Wg,radToDeg:Xg,isPowerOfTwo:qg,ceilPowerOfTwo:Yg,floorPowerOfTwo:xf,setQuaternionFromProperEuler:Zg,normalize:bm,denormalize:Sm},wf=class wf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wf.prototype.isVector2=!0;var me=wf,Xn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(f!==x||l!==u||c!==d||h!==p){let m=l*u+c*d+h*p+f*x;m<0&&(u=-u,d=-d,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),S=Math.sin(y);g=Math.sin(g*y)/S,a=Math.sin(a*y)/S,l=l*g+u*a,c=c*g+d*a,h=h*g+p*a,f=f*g+x*a}else{l=l*g+u*a,c=c*g+d*a,h=h*g+p*a,f=f*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*f+l*d-c*u,e[t+1]=l*p+h*u+c*f-a*d,e[t+2]=c*p+h*d+a*u-l*f,e[t+3]=h*p-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ef=class Ef{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return au.copy(this).projectOnVector(e),this.sub(au)}reflect(e){return this.sub(au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ef.prototype.isVector3=!0;var C=Ef,au=new C,tp=new Xn,Tf=class Tf{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],p=i[8],x=s[0],m=s[3],g=s[6],y=s[1],S=s[4],v=s[7],T=s[2],E=s[5],_=s[8];return r[0]=o*x+a*y+l*T,r[3]=o*m+a*S+l*E,r[6]=o*g+a*v+l*_,r[1]=c*x+h*y+f*T,r[4]=c*m+h*S+f*E,r[7]=c*g+h*v+f*_,r[2]=u*x+d*y+p*T,r[5]=u*m+d*S+p*E,r[8]=u*g+d*v+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,p=t*f+i*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lu.makeScale(e,t)),this}rotate(e){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lu.makeRotation(-e)),this}translate(e,t){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Tf.prototype.isMatrix3=!0;var je=Tf,lu=new je,np=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ip=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jg(){let n={enabled:!0,workingColorSpace:ha,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Dt&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Dt&&(s.r=to(s.r),s.g=to(s.g),s.b=to(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gs?ua:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ha]:{primaries:e,whitePoint:i,transfer:ua,toXYZ:np,fromXYZ:ip,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:np,fromXYZ:ip,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),n}var Et=Jg();function hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function to(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Hr,jl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hr===void 0&&(Hr=fa("canvas")),Hr.width=e.width,Hr.height=e.height;let s=Hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Hr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hs(t[i]/255)*255):t[i]=hs(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kg=0,ao=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cu(s[o].image)):r.push(cu(s[o]))}else r=cu(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function cu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var $g=0,hu=new C,ii=class n extends Vi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Gi,s=Gi,r=ni,o=ps,a=Ni,l=oi,c=n.DEFAULT_ANISOTROPY,h=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Sr(),this.name="",this.source=new ao(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(hu).x}get height(){return this.source.getSize(hu).y}get depth(){return this.source.getSize(hu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case io:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case $l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case io:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case $l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=nf;ii.DEFAULT_ANISOTROPY=1;var Af=class Af{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(d+1)/2,T=(g+1)/2,E=(h+u)/4,_=(f+x)/4,w=(p+m)/4;return S>v&&S>T?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=E/i,r=_/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=E/s,r=w/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=_/r,s=w/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(f-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Af.prototype.isVector4=!0;var Qt=Af,ec=class extends Vi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new ii({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ao(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends ec{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},da=class extends ii{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var tc=class extends ii{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Rc=class Rc{constructor(e,t,i,s,r,o,a,l,c,h,f,u,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,u,d,p,x,m)}set(e,t,i,s,r,o,a,l,c,h,f,u,d,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rc().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Gr.setFromMatrixColumn(e,0).length(),r=1/Gr.setFromMatrixColumn(e,1).length(),o=1/Gr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,p=a*h,x=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,p=c*h,x=c*f;t[0]=u+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,p=c*h,x=c*f;t[0]=u-x*a,t[4]=-o*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,d=o*f,p=a*h,x=a*f;t[0]=l*h,t[4]=p*c-d,t[8]=u*c+x,t[1]=l*f,t[5]=x*c+u,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-u*f,t[8]=p*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+p,t[10]=u-x*f}else if(e.order==="XZY"){let u=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+x,t[5]=o*h,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qg,e,jg)}lookAt(e,t,i){let s=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Ls.crossVectors(i,ci),Ls.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Ls.crossVectors(i,ci)),Ls.normalize(),ml.crossVectors(ci,Ls),s[0]=Ls.x,s[4]=ml.x,s[8]=ci.x,s[1]=Ls.y,s[5]=ml.y,s[9]=ci.y,s[2]=Ls.z,s[6]=ml.z,s[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],S=i[7],v=i[11],T=i[15],E=s[0],_=s[4],w=s[8],P=s[12],I=s[1],N=s[5],z=s[9],X=s[13],D=s[2],V=s[6],Z=s[10],W=s[14],re=s[3],Y=s[7],te=s[11],ie=s[15];return r[0]=o*E+a*I+l*D+c*re,r[4]=o*_+a*N+l*V+c*Y,r[8]=o*w+a*z+l*Z+c*te,r[12]=o*P+a*X+l*W+c*ie,r[1]=h*E+f*I+u*D+d*re,r[5]=h*_+f*N+u*V+d*Y,r[9]=h*w+f*z+u*Z+d*te,r[13]=h*P+f*X+u*W+d*ie,r[2]=p*E+x*I+m*D+g*re,r[6]=p*_+x*N+m*V+g*Y,r[10]=p*w+x*z+m*Z+g*te,r[14]=p*P+x*X+m*W+g*ie,r[3]=y*E+S*I+v*D+T*re,r[7]=y*_+S*N+v*V+T*Y,r[11]=y*w+S*z+v*Z+T*te,r[15]=y*P+S*X+v*W+T*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=l*d-c*u,S=a*d-c*f,v=a*u-l*f,T=o*d-c*h,E=o*u-l*h,_=o*f-a*h;return t*(x*y-m*S+g*v)-i*(p*y-m*T+g*E)+s*(p*S-x*T+g*_)-r*(p*v-x*E+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-i*o,S=t*l-s*o,v=t*c-r*o,T=i*l-s*a,E=i*c-r*a,_=s*c-r*l,w=h*x-f*p,P=h*m-u*p,I=h*g-d*p,N=f*m-u*x,z=f*g-d*x,X=u*g-d*m,D=y*X-S*z+v*N+T*I-E*P+_*w;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/D;return e[0]=(a*X-l*z+c*N)*V,e[1]=(s*z-i*X-r*N)*V,e[2]=(x*_-m*E+g*T)*V,e[3]=(u*E-f*_-d*T)*V,e[4]=(l*I-o*X-c*P)*V,e[5]=(t*X-s*I+r*P)*V,e[6]=(m*v-p*_-g*S)*V,e[7]=(h*_-u*v+d*S)*V,e[8]=(o*z-a*I+c*w)*V,e[9]=(i*I-t*z-r*w)*V,e[10]=(p*E-x*v+g*y)*V,e[11]=(f*v-h*E-d*y)*V,e[12]=(a*P-o*N-l*w)*V,e[13]=(t*N-i*P+s*w)*V,e[14]=(x*S-p*T-m*y)*V,e[15]=(h*T-f*S+u*y)*V,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,p=r*f,x=o*h,m=o*f,g=a*f,y=l*c,S=l*h,v=l*f,T=i.x,E=i.y,_=i.z;return s[0]=(1-(x+g))*T,s[1]=(d+v)*T,s[2]=(p-S)*T,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(u+g))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(p+S)*_,s[9]=(m-y)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Gr.set(s[0],s[1],s[2]).length(),a=Gr.set(s[4],s[5],s[6]).length(),l=Gr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ai.copy(this);let c=1/o,h=1/a,f=1/l;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=h,Ai.elements[5]*=h,Ai.elements[6]*=h,Ai.elements[8]*=f,Ai.elements[9]*=f,Ai.elements[10]*=f,t.setFromRotationMatrix(Ai),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=vi,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===vi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===so)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=vi,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===vi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===so)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Rc.prototype.isMatrix4=!0;var lt=Rc,Gr=new C,Ai=new lt,Qg=new C(0,0,0),jg=new C(1,1,1),Ls=new C,ml=new C,ci=new C,sp=new lt,rp=new Xn,Pi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rp.setFromEuler(this),this.setFromQuaternion(rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var lo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ex=0,op=new C,Vr=new Xn,rs=new lt,gl=new C,$o=new C,tx=new C,nx=new Xn,ap=new C(1,0,0),lp=new C(0,1,0),cp=new C(0,0,1),hp={type:"added"},ix={type:"removed"},Wr={type:"childadded",child:null},uu={type:"childremoved",child:null},fn=class n extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new Pi,i=new Xn,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new je}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(ap,e)}rotateY(e){return this.rotateOnAxis(lp,e)}rotateZ(e){return this.rotateOnAxis(cp,e)}translateOnAxis(e,t){return op.copy(e).applyQuaternion(this.quaternion),this.position.add(op.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ap,e)}translateY(e){return this.translateOnAxis(lp,e)}translateZ(e){return this.translateOnAxis(cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gl.copy(e):gl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt($o,gl,this.up):rs.lookAt(gl,$o,this.up),this.quaternion.setFromRotationMatrix(rs),s&&(rs.extractRotation(s.matrixWorld),Vr.setFromRotationMatrix(rs),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hp),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ix),uu.child=e,this.dispatchEvent(uu),uu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rs.multiply(e.parent.matrixWorld)),e.applyMatrix4(rs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hp),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,tx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,nx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};fn.DEFAULT_UP=new C(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},sx={type:"move"},co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Wn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},xl={h:0,s:0,l:0};function fu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ne=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Et.workingColorSpace){if(e=gf(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=fu(o,r,e+1/3),this.g=fu(o,r,e),this.b=fu(o,r,e-1/3)}return Et.colorSpaceToWorking(this,s),this}setStyle(e,t=Fn){function i(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){let i=wm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Et.workingToColorSpace(Vn.copy(this),e),Math.round(gt(Vn.r*255,0,255))*65536+Math.round(gt(Vn.g*255,0,255))*256+Math.round(gt(Vn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(Vn.copy(this),t);let i=Vn.r,s=Vn.g,r=Vn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=Fn){Et.workingToColorSpace(Vn.copy(this),e);let t=Vn.r,i=Vn.g,s=Vn.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ds),this.setHSL(Ds.h+e,Ds.s+t,Ds.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ds),e.getHSL(xl);let i=oa(Ds.h,xl.h,t),s=oa(Ds.s,xl.s,t),r=oa(Ds.l,xl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new Ne;Ne.NAMES=wm;var pa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ho=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ri=new C,os=new C,du=new C,as=new C,Xr=new C,qr=new C,up=new C,pu=new C,mu=new C,gu=new C,xu=new Qt,_u=new Qt,yu=new Qt,Os=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ri.subVectors(e,t),s.cross(Ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ri.subVectors(s,t),os.subVectors(i,t),du.subVectors(e,t);let o=Ri.dot(Ri),a=Ri.dot(os),l=Ri.dot(du),c=os.dot(os),h=os.dot(du),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,as)===null?!1:as.x>=0&&as.y>=0&&as.x+as.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,as)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,as.x),l.addScaledVector(o,as.y),l.addScaledVector(a,as.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return xu.setScalar(0),_u.setScalar(0),yu.setScalar(0),xu.fromBufferAttribute(e,t),_u.fromBufferAttribute(e,i),yu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(xu,r.x),o.addScaledVector(_u,r.y),o.addScaledVector(yu,r.z),o}static isFrontFacing(e,t,i,s){return Ri.subVectors(i,t),os.subVectors(e,t),Ri.cross(os).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),os.subVectors(this.a,this.b),Ri.cross(os).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Xr.subVectors(s,i),qr.subVectors(r,i),pu.subVectors(e,i);let l=Xr.dot(pu),c=qr.dot(pu);if(l<=0&&c<=0)return t.copy(i);mu.subVectors(e,s);let h=Xr.dot(mu),f=qr.dot(mu);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(Xr,o);gu.subVectors(e,r);let d=Xr.dot(gu),p=qr.dot(gu);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(qr,a);let m=h*p-d*f;if(m<=0&&f-h>=0&&d-p>=0)return up.subVectors(r,s),a=(f-h)/(f-h+(d-p)),t.copy(s).addScaledVector(up,a);let g=1/(m+x+u);return o=x*g,a=u*g,t.copy(i).addScaledVector(Xr,o).addScaledVector(qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wi=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ci):Ci.fromBufferAttribute(r,o),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_l.copy(i.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),yl.subVectors(this.max,Qo),Yr.subVectors(e.a,Qo),Zr.subVectors(e.b,Qo),Jr.subVectors(e.c,Qo),Ns.subVectors(Zr,Yr),Us.subVectors(Jr,Zr),sr.subVectors(Yr,Jr);let t=[0,-Ns.z,Ns.y,0,-Us.z,Us.y,0,-sr.z,sr.y,Ns.z,0,-Ns.x,Us.z,0,-Us.x,sr.z,0,-sr.x,-Ns.y,Ns.x,0,-Us.y,Us.x,0,-sr.y,sr.x,0];return!vu(t,Yr,Zr,Jr,yl)||(t=[1,0,0,0,1,0,0,0,1],!vu(t,Yr,Zr,Jr,yl))?!1:(vl.crossVectors(Ns,Us),t=[vl.x,vl.y,vl.z],vu(t,Yr,Zr,Jr,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ls),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ls=[new C,new C,new C,new C,new C,new C,new C,new C],Ci=new C,_l=new Wi,Yr=new C,Zr=new C,Jr=new C,Ns=new C,Us=new C,sr=new C,Qo=new C,yl=new C,vl=new C,rr=new C;function vu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){rr.fromArray(n,r);let a=s.x*Math.abs(rr.x)+s.y*Math.abs(rr.y)+s.z*Math.abs(rr.z),l=e.dot(rr),c=t.dot(rr),h=i.dot(rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var un=new C,Ml=new me,rx=0,$t=class extends Vi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xm,this.updateRanges=[],this.gpuType=Si,this.version=0,this._normalizationScale=e!==void 0?_f(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ml.fromBufferAttribute(this,t),Ml.applyMatrix3(e),this.setXY(t,Ml.x,Ml.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Sm(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):bm(e,this.array)}};var ma=class extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ga=class extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ht=class extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}},ox=new Wi,jo=new C,Mu=new C,Xi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ox.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);let t=jo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(jo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(Mu)),this.expandByPoint(jo.copy(e.center).sub(Mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ax=0,yi=new lt,Su=new fn,Kr=new C,hi=new Wi,ea=new Wi,En=new C,qt=class n extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lg(e)?ga:ma)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,i){return yi.makeTranslation(e,t,i),this.applyMatrix4(yi),this}scale(e,t,i){return yi.makeScale(e,t,i),this.applyMatrix4(yi),this}lookAt(e){return Su.lookAt(e),Su.updateMatrix(),this.applyMatrix4(Su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];hi.setFromBufferAttribute(r),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ea.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(hi.min,ea.min),hi.expandByPoint(En),En.addVectors(hi.max,ea.max),hi.expandByPoint(En)):(hi.expandByPoint(ea.min),hi.expandByPoint(ea.max))}hi.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)En.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(En));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)En.fromBufferAttribute(a,c),l&&(Kr.fromBufferAttribute(e,c),En.add(Kr)),s=Math.max(s,i.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new $t(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)a[P]=new C,l[P]=new C;let h=new C,f=new C,u=new C,d=new me,p=new me,x=new me,m=new C,g=new C;function y(P,I,N){c[P]=c[I]=c[N]=1,h.fromBufferAttribute(i,P),f.fromBufferAttribute(i,I),u.fromBufferAttribute(i,N),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,I),x.fromBufferAttribute(r,N),f.sub(h),u.sub(h),p.sub(d),x.sub(d);let z=1/(p.x*x.y-x.x*p.y);isFinite(z)&&(m.copy(f).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(z),g.copy(u).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(z),a[P].add(m),a[I].add(m),a[N].add(m),l[P].add(g),l[I].add(g),l[N].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,I=S.length;P<I;++P){let N=S[P],z=N.start,X=N.count;for(let D=z,V=z+X;D<V;D+=3)y(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let v=new C,T=new C,E=new C,_=new C;function w(P){E.fromBufferAttribute(s,P),_.copy(E);let I=a[P];v.copy(I),v.sub(E.multiplyScalar(E.dot(I))).normalize(),T.crossVectors(_,I);let z=T.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,z)}for(let P=0,I=i.count;P<I;++P)c[P]&&w(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,f=new C;if(e)for(let u=0,d=e.count;u<d;u+=3){let p=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[d++]}return new $t(u,h,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var bu=new C,lx=new C,cx=new je,Ii=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=bu.subVectors(i,t).cross(lx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(bu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||cx.getNormalMatrix(e),s=this.coplanarPoint(bu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},hx=0,qi=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Vs,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yu,this.blendDst=Zu,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vl,this.stencilZFail=Vl,this.stencilZPass=Vl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ii().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new me().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var cs=new C,wu=new C,Sl=new C,bl=new C,hr=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cs.copy(this.origin).addScaledVector(this.direction,t),cs.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){wu.copy(e).add(t).multiplyScalar(.5),Sl.copy(t).sub(e).normalize(),bl.copy(this.origin).sub(wu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Sl),a=bl.dot(this.direction),l=-bl.dot(Sl),c=bl.lengthSq(),h=Math.abs(1-o*o),f,u,d,p;if(h>0)if(f=o*l-a,u=o*a-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let x=1/h;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(wu).addScaledVector(Sl,u),d}intersectSphere(e,t){if(e.radius<0)return null;cs.subVectors(e.center,this.origin);let i=cs.dot(this.direction),s=cs.dot(cs)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,cs)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,u=e.y-o.y,d=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=i.x-o.x,y=i.y-o.y,S=i.z-o.z,v=Math.abs(l),T=Math.abs(c),E=Math.abs(h),_,w,P,I,N,z,X,D,V,Z,W,re;if(v>=T&&v>=E?(P=l,z=f,V=p,re=g,l>=0?(_=c,w=h,I=u,N=d,X=x,D=m,Z=y,W=S):(_=h,w=c,I=d,N=u,X=m,D=x,Z=S,W=y)):T>=E?(P=c,z=u,V=x,re=y,c>=0?(_=h,w=l,I=d,N=f,X=m,D=p,Z=S,W=g):(_=l,w=h,I=f,N=d,X=p,D=m,Z=g,W=S)):(P=h,z=d,V=m,re=S,h>=0?(_=l,w=c,I=f,N=u,X=p,D=x,Z=g,W=y):(_=c,w=l,I=u,N=f,X=x,D=p,Z=y,W=g)),P===0)return null;let Y=_/P,te=w/P,ie=1/P,Ce=I-Y*z,We=N-te*z,K=X-Y*V,Me=D-te*V,Ie=Z-Y*re,ke=W-te*re,Se=Ie*Me-ke*K,He=Ce*ke-We*Ie,Wt=K*We-Me*Ce;if(s){if(Se<0||He<0||Wt<0)return null}else if((Se<0||He<0||Wt<0)&&(Se>0||He>0||Wt>0))return null;let Xe=Se+He+Wt;if(Xe===0)return null;let mt=ie*(Se*z+He*V+Wt*re);return(Xe>0?mt<0:mt>0)?null:this.at(mt/Xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fp=new lt,or=new hr,wl=new Xi,dp=new C,El=new C,Tl=new C,Al=new C,Eu=new C,Rl=new C,pp=new C,Cl=new C,Je=class extends fn{constructor(e=new qt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Rl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Eu.fromBufferAttribute(f,e),o?Rl.addScaledVector(Eu,h):Rl.addScaledVector(Eu.sub(t),h))}t.add(Rl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(r),or.copy(e.ray).recast(e.near),!(wl.containsPoint(or.origin)===!1&&(or.intersectSphere(wl,dp)===null||or.origin.distanceToSquared(dp)>(e.far-e.near)**2))&&(fp.copy(r).invert(),or.copy(e.ray).applyMatrix4(fp),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,T=S;v<T;v+=3){let E=a.getX(v),_=a.getX(v+1),w=a.getX(v+2);s=Il(this,g,e,i,c,h,f,E,_,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=Il(this,o,e,i,c,h,f,y,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,T=S;v<T;v+=3){let E=v,_=v+1,w=v+2;s=Il(this,g,e,i,c,h,f,E,_,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let y=m,S=m+1,v=m+2;s=Il(this,o,e,i,c,h,f,y,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ux(n,e,t,i,s,r,o,a){let l;if(e.side===On?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Gs,a),l===null)return null;Cl.copy(a),Cl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Cl);return c<t.near||c>t.far?null:{distance:c,point:Cl.clone(),object:n}}function Il(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,El),n.getVertexPosition(l,Tl),n.getVertexPosition(c,Al);let h=ux(n,e,t,i,El,Tl,Al,pp);if(h){let f=new C;Os.getBarycoord(pp,El,Tl,Al,f),s&&(h.uv=Os.getInterpolatedAttribute(s,a,l,c,f,new me)),r&&(h.uv1=Os.getInterpolatedAttribute(r,a,l,c,f,new me)),o&&(h.normal=Os.getInterpolatedAttribute(o,a,l,c,f,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};Os.getNormal(El,Tl,Al,u.normal),h.face=u,h.barycoord=f}return h}var xa=class extends ii{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Tn,h=Tn,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var uo=class extends $t{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$r=new lt,mp=new lt,Pl=[],gp=new Wi,fx=new lt,ta=new Je,na=new Xi,dn=class extends Je{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,fx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$r),gp.copy(e.boundingBox).applyMatrix4($r),this.boundingBox.union(gp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$r),na.copy(e.boundingSphere).applyMatrix4($r),this.boundingSphere.union(na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(i),e.ray.intersectsSphere(na)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$r),mp.multiplyMatrices(i,$r),ta.matrixWorld=mp,ta.raycast(e,Pl);for(let o=0,a=Pl.length;o<a;o++){let l=Pl[o];l.instanceId=r,l.object=this,t.push(l)}Pl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new uo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new xa(new Float32Array(s*this.count),s,this.count,Uc,Si));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ar=new Xi,dx=new me(.5,.5),Ll=new C,Bs=class{constructor(e=new Ii,t=new Ii,i=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],S=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-o,d-h,g-p,T-y).normalize(),s[1].setComponents(c+o,d+h,g+p,T+y).normalize(),s[2].setComponents(c+a,d+f,g+x,T+S).normalize(),s[3].setComponents(c-a,d-f,g-x,T-S).normalize(),i)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,d-u,g-m,T-v).normalize();else if(s[4].setComponents(c-l,d-u,g-m,T-v).normalize(),t===vi)s[5].setComponents(c+l,d+u,g+m,T+v).normalize();else if(t===so)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);let t=dx.distanceTo(e.center);return ar.radius=.7071067811865476+t,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ll.x=s.normal.x>0?e.max.x:e.min.x,Ll.y=s.normal.y>0?e.max.y:e.min.y,Ll.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xp=new lt,nc=class n{constructor(){this.coordinateSystem=vi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];xp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Bs),i[s].setFromProjectionMatrix(xp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Bs),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var fo=class extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ic=new C,sc=new C,_p=new lt,ia=new hr,Dl=new Xi,Tu=new C,yp=new C,rc=class extends fn{constructor(e=new qt,t=new fo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ic.fromBufferAttribute(t,s-1),sc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ic.distanceTo(sc);e.setAttribute("lineDistance",new ht(i,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(s),Dl.radius+=r,e.ray.intersectsSphere(Dl)===!1)return;_p.copy(s).invert(),ia.copy(e.ray).applyMatrix4(_p);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=h.getX(x),y=h.getX(x+1),S=Nl(this,e,ia,l,g,y,x);S&&t.push(S)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(d),g=Nl(this,e,ia,l,x,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=Nl(this,e,ia,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Nl(this,e,ia,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Nl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(ic.fromBufferAttribute(a,s),sc.fromBufferAttribute(a,r),t.distanceSqToSegment(ic,sc,Tu,yp)>i)return;Tu.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Tu);if(!(c<e.near||c>e.far))return{distance:c,point:yp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var vp=new C,Mp=new C,_a=class extends rc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)vp.fromBufferAttribute(t,s),Mp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+vp.distanceTo(Mp);e.setAttribute("lineDistance",new ht(i,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var po=class extends qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sp=new lt,Uu=new hr,Ul=new Xi,Fl=new C,ur=class extends fn{constructor(e=new qt,t=new po){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(s),Ul.radius+=r,e.ray.intersectsSphere(Ul)===!1)return;Sp.copy(s).invert(),Uu.copy(e.ray).applyMatrix4(Sp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=u,x=d;p<x;p++){let m=c.getX(p);Fl.fromBufferAttribute(f,m),bp(Fl,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=u,x=d;p<x;p++)Fl.fromBufferAttribute(f,p),bp(Fl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bp(n,e,t,i,s,r,o){let a=Uu.distanceSqToPoint(n);if(a<t){let l=new C;Uu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ya=class extends ii{constructor(e=[],t=vr,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fr=class extends ii{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fs=class extends ii{constructor(e,t,i=Li,s,r,o,a=Tn,l=Tn,c,h=us,f=1){if(h!==us&&h!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ao(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},va=class extends fs{constructor(e,t=Li,i=vr,s,r,o=Tn,a=Tn,l,c=us){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ma=class extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ye=class n extends qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2));function p(x,m,g,y,S,v,T,E,_,w,P){let I=v/_,N=T/w,z=v/2,X=T/2,D=E/2,V=_+1,Z=w+1,W=0,re=0,Y=new C;for(let te=0;te<Z;te++){let ie=te*N-X;for(let Ce=0;Ce<V;Ce++){let We=Ce*I-z;Y[x]=We*y,Y[m]=ie*S,Y[g]=D,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[g]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(Ce/_),f.push(1-te/w),W+=1}}for(let te=0;te<w;te++)for(let ie=0;ie<_;ie++){let Ce=u+ie+V*te,We=u+ie+V*(te+1),K=u+(ie+1)+V*(te+1),Me=u+(ie+1)+V*te;l.push(Ce,We,Me),l.push(We,K,Me),re+=6}a.addGroup(d,re,P),d+=re,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},An=class n extends qt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,d=2*f+u,p=i*2+r,x=s+1,m=new C,g=new C;for(let y=0;y<=p;y++){let S=0,v=0,T=0,E=0;if(y<=i){let P=y/i,I=P*Math.PI/2;v=-h-e*Math.cos(I),T=e*Math.sin(I),E=-e*Math.cos(I),S=P*f}else if(y<=i+r){let P=(y-i)/r;v=-h+P*t,T=e,E=0,S=f+P*u}else{let P=(y-i-r)/i,I=P*Math.PI/2;v=h+e*Math.sin(I),T=e*Math.cos(I),E=e*Math.sin(I),S=f+u+P*f}let _=Math.max(0,Math.min(1,S/d)),w=0;y===0?w=.5/s:y===p&&(w=-.5/s);for(let P=0;P<=s;P++){let I=P/s,N=I*Math.PI*2,z=Math.sin(N),X=Math.cos(N);g.x=-T*X,g.y=v,g.z=T*z,a.push(g.x,g.y,g.z),m.set(-T*X,E,T*z),m.normalize(),l.push(m.x,m.y,m.z),c.push(I+w,_)}if(y>0){let P=(y-1)*x;for(let I=0;I<s;I++){let N=P+I,z=P+I+1,X=y*x+I,D=y*x+I+1;o.push(N,z,X),o.push(z,D,X)}}}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},dr=class n extends qt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,h=new me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=i+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Bt=class n extends qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,x=[],m=i/2,g=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(d,2));function y(){let v=new C,T=new C,E=0,_=(t-e)/i;for(let w=0;w<=r;w++){let P=[],I=w/r,N=I*(t-e)+e;for(let z=0;z<=s;z++){let X=z/s,D=X*l+a,V=Math.sin(D),Z=Math.cos(D);T.x=N*V,T.y=-I*i+m,T.z=N*Z,f.push(T.x,T.y,T.z),v.set(V,_,Z).normalize(),u.push(v.x,v.y,v.z),d.push(X,1-I),P.push(p++)}x.push(P)}for(let w=0;w<s;w++)for(let P=0;P<r;P++){let I=x[P][w],N=x[P+1][w],z=x[P+1][w+1],X=x[P][w+1];(e>0||P!==0)&&(h.push(I,N,X),E+=3),(t>0||P!==r-1)&&(h.push(N,z,X),E+=3)}c.addGroup(g,E,0),g+=E}function S(v){let T=p,E=new me,_=new C,w=0,P=v===!0?e:t,I=v===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*I,0),u.push(0,I,0),d.push(.5,.5),p++;let N=p;for(let z=0;z<=s;z++){let D=z/s*l+a,V=Math.cos(D),Z=Math.sin(D);_.x=P*Z,_.y=m*I,_.z=P*V,f.push(_.x,_.y,_.z),u.push(0,I,0),E.x=V*.5+.5,E.y=Z*.5*I+.5,d.push(E.x,E.y),p++}for(let z=0;z<s;z++){let X=T+z,D=N+z;v===!0?h.push(D,D+1,X):h.push(D+1,D,X),w+=3}c.addGroup(g,w,v===!0?1:2),g+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yi=class n extends Bt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},oc=class n extends qt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new C,v=new C,T=new C;for(let E=0;E<t.length;E+=3)d(t[E+0],S),d(t[E+1],v),d(t[E+2],T),l(S,v,T,y)}function l(y,S,v,T){let E=T+1,_=[];for(let w=0;w<=E;w++){_[w]=[];let P=y.clone().lerp(v,w/E),I=S.clone().lerp(v,w/E),N=E-w;for(let z=0;z<=N;z++)z===0&&w===E?_[w][z]=P:_[w][z]=P.clone().lerp(I,z/N)}for(let w=0;w<E;w++)for(let P=0;P<2*(E-w)-1;P++){let I=Math.floor(P/2);P%2===0?(u(_[w][I+1]),u(_[w+1][I]),u(_[w][I])):(u(_[w][I+1]),u(_[w+1][I+1]),u(_[w+1][I]))}}function c(y){let S=new C;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(y),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){let y=new C;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let v=m(y)/2/Math.PI+.5,T=g(y)/Math.PI+.5;o.push(v,1-T)}p(),f()}function f(){for(let y=0;y<o.length;y+=6){let S=o[y+0],v=o[y+2],T=o[y+4],E=Math.max(S,v,T),_=Math.min(S,v,T);E>.9&&_<.1&&(S<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function d(y,S){let v=y*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function p(){let y=new C,S=new C,v=new C,T=new C,E=new me,_=new me,w=new me;for(let P=0,I=0;P<r.length;P+=9,I+=6){y.set(r[P+0],r[P+1],r[P+2]),S.set(r[P+3],r[P+4],r[P+5]),v.set(r[P+6],r[P+7],r[P+8]),E.set(o[I+0],o[I+1]),_.set(o[I+2],o[I+3]),w.set(o[I+4],o[I+5]),T.copy(y).add(S).add(v).divideScalar(3);let N=m(T);x(E,I+0,y,N),x(_,I+2,S,N),x(w,I+4,v,N)}}function x(y,S,v,T){T<0&&y.x===1&&(o[S]=y.x-1),v.x===0&&v.z===0&&(o[S]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new me:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,s=[],r=[],o=[],a=new C,l=new lt;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(gt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(gt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},mo=class extends fi{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new me){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ac=class extends mo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function yf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var wp=new C,Ep=new C,Au=new yf,Ru=new yf,Cu=new yf,lc=class extends fi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ep.subVectors(s[0],s[1]).add(s[0]),c=Ep);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(wp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wp),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Au.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,x,m),Ru.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,x,m),Cu.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Au.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Ru.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Cu.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(Au.calc(l),Ru.calc(l),Cu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function px(n,e){let t=1-n;return t*t*e}function mx(n,e){return 2*(1-n)*n*e}function gx(n,e){return n*n*e}function aa(n,e,t,i){return px(n,e)+mx(n,t)+gx(n,i)}function xx(n,e){let t=1-n;return t*t*t*e}function _x(n,e){let t=1-n;return 3*t*t*n*e}function yx(n,e){return 3*(1-n)*n*n*e}function vx(n,e){return n*n*n*e}function la(n,e,t,i,s){return xx(n,e)+_x(n,t)+yx(n,i)+vx(n,s)}var Sa=class extends fi{constructor(e=new me,t=new me,i=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new me){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(la(e,s.x,r.x,o.x,a.x),la(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},cc=class extends fi{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(la(e,s.x,r.x,o.x,a.x),la(e,s.y,r.y,o.y,a.y),la(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ba=class extends fi{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hc=class extends fi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends fi{constructor(e=new me,t=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new me){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(aa(e,s.x,r.x,o.x),aa(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uc=class extends fi{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(aa(e,s.x,r.x,o.x),aa(e,s.y,r.y,o.y),aa(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Tp(a,l.x,c.x,h.x,f.x),Tp(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},Fu=Object.freeze({__proto__:null,ArcCurve:ac,CatmullRomCurve3:lc,CubicBezierCurve:Sa,CubicBezierCurve3:cc,EllipseCurve:mo,LineCurve:ba,LineCurve3:hc,QuadraticBezierCurve:wa,QuadraticBezierCurve3:uc,SplineCurve:Ea}),fc=class extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Fu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ta=class extends fc{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ba(this.currentPoint.clone(),new me(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new wa(this.currentPoint.clone(),new me(e,t),new me(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Sa(this.currentPoint.clone(),new me(e,t),new me(i,s),new me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ea(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new mo(e,t,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ds=class extends Ta{constructor(e){super(e),this.uuid=Sr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ta().fromJSON(s))}return this}};function Mx(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Em(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Tx(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,f=l;for(let u=t;u<s;u+=t){let d=n[u],p=n[u+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Aa(r,o,t,a,l,c,0),o}function Em(n,e,t,i,s){let r;if(s===Ox(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Ap(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Ap(o/i|0,n[o],n[o+1],r);return r&&go(r,r.next)&&(Ca(r),r=r.next),r}function pr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(go(t,t.next)||nn(t.prev,t,t.next)===0)){if(Ca(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Aa(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Px(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?bx(n,i,s,r):Sx(n)){e.push(l.i,n.i,c.i),Ca(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=wx(pr(n),e),Aa(n,e,t,i,s,r,2)):o===2&&Ex(n,e,t,i,s,r):Aa(pr(n),e,t,i,s,r,1);break}}}function Sx(n){let e=n.prev,t=n,i=n.next;if(nn(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),f=Math.min(a,l,c),u=Math.max(s,r,o),d=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&sa(s,a,r,l,o,c,p.x,p.y)&&nn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function bx(n,e,t,i){let s=n.prev,r=n,o=n.next;if(nn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,l,c),p=Math.min(h,f,u),x=Math.max(a,l,c),m=Math.max(h,f,u),g=Ou(d,p,e,t,i),y=Ou(x,m,e,t,i),S=n.prevZ,v=n.nextZ;for(;S&&S.z>=g&&v&&v.z<=y;){if(S.x>=d&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&sa(a,h,l,f,c,u,S.x,S.y)&&nn(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=d&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&sa(a,h,l,f,c,u,v.x,v.y)&&nn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=g;){if(S.x>=d&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&sa(a,h,l,f,c,u,S.x,S.y)&&nn(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&sa(a,h,l,f,c,u,v.x,v.y)&&nn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function wx(n,e){let t=n;do{let i=t.prev,s=t.next.next;!go(i,s)&&Am(i,t,t.next,s)&&Ra(i,s)&&Ra(s,i)&&(e.push(i.i,t.i,s.i),Ca(t),Ca(t.next),t=n=s),t=t.next}while(t!==n);return pr(t)}function Ex(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Nx(o,a)){let l=Rm(o,a);o=pr(o,o.next),l=pr(l,l.next),Aa(o,e,t,i,s,r,0),Aa(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Tx(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Em(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Dx(c))}s.sort(Ax);for(let r=0;r<s.length;r++)t=Rx(s[r],t);return t}function Ax(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Rx(n,e){let t=Cx(n,e);if(!t)return e;let i=Rm(t,n);return pr(i,i.next),pr(t,t.next)}function Cx(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(go(n,t))return t;do{if(go(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Tm(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);Ra(t,n)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&Ix(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function Ix(n,e){return nn(n.prev,n,e.prev)<0&&nn(e.next,n,n.next)<0}function Px(n,e,t,i){let s=n;do s.z===0&&(s.z=Ou(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Lx(s)}function Lx(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Ou(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Dx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Tm(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function sa(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Tm(n,e,t,i,s,r,o,a)}function Nx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Ux(n,e)&&(Ra(n,e)&&Ra(e,n)&&Fx(n,e)&&(nn(n.prev,n,e.prev)||nn(n,e.prev,e))||go(n,e)&&nn(n.prev,n,n.next)>0&&nn(e.prev,e,e.next)>0)}function nn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function go(n,e){return n.x===e.x&&n.y===e.y}function Am(n,e,t,i){let s=Bl(nn(n,e,t)),r=Bl(nn(n,e,i)),o=Bl(nn(t,i,n)),a=Bl(nn(t,i,e));return!!(s!==r&&o!==a||s===0&&Ol(n,t,e)||r===0&&Ol(n,i,e)||o===0&&Ol(t,n,i)||a===0&&Ol(t,e,i))}function Ol(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Bl(n){return n>0?1:n<0?-1:0}function Ux(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Am(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ra(n,e){return nn(n.prev,n,n.next)<0?nn(n,e,n.next)>=0&&nn(n,n.prev,e)>=0:nn(n,e,n.prev)<0||nn(n,n.next,e)<0}function Fx(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Rm(n,e){let t=Bu(n.i,n.x,n.y),i=Bu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ap(n,e,t,i){let s=Bu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ca(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Bu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ox(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var zu=class{static triangulate(e,t,i=2){return Mx(e,t,i)}},lr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Rp(e),Cp(i,e);let o=e.length;t.forEach(Rp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Cp(i,t[l]);let a=zu.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Rp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Cp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var mr=class n extends qt{constructor(e=new ds([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Bx,S,v=!1,T,E,_,w;if(g){S=g.getSpacedPoints(h),v=!0,u=!1;let ne=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,ne),E=new C,_=new C,w=new C}u||(m=0,d=0,p=0,x=0);let P=a.extractPoints(c),I=P.shape,N=P.holes;if(!lr.isClockWise(I)){I=I.reverse();for(let ne=0,fe=N.length;ne<fe;ne++){let ce=N[ne];lr.isClockWise(ce)&&(N[ne]=ce.reverse())}}function X(ne){let ce=10000000000000001e-36,Te=ne[0];for(let ve=1;ve<=ne.length;ve++){let st=ve%ne.length,Fe=ne[st],vt=Fe.x-Te.x,St=Fe.y-Te.y,Ct=vt*vt+St*St,O=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(Te.x),Math.abs(Te.y)),cn=ce*O*O;if(Ct<=cn){ne.splice(st,1),ve--;continue}Te=Fe}}X(I),N.forEach(X);let D=N.length,V=I;for(let ne=0;ne<D;ne++){let fe=N[ne];I=I.concat(fe)}function Z(ne,fe,ce){return fe||Ze("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(fe,ce)}let W=I.length;function re(ne,fe,ce){let Te,ve,st,Fe=ne.x-fe.x,vt=ne.y-fe.y,St=ce.x-ne.x,Ct=ce.y-ne.y,O=Fe*Fe+vt*vt,cn=Fe*Ct-vt*St;if(Math.abs(cn)>Number.EPSILON){let xt=Math.sqrt(O),zt=Math.sqrt(St*St+Ct*Ct),xe=fe.x-vt/xt,rn=fe.y+Fe/xt,Ge=ce.x-Ct/zt,Qe=ce.y+St/zt,R=((Ge-xe)*Ct-(Qe-rn)*St)/(Fe*Ct-vt*St);Te=xe+Fe*R-ne.x,ve=rn+vt*R-ne.y;let M=Te*Te+ve*ve;if(M<=2)return new me(Te,ve);st=Math.sqrt(M/2)}else{let xt=!1;Fe>Number.EPSILON?St>Number.EPSILON&&(xt=!0):Fe<-Number.EPSILON?St<-Number.EPSILON&&(xt=!0):Math.sign(vt)===Math.sign(Ct)&&(xt=!0),xt?(Te=-vt,ve=Fe,st=Math.sqrt(O)):(Te=Fe,ve=vt,st=Math.sqrt(O/2))}return new me(Te/st,ve/st)}let Y=[];for(let ne=0,fe=V.length,ce=fe-1,Te=ne+1;ne<fe;ne++,ce++,Te++)ce===fe&&(ce=0),Te===fe&&(Te=0),Y[ne]=re(V[ne],V[ce],V[Te]);let te=[],ie,Ce=Y.concat();for(let ne=0,fe=D;ne<fe;ne++){let ce=N[ne];ie=[];for(let Te=0,ve=ce.length,st=ve-1,Fe=Te+1;Te<ve;Te++,st++,Fe++)st===ve&&(st=0),Fe===ve&&(Fe=0),ie[Te]=re(ce[Te],ce[st],ce[Fe]);te.push(ie),Ce=Ce.concat(ie)}let We;if(m===0)We=lr.triangulateShape(V,N);else{let ne=[],fe=[];for(let ce=0;ce<m;ce++){let Te=ce/m,ve=d*Math.cos(Te*Math.PI/2),st=p*Math.sin(Te*Math.PI/2)+x;for(let Fe=0,vt=V.length;Fe<vt;Fe++){let St=Z(V[Fe],Y[Fe],st);He(St.x,St.y,-ve),Te===0&&ne.push(St)}for(let Fe=0,vt=D;Fe<vt;Fe++){let St=N[Fe];ie=te[Fe];let Ct=[];for(let O=0,cn=St.length;O<cn;O++){let xt=Z(St[O],ie[O],st);He(xt.x,xt.y,-ve),Te===0&&Ct.push(xt)}Te===0&&fe.push(Ct)}}We=lr.triangulateShape(ne,fe)}let K=We.length,Me=p+x;for(let ne=0;ne<W;ne++){let fe=u?Z(I[ne],Ce[ne],Me):I[ne];v?(_.copy(T.normals[0]).multiplyScalar(fe.x),E.copy(T.binormals[0]).multiplyScalar(fe.y),w.copy(S[0]).add(_).add(E),He(w.x,w.y,w.z)):He(fe.x,fe.y,0)}for(let ne=1;ne<=h;ne++)for(let fe=0;fe<W;fe++){let ce=u?Z(I[fe],Ce[fe],Me):I[fe];v?(_.copy(T.normals[ne]).multiplyScalar(ce.x),E.copy(T.binormals[ne]).multiplyScalar(ce.y),w.copy(S[ne]).add(_).add(E),He(w.x,w.y,w.z)):He(ce.x,ce.y,f/h*ne)}for(let ne=m-1;ne>=0;ne--){let fe=ne/m,ce=d*Math.cos(fe*Math.PI/2),Te=p*Math.sin(fe*Math.PI/2)+x;for(let ve=0,st=V.length;ve<st;ve++){let Fe=Z(V[ve],Y[ve],Te);He(Fe.x,Fe.y,f+ce)}for(let ve=0,st=N.length;ve<st;ve++){let Fe=N[ve];ie=te[ve];for(let vt=0,St=Fe.length;vt<St;vt++){let Ct=Z(Fe[vt],ie[vt],Te);v?He(Ct.x,Ct.y+S[h-1].y,S[h-1].x+ce):He(Ct.x,Ct.y,f+ce)}}}Ie(),ke();function Ie(){let ne=s.length/3;if(u){let fe=0,ce=W*fe;for(let Te=0;Te<K;Te++){let ve=We[Te];Wt(ve[2]+ce,ve[1]+ce,ve[0]+ce)}fe=h+m*2,ce=W*fe;for(let Te=0;Te<K;Te++){let ve=We[Te];Wt(ve[0]+ce,ve[1]+ce,ve[2]+ce)}}else{for(let fe=0;fe<K;fe++){let ce=We[fe];Wt(ce[2],ce[1],ce[0])}for(let fe=0;fe<K;fe++){let ce=We[fe];Wt(ce[0]+W*h,ce[1]+W*h,ce[2]+W*h)}}i.addGroup(ne,s.length/3-ne,0)}function ke(){let ne=s.length/3,fe=0;Se(V,fe),fe+=V.length;for(let ce=0,Te=N.length;ce<Te;ce++){let ve=N[ce];Se(ve,fe),fe+=ve.length}i.addGroup(ne,s.length/3-ne,1)}function Se(ne,fe){let ce=ne.length;for(;--ce>=0;){let Te=ce,ve=ce-1;ve<0&&(ve=ne.length-1);for(let st=0,Fe=h+m*2;st<Fe;st++){let vt=W*st,St=W*(st+1),Ct=fe+Te+vt,O=fe+ve+vt,cn=fe+ve+St,xt=fe+Te+St;Xe(Ct,O,cn,xt)}}}function He(ne,fe,ce){l.push(ne),l.push(fe),l.push(ce)}function Wt(ne,fe,ce){mt(ne),mt(fe),mt(ce);let Te=s.length/3,ve=y.generateTopUV(i,s,Te-3,Te-2,Te-1);yt(ve[0]),yt(ve[1]),yt(ve[2])}function Xe(ne,fe,ce,Te){mt(ne),mt(fe),mt(Te),mt(fe),mt(ce),mt(Te);let ve=s.length/3,st=y.generateSideWallUV(i,s,ve-6,ve-3,ve-2,ve-1);yt(st[0]),yt(st[1]),yt(st[3]),yt(st[1]),yt(st[2]),yt(st[3])}function mt(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function yt(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return zx(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Fu[s.type]().fromJSON(s)),new n(i,e.options)}},Bx={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new me(r,o),new me(a,l),new me(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],u=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new me(o,1-l),new me(c,1-f),new me(u,1-p),new me(x,1-g)]:[new me(a,1-l),new me(h,1-f),new me(d,1-p),new me(m,1-g)]}};function zx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ia=class n extends oc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Zt=class n extends qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,d=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*u-o;for(let S=0;S<c;S++){let v=S*f-r;p.push(v,-y,0),x.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let S=y+c*g,v=y+c*(g+1),T=y+1+c*(g+1),E=y+1+c*g;d.push(S,v,E),d.push(v,T,E)}this.setIndex(d),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Pa=class n extends qt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],f=e,u=(t-e)/s,d=new C,p=new me;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;d.x=f*Math.cos(g),d.y=f*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}f+=u}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let y=g+m,S=y,v=y+i+1,T=y+i+2,E=y+1;a.push(S,v,E),a.push(v,T,E)}}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var mn=class n extends qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new C,u=new C,d=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],S=g/i,v=o+S*a,T=e*Math.cos(v),E=Math.sqrt(e*e-T*T),_=0;g===0&&o===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){let P=w/t,I=s+P*r;f.x=-E*Math.cos(I),f.y=T,f.z=E*Math.sin(I),p.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(P+_,1-S),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let S=h[g][y+1],v=h[g][y],T=h[g+1][y],E=h[g+1][y+1];(g!==0||o>0)&&d.push(S,v,E),(g!==i-1||l<Math.PI)&&d.push(v,T,E)}this.setIndex(d),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function br(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Ip(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Ip(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function qn(n){let e={};for(let t=0;t<n.length;t++){let i=br(n[t]);for(let s in i)e[s]=i[s]}return e}function Ip(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function kx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}var xh={clone:br,merge:qn},Hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hx,this.fragmentShader=Gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=kx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[i].value=new me().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Qt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new lt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},dc=class extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ut=class extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gr=class extends ut{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return cr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){cr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var pc=class extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mc=class extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function zl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var zs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},gc=class extends zs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lu,endingEnd:Lu}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Du:r=e,a=2*t-i;break;case Nu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Du:o=e,l=2*i-t;break;case Nu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,y=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,S=(-1-d)*m+(1.5+d)*x+.5*p,v=d*m-d*x;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+y*o[c+T]+S*o[l+T]+v*o[f+T];return r}},xc=class extends zs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},_c=class extends zs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yc=class extends zs{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(i-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let u=a*2,d=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=d*u+p*2,y=f[g],S=f[g+1],v=e*u+p*2,T=h[v],E=h[v+1],_=Wx(i,t,y,T,s);r[p]=Cm(_,x,S,E,m)}return r}};function Cm(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Vx(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Wx(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=Cm(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Vx(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var di=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qr(t,this.TimeBufferType),this.values=Qr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qr(e.times,Array),values:Qr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),zl(e.settings)&&(i.settings={inTangents:Qr(e.settings.inTangents,Array),outTangents:Qr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new yc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ca:t=this.InterpolantFactoryMethodDiscrete;break;case Ql:t=this.InterpolantFactoryMethodLinear;break;case Gl:t=this.InterpolantFactoryMethodSmooth;break;case Pu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ve("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return Ql;case this.InterpolantFactoryMethodSmooth:return Gl;case this.InterpolantFactoryMethodBezier:return Pu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;zl(this.settings)&&(Pp(this.settings.inTangents,e),Pp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;zl(this.settings)&&(Lp(this.settings.inTangents,e),Lp(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ze("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Dg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Gl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,u=f-i,d=f+i;for(let p=0;p!==i;++p){let x=t[f+p];if(x!==t[u+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,u=o*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,zl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Pp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Lp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}di.prototype.ValueTypeName="";di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Ql;var ks=class extends di{constructor(e,t,i){super(e,t,i)}};ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=ca;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends di{constructor(e,t,i,s){super(e,t,i,s)}};vc.prototype.ValueTypeName="color";var Mc=class extends di{constructor(e,t,i,s){super(e,t,i,s)}};Mc.prototype.ValueTypeName="number";var Sc=class extends zs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},La=class extends di{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Sc(this.times,this.values,this.getValueSize(),e)}};La.prototype.ValueTypeName="quaternion";La.prototype.InterpolantFactoryMethodSmooth=void 0;var Hs=class extends di{constructor(e,t,i){super(e,t,i)}};Hs.prototype.ValueTypeName="string";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=ca;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var bc=class extends di{constructor(e,t,i,s){super(e,t,i,s)}};bc.prototype.ValueTypeName="vector";var wc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Im=new wc,Ec=class{constructor(e){this.manager=e!==void 0?e:Im,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ec.DEFAULT_MATERIAL_NAME="__DEFAULT";var Da=class extends fn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Na=class extends Da{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Iu=new lt,Dp=new C,Np=new C,Tc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dp),Np.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Np),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Iu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Iu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===so||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},kl=new C,Hl=new Xn,Hi=new C,Ua=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kl,Hl,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,Hl,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(kl,Hl,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,Hl,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fs=new C,Up=new me,Fp=new me,ti=class extends Ua{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,t){return this.getViewBounds(e,Up,Fp),t.subVectors(Fp,Up)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ra*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Fa=class extends Ua{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ku=class extends Tc{constructor(){super(new Fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oa=class extends Da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new ku}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var jr=-90,eo=1,xo=class extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ti(jr,eo,e,t);s.layers=this.layers,this.add(s);let r=new ti(jr,eo,e,t);r.layers=this.layers,this.add(r);let o=new ti(jr,eo,e,t);o.layers=this.layers,this.add(o);let a=new ti(jr,eo,e,t);a.layers=this.layers,this.add(a);let l=new ti(jr,eo,e,t);l.layers=this.layers,this.add(l);let c=new ti(jr,eo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===so)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ac=class extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Mf="\\[\\]\\.:\\/",Xx=new RegExp("["+Mf+"]","g"),Sf="[^"+Mf+"]",qx="[^"+Mf.replace("\\.","")+"]",Yx=/((?:WC+[\/:])*)/.source.replace("WC",Sf),Zx=/(WCOD+)?/.source.replace("WCOD",qx),Jx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sf),Kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sf),$x=new RegExp("^"+Yx+Zx+Jx+Kx+"$"),Qx=["material","materials","bones","map"],Hu=class{constructor(e,t,i){let s=i||Xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Xt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xx,"")}static parseTrackName(e){let t=$x.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Qx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xt.Composite=Hu;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ib=new Float32Array(1);var Op=new lt,Ba=class{constructor(e,t,i=0,s=1/0){this.ray=new hr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Op.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Op),this}intersectObject(e,t=!0,i=[]){return Gu(e,this,i,t),i.sort(Bp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Gu(e[s],this,i,t);return i.sort(Bp),i}};function Bp(n,e){return n.distance-e.distance}function Gu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Gu(r[o],e,t,!0)}}var Rf=class Rf{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Rf.prototype.isMatrix2=!0;var Vu=Rf;function bf(n,e,t,i){let s=jx(i);switch(t){case lf:return n*e;case Uc:return n*e/s.components*s.byteLength;case Fc:return n*e/s.components*s.byteLength;case Ws:return n*e*2/s.components*s.byteLength;case Oc:return n*e*2/s.components*s.byteLength;case cf:return n*e*3/s.components*s.byteLength;case Ni:return n*e*4/s.components*s.byteLength;case Bc:return n*e*4/s.components*s.byteLength;case Ha:case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Va:case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kc:case Gc:return Math.max(n,16)*Math.max(e,8)/4;case zc:case Hc:return Math.max(n,8)*Math.max(e,8)/2;case Vc:case Wc:case qc:case Yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xc:case Xa:case Zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $c:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case eh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case th:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ih:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case oh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ah:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ch:case hh:case uh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fh:case dh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case qa:case ph:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jx(n){switch(n){case oi:case sf:return{byteLength:1,components:1};case vo:case rf:case Di:return{byteLength:2,components:1};case Dc:case Nc:return{byteLength:2,components:4};case Li:case Lc:case Si:return{byteLength:4,components:1};case of:case af:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Qm(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function o_(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],x=f[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let x=f[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var a_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,c_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,g_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,__=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v_=`#ifdef USE_IRIDESCENCE
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
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
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
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,A_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,R_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,C_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,I_=`#define PI 3.141592653589793
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
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,P_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,L_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F_="gl_FragColor = linearToOutputTexel( gl_FragColor );",O_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,H_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,V_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Z_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,Q_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,j_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ey=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ry=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ay=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ly=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,my=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_y=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vy=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,My=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,by=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ey=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Iy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Fy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,By=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jy=`#ifdef USE_SKINNING
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
#endif`,Ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$y=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tv=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,av=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,dv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,bv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ev=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Av=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Cv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Pv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Dv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,zv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:a_,alphahash_pars_fragment:l_,alphamap_fragment:c_,alphamap_pars_fragment:h_,alphatest_fragment:u_,alphatest_pars_fragment:f_,aomap_fragment:d_,aomap_pars_fragment:p_,batching_pars_vertex:m_,batching_vertex:g_,begin_vertex:x_,beginnormal_vertex:__,bsdfs:y_,iridescence_fragment:v_,bumpmap_pars_fragment:M_,clipping_planes_fragment:S_,clipping_planes_pars_fragment:b_,clipping_planes_pars_vertex:w_,clipping_planes_vertex:E_,color_fragment:T_,color_pars_fragment:A_,color_pars_vertex:R_,color_vertex:C_,common:I_,defaultnormal_vertex:P_,displacementmap_pars_vertex:L_,displacementmap_vertex:D_,emissivemap_fragment:N_,emissivemap_pars_fragment:U_,colorspace_fragment:F_,colorspace_pars_fragment:O_,envmap_fragment:B_,envmap_common_pars_fragment:z_,envmap_pars_fragment:k_,envmap_pars_vertex:H_,envmap_physical_pars_fragment:Q_,envmap_vertex:G_,fog_vertex:V_,fog_pars_vertex:W_,fog_fragment:X_,fog_pars_fragment:q_,gradientmap_pars_fragment:Y_,lightmap_pars_fragment:Z_,lights_lambert_fragment:J_,lights_lambert_pars_fragment:K_,lights_pars_begin:$_,lights_toon_fragment:j_,lights_toon_pars_fragment:ey,lights_phong_fragment:ty,lights_phong_pars_fragment:ny,lights_physical_fragment:iy,lights_physical_pars_fragment:sy,lights_fragment_begin:ry,lights_fragment_maps:oy,lights_fragment_end:ay,lightprobes_pars_fragment:ly,logdepthbuf_fragment:cy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:uy,logdepthbuf_vertex:fy,map_fragment:dy,map_pars_fragment:py,map_particle_fragment:my,map_particle_pars_fragment:gy,metalnessmap_fragment:xy,metalnessmap_pars_fragment:_y,morphinstance_vertex:yy,morphcolor_vertex:vy,morphnormal_vertex:My,morphtarget_pars_vertex:Sy,morphtarget_vertex:by,normal_fragment_begin:wy,normal_fragment_maps:Ey,normal_pars_fragment:Ty,normal_pars_vertex:Ay,normal_vertex:Ry,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:Iy,clearcoat_normal_fragment_maps:Py,clearcoat_pars_fragment:Ly,iridescence_pars_fragment:Dy,opaque_fragment:Ny,packing:Uy,premultiplied_alpha_fragment:Fy,project_vertex:Oy,dithering_fragment:By,dithering_pars_fragment:zy,roughnessmap_fragment:ky,roughnessmap_pars_fragment:Hy,shadowmap_pars_fragment:Gy,shadowmap_pars_vertex:Vy,shadowmap_vertex:Wy,shadowmask_pars_fragment:Xy,skinbase_vertex:qy,skinning_pars_vertex:Yy,skinning_vertex:Zy,skinnormal_vertex:Jy,specularmap_fragment:Ky,specularmap_pars_fragment:$y,tonemapping_fragment:Qy,tonemapping_pars_fragment:jy,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:sv,worldpos_vertex:rv,background_vert:ov,background_frag:av,backgroundCube_vert:lv,backgroundCube_frag:cv,cube_vert:hv,cube_frag:uv,depth_vert:fv,depth_frag:dv,distance_vert:pv,distance_frag:mv,equirect_vert:gv,equirect_frag:xv,linedashed_vert:_v,linedashed_frag:yv,meshbasic_vert:vv,meshbasic_frag:Mv,meshlambert_vert:Sv,meshlambert_frag:bv,meshmatcap_vert:wv,meshmatcap_frag:Ev,meshnormal_vert:Tv,meshnormal_frag:Av,meshphong_vert:Rv,meshphong_frag:Cv,meshphysical_vert:Iv,meshphysical_frag:Pv,meshtoon_vert:Lv,meshtoon_frag:Dv,points_vert:Nv,points_frag:Uv,shadow_vert:Fv,shadow_frag:Ov,sprite_vert:Bv,sprite_frag:zv},we={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Ki={basic:{uniforms:qn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:qn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:qn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:qn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:qn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:qn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:qn([we.points,we.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:qn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:qn([we.common,we.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:qn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:qn([we.sprite,we.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:qn([we.common,we.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:qn([we.lights,we.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ki.physical={uniforms:qn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var _h={r:0,b:0,g:0},kv=new lt,jm=new je;jm.set(-1,0,0,0,1,0,0,0,1);function Hv(n,e,t,i,s,r){let o=new Ne(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let v=y.backgroundBlurriness>0;S=e.get(S,v)}return S}function p(y){let S=!1,v=d(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),S=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,S){let v=d(S);v&&v.isCubeTexture?(c===void 0&&(c=new Je(new Ye(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:br(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kv.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jm),c.material.toneMapped=Et.getTransfer(v.colorSpace)!==Dt,(h!==v||f!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Je(new Zt(2,2),new ri({name:"BackgroundMaterial",uniforms:br(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Et.getTransfer(v.colorSpace)!==Dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(_h,vf(n)),t.buffers.color.setClear(_h.r,_h.g,_h.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Gv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(N,z,X,D,V){let Z=!1,W=f(N,D,X,z);r!==W&&(r=W,c(r.object)),Z=d(N,D,X,V),Z&&p(N,D,X,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(N,z,X,D),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function f(N,z,X,D){let V=D.wireframe===!0,Z=i[z.id];Z===void 0&&(Z={},i[z.id]=Z);let W=N.isInstancedMesh===!0?N.id:0,re=Z[W];re===void 0&&(re={},Z[W]=re);let Y=re[X.id];Y===void 0&&(Y={},re[X.id]=Y);let te=Y[V];return te===void 0&&(te=u(l()),Y[V]=te),te}function u(N){let z=[],X=[],D=[];for(let V=0;V<t;V++)z[V]=0,X[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:D,object:N,attributes:{},index:null}}function d(N,z,X,D){let V=r.attributes,Z=z.attributes,W=0,re=X.getAttributes();for(let Y in re)if(re[Y].location>=0){let ie=V[Y],Ce=Z[Y];if(Ce===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(Ce=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(Ce=N.instanceColor)),ie===void 0||ie.attribute!==Ce||Ce&&ie.data!==Ce.data)return!0;W++}return r.attributesNum!==W||r.index!==D}function p(N,z,X,D){let V={},Z=z.attributes,W=0,re=X.getAttributes();for(let Y in re)if(re[Y].location>=0){let ie=Z[Y];ie===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor));let Ce={};Ce.attribute=ie,ie&&ie.data&&(Ce.data=ie.data),V[Y]=Ce,W++}r.attributes=V,r.attributesNum=W,r.index=D}function x(){let N=r.newAttributes;for(let z=0,X=N.length;z<X;z++)N[z]=0}function m(N){g(N,0)}function g(N,z){let X=r.newAttributes,D=r.enabledAttributes,V=r.attributeDivisors;X[N]=1,D[N]===0&&(n.enableVertexAttribArray(N),D[N]=1),V[N]!==z&&(n.vertexAttribDivisor(N,z),V[N]=z)}function y(){let N=r.newAttributes,z=r.enabledAttributes;for(let X=0,D=z.length;X<D;X++)z[X]!==N[X]&&(n.disableVertexAttribArray(X),z[X]=0)}function S(N,z,X,D,V,Z,W){W===!0?n.vertexAttribIPointer(N,z,X,V,Z):n.vertexAttribPointer(N,z,X,D,V,Z)}function v(N,z,X,D){x();let V=D.attributes,Z=X.getAttributes(),W=z.defaultAttributeValues;for(let re in Z){let Y=Z[re];if(Y.location>=0){let te=V[re];if(te===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(te=N.instanceColor)),te!==void 0){let ie=te.normalized,Ce=te.itemSize,We=e.get(te);if(We===void 0)continue;let K=We.buffer,Me=We.type,Ie=We.bytesPerElement,ke=Me===n.INT||Me===n.UNSIGNED_INT||te.gpuType===Lc;if(te.isInterleavedBufferAttribute){let Se=te.data,He=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,Wt=te.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Xe=0;Xe<Y.locationSize;Xe++)g(Y.location+Xe,Se.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Xe=0;Xe<Y.locationSize;Xe++)m(Y.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Xe=0;Xe<Y.locationSize;Xe++)S(Y.location+Xe,Ce/Y.locationSize,Me,ie,He*Ie,(Wt+Ce/Y.locationSize*Xe)*Ie,ke)}else{if(te.isInstancedBufferAttribute){for(let Se=0;Se<Y.locationSize;Se++)g(Y.location+Se,te.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Se=0;Se<Y.locationSize;Se++)m(Y.location+Se);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Se=0;Se<Y.locationSize;Se++)S(Y.location+Se,Ce/Y.locationSize,Me,ie,Ce*Ie,Ce/Y.locationSize*Se*Ie,ke)}}else if(W!==void 0){let ie=W[re];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(Y.location,ie);break;case 3:n.vertexAttrib3fv(Y.location,ie);break;case 4:n.vertexAttrib4fv(Y.location,ie);break;default:n.vertexAttrib1fv(Y.location,ie)}}}}y()}function T(){P();for(let N in i){let z=i[N];for(let X in z){let D=z[X];for(let V in D){let Z=D[V];for(let W in Z)h(Z[W].object),delete Z[W];delete D[V]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;let z=i[N.id];for(let X in z){let D=z[X];for(let V in D){let Z=D[V];for(let W in Z)h(Z[W].object),delete Z[W];delete D[V]}}delete i[N.id]}function _(N){for(let z in i){let X=i[z];for(let D in X){let V=X[D];if(V[N.id]===void 0)continue;let Z=V[N.id];for(let W in Z)h(Z[W].object),delete Z[W];delete V[N.id]}}}function w(N){for(let z in i){let X=i[z],D=N.isInstancedMesh===!0?N.id:0,V=X[D];if(V!==void 0){for(let Z in V){let W=V[Z];for(let re in W)h(W[re].object),delete W[re];delete V[Z]}delete X[D],Object.keys(X).length===0&&delete i[z]}}}function P(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Vv(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Wv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Ni&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let w=_===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==oi&&_!==Si&&!w&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,maxSamples:T,samples:E}}function Xv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Ii,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,g=n.get(f);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,S=y*4,v=g.clippingState||null;l.value=v,v=h(p,u,S,d);for(let T=0;T!==S;++T)v[T]=t[T];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,p){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=d+x*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,v=d;S!==x;++S,v+=4)o.copy(f[S]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Ja=class extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ya(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ye(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:On,blending:_r});r.uniforms.tEquirect.value=t;let o=new Je(s,r),a=t.minFilter;return t.minFilter===ps&&(t.minFilter=ni),new xo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Pm=256,qv=3,Yv=20,e0=256,t0=16,Zv=3,Jv=new C,Kv=new Ne,So=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new xo(1,10,null),this._boxMesh=new Je(new Ye(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Jv}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Kv));let m=new xo(i,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Pm,xf(e))}_fromTexture(e,t){e.mapping===vr||e.mapping===yo?this._setSize(e.image.length===0?Pm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Lm(e,!1,!1),i=Math.log2(e)-qv;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Lm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===vr||e.mapping===yo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Dm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=$v(),this._integrationMaterial=Qv());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/t0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Zv)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(e0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=jv());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Lm(n,e,t){return new Ja(n,{minFilter:ps,generateMipmaps:e,type:Di,colorSpace:ha,depthBuffer:t})}function Ka(n,e,t){return new ri({name:n,uniforms:e,vertexShader:ft.cube_vert,fragmentShader:t,side:On,blending:_r,depthTest:!1,depthWrite:!1})}function $v(){return Ka("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${e0}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Qv(){return Ka("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:t0}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function jv(){return Ka("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Yv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Dm(){return Ka("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Nm(){return Ka("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function eM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Cc||d===Ic)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new Ja(p.height);return x.fromEquirectangularTexture(n,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,p=d===Cc||d===Ic,x=d===vr||d===yo;if(p||x){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new So(n)),m=p?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new So(n)),m=p?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,d){return d===Cc?u.mapping=vr:d===Ic&&(u.mapping=yo),u}function l(u){let d=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function tM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&cr("WebGLRenderer: "+i+" extension not supported."),s}}}function nM(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)e.update(x[m],n.ARRAY_BUFFER)}function f(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,S=m.count>=65535?ga:ma,v=new S(Math.ceil(y/3)*6,1),T=v.array;if(x!==null){let _=x.array;g=x.version;for(let w=0,P=0;w<y;w+=3){let I=_[w+0],N=_[w+1],z=_[w+2];T[P++]=I,T[P++]=N,T[P++]=N,T[P++]=z,T[P++]=z,T[P++]=I}}else{g=m.version;for(let _=0,w=0;_<y;_+=3){let P=_+0,I=_+1,N=_+2;T[w++]=P,T[w++]=I,T[w++]=I,T[w++]=N,T[w++]=N,T[w++]=P}}v.version=g;let E=r.get(p);E&&e.remove(E),r.set(p,v)}function u(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&f(p)}else f(p);return r.get(p)}function d(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function iM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*o),t.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*o,d),t.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=u[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function sM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function rM(n,e,t){let i=new WeakMap,s=new Qt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==f){let P=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;d===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*T*4*f),_=new da(E,v,T,f);_.type=Si,_.needsUpdate=!0;let w=S*4;for(let I=0;I<f;I++){let N=m[I],z=g[I],X=y[I],D=v*T*4*I;for(let V=0;V<N.count;V++){let Z=V*w;d===!0&&(s.fromBufferAttribute(N,V),E[D+Z+0]=s.x,E[D+Z+1]=s.y,E[D+Z+2]=s.z,E[D+Z+3]=0),p===!0&&(s.fromBufferAttribute(z,V),E[D+Z+4]=s.x,E[D+Z+5]=s.y,E[D+Z+6]=s.z,E[D+Z+7]=0),x===!0&&(s.fromBufferAttribute(X,V),E[D+Z+8]=s.x,E[D+Z+9]=s.y,E[D+Z+10]=s.z,E[D+Z+11]=X.itemSize===4?s.w:1)}}u={count:f,texture:_,size:new me(v,T)},i.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function oM(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var aM={[Ku]:"LINEAR_TONE_MAPPING",[$u]:"REINHARD_TONE_MAPPING",[Qu]:"CINEON_TONE_MAPPING",[za]:"ACES_FILMIC_TONE_MAPPING",[ef]:"AGX_TONE_MAPPING",[tf]:"NEUTRAL_TONE_MAPPING",[ju]:"CUSTOM_TONE_MAPPING"};function lM(n,e,t,i,s,r){let o=new ui(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new qt;h.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ht([0,2,0,0,2,0],2));let f=new dc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Je(h,f),d=new Fa(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,y=null,S=[],v=!1;this.setSize=function(T,E){o.setSize(T,E),a!==null&&a.setSize(T,E),l!==null&&l.setSize(T,E);for(let _=0;_<S.length;_++){let w=S[_];w.setSize&&w.setSize(T,E)}},this.setEffects=function(T){S=T,v=S.length>0&&S[0].isRenderPass===!0;let E=o.width,_=o.height;S.length>0&&a===null&&(a=new ui(E,_,{type:Di,depthBuffer:!1,stencilBuffer:!1}),l=new ui(E,_,{type:Di,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&S.some(P=>P.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new fs(E,_),r===!0&&(c.format=ms,c.type=Mr)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let P=0;P<S.length;P++){let I=S[P];I.setSize&&I.setSize(E,_),w&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(T,E){if(m||T.toneMapping===Zi&&S.length===0)return!1;if(y=E,E!==null){let _=E.width,w=E.height;(o.width!==_||o.height!==w)&&this.setSize(_,w)}return v===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=Zi,!0},this.hasRenderPass=function(){return v},this.end=function(T,E){T.toneMapping=g,m=!0;let _=o,w=a;for(let P=0;P<S.length;P++){let I=S[P];I.enabled!==!1&&(I.render(T,w,_,E),I.needsSwap!==!1&&(_=w,w=w===a?l:a))}if(p!==T.outputColorSpace||x!==T.toneMapping){p=T.outputColorSpace,x=T.toneMapping,f.defines={},Et.getTransfer(p)===Dt&&(f.defines.SRGB_TRANSFER="");let P=aM[x];P&&(f.defines[P]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(y),T.render(u,d),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var n0=new ii,i0=new fs(1,1),s0=new va(1),r0=new da,o0=new tc,a0=new ya,Um=[],Fm=[],Om=new Float32Array(16),Bm=new Float32Array(9),zm=new Float32Array(4);function bo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Um[s];if(r===void 0&&(r=new Float32Array(s),Um[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function gn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Mh(n,e){let t=Fm[e];t===void 0&&(t=new Int32Array(e),Fm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2fv(this.addr,e),xn(t,e)}}function uM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;n.uniform3fv(this.addr,e),xn(t,e)}}function fM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4fv(this.addr,e),xn(t,e)}}function dM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(gn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(gn(t,i))return;zm.set(i),n.uniformMatrix2fv(this.addr,!1,zm),xn(t,i)}}function pM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(gn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(gn(t,i))return;Bm.set(i),n.uniformMatrix3fv(this.addr,!1,Bm),xn(t,i)}}function mM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(gn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(gn(t,i))return;Om.set(i),n.uniformMatrix4fv(this.addr,!1,Om),xn(t,i)}}function gM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2iv(this.addr,e),xn(t,e)}}function _M(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;n.uniform3iv(this.addr,e),xn(t,e)}}function yM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4iv(this.addr,e),xn(t,e)}}function vM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function MM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2uiv(this.addr,e),xn(t,e)}}function SM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;n.uniform3uiv(this.addr,e),xn(t,e)}}function bM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4uiv(this.addr,e),xn(t,e)}}function Sh(n){return n.version===0&&(n.compareFunction=ff,n.needsUpdate=!0),n}function wM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Sh(i0):r=n0,t.setTexture2D(e||r,s)}function EM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||o0,s)}function TM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Sh(s0):r=a0,t.setTextureCube(e||r,s)}function AM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||r0,s)}function RM(n){switch(n){case 5126:return cM;case 35664:return hM;case 35665:return uM;case 35666:return fM;case 35674:return dM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return xM;case 35668:case 35672:return _M;case 35669:case 35673:return yM;case 5125:return vM;case 36294:return MM;case 36295:return SM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return AM}}function CM(n,e){n.uniform1fv(this.addr,e)}function IM(n,e){let t=bo(e,this.size,2);n.uniform2fv(this.addr,t)}function PM(n,e){let t=bo(e,this.size,3);n.uniform3fv(this.addr,t)}function LM(n,e){let t=bo(e,this.size,4);n.uniform4fv(this.addr,t)}function DM(n,e){let t=bo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function NM(n,e){let t=bo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function UM(n,e){let t=bo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function FM(n,e){n.uniform1iv(this.addr,e)}function OM(n,e){n.uniform2iv(this.addr,e)}function BM(n,e){n.uniform3iv(this.addr,e)}function zM(n,e){n.uniform4iv(this.addr,e)}function kM(n,e){n.uniform1uiv(this.addr,e)}function HM(n,e){n.uniform2uiv(this.addr,e)}function GM(n,e){n.uniform3uiv(this.addr,e)}function VM(n,e){n.uniform4uiv(this.addr,e)}function WM(n,e,t){let i=this.cache,s=e.length,r=Mh(t,s);gn(i,r)||(n.uniform1iv(this.addr,r),xn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Sh(i0):o=n0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function XM(n,e,t){let i=this.cache,s=e.length,r=Mh(t,s);gn(i,r)||(n.uniform1iv(this.addr,r),xn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||o0,r[o])}function qM(n,e,t){let i=this.cache,s=e.length,r=Mh(t,s);gn(i,r)||(n.uniform1iv(this.addr,r),xn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Sh(s0):o=a0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function YM(n,e,t){let i=this.cache,s=e.length,r=Mh(t,s);gn(i,r)||(n.uniform1iv(this.addr,r),xn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||r0,r[o])}function ZM(n){switch(n){case 5126:return CM;case 35664:return IM;case 35665:return PM;case 35666:return LM;case 35674:return DM;case 35675:return NM;case 35676:return UM;case 5124:case 35670:return FM;case 35667:case 35671:return OM;case 35668:case 35672:return BM;case 35669:case 35673:return zM;case 5125:return kM;case 36294:return HM;case 36295:return GM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}var Pf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RM(t.type)}},Lf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZM(t.type)}},Df=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Cf=/(\w+)(\])?(\[|\.)?/g;function km(n,e){n.seq.push(e),n.map[e.id]=e}function JM(n,e,t){let i=n.name,s=i.length;for(Cf.lastIndex=0;;){let r=Cf.exec(i),o=Cf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){km(t,c===void 0?new Pf(a,n,e):new Lf(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Df(a),km(t,f)),t=f}}}var Mo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);JM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Hm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var KM=37297,$M=0;function QM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Gm=new je;function jM(n){Et._getMatrix(Gm,Et.workingColorSpace,n);let e=`mat3( ${Gm.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(n)){case ua:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Vm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+QM(n.getShaderSource(e),a)}else return r}function eS(n,e){let t=jM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var tS={[Ku]:"Linear",[$u]:"Reinhard",[Qu]:"Cineon",[za]:"ACESFilmic",[ef]:"AgX",[tf]:"Neutral",[ju]:"Custom"};function nS(n,e){let t=tS[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yh=new C;function iS(){Et.getLuminanceCoefficients(yh);let n=yh.x.toFixed(4),e=yh.y.toFixed(4),t=yh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function rS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Za(n){return n!==""}function Wm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Xm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var aS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nf(n){return n.replace(aS,lS)}function lS(n,e){let t=ft[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Nf(t)}var cS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(n){return n.replace(cS,hS)}function hS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ym(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var uS={[xr]:"SHADOWMAP_TYPE_PCF",[_o]:"SHADOWMAP_TYPE_VSM"};function fS(n){return uS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var dS={[yo]:"ENVMAP_MODE_REFRACTION"};function pS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":dS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mS={[Ju]:"ENVMAP_BLENDING_MULTIPLY",[om]:"ENVMAP_BLENDING_MIX",[am]:"ENVMAP_BLENDING_ADD"};function gS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":mS[n.combine]||"ENVMAP_BLENDING_NONE"}function xS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=fS(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=pS(t),f=gS(t),u=sS(t),d=rS(r),p=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Za).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Za).join(`
`),m.length>0&&(m+=`
`)):(x=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),m=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?ft.tonemapping_pars_fragment:"",t.toneMapping!==Zi?nS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,eS("linearToOutputTexel",t.outputColorSpace),iS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Za).join(`
`)),o=Nf(o),o=Wm(o,t),o=Xm(o,t),a=Nf(a),a=Wm(a,t),a=Xm(a,t),o=qm(o),a=qm(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+x+o,S=g+m+a,v=Hm(s,s.VERTEX_SHADER,y),T=Hm(s,s.FRAGMENT_SHADER,S);s.attachShader(p,v),s.attachShader(p,T),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(I){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(p)||"",z=s.getShaderInfoLog(v)||"",X=s.getShaderInfoLog(T)||"",D=N.trim(),V=z.trim(),Z=X.trim(),W=!0,re=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,v,T);else{let Y=Vm(s,v,"vertex"),te=Vm(s,T,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+Y+`
`+te)}else D!==""?Ve("WebGLProgram: Program Info Log:",D):(V===""||Z==="")&&(re=!1);re&&(I.diagnostics={runnable:W,programLog:D,vertexShader:{log:V,prefix:x},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(v),s.deleteShader(T),_=new Mo(s,p),w=oS(s,p)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(p,KM)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$M++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=T,this}var _S=0,Uf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ff(e),t.set(e,i)),i}},Ff=class{constructor(e){this.id=_S++,this.code=e,this.usedTimes=0}};function yS(n){return n===Ws||n===Xa||n===qa}function vS(n,e,t,i,s,r){let o=new lo,a=new Uf,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,w,P,I,N,z){let X=I.fog,D=N.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=e.get(_.envMap||V,Z),re=u[_.type],Y=i.precision;_.precision!==null&&(Y=i.getMaxPrecision(_.precision),Y!==_.precision&&Ve("WebGLProgram.getParameters:",_.precision,"not supported, using",Y,"instead."));let te=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ie=te!==void 0?te.length:0,Ce=0;D.morphAttributes.position!==void 0&&(Ce=1),D.morphAttributes.normal!==void 0&&(Ce=2),D.morphAttributes.color!==void 0&&(Ce=3);let We,K,Me,Ie;if(re){let be=Ki[re];We=be.vertexShader,K=be.fragmentShader}else{We=_.vertexShader,K=_.fragmentShader;let be=a.getVertexShaderStage(_),Ft=a.getFragmentShaderStage(_);a.update(_,be,Ft),Me=be.id,Ie=Ft.id}let ke=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),He=N.isInstancedMesh===!0,Wt=N.isBatchedMesh===!0,Xe=!!_.map,mt=!!_.matcap,yt=!!W,ne=yt&&W.isPMREMTexture===!0,fe=!!_.aoMap,ce=!!_.lightMap,Te=!!_.bumpMap&&_.wireframe===!1,ve=!!_.normalMap,st=!!_.displacementMap,Fe=!!_.emissiveMap,vt=!!_.metalnessMap,St=!!_.roughnessMap,Ct=_.anisotropy>0,O=_.clearcoat>0,cn=_.diffuseRoughness>0,xt=_.dispersion>0,zt=_.retroreflectivity>0,xe=_.iridescence>0,rn=_.sheen>0,Ge=_.transmission>0,Qe=Ct&&!!_.anisotropyMap,R=O&&!!_.clearcoatMap,M=O&&!!_.clearcoatNormalMap,H=O&&!!_.clearcoatRoughnessMap,oe=cn&&!!_.diffuseRoughnessMap,ee=xe&&!!_.iridescenceMap,he=xe&&!!_.iridescenceThicknessMap,_e=rn&&!!_.sheenColorMap,$=rn&&!!_.sheenRoughnessMap,Q=!!_.specularMap,de=!!_.specularColorMap,L=!!_.specularIntensityMap,j=Ge&&!!_.transmissionMap,J=Ge&&!!_.thicknessMap,pe=!!_.gradientMap,le=!!_.alphaMap,ue=_.alphaTest>0,Oe=!!_.alphaHash,ct=!!_.extensions,ae=Zi;_.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(ae=n.toneMapping);let ze=ne?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,at={shaderID:re,shaderType:_.type,shaderName:_.name,vertexShader:We,fragmentShader:K,defines:_.defines,customVertexShaderID:Me,customFragmentShaderID:Ie,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Y,batching:Wt,batchingColor:Wt&&N._colorsTexture!==null,instancing:He,instancingColor:He&&N.instanceColor!==null,instancingMorph:He&&N.morphTexture!==null,outputColorSpace:ke===null?n.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Xe,matcap:mt,envMap:yt,envMapMode:yt&&W.mapping,envMapPMREM:ne,envMapMaxLod:ne?ze.length-1:null,envMapSize:ne?ze[0].width:null,aoMap:fe,lightMap:ce,bumpMap:Te,normalMap:ve,displacementMap:st,emissiveMap:Fe,normalMapObjectSpace:ve&&_.normalMapType===hm,normalMapTangentSpace:ve&&_.normalMapType===mh,packedNormalMap:ve&&_.normalMapType===mh&&yS(_.normalMap.format),metalnessMap:vt,roughnessMap:St,anisotropy:Ct,anisotropyMap:Qe,clearcoat:O,clearcoatMap:R,clearcoatNormalMap:M,clearcoatRoughnessMap:H,diffuseRoughness:cn,diffuseRoughnessMap:oe,dispersion:xt,retroreflection:zt,iridescence:xe,iridescenceMap:ee,iridescenceThicknessMap:he,sheen:rn,sheenColorMap:_e,sheenRoughnessMap:$,specularMap:Q,specularColorMap:de,specularIntensityMap:L,transmission:Ge,transmissionMap:j,thicknessMap:J,gradientMap:pe,opaque:_.transparent===!1&&_.blending===Vs&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:ue,alphaHash:Oe,combine:_.combine,mapUv:Xe&&d(_.map.channel),aoMapUv:fe&&d(_.aoMap.channel),lightMapUv:ce&&d(_.lightMap.channel),bumpMapUv:Te&&d(_.bumpMap.channel),normalMapUv:ve&&d(_.normalMap.channel),displacementMapUv:st&&d(_.displacementMap.channel),emissiveMapUv:Fe&&d(_.emissiveMap.channel),metalnessMapUv:vt&&d(_.metalnessMap.channel),roughnessMapUv:St&&d(_.roughnessMap.channel),anisotropyMapUv:Qe&&d(_.anisotropyMap.channel),clearcoatMapUv:R&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:he&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&d(_.sheenRoughnessMap.channel),specularMapUv:Q&&d(_.specularMap.channel),specularColorMapUv:de&&d(_.specularColorMap.channel),specularIntensityMapUv:L&&d(_.specularIntensityMap.channel),transmissionMapUv:j&&d(_.transmissionMap.channel),thicknessMapUv:J&&d(_.thicknessMap.channel),alphaMapUv:le&&d(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ve||Ct),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(Xe||le),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&ve===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ce,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:Xe&&_.map.isVideoTexture===!0&&Et.getTransfer(_.map.colorSpace)===Dt,decodeVideoTextureEmissive:Fe&&_.emissiveMap.isVideoTexture===!0&&Et.getTransfer(_.emissiveMap.colorSpace)===Dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Bn,flipSided:_.side===On,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ct&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&_.extensions.multiDraw===!0||Wt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function x(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)w.push(P),w.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(m(w,_),g(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function m(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function g(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let w=u[_.type],P;if(w){let I=Ki[w];P=xh.clone(I.uniforms)}else P=_.uniforms;return P}function S(_,w){let P=h.get(w);return P!==void 0?++P.usedTimes:(P=new xS(n,w,_,s),c.push(P),h.set(w,P)),P}function v(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:S,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:E}}function MS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function SS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Zm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,p,x,m,g){let y=n[e];return y===void 0?(y={id:u.id,object:u,geometry:d,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},n[e]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=p,y.materialVariant=o(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=m,y.group=g),e++,y}function l(u,d,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let S=a(u,d,p,x,m,g);p.transmission>0?i.push(S):p.transparent===!0?s.push(S):t.push(S)}function c(u,d,p,x,m,g){let y=a(u,d,p,x,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,d){t.length>1&&t.sort(u||SS),i.length>1&&i.sort(d||Zm),s.length>1&&s.sort(d||Zm)}function f(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function bS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Jm,n.set(i,[o])):s>=r.length?(o=new Jm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function wS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new Ne};break;case"SpotLight":t={position:new C,direction:new C,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function ES(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var TS=0;function AS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RS(n){let e=new wS,t=ES(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new lt,o=new lt;function a(c){let h=0,f=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,y=0,S=0,v=0,T=0,E=0,_=0,w=0,P=0,I=0;c.sort(AS);for(let z=0,X=c.length;z<X;z++){let D=c[z],V=D.color,Z=D.intensity,W=D.distance,re=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ws?re=D.shadow.map.texture:re=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=V.r*Z,f+=V.g*Z,u+=V.b*Z;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],Z);I++}else if(D.isSunLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let te=D.shadow,ie=t.get(D);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),i.sunShadow[p]=ie,i.sunShadowMap[p]=re;let Ce=te.getViewportCount();for(let We=0;We<Ce;We++)i.sunShadowMatrix[x+We]=te.getMatrix(We),i.sunShadowCascade[x+We]=te._cascadeData[We];x+=Ce,p++}i.sun[d]=Y,d++}else if(D.isDirectionalLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let te=D.shadow,ie=t.get(D);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.directionalShadow[m]=ie,i.directionalShadowMap[m]=re,i.directionalShadowMatrix[m]=D.shadow.matrix,T++}i.directional[m]=Y,m++}else if(D.isSpotLight){let Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(V).multiplyScalar(Z),Y.distance=W,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[y]=Y;let te=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,te.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[y]=te.matrix,D.castShadow){let ie=t.get(D);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.spotShadow[y]=ie,i.spotShadowMap[y]=re,_++}y++}else if(D.isRectAreaLight){let Y=e.get(D);Y.color.copy(V).multiplyScalar(Z),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[S]=Y,S++}else if(D.isPointLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){let te=D.shadow,ie=t.get(D);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,ie.shadowCameraNear=te.camera.near,ie.shadowCameraFar=te.camera.far,i.pointShadow[g]=ie,i.pointShadowMap[g]=re,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=Y,g++}else if(D.isHemisphereLight){let Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(Z),Y.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[v]=Y,v++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let N=i.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==S||N.hemiLength!==v||N.numSunShadows!==p||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==_||N.numSpotMaps!==w||N.numLightProbes!==I)&&(i.sun.length=d,i.directional.length=m,i.spot.length=y,i.rectArea.length=S,i.point.length=g,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+w-P,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,N.sunLength=d,N.directionalLength=m,N.pointLength=g,N.spotLength=y,N.rectAreaLength=S,N.hemiLength=v,N.numSunShadows=p,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=_,N.numSpotMaps=w,N.numLightProbes=I,i.version=TS++)}function l(c,h){let f=0,u=0,d=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let v=c[y];if(v.isSunLight){let T=i.sun[f];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(g),f++}else if(v.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),u++}else if(v.isSpotLight){let T=i.spot[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function Km(n){let e=new RS(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){i.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function CS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Km(n),e.set(s,[a])):r>=o.length?(a=new Km(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var IS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LS=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],DS=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],$m=new lt,Ya=new C,If=new C;function NS(n,e,t){let i=new Bs,s=new me,r=new me,o=new Qt,a=new pc,l=new mc,c={},h=t.maxTextureSize,f={[Gs]:On,[On]:Gs,[Bn]:Bn},u=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:IS,fragmentShader:PS}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new qt;p.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Je(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xr;let g=this.type;this.render=function(E,_,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Hp&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xr);let P=n.getRenderTarget(),I=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),z=n.state;z.setBlending(_r),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=g!==this.type;X&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(V=>V.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,V=E.length;D<V;D++){let Z=E[D],W=Z.shadow;if(W===void 0){Ve("WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let re=W.getFrameExtents();s.multiply(re),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,W.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Y,W.map===null||X===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===_o){if(Z.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ui(s.x,s.y,{format:Ws,type:Di,minFilter:ni,magFilter:ni,generateMipmaps:!1}),W.map.texture.name=Z.name+".shadowMap",W.map.depthTexture=new fs(s.x,s.y,Si),W.map.depthTexture.name=Z.name+".shadowMapDepth",W.map.depthTexture.format=us,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Tn,W.map.depthTexture.magFilter=Tn}else Z.isPointLight?(W.map=new Ja(s.x),W.map.depthTexture=new va(s.x,Li)):(W.map=new ui(s.x,s.y),W.map.depthTexture=new fs(s.x,s.y,Li)),W.map.depthTexture.name=Z.name+".shadowMap",W.map.depthTexture.format=us,this.type===xr?(W.map.depthTexture.compareFunction=Y?uf:hf,W.map.depthTexture.minFilter=ni,W.map.depthTexture.magFilter=ni):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Tn,W.map.depthTexture.magFilter=Tn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let te=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Z.isPointLight!==!0&&W.updateMatrices(Z,w);let ie=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:w.layers;for(let Ce=0;Ce<te;Ce++){let We=W.getCamera(Ce);if(Z.isPointLight){let K=W.camera,Me=W.matrix,Ie=Z.distance||K.far;Ie!==K.far&&(K.far=Ie,K.updateProjectionMatrix()),Ya.setFromMatrixPosition(Z.matrixWorld),K.position.copy(Ya),If.copy(K.position),If.add(LS[Ce]),K.up.copy(DS[Ce]),K.lookAt(If),K.updateMatrixWorld(),Me.makeTranslation(-Ya.x,-Ya.y,-Ya.z),$m.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),W._frustum.setFromProjectionMatrix($m,K.coordinateSystem,K.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,Ce),n.clear();else{Ce===0&&(n.setRenderTarget(W.map),n.clear());let K=W.getViewport(Ce);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),z.viewport(o)}i=W.getFrustum(Ce),v(_,w,We,Z,ie,this.type)}W.isPointLightShadow!==!0&&this.type===_o&&y(W,w),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(P,I,N)};function y(E,_){let w=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new ui(s.x,s.y,{format:Ws,type:Di}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(_,null,w,u,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(_,null,w,d,x,null)}function S(E,_,w,P){let I=null,N=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)I=N;else if(I=w.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let z=I.uuid,X=_.uuid,D=c[z];D===void 0&&(D={},c[z]=D);let V=D[X];V===void 0&&(V=I.clone(),D[X]=V,_.addEventListener("dispose",T)),I=V}if(I.visible=_.visible,I.wireframe=_.wireframe,P===_o?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:f[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let z=n.properties.get(I);z.light=w}return I}function v(E,_,w,P,I,N){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===_o)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let D=e.update(E),V=E.material;if(Array.isArray(V)){let Z=D.groups;for(let W=0,re=Z.length;W<re;W++){let Y=Z[W],te=V[Y.materialIndex];if(te&&te.visible){let ie=S(E,te,P,N);E.onBeforeShadow(n,E,_,w,D,ie,Y),n.renderBufferDirect(w,null,D,ie,E,Y),E.onAfterShadow(n,E,_,w,D,ie,Y)}}}else if(V.visible){let Z=S(E,V,P,N);E.onBeforeShadow(n,E,_,w,D,Z,null),n.renderBufferDirect(w,null,D,Z,E,null),E.onAfterShadow(n,E,_,w,D,Z,null)}}let X=E.children;for(let D=0,V=X.length;D<V;D++)v(X[D],_,w,P,I,N)}function T(E){E.target.removeEventListener("dispose",T);for(let w in c){let P=c[w],I=E.target.uuid;I in P&&(P[I].dispose(),delete P[I])}}}function US(n,e){function t(){let L=!1,j=new Qt,J=null,pe=new Qt(0,0,0,0);return{setMask:function(le){J!==le&&!L&&(n.colorMask(le,le,le,le),J=le)},setLocked:function(le){L=le},setClear:function(le,ue,Oe,ct,ae){ae===!0&&(le*=ct,ue*=ct,Oe*=ct),j.set(le,ue,Oe,ct),pe.equals(j)===!1&&(n.clearColor(le,ue,Oe,ct),pe.copy(j))},reset:function(){L=!1,J=null,pe.set(-1,0,0,0)}}}function i(){let L=!1,j=!1,J=null,pe=null,le=null;return{setReversed:function(ue){if(j!==ue){let Oe=e.get("EXT_clip_control");ue?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),j=ue;let ct=le;le=null,this.setClear(ct)}},getReversed:function(){return j},setTest:function(ue){ue?Se(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(ue){J!==ue&&!L&&(n.depthMask(ue),J=ue)},setFunc:function(ue){if(j&&(ue=Mm[ue]),pe!==ue){switch(ue){case Wl:n.depthFunc(n.NEVER);break;case Xl:n.depthFunc(n.ALWAYS);break;case ql:n.depthFunc(n.LESS);break;case no:n.depthFunc(n.LEQUAL);break;case Yl:n.depthFunc(n.EQUAL);break;case Zl:n.depthFunc(n.GEQUAL);break;case Jl:n.depthFunc(n.GREATER);break;case Kl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=ue}},setLocked:function(ue){L=ue},setClear:function(ue){le!==ue&&(le=ue,j&&(ue=1-ue),n.clearDepth(ue))},reset:function(){L=!1,J=null,pe=null,le=null,j=!1}}}function s(){let L=!1,j=null,J=null,pe=null,le=null,ue=null,Oe=null,ct=null,ae=null;return{setTest:function(ze){L||(ze?Se(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(ze){j!==ze&&!L&&(n.stencilMask(ze),j=ze)},setFunc:function(ze,at,be){(J!==ze||pe!==at||le!==be)&&(n.stencilFunc(ze,at,be),J=ze,pe=at,le=be)},setOp:function(ze,at,be){(ue!==ze||Oe!==at||ct!==be)&&(n.stencilOp(ze,at,be),ue=ze,Oe=at,ct=be)},setLocked:function(ze){L=ze},setClear:function(ze){ae!==ze&&(n.clearStencil(ze),ae=ze)},reset:function(){L=!1,j=null,J=null,pe=null,le=null,ue=null,Oe=null,ct=null,ae=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],x=null,m=!1,g=null,y=null,S=null,v=null,T=null,E=null,_=null,w=new Ne(0,0,0),P=0,I=!1,N=null,z=null,X=null,D=null,V=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,re=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=re>=1):Y.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=re>=2);let te=null,ie={},Ce=n.getParameter(n.SCISSOR_BOX),We=n.getParameter(n.VIEWPORT),K=new Qt().fromArray(Ce),Me=new Qt().fromArray(We);function Ie(L,j,J,pe){let le=new Uint8Array(4),ue=n.createTexture();n.bindTexture(L,ue),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<J;Oe++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(j+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ue}let ke={};ke[n.TEXTURE_2D]=Ie(n.TEXTURE_2D,n.TEXTURE_2D,1),ke[n.TEXTURE_CUBE_MAP]=Ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ke[n.TEXTURE_2D_ARRAY]=Ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ke[n.TEXTURE_3D]=Ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Se(n.DEPTH_TEST),o.setFunc(no),Te(!1),ve(Wu),Se(n.CULL_FACE),fe(_r);function Se(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function He(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Wt(L,j){return u[L]!==j?(n.bindFramebuffer(L,j),u[L]=j,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=j),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=j),!0):!1}function Xe(L,j){let J=p,pe=!1;if(L){J=d.get(j),J===void 0&&(J=[],d.set(j,J));let le=L.textures;if(J.length!==le.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Oe=le.length;ue<Oe;ue++)J[ue]=n.COLOR_ATTACHMENT0+ue;J.length=le.length,pe=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,pe=!0);pe&&n.drawBuffers(J)}function mt(L){return x!==L?(n.useProgram(L),x=L,!0):!1}let yt={[yr]:n.FUNC_ADD,[Vp]:n.FUNC_SUBTRACT,[Wp]:n.FUNC_REVERSE_SUBTRACT};yt[Xp]=n.MIN,yt[qp]=n.MAX;let ne={[Yp]:n.ZERO,[Zp]:n.ONE,[Jp]:n.SRC_COLOR,[Yu]:n.SRC_ALPHA,[tm]:n.SRC_ALPHA_SATURATE,[jp]:n.DST_COLOR,[$p]:n.DST_ALPHA,[Kp]:n.ONE_MINUS_SRC_COLOR,[Zu]:n.ONE_MINUS_SRC_ALPHA,[em]:n.ONE_MINUS_DST_COLOR,[Qp]:n.ONE_MINUS_DST_ALPHA,[nm]:n.CONSTANT_COLOR,[im]:n.ONE_MINUS_CONSTANT_COLOR,[sm]:n.CONSTANT_ALPHA,[rm]:n.ONE_MINUS_CONSTANT_ALPHA};function fe(L,j,J,pe,le,ue,Oe,ct,ae,ze){if(L===_r){m===!0&&(He(n.BLEND),m=!1);return}if(m===!1&&(Se(n.BLEND),m=!0),L!==Gp){if(L!==g||ze!==I){if((y!==yr||T!==yr)&&(n.blendEquation(n.FUNC_ADD),y=yr,T=yr),ze)switch(L){case Vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mi:n.blendFunc(n.ONE,n.ONE);break;case Xu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ze("WebGLState: Invalid blending: ",L);break}else switch(L){case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xu:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qu:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",L);break}S=null,v=null,E=null,_=null,w.set(0,0,0),P=0,g=L,I=ze}return}le=le||j,ue=ue||J,Oe=Oe||pe,(j!==y||le!==T)&&(n.blendEquationSeparate(yt[j],yt[le]),y=j,T=le),(J!==S||pe!==v||ue!==E||Oe!==_)&&(n.blendFuncSeparate(ne[J],ne[pe],ne[ue],ne[Oe]),S=J,v=pe,E=ue,_=Oe),(ct.equals(w)===!1||ae!==P)&&(n.blendColor(ct.r,ct.g,ct.b,ae),w.copy(ct),P=ae),g=L,I=!1}function ce(L,j){L.side===Bn?He(n.CULL_FACE):Se(n.CULL_FACE);let J=L.side===On;j&&(J=!J),Te(J),L.blending===Vs&&L.transparent===!1?fe(_r):fe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let pe=L.stencilWrite;a.setTest(pe),pe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Fe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function Te(L){N!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),N=L)}function ve(L){L!==zp?(Se(n.CULL_FACE),L!==z&&(L===Wu?n.cullFace(n.BACK):L===kp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),z=L}function st(L){L!==X&&(W&&n.lineWidth(L),X=L)}function Fe(L,j,J){L?(Se(n.POLYGON_OFFSET_FILL),(D!==j||V!==J)&&(D=j,V=J,o.getReversed()&&(j=-j,J=-J),n.polygonOffset(j,J))):He(n.POLYGON_OFFSET_FILL)}function vt(L){L?Se(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function St(L){L===void 0&&(L=n.TEXTURE0+Z-1),te!==L&&(n.activeTexture(L),te=L)}function Ct(L,j,J){J===void 0&&(te===null?J=n.TEXTURE0+Z-1:J=te);let pe=ie[J];pe===void 0&&(pe={type:void 0,texture:void 0},ie[J]=pe),(pe.type!==L||pe.texture!==j)&&(te!==J&&(n.activeTexture(J),te=J),n.bindTexture(L,j||ke[L]),pe.type=L,pe.texture=j)}function O(){let L=ie[te];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function cn(){try{n.compressedTexImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function xt(){try{n.compressedTexImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function zt(){try{n.texSubImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function xe(){try{n.texSubImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function rn(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function Ge(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function Qe(){try{n.texStorage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function R(){try{n.texStorage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function M(){try{n.texImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function H(){try{n.texImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function oe(L){return f[L]!==void 0?f[L]:n.getParameter(L)}function ee(L,j){f[L]!==j&&(n.pixelStorei(L,j),f[L]=j)}function he(L){K.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function _e(L){Me.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Me.copy(L))}function $(L,j){let J=c.get(j);J===void 0&&(J=new WeakMap,c.set(j,J));let pe=J.get(L);pe===void 0&&(pe=n.getUniformBlockIndex(j,L.name),n.uniformBlockBinding(j,pe,pe),J.set(L,pe))}function Q(L,j,J){let le=c.get(j).get(L);l[le]!==J&&(n.bindBufferBase(n.UNIFORM_BUFFER,le,J),l[le]=J)}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},te=null,ie={},u={},l={},d=new WeakMap,p=[],x=null,m=!1,g=null,y=null,S=null,v=null,T=null,E=null,_=null,w=new Ne(0,0,0),P=0,I=!1,N=null,z=null,X=null,D=null,V=null,K.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Se,disable:He,bindFramebuffer:Wt,drawBuffers:Xe,useProgram:mt,setBlending:fe,setMaterial:ce,setFlipSided:Te,setCullFace:ve,setLineWidth:st,setPolygonOffset:Fe,setScissorTest:vt,activeTexture:St,bindTexture:Ct,unbindTexture:O,compressedTexImage2D:cn,compressedTexImage3D:xt,texImage2D:M,texImage3D:H,pixelStorei:ee,getParameter:oe,updateUBOMapping:$,uniformBlockBinding:Q,texStorage2D:Qe,texStorage3D:R,texSubImage2D:zt,texSubImage3D:xe,compressedTexSubImage2D:rn,compressedTexSubImage3D:Ge,scissor:he,viewport:_e,reset:de}}function FS(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,h=new WeakMap,f=new Set,u,d=new WeakMap,p=new Set,x=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return m?new OffscreenCanvas(R,M):fa("canvas")}function y(R,M,H){let oe=1,ee=Qe(R);if((ee.width>H||ee.height>H)&&(oe=H/Math.max(ee.width,ee.height)),oe<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let he=Math.floor(oe*ee.width),_e=Math.floor(oe*ee.height);u===void 0&&(u=g(he,_e));let $=M?g(he,_e):u;return $.width=he,$.height=_e,$.getContext("2d").drawImage(R,0,0,he,_e),Ve("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+he+"x"+_e+")."),$}else return"data"in R&&Ve("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function S(R){return R.generateMipmaps}function v(R){n.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(R,M,H,oe,ee,he=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let _e;oe&&(_e=e.get("EXT_texture_norm16"),_e||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=M;if(M===n.RED&&(H===n.FLOAT&&($=n.R32F),H===n.HALF_FLOAT&&($=n.R16F),H===n.UNSIGNED_BYTE&&($=n.R8),H===n.UNSIGNED_SHORT&&_e&&($=_e.R16_EXT),H===n.SHORT&&_e&&($=_e.R16_SNORM_EXT)),M===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.R8UI),H===n.UNSIGNED_SHORT&&($=n.R16UI),H===n.UNSIGNED_INT&&($=n.R32UI),H===n.BYTE&&($=n.R8I),H===n.SHORT&&($=n.R16I),H===n.INT&&($=n.R32I)),M===n.RG&&(H===n.FLOAT&&($=n.RG32F),H===n.HALF_FLOAT&&($=n.RG16F),H===n.UNSIGNED_BYTE&&($=n.RG8),H===n.UNSIGNED_SHORT&&_e&&($=_e.RG16_EXT),H===n.SHORT&&_e&&($=_e.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RG8UI),H===n.UNSIGNED_SHORT&&($=n.RG16UI),H===n.UNSIGNED_INT&&($=n.RG32UI),H===n.BYTE&&($=n.RG8I),H===n.SHORT&&($=n.RG16I),H===n.INT&&($=n.RG32I)),M===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RGB8UI),H===n.UNSIGNED_SHORT&&($=n.RGB16UI),H===n.UNSIGNED_INT&&($=n.RGB32UI),H===n.BYTE&&($=n.RGB8I),H===n.SHORT&&($=n.RGB16I),H===n.INT&&($=n.RGB32I)),M===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RGBA8UI),H===n.UNSIGNED_SHORT&&($=n.RGBA16UI),H===n.UNSIGNED_INT&&($=n.RGBA32UI),H===n.BYTE&&($=n.RGBA8I),H===n.SHORT&&($=n.RGBA16I),H===n.INT&&($=n.RGBA32I)),M===n.RGB&&(H===n.UNSIGNED_SHORT&&_e&&($=_e.RGB16_EXT),H===n.SHORT&&_e&&($=_e.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),M===n.RGBA){let Q=he?ua:Et.getTransfer(ee);H===n.FLOAT&&($=n.RGBA32F),H===n.HALF_FLOAT&&($=n.RGBA16F),H===n.UNSIGNED_BYTE&&($=Q===Dt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&_e&&($=_e.RGBA16_EXT),H===n.SHORT&&_e&&($=_e.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(R,M){let H;return R?M===null||M===Li||M===Mr?H=n.DEPTH24_STENCIL8:M===Si?H=n.DEPTH32F_STENCIL8:M===vo&&(H=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Li||M===Mr?H=n.DEPTH_COMPONENT24:M===Si?H=n.DEPTH_COMPONENT32F:M===vo&&(H=n.DEPTH_COMPONENT16),H}function w(R,M){return S(R)===!0||R.isFramebufferTexture&&R.minFilter!==Tn&&R.minFilter!==ni?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function P(R){let M=new WeakRef(R);i.get(R).__ref=M,p.add(M),x.register(R,M,M)}function I(R){let M=i.get(R).__ref;M!==void 0&&(p.delete(M),x.unregister(M))}function N(R){X(R.target)}function z(R){D(R.target)}function X(R){R.removeEventListener("dispose",N),I(R),Z(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&f.delete(R)}function D(R){R.removeEventListener("dispose",z),I(R),re(R)}function V(){for(let R of p){let M=R.deref();M!==void 0&&(M.isRenderTarget===!0?D(M):X(M))}p.clear(),f.clear()}function Z(R){let M=i.get(R);if(M.__webglInit===void 0)return;let H=R.source,oe=d.get(H);if(oe){let ee=oe[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&W(R),Object.keys(oe).length===0&&d.delete(H)}i.remove(R)}function W(R){let M=i.get(R);n.deleteTexture(M.__webglTexture);let H=R.source,oe=d.get(H);delete oe[M.__cacheKey],o.memory.textures--}function re(R){let M=i.get(R);M.__depthDisposeCallback&&M.__depthDisposeCallback();let H=R.depthTexture;if(H&&H.renderTarget===R&&X(H),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let he=0;he<M.__webglFramebuffer[ee].length;he++)n.deleteFramebuffer(M.__webglFramebuffer[ee][he]);else n.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[ee]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let oe=R.textures;for(let ee=0,he=oe.length;ee<he;ee++){let _e=i.get(oe[ee]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(oe[ee])}i.remove(R)}let Y=0;function te(){Y=0}function ie(){return Y}function Ce(R){Y=R}function We(){let R=Y;return R>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,R}function K(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.mipmapsAutoUpdate),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Me(R,M){let H=i.get(R);if(R.isVideoTexture&&rn(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let oe=R.image;if(oe===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(H,R,M);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+M)}function Ie(R,M){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ce(H,R,M);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+M)}function ke(R,M){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){ce(H,R,M);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+M)}function Se(R,M){let H=i.get(R);if(R.version>0&&H.__version!==R.version){Te(H,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+M)}let He={[io]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[$l]:n.MIRRORED_REPEAT},Wt={[Tn]:n.NEAREST,[lm]:n.NEAREST_MIPMAP_NEAREST,[ka]:n.NEAREST_MIPMAP_LINEAR,[ni]:n.LINEAR,[Pc]:n.LINEAR_MIPMAP_NEAREST,[ps]:n.LINEAR_MIPMAP_LINEAR},Xe={[fm]:n.NEVER,[ff]:n.ALWAYS,[dm]:n.LESS,[hf]:n.LEQUAL,[pm]:n.EQUAL,[uf]:n.GEQUAL,[mm]:n.GREATER,[gm]:n.NOTEQUAL};function mt(R,M){if(M.type===Si&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ni||M.magFilter===Pc||M.magFilter===ka||M.magFilter===ps||M.minFilter===ni||M.minFilter===Pc||M.minFilter===ka||M.minFilter===ps)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,He[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,He[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,He[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Wt[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Wt[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Xe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Tn||M.minFilter!==ka&&M.minFilter!==ps||M.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function yt(R,M){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",N),P(M));let oe=M.source,ee=d.get(oe);ee===void 0&&(ee={},d.set(oe,ee));let he=K(M);if(he!==R.__cacheKey){ee[he]===void 0&&(ee[he]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[he].usedTimes++;let _e=ee[R.__cacheKey];_e!==void 0&&(ee[R.__cacheKey].usedTimes--,_e.usedTimes===0&&W(M)),R.__cacheKey=he,R.__webglTexture=ee[he].texture}return H}function ne(R,M,H){return Math.floor(Math.floor(R/H)/M)}function fe(R,M,H,oe){let he=R.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,H,oe,M.data);else{he.sort((L,j)=>L.start-j.start);let _e=0;for(let L=1;L<he.length;L++){let j=he[_e],J=he[L],pe=j.start+j.count,le=ne(J.start,M.width,4),ue=ne(j.start,M.width,4);J.start<=pe+1&&le===ue&&ne(J.start+J.count-1,M.width,4)===le?j.count=Math.max(j.count,J.start+J.count-j.start):(++_e,he[_e]=J)}he.length=_e+1;let $=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),de=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let L=0,j=he.length;L<j;L++){let J=he[L],pe=Math.floor(J.start/4),le=Math.ceil(J.count/4),ue=pe%M.width,Oe=Math.floor(pe/M.width),ct=le,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(n.TEXTURE_2D,0,ue,Oe,ct,ae,H,oe,M.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,$),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function ce(R,M,H){let oe=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=n.TEXTURE_3D);let ee=yt(R,M),he=M.source;t.bindTexture(oe,R.__webglTexture,n.TEXTURE0+H);let _e=i.get(he);if(he.version!==_e.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ae=Et.getPrimaries(Et.workingColorSpace),ze=M.colorSpace===gs?null:Et.getPrimaries(M.colorSpace),at=M.colorSpace===gs||ae===ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let Q=y(M.image,!1,s.maxTextureSize);Q=Ge(M,Q);let de=r.convert(M.format,M.colorSpace),L=r.convert(M.type),j=E(M.internalFormat,de,L,M.normalized,M.colorSpace,M.isVideoTexture);mt(oe,M);let J,pe=M.mipmaps,le=M.isVideoTexture!==!0,ue=_e.__version===void 0||ee===!0,Oe=he.dataReady,ct=w(M,Q);if(M.isDepthTexture)j=_(M.format===ms,M.type),ue&&(le?t.texStorage2D(n.TEXTURE_2D,1,j,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,j,Q.width,Q.height,0,de,L,null));else if(M.isDataTexture)if(pe.length>0){le&&ue&&t.texStorage2D(n.TEXTURE_2D,ct,j,pe[0].width,pe[0].height);for(let ae=0,ze=pe.length;ae<ze;ae++)J=pe[ae],le?Oe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,J.width,J.height,de,L,J.data):t.texImage2D(n.TEXTURE_2D,ae,j,J.width,J.height,0,de,L,J.data);M.generateMipmaps=!1}else le?(ue&&t.texStorage2D(n.TEXTURE_2D,ct,j,Q.width,Q.height),Oe&&fe(M,Q,de,L)):t.texImage2D(n.TEXTURE_2D,0,j,Q.width,Q.height,0,de,L,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){le&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ct,j,pe[0].width,pe[0].height,Q.depth);for(let ae=0,ze=pe.length;ae<ze;ae++)if(J=pe[ae],M.format!==Ni)if(de!==null)if(le){if(Oe)if(M.layerUpdates.size>0){let at=bf(J.width,J.height,M.format,M.type);for(let be of M.layerUpdates){let Ft=J.data.subarray(be*at/J.data.BYTES_PER_ELEMENT,(be+1)*at/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,be,J.width,J.height,1,de,Ft)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,J.width,J.height,Q.depth,de,J.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,j,J.width,J.height,Q.depth,0,J.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,J.width,J.height,Q.depth,de,L,J.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,j,J.width,J.height,Q.depth,0,de,L,J.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{le&&ue&&t.texStorage2D(n.TEXTURE_2D,ct,j,pe[0].width,pe[0].height);for(let ae=0,ze=pe.length;ae<ze;ae++)J=pe[ae],M.format!==Ni?de!==null?le?Oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,J.width,J.height,de,J.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,j,J.width,J.height,0,J.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Oe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,J.width,J.height,de,L,J.data):t.texImage2D(n.TEXTURE_2D,ae,j,J.width,J.height,0,de,L,J.data)}else if(M.isDataArrayTexture)if(le){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ct,j,Q.width,Q.height,Q.depth),Oe)if(M.layerUpdates.size>0){let ae=bf(Q.width,Q.height,M.format,M.type);for(let ze of M.layerUpdates){let at=Q.data.subarray(ze*ae/Q.data.BYTES_PER_ELEMENT,(ze+1)*ae/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ze,Q.width,Q.height,1,de,L,at)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,L,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,j,Q.width,Q.height,Q.depth,0,de,L,Q.data);else if(M.isData3DTexture)le?(ue&&t.texStorage3D(n.TEXTURE_3D,ct,j,Q.width,Q.height,Q.depth),Oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,L,Q.data)):t.texImage3D(n.TEXTURE_3D,0,j,Q.width,Q.height,Q.depth,0,de,L,Q.data);else if(M.isFramebufferTexture){if(ue)if(le)t.texStorage2D(n.TEXTURE_2D,ct,j,Q.width,Q.height);else{let ae=Q.width,ze=Q.height;for(let at=0;at<ct;at++)t.texImage2D(n.TEXTURE_2D,at,j,ae,ze,0,de,L,null),ae>>=1,ze>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),Q.parentNode!==ae){ae.appendChild(Q),f.add(M),ae.onpaint=ze=>{let at=ze.changedElements;for(let be of f)at.includes(be.image)&&(be.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let at=n.RGBA,be=n.RGBA,Ft=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,at,be,Ft,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(pe.length>0){if(le&&ue){let ae=Qe(pe[0]);t.texStorage2D(n.TEXTURE_2D,ct,j,ae.width,ae.height)}for(let ae=0,ze=pe.length;ae<ze;ae++)J=pe[ae],le?Oe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,de,L,J):t.texImage2D(n.TEXTURE_2D,ae,j,de,L,J);M.generateMipmaps=!1}else if(le){if(ue){let ae=Qe(Q);t.texStorage2D(n.TEXTURE_2D,ct,j,ae.width,ae.height)}Oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,L,Q)}else t.texImage2D(n.TEXTURE_2D,0,j,de,L,Q);S(M)&&M.mipmapsAutoUpdate===!0&&v(oe),_e.__version=he.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Te(R,M,H){if(M.image.length!==6)return;let oe=yt(R,M),ee=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);let he=i.get(ee);if(ee.version!==he.__version||oe===!0){t.activeTexture(n.TEXTURE0+H);let _e=Et.getPrimaries(Et.workingColorSpace),$=M.colorSpace===gs?null:Et.getPrimaries(M.colorSpace),Q=M.colorSpace===gs||_e===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let de=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,j=[];for(let be=0;be<6;be++)!de&&!L?j[be]=y(M.image[be],!0,s.maxCubemapSize):j[be]=L?M.image[be].image:M.image[be],j[be]=Ge(M,j[be]);let J=j[0],pe=r.convert(M.format,M.colorSpace),le=r.convert(M.type),ue=E(M.internalFormat,pe,le,M.normalized,M.colorSpace),Oe=M.isVideoTexture!==!0,ct=he.__version===void 0||oe===!0,ae=ee.dataReady,ze=w(M,J);mt(n.TEXTURE_CUBE_MAP,M);let at;if(M.isDepthTexture){if(ue=_(M.format===ms,M.type),ct)if(Oe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ue,J.width,J.height);else for(let be=0;be<6;be++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,J.width,J.height,0,pe,le,null)}else if(de){Oe&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,ue,J.width,J.height);for(let be=0;be<6;be++){at=j[be].mipmaps;for(let Ft=0;Ft<at.length;Ft++){let bn=at[Ft];M.format!==Ni?pe!==null?Oe?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ft,0,0,bn.width,bn.height,pe,bn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ft,ue,bn.width,bn.height,0,bn.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ft,0,0,bn.width,bn.height,pe,le,bn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ft,ue,bn.width,bn.height,0,pe,le,bn.data)}}}else{if(at=M.mipmaps,Oe&&ct){at.length>0&&ze++;let be=Qe(j[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,ue,be.width,be.height)}for(let be=0;be<6;be++)if(L){Oe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,j[be].width,j[be].height,pe,le,j[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,j[be].width,j[be].height,0,pe,le,j[be].data);for(let Ft=0;Ft<at.length;Ft++){let Is=at[Ft].image[be].image;Oe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ft+1,0,0,Is.width,Is.height,pe,le,Is.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ft+1,ue,Is.width,Is.height,0,pe,le,Is.data)}}else{Oe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,pe,le,j[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ue,pe,le,j[be]);for(let Ft=0;Ft<at.length;Ft++){let bn=at[Ft];Oe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ft+1,0,0,pe,le,bn.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ft+1,ue,pe,le,bn.image[be])}}}S(M)&&M.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),he.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ve(R,M,H,oe,ee,he){let _e=r.convert(H.format,H.colorSpace),$=r.convert(H.type),Q=E(H.internalFormat,_e,$,H.normalized,H.colorSpace),de=i.get(M),L=i.get(H);if(L.__renderTarget=M,!de.__hasExternalTextures){let j=Math.max(1,M.width>>he),J=Math.max(1,M.height>>he);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,he,Q,j,J,M.depth,0,_e,$,null):t.texImage2D(ee,he,Q,j,J,0,_e,$,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),xe(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ee,L.__webglTexture,0,zt(M)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,ee,L.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(R,M,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){let oe=M.depthTexture,ee=oe&&oe.isDepthTexture?oe.type:null,he=_(M.stencilBuffer,ee),_e=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xe(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt(M),he,M.width,M.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt(M),he,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,he,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,R)}else{let oe=M.textures;for(let ee=0;ee<oe.length;ee++){let he=oe[ee],_e=r.convert(he.format,he.colorSpace),$=r.convert(he.type),Q=E(he.internalFormat,_e,$,he.normalized,he.colorSpace);xe(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt(M),Q,M.width,M.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt(M),Q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Q,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(R,M,H){let oe=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=i.get(M.depthTexture);ee.__renderTarget=M;let he=oe?M.depthTexture.image[0]:M.depthTexture.image;(!ee.__webglTexture||he.width!==M.width||he.height!==M.height)&&(he.width=M.width,he.height=M.height,M.depthTexture.needsUpdate=!0),oe?Se(M.depthTexture,0):Me(M.depthTexture,0);let _e=ee.__webglTexture,$=zt(M),Q=oe?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,de=M.depthTexture.format===ms?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===us)xe(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,Q,_e,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,de,Q,_e,0);else if(M.depthTexture.format===ms)xe(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,Q,_e,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,de,Q,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(R){let M=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let oe=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),oe){let ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,oe.removeEventListener("dispose",ee)};oe.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=oe}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let oe=0;oe<6;oe++)Fe(M.__webglFramebuffer[oe],R,oe);else R.texture.mipmaps.length>0?Fe(M.__webglFramebuffer[0],R,0):Fe(M.__webglFramebuffer,R,0);else if(H){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]===void 0)M.__webglDepthbuffer[oe]=n.createRenderbuffer(),st(M.__webglDepthbuffer[oe],R,!1);else{let ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,he)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),st(M.__webglDepthbuffer,R,!1);else{let ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,he)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function St(R,M,H){let oe=i.get(R);M!==void 0&&ve(oe.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&vt(R)}function Ct(R){let M=R.texture,H=i.get(R),oe=i.get(M);R.addEventListener("dispose",z),P(R);let ee=R.textures,he=R.isWebGLCubeRenderTarget===!0,_e=ee.length>1;if(_e||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=M.version,o.memory.textures++),he){H.__webglFramebuffer=[];for(let $=0;$<6;$++)if(M.mipmaps.length>0){H.__webglFramebuffer[$]=[];for(let Q=0;Q<M.mipmaps.length;Q++)H.__webglFramebuffer[$][Q]=n.createFramebuffer()}else H.__webglFramebuffer[$]=n.createFramebuffer()}else{if(M.mipmaps.length>0){H.__webglFramebuffer=[];for(let $=0;$<M.mipmaps.length;$++)H.__webglFramebuffer[$]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(_e)for(let $=0,Q=ee.length;$<Q;$++){let de=i.get(ee[$]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&xe(R)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let $=0;$<ee.length;$++){let Q=ee[$];H.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[$]);let de=r.convert(Q.format,Q.colorSpace),L=r.convert(Q.type),j=E(Q.internalFormat,de,L,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),J=zt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,j,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,H.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),st(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),mt(n.TEXTURE_CUBE_MAP,M);for(let $=0;$<6;$++)if(M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)ve(H.__webglFramebuffer[$][Q],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else ve(H.__webglFramebuffer[$],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);S(M)?v(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let $=0,Q=ee.length;$<Q;$++){let de=ee[$],L=i.get(de),j=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,L.__webglTexture),mt(j,de),ve(H.__webglFramebuffer,R,de,n.COLOR_ATTACHMENT0+$,j,0),S(de)&&v(j)}t.unbindTexture()}else{let $=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,oe.__webglTexture),mt($,M),M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)ve(H.__webglFramebuffer[Q],R,M,n.COLOR_ATTACHMENT0,$,Q);else ve(H.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,$,0);S(M)?v($):M.mipmaps.length>0&&n.texParameteri($,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&vt(R)}function O(R){let M=R.textures;for(let H=0,oe=M.length;H<oe;H++){let ee=M[H];if(S(ee)&&ee.mipmapsAutoUpdate===!0){let he=T(R),_e=i.get(ee).__webglTexture;t.bindTexture(he,_e),v(he),t.unbindTexture()}}}let cn=[];function xt(R){if(R.samples>0){if(xe(R)===!1){let M=R.textures,H=R.width,oe=R.height,ee=n.COLOR_BUFFER_BIT,he=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(R),$=M.length>1;if($)for(let de=0;de<M.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let de=0;de<M.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);let L=i.get(M[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,H,oe,0,0,H,oe,ee,n.NEAREST),l===!0&&(cn.length=0,cn.push(n.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&cn.push(he),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,cn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let de=0;de<M.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);let L=i.get(M[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,L,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function zt(R){return Math.min(s.maxSamples,R.samples)}function xe(R){let M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function rn(R){let M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Ge(R,M){let H=R.colorSpace,oe=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==ha&&H!==gs&&(Et.getTransfer(H)===Dt?(oe!==Ni||ee!==oi)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",H)),M}function Qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=We,this.resetTextureUnits=te,this.getTextureUnits=ie,this.setTextureUnits=Ce,this.setTexture2D=Me,this.setTexture2DArray=Ie,this.setTexture3D=ke,this.setTextureCube=Se,this.rebindTextures=St,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=xe,this.dispose=V}function OS(n,e){function t(i,s=gs){let r,o=Et.getTransfer(s);if(i===oi)return n.UNSIGNED_BYTE;if(i===Dc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===of)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===af)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===sf)return n.BYTE;if(i===rf)return n.SHORT;if(i===vo)return n.UNSIGNED_SHORT;if(i===Lc)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Si)return n.FLOAT;if(i===Di)return n.HALF_FLOAT;if(i===lf)return n.ALPHA;if(i===cf)return n.RGB;if(i===Ni)return n.RGBA;if(i===us)return n.DEPTH_COMPONENT;if(i===ms)return n.DEPTH_STENCIL;if(i===Uc)return n.RED;if(i===Fc)return n.RED_INTEGER;if(i===Ws)return n.RG;if(i===Oc)return n.RG_INTEGER;if(i===Bc)return n.RGBA_INTEGER;if(i===Ha||i===Ga||i===Va||i===Wa)if(o===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zc||i===kc||i===Hc||i===Gc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vc||i===Wc||i===Xc||i===qc||i===Yc||i===Xa||i===Zc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vc||i===Wc)return o===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===qc)return r.COMPRESSED_R11_EAC;if(i===Yc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Xa)return r.COMPRESSED_RG11_EAC;if(i===Zc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jc||i===Kc||i===$c||i===Qc||i===jc||i===eh||i===th||i===nh||i===ih||i===sh||i===rh||i===oh||i===ah||i===lh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Jc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$c)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===th)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ih)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ah)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ch||i===hh||i===uh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ch)return o===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fh||i===dh||i===qa||i===ph)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===fh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ph)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var BS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Of=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ma(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ri({vertexShader:BS,fragmentShader:zS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new Zt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bf=class extends Vi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,x=typeof XRWebGLBinding<"u",m=new Of,g={},y=t.getContextAttributes(),S=null,v=null,T=[],E=[],_=new me,w=null,P=null,I=new ti;I.viewport=new Qt;let N=new ti;N.viewport=new Qt;let z=[I,N],X=new Ac,D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Me=T[K];return Me===void 0&&(Me=new co,T[K]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(K){let Me=T[K];return Me===void 0&&(Me=new co,T[K]=Me),Me.getGripSpace()},this.getHand=function(K){let Me=T[K];return Me===void 0&&(Me=new co,T[K]=Me),Me.getHandSpace()};function Z(K){let Me=E.indexOf(K.inputSource);if(Me===-1)return;let Ie=T[Me];Ie!==void 0&&(Ie.update(K.inputSource,K.frame,c||o),Ie.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",re);for(let K=0;K<T.length;K++){let Me=E[K];Me!==null&&(E[K]=null,T[K].disconnect(Me))}D=null,V=null,m.reset();for(let K in g)delete g[K];if(e.setRenderTarget(S),d=null,u=null,f=null,s=null,v=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(_.width,_.height,!1),P!==null){let K=P.camera;K.fov=P.fov,K.zoom=P.zoom,K.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",re),y.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,ke=null,Se=null;y.depth&&(Se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=y.stencil?ms:us,ke=y.stencil?Mr:Li);let He={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(He),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new ui(u.textureWidth,u.textureHeight,{format:Ni,type:oi,depthTexture:new fs(u.textureWidth,u.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ie={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Ie),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ui(d.framebufferWidth,d.framebufferHeight,{format:Ni,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),We.setContext(s),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(K){for(let Me=0;Me<K.removed.length;Me++){let Ie=K.removed[Me],ke=E.indexOf(Ie);ke>=0&&(E[ke]=null,T[ke].disconnect(Ie))}for(let Me=0;Me<K.added.length;Me++){let Ie=K.added[Me],ke=E.indexOf(Ie);if(ke===-1){for(let He=0;He<T.length;He++)if(He>=E.length){E.push(Ie),ke=He;break}else if(E[He]===null){E[He]=Ie,ke=He;break}if(ke===-1)break}let Se=T[ke];Se&&Se.connect(Ie)}}function Y(K,Me){Me===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Me.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Me=K.near,Ie=K.far;m.texture!==null&&(m.depthNear>0&&(Me=m.depthNear),m.depthFar>0&&(Ie=m.depthFar)),X.near=N.near=I.near=Me,X.far=N.far=I.far=Ie,(D!==X.near||V!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),D=X.near,V=X.far),X.layers.mask=K.layers.mask|6,I.layers.mask=X.layers.mask&-5,N.layers.mask=X.layers.mask&-3;let ke=K.parent,Se=X.cameras;Y(X,ke);for(let He=0;He<Se.length;He++)Y(Se[He],ke);X.projectionMatrix.copy(I.projectionMatrix),X.projectionMatrixInverse.copy(I.projectionMatrixInverse),P===null&&K.isPerspectiveCamera&&(P={camera:K,fov:K.fov,zoom:K.zoom}),te(K,X,ke)};function te(K,Me,Ie){Ie===null?K.matrix.copy(Me.matrixWorld):(K.matrix.copy(Ie.matrixWorld),K.matrix.invert(),K.matrix.multiply(Me.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Me.projectionMatrix),K.projectionMatrixInverse.copy(Me.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=oo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(K){return g[K]};let ie=null;function Ce(K,Me){if(h=Me.getViewerPose(c||o),p=Me,h!==null){let Ie=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ke=!1;Ie.length!==X.cameras.length&&(X.cameras.length=0,ke=!0);for(let Xe=0;Xe<Ie.length;Xe++){let mt=Ie[Xe],yt=null;if(d!==null)yt=d.getViewport(mt);else{let fe=f.getViewSubImage(u,mt);yt=fe.viewport,Xe===0&&(e.setRenderTargetTextures(v,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(v))}let ne=z[Xe];ne===void 0&&(ne=new ti,ne.layers.enable(Xe),ne.viewport=new Qt,z[Xe]=ne),ne.matrix.fromArray(mt.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(mt.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(yt.x,yt.y,yt.width,yt.height),Xe===0&&(X.matrix.copy(ne.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ke===!0&&X.cameras.push(ne)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let Xe=f.getDepthInformation(Ie[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,s.renderState)}if(Se&&Se.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let Xe=0;Xe<Ie.length;Xe++){let mt=Ie[Xe].camera;if(mt){let yt=g[mt];yt||(yt=new Ma,g[mt]=yt);let ne=f.getCameraImage(mt);yt.sourceTexture=ne}}}}for(let Ie=0;Ie<T.length;Ie++){let ke=E[Ie],Se=T[Ie];ke!==null&&Se!==void 0&&Se.update(ke,Me,c||o)}ie&&ie(K,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),p=null}let We=new Qm;We.setAnimationLoop(Ce),this.setAnimationLoop=function(K){ie=K},this.dispose=function(){}}},kS=new lt,l0=new je;l0.set(-1,0,0,0,1,0,0,0,1);function HS(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,vf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,S,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===On&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===On&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),S=y.envMap,v=y.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(kS.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(l0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===On&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function GS(n,e,t,i){let s={},r={};function o(y,S){let v=S.program;i.uniformBlockBinding(y,v,s[y.id])}function a(y,S){let v=s[y.id];v===void 0&&(p(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",m));let T=S.program;i.updateUBOMapping(y,T);let E=e.render.frame;r[y.id]!==E&&(c(y),r[y.id]=E)}function l(y){let S=n.createBuffer(),v=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,v,T),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(y){let S=s[y.id],v=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let E=0,_=v.length;E<_;E++){let w=v[E];if(Array.isArray(w))for(let P=0,I=w.length;P<I;P++)h(w[P],E,P,T);else h(w,E,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,S,v,T){if(u(y,S,v,T)===!0){let E=y.__offset,_=y.value;if(Array.isArray(_)){let w=0;for(let P=0;P<_.length;P++){let I=_[P],N=x(I,!0);f(I,y.__data,w),w+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,y.__data)}}function f(y,S,v){typeof y=="number"||typeof y=="boolean"?S[v]=y:y.isMatrix3?(S[v]=y.elements[0],S[v+1]=y.elements[1],S[v+2]=y.elements[2],S[v+3]=0,S[v+4]=y.elements[3],S[v+5]=y.elements[4],S[v+6]=y.elements[5],S[v+7]=0,S[v+8]=y.elements[6],S[v+9]=y.elements[7],S[v+10]=y.elements[8],S[v+11]=0):ArrayBuffer.isView(y)?S.set(y.subarray(0,S.length-v),v):y.toArray(S,v)}function u(y,S,v,T){let E=y.value,_=S+"_"+v;if(Array.isArray(E)){T[_]===void 0&&(T[_]=[]);let w=T[_],P=!1;for(let I=0;I<E.length;I++)d(E[I],w,I)===!0&&(P=!0);return P}return d(E,T,_)}function d(y,S,v){if(S[v]===void 0)return typeof y=="number"||typeof y=="boolean"?S[v]=y:ArrayBuffer.isView(y)?S[v]=y.slice():S[v]=y.clone(),!0;{let T=S[v];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return S[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function p(y){let S=y.uniforms,v=0,T=16;for(let _=0,w=S.length;_<w;_++){let P=Array.isArray(S[_])?S[_]:[S[_]];for(let I=0,N=P.length;I<N;I++){let z=P[I],X=Array.isArray(z.value)?z.value:[z.value],D=Array.isArray(S[_])||Array.isArray(z.value),V=v;for(let W=0,re=X.length;W<re;W++){let Y=X[W],te=x(Y,D),ie=v%T,Ce=ie%te.boundary,We=ie+Ce;v+=Ce,We!==0&&T-We<te.storage&&(v+=T-We),W===0&&(V=v),v+=te.storage}let Z=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new Z((v-V)/Float32Array.BYTES_PER_ELEMENT),z.__offset=V}}let E=v%T;return E>0&&(v+=T-E),y.__size=v,y.__cache={},this}function x(y,S){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",y),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let S=y.target;S.removeEventListener("dispose",m),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var VS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function WS(){return Ji===null&&(Ji=new xa(VS,16,16,Ws,Di),Ji.name="DFG_LUT",Ji.minFilter=ni,Ji.magFilter=ni,Ji.wrapS=Gi,Ji.wrapT=Gi,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var vh=class{constructor(e={}){let{canvas:t=_m(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=oi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=d,m=new Set([Bc,Oc,Fc]),g=new Set([oi,Li,vo,Mr,Dc,Nc]),y=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},T=null,E=null,_=[],w=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,z=null,X=null,D=null,V=null;this._outputColorSpace=Fn;let Z=0,W=0,re=null,Y=-1,te=null,ie=new Qt,Ce=new Qt,We=null,K=new Ne(0),Me=0,Ie=t.width,ke=t.height,Se=1,He=null,Wt=null,Xe=new Qt(0,0,Ie,ke),mt=new Qt(0,0,Ie,ke),yt=!1,ne=new Bs,fe=new nc,ce=!1,Te=!1,ve=new lt,st=new C,Fe=new Qt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},St=!1;function Ct(){return re===null?Se:1}let O=i;function cn(b,U){return t.getContext(b,U)}let xt,zt,xe,rn,Ge,Qe,R,M,H,oe,ee,he,_e,$,Q,de,L,j,J,pe,le,ue,Oe;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",be,!1),O===null){let U="webgl2";if(O=cn(U,b),O===null)throw cn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(b){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ze("WebGLRenderer: "+b.message),b}function ct(){xt=new tM(O),xt.init(),le=new OS(O,xt),zt=new Wv(O,xt,e,le),xe=new US(O,xt),zt.reversedDepthBuffer&&u&&xe.buffers.depth.setReversed(!0),X=O.createFramebuffer(),D=O.createFramebuffer(),V=O.createFramebuffer(),rn=new sM(O),Ge=new MS,Qe=new FS(O,xt,xe,Ge,zt,le,rn),R=new eM(I),M=new o_(O),ue=new Gv(O,M),H=new nM(O,M,rn,ue),oe=new oM(O,H,M,ue,rn),j=new rM(O,zt,Qe),Q=new Xv(Ge),ee=new vS(I,R,xt,zt,ue,Q),he=new HS(I,Ge),_e=new bS,$=new CS(xt),L=new Hv(I,R,xe,oe,p,l),de=new NS(I,oe,zt),Oe=new GS(O,rn,zt,xe),J=new Vv(O,xt,rn),pe=new iM(O,xt,rn),rn.programs=ee.programs,I.capabilities=zt,I.extensions=xt,I.properties=Ge,I.renderLists=_e,I.shadowMap=de,I.state=xe,I.info=rn}x!==oi&&(P=new lM(x,t.width,t.height,a,s,r));let ae=new Bf(I,O);this.xr=ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=xt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=xt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(b){b!==void 0&&(Se=b,this.setSize(Ie,ke,!1))},this.getSize=function(b){return b.set(Ie,ke)},this.setSize=function(b,U,q=!0){if(ae.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=b,ke=U,t.width=Math.floor(b*Se),t.height=Math.floor(U*Se),q===!0&&(t.style.width=b+"px",t.style.height=U+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Ie*Se,ke*Se).floor()},this.setDrawingBufferSize=function(b,U,q){Ie=b,ke=U,Se=q,t.width=Math.floor(b*q),t.height=Math.floor(U*q),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(x===oi){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ie)},this.getViewport=function(b){return b.copy(Xe)},this.setViewport=function(b,U,q,k){b.isVector4?Xe.set(b.x,b.y,b.z,b.w):Xe.set(b,U,q,k),xe.viewport(ie.copy(Xe).multiplyScalar(Ct()).round())},this.getScissor=function(b){return b.copy(mt)},this.setScissor=function(b,U,q,k){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,U,q,k),xe.scissor(Ce.copy(mt).multiplyScalar(Ct()).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(b){xe.setScissorTest(yt=b)},this.setOpaqueSort=function(b){He=b},this.setTransparentSort=function(b){Wt=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,q=!0){let k=0;if(b){let G=!1;if(re!==null){let ye=re.texture.format;G=m.has(ye)}if(G){let ye=re.texture.type,Pe=g.has(ye),ge=L.getClearColor(),Ee=L.getClearAlpha(),Ue=ge.r,nt=ge.g,bt=ge.b;Pe?(y[0]=Ue,y[1]=nt,y[2]=bt,y[3]=Ee,O.clearBufferuiv(O.COLOR,0,y)):(S[0]=Ue,S[1]=nt,S[2]=bt,S[3]=Ee,O.clearBufferiv(O.COLOR,0,S))}else k|=O.COLOR_BUFFER_BIT}U&&(k|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),z=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",be,!1),L.dispose(),_e.dispose(),$.dispose(),Qe.dispose(),Ge.dispose(),R.dispose(),oe.dispose(),H.dispose(),ue.dispose(),Oe.dispose(),ee.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Vd),ae.removeEventListener("sessionend",Wd),tr.stop()};function ze(b){b.preventDefault(),mf("WebGLRenderer: Context Lost."),N=!0}function at(){mf("WebGLRenderer: Context Restored."),N=!1;let b=rn.autoReset,U=de.enabled,q=de.autoUpdate,k=de.needsUpdate,G=de.type;ct(),rn.autoReset=b,de.enabled=U,de.autoUpdate=q,de.needsUpdate=k,de.type=G}function be(b){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ft(b){let U=b.target;U.removeEventListener("dispose",Ft),bn(U)}function bn(b){Is(b),Ge.remove(b)}function Is(b){let U=Ge.get(b).programs;U!==void 0&&(U.forEach(function(q){ee.releaseProgram(q)}),b.isShaderMaterial&&ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,q,k,G,ye){U===null&&(U=vt);let Pe=G.isMesh&&G.matrixWorld.determinantAffine()<0,ge=Cg(b,U,q,k,G);xe.setMaterial(k,Pe);let Ee=q.index,Ue=1;if(k.wireframe===!0){if(Ee=H.getWireframeAttribute(q),Ee===void 0)return;Ue=2}let nt=q.drawRange,bt=q.attributes.position,Le=nt.start*Ue,wt=(nt.start+nt.count)*Ue;ye!==null&&(Le=Math.max(Le,ye.start*Ue),wt=Math.min(wt,(ye.start+ye.count)*Ue)),Ee!==null?(Le=Math.max(Le,0),wt=Math.min(wt,Ee.count)):bt!=null&&(Le=Math.max(Le,0),wt=Math.min(wt,bt.count));let hn=wt-Le;if(hn<0||hn===1/0)return;ue.setup(G,k,ge,q,Ee);let Vt,kt=J;if(Ee!==null&&(Vt=M.get(Ee),kt=pe,kt.setIndex(Vt)),G.isMesh)k.wireframe===!0?(xe.setLineWidth(k.wireframeLinewidth*Ct()),kt.setMode(O.LINES)):kt.setMode(O.TRIANGLES);else if(G.isLine){let kn=k.linewidth;kn===void 0&&(kn=1),xe.setLineWidth(kn*Ct()),G.isLineSegments?kt.setMode(O.LINES):G.isLineLoop?kt.setMode(O.LINE_LOOP):kt.setMode(O.LINE_STRIP)}else G.isPoints?kt.setMode(O.POINTS):G.isSprite&&kt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))kt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let kn=G._multiDrawStarts,De=G._multiDrawCounts,ei=G._multiDrawCount,Lt=Ee?M.get(Ee).bytesPerElement:1,nr=Ge.get(k).currentProgram.getUniforms();for(let Hn=0;Hn<ei;Hn++)nr.setValue(O,"_gl_DrawID",Hn),kt.render(kn[Hn]/Lt,De[Hn])}else if(G.isInstancedMesh)kt.renderInstances(Le,hn,G.count);else if(q.isInstancedBufferGeometry){let kn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,De=Math.min(q.instanceCount,kn);kt.renderInstances(Le,hn,De)}else kt.render(Le,hn)};function Gd(b,U,q,k){z!==null&&b.isNodeMaterial&&z.setObject(k,b),ce===!0&&Q.setState(b,q,!1),b.transparent===!0&&b.side===Bn&&b.forceSinglePass===!1?(b.side=On,b.needsUpdate=!0,Ko(b,U,k),b.side=Gs,b.needsUpdate=!0,Ko(b,U,k),b.side=Bn):Ko(b,U,k)}this.compile=function(b,U,q=null){q===null&&(q=b),z!==null&&z.renderStart(b,U,q),E=$.get(q),E.init(U),w.push(E),q.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),b!==q&&b.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),Te=this.localClippingEnabled,ce=Q.init(this.clippingPlanes,Te),ce===!0&&Q.setGlobalState(this.clippingPlanes,U),z!==null&&de.render(E.state.shadowsArray,q,U);let k=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ye=G.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){let ge=ye[Pe];Gd(ge,q,U,G),k.add(ge)}else Gd(ye,q,U,G),k.add(ye)}),E=w.pop(),z!==null&&z.renderEnd(),k},this.compileAsync=function(b,U,q=null){let k=this.compile(b,U,q);return new Promise(G=>{function ye(){if(k.forEach(function(Pe){let Ee=Ge.get(Pe).currentProgram;(Ee===void 0||Ee.isReady())&&k.delete(Pe)}),k.size===0){G(b);return}setTimeout(ye,10)}xt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let ru=null;function Ag(b){ru&&ru(b)}function Vd(){tr.stop()}function Wd(){tr.start()}let tr=new Qm;tr.setAnimationLoop(Ag),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(b){ru=b,ae.setAnimationLoop(b),b===null?tr.stop():tr.start()},ae.addEventListener("sessionstart",Vd),ae.addEventListener("sessionend",Wd),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(b,U);let q=ae.enabled===!0&&ae.isPresenting===!0,k=P!==null&&(re===null||q)&&P.begin(I,re);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,U,re),E=$.get(b,w.length),E.init(U),E.state.textureUnits=Qe.getTextureUnits(),w.push(E),ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?fe.setFromArrayCamera(U):ne.setFromProjectionMatrix(ve,vi,U.reversedDepth),Te=this.localClippingEnabled,ce=Q.init(this.clippingPlanes,Te),T=_e.get(b,_.length),T.init(),_.push(T),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let Pe=I.xr.getDepthSensingMesh();Pe!==null&&ou(Pe,U,-1/0,I.sortObjects)}ou(b,U,0,I.sortObjects),T.finish(),z!==null&&z.updateLights(E.state.lightsArray),I.sortObjects===!0&&T.sort(He,Wt),St=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,St&&L.addToRenderList(T,b),this.info.autoReset===!0&&this.info.reset(),ce===!0&&Q.beginShadows();let G=E.state.shadowsArray;if(de.render(G,b,U),ce===!0&&Q.endShadows(),(k&&P.hasRenderPass())===!1){let Pe=T.opaque,ge=T.transmissive;if(E.setupLights(),U.isArrayCamera){let Ee=U.cameras;if(ge.length>0)for(let Ue=0,nt=Ee.length;Ue<nt;Ue++){let bt=Ee[Ue];qd(Pe,ge,b,bt)}St&&L.render(b);for(let Ue=0,nt=Ee.length;Ue<nt;Ue++){let bt=Ee[Ue];Xd(T,b,bt,bt.viewport)}}else ge.length>0&&qd(Pe,ge,b,U),St&&L.render(b),Xd(T,b,U)}re!==null&&W===0&&(Qe.updateMultisampleRenderTarget(re),Qe.updateRenderTargetMipmap(re)),k&&P.end(I),b.isScene===!0&&b.onAfterRender(I,b,U),ue.resetDefaultState(),Y=-1,te=null,w.pop(),w.length>0?(E=w[w.length-1],Qe.setTextureUnits(E.state.textureUnits),ce===!0&&Q.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,z!==null&&z.renderEnd()};function ou(b,U,q,k){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){let Pe=U.isArrayCamera?fe:ne;if(!b.frustumCulled||b.intersectsFrustum(Pe)){k&&Fe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ve);let ge=oe.update(b),Ee=b.material;Ee.visible&&T.push(b,ge,Ee,q,Fe.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let Pe=U.isArrayCamera?fe:ne;if(!b.frustumCulled||b.intersectsFrustum(Pe)){let ge=oe.update(b),Ee=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Fe.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Fe.copy(ge.boundingSphere.center)),Fe.applyMatrix4(b.matrixWorld).applyMatrix4(ve)),Array.isArray(Ee)){let Ue=ge.groups;for(let nt=0,bt=Ue.length;nt<bt;nt++){let Le=Ue[nt],wt=Ee[Le.materialIndex];wt&&wt.visible&&T.push(b,ge,wt,q,Fe.z,Le,U)}}else Ee.visible&&T.push(b,ge,Ee,q,Fe.z,null,U)}}}let ye=b.children;for(let Pe=0,ge=ye.length;Pe<ge;Pe++)ou(ye[Pe],U,q,k)}function Xd(b,U,q,k){let{opaque:G,transmissive:ye,transparent:Pe}=b;E.setupLightsView(q),ce===!0&&Q.setGlobalState(I.clippingPlanes,q),k&&xe.viewport(ie.copy(k)),G.length>0&&dl(G,U,q),ye.length>0&&dl(ye,U,q),Pe.length>0&&dl(Pe,U,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function qd(b,U,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let Le=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new ui(1,1,{generateMipmaps:!0,type:Le?Di:oi,minFilter:ps,samples:Math.max(4,zt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Et.workingColorSpace})}let ye=E.state.transmissionRenderTarget[k.id],Pe=k.viewport||ie;ye.setSize(Pe.z*I.transmissionResolutionScale,Pe.w*I.transmissionResolutionScale);let ge=I.getRenderTarget(),Ee=I.getActiveCubeFace(),Ue=I.getActiveMipmapLevel();I.setRenderTarget(ye),I.getClearColor(K),Me=I.getClearAlpha(),Me<1&&I.setClearColor(16777215,.5),I.clear(),St&&L.render(q);let nt=I.toneMapping;I.toneMapping=Zi;let bt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),ce===!0&&Q.setGlobalState(I.clippingPlanes,k),dl(b,q,k),Qe.updateMultisampleRenderTarget(ye),Qe.updateRenderTargetMipmap(ye),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let wt=0,hn=U.length;wt<hn;wt++){let Vt=U[wt],{object:kt,geometry:kn,material:De,group:ei}=Vt;if(De.side===Bn&&kt.layers.test(k.layers)){let Lt=De.side;De.side=On,De.needsUpdate=!0,Yd(kt,q,k,kn,De,ei),De.side=Lt,De.needsUpdate=!0,Le=!0}}Le===!0&&(Qe.updateMultisampleRenderTarget(ye),Qe.updateRenderTargetMipmap(ye))}I.setRenderTarget(ge,Ee,Ue),I.setClearColor(K,Me),bt!==void 0&&(k.viewport=bt),I.toneMapping=nt}function dl(b,U,q){let k=U.isScene===!0?U.overrideMaterial:null;for(let G=0,ye=b.length;G<ye;G++){let Pe=b[G],{object:ge,geometry:Ee,group:Ue}=Pe,nt=Pe.material;nt.allowOverride===!0&&k!==null&&(nt=k),ge.layers.test(q.layers)&&Yd(ge,U,q,Ee,nt,Ue)}}function Yd(b,U,q,k,G,ye){z!==null&&G.isNodeMaterial&&z.setObject(b,G),b.onBeforeRender(I,U,q,k,G,ye),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(I,U,q,k,b,ye),G.transparent===!0&&G.side===Bn&&G.forceSinglePass===!1?(G.side=On,G.needsUpdate=!0,I.renderBufferDirect(q,U,k,G,b,ye),G.side=Gs,G.needsUpdate=!0,I.renderBufferDirect(q,U,k,G,b,ye),G.side=Bn):I.renderBufferDirect(q,U,k,G,b,ye),b.onAfterRender(I,U,q,k,G,ye)}function Zd(b){let U=0;for(let q of b)q.texture!==null&&U++;return U}function Ko(b,U,q){U.isScene!==!0&&(U=vt);let k=Ge.get(b),G=E.state.lights,ye=E.state.shadowsArray,Pe=G.state.version,ge=ee.getParameters(b,G.state,ye,U,q,E.state.lightProbeGridArray),Ee=ee.getProgramCacheKey(ge),Ue=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let nt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=R.get(b.envMap||k.environment,nt),k.envMapRotation=k.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ue===void 0&&(b.addEventListener("dispose",Ft),Ue=new Map,k.programs=Ue,k.programVariants=new Map);let bt=Ue.get(Ee);if(bt!==void 0){if(k.currentProgram===bt&&k.lightsStateVersion===Pe)return Kd(b,ge),bt}else ge.uniforms=ee.getUniforms(b),z!==null&&b.isNodeMaterial&&z.build(b,q,ge),b.onBeforeCompile(ge,I),bt=ee.acquireProgram(ge,Ee),Ue.set(Ee,bt),k.uniforms=ge.uniforms;let Le=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=Q.uniform),Kd(b,ge),k.needsLights=Pg(b),k.lightsStateVersion=Pe,k.needsLights&&(Le.ambientLightColor.value=G.state.ambient,Le.lightProbe.value=G.state.probe,Le.sunLights.value=G.state.sun,Le.sunLightShadows.value=G.state.sunShadow,Le.directionalLights.value=G.state.directional,Le.directionalLightShadows.value=G.state.directionalShadow,Le.spotLights.value=G.state.spot,Le.spotLightShadows.value=G.state.spotShadow,Le.rectAreaLights.value=G.state.rectArea,Le.ltc_1.value=G.state.rectAreaLTC1,Le.ltc_2.value=G.state.rectAreaLTC2,Le.pointLights.value=G.state.point,Le.pointLightShadows.value=G.state.pointShadow,Le.hemisphereLights.value=G.state.hemi,Le.sunShadowMatrix.value=G.state.sunShadowMatrix,Le.sunShadowCascade.value=G.state.sunShadowCascade,Le.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Le.spotLightMatrix.value=G.state.spotLightMatrix,Le.spotLightMap.value=G.state.spotLightMap,Le.pointShadowMatrix.value=G.state.pointShadowMatrix),k.numLightProbeGrids=Zd(E.state.lightProbeGridArray),k.currentProgram=bt,k.uniformsList=null,bt}function Rg(b,U,q,k,G){let ye=Ge.get(b),Pe=ye.currentProgram.id+","+k+","+G,ge=ye.programVariants.get(Pe);return ge===void 0?(ge=Ko(b,U,q),ye.programVariants.set(Pe,ge)):(ye.currentProgram=ge,ye.uniformsList=null,ye.outputColorSpace=k,ye.toneMapping=G),ge}function Jd(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Mo.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Kd(b,U){let q=Ge.get(b);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Cg(b,U,q,k,G){U.isScene!==!0&&(U=vt),Qe.resetTextureUnits();let ye=U.fog,Pe=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,ge=re===null?I.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Et.workingColorSpace,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ue=R.get(k.envMap||Pe,Ee),nt=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,bt=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Le=!!q.morphAttributes.position,wt=!!q.morphAttributes.normal,hn=!!q.morphAttributes.color,Vt=Zi;k.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Vt=I.toneMapping);let kt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,kn=kt!==void 0?kt.length:0,De=Ge.get(k),ei=E.state.lights;if(ce===!0&&(Te===!0||b!==te)){let tn=b===te&&k.id===Y;Q.setState(k,b,tn)}let Lt=!1,nr=!1;k.version===De.__version?De.needsLights&&De.lightsStateVersion!==ei.state.version||G.isBatchedMesh&&De.batching===!1||!G.isBatchedMesh&&De.batching===!0||G.isBatchedMesh&&De.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&De.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&De.instancing===!1||!G.isInstancedMesh&&De.instancing===!0||G.isSkinnedMesh&&De.skinning===!1||!G.isSkinnedMesh&&De.skinning===!0||G.isInstancedMesh&&De.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&De.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&De.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&De.instancingMorph===!1&&G.morphTexture!==null||De.envMap!==Ue||k.fog===!0&&De.fog!==ye||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Q.numPlanes||De.numIntersection!==Q.numIntersection)||De.vertexAlphas!==nt||De.vertexTangents!==bt||De.morphTargets!==Le||De.morphNormals!==wt||De.morphColors!==hn||De.morphTargetsCount!==kn||De.numLightProbeGrids!==Zd(E.state.lightProbeGridArray)?Lt=!0:(De.outputColorSpace!==ge||De.toneMapping!==Vt)&&(nr=!0):(Lt=!0,De.__version=k.version);let Hn=De.currentProgram;(Lt===!0||nr===!0)&&(Hn=nr===!0?Rg(k,U,G,ge,Vt):Ko(k,U,G),z&&k.isNodeMaterial&&z.onUpdateProgram(k,Hn,De));let pl=!1,Ps=!1,ir=!1,Rt=Hn.getUniforms(),Un=De.uniforms;if(xe.useProgram(Hn.program)&&(pl=!0,Ps=!0,ir=!0),k.id!==Y&&(Y=k.id,Ps=!0),pl||te!==b){xe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Rt.setValue(O,"projectionMatrix",b.projectionMatrix),Rt.setValue(O,"viewMatrix",b.matrixWorldInverse);let wn=Rt.map.cameraPosition;wn!==void 0&&wn.setValue(O,st.setFromMatrixPosition(b.matrixWorld)),zt.logarithmicDepthBuffer&&Rt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Rt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),te!==b&&(te=b,Ps=!0,ir=!0)}if(De.needsLights&&(ei.state.sunShadowMap.length>0&&Rt.setValue(O,"sunShadowMap",ei.state.sunShadowMap,Qe),ei.state.directionalShadowMap.length>0&&Rt.setValue(O,"directionalShadowMap",ei.state.directionalShadowMap,Qe),ei.state.spotShadowMap.length>0&&Rt.setValue(O,"spotShadowMap",ei.state.spotShadowMap,Qe),ei.state.pointShadowMap.length>0&&Rt.setValue(O,"pointShadowMap",ei.state.pointShadowMap,Qe)),G.isSkinnedMesh){Rt.setOptional(O,G,"bindMatrix"),Rt.setOptional(O,G,"bindMatrixInverse");let tn=G.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Rt.setValue(O,"boneTexture",tn.boneTexture,Qe))}G.isBatchedMesh&&(Rt.setOptional(O,G,"batchingTexture"),Rt.setValue(O,"batchingTexture",G._matricesTexture,Qe),Rt.setOptional(O,G,"batchingIdTexture"),Rt.setValue(O,"batchingIdTexture",G._indirectTexture,Qe),Rt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&Rt.setValue(O,"batchingColorTexture",G._colorsTexture,Qe));let Ti=q.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&j.update(G,q,Hn),(Ps||De.receiveShadow!==G.receiveShadow)&&(De.receiveShadow=G.receiveShadow,Rt.setValue(O,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Un.envMapIntensity.value=U.environmentIntensity),Un.dfgLUT!==void 0&&(Un.dfgLUT.value=WS()),Ps){if(Rt.setValue(O,"toneMappingExposure",I.toneMappingExposure),De.needsLights&&Ig(Un,ir),ye&&k.fog===!0&&he.refreshFogUniforms(Un,ye),he.refreshMaterialUniforms(Un,k,Se,ke,E.state.transmissionRenderTarget[b.id]),De.needsLights&&De.numLightProbeGrids>0){let tn=v,wn=0;for(let ss of E.state.lightProbeGridArray)ss.texture!==null&&(tn.textures[wn]=ss.texture,tn.min[wn]=ss.boundingBox.min,tn.max[wn]=ss.boundingBox.max,tn.resolution[wn]=ss.resolution,wn++);for(let ss in tn)tn[ss].length=wn;Un.probesSH.value=tn.textures,Un.probesMin.value=tn.min,Un.probesMax.value=tn.max,Un.probesResolution.value=tn.resolution}Mo.upload(O,Jd(De),Un,Qe)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Mo.upload(O,Jd(De),Un,Qe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Rt.setValue(O,"center",G.center),Rt.setValue(O,"modelViewMatrix",G.modelViewMatrix),Rt.setValue(O,"normalMatrix",G.normalMatrix),Rt.setValue(O,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let tn=k.uniformsGroups;for(let wn=0,ss=tn.length;wn<ss;wn++){let Qd=tn[wn];Oe.update(Qd,Hn),Oe.bind(Qd,Hn)}}return Hn}function Ig(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Pg(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(b,U,q){let k=Ge.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ge.get(b.texture).__webglTexture=U,Ge.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let q=Ge.get(b);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,q=0){re=b,Z=U,W=q;let k=null,G=!1,ye=!1;if(b){let ge=Ge.get(b);if(ge.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(O.FRAMEBUFFER,ge.__webglFramebuffer),ie.copy(b.viewport),Ce.copy(b.scissor),We=b.scissorTest,xe.viewport(ie),xe.scissor(Ce),xe.setScissorTest(We),Y=-1;return}else if(ge.__webglFramebuffer===void 0)Qe.setupRenderTarget(b);else if(ge.__hasExternalTextures)Qe.rebindTextures(b,Ge.get(b.texture).__webglTexture,Ge.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let nt=b.depthTexture;if(ge.__boundDepthTexture!==nt){if(nt!==null&&Ge.has(nt)&&(b.width!==nt.image.width||b.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(b)}}let Ee=b.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ye=!0);let Ue=Ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?k=Ue[U][q]:k=Ue[U],G=!0):b.samples>0&&Qe.useMultisampledRTT(b)===!1?k=Ge.get(b).__webglMultisampledFramebuffer:Array.isArray(Ue)?k=Ue[q]:k=Ue,ie.copy(b.viewport),Ce.copy(b.scissor),We=b.scissorTest}else ie.copy(Xe).multiplyScalar(Se).floor(),Ce.copy(mt).multiplyScalar(Se).floor(),We=yt;if(q!==0&&(k=X),xe.bindFramebuffer(O.FRAMEBUFFER,k)&&xe.drawBuffers(b,k),xe.viewport(ie),xe.scissor(Ce),xe.setScissorTest(We),G){let ge=Ge.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,q)}else if(ye){let ge=U;for(let Ee=0;Ee<b.textures.length;Ee++){let Ue=Ge.get(b.textures[Ee]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ee,Ue.__webglTexture,q,ge)}}else if(b!==null&&q!==0){let ge=Ge.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ge.__webglTexture,q)}Y=-1};function $d(b){let U=Ge.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=zt.textureFormatReadable(b.format),U.__typeReadable=zt.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,q,k,G,ye,Pe,ge=0){if(!(b&&b.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ee=Ee[Pe],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){xe.bindFramebuffer(O.FRAMEBUFFER,Ee);try{let Ue=b.textures[ge],nt=Ue.format,bt=Ue.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge);let Le=$d(Ue);if(Le.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-k&&q>=0&&q<=b.height-G&&O.readPixels(U,q,k,G,le.convert(nt),le.convert(bt),ye)}finally{let Ue=re!==null?Ge.get(re).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(b,U,q,k,G,ye,Pe,ge=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ee=Ee[Pe],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(U>=0&&U<=b.width-k&&q>=0&&q<=b.height-G){xe.bindFramebuffer(O.FRAMEBUFFER,Ee);let Ue=b.textures[ge],nt=Ue.format,bt=Ue.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge);let Le=$d(Ue);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let wt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,wt),O.bufferData(O.PIXEL_PACK_BUFFER,ye.byteLength,O.STREAM_READ),O.readPixels(U,q,k,G,le.convert(nt),le.convert(bt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let hn=re!==null?Ge.get(re).__webglFramebuffer:null;xe.bindFramebuffer(O.FRAMEBUFFER,hn);let Vt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await vm(O,Vt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,wt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ye),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(wt),O.deleteSync(Vt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,q=0){let k=Math.pow(2,-q),G=Math.floor(b.image.width*k),ye=Math.floor(b.image.height*k),Pe=U!==null?U.x:0,ge=U!==null?U.y:0;Qe.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,Pe,ge,G,ye),xe.unbindTexture()},this.copyTextureToTexture=function(b,U,q=null,k=null,G=0,ye=0){let Pe,ge,Ee,Ue,nt,bt,Le,wt,hn,Vt=b.isCompressedTexture?b.mipmaps[ye]:b.image;if(q!==null)Pe=q.max.x-q.min.x,ge=q.max.y-q.min.y,Ee=q.isBox3?q.max.z-q.min.z:1,Ue=q.min.x,nt=q.min.y,bt=q.isBox3?q.min.z:0;else{let Rt=Math.pow(2,-G);Pe=Math.floor(Vt.width*Rt),ge=Math.floor(Vt.height*Rt),b.isDataArrayTexture?Ee=Vt.depth:b.isData3DTexture?Ee=Math.floor(Vt.depth*Rt):Ee=1,Ue=0,nt=0,bt=0}k!==null?(Le=k.x,wt=k.y,hn=k.z):(Le=0,wt=0,hn=0);let kt=le.convert(U.format),kn=le.convert(U.type),De;U.isData3DTexture?(Qe.setTexture3D(U,0),De=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Qe.setTexture2DArray(U,0),De=O.TEXTURE_2D_ARRAY):(Qe.setTexture2D(U,0),De=O.TEXTURE_2D),xe.activeTexture(O.TEXTURE0),xe.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),xe.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),xe.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let ei=xe.getParameter(O.UNPACK_ROW_LENGTH),Lt=xe.getParameter(O.UNPACK_IMAGE_HEIGHT),nr=xe.getParameter(O.UNPACK_SKIP_PIXELS),Hn=xe.getParameter(O.UNPACK_SKIP_ROWS),pl=xe.getParameter(O.UNPACK_SKIP_IMAGES);xe.pixelStorei(O.UNPACK_ROW_LENGTH,Vt.width),xe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Vt.height),xe.pixelStorei(O.UNPACK_SKIP_PIXELS,Ue),xe.pixelStorei(O.UNPACK_SKIP_ROWS,nt),xe.pixelStorei(O.UNPACK_SKIP_IMAGES,bt);let Ps=b.isDataArrayTexture||b.isData3DTexture,ir=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let Rt=Ge.get(b),Un=Ge.get(U),Ti=Ge.get(Rt.__renderTarget),tn=Ge.get(Un.__renderTarget);xe.bindFramebuffer(O.READ_FRAMEBUFFER,Ti.__webglFramebuffer),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,tn.__webglFramebuffer);for(let wn=0;wn<Ee;wn++)Ps&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.get(b).__webglTexture,G,bt+wn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.get(U).__webglTexture,ye,hn+wn)),O.blitFramebuffer(Ue,nt,Ue+Pe,nt+ge,Le,wt,Le+Pe,wt+ge,O.DEPTH_BUFFER_BIT,O.NEAREST);xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||Ge.has(b)){let Rt=Ge.get(b),Un=Ge.get(U);xe.bindFramebuffer(O.READ_FRAMEBUFFER,D),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,V);for(let Ti=0;Ti<Ee;Ti++)Ps?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.__webglTexture,G,bt+Ti):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Rt.__webglTexture,G),ir?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Un.__webglTexture,ye,hn+Ti):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Un.__webglTexture,ye),G!==0?O.blitFramebuffer(Ue,nt,Ue+Pe,nt+ge,Le,wt,Le+Pe,wt+ge,O.COLOR_BUFFER_BIT,O.NEAREST):ir?O.copyTexSubImage3D(De,ye,Le,wt,hn+Ti,Ue,nt,Pe,ge):O.copyTexSubImage2D(De,ye,Le,wt,Ue,nt,Pe,ge);xe.bindFramebuffer(O.READ_FRAMEBUFFER,null),xe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ir?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(De,ye,Le,wt,hn,Pe,ge,Ee,kt,kn,Vt.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(De,ye,Le,wt,hn,Pe,ge,Ee,kt,Vt.data):O.texSubImage3D(De,ye,Le,wt,hn,Pe,ge,Ee,kt,kn,Vt):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ye,Le,wt,Pe,ge,kt,kn,Vt.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ye,Le,wt,Vt.width,Vt.height,kt,Vt.data):O.texSubImage2D(O.TEXTURE_2D,ye,Le,wt,Pe,ge,kt,kn,Vt);xe.pixelStorei(O.UNPACK_ROW_LENGTH,ei),xe.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Lt),xe.pixelStorei(O.UNPACK_SKIP_PIXELS,nr),xe.pixelStorei(O.UNPACK_SKIP_ROWS,Hn),xe.pixelStorei(O.UNPACK_SKIP_IMAGES,pl),ye===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(De),xe.unbindTexture()},this.initRenderTarget=function(b){Ge.get(b).__webglFramebuffer===void 0&&Qe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Qe.setTextureCube(b,0):b.isData3DTexture?Qe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Qe.setTexture2DArray(b,0):Qe.setTexture2D(b,0),xe.unbindTexture()},this.resetState=function(){Z=0,W=0,re=null,xe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}};var B={clock:0,timeScale:1,hitStop:0,gameMin:1040,night:0,rain:0,wanted:0,P:null,vehicles:[],peds:[],state:"loading",save:null,frameN:0},Ot=(n,e,t)=>Math.max(e,Math.min(t,n)),It=(n,e,t)=>n+(e-n)*t;function Xs(n,e,t){let i=e-n;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return n+i*t}function zf(n,e){let t=e-n;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function bi(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var se=Math.random,et=(n,e=se)=>n[e()*n.length|0],Be=n=>document.getElementById(n);var wo=class n extends Je{constructor(){let e=n.SkyShader,t=new ri({name:e.name,uniforms:xh.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:On,depthWrite:!1});super(new Ye(1,1,1),t),this.isSky=!0}};wo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new C},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function Ui(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new qt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let f=n[h],u=0,d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=c0(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][u]);let p=c0(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function c0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new $t(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let p=0;p<t;p++){let x=h.getComponent(u,p);a.setComponent(u+f,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function u0(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l=[],c=new Map,h=[],f=["getX","getY","getZ","getW"],u=e*.5,d=Math.log10(1/e),p=Math.pow(10,d),x=u*p;for(let g=0;g<r;g++){let y=i?i.getX(g):g,S="";for(let v=0,T=a.length;v<T;v++){let E=a[v],_=n.getAttribute(E),w=_.itemSize;for(let P=0;P<w;P++)S+=`${Math.trunc(_[f[P]](y)*p+x)},`}S in t?h.push(t[S]):(l.push(y),t[S]=o,h.push(o),o++)}let m=n.clone();for(let g in n.attributes)m.setAttribute(g,h0(n.attributes[g],l,c));for(let g in n.morphAttributes)m.morphAttributes[g]=n.morphAttributes[g].map(y=>h0(y,l,c));return m.setIndex(h),m}function h0(n,e,t=new Map){let i=n.isInterleavedBufferAttribute,s=i?n.data:n,r=i?s.stride:n.itemSize,o=i?t.get(s):void 0;if(o===void 0){let l=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let h=0;h<r;h++)l[c*r+h]=s.array[e[c]*r+h];o=i?new s.constructor(l,r,s.meshPerAttribute):new n.constructor(l,n.itemSize,n.normalized,n.meshPerAttribute),o.setUsage(s.usage),i&&t.set(s,o)}let a=i?new n.constructor(o,n.itemSize,n.offset,n.normalized):o;return a.name=n.name,i||(a.gpuType=n.gpuType),a}var an=40,jt=12,ai=an+jt,rt=8,Kn=rt*ai/2,Fi=Kn+34,Mt=.18,Ae=n=>-Kn+n*ai,Ks=(n,e)=>new C(Ae(n),0,Ae(e)),Wf=(n,e)=>[Ae(n)+jt/2+an/2,Ae(e)+jt/2+an/2];function Rn(n,e){let t=n+Kn,i=e+Kn,s=Math.floor(t/ai),r=Math.floor(i/ai);if(s<0||r<0||s>=rt||r>=rt)return 0;let o=t-s*ai,a=i-r*ai;return o>jt/2&&o<ai-jt/2&&a>jt/2&&a<ai-jt/2?Mt:0}function To(n,e){let t=[];return n>0&&t.push([n-1,e]),n<rt&&t.push([n+1,e]),e>0&&t.push([n,e-1]),e<rt&&t.push([n,e+1]),t}function Ar(n,e){return[Ot(Math.round((n+Kn)/ai),0,rt),Ot(Math.round((e+Kn)/ai),0,rt)]}var Ph=[{name:"Downtown",color:"#7af0ff"},{name:"Little Havana",color:"#ff9fd0"},{name:"Uptown",color:"#c9b6ff"},{name:"Old Town",color:"#ffd166"},{name:"The Docks",color:"#8ecae6"}];function Ao(n,e){return Math.max(Math.abs(n),Math.abs(e))<62?0:n<0&&e<0?1:n>=0&&e<0?2:n<0&&e>=0?3:4}var zn=new vh({antialias:!0,powerPreference:"high-performance"});zn.domElement.id="c";zn.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6));zn.setSize(window.innerWidth,window.innerHeight);zn.toneMapping=za;zn.toneMappingExposure=.85;zn.shadowMap.enabled=!0;zn.shadowMap.type=xr;document.body.prepend(zn.domElement);var qe=new ho;qe.fog=new pa(13483954,120,620);var Cn=new ti(60,window.innerWidth/window.innerHeight,.1,5e3),Xf=new wo;Xf.scale.setScalar(4500);qe.add(Xf);var qs=Xf.material.uniforms;qs.turbidity.value=4;qs.rayleigh.value=1.6;qs.mieCoefficient.value=.005;qs.mieDirectionalG.value=.85;{let n=new So(zn),e=new ho,t=new wo;t.scale.setScalar(1e3);let i=t.material.uniforms;i.turbidity.value=4,i.rayleigh.value=1.6,i.mieCoefficient.value=.005,i.mieDirectionalG.value=.85,i.sunPosition.value.setFromSphericalCoords(1,gh.degToRad(50),3.6),e.add(t);let s=new Je(new dr(900,16),new Yt({color:5591887}));s.rotation.x=-Math.PI/2,s.position.y=-5,e.add(s),qe.environment=n.fromScene(e,.02).texture,qe.environmentIntensity=.42}var Vf=new Na(14674687,7035723,.25);qe.add(Vf);var Zn=new Oa(16772300,3.4);Zn.castShadow=!0;var wh=55;Zn.shadow.mapSize.set(2048,2048);Object.assign(Zn.shadow.camera,{left:-wh,right:wh,top:wh,bottom:-wh,near:1,far:340});Zn.shadow.bias=-4e-4;Zn.shadow.normalBias=.05;qe.add(Zn);qe.add(Zn.target);var XS=Math.min(8,zn.capabilities.getMaxAnisotropy());function Bi(n,e,t,i,s=!0){let r=document.createElement("canvas");r.width=n,r.height=e,t(r.getContext("2d"),n,e);let o=new fr(r);return s&&(o.colorSpace=Fn),i&&(o.wrapS=o.wrapT=io),o.anisotropy=XS,o}function tl(n,e,t,i,s,r,o,a=2){n.fillStyle=i,n.fillRect(0,0,e,t);for(let l=0;l<r;l++){let c=(o()-.5)*s;n.fillStyle=c>0?`rgba(255,255,255,${c})`:`rgba(0,0,0,${-c})`,n.fillRect(o()*e,o()*t,a,a)}}function el(n,e){return Bi(512,512,t=>{let i=bi(n==="brick"?11:n==="plaster"?12:n==="glass"?13:15),s=e==="e";if(n==="glass"){if(s)t.fillStyle="#000";else{let o=t.createLinearGradient(0,0,512,512);o.addColorStop(0,"#c7d9e8"),o.addColorStop(.5,"#8aa7c0"),o.addColorStop(1,"#b8cde0"),t.fillStyle=o}t.fillRect(0,0,512,512);for(let o=0;o<8;o++)for(let a=0;a<16;a++){let l=(i()-.5)*.18,c=i()<.3;s?c&&(t.fillStyle=i()<.5?"#ffe2a8":"#cfe8ff",t.fillRect(a*32+3,o*64+5,26,52)):(t.fillStyle=l>0?`rgba(255,255,255,${l})`:`rgba(0,20,40,${-l})`,t.fillRect(a*32,o*64,32,64))}t.fillStyle=s?"#000":"#3d4650";for(let o=0;o<=512;o+=32)t.fillRect(o-1.5,0,3,512);for(let o=0;o<=512;o+=64)t.fillRect(0,o-3,512,6);return}if(n==="metal"){if(t.fillStyle=s?"#000":"#b9bcbf",t.fillRect(0,0,512,512),!s)for(let o=0;o<512;o+=8)t.fillStyle=o/8%2?"rgba(0,0,0,0.12)":"rgba(255,255,255,0.08)",t.fillRect(o,0,4,512);for(let o=0;o<8;o++){let a=i()<.4,l=o*64+12;s?a&&(t.fillStyle="#ffd58a",t.fillRect(l,20,40,14)):(t.fillStyle="#4a5866",t.fillRect(l,20,40,14))}if(!s){t.fillStyle="rgba(120,60,20,0.25)";for(let o=0;o<30;o++)t.fillRect(i()*512,i()*512,2+i()*6,20+i()*60)}return}if(s)t.fillStyle="#000",t.fillRect(0,0,512,512);else if(n==="brick"){t.fillStyle="#a4a4a4",t.fillRect(0,0,512,512);for(let o=0;o<512;o+=6)for(let a=o/6%2*6;a<512;a+=12){let l=200+(i()-.5)*50|0;t.fillStyle=`rgb(${l},${l*.98|0},${l*.96|0})`,t.fillRect(a,o,11,5)}}else{tl(t,512,512,"#e9e6e0",.08,5e3,i);for(let o=0;o<8;o++)t.fillStyle="rgba(0,0,0,0.07)",t.fillRect(0,o*64+60,512,4)}let r=bi(77+n.length);for(let o=0;o<8;o++)for(let a=0;a<8;a++){let l=n==="brick"?a*64+16:a*64+10,c=n==="brick"?o*64+12:o*64+14,h=n==="brick"?32:44,f=n==="brick"?38:36,u=r()<.08,d=r()<.42,p=r()<.35,x=r()<.7;if(s){d&&(t.fillStyle=x?"#ffcf86":"#bfe0ff",t.fillRect(l,c,h,f),p&&(t.fillStyle="rgba(0,0,0,0.45)",t.fillRect(l,c,h,f*.4)));continue}n!=="brick"&&(t.fillStyle="rgba(0,0,0,0.18)",t.fillRect(l-2,c-2,h+4,f+4));let m=n==="brick"?"#ece6da":"#5a5f66";t.fillStyle=m,t.fillRect(l-3,c-3,h+6,f+6);let g=t.createLinearGradient(l,c,l+h*.6,c+f);u?(g.addColorStop(0,"#ffe7b0"),g.addColorStop(1,"#f2c27a")):(g.addColorStop(0,"#9fb6cc"),g.addColorStop(.45,"#4f6378"),g.addColorStop(1,"#2c3a4a")),t.fillStyle=g,t.fillRect(l,c,h,f),!u&&p&&(t.fillStyle="rgba(230,225,210,0.75)",t.fillRect(l,c,h,f*.4)),t.fillStyle=m,t.fillRect(l+h/2-1.5,c,3,f),t.fillRect(l,c+f*.42,h,3),n==="brick"&&(t.fillStyle="#d8d2c4",t.fillRect(l-5,c+f+3,h+10,5))}},!0)}var f0=n=>Bi(512,128,e=>{let t=bi(14),i=n==="e";e.fillStyle=i?"#000":"#3a3836",e.fillRect(0,0,512,128);let s=["#c0392b","#1f6f8b","#2d6a4f","#8e44ad","#d35400","#34495e","#b7950b"];for(let r=0;r<4;r++){let o=r*128,a=et(s,t);e.fillStyle=a,e.fillRect(o+4,6,120,22),e.fillStyle=i?"#fff":"rgba(255,255,255,0.85)";for(let l=0;l<6;l++)e.fillRect(o+14+l*17,13,11,8);if(i)e.fillStyle="#ffe2b0";else{let l=e.createLinearGradient(o,34,o,124);l.addColorStop(0,"#a9c1d4"),l.addColorStop(1,"#3f4c58"),e.fillStyle=l}e.fillRect(o+8,34,70,88),i||(e.fillStyle="rgba(255,240,200,0.35)",e.fillRect(o+12,70,62,50),e.fillStyle="#222",e.fillRect(o+84,38,36,86),e.fillStyle="#7c95a8",e.fillRect(o+88,42,28,50),e.fillStyle="#555",e.fillRect(o+8,76,70,3),e.fillRect(o+42,34,3,88))}},!0),qS=Bi(256,1024,n=>{let e=bi(5);tl(n,256,1024,"#3f4045",.14,22e3,e,2),n.fillStyle="rgba(0,0,0,0.12)",n.fillRect(52,0,30,1024),n.fillRect(174,0,30,1024);for(let t=0;t<18;t++){n.strokeStyle="rgba(20,20,22,0.5)",n.lineWidth=1.2,n.beginPath();let i=e()*256,s=e()*1024;n.moveTo(i,s);for(let r=0;r<6;r++)i+=(e()-.5)*30,s+=e()*25,n.lineTo(i,s);n.stroke()}for(let t=0;t<6;t++)n.fillStyle="rgba(10,10,12,0.25)",n.beginPath(),n.ellipse(40+e()*170,e()*1024,8+e()*14,12+e()*22,e(),0,7),n.fill();n.fillStyle="#4a4a4f",n.beginPath(),n.arc(70,500,13,0,7),n.fill(),n.strokeStyle="#2a2a2e",n.lineWidth=2;for(let t=-10;t<=10;t+=5)n.beginPath(),n.moveTo(60,500+t),n.lineTo(80,500+t),n.stroke();n.fillStyle="#e6b531",n.fillRect(122,0,5,1024),n.fillRect(131,0,5,1024),n.fillStyle="#e8e8e8",n.fillRect(8,0,5,1024),n.fillRect(243,0,5,1024)},!0),YS=Bi(256,256,n=>{tl(n,256,256,"#b4aea5",.1,6e3,bi(6)),n.fillStyle="rgba(80,70,60,0.35)";for(let e=0;e<=256;e+=64)n.fillRect(e-1,0,2,256),n.fillRect(0,e-1,256,2)},!0),x0=Bi(256,256,n=>tl(n,256,256,"#5e8a3f",.22,14e3,bi(7),2),!0),ys=Bi(128,128,n=>{let e=n.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,128,128)},!1,!1),Eh=(n,e={})=>new ut({map:el(n,"c"),emissiveMap:el(n,"e"),emissive:16777215,emissiveIntensity:0,vertexColors:!0,roughness:.85,...e}),Jn={brick:Eh("brick"),plaster:Eh("plaster",{roughness:.8}),glass:Eh("glass",{roughness:.08,metalness:.75}),metal:Eh("metal",{roughness:.6,metalness:.35}),shop:new ut({map:f0("c"),emissiveMap:f0("e"),emissive:16777215,emissiveIntensity:0,roughness:.55,metalness:.1}),cap:new ut({vertexColors:!0,roughness:.9}),side:new ut({map:YS,vertexColors:!0,roughness:.92}),grass:new ut({map:x0,vertexColors:!0,roughness:1})},_0=[Jn.brick,Jn.plaster,Jn.glass,Jn.metal,Jn.shop],xs=()=>({pos:[],nor:[],uv:[],col:[]}),Ys=new Ne;function Yn(n,e,t,i,s,r,o,a,l,c){let h=new Ye(r,o,a).toNonIndexed();h.translate(t,i+o/2,s);let f=h.attributes.position.array,u=h.attributes.normal.array,d=h.attributes.uv.array;Ys.set(l);for(let p=0;p<6;p++){let x=u[p*18+1],m=Math.abs(x)>.5||!n?e:n;if(m)for(let g=0;g<6;g++){let y=p*6+g;m.pos.push(f[y*3],f[y*3+1],f[y*3+2]),m.nor.push(u[y*3],u[y*3+1],u[y*3+2]);let S=d[y*2],v=d[y*2+1];if(m===n&&c){let T=Math.abs(u[y*3])>.5?a:r;S*=T/c,v*=o/c}m.uv.push(S,v),m.col.push(Ys.r,Ys.g,Ys.b)}}}function $i(n,e,t,i){let s=e.index?e.toNonIndexed():e,r=s.attributes.position.array,o=s.attributes.normal.array,a=s.attributes.uv?s.attributes.uv.array:null;Ys.set(t);for(let l=0;l<r.length/3;l++)n.pos.push(r[l*3],r[l*3+1],r[l*3+2]),n.nor.push(o[l*3],o[l*3+1],o[l*3+2]),i?n.uv.push(r[l*3]/i,r[l*3+2]/i):n.uv.push(a?a[l*2]:0,a?a[l*2+1]:0),n.col.push(Ys.r,Ys.g,Ys.b)}function ZS(n,e,t=!0){let i=new qt;i.setAttribute("position",new ht(n.pos,3)),i.setAttribute("normal",new ht(n.nor,3)),i.setAttribute("uv",new ht(n.uv,2)),i.setAttribute("color",new ht(n.col,3)),i.computeBoundingSphere(),i.computeBoundingBox();let s=new Je(i,e);return s.castShadow=t,s.receiveShadow=!0,s}function At(n,e,t=1){n=n.index?n.toNonIndexed():n;let i=new Ne(e),s=new Float32Array(n.attributes.position.count*3);for(let r=0;r<s.length;r+=3)s[r]=i.r*t,s[r+1]=i.g*t,s[r+2]=i.b*t;n.setAttribute("color",new $t(s,3)),n.attributes.uv||n.setAttribute("uv",new $t(new Float32Array(n.attributes.position.count*2),2));for(let r of Object.keys(n.attributes))["position","normal","uv","color"].includes(r)||n.deleteAttribute(r);return n}var Zs=26,Ah=new Map;function Tr(n,e,t,i,s){let r={minX:n,maxX:e,minZ:t,maxZ:i,h:s};for(let o=Math.floor(n/Zs);o<=Math.floor(e/Zs);o++)for(let a=Math.floor(t/Zs);a<=Math.floor(i/Zs);a++){let l=o+","+a;Ah.has(l)||Ah.set(l,[]),Ah.get(l).push(r)}return r}var kf=[];function y0(n,e,t){kf.length=0;for(let i=Math.floor((n-t)/Zs);i<=Math.floor((n+t)/Zs);i++)for(let s=Math.floor((e-t)/Zs);s<=Math.floor((e+t)/Zs);s++){let r=Ah.get(i+","+s);if(r)for(let o of r)kf.push(o)}return kf}var _n={nx:0,nz:0};function In(n,e,t){let i=!1;_n.nx=0,_n.nz=0;for(let r of y0(n.x,n.z,e+1)){if(t!==void 0&&t>r.h)continue;let o=Ot(n.x,r.minX,r.maxX),a=Ot(n.z,r.minZ,r.maxZ),l=n.x-o,c=n.z-a,h=l*l+c*c;if(h<e*e){if(h>1e-6){let f=Math.sqrt(h);n.x+=l/f*(e-f),n.z+=c/f*(e-f),_n.nx+=l/f,_n.nz+=c/f}else{let f=n.x-r.minX,u=r.maxX-n.x,d=n.z-r.minZ,p=r.maxZ-n.z,x=Math.min(f,u,d,p);x===f?(n.x=r.minX-e,_n.nx-=1):x===u?(n.x=r.maxX+e,_n.nx+=1):x===d?(n.z=r.minZ-e,_n.nz-=1):(n.z=r.maxZ+e,_n.nz+=1)}i=!0}}Math.abs(n.x)>Fi&&(_n.nx-=Math.sign(n.x),n.x=Math.sign(n.x)*Fi,i=!0),Math.abs(n.z)>Fi&&(_n.nz-=Math.sign(n.z),n.z=Math.sign(n.z)*Fi,i=!0);let s=Math.hypot(_n.nx,_n.nz);return s>0&&(_n.nx/=s,_n.nz/=s),i}function Ro(n,e,t,i){let s=Math.hypot(t-n,i-e),r=Math.ceil(s/4);for(let o=1;o<r;o++){let a=o/r,l=n+(t-n)*a,c=e+(i-e)*a;for(let h of y0(l,c,.5))if(h.h>3&&l>h.minX&&l<h.maxX&&c>h.minZ&&c<h.maxZ)return!1}return!0}var Ke=bi(20261116),Nt={brick:xs(),plaster:xs(),glass:xs(),metal:xs(),shop:xs(),caps:xs(),side:xs(),curb:xs(),grass:xs()},Rh=[],Js=[],Eo=[],Qi={bench:[],bin:[],hydrant:[],container:[]},JS={brick:["#ffffff","#e8d2c4","#f2c9b0","#d9b8a8","#f0e0d0"],plaster:["#ffffff","#f3e3c8","#e3ecf2","#f1d8cf","#e2e8d6","#efe2f0","#d8d2c8"],havana:["#ffb3c6","#9ee6d6","#ffe08a","#ffc49b","#b8e0ff","#d6b8ff","#fff1c1"],glass:["#ffffff","#cfe6ff","#d8f2ec","#e8e8f2","#c8dcf0"],metal:["#ffffff","#d7dde3","#e6ddd0","#cfd8d1","#b9c7d6"]},KS=["#9b2c2c","#2d6a4f","#264653","#c76b3a","#5b3f8c","#1f4e79"];{let n=x0.clone();n.needsUpdate=!0,n.repeat.set(200,200);let e=new Je(new Zt(2e3,2e3),new ut({map:n,roughness:1}));e.rotation.x=-Math.PI/2,e.position.y=-.02,e.receiveShadow=!0,qe.add(e)}var Ih=(()=>{let n=qS.clone();return n.needsUpdate=!0,n.repeat.set(1,(rt*ai+jt)/48),new ut({map:n,roughness:.92})})();{let n=rt*ai+jt;for(let p=0;p<=rt;p++){let x=new Je(new Zt(jt,n),Ih);x.rotation.x=-Math.PI/2,x.position.set(Ae(p),0,0),x.receiveShadow=!0,qe.add(x);let m=new Je(new Zt(jt,n),Ih);m.rotation.x=-Math.PI/2,m.rotation.z=Math.PI/2,m.position.set(0,.006,Ae(p)),m.receiveShadow=!0,qe.add(m)}let e=Bi(64,64,p=>tl(p,64,64,"#404146",.14,900,bi(9),2),!0),t=new ut({map:e,roughness:.92}),i=new ut({color:15329769,roughness:.7}),s=new dn(new Zt(jt,jt),t,(rt+1)*(rt+1)),r=0,o=new dn(new Zt(.7,3.2),i,(rt+1)*(rt+1)*24),a=0,l=new dn(new Zt(jt/2-.4,.45),i,(rt+1)*(rt+1)*4),c=0,h=new lt,f=new Xn,u=new Pi,d=new C(1,1,1);for(let p=0;p<=rt;p++)for(let x=0;x<=rt;x++){u.set(-Math.PI/2,0,0),f.setFromEuler(u),h.compose(new C(Ae(p),.012,Ae(x)),f,d),s.setMatrixAt(r++,h);for(let m=0;m<4;m++){let g=m<2,y=m%2?1:-1;for(let _=0;_<6;_++){let w=-5+_*2,P,I,N;g?(P=Ae(p)+w,I=Ae(x)+y*(jt/2+1.9),N=0):(P=Ae(p)+y*(jt/2+1.9),I=Ae(x)+w,N=Math.PI/2),u.set(-Math.PI/2,0,N),f.setFromEuler(u),h.compose(new C(P,.016,I),f,d),o.setMatrixAt(a++,h)}let S,v,T,E=jt/4+.2;m===0&&(S=Ae(p)-E,v=Ae(x)-(jt/2+3.9),T=0),m===1&&(S=Ae(p)+E,v=Ae(x)+(jt/2+3.9),T=0),m===2&&(S=Ae(p)-(jt/2+3.9),v=Ae(x)+E,T=Math.PI/2),m===3&&(S=Ae(p)+(jt/2+3.9),v=Ae(x)-E,T=Math.PI/2),u.set(-Math.PI/2,0,T),f.setFromEuler(u),h.compose(new C(S,.016,v),f,d),l.setMatrixAt(c++,h)}}s.receiveShadow=o.receiveShadow=l.receiveShadow=!0,qe.add(s,o,l)}for(let n=0;n<rt;n++)for(let e=0;e<rt;e++){let[t,i]=Wf(n,e);Yn(Nt.curb,null,t,0,i,an,Mt,an,"#a9a49c"),$i(Nt.side,new Zt(an,an).rotateX(-Math.PI/2).translate(t,Mt+.001,i),"#ffffff",3);let s=Ao(t,i),r=Math.max(Math.abs(t),Math.abs(i))/Kn,o=Ke()<.12&&r>.2&&s!==4||n===3&&e===4||n===1&&e===2;Js.push({i:n,j:e,cx:t,cz:i,park:o,dist:s});for(let f=0;f<4;f++)for(let u=-1;u<=1;u+=2){let d=u*(6+Ke()*8),p=an/2-.9,x=[[t+d,i-p,0],[t+d,i+p,Math.PI],[t-p,i+d,Math.PI/2],[t+p,i+d,-Math.PI/2]],[m,g,y]=x[f],S=Ke();S<(s===4?.1:.32)?Eo.push([m,g,.75+Ke()*.35]):S<.45?Qi.bench.push([m,g,y+Math.PI]):S<.58?Qi.bin.push([m,g,y]):S<.64&&Qi.hydrant.push([m,g,y])}if(o){Rh.push({cx:t,cz:i}),$i(Nt.grass,new Zt(an-6,an-6).rotateX(-Math.PI/2).translate(t,Mt+.01,i),"#ffffff",6),$i(Nt.side,new Zt(3,an-6).rotateX(-Math.PI/2).translate(t,Mt+.02,i),"#e8dcc0",3),$i(Nt.side,new Zt(an-6,3).rotateX(-Math.PI/2).translate(t,Mt+.021,i),"#e8dcc0",3),$i(Nt.caps,new Bt(3,3.2,.7,28).translate(t,Mt+.35,i),"#cfcbc4"),$i(Nt.caps,new Bt(2.6,2.6,.05,28).translate(t,Mt+.66,i),"#3f86b8"),$i(Nt.caps,new Bt(.35,.5,1.8,12).translate(t,Mt+.9,i),"#cfcbc4"),Tr(t-3,t+3,i-3,i+3,.9);for(let f=0;f<14;f++){let u=t+(Ke()-.5)*(an-10),d=i+(Ke()-.5)*(an-10);Math.abs(u-t)<4.5||Math.abs(d-i)<4.5||Eo.push([u,d,.9+Ke()*.6])}for(let[f,u,d]of[[t+5,i+2.2,Math.PI],[t-5,i-2.2,0],[t+2.2,i-5,Math.PI/2],[t-2.2,i+5,-Math.PI/2]])Qi.bench.push([f,u,d]);continue}let a=[12+80*Math.pow(1-r,1.4),14,38,18,12][s],l=an-6.5,c=()=>s===0?Ke()<.6?"glass":"plaster":s===1?"havana":s===2?Ke()<.5?"glass":"plaster":s===3?Ke()<.8?"brick":"plaster":"metal",h=(f,u,d,p,x)=>{let m=c();m==="glass"&&x<22&&(m="plaster");let g=m==="havana"?Nt.plaster:Nt[m],y=et(JS[m],Ke),S=m==="glass"?0:4.2;if(m==="metal"){Yn(g,Nt.caps,f,Mt,u,d,x,p,y,24);for(let E of[-1,1])Yn(null,Nt.caps,f,Mt,u+E*(p/2+.02),d*.35,4.5,.08,"#6e7378")}else m!=="glass"&&Yn(Nt.shop,null,f,Mt,u,d+.08,4.2,p+.08,"#ffffff",24),Yn(g,Nt.caps,f,Mt+S,u,d,x-S,p,y,24),m==="glass"&&Yn(Nt.caps,null,f,Mt,u,d+.4,.6,p+.4,"#3d4248");let v=Mt+x,T=m==="glass"?"#5d6670":"#8a857c";Yn(null,Nt.caps,f,v-.5,u,d+.5,.35,p+.5,T);for(let[E,_,w,P]of[[0,p/2-.15,d,.3],[0,-p/2+.15,d,.3],[d/2-.15,0,.3,p],[-d/2+.15,0,.3,p]])Yn(null,Nt.caps,f+E,v,u+_,w,.9,P,T);if(Yn(null,Nt.caps,f,v-.02,u,d-.6,.06,p-.6,"#77746e"),Ke()<.7&&Yn(null,Nt.caps,f+(Ke()-.5)*d*.4,v,u+(Ke()-.5)*p*.4,2.6,1.5,2,"#9a9ba0"),Ke()<.35&&x<40&&m!=="glass"){let E=f+(Ke()-.5)*d*.4,_=u+(Ke()-.5)*p*.4;$i(Nt.caps,new Bt(1.2,1.2,2.2,14).translate(E,v+2.4,_),"#8b5a3c"),$i(Nt.caps,new Yi(1.35,.8,14).translate(E,v+3.9,_),"#5e3c28");for(let[w,P]of[[-.8,-.8],[.8,.8],[-.8,.8],[.8,-.8]])Yn(null,Nt.caps,E+w,v,_+P,.15,1.3,.15,"#444444")}if(m==="glass"&&x>50&&(Yn(null,Nt.caps,f,v,u,d*.5,4,p*.5,"#4b535c"),$i(Nt.caps,new Bt(.08,.12,9,6).translate(f,v+8.5,u),"#cccccc")),(m==="plaster"||m==="havana"||m==="brick")&&Ke()<(m==="havana"?.95:.7)){let E=et(KS,Ke),_=Mt+3.1;Yn(null,Nt.caps,f,_,u+p/2+.7,d*.8,.12,1.4,E),Yn(null,Nt.caps,f,_-.35,u+p/2+1.38,d*.8,.35,.04,E),Yn(null,Nt.caps,f,_,u-p/2-.7,d*.8,.12,1.4,E),Yn(null,Nt.caps,f,_-.35,u-p/2-1.38,d*.8,.35,.04,E)}Tr(f-d/2,f+d/2,u-p/2,u+p/2,x)};if(s===4&&Ke()<.45){for(let f=0;f<10;f++){let u=t+(Ke()-.5)*24,d=i+(Ke()-.5)*24,p=Ke()<.5?0:Math.PI/2,x=Ke()<.4?2:1;for(let y=0;y<x;y++)Qi.container.push([u,d,p,y*2.6]);let m=p?1.25:3.05,g=p?3.05:1.25;Tr(u-m,u+m,d-g,d+g,2.6*x)}h(t+8,i-8,14,12,7)}else if(Ke()<(s===0?.3:s===4?.5:.18)){let f=26+Ke()*4,u=26+Ke()*4;h(t,i,f,u,(s===4?6:12)+Ke()*a*1.1)}else{let f=l/2;for(let u=0;u<2;u++)for(let d=0;d<2;d++){let p=t-l/2+f*(u+.5),x=i-l/2+f*(d+.5);h(p,x,11+Ke()*(f-12),11+Ke()*(f-12),6+Math.pow(Ke(),1.4)*a)}}}var v0=[];for(let[n,e,t]of[["brick",Jn.brick,!0],["plaster",Jn.plaster,!0],["glass",Jn.glass,!0],["metal",Jn.metal,!0],["shop",Jn.shop,!1],["caps",Jn.cap,!0],["curb",Jn.cap,!1],["side",Jn.side,!1],["grass",Jn.grass,!1]]){if(!Nt[n].pos.length)continue;let i=ZS(Nt[n],e,t);qe.add(i),v0.push(i)}var M0=v0.slice(0,4);{let e=new dn(new Ye(1,1,1).translate(0,.5,0),new ut({map:el("glass","c"),emissiveMap:el("glass","e"),emissive:16777215,emissiveIntensity:0,roughness:.4,metalness:.3}),140),t=new lt,i=new Xn,s=new Ne;for(let r=0;r<140;r++){let o=r/140*Math.PI*2+Ke()*.03,a=470+Ke()*280,l=30+Math.pow(Ke(),1.5)*170,c=18+Ke()*40;i.setFromAxisAngle(new C(0,1,0),Ke()*3),t.compose(new C(Math.cos(o)*a,0,Math.sin(o)*a),i,new C(c,l,c*(.6+Ke()*.8))),e.setMatrixAt(r,t),s.setHSL(.58+Ke()*.08,.15,.55+Ke()*.25),e.setColorAt(r,s)}qe.add(e),_0.push(e.material)}for(let n=0;n<160;n++){let e=n%4,t=(Ke()-.5)*2*(Fi+10),i=Fi+6+Ke()*50,s=e===0?[t,-i]:e===1?[t,i]:e===2?[-i,t]:[i,t];Eo.push([s[0],s[1],1.1+Ke()*.8])}{let n=new Bt(.16,.26,3,7);n.translate(0,1.5,0);let t=Ui([[0,3.6,0,1.5],[.8,3.1,.3,1.1],[-.65,3.2,-.45,1.15],[.1,4.45,-.2,1.05],[-.3,3,.75,1]].map(([u,d,p,x])=>{let m=new Ia(x,2),g=m.attributes.position;for(let y=0;y<g.count;y++){let S=g.getX(y),v=g.getY(y),T=g.getZ(y),E=1+.13*Math.sin(S*4.1+v*2.3)*Math.cos(T*3.7-v*1.9);g.setXYZ(y,S*E,v*E,T*E)}return m.translate(u,d,p)}));t.deleteAttribute("uv"),t=u0(t),t.computeVertexNormals();let i=t.attributes.position,s=new Float32Array(i.count*3);for(let u=0;u<i.count;u++){let d=.55+.45*Ot((i.getY(u)-2.2)/2.8,0,1);s[u*3]=s[u*3+1]=s[u*3+2]=d}t.setAttribute("color",new $t(s,3));let r=new dn(n,new ut({color:5980976,roughness:1}),Eo.length),o=new dn(t,new ut({vertexColors:!0,roughness:.92}),Eo.length),a=new lt,l=new Ne,c=new Xn,h=new C,f=new C(0,1,0);Eo.forEach(([u,d,p],x)=>{c.setFromAxisAngle(f,Ke()*6.28),h.set(p,p*(.9+Ke()*.25),p),a.compose(new C(u,Rn(u,d),d),c,h),r.setMatrixAt(x,a),o.setMatrixAt(x,a),l.setHSL(.24+Ke()*.07,.42+Ke()*.15,.3+Ke()*.1),o.setColorAt(x,l),Tr(u-.3*p,u+.3*p,d-.3*p,d+.3*p,6)}),r.castShadow=o.castShadow=!0,o.receiveShadow=!0,qe.add(r,o)}function Th(n,e,t,i){if(!n.length)return null;let s=new dn(e,t,n.length),r=new lt,o=new Xn,a=new C(1,1,1),l=new C(0,1,0);return n.forEach(([c,h,f,u=0],d)=>{o.setFromAxisAngle(l,f),r.compose(new C(c,Rn(c,h)+u,h),o,a),s.setMatrixAt(d,r),i&&Tr(c-i,c+i,h-i,h+i,1)}),s.castShadow=!0,s.receiveShadow=!0,qe.add(s),s}{let i=Ui([At(new Ye(1.8,.07,.45).translate(0,.45,0),9067062),At(new Ye(1.8,.4,.06).translate(0,.75,-.22),9067062),At(new Ye(.07,.45,.45).translate(-.8,.22,0),3093047),At(new Ye(.07,.45,.45).translate(.8,.22,0),3093047)]);Th(Qi.bench,i,new ut({vertexColors:!0,roughness:.8}),.6),Th(Qi.bin,new Bt(.28,.24,.9,12).translate(0,.45,0),new ut({color:2902586,roughness:.6,metalness:.4}),.3);let s=Ui([At(new Bt(.14,.17,.6,10).translate(0,.3,0),12592685),At(new mn(.15,10,6).translate(0,.62,0),12592685),At(new Bt(.06,.06,.42,6).rotateZ(Math.PI/2).translate(0,.4,0),12592685)]);Th(Qi.hydrant,s,new ut({vertexColors:!0,roughness:.5}),.2);let r=Th(Qi.container,new Ye(6.1,2.6,2.5).translate(0,1.3,0),new ut({color:16777215,roughness:.6,metalness:.4,map:el("metal","c")}),0);if(r){let o=new Ne;Qi.container.forEach((a,l)=>{o.set(et(["#b5482f","#2f6db5","#2f9e5a","#d9a326","#8a8f96","#7a3fa0"],Ke)),r.setColorAt(l,o)})}}var S0=[],wr=null,Ch=null,ja=null;{let n=[];for(let m of Js){let g=an/2-.7;n.push([m.cx-g,m.cz+5,-Math.PI/2],[m.cx+g,m.cz-5,Math.PI/2],[m.cx+5,m.cz-g,Math.PI],[m.cx-5,m.cz+g,0])}let e=Ui([new Bt(.08,.13,7,8).translate(0,3.5,0),new Ye(.08,.08,1.6).translate(0,6.9,.75)]),t=new Ye(.35,.14,.7).translate(0,6.85,1.45),i=new dn(e,new ut({color:3816770,metalness:.6,roughness:.45}),n.length);Ch=new dn(t,new ut({color:16777215,emissive:16773832,emissiveIntensity:.3}),n.length),ja=new dn(new Zt(9,9).rotateX(-Math.PI/2),new Yt({color:16767392,map:ys,transparent:!0,opacity:0,blending:Mi,depthWrite:!1}),n.length);let s=new lt,r=new Xn,o=new C(1,1,1),a=new C(0,1,0);n.forEach(([m,g,y],S)=>{r.setFromAxisAngle(a,y),s.compose(new C(m,Mt,g),r,o),i.setMatrixAt(S,s),Ch.setMatrixAt(S,s);let v=Math.sin(y),T=Math.cos(y);s.makeTranslation(m+v*1.6,.05,g+T*1.6),ja.setMatrixAt(S,s),Tr(m-.15,m+.15,g-.15,g+.15,7)}),i.castShadow=!0,ja.renderOrder=2,qe.add(i,Ch,ja);let l=Ui([new Bt(.09,.12,5.4,8).translate(0,2.7,0),new Bt(.06,.06,3.6,6).rotateX(Math.PI/2).translate(0,5.3,1.8)]),c=new Ye(.42,1.2,.32).translate(0,4.75,3.3),h=new mn(.15,10,8).translate(.22,4.75,3.3),f=(rt+1)*(rt+1)*2,u=new dn(l,new ut({color:2829875,metalness:.5,roughness:.5}),f),d=new dn(c,new ut({color:1776928,roughness:.6}),f);wr=new dn(h,new Yt({color:16777215,toneMapped:!1}),f);let p=0,x=new Ne(3211104);for(let m=0;m<=rt;m++)for(let g=0;g<=rt;g++){let y=jt/2+.6,S=[[Ae(m)-y,Ae(g)-y,Math.PI/2,1],[Ae(m)+y,Ae(g)+y,-Math.PI/2,1],[Ae(m)+y,Ae(g)-y,0,0],[Ae(m)-y,Ae(g)+y,Math.PI,0]];for(let[v,T,E,_]of S.filter((w,P)=>P%2===(m+g)%2))r.setFromAxisAngle(a,E),s.compose(new C(v,Mt,T),r,o),u.setMatrixAt(p,s),d.setMatrixAt(p,s),wr.setMatrixAt(p,s),wr.setColorAt(p,x),S0.push({i:m,j:g,axis:_,k:p}),Tr(v-.15,v+.15,T-.15,T+.15,6),p++}u.count=d.count=wr.count=p,u.castShadow=d.castShadow=!0,qe.add(u,d,wr)}var b0=(n,e)=>(n*3+e*5)%7*1.7;function qf(n,e,t){return Math.floor((t+b0(n,e))/10)%2}function Yf(n,e,t){return(t+b0(n,e))%10>8.4}var d0=-1,$S=new Ne(2883434),QS=new Ne(16724016),jS=new Ne(16760832);function Zf(n){let e=Math.floor(n*2);if(e!==d0){d0=e;for(let t of S0)wr.setColorAt(t.k,qf(t.i,t.j,n)===t.axis?Yf(t.i,t.j,n)?jS:$S:QS);wr.instanceColor.needsUpdate=!0}}function Co(n,e={}){let{w:t=6,h:i=1.4,bg:s="#111",fg:r="#ff2fa0",font:o="900 italic",neon:a=!0,sub:l=null}=e,c=Bi(512,Math.round(512*i/t),(f,u,d)=>{f.fillStyle=s,f.fillRect(0,0,u,d),f.strokeStyle=r,f.lineWidth=6,f.strokeRect(8,8,u-16,d-16),f.fillStyle=r,f.textAlign="center",f.textBaseline="middle",a&&(f.shadowColor=r,f.shadowBlur=18);let p=d*(l?.5:.62);for(f.font=`${o} ${p}px sans-serif`;f.measureText(n).width>u-40&&p>10;)p-=2,f.font=`${o} ${p}px sans-serif`;f.fillText(n,u/2,l?d*.4:d/2+2),l&&(f.font=`700 ${d*.22}px sans-serif`,f.fillText(l,u/2,d*.78))});return new Je(new Zt(t,i),new Yt({map:c,toneMapped:!a,side:Bn}))}function vs(n,e=2.6){let t=new Wn,i=new Je(new Bt(e,e,40,32,1,!0),new Yt({color:n,transparent:!0,opacity:.22,side:Bn,depthWrite:!1,blending:Mi,fog:!1,toneMapped:!1}));i.position.y=20,t.add(i);let s=new Je(new Pa(e*.85,e*1.05,40),new Yt({color:n,side:Bn,transparent:!0,opacity:.9,toneMapped:!1}));return s.rotation.x=-Math.PI/2,s.position.y=.25,t.add(s),t.userData.ring=s,t.userData.beam=i,qe.add(t),t}function w0(n,e){n.userData.beam.material.color.setHex(e),n.userData.ring.material.color.setHex(e)}function _t(n,e,t,i=0,s=2.4){let[r,o]=Wf(n,e),a=an/2-s,l=[[r+i,o-a,Math.PI],[r+i,o+a,0],[r-a,o+i,-Math.PI/2],[r+a,o+i,Math.PI/2]][t];return{x:l[0],z:l[1],yaw:l[2],i:n,j:e,side:t}}function Ht(n,e,t,i=0){let[s,r]=Wf(n,e),o=an/2+1.1;return t===0?{x:s+i,z:r-o,yaw:Math.PI/2}:t===1?{x:s+i,z:r+o,yaw:-Math.PI/2}:t===2?{x:s-o,z:r+i,yaw:Math.PI}:{x:s+o,z:r+i,yaw:0}}function Io(n,e,t,i=4.4){let s=Co(e,t),r=Math.sin(n.yaw),o=Math.cos(n.yaw);return s.position.set(n.x-r*.8,i,n.z-o*.8),s.rotation.y=n.yaw,qe.add(s),s}var Re={safehouse:_t(4,4,2,-11,1.8),garage:Ht(4,4,2,-2),stores:[_t(2,2,1),_t(5,3,0),_t(1,5,3),_t(6,6,2,4),_t(3,6,1,-6),_t(6,1,2)],spray:[Ht(2,4,3,6),Ht(6,2,1,-4)],police:_t(3,1,1,4),hospital:_t(5,5,0,0),club:_t(4,3,1,0),vinny:_t(1,6,0,-8),lucia:_t(6,5,3,0),chop:Ht(7,7,0,0),props:{taco:_t(3,4,0,10),carwash:Ht(5,1,2,0),club:_t(4,3,1,6),chop:_t(7,7,0,6),penthouse:_t(6,1,1,0)},rareSpots:[Ht(4,3,1,-8),Ht(2,1,0,5),Ht(7,3,2,-6),Ht(0,6,1,4),Ht(5,7,3,0)],strangerSpots:[_t(2,3,0,5),_t(5,6,1,-5),_t(1,1,3,0),_t(6,4,2,7),_t(3,7,0,3)],gangSpots:{3:[_t(0,5,1,3),_t(2,6,3,-4),_t(1,7,0,6)],4:[_t(5,6,0,8),_t(7,5,2,-2),_t(6,7,1,0)]}};Io(Re.safehouse,"HOME",{fg:"#7af0ff",w:3,h:1},3.2);Re.stores.forEach((n,e)=>Io(n,["24/7","LIQUOR","GAS & GO","MINI MART","QUIK-E","24/7"][e],{fg:["#38e07b","#ffbe0b","#ff4f4f","#7af0ff","#ff9fd0","#38e07b"][e],w:4.5,h:1.2}));Re.spray.forEach(n=>{let e=Co("PAINT & BODY",{fg:"#ffd60a",w:6,h:1.4,sub:"lose the cops \u2022 $100"});e.position.set(n.x,6.2,n.z),e.rotation.y=n.yaw+Math.PI,qe.add(e)});Io(Re.police,"POLICE",{fg:"#4da3ff",w:5,h:1.3});Io(Re.hospital,"HOSPITAL",{fg:"#ff4f4f",bg:"#fff",w:5,h:1.3,neon:!1});Io(Re.club,"NEON",{fg:"#ff2fa0",w:6,h:2,sub:"NIGHTCLUB"},5.2);Io(Re.lucia,"LUCIA'S GARAGE",{fg:"#38e07b",w:6,h:1.4});{let n=Co("CHOP SHOP",{fg:"#ff7b00",w:6,h:1.4,sub:"no questions asked"});n.position.set(Re.chop.x,5.5,Re.chop.z-3.6),qe.add(n)}var Oi=[];{let n=(()=>{let s=new ds;s.moveTo(-3,0),s.lineTo(3,0),s.lineTo(3,1.5),s.lineTo(-3,0);let r=new mr(s,{depth:2.6,bevelEnabled:!1});return r.translate(0,0,-1.3),r.rotateY(-Math.PI/2),r.computeVertexNormals(),r})(),e=Bi(128,128,s=>{s.fillStyle="#ffd60a",s.fillRect(0,0,128,128),s.fillStyle="#111";for(let r=-128;r<256;r+=32)s.beginPath(),s.moveTo(r,0),s.lineTo(r+16,0),s.lineTo(r+16+128,128),s.lineTo(r+128,128),s.fill()},!0);e.repeat.set(1.5,3);let t=new ut({map:e,roughness:.6}),i=[[2,1,1,1],[5,2,0,-1],[4,6,1,-1],[1,4,0,1],[7,3,1,1],[3,0,0,1],[6,7,0,-1],[0,2,1,-1],[8,5,1,1],[4,1,0,1]];for(let[s,r,o,a]of i){let l=Ae(r)+ai/2,c=o===1?Ae(s):l,h=o===1?l:Ae(s),f=o===1?a>0?0:Math.PI:a>0?Math.PI/2:-Math.PI/2,u=new Je(n,t);u.position.set(c,0,h),u.rotation.y=f,u.castShadow=!0,u.receiveShadow=!0,qe.add(u),Oi.push({x:c,z:h,yaw:f,len:6,w:2.6,h:1.5,id:Oi.length})}for(let[s,r,o]of[[-Fi+12,-120,0],[Fi-12,140,Math.PI]]){let a=new Je(n,t);a.position.set(s,0,r),a.rotation.y=o,a.scale.set(1.6,2.2,2),qe.add(a),Oi.push({x:s,z:r,yaw:o,len:12,w:4.2,h:3.3,id:Oi.length,mega:!0})}}var Jf=Bi(512,512,n=>{let e=bi(31);n.clearRect(0,0,512,512);for(let t=0;t<70;t++){let i=e()*512,s=e()*512,r=20+e()*60;for(let[o,a]of[[0,0],[512,0],[-512,0],[0,512],[0,-512]]){let l=n.createRadialGradient(i+o,s+a,0,i+o,s+a,r);l.addColorStop(0,"rgba(255,255,255,0.55)"),l.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=l,n.fillRect(i+o-r,s+a-r,r*2,r*2)}}},!0,!0);Jf.repeat.set(5,5);var e1=Bi(256,256,n=>{let e=n.createRadialGradient(128,128,30,128,128,128);e.addColorStop(0,"#fff"),e.addColorStop(1,"#000"),n.fillStyle=e,n.fillRect(0,0,256,256)},!1,!1),Er=new Je(new Zt(4e3,4e3).rotateX(Math.PI/2),new Yt({map:Jf,alphaMap:e1,transparent:!0,depthWrite:!1,fog:!1,color:16777215,side:Bn}));Er.position.y=320;Er.renderOrder=-1;qe.add(Er);var t1=(()=>{let e=new Float32Array(2700),t=bi(8);for(let r=0;r<900;r++){let o=t()*Math.PI*2,a=Math.acos(t()*.95);e[r*3]=Math.sin(a)*Math.cos(o)*2e3,e[r*3+1]=Math.cos(a)*2e3,e[r*3+2]=Math.sin(a)*Math.sin(o)*2e3}let i=new qt;i.setAttribute("position",new $t(e,3));let s=new ur(i,new po({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}));return qe.add(s),s})(),Lh=1400,$a=(()=>{let n=new Float32Array(Lh*6),e=new qt;e.setAttribute("position",new $t(n,3));let t=new _a(e,new fo({color:11188428,transparent:!0,opacity:0,fog:!1}));return t.frustumCulled=!1,qe.add(t),t})(),_s=new Float32Array(Lh*3);for(let n=0;n<Lh;n++)_s[n*3]=(se()-.5)*60,_s[n*3+1]=se()*30,_s[n*3+2]=(se()-.5)*60;var n1=new Ne(13483954),i1=new Ne(856610),s1=new Ne(14721146),r1=new Ne(8226708),o1=new Ne(16772300),a1=new Ne(16752736),l1=new Ne(9086719),p0=new Ne,Hf=new C,m0=0,Gf=60,Qa=0;function E0(n,e){B.gameMin=(B.gameMin+n*1.5)%1440;let i=B.gameMin/1440*Math.PI*2-Math.PI/2,s=Math.sin(i),r=s*1.15;Hf.set(Math.cos(i)*.75,r,-.55).normalize();let o=Ot((s+.08)/.3,0,1),a=Ot(1-Math.abs(s-.06)/.22,0,1);B.night=1-o,B.dusk=a,Gf-=n,Gf<=0&&(Gf=90+se()*150,m0=se()<.28?.6+se()*.4:0),B.rain=It(B.rain,m0,Math.min(1,n*.08));let l=B.rain;qs.sunPosition.value.copy(Hf),qs.turbidity.value=4+l*12,qs.rayleigh.value=1.6+a*1.2-l*1.2,qs.mieCoefficient.value=.005+l*.02;let c=1-o;o>.02?(Zn.color.copy(o1).lerp(a1,a),Zn.intensity=3.4*o*(1-l*.65),Zn.position.copy(Hf).multiplyScalar(160)):(Zn.color.copy(l1),Zn.intensity=.55*(1-l*.5),Zn.position.set(-60,120,70)),Vf.intensity=.1+.2*o+Qa*3,Vf.color.setHex(o>.3?14674687:6320288),qe.environmentIntensity=.08+.36*o*(1-l*.4),zn.toneMappingExposure=.85+c*.25,p0.copy(n1).lerp(s1,a*.6).lerp(i1,c).lerp(r1,l*(1-c*.7)),qe.fog.color.copy(p0),qe.fog.near=120-l*80,qe.fog.far=620-l*380-c*120;let h=Ot(c*1.3-.15,0,1);for(let d of _0)d.emissiveIntensity=h*(d===Jn.shop?.9:1.15);if(Ch.material.emissiveIntensity=.3+h*3,ja.material.opacity=h*.55,t1.material.opacity=Ot(c-l,0,1)*.9,Er.material.opacity=.55+l*.45,Er.material.color.setRGB(It(1,.18,c)*(1-l*.45),It(1,.2,c)*(1-l*.42),It(1,.28,c)*(1-l*.38)),Jf.offset.x+=n*.0016,Er.position.x=e.x,Er.position.z=e.z,Ih.roughness=.92-l*.62,Ih.color.setScalar(1-l*.35),Jn.side.roughness=.92-l*.5,$a.material.opacity=l*.55,$a.visible=l>.02,$a.visible){let d=$a.geometry.attributes.position.array,p=26*n;for(let x=0;x<Lh;x++){let m=_s[x*3+1]-p;m<0&&(m+=30,_s[x*3]=(se()-.5)*60,_s[x*3+2]=(se()-.5)*60),_s[x*3+1]=m;let g=e.x+_s[x*3],y=e.z+_s[x*3+2];d[x*6]=g,d[x*6+1]=m,d[x*6+2]=y,d[x*6+3]=g+.08,d[x*6+4]=m+.9,d[x*6+5]=y}$a.geometry.attributes.position.needsUpdate=!0,l>.7&&se()<n*.05&&(Qa=1)}Qa=Math.max(0,Qa-n*3);let f=Math.round(e.x/2)*2,u=Math.round(e.z/2)*2;return Zn.target.position.set(f,0,u),Zn.position.x+=f,Zn.position.z+=u,Qa>.95}function T0(){let n=Math.floor(B.gameMin/60),e=Math.floor(B.gameMin%60);return(n%12||12)+":"+String(e).padStart(2,"0")+(n<12?" AM":" PM")}var g0=an/2-2.2,yn=[];{let n=new Map;for(let e of Js)for(let[t,i]of[[-1,-1],[1,-1],[1,1],[-1,1]])n.set(e.i+","+e.j+","+t+","+i,yn.length),yn.push({x:e.cx+t*g0,z:e.cz+i*g0,nb:[],dist:e.dist});for(let e of Js){let t=(s,r,o,a)=>n.get(s+","+r+","+o+","+a),i=[t(e.i,e.j,-1,-1),t(e.i,e.j,1,-1),t(e.i,e.j,1,1),t(e.i,e.j,-1,1)];for(let s=0;s<4;s++)yn[i[s]].nb.push(i[(s+1)%4]),yn[i[(s+1)%4]].nb.push(i[s]);if(e.i<rt-1)for(let s of[-1,1]){let r=t(e.i,e.j,1,s),o=t(e.i+1,e.j,-1,s);yn[r].nb.push(o),yn[o].nb.push(r)}if(e.j<rt-1)for(let s of[-1,1]){let r=t(e.i,e.j,s,1),o=t(e.i,e.j+1,s,-1);yn[r].nb.push(o),yn[o].nb.push(r)}}}function A0(n,e){let t=0,i=1e9;for(let s=0;s<yn.length;s++){let r=yn[s],o=(r.x-n)**2+(r.z-e)**2;o<i&&(i=o,t=s)}return t}var Rr=40,Po=[];{let n=new Bt(.5,.5,.1,28);n.rotateX(Math.PI/2);let e=new ut({color:16763176,metalness:1,roughness:.22,emissive:4861952}),t=bi(4242);for(let i=0;i<Rr;i++){let s,r,o=t(),a=Js[t()*Js.length|0];if(o<.55){let h=t()*4|0,f=(t()-.5)*(an-6),u=an/2-2.2;[s,r]=h===0?[a.cx+f,a.cz-u]:h===1?[a.cx+f,a.cz+u]:h===2?[a.cx-u,a.cz+f]:[a.cx+u,a.cz+f]}else if(o<.85){let h=t()*(rt+1)|0,f=(t()-.5)*rt*ai;t()<.5?[s,r]=[Ae(h)+(t()<.5?-3:3),f]:[s,r]=[f,Ae(h)+(t()<.5?-3:3)]}else{let h=Rh.length?Rh[t()*Rh.length|0]:a;s=h.cx+(t()-.5)*24,r=h.cz+8*(t()<.5?-1:1)}let l=new C(s,0,r);In(l,.8);let c=new Je(n,e);c.position.set(l.x,Rn(l.x,l.z)+1.1,l.z),c.castShadow=!0,qe.add(c),Po.push(c)}}var Uh=100,c1=[["pelvis",()=>new An(.12,.16,4,10).rotateZ(Math.PI/2).scale(1,1,.78),"pants"],["torso",()=>new An(.165,.27,6,12).scale(1.08,1,.66),"top"],["neck",()=>new Bt(.05,.055,.12,8),"skin"],["head",()=>new mn(.118,16,12).scale(.92,1.1,1),"skin"],["hair",()=>new mn(.127,16,8,0,Math.PI*2,0,Math.PI*.55).scale(.95,1.1,1.05),"hair"],["nose",()=>new mn(.022,6,4),"skin"],["eyeL",()=>new mn(.017,6,4),"eye"],["eyeR",()=>new mn(.017,6,4),"eye"],["uArmL",()=>new An(.052,.2,4,8),"top"],["uArmR",()=>new An(.052,.2,4,8),"top"],["fArmL",()=>new An(.044,.18,4,8),"sleeve"],["fArmR",()=>new An(.044,.18,4,8),"sleeve"],["handL",()=>new mn(.048,8,6).scale(.75,1.15,.55),"skin"],["handR",()=>new mn(.048,8,6).scale(.75,1.15,.55),"skin"],["thighL",()=>new An(.075,.28,4,8),"pants"],["thighR",()=>new An(.075,.28,4,8),"pants"],["shinL",()=>new An(.058,.3,4,8),"pants"],["shinR",()=>new An(.058,.3,4,8),"pants"],["footL",()=>new An(.052,.13,4,8).rotateX(Math.PI/2).scale(1,.8,1),"shoe"],["footR",()=>new An(.052,.13,4,8).rotateX(Math.PI/2).scale(1,.8,1),"shoe"]],h1=new ut({color:16777215,roughness:.75}),Fh=c1.map(([n,e,t])=>{let i=new dn(e(),h1,Uh);i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,i.instanceMatrix.setUsage(df),qe.add(i);let s=new lt().makeScale(0,0,0);for(let r=0;r<Uh;r++)i.setMatrixAt(r,s);return{name:n,im:i,key:t}}),Lo=new dn(new Zt(.95,.95).rotateX(-Math.PI/2),new Yt({color:0,alphaMap:ys,transparent:!0,opacity:.38,depthWrite:!1}),Uh);Lo.frustumCulled=!1;Lo.renderOrder=1;qe.add(Lo);var Tt={parts:{}};{let n=(e,t,i,s)=>{let r=new fn;return r.position.set(t,i,s),e&&e.add(r),r};Tt.root=n(null,0,0,0),Tt.hips=n(Tt.root,0,.93,0),Tt.parts.pelvis=n(Tt.hips,0,0,0),Tt.spine=n(Tt.hips,0,.06,0),Tt.parts.torso=n(Tt.spine,0,.25,0),Tt.parts.neck=n(Tt.spine,0,.5,0),Tt.headJ=n(Tt.spine,0,.55,0),Tt.parts.head=n(Tt.headJ,0,.12,0),Tt.parts.hair=n(Tt.headJ,0,.135,-.012),Tt.parts.nose=n(Tt.headJ,0,.115,.112),Tt.parts.eyeL=n(Tt.headJ,.04,.14,.098),Tt.parts.eyeR=n(Tt.headJ,-.04,.14,.098);for(let[e,t]of[[1,"L"],[-1,"R"]]){let i=n(Tt.spine,.215*e,.43,0);Tt["sh"+t]=i,Tt.parts["uArm"+t]=n(i,0,-.13,0);let s=n(i,0,-.27,0);Tt["el"+t]=s,Tt.parts["fArm"+t]=n(s,0,-.11,0),Tt.parts["hand"+t]=n(s,0,-.25,0);let r=n(Tt.hips,.095*e,-.04,0);Tt["hip"+t]=r,Tt.parts["thigh"+t]=n(r,0,-.2,0);let o=n(r,0,-.43,0);Tt["kn"+t]=o,Tt.parts["shin"+t]=n(o,0,-.2,0),Tt.parts["foot"+t]=n(o,0,-.42,.045)}}var Dh=["#f1c9a5","#e0ac8a","#c68642","#8d5524","#5c3a1e","#f6d7c0","#b97a57"],u1=["#e63946","#1d3557","#457b9d","#2a9d8f","#e9c46a","#f4a261","#ffffff","#222222","#6a4c93","#8ac926","#ff99c8","#adb5bd","#3a5a40","#bc6c25"],f1=["#1b263b","#2b2d42","#3d405b","#222222","#5e503f","#4a6fa5","#7f5539","#adb5bd","#283618"],d1=["#1a1110","#2b1b12","#4a2f1d","#7a5230","#c9a66b","#d8c3a5","#6e6e6e","#111111"],p1=["#ffffff","#222222","#8b4513","#e63946","#1d3557","#dddddd"],nl={3:{name:"Kings",color:"#2d6a4f",accent:"#e9c46a",district:3},4:{name:"Vipers",color:"#7b2cbf",accent:"#111111",district:4}},ji={cop:()=>({skin:et(Dh),top:"#1d3557",sleeve:"#1d3557",pants:"#14213d",hair:"#0b0b0b",shoe:"#111111"}),gang:n=>({skin:et(Dh),top:nl[n].color,sleeve:se()<.5?nl[n].color:et(Dh),pants:"#1a1a1a",hair:nl[n].accent,shoe:"#f4f4f4"}),civ:()=>({skin:et(Dh),top:et(u1),pants:et(f1),hair:et(d1),shoe:et(p1)})},jf=[];for(let n=Uh-1;n>=1;n--)jf.push(n);function m1(n,e){e.sleeve=e.sleeve||(se()<.55?e.skin:e.top),e.eye="#1a1a1a";let t=new Ne;for(let i of Fh)t.set(e[i.key]),i.im.setColorAt(n,t),i.im.instanceColor.needsUpdate=!0}function ed(n,e){let t=e||ji.civ();return m1(n,t),{idx:n,look:t,pos:new C,yaw:0,speed:0,ph:se()*6,air:!1,down:0,scale:.94+se()*.12,hide:!1,armsUp:0,punchT:0,punchArm:0,guard:0,phone:0,hitT:0,cheer:0,kb:new C,hp:30,maxHp:30,downMax:4}}var R0=new lt().makeScale(0,0,0),Kf=new lt;function g1(n){for(let e of Fh)e.im.setMatrixAt(n,R0);Lo.setMatrixAt(n,R0)}function Oh(n,e){let t=Tt,i=n.speed,s=Ot((i-2.4)/3.5,0,1),r=Ot(i*.3,0,.95);!n.air&&n.down<=0&&(n.ph+=e*(i<.1?0:4.6+i*1.15));let o=n.ph;t.root.position.copy(n.pos),t.root.rotation.set(0,n.yaw,0),t.root.scale.setScalar(n.hide?1e-4:n.scale);let a=i>.1?Math.abs(Math.cos(o))*.035*(.5+s):Math.sin(B.clock*2+n.idx)*.004;t.hips.position.y=.91+a-s*.03-n.guard*.06,t.hips.rotation.set(.04*r+s*.2+n.guard*.08-n.hitT*.9,Math.sin(o)*.12*r,0),t.spine.rotation.set(.02+s*.08,-Math.sin(o)*.22*r,0),t.headJ.rotation.set(-s*.2+n.hitT*.6,Math.sin(o)*.06*r,0);for(let[c,h,f]of[[t.hipL,t.knL,0],[t.hipR,t.knR,Math.PI]]){let u=Math.sin(o+f),d=Math.cos(o+f);if(n.air){c.rotation.set(f?-.25:-.85,0,0),h.rotation.set(f?.6:1.3,0,0);continue}c.rotation.set(-u*r*(.75+s*.35)-n.guard*(f?-.25:.35),0,0),h.rotation.set((.06+Math.max(0,-d)*1+(u<0?.2:0))*r*(1+s*.6)+n.guard*.4,0,0)}for(let[c,h,f,u]of[[t.shL,t.elL,Math.PI,1],[t.shR,t.elR,0,-1]]){let d=Math.sin(o+f);if(n.armsUp>0||n.cheer>0){let p=n.cheer>0?Math.sin(B.clock*14+u)*.3:0;c.rotation.set(-2.7+p,0,u*.35),h.rotation.set(-.3,0,0);continue}if(n.air){c.rotation.set(-1.2,0,u*.5),h.rotation.set(-.7,0,0);continue}c.rotation.set(-d*r*.85,0,u*(.07+s*.05)),h.rotation.set(-(.15+r*.45+s*1),0,0),n.guard>0&&(c.rotation.set(It(c.rotation.x,-1.05,n.guard),0,u*.12),h.rotation.set(It(h.rotation.x,-2,n.guard),0,0)),u===-1&&n.phone>0&&(c.rotation.set(-.35,0,-.45),h.rotation.set(-2.5,0,0))}if(n.punchT>0){let c=1-n.punchT/.3,h=Math.sin(Ot(c,0,1)*Math.PI),[f,u,d]=n.punchArm?[t.shR,t.elR,-1]:[t.shL,t.elL,1];f.rotation.set(It(-1,-1.62,h),0,d*-.1*h),u.rotation.set(It(-2,-.05,h),0,0),t.spine.rotation.y+=(n.punchArm?.45:-.45)*h,t.hips.rotation.x+=.12*h}if(n.down>0){let c=Ot(Math.min(n.down,n.downMax-n.down)/.45,0,1);t.root.rotation.x=-c*1.45,t.root.position.y+=c*.14,t.shL.rotation.set(-1.4*c,0,.6*c),t.shR.rotation.set(-1.4*c,0,-.6*c)}t.root.updateMatrixWorld(!0);for(let c of Fh)c.im.setMatrixAt(n.idx,t.parts[c.name].matrixWorld);let l=n.hide?0:(n.down>0?1.6:1)*(1-Math.min(.6,(n.pos.y-(n.ground??n.pos.y))*.3));Kf.makeScale(l,1,l),Kf.setPosition(n.pos.x,(n.ground??n.pos.y)+.03,n.pos.z),Lo.setMatrixAt(n.idx,Kf)}function C0(){for(let n of Fh)n.im.instanceMatrix.needsUpdate=!0;Lo.instanceMatrix.needsUpdate=!0}var Jt=B.peds;function x1(){return jf.pop()}function Ms(n){let e=Jt.indexOf(n);e>=0&&Jt.splice(e,1),g1(n.idx),jf.push(n.idx),n.dead=!0}function Bh(n,e,t){let i=x1();if(i===void 0)return null;let s=ed(i,e);return Object.assign(s,{kind:n,state:"walk",t:0,idle:0,atkCD:0,lat:(se()-.5)*1.6,base:1.2+se()*.45,from:0,to:0,onRoad:!1,target:null,alert:0,downMax:4}),s.pos.copy(t),s.ground=t.y,Jt.push(s),s}function td(n,e,t=50,i=150){let s=0;for(let c=0;c<40;c++){s=se()*yn.length|0;let h=yn[s],f=Math.hypot(h.x-n,h.z-e);if(f>t&&f<i)break}let r=yn[s],o=et(r.nb),a=se(),l=Bh("civ",ji.civ(),new C(It(r.x,yn[o].x,a),Mt,It(r.z,yn[o].z,a)));return l?(l.from=s,l.to=o,l.pers=se()<.18?"tough":se()<.25?"snitch":"coward",se()<.15&&(l.base=3.2+se()*1.2),l.hp=l.maxHp=l.pers==="tough"?45:28,l):null}function $s(n,e){let t=Bh("gang",ji.gang(n),new C(e.x+(se()-.5)*3,Mt,e.z+(se()-.5)*3));return t?(t.gang=n,t.state="hang",t.home={x:t.pos.x,z:t.pos.z},t.yaw=se()*6,t.hp=t.maxHp=50,t.pers="tough",t):null}function zh(n){let e=Bh("cop",ji.cop(),n.clone());return e?(e.state="chase",e.hp=e.maxHp=70,e.pers="tough",e.base=1.4,e):null}function es(n,e,t={}){let i=Bh("npc",n||ji.civ(),e.clone());return i?(i.state=t.state||"idle",i.idle=1e9,i.hp=i.maxHp=t.hp||40,i.pers=t.pers||"tough",Object.assign(i,t),i):null}var Nh=new C;function I0(){return B.P.car?B.P.car.pos:B.P.pos}function kh(n,e,t,i,s){if(n.dead)return;n.hp-=e,n.hitT=.25,n.stunT=s?.9:.6,Nh.set(n.pos.x-t.x,0,n.pos.z-t.z);let r=Nh.length()||1;n.kb.set(Nh.x/r,0,Nh.z/r).multiplyScalar(s?7:3.5),n.hp<=0&&il(n,4+se()*2.5);let o=B.hooks;i&&(n.kind==="cop"?o.crime(n.pos,2,"Assaulting an officer"):o.crime(n.pos,1,"Assault",n),n.kind==="gang"&&(B.save.gangRep[n.gang]=(B.save.gangRep[n.gang]||0)-1,P0(n.gang,n.pos))),!(n.down>0||n.scripted)&&(n.kind==="cop"||n.kind==="gang"||n.pers==="tough"?(n.state="fight",n.target=i?"player":n.target):n.pers==="snitch"&&i?(n.state="flee",n.t=2,n.fleeFrom=t.clone(),n.thenPhone=!0):(n.state="flee",n.t=4,n.fleeFrom=t.clone()))}function il(n,e){n.down=e,n.downMax=e,n.state="down",n.speed=0,n.punchT=0,n.guard=0,n.phone=0,n.kind!=="cop"&&se()<(n.kind==="gang"?.8:.4)&&B.hooks.dropCash(n.pos,n.kind==="gang"?20+(se()*50|0):5+(se()*30|0)),n.onKO&&n.onKO(n),B.hooks.ko&&B.hooks.ko(n)}function nd(n,e,t){if(n.down>0||n.dead)return;let i=Math.sin(e.yaw),s=Math.cos(e.yaw),r=-s,o=i,a=(n.pos.x-e.pos.x)*r+(n.pos.z-e.pos.z)*o>=0?1:-1;n.pos.x+=r*a*1.7+i*1.2,n.pos.z+=o*a*1.7+s*1.2,In(n.pos,.35),n.yaw=Math.atan2(-r*a,-o*a),n.hp-=25,il(n,3.5),t&&B.hooks.crime(n.pos,n.kind==="cop"?2:1,n.kind==="cop"?"Hit an officer":"Reckless driving",n)}function P0(n,e){for(let t of Jt)t.kind==="gang"&&t.gang===n&&t.down<=0&&t.pos.distanceTo(e)<28&&(t.state="fight",t.target="player")}function Hh(n,e,t,i=4){let s=new C((t||n).x,0,(t||n).z);for(let r of Jt)if(!(r.kind!=="civ"||r.down>0||r.state==="phone"||r.state==="fight"||Math.hypot(r.pos.x-n.x,r.pos.z-n.z)>e)){if(r.pers==="snitch"&&se()<.5){r.state="flee",r.t=1.2,r.thenPhone=!0,r.fleeFrom=s.clone();continue}r.state="flee",r.t=i*(.7+se()*.6),r.fleeFrom=s.clone(),se()<.35&&(r.armsUp=1.2)}}function L0(n,e){let t=Math.sin(n.yaw),i=Math.cos(n.yaw),s=null,r=1.6;for(let o of Jt){if(o.down>0||o.dead)continue;let a=o.pos.x-n.pos.x,l=o.pos.z-n.pos.z,c=Math.hypot(a,l);c>1.7||(a*t+l*i)/(c||1)<.35||c<r&&(r=c,s=o)}return s?(kh(s,e,n.pos,!0,n.combo>=2),s):null}function D0(n){let e=null,t=3.2;for(let i of Jt){if(i.down>0||i.dead)continue;let s=Math.hypot(i.pos.x-n.pos.x,i.pos.z-n.pos.z);s<t&&(t=s,e=i)}return e}function $f(n){n.from=A0(n.pos.x,n.pos.z),n.to=et(yn[n.from].nb),n.lat=(se()-.5)*1.6}function id(n,e){let t=B.P;if(n.hitT=Math.max(0,n.hitT-e*2),n.punchT=Math.max(0,n.punchT-e),n.armsUp=Math.max(0,n.armsUp-e),n.cheer=Math.max(0,n.cheer-e),n.kb.lengthSq()>.01&&(n.pos.addScaledVector(n.kb,e),n.kb.multiplyScalar(Math.max(0,1-e*7)),In(n.pos,.32,.3)),n.stunT>0&&n.down<=0){n.stunT-=e,n.speed=0,n.ground=Rn(n.pos.x,n.pos.z);return}if(n.down>0){n.down-=e,n.speed=0,n.guard=0,n.down<=0&&(n.hp=Math.max(n.hp,n.maxHp*.5),n.kind==="cop"?n.state="chase":n.kind==="gang"||n.pers==="tough"&&se()<.5?(n.state="fight",n.target="player"):n.pers==="snitch"?(n.state="phone",n.t=4):(n.state="flee",n.t=5,n.fleeFrom=t.pos.clone()),n.onUp&&n.onUp(n),n.scripted&&n.state==="fight"&&n.onUp&&n.onUp(n)),n.ground=Rn(n.pos.x,n.pos.z);return}let i=n.pos.x,s=n.pos.z,r=0,o=null,a=I0(),l=Math.hypot(a.x-n.pos.x,a.z-n.pos.z);switch(n.guard=Math.max(0,n.guard-e*3),n.state){case"walk":{if(n.idle>0){n.idle-=e;break}let d=yn[n.from],p=yn[n.to],x=p.x-d.x,m=p.z-d.z,g=Math.hypot(x,m)||1;if(i=p.x-m/g*n.lat,s=p.z+x/g*n.lat,r=n.base,Math.hypot(i-n.pos.x,s-n.pos.z)<.8){let y=p.nb.filter(S=>S!==n.from);n.from=n.to,n.to=et(y.length?y:p.nb),se()<.07&&(n.idle=1.5+se()*4)}n.kind==="cop"&&B.wanted>0&&l<40&&(n.state="chase");break}case"idle":{o=n.faceTo||null;break}case"hang":{let d=n.home;i=d.x,s=d.z,r=Math.hypot(d.x-n.pos.x,d.z-n.pos.z)>1.5?1.3:0,r===0&&(o=a),(B.save.gangRep[n.gang]||0)<=-3&&l<14&&!t.car&&(n.state="fight",n.target="player",B.hooks.toast("\u26A0\uFE0F The "+nl[n.gang].name+" recognize you!",nl[n.gang].color),P0(n.gang,n.pos));break}case"flee":{n.t-=e;let d=n.fleeFrom||a,p=n.pos.x-d.x,x=n.pos.z-d.z,m=Math.hypot(p,x)||1;i=n.pos.x+p/m*5,s=n.pos.z+x/m*5,r=6,n.t<=0&&(n.thenPhone?(n.thenPhone=!1,n.state="phone",n.t=4,B.hooks.snitch(n)):(n.state=n.kind==="cop"?"chase":"walk",$f(n)));break}case"phone":{n.phone=1,o=a,n.t-=e,n.t<=0&&(n.phone=0,B.hooks.snitchDone(n),n.state="flee",n.t=4,n.fleeFrom=a.clone());break}case"fight":{let d=n.target==="player"?t.car?null:t.pos:n.target&&!n.target.dead&&n.target.down<=0?n.target.pos:null;if(n.target==="player"&&t.dead&&(d=null),!d||Math.hypot(d.x-n.pos.x,d.z-n.pos.z)>32){n.state=n.kind==="gang"?"hang":n.kind==="cop"?"chase":n.kind==="npc"?n.afterFight||"idle":"walk",n.state==="walk"&&$f(n);break}let p=Math.hypot(d.x-n.pos.x,d.z-n.pos.z);o=d,n.guard=Math.min(1,n.guard+e*6),p>1.05&&(i=d.x,s=d.z,r=p>3?5.6:2.2),n.atkCD-=e,p<1.25&&n.atkCD<=0&&(n.atkCD=.75+se()*.7,n.punchT=.3,n.punchArm=1-n.punchArm,n.pendingHit=.13),n.pendingHit>0&&(n.pendingHit-=e,n.pendingHit<=0&&p<1.45&&(n.target==="player"?B.hooks.playerHit(n.kind==="cop"?9:6+se()*6,n.pos,n):kh(n.target,10,n.pos,!1)));break}case"chase":{if(B.wanted<=0){n.state="walk",$f(n),n.kind==="cop"&&(n.leave=20);break}if(t.car){i=a.x,s=a.z,r=l>8?6.3:0,o=a,l<5&&Math.abs(t.car.speed)<2&&B.hooks.copContact(e,n,!0);break}i=a.x,s=a.z,r=l>1.1?6.6:0,o=a,n.guard=.6,l<1.4&&B.hooks.copContact(e,n,!1),t.fighting>0&&l<1.3&&(n.state="fight",n.target="player");break}case"goto":{i=n.dest.x,s=n.dest.z,r=n.goSpeed||5,Math.hypot(i-n.pos.x,s-n.pos.z)<.7&&(n.state=n.after||"idle",n.onArrive&&n.onArrive(n));break}case"follow":{let d=Math.hypot(a.x-n.pos.x,a.z-n.pos.z);d>2.5&&(i=a.x,s=a.z,r=d>6?6:3),o=a;break}case"cheer":{n.cheer=1,o=a;break}}let c=i-n.pos.x,h=s-n.pos.z,f=Math.hypot(c,h);if(n.speed=It(n.speed,f>.05?r:0,Math.min(1,e*5)),f>.05&&r>0?n.yaw=Xs(n.yaw,Math.atan2(c,h),Math.min(1,e*8)):o&&(n.yaw=Xs(n.yaw,Math.atan2(o.x-n.pos.x,o.z-n.pos.z),Math.min(1,e*6))),n.pos.x+=Math.sin(n.yaw)*n.speed*e,n.pos.z+=Math.cos(n.yaw)*n.speed*e,!t.car&&!t.dead){let d=n.pos.x-t.pos.x,p=n.pos.z-t.pos.z,x=Math.hypot(d,p);x<.7&&x>.001&&(n.pos.x=t.pos.x+d/x*.7,n.pos.z=t.pos.z+p/x*.7)}In(n.pos,.32,.3);let u=Rn(n.pos.x,n.pos.z);n.onRoad=u===0,n.ground=u,n.pos.y=It(n.pos.y,u,Math.min(1,e*12))}var Qf=0;function N0(n,e=46){if(Qf-=n,Qf>0)return;Qf=.5;let t=I0(),i=0;for(let r of[...Jt])r.kind==="civ"&&(i++,r.pos.distanceTo(t)>190&&r.state!=="phone"&&(Ms(r),i--)),r.kind==="cop"&&r.leave!==void 0&&B.wanted<=0&&(r.leave-=.5,r.leave<=0&&r.pos.distanceTo(t)>50&&Ms(r));let s=Ao(t.x,t.z)===4?.6:B.night>.6?.75:1;for(let r=0;r<3&&i<e*s;r++)td(t.x,t.z,55,150),i++}var en={sedan:{name:"City Sedan",cost:0,value:250,max:28,acc:15,turn:1.9,color:3104680,body:"sedan",hp:100},taxi:{name:"Taxi",cost:250,value:300,max:29,acc:16,turn:2,color:15906565,body:"sedan",taxi:!0,hp:100},van:{name:"Delivery Van",cost:400,value:350,max:24,acc:12,turn:1.6,color:15856113,body:"van",hp:140},suv:{name:"SUV",cost:600,value:500,max:31,acc:16,turn:1.75,color:2962486,body:"suv",hp:130},sports:{name:"Sports Coupe",cost:1e3,value:900,max:40,acc:23,turn:2.2,color:12653087,body:"sports",hp:90},muscle:{name:"Muscle Car",cost:1800,value:1300,max:44,acc:25,turn:1.9,color:1118481,body:"sports",stripe:16760331,hp:110},super:{name:"Supercar",cost:3500,value:2500,max:55,acc:32,turn:2.45,color:16219904,body:"super",hp:85},police:{name:"Police Cruiser",cost:-1,value:1200,max:42,acc:24,turn:2.1,color:1119e3,body:"sedan",police:!0,hp:160},armored:{name:"Armored Truck",cost:-1,value:3e3,max:26,acc:11,turn:1.4,color:6253402,body:"truck",hp:320},icecream:{name:"Ice Cream Truck",cost:-1,value:800,max:22,acc:11,turn:1.6,color:16766696,body:"van",icecream:!0,hp:140,secret:!0},ghost:{name:"The Ghost",cost:-1,value:6e3,max:62,acc:38,turn:2.6,color:723727,body:"super",underglow:65505,hp:120,secret:!0},gold:{name:"Gold Rush",cost:-1,value:9e3,max:58,acc:34,turn:2.5,color:13938487,body:"super",gold:!0,hp:100,secret:!0}},_1={sedan:{L:4.6,W:1.84,wb:1.38,wr:.34,clear:.26,belt:.98,roof:1.46,zw:.95,ws:.62,zr:-1.2,rs:.5},suv:{L:4.75,W:1.95,wb:1.45,wr:.4,clear:.36,belt:1.18,roof:1.8,zw:1.1,ws:.5,zr:-2.1,rs:.18},sports:{L:4.5,W:1.9,wb:1.4,wr:.34,clear:.2,belt:.82,roof:1.22,zw:.65,ws:.72,zr:-.95,rs:.6},super:{L:4.6,W:2,wb:1.44,wr:.35,clear:.16,belt:.72,roof:1.12,zw:.55,ws:.9,zr:-.8,rs:.65},van:{L:5,W:2,wb:1.65,wr:.38,clear:.32,belt:1.15,roof:2.15,zw:1.75,ws:.55,zr:-2.48,rs:.02},truck:{L:5.8,W:2.25,wb:1.95,wr:.46,clear:.42,belt:1.35,roof:2.65,zw:2.2,ws:.4,zr:-2.85,rs:.02}};function U0(n,e,t){let i=new mr(n,{depth:e-t*2,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:3,curveSegments:10});return i.rotateY(-Math.PI/2),i.translate((e-t*2)/2,0,0),i.computeVertexNormals(),i}var y1=(n,e)=>{n=n.index?n.toNonIndexed():n;for(let t of Object.keys(n.attributes))e.includes(t)||n.deleteAttribute(t);return n},sd={};function v1(n){if(sd[n])return sd[n];let e=en[n],t=e.body,i=_1[t],s=i.L/2,r=i.wr+.07,o=new ds;o.moveTo(-s+.1,i.clear+.12),o.lineTo(-i.wb-r-.05,i.clear),o.absarc(-i.wb,i.wr+.02,r,Math.PI,0,!0),o.lineTo(i.wb-r,i.clear),o.absarc(i.wb,i.wr+.02,r,Math.PI,0,!0),o.lineTo(s-.2,i.clear),o.quadraticCurveTo(s+.04,i.clear,s+.04,i.clear+.28),o.lineTo(s,i.belt-.18),o.quadraticCurveTo(s-.04,i.belt-.02,s-.45,i.belt),o.lineTo(i.zw,i.belt+.07),o.lineTo(i.zr,i.belt+.07),o.lineTo(-s+.35,i.belt+.02),o.quadraticCurveTo(-s-.02,i.belt,-s-.02,i.belt-.25),o.lineTo(-s+.02,i.clear+.3),o.quadraticCurveTo(-s,i.clear+.12,-s+.1,i.clear+.12);let a=[U0(o,i.W,.07)],l=[],c=[],h=new ds,f=i.belt+.05;h.moveTo(i.zr,f),h.lineTo(i.zr+i.rs,i.roof-.02),h.quadraticCurveTo(i.zr+i.rs+.1,i.roof+.02,i.zr+i.rs+.25,i.roof+.02),h.lineTo(i.zw-i.ws-.2,i.roof+.02),h.quadraticCurveTo(i.zw-i.ws,i.roof,i.zw-i.ws+.05,i.roof-.05),h.lineTo(i.zw,f),h.lineTo(i.zr,f);let u=U0(h,i.W-.2,.06),d=(i.zw-i.ws+i.zr+i.rs)/2;if(t==="van"||t==="truck"){a.push(u);let T=Math.hypot(i.ws,i.roof-f);l.push(At(new Ye(i.W-.3,T*.85,.06).rotateX(-Math.atan2(i.ws,i.roof-f)).translate(0,(f+i.roof)/2,i.zw-i.ws/2+.04),1713200));for(let E of[-1,1])l.push(At(new Ye(.05,.55,.8).translate(E*(i.W/2-.08),f+.45,i.zw-i.ws-.55),1713200));if(t==="truck"){for(let E of[-1,1])l.push(At(new Ye(.05,.9,2.6).translate(E*(i.W/2+.01),1.6,-.9),4147772));l.push(At(new Ye(1,.5,.05).translate(0,1.8,-s-.03),13938487))}}else{l.push(At(u,1450027));let T=i.zw-i.ws-.15-(i.zr+i.rs+.15);a.push(new Ye(i.W-.3,.06,T).translate(0,i.roof+.03,d)),a.push(new Ye(i.W-.16,i.roof-f,.12).translate(0,(i.roof+f)/2,d-.1))}if(e.stripe&&l.push(At(new Ye(.42,.02,i.L-.3).translate(0,i.belt+.08,0),e.stripe)),e.taxi&&c.push(At(new Ye(.75,.22,.28).translate(0,i.roof+.15,d),16774848,1.2)),e.police){for(let T of[-1,1])l.push(At(new Ye(.03,.42,2.2).translate(T*(i.W/2+.005),i.belt-.3,0),15921906));l.push(At(new Ye(1.3,.1,.3).translate(0,i.roof+.07,d),2236962))}if(e.icecream){l.push(At(new Yi(.35,.8,12).rotateX(Math.PI).translate(0,i.roof+.5,0),14262374)),l.push(At(new mn(.38,12,8).translate(0,i.roof+1,0),16748487));for(let T of[-1,1])l.push(At(new Ye(.03,.8,1.6).translate(T*(i.W/2+.01),1.5,-.6),8051199))}if(t==="sports"||t==="super"){l.push(At(new Ye(i.W*.86,.05,.32).translate(0,i.belt+.3,-s+.28),1118481));for(let T of[-.55,.55])l.push(At(new Ye(.06,.26,.08).translate(T,i.belt+.15,-s+.28),1118481))}let p=s+.03,x=-s-.03,m=i.belt-.2;for(let T of[-1,1])c.push(At(new Ye(.42,.13,.08).translate(T*(i.W/2-.32),m,p-.02),16774102,1.6)),c.push(At(new Ye(.44,.13,.08).translate(T*(i.W/2-.3),m+.02,x+.02),16718362,1.1)),l.push(At(new Ye(.16,.08,.2).translate(T*(i.W/2+.06),i.belt+.12,i.zw-.15),1842204)),l.push(At(new Ye(.03,.04,.18).translate(T*(i.W/2+.01),i.belt-.12,.1),10133670));l.push(At(new Ye(i.W*.5,.2,.06).translate(0,m-.08,p),1315860)),l.push(At(new Ye(i.W+.04,.2,.18).translate(0,i.clear+.14,p-.03),2763306)),l.push(At(new Ye(i.W+.04,.2,.18).translate(0,i.clear+.14,x+.03),2763306)),l.push(At(new Ye(.5,.12,.02).translate(0,i.clear+.36,x-.01),16053492)),l.push(At(new Ye(i.W-.3,.12,i.L-.8).translate(0,i.clear+.02,0),1118481));let g=At(new Bt(i.wr,i.wr,.24,22).rotateZ(Math.PI/2),1447446),y=At(new Bt(i.wr*.64,i.wr*.64,.25,14).rotateZ(Math.PI/2),e.gold?13938487:12107460),S=At(new Bt(i.wr*.22,i.wr*.22,.26,8).rotateZ(Math.PI/2),5593438),v=[];for(let T=0;T<5;T++)v.push(At(new Ye(.255,i.wr*1.15,.06).rotateX(T*Math.PI*2/5),9080982));return sd[n]={paintG:Ui(a.map(T=>y1(T,["position","normal","uv"]))),trimG:Ui(l),lightG:Ui(c),wheelG:Ui([g,y,S,...v]),T:i}}var F0={},M1=(n,e)=>F0[n]||(F0[n]=new gr({color:n,metalness:e?1:.45,roughness:e?.2:.35,clearcoat:1,clearcoatRoughness:.08})),S1=new ut({vertexColors:!0,metalness:.4,roughness:.18}),b1=new Yt({vertexColors:!0,toneMapped:!1}),w1=new ut({vertexColors:!0,metalness:.5,roughness:.5}),E1=new Yt({color:0,alphaMap:ys,transparent:!0,opacity:.55,depthWrite:!1}),z0=new Yt({color:16773583,map:ys,transparent:!0,opacity:0,blending:Mi,depthWrite:!1}),k0=new Yt({color:16719904,toneMapped:!1}),H0=new Yt({color:2117887,toneMapped:!1}),T1=new ut({color:1841689,roughness:1});function A1(n,e){let t=en[n],{paintG:i,trimG:s,lightG:r,wheelG:o,T:a}=v1(n),l=new Wn,c=new Wn;l.add(c);let h=new Je(i,M1(e,t.gold));h.castShadow=!0,h.receiveShadow=!0,c.add(h);let f=new Je(s,S1);f.castShadow=!0,c.add(f),c.add(new Je(r,b1));let u=new Je(new Zt(a.W+.9,a.L+.9).rotateX(-Math.PI/2),E1);u.position.y=.035,u.renderOrder=1,l.add(u);let d=new Je(new Zt(4.5,13).rotateX(-Math.PI/2),z0);d.position.set(0,.04,a.L/2+6.5),d.renderOrder=2,l.add(d);let p=null;if(t.police){p=[new Je(new Ye(.55,.14,.26),k0),new Je(new Ye(.55,.14,.26),H0)];let m=(a.zw-a.ws+a.zr+a.rs)/2;p[0].position.set(-.33,a.roof+.16,m),p[1].position.set(.33,a.roof+.16,m),c.add(...p)}if(t.underglow){let m=new Je(new Zt(a.W+1.6,a.L+1.2).rotateX(-Math.PI/2),new Yt({color:t.underglow,map:ys,transparent:!0,opacity:.85,blending:Mi,depthWrite:!1}));m.position.y=.05,l.add(m)}let x=[];for(let m of[-1,1])for(let g of[-1,1]){let y=new Wn;y.position.set(m*(a.W/2-.16),a.wr,g*a.wb);let S=new Je(o,w1);S.castShadow=!0,y.add(S),l.add(y),x.push(y)}return{g:l,body:c,wheels:x,pm:h,siren:p,beam:d,T:a}}var Vh=class{constructor(e,t){this.n=e,this.i=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.alpha=new Float32Array(e),this.size=new Float32Array(e),this.life=new Float32Array(e),this.max=new Float32Array(e),this.grow=new Float32Array(e);let i=new qt;i.setAttribute("position",new $t(this.pos,3)),i.setAttribute("color",new $t(this.col,3)),i.setAttribute("alpha",new $t(this.alpha,1)),i.setAttribute("size",new $t(this.size,1));let s=new ri({uniforms:{map:{value:ys},scale:{value:window.innerHeight*.9}},vertexShader:"attribute float alpha; attribute float size; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=size*scale/max(0.1,-mv.z); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform sampler2D map; varying float vA; varying vec3 vC; void main(){ float a=texture2D(map,gl_PointCoord).r*vA; if(a<0.01) discard; gl_FragColor=vec4(vC,a); }",transparent:!0,depthWrite:!1,blending:t?Mi:Vs});this.mesh=new ur(i,s),this.mesh.frustumCulled=!1,this.mesh.renderOrder=3,qe.add(this.mesh)}emit(e,t,i,s,r,o,a,l,c,h,f,u=1){let d=this.i;this.i=(this.i+1)%this.n,this.pos.set([e,t,i],d*3),this.vel.set([s,r,o],d*3),this.col.set([c,h,f],d*3),this.life[d]=a,this.max[d]=a,this.size[d]=l,this.grow[d]=u,this.alpha[d]=1}update(e){for(let i=0;i<this.n;i++){if(this.life[i]<=0){this.alpha[i]=0;continue}this.life[i]-=e;let s=this.life[i]/this.max[i];this.pos[i*3]+=this.vel[i*3]*e,this.pos[i*3+1]+=this.vel[i*3+1]*e,this.pos[i*3+2]+=this.vel[i*3+2]*e,this.size[i]+=this.grow[i]*e,this.alpha[i]=Math.max(0,s)*(s>.85?(1-s)/.15:1)}let t=this.mesh.geometry.attributes;t.position.needsUpdate=t.alpha.needsUpdate=t.size.needsUpdate=t.color.needsUpdate=!0}},sl=new Vh(500,!1),Ss=new Vh(400,!0);window.addEventListener("resize",()=>{sl.mesh.material.uniforms.scale.value=Ss.mesh.material.uniforms.scale.value=window.innerHeight*.9});var $n=B.vehicles;function Pn(n,e,t,i,s,r){let o=en[n],a=A1(n,e===void 0?o.color:e),l={spec:o,key:n,mesh:a,pos:new C(t,0,i),vel:new C,y:0,vy:0,air:!1,airT:0,yaw:s,speed:0,ai:null,role:null,stun:0,wait:0,ghost:0,steerVis:0,hp:o.hp,maxHp:o.hp,nitro:1,drift:0,stuckT:0,revT:0,pitch:0};return a.g.position.copy(l.pos),a.g.rotation.y=s,qe.add(a.g),$n.push(l),r&&rl(l),l}function bs(n){qe.remove(n.mesh.g);let e=$n.indexOf(n);e>=0&&$n.splice(e,1),n.removed=!0}function od(n){if(!n.wrecked){n.wrecked=!0,n.hp=0,n.ai=null,n.mesh.pm.material=T1,n.burn=8;for(let e=0;e<30;e++)Ss.emit(n.pos.x,1,n.pos.z,(se()-.5)*8,3+se()*6,(se()-.5)*8,.6+se()*.5,2.5,1,.5+se()*.3,.1,2);B.hooks.carWrecked(n)}}function Gh(n,e){n.wrecked||n.invuln||(n.hp-=e,n.hp<=0&&od(n))}var Cr=new C;function Pr(n,e,t){let i=n.spec;n.wrecked&&(e={thr:0,steer:0,hb:!0});let s=n===B.P.car,r=s?1+(B.save.skills.drive||0)*.0015:1,o=e.nitro&&n.nitro>.02&&!n.air;o?n.nitro=Math.max(0,n.nitro-t*.33):n.nitro=Math.min(1,n.nitro+t*.06),n.nitroOn=o;let a=i.max*r*(o?1.32:1)*(B.rain>.5?.95:1);if(n.air){if(n.vy-=17*t,n.y+=n.vy*t,n.airT+=t,n.yaw-=e.steer*.6*t,n.pos.x+=n.vel.x*t,n.pos.z+=n.vel.z*t,n.y<=Rn(n.pos.x,n.pos.z)){let u=-n.vy;n.y=Rn(n.pos.x,n.pos.z),n.vy=0,n.air=!1,u>13&&Gh(n,(u-13)*2),B.hooks.landed&&B.hooks.landed(n,n.airT),n.airT=0}}else{let u=Math.sin(n.yaw),d=Math.cos(n.yaw),p=n.vel.x*u+n.vel.z*d,x=e.steer*i.turn*Math.min(1,Math.abs(p)/7)*Math.sign(p||1)*(e.hb?1.75:1)*(1-Math.min(.42,Math.abs(p)/a*.42));n.yaw-=x*t;let m=Math.sin(n.yaw),g=Math.cos(n.yaw),y=n.vel.x*m+n.vel.z*g,S=n.vel.x*-g+n.vel.z*m,v=e.thr;v>.05?y<-.5?y+=32*t*v:y+=i.acc*v*t*(1-Math.max(0,y)/a*.55)*(o?1.9:1):v<-.05?y>.5?y-=34*t*-v:y-=i.acc*.55*-v*t:y*=1-.55*t,o&&v<=.05&&(y+=i.acc*1.2*t),y>a&&(y=It(y,a,Math.min(1,t*2))),y=Ot(y,-12,a+4),e.hb&&(y*=1-.9*t);let T=e.hb?1.3:B.rain>.4?4.5:7.5;S*=Math.max(0,1-T*t),n.vel.set(m*y-g*S,0,g*y+m*S),n.speed=y,n.lat=S,n.drift=Math.abs(S)>2.6&&Math.abs(y)>7?Math.abs(S):0,n.pos.x+=n.vel.x*t,n.pos.z+=n.vel.z*t,n.y=It(n.y,Rn(n.pos.x,n.pos.z),Math.min(1,t*10));for(let E of Oi){let _=n.pos.x-E.x,w=n.pos.z-E.z;if(_*_+w*w>E.len*E.len)continue;let P=Math.sin(E.yaw),I=Math.cos(E.yaw),N=_*P+w*I,z=_*-I+w*P;if(Math.abs(z)<E.w/2+.6&&N>-E.len/2&&N<E.len/2+.2){let X=y*(m*P+g*I);X>5&&(n.y=E.h*Ot((N+E.len/2)/E.len,0,1),N>E.len/2-.4&&(n.air=!0,n.vy=X*(E.h/E.len)*1.25+(E.mega?5:2.5),n.airT=0,B.hooks.launched&&B.hooks.launched(n,E)))}}}let l=Math.sin(n.yaw),c=Math.cos(n.yaw),h=0;for(let u of[-1.45,0,1.45]){Cr.set(n.pos.x+l*u,0,n.pos.z+c*u);let d=Cr.x,p=Cr.z;if(In(Cr,1,n.y+.5)){n.pos.x+=Cr.x-d,n.pos.z+=Cr.z-p;let x=n.vel.x*_n.nx+n.vel.z*_n.nz;x<0&&(n.vel.x-=_n.nx*x*1.35,n.vel.z-=_n.nz*x*1.35,h=Math.max(h,-x))}}h>0&&(n.vel.multiplyScalar(.85),h>7&&(Gh(n,(h-6)*(s?1.4:2.2)),s&&B.hooks.impact(h),O0(n.pos,h)));for(let u of $n){if(u===n||u.removed)continue;let d=u.pos.x-n.pos.x,p=u.pos.z-n.pos.z,x=d*d+p*p;if(x>11||Math.abs(u.y-n.y)>2)continue;let m=Math.sqrt(x)||.01,g=d/m,y=p/m,S=3.3-m,v=!u.ai||u.ai.dyn;u.pos.x+=g*S*(v?.5:.7),u.pos.z+=y*S*(v?.5:.7),n.pos.x-=g*S*(v?.5:.3),n.pos.z-=y*S*(v?.5:.3);let T=(n.vel.x-u.vel.x)*g+(n.vel.z-u.vel.z)*y;if(T>0){let E=u.spec.hp>200?.3:.55;n.vel.x-=g*T*E,n.vel.z-=y*T*E,u.vel.x+=g*T*(1-E),u.vel.z+=y*T*(1-E),T>6&&(Gh(n,T*(s?.7:1.4)),Gh(u,T*(u===B.P.car?.7:1.6)),O0(Cr.set((n.pos.x+u.pos.x)/2,.7,(n.pos.z+u.pos.z)/2),T),s&&B.hooks.impact(T,u))}u.ai&&u.ai.kind==="traffic"&&(u.stun=2.5),In(u.pos,1.4,.5)}let f=Math.hypot(n.vel.x,n.vel.z);if(f>3&&!n.air){let u=Math.sign(n.speed)||1;for(let d of Jt){if(d.down>0||d.dead)continue;let p=d.pos.x-n.pos.x,x=d.pos.z-n.pos.z;if(p*p+x*x>220)continue;let m=(p*l+x*c)*u,g=Math.abs(p*c-x*l);m>-2.3&&m<2.6&&g<1.4?(nd(d,n,s),n.vel.multiplyScalar(.92),s&&B.hooks.pedHit(d)):s&&m>0&&m<10+f*.4&&g<3.5&&d.state!=="flee"&&d.kind==="civ"&&(d.state="flee",d.t=1.6,d.fleeFrom=new C(d.pos.x-c*(p*-c+x*l>=0?-1:1),0,d.pos.z))}}n.steerVis=It(n.steerVis,e.steer,Math.min(1,t*8)),n.speed=n.vel.x*Math.sin(n.yaw)+n.vel.z*Math.cos(n.yaw)}function O0(n,e){for(let t=0;t<Math.min(14,e);t++)Ss.emit(n.x,.7,n.z,(se()-.5)*9,se()*5,(se()-.5)*9,.3+se()*.3,.25,1,.8,.4,-.5)}function Ir(n,e,t,i,s={}){let r=e-n.pos.x,o=t-n.pos.z,a=Math.hypot(r,o),l=Math.atan2(r,o),c=zf(n.yaw,l),h=Ot(-c*2.4,-1,1),f=s.thr??1;if(Math.abs(c)>1.25&&n.speed>9&&(f=.15),s.stopDist&&a<s.stopDist&&(f=n.speed>1.5?-1:0),s.nextX!==void 0&&a<32){let u=Math.abs(zf(l,Math.atan2(s.nextX-e,s.nextZ-t)));u>.7&&n.speed>13+(1-u/1.6)*10&&(f=-.8)}else Math.abs(c)>.6&&n.speed>18&&(f=Math.min(f,.2));n.revT>0?(n.revT-=i,f=-1,h=-h):f>.5&&Math.abs(n.speed)<1.5?(n.stuckT+=i,n.stuckT>1.1&&(n.revT=.9,n.stuckT=0)):n.stuckT=0,Pr(n,{thr:f,steer:h,hb:Math.abs(c)>1&&n.speed>16,nitro:s.nitro&&Math.abs(c)<.25},i)}function No(n,e,t){if(Math.hypot(e-n.pos.x,t-n.pos.z)<70&&Ro(n.pos.x,n.pos.z,e,t))return n.nav=null,[e,t];let i=Ar(e,t);if(!n.nav||Math.hypot(Ae(n.nav[0])-n.pos.x,Ae(n.nav[1])-n.pos.z)<8||(n.navT-=1/60)<0){let s=n.nav&&Math.hypot(Ae(n.nav[0])-n.pos.x,Ae(n.nav[1])-n.pos.z)<8?n.nav:Ar(n.pos.x,n.pos.z);if(Math.hypot(Ae(s[0])-n.pos.x,Ae(s[1])-n.pos.z)>9&&!n.nav)n.nav=s,n.navT=3;else{let r=null,o=1e9,a=Math.sin(n.yaw),l=Math.cos(n.yaw);for(let c of To(s[0],s[1])){let h=Math.abs(c[0]-i[0])+Math.abs(c[1]-i[1])+se()*.3,f=Ae(c[0])-n.pos.x,u=Ae(c[1])-n.pos.z;f*a+u*l<-5&&(h+=1.5),h<o&&(o=h,r=c)}n.nav=r||s,n.navT=4}}return[Ae(n.nav[0]),Ae(n.nav[1])]}var rd=n=>new C(-n.z,0,n.x),Do=3;function G0(n){let e=n.ai,t=Ks(...e.a),i=Ks(...e.b),s=i.clone().sub(t).normalize(),r=rd(s);e.mode="seg",e.axis=Math.abs(s.x)>.5?0:1,e.p0=t.clone().addScaledVector(s,9).addScaledVector(r,Do),e.p2=i.clone().addScaledVector(s,-10.2).addScaledVector(r,Do),e.p1=e.p0.clone().lerp(e.p2,.5),e.len=e.p0.distanceTo(e.p2)}function R1(n,e){let t=n.ai,i=Ks(...t.a),s=Ks(...t.b),r=Ks(...e),o=s.clone().sub(i).normalize(),a=r.clone().sub(s).normalize(),l=rd(o),c=rd(a);t.mode="turn",t.t=0,t.next=e,t.p0=s.clone().addScaledVector(o,-10.2).addScaledVector(l,Do),t.p2=s.clone().addScaledVector(a,9).addScaledVector(c,Do),t.p1=o.dot(a)>.9?t.p0.clone().lerp(t.p2,.5):s.clone().addScaledVector(l,Do).addScaledVector(c,Do),t.len=(t.p0.distanceTo(t.p1)+t.p1.distanceTo(t.p2)+t.p0.distanceTo(t.p2))/2}var V0=(n,e,t)=>{let i=1-e;return t.set(0,0,0).addScaledVector(n.p0,i*i).addScaledVector(n.p1,2*i*e).addScaledVector(n.p2,e*e)},C1=new C,I1=new C,W0=new C,X0=(n,e,t)=>t.copy(n.p1).sub(n.p0).multiplyScalar(2*(1-e)).addScaledVector(C1.copy(n.p2).sub(n.p1),2*e);function rl(n,e,t,i){let s,r;if(i)for(let a=0;a<30;a++){s=se()*(rt+1)|0,r=se()*(rt+1)|0;let l=Math.hypot(Ae(s)-i.x,Ae(r)-i.z);if(l>60&&l<170)break}else s=e??se()*(rt+1)|0,r=t??se()*(rt+1)|0;n.ai={kind:"traffic",a:[s,r],b:et(To(s,r)),t:se()*.8,cruise:8.5+se()*3.5,spd:0},G0(n),V0(n.ai,n.ai.t,n.pos);let o=X0(n.ai,n.ai.t,W0);n.yaw=Math.atan2(o.x,o.z)}function P1(n,e){let t=n.ai,i=Math.sin(n.yaw),s=Math.cos(n.yaw),r=(t.mode==="turn"?t.cruise*.6:t.cruise)*(t.fast?1.9:1),o=B.P.car?B.P.car.pos:B.P.pos,a=!1,l=(h,f,u)=>{let d=h.x-n.pos.x,p=h.z-n.pos.z,x=d*i+p*s;if(!(x<=0||x>12)&&Math.abs(d*s-p*i)<u){if(f&&n.ghost>0)return;r=Math.min(r,x<5.8?0:t.cruise*(x-5.8)/6),f&&(a=!0)}};if(!t.fast){l(o,!1,2);for(let h of $n)h!==n&&h!==B.P.car&&l(h.pos,!0,2);for(let h of Jt)h.onRoad&&h.down<=0&&l(h.pos,!1,1.6)}let c=!1;if(t.mode==="seg"&&!t.fast&&(c=qf(t.b[0],t.b[1],B.clock)!==t.axis||Yf(t.b[0],t.b[1],B.clock),c)){let h=(1-t.t)*t.len;h<10&&(r=Math.min(r,h<.5?0:h*.9))}if(r<.5&&a?(n.wait+=e,n.wait>4&&(n.ghost=2.5,n.wait=0)):n.wait=0,n.ghost=Math.max(0,n.ghost-e),n.stun>0&&(n.stun-=e,r=0,n.pos.x+=n.vel.x*e,n.pos.z+=n.vel.z*e,n.vel.multiplyScalar(Math.max(0,1-e*3)),In(n.pos,1.4,.5),n.stun<=0&&(t.recover=1)),t.spd+=(r-t.spd)*Math.min(1,e*(r<t.spd?4:1.4)),t.t+=t.spd*e/Math.max(.5,t.len),t.t>=1&&(t.mode==="seg"?c?t.t=1:R1(n,et(To(...t.b).filter(h=>!(h[0]===t.a[0]&&h[1]===t.a[1])))):(t.a=t.b,t.b=t.next,t.t=0,G0(n))),n.stun<=0){let h=V0(t,Math.min(1,t.t),I1),f=t.recover?Math.min(1,e*1.5):Math.min(1,e*8);t.recover&&(t.recover-=e,t.recover<0&&(t.recover=0));let u=n.pos.x,d=n.pos.z;n.pos.lerp(h,f),n.vel.set((n.pos.x-u)/Math.max(e,1e-4),0,(n.pos.z-d)/Math.max(e,1e-4));let p=X0(t,Math.min(1,t.t),W0);p.lengthSq()>1e-4&&(n.yaw=Xs(n.yaw,Math.atan2(p.x,p.z),Math.min(1,e*8)))}if(n.speed=t.spd,t.fast)for(let h of Jt){if(h.down>0)continue;let f=h.pos.x-n.pos.x,u=h.pos.z-n.pos.z;f*f+u*u<4&&nd(h,n,!1)}}var vn=[];function q0(n,e="police"){let t=null;for(let s=0;s<30;s++){let r=se()*(rt+1)|0,o=se()*(rt+1)|0,a=Ae(r),l=Ae(o),c=Math.hypot(a-n.x,l-n.z);if(c>70&&c<140){t=[a,l];let h=a-Cn.position.x,f=l-Cn.position.z,u=new C;if(Cn.getWorldDirection(u),h*u.x+f*u.z<0)break}}if(!t)return null;let i=Pn(e,e==="police"?void 0:1119e3,t[0],t[1],Math.atan2(n.x-t[0],n.z-t[1]),!1);return i.ai={kind:"police",dyn:!0},i.role="police",i.hasCops=2,vn.push(i),i}function L1(n,e,t){let i=n.ai;if(n.wrecked)return;let s=B.P,r=t?t.pos:s.car?s.car.pos:s.pos,o=t?t.vel:s.car?s.car.vel:s.vel;if(t&&(t.removed||t.wrecked)){i.target=null,i.leaving=!0;return}let a=Math.hypot(r.x-n.pos.x,r.z-n.pos.z);if(i.leaving){let[d,p]=No(n,n.pos.x+Math.sin(n.yaw)*200,n.pos.z+Math.cos(n.yaw)*200);Ir(n,d,p,e,{thr:.6});return}if(!t&&!s.car&&a<14&&n.hasCops>0){Ir(n,r.x,r.z,e,{stopDist:30}),Math.abs(n.speed)<2&&(B.hooks.copsOut(n),n.hasCops=0,i.parked=!0);return}if(i.parked)if(s.car||a>25)i.parked=!1;else{Pr(n,{thr:0,steer:0,hb:!0},e);return}let l=Math.min(1.2,a/25),c=r.x+o.x*l,h=r.z+o.z*l,[f,u]=No(n,c,h);Ir(n,f,u,e,{nitro:a>40||B.wanted>=4,thr:1}),n.speed>n.spec.max*.9&&B.wanted>=3&&n.vel.multiplyScalar(1+e*.08)}var ws=(()=>{let n=new Wn,e=new ut({color:1911626,metalness:.5,roughness:.4}),t=new Je(new An(1.2,2.4,6,12).rotateX(Math.PI/2),e);n.add(t);let i=new Je(new mn(1.15,12,8,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2.3),new ut({color:2241348,metalness:.8,roughness:.1}));i.position.set(0,.2,1.4),n.add(i);let s=new Je(new Bt(.18,.35,4.5,8).rotateX(Math.PI/2),e);s.position.set(0,.3,-3.6),n.add(s);let r=new Je(new Ye(.1,1.2,.8),e);r.position.set(0,.8,-5.6),n.add(r);let o=new Je(new Ye(9,.05,.3),new ut({color:1118481}));o.position.y=1.5,n.add(o);let a=o.clone();a.rotation.y=Math.PI/2,o.add(a);for(let h of[-1,1]){let f=new Je(new Ye(.1,.1,3.4),new ut({color:2236962}));f.position.set(h*.9,-1.4,0),n.add(f)}let l=new Je(new Yi(7,42,24,1,!0).translate(0,-21,0),new Yt({color:16774352,transparent:!0,opacity:.1,blending:Mi,depthWrite:!1,side:Bn}));qe.add(l),l.visible=!1;let c=new Je(new dr(7,24).rotateX(-Math.PI/2),new Yt({color:16774352,map:ys,transparent:!0,opacity:.5,blending:Mi,depthWrite:!1}));return qe.add(c),n.visible=!1,c.visible=!1,qe.add(n),{g:n,rotor:o,cone:l,spot:c,pos:new C(0,60,0),active:!1}})(),D1=new C,N1=new C;function Y0(n,e){let t=ws;if(!t.active){t.g.visible&&(t.pos.y+=n*12,t.g.position.copy(t.pos),t.cone.visible=!1,t.pos.y>140&&(t.g.visible=!1,t.spot.visible=!1));return}t.g.visible||(t.g.visible=!0,t.spot.visible=!0,t.pos.set(e.x+120,70,e.z+120));let i=e.x+Math.sin(B.clock*.3)*14,s=e.z+Math.cos(B.clock*.3)*14;t.pos.x=It(t.pos.x,i,Math.min(1,n*.6)),t.pos.z=It(t.pos.z,s,Math.min(1,n*.6)),t.pos.y=It(t.pos.y,42,Math.min(1,n*.5)),t.g.position.copy(t.pos),t.g.rotation.y=Math.atan2(e.x-t.pos.x,e.z-t.pos.z),t.g.rotation.x=.12,t.rotor.rotation.y+=n*28;let r=It(t.spot.position.x||e.x,e.x,Math.min(1,n*1.5)),o=It(t.spot.position.z||e.z,e.z,Math.min(1,n*1.5));t.spot.position.set(r,.08,o),t.cone.visible=!0,t.cone.position.copy(t.pos),t.cone.quaternion.setFromUnitVectors(D1.set(0,-1,0),N1.set(r-t.pos.x,-t.pos.y,o-t.pos.z).normalize());let a=Math.hypot(r-t.pos.x,t.pos.y,o-t.pos.z);t.cone.scale.set(1,a/42,1)}var B0=0;function ad(n,e){B0+=n;let t=Math.floor(B0*6)%2;k0.color.setRGB(t?3:.3,.1,.1),H0.color.setRGB(.1,.2,t?.3:3);for(let i of[...$n])i.removed||i!==B.P.car&&(i.ai?i.ai.kind==="traffic"?P1(i,n):i.ai.kind==="police"?L1(i,n,i.ai.target||null):i.ai.kind==="drive"&&i.ai.fn&&i.ai.fn(i,n):(i.wrecked,(Math.hypot(i.vel.x,i.vel.z)>.05||i.air)&&Pr(i,{thr:0,steer:0,hb:!0},n)))}function Z0(n){let e=B.night;z0.opacity=Ot(e*1.2-.2,0,1)*.45;for(let t of $n){let i=t.mesh;i.g.position.set(t.pos.x,t.y,t.pos.z),i.g.rotation.y=t.yaw;let s=t===B.P.car,r=s?-t.steerVis*Math.min(1,Math.abs(t.speed)/25)*.05+(t.lat||0)*.008:0;i.body.rotation.z=It(i.body.rotation.z,r,Math.min(1,n*6)),t.pitch=t.air?It(t.pitch,Ot(-t.vy*.03,-.5,.5),Math.min(1,n*3)):It(t.pitch,0,Math.min(1,n*8)),i.g.rotation.x=t.pitch,i.beam.visible=!t.wrecked&&e>.25;for(let l=0;l<4;l++){let c=i.wheels[l];c.children[0].rotation.x+=t.speed*n/.36,l%2===1&&(c.rotation.y=s||t.ai&&t.ai.dyn?t.steerVis*.45:0)}if(i.siren){let l=t.role==="police";i.siren[0].visible=i.siren[1].visible=l}let o=Math.sin(t.yaw),a=Math.cos(t.yaw);if(t.drift>0&&B.frameN&1)for(let l of[-.8,.8])sl.emit(t.pos.x-o*1.6-a*l,.25,t.pos.z-a*1.6+o*l,se()-.5,.6+se(),se()-.5,1.2,1,.85,.85,.88,2.2);if(t.nitroOn)for(let l=0;l<2;l++)Ss.emit(t.pos.x-o*2.5,.45+t.y,t.pos.z-a*2.5,-o*6+(se()-.5),se()-.5,-a*6+(se()-.5),.18,.7,.3,.6,1,-1);if(!t.wrecked&&t.hp<t.maxHp*.45&&B.frameN%3===0){let l=t.hp<t.maxHp*.18;sl.emit(t.pos.x+o*1.7,1+t.y,t.pos.z+a*1.7,(se()-.5)*.5,1.5+se(),(se()-.5)*.5,1.6,.8,l?.2:.6,l?.2:.6,l?.2:.62,1.8),l&&Ss.emit(t.pos.x+o*1.7,1+t.y,t.pos.z+a*1.7,0,2,0,.4,.8,1,.45,.1,-.6)}t.wrecked&&t.burn>0&&(t.burn-=n,B.frameN%2===0&&(Ss.emit(t.pos.x+(se()-.5)*2,1.2,t.pos.z+(se()-.5)*3,0,2.5,0,.5,1.3,1,.5,.1,-1),sl.emit(t.pos.x,2,t.pos.z,se()-.5,2.5,se()-.5,2.5,1.2,.15,.15,.15,2.5)))}sl.update(n),Ss.update(n)}var Rd="4.0.0",Cd="streetrush_city_v2",U1={cash:150,xp:0,coins:[],garage:["sedan"],discovered:[],props:{},story:0,flags:{},races:{},stunts:[],ach:[],gangRep:{3:0,4:0},stranger:0,skills:{drive:0,fight:0,stamina:0},stats:{kos:0,stolen:0,stunts:0,robberies:0,fares:0,escapes:0,races:0,deliveries:0,maxStars:0,maxSpeed:0,bestDrift:0},storeCD:{},muted:!1,tut:!1,pos:null,gameMin:930,lastSeen:0,played:0,quality:"auto",home:"safehouse"};function F1(){let n=JSON.parse(JSON.stringify(U1));try{let e=JSON.parse(localStorage.getItem(Cd)||"null");if(e&&typeof e=="object")for(let t in e)e[t]!==null&&typeof e[t]=="object"&&!Array.isArray(e[t])&&n[t]&&typeof n[t]=="object"&&!Array.isArray(n[t])?Object.assign(n[t],e[t]):n[t]=e[t];else{let t=JSON.parse(localStorage.getItem("streetrush_city_v1")||"null");t&&(n.cash+=Math.min(t.cash||0,5e3),n.coins=Array.isArray(t.coins)?t.coins:[])}}catch{}return n}var F=B.save=F1();function Qn(){try{if(A){let n=A.car?A.car.pos:A.pos;F.pos={x:+n.x.toFixed(1),z:+n.z.toFixed(1)}}F.gameMin=B.gameMin,F.lastSeen=Date.now(),localStorage.setItem(Cd,JSON.stringify(F))}catch{}}B.gameMin=F.gameMin;var dt=null,wi=null,ll=null,ul=null,Zh=0;function zr(){if(!dt)try{dt=new(window.AudioContext||window.webkitAudioContext)}catch{dt=null}dt&&dt.state==="suspended"&&dt.resume(),dt&&!ll&&!F.muted&&O1()}function Kt(n,e,t,i,s,r){if(!(!dt||F.muted))try{let o=dt.currentTime+(r||0),a=dt.createOscillator(),l=dt.createGain();a.type=t||"square",a.frequency.setValueAtTime(n,o),s&&a.frequency.exponentialRampToValueAtTime(s,o+e),l.gain.setValueAtTime(i||.1,o),l.gain.exponentialRampToValueAtTime(8e-4,o+e),a.connect(l),l.connect(dt.destination),a.start(o),a.stop(o+e+.02)}catch{}}function Qs(n,e,t,i=0){if(!(!dt||F.muted))try{let s=dt.createBuffer(1,dt.sampleRate*n|0,dt.sampleRate),r=s.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*Math.pow(1-c/r.length,2);let o=dt.createBufferSource(),a=dt.createGain(),l=dt.createBiquadFilter();l.type="lowpass",l.frequency.value=t||2e3,o.buffer=s,a.gain.value=e||.3,o.connect(l),l.connect(a),a.connect(dt.destination),o.start(dt.currentTime+i)}catch{}}function O1(){try{let n=dt.sampleRate*4,e=dt.createBuffer(1,n,dt.sampleRate),t=e.getChannelData(0),i=0;for(let f=0;f<n;f++)i=i*.985+(Math.random()*2-1)*.015,t[f]=i*3;let s=dt.createBufferSource(),r=dt.createGain();s.buffer=e,s.loop=!0,r.gain.value=.14,s.connect(r),r.connect(dt.destination),s.start(),ll={s,g:r};let o=dt.createOscillator(),a=dt.createOscillator(),l=dt.createGain(),c=dt.createGain();o.type="square",o.frequency.value=700,a.type="square",a.frequency.value=1.6,l.gain.value=180,a.connect(l),l.connect(o.frequency);let h=dt.createBiquadFilter();h.type="lowpass",h.frequency.value=1600,o.connect(h),h.connect(c),c.gain.value=0,c.connect(dt.destination),o.start(),a.start(),ul=c}catch{}}function rg(){try{ll&&ll.s.stop()}catch{}ll=null,ul&&(ul.gain.value=0)}var pt={coin(){Kt(988,.07,"square",.05),Kt(1318,.14,"square",.05,null,.06)},cash(){[784,988,1175,1568].forEach((n,e)=>Kt(n,.12,"triangle",.08,null,e*.06))},punch(){Qs(.12,.5,700),Kt(90,.12,"sine",.25,50)},whoosh(){Qs(.15,.1,2500)},hurt(){Qs(.15,.3,500),Kt(160,.15,"sawtooth",.06,90)},jump(){Qs(.12,.08,900)},door(){Qs(.1,.25,600),Kt(110,.08,"square",.05,70)},horn(){Kt(392,.4,"sawtooth",.06),Kt(466,.4,"sawtooth",.05)},crash(){Qs(.45,.5,1400),Kt(80,.3,"sawtooth",.1,40)},check(){Kt(880,.1,"triangle",.08),Kt(1320,.15,"triangle",.08,null,.08)},fail(){Kt(300,.35,"sawtooth",.07,110)},click(){Kt(660,.05,"triangle",.05)},ping(){Kt(1200,.08,"sine",.08),Kt(1600,.12,"sine",.08,null,.09)},yelp(){Kt(700+Math.random()*300,.18,"triangle",.035,450)},star(){Kt(520,.12,"square",.06),Kt(390,.2,"square",.06,null,.12)},lost(){[523,659,784].forEach((n,e)=>Kt(n,.15,"triangle",.08,null,e*.1))},rank(){[392,523,659,784,1046].forEach((n,e)=>Kt(n,.22,"square",.06,null,e*.09))},pass(){[523,659,784,1046,784,1046].forEach((n,e)=>Kt(n,.2,"triangle",.09,null,e*.11))},bust(){[400,300,200].forEach((n,e)=>Kt(n,.3,"sawtooth",.07,null,e*.2))},cheer(){for(let n=0;n<6;n++)Qs(.4,.06,3e3,n*.05)},alarm(){Kt(950,.25,"square",.05),Kt(750,.25,"square",.05,null,.25)},nitro(){Qs(.6,.15,3e3)}};function og(){if(!(!dt||F.muted||wi))try{let n=dt.createOscillator(),e=dt.createOscillator(),t=dt.createBiquadFilter(),i=dt.createGain();n.type="sawtooth",e.type="triangle",t.type="lowpass",t.frequency.value=380,i.gain.value=0,n.connect(t),e.connect(t),t.connect(i),i.connect(dt.destination),n.start(),e.start(),wi={o:n,o2:e,f:t,g:i}}catch{}}function Id(){if(wi){try{wi.o.stop(),wi.o2.stop(),wi.g.disconnect()}catch{}wi=null}}function B1(n,e,t){if(!wi)return;let i=Math.abs(n),s=Math.min(5,Math.floor(i/10)),r=(i-s*10)/10,o=40+r*60+s*7+e*8,a=dt.currentTime;wi.o.frequency.setTargetAtTime(o,a,.05),wi.o2.frequency.setTargetAtTime(o*.5,a,.05),wi.f.frequency.setTargetAtTime(300+e*600+i*9+(t?900:0),a,.08),wi.g.gain.setTargetAtTime(F.muted?0:.05+e*.035,a,.1)}function tt(n,e,t=2200){let i=Be("toasts"),s=document.createElement("div");for(s.className="toast",s.textContent=n,e&&(s.style.color=e),i.prepend(s);i.children.length>3;)i.lastChild.remove();setTimeout(()=>{s.style.transition="opacity .4s",s.style.opacity=0,setTimeout(()=>s.remove(),420)},t)}var J0=null;function si(n,e,t="#ffd60a",i=2600){let s=Be("big");s.querySelector(".t").textContent=n,s.querySelector(".t").style.color=t,s.querySelector(".s").textContent=e||"",s.style.opacity=1,clearTimeout(J0),J0=setTimeout(()=>s.style.opacity=0,i)}var ag=[],zo=0;function ot(n){for(let e of n)ag.push(e);zo||Pd()}function Pd(){let n=ag.shift(),e=Be("dialog");if(!n){e.classList.add("hidden"),zo=0;return}e.querySelector(".av").textContent=n[0],e.querySelector(".who").textContent=n[1],e.querySelector(".txt").textContent=n[2],e.classList.remove("hidden"),zo=Math.max(2.6,n[2].length*.055),pt.ping()}Be("dialog").addEventListener("pointerdown",n=>{n.stopPropagation(),Pd()});var ld=null;function lg(n,e){let t=Be("choices");t.innerHTML="",ld=e,n.forEach((i,s)=>{let r=document.createElement("button");r.textContent=i,r.addEventListener("pointerdown",o=>{o.stopPropagation(),t.classList.add("hidden");let a=ld;ld=null,a&&a(s)}),t.appendChild(r)}),t.classList.remove("hidden")}var cl=0,sn=n=>"$"+Math.round(n).toLocaleString(),ki=[[0,"Nobody"],[120,"Street Rat"],[350,"Hustler"],[700,"Wheelman"],[1150,"Enforcer"],[1800,"Made Man"],[2700,"Underboss"],[3900,"Boss"],[5500,"Kingpin"],[8e3,"Legend"]],ns=n=>{let e=0;for(let t=0;t<ki.length;t++)n>=ki[t][0]&&(e=t);return e};function Mn(n){let e=ns(F.xp);F.xp+=n;let t=ns(F.xp);if(t>e){let i=t*250;F.cash+=i,setTimeout(()=>{si("RANK UP!","Rank "+(t+1)+": "+ki[t][1]+"  \u2022  +"+sn(i),"#ffd166",3200),pt.rank()},600),vg()}jn=!0}function Nn(n,e,t="#7dff9b"){F.cash+=n,e&&tt(e+"  +"+sn(n),t),pt.cash(),jn=!0}function Qh(n,e){let t=Math.floor(F.skills[n]);F.skills[n]=Math.min(100,F.skills[n]+e),Math.floor(F.skills[n]/10)>Math.floor(t/10)&&tt({drive:"\u{1F697} Driving",fight:"\u{1F44A} Fighting",stamina:"\u{1F3C3} Stamina"}[n]+" skill up! ("+Math.floor(F.skills[n])+")","#4cc9ff")}var Jh={firstSteal:["\u{1F697}","Grand Theft Starter","Steal your first car"],knock:["\u{1F44A}","Knockout Artist","KO 25 people"],fugitive:["\u2B50","Most Wanted","Reach 5 stars"],escape:["\u{1F4A8}","Slippery","Lose a 3+ star wanted level"],stunt:["\u{1F6EB}","Stunt Pilot","Land 5 unique stunt jumps"],drift:["\u{1F525}","Drift King","Earn $150 from one drift"],collector:["\u{1F3CE}\uFE0F","Collector","Discover 8 different cars"],coins:["\u{1FA99}","Treasure Hunter","Find all 40 hidden stashes"],business:["\u{1F3E2}","Entrepreneur","Own 3 properties"],kingpin:["\u{1F451}","Kingpin","Finish Vinny's story"],speed:["\u26A1","Speed Demon","Hit 200 km/h"],racer:["\u{1F3C1}","Street Legend","Win all of Lucia's races"],taxi:["\u{1F695}","You Talkin' To Me?","Complete 10 taxi fares"],robber:["\u{1F4B0}","Stick 'Em Up","Rob 5 stores"],ghost:["\u{1F47B}","Ghost Rider","Earn The Ghost"],night:["\u{1F319}","Night Owl","Be out at 3 AM"]};function Sn(n){if(F.ach.includes(n))return;F.ach.push(n);let e=Jh[n];setTimeout(()=>{tt("\u{1F3C6} "+e[1]+" \u2014 "+e[2],"#ffd166",3500),pt.rank()},300),Mn(50),Qn()}var z1=new C(Re.safehouse.x,Mt,Re.safehouse.z),A=B.P={pos:z1.clone(),vel:new C,yaw:Math.PI/2,onGround:!0,car:null,hp:100,lastHit:0,fighting:0,combo:0,comboT:0,punchCD:0,down:0,dead:!1,person:null};A.person=ed(0,{skin:"#c68642",top:"#c1121f",sleeve:"#c1121f",pants:"#1b263b",hair:"#1a1110",shoe:"#f4f4f4"});A.person.scale=1.02;F.pos&&Math.abs(F.pos.x)<Fi&&Math.abs(F.pos.z)<Fi&&(A.pos.set(F.pos.x,Rn(F.pos.x,F.pos.z),F.pos.z),In(A.pos,.6));var ko=0,Ho=0,Zo=new C,Kh=0,Go=0,cd=0,hd=0,K0=0;function on(n,e){n=Ot(n,0,5),n>B.wanted&&(e||pt.star(),Ho=0,Zo.copy(it()),K0=Math.max(K0,n),F.stats.maxStars=Math.max(F.stats.maxStars,n),n>=5&&Sn("fugitive")),B.wanted=n,jn=!0}function Ld(n,e=1){for(let t of Jt)if(t.kind==="cop"&&t.down<=0&&t.pos.distanceTo(n)<34*e&&Ro(t.pos.x,t.pos.z,n.x,n.z))return!0;for(let t of vn)if(!t.removed&&!t.wrecked&&!t.ai?.leaving&&t.pos.distanceTo(n)<48*e&&Ro(t.pos.x,t.pos.z,n.x,n.z))return!0;for(let t of $n)if(t.spec.police&&t.ai?.kind==="traffic"&&t.pos.distanceTo(n)<40*e&&Ro(t.pos.x,t.pos.z,n.x,n.z))return!0;return!!(ws.active&&Math.hypot(ws.spot.position.x-n.x,ws.spot.position.z-n.z)<22)}var ud=new Set,Or=B.hooks={crime(n,e,t,i){let s=new C(n.x,0,n.z);if(Hh(s,22,s,4),!(Ut&&Ut.noCrime)){if(B.wanted>0){ko+=e,ko>=4&&B.wanted<5&&(ko=0,on(B.wanted+1),tt("\u{1F6A8} "+t+"! Heat rising","#ff6b6b")),Zo.copy(s),Ho=0;return}Ld(s)&&(on(e),tt("\u{1F6A8} "+t+"! A cop saw that.","#ff6b6b"))}},snitch(n){B.wanted>0||(ud.add(n),tt("\u{1F4DE} A witness is calling 911 \u2014 stop them!","#ffbe0b"))},snitchDone(n){ud.has(n)&&(ud.delete(n),!(n.down>0||n.dead)&&(on(Math.max(B.wanted,1)),tt("\u{1F6A8} Witness reported you to the police","#ff6b6b")))},playerHit(n,e,t){jh(n,e)},copContact(n,e,t){Go+=n*(t?.8:1.6)},copsOut(n){for(let e of[-1,1]){let t=Math.sin(n.yaw),i=Math.cos(n.yaw);zh(new C(n.pos.x-i*1.8*e,0,n.pos.z+t*1.8*e))}},dropCash(n,e){Vo(n,"cash",e)},toast:tt,carWrecked(n){n===A.car&&(Cs(!0),jh(25,n.pos),tt("\u{1F525} Your car is wrecked!","#ff6b6b")),n.role==="police"&&Or.crime(n.pos,1,"Destroying a police car"),Ut&&Ut.onWreck&&Ut.onWreck(n);for(let e of _i)e.onWreck&&e.onWreck(n)},impact(n,e){Ei=Math.max(Ei,Math.min(.6,n*.025)),n>9&&pt.crash(),e&&e.role==="police"&&Or.crime(e.pos,1,"Ramming a police car"),e&&e.ai&&e.ai.kind==="traffic"&&n>10&&Or.crime(e.pos,0,"Hit and run"),Ut&&Ut.onImpact&&Ut.onImpact(n,e);for(let t of _i)t.onImpact&&t.onImpact(n,e)},pedHit(n){pt.yelp(),Mn(1)},ko(n){Ut&&Ut.onKO&&Ut.onKO(n);for(let e of _i)e.onKO&&e.onKO(n)},launched(n,e){n===A.car&&(gi={ramp:e,t:0,start:n.pos.clone(),maxY:0},B.timeScale=.45,pt.whoosh())},landed(n,e){if(n!==A.car||!gi)return;let t=Math.hypot(n.pos.x-gi.start.x,n.pos.z-gi.start.z),i=gi.ramp;gi=null,B.timeScale=1,F.stunts.includes(i.id)?Nn(Math.round(t*1.5),"\u{1F6EB} Airtime "+e.toFixed(1)+"s","#ffd60a"):(F.stunts.push(i.id),F.stats.stunts++,Nn(250+Math.round(t*4),"\u{1F6EB} UNIQUE STUNT "+F.stunts.length+"/"+Oi.length,"#ffd60a"),Mn(25),si("UNIQUE STUNT!",Math.round(t)+"m \u2022 "+e.toFixed(1)+"s air","#ffd60a",2e3),F.stunts.length>=5&&Sn("stunt")),Ei=.4}};function jh(n,e){if(!(A.dead||B.state!=="play")){if(A.hp-=n,A.lastHit=B.clock,cl=Math.min(1,cl+n/25),Ei=Math.max(Ei,.25),pt.hurt(),A.person.hitT=.3,A.fighting=3,e&&!A.car){let t=A.pos.x-e.x,i=A.pos.z-e.z,s=Math.hypot(t,i)||1;A.vel.x+=t/s*3,A.vel.z+=i/s*3}A.hp<=0&&W1(),jn=!0}}function k1(n){let e=it();if(Go=Math.max(0,Go-n*.6),Go>1.4&&!A.dead){V1();return}if(B.wanted<=0){ws.active=!1;return}hd-=n,hd<=0&&(hd=.25,Ld(e)&&(Kh=.3,Zo.copy(e),Ho=0)),Kh-=n;let t=40+B.wanted*15,i=e.distanceTo(Zo)>t;if(Kh<=0){Ho+=n*(i?2.2:1);let s=5+B.wanted*3.5;Ho>s&&H1()}ws.active=B.wanted>=4}function H1(){let n=B.wanted;on(0,!0),ko=0,Ho=0,pt.lost(),tt("\u{1F60E} You lost the cops!","#7af0ff",2600),F.stats.escapes++,Mn(10*n),n>=3&&Sn("escape");for(let e of vn)e.ai&&!e.ai.target&&(e.ai.leaving=!0)}function G1(n){for(let s=vn.length-1;s>=0;s--){let r=vn[s];(r.removed||r.ai?.leaving&&r.pos.distanceTo(it())>120||r.wrecked&&r.pos.distanceTo(it())>90)&&(!r.removed&&r!==A.car&&bs(r),vn.splice(s,1))}let e=[0,1,2,3,4,6][B.wanted],t=vn.filter(s=>!s.wrecked&&!s.ai?.leaving&&!s.ai?.target&&s!==A.car).length;if(cd-=n,t<e&&cd<=0){cd=2.5-B.wanted*.3;let s=q0(it(),B.wanted>=5&&se()<.4?"sports":"police");s&&s.key==="sports"&&(s.spec={...en.police,max:50,acc:30})}let i=1e9;for(let s of vn)!s.removed&&!s.wrecked&&(B.wanted>0||s.ai?.target)&&(i=Math.min(i,s.pos.distanceTo(it())));ul&&(ul.gain.value=F.muted?0:Ot(1-i/110,0,1)*.05)}function V1(){if(A.dead)return;A.dead=!0,pt.bust();let n=Ot(Math.round(F.cash*.1),50,2e3);F.cash=Math.max(0,F.cash-n),si("BUSTED","-"+sn(n)+' in "legal fees"',"#4da3ff",3200),fl("You got busted"),setTimeout(()=>cg(Re.police,"Released from the station"),2600)}function W1(){if(A.dead)return;A.dead=!0,pt.bust(),A.car&&Cs(!0),A.person.down=3,A.person.downMax=3;let n=Math.min(F.cash,200);F.cash-=n,si("WASTED","-"+sn(n)+" hospital bill","#ff4d5e",3200),fl("You got wasted"),setTimeout(()=>cg(Re.hospital,"Patched up at the hospital"),2600)}function cg(n,e){on(0,!0),ko=0,Go=0,ws.active=!1;for(let t of[...Jt])t.kind==="cop"&&Ms(t);for(let t of vn)t.ai&&(t.ai.leaving=!0);Id(),A.pos.set(n.x,Mt,n.z),A.vel.set(0,0,0),A.hp=100,A.dead=!1,A.person.down=0,A.person.hide=!1,A.car=null,As.copy(A.pos),tt(e,"#fff"),jn=!0,Qn()}var Nr=[],X1=(()=>{let n=document.createElement("canvas");n.width=64,n.height=32;let e=n.getContext("2d");e.fillStyle="#5cb85c",e.fillRect(0,0,64,32),e.fillStyle="#2d6a4f",e.fillRect(4,4,56,24),e.fillStyle="#9be59b",e.font="bold 22px sans-serif",e.textAlign="center",e.fillText("$",32,25);let t=new fr(n);return t.colorSpace=Fn,t})(),q1=new Ye(.5,.06,.26),Y1=new ut({map:X1,roughness:.6}),Z1=new mn(.42,12,10).scale(1,.9,1),J1=new ut({color:13218686,roughness:.9});function Vo(n,e,t,i={}){let s=new Je(e==="bag"?Z1:q1,e==="bag"?J1:Y1);s.castShadow=!0;let r={m:s,type:e,amt:t,pos:new C(n.x+(se()-.5),.2,n.z+(se()-.5)),vy:4,t:i.life||40,...i};return qe.add(s),Nr.push(r),r}function K1(n){let e=it();for(let t=Nr.length-1;t>=0;t--){let i=Nr[t];if(i.t-=n,i.vy!==0){i.vy-=15*n,i.pos.y+=i.vy*n;let r=Rn(i.pos.x,i.pos.z)+.25;i.pos.y<r&&(i.pos.y=r,i.vy=0)}if(i.m.position.set(i.pos.x,i.pos.y+Math.sin(B.clock*3+t)*.08,i.pos.z),i.m.rotation.y+=n*2,Math.hypot(e.x-i.pos.x,e.z-i.pos.z)<(A.car?3:1.4)&&!A.dead){Nn(i.amt,i.type==="bag"?"\u{1F4B0} Money bag":"\u{1F4B5} Cash"),qe.remove(i.m),Nr.splice(t,1),i.onGet&&i.onGet(i);continue}i.t<=0&&!i.keep&&(qe.remove(i.m),Nr.splice(t,1))}}var hl=null,wd=null;function $1(){let n=null,e=4.3;for(let t of $n){if(t.wrecked||t.removed)continue;let i=t.pos.distanceTo(A.pos);i<e&&(e=i,n=t)}return n}function hg(n){if(n.ai&&n.ai.kind==="traffic"&&n.spec.police){let t=zh(new C(n.pos.x-Math.cos(n.yaw)*2,0,n.pos.z+Math.sin(n.yaw)*2));t&&(t.state="fight",t.target="player"),on(Math.max(B.wanted,2)),tt("\u{1F6A8} You jacked a police cruiser!","#ff6b6b")}else if(n.ai&&n.ai.kind==="traffic"){let t=Math.sin(n.yaw),i=Math.cos(n.yaw),s=es(ji.civ(),new C(n.pos.x-i*1.9,0,n.pos.z+t*1.9),{state:"down",pers:se()<.25?"tough":"coward",hp:35});s&&(il(s,1.6),s.kind="civ",s.from=0,s.to=0,s.onUp=r=>{r.pers!=="tough"?(r.state="flee",r.t=5,r.fleeFrom=A.pos.clone()):tt(`\u{1F620} "Hey! That's MY car!"`,"#ffbe0b")}),Or.crime(n.pos,1,"Carjacking"),F.stats.stolen++,Sn("firstSteal"),Mn(5),pt.yelp()}else n.role==="police"||n.spec.police?(Or.crime(n.pos,2,"Stealing a police car"),on(Math.max(B.wanted,2))):!n.owned&&!n.mission&&se()<.25&&!n.alarmDone?(wd=n,Zh=6,n.alarmDone=!0,tt("\u{1F6A8} Car alarm!","#ffbe0b"),Or.crime(n.pos,1,"Car theft")):!n.owned&&!n.stolenCounted&&(n.stolenCounted=!0,F.stats.stolen++,Sn("firstSteal"));n.ai=null,n.role=n.role==="police"?"stolenPolice":n.role;let e=vn.indexOf(n);e>=0&&vn.splice(e,1),A.car=n,A.person.hide=!0,pt.door(),og(),Dd=9.5,xi=n.yaw,F.discovered.includes(n.key)||(F.discovered.push(n.key),tt("\u{1F698} New car: "+n.spec.name+" ("+F.discovered.length+"/"+Object.keys(en).length+")","#7af0ff"),Mn(10),F.discovered.length>=8&&Sn("collector"),n.key==="ghost"&&Sn("ghost")),jn=!0}function Cs(n){let e=A.car;if(!e)return;let t=Math.sin(e.yaw),i=Math.cos(e.yaw),s=null;for(let o of[1,-1,-2]){let a=o===-2?new C(e.pos.x-t*3.5,0,e.pos.z-i*3.5):new C(e.pos.x-i*o*2.2,0,e.pos.z+t*o*2.2),l=a.clone();if(In(l,.5),l.distanceTo(a)<.3){s=l;break}}s||(s=new C(e.pos.x-i*2.3,0,e.pos.z+t*2.3),In(s,.5)),A.pos.set(s.x,Rn(s.x,s.z),s.z),A.vel.set(0,0,0),A.yaw=e.yaw;let r=Math.hypot(e.vel.x,e.vel.z);A.car=null,A.person.hide=!1,Id(),pt.door(),Dd=5.5,jn=!0,A.ignoreCar=e,A.ignoreT=B.clock+2,(n||r>8)&&(A.person.down=1.2,A.person.downMax=1.2,r>8&&(A.vel.set(e.vel.x*.4,2,e.vel.z*.4),jh(Math.min(20,r*.5)),tt("\u{1F938} Bailed out!","#fff")))}var Ln={id:null,ox:0,oy:0,x:0,y:0},mi={id:null,lx:0,ly:0,lastT:-10},pi={},is={A:!1,B:!1,D:!1},xi=Math.PI/2,Ur=.3,Dd=5.5,Ei=0,Wo=Be("joy"),ug=Be("knob"),ol=52,Jo=zn.domElement;Jo.addEventListener("pointerdown",n=>{if(B.state==="play"){zr(),Be("tut").classList.contains("hidden")||(Be("tut").classList.add("hidden"),F.tut=!0,Qn()),n.clientX<window.innerWidth*.45&&Ln.id===null&&n.pointerType!=="mouse"?(Ln.id=n.pointerId,Ln.ox=n.clientX,Ln.oy=n.clientY,Ln.x=Ln.y=0,Wo.style.left=n.clientX-65+"px",Wo.style.top=n.clientY-65+"px",Wo.style.bottom="auto"):mi.id===null&&(mi.id=n.pointerId,mi.lx=n.clientX,mi.ly=n.clientY);try{Jo.setPointerCapture(n.pointerId)}catch{}}});Jo.addEventListener("pointermove",n=>{if(n.pointerId===Ln.id){let e=n.clientX-Ln.ox,t=n.clientY-Ln.oy,i=Math.hypot(e,t);i>ol&&(e*=ol/i,t*=ol/i),Ln.x=e/ol,Ln.y=t/ol,ug.style.transform=`translate(${e}px,${t}px)`}else if(n.pointerId===mi.id){let e=n.clientX-mi.lx,t=n.clientY-mi.ly;mi.lx=n.clientX,mi.ly=n.clientY,xi-=e*.0065,Ur=Ot(Ur+t*.0045,-.1,1.25),mi.lastT=B.clock}});function Nd(n){n.pointerId===Ln.id&&(Ln.id=null,Ln.x=Ln.y=0,Wo.style.left=Wo.style.top=Wo.style.bottom="",ug.style.transform=""),n.pointerId===mi.id&&(mi.id=null)}Jo.addEventListener("pointerup",Nd);Jo.addEventListener("pointercancel",Nd);Jo.addEventListener("lostpointercapture",Nd);function tu(n,e,t){n.addEventListener("pointerdown",s=>{s.preventDefault(),s.stopPropagation(),zr(),n.classList.add("down"),e&&e()});let i=()=>{n.classList.remove("down"),t&&t()};n.addEventListener("pointerup",i),n.addEventListener("pointercancel",i),n.addEventListener("pointerleave",i)}tu(Be("bA"),()=>{is.A=!0,A.car||Ud()},()=>is.A=!1);tu(Be("bB"),()=>{is.B=!0,A.car&&pg()},()=>is.B=!1);tu(Be("bD"),()=>{is.D=!0,A.car?A.car.nitro>.1&&pt.nitro():dg()},()=>is.D=!1);tu(Be("bC"),()=>kd());document.addEventListener("touchmove",n=>{(!n.target.closest||!n.target.closest(".scroll,.tabs"))&&n.preventDefault()},{passive:!1});document.addEventListener("gesturestart",n=>n.preventDefault());window.addEventListener("keydown",n=>{if(pi[n.code]=!0,B.state==="phone"&&(n.code==="Escape"||n.code==="KeyM")){Yo();return}B.state==="play"&&(zr(),(n.code==="KeyJ"||n.code==="KeyF")&&(A.car||Ud()),n.code==="Space"&&(A.car||dg(),n.preventDefault()),(n.code==="KeyE"||n.code==="Enter")&&kd(),n.code==="KeyH"&&pg(),(n.code==="KeyM"||n.code==="Escape")&&Hd(),n.code.startsWith("Arrow")&&n.preventDefault())});window.addEventListener("keyup",n=>{pi[n.code]=!1});function fg(){let n=Ln.x,e=Ln.y;(pi.KeyA||pi.ArrowLeft)&&(n-=1),(pi.KeyD||pi.ArrowRight)&&(n+=1),(pi.KeyW||pi.ArrowUp)&&(e-=1),(pi.KeyS||pi.ArrowDown)&&(e+=1);let t=Math.hypot(n,e);return t>1&&(n/=t,e/=t),{x:n,y:e}}var it=()=>A.car?A.car.pos:A.pos;function dg(){A.onGround&&A.down<=0&&!A.dead&&(A.vel.y=6.2,A.onGround=!1,pt.jump())}function pg(){pt.horn();let n=it();for(let e of Jt)e.kind==="civ"&&e.pos.distanceTo(n)<16&&se()<.7&&e.state!=="fight"&&(e.state="flee",e.t=1.5,e.fleeFrom=n.clone())}function Ud(){if(A.punchCD>0||A.dead||A.down>0||!A.onGround)return;let n=D0(A);if(n){A.yaw=Math.atan2(n.pos.x-A.pos.x,n.pos.z-A.pos.z);let e=Math.hypot(n.pos.x-A.pos.x,n.pos.z-A.pos.z);if(e>1){let t=Math.min(10,(e-.8)*8);A.lunge={x:Math.sin(A.yaw)*t,z:Math.cos(A.yaw)*t,t:.14}}}A.combo=B.clock-A.comboT<.9?(A.combo+1)%3:0,A.comboT=B.clock,A.person.punchT=.3,A.person.punchArm=A.combo%2,A.punchCD=A.combo===2?.42:.3,A.fighting=3,A.pendingPunch=.12}function Q1(){let n=(11+F.skills.fight*.12)*(A.combo===2?1.9:1),e=L0(A,n);if(e){pt.punch(),B.hitStop=A.combo===2?.09:.05,Ei=Math.max(Ei,A.combo===2?.3:.15),Qh("fight",.35);for(let t=0;t<6;t++)Ss.emit(e.pos.x,1.4,e.pos.z,(se()-.5)*4,se()*3,(se()-.5)*4,.2,.25,1,.9,.6,-.5);e.down>0&&(F.stats.kos++,Mn(4),F.stats.kos>=25&&Sn("knock"))}else pt.whoosh()}function j1(n){let e=fg(),t=A.person;A.punchCD-=n,A.fighting=Math.max(0,A.fighting-n),A.pendingPunch>0&&(A.pendingPunch-=n,A.pendingPunch<=0&&Q1()),t.down>0&&(t.down-=n,A.vel.x*=.9,A.vel.z*=.9),A.down=t.down;let i=Math.sin(xi),s=Math.cos(xi),r=i*-e.y-s*e.x,o=s*-e.y+i*e.x;(A.dead||A.down>0)&&(r=o=0);let a=Math.min(1,Math.hypot(r,o)),l=is.B||pi.ShiftLeft,c=(l?7.2*(1+F.skills.stamina*.0015):3.6)*a*(t.punchT>0?.3:1),h=Math.hypot(r,o)||1;l&&a>.5&&Qh("stamina",n*.06);let f=Math.min(1,n*(A.onGround?10:2.5));A.lunge&&A.lunge.t>0?(A.lunge.t-=n,A.vel.x=A.lunge.x,A.vel.z=A.lunge.z):(A.vel.x=It(A.vel.x,a>.05?r/h*c:0,f),A.vel.z=It(A.vel.z,a>.05?o/h*c:0,f)),a>.05&&t.punchT<=0&&(A.yaw=Xs(A.yaw,Math.atan2(r,o),Math.min(1,n*11))),A.vel.y-=20*n,A.pos.addScaledVector(A.vel,n);let u=Rn(A.pos.x,A.pos.z);A.pos.y<=u?(A.pos.y=u,A.vel.y=0,A.onGround=!0):A.pos.y-u>.25&&(A.onGround=!1),In(A.pos,.38,A.pos.y);for(let d of $n){if(d.removed||d===A.ignoreCar&&B.clock<A.ignoreT)continue;let p=A.pos.x-d.pos.x,x=A.pos.z-d.pos.z,m=Math.hypot(p,x);if(m<2.1&&m>.001&&A.pos.y<1.5+d.y){let g=Math.hypot(d.vel.x,d.vel.z);g>6&&!A.dead&&B.clock-A.lastHit>.8&&(jh(g*1.6,d.pos),t.down=1.4,t.downMax=1.4,A.vel.set(p/m*g*.5,3,x/m*g*.5)),A.pos.x=d.pos.x+p/m*2.1,A.pos.z=d.pos.z+x/m*2.1}}B.clock-A.lastHit>6&&A.hp<100&&(A.hp=Math.min(100,A.hp+n*5),jn=!0),t.pos.copy(A.pos),t.yaw=A.yaw,t.speed=Math.hypot(A.vel.x,A.vel.z),t.air=!A.onGround,t.guard=A.fighting>0?Math.min(1,t.guard+n*4):Math.max(0,t.guard-n*2),t.hitT=Math.max(0,t.hitT-n*2),t.punchT=Math.max(0,t.punchT-n),t.ground=u,hl=$1()}var Lr={score:0,idle:0},ts={chain:0,t:0,cool:new WeakMap},gi=null,fd=0;function eb(n){let e=A.car,t=fg(),i=-t.y,s=t.x;Pr(e,{thr:i,steer:s,hb:is.A||pi.Space,nitro:is.D||pi.ShiftLeft},n),B1(e.speed,Math.max(0,i),e.nitroOn);let r=Math.abs(e.speed)*3.6;if(r>F.stats.maxSpeed&&(F.stats.maxSpeed=r,r>=200&&Sn("speed")),fd+=Math.abs(e.speed)*n,fd>100&&(fd=0,Qh("drive",.4)),e.drift>0&&Math.abs(e.speed)>9)Lr.score+=e.drift*Math.abs(e.speed)*n*.16,Lr.idle=0;else if(Lr.score>0&&(Lr.idle+=n,Lr.idle>.6)){let o=Math.round(Lr.score);o>=10&&(Nn(o,"\u{1F525} DRIFT","#ff9f1c"),Qh("drive",o*.02),o>F.stats.bestDrift&&(F.stats.bestDrift=o),o>=150&&Sn("drift")),Lr.score=0}if(ts.t-=n,ts.t<=0&&(ts.chain=0),Math.abs(e.speed)>17){let o=Math.sin(e.yaw),a=Math.cos(e.yaw);for(let l of $n){if(l===e||!l.ai||l.ai.kind!=="traffic")continue;let c=l.pos.x-e.pos.x,h=l.pos.z-e.pos.z;if(c*c+h*h>25)continue;let f=c*o+h*a,u=Math.abs(c*a-h*o);Math.abs(f)<1.2&&u>2&&u<3.4&&!(ts.cool.get(l)>B.clock)&&(ts.cool.set(l,B.clock+3),ts.chain++,ts.t=3,Nn(10*ts.chain,"\u{1F4A8} NEAR MISS"+(ts.chain>1?" x"+ts.chain:""),"#7af0ff"))}}gi&&(gi.t+=n,gi.t>1.4&&(B.timeScale=It(B.timeScale,1,.1))),hl=null}var Dn={taco:{name:"Taco Loco Truck",cost:1500,rate:25,icon:"\u{1F32E}",spot:Re.props.taco},carwash:{name:"Sudsy Car Wash",cost:4e3,rate:60,icon:"\u{1F9FD}",spot:Re.props.carwash},chop:{name:"Chop Shop (stake)",cost:6e3,rate:110,icon:"\u{1F527}",spot:Re.props.chop,req:()=>F.flags.chop},penthouse:{name:"Uptown Penthouse",cost:9e3,rate:0,icon:"\u{1F3D9}\uFE0F",spot:Re.props.penthouse,home:!0},club:{name:"NEON Nightclub",cost:18e3,rate:220,icon:"\u{1FAA9}",spot:Re.props.club}},tb=["24/7","Liquor Barn","Gas & Go","Mini Mart","Quik-E","24/7 Uptown"],Pt=null,dd=0,pd=0,mg={};for(let n in Dn){let e=vs(5032447,1.4);e.position.set(Dn[n].spot.x,Rn(Dn[n].spot.x,Dn[n].spot.z),Dn[n].spot.z),e.scale.set(1,.3,1),mg[n]=e}var nb=Re.stores.map(n=>{let e=vs(3727483,1.2);return e.position.set(n.x,Mt,n.z),e.scale.set(1,.25,1),e}),Fd=vs(8057087,2.2);Fd.position.set(Re.garage.x,0,Re.garage.z);Fd.scale.set(1,.3,1);var Od=vs(16743168,2.6);Od.position.set(Re.chop.x,0,Re.chop.z);Od.scale.set(1,.35,1);var aA=Re.spray.map(n=>{let e=vs(16766474,2.6);return e.position.set(n.x,0,n.z),e.scale.set(1,.3,1),e});{let n=Co("FIRST CITY BANK",{fg:"#e9c46a",bg:"#1b2a3a",w:7,h:1.3,neon:!1}),e=_t(3,3,3,0);n.position.set(e.x-Math.sin(e.yaw)*.8,4.6,e.z-Math.cos(e.yaw)*.8),n.rotation.y=e.yaw,qe.add(n)}var Oo=_t(3,2,1,4);{let n=Co("TONY'S PIZZA",{fg:"#ff9f1c",w:6,h:1.4,sub:"since 1987"});n.position.set(Oo.x-Math.sin(Oo.yaw)*.8,4.4,Oo.z-Math.cos(Oo.yaw)*.8),n.rotation.y=Oo.yaw,qe.add(n)}var js=_t(3,3,3,0);function gg(){return Object.keys(F.props).filter(n=>F.props[n])}function Bd(){return gg().reduce((n,e)=>n+(Dn[e]?.rate||0),0)}function nu(){return F.home==="penthouse"&&F.props.penthouse?Re.props.penthouse:Re.safehouse}var Uo=null;function zd(){let n=it();if(A.car){let t=A.car;return t.spec.taxi&&!Ut&&!pn?{label:"TAXI<br>JOB",fn:ub}:Math.hypot(n.x-Re.garage.x,n.z-Re.garage.z)<5&&!t.mission?{label:"STORE<br>CAR",fn:lb}:Math.hypot(n.x-Re.chop.x,n.z-Re.chop.z)<5.5&&F.flags.chop&&!t.owned&&!t.mission?{label:"SELL<br>"+sn(_g(t)),fn:ab}:{label:"EXIT",fn:()=>Cs()}}if(A.dead)return null;for(let t=0;t<Re.stores.length;t++){let i=Re.stores[t];if(Math.hypot(n.x-i.x,n.z-i.z)<2.6&&!Pt)return rb(t)?{label:"ROB<br>\u{1F4B0}",fn:()=>xg(t)}:null}for(let t in Dn){let i=Dn[t];if(Math.hypot(n.x-i.spot.x,n.z-i.spot.z)<2.6)return F.props[t]||i.req&&!i.req()?null:{label:"BUY<br>"+sn(i.cost),fn:()=>sb(t)}}let e=nu();return Math.hypot(n.x-e.x,n.z-e.z)<2.6?{label:"REST<br>\u{1F4BE}",fn:ib}:hl?{label:hl.ai?.kind==="traffic"?"JACK<br>CAR":"ENTER",fn:()=>hg(hl)}:null}function kd(){if(B.state!=="play")return;let n=zd();n&&n.fn()}function ib(){A.hp=100,B.gameMin=(B.gameMin+240)%1440,Qn(),si("SAVED","Rested 4 hours \u2022 health restored","#7af0ff"),pt.check()}function sb(n){let e=Dn[n];if(F.cash<e.cost){tt("Not enough cash ("+sn(e.cost)+")","#ff6b6b"),pt.fail();return}F.cash-=e.cost,F.props[n]=!0,pt.pass(),si("PROPERTY BOUGHT",e.icon+" "+e.name+(e.rate?" \u2022 +"+sn(e.rate)+" every game hour":" \u2022 new safehouse"),"#4cc9ff"),e.home&&(F.home=n),Mn(60),gg().length>=3&&Sn("business"),Qn(),jn=!0}function rb(n){return!(iu[n]>B.clock)}var iu={};function xg(n){let e=Re.stores[n],t=es(ji.civ(),new C(e.x-Math.sin(e.yaw)*1.6,Mt,e.z-Math.cos(e.yaw)*1.6),{state:"idle",pers:se()<.2?"tough":"coward",hp:40});t&&(t.yaw=e.yaw,t.armsUp=99),Pt={k:n,t:0,need:5,clerk:t,alarm:se()<.55?1.5+se()*3:99,twist:t&&t.pers==="tough"&&se()<.6},Or.crime(e,1,"Armed robbery"),Hh(e,20,e,5),ot([["\u{1F631}","Clerk",et(["Okay okay! Take it! Just don't hurt me!","Not again! This is the third time this week!","I get paid minimum wage for this?!"])]])}function ob(n){if(!Pt){Be("prog").classList.add("hidden");return}let e=Re.stores[Pt.k],t=Math.hypot(A.pos.x-e.x,A.pos.z-e.z);if(Be("prog").classList.remove("hidden"),t>4.5||A.car||A.dead){tt("Robbery abandoned","#ff6b6b"),$0(!1);return}if(Pt.t+=n,Be("prog").querySelector("i").style.width=Pt.t/Pt.need*100+"%",Pt.t>Pt.alarm&&Pt.alarm<90&&(Pt.alarm=99,on(Math.max(B.wanted,2)),tt("\u{1F514} The silent alarm was tripped!","#ff6b6b"),pt.alarm()),Pt.twist&&Pt.t>2&&Pt.clerk&&(Pt.twist=!1,Pt.clerk.armsUp=0,Pt.clerk.state="fight",Pt.clerk.target="player",Pt.clerk.hp=60,ot([["\u{1F624}","Clerk","You picked the WRONG store, pal!"]])),Pt.t>=Pt.need){let i=180+ns(F.xp)*70+(se()*120|0);Nn(i,"\u{1F4B0} "+tb[Pt.k]+" robbed"),F.stats.robberies++,Mn(30),F.stats.robberies>=5&&Sn("robber"),on(Math.max(B.wanted,2)),$0(!0)}}function $0(n){Pt.clerk&&!Pt.clerk.dead&&(Pt.clerk.armsUp=0,Pt.clerk.kind="civ",Pt.clerk.state="flee",Pt.clerk.t=6,Pt.clerk.fleeFrom=A.pos.clone()),iu[Pt.k]=B.clock+240,Pt=null,Be("prog").classList.add("hidden")}function _g(n){return Math.round(n.spec.value*(.35+.65*Math.max(0,n.hp)/n.maxHp)*(F.props.chop?1.3:1))}function ab(){let n=A.car,e=_g(n);Cs(),bs(n),Nn(e,"\u{1F527} Sold the "+n.spec.name,"#ff9f1c"),Mn(15),si("SOLD!",n.spec.name+" \u2192 "+sn(e),"#ff9f1c",1800)}function lb(){let n=A.car,e=F.props.penthouse?8:4;if(F.garage.length>=e&&!F.garage.includes(n.key)){tt("Garage full ("+e+" slots) \u2014 buy the Penthouse for more","#ff6b6b");return}F.garage.includes(n.key)||F.garage.push(n.key),Cs(),bs(n),n.hp=n.maxHp,pt.check(),tt("\u{1F17F}\uFE0F "+n.spec.name+" stored. Call it anytime from your phone.","#7af0ff"),Qn()}var er=null;function cb(n){if(A.car){tt("Get out of your car first");return}let e=it(),[t,i]=Ar(e.x,e.z),s=Math.abs(e.x-Ae(t)),r=Math.abs(e.z-Ae(i)),o,a,l;if(s<r){let c=Math.sign(e.x-Ae(t))||1;o=Ae(t)+4.9*c,a=Ot(e.z,-Kn+10,Kn-10),l=c>0?Math.PI:0}else{let c=Math.sign(e.z-Ae(i))||1;a=Ae(i)+4.9*c,o=Ot(e.x,-Kn+10,Kn-10),l=c>0?Math.PI/2:-Math.PI/2}er&&er!==A.car&&!er.removed&&bs(er);for(let c of[...$n])c.ai?.kind==="traffic"&&Math.hypot(c.pos.x-o,c.pos.z-a)<7&&rl(c,void 0,void 0,e);er=Pn(n,void 0,o,a,l,!1),er.owned=!0,tt("\u{1F697} "+en[n].name+" delivered!","#7af0ff"),Yo()}function hb(n){let e=it();dd-=n;for(let t of Re.spray)if(A.car&&dd<=0&&Math.hypot(e.x-t.x,e.z-t.z)<5){if(dd=6,B.wanted>0&&Ld(e,.6)){tt("\u{1F46E} Not with cops watching!","#ff6b6b");continue}let i=B.wanted>0?100+B.wanted*50:50;if(F.cash<i){tt("Paint job costs "+sn(i),"#ff6b6b");continue}F.cash-=i;let s=A.car;s.hp=s.maxHp;let r=et([10753562,3104680,1118481,15658734,2792847,5904538,16219904,3824192]);s.mesh.pm.material=new gr({color:r,metalness:.45,roughness:.35,clearcoat:1,clearcoatRoughness:.08});let o=B.wanted;if(o){on(0,!0),ko=0;for(let a of vn)a.ai&&(a.ai.leaving=!0)}si("FRESH PAINT",o?"Cops lost your trail \u2022 -"+sn(i):"Repaired & repainted \u2022 -"+sn(i),"#ffd60a"),pt.cash()}if(pd+=n*1.5,pd>=60){pd=0;let t=Bd();t>0&&Nn(t,"\u{1F3E2} Business income","#4cc9ff")}for(let t in Dn)mg[t].visible=!F.props[t]&&(!Dn[t].req||Dn[t].req())&&Math.hypot(e.x-Dn[t].spot.x,e.z-Dn[t].spot.z)<70;nb.forEach((t,i)=>t.visible=!(iu[i]>B.clock)&&Math.hypot(e.x-Re.stores[i].x,e.z-Re.stores[i].z)<60),Od.visible=!!F.flags.chop,Fd.visible=!!A.car,wd&&Zh>0&&(Zh-=n,B.frameN%30===0&&pt.horn(),Zh<=0&&(wd=null))}var pn=null;function ub(){pn={fare:null,done:0,wait:0},tt("\u{1F695} On duty! Look for a waving customer.","#ffd60a"),$h()}function $h(){if(!pn)return;let n=it(),e=null;for(let i=0;i<20;i++){let s=et(kr()),r=_t(s.i,s.j,se()*4|0,(se()-.5)*20,1.6),o=Math.hypot(r.x-n.x,r.z-n.z);if(o>40&&o<160){e=r;break}}e||(e=_t(2,2,0));let t=es(ji.civ(),new C(e.x,Mt,e.z),{state:"cheer",pers:"coward",hp:30});pn.fare={p:t,spot:e,picked:!1,dest:null,t:0}}function kr(){return kr.c||(kr.c=[])}function fb(n){if(!pn)return null;if(!A.car||!A.car.spec.taxi)return tt("\u{1F695} Off duty","#ffd60a"),pn.fare&&pn.fare.p&&!pn.fare.picked&&(pn.fare.p.kind="civ",pn.fare.p.state="walk"),pn=null,null;let e=pn.fare;if(!e)return null;let t=it();if(!e.picked){if(e.p.dead||e.p.down>0)return pn.fare=null,$h(),null;if(Math.hypot(t.x-e.p.pos.x,t.z-e.p.pos.z)<6&&Math.abs(A.car.speed)<2){e.picked=!0,Ms(e.p);let i=null;for(let s=0;s<20;s++){let r=et(kr()),o=_t(r.i,r.j,se()*4|0,0,1.6),a=Math.hypot(o.x-t.x,o.z-t.z);if(a>90&&a<260){i=o;break}}e.dest=i||_t(5,5,0),e.t=Math.round(Math.hypot(e.dest.x-t.x,e.dest.z-t.z)/10+14),e.crash=0,ot([["\u{1F9D1}","Passenger",et(["Step on it! I'm late for my own wedding!","Follow that... no wait, just go downtown.","You drive like my grandma. Faster!","Take the scenic route. JK. HURRY."])]])}return{text:"\u{1F695} Pick up the waving customer",pos:e.p.pos,color:16766474}}if(e.t-=n,Math.hypot(t.x-e.dest.x,t.z-e.dest.z)<6&&Math.abs(A.car.speed)<3){let i=60+Math.max(0,Math.round(e.t*6))-e.crash*10;return pn.done++,F.stats.fares++,Nn(Math.max(20,i),"\u{1F695} Fare #"+pn.done+(e.t>0?" + tip":""),"#ffd60a"),Mn(8),F.stats.fares>=10&&Sn("taxi"),pn.done%5===0&&Nn(300,"\u{1F695} 5 fares in a row!","#ffd60a"),pn.fare=null,$h(),null}return e.t<-20?(tt("\u{1F624} Passenger bailed \u2014 too slow!","#ff6b6b"),pn.fare=null,$h(),null):{text:"\u{1F695} Drive your fare <b>"+Math.max(0,Math.ceil(e.t))+"s</b>",pos:e.dest,color:16766474}}var Ut=null,Fr=vs(16732067);Fr.visible=!1;var zi=new Wn;{let n=new Yt({color:16766474,fog:!1,depthTest:!1,transparent:!0,toneMapped:!1}),e=new Je(new Yi(.45,1.1,16),n);e.rotation.x=Math.PI/2,e.position.z=.4;let t=new Je(new Bt(.12,.12,.8,10),n);t.rotation.x=Math.PI/2,t.position.z=-.35,e.renderOrder=t.renderOrder=10,zi.add(e,t),zi.visible=!1,qe.add(zi),zi.userData.mat=n}var li={vinny:{name:'Vinny "The Fish"',av:"\u{1F41F}",color:11868062,spot:Re.vinny},lucia:{name:"Lucia Reyes",av:"\u{1F3C1}",color:3727483,spot:Re.lucia},tony:{name:"Big Tony",av:"\u{1F355}",color:16752412,spot:Oo},stranger:{name:"???",av:"\u{1F3A9}",color:10309341,spot:null}},Br={};for(let n in li){let e=vs(li[n].color,2.2);e.visible=!1,Br[n]=e;let t=li[n];t.spot&&e.position.set(t.spot.x,Mt,t.spot.z)}var Gt=n=>["\u{1F41F}","Vinny",n],Xo=n=>["\u{1F3C1}","Lucia",n],db=n=>["\u{1F355}","Big Tony",n],Es=n=>["\u{1F3A9}","The Stranger",n],al=(n,e,t={})=>({text:e,target:()=>n,update:()=>Math.hypot(it().x-n.x,it().z-n.z)<(t.r||4)&&(!t.car||A.car)&&(!t.slow||!A.car||Math.abs(A.car.speed)<4)}),Wh=(n="Lose the cops")=>({text:()=>B.wanted>0?n:"Lost them!",update:()=>B.wanted===0});function Ed(n,e,t){return Pn(n,t,e.x,e.z,e.yaw,!1)}function qo(n,e=1){n.ai={kind:"drive",dyn:!0,goal:null,fn:(t,i)=>{let s=it(),r=t.ai;if(!r.goal||Math.hypot(r.goal[0]-t.pos.x,r.goal[1]-t.pos.z)<12){let l=null,c=-1;for(let h=0;h<8;h++){let f=se()*(rt+1)|0,u=se()*(rt+1)|0,d=Math.hypot(Ae(f)-s.x,Ae(u)-s.z);d>c&&(c=d,l=[Ae(f),Ae(u)])}r.goal=l}let[o,a]=No(t,r.goal[0],r.goal[1]);Ir(t,o,a,i,{thr:e,nitro:e>=1&&Math.hypot(s.x-t.pos.x,s.z-t.pos.z)<25})}}}var su={v1:{c:"vinny",title:"Hot Wheels",rank:0,req:()=>F.story===0,steps:()=>[{start(n){ot([Gt("Kid! Get over here. You look like someone who needs money and has no morals. Perfect."),Gt("There's a red Sports Coupe parked outside the NEON club downtown. I want it."),Gt("Bring it to my chop shop at the Docks. And don't scratch it!")]),n.car=Ed("sports",Re.rareSpots[0],12653087),n.car.mission=!0},text:"Steal the red Sports Coupe outside NEON",target:n=>n.car.pos,update:n=>A.car===n.car},{start(n){on(2),ot([Gt("WAIT. Bad news \u2014 the owner's a cop's cousin. That car has a TRACKER!"),Gt("Lose the heat before you come anywhere near my shop!")])},...Wh("The car has a tracker! Lose the cops")},{text:"Deliver the car to Vinny's Chop Shop",target:()=>Re.chop,update:n=>A.car===n.car&&Math.hypot(A.car.pos.x-Re.chop.x,A.car.pos.z-Re.chop.z)<5.5&&B.wanted===0},{start(n){let e=Math.max(0,n.car.hp)/n.car.maxHp;n.reward=400+Math.round(e*400),Cs(),bs(n.car),F.flags.chop=!0,ot([Gt(e>.8?"Beautiful! Not a scratch! You're a natural.":`You call this "not scratched"?! ...Fine. It'll sell.`),Gt("From now on, bring me ANY car and I'll buy it. No questions asked.")])},update:()=>!0}],reward:n=>n.reward,xp:120,done:()=>{F.story=1}},v2:{c:"vinny",title:"Debt Collector",rank:1,req:()=>F.story===1,steps:()=>[{start(){ot([Gt('Sal "The Shark" owes me $800. He thinks I forgot.'),Gt("I never forget. Go to Old Town and... remind him.")])},...al(_t(2,6,0,0),"Find Sal in Old Town")},{start(n){let e=_t(2,6,0,3);n.sal=es({skin:"#e0ac8a",top:"#f72585",pants:"#ffffff",hair:"#111111",shoe:"#111111"},new C(e.x,Mt,e.z),{state:"fight",target:"player",pers:"tough",hp:60,afterFight:"idle"}),n.salCar=Ed("muscle",Ht(2,6,0,10),7473591),n.salCar.mission=!0,ot([["\u{1F988}","Sal","Vinny sent a KID? Ha! Come here, I'll teach you some manners!"]]),n.sal.onKO=()=>{n.koed=!0}},text:"Rough up Sal",target:n=>n.sal.pos,update:n=>n.koed},{start(n){n.sal.scripted=!0,n.sal.onUp=e=>{e.state="goto",e.dest=n.salCar.pos,e.goSpeed=6.2,e.onArrive=()=>{Ms(e),qo(n.salCar,.85),n.fleeing=!0,ot([["\u{1F988}","Sal","You'll never catch me in my baby!"]])}}},text:()=>"Sal is running for his car!",target:n=>n.fleeing?n.salCar.pos:n.sal.pos,update:n=>n.fleeing},{text:"Sal's getting away! Wreck his car",target:n=>n.salCar.pos,update:(n,e)=>(Math.hypot(n.salCar.pos.x-it().x,n.salCar.pos.z-it().z)>260?(n.lostT=(n.lostT||0)+e,n.lostT>6&&n.fail("Sal got away")):n.lostT=0,n.salCar.wrecked)},{start(n){n.bag=Vo(n.salCar.pos,"bag",0,{keep:!0,onGet:()=>{n.got=!0}}),ot([["\u{1F988}","Sal","OKAY! OKAY! Take the money! Take it!"]])},text:"Grab the $800",target:n=>n.bag.pos,update:n=>n.got},{start(n){lg(["\u{1F91D} Give it to Vinny (he pays you $300)","\u{1F4B0} Keep all $800 (Vinny won't like it)"],e=>{n.choice=e,e===0?(F.flags.loyal=!0,Nn(300,"Vinny's cut"),ot([Gt("An honest crook! I like you, kid. I won't forget this.")])):(F.flags.loyal=!1,Nn(800,"Kept the money"),ot([Gt("...Funny. Sal says he paid. I'll be thinking about this, kid.")]))})},text:"Decide what to do with the money",update:n=>n.choice!==void 0}],reward:()=>0,xp:150,done:()=>{F.story=2}},v3:{c:"vinny",title:"The Getaway",rank:3,req:()=>F.story===2,steps:()=>[{start(){ot([Gt("My boys are hitting First City Bank downtown. They need a driver."),Gt("Bring a fast car. Park out front. Keep the engine running.")])},text:"Get a car",update:()=>!!A.car},{text:"Pull up in front of First City Bank",target:()=>js,update:()=>A.car&&Math.hypot(A.car.pos.x-js.x,A.car.pos.z-js.z)<9&&Math.abs(A.car.speed)<3},{start(n){n.t=0,n.car=A.car,ot([["\u{1F637}","Crew","Driver's here. Let's go to work. 15 seconds."]]);for(let e=0;e<2;e++){let t=es({skin:"#c68642",top:"#111111",pants:"#111111",hair:"#111111",shoe:"#111111"},new C(A.car.pos.x+2,0,A.car.pos.z+e),{state:"goto"});t.dest=new C(js.x,Mt,js.z),t.goSpeed=3,t.onArrive=i=>Ms(i)}n.noCrime=!0},text:n=>"Keep the engine running\u2026 <b>"+Math.max(0,Math.ceil(15-n.t))+"s</b>",target:()=>js,update:(n,e)=>{if(n.t+=e,!A.car||Math.hypot(A.car.pos.x-js.x,A.car.pos.z-js.z)>25)return n.fail("You abandoned the crew"),!1;if(n.t>6&&!n.cop){n.cop=!0;let t=Ht(3,3,3,14),i=Pn("police",void 0,t.x,t.z,t.yaw,!1);i.role="police",vn.push(i),ot([Gt("Kid, a patrol car just parked down the street. Stay cool... STAY COOL.")])}return n.t>=15}},{start(n){n.noCrime=!1,pt.alarm(),on(4);for(let e of vn)e.ai||(e.ai={kind:"police",dyn:!0},e.hasCops=2);ot([["\u{1F637}","Crew","GO GO GO! The alarm tripped!"]])},...Wh("GET AWAY! Lose the cops")},{text:"Drop the crew at the safehouse garage",target:()=>Re.garage,update:()=>A.car&&Math.hypot(A.car.pos.x-Re.garage.x,A.car.pos.z-Re.garage.z)<6}],reward:()=>2500,xp:250,done:()=>{F.story=3}},v4:{c:"vinny",title:"Turf War",rank:4,req:()=>F.story===3,steps:()=>[{start(){ot([Gt("The Vipers are muscling in on my corner at the Docks."),Gt("Go remind them whose corner it is. With your fists.")])},...al(Re.gangSpots[4][0],"Go to the Vipers' corner in the Docks",{r:12})},{start(n){n.noCrime=!0,n.ko=0,n.need=6;let e=Re.gangSpots[4][0];n.gang=[];for(let t=0;t<6;t++){let i=$s(4,e);i&&(i.state="fight",i.target="player",n.gang.push(i))}ot([["\u{1F40D}","Viper","Look who it is. Vinny's new puppy. Get him!"]]),n.onKO=t=>{t.kind==="gang"&&t.gang===4&&!t.counted&&(t.counted=!0,n.ko++)}},text:n=>"Beat down the Vipers <b>"+n.ko+"/"+n.need+"</b>",target:()=>Re.gangSpots[4][0],update:n=>{if(n.ko>=4&&!n.reinf){n.reinf=!0,n.need=9,ot([["\u{1F40D}","Viper","Reinforcements! Get over here!"]]);let e=Ht(6,6,0,-10),t=Pn("van",3934572,e.x,e.z,e.yaw,!1);for(let i=0;i<3;i++){let s=$s(4,{x:t.pos.x,z:t.pos.z+2});s&&(s.state="fight",s.target="player")}}return n.ko>=n.need}}],reward:()=>1500,xp:300,done:()=>{F.story=4,F.gangRep[4]=-6,F.gangRep[3]=(F.gangRep[3]||0)+3,tt("\u26A0\uFE0F The Vipers will attack you on sight in the Docks now","#b5179e",4e3)}},v5:{c:"vinny",title:"Armored Assets",rank:5,req:()=>F.story===4,steps:()=>[{start(n){ot([Gt("An armored truck is doing its rounds. Three bags of cash inside."),Gt("Ram it till it dies. Grab the bags. Easy money.")]);let e=it(),[t,i]=Ar(e.x+120,e.z);n.truck=Pn("armored",void 0,Ae(t),Ae(i),0,!1),n.truck.mission=!0,qo(n.truck,.5),n.onImpact=(s,r)=>{r===n.truck&&!n.alerted&&(n.alerted=!0,on(Math.max(B.wanted,3)),qo(n.truck,.75))},n.onWreck=s=>{s===n.truck&&(n.dead=!0)}},text:n=>"Ram the armored truck until it breaks down ("+Math.max(0,Math.round(n.truck.hp/n.truck.maxHp*100))+"%)",target:n=>n.truck.pos,update:n=>n.dead},{start(n){n.bags=0;for(let e=0;e<3;e++)Vo(n.truck.pos,"bag",1e3,{keep:!0,onGet:()=>{n.bags++}});tt("\u{1F4B0} Money bags everywhere!","#7dff9b")},text:n=>"Grab the money bags <b>"+n.bags+"/3</b>",target:n=>n.truck.pos,update:n=>n.bags>=3},Wh()],reward:()=>500,xp:350,done:()=>{F.story=5}},v6a:{c:"vinny",title:"The Fish Stinks",rank:6,req:()=>F.story===5&&!F.flags.loyal,steps:()=>[{start(){ot([Gt("Kid! Big score tonight. Meet me at the pier in the Docks. Come alone.")])},...al(Ht(7,7,1,0),"Meet Vinny at the Docks pier",{r:10})},{start(n){ot([Gt("You thought I forgot about Sal's $800? I NEVER forget!"),Gt("Boys \u2014 take care of him. And I already called the cops. Bye bye!")]);let e=Ht(7,7,1,0);for(let t=0;t<6;t++){let i=$s(4,{x:e.x+(se()-.5)*10,z:e.z+(se()-.5)*10});i&&(i.state="fight",i.target="player")}on(3),n.origin=new C(e.x,0,e.z)},text:()=>"It's a SETUP! Escape the Docks and lose the cops",target:()=>nu(),update:n=>B.wanted===0&&it().distanceTo(n.origin)>150},{start(){ot([Xo("Heard Vinny tried to bury you. Nobody does that to my drivers."),Xo("Come to my garage. I have something for you.")])},...al(Re.lucia,"Go see Lucia")},{start(){ot([Xo(`Vinny's supercar. I "borrowed" it while he was busy with you. It's yours now, Kingpin.`)])},update:()=>!0}],reward:()=>5e3,xp:500,done:()=>{F.story=6,F.garage.includes("super")||F.garage.push("super"),Sn("kingpin"),si("KINGPIN","Vinny's supercar is in your garage","#ffd166",4e3)}},v6b:{c:"vinny",title:"Fish Out of Water",rank:6,req:()=>F.story===5&&F.flags.loyal,steps:()=>[{start(){ot([Gt("KID! The cops are raiding my place! I need a ride out of Old Town NOW!")])},...al(Re.vinny,"Rescue Vinny in Old Town",{r:12})},{start(n){n.vinny=es({skin:"#e0ac8a",top:"#f8f9fa",pants:"#6c757d",hair:"#adb5bd",shoe:"#111111"},new C(Re.vinny.x,Mt,Re.vinny.z),{state:"follow",hp:999});for(let e=0;e<3;e++)zh(new C(Re.vinny.x+(se()-.5)*14,0,Re.vinny.z+8+se()*4));on(3),ot([Gt("About time! Get us a car!")])},text:"Get Vinny into a car",target:n=>n.vinny.pos,update:n=>A.car&&Math.hypot(A.car.pos.x-n.vinny.pos.x,A.car.pos.z-n.vinny.pos.z)<6?(Ms(n.vinny),on(4),!0):!1},{start(){ot([Gt("DRIVE! DRIVE! DRIVE!")])},...Wh("Lose the cops with Vinny aboard")},{text:"Drop Vinny at the Docks pier",target:()=>Ht(7,7,1,0),update:()=>A.car&&Math.hypot(A.car.pos.x-Ht(7,7,1,0).x,A.car.pos.z-Ht(7,7,1,0).z)<8},{start(){ot([Gt("You saved my life, kid. Take my supercar. And my corner. You're the Kingpin now.")])},update:()=>!0}],reward:()=>6e3,xp:500,done:()=>{F.story=6,F.garage.includes("super")||F.garage.push("super"),Sn("kingpin"),si("KINGPIN","Vinny's supercar is in your garage","#ffd166",4e3)}},r1:{c:"lucia",title:"Race: Downtown Dash",rank:1,req:()=>!F.races.r1,repeat:!0,steps:()=>md("r1",6,.85,900)},r2:{c:"lucia",title:"Race: Harbor Run",rank:3,req:()=>F.races.r1&&!F.races.r2,repeat:!0,steps:()=>md("r2",9,.95,1600)},r3:{c:"lucia",title:"Race: The Big One",rank:5,req:()=>F.races.r2&&!F.races.r3,repeat:!0,steps:()=>md("r3",12,1.05,3e3)},pizza:{c:"tony",title:"Pizza Panic",rank:0,req:()=>!0,repeat:!0,steps:()=>[{start(n){ot([db(et(["Four pizzas, four hungry customers, ninety seconds. Don't crash \u2014 the pizzas fly out!","You drive, they eat. Crash and you're paying for the pizza!"]))]),n.pizzas=6,n.drops=0,n.t=90,n.onImpact=e=>{e>10&&n.pizzas>0&&(n.pizzas--,tt("\u{1F355} A pizza flew out the window! ("+n.pizzas+" left)","#ff9f1c"),Vo(A.car.pos,"cash",1,{life:3}))},n.next=()=>{for(let e=0;e<20;e++){let t=et(kr()),i=_t(t.i,t.j,se()*4|0,0,1.6),s=Math.hypot(i.x-it().x,i.z-it().z);if(s>60&&s<200)return i}return Re.stores[0]},n.dest=n.next()},text:"Get a car",update:()=>!!A.car},{text:n=>"\u{1F355} Deliver pizza "+(n.drops+1)+"/4 \u2022 <b>"+Math.ceil(n.t)+"s</b> \u2022 "+n.pizzas+" pizzas",target:n=>n.dest,update:(n,e)=>{if(n.t-=e,n.t<=0)return n.fail("The pizzas got cold"),!1;if(n.pizzas<=0)return n.fail("You lost all the pizzas"),!1;if(Math.hypot(it().x-n.dest.x,it().z-n.dest.z)<6){if(n.drops++,n.pizzas--,Nn(40,"\u{1F355} Delivered! +tip","#ff9f1c"),pt.check(),n.drops>=4)return!0;n.dest=n.next(),n.t+=12}return!1}}],reward:n=>150+n.pizzas*60+Math.round(n.t*3),xp:60,done:()=>{F.stats.deliveries++}},x1:{c:"stranger",title:"A Favor",rank:2,req:()=>F.stranger===0,steps:()=>[{start(n){n.spot=Ts,ot([Es("Ah. You can see me. Interesting."),Es("Bring me a police cruiser. Don't ask why. Nobody ever asks why.")])},text:()=>B.wanted?"Lose the cops, then bring the cruiser":"Steal a police cruiser and bring it to the Stranger",target:n=>n.spot,update:n=>A.car&&A.car.spec.police&&Math.hypot(A.car.pos.x-n.spot.x,A.car.pos.z-n.spot.z)<7&&B.wanted===0},{start(){let n=A.car;Cs(),bs(n),ot([Es("Lovely. It still smells like donuts.")])},update:()=>!0}],reward:()=>1500,xp:200,done:()=>{F.stranger=1}},x2:{c:"stranger",title:"Hot Potato",rank:3,req:()=>F.stranger===1,steps:()=>[{start(n){ot([Es("I want to watch something. Survive four stars for ninety seconds. No paint shops."),Es("Begin.")]),on(4),n.t=90,n.noSpray=!0},text:n=>"Survive 4 stars <b>"+Math.ceil(n.t)+"s</b>",update:(n,e)=>(n.t-=e,B.wanted<4&&B.wanted>0&&on(4,!0),B.wanted===0&&on(4,!0),n.t<=0)},{start(){on(0,!0);for(let n of vn)n.ai&&(n.ai.leaving=!0);ot([Es("Delightful. The police will forget all of this. I made sure.")])},update:()=>!0}],reward:()=>2500,xp:300,done:()=>{F.stranger=2}},x3:{c:"stranger",title:"The Ghost",rank:4,req:()=>F.stranger===2,steps:()=>[{start(){ot([Es("One last game. Hit three of my... favorite ramps. Unique jumps. Tonight."),Es("Then I will give you something that does not officially exist.")])},text:n=>"Land 3 NEW unique stunt jumps ("+Math.max(0,F.stunts.length-n.base)+"/3)",update:n=>(n.base===void 0&&(n.base=F.stunts.length),F.stunts.length-n.base>=3||F.stunts.length>=Oi.length)},{start(){ot([Es("The Ghost is in your garage. Drive it at night. You'll understand.")]),F.garage.includes("ghost")||F.garage.push("ghost"),Sn("ghost")},update:()=>!0}],reward:()=>1e3,xp:400,done:()=>{F.stranger=3}}};function pb(n,e){let t=n*9973%2147483647,i=()=>(t=t*16807%2147483647)/2147483647,s=[],r=Ar(Re.lucia.x,Re.lucia.z),o=[r[0]-1,r[1]],a=new Set;for(let l=0;l<e;l++){let c=To(...r).filter(u=>!(u[0]===o[0]&&u[1]===o[1])),h=c.filter(u=>!a.has(u.join()));h.length&&(c=h);let f=c[i()*c.length|0];o=r,r=f,a.add(r.join()),s.push(Ks(...r))}return s}function md(n,e,t,i){return[{start(){ot([Xo(et(["Think you can drive? Prove it. First to the finish wins.","My crew's been undefeated for a month. Embarrass them.","No rules. Well, one rule: win."]))])},text:"Get a car",update:()=>!!A.car},{start(s){s.route=pb({r1:11,r2:22,r3:33}[n],e),s.idx=0,s.t=-3,s.racers=[];let r=A.car.pos,o=Math.atan2(s.route[0].x-r.x,s.route[0].z-r.z),a=Math.sin(o),l=Math.cos(o);A.car.yaw=o,A.car.vel.set(0,0,0);for(let h=0;h<3;h++){let f=et(["sports","muscle","super","sports"]),u=[[-3.2,0],[3.2,0],[0,-6]][h],d=Pn(f,et([15087942,4415982,2792847,16760331,16196997]),r.x-l*u[0]+a*u[1],r.z+a*u[0]+l*u[1],o,!1);d.spec={...d.spec,max:d.spec.max*t*(.9+h*.05),acc:d.spec.acc*t},d.mission=!0,d.invuln=!0,d.racer={idx:0,done:!1},d.ai={kind:"drive",dyn:!0,fn:(p,x)=>{if(s.t<0){Pr(p,{thr:0,steer:0,hb:!0},x);return}let m=p.racer;if(m.done){Pr(p,{thr:0,steer:0,hb:!0},x);return}let g=s.route[m.idx];if(Math.hypot(g.x-p.pos.x,g.z-p.pos.z)<9&&(m.idx++,m.idx>=s.route.length)){m.done=!0,s.finishers.push(p);return}let y=s.route[m.idx],S=s.route[Math.min(m.idx+1,s.route.length-1)],[v,T]=No(p,y.x,y.z),E=c(p)<c(A.car);Ir(p,v,T,x,{nitro:E,nextX:S.x,nextZ:S.z}),E&&Math.abs(p.speed)<p.spec.max&&p.vel.multiplyScalar(1+x*.12)}},s.racers.push(d)}s.finishers=[],s.noCrime=!0;let c=h=>h?h===A.car?s.idx*1e3-Math.hypot(s.route[Math.min(s.idx,s.route.length-1)].x-h.pos.x,s.route[Math.min(s.idx,s.route.length-1)].z-h.pos.z):h.racer.idx*1e3-Math.hypot(s.route[Math.min(h.racer.idx,s.route.length-1)].x-h.pos.x,s.route[Math.min(h.racer.idx,s.route.length-1)].z-h.pos.z):-1e9;s.progress=c,s.cleanup=()=>{for(let h of s.racers)!h.removed&&h!==A.car&&(h.ai=null,h.invuln=!1)}},text:s=>A.car?s.t<0?"<b>"+Math.ceil(-s.t)+"</b>":"\u{1F3C1} Position <b>"+(1+s.racers.filter(o=>o.racer.done||s.progress(o)>s.progress(A.car)).length)+"/4</b> \u2022 Checkpoint "+Math.min(s.idx+1,s.route.length)+"/"+s.route.length+" \u2022 "+s.t.toFixed(1)+"s":"Get back in your car!",target:s=>s.route[Math.min(s.idx,s.route.length-1)],update:(s,r)=>{let o=s.t;if(s.t+=r,o<0&&Math.ceil(-s.t)!==Math.ceil(-o)&&(pt.check(),s.t>=0&&si("GO!","","#38e07b",900)),s.t<0)return A.car.vel.set(0,0,0),!1;if(!A.car)return s.fail("You left your car"),!1;let a=s.route[s.idx];return Math.hypot(a.x-A.car.pos.x,a.z-A.car.pos.z)<9&&(s.idx++,pt.check(),s.idx>=s.route.length)?(s.place=1+s.finishers.length,!0):!1}},{start(s){s.cleanup();let r=s.place===1;if(F.stats.races++,r){let o=!F.races[n];F.races[n]=!0,s.prize=o?i:Math.round(i*.3),o&&n==="r1"&&!F.garage.includes("sports")&&(F.garage.push("sports"),tt("\u{1F3CE}\uFE0F Lucia gave you a Sports Coupe!","#38e07b",3500)),o&&n==="r3"&&(F.garage.includes("muscle")||F.garage.push("muscle"),Sn("racer"),tt("\u{1F3CE}\uFE0F Lucia gave you her Muscle Car!","#38e07b",3500)),ot([Xo(et(["Not bad. Not bad at all.","Okay, okay. You're fast.","My crew is NEVER living this down."]))])}else s.prize=0,ot([Xo("P"+s.place+"? Come back when you can drive.")]),s.fail("You finished P"+s.place)},update:()=>!0}]}function yg(n){let e=ns(F.xp);return Object.entries(su).filter(([t,i])=>i.c===n&&i.req()&&(n==="stranger"||e>=i.rank))}function mb(n){let e=ns(F.xp);return Object.entries(su).find(([t,i])=>i.c===n&&i.req()&&e<i.rank)}function Td(n){if(Ut||A.dead)return;let e=su[n];Ut={id:n,d:e,steps:e.steps(),i:0,started:!1,fail:t=>{Ut&&(Ut.failReason=t)}},pn&&(pn=null),si(e.title.toUpperCase(),li[e.c].name,"#ffd166",2e3),pt.ping(),jn=!0}function fl(n){if(B.lastFail=n,!Ut)return;let e=Ut;Ut=null,e.cleanup&&e.cleanup(),setTimeout(()=>{si("MISSION FAILED",n,"#ff4d5e",2800),pt.fail()},A.dead?2700:0),Fr.visible=!1,zi.visible=!1,jn=!0}function Q0(){let n=Ut;Ut=null;let e=n.d,t=(e.reward?e.reward(n):0)+(n.prize||0);e.done&&e.done(n),t>0&&(F.cash+=t),Mn(e.xp||50),setTimeout(()=>{si("MISSION PASSED",t>0?"+"+sn(t)+"  \u2022  +"+(e.xp||50)+" XP":"+"+(e.xp||50)+" XP","#38e07b",3e3),pt.pass()},400),Fr.visible=!1,zi.visible=!1,Qn(),jn=!0,vg()}function gb(n){if(!Ut)return null;let e=Ut,t=e.steps[e.i];if(!t)return Q0(),null;if(t._s||(t._s=!0,t.start&&t.start(e)),e.failReason)return fl(e.failReason),null;if(t.update(e,n))return e.i++,e.i>=e.steps.length&&Q0(),null;if(e.failReason)return fl(e.failReason),null;let i=typeof t.text=="function"?t.text(e):t.text,s=t.target?t.target(e):null;return{text:i,pos:s,color:16732067}}var Ts=null;function vg(){for(let n in li){let e=Br[n];e.visible=!1}}function xb(n){let e=it();B.night>.6?Ts||(Ts=et(Re.strangerSpots)):Ts=null,li.stranger.spot=Ts,Ts&&Br.stranger.position.set(Ts.x,Mt,Ts.z);for(let t in li){let i=li[t],s=Br[t];if(!i.spot||Ut){s.visible=!1;continue}let r=yg(t),o=Math.hypot(e.x-i.spot.x,e.z-i.spot.z);s.visible=r.length>0&&(t!=="stranger"||o<60),s.visible&&o<3&&!A.dead&&!(j0>B.clock)&&(j0=B.clock+4,r.length===1?Td(r[0][0]):lg(r.map(([a,l])=>l.title).concat(["Not now"]),a=>{a<r.length&&Td(r[a][0])}))}}var j0=0,_i=[],Xh=9,gd=200;function Fo(n){let e=vs(n,1.6);return e.scale.set(1,.6,1),e}function _b(n){let e=_i.indexOf(n);e>=0&&_i.splice(e,1),n.beam&&qe.remove(n.beam),n.cleanup&&n.cleanup()}function xd(n,e,t){for(let i=0;i<40;i++){let s=se()*(rt+1)|0,r=se()*(rt+1)|0,o=Ae(s),a=Ae(r),l=Math.hypot(o-n.x,a-n.z);if(l>e&&l<t)return{i:s,j:r,x:o,z:a}}return null}var Mg={chase(){let n=it(),e=xd(n,60,120);if(!e)return null;let t=Pn(et(["sports","muscle","sedan"]),et([2829634,6947855,3804323]),e.x,e.z,se()*6,!1);qo(t,.9),t.mission=!0;let i=[];for(let r=0;r<2;r++){let o=Pn("police",void 0,e.x+(r?9:-9),e.z+6,0,!1);o.ai={kind:"police",dyn:!0,target:t},o.role="police",vn.push(o),i.push(o)}return tt("\u{1F6A8} Police chase nearby! Ram the suspect for a reward","#4da3ff",3200),{name:"chase",t:75,sus:t,beam:Fo(5088255),update(r){return this.beam.position.set(t.pos.x,0,t.pos.z),t.wrecked?(Nn(400,"\u{1F46E} Citizen's arrest! Suspect stopped"),Mn(40),!0):t.pos.distanceTo(it())>320},cleanup(){for(let r of i)r.ai&&(r.ai.target=null,r.ai.leaving=!0);!t.removed&&t!==A.car&&t.ai&&(t.ai=null)}}},armored(){let n=it(),e=xd(n,70,140);if(!e)return null;let t=Pn("armored",void 0,e.x,e.z,0,!1);return qo(t,.45),t.mission=!0,tt("\u{1F69A} An armored truck is passing through. Feeling lucky?","#e9c46a",3200),{name:"armored",t:120,v:t,beam:Fo(15320170),alerted:!1,update(){if(this.beam.position.set(t.pos.x,0,t.pos.z),t.wrecked){for(let s=0;s<3;s++)Vo(t.pos,"bag",250+(se()*300|0),{life:60});return Mn(40),!0}return t.pos.distanceTo(it())>350},onImpact(s,r){r===t&&!this.alerted&&(this.alerted=!0,on(Math.max(B.wanted,2)),qo(t,.7),tt("\u{1F6A8} The guards radioed the cops!","#ff6b6b"))},cleanup(){!t.removed&&t!==A.car&&(t.ai=null)}}},mugging(){let n=it(),e=Jt.find(s=>s.kind==="civ"&&s.down<=0&&s.pos.distanceTo(n)>15&&s.pos.distanceTo(n)<45);if(!e)return null;let t=es({skin:et(["#c68642","#8d5524","#f1c9a5"]),top:"#3d405b",pants:"#111111",hair:"#111111",shoe:"#ffffff"},e.pos.clone().add(new C(1,0,0)),{state:"flee",pers:"coward",hp:30});if(!t)return null;t.t=30,t.fleeFrom=e.pos.clone(),t.base=6.5,e.state="idle",e.armsUp=3,e.idle=3,ot([["\u{1F62B}","Victim","HEY! He took my purse! STOP THIEF!"]]);let i={name:"mugging",t:30,beam:Fo(16739179),update(){return this.beam.position.set(t.pos.x,Mt,t.pos.z),!!t.dead},onKO(s){s===t&&(Vo(s.pos,"cash",150),tt("\u{1F9B8} Hero! Grab the purse money.","#7af0ff"),Mn(30),e.cheer=3,e.state="cheer",setTimeout(()=>{e.dead||(e.state="walk")},3e3),this.done=!0)},cleanup(){t.dead||(t.kind="civ",t.state="walk",t.from=0,t.to=0)}};return i.update=function(){return this.beam.position.set(t.pos.x,Mt,t.pos.z),this.done||t.dead},i},gangfight(){let n=it();if(A.car)return null;let e=se()*6.28,t={x:n.x+Math.cos(e)*22,z:n.z+Math.sin(e)*22},i=new C(t.x,0,t.z);In(i,2);let s=[],r=[];for(let o=0;o<3;o++){let a=$s(3,{x:i.x-2,z:i.z}),l=$s(4,{x:i.x+2,z:i.z});a&&s.push(a),l&&r.push(l)}return s.forEach((o,a)=>{o.state="fight",o.target=r[a%r.length]}),r.forEach((o,a)=>{o.state="fight",o.target=s[a%s.length]}),tt("\u{1F94A} Gang fight! Kings vs Vipers","#e9c46a",3e3),Hh(i,20,i),{name:"gangfight",t:60,beam:Fo(15320170),update(){return this.beam.position.set(i.x,0,i.z),[...s,...r].every(o=>o.dead||o.down>0||o.state!=="fight")}}},racer(){if(!A.car||Math.abs(A.car.speed)<6)return null;let n=A.car,e=Math.sin(n.yaw),t=Math.cos(n.yaw),i=Pn(et(["sports","muscle","super"]),et([16196997,5032447,11920524]),n.pos.x-t*3.6-e*2,n.pos.z+e*3.6-t*2,n.yaw,!1);In(i.pos,1.4);let s=xd(it(),200,300);if(!s)return bs(i),null;let r=new C(s.x,0,s.z);return i.mission=!0,i.invuln=!0,i.vel.copy(n.vel),i.spec={...i.spec,max:i.spec.max*.92},i.ai={kind:"drive",dyn:!0,fn:(a,l)=>{let[c,h]=No(a,r.x,r.z);Ir(a,c,h,l,{nitro:!0})}},ot([["\u{1F60E}","Street Racer","Nice ride, slowpoke. Race you to the pink beam! $400 says I win."]]),{name:"racer",t:70,beam:Fo(16196997),update(){this.beam.position.set(r.x,0,r.z);let a=it();return Math.hypot(a.x-r.x,a.z-r.z)<9&&A.car?(Nn(400,"\u{1F3C1} You smoked the street racer!"),Mn(40),!0):Math.hypot(i.pos.x-r.x,i.pos.z-r.z)<9?(tt('\u{1F60E} "Too slow!" The racer won.',"#ff6b6b"),!0):!1},target:r,cleanup(){!i.removed&&i!==A.car&&(i.ai=null)}}},brawl(){if(A.car)return null;let n=it(),e=es({skin:et(["#f1c9a5","#8d5524","#c68642"]),top:"#ffffff",sleeve:et(["#f1c9a5","#8d5524"]),pants:"#2b2d42",hair:"#111111",shoe:"#111111"},new C(n.x+5,Mt,n.z+3),{state:"idle",pers:"tough",hp:90});if(!e)return null;In(e.pos,.5),ot([["\u{1F624}","Tough Guy",et(["You looking at me?! Let's go, right here, right now!","My buddies bet $250 I can knock you out. Put 'em up!"])]]),setTimeout(()=>{e.dead||(e.state="fight",e.target="player")},1500);let t=[];for(let s=0;s<4;s++){let r=es(ji.civ(),new C(n.x+Math.cos(s*1.6)*6,Mt,n.z+Math.sin(s*1.6)*6),{state:"cheer",pers:"coward",hp:25});r&&(In(r.pos,.5),t.push(r))}return{name:"brawl",t:60,noCrime:!0,beam:null,onKO(s){s===e&&(Nn(250,"\u{1F94A} You won the street fight!"),Mn(30),pt.cheer(),t.forEach(r=>r.cheer=3),this.done=!0)},update(){return this.done||e.dead||A.dead},cleanup(){for(let s of t)s.dead||(s.kind="civ",s.state="walk",s.from=0,s.to=0);e.dead||(e.kind="civ",e.state="walk",e.from=0,e.to=0)}}},rare(){if(F.garage.includes("gold"))return null;let e=et(Re.rareSpots),t=Ed("gold",e);return t.rare=!0,tt("\u{1F4F8} Someone spotted a GOLD supercar parked in "+Ph[Ao(e.x,e.z)].name+"!","#ffd60a",4500),{name:"rare",t:240,beam:Fo(16766474),update(){return this.beam.position.set(t.pos.x,0,t.pos.z),A.car===t?(tt("\u{1F3C6} You found the Gold Rush! Store it in your garage!","#ffd60a",4e3),!0):t.removed||t.wrecked}}},icecream(){if(B.night<.6)return null;let n=et(kr().filter(t=>t.park)||[]);if(!n)return null;let e=Pn("icecream",void 0,n.cx+7,n.cz+7,se()*6,!1);return tt("\u{1F366} You hear a creepy ice cream jingle somewhere in the night...","#ff8fc7",4e3),{name:"icecream",t:180,beam:null,update(t){return B.frameN%90===0&&e.pos.distanceTo(it())<60&&[784,659,784,880].forEach((i,s)=>Kt(i,.18,"sine",.04,null,s*.2)),A.car===e||e.removed}}}};function yb(n){if(Xh-=n,gd-=n,Xh<=0&&!Ut&&_i.length<2&&B.state==="play"){Xh=40+se()*40;let e=["chase","chase","armored","mugging","mugging","gangfight","racer","racer","brawl"];B.night>.6&&e.push("icecream"),gd<=0&&(e=["rare"],gd=600),B.firstEvent||(e=["chase"],B.firstEvent=!0);let t=et(e),i=Mg[t]();i?_i.push(i):Xh=5}for(let e of[..._i])e.t-=n,(e.update(n)||e.t<=0)&&_b(e)}var _d=0;function vb(n){if(_d-=n,_d>0)return;_d=3;let e=it();for(let t of[3,4]){let i=Jt.filter(s=>s.kind==="gang"&&s.gang===t);for(let s of i)s.pos.distanceTo(e)>200&&!_i.length&&Ms(s);if(i.length<6)for(let s of Re.gangSpots[t])Math.hypot(s.x-e.x,s.z-e.z)<140&&Math.hypot(s.x-e.x,s.z-e.z)>40&&Jt.filter(r=>r.kind==="gang"&&r.home&&Math.hypot(r.home.x-s.x,r.home.z-s.z)<6).length<2&&($s(t,s),$s(t,s))}}var Mb=Be("map"),$e=Mb.getContext("2d"),yd=0;function Sb(n){let s=it(),r=Math.sin(xi),o=Math.cos(xi),a=(f,u)=>{let d=f-s.x,p=u-s.z;return[118-(d*-o+p*r)*1.18,118-(d*r+p*o)*1.18]};$e.clearRect(0,0,236,236),$e.save(),$e.beginPath(),$e.arc(118,118,118,0,Math.PI*2),$e.clip(),$e.fillStyle=B.night>.5?"#2a2c3a":"#6d6a64",$e.fillRect(0,0,236,236),$e.strokeStyle=B.night>.5?"#8a8ea8":"#e4e0d8",$e.lineWidth=jt*1.18,$e.lineCap="square";for(let f=0;f<=rt;f++){let u=a(Ae(f),-Kn),d=a(Ae(f),Kn);$e.beginPath(),$e.moveTo(...u),$e.lineTo(...d),$e.stroke(),u=a(-Kn,Ae(f)),d=a(Kn,Ae(f)),$e.beginPath(),$e.moveTo(...u),$e.lineTo(...d),$e.stroke()}if(B.wanted>0){let[f,u]=a(Zo.x,Zo.z);$e.fillStyle=(B.frameN>>4)%2?"rgba(255,40,40,0.22)":"rgba(40,80,255,0.22)",$e.beginPath(),$e.arc(f,u,(40+B.wanted*15)*1.18,0,7),$e.fill()}let l=(f,u,d,p,x,m)=>{let[g,y]=a(f,u),S=g-118,v=y-118,T=Math.hypot(S,v);if(T>108){if(!x)return;g=118+S/T*108,y=118+v/T*108}$e.fillStyle=d,$e.beginPath(),$e.arc(g,y,p,0,7),$e.fill(),$e.strokeStyle="#000",$e.lineWidth=2,$e.stroke(),m&&($e.fillStyle="#000",$e.font="bold "+(p*1.3|0)+"px sans-serif",$e.textAlign="center",$e.textBaseline="middle",$e.fillText(m,g,y+1))};Re.stores.forEach((f,u)=>{iu[u]>B.clock||l(f.x,f.z,"#38e07b",6,!1,"$")}),Re.spray.forEach(f=>l(f.x,f.z,"#ffd60a",6,!1,"P")),F.flags.chop&&l(Re.chop.x,Re.chop.z,"#ff7b00",6,!1,"C");let c=nu();l(c.x,c.z,"#7af0ff",7,!0,"H");for(let f in Br)if(Br[f].visible){let u=Br[f].position;l(u.x,u.z,"#"+li[f].color.toString(16).padStart(6,"0"),9,!0,li[f].av==="\u{1F3A9}"?"?":f[0].toUpperCase())}for(let f of _i)if(f.beam){let u=f.beam.position;l(u.x,u.z,"#"+f.beam.userData.beam.material.color.getHexString(),7,!0,"!")}for(let f of vn)!f.removed&&!f.wrecked&&l(f.pos.x,f.pos.z,(B.frameN>>3)%2?"#ff3030":"#3060ff",5,!1);for(let f of Jt)f.kind==="cop"&&f.state==="chase"&&l(f.pos.x,f.pos.z,"#4da3ff",3,!1);n&&n.pos&&l(n.pos.x,n.pos.z,"#ff4fa3",10,!0,"\u2605");for(let f of Nr)l(f.pos.x,f.pos.z,"#7dff9b",4,!1);for(let f=0;f<Rr;f++){let u=Po[f];u.visible&&u.position.distanceTo(s)<50&&l(u.position.x,u.position.z,"#ffcc00",3.5,!1)}let h=(A.car?A.car.yaw:A.yaw)-xi;$e.translate(118,118),$e.rotate(-h),$e.fillStyle="#fff",$e.strokeStyle="#000",$e.lineWidth=2,$e.beginPath(),$e.moveTo(0,-13),$e.lineTo(9,10),$e.lineTo(0,5),$e.lineTo(-9,10),$e.closePath(),$e.fill(),$e.stroke(),$e.restore()}var jn=!0,eg=-1,qh=0;function bb(n,e){if(jn){Be("cash").textContent=sn(F.cash),Be("hpBar").firstElementChild.style.width=Math.max(0,A.hp)+"%";let r=ns(F.xp),o=ki[r][0],a=ki[r+1]?ki[r+1][0]:o+1;Be("rankTxt").textContent="R"+(r+1)+" "+ki[r][1],Be("xpBar").firstElementChild.style.width=Ot((F.xp-o)/(a-o)*100,0,100)+"%";let l=!!A.car;Be("bA").textContent=l?"BRAKE":"PUNCH",Be("bB").textContent=l?"HORN":"RUN",Be("bD").textContent=l?"NITRO":"JUMP",Be("speed").classList.toggle("hidden",!l);let c=Be("stars");B.wanted>0?(c.classList.remove("hidden"),c.innerHTML=[1,2,3,4,5].map(h=>'<span class="'+(h<=B.wanted?"on":"off")+'">\u2605</span>').join("")):c.classList.add("hidden"),jn=!1}Be("stars").classList.toggle("flash",B.wanted>0&&Kh<=0),Uo=zd();let t=Be("bC");if(!!Uo===t.classList.contains("hidden")&&t.classList.toggle("hidden",!Uo),Uo&&t.innerHTML!==Uo.label&&(t.innerHTML=Uo.label),A.car){let r=String(Math.round(Math.abs(A.car.speed)*3.6));Be("spd").textContent!==r&&(Be("spd").textContent=r),Be("nitro").firstElementChild.style.width=A.car.nitro*100+"%"}let i=Be("obj");e&&e.text?(i.innerHTML!==e.text&&(i.innerHTML=e.text),i.classList.remove("hidden")):i.classList.add("hidden"),cl=Math.max(0,cl-n*1.5),Be("dmg").style.opacity=Math.max(cl,A.hp<30?.35+Math.sin(B.clock*6)*.15:0),zo>0&&(zo-=n,zo<=0&&Pd());let s=Ao(it().x,it().z);if(s!==eg){eg=s;let r=Be("district");r.textContent=Ph[s].name,r.style.color=Ph[s].color,r.style.opacity=1,qh=2.2}qh>0&&(qh-=n,qh<=0&&(Be("district").style.opacity=0)),yd-=n,yd<=0&&(yd=.08,Sb(e),Be("clock").textContent=T0()+(B.rain>.3?" \u{1F327}\uFE0F":B.night>.6?" \u{1F319}":" \u2600\uFE0F"))}var Dr="jobs",wb=[["jobs","\u{1F4CD} Jobs"],["garage","\u{1F697} Garage"],["props","\u{1F3E2} Property"],["me","\u{1F4CA} Me"],["awards","\u{1F3C6} Awards"],["set","\u2699\uFE0F"]];function Hd(){B.state==="play"&&(B.state="phone",Id(),Bo(),Be("phone").classList.remove("hidden"),Qn())}function Yo(){B.state="play",Be("phone").classList.add("hidden"),A.car&&og()}function ln(n,e,t,i){return'<div class="item"><div class="av">'+n+'</div><div class="nm">'+e+(t?"<small>"+t+"</small>":"")+"</div>"+(i||"")+"</div>"}function Bo(){Be("pCash").textContent=sn(F.cash),Be("tabs").innerHTML=wb.map(([t,i])=>'<button class="tab'+(t===Dr?" on":"")+'" data-tab="'+t+'">'+i+"</button>").join("");let n="",e=ns(F.xp);if(Dr==="jobs"){Ut&&(n+=ln("\u26A1","Current: "+Ut.d.title,li[Ut.d.c].name,'<button class="red" data-act="cancel">QUIT</button>'));for(let t of["vinny","lucia","tony","stranger"]){let i=li[t],s=yg(t),r=mb(t);if(t==="stranger"&&F.stranger===0&&ns(F.xp)<2){n+=ln("\u2754","Unknown number","Rank up to find out\u2026");continue}if(t==="stranger"){n+=ln(i.av,i.name,F.stranger>=3?"Gone. For now.":"Only appears at night. Look for a purple beam.");continue}s.length?n+=ln(i.av,i.name,s.map(([o,a])=>a.title).join(" \u2022 "),'<button class="go" data-gps="'+t+'">GPS</button>'):r?n+=ln(i.av,i.name,"\u{1F512} "+r[1].title+" \u2014 unlocks at Rank "+(r[1].rank+1)):n+=ln(i.av,i.name,t==="vinny"&&F.story>=6?"Story complete. You run this town.":"Nothing right now")}n+='<div class="sec">ALWAYS AVAILABLE</div>'+ln("\u{1F4B0}","Rob a store","Green $ on the map. Hold your ground ~5s.")+ln("\u{1F695}","Taxi","Get in any taxi and tap TAXI JOB.")+ln("\u{1F527}","Chop Shop",F.flags.chop?"Sell any stolen car at Vinny's (orange C).":"\u{1F512} Unlocks during Vinny's story")+ln("\u{1F6EB}","Stunt jumps",F.stunts.length+"/"+Oi.length+" unique jumps found")+ln("\u{1FA99}","Hidden stashes",F.coins.length+"/"+Rr+" found")}else if(Dr==="garage"){n+='<div class="sec">YOUR GARAGE ('+F.garage.length+"/"+(F.props.penthouse?8:4)+") \u2014 store cars at the blue H garage</div>";for(let t of F.garage)n+=ln("\u{1F697}",en[t].name,"Top speed "+Math.round(en[t].max*3.6)+" km/h",'<button class="go" data-call="'+t+'">CALL</button>');n+='<div class="sec">DEALERSHIP</div>';for(let t in en)en[t].cost>0&&!F.garage.includes(t)&&(n+=ln("\u{1F3F7}\uFE0F",en[t].name,Math.round(en[t].max*3.6)+" km/h",'<button data-buy="'+t+'" '+(F.cash<en[t].cost?"disabled":"")+">"+sn(en[t].cost)+"</button>"));n+='<div class="sec">COLLECTION ('+F.discovered.length+"/"+Object.keys(en).length+")</div>";for(let t in en){let i=F.discovered.includes(t);n+=ln(i?"\u2705":en[t].secret?"\u2753":"\u2B1C",i?en[t].name:en[t].secret?"??? (secret)":en[t].name,i?"Discovered":"Drive one to discover it")}}else if(Dr==="props"){n+='<div class="sec">INCOME: '+sn(Bd())+" per game hour (every 40s)</div>";for(let t in Dn){let i=Dn[t],s=F.props[t],r=i.req&&!i.req();n+=ln(i.icon,i.name,s?"\u2705 Owned"+(i.rate?" \u2022 +"+sn(i.rate)+"/hr":""):r?"\u{1F512} Locked":(i.rate?"+"+sn(i.rate)+"/hr":"Safehouse + 8 garage slots")+" \u2022 Walk to the blue beam to buy",s?"":'<button data-gps-prop="'+t+'" '+(r?"disabled":"")+">"+sn(i.cost)+"</button>")}}else if(Dr==="me"){n+=ln("\u2B50","Rank "+(e+1)+" \u2014 "+ki[e][1],F.xp+" XP"+(ki[e+1]?" \u2022 next at "+ki[e+1][0]:""));for(let[i,s]of[["drive","\u{1F697} Driving"],["fight","\u{1F44A} Fighting"],["stamina","\u{1F3C3} Stamina"]])n+='<div class="item"><div class="nm">'+s+'<div class="bar"><i style="width:'+F.skills[i]+'%"></i></div></div><b>'+Math.floor(F.skills[i])+"</b></div>";let t=F.stats;n+='<div class="sec">STATS</div><div style="font-weight:700;line-height:1.7;opacity:.9">\u{1F44A} Knockouts: '+t.kos+"<br>\u{1F697} Cars stolen: "+t.stolen+"<br>\u{1F4B0} Stores robbed: "+t.robberies+"<br>\u{1F60E} Police escapes: "+t.escapes+"<br>\u2B50 Highest wanted: "+t.maxStars+"<br>\u{1F695} Taxi fares: "+t.fares+"<br>\u26A1 Top speed: "+Math.round(t.maxSpeed)+" km/h<br>\u{1F525} Best drift: "+sn(t.bestDrift)+"</div>"}else if(Dr==="awards"){n+='<div class="sec">'+F.ach.length+"/"+Object.keys(Jh).length+" UNLOCKED</div>";for(let t in Jh){let i=Jh[t],s=F.ach.includes(t);n+=ln(s?i[0]:"\u{1F512}",i[1],i[2])}}else n+=ln("\u{1F50A}","Sound",F.muted?"Off":"On",'<button data-act="mute">'+(F.muted?"TURN ON":"TURN OFF")+"</button>"),n+=ln("\u2728","Graphics",{auto:"Auto ("+Sg+")",high:"High",medium:"Medium",low:"Low"}[F.quality],'<button data-act="quality">CHANGE</button>'),n+=ln("\u{1F4CD}","Stuck?","Teleport home",'<button data-act="home">GO HOME</button>'),n+=ln("\u2753","Controls","Left: move \u2022 Right: look \u2022 PUNCH/BRAKE \u2022 RUN/HORN \u2022 JUMP/NITRO \u2022 green button = action"),n+='<div style="opacity:.5;font-size:12px;margin-top:8px">v'+Rd+" \u2022 progress saves on this device</div>";Be("pBody").innerHTML=n}Be("phone").addEventListener("click",n=>{let e=n.target.closest("button");if(!e)return;if(zr(),pt.click(),e.dataset.tab){Dr=e.dataset.tab,Bo();return}if(e.dataset.call){cb(e.dataset.call);return}if(e.dataset.buy){let i=e.dataset.buy;F.cash>=en[i].cost&&(F.cash-=en[i].cost,F.garage.push(i),pt.cash(),Qn(),jn=!0,tt("\u{1F3F7}\uFE0F Bought a "+en[i].name+"! Call it from your garage.","#7dff9b")),Bo();return}if(e.dataset.gps){Rs=li[e.dataset.gps].spot,Yo(),tt("\u{1F4CD} GPS set to "+li[e.dataset.gps].name,"#ff4fa3");return}if(e.dataset.gpsProp){Rs=Dn[e.dataset.gpsProp].spot,Yo(),tt("\u{1F4CD} GPS set to "+Dn[e.dataset.gpsProp].name,"#4cc9ff");return}let t=e.dataset.act;if(t==="cancel"&&(fl("You quit"),Bo()),t==="mute"&&(F.muted=!F.muted,F.muted?rg():zr(),Qn(),Bo()),t==="quality"){let i=["auto","high","medium","low"];F.quality=i[(i.indexOf(F.quality)+1)%4],Ad=!0,eu(F.quality==="auto"?"high":F.quality),Qn(),Bo()}if(t==="home"){if(A.car&&Cs(),B.wanted>0){tt("Not while wanted!","#ff6b6b");return}let i=nu();A.pos.set(i.x,Mt,i.z),As.copy(A.pos),Yo()}});Be("pClose").onclick=Yo;Be("menuBtn").addEventListener("pointerdown",n=>{n.stopPropagation(),Hd()});var Rs=null,Sg="high",Ad=F.quality!=="auto",vd=0,tg=0;function eu(n){Sg=n;let e=window.devicePixelRatio||1;zn.setPixelRatio(n==="low"?1:n==="medium"?Math.min(e,1.25):Math.min(e,1.6)),qe.traverse(t=>{t.isDirectionalLight&&(t.castShadow=n!=="low")}),zn.setSize(window.innerWidth,window.innerHeight)}F.quality!=="auto"&&eu(F.quality);var Md=new Ba,As=new C,Yh=new C,ng=new C;function Eb(n){let e=it();if(As.lerp(ng.set(e.x,A.car?1.5+A.car.y:A.pos.y+1.55,e.z),Math.min(1,n*12)),A.car&&B.clock-mi.lastT>1.6&&(Math.abs(A.car.speed)>2||A.car.air)){let c=gi?A.car.yaw+Math.PI*.35:A.car.yaw;xi=Xs(xi,c,Math.min(1,n*(gi?1.2:2.2))),Ur=It(Ur,gi?.12:.24,Math.min(1,n*1.5))}let t=Dd+(A.car?Math.min(3.5,Math.abs(A.car.speed)*.07):0)+(gi?3:0),i=Math.cos(Ur),s=Math.sin(Ur),r=ng.set(-Math.sin(xi)*i,s,-Math.cos(xi)*i),o=t;Md.set(As,r),Md.far=t;let a=Md.intersectObjects(M0,!1);a.length&&(o=Math.max(1,a[0].distance-.35)),Yh.copy(As).addScaledVector(r,o),Yh.y<.35&&(Yh.y=.35),Cn.position.copy(Yh),Ei>0&&(Cn.position.x+=(Math.random()-.5)*Ei,Cn.position.y+=(Math.random()-.5)*Ei,Ei=Math.max(0,Ei-n*1.5)),Cn.lookAt(As.x,As.y+.15,As.z);let l=A.car?60+Math.min(14,Math.abs(A.car.speed)*.28)+(A.car.nitroOn?10:0):60;Math.abs(Cn.fov-l)>.1&&(Cn.fov=It(Cn.fov,l,Math.min(1,n*3)),Cn.updateProjectionMatrix())}kr.c=Js;var Sd=[3104680,10753562,15658734,2792847,7107965,1914199,5904538,1118481,12632256,9268835,2508371,7995417];function Tb(){let n=(()=>{let t=31337;return()=>(t=t*16807%2147483647)/2147483647})();for(let t=0;t<16;t++){let i=n()*rt|0,s=n()*rt|0,r=n()*4|0,o=["sedan","sedan","suv","taxi","van","sports","sedan"][n()*7|0],a=Ht(i,s,r,(n()-.5)*24);Pn(o,o==="taxi"?void 0:Sd[n()*Sd.length|0],a.x,a.z,a.yaw,!1)}let e=Ht(4,4,2,-14);er=Pn(F.garage.includes("sports")?"sports":"sedan",void 0,e.x,e.z,e.yaw,!1),er.owned=!0;for(let t=0;t<24;t++){let i=et(["sedan","sedan","sedan","suv","suv","taxi","van","sports","police"]),s=Pn(i,i==="taxi"||i==="police"?void 0:et(Sd),0,0,0,!0);i==="police"&&(s.role="patrol"),s.pos.distanceTo(A.pos)<25&&rl(s)}for(let t=0;t<40;t++)td(A.pos.x,A.pos.z,8,140);Pn("super",16777215,Ht(4,3,1,8).x,Ht(4,3,1,8).z,Ht(4,3,1,8).yaw,!1),Pn("muscle",void 0,Ht(4,3,1,-16).x,Ht(4,3,1,-16).z,Ht(4,3,1,-16).yaw,!1)}var bd=0;function Ab(n){if(bd-=n,bd>0)return;bd=1;let e=it();for(let t of $n)t.ai?.kind==="traffic"&&t.pos.distanceTo(e)>220&&rl(t,void 0,void 0,e);for(let t of[...$n])!t.ai&&!t.owned&&t!==A.car&&(t.wrecked||t.mission)&&t.pos.distanceTo(e)>200&&bs(t)}function Rb(n,e){let t=it(),i=e&&e.pos?e.pos:null;!i&&Rs&&(i=Rs,Math.hypot(t.x-Rs.x,t.z-Rs.z)<6&&(Rs=null,i=null)),Fr.visible=!!(e&&e.pos&&Ut),e&&e.pos&&(Fr.position.set(e.pos.x,Rn(e.pos.x,e.pos.z),e.pos.z),w0(Fr,e.color||16732067),Fr.userData.ring.rotation.z+=n),i?(zi.visible=!0,zi.position.set(t.x,(A.car?3.2+A.car.y:A.pos.y+2.6)+Math.sin(B.clock*4)*.1,t.z),zi.rotation.y=Math.atan2(i.x-t.x,i.z-t.z),zi.userData.mat.color.setHex(e?.color||16732067)):zi.visible=!1;for(let s=0;s<Rr;s++){let r=Po[s];r.visible&&(r.rotation.y+=n*3,Math.hypot(t.x-r.position.x,t.z-r.position.z)<(A.car?2.8:1.3)&&(r.visible=!1,F.coins.push(s),pt.coin(),Nn(50,"\u{1FA99} Stash "+F.coins.length+"/"+Rr,"#ffd60a"),Mn(10),F.coins.length===Rr&&(Nn(2e3,"\u{1F389} ALL STASHES FOUND!"),Sn("coins"))))}}function bg(){let n=ns(F.xp);Be("startInfo").textContent=F.xp>0?"\u2B50 Rank "+(n+1)+" "+ki[n][1]+" \u2022 "+sn(F.cash):"A city full of trouble. Make some.",Be("muteBtn").textContent=F.muted?"\u{1F507} SOUND OFF":"\u{1F50A} SOUND ON"}function Cb(){if(!F.lastSeen)return;let n=Math.min(180,(Date.now()-F.lastSeen)/6e4),e=Bd();if(e>0&&n>2){let t=Math.round(n*e*.5);F.cash+=t,setTimeout(()=>{si("WELCOME BACK","Your businesses earned "+sn(t)+" while you were away","#4cc9ff",3500),pt.cash()},1200)}}Be("playBtn").onclick=()=>{zr(),pt.click(),B.state="play",Be("start").classList.add("hidden"),Be("hud").classList.remove("hidden"),F.tut||Be("tut").classList.remove("hidden"),Cb(),F.played=(F.played||0)+1,F.story===0&&!F.flags.introText&&(F.flags.introText=!0,setTimeout(()=>ot([Gt("Hey kid. Word is you're new in town and broke. I can fix one of those."),Gt("Come see me in Old Town. Follow the purple beam. \u2014 V \u{1F41F}")]),9e3)),jn=!0,Qn()};Be("muteBtn").onclick=()=>{F.muted=!F.muted,Qn(),zr(),F.muted&&rg(),bg()};Be("resetBtn").onclick=()=>{confirm("Start a brand new game? All progress will be erased.")&&(localStorage.removeItem(Cd),location.reload())};document.addEventListener("visibilitychange",()=>{document.hidden&&(Qn(),B.state==="play"&&Hd())});window.addEventListener("pagehide",Qn);function wg(){zn.setSize(window.innerWidth,window.innerHeight),Cn.aspect=window.innerWidth/window.innerHeight,Cn.updateProjectionMatrix()}window.addEventListener("resize",wg);window.addEventListener("orientationchange",()=>setTimeout(wg,250));var ig=performance.now(),sg=0;function Eg(n){requestAnimationFrame(Eg);let e=(n-ig)/1e3;ig=n,e>0||(e=0),e=Math.min(e,.05),Tg(e);try{zn.render(qe,Cn)}catch(t){console.error(t)}}function Tg(n){B.hitStop>0&&(B.hitStop-=n);let e=B.hitStop>0?.08:B.timeScale,t=n*e;try{let i=null;if(B.state==="play"){B.clock+=t,Zf(B.clock),A.car?eb(t):(!A.dead||A.person.down>0)&&j1(t),ad(t);for(let r of[...Jt])id(r,t);if(N0(t),vb(t),Ab(t),k1(t),G1(t),hb(t),ob(t),K1(t),xb(t),yb(t),i=gb(t)||fb(t)||(Rs?{text:"\u{1F4CD} GPS route",pos:Rs,color:16732067}:null),!i&&_i.length){let r=_i.find(o=>o.target);r&&(i={text:"\u{1F3C1} Beat the racer to the pink beam!",pos:r.target,color:16196997})}if(Rb(t,i),bb(n,i),B.gameMin>180&&B.gameMin<200&&Sn("night"),B.clock-sg>8&&(sg=B.clock,Qn()),!Ad&&B.clock>3&&(vd+=n,tg++,vd>4)){let r=tg/vd;Ad=!0,r<24?eu("low"):r<38&&eu("medium")}}else{B.clock+=t*.5,B.state==="start"&&(xi+=t*.05),Zf(B.clock),ad(t);for(let r of[...Jt])id(r,t)}E0(B.state==="play"?t:t*.3,it()),Y0(t,it()),Z0(t);let s=Cn.position;A.person.hide=!!A.car,A.dead&&A.person.down>0&&(A.person.down-=t),Oh(A.person,t);for(let r of Jt)((r.pos.x-s.x)**2+(r.pos.z-s.z)**2<16900||(B.frameN+r.idx&3)===0)&&Oh(r,t);C0(),B.frameN++,Eb(n)}catch(i){console.error(i)}}Tb();for(let n of Jt)Oh(n,0);As.set(A.pos.x,A.pos.y+1.55,A.pos.z);for(let n of F.coins)Po[n]&&(Po[n].visible=!1);Be("ver").textContent="v"+Rd;bg();B.state="start";Be("start").classList.remove("hidden");Be("loading").classList.add("hidden");requestAnimationFrame(Eg);window.__SR={S:B,P:A,save:F,peds:Jt,vehicles:$n,police:vn,LOC:Re,MISSIONS:su,startMission:Td,get MS(){return Ut},events:_i,EVENTS:Mg,setWanted:on,enterCar:hg,exitCar:Cs,punch:Ud,contextAction:kd,findContext:zd,joy:Ln,btn:is,ramps:Oi,heli:ws,camera:Cn,setCam:(n,e)=>{xi=n,Ur=e},addXP:Mn,rankOf:ns,startRobbery:xg,get robbing(){return Pt},pickups:Nr,wreck:od,hitPed:kh,knockDown:il,get bustT(){return Go},get strangerSpot(){return Ts},VERSION:Rd,sim:n=>{for(let e=0;e<n*30;e++)Tg(1/30)}};
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
