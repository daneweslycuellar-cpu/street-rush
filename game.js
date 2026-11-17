var Ju=0,zc=1,$u=2;var gs=1,Ku=2,lr=3,Ji=0,tn=1,Cn=2,_s=0,cr=1,xo=2,Hc=3,Gc=4,Qu=5;var xs=100,ju=101,ed=102,td=103,nd=104,id=200,sd=201,rd=202,od=203,kc=204,Vc=205,ad=206,ld=207,cd=208,hd=209,ud=210,dd=211,fd=212,pd=213,md=214,pa=0,ma=1,ga=2,Zs=3,_a=4,xa=5,ya=6,va=7,Wc=0,gd=1,_d=2,ui=0,Xc=1,qc=2,Yc=3,yo=4,Zc=5,Jc=6,$c=7;var Kc=300,ys=301,hr=302,$a=303,Ka=304,Js=1e3,ai=1001,Ma=1002,$t=1003,xd=1004;var vo=1005;var gn=1006,Qa=1007;var wi=1008;var vn=1009,Qc=1010,jc=1011,ur=1012,ja=1013,ni=1014,Gn=1015,ii=1016,el=1017,tl=1018,vs=1020,eh=35902,th=35899,nh=1021,ih=1022,si=1023,Ei=1026,Ai=1027,nl=1028,il=1029,$i=1030,sl=1031;var rl=1033,Mo=33776,So=33777,bo=33778,Eo=33779,ol=35840,al=35841,ll=35842,cl=35843,hl=36196,ul=37492,dl=37496,fl=37488,pl=37489,To=37490,ml=37491,gl=37808,_l=37809,xl=37810,yl=37811,vl=37812,Ml=37813,Sl=37814,bl=37815,El=37816,Tl=37817,wl=37818,Al=37819,Rl=37820,Cl=37821,Il=36492,Pl=36494,Ll=36495,Dl=36283,Nl=36284,wo=36285,Ul=36286;var Br=2300,Sa=2301,da=2302,Ac=2303,Rc=2400,Cc=2401,Ic=2402;var yd=3200;var Fl=0,vd=1,Ri="",pn="srgb",zr="srgb-linear",Hr="linear",xt="srgb";var fa=7680;var Md=519,Sd=512,bd=513,Ed=514,sh=515,Td=516,wd=517,rh=518,oh=519,Ad=35044,ah=35048;var lh="300 es",zn=2e3,$s=2001;function bp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ep(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rd(){let n=Gr("canvas");return n.style.display="block",n}var mu={},Ks=null;function ch(...n){let e="THREE."+n.shift();Ks?Ks("log",e,...n):console.log(e,...n)}function Cd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=Cd(n);let e="THREE."+n.shift();if(Ks)Ks("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ge(...n){n=Cd(n);let e="THREE."+n.shift();if(Ks)Ks("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Dr(...n){let e=n.join(" ");e in mu||(mu[e]=!0,He(...n))}function Id(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Pd={[pa]:pa,[ga]:ya,[_a]:_a,[Zs]:xa,[ma]:ma,[ya]:ga,[va]:va,[xa]:Zs},li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gu=1234567,Nr=Math.PI/180,Qs=180/Math.PI;function Ms(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function tt(n,e,t){return Math.max(e,Math.min(t,n))}function hh(n,e){return(n%e+e)%e}function Tp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function wp(n,e,t){return n!==e?(t-n)/(e-n):0}function Ur(n,e,t){return(1-t)*n+t*e}function Ap(n,e,t,i){return Ur(n,e,1-Math.exp(-t*i))}function Rp(n,e=1){return e-Math.abs(hh(n,e*2)-e)}function Cp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ip(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Pp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Lp(n,e){return n+Math.random()*(e-n)}function Dp(n){return n*(.5-Math.random())}function Np(n){n!==void 0&&(gu=n);let e=gu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Up(n){return n*Nr}function Fp(n){return n*Qs}function Op(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Bp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function uh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zp(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),f=r((e-i)/2),u=o((e-i)/2),d=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*f,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*f,a*c);break;case"ZXZ":n.set(l*f,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*d,a*h,a*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ld(n,e){if(e.constructor===Float32Array)return n;let t=dh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Dd(n,e){if(e.constructor===Float32Array)return n;let t=dh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Ao={DEG2RAD:Nr,RAD2DEG:Qs,generateUUID:Ms,clamp:tt,euclideanModulo:hh,mapLinear:Tp,inverseLerp:wp,lerp:Ur,damp:Ap,pingpong:Rp,smoothstep:Cp,smootherstep:Ip,randInt:Pp,randFloat:Lp,randFloatSpread:Dp,seededRandom:Np,degToRad:Up,radToDeg:Fp,isPowerOfTwo:Op,ceilPowerOfTwo:Bp,floorPowerOfTwo:uh,setQuaternionFromProperEuler:zp,normalize:Dd,denormalize:Ld},xh=class xh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xh.prototype.isVector2=!0;var fe=xh,_n=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],m=r[o+2],M=r[o+3];if(f!==M||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*M;g<0&&(u=-u,d=-d,m=-m,M=-M,g=-g);let p=1-a;if(g<.9995){let x=Math.acos(g),E=Math.sin(x);p=Math.sin(p*x)/E,a=Math.sin(a*x)/E,l=l*p+u*a,c=c*p+d*a,h=h*p+m*a,f=f*p+M*a}else{l=l*p+u*a,c=c*p+d*a,h=h*p+m*a,f=f*p+M*a;let x=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=x,c*=x,h*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*f+l*d-c*u,e[t+1]=l*m+h*u+c*f-a*d,e[t+2]=c*m+h*d+a*u-l*f,e[t+3]=h*m-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},yh=class yh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_u.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sc.copy(this).projectOnVector(e),this.sub(sc)}reflect(e){return this.sub(sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yh.prototype.isVector3=!0;var C=yh,sc=new C,_u=new _n,vh=class vh{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],m=i[8],M=s[0],g=s[3],p=s[6],x=s[1],E=s[4],y=s[7],w=s[2],T=s[5],_=s[8];return r[0]=o*M+a*x+l*w,r[3]=o*g+a*E+l*T,r[6]=o*p+a*y+l*_,r[1]=c*M+h*x+f*w,r[4]=c*g+h*E+f*T,r[7]=c*p+h*y+f*_,r[2]=u*M+d*x+m*w,r[5]=u*g+d*E+m*T,r[8]=u*p+d*y+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,m=t*f+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/m;return e[0]=f*M,e[1]=(s*c-h*i)*M,e[2]=(a*i-s*o)*M,e[3]=u*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=d*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rc.makeScale(e,t)),this}rotate(e){return Dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rc.makeRotation(-e)),this}translate(e,t){return Dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vh.prototype.isMatrix3=!0;var We=vh,rc=new We,xu=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yu=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hp(){let n={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?Hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zr]:{primaries:e,whitePoint:i,transfer:Hr,toXYZ:xu,fromXYZ:yu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:xu,fromXYZ:yu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),n}var lt=Hp();function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ds,ba=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ds===void 0&&(Ds=Gr("canvas")),Ds.width=e.width,Ds.height=e.height;let s=Ds.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ds}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bi(t[i]/255)*255):t[i]=bi(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gp=0,js=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(oc(s[o].image)):r.push(oc(s[o]))}else r=oc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function oc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ba.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var kp=0,ac=new C,xn=class n extends li{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ai,s=ai,r=gn,o=wi,a=si,l=vn,c=n.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Ms(),this.name="",this.source=new js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ac).x}get height(){return this.source.getSize(ac).y}get depth(){return this.source.getSize(ac).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Js:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Js:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Kc;xn.DEFAULT_ANISOTROPY=1;var Mh=class Mh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],M=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(d+1)/2,w=(p+1)/2,T=(h+u)/4,_=(f+M)/4,b=(m+g)/4;return E>y&&E>w?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=_/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=b/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=_/r,s=b/r),this.set(i,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(f-M)/x,this.z=(u-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mh.prototype.isVector4=!0;var Pt=Mh,Ea=class extends li{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new xn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new js(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends Ea{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},kr=class extends xn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ta=class extends xn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ja=class Ja{constructor(e,t,i,s,r,o,a,l,c,h,f,u,d,m,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,u,d,m,M,g)}set(e,t,i,s,r,o,a,l,c,h,f,u,d,m,M,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=M,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ja().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,m=a*h,M=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=u-M*c,t[9]=-a*l,t[2]=M-u*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,m=c*h,M=c*f;t[0]=u+M*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=M+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,m=c*h,M=c*f;t[0]=u-M*a,t[4]=-o*f,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=M-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,d=o*f,m=a*h,M=a*f;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+M,t[1]=l*f,t[5]=M*c+u,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,d=o*c,m=a*l,M=a*c;t[0]=l*h,t[4]=M-u*f,t[8]=m*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+m,t[10]=u-M*f}else if(e.order==="XZY"){let u=o*l,d=o*c,m=a*l,M=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+M,t[5]=o*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=a*h,t[10]=M*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vp,e,Wp)}lookAt(e,t,i){let s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Oi.crossVectors(i,Sn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Oi.crossVectors(i,Sn)),Oi.normalize(),Vo.crossVectors(Sn,Oi),s[0]=Oi.x,s[4]=Vo.x,s[8]=Sn.x,s[1]=Oi.y,s[5]=Vo.y,s[9]=Sn.y,s[2]=Oi.z,s[6]=Vo.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],m=i[2],M=i[6],g=i[10],p=i[14],x=i[3],E=i[7],y=i[11],w=i[15],T=s[0],_=s[4],b=s[8],P=s[12],R=s[1],D=s[5],F=s[9],k=s[13],L=s[2],H=s[6],X=s[10],G=s[14],ne=s[3],W=s[7],j=s[11],te=s[15];return r[0]=o*T+a*R+l*L+c*ne,r[4]=o*_+a*D+l*H+c*W,r[8]=o*b+a*F+l*X+c*j,r[12]=o*P+a*k+l*G+c*te,r[1]=h*T+f*R+u*L+d*ne,r[5]=h*_+f*D+u*H+d*W,r[9]=h*b+f*F+u*X+d*j,r[13]=h*P+f*k+u*G+d*te,r[2]=m*T+M*R+g*L+p*ne,r[6]=m*_+M*D+g*H+p*W,r[10]=m*b+M*F+g*X+p*j,r[14]=m*P+M*k+g*G+p*te,r[3]=x*T+E*R+y*L+w*ne,r[7]=x*_+E*D+y*H+w*W,r[11]=x*b+E*F+y*X+w*j,r[15]=x*P+E*k+y*G+w*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],M=e[7],g=e[11],p=e[15],x=l*d-c*u,E=a*d-c*f,y=a*u-l*f,w=o*d-c*h,T=o*u-l*h,_=o*f-a*h;return t*(M*x-g*E+p*y)-i*(m*x-g*w+p*T)+s*(m*E-M*w+p*_)-r*(m*y-M*T+g*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],M=e[13],g=e[14],p=e[15],x=t*a-i*o,E=t*l-s*o,y=t*c-r*o,w=i*l-s*a,T=i*c-r*a,_=s*c-r*l,b=h*M-f*m,P=h*g-u*m,R=h*p-d*m,D=f*g-u*M,F=f*p-d*M,k=u*p-d*g,L=x*k-E*F+y*D+w*R-T*P+_*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/L;return e[0]=(a*k-l*F+c*D)*H,e[1]=(s*F-i*k-r*D)*H,e[2]=(M*_-g*T+p*w)*H,e[3]=(u*T-f*_-d*w)*H,e[4]=(l*R-o*k-c*P)*H,e[5]=(t*k-s*R+r*P)*H,e[6]=(g*y-m*_-p*E)*H,e[7]=(h*_-u*y+d*E)*H,e[8]=(o*F-a*R+c*b)*H,e[9]=(i*R-t*F-r*b)*H,e[10]=(m*T-M*y+p*x)*H,e[11]=(f*y-h*T-d*x)*H,e[12]=(a*P-o*D-l*b)*H,e[13]=(t*D-i*P+s*b)*H,e[14]=(M*E-m*w-g*x)*H,e[15]=(h*w-f*E+u*x)*H,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,m=r*f,M=o*h,g=o*f,p=a*f,x=l*c,E=l*h,y=l*f,w=i.x,T=i.y,_=i.z;return s[0]=(1-(M+p))*w,s[1]=(d+y)*w,s[2]=(m-E)*w,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(u+p))*T,s[6]=(g+x)*T,s[7]=0,s[8]=(m+E)*_,s[9]=(g-x)*_,s[10]=(1-(u+M))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Ns.set(s[0],s[1],s[2]).length(),a=Ns.set(s[4],s[5],s[6]).length(),l=Ns.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Kn.copy(this);let c=1/o,h=1/a,f=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=f,Kn.elements[9]*=f,Kn.elements[10]*=f,t.setFromRotationMatrix(Kn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=zn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,M;if(l)m=r/(o-r),M=o*r/(o-r);else if(a===zn)m=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===$s)m=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=zn,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),m,M;if(l)m=1/(o-r),M=o/(o-r);else if(a===zn)m=-2/(o-r),M=-(o+r)/(o-r);else if(a===$s)m=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ja.prototype.isMatrix4=!0;var dt=Ja,Ns=new C,Kn=new dt,Vp=new C(0,0,0),Wp=new C(1,1,1),Oi=new C,Vo=new C,Sn=new C,vu=new dt,Mu=new _n,ti=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xp=0,Su=new C,Us=new _n,xi=new dt,Wo=new C,wr=new C,qp=new C,Yp=new _n,bu=new C(1,0,0),Eu=new C(0,1,0),Tu=new C(0,0,1),wu={type:"added"},Zp={type:"removed"},Fs={type:"childadded",child:null},lc={type:"childremoved",child:null},Kt=class n extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new ti,i=new _n,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new We}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(bu,e)}rotateY(e){return this.rotateOnAxis(Eu,e)}rotateZ(e){return this.rotateOnAxis(Tu,e)}translateOnAxis(e,t){return Su.copy(e).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bu,e)}translateY(e){return this.translateOnAxis(Eu,e)}translateZ(e){return this.translateOnAxis(Tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wo.copy(e):Wo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(wr,Wo,this.up):xi.lookAt(Wo,wr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(xi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wu),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zp),lc.child=e,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wu),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Kt.DEFAULT_UP=new C(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jp={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let M of e.hand.values()){let g=t.getJointPose(M,i),p=this._getHandJoint(c,M);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new En;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function cc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ve=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=hh(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=cc(o,r,e+1/3),this.g=cc(o,r,e),this.b=cc(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=pn){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){let i=Nd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return lt.workingToColorSpace(an.copy(this),e),Math.round(tt(an.r*255,0,255))*65536+Math.round(tt(an.g*255,0,255))*256+Math.round(tt(an.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(an.copy(this),t);let i=an.r,s=an.g,r=an.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=pn){lt.workingToColorSpace(an.copy(this),e);let t=an.r,i=an.g,s=an.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(Xo);let i=Ur(Bi.h,Xo.h,t),s=Ur(Bi.s,Xo.s,t),r=Ur(Bi.l,Xo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Ve;Ve.NAMES=Nd;var Vr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},nr=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qn=new C,yi=new C,hc=new C,vi=new C,Os=new C,Bs=new C,Au=new C,uc=new C,dc=new C,fc=new C,pc=new Pt,mc=new Pt,gc=new Pt,ki=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Qn.subVectors(e,t),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Qn.subVectors(s,t),yi.subVectors(i,t),hc.subVectors(e,t);let o=Qn.dot(Qn),a=Qn.dot(yi),l=Qn.dot(hc),c=yi.dot(yi),h=yi.dot(hc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,i),gc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pc,r.x),o.addScaledVector(mc,r.y),o.addScaledVector(gc,r.z),o}static isFrontFacing(e,t,i,s){return Qn.subVectors(i,t),yi.subVectors(e,t),Qn.cross(yi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Qn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Os.subVectors(s,i),Bs.subVectors(r,i),uc.subVectors(e,i);let l=Os.dot(uc),c=Bs.dot(uc);if(l<=0&&c<=0)return t.copy(i);dc.subVectors(e,s);let h=Os.dot(dc),f=Bs.dot(dc);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(Os,o);fc.subVectors(e,r);let d=Os.dot(fc),m=Bs.dot(fc);if(m>=0&&d<=m)return t.copy(r);let M=d*c-l*m;if(M<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Bs,a);let g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Au.subVectors(r,s),a=(f-h)/(f-h+(d-m)),t.copy(s).addScaledVector(Au,a);let p=1/(g+M+u);return o=M*p,a=u*p,t.copy(i).addScaledVector(Os,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ci=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qo.copy(i.boundingBox)),qo.applyMatrix4(e.matrixWorld),this.union(qo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),Yo.subVectors(this.max,Ar),zs.subVectors(e.a,Ar),Hs.subVectors(e.b,Ar),Gs.subVectors(e.c,Ar),zi.subVectors(Hs,zs),Hi.subVectors(Gs,Hs),cs.subVectors(zs,Gs);let t=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-cs.z,cs.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,cs.z,0,-cs.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-cs.y,cs.x,0];return!_c(t,zs,Hs,Gs,Yo)||(t=[1,0,0,0,1,0,0,0,1],!_c(t,zs,Hs,Gs,Yo))?!1:(Zo.crossVectors(zi,Hi),t=[Zo.x,Zo.y,Zo.z],_c(t,zs,Hs,Gs,Yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mi=[new C,new C,new C,new C,new C,new C,new C,new C],jn=new C,qo=new ci,zs=new C,Hs=new C,Gs=new C,zi=new C,Hi=new C,cs=new C,Ar=new C,Yo=new C,Zo=new C,hs=new C;function _c(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){hs.fromArray(n,r);let a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=e.dot(hs),c=t.dot(hs),h=i.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var zt=new C,Jo=new fe,$p=0,ln=class extends li{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$p++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ad,this.updateRanges=[],this.gpuType=Gn,this.version=0,this._normalizationScale=e!==void 0?dh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ld(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Dd(e,this.array)}};var Wr=class extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xr=class extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var nt=class extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}},Kp=new ci,Rr=new C,xc=new C,Vi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Kp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);let t=Rr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Rr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(xc)),this.expandByPoint(Rr.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Qp=0,Bn=new dt,yc=new Kt,ks=new C,bn=new ci,Cr=new ci,Jt=new C,kt=class n extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bp(e)?Xr:Wr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,i){return Bn.makeTranslation(e,t,i),this.applyMatrix4(Bn),this}scale(e,t,i){return Bn.makeScale(e,t,i),this.applyMatrix4(Bn),this}lookAt(e){return yc.lookAt(e),yc.updateMatrix(),this.applyMatrix4(yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(bn.min,Cr.min),bn.expandByPoint(Jt),Jt.addVectors(bn.max,Cr.max),bn.expandByPoint(Jt)):(bn.expandByPoint(Cr.min),bn.expandByPoint(Cr.max))}bn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(e,c),Jt.add(ks)),s=Math.max(s,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ln(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)a[P]=new C,l[P]=new C;let h=new C,f=new C,u=new C,d=new fe,m=new fe,M=new fe,g=new C,p=new C;function x(P,R,D){c[P]=c[R]=c[D]=1,h.fromBufferAttribute(i,P),f.fromBufferAttribute(i,R),u.fromBufferAttribute(i,D),d.fromBufferAttribute(r,P),m.fromBufferAttribute(r,R),M.fromBufferAttribute(r,D),f.sub(h),u.sub(h),m.sub(d),M.sub(d);let F=1/(m.x*M.y-M.x*m.y);isFinite(F)&&(g.copy(f).multiplyScalar(M.y).addScaledVector(u,-m.y).multiplyScalar(F),p.copy(u).multiplyScalar(m.x).addScaledVector(f,-M.x).multiplyScalar(F),a[P].add(g),a[R].add(g),a[D].add(g),l[P].add(p),l[R].add(p),l[D].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,R=E.length;P<R;++P){let D=E[P],F=D.start,k=D.count;for(let L=F,H=F+k;L<H;L+=3)x(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let y=new C,w=new C,T=new C,_=new C;function b(P){T.fromBufferAttribute(s,P),_.copy(T);let R=a[P];y.copy(R),y.sub(T.multiplyScalar(T.dot(R))).normalize(),w.crossVectors(_,R);let F=w.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,F)}for(let P=0,R=i.count;P<R;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,f=new C;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),M=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,g),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?d=l[M]*a.data.stride+a.offset:d=l[M]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new ln(u,h,f)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var vc=new C,jp=new C,em=new We,ei=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=vc.subVectors(i,t).cross(jp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(vc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||em.getNormalMatrix(e),s=this.coplanarPoint(vc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},tm=0,Wi=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=cr,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Vc,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fa,this.stencilZFail=fa,this.stencilZPass=fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ei().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Si=new C,Mc=new C,$o=new C,Ko=new C,qr=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Mc.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),Ko.copy(this.origin).sub(Mc);let r=e.distanceTo(t)*.5,o=-this.direction.dot($o),a=Ko.dot(this.direction),l=-Ko.dot($o),c=Ko.lengthSq(),h=Math.abs(1-o*o),f,u,d,m;if(h>0)if(f=o*l-a,u=o*a-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let M=1/h;f*=M,u*=M,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Mc).addScaledVector($o,u),d}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=e.x-o.x,u=e.y-o.y,d=e.z-o.z,m=t.x-o.x,M=t.y-o.y,g=t.z-o.z,p=i.x-o.x,x=i.y-o.y,E=i.z-o.z,y=Math.abs(l),w=Math.abs(c),T=Math.abs(h),_,b,P,R,D,F,k,L,H,X,G,ne;if(y>=w&&y>=T?(P=l,F=f,H=m,ne=p,l>=0?(_=c,b=h,R=u,D=d,k=M,L=g,X=x,G=E):(_=h,b=c,R=d,D=u,k=g,L=M,X=E,G=x)):w>=T?(P=c,F=u,H=M,ne=x,c>=0?(_=h,b=l,R=d,D=f,k=g,L=m,X=E,G=p):(_=l,b=h,R=f,D=d,k=m,L=g,X=p,G=E)):(P=h,F=d,H=g,ne=E,h>=0?(_=l,b=c,R=f,D=u,k=m,L=M,X=p,G=x):(_=c,b=l,R=u,D=f,k=M,L=m,X=x,G=p)),P===0)return null;let W=_/P,j=b/P,te=1/P,Te=R-W*F,Be=D-j*F,Y=k-W*H,xe=L-j*H,we=X-W*ne,Ue=G-j*ne,ye=we*xe-Ue*Y,Fe=Te*Ue-Be*we,Ct=Y*Be-xe*Te;if(s){if(ye<0||Fe<0||Ct<0)return null}else if((ye<0||Fe<0||Ct<0)&&(ye>0||Fe>0||Ct>0))return null;let ze=ye+Fe+Ct;if(ze===0)return null;let Qe=te*(ye*F+Fe*H+Ct*ne);return(ze>0?Qe<0:Qe>0)?null:this.at(Qe/ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hi=class extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ru=new dt,us=new qr,Qo=new Vi,Cu=new C,jo=new C,ea=new C,ta=new C,Sc=new C,na=new C,Iu=new C,ia=new C,Mt=class extends Kt{constructor(e=new kt,t=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Sc.fromBufferAttribute(f,e),o?na.addScaledVector(Sc,h):na.addScaledVector(Sc.sub(t),h))}t.add(na)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(Qo.containsPoint(us.origin)===!1&&(us.intersectSphere(Qo,Cu)===null||us.origin.distanceToSquared(Cu)>(e.far-e.near)**2))&&(Ru.copy(r).invert(),us.copy(e.ray).applyMatrix4(Ru),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,M=u.length;m<M;m++){let g=u[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),E=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,w=E;y<w;y+=3){let T=a.getX(y),_=a.getX(y+1),b=a.getX(y+2);s=sa(this,p,e,i,c,h,f,T,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let g=m,p=M;g<p;g+=3){let x=a.getX(g),E=a.getX(g+1),y=a.getX(g+2);s=sa(this,o,e,i,c,h,f,x,E,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,M=u.length;m<M;m++){let g=u[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),E=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,w=E;y<w;y+=3){let T=y,_=y+1,b=y+2;s=sa(this,p,e,i,c,h,f,T,_,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let g=m,p=M;g<p;g+=3){let x=g,E=g+1,y=g+2;s=sa(this,o,e,i,c,h,f,x,E,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function nm(n,e,t,i,s,r,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ji,a),l===null)return null;ia.copy(a),ia.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ia);return c<t.near||c>t.far?null:{distance:c,point:ia.clone(),object:n}}function sa(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,jo),n.getVertexPosition(l,ea),n.getVertexPosition(c,ta);let h=nm(n,e,t,i,jo,ea,ta,Iu);if(h){let f=new C;ki.getBarycoord(Iu,jo,ea,ta,f),s&&(h.uv=ki.getInterpolatedAttribute(s,a,l,c,f,new fe)),r&&(h.uv1=ki.getInterpolatedAttribute(r,a,l,c,f,new fe)),o&&(h.normal=ki.getInterpolatedAttribute(o,a,l,c,f,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};ki.getNormal(jo,ea,ta,u.normal),h.face=u,h.barycoord=f}return h}var Yr=class extends xn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=$t,h=$t,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ir=class extends ln{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vs=new dt,Pu=new dt,ra=[],Lu=new ci,im=new dt,Ir=new Mt,Pr=new Vi,cn=class extends Mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ir(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,im)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),Lu.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(Lu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),Pr.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(i),e.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),Pu.multiplyMatrices(i,Vs),Ir.matrixWorld=Pu,Ir.raycast(e,ra);for(let o=0,a=ra.length;o<a;o++){let l=ra[o];l.instanceId=r,l.object=this,t.push(l)}ra.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ir(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Yr(new Float32Array(s*this.count),s,this.count,nl,Gn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ds=new Vi,sm=new fe(.5,.5),oa=new C,Xi=class{constructor(e=new ei,t=new ei,i=new ei,s=new ei,r=new ei,o=new ei){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],M=r[9],g=r[10],p=r[11],x=r[12],E=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,d-h,p-m,w-x).normalize(),s[1].setComponents(c+o,d+h,p+m,w+x).normalize(),s[2].setComponents(c+a,d+f,p+M,w+E).normalize(),s[3].setComponents(c-a,d-f,p-M,w-E).normalize(),i)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,d-u,p-g,w-y).normalize();else if(s[4].setComponents(c-l,d-u,p-g,w-y).normalize(),t===zn)s[5].setComponents(c+l,d+u,p+g,w+y).normalize();else if(t===$s)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);let t=sm.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(oa.x=s.normal.x>0?e.max.x:e.min.x,oa.y=s.normal.y>0?e.max.y:e.min.y,oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Du=new dt,wa=class n{constructor(){this.coordinateSystem=zn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Du.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Xi),i[s].setFromProjectionMatrix(Du,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Xi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Zr=class extends xn{constructor(e=[],t=ys,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jr=class extends xn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ti=class extends xn{constructor(e,t,i=ni,s,r,o,a=$t,l=$t,c,h=Ei,f=1){if(h!==Ei&&h!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},$r=class extends Ti{constructor(e,t=ni,i=ys,s,r,o=$t,a=$t,l,c=Ei){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Kr=class extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ht=class n extends kt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(f,2));function m(M,g,p,x,E,y,w,T,_,b,P){let R=y/_,D=w/b,F=y/2,k=w/2,L=T/2,H=_+1,X=b+1,G=0,ne=0,W=new C;for(let j=0;j<X;j++){let te=j*D-k;for(let Te=0;Te<H;Te++){let Be=Te*R-F;W[M]=Be*x,W[g]=te*E,W[p]=L,c.push(W.x,W.y,W.z),W[M]=0,W[g]=0,W[p]=T>0?1:-1,h.push(W.x,W.y,W.z),f.push(Te/_),f.push(1-j/b),G+=1}}for(let j=0;j<b;j++)for(let te=0;te<_;te++){let Te=u+te+H*j,Be=u+te+H*(j+1),Y=u+(te+1)+H*(j+1),xe=u+(te+1)+H*j;l.push(Te,Be,xe),l.push(Be,Y,xe),ne+=6}a.addGroup(d,ne,P),d+=ne,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},hn=class n extends kt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,d=2*f+u,m=i*2+r,M=s+1,g=new C,p=new C;for(let x=0;x<=m;x++){let E=0,y=0,w=0,T=0;if(x<=i){let P=x/i,R=P*Math.PI/2;y=-h-e*Math.cos(R),w=e*Math.sin(R),T=-e*Math.cos(R),E=P*f}else if(x<=i+r){let P=(x-i)/r;y=-h+P*t,w=e,T=0,E=f+P*u}else{let P=(x-i-r)/i,R=P*Math.PI/2;y=h+e*Math.sin(R),w=e*Math.cos(R),T=e*Math.sin(R),E=f+u+P*f}let _=Math.max(0,Math.min(1,E/d)),b=0;x===0?b=.5/s:x===m&&(b=-.5/s);for(let P=0;P<=s;P++){let R=P/s,D=R*Math.PI*2,F=Math.sin(D),k=Math.cos(D);p.x=-w*k,p.y=y,p.z=w*F,a.push(p.x,p.y,p.z),g.set(-w*k,T,w*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+b,_)}if(x>0){let P=(x-1)*M;for(let R=0;R<s;R++){let D=P+R,F=P+R+1,k=x*M+R,L=x*M+R+1;o.push(D,F,k),o.push(F,L,k)}}}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Qr=class n extends kt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,h=new fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=i+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Lt=class n extends kt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,M=[],g=i/2,p=0;x(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new nt(f,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(d,2));function x(){let y=new C,w=new C,T=0,_=(t-e)/i;for(let b=0;b<=r;b++){let P=[],R=b/r,D=R*(t-e)+e;for(let F=0;F<=s;F++){let k=F/s,L=k*l+a,H=Math.sin(L),X=Math.cos(L);w.x=D*H,w.y=-R*i+g,w.z=D*X,f.push(w.x,w.y,w.z),y.set(H,_,X).normalize(),u.push(y.x,y.y,y.z),d.push(k,1-R),P.push(m++)}M.push(P)}for(let b=0;b<s;b++)for(let P=0;P<r;P++){let R=M[P][b],D=M[P+1][b],F=M[P+1][b+1],k=M[P][b+1];(e>0||P!==0)&&(h.push(R,D,k),T+=3),(t>0||P!==r-1)&&(h.push(D,F,k),T+=3)}c.addGroup(p,T,0),p+=T}function E(y){let w=m,T=new fe,_=new C,b=0,P=y===!0?e:t,R=y===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,g*R,0),u.push(0,R,0),d.push(.5,.5),m++;let D=m;for(let F=0;F<=s;F++){let L=F/s*l+a,H=Math.cos(L),X=Math.sin(L);_.x=P*X,_.y=g*R,_.z=P*H,f.push(_.x,_.y,_.z),u.push(0,R,0),T.x=H*.5+.5,T.y=X*.5*R+.5,d.push(T.x,T.y),m++}for(let F=0;F<s;F++){let k=w+F,L=D+F;y===!0?h.push(L,L+1,k):h.push(L+1,L,k),b+=3}c.addGroup(p,b,y===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sr=class n extends Lt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Aa=class n extends kt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let E=new C,y=new C,w=new C;for(let T=0;T<t.length;T+=3)d(t[T+0],E),d(t[T+1],y),d(t[T+2],w),l(E,y,w,x)}function l(x,E,y,w){let T=w+1,_=[];for(let b=0;b<=T;b++){_[b]=[];let P=x.clone().lerp(y,b/T),R=E.clone().lerp(y,b/T),D=T-b;for(let F=0;F<=D;F++)F===0&&b===T?_[b][F]=P:_[b][F]=P.clone().lerp(R,F/D)}for(let b=0;b<T;b++)for(let P=0;P<2*(T-b)-1;P++){let R=Math.floor(P/2);P%2===0?(u(_[b][R+1]),u(_[b+1][R]),u(_[b][R])):(u(_[b][R+1]),u(_[b+1][R+1]),u(_[b+1][R]))}}function c(x){let E=new C;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(x),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function h(){let x=new C;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];let y=g(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;o.push(y,1-w)}m(),f()}function f(){for(let x=0;x<o.length;x+=6){let E=o[x+0],y=o[x+2],w=o[x+4],T=Math.max(E,y,w),_=Math.min(E,y,w);T>.9&&_<.1&&(E<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),w<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function d(x,E){let y=x*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function m(){let x=new C,E=new C,y=new C,w=new C,T=new fe,_=new fe,b=new fe;for(let P=0,R=0;P<r.length;P+=9,R+=6){x.set(r[P+0],r[P+1],r[P+2]),E.set(r[P+3],r[P+4],r[P+5]),y.set(r[P+6],r[P+7],r[P+8]),T.set(o[R+0],o[R+1]),_.set(o[R+2],o[R+3]),b.set(o[R+4],o[R+5]),w.copy(x).add(E).add(y).divideScalar(3);let D=g(w);M(T,R+0,x,D),M(_,R+2,E,D),M(b,R+4,y,D)}}function M(x,E,y,w){w<0&&x.x===1&&(o[E]=x.x-1),y.x===0&&y.z===0&&(o[E]=w/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new fe:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,s=[],r=[],o=[],a=new C,l=new dt;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(tt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(tt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},rr=class extends wn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new fe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ra=class extends rr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function fh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Nu=new C,Uu=new C,bc=new fh,Ec=new fh,Tc=new fh,Ca=class extends wn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Uu.subVectors(s[0],s[1]).add(s[0]),c=Uu);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Nu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Nu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);M<1e-4&&(M=1),m<1e-4&&(m=M),g<1e-4&&(g=M),bc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,M,g),Ec.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,M,g),Tc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,M,g)}else this.curveType==="catmullrom"&&(bc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Ec.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Tc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(bc.calc(l),Ec.calc(l),Tc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Fu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function rm(n,e){let t=1-n;return t*t*e}function om(n,e){return 2*(1-n)*n*e}function am(n,e){return n*n*e}function Fr(n,e,t,i){return rm(n,e)+om(n,t)+am(n,i)}function lm(n,e){let t=1-n;return t*t*t*e}function cm(n,e){let t=1-n;return 3*t*t*n*e}function hm(n,e){return 3*(1-n)*n*n*e}function um(n,e){return n*n*n*e}function Or(n,e,t,i,s){return lm(n,e)+cm(n,t)+hm(n,i)+um(n,s)}var jr=class extends wn{constructor(e=new fe,t=new fe,i=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Or(e,s.x,r.x,o.x,a.x),Or(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ia=class extends wn{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Or(e,s.x,r.x,o.x,a.x),Or(e,s.y,r.y,o.y,a.y),Or(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},eo=class extends wn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends wn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=class extends wn{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Fr(e,s.x,r.x,o.x),Fr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},La=class extends wn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Fr(e,s.x,r.x,o.x),Fr(e,s.y,r.y,o.y),Fr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},no=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Fu(a,l.x,c.x,h.x,f.x),Fu(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},Pc=Object.freeze({__proto__:null,ArcCurve:Ra,CatmullRomCurve3:Ca,CubicBezierCurve:jr,CubicBezierCurve3:Ia,EllipseCurve:rr,LineCurve:eo,LineCurve3:Pa,QuadraticBezierCurve:to,QuadraticBezierCurve3:La,SplineCurve:no}),Da=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Pc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},io=class extends Da{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new eo(this.currentPoint.clone(),new fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new to(this.currentPoint.clone(),new fe(e,t),new fe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new jr(this.currentPoint.clone(),new fe(e,t),new fe(i,s),new fe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new no(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new rr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ps=class extends io{constructor(e){super(e),this.uuid=Ms(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new io().fromJSON(s))}return this}};function dm(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Ud(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=_m(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,f=l;for(let u=t;u<s;u+=t){let d=n[u],m=n[u+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return so(r,o,t,a,l,c,0),o}function Ud(n,e,t,i,s){let r;if(s===Rm(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Ou(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Ou(o/i|0,n[o],n[o+1],r);return r&&or(r,r.next)&&(oo(r),r=r.next),r}function ms(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(or(t,t.next)||Nt(t.prev,t,t.next)===0)){if(oo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function so(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Sm(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?pm(n,i,s,r):fm(n)){e.push(l.i,n.i,c.i),oo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=mm(ms(n),e),so(n,e,t,i,s,r,2)):o===2&&gm(n,e,t,i,s,r):so(ms(n),e,t,i,s,r,1);break}}}function fm(n){let e=n.prev,t=n,i=n.next;if(Nt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),f=Math.min(a,l,c),u=Math.max(s,r,o),d=Math.max(a,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Lr(s,a,r,l,o,c,m.x,m.y)&&Nt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function pm(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Nt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,l,c),m=Math.min(h,f,u),M=Math.max(a,l,c),g=Math.max(h,f,u),p=Lc(d,m,e,t,i),x=Lc(M,g,e,t,i),E=n.prevZ,y=n.nextZ;for(;E&&E.z>=p&&y&&y.z<=x;){if(E.x>=d&&E.x<=M&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&Lr(a,h,l,f,c,u,E.x,E.y)&&Nt(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=d&&y.x<=M&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Lr(a,h,l,f,c,u,y.x,y.y)&&Nt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=M&&E.y>=m&&E.y<=g&&E!==s&&E!==o&&Lr(a,h,l,f,c,u,E.x,E.y)&&Nt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=M&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Lr(a,h,l,f,c,u,y.x,y.y)&&Nt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function mm(n,e){let t=n;do{let i=t.prev,s=t.next.next;!or(i,s)&&Od(i,t,t.next,s)&&ro(i,s)&&ro(s,i)&&(e.push(i.i,t.i,s.i),oo(t),oo(t.next),t=n=s),t=t.next}while(t!==n);return ms(t)}function gm(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tm(o,a)){let l=Bd(o,a);o=ms(o,o.next),l=ms(l,l.next),so(o,e,t,i,s,r,0),so(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function _m(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Ud(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Em(c))}s.sort(xm);for(let r=0;r<s.length;r++)t=ym(s[r],t);return t}function xm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function ym(n,e){let t=vm(n,e);if(!t)return e;let i=Bd(t,n);return ms(i,i.next),ms(t,t.next)}function vm(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(or(n,t))return t;do{if(or(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Fd(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);ro(t,n)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&Mm(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function Mm(n,e){return Nt(n.prev,n,e.prev)<0&&Nt(e.next,n,n.next)<0}function Sm(n,e,t,i){let s=n;do s.z===0&&(s.z=Lc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,bm(s)}function bm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Lc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Em(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Fd(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Lr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Fd(n,e,t,i,s,r,o,a)}function Tm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!wm(n,e)&&(ro(n,e)&&ro(e,n)&&Am(n,e)&&(Nt(n.prev,n,e.prev)||Nt(n,e.prev,e))||or(n,e)&&Nt(n.prev,n,n.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function or(n,e){return n.x===e.x&&n.y===e.y}function Od(n,e,t,i){let s=la(Nt(n,e,t)),r=la(Nt(n,e,i)),o=la(Nt(t,i,n)),a=la(Nt(t,i,e));return!!(s!==r&&o!==a||s===0&&aa(n,t,e)||r===0&&aa(n,i,e)||o===0&&aa(t,n,i)||a===0&&aa(t,e,i))}function aa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function la(n){return n>0?1:n<0?-1:0}function wm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Od(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ro(n,e){return Nt(n.prev,n,n.next)<0?Nt(n,e,n.next)>=0&&Nt(n,n.prev,e)>=0:Nt(n,e,n.prev)<0||Nt(n,n.next,e)<0}function Am(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Bd(n,e){let t=Dc(n.i,n.x,n.y),i=Dc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ou(n,e,t,i){let s=Dc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function oo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Dc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rm(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Nc=class{static triangulate(e,t,i=2){return dm(e,t,i)}},fs=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Bu(e),zu(i,e);let o=e.length;t.forEach(Bu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,zu(i,t[l]);let a=Nc.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Bu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function zu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ao=class n extends kt{constructor(e=new ps([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Cm,E,y=!1,w,T,_,b;if(p){E=p.getSpacedPoints(h),y=!0,u=!1;let ee=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,ee),T=new C,_=new C,b=new C}u||(g=0,d=0,m=0,M=0);let P=a.extractPoints(c),R=P.shape,D=P.holes;if(!fs.isClockWise(R)){R=R.reverse();for(let ee=0,ce=D.length;ee<ce;ee++){let oe=D[ee];fs.isClockWise(oe)&&(D[ee]=oe.reverse())}}function k(ee){let oe=10000000000000001e-36,Ee=ee[0];for(let _e=1;_e<=ee.length;_e++){let Ze=_e%ee.length,Pe=ee[Ze],st=Pe.x-Ee.x,rt=Pe.y-Ee.y,gt=st*st+rt*rt,U=Math.max(Math.abs(Pe.x),Math.abs(Pe.y),Math.abs(Ee.x),Math.abs(Ee.y)),Ot=oe*U*U;if(gt<=Ot){ee.splice(Ze,1),_e--;continue}Ee=Pe}}k(R),D.forEach(k);let L=D.length,H=R;for(let ee=0;ee<L;ee++){let ce=D[ee];R=R.concat(ce)}function X(ee,ce,oe){return ce||Ge("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(ce,oe)}let G=R.length;function ne(ee,ce,oe){let Ee,_e,Ze,Pe=ee.x-ce.x,st=ee.y-ce.y,rt=oe.x-ee.x,gt=oe.y-ee.y,U=Pe*Pe+st*st,Ot=Pe*gt-st*rt;if(Math.abs(Ot)>Number.EPSILON){let et=Math.sqrt(U),bt=Math.sqrt(rt*rt+gt*gt),pe=ce.x-st/et,Ut=ce.y+Pe/et,Oe=oe.x-gt/bt,ke=oe.y+rt/bt,A=((Oe-pe)*gt-(ke-Ut)*rt)/(Pe*gt-st*rt);Ee=pe+Pe*A-ee.x,_e=Ut+st*A-ee.y;let v=Ee*Ee+_e*_e;if(v<=2)return new fe(Ee,_e);Ze=Math.sqrt(v/2)}else{let et=!1;Pe>Number.EPSILON?rt>Number.EPSILON&&(et=!0):Pe<-Number.EPSILON?rt<-Number.EPSILON&&(et=!0):Math.sign(st)===Math.sign(gt)&&(et=!0),et?(Ee=-st,_e=Pe,Ze=Math.sqrt(U)):(Ee=Pe,_e=st,Ze=Math.sqrt(U/2))}return new fe(Ee/Ze,_e/Ze)}let W=[];for(let ee=0,ce=H.length,oe=ce-1,Ee=ee+1;ee<ce;ee++,oe++,Ee++)oe===ce&&(oe=0),Ee===ce&&(Ee=0),W[ee]=ne(H[ee],H[oe],H[Ee]);let j=[],te,Te=W.concat();for(let ee=0,ce=L;ee<ce;ee++){let oe=D[ee];te=[];for(let Ee=0,_e=oe.length,Ze=_e-1,Pe=Ee+1;Ee<_e;Ee++,Ze++,Pe++)Ze===_e&&(Ze=0),Pe===_e&&(Pe=0),te[Ee]=ne(oe[Ee],oe[Ze],oe[Pe]);j.push(te),Te=Te.concat(te)}let Be;if(g===0)Be=fs.triangulateShape(H,D);else{let ee=[],ce=[];for(let oe=0;oe<g;oe++){let Ee=oe/g,_e=d*Math.cos(Ee*Math.PI/2),Ze=m*Math.sin(Ee*Math.PI/2)+M;for(let Pe=0,st=H.length;Pe<st;Pe++){let rt=X(H[Pe],W[Pe],Ze);Fe(rt.x,rt.y,-_e),Ee===0&&ee.push(rt)}for(let Pe=0,st=L;Pe<st;Pe++){let rt=D[Pe];te=j[Pe];let gt=[];for(let U=0,Ot=rt.length;U<Ot;U++){let et=X(rt[U],te[U],Ze);Fe(et.x,et.y,-_e),Ee===0&&gt.push(et)}Ee===0&&ce.push(gt)}}Be=fs.triangulateShape(ee,ce)}let Y=Be.length,xe=m+M;for(let ee=0;ee<G;ee++){let ce=u?X(R[ee],Te[ee],xe):R[ee];y?(_.copy(w.normals[0]).multiplyScalar(ce.x),T.copy(w.binormals[0]).multiplyScalar(ce.y),b.copy(E[0]).add(_).add(T),Fe(b.x,b.y,b.z)):Fe(ce.x,ce.y,0)}for(let ee=1;ee<=h;ee++)for(let ce=0;ce<G;ce++){let oe=u?X(R[ce],Te[ce],xe):R[ce];y?(_.copy(w.normals[ee]).multiplyScalar(oe.x),T.copy(w.binormals[ee]).multiplyScalar(oe.y),b.copy(E[ee]).add(_).add(T),Fe(b.x,b.y,b.z)):Fe(oe.x,oe.y,f/h*ee)}for(let ee=g-1;ee>=0;ee--){let ce=ee/g,oe=d*Math.cos(ce*Math.PI/2),Ee=m*Math.sin(ce*Math.PI/2)+M;for(let _e=0,Ze=H.length;_e<Ze;_e++){let Pe=X(H[_e],W[_e],Ee);Fe(Pe.x,Pe.y,f+oe)}for(let _e=0,Ze=D.length;_e<Ze;_e++){let Pe=D[_e];te=j[_e];for(let st=0,rt=Pe.length;st<rt;st++){let gt=X(Pe[st],te[st],Ee);y?Fe(gt.x,gt.y+E[h-1].y,E[h-1].x+oe):Fe(gt.x,gt.y,f+oe)}}}we(),Ue();function we(){let ee=s.length/3;if(u){let ce=0,oe=G*ce;for(let Ee=0;Ee<Y;Ee++){let _e=Be[Ee];Ct(_e[2]+oe,_e[1]+oe,_e[0]+oe)}ce=h+g*2,oe=G*ce;for(let Ee=0;Ee<Y;Ee++){let _e=Be[Ee];Ct(_e[0]+oe,_e[1]+oe,_e[2]+oe)}}else{for(let ce=0;ce<Y;ce++){let oe=Be[ce];Ct(oe[2],oe[1],oe[0])}for(let ce=0;ce<Y;ce++){let oe=Be[ce];Ct(oe[0]+G*h,oe[1]+G*h,oe[2]+G*h)}}i.addGroup(ee,s.length/3-ee,0)}function Ue(){let ee=s.length/3,ce=0;ye(H,ce),ce+=H.length;for(let oe=0,Ee=D.length;oe<Ee;oe++){let _e=D[oe];ye(_e,ce),ce+=_e.length}i.addGroup(ee,s.length/3-ee,1)}function ye(ee,ce){let oe=ee.length;for(;--oe>=0;){let Ee=oe,_e=oe-1;_e<0&&(_e=ee.length-1);for(let Ze=0,Pe=h+g*2;Ze<Pe;Ze++){let st=G*Ze,rt=G*(Ze+1),gt=ce+Ee+st,U=ce+_e+st,Ot=ce+_e+rt,et=ce+Ee+rt;ze(gt,U,Ot,et)}}}function Fe(ee,ce,oe){l.push(ee),l.push(ce),l.push(oe)}function Ct(ee,ce,oe){Qe(ee),Qe(ce),Qe(oe);let Ee=s.length/3,_e=x.generateTopUV(i,s,Ee-3,Ee-2,Ee-1);it(_e[0]),it(_e[1]),it(_e[2])}function ze(ee,ce,oe,Ee){Qe(ee),Qe(ce),Qe(Ee),Qe(ce),Qe(oe),Qe(Ee);let _e=s.length/3,Ze=x.generateSideWallUV(i,s,_e-6,_e-3,_e-2,_e-1);it(Ze[0]),it(Ze[1]),it(Ze[3]),it(Ze[1]),it(Ze[2]),it(Ze[3])}function Qe(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function it(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Im(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Pc[s.type]().fromJSON(s)),new n(i,e.options)}},Cm={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new fe(r,o),new fe(a,l),new fe(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],u=e[s*3],d=e[s*3+1],m=e[s*3+2],M=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new fe(o,1-l),new fe(c,1-f),new fe(u,1-m),new fe(M,1-p)]:[new fe(a,1-l),new fe(h,1-f),new fe(d,1-m),new fe(g,1-p)]}};function Im(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var lo=class n extends Aa{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var un=class n extends kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,d=[],m=[],M=[],g=[];for(let p=0;p<h;p++){let x=p*u-o;for(let E=0;E<c;E++){let y=E*f-r;m.push(y,-x,0),M.push(0,0,1),g.push(E/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let E=x+c*p,y=x+c*(p+1),w=x+1+c*(p+1),T=x+1+c*p;d.push(E,y,T),d.push(y,w,T)}this.setIndex(d),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(M,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},co=class n extends kt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],f=e,u=(t-e)/s,d=new C,m=new fe;for(let M=0;M<=s;M++){for(let g=0;g<=i;g++){let p=r+g/i*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}f+=u}for(let M=0;M<s;M++){let g=M*(i+1);for(let p=0;p<i;p++){let x=p+g,E=x,y=x+i+1,w=x+i+2,T=x+1;a.push(E,y,T),a.push(y,w,T)}}this.setIndex(a),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var An=class n extends kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new C,u=new C,d=[],m=[],M=[],g=[];for(let p=0;p<=i;p++){let x=[],E=p/i,y=o+E*a,w=e*Math.cos(y),T=Math.sqrt(e*e-w*w),_=0;p===0&&o===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let b=0;b<=t;b++){let P=b/t,R=s+P*r;f.x=-T*Math.cos(R),f.y=w,f.z=T*Math.sin(R),m.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),g.push(P+_,1-E),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){let E=h[p][x+1],y=h[p][x],w=h[p+1][x],T=h[p+1][x+1];(p!==0||o>0)&&d.push(E,y,T),(p!==i-1||l<Math.PI)&&d.push(y,w,T)}this.setIndex(d),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(M,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ss(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Hu(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Hu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function dn(n){let e={};for(let t=0;t<n.length;t++){let i=Ss(n[t]);for(let s in i)e[s]=i[s]}return e}function Hu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Pm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ph(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Ol={clone:Ss,merge:dn},Lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lm,this.fragmentShader=Dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=Pm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[i].value=new fe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new We().fromArray(s.value);break;case"m4":this.uniforms[i].value=new dt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Na=class extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},vt=class extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fl,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ua=class extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fa=class extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ws(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ca(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var qi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oa=class extends qi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cc:r=e,a=2*t-i;break;case Ic:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cc:o=e,l=2*i-t;break;case Ic:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-t)/(s-t),M=m*m,g=M*m,p=-u*g+2*u*M-u*m,x=(1+u)*g+(-1.5-2*u)*M+(-.5+u)*m+1,E=(-1-d)*g+(1.5+d)*M+.5*m,y=d*g-d*M;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+x*o[c+w]+E*o[l+w]+y*o[f+w];return r}},Ba=class extends qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},za=class extends qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ha=class extends qi{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(i-t)/(s-t),M=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*M+o[l+g]*m;return r}let u=a*2,d=e-1;for(let m=0;m!==a;++m){let M=o[c+m],g=o[l+m],p=d*u+m*2,x=f[p],E=f[p+1],y=e*u+m*2,w=h[y],T=h[y+1],_=Um(i,t,x,w,s);r[m]=zd(_,M,E,T,g)}return r}};function zd(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Nm(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Um(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=zd(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Nm(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Rn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ws(t,this.TimeBufferType),this.values=Ws(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ws(e.times,Array),values:Ws(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),ca(e.settings)&&(i.settings={inTangents:Ws(e.settings.inTangents,Array),outTangents:Ws(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ha(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Br:t=this.InterpolantFactoryMethodDiscrete;break;case Sa:t=this.InterpolantFactoryMethodLinear;break;case da:t=this.InterpolantFactoryMethodSmooth;break;case Ac:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return He("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return Sa;case this.InterpolantFactoryMethodSmooth:return da;case this.InterpolantFactoryMethodBezier:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;ca(this.settings)&&(Gu(this.settings.inTangents,e),Gu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;ca(this.settings)&&(ku(this.settings.inTangents,e),ku(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ge("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ep(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===da,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,u=f-i,d=f+i;for(let m=0;m!==i;++m){let M=t[f+m];if(M!==t[u+m]||M!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,u=o*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,ca(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Gu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function ku(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Sa;var Yi=class extends Rn{constructor(e,t,i){super(e,t,i)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Br;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ga=class extends Rn{constructor(e,t,i,s){super(e,t,i,s)}};Ga.prototype.ValueTypeName="color";var ka=class extends Rn{constructor(e,t,i,s){super(e,t,i,s)}};ka.prototype.ValueTypeName="number";var Va=class extends qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}},ho=class extends Rn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Va(this.times,this.values,this.getValueSize(),e)}};ho.prototype.ValueTypeName="quaternion";ho.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Rn{constructor(e,t,i){super(e,t,i)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Br;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends Rn{constructor(e,t,i,s){super(e,t,i,s)}};Wa.prototype.ValueTypeName="vector";var Xa=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hd=new Xa,qa=class{constructor(e){this.manager=e!==void 0?e:Hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};qa.DEFAULT_MATERIAL_NAME="__DEFAULT";var uo=class extends Kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},fo=class extends uo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},wc=new dt,Vu=new C,Wu=new C,Ya=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xi,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vu),Wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(wc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===$s||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ha=new C,ua=new _n,oi=new C,po=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ha,ua,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,ua,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ha,ua,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,ua,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new C,Xu=new fe,qu=new fe,mn=class extends po{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,Xu,qu),t.subVectors(qu,Xu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Nr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var mo=class extends po{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Uc=class extends Ya{constructor(){super(new mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},go=class extends uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Uc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Xs=-90,qs=1,ar=class extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(Xs,qs,e,t);s.layers=this.layers,this.add(s);let r=new mn(Xs,qs,e,t);r.layers=this.layers,this.add(r);let o=new mn(Xs,qs,e,t);o.layers=this.layers,this.add(o);let a=new mn(Xs,qs,e,t);a.layers=this.layers,this.add(a);let l=new mn(Xs,qs,e,t);l.layers=this.layers,this.add(l);let c=new mn(Xs,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$s)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=M,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Za=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var mh="\\[\\]\\.:\\/",Fm=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",Om="[^"+mh.replace("\\.","")+"]",Bm=/((?:WC+[\/:])*)/.source.replace("WC",gh),zm=/(WCOD+)?/.source.replace("WCOD",Om),Hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),Gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),km=new RegExp("^"+Bm+zm+Hm+Gm+"$"),Vm=["material","materials","bones","map"],Fc=class{constructor(e,t,i){let s=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fm,"")}static parseTrackName(e){let t=km.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Vm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=Fc;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qv=new Float32Array(1);var Yu=new dt,_o=class{constructor(e,t,i=0,s=1/0){this.ray=new qr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yu),this}intersectObject(e,t=!0,i=[]){return Oc(e,this,i,t),i.sort(Zu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Oc(e[s],this,i,t);return i.sort(Zu),i}};function Zu(n,e){return n.distance-e.distance}function Oc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Oc(r[o],e,t,!0)}}var Sh=class Sh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Sh.prototype.isMatrix2=!0;var Bc=Sh;function _h(n,e,t,i){let s=Wm(i);switch(t){case nh:return n*e;case nl:return n*e/s.components*s.byteLength;case il:return n*e/s.components*s.byteLength;case $i:return n*e*2/s.components*s.byteLength;case sl:return n*e*2/s.components*s.byteLength;case ih:return n*e*3/s.components*s.byteLength;case si:return n*e*4/s.components*s.byteLength;case rl:return n*e*4/s.components*s.byteLength;case Mo:case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bo:case Eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case al:case cl:return Math.max(n,16)*Math.max(e,8)/4;case ol:case ll:return Math.max(n,8)*Math.max(e,8)/2;case hl:case ul:case fl:case pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dl:case To:case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Il:case Pl:case Ll:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Dl:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wo:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wm(n){switch(n){case vn:case Qc:return{byteLength:1,components:1};case ur:case jc:case ii:return{byteLength:2,components:1};case el:case tl:return{byteLength:2,components:4};case ni:case ja:case Gn:return{byteLength:4,components:1};case eh:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function cf(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Km(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],M=f[d];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++u,f[u]=M)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let M=f[d];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jm=`#ifdef USE_ALPHAHASH
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
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s0=`#ifdef USE_AOMAP
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
#endif`,r0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o0=`#ifdef USE_BATCHING
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
#endif`,a0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u0=`#ifdef USE_IRIDESCENCE
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
#endif`,d0=`#ifdef USE_BUMPMAP
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
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,v0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,M0=`#define PI 3.141592653589793
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
} // validated`,S0=`vec3 transformedNormal = objectNormal;
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
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A0="gl_FragColor = linearToOutputTexel( gl_FragColor );",R0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,L0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B0=`#ifdef USE_GRADIENTMAP
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
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z0=`PhysicalMaterial material;
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
#endif`,J0=`uniform sampler2D dfgLUT;
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
}`,$0=`
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ag=`#if defined( USE_POINTS_UV )
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
#endif`,lg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ug=`#if defined( USE_MORPHCOLORS )
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
#endif`,dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`#ifdef USE_MORPHTARGETS
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
#endif`,pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vg=`#ifdef USE_NORMALMAP
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
#endif`,Mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ag=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fg=`float getShadowMask() {
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
}`,Og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qg=`uniform sampler2D t2D;
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`uniform float backgroundBlurriness;
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`#include <common>
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
}`,s_=`#if DEPTH_PACKING == 3200
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
}`,r_=`#define DISTANCE
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
}`,o_=`#define DISTANCE
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
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`uniform float scale;
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
}`,h_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#define LAMBERT
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
}`,p_=`#define LAMBERT
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
}`,m_=`#define MATCAP
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
}`,g_=`#define MATCAP
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
}`,__=`#define NORMAL
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
}`,x_=`#define NORMAL
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
}`,y_=`#define PHONG
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
}`,v_=`#define PHONG
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
}`,M_=`#define STANDARD
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
}`,S_=`#define STANDARD
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
}`,b_=`#define TOON
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
}`,E_=`#define TOON
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
}`,T_=`uniform float size;
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
}`,w_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,R_=`uniform vec3 color;
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
}`,C_=`uniform float rotation;
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
}`,I_=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Qm,alphahash_pars_fragment:jm,alphamap_fragment:e0,alphamap_pars_fragment:t0,alphatest_fragment:n0,alphatest_pars_fragment:i0,aomap_fragment:s0,aomap_pars_fragment:r0,batching_pars_vertex:o0,batching_vertex:a0,begin_vertex:l0,beginnormal_vertex:c0,bsdfs:h0,iridescence_fragment:u0,bumpmap_pars_fragment:d0,clipping_planes_fragment:f0,clipping_planes_pars_fragment:p0,clipping_planes_pars_vertex:m0,clipping_planes_vertex:g0,color_fragment:_0,color_pars_fragment:x0,color_pars_vertex:y0,color_vertex:v0,common:M0,defaultnormal_vertex:S0,displacementmap_pars_vertex:b0,displacementmap_vertex:E0,emissivemap_fragment:T0,emissivemap_pars_fragment:w0,colorspace_fragment:A0,colorspace_pars_fragment:R0,envmap_fragment:C0,envmap_common_pars_fragment:I0,envmap_pars_fragment:P0,envmap_pars_vertex:L0,envmap_physical_pars_fragment:V0,envmap_vertex:D0,fog_vertex:N0,fog_pars_vertex:U0,fog_fragment:F0,fog_pars_fragment:O0,gradientmap_pars_fragment:B0,lightmap_pars_fragment:z0,lights_lambert_fragment:H0,lights_lambert_pars_fragment:G0,lights_pars_begin:k0,lights_toon_fragment:W0,lights_toon_pars_fragment:X0,lights_phong_fragment:q0,lights_phong_pars_fragment:Y0,lights_physical_fragment:Z0,lights_physical_pars_fragment:J0,lights_fragment_begin:$0,lights_fragment_maps:K0,lights_fragment_end:Q0,lightprobes_pars_fragment:j0,logdepthbuf_fragment:eg,logdepthbuf_pars_fragment:tg,logdepthbuf_pars_vertex:ng,logdepthbuf_vertex:ig,map_fragment:sg,map_pars_fragment:rg,map_particle_fragment:og,map_particle_pars_fragment:ag,metalnessmap_fragment:lg,metalnessmap_pars_fragment:cg,morphinstance_vertex:hg,morphcolor_vertex:ug,morphnormal_vertex:dg,morphtarget_pars_vertex:fg,morphtarget_vertex:pg,normal_fragment_begin:mg,normal_fragment_maps:gg,normal_pars_fragment:_g,normal_pars_vertex:xg,normal_vertex:yg,normalmap_pars_fragment:vg,clearcoat_normal_fragment_begin:Mg,clearcoat_normal_fragment_maps:Sg,clearcoat_pars_fragment:bg,iridescence_pars_fragment:Eg,opaque_fragment:Tg,packing:wg,premultiplied_alpha_fragment:Ag,project_vertex:Rg,dithering_fragment:Cg,dithering_pars_fragment:Ig,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Dg,shadowmap_pars_vertex:Ng,shadowmap_vertex:Ug,shadowmask_pars_fragment:Fg,skinbase_vertex:Og,skinning_pars_vertex:Bg,skinning_vertex:zg,skinnormal_vertex:Hg,specularmap_fragment:Gg,specularmap_pars_fragment:kg,tonemapping_fragment:Vg,tonemapping_pars_fragment:Wg,transmission_fragment:Xg,transmission_pars_fragment:qg,uv_pars_fragment:Yg,uv_pars_vertex:Zg,uv_vertex:Jg,worldpos_vertex:$g,background_vert:Kg,background_frag:Qg,backgroundCube_vert:jg,backgroundCube_frag:e_,cube_vert:t_,cube_frag:n_,depth_vert:i_,depth_frag:s_,distance_vert:r_,distance_frag:o_,equirect_vert:a_,equirect_frag:l_,linedashed_vert:c_,linedashed_frag:h_,meshbasic_vert:u_,meshbasic_frag:d_,meshlambert_vert:f_,meshlambert_frag:p_,meshmatcap_vert:m_,meshmatcap_frag:g_,meshnormal_vert:__,meshnormal_frag:x_,meshphong_vert:y_,meshphong_frag:v_,meshphysical_vert:M_,meshphysical_frag:S_,meshtoon_vert:b_,meshtoon_frag:E_,points_vert:T_,points_frag:w_,shadow_vert:A_,shadow_frag:R_,sprite_vert:C_,sprite_frag:I_},Me={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},fi={basic:{uniforms:dn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:dn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:dn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:dn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:dn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:dn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:dn([Me.points,Me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:dn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:dn([Me.common,Me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:dn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:dn([Me.sprite,Me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:dn([Me.common,Me.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:dn([Me.lights,Me.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};fi.physical={uniforms:dn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var Bl={r:0,b:0,g:0},P_=new dt,hf=new We;hf.set(-1,0,0,0,1,0,0,0,1);function L_(n,e,t,i,s,r){let o=new Ve(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){let y=x.backgroundBlurriness>0;E=e.get(E,y)}return E}function m(x){let E=!1,y=d(x);y===null?g(o,a):y&&y.isColor&&(g(y,1),E=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(x,E){let y=d(E);y&&y.isCubeTexture?(c===void 0&&(c=new Mt(new ht(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Ss(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(P_.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hf),c.material.toneMapped=lt.getTransfer(y.colorSpace)!==xt,(h!==y||f!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Mt(new un(2,2),new Hn({name:"BackgroundMaterial",uniforms:Ss(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=lt.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,E){x.getRGB(Bl,ph(n)),t.buffers.color.setClear(Bl.r,Bl.g,Bl.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,E=1){o.set(x),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:m,addToRenderList:M,dispose:p}}function D_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(D,F,k,L,H){let X=!1,G=f(D,L,k,F);r!==G&&(r=G,c(r.object)),X=d(D,L,k,H),X&&m(D,L,k,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(D,F,k,L),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function f(D,F,k,L){let H=L.wireframe===!0,X=i[F.id];X===void 0&&(X={},i[F.id]=X);let G=D.isInstancedMesh===!0?D.id:0,ne=X[G];ne===void 0&&(ne={},X[G]=ne);let W=ne[k.id];W===void 0&&(W={},ne[k.id]=W);let j=W[H];return j===void 0&&(j=u(l()),W[H]=j),j}function u(D){let F=[],k=[],L=[];for(let H=0;H<t;H++)F[H]=0,k[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:L,object:D,attributes:{},index:null}}function d(D,F,k,L){let H=r.attributes,X=F.attributes,G=0,ne=k.getAttributes();for(let W in ne)if(ne[W].location>=0){let te=H[W],Te=X[W];if(Te===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Te=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Te=D.instanceColor)),te===void 0||te.attribute!==Te||Te&&te.data!==Te.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function m(D,F,k,L){let H={},X=F.attributes,G=0,ne=k.getAttributes();for(let W in ne)if(ne[W].location>=0){let te=X[W];te===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));let Te={};Te.attribute=te,te&&te.data&&(Te.data=te.data),H[W]=Te,G++}r.attributes=H,r.attributesNum=G,r.index=L}function M(){let D=r.newAttributes;for(let F=0,k=D.length;F<k;F++)D[F]=0}function g(D){p(D,0)}function p(D,F){let k=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;k[D]=1,L[D]===0&&(n.enableVertexAttribArray(D),L[D]=1),H[D]!==F&&(n.vertexAttribDivisor(D,F),H[D]=F)}function x(){let D=r.newAttributes,F=r.enabledAttributes;for(let k=0,L=F.length;k<L;k++)F[k]!==D[k]&&(n.disableVertexAttribArray(k),F[k]=0)}function E(D,F,k,L,H,X,G){G===!0?n.vertexAttribIPointer(D,F,k,H,X):n.vertexAttribPointer(D,F,k,L,H,X)}function y(D,F,k,L){M();let H=L.attributes,X=k.getAttributes(),G=F.defaultAttributeValues;for(let ne in X){let W=X[ne];if(W.location>=0){let j=H[ne];if(j===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){let te=j.normalized,Te=j.itemSize,Be=e.get(j);if(Be===void 0)continue;let Y=Be.buffer,xe=Be.type,we=Be.bytesPerElement,Ue=xe===n.INT||xe===n.UNSIGNED_INT||j.gpuType===ja;if(j.isInterleavedBufferAttribute){let ye=j.data,Fe=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,Ct=j.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let ze=0;ze<W.locationSize;ze++)p(W.location+ze,ye.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ze=0;ze<W.locationSize;ze++)g(W.location+ze);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let ze=0;ze<W.locationSize;ze++)E(W.location+ze,Te/W.locationSize,xe,te,Fe*we,(Ct+Te/W.locationSize*ze)*we,Ue)}else{if(j.isInstancedBufferAttribute){for(let ye=0;ye<W.locationSize;ye++)p(W.location+ye,j.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ye=0;ye<W.locationSize;ye++)g(W.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let ye=0;ye<W.locationSize;ye++)E(W.location+ye,Te/W.locationSize,xe,te,Te*we,Te/W.locationSize*ye*we,Ue)}}else if(G!==void 0){let te=G[ne];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(W.location,te);break;case 3:n.vertexAttrib3fv(W.location,te);break;case 4:n.vertexAttrib4fv(W.location,te);break;default:n.vertexAttrib1fv(W.location,te)}}}}x()}function w(){P();for(let D in i){let F=i[D];for(let k in F){let L=F[k];for(let H in L){let X=L[H];for(let G in X)h(X[G].object),delete X[G];delete L[H]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;let F=i[D.id];for(let k in F){let L=F[k];for(let H in L){let X=L[H];for(let G in X)h(X[G].object),delete X[G];delete L[H]}}delete i[D.id]}function _(D){for(let F in i){let k=i[F];for(let L in k){let H=k[L];if(H[D.id]===void 0)continue;let X=H[D.id];for(let G in X)h(X[G].object),delete X[G];delete H[D.id]}}}function b(D){for(let F in i){let k=i[F],L=D.isInstancedMesh===!0?D.id:0,H=k[L];if(H!==void 0){for(let X in H){let G=H[X];for(let ne in G)h(G[ne].object),delete G[ne];delete H[X]}delete k[L],Object.keys(k).length===0&&delete i[F]}}}function P(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:g,disableUnusedAttributes:x}}function N_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function U_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==si&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let b=_===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==vn&&_!==Gn&&!b&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:y,maxSamples:w,samples:T}}function F_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ei,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let x=r?0:i,E=x*4,y=p.clippingState||null;l.value=y,y=h(m,u,E,d);for(let w=0;w!==E;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,m){let M=f!==null?f.length:0,g=null;if(M!==0){if(g=l.value,m!==!0||g===null){let p=d+M*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,y=d;E!==M;++E,y+=4)o.copy(f[E]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}var Io=class extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Zr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ht(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:_s});r.uniforms.tEquirect.value=t;let o=new Mt(s,r),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=gn),new ar(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Gd=256,O_=3,B_=20,uf=256,df=16,z_=3,H_=new C,G_=new Ve,fr=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ar(1,10,null),this._boxMesh=new Mt(new ht(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=H_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(G_));let g=new ar(i,s,h);return g.position.copy(a),g.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=m,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Gd,uh(e))}_fromTexture(e,t){e.mapping===ys||e.mapping===hr?this._setSize(e.image.length===0?Gd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=kd(e,!1,!1),i=Math.log2(e)-O_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=kd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ys||e.mapping===hr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Vd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=k_(),this._integrationMaterial=V_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/df);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-z_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(uf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=W_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function kd(n,e,t){return new Io(n,{minFilter:wi,generateMipmaps:e,type:ii,colorSpace:zr,depthBuffer:t})}function Po(n,e,t){return new Hn({name:n,uniforms:e,vertexShader:Ke.cube_vert,fragmentShader:t,side:tn,blending:_s,depthTest:!1,depthWrite:!1})}function k_(){return Po("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${uf}u

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
	`)}function V_(){return Po("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:df}},`

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
	`)}function W_(){return Po("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${B_}
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
	`)}function Vd(){return Po("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Wd(){return Po("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function X_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===$a||d===Ka)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let M=new Io(m.height);return M.fromEquirectangularTexture(n,u),e.set(u,M),u.addEventListener("dispose",c),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,m=d===$a||d===Ka,M=d===ys||d===hr;if(m||M){let g=t.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new fr(n)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let x=u.image;return m&&x&&x.height>0||M&&x&&l(x)?(i===null&&(i=new fr(n)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,d){return d===$a?u.mapping=ys:d===Ka&&(u.mapping=hr),u}function l(u){let d=0,m=6;for(let M=0;M<m;M++)u[M]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function q_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Dr("WebGLRenderer: "+i+" extension not supported."),s}}}function Y_(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let M=r.get(m);M&&(e.remove(M),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),t.memory.geometries++),M}function h(m){let M=m.attributes;for(let g in M)e.update(M[g],n.ARRAY_BUFFER)}function f(m){let M=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let x=M!==null?M.array.length:g.array.length/3-1,E=g.count>=65535?Xr:Wr,y=new E(Math.ceil(x/3)*6,1),w=y.array;if(M!==null){let _=M.array;p=M.version;for(let b=0,P=0;b<x;b+=3){let R=_[b+0],D=_[b+1],F=_[b+2];w[P++]=R,w[P++]=D,w[P++]=D,w[P++]=F,w[P++]=F,w[P++]=R}}else{p=g.version;for(let _=0,b=0;_<x;_+=3){let P=_+0,R=_+1,D=_+2;w[b++]=P,w[b++]=R,w[b++]=R,w[b++]=D,w[b++]=D,w[b++]=P}}y.version=p;let T=r.get(m);T&&e.remove(T),r.set(m,y)}function u(m){let M=r.get(m);if(M){let g=m.index;g!==null&&M.version<g.version&&f(m)}else f(m);return r.get(m)}function d(){for(let m in s){let M=s[m].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Z_(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*o),t.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*o,d),t.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let M=0;for(let g=0;g<d;g++)M+=u[g];t.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function J_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ge("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function $_(n,e,t){let i=new WeakMap,s=new Pt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==f){let P=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],E=0;d===!0&&(E=1),m===!0&&(E=2),M===!0&&(E=3);let y=a.attributes.position.count*E,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*w*4*f),_=new kr(T,y,w,f);_.type=Gn,_.needsUpdate=!0;let b=E*4;for(let R=0;R<f;R++){let D=g[R],F=p[R],k=x[R],L=y*w*4*R;for(let H=0;H<D.count;H++){let X=H*b;d===!0&&(s.fromBufferAttribute(D,H),T[L+X+0]=s.x,T[L+X+1]=s.y,T[L+X+2]=s.z,T[L+X+3]=0),m===!0&&(s.fromBufferAttribute(F,H),T[L+X+4]=s.x,T[L+X+5]=s.y,T[L+X+6]=s.z,T[L+X+7]=0),M===!0&&(s.fromBufferAttribute(k,H),T[L+X+8]=s.x,T[L+X+9]=s.y,T[L+X+10]=s.z,T[L+X+11]=k.itemSize===4?s.w:1)}}u={count:f,texture:_,size:new fe(y,w)},i.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function K_(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Q_={[Xc]:"LINEAR_TONE_MAPPING",[qc]:"REINHARD_TONE_MAPPING",[Yc]:"CINEON_TONE_MAPPING",[yo]:"ACES_FILMIC_TONE_MAPPING",[Jc]:"AGX_TONE_MAPPING",[$c]:"NEUTRAL_TONE_MAPPING",[Zc]:"CUSTOM_TONE_MAPPING"};function j_(n,e,t,i,s,r){let o=new Tn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new kt;h.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new nt([0,2,0,0,2,0],2));let f=new Na({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Mt(h,f),d=new mo(-1,1,1,-1,0,1),m=null,M=null,g=!1,p,x=null,E=[],y=!1;this.setSize=function(w,T){o.setSize(w,T),a!==null&&a.setSize(w,T),l!==null&&l.setSize(w,T);for(let _=0;_<E.length;_++){let b=E[_];b.setSize&&b.setSize(w,T)}},this.setEffects=function(w){E=w,y=E.length>0&&E[0].isRenderPass===!0;let T=o.width,_=o.height;E.length>0&&a===null&&(a=new Tn(T,_,{type:ii,depthBuffer:!1,stencilBuffer:!1}),l=new Tn(T,_,{type:ii,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&E.some(P=>P.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Ti(T,_),r===!0&&(c.format=Ai,c.type=vs)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let P=0;P<E.length;P++){let R=E[P];R.setSize&&R.setSize(T,_),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,T){if(g||w.toneMapping===ui&&E.length===0)return!1;if(x=T,T!==null){let _=T.width,b=T.height;(o.width!==_||o.height!==b)&&this.setSize(_,b)}return y===!1&&w.setRenderTarget(o),p=w.toneMapping,w.toneMapping=ui,!0},this.hasRenderPass=function(){return y},this.end=function(w,T){w.toneMapping=p,g=!0;let _=o,b=a;for(let P=0;P<E.length;P++){let R=E[P];R.enabled!==!1&&(R.render(w,b,_,T),R.needsSwap!==!1&&(_=b,b=b===a?l:a))}if(m!==w.outputColorSpace||M!==w.toneMapping){m=w.outputColorSpace,M=w.toneMapping,f.defines={},lt.getTransfer(m)===xt&&(f.defines.SRGB_TRANSFER="");let P=Q_[M];P&&(f.defines[P]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(x),w.render(u,d),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var ff=new xn,pf=new Ti(1,1),mf=new $r(1),gf=new kr,_f=new Ta,xf=new Zr,Xd=[],qd=[],Yd=new Float32Array(16),Zd=new Float32Array(9),Jd=new Float32Array(4);function pr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Xd[s];if(r===void 0&&(r=new Float32Array(s),Xd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gl(n,e){let t=qd[e];t===void 0&&(t=new Int32Array(e),qd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ex(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function nx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function sx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;Jd.set(i),n.uniformMatrix2fv(this.addr,!1,Jd),Wt(t,i)}}function rx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;Zd.set(i),n.uniformMatrix3fv(this.addr,!1,Zd),Wt(t,i)}}function ox(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;Yd.set(i),n.uniformMatrix4fv(this.addr,!1,Yd),Wt(t,i)}}function ax(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function lx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function cx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function hx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function ux(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function fx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function kl(n){return n.version===0&&(n.compareFunction=oh,n.needsUpdate=!0),n}function mx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=kl(pf):r=ff,t.setTexture2D(e||r,s)}function gx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||_f,s)}function _x(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=kl(mf):r=xf,t.setTextureCube(e||r,s)}function xx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||gf,s)}function yx(n){switch(n){case 5126:return ex;case 35664:return tx;case 35665:return nx;case 35666:return ix;case 35674:return sx;case 35675:return rx;case 35676:return ox;case 5124:case 35670:return ax;case 35667:case 35671:return lx;case 35668:case 35672:return cx;case 35669:case 35673:return hx;case 5125:return ux;case 36294:return dx;case 36295:return fx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return xx}}function vx(n,e){n.uniform1fv(this.addr,e)}function Mx(n,e){let t=pr(e,this.size,2);n.uniform2fv(this.addr,t)}function Sx(n,e){let t=pr(e,this.size,3);n.uniform3fv(this.addr,t)}function bx(n,e){let t=pr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ex(n,e){let t=pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Tx(n,e){let t=pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wx(n,e){let t=pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ax(n,e){n.uniform1iv(this.addr,e)}function Rx(n,e){n.uniform2iv(this.addr,e)}function Cx(n,e){n.uniform3iv(this.addr,e)}function Ix(n,e){n.uniform4iv(this.addr,e)}function Px(n,e){n.uniform1uiv(this.addr,e)}function Lx(n,e){n.uniform2uiv(this.addr,e)}function Dx(n,e){n.uniform3uiv(this.addr,e)}function Nx(n,e){n.uniform4uiv(this.addr,e)}function Ux(n,e,t){let i=this.cache,s=e.length,r=Gl(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=kl(pf):o=ff;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Fx(n,e,t){let i=this.cache,s=e.length,r=Gl(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||_f,r[o])}function Ox(n,e,t){let i=this.cache,s=e.length,r=Gl(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=kl(mf):o=xf;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Bx(n,e,t){let i=this.cache,s=e.length,r=Gl(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||gf,r[o])}function zx(n){switch(n){case 5126:return vx;case 35664:return Mx;case 35665:return Sx;case 35666:return bx;case 35674:return Ex;case 35675:return Tx;case 35676:return wx;case 5124:case 35670:return Ax;case 35667:case 35671:return Rx;case 35668:case 35672:return Cx;case 35669:case 35673:return Ix;case 5125:return Px;case 36294:return Lx;case 36295:return Dx;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ux;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Bx}}var Th=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yx(t.type)}},wh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zx(t.type)}},Ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},bh=/(\w+)(\])?(\[|\.)?/g;function $d(n,e){n.seq.push(e),n.map[e.id]=e}function Hx(n,e,t){let i=n.name,s=i.length;for(bh.lastIndex=0;;){let r=bh.exec(i),o=bh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$d(t,c===void 0?new Th(a,n,e):new wh(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Ah(a),$d(t,f)),t=f}}}var dr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Hx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Kd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Gx=37297,kx=0;function Vx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Qd=new We;function Wx(n){lt._getMatrix(Qd,lt.workingColorSpace,n);let e=`mat3( ${Qd.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case Hr:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Vx(n.getShaderSource(e),a)}else return r}function Xx(n,e){let t=Wx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var qx={[Xc]:"Linear",[qc]:"Reinhard",[Yc]:"Cineon",[yo]:"ACESFilmic",[Jc]:"AgX",[$c]:"Neutral",[Zc]:"Custom"};function Yx(n,e){let t=qx[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var zl=new C;function Zx(){lt.getLuminanceCoefficients(zl);let n=zl.x.toFixed(4),e=zl.y.toFixed(4),t=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function $x(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Kx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Co(n){return n!==""}function ef(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function tf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(n){return n.replace(Qx,jx)}function jx(n,e){let t=Ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Rh(t)}var ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(n){return n.replace(ey,ty)}function ty(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var ny={[gs]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};function iy(n){return ny[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sy={[hr]:"ENVMAP_MODE_REFRACTION"};function ry(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":sy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var oy={[Wc]:"ENVMAP_BLENDING_MULTIPLY",[gd]:"ENVMAP_BLENDING_MIX",[_d]:"ENVMAP_BLENDING_ADD"};function ay(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":oy[n.combine]||"ENVMAP_BLENDING_NONE"}function ly(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=iy(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ry(t),f=ay(t),u=Jx(t),d=$x(r),m=s.createProgram(),M,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Co).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Co).join(`
`),g.length>0&&(g+=`
`)):(M=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),g=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ui?Yx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Xx("linearToOutputTexel",t.outputColorSpace),Zx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Co).join(`
`)),o=Rh(o),o=ef(o,t),o=tf(o,t),a=Rh(a),a=ef(a,t),a=tf(a,t),o=nf(o),a=nf(a),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",t.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=p+M+o,E=p+g+a,y=Kd(s,s.VERTEX_SHADER,x),w=Kd(s,s.FRAGMENT_SHADER,E);s.attachShader(m,y),s.attachShader(m,w),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(R){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(m)||"",F=s.getShaderInfoLog(y)||"",k=s.getShaderInfoLog(w)||"",L=D.trim(),H=F.trim(),X=k.trim(),G=!0,ne=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,y,w);else{let W=jd(s,y,"vertex"),j=jd(s,w,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+W+`
`+j)}else L!==""?He("WebGLProgram: Program Info Log:",L):(H===""||X==="")&&(ne=!1);ne&&(R.diagnostics={runnable:G,programLog:L,vertexShader:{log:H,prefix:M},fragmentShader:{log:X,prefix:g}})}s.deleteShader(y),s.deleteShader(w),_=new dr(s,m),b=Kx(s,m)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(m,Gx)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=w,this}var cy=0,Ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ih(e),t.set(e,i)),i}},Ih=class{constructor(e){this.id=cy++,this.code=e,this.usedTimes=0}};function hy(n){return n===$i||n===To||n===wo}function uy(n,e,t,i,s,r){let o=new er,a=new Ch,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,b,P,R,D,F){let k=R.fog,L=D.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||H,X),ne=u[_.type],W=i.precision;_.precision!==null&&(W=i.getMaxPrecision(_.precision),W!==_.precision&&He("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,te=j!==void 0?j.length:0,Te=0;L.morphAttributes.position!==void 0&&(Te=1),L.morphAttributes.normal!==void 0&&(Te=2),L.morphAttributes.color!==void 0&&(Te=3);let Be,Y,xe,we;if(ne){let ve=fi[ne];Be=ve.vertexShader,Y=ve.fragmentShader}else{Be=_.vertexShader,Y=_.fragmentShader;let ve=a.getVertexShaderStage(_),yt=a.getFragmentShaderStage(_);a.update(_,ve,yt),xe=ve.id,we=yt.id}let Ue=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Fe=D.isInstancedMesh===!0,Ct=D.isBatchedMesh===!0,ze=!!_.map,Qe=!!_.matcap,it=!!G,ee=it&&G.isPMREMTexture===!0,ce=!!_.aoMap,oe=!!_.lightMap,Ee=!!_.bumpMap&&_.wireframe===!1,_e=!!_.normalMap,Ze=!!_.displacementMap,Pe=!!_.emissiveMap,st=!!_.metalnessMap,rt=!!_.roughnessMap,gt=_.anisotropy>0,U=_.clearcoat>0,Ot=_.diffuseRoughness>0,et=_.dispersion>0,bt=_.retroreflectivity>0,pe=_.iridescence>0,Ut=_.sheen>0,Oe=_.transmission>0,ke=gt&&!!_.anisotropyMap,A=U&&!!_.clearcoatMap,v=U&&!!_.clearcoatNormalMap,B=U&&!!_.clearcoatRoughnessMap,ie=Ot&&!!_.diffuseRoughnessMap,Q=pe&&!!_.iridescenceMap,ae=pe&&!!_.iridescenceThicknessMap,me=Ut&&!!_.sheenColorMap,Z=Ut&&!!_.sheenRoughnessMap,J=!!_.specularMap,he=!!_.specularColorMap,I=!!_.specularIntensityMap,$=Oe&&!!_.transmissionMap,q=Oe&&!!_.thicknessMap,ue=!!_.gradientMap,re=!!_.alphaMap,le=_.alphaTest>0,Le=!!_.alphaHash,$e=!!_.extensions,se=ui;_.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(se=n.toneMapping);let De=ee?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Je={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:Be,fragmentShader:Y,defines:_.defines,customVertexShaderID:xe,customFragmentShaderID:we,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:Ct,batchingColor:Ct&&D._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&D.instanceColor!==null,instancingMorph:Fe&&D.morphTexture!==null,outputColorSpace:Ue===null?n.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ze,matcap:Qe,envMap:it,envMapMode:it&&G.mapping,envMapPMREM:ee,envMapMaxLod:ee?De.length-1:null,envMapSize:ee?De[0].width:null,aoMap:ce,lightMap:oe,bumpMap:Ee,normalMap:_e,displacementMap:Ze,emissiveMap:Pe,normalMapObjectSpace:_e&&_.normalMapType===vd,normalMapTangentSpace:_e&&_.normalMapType===Fl,packedNormalMap:_e&&_.normalMapType===Fl&&hy(_.normalMap.format),metalnessMap:st,roughnessMap:rt,anisotropy:gt,anisotropyMap:ke,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:v,clearcoatRoughnessMap:B,diffuseRoughness:Ot,diffuseRoughnessMap:ie,dispersion:et,retroreflection:bt,iridescence:pe,iridescenceMap:Q,iridescenceThicknessMap:ae,sheen:Ut,sheenColorMap:me,sheenRoughnessMap:Z,specularMap:J,specularColorMap:he,specularIntensityMap:I,transmission:Oe,transmissionMap:$,thicknessMap:q,gradientMap:ue,opaque:_.transparent===!1&&_.blending===cr&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:le,alphaHash:Le,combine:_.combine,mapUv:ze&&d(_.map.channel),aoMapUv:ce&&d(_.aoMap.channel),lightMapUv:oe&&d(_.lightMap.channel),bumpMapUv:Ee&&d(_.bumpMap.channel),normalMapUv:_e&&d(_.normalMap.channel),displacementMapUv:Ze&&d(_.displacementMap.channel),emissiveMapUv:Pe&&d(_.emissiveMap.channel),metalnessMapUv:st&&d(_.metalnessMap.channel),roughnessMapUv:rt&&d(_.roughnessMap.channel),anisotropyMapUv:ke&&d(_.anisotropyMap.channel),clearcoatMapUv:A&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:me&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&d(_.sheenRoughnessMap.channel),specularMapUv:J&&d(_.specularMap.channel),specularColorMapUv:he&&d(_.specularColorMap.channel),specularIntensityMapUv:I&&d(_.specularIntensityMap.channel),transmissionMapUv:$&&d(_.transmissionMap.channel),thicknessMapUv:q&&d(_.thicknessMap.channel),alphaMapUv:re&&d(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(_e||gt),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(ze||re),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&_e===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:F.filter(ve=>ve.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:ze&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===xt,decodeVideoTextureEmissive:Pe&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Cn,flipSided:_.side===tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:$e&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&_.extensions.multiDraw===!0||Ct)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function M(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)b.push(P),b.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(g(b,_),p(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function g(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function p(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function x(_){let b=u[_.type],P;if(b){let R=fi[b];P=Ol.clone(R.uniforms)}else P=_.uniforms;return P}function E(_,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new ly(n,b,_,s),c.push(P),h.set(b,P)),P}function y(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function T(){a.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:x,acquireProgram:E,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:T}}function dy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function fy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function rf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function of(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,M,g,p){let x=n[e];return x===void 0?(x={id:u.id,object:u,geometry:d,material:m,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:p},n[e]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=m,x.materialVariant=o(u),x.groupOrder=M,x.renderOrder=u.renderOrder,x.z=g,x.group=p),e++,x}function l(u,d,m,M,g,p,x){x.reversedDepth===!0&&(g=-g);let E=a(u,d,m,M,g,p);m.transmission>0?i.push(E):m.transparent===!0?s.push(E):t.push(E)}function c(u,d,m,M,g,p){let x=a(u,d,m,M,g,p);m.transmission>0?i.unshift(x):m.transparent===!0?s.unshift(x):t.unshift(x)}function h(u,d){t.length>1&&t.sort(u||fy),i.length>1&&i.sort(d||rf),s.length>1&&s.sort(d||rf)}function f(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function py(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new of,n.set(i,[o])):s>=r.length?(o=new of,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function my(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new Ve};break;case"SpotLight":t={position:new C,direction:new C,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function gy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var _y=0;function xy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yy(n){let e=new my,t=gy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new dt,o=new dt;function a(c){let h=0,f=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let d=0,m=0,M=0,g=0,p=0,x=0,E=0,y=0,w=0,T=0,_=0,b=0,P=0,R=0;c.sort(xy);for(let F=0,k=c.length;F<k;F++){let L=c[F],H=L.color,X=L.intensity,G=L.distance,ne=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===$i?ne=L.shadow.map.texture:ne=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*X,f+=H.g*X,u+=H.b*X;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],X);R++}else if(L.isSunLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,te=t.get(L);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[m]=te,i.sunShadowMap[m]=ne;let Te=j.getViewportCount();for(let Be=0;Be<Te;Be++)i.sunShadowMatrix[M+Be]=j.getMatrix(Be),i.sunShadowCascade[M+Be]=j._cascadeData[Be];M+=Te,m++}i.sun[d]=W,d++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,te=t.get(L);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=ne,i.directionalShadowMatrix[g]=L.shadow.matrix,w++}i.directional[g]=W,g++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(H).multiplyScalar(X),W.distance=G,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[x]=W;let j=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,j.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[x]=j.matrix,L.castShadow){let te=t.get(L);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,i.spotShadow[x]=te,i.spotShadowMap[x]=ne,_++}x++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(H).multiplyScalar(X),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[E]=W,E++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let j=L.shadow,te=t.get(L);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,i.pointShadow[p]=te,i.pointShadowMap[p]=ne,i.pointShadowMatrix[p]=L.shadow.matrix,T++}i.point[p]=W,p++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(X),W.groundColor.copy(L.groundColor).multiplyScalar(X),i.hemi[y]=W,y++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let D=i.hash;(D.sunLength!==d||D.directionalLength!==g||D.pointLength!==p||D.spotLength!==x||D.rectAreaLength!==E||D.hemiLength!==y||D.numSunShadows!==m||D.numDirectionalShadows!==w||D.numPointShadows!==T||D.numSpotShadows!==_||D.numSpotMaps!==b||D.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=g,i.spot.length=x,i.rectArea.length=E,i.point.length=p,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,D.sunLength=d,D.directionalLength=g,D.pointLength=p,D.spotLength=x,D.rectAreaLength=E,D.hemiLength=y,D.numSunShadows=m,D.numDirectionalShadows=w,D.numPointShadows=T,D.numSpotShadows=_,D.numSpotMaps=b,D.numLightProbes=R,i.version=_y++)}function l(c,h){let f=0,u=0,d=0,m=0,M=0,g=0,p=h.matrixWorldInverse;for(let x=0,E=c.length;x<E;x++){let y=c[x];if(y.isSunLight){let w=i.sun[f];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),f++}else if(y.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(y.isSpotLight){let w=i.spot[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let w=i.rectArea[M];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),M++}else if(y.isPointLight){let w=i.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function af(n){let e=new yy(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){i.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function vy(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new af(n),e.set(s,[a])):r>=o.length?(a=new af(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var My=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sy=`uniform sampler2D shadow_pass;
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
}`,by=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Ey=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],lf=new dt,Ro=new C,Eh=new C;function Ty(n,e,t){let i=new Xi,s=new fe,r=new fe,o=new Pt,a=new Ua,l=new Fa,c={},h=t.maxTextureSize,f={[Ji]:tn,[tn]:Ji,[Cn]:Cn},u=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:My,fragmentShader:Sy}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new kt;m.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Mt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let p=this.type;this.render=function(T,_,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Ku&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gs);let P=n.getRenderTarget(),R=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(_s),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==this.type;k&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=T.length;L<H;L++){let X=T[L],G=X.shadow;if(G===void 0){He("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ne=G.getFrameExtents();s.multiply(ne),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,G.mapSize.y=r.y));let W=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||k===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===lr){if(X.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Tn(s.x,s.y,{format:$i,type:ii,minFilter:gn,magFilter:gn,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new Ti(s.x,s.y,Gn),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=Ei,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=$t,G.map.depthTexture.magFilter=$t}else X.isPointLight?(G.map=new Io(s.x),G.map.depthTexture=new $r(s.x,ni)):(G.map=new Tn(s.x,s.y),G.map.depthTexture=new Ti(s.x,s.y,ni)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=Ei,this.type===gs?(G.map.depthTexture.compareFunction=W?rh:sh,G.map.depthTexture.minFilter=gn,G.map.depthTexture.magFilter=gn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=$t,G.map.depthTexture.magFilter=$t);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let j=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();X.isPointLight!==!0&&G.updateMatrices(X,b);let te=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let Te=0;Te<j;Te++){let Be=G.getCamera(Te);if(X.isPointLight){let Y=G.camera,xe=G.matrix,we=X.distance||Y.far;we!==Y.far&&(Y.far=we,Y.updateProjectionMatrix()),Ro.setFromMatrixPosition(X.matrixWorld),Y.position.copy(Ro),Eh.copy(Y.position),Eh.add(by[Te]),Y.up.copy(Ey[Te]),Y.lookAt(Eh),Y.updateMatrixWorld(),xe.makeTranslation(-Ro.x,-Ro.y,-Ro.z),lf.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G._frustum.setFromProjectionMatrix(lf,Y.coordinateSystem,Y.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,Te),n.clear();else{Te===0&&(n.setRenderTarget(G.map),n.clear());let Y=G.getViewport(Te);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),F.viewport(o)}i=G.getFrustum(Te),y(_,b,Be,X,te,this.type)}G.isPointLightShadow!==!0&&this.type===lr&&x(G,b),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(P,R,D)};function x(T,_){let b=e.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Tn(s.x,s.y,{format:$i,type:ii}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(_,null,b,u,M,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(_,null,b,d,M,null)}function E(T,_,b,P){let R=null,D=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)R=D;else if(R=b.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=R.uuid,k=_.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let H=L[k];H===void 0&&(H=R.clone(),L[k]=H,_.addEventListener("dispose",w)),R=H}if(R.visible=_.visible,R.wireframe=_.wireframe,P===lr?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:f[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=n.properties.get(R);F.light=b}return R}function y(T,_,b,P,R,D){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===lr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let L=e.update(T),H=T.material;if(Array.isArray(H)){let X=L.groups;for(let G=0,ne=X.length;G<ne;G++){let W=X[G],j=H[W.materialIndex];if(j&&j.visible){let te=E(T,j,P,D);T.onBeforeShadow(n,T,_,b,L,te,W),n.renderBufferDirect(b,null,L,te,T,W),T.onAfterShadow(n,T,_,b,L,te,W)}}}else if(H.visible){let X=E(T,H,P,D);T.onBeforeShadow(n,T,_,b,L,X,null),n.renderBufferDirect(b,null,L,X,T,null),T.onAfterShadow(n,T,_,b,L,X,null)}}let k=T.children;for(let L=0,H=k.length;L<H;L++)y(k[L],_,b,P,R,D)}function w(T){T.target.removeEventListener("dispose",w);for(let b in c){let P=c[b],R=T.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function wy(n,e){function t(){let I=!1,$=new Pt,q=null,ue=new Pt(0,0,0,0);return{setMask:function(re){q!==re&&!I&&(n.colorMask(re,re,re,re),q=re)},setLocked:function(re){I=re},setClear:function(re,le,Le,$e,se){se===!0&&(re*=$e,le*=$e,Le*=$e),$.set(re,le,Le,$e),ue.equals($)===!1&&(n.clearColor(re,le,Le,$e),ue.copy($))},reset:function(){I=!1,q=null,ue.set(-1,0,0,0)}}}function i(){let I=!1,$=!1,q=null,ue=null,re=null;return{setReversed:function(le){if($!==le){let Le=e.get("EXT_clip_control");le?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),$=le;let $e=re;re=null,this.setClear($e)}},getReversed:function(){return $},setTest:function(le){le?ye(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(le){q!==le&&!I&&(n.depthMask(le),q=le)},setFunc:function(le){if($&&(le=Pd[le]),ue!==le){switch(le){case pa:n.depthFunc(n.NEVER);break;case ma:n.depthFunc(n.ALWAYS);break;case ga:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case _a:n.depthFunc(n.EQUAL);break;case xa:n.depthFunc(n.GEQUAL);break;case ya:n.depthFunc(n.GREATER);break;case va:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=le}},setLocked:function(le){I=le},setClear:function(le){re!==le&&(re=le,$&&(le=1-le),n.clearDepth(le))},reset:function(){I=!1,q=null,ue=null,re=null,$=!1}}}function s(){let I=!1,$=null,q=null,ue=null,re=null,le=null,Le=null,$e=null,se=null;return{setTest:function(De){I||(De?ye(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(De){$!==De&&!I&&(n.stencilMask(De),$=De)},setFunc:function(De,Je,ve){(q!==De||ue!==Je||re!==ve)&&(n.stencilFunc(De,Je,ve),q=De,ue=Je,re=ve)},setOp:function(De,Je,ve){(le!==De||Le!==Je||$e!==ve)&&(n.stencilOp(De,Je,ve),le=De,Le=Je,$e=ve)},setLocked:function(De){I=De},setClear:function(De){se!==De&&(n.clearStencil(De),se=De)},reset:function(){I=!1,$=null,q=null,ue=null,re=null,le=null,Le=null,$e=null,se=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],M=null,g=!1,p=null,x=null,E=null,y=null,w=null,T=null,_=null,b=new Ve(0,0,0),P=0,R=!1,D=null,F=null,k=null,L=null,H=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ne=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=ne>=1):W.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=ne>=2);let j=null,te={},Te=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),Y=new Pt().fromArray(Te),xe=new Pt().fromArray(Be);function we(I,$,q,ue){let re=new Uint8Array(4),le=n.createTexture();n.bindTexture(I,le),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<q;Le++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D($,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D($+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return le}let Ue={};Ue[n.TEXTURE_2D]=we(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=we(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[n.TEXTURE_2D_ARRAY]=we(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=we(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(n.DEPTH_TEST),o.setFunc(Zs),Ee(!1),_e(zc),ye(n.CULL_FACE),ce(_s);function ye(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Fe(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ct(I,$){return u[I]!==$?(n.bindFramebuffer(I,$),u[I]=$,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=$),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=$),!0):!1}function ze(I,$){let q=m,ue=!1;if(I){q=d.get($),q===void 0&&(q=[],d.set($,q));let re=I.textures;if(q.length!==re.length||q[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Le=re.length;le<Le;le++)q[le]=n.COLOR_ATTACHMENT0+le;q.length=re.length,ue=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ue=!0);ue&&n.drawBuffers(q)}function Qe(I){return M!==I?(n.useProgram(I),M=I,!0):!1}let it={[xs]:n.FUNC_ADD,[ju]:n.FUNC_SUBTRACT,[ed]:n.FUNC_REVERSE_SUBTRACT};it[td]=n.MIN,it[nd]=n.MAX;let ee={[id]:n.ZERO,[sd]:n.ONE,[rd]:n.SRC_COLOR,[kc]:n.SRC_ALPHA,[ud]:n.SRC_ALPHA_SATURATE,[cd]:n.DST_COLOR,[ad]:n.DST_ALPHA,[od]:n.ONE_MINUS_SRC_COLOR,[Vc]:n.ONE_MINUS_SRC_ALPHA,[hd]:n.ONE_MINUS_DST_COLOR,[ld]:n.ONE_MINUS_DST_ALPHA,[dd]:n.CONSTANT_COLOR,[fd]:n.ONE_MINUS_CONSTANT_COLOR,[pd]:n.CONSTANT_ALPHA,[md]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(I,$,q,ue,re,le,Le,$e,se,De){if(I===_s){g===!0&&(Fe(n.BLEND),g=!1);return}if(g===!1&&(ye(n.BLEND),g=!0),I!==Qu){if(I!==p||De!==R){if((x!==xs||w!==xs)&&(n.blendEquation(n.FUNC_ADD),x=xs,w=xs),De)switch(I){case cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xo:n.blendFunc(n.ONE,n.ONE);break;case Hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ge("WebGLState: Invalid blending: ",I);break}else switch(I){case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hc:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gc:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",I);break}E=null,y=null,T=null,_=null,b.set(0,0,0),P=0,p=I,R=De}return}re=re||$,le=le||q,Le=Le||ue,($!==x||re!==w)&&(n.blendEquationSeparate(it[$],it[re]),x=$,w=re),(q!==E||ue!==y||le!==T||Le!==_)&&(n.blendFuncSeparate(ee[q],ee[ue],ee[le],ee[Le]),E=q,y=ue,T=le,_=Le),($e.equals(b)===!1||se!==P)&&(n.blendColor($e.r,$e.g,$e.b,se),b.copy($e),P=se),p=I,R=!1}function oe(I,$){I.side===Cn?Fe(n.CULL_FACE):ye(n.CULL_FACE);let q=I.side===tn;$&&(q=!q),Ee(q),I.blending===cr&&I.transparent===!1?ce(_s):ce(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let ue=I.stencilWrite;a.setTest(ue),ue&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Pe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(I){D!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),D=I)}function _e(I){I!==Ju?(ye(n.CULL_FACE),I!==F&&(I===zc?n.cullFace(n.BACK):I===$u?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),F=I}function Ze(I){I!==k&&(G&&n.lineWidth(I),k=I)}function Pe(I,$,q){I?(ye(n.POLYGON_OFFSET_FILL),(L!==$||H!==q)&&(L=$,H=q,o.getReversed()&&($=-$,q=-q),n.polygonOffset($,q))):Fe(n.POLYGON_OFFSET_FILL)}function st(I){I?ye(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function rt(I){I===void 0&&(I=n.TEXTURE0+X-1),j!==I&&(n.activeTexture(I),j=I)}function gt(I,$,q){q===void 0&&(j===null?q=n.TEXTURE0+X-1:q=j);let ue=te[q];ue===void 0&&(ue={type:void 0,texture:void 0},te[q]=ue),(ue.type!==I||ue.texture!==$)&&(j!==q&&(n.activeTexture(q),j=q),n.bindTexture(I,$||Ue[I]),ue.type=I,ue.texture=$)}function U(){let I=te[j];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ot(){try{n.compressedTexImage2D(...arguments)}catch(I){Ge("WebGLState:",I)}}function et(){try{n.compressedTexImage3D(...arguments)}catch(I){Ge("WebGLState:",I)}}function bt(){try{n.texSubImage2D(...arguments)}catch(I){Ge("WebGLState:",I)}}function pe(){try{n.texSubImage3D(...arguments)}catch(I){Ge("WebGLState:",I)}}function Ut(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Ge("WebGLState:",I)}}function Oe(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Ge("WebGLState:",I)}}function ke(){try{n.texStorage2D(...arguments)}catch(I){Ge("WebGLState:",I)}}function A(){try{n.texStorage3D(...arguments)}catch(I){Ge("WebGLState:",I)}}function v(){try{n.texImage2D(...arguments)}catch(I){Ge("WebGLState:",I)}}function B(){try{n.texImage3D(...arguments)}catch(I){Ge("WebGLState:",I)}}function ie(I){return f[I]!==void 0?f[I]:n.getParameter(I)}function Q(I,$){f[I]!==$&&(n.pixelStorei(I,$),f[I]=$)}function ae(I){Y.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Y.copy(I))}function me(I){xe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),xe.copy(I))}function Z(I,$){let q=c.get($);q===void 0&&(q=new WeakMap,c.set($,q));let ue=q.get(I);ue===void 0&&(ue=n.getUniformBlockIndex($,I.name),n.uniformBlockBinding($,ue,ue),q.set(I,ue))}function J(I,$,q){let re=c.get($).get(I);l[re]!==q&&(n.bindBufferBase(n.UNIFORM_BUFFER,re,q),l[re]=q)}function he(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},j=null,te={},u={},l={},d=new WeakMap,m=[],M=null,g=!1,p=null,x=null,E=null,y=null,w=null,T=null,_=null,b=new Ve(0,0,0),P=0,R=!1,D=null,F=null,k=null,L=null,H=null,Y.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ye,disable:Fe,bindFramebuffer:Ct,drawBuffers:ze,useProgram:Qe,setBlending:ce,setMaterial:oe,setFlipSided:Ee,setCullFace:_e,setLineWidth:Ze,setPolygonOffset:Pe,setScissorTest:st,activeTexture:rt,bindTexture:gt,unbindTexture:U,compressedTexImage2D:Ot,compressedTexImage3D:et,texImage2D:v,texImage3D:B,pixelStorei:Q,getParameter:ie,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:ke,texStorage3D:A,texSubImage2D:bt,texSubImage3D:pe,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Oe,scissor:ae,viewport:me,reset:he}}function Ay(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,h=new WeakMap,f=new Set,u,d=new WeakMap,m=new Set,M=new FinalizationRegistry(A=>m.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,v){return g?new OffscreenCanvas(A,v):Gr("canvas")}function x(A,v,B){let ie=1,Q=ke(A);if((Q.width>B||Q.height>B)&&(ie=B/Math.max(Q.width,Q.height)),ie<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ae=Math.floor(ie*Q.width),me=Math.floor(ie*Q.height);u===void 0&&(u=p(ae,me));let Z=v?p(ae,me):u;return Z.width=ae,Z.height=me,Z.getContext("2d").drawImage(A,0,0,ae,me),He("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ae+"x"+me+")."),Z}else return"data"in A&&He("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function E(A){return A.generateMipmaps}function y(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(A,v,B,ie,Q,ae=!1){if(A!==null){if(n[A]!==void 0)return n[A];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let me;ie&&(me=e.get("EXT_texture_norm16"),me||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8),B===n.UNSIGNED_SHORT&&me&&(Z=me.R16_EXT),B===n.SHORT&&me&&(Z=me.R16_SNORM_EXT)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),v===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8),B===n.UNSIGNED_SHORT&&me&&(Z=me.RG16_EXT),B===n.SHORT&&me&&(Z=me.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),B===n.UNSIGNED_INT&&(Z=n.RGB32UI),B===n.BYTE&&(Z=n.RGB8I),B===n.SHORT&&(Z=n.RGB16I),B===n.INT&&(Z=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),B===n.UNSIGNED_INT&&(Z=n.RGBA32UI),B===n.BYTE&&(Z=n.RGBA8I),B===n.SHORT&&(Z=n.RGBA16I),B===n.INT&&(Z=n.RGBA32I)),v===n.RGB&&(B===n.UNSIGNED_SHORT&&me&&(Z=me.RGB16_EXT),B===n.SHORT&&me&&(Z=me.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),v===n.RGBA){let J=ae?Hr:lt.getTransfer(Q);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=J===xt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&me&&(Z=me.RGBA16_EXT),B===n.SHORT&&me&&(Z=me.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(A,v){let B;return A?v===null||v===ni||v===vs?B=n.DEPTH24_STENCIL8:v===Gn?B=n.DEPTH32F_STENCIL8:v===ur&&(B=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ni||v===vs?B=n.DEPTH_COMPONENT24:v===Gn?B=n.DEPTH_COMPONENT32F:v===ur&&(B=n.DEPTH_COMPONENT16),B}function b(A,v){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==$t&&A.minFilter!==gn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function P(A){let v=new WeakRef(A);i.get(A).__ref=v,m.add(v),M.register(A,v,v)}function R(A){let v=i.get(A).__ref;v!==void 0&&(m.delete(v),M.unregister(v))}function D(A){k(A.target)}function F(A){L(A.target)}function k(A){A.removeEventListener("dispose",D),R(A),X(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}function L(A){A.removeEventListener("dispose",F),R(A),ne(A)}function H(){for(let A of m){let v=A.deref();v!==void 0&&(v.isRenderTarget===!0?L(v):k(v))}m.clear(),f.clear()}function X(A){let v=i.get(A);if(v.__webglInit===void 0)return;let B=A.source,ie=d.get(B);if(ie){let Q=ie[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&G(A),Object.keys(ie).length===0&&d.delete(B)}i.remove(A)}function G(A){let v=i.get(A);n.deleteTexture(v.__webglTexture);let B=A.source,ie=d.get(B);delete ie[v.__cacheKey],o.memory.textures--}function ne(A){let v=i.get(A);v.__depthDisposeCallback&&v.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&k(B),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let ae=0;ae<v.__webglFramebuffer[Q].length;ae++)n.deleteFramebuffer(v.__webglFramebuffer[Q][ae]);else n.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[Q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ie=A.textures;for(let Q=0,ae=ie.length;Q<ae;Q++){let me=i.get(ie[Q]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(ie[Q])}i.remove(A)}let W=0;function j(){W=0}function te(){return W}function Te(A){W=A}function Be(){let A=W;return A>=s.maxTextures&&He("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,A}function Y(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.mipmapsAutoUpdate),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function xe(A,v){let B=i.get(A);if(A.isVideoTexture&&Ut(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let ie=A.image;if(ie===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(B,A,v);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function we(A,v){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){oe(B,A,v);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function Ue(A,v){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){oe(B,A,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function ye(A,v){let B=i.get(A);if(A.version>0&&B.__version!==A.version){Ee(B,A,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}let Fe={[Js]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[Ma]:n.MIRRORED_REPEAT},Ct={[$t]:n.NEAREST,[xd]:n.NEAREST_MIPMAP_NEAREST,[vo]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[Qa]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},ze={[Sd]:n.NEVER,[oh]:n.ALWAYS,[bd]:n.LESS,[sh]:n.LEQUAL,[Ed]:n.EQUAL,[rh]:n.GEQUAL,[Td]:n.GREATER,[wd]:n.NOTEQUAL};function Qe(A,v){if(v.type===Gn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===gn||v.magFilter===Qa||v.magFilter===vo||v.magFilter===wi||v.minFilter===gn||v.minFilter===Qa||v.minFilter===vo||v.minFilter===wi)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Fe[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Fe[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Fe[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Ct[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Ct[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ze[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===$t||v.minFilter!==vo&&v.minFilter!==wi||v.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function it(A,v){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",D),P(v));let ie=v.source,Q=d.get(ie);Q===void 0&&(Q={},d.set(ie,Q));let ae=Y(v);if(ae!==A.__cacheKey){Q[ae]===void 0&&(Q[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[ae].usedTimes++;let me=Q[A.__cacheKey];me!==void 0&&(Q[A.__cacheKey].usedTimes--,me.usedTimes===0&&G(v)),A.__cacheKey=ae,A.__webglTexture=Q[ae].texture}return B}function ee(A,v,B){return Math.floor(Math.floor(A/B)/v)}function ce(A,v,B,ie){let ae=A.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,B,ie,v.data);else{ae.sort((I,$)=>I.start-$.start);let me=0;for(let I=1;I<ae.length;I++){let $=ae[me],q=ae[I],ue=$.start+$.count,re=ee(q.start,v.width,4),le=ee($.start,v.width,4);q.start<=ue+1&&re===le&&ee(q.start+q.count-1,v.width,4)===re?$.count=Math.max($.count,q.start+q.count-$.start):(++me,ae[me]=q)}ae.length=me+1;let Z=t.getParameter(n.UNPACK_ROW_LENGTH),J=t.getParameter(n.UNPACK_SKIP_PIXELS),he=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let I=0,$=ae.length;I<$;I++){let q=ae[I],ue=Math.floor(q.start/4),re=Math.ceil(q.count/4),le=ue%v.width,Le=Math.floor(ue/v.width),$e=re,se=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,Le),t.texSubImage2D(n.TEXTURE_2D,0,le,Le,$e,se,B,ie,v.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,J),t.pixelStorei(n.UNPACK_SKIP_ROWS,he)}}function oe(A,v,B){let ie=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ie=n.TEXTURE_3D);let Q=it(A,v),ae=v.source;t.bindTexture(ie,A.__webglTexture,n.TEXTURE0+B);let me=i.get(ae);if(ae.version!==me.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let se=lt.getPrimaries(lt.workingColorSpace),De=v.colorSpace===Ri?null:lt.getPrimaries(v.colorSpace),Je=v.colorSpace===Ri||se===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let J=x(v.image,!1,s.maxTextureSize);J=Oe(v,J);let he=r.convert(v.format,v.colorSpace),I=r.convert(v.type),$=T(v.internalFormat,he,I,v.normalized,v.colorSpace,v.isVideoTexture);Qe(ie,v);let q,ue=v.mipmaps,re=v.isVideoTexture!==!0,le=me.__version===void 0||Q===!0,Le=ae.dataReady,$e=b(v,J);if(v.isDepthTexture)$=_(v.format===Ai,v.type),le&&(re?t.texStorage2D(n.TEXTURE_2D,1,$,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,$,J.width,J.height,0,he,I,null));else if(v.isDataTexture)if(ue.length>0){re&&le&&t.texStorage2D(n.TEXTURE_2D,$e,$,ue[0].width,ue[0].height);for(let se=0,De=ue.length;se<De;se++)q=ue[se],re?Le&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,q.width,q.height,he,I,q.data):t.texImage2D(n.TEXTURE_2D,se,$,q.width,q.height,0,he,I,q.data);v.generateMipmaps=!1}else re?(le&&t.texStorage2D(n.TEXTURE_2D,$e,$,J.width,J.height),Le&&ce(v,J,he,I)):t.texImage2D(n.TEXTURE_2D,0,$,J.width,J.height,0,he,I,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){re&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,$,ue[0].width,ue[0].height,J.depth);for(let se=0,De=ue.length;se<De;se++)if(q=ue[se],v.format!==si)if(he!==null)if(re){if(Le)if(v.layerUpdates.size>0){let Je=_h(q.width,q.height,v.format,v.type);for(let ve of v.layerUpdates){let yt=q.data.subarray(ve*Je/q.data.BYTES_PER_ELEMENT,(ve+1)*Je/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,ve,q.width,q.height,1,he,yt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,q.width,q.height,J.depth,he,q.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,$,q.width,q.height,J.depth,0,q.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,q.width,q.height,J.depth,he,I,q.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,$,q.width,q.height,J.depth,0,he,I,q.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{re&&le&&t.texStorage2D(n.TEXTURE_2D,$e,$,ue[0].width,ue[0].height);for(let se=0,De=ue.length;se<De;se++)q=ue[se],v.format!==si?he!==null?re?Le&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,q.width,q.height,he,q.data):t.compressedTexImage2D(n.TEXTURE_2D,se,$,q.width,q.height,0,q.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Le&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,q.width,q.height,he,I,q.data):t.texImage2D(n.TEXTURE_2D,se,$,q.width,q.height,0,he,I,q.data)}else if(v.isDataArrayTexture)if(re){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,$,J.width,J.height,J.depth),Le)if(v.layerUpdates.size>0){let se=_h(J.width,J.height,v.format,v.type);for(let De of v.layerUpdates){let Je=J.data.subarray(De*se/J.data.BYTES_PER_ELEMENT,(De+1)*se/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,De,J.width,J.height,1,he,I,Je)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,he,I,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,$,J.width,J.height,J.depth,0,he,I,J.data);else if(v.isData3DTexture)re?(le&&t.texStorage3D(n.TEXTURE_3D,$e,$,J.width,J.height,J.depth),Le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,he,I,J.data)):t.texImage3D(n.TEXTURE_3D,0,$,J.width,J.height,J.depth,0,he,I,J.data);else if(v.isFramebufferTexture){if(le)if(re)t.texStorage2D(n.TEXTURE_2D,$e,$,J.width,J.height);else{let se=J.width,De=J.height;for(let Je=0;Je<$e;Je++)t.texImage2D(n.TEXTURE_2D,Je,$,se,De,0,he,I,null),se>>=1,De>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let se=n.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),J.parentNode!==se){se.appendChild(J),f.add(v),se.onpaint=De=>{let Je=De.changedElements;for(let ve of f)Je.includes(ve.image)&&(ve.needsUpdate=!0)},se.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,J);else{let Je=n.RGBA,ve=n.RGBA,yt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Je,ve,yt,J)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ue.length>0){if(re&&le){let se=ke(ue[0]);t.texStorage2D(n.TEXTURE_2D,$e,$,se.width,se.height)}for(let se=0,De=ue.length;se<De;se++)q=ue[se],re?Le&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,he,I,q):t.texImage2D(n.TEXTURE_2D,se,$,he,I,q);v.generateMipmaps=!1}else if(re){if(le){let se=ke(J);t.texStorage2D(n.TEXTURE_2D,$e,$,se.width,se.height)}Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,I,J)}else t.texImage2D(n.TEXTURE_2D,0,$,he,I,J);E(v)&&v.mipmapsAutoUpdate===!0&&y(ie),me.__version=ae.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Ee(A,v,B){if(v.image.length!==6)return;let ie=it(A,v),Q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);let ae=i.get(Q);if(Q.version!==ae.__version||ie===!0){t.activeTexture(n.TEXTURE0+B);let me=lt.getPrimaries(lt.workingColorSpace),Z=v.colorSpace===Ri?null:lt.getPrimaries(v.colorSpace),J=v.colorSpace===Ri||me===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let he=v.isCompressedTexture||v.image[0].isCompressedTexture,I=v.image[0]&&v.image[0].isDataTexture,$=[];for(let ve=0;ve<6;ve++)!he&&!I?$[ve]=x(v.image[ve],!0,s.maxCubemapSize):$[ve]=I?v.image[ve].image:v.image[ve],$[ve]=Oe(v,$[ve]);let q=$[0],ue=r.convert(v.format,v.colorSpace),re=r.convert(v.type),le=T(v.internalFormat,ue,re,v.normalized,v.colorSpace),Le=v.isVideoTexture!==!0,$e=ae.__version===void 0||ie===!0,se=Q.dataReady,De=b(v,q);Qe(n.TEXTURE_CUBE_MAP,v);let Je;if(v.isDepthTexture){if(le=_(v.format===Ai,v.type),$e)if(Le)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,le,q.width,q.height);else for(let ve=0;ve<6;ve++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,le,q.width,q.height,0,ue,re,null)}else if(he){Le&&$e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,le,q.width,q.height);for(let ve=0;ve<6;ve++){Je=$[ve].mipmaps;for(let yt=0;yt<Je.length;yt++){let Yt=Je[yt];v.format!==si?ue!==null?Le?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,yt,0,0,Yt.width,Yt.height,ue,Yt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,yt,le,Yt.width,Yt.height,0,Yt.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,yt,0,0,Yt.width,Yt.height,ue,re,Yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,yt,le,Yt.width,Yt.height,0,ue,re,Yt.data)}}}else{if(Je=v.mipmaps,Le&&$e){Je.length>0&&De++;let ve=ke($[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,le,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(I){Le?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,$[ve].width,$[ve].height,ue,re,$[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,le,$[ve].width,$[ve].height,0,ue,re,$[ve].data);for(let yt=0;yt<Je.length;yt++){let Ui=Je[yt].image[ve].image;Le?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,yt+1,0,0,Ui.width,Ui.height,ue,re,Ui.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,yt+1,le,Ui.width,Ui.height,0,ue,re,Ui.data)}}else{Le?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ue,re,$[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,le,ue,re,$[ve]);for(let yt=0;yt<Je.length;yt++){let Yt=Je[yt];Le?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,yt+1,0,0,ue,re,Yt.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,yt+1,le,ue,re,Yt.image[ve])}}}E(v)&&v.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),ae.__version=Q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function _e(A,v,B,ie,Q,ae){let me=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),J=T(B.internalFormat,me,Z,B.normalized,B.colorSpace),he=i.get(v),I=i.get(B);if(I.__renderTarget=v,!he.__hasExternalTextures){let $=Math.max(1,v.width>>ae),q=Math.max(1,v.height>>ae);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ae,J,$,q,v.depth,0,me,Z,null):t.texImage2D(Q,ae,J,$,q,0,me,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),pe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,Q,I.__webglTexture,0,bt(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,Q,I.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(A,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){let ie=v.depthTexture,Q=ie&&ie.isDepthTexture?ie.type:null,ae=_(v.stencilBuffer,Q),me=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt(v),ae,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt(v),ae,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ae,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,A)}else{let ie=v.textures;for(let Q=0;Q<ie.length;Q++){let ae=ie[Q],me=r.convert(ae.format,ae.colorSpace),Z=r.convert(ae.type),J=T(ae.internalFormat,me,Z,ae.normalized,ae.colorSpace);pe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt(v),J,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt(v),J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(A,v,B){let ie=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(v.depthTexture);Q.__renderTarget=v;let ae=ie?v.depthTexture.image[0]:v.depthTexture.image;(!Q.__webglTexture||ae.width!==v.width||ae.height!==v.height)&&(ae.width=v.width,ae.height=v.height,v.depthTexture.needsUpdate=!0),ie?ye(v.depthTexture,0):xe(v.depthTexture,0);let me=Q.__webglTexture,Z=bt(v),J=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,he=v.depthTexture.format===Ai?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ei)pe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,J,me,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,he,J,me,0);else if(v.depthTexture.format===Ai)pe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,J,me,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,he,J,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(A){let v=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let ie=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ie){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ie.removeEventListener("dispose",Q)};ie.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=ie}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let ie=0;ie<6;ie++)Pe(v.__webglFramebuffer[ie],A,ie);else A.texture.mipmaps.length>0?Pe(v.__webglFramebuffer[0],A,0):Pe(v.__webglFramebuffer,A,0);else if(B){v.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ie]),v.__webglDepthbuffer[ie]===void 0)v.__webglDepthbuffer[ie]=n.createRenderbuffer(),Ze(v.__webglDepthbuffer[ie],A,!1);else{let Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ae)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ze(v.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(A,v,B){let ie=i.get(A);v!==void 0&&_e(ie.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&st(A)}function gt(A){let v=A.texture,B=i.get(A),ie=i.get(v);A.addEventListener("dispose",F),P(A);let Q=A.textures,ae=A.isWebGLCubeRenderTarget===!0,me=Q.length>1;if(me||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=v.version,o.memory.textures++),ae){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let J=0;J<v.mipmaps.length;J++)B.__webglFramebuffer[Z][J]=n.createFramebuffer()}else B.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(v.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)B.__webglFramebuffer[Z]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(me)for(let Z=0,J=Q.length;Z<J;Z++){let he=i.get(Q[Z]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&pe(A)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<Q.length;Z++){let J=Q[Z];B.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let he=r.convert(J.format,J.colorSpace),I=r.convert(J.type),$=T(J.internalFormat,he,I,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),q=bt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,q,$,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)_e(B.__webglFramebuffer[Z][J],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else _e(B.__webglFramebuffer[Z],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);E(v)?y(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(me){for(let Z=0,J=Q.length;Z<J;Z++){let he=Q[Z],I=i.get(he),$=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,I.__webglTexture),Qe($,he),_e(B.__webglFramebuffer,A,he,n.COLOR_ATTACHMENT0+Z,$,0),E(he)&&y($)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,ie.__webglTexture),Qe(Z,v),v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)_e(B.__webglFramebuffer[J],A,v,n.COLOR_ATTACHMENT0,Z,J);else _e(B.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,Z,0);E(v)?y(Z):v.mipmaps.length>0&&n.texParameteri(Z,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&st(A)}function U(A){let v=A.textures;for(let B=0,ie=v.length;B<ie;B++){let Q=v[B];if(E(Q)&&Q.mipmapsAutoUpdate===!0){let ae=w(A),me=i.get(Q).__webglTexture;t.bindTexture(ae,me),y(ae),t.unbindTexture()}}}let Ot=[];function et(A){if(A.samples>0){if(pe(A)===!1){let v=A.textures,B=A.width,ie=A.height,Q=n.COLOR_BUFFER_BIT,ae=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(A),Z=v.length>1;if(Z)for(let he=0;he<v.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let he=0;he<v.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[he]);let I=i.get(v[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,I,0)}n.blitFramebuffer(0,0,B,ie,0,0,B,ie,Q,n.NEAREST),l===!0&&(Ot.length=0,Ot.push(n.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Ot.push(ae),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let he=0;he<v.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,me.__webglColorRenderbuffer[he]);let I=i.get(v[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,I,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function bt(A){return Math.min(s.maxSamples,A.samples)}function pe(A){let v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ut(A){let v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function Oe(A,v){let B=A.colorSpace,ie=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==zr&&B!==Ri&&(lt.getTransfer(B)===xt?(ie!==si||Q!==vn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",B)),v}function ke(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Be,this.resetTextureUnits=j,this.getTextureUnits=te,this.setTextureUnits=Te,this.setTexture2D=xe,this.setTexture2DArray=we,this.setTexture3D=Ue,this.setTextureCube=ye,this.rebindTextures=rt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=pe,this.dispose=H}function Ry(n,e){function t(i,s=Ri){let r,o=lt.getTransfer(s);if(i===vn)return n.UNSIGNED_BYTE;if(i===el)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===th)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qc)return n.BYTE;if(i===jc)return n.SHORT;if(i===ur)return n.UNSIGNED_SHORT;if(i===ja)return n.INT;if(i===ni)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===ii)return n.HALF_FLOAT;if(i===nh)return n.ALPHA;if(i===ih)return n.RGB;if(i===si)return n.RGBA;if(i===Ei)return n.DEPTH_COMPONENT;if(i===Ai)return n.DEPTH_STENCIL;if(i===nl)return n.RED;if(i===il)return n.RED_INTEGER;if(i===$i)return n.RG;if(i===sl)return n.RG_INTEGER;if(i===rl)return n.RGBA_INTEGER;if(i===Mo||i===So||i===bo||i===Eo)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ol||i===al||i===ll||i===cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hl||i===ul||i===dl||i===fl||i===pl||i===To||i===ml)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hl||i===ul)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===dl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===fl)return r.COMPRESSED_R11_EAC;if(i===pl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===To)return r.COMPRESSED_RG11_EAC;if(i===ml)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===gl||i===_l||i===xl||i===yl||i===vl||i===Ml||i===Sl||i===bl||i===El||i===Tl||i===wl||i===Al||i===Rl||i===Cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===gl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_l)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ml)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===El)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Al)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Il||i===Pl||i===Ll)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Il)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dl||i===Nl||i===wo||i===Ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Cy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Iy=`
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

}`,Ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Kr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Hn({vertexShader:Cy,fragmentShader:Iy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lh=class extends li{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,M=typeof XRWebGLBinding<"u",g=new Ph,p={},x=t.getContextAttributes(),E=null,y=null,w=[],T=[],_=new fe,b=null,P=null,R=new mn;R.viewport=new Pt;let D=new mn;D.viewport=new Pt;let F=[R,D],k=new Za,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let xe=w[Y];return xe===void 0&&(xe=new tr,w[Y]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(Y){let xe=w[Y];return xe===void 0&&(xe=new tr,w[Y]=xe),xe.getGripSpace()},this.getHand=function(Y){let xe=w[Y];return xe===void 0&&(xe=new tr,w[Y]=xe),xe.getHandSpace()};function X(Y){let xe=T.indexOf(Y.inputSource);if(xe===-1)return;let we=w[xe];we!==void 0&&(we.update(Y.inputSource,Y.frame,c||o),we.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ne);for(let Y=0;Y<w.length;Y++){let xe=T[Y];xe!==null&&(T[Y]=null,w[Y].disconnect(xe))}L=null,H=null,g.reset();for(let Y in p)delete p[Y];if(e.setRenderTarget(E),d=null,u=null,f=null,s=null,y=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),P!==null){let Y=P.camera;Y.fov=P.fov,Y.zoom=P.zoom,Y.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ne),x.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ue=null,ye=null;x.depth&&(ye=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=x.stencil?Ai:Ei,Ue=x.stencil?vs:ni);let Fe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Fe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Tn(u.textureWidth,u.textureHeight,{format:si,type:vn,depthTexture:new Ti(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let we={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Tn(d.framebufferWidth,d.framebufferHeight,{format:si,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(Y){for(let xe=0;xe<Y.removed.length;xe++){let we=Y.removed[xe],Ue=T.indexOf(we);Ue>=0&&(T[Ue]=null,w[Ue].disconnect(we))}for(let xe=0;xe<Y.added.length;xe++){let we=Y.added[xe],Ue=T.indexOf(we);if(Ue===-1){for(let Fe=0;Fe<w.length;Fe++)if(Fe>=T.length){T.push(we),Ue=Fe;break}else if(T[Fe]===null){T[Fe]=we,Ue=Fe;break}if(Ue===-1)break}let ye=w[Ue];ye&&ye.connect(we)}}function W(Y,xe){xe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(xe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let xe=Y.near,we=Y.far;g.texture!==null&&(g.depthNear>0&&(xe=g.depthNear),g.depthFar>0&&(we=g.depthFar)),k.near=D.near=R.near=xe,k.far=D.far=R.far=we,(L!==k.near||H!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,H=k.far),k.layers.mask=Y.layers.mask|6,R.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let Ue=Y.parent,ye=k.cameras;W(k,Ue);for(let Fe=0;Fe<ye.length;Fe++)W(ye[Fe],Ue);k.projectionMatrix.copy(R.projectionMatrix),k.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&Y.isPerspectiveCamera&&(P={camera:Y,fov:Y.fov,zoom:Y.zoom}),j(Y,k,Ue)};function j(Y,xe,we){we===null?Y.matrix.copy(xe.matrixWorld):(Y.matrix.copy(we.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(xe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(xe.projectionMatrix),Y.projectionMatrixInverse.copy(xe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(Y){return p[Y]};let te=null;function Te(Y,xe){if(h=xe.getViewerPose(c||o),m=xe,h!==null){let we=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ue=!1;we.length!==k.cameras.length&&(k.cameras.length=0,Ue=!0);for(let ze=0;ze<we.length;ze++){let Qe=we[ze],it=null;if(d!==null)it=d.getViewport(Qe);else{let ce=f.getViewSubImage(u,Qe);it=ce.viewport,ze===0&&(e.setRenderTargetTextures(y,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(y))}let ee=F[ze];ee===void 0&&(ee=new mn,ee.layers.enable(ze),ee.viewport=new Pt,F[ze]=ee),ee.matrix.fromArray(Qe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Qe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(it.x,it.y,it.width,it.height),ze===0&&(k.matrix.copy(ee.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ue===!0&&k.cameras.push(ee)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=i.getBinding();let ze=f.getDepthInformation(we[0]);ze&&ze.isValid&&ze.texture&&g.init(ze,s.renderState)}if(ye&&ye.includes("camera-access")&&M){e.state.unbindTexture(),f=i.getBinding();for(let ze=0;ze<we.length;ze++){let Qe=we[ze].camera;if(Qe){let it=p[Qe];it||(it=new Kr,p[Qe]=it);let ee=f.getCameraImage(Qe);it.sourceTexture=ee}}}}for(let we=0;we<w.length;we++){let Ue=T[we],ye=w[we];Ue!==null&&ye!==void 0&&ye.update(Ue,xe,c||o)}te&&te(Y,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),m=null}let Be=new cf;Be.setAnimationLoop(Te),this.setAnimationLoop=function(Y){te=Y},this.dispose=function(){}}},Py=new dt,yf=new We;yf.set(-1,0,0,0,1,0,0,0,1);function Ly(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,ph(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,E,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),M(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=e.get(p),E=x.envMap,y=x.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(Py.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(yf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=E*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function M(g,p){let x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Dy(n,e,t,i){let s={},r={};function o(x,E){let y=E.program;i.uniformBlockBinding(x,y,s[x.id])}function a(x,E){let y=s[x.id];y===void 0&&(m(x),y=l(x),s[x.id]=y,x.addEventListener("dispose",g));let w=E.program;i.updateUBOMapping(x,w);let T=e.render.frame;r[x.id]!==T&&(c(x),r[x.id]=T)}function l(x){let E=n.createBuffer(),y=x.__size,w=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,y,w),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function c(x){let E=s[x.id],y=x.uniforms,w=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,_=y.length;T<_;T++){let b=y[T];if(Array.isArray(b))for(let P=0,R=b.length;P<R;P++)h(b[P],T,P,w);else h(b,T,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,E,y,w){if(u(x,E,y,w)===!0){let T=x.__offset,_=x.value;if(Array.isArray(_)){let b=0;for(let P=0;P<_.length;P++){let R=_[P],D=M(R,!0);f(R,x.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,x.__data)}}function f(x,E,y){typeof x=="number"||typeof x=="boolean"?E[y]=x:x.isMatrix3?(E[y]=x.elements[0],E[y+1]=x.elements[1],E[y+2]=x.elements[2],E[y+3]=0,E[y+4]=x.elements[3],E[y+5]=x.elements[4],E[y+6]=x.elements[5],E[y+7]=0,E[y+8]=x.elements[6],E[y+9]=x.elements[7],E[y+10]=x.elements[8],E[y+11]=0):ArrayBuffer.isView(x)?E.set(x.subarray(0,E.length-y),y):x.toArray(E,y)}function u(x,E,y,w){let T=x.value,_=E+"_"+y;if(Array.isArray(T)){w[_]===void 0&&(w[_]=[]);let b=w[_],P=!1;for(let R=0;R<T.length;R++)d(T[R],b,R)===!0&&(P=!0);return P}return d(T,w,_)}function d(x,E,y){if(E[y]===void 0)return typeof x=="number"||typeof x=="boolean"?E[y]=x:ArrayBuffer.isView(x)?E[y]=x.slice():E[y]=x.clone(),!0;{let w=E[y];if(typeof x=="number"||typeof x=="boolean"){if(w!==x)return E[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(w.equals(x)===!1)return w.copy(x),!0}}return!1}function m(x){let E=x.uniforms,y=0,w=16;for(let _=0,b=E.length;_<b;_++){let P=Array.isArray(E[_])?E[_]:[E[_]];for(let R=0,D=P.length;R<D;R++){let F=P[R],k=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(E[_])||Array.isArray(F.value),H=y;for(let G=0,ne=k.length;G<ne;G++){let W=k[G],j=M(W,L),te=y%w,Te=te%j.boundary,Be=te+Te;y+=Te,Be!==0&&w-Be<j.storage&&(y+=w-Be),G===0&&(H=y),y+=j.storage}let X=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new X((y-H)/Float32Array.BYTES_PER_ELEMENT),F.__offset=H}}let T=y%w;return T>0&&(y+=w-T),x.__size=y,x.__cache={},this}function M(x,E){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):He("WebGLRenderer: Unsupported uniform value type.",x),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(x){let E=x.target;E.removeEventListener("dispose",g),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let x in s)n.deleteBuffer(s[x]);s={},r={}}return{bind:o,update:a,dispose:p}}var Ny=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null;function Uy(){return di===null&&(di=new Yr(Ny,16,16,$i,ii),di.name="DFG_LUT",di.minFilter=gn,di.magFilter=gn,di.wrapS=ai,di.wrapT=ai,di.generateMipmaps=!1,di.needsUpdate=!0),di}var Hl=class{constructor(e={}){let{canvas:t=Rd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=vn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let M=d,g=new Set([rl,sl,il]),p=new Set([vn,ni,ur,vs,el,tl]),x=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,T=null,_=[],b=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,F=null,k=null,L=null,H=null;this._outputColorSpace=pn;let X=0,G=0,ne=null,W=-1,j=null,te=new Pt,Te=new Pt,Be=null,Y=new Ve(0),xe=0,we=t.width,Ue=t.height,ye=1,Fe=null,Ct=null,ze=new Pt(0,0,we,Ue),Qe=new Pt(0,0,we,Ue),it=!1,ee=new Xi,ce=new wa,oe=!1,Ee=!1,_e=new dt,Ze=new C,Pe=new Pt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function gt(){return ne===null?ye:1}let U=i;function Ot(S,N){return t.getContext(S,N)}let et,bt,pe,Ut,Oe,ke,A,v,B,ie,Q,ae,me,Z,J,he,I,$,q,ue,re,le,Le;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",ve,!1),U===null){let N="webgl2";if(U=Ot(N,S),U===null)throw Ot(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(S){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ge("WebGLRenderer: "+S.message),S}function $e(){et=new q_(U),et.init(),re=new Ry(U,et),bt=new U_(U,et,e,re),pe=new wy(U,et),bt.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),k=U.createFramebuffer(),L=U.createFramebuffer(),H=U.createFramebuffer(),Ut=new J_(U),Oe=new dy,ke=new Ay(U,et,pe,Oe,bt,re,Ut),A=new X_(R),v=new Km(U),le=new D_(U,v),B=new Y_(U,v,Ut,le),ie=new K_(U,B,v,le,Ut),$=new $_(U,bt,ke),J=new F_(Oe),Q=new uy(R,A,et,bt,le,J),ae=new Ly(R,Oe),me=new py,Z=new vy(et),I=new L_(R,A,pe,ie,m,l),he=new Ty(R,ie,bt),Le=new Dy(U,Ut,bt,pe),q=new N_(U,et,Ut),ue=new Z_(U,et,Ut),Ut.programs=Q.programs,R.capabilities=bt,R.extensions=et,R.properties=Oe,R.renderLists=me,R.shadowMap=he,R.state=pe,R.info=Ut}M!==vn&&(P=new j_(M,t.width,t.height,a,s,r));let se=new Lh(R,U);this.xr=se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(S){S!==void 0&&(ye=S,this.setSize(we,Ue,!1))},this.getSize=function(S){return S.set(we,Ue)},this.setSize=function(S,N,V=!0){if(se.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}we=S,Ue=N,t.width=Math.floor(S*ye),t.height=Math.floor(N*ye),V===!0&&(t.style.width=S+"px",t.style.height=N+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(we*ye,Ue*ye).floor()},this.setDrawingBufferSize=function(S,N,V){we=S,Ue=N,ye=V,t.width=Math.floor(S*V),t.height=Math.floor(N*V),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(M===vn){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(te)},this.getViewport=function(S){return S.copy(ze)},this.setViewport=function(S,N,V,O){S.isVector4?ze.set(S.x,S.y,S.z,S.w):ze.set(S,N,V,O),pe.viewport(te.copy(ze).multiplyScalar(gt()).round())},this.getScissor=function(S){return S.copy(Qe)},this.setScissor=function(S,N,V,O){S.isVector4?Qe.set(S.x,S.y,S.z,S.w):Qe.set(S,N,V,O),pe.scissor(Te.copy(Qe).multiplyScalar(gt()).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(S){pe.setScissorTest(it=S)},this.setOpaqueSort=function(S){Fe=S},this.setTransparentSort=function(S){Ct=S},this.getClearColor=function(S){return S.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,V=!0){let O=0;if(S){let z=!1;if(ne!==null){let ge=ne.texture.format;z=g.has(ge)}if(z){let ge=ne.texture.type,Ae=p.has(ge),de=I.getClearColor(),Se=I.getClearAlpha(),Ie=de.r,Xe=de.g,ot=de.b;Ae?(x[0]=Ie,x[1]=Xe,x[2]=ot,x[3]=Se,U.clearBufferuiv(U.COLOR,0,x)):(E[0]=Ie,E[1]=Xe,E[2]=ot,E[3]=Se,U.clearBufferiv(U.COLOR,0,E))}else O|=U.COLOR_BUFFER_BIT}N&&(O|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),I.dispose(),me.dispose(),Z.dispose(),ke.dispose(),Oe.dispose(),A.dispose(),ie.dispose(),B.dispose(),le.dispose(),Le.dispose(),Q.dispose(),se.dispose(),se.removeEventListener("sessionstart",ru),se.removeEventListener("sessionend",ou),os.stop()};function De(S){S.preventDefault(),ch("WebGLRenderer: Context Lost."),D=!0}function Je(){ch("WebGLRenderer: Context Restored."),D=!1;let S=Ut.autoReset,N=he.enabled,V=he.autoUpdate,O=he.needsUpdate,z=he.type;$e(),Ut.autoReset=S,he.enabled=N,he.autoUpdate=V,he.needsUpdate=O,he.type=z}function ve(S){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function yt(S){let N=S.target;N.removeEventListener("dispose",yt),Yt(N)}function Yt(S){Ui(S),Oe.remove(S)}function Ui(S){let N=Oe.get(S).programs;N!==void 0&&(N.forEach(function(V){Q.releaseProgram(V)}),S.isShaderMaterial&&Q.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,V,O,z,ge){N===null&&(N=st);let Ae=z.isMesh&&z.matrixWorld.determinantAffine()<0,de=vp(S,N,V,O,z);pe.setMaterial(O,Ae);let Se=V.index,Ie=1;if(O.wireframe===!0){if(Se=B.getWireframeAttribute(V),Se===void 0)return;Ie=2}let Xe=V.drawRange,ot=V.attributes.position,Re=Xe.start*Ie,at=(Xe.start+Xe.count)*Ie;ge!==null&&(Re=Math.max(Re,ge.start*Ie),at=Math.min(at,(ge.start+ge.count)*Ie)),Se!==null?(Re=Math.max(Re,0),at=Math.min(at,Se.count)):ot!=null&&(Re=Math.max(Re,0),at=Math.min(at,ot.count));let Bt=at-Re;if(Bt<0||Bt===1/0)return;le.setup(z,O,de,V,Se);let At,Et=q;if(Se!==null&&(At=v.get(Se),Et=ue,Et.setIndex(At)),z.isMesh)O.wireframe===!0?(pe.setLineWidth(O.wireframeLinewidth*gt()),Et.setMode(U.LINES)):Et.setMode(U.TRIANGLES);else if(z.isLine){let sn=O.linewidth;sn===void 0&&(sn=1),pe.setLineWidth(sn*gt()),z.isLineSegments?Et.setMode(U.LINES):z.isLineLoop?Et.setMode(U.LINE_LOOP):Et.setMode(U.LINE_STRIP)}else z.isPoints?Et.setMode(U.POINTS):z.isSprite&&Et.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Et.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let sn=z._multiDrawStarts,Ce=z._multiDrawCounts,fn=z._multiDrawCount,_t=Se?v.get(Se).bytesPerElement:1,as=Oe.get(O).currentProgram.getUniforms();for(let rn=0;rn<fn;rn++)as.setValue(U,"_gl_DrawID",rn),Et.render(sn[rn]/_t,Ce[rn])}else if(z.isInstancedMesh)Et.renderInstances(Re,Bt,z.count);else if(V.isInstancedBufferGeometry){let sn=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ce=Math.min(V.instanceCount,sn);Et.renderInstances(Re,Bt,Ce)}else Et.render(Re,Bt)};function su(S,N,V,O){F!==null&&S.isNodeMaterial&&F.setObject(O,S),oe===!0&&J.setState(S,V,!1),S.transparent===!0&&S.side===Cn&&S.forceSinglePass===!1?(S.side=tn,S.needsUpdate=!0,Tr(S,N,O),S.side=Ji,S.needsUpdate=!0,Tr(S,N,O),S.side=Cn):Tr(S,N,O)}this.compile=function(S,N,V=null){V===null&&(V=S),F!==null&&F.renderStart(S,N,V),T=Z.get(V),T.init(N),b.push(T),V.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),S!==V&&S.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),Ee=this.localClippingEnabled,oe=J.init(this.clippingPlanes,Ee),oe===!0&&J.setGlobalState(this.clippingPlanes,N),F!==null&&he.render(T.state.shadowsArray,V,N);let O=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ge=z.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){let de=ge[Ae];su(de,V,N,z),O.add(de)}else su(ge,V,N,z),O.add(ge)}),T=b.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(S,N,V=null){let O=this.compile(S,N,V);return new Promise(z=>{function ge(){if(O.forEach(function(Ae){let Se=Oe.get(Ae).currentProgram;(Se===void 0||Se.isReady())&&O.delete(Ae)}),O.size===0){z(S);return}setTimeout(ge,10)}et.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let nc=null;function xp(S){nc&&nc(S)}function ru(){os.stop()}function ou(){os.start()}let os=new cf;os.setAnimationLoop(xp),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(S){nc=S,se.setAnimationLoop(S),S===null?os.stop():os.start()},se.addEventListener("sessionstart",ru),se.addEventListener("sessionend",ou),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(S,N);let V=se.enabled===!0&&se.isPresenting===!0,O=P!==null&&(ne===null||V)&&P.begin(R,ne);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(N),N=se.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,N,ne),T=Z.get(S,b.length),T.init(N),T.state.textureUnits=ke.getTextureUnits(),b.push(T),_e.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?ce.setFromArrayCamera(N):ee.setFromProjectionMatrix(_e,zn,N.reversedDepth),Ee=this.localClippingEnabled,oe=J.init(this.clippingPlanes,Ee),w=me.get(S,_.length),w.init(),_.push(w),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){let Ae=R.xr.getDepthSensingMesh();Ae!==null&&ic(Ae,N,-1/0,R.sortObjects)}ic(S,N,0,R.sortObjects),w.finish(),F!==null&&F.updateLights(T.state.lightsArray),R.sortObjects===!0&&w.sort(Fe,Ct),rt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,rt&&I.addToRenderList(w,S),this.info.autoReset===!0&&this.info.reset(),oe===!0&&J.beginShadows();let z=T.state.shadowsArray;if(he.render(z,S,N),oe===!0&&J.endShadows(),(O&&P.hasRenderPass())===!1){let Ae=w.opaque,de=w.transmissive;if(T.setupLights(),N.isArrayCamera){let Se=N.cameras;if(de.length>0)for(let Ie=0,Xe=Se.length;Ie<Xe;Ie++){let ot=Se[Ie];lu(Ae,de,S,ot)}rt&&I.render(S);for(let Ie=0,Xe=Se.length;Ie<Xe;Ie++){let ot=Se[Ie];au(w,S,ot,ot.viewport)}}else de.length>0&&lu(Ae,de,S,N),rt&&I.render(S),au(w,S,N)}ne!==null&&G===0&&(ke.updateMultisampleRenderTarget(ne),ke.updateRenderTargetMipmap(ne)),O&&P.end(R),S.isScene===!0&&S.onAfterRender(R,S,N),le.resetDefaultState(),W=-1,j=null,b.pop(),b.length>0?(T=b[b.length-1],ke.setTextureUnits(T.state.textureUnits),oe===!0&&J.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,F!==null&&F.renderEnd()};function ic(S,N,V,O){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){let Ae=N.isArrayCamera?ce:ee;if(!S.frustumCulled||S.intersectsFrustum(Ae)){O&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_e);let de=ie.update(S),Se=S.material;Se.visible&&w.push(S,de,Se,V,Pe.z,null,N)}}else if(S.isMesh||S.isLine||S.isPoints){let Ae=N.isArrayCamera?ce:ee;if(!S.frustumCulled||S.intersectsFrustum(Ae)){let de=ie.update(S),Se=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Pe.copy(de.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(_e)),Array.isArray(Se)){let Ie=de.groups;for(let Xe=0,ot=Ie.length;Xe<ot;Xe++){let Re=Ie[Xe],at=Se[Re.materialIndex];at&&at.visible&&w.push(S,de,at,V,Pe.z,Re,N)}}else Se.visible&&w.push(S,de,Se,V,Pe.z,null,N)}}}let ge=S.children;for(let Ae=0,de=ge.length;Ae<de;Ae++)ic(ge[Ae],N,V,O)}function au(S,N,V,O){let{opaque:z,transmissive:ge,transparent:Ae}=S;T.setupLightsView(V),oe===!0&&J.setGlobalState(R.clippingPlanes,V),O&&pe.viewport(te.copy(O)),z.length>0&&Go(z,N,V),ge.length>0&&Go(ge,N,V),Ae.length>0&&Go(Ae,N,V),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function lu(S,N,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){let Re=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new Tn(1,1,{generateMipmaps:!0,type:Re?ii:vn,minFilter:wi,samples:Math.max(4,bt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let ge=T.state.transmissionRenderTarget[O.id],Ae=O.viewport||te;ge.setSize(Ae.z*R.transmissionResolutionScale,Ae.w*R.transmissionResolutionScale);let de=R.getRenderTarget(),Se=R.getActiveCubeFace(),Ie=R.getActiveMipmapLevel();R.setRenderTarget(ge),R.getClearColor(Y),xe=R.getClearAlpha(),xe<1&&R.setClearColor(16777215,.5),R.clear(),rt&&I.render(V);let Xe=R.toneMapping;R.toneMapping=ui;let ot=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),oe===!0&&J.setGlobalState(R.clippingPlanes,O),Go(S,V,O),ke.updateMultisampleRenderTarget(ge),ke.updateRenderTargetMipmap(ge),et.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let at=0,Bt=N.length;at<Bt;at++){let At=N[at],{object:Et,geometry:sn,material:Ce,group:fn}=At;if(Ce.side===Cn&&Et.layers.test(O.layers)){let _t=Ce.side;Ce.side=tn,Ce.needsUpdate=!0,cu(Et,V,O,sn,Ce,fn),Ce.side=_t,Ce.needsUpdate=!0,Re=!0}}Re===!0&&(ke.updateMultisampleRenderTarget(ge),ke.updateRenderTargetMipmap(ge))}R.setRenderTarget(de,Se,Ie),R.setClearColor(Y,xe),ot!==void 0&&(O.viewport=ot),R.toneMapping=Xe}function Go(S,N,V){let O=N.isScene===!0?N.overrideMaterial:null;for(let z=0,ge=S.length;z<ge;z++){let Ae=S[z],{object:de,geometry:Se,group:Ie}=Ae,Xe=Ae.material;Xe.allowOverride===!0&&O!==null&&(Xe=O),de.layers.test(V.layers)&&cu(de,N,V,Se,Xe,Ie)}}function cu(S,N,V,O,z,ge){F!==null&&z.isNodeMaterial&&F.setObject(S,z),S.onBeforeRender(R,N,V,O,z,ge),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(R,N,V,O,S,ge),z.transparent===!0&&z.side===Cn&&z.forceSinglePass===!1?(z.side=tn,z.needsUpdate=!0,R.renderBufferDirect(V,N,O,z,S,ge),z.side=Ji,z.needsUpdate=!0,R.renderBufferDirect(V,N,O,z,S,ge),z.side=Cn):R.renderBufferDirect(V,N,O,z,S,ge),S.onAfterRender(R,N,V,O,z,ge)}function hu(S){let N=0;for(let V of S)V.texture!==null&&N++;return N}function Tr(S,N,V){N.isScene!==!0&&(N=st);let O=Oe.get(S),z=T.state.lights,ge=T.state.shadowsArray,Ae=z.state.version,de=Q.getParameters(S,z.state,ge,N,V,T.state.lightProbeGridArray),Se=Q.getProgramCacheKey(de),Ie=O.programs;O.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,O.fog=N.fog;let Xe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;O.envMap=A.get(S.envMap||O.environment,Xe),O.envMapRotation=O.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ie===void 0&&(S.addEventListener("dispose",yt),Ie=new Map,O.programs=Ie,O.programVariants=new Map);let ot=Ie.get(Se);if(ot!==void 0){if(O.currentProgram===ot&&O.lightsStateVersion===Ae)return du(S,de),ot}else de.uniforms=Q.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,V,de),S.onBeforeCompile(de,R),ot=Q.acquireProgram(de,Se),Ie.set(Se,ot),O.uniforms=de.uniforms;let Re=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Re.clippingPlanes=J.uniform),du(S,de),O.needsLights=Sp(S),O.lightsStateVersion=Ae,O.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.sunLights.value=z.state.sun,Re.sunLightShadows.value=z.state.sunShadow,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.sunShadowMatrix.value=z.state.sunShadowMatrix,Re.sunShadowCascade.value=z.state.sunShadowCascade,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=hu(T.state.lightProbeGridArray),O.currentProgram=ot,O.uniformsList=null,ot}function yp(S,N,V,O,z){let ge=Oe.get(S),Ae=ge.currentProgram.id+","+O+","+z,de=ge.programVariants.get(Ae);return de===void 0?(de=Tr(S,N,V),ge.programVariants.set(Ae,de)):(ge.currentProgram=de,ge.uniformsList=null,ge.outputColorSpace=O,ge.toneMapping=z),de}function uu(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=dr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function du(S,N){let V=Oe.get(S);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function vp(S,N,V,O,z){N.isScene!==!0&&(N=st),ke.resetTextureUnits();let ge=N.fog,Ae=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?N.environment:null,de=ne===null?R.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:lt.workingColorSpace,Se=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ie=A.get(O.envMap||Ae,Se),Xe=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ot=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Re=!!V.morphAttributes.position,at=!!V.morphAttributes.normal,Bt=!!V.morphAttributes.color,At=ui;O.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(At=R.toneMapping);let Et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,sn=Et!==void 0?Et.length:0,Ce=Oe.get(O),fn=T.state.lights;if(oe===!0&&(Ee===!0||S!==j)){let Dt=S===j&&O.id===W;J.setState(O,S,Dt)}let _t=!1,as=!1;O.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==fn.state.version||z.isBatchedMesh&&Ce.batching===!1||!z.isBatchedMesh&&Ce.batching===!0||z.isBatchedMesh&&Ce.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Ce.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Ce.instancing===!1||!z.isInstancedMesh&&Ce.instancing===!0||z.isSkinnedMesh&&Ce.skinning===!1||!z.isSkinnedMesh&&Ce.skinning===!0||z.isInstancedMesh&&Ce.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ce.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ce.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ce.instancingMorph===!1&&z.morphTexture!==null||Ce.envMap!==Ie||O.fog===!0&&Ce.fog!==ge||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==J.numPlanes||Ce.numIntersection!==J.numIntersection)||Ce.vertexAlphas!==Xe||Ce.vertexTangents!==ot||Ce.morphTargets!==Re||Ce.morphNormals!==at||Ce.morphColors!==Bt||Ce.morphTargetsCount!==sn||Ce.numLightProbeGrids!==hu(T.state.lightProbeGridArray)?_t=!0:(Ce.outputColorSpace!==de||Ce.toneMapping!==At)&&(as=!0):(_t=!0,Ce.__version=O.version);let rn=Ce.currentProgram;(_t===!0||as===!0)&&(rn=as===!0?yp(O,N,z,de,At):Tr(O,N,z),F&&O.isNodeMaterial&&F.onUpdateProgram(O,rn,Ce));let ko=!1,Fi=!1,ls=!1,pt=rn.getUniforms(),en=Ce.uniforms;if(pe.useProgram(rn.program)&&(ko=!0,Fi=!0,ls=!0),O.id!==W&&(W=O.id,Fi=!0),ko||j!==S){pe.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pt.setValue(U,"projectionMatrix",S.projectionMatrix),pt.setValue(U,"viewMatrix",S.matrixWorldInverse);let Zt=pt.map.cameraPosition;Zt!==void 0&&Zt.setValue(U,Ze.setFromMatrixPosition(S.matrixWorld)),bt.logarithmicDepthBuffer&&pt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&pt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,Fi=!0,ls=!0)}if(Ce.needsLights&&(fn.state.sunShadowMap.length>0&&pt.setValue(U,"sunShadowMap",fn.state.sunShadowMap,ke),fn.state.directionalShadowMap.length>0&&pt.setValue(U,"directionalShadowMap",fn.state.directionalShadowMap,ke),fn.state.spotShadowMap.length>0&&pt.setValue(U,"spotShadowMap",fn.state.spotShadowMap,ke),fn.state.pointShadowMap.length>0&&pt.setValue(U,"pointShadowMap",fn.state.pointShadowMap,ke)),z.isSkinnedMesh){pt.setOptional(U,z,"bindMatrix"),pt.setOptional(U,z,"bindMatrixInverse");let Dt=z.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),pt.setValue(U,"boneTexture",Dt.boneTexture,ke))}z.isBatchedMesh&&(pt.setOptional(U,z,"batchingTexture"),pt.setValue(U,"batchingTexture",z._matricesTexture,ke),pt.setOptional(U,z,"batchingIdTexture"),pt.setValue(U,"batchingIdTexture",z._indirectTexture,ke),pt.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&pt.setValue(U,"batchingColorTexture",z._colorsTexture,ke));let $n=V.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&$.update(z,V,rn),(Fi||Ce.receiveShadow!==z.receiveShadow)&&(Ce.receiveShadow=z.receiveShadow,pt.setValue(U,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&N.environment!==null&&(en.envMapIntensity.value=N.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=Uy()),Fi){if(pt.setValue(U,"toneMappingExposure",R.toneMappingExposure),Ce.needsLights&&Mp(en,ls),ge&&O.fog===!0&&ae.refreshFogUniforms(en,ge),ae.refreshMaterialUniforms(en,O,ye,Ue,T.state.transmissionRenderTarget[S.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){let Dt=y,Zt=0;for(let _i of T.state.lightProbeGridArray)_i.texture!==null&&(Dt.textures[Zt]=_i.texture,Dt.min[Zt]=_i.boundingBox.min,Dt.max[Zt]=_i.boundingBox.max,Dt.resolution[Zt]=_i.resolution,Zt++);for(let _i in Dt)Dt[_i].length=Zt;en.probesSH.value=Dt.textures,en.probesMin.value=Dt.min,en.probesMax.value=Dt.max,en.probesResolution.value=Dt.resolution}dr.upload(U,uu(Ce),en,ke)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(dr.upload(U,uu(Ce),en,ke),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&pt.setValue(U,"center",z.center),pt.setValue(U,"modelViewMatrix",z.modelViewMatrix),pt.setValue(U,"normalMatrix",z.normalMatrix),pt.setValue(U,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){let Dt=O.uniformsGroups;for(let Zt=0,_i=Dt.length;Zt<_i;Zt++){let pu=Dt[Zt];Le.update(pu,rn),Le.bind(pu,rn)}}return rn}function Mp(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Sp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(S,N,V){let O=Oe.get(S);O.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Oe.get(S.texture).__webglTexture=N,Oe.get(S.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let V=Oe.get(S);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,V=0){ne=S,X=N,G=V;let O=null,z=!1,ge=!1;if(S){let de=Oe.get(S);if(de.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(U.FRAMEBUFFER,de.__webglFramebuffer),te.copy(S.viewport),Te.copy(S.scissor),Be=S.scissorTest,pe.viewport(te),pe.scissor(Te),pe.setScissorTest(Be),W=-1;return}else if(de.__webglFramebuffer===void 0)ke.setupRenderTarget(S);else if(de.__hasExternalTextures)ke.rebindTextures(S,Oe.get(S.texture).__webglTexture,Oe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Xe=S.depthTexture;if(de.__boundDepthTexture!==Xe){if(Xe!==null&&Oe.has(Xe)&&(S.width!==Xe.image.width||S.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(S)}}let Se=S.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ge=!0);let Ie=Oe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ie[N])?O=Ie[N][V]:O=Ie[N],z=!0):S.samples>0&&ke.useMultisampledRTT(S)===!1?O=Oe.get(S).__webglMultisampledFramebuffer:Array.isArray(Ie)?O=Ie[V]:O=Ie,te.copy(S.viewport),Te.copy(S.scissor),Be=S.scissorTest}else te.copy(ze).multiplyScalar(ye).floor(),Te.copy(Qe).multiplyScalar(ye).floor(),Be=it;if(V!==0&&(O=k),pe.bindFramebuffer(U.FRAMEBUFFER,O)&&pe.drawBuffers(S,O),pe.viewport(te),pe.scissor(Te),pe.setScissorTest(Be),z){let de=Oe.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,V)}else if(ge){let de=N;for(let Se=0;Se<S.textures.length;Se++){let Ie=Oe.get(S.textures[Se]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Se,Ie.__webglTexture,V,de)}}else if(S!==null&&V!==0){let de=Oe.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,de.__webglTexture,V)}W=-1};function fu(S){let N=Oe.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=bt.textureFormatReadable(S.format),N.__typeReadable=bt.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,V,O,z,ge,Ae,de=0){if(!(S&&S.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Oe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(Se=Se[Ae],Array.isArray(Se)&&(Se=Se[0])),Se){pe.bindFramebuffer(U.FRAMEBUFFER,Se);try{let Ie=S.textures[de],Xe=Ie.format,ot=Ie.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de);let Re=fu(Ie);if(Re.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-O&&V>=0&&V<=S.height-z&&U.readPixels(N,V,O,z,re.convert(Xe),re.convert(ot),ge)}finally{let Ie=ne!==null?Oe.get(ne).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(S,N,V,O,z,ge,Ae,de=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Oe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(Se=Se[Ae],Array.isArray(Se)&&(Se=Se[0])),Se)if(N>=0&&N<=S.width-O&&V>=0&&V<=S.height-z){pe.bindFramebuffer(U.FRAMEBUFFER,Se);let Ie=S.textures[de],Xe=Ie.format,ot=Ie.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de);let Re=fu(Ie);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.bufferData(U.PIXEL_PACK_BUFFER,ge.byteLength,U.STREAM_READ),U.readPixels(N,V,O,z,re.convert(Xe),re.convert(ot),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Bt=ne!==null?Oe.get(ne).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Bt);let At=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Id(U,At,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ge),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(at),U.deleteSync(At),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,V=0){let O=Math.pow(2,-V),z=Math.floor(S.image.width*O),ge=Math.floor(S.image.height*O),Ae=N!==null?N.x:0,de=N!==null?N.y:0;ke.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,Ae,de,z,ge),pe.unbindTexture()},this.copyTextureToTexture=function(S,N,V=null,O=null,z=0,ge=0){let Ae,de,Se,Ie,Xe,ot,Re,at,Bt,At=S.isCompressedTexture?S.mipmaps[ge]:S.image;if(V!==null)Ae=V.max.x-V.min.x,de=V.max.y-V.min.y,Se=V.isBox3?V.max.z-V.min.z:1,Ie=V.min.x,Xe=V.min.y,ot=V.isBox3?V.min.z:0;else{let pt=Math.pow(2,-z);Ae=Math.floor(At.width*pt),de=Math.floor(At.height*pt),S.isDataArrayTexture?Se=At.depth:S.isData3DTexture?Se=Math.floor(At.depth*pt):Se=1,Ie=0,Xe=0,ot=0}O!==null?(Re=O.x,at=O.y,Bt=O.z):(Re=0,at=0,Bt=0);let Et=re.convert(N.format),sn=re.convert(N.type),Ce;N.isData3DTexture?(ke.setTexture3D(N,0),Ce=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ke.setTexture2DArray(N,0),Ce=U.TEXTURE_2D_ARRAY):(ke.setTexture2D(N,0),Ce=U.TEXTURE_2D),pe.activeTexture(U.TEXTURE0),pe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),pe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),pe.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let fn=pe.getParameter(U.UNPACK_ROW_LENGTH),_t=pe.getParameter(U.UNPACK_IMAGE_HEIGHT),as=pe.getParameter(U.UNPACK_SKIP_PIXELS),rn=pe.getParameter(U.UNPACK_SKIP_ROWS),ko=pe.getParameter(U.UNPACK_SKIP_IMAGES);pe.pixelStorei(U.UNPACK_ROW_LENGTH,At.width),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,At.height),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,Ie),pe.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,ot);let Fi=S.isDataArrayTexture||S.isData3DTexture,ls=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let pt=Oe.get(S),en=Oe.get(N),$n=Oe.get(pt.__renderTarget),Dt=Oe.get(en.__renderTarget);pe.bindFramebuffer(U.READ_FRAMEBUFFER,$n.__webglFramebuffer),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Zt=0;Zt<Se;Zt++)Fi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Oe.get(S).__webglTexture,z,ot+Zt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Oe.get(N).__webglTexture,ge,Bt+Zt)),U.blitFramebuffer(Ie,Xe,Ie+Ae,Xe+de,Re,at,Re+Ae,at+de,U.DEPTH_BUFFER_BIT,U.NEAREST);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||Oe.has(S)){let pt=Oe.get(S),en=Oe.get(N);pe.bindFramebuffer(U.READ_FRAMEBUFFER,L),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let $n=0;$n<Se;$n++)Fi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,pt.__webglTexture,z,ot+$n):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pt.__webglTexture,z),ls?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,en.__webglTexture,ge,Bt+$n):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,en.__webglTexture,ge),z!==0?U.blitFramebuffer(Ie,Xe,Ie+Ae,Xe+de,Re,at,Re+Ae,at+de,U.COLOR_BUFFER_BIT,U.NEAREST):ls?U.copyTexSubImage3D(Ce,ge,Re,at,Bt+$n,Ie,Xe,Ae,de):U.copyTexSubImage2D(Ce,ge,Re,at,Ie,Xe,Ae,de);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ls?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Ce,ge,Re,at,Bt,Ae,de,Se,Et,sn,At.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Ce,ge,Re,at,Bt,Ae,de,Se,Et,At.data):U.texSubImage3D(Ce,ge,Re,at,Bt,Ae,de,Se,Et,sn,At):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ge,Re,at,Ae,de,Et,sn,At.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ge,Re,at,At.width,At.height,Et,At.data):U.texSubImage2D(U.TEXTURE_2D,ge,Re,at,Ae,de,Et,sn,At);pe.pixelStorei(U.UNPACK_ROW_LENGTH,fn),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,as),pe.pixelStorei(U.UNPACK_SKIP_ROWS,rn),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,ko),ge===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&U.generateMipmap(Ce),pe.unbindTexture()},this.initRenderTarget=function(S){Oe.get(S).__webglFramebuffer===void 0&&ke.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ke.setTextureCube(S,0):S.isData3DTexture?ke.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ke.setTexture2DArray(S,0):ke.setTexture2D(S,0),pe.unbindTexture()},this.resetState=function(){X=0,G=0,ne=null,pe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var mr=class n extends Mt{constructor(){let e=n.SkyShader,t=new Hn({name:e.name,uniforms:Ol.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:tn,depthWrite:!1});super(new ht(1,1,1),t),this.isSky=!0}};mr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new C},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};function Ci(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new kt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let f=n[h],u=0,d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in f.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in f.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[m].length!==n[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(f.morphAttributes[m]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=vf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let M=0;M<o[h].length;++M)d.push(o[h][M][u]);let m=vf(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function vf(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new ln(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<t;m++){let M=h.getComponent(u,m);a.setComponent(u+f,m,M)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Jh="3.0.0",Ff="streetrush_city_v1",Ye=n=>document.getElementById(n),Oy={cash:0,coins:[],owned:["sedan"],deliveries:0,races:0,bestRace:0,muted:!1,tut:!1,pos:null,car:"sedan",quality:"auto"};function By(){let n=JSON.parse(JSON.stringify(Oy));try{let e=JSON.parse(localStorage.getItem(Ff)||"null");e&&typeof e=="object"&&Object.assign(n,e),Array.isArray(n.coins)||(n.coins=[]),(!Array.isArray(n.owned)||!n.owned.length)&&(n.owned=["sedan"]),["auto","high","medium","low"].includes(n.quality)||(n.quality="auto")}catch{}return n}var be=By(),K=null;function Zn(){try{if(K&&K.pos){let n=K.car?K.car.pos:K.pos;be.pos={x:+n.x.toFixed(1),z:+n.z.toFixed(1)}}localStorage.setItem(Ff,JSON.stringify(be))}catch{}}function Jn(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var ut=Jn(20261116),wt=Math.random,ri=(n,e,t)=>Math.max(e,Math.min(t,n)),mi=(n,e,t)=>n+(e-n)*t;function Jl(n,e,t){let i=e-n;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return n+i*t}var nn=(n,e=wt)=>n[e()*n.length|0],Ft=40,St=12,Wn=Ft+St,ft=8,yn=ft*Wn/2,Qi=yn+34,Ne=n=>-yn+n*Wn,As=(n,e)=>new C(Ne(n),0,Ne(e)),Ht=.18;function Ni(n,e){let t=n+yn,i=e+yn,s=Math.floor(t/Wn),r=Math.floor(i/Wn);if(s<0||r<0||s>=ft||r>=ft)return 0;let o=t-s*Wn,a=i-r*Wn;return o>St/2&&o<Wn-St/2&&a>St/2&&a<Wn-St/2?Ht:0}var jt=new Hl({antialias:!0,powerPreference:"high-performance"});jt.domElement.id="c";jt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6));jt.setSize(window.innerWidth,window.innerHeight);jt.toneMapping=yo;jt.toneMappingExposure=.82;jt.shadowMap.enabled=!0;jt.shadowMap.type=gs;document.body.prepend(jt.domElement);var Rt=new nr,zy=12899298;Rt.fog=new Vr(zy,90,360);var Pn=new mn(60,window.innerWidth/window.innerHeight,.1,5e3),Of=new C().setFromSphericalCoords(1,Ao.degToRad(52),Ao.degToRad(215)),$h=new mr;$h.scale.setScalar(4500);var Cs=$h.material.uniforms;Cs.turbidity.value=3.5;Cs.rayleigh.value=1.4;Cs.mieCoefficient.value=.004;Cs.mieDirectionalG.value=.82;Cs.sunPosition.value.copy(Of);Rt.add($h);{let n=new fr(jt),e=new nr,t=new mr;t.scale.setScalar(1e3);for(let s of Object.keys(Cs))t.material.uniforms[s]&&(t.material.uniforms[s].value=Cs[s].value);e.add(t);let i=new Mt(new Qr(900,16),new hi({color:5921368}));i.rotation.x=-Math.PI/2,i.position.y=-5,e.add(i),Rt.environment=n.fromScene(e,.02).texture,Rt.environmentIntensity=.42}Rt.add(new fo(14674687,7035723,.25));var Yn=new go(16772300,3.4);Yn.castShadow=!0;var Vl=55;Yn.shadow.mapSize.set(2048,2048);Object.assign(Yn.shadow.camera,{left:-Vl,right:Vl,top:Vl,bottom:-Vl,near:1,far:320});Yn.shadow.bias=-4e-4;Yn.shadow.normalBias=.05;Rt.add(Yn);Rt.add(Yn.target);var Dh=Of.clone().multiplyScalar(150),Hy=Math.min(8,jt.capabilities.getMaxAnisotropy());function ss(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new Jr(s);return r.colorSpace=pn,i&&(r.wrapS=r.wrapT=Js),r.anisotropy=Hy,r}function Ho(n,e,t,i,s,r,o,a=2){n.fillStyle=i,n.fillRect(0,0,e,t);for(let l=0;l<r;l++){let c=(o()-.5)*s;n.fillStyle=c>0?`rgba(255,255,255,${c})`:`rgba(0,0,0,${-c})`,n.fillRect(o()*e,o()*t,a,a)}}function Bf(n,e,t,i,s,r,o,a){n.fillStyle=o,n.fillRect(e-3,t-3,i+6,s+6);let l=n.createLinearGradient(e,t,e+i*.6,t+s);a?(l.addColorStop(0,"#ffe7b0"),l.addColorStop(1,"#f2c27a")):(l.addColorStop(0,"#9fb6cc"),l.addColorStop(.45,"#4f6378"),l.addColorStop(1,"#2c3a4a")),n.fillStyle=l,n.fillRect(e,t,i,s),!a&&r()<.35&&(n.fillStyle="rgba(230,225,210,0.75)",n.fillRect(e,t,i,s*(.25+r()*.4))),n.fillStyle=o,n.fillRect(e+i/2-1.5,t,3,s),n.fillRect(e,t+s*.42,i,3),n.fillStyle="rgba(255,255,255,0.18)",n.fillRect(e,t,i,2)}var Gy=ss(512,512,n=>{let e=Jn(11);n.fillStyle="#a4a4a4",n.fillRect(0,0,512,512);for(let t=0;t<512;t+=6)for(let i=t/6%2*6;i<512;i+=12){let s=200+(e()-.5)*50|0;n.fillStyle=`rgb(${s},${s*.98|0},${s*.96|0})`,n.fillRect(i,t,11,5)}for(let t=0;t<8;t++)for(let i=0;i<8;i++){let s=i*64+16,r=t*64+12;Bf(n,s,r,32,38,e,"#ece6da",e()<.12),n.fillStyle="#d8d2c4",n.fillRect(s-5,r+41,42,5)}},!0),ky=ss(512,512,n=>{let e=Jn(12);Ho(n,512,512,"#e9e6e0",.08,5e3,e);for(let t=0;t<8;t++)n.fillStyle="rgba(0,0,0,0.07)",n.fillRect(0,t*64+60,512,4);for(let t=0;t<8;t++)for(let i=0;i<8;i++){let s=i*64+10,r=t*64+14;n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(s-2,r-2,48,40),Bf(n,s,r,44,36,e,"#5a5f66",e()<.12)}},!0),Vy=ss(512,512,n=>{let e=Jn(13),t=n.createLinearGradient(0,0,512,512);t.addColorStop(0,"#c7d9e8"),t.addColorStop(.5,"#8aa7c0"),t.addColorStop(1,"#b8cde0"),n.fillStyle=t,n.fillRect(0,0,512,512);for(let i=0;i<8;i++)for(let s=0;s<16;s++){let r=(e()-.5)*.18;n.fillStyle=r>0?`rgba(255,255,255,${r})`:`rgba(0,20,40,${-r})`,n.fillRect(s*32,i*64,32,64),e()<.06&&(n.fillStyle="rgba(255,230,170,0.35)",n.fillRect(s*32+2,i*64+4,28,54))}n.fillStyle="#3d4650";for(let i=0;i<=512;i+=32)n.fillRect(i-1.5,0,3,512);for(let i=0;i<=512;i+=64)n.fillRect(0,i-3,512,6)},!0),Wy=ss(512,128,n=>{let e=Jn(14);n.fillStyle="#3a3836",n.fillRect(0,0,512,128);let t=["#c0392b","#1f6f8b","#2d6a4f","#8e44ad","#d35400","#34495e","#b7950b"];for(let i=0;i<4;i++){let s=i*128;n.fillStyle=nn(t,e),n.fillRect(s+4,6,120,22),n.fillStyle="rgba(255,255,255,0.85)";for(let o=0;o<6;o++)n.fillRect(s+14+o*17,13,11,8);let r=n.createLinearGradient(s,34,s,124);r.addColorStop(0,"#a9c1d4"),r.addColorStop(1,"#3f4c58"),n.fillStyle=r,n.fillRect(s+8,34,70,88),n.fillStyle="rgba(255,240,200,0.35)",n.fillRect(s+12,70,62,50),n.fillStyle="#222",n.fillRect(s+84,38,36,86),n.fillStyle="#7c95a8",n.fillRect(s+88,42,28,50),n.fillStyle="#555",n.fillRect(s+8,76,70,3),n.fillRect(s+42,34,3,88)}},!0),Xy=ss(256,1024,n=>{let e=Jn(5);Ho(n,256,1024,"#3f4045",.14,22e3,e,2),n.fillStyle="rgba(0,0,0,0.12)",n.fillRect(52,0,30,1024),n.fillRect(174,0,30,1024);for(let t=0;t<18;t++){n.strokeStyle="rgba(20,20,22,0.5)",n.lineWidth=1.2,n.beginPath();let i=e()*256,s=e()*1024;n.moveTo(i,s);for(let r=0;r<6;r++)i+=(e()-.5)*30,s+=e()*25,n.lineTo(i,s);n.stroke()}n.fillStyle="#e6b531",n.fillRect(122,0,5,1024),n.fillRect(131,0,5,1024),n.fillStyle="#e8e8e8",n.fillRect(8,0,5,1024),n.fillRect(243,0,5,1024)},!0),qy=ss(256,256,n=>{let e=Jn(6);Ho(n,256,256,"#b4aea5",.1,6e3,e),n.fillStyle="rgba(80,70,60,0.35)";for(let t=0;t<=256;t+=64)n.fillRect(t-1,0,2,256),n.fillRect(0,t-1,256,2)},!0),zf=ss(256,256,n=>Ho(n,256,256,"#5e8a3f",.22,14e3,Jn(7),2),!0),Yy=new vt({map:Gy,vertexColors:!0,roughness:.88}),Zy=new vt({map:ky,vertexColors:!0,roughness:.8}),Jy=new vt({map:Vy,vertexColors:!0,roughness:.08,metalness:.75}),$y=new vt({map:Wy,roughness:.55,metalness:.1}),Mf=new vt({vertexColors:!0,roughness:.9}),Ky=new vt({map:qy,vertexColors:!0,roughness:.92}),Qy=new vt({map:zf,vertexColors:!0,roughness:1});function rs(){return{pos:[],nor:[],uv:[],col:[]}}var ji=new Ve;function Mn(n,e,t,i,s,r,o,a,l,c,h=0){let f=new ht(r,o,a).toNonIndexed();f.translate(t,i+o/2,s);let u=f.attributes.position.array,d=f.attributes.normal.array,m=f.attributes.uv.array;ji.set(l);for(let M=0;M<6;M++){let g=d[M*18+1],p=Math.abs(g)>.5||!n?e:n;if(p)for(let x=0;x<6;x++){let E=M*6+x;p.pos.push(u[E*3],u[E*3+1],u[E*3+2]),p.nor.push(d[E*3],d[E*3+1],d[E*3+2]);let y=m[E*2],w=m[E*2+1];if(p===n&&c){let T=Math.abs(d[E*3])>.5?a:r;y*=T/c,w=w*o/c+h}p.uv.push(y,w),p.col.push(ji.r,ji.g,ji.b)}}f.dispose()}function pi(n,e,t,i){let s=e.index?e.toNonIndexed():e,r=s.attributes.position.array,o=s.attributes.normal.array,a=s.attributes.uv?s.attributes.uv.array:null;ji.set(t);for(let l=0;l<r.length/3;l++)n.pos.push(r[l*3],r[l*3+1],r[l*3+2]),n.nor.push(o[l*3],o[l*3+1],o[l*3+2]),i?n.uv.push(r[l*3]/i,r[l*3+2]/i):n.uv.push(a?a[l*2]:0,a?a[l*2+1]:0),n.col.push(ji.r,ji.g,ji.b)}function jy(n,e,t=!0){let i=new kt;i.setAttribute("position",new nt(n.pos,3)),i.setAttribute("normal",new nt(n.nor,3)),i.setAttribute("uv",new nt(n.uv,2)),i.setAttribute("color",new nt(n.col,3)),i.computeBoundingSphere(),i.computeBoundingBox();let s=new Mt(i,e);return s.castShadow=t,s.receiveShadow=!0,s}function Tt(n,e){n=n.index?n.toNonIndexed():n;let t=new Ve(e),i=new Float32Array(n.attributes.position.count*3);for(let s=0;s<i.length;s+=3)i[s]=t.r,i[s+1]=t.g,i[s+2]=t.b;n.setAttribute("color",new ln(i,3)),n.attributes.uv||n.setAttribute("uv",new ln(new Float32Array(n.attributes.position.count*2),2));for(let s of Object.keys(n.attributes))["position","normal","uv","color"].includes(s)||n.deleteAttribute(s);return n}var es=26,Xl=new Map;function vr(n,e,t,i,s){let r={minX:n,maxX:e,minZ:t,maxZ:i,h:s};for(let o=Math.floor(n/es);o<=Math.floor(e/es);o++)for(let a=Math.floor(t/es);a<=Math.floor(i/es);a++){let l=o+","+a;Xl.has(l)||Xl.set(l,[]),Xl.get(l).push(r)}return r}var Nh=[];function ev(n,e,t){Nh.length=0;for(let i=Math.floor((n-t)/es);i<=Math.floor((n+t)/es);i++)for(let s=Math.floor((e-t)/es);s<=Math.floor((e+t)/es);s++){let r=Xl.get(i+","+s);if(r)for(let o of r)Nh.push(o)}return Nh}function gi(n,e,t){let i=!1;for(let s of ev(n.x,n.z,e+1)){if(t!==void 0&&t>s.h)continue;let r=ri(n.x,s.minX,s.maxX),o=ri(n.z,s.minZ,s.maxZ),a=n.x-r,l=n.z-o,c=a*a+l*l;if(c<e*e){if(c>1e-6){let h=Math.sqrt(c);n.x+=a/h*(e-h),n.z+=l/h*(e-h)}else{let h=n.x-s.minX,f=s.maxX-n.x,u=n.z-s.minZ,d=s.maxZ-n.z,m=Math.min(h,f,u,d);m===h?n.x=s.minX-e:m===f?n.x=s.maxX+e:m===u?n.z=s.minZ-e:n.z=s.maxZ+e}i=!0}}return Math.abs(n.x)>Qi&&(n.x=Math.sign(n.x)*Qi,i=!0),Math.abs(n.z)>Qi&&(n.z=Math.sign(n.z)*Qi,i=!0),i}var Hf=rs(),Gf=rs(),kf=rs(),Vf=rs(),Xt=rs(),ql=rs(),Wf=rs(),Xf=rs(),Uo=[],Mr=[],xr=[],Ts={bench:[],bin:[],hydrant:[]},tv=["#ffffff","#e8d2c4","#f2c9b0","#d9b8a8","#f0e0d0"],nv=["#ffffff","#f3e3c8","#e3ecf2","#f1d8cf","#e2e8d6","#efe2f0","#d8d2c8"],iv=["#ffffff","#cfe6ff","#d8f2ec","#e8e8f2","#c8dcf0"],sv=["#9b2c2c","#2d6a4f","#264653","#c76b3a","#5b3f8c","#1f4e79"];{let n=zf.clone();n.needsUpdate=!0,n.repeat.set(160,160);let e=new Mt(new un(1600,1600),new vt({map:n,roughness:1}));e.rotation.x=-Math.PI/2,e.position.y=-.02,e.receiveShadow=!0,Rt.add(e)}{let n=ft*Wn+St,e=Xy.clone();e.needsUpdate=!0,e.repeat.set(1,n/48);let t=new vt({map:e,roughness:.92});for(let g=0;g<=ft;g++){let p=new Mt(new un(St,n),t);p.rotation.x=-Math.PI/2,p.position.set(Ne(g),0,0),p.receiveShadow=!0,Rt.add(p);let x=new Mt(new un(St,n),t);x.rotation.x=-Math.PI/2,x.rotation.z=Math.PI/2,x.position.set(0,.006,Ne(g)),x.receiveShadow=!0,Rt.add(x)}let i=ss(64,64,g=>Ho(g,64,64,"#404146",.14,900,Jn(9),2),!0),s=new vt({map:i,roughness:.92}),r=new vt({color:15329769,roughness:.7}),o=new cn(new un(St,St),s,(ft+1)*(ft+1)),a=0,l=new cn(new un(.7,3.2),r,(ft+1)*(ft+1)*4*6),c=0,h=new cn(new un(St/2-.4,.45),r,(ft+1)*(ft+1)*4),f=0,u=new dt,d=new _n,m=new ti,M=new C(1,1,1);for(let g=0;g<=ft;g++)for(let p=0;p<=ft;p++){m.set(-Math.PI/2,0,0),d.setFromEuler(m),u.compose(new C(Ne(g),.012,Ne(p)),d,M),o.setMatrixAt(a++,u);for(let x=0;x<4;x++){let E=x<2,y=x%2?1:-1;for(let P=0;P<6;P++){let R=-5+P*2,D,F,k;E?(D=Ne(g)+R,F=Ne(p)+y*(St/2+1.9),k=0):(D=Ne(g)+y*(St/2+1.9),F=Ne(p)+R,k=Math.PI/2),m.set(-Math.PI/2,0,k),d.setFromEuler(m),u.compose(new C(D,.016,F),d,M),l.setMatrixAt(c++,u)}let w,T,_,b=St/4+.2;x===0&&(w=Ne(g)-b,T=Ne(p)-(St/2+3.9),_=0),x===1&&(w=Ne(g)+b,T=Ne(p)+(St/2+3.9),_=0),x===2&&(w=Ne(g)-(St/2+3.9),T=Ne(p)+b,_=Math.PI/2),x===3&&(w=Ne(g)+(St/2+3.9),T=Ne(p)-b,_=Math.PI/2),m.set(-Math.PI/2,0,_),d.setFromEuler(m),u.compose(new C(w,.016,T),d,M),h.setMatrixAt(f++,u)}}o.receiveShadow=l.receiveShadow=h.receiveShadow=!0,Rt.add(o,l,h)}for(let n=0;n<ft;n++)for(let e=0;e<ft;e++){let t=Ne(n)+St/2,i=Ne(e)+St/2,s=t+Ft/2,r=i+Ft/2;Mn(Wf,null,s,0,r,Ft,Ht,Ft,"#a9a49c"),pi(ql,new un(Ft,Ft).rotateX(-Math.PI/2).translate(s,Ht+.001,r),"#ffffff",3);let o=Math.max(Math.abs(s),Math.abs(r))/yn,a=ut()<.13&&o>.2||n===3&&e===4;Mr.push({i:n,j:e,cx:s,cz:r,park:a});for(let f=0;f<4;f++)for(let u=-1;u<=1;u+=2){let d=u*(6+ut()*8),m=Ft/2-.9,M=[[s+d,r-m,0],[s+d,r+m,Math.PI],[s-m,r+d,Math.PI/2],[s+m,r+d,-Math.PI/2]],[g,p,x]=M[f],E=ut();E<.32?xr.push([g,p,.75+ut()*.35]):E<.45?Ts.bench.push([g,p,x+Math.PI]):E<.58?Ts.bin.push([g,p,x]):E<.64&&Ts.hydrant.push([g,p,x])}if(a){Uo.push({cx:s,cz:r}),pi(Xf,new un(Ft-6,Ft-6).rotateX(-Math.PI/2).translate(s,Ht+.01,r),"#ffffff",6),pi(ql,new un(3,Ft-6).rotateX(-Math.PI/2).translate(s,Ht+.02,r),"#e8dcc0",3),pi(ql,new un(Ft-6,3).rotateX(-Math.PI/2).translate(s,Ht+.021,r),"#e8dcc0",3),pi(Xt,new Lt(3,3.2,.7,28).translate(s,Ht+.35,r),"#cfcbc4"),pi(Xt,new Lt(2.6,2.6,.05,28).translate(s,Ht+.66,r),"#3f86b8"),pi(Xt,new Lt(.35,.5,1.8,12).translate(s,Ht+.9,r),"#cfcbc4"),vr(s-3,s+3,r-3,r+3,.9);for(let f=0;f<14;f++){let u=s+(ut()-.5)*(Ft-10),d=r+(ut()-.5)*(Ft-10);Math.abs(u-s)<4.5||Math.abs(d-r)<4.5||xr.push([u,d,.9+ut()*.6])}for(let[f,u,d]of[[s+5,r+2.2,Math.PI],[s-5,r-2.2,0],[s+2.2,r-5,Math.PI/2],[s-2.2,r+5,-Math.PI/2]])Ts.bench.push([f,u,d]);continue}let l=9+75*Math.pow(1-o,1.7),c=Ft-6.5,h=(f,u,d,m,M)=>{let g=M>34?ut()<.75?2:1:ut()<.5?0:1,p=g===0?Hf:g===1?Gf:kf,x=nn(g===0?tv:g===1?nv:iv,ut),E=g===2?0:4.2;g!==2&&Mn(Vf,null,f,Ht,u,d+.08,4.2,m+.08,"#ffffff",24),Mn(p,Xt,f,Ht+E,u,d,M-E,m,x,24,0),g===2&&Mn(Xt,null,f,Ht,u,d+.4,.6,m+.4,"#3d4248");let y=Ht+M,w=g===2?"#5d6670":"#8a857c";Mn(null,Xt,f,y-.5,u,d+.5,.35,m+.5,w);for(let[T,_,b,P]of[[0,m/2-.15,d,.3],[0,-m/2+.15,d,.3],[d/2-.15,0,.3,m],[-d/2+.15,0,.3,m]])Mn(null,Xt,f+T,y,u+_,b,.9,P,w);if(Mn(null,Xt,f,y-.02,u,d-.6,.06,m-.6,"#77746e"),ut()<.7&&Mn(null,Xt,f+(ut()-.5)*d*.4,y,u+(ut()-.5)*m*.4,2.6,1.5,2,"#9a9ba0"),ut()<.35&&M<40){let T=f+(ut()-.5)*d*.4,_=u+(ut()-.5)*m*.4;pi(Xt,new Lt(1.2,1.2,2.2,14).translate(T,y+2.4,_),"#8b5a3c"),pi(Xt,new sr(1.35,.8,14).translate(T,y+3.9,_),"#5e3c28");for(let[b,P]of[[-.8,-.8],[.8,.8],[-.8,.8],[.8,-.8]])Mn(null,Xt,T+b,y,_+P,.15,1.3,.15,"#444")}if(g===2&&M>50&&(Mn(null,Xt,f,y,u,d*.5,4,m*.5,"#4b535c"),pi(Xt,new Lt(.08,.12,9,6).translate(f,y+8.5,u),"#cccccc")),g!==2&&ut()<.75){let T=nn(sv,ut),_=Ht+3.1;Mn(null,Xt,f,_,u+m/2+.7,d*.8,.12,1.4,T),Mn(null,Xt,f,_-.35,u+m/2+1.38,d*.8,.35,.04,T),Mn(null,Xt,f,_,u-m/2-.7,d*.8,.12,1.4,T),Mn(null,Xt,f,_-.35,u-m/2-1.38,d*.8,.35,.04,T)}vr(f-d/2,f+d/2,u-m/2,u+m/2,M)};if(ut()<.24){let f=26+ut()*4,u=26+ut()*4;h(s,r,f,u,14+ut()*l*1.25)}else{let f=c/2;for(let u=0;u<2;u++)for(let d=0;d<2;d++){let m=s-c/2+f*(u+.5),M=r-c/2+f*(d+.5);h(m,M,11+ut()*(f-12),11+ut()*(f-12),7+Math.pow(ut(),1.4)*l)}}}var qf=[];for(let[n,e,t]of[[Hf,Yy,!0],[Gf,Zy,!0],[kf,Jy,!0],[Vf,$y,!1],[Xt,Mf,!0],[Wf,Mf,!1],[ql,Ky,!1],[Xf,Qy,!1]]){if(!n.pos.length)continue;let i=jy(n,e,t);Rt.add(i),qf.push(i)}var rv=qf.slice(0,3);for(let n=0;n<160;n++){let e=n%4,t=(ut()-.5)*2*(Qi+10),i=Qi+6+ut()*50,s=e===0?[t,-i]:e===1?[t,i]:e===2?[-i,t]:[i,t];xr.push([s[0],s[1],1.1+ut()*.8])}{let n=new Lt(.16,.26,3,7);n.translate(0,1.5,0);let t=Ci([[0,3.6,0,1.55],[.75,3.1,.3,1.1],[-.6,3.2,-.45,1.15],[.1,4.4,-.2,1.05]].map(([h,f,u,d])=>new lo(d,1).translate(h,f,u))),i=new cn(n,new vt({color:5980976,roughness:1}),xr.length),s=new cn(t,new vt({color:16777215,roughness:.95,flatShading:!0}),xr.length),r=new dt,o=new Ve,a=new _n,l=new C,c=new C(0,1,0);xr.forEach(([h,f,u],d)=>{a.setFromAxisAngle(c,ut()*6.28),l.set(u,u*(.9+ut()*.25),u),r.compose(new C(h,Ni(h,f),f),a,l),i.setMatrixAt(d,r),s.setMatrixAt(d,r),o.setHSL(.24+ut()*.07,.42+ut()*.15,.26+ut()*.1),s.setColorAt(d,o),vr(h-.3*u,h+.3*u,f-.3*u,f+.3*u,6)}),i.castShadow=s.castShadow=!0,s.receiveShadow=!0,Rt.add(i,s)}function Uh(n,e,t,i){if(!n.length)return;let s=new cn(e,t,n.length),r=new dt,o=new _n,a=new C(1,1,1),l=new C(0,1,0);n.forEach(([c,h,f],u)=>{o.setFromAxisAngle(l,f),r.compose(new C(c,Ni(c,h),h),o,a),s.setMatrixAt(u,r),i&&vr(c-i,c+i,h-i,h+i,1)}),s.castShadow=!0,s.receiveShadow=!0,Rt.add(s)}{let i=Ci([Tt(new ht(1.8,.07,.45).translate(0,.45,0),9067062),Tt(new ht(1.8,.4,.06).translate(0,.75,-.22),9067062),Tt(new ht(.07,.45,.45).translate(-.8,.22,0),3093047),Tt(new ht(.07,.45,.45).translate(.8,.22,0),3093047)]);Uh(Ts.bench,i,new vt({vertexColors:!0,roughness:.8}),.6),Uh(Ts.bin,new Lt(.28,.24,.9,12).translate(0,.45,0),new vt({color:2902586,roughness:.6,metalness:.4}),.3);let s=Ci([Tt(new Lt(.14,.17,.6,10).translate(0,.3,0),12592685),Tt(new An(.15,10,6).translate(0,.62,0),12592685),Tt(new Lt(.06,.06,.42,6).rotateZ(Math.PI/2).translate(0,.4,0),12592685)]);Uh(Ts.hydrant,s,new vt({vertexColors:!0,roughness:.5}),.2)}var Yf=[],bs=null;{let n=[];for(let p of Mr){let x=Ft/2-.7;n.push([p.cx-x,p.cz+5,-Math.PI/2],[p.cx+x,p.cz-5,Math.PI/2],[p.cx+5,p.cz-x,Math.PI],[p.cx-5,p.cz+x,0])}let e=Ci([new Lt(.08,.13,7,8).translate(0,3.5,0),new ht(.08,.08,1.6).translate(0,6.9,.75)]),t=new ht(.35,.14,.7).translate(0,6.85,1.45),i=new cn(e,new vt({color:3816770,metalness:.6,roughness:.45}),n.length),s=new cn(t,new vt({color:16777215,emissive:16773832,emissiveIntensity:.5}),n.length),r=new dt,o=new _n,a=new C(1,1,1),l=new C(0,1,0);n.forEach(([p,x,E],y)=>{o.setFromAxisAngle(l,E),r.compose(new C(p,Ht,x),o,a),i.setMatrixAt(y,r),s.setMatrixAt(y,r),vr(p-.15,p+.15,x-.15,x+.15,7)}),i.castShadow=!0,Rt.add(i,s);let c=Ci([new Lt(.09,.12,5.4,8).translate(0,2.7,0),new Lt(.06,.06,3.6,6).rotateX(Math.PI/2).translate(0,5.3,1.8)]),h=new ht(.42,1.2,.32).translate(0,4.75,3.3),f=new An(.15,10,8).translate(.22,4.75,3.3),u=(ft+1)*(ft+1)*2,d=new cn(c,new vt({color:2829875,metalness:.5,roughness:.5}),u),m=new cn(h,new vt({color:1776928,roughness:.6}),u);bs=new cn(f,new hi({color:16777215,toneMapped:!1}),u);let M=0,g=new Ve(3211104);for(let p=0;p<=ft;p++)for(let x=0;x<=ft;x++){let E=St/2+.6,y=[[Ne(p)-E,Ne(x)-E,Math.PI/2,1],[Ne(p)+E,Ne(x)+E,-Math.PI/2,1],[Ne(p)+E,Ne(x)-E,0,0],[Ne(p)-E,Ne(x)+E,Math.PI,0]];for(let[w,T,_,b]of[y[0],y[1],y[2],y[3]].filter((P,R)=>R%2===(p+x)%2))o.setFromAxisAngle(l,_),r.compose(new C(w,Ht,T),o,a),d.setMatrixAt(M,r),m.setMatrixAt(M,r),bs.setMatrixAt(M,r),bs.setColorAt(M,g),Yf.push({i:p,j:x,axis:b,k:M}),vr(w-.15,w+.15,T-.15,T+.15,6),M++}d.count=m.count=bs.count=M,d.castShadow=m.castShadow=!0,Rt.add(d,m,bs)}var Zf=(n,e)=>(n*3+e*5)%7*1.7;function Jf(n,e,t){return Math.floor((t+Zf(n,e))/10)%2}function $f(n,e,t){return(t+Zf(n,e))%10>8.4}var Sf=-1,ov=new Ve(2883434),av=new Ve(16724016),lv=new Ve(16760832);function bf(n){let e=Math.floor(n*2);if(e!==Sf){Sf=e;for(let t of Yf)bs.setColorAt(t.k,Jf(t.i,t.j,n)===t.axis?$f(t.i,t.j,n)?lv:ov:av);bs.instanceColor.needsUpdate=!0}}var Kf=56,cv=[["pelvis",()=>new hn(.12,.16,4,10).rotateZ(Math.PI/2).scale(1,1,.78),"pants"],["torso",()=>new hn(.165,.27,6,12).scale(1.08,1,.66),"top"],["neck",()=>new Lt(.05,.055,.12,8),"skin"],["head",()=>new An(.118,16,12).scale(.92,1.1,1),"skin"],["hair",()=>new An(.127,16,8,0,Math.PI*2,0,Math.PI*.55).scale(.95,1.1,1.05),"hair"],["nose",()=>new An(.022,6,4),"skin"],["eyeL",()=>new An(.017,6,4),"eye"],["eyeR",()=>new An(.017,6,4),"eye"],["uArmL",()=>new hn(.052,.2,4,8),"top"],["uArmR",()=>new hn(.052,.2,4,8),"top"],["fArmL",()=>new hn(.044,.18,4,8),"sleeve"],["fArmR",()=>new hn(.044,.18,4,8),"sleeve"],["handL",()=>new An(.048,8,6).scale(.75,1.15,.55),"skin"],["handR",()=>new An(.048,8,6).scale(.75,1.15,.55),"skin"],["thighL",()=>new hn(.075,.28,4,8),"pants"],["thighR",()=>new hn(.075,.28,4,8),"pants"],["shinL",()=>new hn(.058,.3,4,8),"pants"],["shinR",()=>new hn(.058,.3,4,8),"pants"],["footL",()=>new hn(.052,.13,4,8).rotateX(Math.PI/2).scale(1,.8,1),"shoe"],["footR",()=>new hn(.052,.13,4,8).rotateX(Math.PI/2).scale(1,.8,1),"shoe"]],hv=new vt({color:16777215,roughness:.75}),$l=cv.map(([n,e,t])=>{let i=new cn(e(),hv,Kf);return i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,i.instanceMatrix.setUsage(ah),Rt.add(i),{name:n,im:i,key:t}}),ct={parts:{}};{let n=(e,t,i,s)=>{let r=new Kt;return r.position.set(t,i,s),e&&e.add(r),r};ct.root=n(null,0,0,0),ct.hips=n(ct.root,0,.93,0),ct.parts.pelvis=n(ct.hips,0,0,0),ct.spine=n(ct.hips,0,.06,0),ct.parts.torso=n(ct.spine,0,.25,0),ct.parts.neck=n(ct.spine,0,.5,0),ct.headJ=n(ct.spine,0,.55,0),ct.parts.head=n(ct.headJ,0,.12,0),ct.parts.hair=n(ct.headJ,0,.135,-.012),ct.parts.nose=n(ct.headJ,0,.115,.112),ct.parts.eyeL=n(ct.headJ,.04,.14,.098),ct.parts.eyeR=n(ct.headJ,-.04,.14,.098);for(let[e,t]of[[1,"L"],[-1,"R"]]){let i=n(ct.spine,.215*e,.43,0);ct["sh"+t]=i,ct.parts["uArm"+t]=n(i,0,-.13,0);let s=n(i,0,-.27,0);ct["el"+t]=s,ct.parts["fArm"+t]=n(s,0,-.11,0),ct.parts["hand"+t]=n(s,0,-.25,0);let r=n(ct.hips,.095*e,-.04,0);ct["hip"+t]=r,ct.parts["thigh"+t]=n(r,0,-.2,0);let o=n(r,0,-.43,0);ct["kn"+t]=o,ct.parts["shin"+t]=n(o,0,-.2,0),ct.parts["foot"+t]=n(o,0,-.42,.045)}}var uv=["#f1c9a5","#e0ac8a","#c68642","#8d5524","#5c3a1e","#f6d7c0","#b97a57"],dv=["#e63946","#1d3557","#457b9d","#2a9d8f","#e9c46a","#f4a261","#ffffff","#222222","#6a4c93","#8ac926","#ff99c8","#adb5bd","#3a5a40","#bc6c25"],fv=["#1b263b","#2b2d42","#3d405b","#222222","#5e503f","#4a6fa5","#7f5539","#adb5bd","#283618"],pv=["#1a1110","#2b1b12","#4a2f1d","#7a5230","#c9a66b","#d8c3a5","#6e6e6e","#111111"],mv=["#ffffff","#222222","#8b4513","#e63946","#1d3557","#dddddd"];function Qf(n,e){let t=e||{skin:nn(uv),top:nn(dv),pants:nn(fv),hair:nn(pv),shoe:nn(mv)};t.sleeve=t.sleeve||(wt()<.55?t.skin:t.top),t.eye="#1a1a1a";let i=new Ve;for(let s of $l)i.set(t[s.key]),s.im.setColorAt(n,i);return{idx:n,look:t,pos:new C,yaw:0,speed:0,ph:wt()*6,air:!1,down:0,scale:.94+wt()*.12,hide:!1,armsUp:0}}function Wh(n,e){let t=ct,i=n.speed,s=ri((i-2.4)/3.5,0,1),r=ri(i*.3,0,.95);!n.air&&n.down<=0&&(n.ph+=e*(i<.1?0:4.6+i*1.15));let o=n.ph;t.root.position.copy(n.pos),t.root.rotation.set(0,n.yaw,0),t.root.scale.setScalar(n.hide?1e-4:n.scale);let a=i>.1?Math.abs(Math.cos(o))*.035*(.5+s):Math.sin(Ln*2+n.idx)*.004;t.hips.position.y=.91+a-s*.03,t.hips.rotation.set(.04*r+s*.2,Math.sin(o)*.12*r,0),t.spine.rotation.set(.02+s*.08,-Math.sin(o)*.22*r,0),t.headJ.rotation.set(-s*.2,Math.sin(o)*.06*r,0);let l=[[t.hipL,t.knL,0],[t.hipR,t.knR,Math.PI]];for(let[h,f,u]of l){let d=Math.sin(o+u),m=Math.cos(o+u);if(n.air){h.rotation.set(u?-.25:-.85,0,0),f.rotation.set(u?.6:1.3,0,0);continue}h.rotation.set(-d*r*(.75+s*.35),0,0),f.rotation.set((.06+Math.max(0,-m)*1+(d<0?.2:0))*r*(1+s*.6),0,0)}let c=[[t.shL,t.elL,Math.PI,1],[t.shR,t.elR,0,-1]];for(let[h,f,u,d]of c){let m=Math.sin(o+u);if(n.armsUp>0){h.rotation.set(-2.6,0,d*.35),f.rotation.set(-.3,0,0);continue}if(n.air){h.rotation.set(-1.2,0,d*.5),f.rotation.set(-.7,0,0);continue}h.rotation.set(-m*r*.85,0,d*(.07+s*.05)),f.rotation.set(-(.15+r*.45+s*1),0,0)}if(n.down>0){let h=ri(Math.min(n.down,3-n.down)/.45,0,1);t.root.rotation.x=-h*1.45,t.root.position.y+=h*.14,t.shL.rotation.set(-1.4*h,0,.6*h),t.shR.rotation.set(-1.4*h,0,-.6*h)}t.root.updateMatrixWorld(!0);for(let h of $l)h.im.setMatrixAt(n.idx,t.parts[h.name].matrixWorld)}var Ef=Ft/2-2.2,Gt=[],jf=new Map;for(let n of Mr)for(let[e,t]of[[-1,-1],[1,-1],[1,1],[-1,1]])jf.set(n.i+","+n.j+","+e+","+t,Gt.length),Gt.push({x:n.cx+e*Ef,z:n.cz+t*Ef,nb:[]});for(let n of Mr){let e=(i,s,r,o)=>jf.get(i+","+s+","+r+","+o),t=[e(n.i,n.j,-1,-1),e(n.i,n.j,1,-1),e(n.i,n.j,1,1),e(n.i,n.j,-1,1)];for(let i=0;i<4;i++)Gt[t[i]].nb.push(t[(i+1)%4]),Gt[t[(i+1)%4]].nb.push(t[i]);if(n.i<ft-1)for(let i of[-1,1]){let s=e(n.i,n.j,1,i),r=e(n.i+1,n.j,-1,i);Gt[s].nb.push(r),Gt[r].nb.push(s)}if(n.j<ft-1)for(let i of[-1,1]){let s=e(n.i,n.j,i,1),r=e(n.i,n.j+1,i,-1);Gt[s].nb.push(r),Gt[r].nb.push(s)}}var Is={sedan:{name:"City Sedan",cost:0,max:28,acc:15,turn:1.9,color:3104680,body:"sedan"},taxi:{name:"Taxi",cost:250,max:29,acc:16,turn:2,color:15906565,body:"sedan",taxi:!0},van:{name:"Delivery Van",cost:400,max:24,acc:12,turn:1.6,color:15856113,body:"van"},suv:{name:"SUV",cost:600,max:31,acc:16,turn:1.75,color:2962486,body:"suv"},sports:{name:"Sports Coupe",cost:1e3,max:40,acc:23,turn:2.2,color:12653087,body:"sports"},muscle:{name:"Muscle Car",cost:1800,max:44,acc:25,turn:1.9,color:1118481,body:"sports",stripe:16760331},super:{name:"Supercar",cost:3500,max:55,acc:32,turn:2.45,color:16219904,body:"super"}},gv={sedan:{L:4.6,W:1.84,wb:1.38,wr:.34,clear:.26,belt:.98,roof:1.46,zw:.95,ws:.62,zr:-1.2,rs:.5},suv:{L:4.75,W:1.95,wb:1.45,wr:.4,clear:.36,belt:1.18,roof:1.8,zw:1.1,ws:.5,zr:-2.1,rs:.18},sports:{L:4.5,W:1.9,wb:1.4,wr:.34,clear:.2,belt:.82,roof:1.22,zw:.65,ws:.72,zr:-.95,rs:.6},super:{L:4.6,W:2,wb:1.44,wr:.35,clear:.16,belt:.72,roof:1.12,zw:.55,ws:.9,zr:-.8,rs:.65},van:{L:5,W:2,wb:1.65,wr:.38,clear:.32,belt:1.15,roof:2.15,zw:1.75,ws:.55,zr:-2.48,rs:.02}};function Tf(n,e,t){let i=new ao(n,{depth:e-t*2,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:3,curveSegments:10});return i.rotateY(-Math.PI/2),i.translate((e-t*2)/2,0,0),i.computeVertexNormals(),i}function _v(n,e){n=n.index?n.toNonIndexed():n;for(let t of Object.keys(n.attributes))e.includes(t)||n.deleteAttribute(t);return n}var Fh={};function xv(n,e){let t=n+(e.taxi?"t":"")+(e.stripe?"s":"");if(Fh[t])return Fh[t];let i=gv[n],s=i.L/2,r=i.wr+.07,o=new ps;o.moveTo(-s+.1,i.clear+.12),o.lineTo(-i.wb-r-.05,i.clear),o.absarc(-i.wb,i.wr+.02,r,Math.PI,0,!0),o.lineTo(i.wb-r,i.clear),o.absarc(i.wb,i.wr+.02,r,Math.PI,0,!0),o.lineTo(s-.2,i.clear),o.quadraticCurveTo(s+.04,i.clear,s+.04,i.clear+.28),o.lineTo(s,i.belt-.18),o.quadraticCurveTo(s-.04,i.belt-.02,s-.45,i.belt),o.lineTo(i.zw,i.belt+.07),o.lineTo(i.zr,i.belt+.07),o.lineTo(-s+.35,i.belt+.02),o.quadraticCurveTo(-s-.02,i.belt,-s-.02,i.belt-.25),o.lineTo(-s+.02,i.clear+.3),o.quadraticCurveTo(-s,i.clear+.12,-s+.1,i.clear+.12);let a=[Tf(o,i.W,.07)],l=[],c=new ps,h=i.belt+.05;c.moveTo(i.zr,h),c.lineTo(i.zr+i.rs,i.roof-.02),c.quadraticCurveTo(i.zr+i.rs+.1,i.roof+.02,i.zr+i.rs+.25,i.roof+.02),c.lineTo(i.zw-i.ws-.2,i.roof+.02),c.quadraticCurveTo(i.zw-i.ws,i.roof,i.zw-i.ws+.05,i.roof-.05),c.lineTo(i.zw,h),c.lineTo(i.zr,h);let f=Tf(c,i.W-.2,.06);if(n==="van"){a.push(f);let T=Math.hypot(i.ws,i.roof-h);l.push(Tt(new ht(i.W-.3,T*.85,.06).rotateX(-Math.atan2(i.ws,i.roof-h)).translate(0,(h+i.roof)/2,i.zw-i.ws/2+.04),1713200));for(let _ of[-1,1])l.push(Tt(new ht(.05,.55,.8).translate(_*(i.W/2-.08),h+.45,i.zw-i.ws-.55),1713200))}else{l.push(Tt(f,1450027));let T=i.zw-i.ws-.15-(i.zr+i.rs+.15);a.push(new ht(i.W-.3,.06,T).translate(0,i.roof+.03,(i.zw-i.ws+i.zr+i.rs)/2));let _=(i.zw-i.ws+i.zr+i.rs)/2-.1;a.push(new ht(i.W-.16,i.roof-h,.12).translate(0,(i.roof+h)/2,_))}if(e.stripe&&l.push(Tt(new ht(.42,.02,i.L-.3).translate(0,i.belt+.08,0),e.stripe)),e.taxi&&l.push(Tt(new ht(.75,.22,.28).translate(0,i.roof+.15,(i.zw-i.ws+i.zr+i.rs)/2),16774848)),n==="sports"||n==="super"){l.push(Tt(new ht(i.W*.86,.05,.32).translate(0,i.belt+.3,-s+.28),1118481));for(let T of[-.55,.55])l.push(Tt(new ht(.06,.26,.08).translate(T,i.belt+.15,-s+.28),1118481))}let u=s+.03,d=-s-.03,m=i.belt-.2;for(let T of[-1,1])l.push(Tt(new ht(.42,.13,.08).translate(T*(i.W/2-.32),m,u-.02),16775392)),l.push(Tt(new ht(.44,.13,.08).translate(T*(i.W/2-.3),m+.02,d+.02),13635600)),l.push(Tt(new ht(.16,.08,.2).translate(T*(i.W/2+.06),i.belt+.12,i.zw-.15),1842204)),l.push(Tt(new ht(.03,.04,.18).translate(T*(i.W/2+.01),i.belt-.12,.1),10133670));l.push(Tt(new ht(i.W*.5,.2,.06).translate(0,m-.08,u),1315860)),l.push(Tt(new ht(i.W+.04,.2,.18).translate(0,i.clear+.14,u-.03),2763306)),l.push(Tt(new ht(i.W+.04,.2,.18).translate(0,i.clear+.14,d+.03),2763306)),l.push(Tt(new ht(.5,.12,.02).translate(0,i.clear+.36,d-.01),16053492)),l.push(Tt(new ht(i.W-.3,.12,i.L-.8).translate(0,i.clear+.02,0),1118481));let M=Ci(a.map(T=>_v(T,["position","normal","uv"]))),g=Ci(l),p=Tt(new Lt(i.wr,i.wr,.24,22).rotateZ(Math.PI/2),1447446),x=Tt(new Lt(i.wr*.64,i.wr*.64,.25,14).rotateZ(Math.PI/2),12107460),E=Tt(new Lt(i.wr*.22,i.wr*.22,.26,8).rotateZ(Math.PI/2),5593438),y=[];for(let T=0;T<5;T++)y.push(Tt(new ht(.255,i.wr*1.15,.06).rotateX(T*Math.PI*2/5),9080982));let w=Ci([p,x,E,...y]);return Fh[t]={paintG:M,trimG:g,wheelG:w,T:i}}var wf={},yv=n=>wf[n]||(wf[n]=new vt({color:n,metalness:.45,roughness:.33})),vv=new vt({vertexColors:!0,metalness:.4,roughness:.18}),Mv=new vt({vertexColors:!0,metalness:.5,roughness:.5});function Sv(n,e){let{paintG:t,trimG:i,wheelG:s,T:r}=xv(n.body,n),o=new En,a=new En;o.add(a);let l=new Mt(t,yv(e));l.castShadow=!0,l.receiveShadow=!0,a.add(l);let c=new Mt(i,vv);c.castShadow=!0,a.add(c);let h=[];for(let f of[-1,1])for(let u of[-1,1]){let d=new En;d.position.set(f*(r.W/2-.16),r.wr,u*r.wb);let m=new Mt(s,Mv);m.castShadow=!0,d.add(m),o.add(d),h.push(d)}return{g:o,body:a,wheels:h}}var Oh=[3104680,10753562,15658734,2792847,7107965,1914199,5904538,1118481,12632256,9268835,2508371,7995417],Fn=[];function Fo(n,e,t,i,s,r){let o=Is[n],a=Sv(o,e===void 0?o.color:e),l={spec:o,key:n,mesh:a,pos:new C(t,0,i),yaw:s,speed:0,ai:null,stun:0,wait:0,ghost:0,steerVis:0,owned:!1};return a.g.position.copy(l.pos),a.g.rotation.y=s,Rt.add(a.g),Fn.push(l),r&&Qh(l),l}function bv(n){Rt.remove(n.mesh.g);let e=Fn.indexOf(n);e>=0&&Fn.splice(e,1)}function Xh(n){return new C(-n.z,0,n.x)}function Kh(n,e){let t=[];return n>0&&t.push([n-1,e]),n<ft&&t.push([n+1,e]),e>0&&t.push([n,e-1]),e<ft&&t.push([n,e+1]),t}var _r=3;function ep(n){let e=n.ai,t=As(...e.a),i=As(...e.b),s=i.clone().sub(t).normalize(),r=Xh(s);e.mode="seg",e.axis=Math.abs(s.x)>.5?0:1,e.p0=t.clone().addScaledVector(s,9).addScaledVector(r,_r),e.p2=i.clone().addScaledVector(s,-10.2).addScaledVector(r,_r),e.p1=e.p0.clone().lerp(e.p2,.5),e.len=e.p0.distanceTo(e.p2)}function Ev(n,e){let t=n.ai,i=As(...t.a),s=As(...t.b),r=As(...e),o=s.clone().sub(i).normalize(),a=r.clone().sub(s).normalize(),l=Xh(o),c=Xh(a);t.mode="turn",t.t=0,t.next=e,t.p0=s.clone().addScaledVector(o,-10.2).addScaledVector(l,_r),t.p2=s.clone().addScaledVector(a,9).addScaledVector(c,_r),t.p1=o.dot(a)>.9?t.p0.clone().lerp(t.p2,.5):s.clone().addScaledVector(l,_r).addScaledVector(c,_r),t.len=(t.p0.distanceTo(t.p1)+t.p1.distanceTo(t.p2)+t.p0.distanceTo(t.p2))/2}var tp=(n,e,t)=>{let i=1-e;return t.set(0,0,0).addScaledVector(n.p0,i*i).addScaledVector(n.p1,2*i*e).addScaledVector(n.p2,e*e)},Tv=new C,np=(n,e,t)=>t.copy(n.p1).sub(n.p0).multiplyScalar(2*(1-e)).addScaledVector(Tv.copy(n.p2).sub(n.p1),2*e);function Qh(n,e,t){let i=e??wt()*(ft+1)|0,s=t??wt()*(ft+1)|0,r=nn(Kh(i,s));n.ai={a:[i,s],b:r,t:wt()*.8,cruise:8.5+wt()*3.5,spd:0},ep(n),tp(n.ai,n.ai.t,n.pos);let o=np(n.ai,n.ai.t,new C);n.yaw=Math.atan2(o.x,o.z)}var ip=new C,jh=new C,wv=new C;function Af(n,e){let t=n.ai,i=Math.sin(n.yaw),s=Math.cos(n.yaw),r=t.mode==="turn"?t.cruise*.6:t.cruise,o=K.car?K.car.pos:K.pos,a=!1,l=(u,d,m)=>{let M=u.x-n.pos.x,g=u.z-n.pos.z,p=M*i+g*s;if(p<=0||p>12)return;if(Math.abs(M*s-g*i)<m){if(d&&n.ghost>0)return;r=Math.min(r,p<5.8?0:t.cruise*(p-5.8)/6),d&&(a=!0)}};l(o,!1,2);for(let u of Fn)u!==n&&u!==K.car&&l(u.pos,!0,2);for(let u of Li)u.onRoad&&u.down<=0&&l(u.pos,!1,1.6);let c=!1;if(t.mode==="seg"&&(c=Jf(t.b[0],t.b[1],Ln)!==t.axis||$f(t.b[0],t.b[1],Ln),c)){let u=(1-t.t)*t.len;u<10&&(r=Math.min(r,u<.5?0:u*.9))}if(r<.5&&a?(n.wait+=e,n.wait>4&&(n.ghost=2.5,n.wait=0)):n.wait=0,n.ghost=Math.max(0,n.ghost-e),n.stun>0&&(n.stun-=e,r=0),t.spd+=(r-t.spd)*Math.min(1,e*(r<t.spd?4:1.4)),t.t+=t.spd*e/Math.max(.5,t.len),t.t>=1)if(t.mode==="seg")if(c)t.t=1;else{let u=Kh(...t.b).filter(d=>!(d[0]===t.a[0]&&d[1]===t.a[1]));Ev(n,nn(u))}else t.a=t.b,t.b=t.next,t.t=0,ep(n);let h=tp(t,Math.min(1,t.t),jh);n.pos.lerp(h,Math.min(1,e*(n.stun>0?.5:8)));let f=np(t,Math.min(1,t.t),wv);f.lengthSq()>1e-4&&(n.yaw=Jl(n.yaw,Math.atan2(f.x,f.z),Math.min(1,e*8))),n.speed=t.spd}var ts=40,Kl=[],sp=new Lt(.5,.5,.1,28);sp.rotateX(Math.PI/2);var Av=new vt({color:16763176,metalness:1,roughness:.22,emissive:4861952}),kn=Jn(4242);for(let n=0;n<ts;n++){let e,t,i=kn(),s=Mr[kn()*Mr.length|0];if(i<.55){let a=kn()*4|0,l=(kn()-.5)*(Ft-6),c=Ft/2-2.2;[e,t]=a===0?[s.cx+l,s.cz-c]:a===1?[s.cx+l,s.cz+c]:a===2?[s.cx-c,s.cz+l]:[s.cx+c,s.cz+l]}else if(i<.85){let a=kn()*(ft+1)|0,l=(kn()-.5)*ft*Wn;kn()<.5?[e,t]=[Ne(a)+(kn()<.5?-3:3),l]:[e,t]=[l,Ne(a)+(kn()<.5?-3:3)]}else{let a=Uo.length?Uo[kn()*Uo.length|0]:s;e=a.cx+(kn()-.5)*24,t=a.cz+8*(kn()<.5?-1:1)}let r=new C(e,0,t);gi(r,.8);let o=new Mt(sp,Av);o.position.set(r.x,Ni(r.x,r.z)+1.1,r.z),o.castShadow=!0,o.visible=!be.coins.includes(n),Rt.add(o),Kl.push(o)}function Ql(n){let e=new En,t=new Mt(new Lt(2.6,2.6,40,32,1,!0),new hi({color:n,transparent:!0,opacity:.22,side:Cn,depthWrite:!1,blending:xo,fog:!1,toneMapped:!1}));t.position.y=20,e.add(t);let i=new Mt(new co(2.2,2.75,40),new hi({color:n,side:Cn,transparent:!0,opacity:.9,toneMapped:!1}));return i.rotation.x=-Math.PI/2,i.position.y=.25,e.add(i),e.userData.ring=i,Rt.add(e),e}var jl=[[3,3],[5,2],[2,6],[6,5]].map(([n,e])=>new C(Ne(n)+St/2+2.6,0,Ne(e)+St/2+9)),Bh=jl.map(n=>{let e=Ql(16766474);return e.position.set(n.x,Ni(n.x,n.z),n.z),e}),Sr=new C(Ne(5)+3,0,Ne(4)+20),Yl=Ql(3727483);Yl.position.copy(Sr);var Rs=(()=>{let n=Jn(777),e=[],t=[5,4],i=[5,3],s=new Set;for(let r=0;r<11;r++){let o=Kh(...t).filter(c=>!(c[0]===i[0]&&c[1]===i[1])),a=o.filter(c=>!s.has(c.join()));a.length&&(o=a);let l=o[n()*o.length|0];i=t,t=l,s.add(t.join()),e.push(As(...t))}return e})(),Pi=Ql(16732067);Pi.visible=!1;var ns=Ql(16732067);ns.visible=!1;ns.scale.set(.6,.5,.6);var Ii=new En;{let n=new hi({color:16766474,fog:!1,depthTest:!1,transparent:!0,toneMapped:!1}),e=new Mt(new sr(.45,1.1,16),n);e.rotation.x=Math.PI/2,e.position.z=.4;let t=new Mt(new Lt(.12,.12,.8,10),n);t.rotation.x=Math.PI/2,t.position.z=-.35,e.renderOrder=t.renderOrder=10,Ii.add(e,t),Ii.visible=!1,Rt.add(Ii),Ii.userData.mat=n}var rp=new C(Ne(4)+St/2+2.2,Ht,Ne(4)+St/2+9);K={pos:rp.clone(),vel:new C,yaw:0,onGround:!0,car:null,person:null};K.person=Qf(0,{skin:"#c68642",top:"#c1121f",sleeve:"#c1121f",pants:"#1b263b",hair:"#1a1110",shoe:"#f4f4f4"});K.person.scale=1.02;be.pos&&Math.abs(be.pos.x)<Qi&&Math.abs(be.pos.z)<Qi&&(K.pos.set(be.pos.x,Ni(be.pos.x,be.pos.z),be.pos.z),gi(K.pos,.6));var Li=[];function Rf(n){let e=0,t=1e9;for(let i=0;i<Gt.length;i++){let s=Gt[i],r=(s.x-n.pos.x)**2+(s.z-n.pos.z)**2;r<t&&(t=r,e=i)}n.from=e,n.to=nn(Gt[e].nb),n.lat=(wt()-.5)*1.6}function Rv(n){let e=Qf(n),t=wt()*Gt.length|0,i=0;for(;Math.hypot(Gt[t].x-K.pos.x,Gt[t].z-K.pos.z)>160&&i++<30;)t=wt()*Gt.length|0;let s=Gt[t],r=nn(s.nb),o=wt();return e.from=t,e.to=r,e.pos.set(mi(s.x,Gt[r].x,o),Ht,mi(s.z,Gt[r].z,o)),e.base=wt()<.18?3.2+wt()*1.2:1.15+wt()*.5,e.mode="walk",e.t=0,e.lat=(wt()-.5)*1.6,e.idle=0,e.onRoad=!1,e}for(let n=1;n<Kf;n++)Li.push(Rv(n));function op(n,e,t){if(n.down>0)return;n.mode="flee",n.t=t;let i=n.pos.x-e.x,s=n.pos.z-e.z,r=Math.hypot(i,s)||1;n.fx=i/r,n.fz=s/r,n.armsUp=wt()<.4?.8:0,n.idle=0}function Cf(n,e){if(n.down>0){n.down-=e,n.speed=0,n.down<=0&&(n.mode="walk",Rf(n));return}n.armsUp=Math.max(0,n.armsUp-e);let t,i,s;if(n.mode==="flee")n.t-=e,t=n.pos.x+n.fx*5,i=n.pos.z+n.fz*5,s=6,n.t<=0&&(n.mode="walk",Rf(n));else if(n.idle>0)n.idle-=e,t=n.pos.x,i=n.pos.z,s=0;else{let c=Gt[n.from],h=Gt[n.to],f=h.x-c.x,u=h.z-c.z,d=Math.hypot(f,u)||1,m=-u/d,M=f/d;if(t=h.x+m*n.lat,i=h.z+M*n.lat,s=n.base,Math.hypot(t-n.pos.x,i-n.pos.z)<.8){let g=h.nb.filter(p=>p!==n.from);n.from=n.to,n.to=nn(g.length?g:h.nb),wt()<.08&&(n.idle=1.5+wt()*4)}}let r=t-n.pos.x,o=i-n.pos.z,a=Math.hypot(r,o);if(n.speed=mi(n.speed,a>.05?s:0,Math.min(1,e*4)),a>.05&&(n.yaw=Jl(n.yaw,Math.atan2(r,o),Math.min(1,e*7))),n.pos.x+=Math.sin(n.yaw)*n.speed*e,n.pos.z+=Math.cos(n.yaw)*n.speed*e,!K.car){let c=n.pos.x-K.pos.x,h=n.pos.z-K.pos.z,f=Math.hypot(c,h);f<.75&&f>.001&&(n.pos.x=K.pos.x+c/f*.75,n.pos.z=K.pos.z+h/f*.75)}gi(n.pos,.32,.3);let l=Ni(n.pos.x,n.pos.z);n.onRoad=l===0,n.pos.y=mi(n.pos.y,l,Math.min(1,e*12))}function Cv(n,e){if(n.down>0)return;n.down=3,n.mode="down";let t=Math.sin(e.yaw),i=Math.cos(e.yaw),s=-i,r=t,o=(n.pos.x-e.pos.x)*s+(n.pos.z-e.pos.z)*r>=0?1:-1;n.pos.x+=s*o*1.7+t*1.2,n.pos.z+=r*o*1.7+i*1.2,gi(n.pos,.35),n.yaw=Math.atan2(-s*o,-r*o)}var Xn=Fo(be.car&&Is[be.car]&&be.owned.includes(be.car)?be.car:"sedan",void 0,Ne(4)+4.9,Ne(4)+24,Math.PI,!1);Xn.owned=!0;{let n=Jn(31337);for(let e=0;e<16;e++){let t=n()*(ft+1)|0,i=n()*ft|0,s=Ne(i)+St/2+7+n()*(Ft-14),r=n()<.5?-1:1,o=["sedan","sedan","suv","taxi","van","sports"][n()*6|0],a=o==="taxi"?void 0:Oh[n()*Oh.length|0];n()<.5?Fo(o,a,Ne(t)+r*4.9,s,r>0?Math.PI:0,!1):Fo(o,a,s,Ne(t)+r*4.9,r>0?Math.PI/2:-Math.PI/2,!1)}for(let e=0;e<22;e++){let t=nn(["sedan","sedan","sedan","suv","suv","taxi","van","sports"]),i=Fo(t,t==="taxi"?void 0:nn(Oh),0,0,0,!0);i.pos.distanceTo(K.pos)<25&&Qh(i)}}var mt=null,qn=null,Oo=null;function Ps(){if(!mt)try{mt=new(window.AudioContext||window.webkitAudioContext)}catch{mt=null}mt&&mt.state==="suspended"&&mt.resume(),mt&&!Oo&&!be.muted&&Iv()}function Vn(n,e,t,i,s,r){if(!(!mt||be.muted))try{let o=mt.currentTime+(r||0),a=mt.createOscillator(),l=mt.createGain();a.type=t||"square",a.frequency.setValueAtTime(n,o),s&&a.frequency.exponentialRampToValueAtTime(s,o+e),l.gain.setValueAtTime(i||.1,o),l.gain.exponentialRampToValueAtTime(8e-4,o+e),a.connect(l),l.connect(mt.destination),a.start(o),a.stop(o+e+.02)}catch{}}function zh(n,e,t){if(!(!mt||be.muted))try{let i=mt.createBuffer(1,mt.sampleRate*n|0,mt.sampleRate),s=i.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=(Math.random()*2-1)*(1-l/s.length);let r=mt.createBufferSource(),o=mt.createGain(),a=mt.createBiquadFilter();a.type="lowpass",a.frequency.value=t||2e3,r.buffer=i,o.gain.value=e||.3,r.connect(a),a.connect(o),o.connect(mt.destination),r.start()}catch{}}function Iv(){try{let n=mt.sampleRate*4,e=mt.createBuffer(1,n,mt.sampleRate),t=e.getChannelData(0),i=0;for(let o=0;o<n;o++)i=i*.985+(Math.random()*2-1)*.015,t[o]=i*3;let s=mt.createBufferSource(),r=mt.createGain();s.buffer=e,s.loop=!0,r.gain.value=.16,s.connect(r),r.connect(mt.destination),s.start(),Oo={s,g:r}}catch{}}function ap(){if(Oo){try{Oo.s.stop()}catch{}Oo=null}}var qt={coin(){Vn(988,.07,"square",.05),Vn(1318,.14,"square",.05,null,.06)},cash(){[784,988,1175,1568].forEach((n,e)=>Vn(n,.12,"triangle",.08,null,e*.07))},jump(){zh(.12,.08,900)},door(){zh(.1,.25,600),Vn(110,.08,"square",.05,70)},horn(){Vn(392,.4,"sawtooth",.06),Vn(466,.4,"sawtooth",.05)},crash(){zh(.45,.45,1400),Vn(90,.3,"sawtooth",.1,40)},check(){Vn(880,.1,"triangle",.08),Vn(1320,.15,"triangle",.08,null,.08)},fail(){Vn(300,.3,"sawtooth",.06,120)},click(){Vn(660,.05,"triangle",.05)},yelp(){Vn(700+Math.random()*300,.18,"triangle",.035,450)}};function eu(){if(!(!mt||be.muted||qn))try{let n=mt.createOscillator(),e=mt.createOscillator(),t=mt.createBiquadFilter(),i=mt.createGain();n.type="sawtooth",e.type="triangle",t.type="lowpass",t.frequency.value=380,i.gain.value=0,n.connect(t),e.connect(t),t.connect(i),i.connect(mt.destination),n.start(),e.start(),qn={o:n,o2:e,f:t,g:i}}catch{}}function lp(){if(qn){try{qn.o.stop(),qn.o2.stop(),qn.g.disconnect()}catch{}qn=null}}function Pv(n,e){if(!qn)return;let t=Math.abs(n),i=Math.min(4,Math.floor(t/11)),r=38+(t-i*11)/11*55+i*6+e*8,o=mt.currentTime;qn.o.frequency.setTargetAtTime(r,o,.06),qn.o2.frequency.setTargetAtTime(r*.5,o,.06),qn.f.frequency.setTargetAtTime(300+e*500+t*8,o,.1),qn.g.gain.setTargetAtTime(be.muted?0:.05+e*.03,o,.1)}var Qt={id:null,ox:0,oy:0,x:0,y:0},Nn={id:null,lx:0,ly:0,lastT:-10},In={},Di={A:!1,B:!1},Un=0,ws=.3,qh=5.5,yr=Ye("joy"),cp=Ye("knob"),Lo=52;function Lv(){yr.style.left="",yr.style.top="",yr.style.bottom="",cp.style.transform=""}var br=jt.domElement;br.addEventListener("pointerdown",n=>{if(On==="play"){Ps(),Ye("tut").classList.contains("hidden")||Wv(),n.clientX<window.innerWidth*.45&&Qt.id===null&&n.pointerType!=="mouse"?(Qt.id=n.pointerId,Qt.ox=n.clientX,Qt.oy=n.clientY,Qt.x=Qt.y=0,yr.style.left=n.clientX-65+"px",yr.style.top=n.clientY-65+"px",yr.style.bottom="auto"):Nn.id===null&&(Nn.id=n.pointerId,Nn.lx=n.clientX,Nn.ly=n.clientY);try{br.setPointerCapture(n.pointerId)}catch{}}});br.addEventListener("pointermove",n=>{if(n.pointerId===Qt.id){let e=n.clientX-Qt.ox,t=n.clientY-Qt.oy,i=Math.hypot(e,t);i>Lo&&(e*=Lo/i,t*=Lo/i),Qt.x=e/Lo,Qt.y=t/Lo,cp.style.transform=`translate(${e}px,${t}px)`}else if(n.pointerId===Nn.id){let e=n.clientX-Nn.lx,t=n.clientY-Nn.ly;Nn.lx=n.clientX,Nn.ly=n.clientY,Un-=e*.0065,ws=ri(ws+t*.0045,-.1,1.25),Nn.lastT=Ln}});function tu(n){n.pointerId===Qt.id&&(Qt.id=null,Qt.x=Qt.y=0,Lv()),n.pointerId===Nn.id&&(Nn.id=null)}br.addEventListener("pointerup",tu);br.addEventListener("pointercancel",tu);br.addEventListener("lostpointercapture",tu);function nu(n,e,t){n.addEventListener("pointerdown",s=>{s.preventDefault(),s.stopPropagation(),Ps(),n.classList.add("down"),e&&e()});let i=()=>{n.classList.remove("down"),t&&t()};n.addEventListener("pointerup",i),n.addEventListener("pointercancel",i),n.addEventListener("pointerleave",i)}nu(Ye("bA"),()=>{Di.A=!0,K.car||up()},()=>{Di.A=!1});nu(Ye("bB"),()=>{Di.B=!0,K.car&&dp()},()=>{Di.B=!1});nu(Ye("bC"),()=>ec());document.addEventListener("touchmove",n=>{(!n.target.closest||!n.target.closest(".scroll"))&&n.preventDefault()},{passive:!1});document.addEventListener("gesturestart",n=>n.preventDefault());window.addEventListener("keydown",n=>{if(In[n.code]=!0,On!=="play"){(n.code==="Escape"||n.code==="KeyM")&&On==="phone"&&tc();return}Ps(),n.code==="Space"&&(Di.A=!0,K.car||up(),n.preventDefault()),(n.code==="KeyE"||n.code==="KeyF"||n.code==="Enter")&&ec(),n.code==="KeyH"&&dp(),(n.code==="KeyM"||n.code==="Escape")&&iu(),n.code.startsWith("Arrow")&&n.preventDefault()});window.addEventListener("keyup",n=>{In[n.code]=!1,n.code==="Space"&&(Di.A=!1)});function hp(){let n=Qt.x,e=Qt.y;(In.KeyA||In.ArrowLeft)&&(n-=1),(In.KeyD||In.ArrowRight)&&(n+=1),(In.KeyW||In.ArrowUp)&&(e-=1),(In.KeyS||In.ArrowDown)&&(e+=1);let t=Math.hypot(n,e);return t>1&&(n/=t,e/=t),{x:n,y:e,run:Di.B||In.ShiftLeft||In.ShiftRight}}var On="loading",Ln=0,If=0,Pf=null,Es=0,Lf=0;function Dn(n,e){let t=Ye("toast");t.textContent=n,t.style.color=e||"#fff",t.style.opacity=1,clearTimeout(Pf),Pf=setTimeout(()=>t.style.opacity=0,1700)}function Hh(n){be.cash+=n,qt.cash(),is=!0,Zn()}function up(){K.onGround&&(K.vel.y=6.2,K.onGround=!1,qt.jump())}function Er(){return K.car?K.car.pos:K.pos}function dp(){qt.horn();let n=Er();for(let e of Li)e.pos.distanceTo(n)<16&&wt()<.8&&op(e,n,1.5+wt())}var Bo=null;function Dv(){let n=null,e=4.2;for(let t of Fn){let i=t.pos.distanceTo(K.pos);i<e&&(e=i,n=t)}return n}function ec(){if(On==="play"){if(K.car){let n=K.car,e=Math.sin(n.yaw),t=Math.cos(n.yaw),i=-t,s=e,r=null;for(let o of[1,-1,-2]){let a=o===-2?new C(n.pos.x-e*3.5,0,n.pos.z-t*3.5):new C(n.pos.x+i*o*2.2,0,n.pos.z+s*o*2.2),l=a.clone();if(gi(l,.5),l.distanceTo(a)<.3){r=l;break}}r||(r=new C(n.pos.x+i*2.3,0,n.pos.z+s*2.3),gi(r,.5)),K.pos.set(r.x,Ni(r.x,r.z),r.z),K.vel.set(0,0,0),K.yaw=n.yaw,n.speed=0,K.car=null,K.person.hide=!1,lp(),qt.door(),qh=5.5}else if(Bo){let n=Bo;n.ai&&(n.ai=null,Dn("You took the car!","#ffd60a")),K.car=n,K.person.hide=!0,qt.door(),eu(),qh=9.5,Un=n.yaw}is=!0}}function Nv(n){let e=hp(),t=Math.sin(Un),i=Math.cos(Un),s=t*-e.y-i*e.x,r=i*-e.y+t*e.x,o=Math.min(1,Math.hypot(s,r)),a=(e.run?7.5:3.6)*o,l=Math.hypot(s,r)||1,c=o>.05?s/l*a:0,h=o>.05?r/l*a:0,f=Math.min(1,n*(K.onGround?10:2.5));K.vel.x=mi(K.vel.x,c,f),K.vel.z=mi(K.vel.z,h,f),o>.05&&(K.yaw=Jl(K.yaw,Math.atan2(s,r),Math.min(1,n*11))),K.vel.y-=20*n,K.pos.addScaledVector(K.vel,n);let u=Ni(K.pos.x,K.pos.z);K.pos.y<=u?(K.pos.y=u,K.vel.y=0,K.onGround=!0):K.pos.y-u>.25&&(K.onGround=!1),gi(K.pos,.38,K.pos.y);for(let m of Fn){let M=K.pos.x-m.pos.x,g=K.pos.z-m.pos.z,p=Math.hypot(M,g);p<2.1&&p>.001&&K.pos.y<1.5&&(K.pos.x=m.pos.x+M/p*2.1,K.pos.z=m.pos.z+g/p*2.1)}let d=K.person;d.pos.copy(K.pos),d.yaw=K.yaw,d.speed=Math.hypot(K.vel.x,K.vel.z),d.air=!K.onGround,Bo=Dv()}function Uv(n,e){let t=hp(),i=-t.y,s=t.x,r=Di.A||In.Space,o=n.spec;i>.1?n.speed<-.5?n.speed+=32*e*i:n.speed+=o.acc*i*e*(1-Math.max(0,n.speed)/o.max*.6):i<-.1?n.speed>.5?n.speed-=34*e*-i:n.speed-=o.acc*.55*-i*e:n.speed*=1-.6*e,r&&(n.speed*=1-1.5*e),n.speed=ri(n.speed,-11,o.max);let a=s*o.turn*Math.min(1,Math.abs(n.speed)/7)*Math.sign(n.speed)*(r?1.55:1)*(1-Math.min(.45,Math.abs(n.speed)/o.max*.45));n.yaw-=a*e;let l=Math.sin(n.yaw),c=Math.cos(n.yaw);n.pos.x+=l*n.speed*e,n.pos.z+=c*n.speed*e;let h=!1;for(let d of[-1.45,0,1.45]){let m=ip.set(n.pos.x+l*d,0,n.pos.z+c*d),M=m.x,g=m.z;gi(m,1,.5)&&(h=!0,n.pos.x+=m.x-M,n.pos.z+=m.z-g)}h&&(Math.abs(n.speed)>14&&(qt.crash(),Es=.35),n.speed*=Math.abs(n.speed)>6?-.25:.5);for(let d of Fn){if(d===n)continue;let m=d.pos.x-n.pos.x,M=d.pos.z-n.pos.z,g=Math.hypot(m,M);if(g<3.3&&g>.01){let p=3.3-g;d.pos.x+=m/g*p*.7,d.pos.z+=M/g*p*.7,n.pos.x-=m/g*p*.3,n.pos.z-=M/g*p*.3,gi(d.pos,1.4,.5),Math.abs(n.speed)>12&&(qt.crash(),Es=.3),d.ai&&(d.stun=2.5),n.speed*=.6}}let f=Math.abs(n.speed),u=Math.sign(n.speed)||1;if(f>3)for(let d of Li){if(d.down>0)continue;let m=d.pos.x-n.pos.x,M=d.pos.z-n.pos.z;if(m*m+M*M>200)continue;let g=(m*l+M*c)*u,p=Math.abs(m*c-M*l);if(g>-2.4&&g<2.6&&p<1.45)Cv(d,n),qt.yelp(),n.speed*=.85;else if(g>0&&g<10+f*.4&&p<3.5&&d.mode!=="flee"){let x=m*-c+M*l>=0?1:-1;op(d,jh.set(d.pos.x+c*x,0,d.pos.z-l*x),1.6),wt()<.3&&qt.yelp()}}n.steerVis=mi(n.steerVis,s,Math.min(1,e*8)),Pv(n.speed,Math.max(0,i))}function Df(n,e){let t=n.mesh;t.g.position.set(n.pos.x,0,n.pos.z),t.g.rotation.y=n.yaw;let i=n===K.car,s=i?-n.steerVis*Math.min(1,Math.abs(n.speed)/25)*.05:0;t.body.rotation.z=mi(t.body.rotation.z,s,Math.min(1,e*6));for(let r=0;r<4;r++){let o=t.wheels[r];o.children[0].rotation.x+=n.speed*e/.36,r%2===1&&(o.rotation.y=i?n.steerVis*.45:0)}}var je=null,gr=0,Do=0;function Yh(n,e){n.children[0].material.color.setHex(e),n.children[1].material.color.setHex(e)}function Fv(n){let e=null;for(let t=0;t<40;t++){let i=wt()*(ft+1)|0,s=wt()*ft|0,r=Ne(s)+St/2+6+wt()*(Ft-12),o=wt()<.5?-1:1,a=wt()<.5?new C(Ne(i)+o*7.6,Ht,r):new C(r,Ht,Ne(i)+o*7.6);if(gi(a,1),a.distanceTo(n)>130){e=a;break}}e||(e=As(0,0)),je={type:"deliver",dest:e,time:Math.round(e.distanceTo(n)/9+18)},Pi.position.set(e.x,Ni(e.x,e.z),e.z),Pi.visible=!0,Yh(Pi,16732067),Dn("\u{1F4E6} Deliver the package!","#ffd60a"),qt.check()}function Ov(){je={type:"race",idx:0,time:0},Pi.visible=!0,Yh(Pi,3727483),Yh(ns,3727483),fp(),Dn("\u{1F3C1} RACE! Hit every checkpoint","#38e07b"),qt.check()}function fp(){let n=Rs[je.idx];Pi.position.set(n.x,0,n.z);let e=Rs[je.idx+1];e?(ns.visible=!0,ns.position.set(e.x,0,e.z)):ns.visible=!1}function No(){je=null,Pi.visible=!1,ns.visible=!1,is=!0}function Bv(n){let e=Er();gr=Math.max(0,gr-n),Do=Math.max(0,Do-n);for(let i of[...Bh,Yl,Pi,ns])i.userData.ring.rotation.z+=n;if(je){if(Bh.forEach(i=>i.visible=!1),Yl.visible=!1,je.type==="deliver")if(je.time-=n,Math.hypot(e.x-je.dest.x,e.z-je.dest.z)<4){let i=60+Math.round(je.time*5);be.deliveries++,Hh(i),Dn("\u2705 Delivered! +$"+i,"#7dff9b"),No(),Do=4}else je.time<=0&&(Dn("\u23F0 Too slow \u2014 delivery failed","#ff6b6b"),qt.fail(),No(),Do=4);else if(je.type==="race"){je.time+=n;let i=Rs[je.idx];if(Math.hypot(e.x-i.x,e.z-i.z)<7.5)if(je.idx++,qt.check(),je.idx>=Rs.length){let s=je.time,r=be.races===0,o=!be.bestRace||s<be.bestRace;be.races++,o&&(be.bestRace=+s.toFixed(2));let a=(r?300:120)+(o?100:0);Hh(a),Dn((o?"\u{1F3C6} NEW BEST ":"\u{1F3C1} FINISHED ")+s.toFixed(1)+"s  +$"+a,"#7dff9b"),No(),gr=6}else fp();je&&!K.car&&(Dn("Race cancelled \u2014 you left the car","#ff6b6b"),qt.fail(),No(),gr=4)}}else{Bh.forEach(i=>i.visible=!0),Yl.visible=!0;for(let i of jl)if(Do<=0&&Math.hypot(e.x-i.x,e.z-i.z)<3.2){Fv(i);break}!je&&gr<=0&&Math.hypot(e.x-Sr.x,e.z-Sr.z)<3.5&&(K.car?Ov():(Dn("\u{1F697} Get in a car to race!","#38e07b"),gr=3))}let t=null;je&&(t=je.type==="deliver"?je.dest:Rs[je.idx]),t?(Ii.visible=!0,Ii.position.set(e.x,(K.car?3.2:K.pos.y+2.6)+Math.sin(Ln*4)*.1,e.z),Ii.rotation.y=Math.atan2(t.x-e.x,t.z-e.z),Ii.userData.mat.color.setHex(je.type==="race"?3727483:16732067)):Ii.visible=!1;for(let i=0;i<ts;i++){let s=Kl[i];if(!s.visible)continue;s.rotation.y+=n*3;let r=K.car?.6:K.pos.y;Math.hypot(e.x-s.position.x,e.z-s.position.z)<(K.car?2.8:1.3)&&Math.abs(s.position.y-1.1-r)<1.8&&(s.visible=!1,be.coins.push(i),be.cash+=25,qt.coin(),is=!0,Zn(),Dn("\u{1FA99} Coin "+be.coins.length+"/"+ts+"  +$25","#ffd60a"),be.coins.length===ts&&(Hh(1e3),Dn("\u{1F389} ALL COINS FOUND! +$1000","#ffd60a")))}}var Gh=new _o,Ki=new C,Wl=new C;function zv(n){let e=Er();Ki.lerp(jh.set(e.x,K.car?1.5:K.pos.y+1.55,e.z),Math.min(1,n*12)),K.car&&Ln-Nn.lastT>1.6&&Math.abs(K.car.speed)>2&&(Un=Jl(Un,K.car.yaw,Math.min(1,n*2.2)),ws=mi(ws,.24,Math.min(1,n*1.5)));let t=qh+(K.car?Math.min(3.5,Math.abs(K.car.speed)*.07):0),i=Math.cos(ws),s=Math.sin(ws),r=ip.set(-Math.sin(Un)*i,s,-Math.cos(Un)*i),o=t;Gh.set(Ki,r),Gh.far=t;let a=Gh.intersectObjects(rv,!1);a.length&&(o=Math.max(1,a[0].distance-.35)),Wl.copy(Ki).addScaledVector(r,o),Wl.y<.35&&(Wl.y=.35),Pn.position.copy(Wl),Es>0&&(Pn.position.x+=(Math.random()-.5)*Es,Pn.position.y+=(Math.random()-.5)*Es,Es=Math.max(0,Es-n)),Pn.lookAt(Ki.x,Ki.y+.15,Ki.z);let l=K.car?60+Math.min(14,Math.abs(K.car.speed)*.28):60;Math.abs(Pn.fov-l)>.1&&(Pn.fov=mi(Pn.fov,l,Math.min(1,n*3)),Pn.updateProjectionMatrix());let c=Math.round(e.x/2)*2,h=Math.round(e.z/2)*2;Yn.target.position.set(c,0,h),Yn.position.set(c+Dh.x,Dh.y,h+Dh.z)}var is=!0,Hv=Ye("map"),qe=Hv.getContext("2d"),kh=0;function Gv(){let t=1.263157894736842,i=Er(),s=Math.sin(Un),r=Math.cos(Un),o=(c,h)=>{let f=c-i.x,u=h-i.z,d=f*s+u*r;return[120-(f*-r+u*s)*t,120-d*t]};qe.clearRect(0,0,240,240),qe.save(),qe.beginPath(),qe.arc(120,120,120,0,Math.PI*2),qe.clip(),qe.fillStyle="#6d6a64",qe.fillRect(0,0,240,240);for(let c of Uo){let h=[[-17,-17],[17,-17],[17,17],[-17,17]].map(([f,u])=>o(c.cx+f,c.cz+u));qe.fillStyle="#5e8a3f",qe.beginPath(),h.forEach((f,u)=>u?qe.lineTo(...f):qe.moveTo(...f)),qe.fill()}qe.strokeStyle="#e4e0d8",qe.lineWidth=St*t,qe.lineCap="square";for(let c=0;c<=ft;c++){let h=o(Ne(c),-yn),f=o(Ne(c),yn);qe.beginPath(),qe.moveTo(...h),qe.lineTo(...f),qe.stroke(),h=o(-yn,Ne(c)),f=o(yn,Ne(c)),qe.beginPath(),qe.moveTo(...h),qe.lineTo(...f),qe.stroke()}let a=(c,h,f,u,d)=>{let[m,M]=o(c,h),g=m-120,p=M-120,x=Math.hypot(g,p);if(x>110){if(!d)return;m=120+g/x*110,M=120+p/x*110}qe.fillStyle=f,qe.beginPath(),qe.arc(m,M,u,0,7),qe.fill(),qe.strokeStyle="#000",qe.lineWidth=2,qe.stroke()};if(!je)jl.forEach(c=>a(c.x,c.z,"#ffd60a",9,!0)),a(Sr.x,Sr.z,"#38e07b",9,!0);else if(je.type==="deliver")a(je.dest.x,je.dest.z,"#ff4fa3",11,!0);else{let c=Rs[je.idx];a(c.x,c.z,"#38e07b",11,!0)}Xn&&Xn!==K.car&&Fn.includes(Xn)&&a(Xn.pos.x,Xn.pos.z,"#3a86ff",7,!0);for(let c=0;c<ts;c++){let h=Kl[c];h.visible&&h.position.distanceTo(i)<60&&a(h.position.x,h.position.z,"#ffcc00",4,!1)}let l=(K.car?K.car.yaw:K.yaw)-Un;qe.translate(120,120),qe.rotate(-l),qe.fillStyle="#fff",qe.strokeStyle="#000",qe.lineWidth=2,qe.beginPath(),qe.moveTo(0,-13),qe.lineTo(9,10),qe.lineTo(0,5),qe.lineTo(-9,10),qe.closePath(),qe.fill(),qe.stroke(),qe.restore()}function kv(n){if(is){Ye("cash").textContent="$"+be.cash.toLocaleString(),Ye("coinsTxt").textContent="Coins "+be.coins.length+"/"+ts;let r=!!K.car;Ye("bA").textContent=r?"BRAKE":"JUMP",Ye("bB").textContent=r?"HORN":"RUN",Ye("speed").classList.toggle("hidden",!r),is=!1}let e=K.car||Bo,t=Ye("bC");!!e===t.classList.contains("hidden")&&t.classList.toggle("hidden",!e);let i=K.car?"EXIT<br>CAR":"ENTER<br>CAR";if(t.innerHTML!==i&&(t.innerHTML=i),K.car){let r=Math.round(Math.abs(K.car.speed)*3.6)+" <small>KM/H</small>",o=Ye("speed");o.innerHTML!==r&&(o.innerHTML=r)}let s=Ye("mission");if(je){let r=je.type==="deliver"?"<b>"+Math.max(0,je.time).toFixed(0)+"s</b>\u{1F4E6} Deliver to the pink beam \xB7 "+Math.round(Er().distanceTo(je.dest))+"m":"<b>"+je.time.toFixed(1)+"s</b>\u{1F3C1} Checkpoint "+(je.idx+1)+"/"+Rs.length+(be.bestRace?" \xB7 Best "+be.bestRace.toFixed(1)+"s":"");s.innerHTML!==r&&(s.innerHTML=r),s.classList.remove("hidden")}else s.classList.add("hidden");kh-=n,kh<=0&&(kh=.08,Gv())}var Vh=0,Nf=0,Zh=be.quality!=="auto",pp="high";function Zl(n){pp=n,n==="low"?(jt.setPixelRatio(1),Yn.castShadow=!1,Rt.fog.far=280):n==="medium"?(jt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),Yn.castShadow=!0,Rt.fog.far=360):(jt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),Yn.castShadow=!0,Rt.fog.far=360),jt.setSize(window.innerWidth,window.innerHeight)}be.quality!=="auto"&&Zl(be.quality);function Ls(n){for(let e of["start","phone","help"])Ye(e).classList.toggle("hidden",e!==n)}function mp(){Ye("startInfo").textContent=be.cash||be.coins.length?`\u{1F4B5} $${be.cash.toLocaleString()} \xB7 \u{1FA99} ${be.coins.length}/${ts} coins`:"Explore the city. Take any car. Get paid.",Ye("muteBtn").textContent=be.muted?"\u{1F507} SOUND OFF":"\u{1F50A} SOUND ON"}function Vv(){Ps(),qt.click(),On="play",Ls(null),Ye("hud").classList.remove("hidden"),be.tut||Ye("tut").classList.remove("hidden"),K.car&&eu(),is=!0}function Wv(){Ye("tut").classList.add("hidden"),be.tut=!0,Zn()}function iu(){On==="play"&&(On="phone",lp(),zo(),Ls("phone"),Zn())}function tc(){On="play",Ls(null),K.car&&eu()}function zo(){Ye("pCash").textContent="$"+be.cash.toLocaleString(),Ye("pMission").innerHTML=je?'<div class="item"><div class="nm">'+(je.type==="deliver"?"\u{1F4E6} Delivery in progress":"\u{1F3C1} Race in progress")+'</div><button data-act="cancel" class="go" style="background:#ff6b6b;color:#2b0000">CANCEL</button></div>':"";let n="";for(let e in Is){let t=Is[e],i=be.owned.includes(e);n+='<div class="item"><div class="sw" style="background:#'+t.color.toString(16).padStart(6,"0")+'"></div><div class="nm">'+t.name+"<small>Top speed "+Math.round(t.max*3.6)+" km/h</small></div>"+(i?'<button class="go" data-call="'+e+'">CALL</button>':'<button data-buy="'+e+'" '+(be.cash<t.cost?"disabled":"")+">$"+t.cost.toLocaleString()+"</button>")+"</div>"}Ye("garage").innerHTML=n,Ye("stats").innerHTML="\u{1FA99} Coins found: "+be.coins.length+"/"+ts+"<br>\u{1F4E6} Deliveries: "+be.deliveries+"<br>\u{1F3C1} Races finished: "+be.races+"<br>\u23F1\uFE0F Best race: "+(be.bestRace?be.bestRace.toFixed(1)+"s":"\u2014")+'<br><span style="opacity:.6">v'+Jh+"</span>",Ye("pMute").textContent=be.muted?"\u{1F507} Sound off":"\u{1F50A} Sound on",Ye("pQuality").textContent="\u2728 Graphics: "+{auto:"Auto ("+pp+")",high:"High",medium:"Medium",low:"Low"}[be.quality]}function Xv(n){if(K.car&&K.car===Xn){Dn("Get out of your car first");return}let e=Er(),t=ri(Math.round((e.x+yn)/Wn),0,ft),i=ri(Math.round((e.z+yn)/Wn),0,ft),s=Math.abs(e.x-Ne(t)),r=Math.abs(e.z-Ne(i)),o,a,l;if(s<r){let c=Math.sign(e.x-Ne(t))||1;o=Ne(t)+4.9*c,a=ri(e.z,-yn+10,yn-10),l=c>0?Math.PI:0}else{let c=Math.sign(e.z-Ne(i))||1;a=Ne(i)+4.9*c,o=ri(e.x,-yn+10,yn-10),l=c>0?Math.PI/2:-Math.PI/2}Xn&&Xn!==K.car&&bv(Xn);for(let c of[...Fn])c.ai&&Math.hypot(c.pos.x-o,c.pos.z-a)<7&&Qh(c);Xn=Fo(n,void 0,o,a,l,!1),Xn.owned=!0,be.car=n,Zn(),Dn("\u{1F697} "+Is[n].name+" is here!","#7af0ff"),tc()}Ye("phone").addEventListener("click",n=>{let e=n.target.closest("button");if(e)if(Ps(),qt.click(),e.dataset.buy){let t=e.dataset.buy;be.cash>=Is[t].cost&&(be.cash-=Is[t].cost,be.owned.push(t),Zn(),qt.cash(),is=!0,zo())}else e.dataset.call?Xv(e.dataset.call):e.dataset.act==="cancel"&&(No(),zo())});Ye("playBtn").onclick=Vv;Ye("helpBtn").onclick=()=>{qt.click(),Ls("help"),Ye("helpBack").dataset.back="start"};Ye("pHelp").onclick=()=>{Ls("help"),Ye("helpBack").dataset.back="phone"};Ye("helpBack").onclick=()=>{Ls(Ye("helpBack").dataset.back==="phone"?"phone":"start")};Ye("muteBtn").onclick=()=>{be.muted=!be.muted,Zn(),Ps(),be.muted&&ap(),mp()};Ye("pMute").onclick=()=>{be.muted=!be.muted,be.muted?ap():Ps(),Zn(),zo()};Ye("pQuality").onclick=()=>{let n=["auto","high","medium","low"];be.quality=n[(n.indexOf(be.quality)+1)%4],Zh=!0,Zl(be.quality==="auto"?"high":be.quality),Zn(),zo()};Ye("pRespawn").onclick=()=>{K.car&&ec(),K.pos.copy(rp),K.vel.set(0,0,0),Ki.copy(K.pos),tc(),Dn("\u{1F4CD} Back at the start")};Ye("pClose").onclick=tc;Ye("menuBtn").addEventListener("pointerdown",n=>{n.stopPropagation(),iu()});document.addEventListener("visibilitychange",()=>{document.hidden&&(Zn(),On==="play"&&iu())});window.addEventListener("pagehide",Zn);function gp(){jt.setSize(window.innerWidth,window.innerHeight),Pn.aspect=window.innerWidth/window.innerHeight,Pn.updateProjectionMatrix()}window.addEventListener("resize",gp);window.addEventListener("orientationchange",()=>setTimeout(gp,250));var Uf=performance.now();function _p(n){requestAnimationFrame(_p);let e=(n-Uf)/1e3;Uf=n,e>0||(e=0);let t=Math.min(e,.05);try{if(On==="play"){Ln+=t,bf(Ln);for(let s of Fn)s.ai&&s!==K.car&&Af(s,t);K.car?Uv(K.car,t):Nv(t);for(let s of Fn)!s.ai&&s!==K.car&&Math.abs(s.speed)>.05&&(s.speed*=1-2*t,s.pos.x+=Math.sin(s.yaw)*s.speed*t,s.pos.z+=Math.cos(s.yaw)*s.speed*t),Df(s,t);for(let s of Li)Cf(s,t);if(Bv(t),kv(t),Ln-If>6&&(If=Ln,Zn()),!Zh&&Ln>2&&(Vh+=e,Nf++,Vh>4)){let s=Nf/Vh;Zh=!0,s<24?Zl("low"):s<38&&Zl("medium")}}else{Ln+=t*.5,On==="start"&&(Un+=t*.06),bf(Ln);for(let s of Fn)s.ai&&Af(s,t),Df(s,t);for(let s of Li)Cf(s,t)}let i=Pn.position;Wh(K.person,t);for(let s of Li){let r=(s.pos.x-i.x)**2+(s.pos.z-i.z)**2;(r<14400||(Lf+s.idx&3)===0)&&Wh(s,r<14400?t:t*4)}for(let s of $l)s.im.instanceMatrix.needsUpdate=!0;Lf++,zv(t),jt.render(Rt,Pn)}catch(i){console.error(i)}}K.person.pos.copy(K.pos);K.person.yaw=K.yaw;for(let n of Li)Wh(n,0);for(let n of $l)n.im.instanceColor.needsUpdate=!0;Ki.set(K.pos.x,K.pos.y+1.55,K.pos.z);Ye("ver").textContent="v"+Jh;mp();On="start";Ls("start");Ye("loading").classList.add("hidden");requestAnimationFrame(_p);window.__SR={P:K,get M(){return je},save:be,vehicles:Fn,peds:Li,VERSION:Jh,jobSpots:jl,raceStart:Sr,toggleCar:ec,get nearCar(){return Bo},get state(){return On},joy:Qt,btn:Di,coinMeshes:Kl,renderer:jt,camera:Pn,setCam:(n,e)=>{Un=n,ws=e}};
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
