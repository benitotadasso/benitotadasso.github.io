!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);t(1);function r(n,e){var t;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,a=function(){};return{s:a,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return c=n.done,n},e:function(n){l=!0,i=n},f:function(){try{c||null==t.return||t.return()}finally{if(l)throw i}}}}function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}fetch("https://api.github.com/users/benitotadasso/repos?sort=created&direction=asc").then((function(n){return n.json()})).then((function(n){var e,t=document.querySelector(".window-grid--js"),o=r(n);try{for(o.s();!(e=o.n()).done;){var a=e.value,i=a.description,c=a.homepage,l=a.html_url,s=a.name,u='<article class="window">\n        <div class="window__top">\n          <span class="window__circle"></span>\n          <span class="window__circle"></span>\n          <span class="window__circle"></span>\n        </div>\n        <div class="window__content">\n          <img src="img/github.svg" alt="logo github" />\n          <h3 class="window__title window__grid">\n            <span class="window__label">project:</span>\n            <span>'.concat(s,'</span>\n          </h3>\n          <p class="window__grid window__grid--descript">\n            <span class="window__label">description:</span>\n            <span>').concat(i,'</span>\n          </p>\n          <p class="window__grid">\n            <span class="window__label">demo:</span>\n            <span>\n              &lt;<a\n                target="_blank"\n                rel="noopener noreferrer"\n                class="window__link"\n                href="').concat(c,'"\n                title="').concat(s,' - demo"\n                >see_here</a\n              >&gt;\n            </span>\n          </p>\n          <p class="window__grid">\n            <span class="window__label">github:</span>\n            <span>\n              &lt;<a\n                class="window__link"\n                href="').concat(l,'"\n                target="_blank"\n                rel="noopener noreferrer"\n                title="').concat(s,' - code"\n                >source_code</a\n              >&gt;\n            </span>\n          </p>\n        </div>\n      </article>');i&&(t.innerHTML+=u)}}catch(n){o.e(n)}finally{o.f()}})).catch((function(n){return console.log(n)}))},function(n,e,t){}]);