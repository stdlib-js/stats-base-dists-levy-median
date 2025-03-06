// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e,n=Math.sqrt,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,u="function"==typeof o?o.toStringTag:"",c=t&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,o,c;if(null==r)return i.call(r);n=r[u],c=u,e=null!=(o=r)&&a.call(o,c);try{r[u]=void 0}catch(e){return i.call(r)}return t=i.call(r),e?r[u]=n:delete r[u],t}:function(r){return i.call(r)},f="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;e=function(){var r,e,n;if("function"!=typeof s)return!1;try{e=new s(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(f&&n instanceof Uint32Array||"[object Uint32Array]"===c(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p,g=e,y="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,h="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,e,n;if("function"!=typeof d)return!1;try{e=new d([1,3.14,-3.14,NaN]),n=e,r=(y&&n instanceof Float64Array||"[object Float64Array]"===c(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?h:function(){throw new Error("not implemented")};var v,w=p,b="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,A="function"==typeof Uint8Array?Uint8Array:void 0;v=function(){var r,e,n;if("function"!=typeof m)return!1;try{e=new m(e=[1,3.14,-3.14,256,257]),n=e,r=(b&&n instanceof Uint8Array||"[object Uint8Array]"===c(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,E=v,U="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;_=function(){var r,e,n;if("function"!=typeof S)return!1;try{e=new S(e=[1,3.14,-3.14,65536,65537]),n=e,r=(U&&n instanceof Uint16Array||"[object Uint16Array]"===c(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")};var x,N={uint16:_,uint8:E};(x=new N.uint16(1))[0]=4660;var k=52===new N.uint8(x.buffer)[0],F=!0===k?1:0,j=new w(1),T=new g(j.buffer);function O(r){return j[0]=r,T[F]}var V=!0===k?1:0,$=new w(1),G=new g($.buffer);function H(r,e){return $[0]=r,G[V]=e>>>0,$[0]}var W=1023,C=Number.NEGATIVE_INFINITY,L=.6931471803691238,P=1.9082149292705877e-10,R=0x40000000000000,Z=.3333333333333333,M=1048575,X=2146435072,Y=1048576,q=1072693248;function z(e){var n,t,i,a,o,u,c,f,s,l,p,g;return 0===e?C:r(e)||e<0?NaN:(o=0,(t=O(e))<Y&&(o-=54,t=O(e*=R)),t>=X?e+e:(o+=(t>>20)-W|0,o+=(f=614244+(t&=M)&1048576|0)>>20|0,c=(e=H(e,t|f^q))-1,(M&2+t)<3?0===c?0===o?0:o*L+o*P:(u=c*c*(.5-Z*c),0===o?c-u:o*L-(u-o*P-c)):(f=t-398458|0,s=440401-t|0,a=(p=(g=(l=c/(2+c))*l)*g)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=g*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=i+a,(f|=s)>0?(n=.5*c*c,0===o?c-(n-l*(n+u)):o*L-(n-(l*(n+u)+o*P)-c)):0===o?c-l*(c-u):o*L-(l*(c-u)-o*P-c))))}var B=Number.POSITIVE_INFINITY,D=Math.floor;function J(r){return D(r)===r}function K(r){return J(r/2)}function Q(r){return K(r>0?r-1:r+1)}function rr(r){return r===B||r===C}function er(r){return Math.abs(r)}var nr="function"==typeof Object.defineProperty?Object.defineProperty:null,tr=Object.defineProperty;function ir(r){return"number"==typeof r}function ar(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function or(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+ar(i):ar(i)+r,t&&(r="-"+r)),r}var ur=String.prototype.toLowerCase,cr=String.prototype.toUpperCase;function fr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!ir(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=or(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=or(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===cr.call(r.specifier)?cr.call(n):ur.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var sr=Math.abs,lr=String.prototype.toLowerCase,pr=String.prototype.toUpperCase,gr=String.prototype.replace,yr=/e\+(\d)$/,dr=/e-(\d)$/,hr=/^(\d+)$/,vr=/^(\d+)e/,wr=/\.0$/,br=/\.0*e/,mr=/(\..*[^0])0*e/;function Ar(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!ir(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":sr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=gr.call(n,mr,"$1e"),n=gr.call(n,br,"e"),n=gr.call(n,wr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=gr.call(n,yr,"e+0$1"),n=gr.call(n,dr,"e-0$1"),r.alternate&&(n=gr.call(n,hr,"$1."),n=gr.call(n,vr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===pr.call(r.specifier)?pr.call(n):lr.call(n)}function _r(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var Er=String.fromCharCode,Ur=Array.isArray;function Sr(r){return r!=r}function Ir(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function xr(r){var e,n,t,i,a,o,u,c,f,s,l,p,g;if(!Ur(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if("string"==typeof(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=Ir(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Sr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Sr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=fr(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!Sr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Sr(a)?String(t.arg):Er(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Ar(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=or(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,g=void 0,(g=l-s.length)<0?s:s=p?s+_r(g):_r(g)+s)),o+=t.arg||"",u+=1}return o}var Nr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function kr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Fr(r){var e,n,t,i;for(n=[],i=0,t=Nr.exec(r);t;)(e=r.slice(i,Nr.lastIndex-t[0].length)).length&&n.push(e),n.push(kr(t)),i=Nr.lastIndex,t=Nr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function jr(r){var e,n;if("string"!=typeof r)throw new TypeError(jr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Fr(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return xr.apply(null,e)}var Tr,Or,Vr=Object.prototype,$r=Vr.toString,Gr=Vr.__defineGetter__,Hr=Vr.__defineSetter__,Wr=Vr.__lookupGetter__,Cr=Vr.__lookupSetter__,Lr=function(){try{return nr({},"x",{}),!0}catch(r){return!1}}()?tr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===$r.call(r))throw new TypeError(jr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===$r.call(n))throw new TypeError(jr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Wr.call(r,e)||Cr.call(r,e)?(t=r.__proto__,r.__proto__=Vr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Gr&&Gr.call(r,e,n.get),o&&Hr&&Hr.call(r,e,n.set),r};function Pr(r,e,n){Lr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===k?(Tr=1,Or=0):(Tr=0,Or=1);var Rr={HIGH:Tr,LOW:Or},Zr=new w(1),Mr=new g(Zr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function qr(r,e,n,t){return Zr[0]=r,e[t]=Mr[Xr],e[t+n]=Mr[Yr],e}function zr(r){return qr(r,[0,0],1,0)}Pr(zr,"assign",qr);var Br=!0===k?0:1,Dr=new w(1),Jr=new g(Dr.buffer);function Kr(r,e){return Dr[0]=r,Jr[Br]=e>>>0,Dr[0]}function Qr(r){return 0|r}var re,ee,ne=2147483647,te=2147483648;!0===k?(re=1,ee=0):(re=0,ee=1);var ie={HIGH:re,LOW:ee},ae=new w(1),oe=new g(ae.buffer),ue=ie.HIGH,ce=ie.LOW;function fe(r,e){return oe[ue]=r,oe[ce]=e,ae[0]}var se=[0,0];function le(r,e){var n,t;return zr.assign(r,se,1,0),n=se[0],n&=ne,t=O(e),fe(n|=t&=te,se[1])}var pe=1072693247,ge=1e300,ye=1e-300,de=1048575,he=1048576,ve=1072693248,we=536870912,be=524288,me=20,Ae=9007199254740992,_e=.9617966939259756,Ee=.9617967009544373,Ue=-7.028461650952758e-9,Se=[1,1.5],Ie=[0,.5849624872207642],xe=[0,1.350039202129749e-8],Ne=1.4426950408889634,ke=1.4426950216293335,Fe=1.9259629911266175e-8,je=1023,Te=-1023,Oe=-1074,Ve=22250738585072014e-324,$e=4503599627370496;function Ge(e,n,t,i){return r(e)||rr(e)?(n[i]=e,n[i+t]=0,n):0!==e&&er(e)<Ve?(n[i]=e*$e,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}Pr((function(r){return Ge(r,[0,0],1,0)}),"assign",Ge);var He=2146435072,We=2220446049250313e-31,Ce=2148532223,Le=[0,0],Pe=[0,0];function Re(e,n){var t,i;return 0===n||0===e||r(e)||rr(e)?e:(Ge(e,Le,1,0),e=Le[0],n+=Le[1],n+=function(r){var e=O(r);return(e=(e&He)>>>20)-W|0}(e),n<Oe?le(0,e):n>je?e<0?C:B:(n<=Te?(n+=52,i=We):i=1,zr.assign(e,Pe,1,0),t=Pe[0],t&=Ce,i*fe(t|=n+W<<20,Pe[1])))}var Ze,Me,Xe,Ye,qe,ze=.6931471805599453,Be=1048575,De=1048576,Je=1071644672,Ke=20,Qe=.6931471824645996,rn=-1.904654299957768e-9,en=1083179008,nn=1e300,tn=1e-300,an=[0,0],on=[0,0],un=2*function e(t,i){var a,o,u,c,f,s,l,p,g,y,d,h,v,w;if(r(t)||r(i))return NaN;if(zr.assign(i,an,1,0),f=an[0],0===an[1]){if(0===i)return 1;if(1===i)return t;if(-1===i)return 1/t;if(.5===i)return n(t);if(-.5===i)return 1/n(t);if(2===i)return t*t;if(3===i)return t*t*t;if(4===i)return(t*=t)*t;if(rr(i))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:er(r)<1==(e===B)?0:B}(t,i)}if(zr.assign(t,an,1,0),c=an[0],0===an[1]){if(0===c)return function(r,e){return e===C?B:e===B?0:e>0?Q(e)?r:0:Q(e)?le(B,r):B}(t,i);if(1===t)return 1;if(-1===t&&Q(i))return-1;if(rr(t))return t===C?e(-0,-i):i<0?0:B}if(t<0&&!1===J(i))return(t-t)/(t-t);if(u=er(t),a=c&ne|0,o=f&ne|0,l=f>>>31|0,s=(s=c>>>31|0)&&Q(i)?-1:1,o>1105199104){if(o>1139802112)return function(r,e){return(O(r)&ne)<=pe?e<0?ge*ge:ye*ye:e>0?ge*ge:ye*ye}(t,i);if(a<1072693247)return 1===l?s*nn*nn:s*tn*tn;if(a>1072693248)return 0===l?s*nn*nn:s*tn*tn;d=function(r,e){var n,t,i,a,o,u,c;return a=(i=e-1)*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333)),n=(u=i*Fe-a*Ne)-((t=Kr(t=(o=ke*i)+u,0))-o),r[0]=t,r[1]=n,r}(on,u)}else d=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,g,y,d,h,v,w,b,m,A,_,E;return m=0,n<he&&(m-=53,n=O(e*=Ae)),m+=(n>>me)-W|0,n=(A=n&de|0)|ve|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=he),o=Kr(i=(w=(e=H(e,n))-(f=Se[_]))*(b=1/(e+f)),0),t=(n>>1|we)+be,c=H(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Kr(c=3+(a=o*o)+(v+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),l=Kr(l=(w=o*c)+(b=u*c+(v-(c-3-a))*i),0),p=Ee*l,d=(g=Ue*l+(b-(l-w))*_e+xe[_])-((y=Kr(y=p+g+(s=Ie[_])+(h=m),0))-h-s-p),r[0]=y,r[1]=d,r}(on,u,a);if(h=(y=(i-(p=Kr(i,0)))*d[0]+i*d[1])+(g=p*d[0]),zr.assign(h,an,1,0),v=Qr(an[0]),w=Qr(an[1]),v>=en){if(0!=(v-en|w))return s*nn*nn;if(y+8008566259537294e-32>h-g)return s*nn*nn}else if((v&ne)>=1083231232){if(0!=(v-3230714880|w))return s*tn*tn;if(y<=h-g)return s*tn*tn}return h=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&ne|0)>>Ke)-W|0,f=0,s>Je&&(i=H(0,((f=r+(De>>l+1)>>>0)&~(Be>>(l=((f&ne)>>Ke)-W|0)))>>>0),f=(f&Be|De)>>Ke-l>>>0,r<0&&(f=-f),e-=i),r=Qr(r=O(c=1-((c=(a=(i=Kr(i=n+e,0))*Qe)+(o=(n-(i-e))*ze+i*rn))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<Ke>>>0)>>Ke<=0?Re(c,f):H(c,r)}(v,g,y),s*h}(r(Ze=.5)?NaN:0===Ze?B:2===Ze?C:1===Ze?0:Ze>2||Ze<0?NaN:(Ze>1?(Me=-1,Xe=2-Ze):(Me=1,Xe=Ze),(Ze=1-Xe)<=.5?(Ye=Ze*(Ze+10),qe=function(r){var e,n;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(e=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,n=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(e=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),n=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),e/n)}(Ze),Me*(.08913147449493408*Ye+Ye*qe)):Xe>=.25?(Ye=n(-2*z(Xe)),qe=function(r){var e,n;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(e=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,n=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(e=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,n=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),e/n)}(Xe-=.25),Me*(Ye/(2.249481201171875+qe))):(Xe=n(-z(Xe)))<3?(qe=function(r){var e,n;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(e=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,n=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(e=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,n=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),e/n)}(Xe-1.125),Me*(.807220458984375*Xe+qe*Xe)):Xe<6?(qe=function(r){var e,n;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(e=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,n=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(e=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),n=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),e/n)}(Xe-3),Me*(.9399557113647461*Xe+qe*Xe)):(qe=function(r){var e,n;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(e=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,n=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(e=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),n=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),e/n)}(Xe-6),Me*(.9836282730102539*Xe+qe*Xe))),2);return function(e,n){return r(e)||r(n)||n<=0?NaN:e+n/un}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).median=e();
//# sourceMappingURL=browser.js.map
