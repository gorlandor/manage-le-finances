!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=110)}({102:function(t,e,r){var n=r(111);"string"==typeof n&&(n=[[t.i,n,""]]);var o={};o.transform=void 0;r(23)(n,o);n.locals&&(t.exports=n.locals)},103:function(t,e,r){var n=r(112);"string"==typeof n&&(n=[[t.i,n,""]]);var o={};o.transform=void 0;r(23)(n,o);n.locals&&(t.exports=n.locals)},104:function(t,e,r){var n=r(113);"string"==typeof n&&(n=[[t.i,n,""]]);var o={};o.transform=void 0;r(23)(n,o);n.locals&&(t.exports=n.locals)},105:function(t,e,r){var n=r(114);"string"==typeof n&&(n=[[t.i,n,""]]);var o={};o.transform=void 0;r(23)(n,o);n.locals&&(t.exports=n.locals)},106:function(t,e,r){var n=r(115);"string"==typeof n&&(n=[[t.i,n,""]]);var o={};o.transform=void 0;r(23)(n,o);n.locals&&(t.exports=n.locals)},107:function(t,e,r){var n=r(116);"string"==typeof n&&(n=[[t.i,n,""]]);var o={};o.transform=void 0;r(23)(n,o);n.locals&&(t.exports=n.locals)},110:function(t,e,r){"use strict";r(102),r(106),r(104),r(105),r(107),r(103)},111:function(t,e,r){e=t.exports=r(16)(void 0),e.push([t.i,":root{--primary-color:#673ab7;--bg-color:#f8f8ff}*{box-sizing:border-box}body,html{width:100%;height:100%;min-height:100vh;margin:0;padding:0;border:none;font-family:Arial,Helvetica,sans-serif;font-size:1rem;font-weight:500}main{top:3.5rem;width:100%;min-height:calc(95vh - 3.5rem);padding:1rem}.flex-container{justify-content:flex-start}.flex-container,.flex-vertically{display:flex;flex-direction:column;align-items:center}.flex-horizontally,.flex-vertically{justify-content:center}.flex-horizontally{display:flex;flex-direction:row;align-items:center}.actionLink{margin:.5rem auto}.btn-delete{width:80%;height:2em;margin:0;padding:.5em;border:0;background-color:#e91e63;color:#fff;font-size:1.3em;box-shadow:0 3px 6px rgba(0,0,0,.3)}.btn-delete:focus,.btn-delete:hover{background-color:#c2185b;color:#fff}",""])},112:function(t,e,r){e=t.exports=r(16)(void 0),e.push([t.i,".table{width:100%;max-width:992px;margin:0 auto;padding:2rem 0;text-align:left;font-size:.875rem}.table__header th{color:var(--primary-color);text-align:center}.table__body tr td{color:#000;font-size:.75rem;text-align:center}.table__footer tr td{color:var(--primary-color)}",""])},113:function(t,e,r){e=t.exports=r(16)(void 0),e.push([t.i,".footer{width:100%;height:6rem;margin:0;padding:0;border:none;box-shadow:0 3px 6px rgba(0,0,0,.3);background-color:#37474f;color:#f8f8ff;font-size:1.125rem;font-weight:700;text-align:center;line-height:2}",""])},114:function(t,e,r){e=t.exports=r(16)(void 0),e.push([t.i,"form{width:100%;height:100%;min-height:calc(95vh - 7rem);padding:0;border:none}form .form-label{color:#673ab7;font-weight:700;text-align:left}form .form-control{width:16rem;height:2rem;margin:.5rem auto;padding:4px;border:1px solid #aaa;border-radius:.5rem;outline-color:#673ab7}form .btn{width:16rem;height:2rem;margin:0;border:none;box-shadow:0 3px 6px rgba(0,0,0,.3);border-radius:.5rem;background-color:#673ab7;color:#f8f8ff;font-size:1.125rem;text-align:center}form .btn:focus,form .btn:hover{background-color:#5e35b1;box-shadow:0 3px 6px rgba(0,0,0,.4)}",""])},115:function(t,e,r){e=t.exports=r(16)(void 0),e.push([t.i,".header{position:sticky;top:0;width:100%;height:3.5rem;margin:0;padding:0;border:none;box-shadow:0 3px 6px rgba(0,0,0,.3);background-color:#673ab7;color:#f8f8ff;font-size:1.5rem;font-weight:700;text-align:center;line-height:3.5rem}",""])},116:function(t,e,r){e=t.exports=r(16)(void 0),e.push([t.i,".list-wrapper{width:100%;height:100%;margin:0;padding:0;border:none}.list-wrapper .expenses{width:100%;margin:.5rem;padding:0}",""])},16:function(t,e){function r(t,e){var r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var i=n(o);return[r].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[r].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},23:function(t,e,r){function n(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=h[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(l(n.parts[i],e))}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(l(n.parts[i],e));h[n.id]={id:n.id,refs:1,parts:a}}}}function o(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s=i[1],f=i[2],c=i[3],l={css:s,media:f,sourceMap:c};n[a]?n[a].parts.push(l):r.push(n[a]={id:a,parts:[l]})}return r}function i(t,e){var r=v(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=x[x.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),x.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=x.indexOf(t);e>=0&&x.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),i(t,e),e}function f(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),i(t,e),e}function c(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function l(t,e){var r,n,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var c=b++;r=g||(g=s(e)),n=u.bind(null,r,c,!1),o=u.bind(null,r,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=f(e),n=p.bind(null,r,e),o=function(){a(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(e),n=d.bind(null,r),o=function(){a(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}function u(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function p(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=y(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},m=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(r){return void 0===e[r]&&(e[r]=t.call(this,r)),e[r]}}(function(t){return document.querySelector(t)}),g=null,b=0,x=[],y=r(239);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},void 0===e.singleton&&(e.singleton=m()),void 0===e.insertInto&&(e.insertInto="head"),void 0===e.insertAt&&(e.insertAt="bottom");var r=o(t,e);return n(r,e),function(t){for(var i=[],a=0;a<r.length;a++){var s=r[a],f=h[s.id];f.refs--,i.push(f)}if(t){n(o(t,e),e)}for(var a=0;a<i.length;a++){var f=i[a];if(0===f.refs){for(var c=0;c<f.parts.length;c++)f.parts[c]();delete h[f.id]}}}};var w=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},239:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}});