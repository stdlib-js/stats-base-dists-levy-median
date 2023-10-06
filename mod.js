// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var e=Math.sqrt;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"";var u=n&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,a,u,c;if(null==r)return t.call(r);n=r[o],c=o,e=null!=(u=r)&&i.call(u,c);try{r[o]=void 0}catch(e){return t.call(r)}return a=t.call(r),e?r[o]=n:delete r[o],a}:function(r){return t.call(r)},c="function"==typeof Uint32Array;var f="function"==typeof Uint32Array?Uint32Array:null;var s,l="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,e,n;if("function"!=typeof f)return!1;try{e=new f(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(c&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p=s,g="function"==typeof Float64Array;var v="function"==typeof Float64Array?Float64Array:null;var y,d="function"==typeof Float64Array?Float64Array:void 0;y=function(){var r,e,n;if("function"!=typeof v)return!1;try{e=new v([1,3.14,-3.14,NaN]),n=e,r=(g&&n instanceof Float64Array||"[object Float64Array]"===u(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h=y,w="function"==typeof Uint8Array;var b="function"==typeof Uint8Array?Uint8Array:null;var m,A="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,e,n;if("function"!=typeof b)return!1;try{e=new b(e=[1,3.14,-3.14,256,257]),n=e,r=(w&&n instanceof Uint8Array||"[object Uint8Array]"===u(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _=m,E="function"==typeof Uint16Array;var U="function"==typeof Uint16Array?Uint16Array:null;var I,N="function"==typeof Uint16Array?Uint16Array:void 0;I=function(){var r,e,n;if("function"!=typeof U)return!1;try{e=new U(e=[1,3.14,-3.14,65536,65537]),n=e,r=(E&&n instanceof Uint16Array||"[object Uint16Array]"===u(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?N:function(){throw new Error("not implemented")};var S,x={uint16:I,uint8:_};(S=new x.uint16(1))[0]=4660;var k=52===new x.uint8(S.buffer)[0],F=!0===k?1:0,j=new h(1),T=new p(j.buffer);function O(r){return j[0]=r,T[F]}var V=!0===k?1:0,$=new h(1),G=new p($.buffer);function H(r,e){return $[0]=r,G[V]=e>>>0,$[0]}var W=Number.NEGATIVE_INFINITY;var C=.6931471803691238,L=1.9082149292705877e-10;function P(e){var n,t,i,a,o,u,c,f,s,l,p,g;return 0===e?W:r(e)||e<0?NaN:(o=0,(t=O(e))<1048576&&(o-=54,t=O(e*=0x40000000000000)),t>=2146435072?e+e:(o+=(t>>20)-1023|0,o+=(f=(t&=1048575)+614244&1048576|0)>>20|0,c=(e=H(e,t|1072693248^f))-1,(1048575&2+t)<3?0===c?0===o?0:o*C+o*L:(u=c*c*(.5-.3333333333333333*c),0===o?c-u:o*C-(u-o*L-c)):(f=t-398458|0,s=440401-t|0,a=(p=(g=(l=c/(2+c))*l)*g)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=g*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=i+a,(f|=s)>0?(n=.5*c*c,0===o?c-(n-l*(n+u)):o*C-(n-(l*(n+u)+o*L)-c)):0===o?c-l*(c-u):o*C-(l*(c-u)-o*L-c))))}var R=Number.POSITIVE_INFINITY;var Z=Math.floor;function M(r){return Z(r)===r}function X(r){return M(r/2)}function Y(r){return X(r>0?r-1:r+1)}function q(r){return r===R||r===W}function z(r){return Math.abs(r)}var B="function"==typeof Object.defineProperty?Object.defineProperty:null;var D=Object.defineProperty;function J(r){return"number"==typeof r}function K(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function Q(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+K(i):K(i)+r,t&&(r="-"+r)),r}var rr=String.prototype.toLowerCase,er=String.prototype.toUpperCase;function nr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!J(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=Q(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=Q(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===er.call(r.specifier)?er.call(n):rr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function tr(r){return"string"==typeof r}var ir=Math.abs,ar=String.prototype.toLowerCase,or=String.prototype.toUpperCase,ur=String.prototype.replace,cr=/e\+(\d)$/,fr=/e-(\d)$/,sr=/^(\d+)$/,lr=/^(\d+)e/,pr=/\.0$/,gr=/\.0*e/,vr=/(\..*[^0])0*e/;function yr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!J(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":ir(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=ur.call(n,vr,"$1e"),n=ur.call(n,gr,"e"),n=ur.call(n,pr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=ur.call(n,cr,"e+0$1"),n=ur.call(n,fr,"e-0$1"),r.alternate&&(n=ur.call(n,sr,"$1."),n=ur.call(n,lr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===or.call(r.specifier)?or.call(n):ar.call(n)}function dr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function hr(r,e,n){var t=e-r.length;return t<0?r:r=n?r+dr(t):dr(t)+r}var wr=String.fromCharCode,br=isNaN,mr=Array.isArray;function Ar(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _r(r){var e,n,t,i,a,o,u,c,f;if(!mr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(tr(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=Ar(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,br(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,br(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=nr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!br(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=br(a)?String(t.arg):wr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=yr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Q(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=hr(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var Er=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ur(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ir(r){var e,n,t,i;for(n=[],i=0,t=Er.exec(r);t;)(e=r.slice(i,Er.lastIndex-t[0].length)).length&&n.push(e),n.push(Ur(t)),i=Er.lastIndex,t=Er.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Nr(r){return"string"==typeof r}function Sr(r){var e,n,t;if(!Nr(r))throw new TypeError(Sr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Ir(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return _r.apply(null,n)}var xr=Object.prototype,kr=xr.toString,Fr=xr.__defineGetter__,jr=xr.__defineSetter__,Tr=xr.__lookupGetter__,Or=xr.__lookupSetter__;var Vr,$r,Gr=function(){try{return B({},"x",{}),!0}catch(r){return!1}}()?D:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===kr.call(r))throw new TypeError(Sr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===kr.call(n))throw new TypeError(Sr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Tr.call(r,e)||Or.call(r,e)?(t=r.__proto__,r.__proto__=xr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Fr&&Fr.call(r,e,n.get),o&&jr&&jr.call(r,e,n.set),r};function Hr(r,e,n){Gr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===k?(Vr=1,$r=0):(Vr=0,$r=1);var Wr={HIGH:Vr,LOW:$r},Cr=new h(1),Lr=new p(Cr.buffer),Pr=Wr.HIGH,Rr=Wr.LOW;function Zr(r,e,n,t){return Cr[0]=r,e[t]=Lr[Pr],e[t+n]=Lr[Rr],e}function Mr(r){return Zr(r,[0,0],1,0)}Hr(Mr,"assign",Zr);var Xr=!0===k?0:1,Yr=new h(1),qr=new p(Yr.buffer);function zr(r,e){return Yr[0]=r,qr[Xr]=e>>>0,Yr[0]}function Br(r){return 0|r}var Dr,Jr;!0===k?(Dr=1,Jr=0):(Dr=0,Jr=1);var Kr={HIGH:Dr,LOW:Jr},Qr=new h(1),re=new p(Qr.buffer),ee=Kr.HIGH,ne=Kr.LOW;function te(r,e){return re[ee]=r,re[ne]=e,Qr[0]}var ie=[0,0];function ae(r,e){var n,t;return Mr.assign(r,ie,1,0),n=ie[0],n&=2147483647,t=O(e),te(n|=t&=2147483648,ie[1])}var oe=[1,1.5],ue=[0,.5849624872207642],ce=[0,1.350039202129749e-8];function fe(e,n,t,i){return r(e)||q(e)?(n[i]=e,n[i+t]=0,n):0!==e&&z(e)<22250738585072014e-324?(n[i]=4503599627370496*e,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}Hr((function(r){return fe(r,[0,0],1,0)}),"assign",fe);var se=[0,0],le=[0,0];function pe(e,n){var t,i;return 0===n||0===e||r(e)||q(e)?e:(fe(e,se,1,0),n+=se[1],n+=function(r){var e=O(r);return(e=(2146435072&e)>>>20)-1023|0}(e=se[0]),n<-1074?ae(0,e):n>1023?e<0?W:R:(n<=-1023?(n+=52,i=2220446049250313e-31):i=1,Mr.assign(e,le,1,0),t=le[0],t&=2148532223,i*te(t|=n+1023<<20,le[1])))}var ge=1e300,ve=1e-300,ye=[0,0],de=[0,0];var he,we,be,me,Ae,_e=2*function n(t,i){var a,o,u,c,f,s,l,p,g,v,y,d,h,w;if(r(t)||r(i))return NaN;if(Mr.assign(i,ye,1,0),f=ye[0],0===ye[1]){if(0===i)return 1;if(1===i)return t;if(-1===i)return 1/t;if(.5===i)return e(t);if(-.5===i)return 1/e(t);if(2===i)return t*t;if(3===i)return t*t*t;if(4===i)return(t*=t)*t;if(q(i))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:z(r)<1==(e===R)?0:R}(t,i)}if(Mr.assign(t,ye,1,0),c=ye[0],0===ye[1]){if(0===c)return function(r,e){return e===W?R:e===R?0:e>0?Y(e)?r:0:Y(e)?ae(R,r):R}(t,i);if(1===t)return 1;if(-1===t&&Y(i))return-1;if(q(t))return t===W?n(-0,-i):i<0?0:R}if(t<0&&!1===M(i))return(t-t)/(t-t);if(u=z(t),a=2147483647&c|0,o=2147483647&f|0,l=f>>>31|0,s=(s=c>>>31|0)&&Y(i)?-1:1,o>1105199104){if(o>1139802112)return function(r,e){return(2147483647&O(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(t,i);if(a<1072693247)return 1===l?s*ge*ge:s*ve*ve;if(a>1072693248)return 0===l?s*ge*ge:s*ve*ve;y=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=zr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(de,u)}else y=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,g,v,y,d,h,w,b,m,A,_,E;return m=0,n<1048576&&(m-=53,n=O(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=1048576),o=zr(i=(w=(e=H(e,n))-(f=oe[_]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=H(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=zr(c=3+(a=o*o)+(h+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),y=(g=-7.028461650952758e-9*(l=zr(l=(w=o*c)+(b=u*c+(h-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+ce[_])-((v=zr(v=(p=.9617967009544373*l)+g+(s=ue[_])+(d=m),0))-d-s-p),r[0]=v,r[1]=y,r}(de,u,a);if(d=(v=(i-(p=zr(i,0)))*y[0]+i*y[1])+(g=p*y[0]),Mr.assign(d,ye,1,0),h=Br(ye[0]),w=Br(ye[1]),h>=1083179008){if(0!=(h-1083179008|w))return s*ge*ge;if(v+8008566259537294e-32>d-g)return s*ge*ge}else if((2147483647&h)>=1083231232){if(0!=(h-3230714880|w))return s*ve*ve;if(v<=d-g)return s*ve*ve}return d=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,g;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=H(0,t)),r=Br(r=O(f=1-((f=(o=.6931471824645996*(a=zr(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=f-(a=f*f)*(0===(g=a)?.16666666666666602:.16666666666666602+g*(g*(6613756321437934e-20+g*(4.1381367970572385e-8*g-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((c=u-(f-o))+f*c)-f))),(r+=s<<20>>>0)>>20<=0?pe(f,s):H(f,r)}(h,g,v),s*d}(r(he=.5)?NaN:0===he?R:2===he?W:1===he?0:he>2||he<0?NaN:(he>1?(we=-1,be=2-he):(we=1,be=he),(he=1-be)<=.5?(me=he*(he+10),Ae=function(r){var e,n;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(e=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,n=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(e=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),n=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),e/n)}(he),we*(.08913147449493408*me+me*Ae)):be>=.25?(me=e(-2*P(be)),Ae=function(r){var e,n;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(e=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,n=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(e=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,n=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),e/n)}(be-=.25),we*(me/(2.249481201171875+Ae))):(be=e(-P(be)))<3?(Ae=function(r){var e,n;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(e=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,n=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(e=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,n=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),e/n)}(be-1.125),we*(.807220458984375*be+Ae*be)):be<6?(Ae=function(r){var e,n;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(e=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,n=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(e=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),n=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),e/n)}(be-3),we*(.9399557113647461*be+Ae*be)):(Ae=function(r){var e,n;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(e=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,n=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(e=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),n=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),e/n)}(be-6),we*(.9836282730102539*be+Ae*be))),2);function Ee(e,n){return r(e)||r(n)||n<=0?NaN:e+n/_e}export{Ee as default};
//# sourceMappingURL=mod.js.map
