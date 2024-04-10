/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
/* colour pallete: https://coolors.co/f0d3f7-b98ea7-a57982-302f4d-120d31 */
:root {
  --primary-bg-color-night: #120d31;
  --primary-bg-color-day: rgb(82, 183, 255);
  --secondary-bg-color: #382999;
  --primary-font-color-night: #f0d3f7;
  --primary-font-color-day: rgb(33, 43, 51);
  --title-font-size: 4rem;
}
body {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-color: var(--primary-bg-color-night);
  color: var(--primary-font-color-night);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.title {
  font-size: var(--title-font-size);
  font-weight: 600;
  padding: 1rem 0 0 0;
}

.weather-container {
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.display-group1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#status-icon {
  width: 4rem;
}

#weather-status {
  font-size: 1rem;
}

.display-group2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.feelsLikeC {
  font-size: 4rem;
}

.feelsLikeF {
  font-size: 1.5rem;
}

.display-group3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}

.cityProvince {
  font-size: 2rem;
}

.locationInput {
  padding: 10px 15px; /* Comfortable padding around the text */
  border: 1px solid #ccc; /* Subtle border */
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  font-size: 2rem; /* Readable text size */
  width: 80%; /* Full-width to fit container */
  box-sizing: border-box; /* Include padding and border in the element's total width */
  margin-bottom: 10px; /* Space below the element */
}

.locationInput::placeholder {
  color: #aaa; /* Lighter text color for placeholder */
}

.locationInput:focus {
  border-color: #007bff; /* Highlighted border color on focus */
  outline: none; /* Remove default focus outline */
  box-shadow: 0px 0px 8px rgba(0, 123, 255, 0.5); /* More prominent shadow on focus */
}

.searchBtn {
  font-size: 2.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;;AAEA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;AACd;;AAEA;;;;EAIE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;AAGA,0EAA0E;AAC1E;EACE,iCAAiC;EACjC,yCAAyC;EACzC,6BAA6B;EAC7B,mCAAmC;EACnC,yCAAyC;EACzC,uBAAuB;AACzB;AACA;EACE,iCAAiC;EACjC,gBAAgB;EAChB,kBAAkB;EAClB,+CAA+C;EAC/C,sCAAsC;EACtC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,iCAAiC;EACjC,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB,EAAE,wCAAwC;EAC5D,sBAAsB,EAAE,kBAAkB;EAC1C,kBAAkB,EAAE,oBAAoB;EACxC,0CAA0C,EAAE,0BAA0B;EACtE,eAAe,EAAE,uBAAuB;EACxC,UAAU,EAAE,gCAAgC;EAC5C,sBAAsB,EAAE,4DAA4D;EACpF,mBAAmB,EAAE,4BAA4B;AACnD;;AAEA;EACE,WAAW,EAAE,uCAAuC;AACtD;;AAEA;EACE,qBAAqB,EAAE,sCAAsC;EAC7D,aAAa,EAAE,iCAAiC;EAChD,8CAA8C,EAAE,mCAAmC;AACrF;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  line-height: 1;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: \"\";\r\n  content: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\r\n/* colour pallete: https://coolors.co/f0d3f7-b98ea7-a57982-302f4d-120d31 */\r\n:root {\r\n  --primary-bg-color-night: #120d31;\r\n  --primary-bg-color-day: rgb(82, 183, 255);\r\n  --secondary-bg-color: #382999;\r\n  --primary-font-color-night: #f0d3f7;\r\n  --primary-font-color-day: rgb(33, 43, 51);\r\n  --title-font-size: 4rem;\r\n}\r\nbody {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  background-color: var(--primary-bg-color-night);\r\n  color: var(--primary-font-color-night);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.title {\r\n  font-size: var(--title-font-size);\r\n  font-weight: 600;\r\n  padding: 1rem 0 0 0;\r\n}\r\n\r\n.weather-container {\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.display-group1 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#status-icon {\r\n  width: 4rem;\r\n}\r\n\r\n#weather-status {\r\n  font-size: 1rem;\r\n}\r\n\r\n.display-group2 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.feelsLikeC {\r\n  font-size: 4rem;\r\n}\r\n\r\n.feelsLikeF {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.display-group3 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.cityProvince {\r\n  font-size: 2rem;\r\n}\r\n\r\n.locationInput {\r\n  padding: 10px 15px; /* Comfortable padding around the text */\r\n  border: 1px solid #ccc; /* Subtle border */\r\n  border-radius: 5px; /* Rounded corners */\r\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */\r\n  font-size: 2rem; /* Readable text size */\r\n  width: 80%; /* Full-width to fit container */\r\n  box-sizing: border-box; /* Include padding and border in the element's total width */\r\n  margin-bottom: 10px; /* Space below the element */\r\n}\r\n\r\n.locationInput::placeholder {\r\n  color: #aaa; /* Lighter text color for placeholder */\r\n}\r\n\r\n.locationInput:focus {\r\n  border-color: #007bff; /* Highlighted border color on focus */\r\n  outline: none; /* Remove default focus outline */\r\n  box-shadow: 0px 0px 8px rgba(0, 123, 255, 0.5); /* More prominent shadow on focus */\r\n}\r\n\r\n.searchBtn {\r\n  font-size: 2.5rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/apiHandler.ts":
/*!***************************!*\
  !*** ./src/apiHandler.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.retrieveWeatherData = void 0;
const location_1 = __webpack_require__(/*! ./location */ "./src/location.ts");
async function retrieveWeatherData(locationName) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d0d34e3ac0624eecb36215539240804&q=${locationName}`, { mode: "cors" });
        if (!response.ok) {
            const errorData = await response.json();
            // Return an object with status and error message
            return {
                status: response.status,
                error: `Error ${response.status}: ${errorData.error.message}`,
            };
        }
        const responseData = await response.json();
        const weatherLocation = new location_1.LocationWeather(responseData.location.country, responseData.location.localtime, responseData.location.name, responseData.location.region, responseData.current.condition.text, responseData.current.condition.icon, responseData.current.feelslike_c, responseData.current.feelslike_f, responseData.current.is_day);
        // If successful, return the weather location with a 200 status code
        return {
            status: 200,
            weatherLocation,
        };
    }
    catch (error) {
        // Handle unexpected errors, returning a status code with the error
        console.log(`Failed to retrieve weather data: ${error.message}`);
        return {
            status: 400, // Internal Server Error or appropriate status based on the context
            error: `Failed to retrieve weather data: ${error.message}`,
        };
    }
}
exports.retrieveWeatherData = retrieveWeatherData;


/***/ }),

/***/ "./src/location.ts":
/*!*************************!*\
  !*** ./src/location.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocationWeather = void 0;
class LocationWeather {
    constructor(country, localtime, city, province, conditionText, conditionIcon, feelsLikeC, feelsLikeF, isDayNumber // Use a parameter to take the numeric value
    ) {
        this.country = country;
        this.localtime = localtime;
        this.city = city;
        this.province = province;
        this.conditionText = conditionText;
        this.conditionIcon = conditionIcon;
        this.feelsLikeC = feelsLikeC;
        this.feelsLikeF = feelsLikeF;
        this.isDay = isDayNumber === 1; // Convert to boolean and assign to public property
    }
}
exports.LocationWeather = LocationWeather;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const apiHandler_1 = __webpack_require__(/*! ./apiHandler */ "./src/apiHandler.ts");
__webpack_require__(/*! ./styles.css */ "./src/styles.css");
async function displayWeatherData(locationName) {
    const result = await (0, apiHandler_1.retrieveWeatherData)(locationName);
    const weatherStatus = document.querySelector("#weather-status");
    const statusIcon = document.querySelector("#status-icon");
    const weatherContainer = document.querySelector(".weather-container");
    if (result.error) {
        console.error(`An error occurred: ${result.error}`);
        // Display error message to the user
        alert(`Error fetching weather data: ${result.error}`);
    }
    else {
        resetContainer();
        console.log("Weather data:", result.weatherLocation);
        weatherContainer.innerHTML = `
    <div class="display-group1">
        <img id="status-icon" src="${result.weatherLocation.conditionIcon}" alt="display status icon" />
        <p id="weather-status">${result.weatherLocation.conditionText}</p>
    </div>
    <div class="display-group2">
      <p class="feelsLikeC">${result.weatherLocation.feelsLikeC}°C</p>
      <p class="feelsLikeF">${result.weatherLocation.feelsLikeF}°F</p>
    </div>
    <div class="display-group3">
        <p class="country">${result.weatherLocation.country}</p>
        <p class="cityProvince">${result.weatherLocation.city}, ${result.weatherLocation.province}</p>
        <p class="local-time">${result.weatherLocation.localtime}</p>
    </div>
    `;
        if (result.weatherLocation.isDay) {
            displayDay();
        }
        else if (!result.weatherLocation.isDay) {
            displayNight();
        }
    }
}
function displayDay() {
    document.body.style.backgroundColor = "var(--primary-bg-color-day)";
    document.body.style.color = "var(--primary-font-color-day)";
}
function displayNight() {
    document.body.style.backgroundColor = "var(--primary-bg-color-night)";
    document.body.style.color = "var(--primary-font-color-night)";
}
function resetContainer() {
    const weatherContainer = document.querySelector(".weather-container");
    weatherContainer.innerHTML = `
     <div class="display-group1">
        <p id="weather-status"></p>
      </div>

  `;
}
const inputLocationForm = document.querySelector("#locationInputForm");
const searchBtn = document.querySelector(".searchBtn");
searchBtn.addEventListener("click", searchLocation);
inputLocationForm.addEventListener("submit", searchLocation);
function searchLocation(e) {
    e.preventDefault();
    const inputLocation = document.querySelector(".locationInput");
    console.log(inputLocation.value);
    displayWeatherData(inputLocation.value);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdDLGlDQUFpQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2FwaUhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9sb2NhdGlvbi50cyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxyXG4gICB2Mi4wIHwgMjAxMTAxMjZcclxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcclxuKi9cclxuXHJcbmh0bWwsXHJcbmJvZHksXHJcbmRpdixcclxuc3BhbixcclxuYXBwbGV0LFxyXG5vYmplY3QsXHJcbmlmcmFtZSxcclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNixcclxucCxcclxuYmxvY2txdW90ZSxcclxucHJlLFxyXG5hLFxyXG5hYmJyLFxyXG5hY3JvbnltLFxyXG5hZGRyZXNzLFxyXG5iaWcsXHJcbmNpdGUsXHJcbmNvZGUsXHJcbmRlbCxcclxuZGZuLFxyXG5lbSxcclxuaW1nLFxyXG5pbnMsXHJcbmtiZCxcclxucSxcclxucyxcclxuc2FtcCxcclxuc21hbGwsXHJcbnN0cmlrZSxcclxuc3Ryb25nLFxyXG5zdWIsXHJcbnN1cCxcclxudHQsXHJcbnZhcixcclxuYixcclxudSxcclxuaSxcclxuY2VudGVyLFxyXG5kbCxcclxuZHQsXHJcbmRkLFxyXG5vbCxcclxudWwsXHJcbmxpLFxyXG5maWVsZHNldCxcclxuZm9ybSxcclxubGFiZWwsXHJcbmxlZ2VuZCxcclxudGFibGUsXHJcbmNhcHRpb24sXHJcbnRib2R5LFxyXG50Zm9vdCxcclxudGhlYWQsXHJcbnRyLFxyXG50aCxcclxudGQsXHJcbmFydGljbGUsXHJcbmFzaWRlLFxyXG5jYW52YXMsXHJcbmRldGFpbHMsXHJcbmVtYmVkLFxyXG5maWd1cmUsXHJcbmZpZ2NhcHRpb24sXHJcbmZvb3RlcixcclxuaGVhZGVyLFxyXG5oZ3JvdXAsXHJcbm1lbnUsXHJcbm5hdixcclxub3V0cHV0LFxyXG5ydWJ5LFxyXG5zZWN0aW9uLFxyXG5zdW1tYXJ5LFxyXG50aW1lLFxyXG5tYXJrLFxyXG5hdWRpbyxcclxudmlkZW8ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmRldGFpbHMsXHJcbmZpZ2NhcHRpb24sXHJcbmZpZ3VyZSxcclxuZm9vdGVyLFxyXG5oZWFkZXIsXHJcbmhncm91cCxcclxubWVudSxcclxubmF2LFxyXG5zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbm9sLFxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZSxcclxucSB7XHJcbiAgcXVvdGVzOiBub25lO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlOmJlZm9yZSxcclxuYmxvY2txdW90ZTphZnRlcixcclxucTpiZWZvcmUsXHJcbnE6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY29udGVudDogbm9uZTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuLyogY29sb3VyIHBhbGxldGU6IGh0dHBzOi8vY29vbG9ycy5jby9mMGQzZjctYjk4ZWE3LWE1Nzk4Mi0zMDJmNGQtMTIwZDMxICovXHJcbjpyb290IHtcclxuICAtLXByaW1hcnktYmctY29sb3ItbmlnaHQ6ICMxMjBkMzE7XHJcbiAgLS1wcmltYXJ5LWJnLWNvbG9yLWRheTogcmdiKDgyLCAxODMsIDI1NSk7XHJcbiAgLS1zZWNvbmRhcnktYmctY29sb3I6ICMzODI5OTk7XHJcbiAgLS1wcmltYXJ5LWZvbnQtY29sb3ItbmlnaHQ6ICNmMGQzZjc7XHJcbiAgLS1wcmltYXJ5LWZvbnQtY29sb3ItZGF5OiByZ2IoMzMsIDQzLCA1MSk7XHJcbiAgLS10aXRsZS1mb250LXNpemU6IDRyZW07XHJcbn1cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZy1jb2xvci1uaWdodCk7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZm9udC1jb2xvci1uaWdodCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tdGl0bGUtZm9udC1zaXplKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDFyZW0gMCAwIDA7XHJcbn1cclxuXHJcbi53ZWF0aGVyLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmRpc3BsYXktZ3JvdXAxIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI3N0YXR1cy1pY29uIHtcclxuICB3aWR0aDogNHJlbTtcclxufVxyXG5cclxuI3dlYXRoZXItc3RhdHVzIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5kaXNwbGF5LWdyb3VwMiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZmVlbHNMaWtlQyB7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG59XHJcblxyXG4uZmVlbHNMaWtlRiB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5kaXNwbGF5LWdyb3VwMyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uY2l0eVByb3ZpbmNlIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5sb2NhdGlvbklucHV0IHtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7IC8qIENvbWZvcnRhYmxlIHBhZGRpbmcgYXJvdW5kIHRoZSB0ZXh0ICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLyogU3VidGxlIGJvcmRlciAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgLyogUm91bmRlZCBjb3JuZXJzICovXHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBTb2Z0IHNoYWRvdyBmb3IgZGVwdGggKi9cclxuICBmb250LXNpemU6IDJyZW07IC8qIFJlYWRhYmxlIHRleHQgc2l6ZSAqL1xyXG4gIHdpZHRoOiA4MCU7IC8qIEZ1bGwtd2lkdGggdG8gZml0IGNvbnRhaW5lciAqL1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEluY2x1ZGUgcGFkZGluZyBhbmQgYm9yZGVyIGluIHRoZSBlbGVtZW50J3MgdG90YWwgd2lkdGggKi9cclxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvKiBTcGFjZSBiZWxvdyB0aGUgZWxlbWVudCAqL1xyXG59XHJcblxyXG4ubG9jYXRpb25JbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYWFhOyAvKiBMaWdodGVyIHRleHQgY29sb3IgZm9yIHBsYWNlaG9sZGVyICovXHJcbn1cclxuXHJcbi5sb2NhdGlvbklucHV0OmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICMwMDdiZmY7IC8qIEhpZ2hsaWdodGVkIGJvcmRlciBjb2xvciBvbiBmb2N1cyAqL1xyXG4gIG91dGxpbmU6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IGZvY3VzIG91dGxpbmUgKi9cclxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDAsIDEyMywgMjU1LCAwLjUpOyAvKiBNb3JlIHByb21pbmVudCBzaGFkb3cgb24gZm9jdXMgKi9cclxufVxyXG5cclxuLnNlYXJjaEJ0biB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7QUFHQSwwRUFBMEU7QUFDMUU7RUFDRSxpQ0FBaUM7RUFDakMseUNBQXlDO0VBQ3pDLDZCQUE2QjtFQUM3QixtQ0FBbUM7RUFDbkMseUNBQXlDO0VBQ3pDLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0IsRUFBRSx3Q0FBd0M7RUFDNUQsc0JBQXNCLEVBQUUsa0JBQWtCO0VBQzFDLGtCQUFrQixFQUFFLG9CQUFvQjtFQUN4QywwQ0FBMEMsRUFBRSwwQkFBMEI7RUFDdEUsZUFBZSxFQUFFLHVCQUF1QjtFQUN4QyxVQUFVLEVBQUUsZ0NBQWdDO0VBQzVDLHNCQUFzQixFQUFFLDREQUE0RDtFQUNwRixtQkFBbUIsRUFBRSw0QkFBNEI7QUFDbkQ7O0FBRUE7RUFDRSxXQUFXLEVBQUUsdUNBQXVDO0FBQ3REOztBQUVBO0VBQ0UscUJBQXFCLEVBQUUsc0NBQXNDO0VBQzdELGFBQWEsRUFBRSxpQ0FBaUM7RUFDaEQsOENBQThDLEVBQUUsbUNBQW1DO0FBQ3JGOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5LFxcclxcbmRpdixcXHJcXG5zcGFuLFxcclxcbmFwcGxldCxcXHJcXG5vYmplY3QsXFxyXFxuaWZyYW1lLFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2LFxcclxcbnAsXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5wcmUsXFxyXFxuYSxcXHJcXG5hYmJyLFxcclxcbmFjcm9ueW0sXFxyXFxuYWRkcmVzcyxcXHJcXG5iaWcsXFxyXFxuY2l0ZSxcXHJcXG5jb2RlLFxcclxcbmRlbCxcXHJcXG5kZm4sXFxyXFxuZW0sXFxyXFxuaW1nLFxcclxcbmlucyxcXHJcXG5rYmQsXFxyXFxucSxcXHJcXG5zLFxcclxcbnNhbXAsXFxyXFxuc21hbGwsXFxyXFxuc3RyaWtlLFxcclxcbnN0cm9uZyxcXHJcXG5zdWIsXFxyXFxuc3VwLFxcclxcbnR0LFxcclxcbnZhcixcXHJcXG5iLFxcclxcbnUsXFxyXFxuaSxcXHJcXG5jZW50ZXIsXFxyXFxuZGwsXFxyXFxuZHQsXFxyXFxuZGQsXFxyXFxub2wsXFxyXFxudWwsXFxyXFxubGksXFxyXFxuZmllbGRzZXQsXFxyXFxuZm9ybSxcXHJcXG5sYWJlbCxcXHJcXG5sZWdlbmQsXFxyXFxudGFibGUsXFxyXFxuY2FwdGlvbixcXHJcXG50Ym9keSxcXHJcXG50Zm9vdCxcXHJcXG50aGVhZCxcXHJcXG50cixcXHJcXG50aCxcXHJcXG50ZCxcXHJcXG5hcnRpY2xlLFxcclxcbmFzaWRlLFxcclxcbmNhbnZhcyxcXHJcXG5kZXRhaWxzLFxcclxcbmVtYmVkLFxcclxcbmZpZ3VyZSxcXHJcXG5maWdjYXB0aW9uLFxcclxcbmZvb3RlcixcXHJcXG5oZWFkZXIsXFxyXFxuaGdyb3VwLFxcclxcbm1lbnUsXFxyXFxubmF2LFxcclxcbm91dHB1dCxcXHJcXG5ydWJ5LFxcclxcbnNlY3Rpb24sXFxyXFxuc3VtbWFyeSxcXHJcXG50aW1lLFxcclxcbm1hcmssXFxyXFxuYXVkaW8sXFxyXFxudmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLFxcclxcbmFzaWRlLFxcclxcbmRldGFpbHMsXFxyXFxuZmlnY2FwdGlvbixcXHJcXG5maWd1cmUsXFxyXFxuZm9vdGVyLFxcclxcbmhlYWRlcixcXHJcXG5oZ3JvdXAsXFxyXFxubWVudSxcXHJcXG5uYXYsXFxyXFxuc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxub2wsXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5xIHtcXHJcXG4gIHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxyXFxuYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSxcXHJcXG5xOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbi8qIGNvbG91ciBwYWxsZXRlOiBodHRwczovL2Nvb2xvcnMuY28vZjBkM2Y3LWI5OGVhNy1hNTc5ODItMzAyZjRkLTEyMGQzMSAqL1xcclxcbjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeS1iZy1jb2xvci1uaWdodDogIzEyMGQzMTtcXHJcXG4gIC0tcHJpbWFyeS1iZy1jb2xvci1kYXk6IHJnYig4MiwgMTgzLCAyNTUpO1xcclxcbiAgLS1zZWNvbmRhcnktYmctY29sb3I6ICMzODI5OTk7XFxyXFxuICAtLXByaW1hcnktZm9udC1jb2xvci1uaWdodDogI2YwZDNmNztcXHJcXG4gIC0tcHJpbWFyeS1mb250LWNvbG9yLWRheTogcmdiKDMzLCA0MywgNTEpO1xcclxcbiAgLS10aXRsZS1mb250LXNpemU6IDRyZW07XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmctY29sb3ItbmlnaHQpO1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZm9udC1jb2xvci1uaWdodCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLXRpdGxlLWZvbnQtc2l6ZSk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZzogMXJlbSAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWdyb3VwMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzdGF0dXMtaWNvbiB7XFxyXFxuICB3aWR0aDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3dlYXRoZXItc3RhdHVzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktZ3JvdXAyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mZWVsc0xpa2VDIHtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWxzTGlrZUYge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWdyb3VwMyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jaXR5UHJvdmluY2Uge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYXRpb25JbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7IC8qIENvbWZvcnRhYmxlIHBhZGRpbmcgYXJvdW5kIHRoZSB0ZXh0ICovXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvKiBTdWJ0bGUgYm9yZGVyICovXFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyAqL1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBTb2Z0IHNoYWRvdyBmb3IgZGVwdGggKi9cXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTsgLyogUmVhZGFibGUgdGV4dCBzaXplICovXFxyXFxuICB3aWR0aDogODAlOyAvKiBGdWxsLXdpZHRoIHRvIGZpdCBjb250YWluZXIgKi9cXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEluY2x1ZGUgcGFkZGluZyBhbmQgYm9yZGVyIGluIHRoZSBlbGVtZW50J3MgdG90YWwgd2lkdGggKi9cXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IC8qIFNwYWNlIGJlbG93IHRoZSBlbGVtZW50ICovXFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbklucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogI2FhYTsgLyogTGlnaHRlciB0ZXh0IGNvbG9yIGZvciBwbGFjZWhvbGRlciAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYXRpb25JbnB1dDpmb2N1cyB7XFxyXFxuICBib3JkZXItY29sb3I6ICMwMDdiZmY7IC8qIEhpZ2hsaWdodGVkIGJvcmRlciBjb2xvciBvbiBmb2N1cyAqL1xcclxcbiAgb3V0bGluZTogbm9uZTsgLyogUmVtb3ZlIGRlZmF1bHQgZm9jdXMgb3V0bGluZSAqL1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSgwLCAxMjMsIDI1NSwgMC41KTsgLyogTW9yZSBwcm9taW5lbnQgc2hhZG93IG9uIGZvY3VzICovXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hCdG4ge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJldHJpZXZlV2VhdGhlckRhdGEgPSB2b2lkIDA7XG5jb25zdCBsb2NhdGlvbl8xID0gcmVxdWlyZShcIi4vbG9jYXRpb25cIik7XG5hc3luYyBmdW5jdGlvbiByZXRyaWV2ZVdlYXRoZXJEYXRhKGxvY2F0aW9uTmFtZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9ZDBkMzRlM2FjMDYyNGVlY2IzNjIxNTUzOTI0MDgwNCZxPSR7bG9jYXRpb25OYW1lfWAsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIC8vIFJldHVybiBhbiBvYmplY3Qgd2l0aCBzdGF0dXMgYW5kIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGBFcnJvciAke3Jlc3BvbnNlLnN0YXR1c306ICR7ZXJyb3JEYXRhLmVycm9yLm1lc3NhZ2V9YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCB3ZWF0aGVyTG9jYXRpb24gPSBuZXcgbG9jYXRpb25fMS5Mb2NhdGlvbldlYXRoZXIocmVzcG9uc2VEYXRhLmxvY2F0aW9uLmNvdW50cnksIHJlc3BvbnNlRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsIHJlc3BvbnNlRGF0YS5sb2NhdGlvbi5uYW1lLCByZXNwb25zZURhdGEubG9jYXRpb24ucmVnaW9uLCByZXNwb25zZURhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCwgcmVzcG9uc2VEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sIHJlc3BvbnNlRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLCByZXNwb25zZURhdGEuY3VycmVudC5mZWVsc2xpa2VfZiwgcmVzcG9uc2VEYXRhLmN1cnJlbnQuaXNfZGF5KTtcbiAgICAgICAgLy8gSWYgc3VjY2Vzc2Z1bCwgcmV0dXJuIHRoZSB3ZWF0aGVyIGxvY2F0aW9uIHdpdGggYSAyMDAgc3RhdHVzIGNvZGVcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICAgICAgd2VhdGhlckxvY2F0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSGFuZGxlIHVuZXhwZWN0ZWQgZXJyb3JzLCByZXR1cm5pbmcgYSBzdGF0dXMgY29kZSB3aXRoIHRoZSBlcnJvclxuICAgICAgICBjb25zb2xlLmxvZyhgRmFpbGVkIHRvIHJldHJpZXZlIHdlYXRoZXIgZGF0YTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiA0MDAsIC8vIEludGVybmFsIFNlcnZlciBFcnJvciBvciBhcHByb3ByaWF0ZSBzdGF0dXMgYmFzZWQgb24gdGhlIGNvbnRleHRcbiAgICAgICAgICAgIGVycm9yOiBgRmFpbGVkIHRvIHJldHJpZXZlIHdlYXRoZXIgZGF0YTogJHtlcnJvci5tZXNzYWdlfWAsXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5yZXRyaWV2ZVdlYXRoZXJEYXRhID0gcmV0cmlldmVXZWF0aGVyRGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Mb2NhdGlvbldlYXRoZXIgPSB2b2lkIDA7XG5jbGFzcyBMb2NhdGlvbldlYXRoZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvdW50cnksIGxvY2FsdGltZSwgY2l0eSwgcHJvdmluY2UsIGNvbmRpdGlvblRleHQsIGNvbmRpdGlvbkljb24sIGZlZWxzTGlrZUMsIGZlZWxzTGlrZUYsIGlzRGF5TnVtYmVyIC8vIFVzZSBhIHBhcmFtZXRlciB0byB0YWtlIHRoZSBudW1lcmljIHZhbHVlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnk7XG4gICAgICAgIHRoaXMubG9jYWx0aW1lID0gbG9jYWx0aW1lO1xuICAgICAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICAgICAgICB0aGlzLnByb3ZpbmNlID0gcHJvdmluY2U7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uVGV4dCA9IGNvbmRpdGlvblRleHQ7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uSWNvbiA9IGNvbmRpdGlvbkljb247XG4gICAgICAgIHRoaXMuZmVlbHNMaWtlQyA9IGZlZWxzTGlrZUM7XG4gICAgICAgIHRoaXMuZmVlbHNMaWtlRiA9IGZlZWxzTGlrZUY7XG4gICAgICAgIHRoaXMuaXNEYXkgPSBpc0RheU51bWJlciA9PT0gMTsgLy8gQ29udmVydCB0byBib29sZWFuIGFuZCBhc3NpZ24gdG8gcHVibGljIHByb3BlcnR5XG4gICAgfVxufVxuZXhwb3J0cy5Mb2NhdGlvbldlYXRoZXIgPSBMb2NhdGlvbldlYXRoZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGFwaUhhbmRsZXJfMSA9IHJlcXVpcmUoXCIuL2FwaUhhbmRsZXJcIik7XG5yZXF1aXJlKFwiLi9zdHlsZXMuY3NzXCIpO1xuYXN5bmMgZnVuY3Rpb24gZGlzcGxheVdlYXRoZXJEYXRhKGxvY2F0aW9uTmFtZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0ICgwLCBhcGlIYW5kbGVyXzEucmV0cmlldmVXZWF0aGVyRGF0YSkobG9jYXRpb25OYW1lKTtcbiAgICBjb25zdCB3ZWF0aGVyU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVyLXN0YXR1c1wiKTtcbiAgICBjb25zdCBzdGF0dXNJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGF0dXMtaWNvblwiKTtcbiAgICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWNvbnRhaW5lclwiKTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEFuIGVycm9yIG9jY3VycmVkOiAke3Jlc3VsdC5lcnJvcn1gKTtcbiAgICAgICAgLy8gRGlzcGxheSBlcnJvciBtZXNzYWdlIHRvIHRoZSB1c2VyXG4gICAgICAgIGFsZXJ0KGBFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGE6ICR7cmVzdWx0LmVycm9yfWApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVzZXRDb250YWluZXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJXZWF0aGVyIGRhdGE6XCIsIHJlc3VsdC53ZWF0aGVyTG9jYXRpb24pO1xuICAgICAgICB3ZWF0aGVyQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5LWdyb3VwMVwiPlxyXG4gICAgICAgIDxpbWcgaWQ9XCJzdGF0dXMtaWNvblwiIHNyYz1cIiR7cmVzdWx0LndlYXRoZXJMb2NhdGlvbi5jb25kaXRpb25JY29ufVwiIGFsdD1cImRpc3BsYXkgc3RhdHVzIGljb25cIiAvPlxyXG4gICAgICAgIDxwIGlkPVwid2VhdGhlci1zdGF0dXNcIj4ke3Jlc3VsdC53ZWF0aGVyTG9jYXRpb24uY29uZGl0aW9uVGV4dH08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5LWdyb3VwMlwiPlxyXG4gICAgICA8cCBjbGFzcz1cImZlZWxzTGlrZUNcIj4ke3Jlc3VsdC53ZWF0aGVyTG9jYXRpb24uZmVlbHNMaWtlQ33CsEM8L3A+XHJcbiAgICAgIDxwIGNsYXNzPVwiZmVlbHNMaWtlRlwiPiR7cmVzdWx0LndlYXRoZXJMb2NhdGlvbi5mZWVsc0xpa2VGfcKwRjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImRpc3BsYXktZ3JvdXAzXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJjb3VudHJ5XCI+JHtyZXN1bHQud2VhdGhlckxvY2F0aW9uLmNvdW50cnl9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY2l0eVByb3ZpbmNlXCI+JHtyZXN1bHQud2VhdGhlckxvY2F0aW9uLmNpdHl9LCAke3Jlc3VsdC53ZWF0aGVyTG9jYXRpb24ucHJvdmluY2V9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwibG9jYWwtdGltZVwiPiR7cmVzdWx0LndlYXRoZXJMb2NhdGlvbi5sb2NhbHRpbWV9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xuICAgICAgICBpZiAocmVzdWx0LndlYXRoZXJMb2NhdGlvbi5pc0RheSkge1xuICAgICAgICAgICAgZGlzcGxheURheSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFyZXN1bHQud2VhdGhlckxvY2F0aW9uLmlzRGF5KSB7XG4gICAgICAgICAgICBkaXNwbGF5TmlnaHQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc3BsYXlEYXkoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXByaW1hcnktYmctY29sb3ItZGF5KVwiO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY29sb3IgPSBcInZhcigtLXByaW1hcnktZm9udC1jb2xvci1kYXkpXCI7XG59XG5mdW5jdGlvbiBkaXNwbGF5TmlnaHQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInZhcigtLXByaW1hcnktYmctY29sb3ItbmlnaHQpXCI7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jb2xvciA9IFwidmFyKC0tcHJpbWFyeS1mb250LWNvbG9yLW5pZ2h0KVwiO1xufVxuZnVuY3Rpb24gcmVzZXRDb250YWluZXIoKSB7XG4gICAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1jb250YWluZXJcIik7XG4gICAgd2VhdGhlckNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXktZ3JvdXAxXCI+XHJcbiAgICAgICAgPHAgaWQ9XCJ3ZWF0aGVyLXN0YXR1c1wiPjwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gIGA7XG59XG5jb25zdCBpbnB1dExvY2F0aW9uRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYXRpb25JbnB1dEZvcm1cIik7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaEJ0blwiKTtcbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VhcmNoTG9jYXRpb24pO1xuaW5wdXRMb2NhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzZWFyY2hMb2NhdGlvbik7XG5mdW5jdGlvbiBzZWFyY2hMb2NhdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlucHV0TG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uSW5wdXRcIik7XG4gICAgY29uc29sZS5sb2coaW5wdXRMb2NhdGlvbi52YWx1ZSk7XG4gICAgZGlzcGxheVdlYXRoZXJEYXRhKGlucHV0TG9jYXRpb24udmFsdWUpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9