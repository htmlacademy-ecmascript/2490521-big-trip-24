(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);i&&o[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),t.push(c))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",u="quarter",c="year",d="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},y={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+m(i,2,"0")+":"+m(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,o=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:c,w:a,d:o,D:d,h:r,m:s,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",g={};g[_]=v;var b=function(e){return e instanceof w},$=function e(t,n,i){var s;if(!t)return _;if("string"==typeof t){var r=t.toLowerCase();g[r]&&(s=r),n&&(g[r]=n,s=r);var o=t.split("-");if(!s&&o.length>1)return e(o[0])}else{var a=t.name;g[a]=t,s=a}return!i&&s&&(_=s),s||!i&&_},M=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},C=y;C.l=$,C.i=b,C.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function v(e){this.$L=$(e.locale,null,!0),this.parse(e)}var m=v.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(C.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(p);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return C},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return M(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<M(e)},m.$g=function(e,t,n){return C.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,u=!!C.u(t)||t,h=C.p(e),p=function(e,t){var i=C.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return u?i:i.endOf(o)},f=function(e,t){return C.w(n.toDate()[e].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,m=this.$M,y=this.$D,_="set"+(this.$u?"UTC":"");switch(h){case c:return u?p(1,0):p(31,11);case l:return u?p(1,m):p(0,m+1);case a:var g=this.$locale().weekStart||0,b=(v<g?v+7:v)-g;return p(u?y-b:y+(6-b),m);case o:case d:return f(_+"Hours",0);case r:return f(_+"Minutes",1);case s:return f(_+"Seconds",2);case i:return f(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var a,u=C.p(e),h="set"+(this.$u?"UTC":""),p=(a={},a[o]=h+"Date",a[d]=h+"Date",a[l]=h+"Month",a[c]=h+"FullYear",a[r]=h+"Hours",a[s]=h+"Minutes",a[i]=h+"Seconds",a[n]=h+"Milliseconds",a)[u],f=u===o?this.$D+(t-this.$W):t;if(u===l||u===c){var v=this.clone().set(d,1);v.$d[p](f),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[C.p(e)]()},m.add=function(n,u){var d,h=this;n=Number(n);var p=C.p(u),f=function(e){var t=M(h);return C.w(t.date(t.date()+Math.round(e*n)),h)};if(p===l)return this.set(l,this.$M+n);if(p===c)return this.set(c,this.$y+n);if(p===o)return f(1);if(p===a)return f(7);var v=(d={},d[s]=e,d[r]=t,d[i]=1e3,d)[p]||1,m=this.$d.getTime()+n*v;return C.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=C.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,u=n.months,c=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},d=function(e){return C.s(r%12||12,e,"0")},p=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:C.s(a+1,2,"0"),MMM:c(n.monthsShort,a,u,3),MMMM:c(u,a),D:this.$D,DD:C.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:C.s(r,2,"0"),h:d(1),hh:d(2),a:p(r,o,!0),A:p(r,o,!1),m:String(o),mm:C.s(o,2,"0"),s:String(this.$s),ss:C.s(this.$s,2,"0"),SSS:C.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(e,t){return t||v[e]||s.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,h){var p,f=C.p(d),v=M(n),m=(v.utcOffset()-this.utcOffset())*e,y=this-v,_=C.m(this,v);return _=(p={},p[c]=_/12,p[l]=_,p[u]=_/3,p[a]=(y-m)/6048e5,p[o]=(y-m)/864e5,p[r]=y/t,p[s]=y/e,p[i]=y/1e3,p)[f]||y,h?_:C.a(_)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return g[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},m.clone=function(){return C.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),D=w.prototype;return M.prototype=D,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",c],["$D",d]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,w,M),e.$i=!0),M},M.locale=$,M.isDayjs=b,M.unix=function(e){return M(1e3*e)},M.en=g[_],M.Ls=g,M.p={},M}()},646:function(e){e.exports=function(){"use strict";var e,t,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:a,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(e){return e instanceof _},h=function(e,t,n){return new _(e,n,t.$l)},p=function(e){return t.p(e)+"s"},f=function(e){return e<0},v=function(e){return f(e)?Math.ceil(e):Math.floor(e)},m=function(e){return Math.abs(e)},y=function(e,t){return e?f(e)?{negative:!0,format:""+m(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},_=function(){function f(e,t,n){var i=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return h(e*c[p(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){i.$d[p(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var s=e.match(u);if(s){var r=s.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var m=f.prototype;return m.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*c[n]}),0)},m.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=v(e/a),e%=a,this.$d.months=v(e/l),e%=l,this.$d.days=v(e/r),e%=r,this.$d.hours=v(e/s),e%=s,this.$d.minutes=v(e/i),e%=i,this.$d.seconds=v(e/n),e%=n,this.$d.milliseconds=e},m.toISOString=function(){var e=y(this.$d.years,"Y"),t=y(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=y(n,"D"),s=y(this.$d.hours,"H"),r=y(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=y(o,"S"),l=e.negative||t.negative||i.negative||s.negative||r.negative||a.negative,u=s.format||r.format||a.format?"T":"",c=(l?"-":"")+"P"+e.format+t.format+i.format+u+s.format+r.format+a.format;return"P"===c||"-P"===c?"P0D":c},m.toJSON=function(){return this.toISOString()},m.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(e,t){return t||String(i[e])}))},m.as=function(e){return this.$ms/c[p(e)]},m.get=function(e){var t=this.$ms,n=p(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?v(t/c[n]):this.$d[n],0===t?0:t},m.add=function(e,t,n){var i;return i=t?e*c[p(t)]:d(e)?e.$ms:h(e,this).$ms,h(this.$ms+i*(n?-1:1),this)},m.subtract=function(e,t){return this.add(e,t,!0)},m.locale=function(e){var t=this.clone();return t.$l=e,t},m.clone=function(){return h(this.$ms,this)},m.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},f}();return function(n,i,s){e=s,t=s().$utils(),s.duration=function(e,t){var n=s.locale();return h(e,{$l:n},t)},s.isDuration=d;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(e,t){return d(e)&&(e=e.asMilliseconds()),r.bind(this)(e,t)},i.prototype.subtract=function(e,t){return d(e)&&(e=e.asMilliseconds()),o.bind(this)(e,t)}}}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},o=[],a=0;a<e.length;a++){var l=e[a],u=i.base?l[0]+i.base:l[0],c=r[u]||0,d="".concat(u," ").concat(c);r[u]=c+1;var h=n(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var f=s(p,i);i.byIndex=a,t.splice(a,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=i(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var a=n(r[o]);t[a].references--}for(var l=i(e,s),u=0;u<r.length;u++){var c=n(r[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),i=n(795),s=n.n(i),r=n(569),o=n.n(r),a=n(565),l=n.n(a),u=n(216),c=n.n(u),d=n(589),h=n.n(d),p=n(10),f={};f.styleTagTransform=h(),f.setAttributes=l(),f.insert=o().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=c(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const v="shake";class m{#e=null;constructor(){if(new.target===m)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(v),setTimeout((()=>{this.element.classList.remove(v),e?.()}),600)}}function y(e,t,n="beforeend"){if(!(e instanceof m))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function _(e,t){if(!(e instanceof m&&t instanceof m))throw new Error("Can replace only components");const n=e.element,i=t.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function g(e){if(null!==e){if(!(e instanceof m))throw new Error("Can remove only components");e.element.remove(),e.removeElement()}}const b="everything",$="future",M="present",C="past",w="DEFAULT";var D=n(484),S=n.n(D),k=n(646),E=n.n(k);function A(){return Math.floor(1e3*Math.random())}function T(){return Math.random()>=.5}function x(e,t){return e?S()(e).format(t):""}S().extend(E());const F={[b]:e=>e,[$]:e=>e.filter((e=>(({dateFrom:e})=>S()().isBefore(e,"minute"))(e))),[M]:e=>e.filter((e=>(({dateTo:e})=>S()(e)&&S()().isAfter(S()(e),"milliseconds"))(e))),[C]:e=>e.filter((e=>(({dateFrom:e,dateTo:t})=>t&&(S()().isSame(S()(e),"minute")||S()().isAfter(t,"minute")))(e)))};function P({type:e,count:t}){return`\n    <div class="trip-filters__filter">\n      <input\n        id="filter-${e}"\n        class="trip-filters__filter-input visually-hidden"\n        type="radio"\n        name="trip-filter"\n        value="${e}"\n        ${e===b?"checked":""}\n        ${0===t?"disabled":""}\n      >\n      <label class="trip-filters__filter-label" for="filter-${e}">\n        ${n=e,n.replace(n[0],n[0].toUpperCase())}\n      </label>\n    </div>\n  `;var n}class H extends m{get template(){return'<section class="trip-events"></section>'}}class O extends m{get template(){return'\n    <p class="trip-events__msg">Click New Event to create your first point</p>\n  '}}class B extends m{#t=null;#n=null;#i=null;#s=null;#r=null;constructor({point:e,offers:t,destination:n,onEditFormButtonClick:i,favoriteClickHandler:s}){super(),this.#t=e,this.#i=t,this.#n=n,this.#s=i,this.#o(),this.#r=s}#o(){this.element.querySelector(".event__rollup-btn").addEventListener("click",(e=>{e.preventDefault(),this.#s()})),this.element.querySelector(".event__favorite-btn").addEventListener("click",(e=>{e.preventDefault(),this.#r()}))}get template(){return function(e,t,n){const{dateTo:i,dateFrom:s,type:r,basePrice:o,isFavorite:a}=e,l=x(s,"MMM DD"),u=a?"event__favorite-btn event__favorite-btn--active":"event__favorite-btn",c=function(e,t){const n=S()(e).startOf("minute"),i=S()(t).startOf("minute").diff(n),s=S().duration(i),r=Math.floor(s.asDays()),o=s.hours(),a=s.minutes(),l=[];return r>0&&l.push(`${r}D`),(o>0||r>0)&&l.push(`${o}H`),(a>0||o>0||r>0)&&l.push(`${a}M`),l.join(" ")}(s,i);return`<div class="event">\n                <time class="event__date" datetime="2019-03-18">${l}</time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/${r}.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title"> ${r} ${n.name}</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime="${x(s,"YYYY-MM-DD HH:mm")}">${x(s,"HH:mm")}</time>\n                    &mdash;\n                    <time class="event__end-time" datetime="${x(s,"YYYY-MM-DD HH:mm")}">${x(i,"HH:mm")}</time>\n                  </p>\n                  <p class="event__duration">${c}</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">${o}</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                ${(e=>`\n  ${e.map((({title:e,price:t})=>`\n    <li class="event__offer">\n      <span class="event__offer-title">${e}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${t}</span>\n    </li>\n  `)).join("")}\n`)(t)}\n                </ul>\n                <button class="${u}" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>`}(this.#t,this.#i,this.#n)}}class Y extends m{#t=null;#n=null;#i=null;#s=null;#a=null;constructor({point:e,destination:t,offers:n,onToggleButtonClick:i,onFormSubmit:s}){super(),this.#t=e,this.#n=t,this.#i=n,this.#s=i,this.#a=s,this.#o()}#o(){this.element.querySelector(".event__rollup-btn").addEventListener("click",(e=>{e.preventDefault(),this.#s()})),this.element.querySelector(".event__save-btn").addEventListener("submit",(e=>{e.preventDefault(),this.#a()}))}get template(){return function(e,t,n){const i=n.map((({id:t,title:n,price:i})=>function({title:e,price:t,checkedAttribute:n}){const i=e.split(" ").reverse().find((e=>e.length>3)).toLowerCase();return`\n    <div class="event__offer-selector">\n      <input\n        class="event__offer-checkbox visually-hidden"\n        id="event-offer-${i}-1"\n        type="checkbox"\n        name="event-offer-${i}"\n        ${n}\n      >\n      <label class="event__offer-label" for="event-offer-${i}-1">\n        <span class="event__offer-title">${e}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${t}</span>\n      </label>\n    </div>`}({title:n,price:i,checkedAttribute:e.offers.includes(t)?"checked":""}))).join(""),{type:s,basePrice:r,dateTo:o,dateFrom:a}=e;return`<form class="event event--edit" action="#" method="post">\n                <header class="event__header">\n                  <div class="event__type-wrapper">\n                    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                      <span class="visually-hidden">Choose event type</span>\n                      <img class="event__type-icon" width="17" height="17" src="img/icons/${s}.png" alt="Event type icon">\n                    </label>\n                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                    <div class="event__type-list">\n                      <fieldset class="event__type-group">\n                        <legend class="visually-hidden">Event type</legend>\n\n                        <div class="event__type-item">\n                          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                        </div>\n                      </fieldset>\n                    </div>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--destination">\n                    <label class="event__label  event__type-output" for="event-destination-1">\n                      ${s}\n                    </label>\n                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${t.name}" list="destination-list-1">\n                    <datalist id="destination-list-1">\n                      <option value="Amsterdam"></option>\n                      <option value="Geneva"></option>\n                      <option value="Chamonix"></option>\n                    </datalist>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--time">\n                    <label class="visually-hidden" for="event-start-time-1">From</label>\n                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${x(a,"DD/MM/YY HH:mm")}">\n                    &mdash;\n                    <label class="visually-hidden" for="event-end-time-1">To</label>\n                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${x(o,"DD/MM/YY HH:mm")}">\n                  </div>\n\n                  <div class="event__field-group  event__field-group--price">\n                    <label class="event__label" for="event-price-1">\n                      <span class="visually-hidden">Price</span>\n                      &euro;\n                    </label>\n                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${r}">\n                  </div>\n\n                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                  <button class="event__reset-btn" type="reset">Delete</button>\n                  <button class="event__rollup-btn" type="button">\n                    <span class="visually-hidden">Open event</span>\n                  </button>\n                </header>\n                <section class="event__details">\n                  <section class="event__section  event__section--offers">\n                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n                    <div class="event__available-offers">\n                      ${i}\n                    </div>\n                  </section>\n\n                  <section class="event__section  event__section--destination">\n                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                    <p class="event__destination-description">${t.description}</p>\n                  </section>\n                </section>\n              </form>`}(this.#t,this.#n,this.#i)}}class L{#l=null;#t=null;#u=null;#c=null;#d=[];#h=[];#p=null;#f=null;#v=w;constructor({boardComponent:e,destinationsModel:t,offersModel:n,onPointChange:i,onModeChange:s}){this.#l=e,this.#d=n,this.#h=t,this.#p=i,this.#f=s}init(e){this.#t=e;const t=this.#u,n=this.#c;this.#u=new B({point:this.#t,offers:this.#d.getOffersByType(e.type),destination:this.#h.getDestinationsById(e.destination),onEditFormButtonClick:this.#m,favoriteClickHandler:this.#r}),this.#c=new Y({point:this.#t,offers:this.#d.getOffersByType(e.type),destination:this.#h.getDestinationsById(e.destination),onFormSubmit:this.#y,onToggleButtonClick:this.#_}),t&&n?(this.#l.element.contains(t.element)&&_(this.#u,t),this.#l.element.contains(n.element)&&_(this.#c,n),g(t),g(n)):y(this.#u,this.#l.element)}resetView(){this.#v!==w&&this.#g()}#b=e=>{"Escape"===e.key&&(e.preventDefault(),this.#g(),document.removeEventListener("keydown",this.#b))};#m=()=>{this.#$(),document.addEventListener("keydown",this.#b)};#_=()=>{this.#g(),document.removeEventListener("keydown",this.#b)};#y=()=>{this.#_(),this.#p(this.#t)};#$(){_(this.#c,this.#u),this.#f(),this.#v="EDITING"}#g(){_(this.#u,this.#c),this.#v=w}#r=()=>{this.#p({...this.#t,isFavorite:!this.#t.isFavorite})}}let I=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;)t+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&n[e]];return t};const j=[{basePrice:A(),dateFrom:"2024-08-02T18:10:00.845Z",dateTo:"2024-10-02T18:45:01.375Z",destination:"1",isFavorite:T(),offers:["taxi-1"],type:"taxi"},{basePrice:A(),dateFrom:"2024-07-01T07:10:18.845Z",dateTo:"2024-07-10T17:15:15.375Z",destination:"2",isFavorite:T(),offers:["flight-1","flight-2","flight-3","flight-4"],type:"flight"},{basePrice:A(),dateFrom:"2024-03-02T14:15:16.845Z",dateTo:"2024-03-02T17:15:15.375Z",destination:"3",isFavorite:T(),offers:["bus-1","bus-2"],type:"bus"},{basePrice:A(),dateFrom:"2024-06-11T11:32:11.845Z",dateTo:"2024-06-11T21:15:12.375Z",destination:"4",isFavorite:T(),offers:[],type:"ship"}];function Z(){return{id:I(),...(e=j,e[Math.floor(Math.random()*e.length)])};var e}const q=[{type:"taxi",offers:[{id:"taxi-1",title:"Upgrade to a business class",price:120}]},{type:"flight",offers:[{id:"flight-1",title:"Add luggage",price:30},{id:"flight-2",title:"Switch to comfort class",price:100},{id:"flight-3",title:"Add meal",price:15},{id:"flight-4",title:"Choose seats",price:5}]},{type:"bus",offers:[{id:"bus-1",title:"Add luggage",price:30},{id:"bus-2",title:"Choose seats",price:5}]}],N=[{id:"1",description:"Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.",name:"Tokio",pictures:[{src:"https://loremflickr.com/248/152?random=1",description:"Chamonix parliament building"}]},{id:"2",description:"Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.",name:"Amsterdam",pictures:[{src:"https://loremflickr.com/248/152?random=2",description:"Some image"},{src:"https://loremflickr.com/248/152?random=3",description:"Some image"}]},{id:"3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.",name:"Geneva",pictures:[{src:"https://loremflickr.com/248/152?random=3",description:"Some image"}]},{id:"4",description:"Cras aliquet varius magna, non porta ligula feugiat eget.",name:"Mexico",pictures:[{src:"https://loremflickr.com/248/152?random=4",description:"Some image"}]}],R=document.querySelector(".page-body"),U=R.querySelector(".trip-controls__filters"),W=R.querySelector(".trip-events"),z=new class{#M=Array.from({length:3},Z);get points(){return this.#M}},J=new class{#i=null;constructor(){this.#i=q}get offers(){return this.#i}getOffersByType(e){const t=this.offers.find((t=>t.type===e));return t?t.offers:[]}},V=new class{#C=null;constructor(){this.#C=N}get destinations(){return this.#C}getDestinationsById(e){return this.#C.find((t=>t.id===e))}},X=new class{#l=new H;#w=null;#D=null;#M=null;#d=null;#h=null;#S=[];#k=new Map;constructor({boardContainer:e,routePointModel:t,offersModel:n,destinationsModel:i}){this.#w=e,this.#D=t,this.#d=n,this.#h=i}init(){this.#S=[...this.#D.points],this.#E()}#A=e=>{var t,n;this.#S=(t=this.#S,n=e,t.map((e=>e.id===n.id?n:e))),this.#k.get(e.id).init(e)};#f=()=>{this.#k.forEach((e=>{e.resetView()}))};#E(){y(this.#l,this.#w),this.#T(this.#M),0===this.#S.length&&y(new O,this.#w)}#T(){this.#S.forEach((e=>{this.#x(e)}))}#x(e){const t=new L({boardComponent:this.#l,destinationsModel:this.#h,offersModel:this.#d,onPointChange:this.#A,onModeChange:this.#f});t.init(e),this.#k.set(e.id,t)}}({boardContainer:W,routePointModel:z,offersModel:J,destinationsModel:V}),K=(G=z.points,Object.entries(F).map((([e,t])=>({type:e,count:t(G).length}))));var G;y(new class extends m{#F=null;constructor(e){super(),this.#F=e}get template(){return function(e){return`\n    <form class="trip-filters" action="#" method="get">\n      ${e.map(P).join("")}\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>\n  `}(this.#F)}}(K),U),X.init()})()})();
//# sourceMappingURL=bundle.25a35da7f9092884afa6.js.map