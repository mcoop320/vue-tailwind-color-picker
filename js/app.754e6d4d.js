(function(t){function a(a){for(var r,s,n=a[0],c=a[1],l=a[2],u=0,p=[];u<n.length;u++)s=n[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);h&&h(a);while(p.length)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],r=!0,n=1;n<e.length;n++){var c=e[n];0!==o[c]&&(r=!1)}r&&(i.splice(a--,1),t=s(s.s=e[0]))}return t}var r={},o={app:0},i=[];function s(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)s.d(e,r,function(a){return t[a]}.bind(null,r));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=a,n=n.slice();for(var l=0;l<n.length;l++)a(n[l]);var h=c;i.push(["8c94","chunk-vendors"]),e()})({"8c94":function(t,a,e){"use strict";e.r(a);var r=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"h-screen",staticStyle:{background:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJElEQVQYV2NctWrVfwYkEBYWxojMZ6SDAmT7QGx0K1EcRBsFAADeG/3M/HteAAAAAElFTkSuQmCC') repeat"},attrs:{id:"app"}},[e("div",{staticClass:"w-full h-full flex items-center justify-center",style:{backgroundColor:t.color}},[e("vue-tailwind-color-picker",{attrs:{swatches:t.swatches},model:{value:t.color,callback:function(a){t.color=a},expression:"color"}})],1)])},i=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"border min-w-min w-min rounded-lg bg-white"},[e("div",{staticClass:"p-4 w-60"},[e("div",{staticClass:"w-52 h-40",style:{backgroundColor:t.canvasColor}},[e("div",{staticClass:"w-full h-full",staticStyle:{"background-image":"linear-gradient(90deg,#fff,rgba(204,154,129,0))"}},[e("div",{ref:"canvas",staticClass:"w-full h-full relative cursor-pointer",staticStyle:{"background-image":"linear-gradient(0deg,#000,rgba(204,154,129,0))"},on:{mousedown:t.mousedownCanvas}},[e("div",{ref:"canvasCursor",staticClass:"h-4 w-4 border border-gray-200 rounded-full bg-white absolute -left-2 -top-2 pointer-events-none",staticStyle:{"box-shadow":"2px 2px 2px 0 rgb(0 0 0 / 20%)"}})])])]),e("div",{staticClass:"w-52 flex my-2"},[e("div",{staticClass:"w-8 h-8 rounded-lg",staticStyle:{background:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJElEQVQYV2NctWrVfwYkEBYWxojMZ6SDAmT7QGx0K1EcRBsFAADeG/3M/HteAAAAAElFTkSuQmCC') repeat"}},[e("div",{staticClass:"w-full h-full rounded-lg",style:{backgroundColor:t.color}})]),e("div",[e("div",{ref:"line",staticClass:"w-40 h-3 ml-4 relative cursor-pointer rounded",staticStyle:{"background-image":"linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)"},on:{mousedown:t.mousedownLine}},[e("div",{ref:"lineCursor",staticClass:"h-4 w-4 border border-gray-200 rounded-full bg-white absolute -left-2 pointer-events-none",staticStyle:{top:"-2px","box-shadow":"2px 2px 2px 0 rgb(0 0 0 / 20%)"}})]),e("div",{ref:"opacityLine",staticClass:"w-40 h-3 ml-4 mt-2 relative cursor-pointer rounded",staticStyle:{background:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJElEQVQYV2NctWrVfwYkEBYWxojMZ6SDAmT7QGx0K1EcRBsFAADeG/3M/HteAAAAAElFTkSuQmCC') repeat"},on:{mousedown:t.mousedownOpacity}},[e("div",{staticClass:"w-full h-full relative",style:{background:t.opacityLineBackground}},[e("div",{ref:"opacityCursor",staticClass:"h-4 w-4 border border-gray-200 rounded-full bg-white absolute -left-2 pointer-events-none",staticStyle:{top:"-2px","box-shadow":"2px 2px 2px 0 rgb(0 0 0 / 20%)"}})])])])]),e("div",{staticClass:"flex items-center"},[e("div",{directives:[{name:"show",rawName:"v-show",value:"rgba"===t.inputType,expression:"inputType === 'rgba'"}],staticClass:"flex"},[e("div",[e("p",{staticClass:"text-center text-gray-500 text-sm"},[t._v("R")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.colorLazy.r,expression:"colorLazy.r"}],staticClass:"shadow appearance-none border rounded text-center w-10 h-8 text-grey-darker",domProps:{value:t.colorLazy.r},on:{input:[function(a){a.target.composing||t.$set(t.colorLazy,"r",a.target.value)},t.inputUpdated],blur:t.blurInputR}})]),e("div",{staticClass:"mx-1"},[e("p",{staticClass:"text-center text-gray-500 text-sm"},[t._v("G")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.colorLazy.g,expression:"colorLazy.g"}],staticClass:"shadow appearance-none border rounded text-center w-10 h-8 text-grey-darker",domProps:{value:t.colorLazy.g},on:{input:[function(a){a.target.composing||t.$set(t.colorLazy,"g",a.target.value)},t.inputUpdated],blur:t.blurInputG}})]),e("div",{staticClass:"mr-1"},[e("p",{staticClass:"text-center text-gray-500 text-sm"},[t._v("B")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.colorLazy.b,expression:"colorLazy.b"}],staticClass:"shadow appearance-none border rounded text-center w-10 h-8 text-grey-darker",domProps:{value:t.colorLazy.b},on:{input:[function(a){a.target.composing||t.$set(t.colorLazy,"b",a.target.value)},t.inputUpdated],blur:t.blurInputB}})]),e("div",[e("p",{staticClass:"text-center text-gray-500 text-sm"},[t._v("A")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.colorLazy.a,expression:"colorLazy.a"}],staticClass:"shadow appearance-none border rounded text-center w-10 h-8 text-grey-darker",domProps:{value:t.colorLazy.a},on:{input:[function(a){a.target.composing||t.$set(t.colorLazy,"a",a.target.value)},t.inputUpdated],blur:t.blurInputA}})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"hexa"===t.inputType,expression:"inputType === 'hexa'"}],staticClass:"mr-3"},[e("p",{staticClass:"text-gray-500 text-center text-sm"},[t._v("HEXA")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.colorLazy.hexa,expression:"colorLazy.hexa"}],staticClass:"shadow appearance-none border rounded text-center w-40 h-8 text-grey-darker",domProps:{value:t.colorLazy.hexa},on:{input:[function(a){a.target.composing||t.$set(t.colorLazy,"hexa",a.target.value)},t.hexaInputUpdated],blur:t.blurInputHexa}})]),e("div",{staticClass:"px-2 text-gray-500 cursor-pointer",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.toggleInputs(a)}}},[e("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])])]),e("div",{staticClass:"flex mt-2 flex-wrap px-1"},[t._l(t.swatchesLazy,(function(a){return[e("div",{key:a,staticClass:"w-8 h-8 m-1 relative cursor-pointer rounded-full shadow-md",style:{backgroundColor:a},on:{click:function(e){return t.selectSwatch(a)}}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.inputValue===a,expression:"inputValue === swatch"}],staticClass:"h-full w-full rounded-full border-2 border-gray-200 p-0 relative"})])]})),e("div",{staticClass:"w-8 h-8 m-1 cursor-pointer rounded-full shadow-md text-gray-600 flex items-center justify-center",style:{backgroundColor:t.color},on:{click:function(a){return a.stopPropagation(),t.addRemoveCurrentSwatch(a)}}},[t.hasSelectedSwatch?e("svg",{staticClass:"h-5 w-5",attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}})]):e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"}})])])],2)])])},n=[];function c(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?c(Object(e),!0).forEach((function(a){h(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function h(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var u={name:"VueTailwindColorPicker",props:{value:String,swatches:{type:Array,default:function(){return[]}}},data:function(){return{canvasCursor:null,lineCursor:null,opacityCursor:null,draggingLineCursor:!1,draggingCanvasCursor:!1,draggingOpacityCursor:!1,lineWidth:160,lineLeft:0,canvasWidth:208,canvasLeft:0,canvasTop:0,canvasHeight:0,opacityWidth:160,opacityLeft:0,percentageOpacity:0,percentageBlack:0,percentageWhite:0,inputType:"rgba",colorLazy:{r:255,g:219,b:0,a:1,hexa:"#FFFE00FF"},colorData:{r:0,g:0,b:0,a:1,hexa:"#000000FF"},lineColorData:{r:0,g:0,b:0},swatchesLazy:[]}},computed:{inputValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},hasSelectedSwatch:function(){return this.swatchesLazy.includes(this.inputValue)},color:function(){return"rgba(".concat(this.colorData.r,", ").concat(this.colorData.g,", ").concat(this.colorData.b,", ").concat(this.colorData.a,")")},canvasColor:function(){return"rgba(".concat(this.lineColorData.r,", ").concat(this.lineColorData.g,", ").concat(this.lineColorData.b,", 1)")},opacityLineBackground:function(){var t="rgba(".concat(this.colorData.r,", ").concat(this.colorData.g,", ").concat(this.colorData.b,", 0)"),a="rgba(".concat(this.colorData.r,", ").concat(this.colorData.g,", ").concat(this.colorData.b,", 1)");return"linear-gradient(to right, ".concat(t,", ").concat(a,")")}},methods:{mousedownCanvas:function(t){1===t.which&&(this.registerListeners(),this.draggingCanvasCursor=!0,this.setSizePoses(),this.canvasCursor=this.$refs.canvasCursor,this.canvasCursor.style.transform="translate(".concat(t.offsetX,"px, ").concat(t.offsetY,"px)"),this.percentageBlack=t.offsetY/this.canvasHeight,this.percentageWhite=1-t.offsetX/this.canvasWidth,this.setColorData(),t.stopPropagation(),t.preventDefault())},mousedownLine:function(t){1===t.which&&(this.registerListeners(),this.draggingLineCursor=!0,this.setSizePoses(),this.lineCursor=this.$refs.lineCursor,this.lineCursor.style.transform="translate(".concat(t.offsetX,"px, 0px)"),this.calculateLineColor(t.offsetX),this.setColorData(),t.stopPropagation(),t.preventDefault())},mousedownOpacity:function(t){1===t.which&&(this.registerListeners(),this.draggingOpacityCursor=!0,this.setSizePoses(),this.opacityCursor=this.$refs.opacityCursor,this.opacityCursor.style.transform="translate(".concat(t.offsetX,"px, 0px)"),this.percentageOpacity=t.offsetX/this.opacityWidth,this.setColorData(),t.stopPropagation(),t.preventDefault())},mouseup:function(t){this.draggingLineCursor=!1,this.draggingCanvasCursor=!1,this.draggingOpacityCursor=!1,this.unregisterListeners()},mousemove:function(t){if(this.draggingLineCursor){var a=t.pageX-this.lineLeft;a=Math.min(this.lineWidth,Math.max(0,a)),this.lineCursor.style.transform="translate(".concat(a,"px, 0px)"),this.calculateLineColor(a)}else if(this.draggingCanvasCursor){var e=t.pageX-this.canvasLeft,r=t.pageY-this.canvasTop;e=Math.min(this.canvasWidth,Math.max(0,e)),r=Math.min(this.canvasHeight,Math.max(0,r)),this.canvasCursor.style.transform="translate(".concat(e,"px, ").concat(r,"px)"),this.percentageBlack=r/this.canvasHeight,this.percentageWhite=1-e/this.canvasWidth}else if(this.draggingOpacityCursor){a=t.pageX-this.opacityLeft;a=Math.min(this.opacityWidth,Math.max(0,a)),this.opacityCursor.style.transform="translate(".concat(a,"px, 0px)"),this.percentageOpacity=a/this.opacityWidth}this.setColorData()},setColorData:function(){var t=255*(1-this.percentageBlack);t=Math.min(255,Math.max(0,Math.round(t)));var a=t-this.lineColorData.r,e=t-this.lineColorData.g,r=t-this.lineColorData.b,o=this.percentageWhite*a,i=this.percentageWhite*e,s=this.percentageWhite*r,n=this.lineColorData.r+o,c=this.lineColorData.g+i,l=this.lineColorData.b+s;this.colorData.r=Math.min(t,Math.max(0,Math.round(n))),this.colorData.g=Math.min(t,Math.max(0,Math.round(c))),this.colorData.b=Math.min(t,Math.max(0,Math.round(l))),this.colorData.a=Math.min(1,Math.max(0,Number(this.percentageOpacity.toFixed(2)))),this.colorLazy.r=this.colorData.r,this.colorLazy.g=this.colorData.g,this.colorLazy.b=this.colorData.b,this.colorLazy.a=this.colorData.a,this.colorData.hexa="#"+this.componentToHex(this.colorData.r)+this.componentToHex(this.colorData.g)+this.componentToHex(this.colorData.b)+this.componentToHex(Math.round(255*this.colorData.a)),this.colorLazy.hexa=this.colorData.hexa,this.inputValue=this.colorData.hexa},calculateLineColor:function(t){var a=t/this.lineWidth,e=a%(1/6),r=e/(1/6),o=1,i=1,s=1;a<1/6?(i=r,s=0):a<2/6?(o=1-r,s=0):a<.5?(o=0,s=r):a<4/6?(o=0,i=1-r):a<5/6?(o=r,i=0):(i=0,s=1-r),this.lineColorData.r=Math.min(255,Math.max(0,Math.round(255*o))),this.lineColorData.g=Math.min(255,Math.max(0,Math.round(255*i))),this.lineColorData.b=Math.min(255,Math.max(0,Math.round(255*s)))},registerListeners:function(){document.addEventListener("mouseup",this.mouseup),document.addEventListener("mousemove",this.mousemove)},unregisterListeners:function(){document.removeEventListener("mouseup",this.mouseup),document.removeEventListener("mousemove",this.mousemove)},setSizePoses:function(){var t=this.$refs.line.getBoundingClientRect();this.lineLeft=t.left;var a=this.$refs.canvas.getBoundingClientRect();this.canvasLeft=a.left,this.canvasTop=a.top,this.canvasHeight=a.height;t=this.$refs.opacityLine.getBoundingClientRect();this.opacityLeft=t.left},normalizeColorData:function(){var t=this,a={r:null,g:null,b:null,variable:null},e=this.colorData,r=e.r,o=e.g,i=e.b;return i>o&&i>r?a.b=1:o>r&&o>i?a.g=1:a.r=1,r<o&&r<i?a.r=0:o<r&&o<i?a.g=0:a.b=0,Array.from("rgb").forEach((function(e){null===a[e]&&(a.variable=e,a[e]=t.colorData[e]/255)})),a},initSwatches:function(){var t=this;if(null!==this.swatches&&Array.isArray(this.swatches)){var a=this.swatches.map((function(a){return t.cleanHexa(a)}));a.forEach((function(a){t.swatchesLazy.includes(a)||t.swatchesLazy.push(a)}))}else{a=["#f94144","#f3722c","#f8961e","#f9c74f","#90be6d","#43aa8b","#577590","#22223b","#4a4e69","#c9ada7"].map((function(a){return t.cleanHexa(a)}));this.swatchesLazy=a}},init:function(){this.value&&(this.colorLazy=this.parseHexa(this.value)),this.initSwatches(),this.validate(),this.setUICursors()},inputUpdated:function(){this.validate(),this.setUICursors()},hexaInputUpdated:function(){this.validateHexa(),this.setUICursors()},validateHexChar:function(t){if(t.length<0||t.length>1)return"0";if(isNaN(t)){var a=["A","B","C","D","E","F"];return a.includes(t.toUpperCase())?t.toUpperCase():"0"}return t},cleanHexa:function(t){var a=this;if(!t||t.length<3)return"#000000FF";var e,r,o,i,s=t.toUpperCase();if(s.startsWith("#")&&(s=s.substr(1)),s.length<3)return"#000000FF";if(e=r=o="00",i="FF",3===s.length){var n=s.split("").map((function(t){return"0".concat(t)})).map((function(t){return a.validateHexChar(t)}));e=n[0],r=n[1],o=n[2]}else if(s.length>=6){n=s.split("").map((function(t){return a.validateHexChar(t)}));e=n[0]+n[1],r=n[2]+n[3],o=n[4]+n[5],8===n.length&&(i=n[6]+n[7])}return"#".concat(e).concat(r).concat(o).concat(i)},parseHexa:function(t){var a=this.cleanHexa(t).substr(1).split(""),e=a[0]+a[1],r=a[2]+a[3],o=a[4]+a[5],i=a[6]+a[7],s=parseInt(e,16),n=parseInt(r,16),c=parseInt(o,16),l=parseInt(i,16)/255;return{hexa:"#"+e+r+o+i,r:s,g:n,b:c,a:l}},validateHexa:function(){var t=this.parseHexa(this.colorLazy.hexa);this.colorData=l({},t),this.colorLazy.r=this.colorData.r,this.colorLazy.g=this.colorData.g,this.colorLazy.b=this.colorData.b,this.colorLazy.a=this.colorData.a},componentToHex:function(t){var a=t.toString(16).toUpperCase();return 1==a.length?"0"+a:a},validate:function(){var t=Number(this.colorLazy.r),a=Number(this.colorLazy.g),e=Number(this.colorLazy.b),r=Number(this.colorLazy.a);(isNaN(t)||null===t)&&(t=0),(isNaN(a)||null===a)&&(a=0),(isNaN(e)||null===e)&&(e=0),(isNaN(r)||null===r)&&(r=1),t=Math.min(255,Math.max(0,t)),a=Math.min(255,Math.max(0,a)),e=Math.min(255,Math.max(0,e)),r=Math.min(1,Math.max(0,r)),this.colorData.r=t,this.colorData.g=a,this.colorData.b=e,this.colorData.a=r,this.colorData.hexa="#"+this.componentToHex(t)+this.componentToHex(a)+this.componentToHex(e)+this.componentToHex(Math.round(255*r)),this.colorLazy.hexa=this.colorData.hexa},setUICursors:function(){var t=this;this.setSizePoses(),this.percentageOpacity=this.colorData.a;var a=this.percentageOpacity*this.opacityWidth;this.$refs.opacityCursor.style.transform="translate(".concat(a,"px, 0px)");var e=this.normalizeColorData(),r=0,o=0;"r"===e.variable?1===e.g?(r=1,o=1-this.colorData.r/255):1===e.b&&(r=4,o=this.colorData.r/255):"b"===e.variable?1===e.r?(r=5,o=1-this.colorData.b/255):1===e.g&&(r=2,o=this.colorData.b/255):1===e.r?(r=0,o=this.colorData.g/255):1===e.b&&(r=3,o=1-this.colorData.g/255);var i=this.lineWidth/6,s=o*i,n=i*r+s;this.$refs.lineCursor.style.transform="translate(".concat(n,"px, 0px)"),this.lineColorData.r=Math.min(255,Math.max(0,Math.round(255*e.r))),this.lineColorData.g=Math.min(255,Math.max(0,Math.round(255*e.g))),this.lineColorData.b=Math.min(255,Math.max(0,Math.round(255*e.b))),Array.from("rgb").forEach((function(a){0===t.lineColorData[a]?t.percentageWhite=t.colorData[a]/255:255===t.lineColorData[a]&&(t.percentageBlack=1-t.colorData[a]/255)}));var c=this.canvasWidth*(1-this.percentageWhite),l=this.canvasHeight*this.percentageBlack;this.$refs.canvasCursor.style.transform="translate(".concat(c,"px, ").concat(l,"px)")},blurInputR:function(){this.colorLazy.r=this.colorData.r},blurInputG:function(){this.colorLazy.g=this.colorData.g},blurInputB:function(){this.colorLazy.b=this.colorData.b},blurInputA:function(){this.colorLazy.a=this.colorData.a},blurInputHexa:function(){this.colorLazy.hexa=this.colorData.hexa},toggleInputs:function(){"rgba"===this.inputType?this.inputType="hexa":this.inputType="rgba"},selectSwatch:function(t){var a=this.parseHexa(t);this.colorData=l({},a),this.colorLazy=l({},a),this.inputValue=a.hexa,this.setUICursors()},deleteSwatch:function(t){this.swatchesLazy=this.swatchesLazy.filter((function(a){return a!==t})),this.$emit("deleteSwatch",t)},addRemoveCurrentSwatch:function(){this.hasSelectedSwatch?this.deleteSwatch(this.inputValue):(this.$emit("addSwatch",this.inputValue),this.swatchesLazy.push(this.inputValue))}},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},beforeDestroy:function(){this.unregisterListeners()}},p=u,d=e("2877"),g=Object(d["a"])(p,s,n,!1,null,null,null),f=g.exports,v=r["a"].extend({name:"ServeDev",components:{VueTailwindColorPicker:f},data:function(){return{color:"#00FF00",swatches:["#f94144","#f3722c","#f8961e","#f9c74f","#90be6d","#43aa8b","#577590","#22223b","#4a4e69","#c9ada7"]}}}),m=v,y=Object(d["a"])(m,o,i,!1,null,null,null),x=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(x)}}).$mount("#app")}});
//# sourceMappingURL=app.754e6d4d.js.map