"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[25635,37965,66095,420,69602,78364],{49998:function(e,t,r){var n=r(95752),c=r(45697),a=r(67294);function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=l(c),o=l(a);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var p=["className","children","tabIndex"],g=["tabindex"],h=o.default.forwardRef((function(e,t){var r=e.className,c=e.children,a=e.tabIndex,l=b(e,p),i=n.getAttributes(f(f({},l),{},{tabindex:a})),u=i.tabindex,s=b(i,g);return r&&(s.className=r),null!=u&&(s.tabIndex=u),t&&(s.ref=t),o.default.createElement("svg",s,c)}));h.displayName="Icon",h.propTypes={"aria-hidden":i.default.string,"aria-label":i.default.string,"aria-labelledby":i.default.string,children:i.default.node,className:i.default.string,height:i.default.oneOfType([i.default.number,i.default.string]),preserveAspectRatio:i.default.string,tabIndex:i.default.string,viewBox:i.default.string,width:i.default.oneOfType([i.default.number,i.default.string]),xmlns:i.default.string},h.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},t.Icon=h,t._extends=d,t._objectWithoutProperties=b},12314:function(e,t,r){var n=r(49998),c=r(67294);function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}r(95752),r(45697);var l,i=a(c),o=["children"],u=i.default.forwardRef((function(e,t){var r=e.children,c=n._objectWithoutProperties(e,o);return i.default.createElement(n.Icon,n._extends({width:64,height:64,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",ref:t},c),l||(l=i.default.createElement("path",{d:"M1.36,11.318V16H0.64v-4.683c0-2.221,1.342-4.163,3.347-4.969C3.242,5.749,2.79,4.834,2.79,3.85\tc0-1.77,1.44-3.21,3.21-3.21s3.21,1.44,3.21,3.21c0,0.984-0.452,1.898-1.197,2.499c2.005,0.806,3.347,2.748,3.347,4.969V16h-0.72\tv-4.683c0-2.16-1.467-4.016-3.566-4.514C6.924,6.768,6.813,6.64,6.799,6.487c-0.014-0.154,0.071-0.3,0.212-0.363\tc0.899-0.4,1.48-1.293,1.48-2.275c0-1.373-1.117-2.49-2.49-2.49S3.51,2.477,3.51,3.85c0,0.982,0.581,1.875,1.48,2.275\tc0.141,0.063,0.226,0.209,0.212,0.362C5.188,6.641,5.077,6.769,4.926,6.804C2.827,7.302,1.36,9.158,1.36,11.318z M28.014,21.349\tc0.745-0.601,1.197-1.516,1.197-2.499c0-1.771-1.44-3.21-3.211-3.21s-3.211,1.439-3.211,3.21c0,0.983,0.452,1.898,1.197,2.499\tc-2.005,0.806-3.347,2.748-3.347,4.969V31h0.721v-4.683c0-2.16,1.466-4.016,3.565-4.514c0.15-0.036,0.261-0.163,0.275-0.317\tc0.015-0.153-0.071-0.3-0.212-0.362c-0.899-0.399-1.479-1.292-1.479-2.274c0-1.373,1.117-2.49,2.49-2.49s2.49,1.117,2.49,2.49\tc0,0.982-0.58,1.875-1.479,2.274c-0.141,0.062-0.227,0.209-0.212,0.362c0.015,0.154,0.125,0.281,0.275,0.317\tc2.1,0.498,3.565,2.354,3.565,4.514V31h0.721v-4.683C31.36,24.097,30.019,22.154,28.014,21.349z M6.36,23v-5.131l2.386,2.386\tl0.509-0.51L6,16.491l-3.254,3.254l0.509,0.51l2.386-2.386V23c0,2.404,1.956,4.36,4.36,4.36h9v-0.72h-9\tC7.993,26.64,6.36,25.007,6.36,23z M25.64,8v5.13l-2.385-2.385l-0.51,0.509L26,14.509l3.255-3.255l-0.51-0.509L26.36,13.13V8\tc0-2.404-1.956-4.36-4.36-4.36H11v0.72h11C24.007,4.36,25.64,5.993,25.64,8z"})),r)}));e.exports=u}}]);