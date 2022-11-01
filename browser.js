// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n,t=Math.sqrt,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,u=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"";n=e&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,f,a;if(null==r)return o.call(r);t=r[i],a=i,n=null!=(f=r)&&u.call(f,a);try{r[i]=void 0}catch(n){return o.call(r)}return e=o.call(r),n?r[i]=t:delete r[i],e}:function(r){return o.call(r)};var f,a=n,c="function"==typeof Uint32Array,l="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var r,n,t;if("function"!=typeof l)return!1;try{n=new l(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(c&&t instanceof Uint32Array||"[object Uint32Array]"===a(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?y:function(){throw new Error("not implemented")};var p,v=f,b="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,w="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d([1,3.14,-3.14,NaN]),t=n,r=(b&&t instanceof Float64Array||"[object Float64Array]"===a(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?w:function(){throw new Error("not implemented")};var s,A=p,_="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,h="function"==typeof Uint8Array?Uint8Array:void 0;s=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,256,257]),t=n,r=(_&&t instanceof Uint8Array||"[object Uint8Array]"===a(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var U,N=s,g="function"==typeof Uint16Array,j="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j(n=[1,3.14,-3.14,65536,65537]),t=n,r=(g&&t instanceof Uint16Array||"[object Uint16Array]"===a(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O,S={uint16:U,uint8:N};(O=new S.uint16(1))[0]=4660;var E=52===new S.uint8(O.buffer)[0],F=!0===E?1:0,T=new A(1),H=new v(T.buffer);function G(r){return T[0]=r,H[F]}var P=!0===E?1:0,x=new A(1),L=new v(x.buffer);function V(r,n){return x[0]=r,L[P]=n>>>0,x[0]}var W=1023,M=Number.NEGATIVE_INFINITY,k=.6931471803691238,Y=1.9082149292705877e-10,q=1048575;function C(n){var t,e,o,u,i,f,a,c,l,y,p,v;return 0===n?M:r(n)||n<0?NaN:(i=0,(e=G(n))<1048576&&(i-=54,e=G(n*=0x40000000000000)),e>=2146435072?n+n:(i+=(e>>20)-W|0,i+=(c=614244+(e&=q)&1048576|0)>>20|0,a=(n=V(n,e|1072693248^c))-1,(q&2+e)<3?0===a?0===i?0:i*k+i*Y:(f=a*a*(.5-.3333333333333333*a),0===i?a-f:i*k-(f-i*Y-a)):(c=e-398458|0,l=440401-e|0,u=(p=(v=(y=a/(2+a))*y)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),o=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),f=o+u,(c|=l)>0?(t=.5*a*a,0===i?a-(t-y*(t+f)):i*k-(t-(y*(t+f)+i*Y)-a)):0===i?a-y*(a-f):i*k-(y*(a-f)-i*Y-a))))}var z,B,D=Number.POSITIVE_INFINITY,J=Math.floor;function K(r){return J(r)===r}function Q(r){return K(r/2)}function R(r){return Q(r>0?r-1:r+1)}function X(r){return r===D||r===M}function Z(r){return Math.abs(r)}!0===E?(z=1,B=0):(z=0,B=1);var $={HIGH:z,LOW:B},rr=new A(1),nr=new v(rr.buffer),tr=$.HIGH,er=$.LOW;function or(r,n){return rr[0]=n,r[0]=nr[tr],r[1]=nr[er],r}function ur(r,n){return 1===arguments.length?or([0,0],r):or(r,n)}var ir,fr,ar=!0===E?0:1,cr=new A(1),lr=new v(cr.buffer);function yr(r,n){return cr[0]=r,lr[ar]=n>>>0,cr[0]}function pr(r){return 0|r}!0===E?(ir=1,fr=0):(ir=0,fr=1);var vr={HIGH:ir,LOW:fr},br=new A(1),dr=new v(br.buffer),wr=vr.HIGH,sr=vr.LOW;function Ar(r,n){return dr[wr]=r,dr[sr]=n,br[0]}var _r=[0,0];function mr(r,n){var t,e;return ur(_r,r),t=_r[0],t&=2147483647,e=G(n),Ar(t|=e&=2147483648,_r[1])}var hr,Ur,Nr=1048576,gr=[1,1.5],jr=[0,.5849624872207642],Ir=[0,1.350039202129749e-8],Or="function"==typeof Object.defineProperty?Object.defineProperty:null,Sr=Object.defineProperty,Er=Object.prototype,Fr=Er.toString,Tr=Er.__defineGetter__,Hr=Er.__defineSetter__,Gr=Er.__lookupGetter__,Pr=Er.__lookupSetter__;function xr(n,t,e,o){return r(n)||X(n)?(t[o]=n,t[o+e]=0,t):0!==n&&Z(n)<22250738585072014e-324?(t[o]=4503599627370496*n,t[o+e]=-52,t):(t[o]=n,t[o+e]=0,t)}hr=function(){try{return Or({},"x",{}),!0}catch(r){return!1}}()?Sr:function(r,n,t){var e,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===Fr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===Fr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(Gr.call(r,n)||Pr.call(r,n)?(e=r.__proto__,r.__proto__=Er,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,i="set"in t,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&Tr&&Tr.call(r,n,t.get),i&&Hr&&Hr.call(r,n,t.set),r},Ur=function(r){return xr(r,[0,0],1,0)},hr(Ur,"assign",{configurable:!1,enumerable:!1,writable:!1,value:xr});var Lr=[0,0],Vr=[0,0];function Wr(n,t){var e,o;return 0===t||0===n||r(n)||X(n)?n:(xr(n,Lr,1,0),t+=Lr[1],t+=function(r){var n=G(r);return(n=(2146435072&n)>>>20)-W|0}(n=Lr[0]),t<-1074?mr(0,n):t>1023?n<0?M:D:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,ur(Vr,n),e=Vr[0],e&=2148532223,o*Ar(e|=t+W<<20,Vr[1])))}var Mr,kr,Yr,qr,Cr,zr=2147483647,Br=1048575,Dr=1048576,Jr=2147483647,Kr=1083179008,Qr=1e300,Rr=1e-300,Xr=[0,0],Zr=[0,0],$r=2*function n(e,o){var u,i,f,a,c,l,y,p,v,b,d,w,s,A;if(r(e)||r(o))return NaN;if(ur(Xr,o),c=Xr[0],0===Xr[1]){if(0===o)return 1;if(1===o)return e;if(-1===o)return 1/e;if(.5===o)return t(e);if(-.5===o)return 1/t(e);if(2===o)return e*e;if(3===o)return e*e*e;if(4===o)return(e*=e)*e;if(X(o))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Z(r)<1==(n===D)?0:D}(e,o)}if(ur(Xr,e),a=Xr[0],0===Xr[1]){if(0===a)return function(r,n){return n===M?D:n===D?0:n>0?R(n)?r:0:R(n)?mr(D,r):D}(e,o);if(1===e)return 1;if(-1===e&&R(o))return-1;if(X(e))return e===M?n(-0,-o):o<0?0:D}if(e<0&&!1===K(o))return(e-e)/(e-e);if(f=Z(e),u=a&Jr|0,i=c&Jr|0,y=c>>>31|0,l=(l=a>>>31|0)&&R(o)?-1:1,i>1105199104){if(i>1139802112)return function(r,n){return(2147483647&G(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(e,o);if(u<1072693247)return 1===y?l*Qr*Qr:l*Rr*Rr;if(u>1072693248)return 0===y?l*Qr*Qr:l*Rr*Rr;d=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=yr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Zr,f)}else d=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,b,d,w,s,A,_,m,h,U,N;return m=0,t<Nr&&(m-=53,t=G(n*=9007199254740992)),m+=(t>>20)-W|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=Nr),i=yr(o=(A=(n=V(n,t))-(c=gr[U]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=V(0,e+=U<<18),s=(u=o*o)*u*(0===(N=u)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=yr(a=3+(u=i*i)+(s+=(f=_*(A-i*a-i*(n-(a-c))))*(i+o)),0),d=(v=-7.028461650952758e-9*(y=yr(y=(A=i*a)+(_=f*a+(s-(a-3-u))*o),0))+.9617966939259756*(_-(y-A))+Ir[U])-((b=yr(b=(p=.9617967009544373*y)+v+(l=jr[U])+(w=m),0))-w-l-p),r[0]=b,r[1]=d,r}(Zr,f,u);if(b=(o-(p=yr(o,0)))*d[0]+o*d[1],v=p*d[0],ur(Xr,w=b+v),s=pr(Xr[0]),A=pr(Xr[1]),s>=Kr){if(0!=(s-Kr|A))return l*Qr*Qr;if(b+8008566259537294e-32>w-v)return l*Qr*Qr}else if((s&Jr)>=1083231232){if(0!=(s-3230714880|A))return l*Rr*Rr;if(b<=w-v)return l*Rr*Rr}return w=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&zr|0)>>20)-W|0,c=0,l>1071644672&&(o=V(0,((c=r+(Dr>>y+1)>>>0)&~(Br>>(y=((c&zr)>>20)-W|0)))>>>0),c=(c&Br|Dr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=pr(r=G(a=1-((a=(u=.6931471824645996*(o=yr(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Wr(a,c):V(a,r)}(s,v,b),l*w}(r(Mr=.5)?NaN:0===Mr?D:2===Mr?M:1===Mr?0:Mr>2||Mr<0?NaN:(Mr>1?(kr=-1,Yr=2-Mr):(kr=1,Yr=Mr),(Mr=1-Yr)<=.5?(qr=Mr*(Mr+10),Cr=function(r){var n,t;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(n=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,t=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(n=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),t=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),n/t)}(Mr),kr*(.08913147449493408*qr+qr*Cr)):Yr>=.25?(qr=t(-2*C(Yr)),Cr=function(r){var n,t;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(n=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,t=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(n=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,t=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),n/t)}(Yr-=.25),kr*(qr/(2.249481201171875+Cr))):(Yr=t(-C(Yr)))<3?(Cr=function(r){var n,t;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(n=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,t=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(n=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,t=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),n/t)}(Yr-1.125),kr*(.807220458984375*Yr+Cr*Yr)):Yr<6?(Cr=function(r){var n,t;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(n=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,t=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(n=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),t=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),n/t)}(Yr-3),kr*(.9399557113647461*Yr+Cr*Yr)):(Cr=function(r){var n,t;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(n=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,t=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(n=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),t=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),n/t)}(Yr-6),kr*(.9836282730102539*Yr+Cr*Yr))),2);return function(n,t){return r(n)||r(t)||t<=0?NaN:n+t/$r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).median=n();
//# sourceMappingURL=browser.js.map
