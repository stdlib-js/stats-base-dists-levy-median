// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e,n=Math.sqrt,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,u="function"==typeof o?o.toStringTag:"",c=t&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,o,c;if(null==r)return i.call(r);n=r[u],c=u,e=null!=(o=r)&&a.call(o,c);try{r[u]=void 0}catch(e){return i.call(r)}return t=i.call(r),e?r[u]=n:delete r[u],t}:function(r){return i.call(r)},f="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;e=function(){var r,e,n;if("function"!=typeof s)return!1;try{e=new s(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(f&&n instanceof Uint32Array||"[object Uint32Array]"===c(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p,y=e,g="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,h="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,e,n;if("function"!=typeof d)return!1;try{e=new d([1,3.14,-3.14,NaN]),n=e,r=(g&&n instanceof Float64Array||"[object Float64Array]"===c(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?h:function(){throw new Error("not implemented")};var v,w=p,b="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,A="function"==typeof Uint8Array?Uint8Array:void 0;v=function(){var r,e,n;if("function"!=typeof m)return!1;try{e=new m(e=[1,3.14,-3.14,256,257]),n=e,r=(b&&n instanceof Uint8Array||"[object Uint8Array]"===c(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,E=v,U="function"==typeof Uint16Array,I="function"==typeof Uint16Array?Uint16Array:null,N="function"==typeof Uint16Array?Uint16Array:void 0;_=function(){var r,e,n;if("function"!=typeof I)return!1;try{e=new I(e=[1,3.14,-3.14,65536,65537]),n=e,r=(U&&n instanceof Uint16Array||"[object Uint16Array]"===c(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?N:function(){throw new Error("not implemented")};var S,x={uint16:_,uint8:E};(S=new x.uint16(1))[0]=4660;var k=52===new x.uint8(S.buffer)[0],F=!0===k?1:0,j=new w(1),T=new y(j.buffer);function O(r){return j[0]=r,T[F]}var V=!0===k?1:0,$=new w(1),G=new y($.buffer);function H(r,e){return $[0]=r,G[V]=e>>>0,$[0]}var W=1023,C=Number.NEGATIVE_INFINITY,L=.6931471803691238,P=1.9082149292705877e-10,R=1048575;function Z(e){var n,t,i,a,o,u,c,f,s,l,p,y;return 0===e?C:r(e)||e<0?NaN:(o=0,(t=O(e))<1048576&&(o-=54,t=O(e*=0x40000000000000)),t>=2146435072?e+e:(o+=(t>>20)-W|0,o+=(f=614244+(t&=R)&1048576|0)>>20|0,c=(e=H(e,t|1072693248^f))-1,(R&2+t)<3?0===c?0===o?0:o*L+o*P:(u=c*c*(.5-.3333333333333333*c),0===o?c-u:o*L-(u-o*P-c)):(f=t-398458|0,s=440401-t|0,a=(p=(y=(l=c/(2+c))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=i+a,(f|=s)>0?(n=.5*c*c,0===o?c-(n-l*(n+u)):o*L-(n-(l*(n+u)+o*P)-c)):0===o?c-l*(c-u):o*L-(l*(c-u)-o*P-c))))}var M=Number.POSITIVE_INFINITY,X=Math.floor;function Y(r){return X(r)===r}function q(r){return Y(r/2)}function z(r){return q(r>0?r-1:r+1)}function B(r){return r===M||r===C}function D(r){return Math.abs(r)}var J="function"==typeof Object.defineProperty?Object.defineProperty:null,K=Object.defineProperty;function Q(r){return"number"==typeof r}function rr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function er(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+rr(i):rr(i)+r,t&&(r="-"+r)),r}var nr=String.prototype.toLowerCase,tr=String.prototype.toUpperCase;function ir(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!Q(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=er(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=er(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===tr.call(r.specifier)?tr.call(n):nr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function ar(r){return"string"==typeof r}var or=Math.abs,ur=String.prototype.toLowerCase,cr=String.prototype.toUpperCase,fr=String.prototype.replace,sr=/e\+(\d)$/,lr=/e-(\d)$/,pr=/^(\d+)$/,yr=/^(\d+)e/,gr=/\.0$/,dr=/\.0*e/,hr=/(\..*[^0])0*e/;function vr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!Q(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":or(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=fr.call(n,hr,"$1e"),n=fr.call(n,dr,"e"),n=fr.call(n,gr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=fr.call(n,sr,"e+0$1"),n=fr.call(n,lr,"e-0$1"),r.alternate&&(n=fr.call(n,pr,"$1."),n=fr.call(n,yr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===cr.call(r.specifier)?cr.call(n):ur.call(n)}function wr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function br(r,e,n){var t=e-r.length;return t<0?r:r=n?r+wr(t):wr(t)+r}var mr=String.fromCharCode,Ar=isNaN,_r=Array.isArray;function Er(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ur(r){var e,n,t,i,a,o,u,c,f;if(!_r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(ar(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=Er(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Ar(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Ar(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=ir(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Ar(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ar(a)?String(t.arg):mr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=vr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=er(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=br(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var Ir=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Nr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Sr(r){var e,n,t,i;for(n=[],i=0,t=Ir.exec(r);t;)(e=r.slice(i,Ir.lastIndex-t[0].length)).length&&n.push(e),n.push(Nr(t)),i=Ir.lastIndex,t=Ir.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function xr(r){return"string"==typeof r}function kr(r){var e,n,t;if(!xr(r))throw new TypeError(kr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Sr(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return Ur.apply(null,n)}var Fr,jr,Tr=Object.prototype,Or=Tr.toString,Vr=Tr.__defineGetter__,$r=Tr.__defineSetter__,Gr=Tr.__lookupGetter__,Hr=Tr.__lookupSetter__,Wr=function(){try{return J({},"x",{}),!0}catch(r){return!1}}()?K:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Or.call(r))throw new TypeError(kr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Or.call(n))throw new TypeError(kr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Gr.call(r,e)||Hr.call(r,e)?(t=r.__proto__,r.__proto__=Tr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Vr&&Vr.call(r,e,n.get),o&&$r&&$r.call(r,e,n.set),r};function Cr(r,e,n){Wr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===k?(Fr=1,jr=0):(Fr=0,jr=1);var Lr={HIGH:Fr,LOW:jr},Pr=new w(1),Rr=new y(Pr.buffer),Zr=Lr.HIGH,Mr=Lr.LOW;function Xr(r,e,n,t){return Pr[0]=r,e[t]=Rr[Zr],e[t+n]=Rr[Mr],e}function Yr(r){return Xr(r,[0,0],1,0)}Cr(Yr,"assign",Xr);var qr=!0===k?0:1,zr=new w(1),Br=new y(zr.buffer);function Dr(r,e){return zr[0]=r,Br[qr]=e>>>0,zr[0]}function Jr(r){return 0|r}var Kr,Qr,re=2147483647;!0===k?(Kr=1,Qr=0):(Kr=0,Qr=1);var ee={HIGH:Kr,LOW:Qr},ne=new w(1),te=new y(ne.buffer),ie=ee.HIGH,ae=ee.LOW;function oe(r,e){return te[ie]=r,te[ae]=e,ne[0]}var ue=[0,0];function ce(r,e){var n,t;return Yr.assign(r,ue,1,0),n=ue[0],n&=re,t=O(e),oe(n|=t&=2147483648,ue[1])}var fe=1048576,se=[1,1.5],le=[0,.5849624872207642],pe=[0,1.350039202129749e-8];function ye(e,n,t,i){return r(e)||B(e)?(n[i]=e,n[i+t]=0,n):0!==e&&D(e)<22250738585072014e-324?(n[i]=4503599627370496*e,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}Cr((function(r){return ye(r,[0,0],1,0)}),"assign",ye);var ge=[0,0],de=[0,0];function he(e,n){var t,i;return 0===n||0===e||r(e)||B(e)?e:(ye(e,ge,1,0),n+=ge[1],n+=function(r){var e=O(r);return(e=(2146435072&e)>>>20)-W|0}(e=ge[0]),n<-1074?ce(0,e):n>1023?e<0?C:M:(n<=-1023?(n+=52,i=2220446049250313e-31):i=1,Yr.assign(e,de,1,0),t=de[0],t&=2148532223,i*oe(t|=n+W<<20,de[1])))}var ve,we,be,me,Ae,_e=1048575,Ee=1048576,Ue=1083179008,Ie=1e300,Ne=1e-300,Se=[0,0],xe=[0,0],ke=2*function e(t,i){var a,o,u,c,f,s,l,p,y,g,d,h,v,w;if(r(t)||r(i))return NaN;if(Yr.assign(i,Se,1,0),f=Se[0],0===Se[1]){if(0===i)return 1;if(1===i)return t;if(-1===i)return 1/t;if(.5===i)return n(t);if(-.5===i)return 1/n(t);if(2===i)return t*t;if(3===i)return t*t*t;if(4===i)return(t*=t)*t;if(B(i))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:D(r)<1==(e===M)?0:M}(t,i)}if(Yr.assign(t,Se,1,0),c=Se[0],0===Se[1]){if(0===c)return function(r,e){return e===C?M:e===M?0:e>0?z(e)?r:0:z(e)?ce(M,r):M}(t,i);if(1===t)return 1;if(-1===t&&z(i))return-1;if(B(t))return t===C?e(-0,-i):i<0?0:M}if(t<0&&!1===Y(i))return(t-t)/(t-t);if(u=D(t),a=c&re|0,o=f&re|0,l=f>>>31|0,s=(s=c>>>31|0)&&z(i)?-1:1,o>1105199104){if(o>1139802112)return function(r,e){return(O(r)&re)<=1072693247?e<0?1/0:0:e>0?1/0:0}(t,i);if(a<1072693247)return 1===l?s*Ie*Ie:s*Ne*Ne;if(a>1072693248)return 0===l?s*Ie*Ie:s*Ne*Ne;d=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Dr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(xe,u)}else d=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y,g,d,h,v,w,b,m,A,_,E;return m=0,n<fe&&(m-=53,n=O(e*=9007199254740992)),m+=(n>>20)-W|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=fe),o=Dr(i=(w=(e=H(e,n))-(f=se[_]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=H(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Dr(c=3+(a=o*o)+(v+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=Dr(l=(w=o*c)+(b=u*c+(v-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+pe[_])-((g=Dr(g=(p=.9617967009544373*l)+y+(s=le[_])+(h=m),0))-h-s-p),r[0]=g,r[1]=d,r}(xe,u,a);if(h=(g=(i-(p=Dr(i,0)))*d[0]+i*d[1])+(y=p*d[0]),Yr.assign(h,Se,1,0),v=Jr(Se[0]),w=Jr(Se[1]),v>=Ue){if(0!=(v-Ue|w))return s*Ie*Ie;if(g+8008566259537294e-32>h-y)return s*Ie*Ie}else if((v&re)>=1083231232){if(0!=(v-3230714880|w))return s*Ne*Ne;if(g<=h-y)return s*Ne*Ne}return h=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&re|0)>>20)-W|0,f=0,s>1071644672&&(i=H(0,((f=r+(Ee>>l+1)>>>0)&~(_e>>(l=((f&re)>>20)-W|0)))>>>0),f=(f&_e|Ee)>>20-l>>>0,r<0&&(f=-f),e-=i),r=Jr(r=O(c=1-((c=(a=.6931471824645996*(i=Dr(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?he(c,f):H(c,r)}(v,y,g),s*h}(r(ve=.5)?NaN:0===ve?M:2===ve?C:1===ve?0:ve>2||ve<0?NaN:(ve>1?(we=-1,be=2-ve):(we=1,be=ve),(ve=1-be)<=.5?(me=ve*(ve+10),Ae=function(r){var e,n;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(e=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,n=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(e=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),n=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),e/n)}(ve),we*(.08913147449493408*me+me*Ae)):be>=.25?(me=n(-2*Z(be)),Ae=function(r){var e,n;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(e=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,n=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(e=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,n=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),e/n)}(be-=.25),we*(me/(2.249481201171875+Ae))):(be=n(-Z(be)))<3?(Ae=function(r){var e,n;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(e=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,n=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(e=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,n=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),e/n)}(be-1.125),we*(.807220458984375*be+Ae*be)):be<6?(Ae=function(r){var e,n;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(e=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,n=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(e=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),n=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),e/n)}(be-3),we*(.9399557113647461*be+Ae*be)):(Ae=function(r){var e,n;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(e=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,n=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(e=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),n=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),e/n)}(be-6),we*(.9836282730102539*be+Ae*be))),2);return function(e,n){return r(e)||r(n)||n<=0?NaN:e+n/ke}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).median=e();
//# sourceMappingURL=index.js.map
