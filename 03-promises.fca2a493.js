!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r.register;// Importowanie Notiflix i innych niezbędnych zależności
var i=r("6JpON");// Obsługa zdarzenia 'DOMContentLoaded' i 'submit' formularza
document.addEventListener("DOMContentLoaded",()=>{let t=document.querySelector(".form");t.addEventListener("submit",n=>{n.preventDefault();let o=Number(t.elements.delay.value),r=Number(t.elements.step.value),l=Number(t.elements.amount.value);for(let t=1;t<=l;t++){let n=o+(t-1)*r;(function(e,t){return new Promise((n,o)=>{let r=Math.random()>.3;setTimeout(()=>{r?n({position:e,delay:t}):o({position:e,delay:t})},t)})})(t,n).then(({position:t,delay:n})=>{/*@__PURE__*/e(i).Notify.success(`\u{2705} Fulfilled promise ${t} in ${n}ms`)}).catch(({position:t,delay:n})=>{/*@__PURE__*/e(i).Notify.failure(`\u{274C} Rejected promise ${t} in ${n}ms`)})}})})}();//# sourceMappingURL=03-promises.fca2a493.js.map

//# sourceMappingURL=03-promises.fca2a493.js.map
