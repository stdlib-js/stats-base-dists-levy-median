// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";function n(n){return n!=n}var r,t=Math.sqrt,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),u=Object.prototype.toString,i=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"",f=e&&"symbol"==typeof Symbol.toStringTag?function(n){var r,t,e,f,a;if(null==n)return u.call(n);t=n[o],a=o,r=null!=(f=n)&&i.call(f,a);try{n[o]=void 0}catch(r){return u.call(n)}return e=u.call(n),r?n[o]=t:delete n[o],e}:function(n){return u.call(n)},a="function"==typeof Uint32Array,c="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var n,r,t;if("function"!=typeof c)return!1;try{r=new c(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(a&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?y:function(){throw new Error("not implemented")};var l,v=r,p="function"==typeof Float64Array,A="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;l=function(){var n,r,t;if("function"!=typeof A)return!1;try{r=new A([1,3.14,-3.14,NaN]),t=r,n=(p&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?b:function(){throw new Error("not implemented")};var w,d=l,m="function"==typeof Uint8Array,U="function"==typeof Uint8Array?Uint8Array:null,s="function"==typeof Uint8Array?Uint8Array:void 0;w=function(){var n,r,t;if("function"!=typeof U)return!1;try{r=new U(r=[1,3.14,-3.14,256,257]),t=r,n=(m&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?s:function(){throw new Error("not implemented")};var N,h=w,I="function"==typeof Uint16Array,g="function"==typeof Uint16Array?Uint16Array:null,F="function"==typeof Uint16Array?Uint16Array:void 0;N=function(){var n,r,t;if("function"!=typeof g)return!1;try{r=new g(r=[1,3.14,-3.14,65536,65537]),t=r,n=(I&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?F:function(){throw new Error("not implemented")};var S,H={uint16:N,uint8:h};(S=new H.uint16(1))[0]=4660;var O=52===new H.uint8(S.buffer)[0],T=!0===O?1:0,j=new d(1),E=new v(j.buffer);function G(n){return j[0]=n,E[T]}var L=!0===O?1:0,W=new d(1),x=new v(W.buffer);function M(n,r){return W[0]=n,x[L]=r>>>0,W[0]}var P=1023,V=Number.NEGATIVE_INFINITY,Y=.6931471803691238,_=1.9082149292705877e-10,q=1048575;function k(r){var t,e,u,i,o,f,a,c,y,l,v,p;return 0===r?V:n(r)||r<0?NaN:(o=0,(e=G(r))<1048576&&(o-=54,e=G(r*=0x40000000000000)),e>=2146435072?r+r:(o+=(e>>20)-P|0,o+=(c=614244+(e&=q)&1048576|0)>>20|0,a=(r=M(r,e|1072693248^c))-1,(q&2+e)<3?0===a?0===o?0:o*Y+o*_:(f=a*a*(.5-.3333333333333333*a),0===o?a-f:o*Y-(f-o*_-a)):(c=e-398458|0,y=440401-e|0,i=(v=(p=(l=a/(2+a))*l)*p)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(v),u=p*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(v),f=u+i,(c|=y)>0?(t=.5*a*a,0===o?a-(t-l*(t+f)):o*Y-(t-(l*(t+f)+o*_)-a)):0===o?a-l*(a-f):o*Y-(l*(a-f)-o*_-a))))}var z,B,C=Number.POSITIVE_INFINITY,D=Math.floor;function J(n){return D(n)===n}function K(n){return J(n/2)}function Q(n){return K(n>0?n-1:n+1)}function R(n){return n===C||n===V}function X(n){return Math.abs(n)}!0===O?(z=1,B=0):(z=0,B=1);var Z={HIGH:z,LOW:B},$=new d(1),nn=new v($.buffer),rn=Z.HIGH,tn=Z.LOW;function en(n,r){return $[0]=r,n[0]=nn[rn],n[1]=nn[tn],n}function un(n,r){return 1===arguments.length?en([0,0],n):en(n,r)}var on,fn,an=!0===O?0:1,cn=new d(1),yn=new v(cn.buffer);function ln(n,r){return cn[0]=n,yn[an]=r>>>0,cn[0]}function vn(n){return 0|n}!0===O?(on=1,fn=0):(on=0,fn=1);var pn={HIGH:on,LOW:fn},An=new d(1),bn=new v(An.buffer),wn=pn.HIGH,dn=pn.LOW;function mn(n,r){return bn[wn]=n,bn[dn]=r,An[0]}var Un=[0,0];function sn(n,r){var t,e;return un(Un,n),t=Un[0],t&=2147483647,e=G(r),mn(t|=e&=2147483648,Un[1])}var Nn=1048576,hn=[1,1.5],In=[0,.5849624872207642],gn=[0,1.350039202129749e-8];function Fn(r,t){return n(t)||R(t)?(r[0]=t,r[1]=0,r):0!==t&&X(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var Sn=[0,0],Hn=[0,0];function On(r,t){var e,u;return 0===t||0===r||n(r)||R(r)?r:(function(n,r){1===arguments.length?Fn([0,0],n):Fn(n,r)}(Sn,r),t+=Sn[1],t+=function(n){var r=G(n);return(r=(2146435072&r)>>>20)-P|0}(r=Sn[0]),t<-1074?sn(0,r):t>1023?r<0?V:C:(t<=-1023?(t+=52,u=2220446049250313e-31):u=1,un(Hn,r),e=Hn[0],e&=2148532223,u*mn(e|=t+P<<20,Hn[1])))}var Tn,jn,En,Gn,Ln,Wn=2147483647,xn=1048575,Mn=1048576,Pn=2147483647,Vn=1083179008,Yn=1e300,_n=1e-300,qn=[0,0],kn=[0,0],zn=2*function r(e,u){var i,o,f,a,c,y,l,v,p,A,b,w,d,m;if(n(e)||n(u))return NaN;if(un(qn,u),c=qn[0],0===qn[1]){if(0===u)return 1;if(1===u)return e;if(-1===u)return 1/e;if(.5===u)return t(e);if(-.5===u)return 1/t(e);if(2===u)return e*e;if(3===u)return e*e*e;if(4===u)return(e*=e)*e;if(R(u))return function(n,r){return-1===n?(n-n)/(n-n):1===n?1:X(n)<1==(r===C)?0:C}(e,u)}if(un(qn,e),a=qn[0],0===qn[1]){if(0===a)return function(n,r){return r===V?C:r===C?0:r>0?Q(r)?n:0:Q(r)?sn(C,n):C}(e,u);if(1===e)return 1;if(-1===e&&Q(u))return-1;if(R(e))return e===V?r(-0,-u):u<0?0:C}if(e<0&&!1===J(u))return(e-e)/(e-e);if(f=X(e),i=a&Pn|0,o=c&Pn|0,l=c>>>31|0,y=(y=a>>>31|0)&&Q(u)?-1:1,o>1105199104){if(o>1139802112)return function(n,r){return(2147483647&G(n))<=1072693247?r<0?1/0:0:r>0?1/0:0}(e,u);if(i<1072693247)return 1===l?y*Yn*Yn:y*_n*_n;if(i>1072693248)return 0===l?y*Yn*Yn:y*_n*_n;b=function(n,r){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=r-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=ln(e=(i=1.4426950216293335*u)+o,0))-i),n[0]=e,n[1]=t,n}(kn,f)}else b=function(n,r,t){var e,u,i,o,f,a,c,y,l,v,p,A,b,w,d,m,U,s,N,h,I;return s=0,t<Nn&&(s-=53,t=G(r*=9007199254740992)),s+=(t>>20)-P|0,t=1072693248|(N=1048575&t|0),N<=235662?h=0:N<767610?h=1:(h=0,s+=1,t-=Nn),o=ln(u=(m=(r=M(r,t))-(c=hn[h]))*(U=1/(r+c)),0),e=524288+(t>>1|536870912),a=M(0,e+=h<<18),d=(i=u*u)*i*(0===(I=i)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),a=ln(a=3+(i=o*o)+(d+=(f=U*(m-o*a-o*(r-(a-c))))*(o+u)),0),b=(p=-7.028461650952758e-9*(l=ln(l=(m=o*a)+(U=f*a+(d-(a-3-i))*u),0))+.9617966939259756*(U-(l-m))+gn[h])-((A=ln(A=(v=.9617967009544373*l)+p+(y=In[h])+(w=s),0))-w-y-v),n[0]=A,n[1]=b,n}(kn,f,i);if(A=(u-(v=ln(u,0)))*b[0]+u*b[1],p=v*b[0],un(qn,w=A+p),d=vn(qn[0]),m=vn(qn[1]),d>=Vn){if(0!=(d-Vn|m))return y*Yn*Yn;if(A+8008566259537294e-32>w-p)return y*Yn*Yn}else if((d&Pn)>=1083231232){if(0!=(d-3230714880|m))return y*_n*_n;if(A<=w-p)return y*_n*_n}return w=function(n,r,t){var e,u,i,o,f,a,c,y,l,v;return l=((y=n&Wn|0)>>20)-P|0,c=0,y>1071644672&&(u=M(0,((c=n+(Mn>>l+1)>>>0)&~(xn>>(l=((c&Wn)>>20)-P|0)))>>>0),c=(c&xn|Mn)>>20-l>>>0,n<0&&(c=-c),r-=u),n=vn(n=G(a=1-((a=(i=.6931471824645996*(u=ln(u=t+r,0)))+(o=.6931471805599453*(t-(u-r))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=o-(a-i))+a*f)-a))),(n+=c<<20>>>0)>>20<=0?On(a,c):M(a,n)}(d,p,A),y*w}(n(Tn=.5)?NaN:0===Tn?C:2===Tn?V:1===Tn?0:Tn>2||Tn<0?NaN:(Tn>1?(jn=-1,En=2-Tn):(jn=1,En=Tn),(Tn=1-En)<=.5?(Gn=Tn*(Tn+10),Ln=function(n){var r,t;return 0===n?-.0005087819496582806:((n<0?-n:n)<=1?(r=n*(n*(.03348066254097446+n*(n*(n*(.02198786811111689+n*(.008226878746769157+n*(n*(0+0*n)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,t=1+n*(n*(n*(1.5622155839842302+n*(.662328840472003+n*(n*(n*(.07952836873415717+n*(.0008862163904564247*n-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(r=0+(n=1/n)*(0+n*(n*(.008226878746769157+n*(.02198786811111689+n*(n*(n*(.03348066254097446+n*(-.0005087819496582806*n-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),t=.0008862163904564247+n*(n*(.07952836873415717+n*(n*(n*(.662328840472003+n*(1.5622155839842302+n*(n*(1*n-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),r/t)}(Tn),jn*(.08913147449493408*Gn+Gn*Ln)):En>=.25?(Gn=t(-2*k(En)),Ln=function(n){var r,t;return 0===n?-.20243350835593876:((n<0?-n:n)<=1?(r=n*(.10526468069939171+n*(8.3705032834312+n*(17.644729840837403+n*(n*(n*(17.445385985570866+n*(21.12946554483405+-3.6719225470772936*n))-44.6382324441787)-18.851064805871424))))-.20243350835593876,t=1+n*(6.242641248542475+n*(3.971343795334387+n*(n*(n*(48.560921310873994+n*(10.826866735546016+n*(1.7211476576120028*n-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(r=(n=1/n)*(21.12946554483405+n*(17.445385985570866+n*(n*(n*(17.644729840837403+n*(8.3705032834312+n*(.10526468069939171+-.20243350835593876*n)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,t=1.7211476576120028+n*(n*(10.826866735546016+n*(48.560921310873994+n*(n*(n*(3.971343795334387+n*(6.242641248542475+1*n))-28.66081804998)-20.14326346804852)))-22.643693341313973)),r/t)}(En-=.25),jn*(Gn/(2.249481201171875+Ln))):(En=t(-k(En)))<3?(Ln=function(n){var r,t;return 0===n?-.1311027816799519:((n<0?-n:n)<=1?(r=n*(n*(.11703015634199525+n*(.38707973897260434+n*(.3377855389120359+n*(.14286953440815717+n*(.029015791000532906+n*(.0021455899538880526+n*(n*(2.8522533178221704e-8+-6.81149956853777e-10*n)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,t=1+n*(3.4662540724256723+n*(5.381683457070069+n*(4.778465929458438+n*(2.5930192162362027+n*(.848854343457902+n*(.15226433829533179+n*(.011059242293464892+n*(0+n*(0+0*n)))))))))):(r=(n=1/n)*(2.8522533178221704e-8+n*(n*(.0021455899538880526+n*(.029015791000532906+n*(.14286953440815717+n*(.3377855389120359+n*(.38707973897260434+n*(.11703015634199525+n*(-.1311027816799519*n-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,t=0+n*(0+n*(0+n*(.011059242293464892+n*(.15226433829533179+n*(.848854343457902+n*(2.5930192162362027+n*(4.778465929458438+n*(5.381683457070069+n*(3.4662540724256723+1*n)))))))))),r/t)}(En-1.125),jn*(.807220458984375*En+Ln*En)):En<6?(Ln=function(n){var r,t;return 0===n?-.0350353787183178:((n<0?-n:n)<=1?(r=n*(n*(.018557330651423107+n*(.009508047013259196+n*(.0018712349281955923+n*(.00015754461742496055+n*(460469890584318e-20+n*(26633922742578204e-28*n-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,t=1+n*(1.3653349817554064+n*(.7620591645536234+n*(.22009110576413124+n*(.03415891436709477+n*(.00263861676657016+n*(7646752923027944e-20+n*(0+0*n)))))))):(r=26633922742578204e-28+(n=1/n)*(n*(460469890584318e-20+n*(.00015754461742496055+n*(.0018712349281955923+n*(.009508047013259196+n*(.018557330651423107+n*(-.0350353787183178*n-.0022242652921344794))))))-2.304047769118826e-10),t=0+n*(0+n*(7646752923027944e-20+n*(.00263861676657016+n*(.03415891436709477+n*(.22009110576413124+n*(.7620591645536234+n*(1.3653349817554064+1*n)))))))),r/t)}(En-3),jn*(.9399557113647461*En+Ln*En)):(Ln=function(n){var r,t;return 0===n?-.016743100507663373:((n<0?-n:n)<=1?(r=n*(n*(.001056288621524929+n*(.00020938631748758808+n*(14962478375834237e-21+n*(4.4969678992770644e-7+n*(4.625961635228786e-9+n*(9905570997331033e-32*n-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,t=1+n*(.5914293448864175+n*(.1381518657490833+n*(.016074608709367652+n*(.0009640118070051656+n*(27533547476472603e-21+n*(2.82243172016108e-7+n*(0+0*n)))))))):(r=9905570997331033e-32+(n=1/n)*(n*(4.625961635228786e-9+n*(4.4969678992770644e-7+n*(14962478375834237e-21+n*(.00020938631748758808+n*(.001056288621524929+n*(-.016743100507663373*n-.0011295143874558028))))))-2811287356288318e-29),t=0+n*(0+n*(2.82243172016108e-7+n*(27533547476472603e-21+n*(.0009640118070051656+n*(.016074608709367652+n*(.1381518657490833+n*(.5914293448864175+1*n)))))))),r/t)}(En-6),jn*(.9836282730102539*En+Ln*En))),2);return function(r,t){return n(r)||n(t)||t<=0?NaN:r+t/zn}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).median=r();
//# sourceMappingURL=browser.js.map
