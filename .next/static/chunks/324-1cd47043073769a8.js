"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[324],{3324:function(e,t,n){function r(){var e=[];return{add:function(t){return e.push(t),t.finally((function(){e=e.filter((function(e){return e!==t}))}))},cancelAll:function(){e.forEach((function(e){return e.cancel()}))},isEmpty:function(){return 0===e.length}}}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n){var u=t.initialState;return{getState:function(){return u},dispatch:function(r,c){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u);u=e(u,{type:r,props:t,payload:c}),n({state:u,prevState:a})},pendingRequests:r()}}function c(e){return e.reduce((function(e,t){return e.concat(t)}),[])}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return 0===e.collections.length?0:e.collections.reduce((function(e,t){return e+t.items.length}),0)}n.d(t,{l:function(){return De}});var p=0;var m=function(){};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=[];return Promise.resolve(e(t)).then((function(e){return Array.isArray(e),Promise.all(e.filter((function(e){return Boolean(e)})).map((function(e){if(e.sourceId,n.includes(e.sourceId))throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e.sourceId)," is not unique."));n.push(e.sourceId);var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({getItemInputValue:function(e){return e.state.query},getItemUrl:function(){},onSelect:function(e){(0,e.setIsOpen)(!1)},onActive:m},e);return Promise.resolve(t)})))}))}function O(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){return function(e){if(Array.isArray(e))return q(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return Boolean(e.execute)}function U(e,t){return n=e,Boolean(null===n||void 0===n?void 0:n.execute)?_(_({},e),{},{requests:e.queries.map((function(n){return{query:n,sourceId:t,transformResponse:e.transformResponse}}))}):{items:e,sourceId:t};var n}function V(e){var t=e.reduce((function(e,t){if(!x(t))return e.push(t),e;var n=t.searchClient,r=t.execute,o=t.requesterId,i=t.requests,u=e.find((function(e){return x(t)&&x(e)&&e.searchClient===n&&Boolean(o)&&e.requesterId===o}));if(u){var c;(c=u.items).push.apply(c,A(i))}else{var a={execute:r,requesterId:o,items:i,searchClient:n};e.push(a)}return e}),[]).map((function(e){if(!x(e))return Promise.resolve(e);var t=e,n=t.execute,r=t.items;return n({searchClient:t.searchClient,requests:r})}));return Promise.all(t).then((function(e){return c(e)}))}function R(e,t){return t.map((function(t){var n=e.filter((function(e){return e.sourceId===t.sourceId})),r=n.map((function(e){return e.items})),o=n[0].transformResponse,i=o?o(function(e){var t=e.map((function(e){var t;return D(D({},e),{},{hits:null===(t=e.hits)||void 0===t?void 0:t.map((function(t){return D(D({},t),{},{__autocomplete_indexName:e.index,__autocomplete_queryID:e.queryID})}))})}));return{results:t,hits:t.map((function(e){return e.hits})).filter(Boolean),facetHits:t.map((function(e){var t;return null===(t=e.facetHits)||void 0===t?void 0:t.map((function(e){return{label:e.value,count:e.count,_highlightResult:{label:{value:e.highlighted}}}}))})).filter(Boolean)}}(r)):r;return Array.isArray(i),i.every(Boolean),'The `getItems` function from source "'.concat(t.sourceId,'" must return an array of items but returned ').concat(JSON.stringify(void 0),".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"),{source:t,items:i}}))}function T(e,t){var n=t;return{then:function(t,r){return T(e.then(N(t,n,e),N(r,n,e)),n)},catch:function(t){return T(e.catch(N(t,n,e)),n)},finally:function(t){return t&&n.onCancelList.push(t),T(e.finally(N(t&&function(){return n.onCancelList=[],t()},n,e)),n)},cancel:function(){n.isCanceled=!0;var e=n.onCancelList;n.onCancelList=[],e.forEach((function(e){e()}))},isCanceled:function(){return!0===n.isCanceled}}}function B(e){return T(new Promise((function(t,n){return e(t,n)})),{isCanceled:!1,onCancelList:[]})}function F(e){return T(e,{isCanceled:!1,onCancelList:[]})}function N(e,t,n){return e?function(n){return t.isCanceled?n:e(n)}:n}function L(e){var t=function(e){var t=e.collections.map((function(e){return e.items.length})).reduce((function(e,t,n){var r=(e[n-1]||0)+t;return e.push(r),e}),[]).reduce((function(t,n){return n<=e.activeItemId?t+1:t}),0);return e.collections[t]}(e);if(!t)return null;var n=t.items[function(e){for(var t=e.state,n=e.collection,r=!1,o=0,i=0;!1===r;){var u=t.collections[o];if(u===n){r=!0;break}i+=u.items.length,o++}return t.activeItemId-i}({state:e,collection:t})],r=t.source;return{item:n,itemInputValue:r.getItemInputValue({item:n,state:e}),itemUrl:r.getItemUrl({item:n,state:e}),source:r}}B.resolve=function(e){return F(Promise.resolve(e))},B.reject=function(e){return F(Promise.reject(e))};var M=["event","nextState","props","query","refresh","store"];function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var W=null,$=function(){var e=-1,t=-1,n=void 0;return function(r){var o=++e;return Promise.resolve(r).then((function(e){return n&&o<t?n:(t=o,n=e,e)}))}}();function z(e){var t=e.event,n=e.nextState,r=void 0===n?{}:n,o=e.props,i=e.query,u=e.refresh,a=e.store,l=H(e,M);W&&o.environment.clearTimeout(W);var s=l.setCollections,f=l.setIsOpen,p=l.setQuery,m=l.setActiveItemId,v=l.setStatus;if(p(i),m(o.defaultActiveItemId),!i&&!1===o.openOnFocus){var b,d=a.getState().collections.map((function(e){return J(J({},e),{},{items:[]})}));v("idle"),s(d),f(null!==(b=r.isOpen)&&void 0!==b?b:o.shouldPanelOpen({state:a.getState()}));var O=F($(d).then((function(){return Promise.resolve()})));return a.pendingRequests.add(O)}v("loading"),W=o.environment.setTimeout((function(){v("stalled")}),o.stallThreshold);var y=F($(o.getSources(J({query:i,refresh:u,state:a.getState()},l)).then((function(e){return Promise.all(e.map((function(e){return Promise.resolve(e.getItems(J({query:i,refresh:u,state:a.getState()},l))).then((function(t){return U(t,e.sourceId)}))}))).then(V).then((function(t){return R(t,e)})).then((function(e){return function(e){var t=e.collections,n=e.props,r=e.state,o=t.reduce((function(e,t){return I(I({},e),{},S({},t.source.sourceId,I(I({},t.source),{},{getItems:function(){return c(t.items)}})))}),{});return c(n.reshape({sources:Object.values(o),sourcesBySourceId:o,state:r})).filter(Boolean).map((function(e){return{source:e,items:e.getItems()}}))}({collections:e,props:o,state:a.getState()})}))})))).then((function(e){var n;v("idle"),s(e);var c=o.shouldPanelOpen({state:a.getState()});f(null!==(n=r.isOpen)&&void 0!==n?n:o.openOnFocus&&!i&&c||c);var p=L(a.getState());if(null!==a.getState().activeItemId&&p){var m=p.item,b=p.itemInputValue,d=p.itemUrl,O=p.source;O.onActive(J({event:t,item:m,itemInputValue:b,itemUrl:d,refresh:u,source:O,state:a.getState()},l))}})).finally((function(){v("idle"),W&&o.environment.clearTimeout(W)}));return a.pendingRequests.add(y)}var G=["event","props","refresh","store"];function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){Z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var te=/((gt|sm)-|galaxy nexus)|samsung[- ]/i;var ne=["props","refresh","store"],re=["inputElement","formElement","panelElement"],oe=["inputElement"],ie=["inputElement","maxLength"],ue=["item","source"];function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function fe(e){var t=e.props,n=e.refresh,r=e.store,o=se(e,ne);return{getEnvironmentProps:function(e){var n=e.inputElement,o=e.formElement,i=e.panelElement;return ae({onTouchStart:function(e){!r.getState().isOpen&&r.pendingRequests.isEmpty()||e.target===n||!1===[o,i].some((function(t){return n=t,r=e.target,n===r||n.contains(r);var n,r}))&&(r.dispatch("blur",null),t.debug||r.pendingRequests.cancelAll())},onTouchMove:function(e){!1!==r.getState().isOpen&&n===t.environment.document.activeElement&&e.target!==n&&n.blur()}},se(e,re))},getRootProps:function(e){return ae({role:"combobox","aria-expanded":r.getState().isOpen,"aria-haspopup":"listbox","aria-owns":r.getState().isOpen?"".concat(t.id,"-list"):void 0,"aria-labelledby":"".concat(t.id,"-label")},e)},getFormProps:function(e){e.inputElement;return ae({action:"",noValidate:!0,role:"search",onSubmit:function(i){var u;i.preventDefault(),t.onSubmit(ae({event:i,refresh:n,state:r.getState()},o)),r.dispatch("submit",null),null===(u=e.inputElement)||void 0===u||u.blur()},onReset:function(i){var u;i.preventDefault(),t.onReset(ae({event:i,refresh:n,state:r.getState()},o)),r.dispatch("reset",null),null===(u=e.inputElement)||void 0===u||u.focus()}},se(e,oe))},getLabelProps:function(e){return ae({htmlFor:"".concat(t.id,"-input"),id:"".concat(t.id,"-label")},e)},getInputProps:function(e){var i;function u(e){(t.openOnFocus||Boolean(r.getState().query))&&z(ae({event:e,props:t,query:r.getState().completion||r.getState().query,refresh:n,store:r},o)),r.dispatch("focus",null)}var c="ontouchstart"in t.environment,a=e||{},l=(a.inputElement,a.maxLength),s=void 0===l?512:l,f=se(a,ie),p=L(r.getState()),m=function(e){return Boolean(e&&e.match(te))}(null===(i=t.environment.navigator)||void 0===i?void 0:i.userAgent),v=null!==p&&void 0!==p&&p.itemUrl&&!m?"go":"search";return ae({"aria-autocomplete":"both","aria-activedescendant":r.getState().isOpen&&null!==r.getState().activeItemId?"".concat(t.id,"-item-").concat(r.getState().activeItemId):void 0,"aria-controls":r.getState().isOpen?"".concat(t.id,"-list"):void 0,"aria-labelledby":"".concat(t.id,"-label"),value:r.getState().completion||r.getState().query,id:"".concat(t.id,"-input"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",enterKeyHint:v,spellCheck:"false",autoFocus:t.autoFocus,placeholder:t.placeholder,maxLength:s,type:"search",onChange:function(e){z(ae({event:e,props:t,query:e.currentTarget.value.slice(0,s),refresh:n,store:r},o))},onKeyDown:function(e){!function(e){var t=e.event,n=e.props,r=e.refresh,o=e.store,i=ee(e,G);if("ArrowUp"===t.key||"ArrowDown"===t.key){var u=function(){var e=n.environment.document.getElementById("".concat(n.id,"-item-").concat(o.getState().activeItemId));e&&(e.scrollIntoViewIfNeeded?e.scrollIntoViewIfNeeded(!1):e.scrollIntoView(!1))},c=function(){var e=L(o.getState());if(null!==o.getState().activeItemId&&e){var n=e.item,u=e.itemInputValue,c=e.itemUrl,a=e.source;a.onActive(Y({event:t,item:n,itemInputValue:u,itemUrl:c,refresh:r,source:a,state:o.getState()},i))}};t.preventDefault(),!1===o.getState().isOpen&&(n.openOnFocus||Boolean(o.getState().query))?z(Y({event:t,props:n,query:o.getState().query,refresh:r,store:o},i)).then((function(){o.dispatch(t.key,{nextActiveItemId:n.defaultActiveItemId}),c(),setTimeout(u,0)})):(o.dispatch(t.key,{}),c(),u())}else if("Escape"===t.key)t.preventDefault(),o.dispatch(t.key,null),o.pendingRequests.cancelAll();else if("Enter"===t.key){if(null===o.getState().activeItemId||o.getState().collections.every((function(e){return 0===e.items.length})))return;t.preventDefault();var a=L(o.getState()),l=a.item,s=a.itemInputValue,f=a.itemUrl,p=a.source;if(t.metaKey||t.ctrlKey)void 0!==f&&(p.onSelect(Y({event:t,item:l,itemInputValue:s,itemUrl:f,refresh:r,source:p,state:o.getState()},i)),n.navigator.navigateNewTab({itemUrl:f,item:l,state:o.getState()}));else if(t.shiftKey)void 0!==f&&(p.onSelect(Y({event:t,item:l,itemInputValue:s,itemUrl:f,refresh:r,source:p,state:o.getState()},i)),n.navigator.navigateNewWindow({itemUrl:f,item:l,state:o.getState()}));else if(t.altKey);else{if(void 0!==f)return p.onSelect(Y({event:t,item:l,itemInputValue:s,itemUrl:f,refresh:r,source:p,state:o.getState()},i)),void n.navigator.navigate({itemUrl:f,item:l,state:o.getState()});z(Y({event:t,nextState:{isOpen:!1},props:n,query:s,refresh:r,store:o},i)).then((function(){p.onSelect(Y({event:t,item:l,itemInputValue:s,itemUrl:f,refresh:r,source:p,state:o.getState()},i))}))}}}(ae({event:e,props:t,refresh:n,store:r},o))},onFocus:u,onBlur:function(){c||(r.dispatch("blur",null),t.debug||r.pendingRequests.cancelAll())},onClick:function(n){e.inputElement!==t.environment.document.activeElement||r.getState().isOpen||u(n)}},f)},getPanelProps:function(e){return ae({onMouseDown:function(e){e.preventDefault()},onMouseLeave:function(){r.dispatch("mouseleave",null)}},e)},getListProps:function(e){return ae({role:"listbox","aria-labelledby":"".concat(t.id,"-label"),id:"".concat(t.id,"-list")},e)},getItemProps:function(e){var i=e.item,u=e.source,c=se(e,ue);return ae({id:"".concat(t.id,"-item-").concat(i.__autocomplete_id),role:"option","aria-selected":r.getState().activeItemId===i.__autocomplete_id,onMouseMove:function(e){if(i.__autocomplete_id!==r.getState().activeItemId){r.dispatch("mousemove",i.__autocomplete_id);var t=L(r.getState());if(null!==r.getState().activeItemId&&t){var u=t.item,c=t.itemInputValue,a=t.itemUrl,l=t.source;l.onActive(ae({event:e,item:u,itemInputValue:c,itemUrl:a,refresh:n,source:l,state:r.getState()},o))}}},onMouseDown:function(e){e.preventDefault()},onClick:function(e){var c=u.getItemInputValue({item:i,state:r.getState()}),a=u.getItemUrl({item:i,state:r.getState()});(a?Promise.resolve():z(ae({event:e,nextState:{isOpen:!1},props:t,query:c,refresh:n,store:r},o))).then((function(){u.onSelect(ae({event:e,item:i,itemInputValue:c,itemUrl:a,refresh:n,source:u,state:r.getState()},o))}))}},c)}}}var pe=[{segment:"autocomplete-core",version:"1.6.3"}];function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){be(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function de(e){var t,n,r,o,i=e.plugins,u=e.options,c=null===(t=((null===(n=u.__autocomplete_metadata)||void 0===n?void 0:n.userAgents)||[])[0])||void 0===t?void 0:t.segment,a=c?be({},c,Object.keys((null===(r=u.__autocomplete_metadata)||void 0===r?void 0:r.options)||{})):{};return{plugins:i.map((function(e){return{name:e.name,options:Object.keys(e.__autocomplete_pluginOptions||[])}})),options:ve({"autocomplete-core":Object.keys(u)},a),ua:pe.concat((null===(o=u.__autocomplete_metadata)||void 0===o?void 0:o.userAgents)||[])}}function Oe(e){var t,n=e.state;return!1===n.isOpen||null===n.activeItemId?null:(null===(t=L(n))||void 0===t?void 0:t.itemInputValue)||null}function ye(e,t,n,r){if(!n)return null;if(e<0&&(null===t||null!==r&&0===t))return n+e;var o=(null===t?-1:t)+e;return o<=-1||o>=n?null===r?null:0:o}function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){je(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Pe=function(e,t){switch(t.type){case"setActiveItemId":case"mousemove":return he(he({},e),{},{activeItemId:t.payload});case"setQuery":return he(he({},e),{},{query:t.payload,completion:null});case"setCollections":return he(he({},e),{},{collections:t.payload});case"setIsOpen":return he(he({},e),{},{isOpen:t.payload});case"setStatus":return he(he({},e),{},{status:t.payload});case"setContext":return he(he({},e),{},{context:he(he({},e.context),t.payload)});case"ArrowDown":var n=he(he({},e),{},{activeItemId:t.payload.hasOwnProperty("nextActiveItemId")?t.payload.nextActiveItemId:ye(1,e.activeItemId,f(e),t.props.defaultActiveItemId)});return he(he({},n),{},{completion:Oe({state:n})});case"ArrowUp":var r=he(he({},e),{},{activeItemId:ye(-1,e.activeItemId,f(e),t.props.defaultActiveItemId)});return he(he({},r),{},{completion:Oe({state:r})});case"Escape":return e.isOpen?he(he({},e),{},{activeItemId:null,isOpen:!1,completion:null}):he(he({},e),{},{activeItemId:null,query:"",status:"idle",collections:[]});case"submit":return he(he({},e),{},{activeItemId:null,isOpen:!1,status:"idle"});case"reset":return he(he({},e),{},{activeItemId:!0===t.props.openOnFocus?t.props.defaultActiveItemId:null,status:"idle",query:""});case"focus":return he(he({},e),{},{activeItemId:t.props.defaultActiveItemId,isOpen:(t.props.openOnFocus||Boolean(e.query))&&t.props.shouldPanelOpen({state:e})});case"blur":return t.props.debug?e:he(he({},e),{},{isOpen:!1,activeItemId:null});case"mouseleave":return he(he({},e),{},{activeItemId:t.props.defaultActiveItemId});default:return"The reducer action ".concat(JSON.stringify(t.type)," is not supported."),e}};function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(Object(n),!0).forEach((function(t){we(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function De(e){var t=[],n=function(e,t){var n,r="undefined"!==typeof window?window:{},o=e.plugins||[];return h(h({debug:!1,openOnFocus:!1,placeholder:"",autoFocus:!1,defaultActiveItemId:null,stallThreshold:300,environment:r,shouldPanelOpen:function(e){return f(e.state)>0},reshape:function(e){return e.sources}},e),{},{id:null!==(n=e.id)&&void 0!==n?n:"autocomplete-".concat(p++),plugins:o,initialState:h({activeItemId:null,query:"",completion:null,collections:[],isOpen:!1,status:"idle",context:{}},e.initialState),onStateChange:function(t){var n;null===(n=e.onStateChange)||void 0===n||n.call(e,t),o.forEach((function(e){var n;return null===(n=e.onStateChange)||void 0===n?void 0:n.call(e,t)}))},onSubmit:function(t){var n;null===(n=e.onSubmit)||void 0===n||n.call(e,t),o.forEach((function(e){var n;return null===(n=e.onSubmit)||void 0===n?void 0:n.call(e,t)}))},onReset:function(t){var n;null===(n=e.onReset)||void 0===n||n.call(e,t),o.forEach((function(e){var n;return null===(n=e.onReset)||void 0===n?void 0:n.call(e,t)}))},getSources:function(n){return Promise.all([].concat(O(o.map((function(e){return e.getSources}))),[e.getSources]).filter(Boolean).map((function(e){return d(e,n)}))).then((function(e){return c(e)})).then((function(e){return e.map((function(e){return h(h({},e),{},{onSelect:function(n){e.onSelect(n),t.forEach((function(e){var t;return null===(t=e.onSelect)||void 0===t?void 0:t.call(e,n)}))},onActive:function(n){e.onActive(n),t.forEach((function(e){var t;return null===(t=e.onActive)||void 0===t?void 0:t.call(e,n)}))}})}))}))},navigator:h({navigate:function(e){var t=e.itemUrl;r.location.assign(t)},navigateNewTab:function(e){var t=e.itemUrl,n=r.open(t,"_blank","noopener");null===n||void 0===n||n.focus()},navigateNewWindow:function(e){var t=e.itemUrl;r.open(t,"_blank","noopener")}},e.navigator)})}(e,t),r=u(Pe,n,(function(e){var t=e.prevState,r=e.state;n.onStateChange(Se({prevState:t,state:r,refresh:a},o))})),o=function(e){var t=e.store;return{setActiveItemId:function(e){t.dispatch("setActiveItemId",e)},setQuery:function(e){t.dispatch("setQuery",e)},setCollections:function(e){var n=0,r=e.map((function(e){return l(l({},e),{},{items:c(e.items).map((function(e){return l(l({},e),{},{__autocomplete_id:n++})}))})}));t.dispatch("setCollections",r)},setIsOpen:function(e){t.dispatch("setIsOpen",e)},setStatus:function(e){t.dispatch("setStatus",e)},setContext:function(e){t.dispatch("setContext",e)}}}({store:r}),i=fe(Se({props:n,refresh:a,store:r},o));function a(){return z(Se({event:new Event("input"),nextState:{isOpen:r.getState().isOpen},props:n,query:r.getState().query,refresh:a,store:r},o))}return n.plugins.forEach((function(e){var n;return null===(n=e.subscribe)||void 0===n?void 0:n.call(e,Se(Se({},o),{},{refresh:a,onSelect:function(e){t.push({onSelect:e})},onActive:function(e){t.push({onActive:e})}}))})),function(e){var t,n=e.metadata,r=e.environment;if(null===(t=r.navigator)||void 0===t?void 0:t.userAgent.includes("Algolia Crawler")){var o=r.document.createElement("meta"),i=r.document.querySelector("head");o.name="algolia:metadata",setTimeout((function(){o.content=JSON.stringify(n),i.appendChild(o)}),0)}}({metadata:de({plugins:n.plugins,options:e}),environment:n.environment}),Se(Se({refresh:a},i),o)}}}]);