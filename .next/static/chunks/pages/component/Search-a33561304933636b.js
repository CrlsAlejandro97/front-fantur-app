(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[254],{6899:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/Search",function(){return t(5781)}])},5781:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(5893),u=t(7294),o=t(3324);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}function l(e){var n=(0,u.useState)({collections:[],isOpen:!1}),t=(n[0],n[1]),c=(0,u.useMemo)((function(){return(0,o.l)({onStateChange:function(e){var n=e.state;return t(n)},getSources:function(){return[{sourceId:"apiFantur",getItems:function(e){if(e.query)return fetch("").then((function(e){return e.json()}))}}]}})}),[e]),l=((0,u.useRef)(null),(0,u.useRef)(null)),f=((0,u.useRef)(null),c.getFormProps({inputElement:l.current})),s=c.getInputProps({inputElement:l.current});return(0,r.jsx)("div",{children:(0,r.jsx)("form",i({className:"flex justify-center mb-20"},f,{children:(0,r.jsx)("div",{className:"flex relative p-1 bg-gradient-to-t from-violet-500 to-fuchsia-500 rounded-full",children:(0,r.jsx)("input",i({className:"flex-1 p-2 pl-4 rounded-full",type:"text",placeholder:"Search"},s))})}))})}}},function(e){e.O(0,[774,324,567,179],(function(){return n=6899,e(e.s=n);var n}));var n=e.O();_N_E=n}]);