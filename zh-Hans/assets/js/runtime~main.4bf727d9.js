(()=>{"use strict";var e,a,t,f,r,d={},o={};function c(e){var a=o[e];if(void 0!==a)return a.exports;var t=o[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=d,c.c=o,e=[],c.O=(a,t,f,r)=>{if(!t){var d=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],r=e[i][2];for(var o=!0,b=0;b<t.length;b++)(!1&r||d>=r)&&Object.keys(c.O).every((e=>c.O[e](t[b])))?t.splice(b--,1):(o=!1,r<d&&(d=r));if(o){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,f,r]},c.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return c.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);c.r(r);var d={};a=a||[null,t({}),t([]),t(t)];for(var o=2&f&&e;"object"==typeof o&&!~a.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,c.d(r,d),r},c.d=(e,a)=>{for(var t in a)c.o(a,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((a,t)=>(c.f[t](e,a),a)),[])),c.u=e=>"assets/js/"+({828:"f1de92c9",1057:"2ff597da",1332:"2bf541da",1361:"a1b70643",1436:"6c58039a",1526:"89a87077",1972:"73664a40",2120:"d783cd3c",2358:"3941bf17",2711:"9e4087bc",3249:"ccc49370",3637:"f4f34a3a",3694:"8717b14a",3792:"5041380d",4134:"393be207",4405:"7321f337",4583:"1df93b7f",4759:"b8d15835",4813:"6875c492",4859:"a50f8804",5215:"735f4542",5477:"a81e2607",5557:"d9f32620",5744:"5b2a233e",6061:"1f391b9e",6422:"24170450",6797:"60446705",6834:"6037af7a",6969:"14eb3368",7028:"ce999370",7098:"a7bd4aaa",7472:"814f3328",7643:"a6aa9e1f",8156:"a54e725d",8163:"3bc2df3c",8207:"4ddea8db",8209:"01a85c17",8341:"48c7a9d6",8401:"17896441",8581:"935f2afb",8609:"925b3f96",8720:"9b950f73",8737:"7661071f",8850:"8113f914",8883:"16c2632e",8997:"f5998a11",9048:"a94703ab",9325:"59362658",9328:"e273c56f",9647:"5e95c892"}[e]||e)+"."+{828:"3a2332ea",1057:"bae86a06",1332:"2dfb4bf0",1361:"fcaa9652",1436:"4e7717ac",1526:"87e00a40",1972:"eca43f1b",2120:"26e04a6e",2237:"cdf4c284",2358:"bbd20f71",2711:"0a0a582a",3249:"435430f4",3637:"b7ebac74",3694:"66564536",3792:"4f758884",4134:"cf3581e0",4405:"360bce77",4583:"911f97bb",4759:"22627842",4813:"264ae26b",4859:"15070687",5215:"e8639dda",5477:"06412a94",5533:"4294e599",5557:"04e02d37",5744:"c3d50dab",6061:"21cbc9d4",6422:"bb0c268a",6797:"66351b1a",6834:"fa0c89f7",6969:"46b6dbf5",7028:"35edfce1",7098:"47bcad93",7472:"50e96404",7643:"01fed98d",8156:"203c9f93",8163:"afc834a3",8207:"9e8c4749",8209:"3d81c845",8341:"42557135",8401:"aaea18dd",8581:"5a199349",8609:"a5221f8c",8720:"7e5156bb",8737:"739e4347",8747:"f1b88504",8850:"a021259b",8883:"b389cb6a",8997:"3a084671",9048:"a4d7a496",9325:"feb35b60",9328:"3e55735c",9647:"526919b5"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="moddedboost.github.io:",c.l=(e,a,t,d)=>{if(f[e])f[e].push(a);else{var o,b;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){o=u;break}}o||(b=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.setAttribute("data-webpack",r+t),o.src=e),f[e]=[a];var l=(a,t)=>{o.onerror=o.onload=null,clearTimeout(s);var r=f[e];if(delete f[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),b&&document.head.appendChild(o)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/zh-Hans/",c.gca=function(e){return e={17896441:"8401",24170450:"6422",59362658:"9325",60446705:"6797",f1de92c9:"828","2ff597da":"1057","2bf541da":"1332",a1b70643:"1361","6c58039a":"1436","89a87077":"1526","73664a40":"1972",d783cd3c:"2120","3941bf17":"2358","9e4087bc":"2711",ccc49370:"3249",f4f34a3a:"3637","8717b14a":"3694","5041380d":"3792","393be207":"4134","7321f337":"4405","1df93b7f":"4583",b8d15835:"4759","6875c492":"4813",a50f8804:"4859","735f4542":"5215",a81e2607:"5477",d9f32620:"5557","5b2a233e":"5744","1f391b9e":"6061","6037af7a":"6834","14eb3368":"6969",ce999370:"7028",a7bd4aaa:"7098","814f3328":"7472",a6aa9e1f:"7643",a54e725d:"8156","3bc2df3c":"8163","4ddea8db":"8207","01a85c17":"8209","48c7a9d6":"8341","935f2afb":"8581","925b3f96":"8609","9b950f73":"8720","7661071f":"8737","8113f914":"8850","16c2632e":"8883",f5998a11:"8997",a94703ab:"9048",e273c56f:"9328","5e95c892":"9647"}[e]||e,c.p+c.u(e)},(()=>{var e={5354:0,1869:0};c.f.j=(a,t)=>{var f=c.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>f=e[a]=[t,r]));t.push(f[2]=r);var d=c.p+c.u(a),o=new Error;c.l(d,(t=>{if(c.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;o.message="Loading chunk "+a+" failed.\n("+r+": "+d+")",o.name="ChunkLoadError",o.type=r,o.request=d,f[1](o)}}),"chunk-"+a,a)}},c.O.j=a=>0===e[a];var a=(a,t)=>{var f,r,d=t[0],o=t[1],b=t[2],n=0;if(d.some((a=>0!==e[a]))){for(f in o)c.o(o,f)&&(c.m[f]=o[f]);if(b)var i=b(c)}for(a&&a(t);n<d.length;n++)r=d[n],c.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return c.O(i)},t=self.webpackChunkmoddedboost_github_io=self.webpackChunkmoddedboost_github_io||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();