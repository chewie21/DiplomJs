!function(e){var t={};function o(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(r,l,function(t){return e[t]}.bind(null,l));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var r=()=>{const e=document.querySelector("#club-select-ul");e.style.zIndex="9999";const t=r=>{r.target.closest("#club-select-title")&&(console.log("block"),e.style.display="block",document.removeEventListener("click",t),document.addEventListener("click",o))},o=r=>{!r.target.closest("#club-select-title")&&r.target.closest("#club-select-ul")||(console.log("none"),e.style.display="none",document.removeEventListener("click",o),document.addEventListener("click",t))};document.addEventListener("click",t)};var l=()=>{const e=document.querySelector(".fixed-gift"),t=document.querySelector("#gift");e.style.display="none",t.style.display="block",t.addEventListener("click",e=>{(e.target.closest(".close-btn")||!e.target.closest(".form-content")||e.target.closest("img"))&&(t.style.display="none")})};var s=(e,t)=>{const o=document.querySelector(""+e),r=o.querySelectorAll("input"),l=document.getElementById("thanks");let s;const n=e=>{(e.target.closest(".overlay")||e.target.closest(".close_icon")||e.target.closest(".close-btn"))&&(s.style.display="none",s.querySelector("form").reset(),r.forEach(e=>e.classList.remove("invalid")),s.removeEventListener("click",c))},c=e=>{(e.target.closest(".overlay")||e.target.closest(".close_icon")||e.target.closest(".close-btn"))&&(l.style.display="none",l.querySelector(".errorMessage")&&l.querySelector(".errorMessage").remove(),l.querySelector("#successMessage").style.display="none",l.removeEventListener("click",c))},i=()=>{setTimeout(()=>{l.style.display="none",l.querySelector(".errorMessage")&&l.querySelector(".errorMessage").remove(),l.querySelector("#successMessage").style.display="none",l.removeEventListener("click",c)},5e3)},a=e=>{const t=document.createElement("h4");"loading"===e?(t.classList.add("loadingMessage"),t.style="margin: auto;\n                            color: #ffd11a;\n                            background-color: #1e1c34;",t.textContent="Загрузка...",l.querySelector(".form-content").prepend(t)):"success"===e?(l.querySelector(".loadingMessage").remove(),l.querySelector("#successMessage").style.display="block"):"error"===e&&(l.querySelector(".loadingMessage").remove(),t.classList.add("errorMessage"),t.style="margin: auto;\n                            color: #ffd11a;\n                            background-color: #1e1c34;",t.textContent="Ошибка... Попробуйте еще раз",l.querySelector(".form-content").prepend(t))};t&&(s=document.querySelector(""+t),s.style.display="block",s.addEventListener("click",n)),o.addEventListener("submit",e=>{if(e.preventDefault(),(e=>{let t={};return e.forEach((e,o)=>{if(e.placeholder){if("Ваш номер телефона..."===e.placeholder){const r=()=>{e.removeEventListener("input",r);/(\+7|8)\d{10}/.test(e.value)?(console.log("Phone - true"),e.classList.remove("invalid"),t[o]=!0):(console.log("Phone - false"),e.classList.add("invalid"),e.addEventListener("input",r),t[o]=!1)};r()}if("Ваше имя..."===e.placeholder){const r=()=>{e.removeEventListener("input",r),""!==e.value?(console.log("Name - true"),e.classList.remove("invalid"),t[o]=!0):(console.log("name - false"),e.classList.add("invalid"),e.addEventListener("input",r),t[o]=!0)};r()}}else if(e.type){if("checkbox"===e.type)if(e.checked)console.log("check"),t[o]=!0;else{t[o]=!1;(()=>{let t=0;!function o(){t>-8?(t--,document.querySelector(`label[for=${e.id}]`).style.top=t+"px",requestAnimationFrame(o)):-8===t&&(document.querySelector(`label[for=${e.id}]`).style.top="0px")}()})()}if("radio"===e.type&&!0!==t.radio)if(e.checked)console.log("check"),t.radio=!0;else{console.log("notcheck"),t.radio=!1;(()=>{let t=0;!function o(){t>-8?(t--,document.querySelector(`label[for=${e.id}]`).style.top=t+"px",requestAnimationFrame(o)):-8===t&&(document.querySelector(`label[for=${e.id}]`).style.top="0px")}()})()}}}),!Object.values(t).includes(!1)})(r)){const e=new FormData(o);o.reset();let r={};e.forEach((e,t)=>{r[t]=e}),t&&(s.style.display="none"),l.style.display="block",a("loading"),l.addEventListener("click",c),((e,t,o)=>{fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}).then(e=>{if(200!==e.status)throw o;t()}).catch(o)})(r,()=>{a("success"),i()},()=>{a("error"),i()})}})};var n=()=>{const e=document.getElementById("cards"),t=e.querySelector("#price-total"),o=e.querySelector("#promoCode"),r=e.querySelector(".card_order");let l;const n={mozaika:{1:1999,6:9900,9:13900,12:19900},schelkovo:{1:2999,6:14990,9:21990,12:24990}},c={"ТЕЛО2020":.3,"ПРИМЕР":.5},i={mozaika:!1,schelkovo:!1},a={1:!1,6:!1,9:!1,12:!1},d=document.createElement("input");d.type="hidden",d.name="price",r.append(d);const u=()=>{let e,o;for(let t in i)!0===i[t]&&(e=t);for(let e in a)!0===a[e]&&(o=e);l=n[e][o],t.textContent=l,d.value=l},p=()=>{const t=e.querySelectorAll('input[name="club-name"]'),o=e.querySelectorAll('input[name="card-type"]');t.forEach(e=>{e.checked&&(i[e.defaultValue]=!0),e.checked||(i[e.defaultValue]=!1)}),o.forEach(e=>{e.checked&&(a[e.defaultValue]=!0),e.checked||(a[e.defaultValue]=!1)}),u()};p();const y=()=>{console.log(l);const e=l;let r;for(let s in c){if(s===o.value)return r=e-e*c[s],t.textContent=Math.floor(r),void(d.value=Math.floor(r));t.textContent=l,d.value=l}};o.addEventListener("input",y),e.addEventListener("click",e=>{let t=e.target;if(t.closest("input"))if("card-type"===t.name)for(let e in a)e===t.defaultValue&&(a[e]=!0),e!==t.defaultValue&&(a[e]=!1);else if("club-name"===t.name)for(let e in i)e===t.defaultValue&&(i[e]=!0),e!==t.defaultValue&&(i[e]=!1);u(),y()}),s("#card_order"),r.addEventListener("reset",()=>{setTimeout(()=>p(),1e3)})};var c=e=>{const t=document.querySelector(""+e),o=t.querySelector(".wrapperDots"),r=t.querySelectorAll(".slide");r[0].classList.add("activeSlide");let l,s=0;(()=>{const e=t.querySelector(".dots");for(let o=0;o<r.length;o++)e.insertAdjacentHTML("beforeend",'<li class="dot"></li>'),0===o&&t.querySelector(".dot").classList.add("dot-active")})();const n=t.querySelectorAll(".dot"),c=(e,t,o)=>{e[t].classList.remove(o)},i=(e,t,o)=>{e[t].classList.add(o)},a=()=>{c(r,s,"activeSlide"),c(n,s,"dot-active"),s++,s>=r.length&&(s=0),i(r,s,"activeSlide"),i(n,s,"dot-active")},d=()=>{l=setInterval(a,3e3)};o.addEventListener("mouseover",e=>{(e.target.matches(".gallery-btn")||e.target.matches(".dot"))&&clearInterval(l)}),o.addEventListener("mouseout",e=>{(e.target.matches(".gallery-btn")||e.target.matches(".dot"))&&d()}),o.addEventListener("click",e=>{e.preventDefault();let t=e.target;t.matches("#arrow-right, #arrow-left, .dot")&&(c(r,s,"activeSlide"),c(n,s,"dot-active"),t.matches("#arrow-right")?s++:t.matches("#arrow-left")?s--:t.matches(".dot")&&n.forEach((e,o)=>{e===t&&(s=o)}),s>=r.length&&(s=0),s<0&&(s=r.length-1),i(r,s,"activeSlide"),i(n,s,"dot-active"))}),d()};var i=class{constructor({main:e,wrap:t,next:o,prev:r}){this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.next=this.main.querySelector(o),this.prev=this.main.querySelector(r),this.option={position:0,slidesToShow:5}}init(){this.addClass(),this.controllService()}addClass(){this.main.classList.add("servicesWrapper"),this.wrap.classList.add("servicesSlider");for(const e of this.slides)e.classList.add("servicesSlide")}controllService(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(e){e.preventDefault(),--this.option.position,this.option.position<0&&(this.option.position=this.slides.length-5),this.wrap.style.transform=`translateX(-${20*this.option.position}%)`}nextSlider(e){e.preventDefault(),++this.option.position,this.option.position>this.slides.length-5&&(this.option.position=0),this.wrap.style.transform=`translateX(-${20*this.option.position}%)`}};document.querySelectorAll("input").forEach(e=>{"Ваш номер телефона..."===e.placeholder?e.addEventListener("input",()=>{e.value=e.value.replace(/[^\d]/g,"")}):"Ваше имя..."===e.placeholder&&e.addEventListener("input",()=>{e.value=e.value.replace(/[^А-Яа-я ]/g,"")})}),r(),document.addEventListener("click",e=>{let t=e.target;t.closest("#visit-btn")&&s("#form2","#free_visit_form"),t.closest("#callback-header")&&s("#form1","#callback_form"),t.closest(".fixed-gift")&&l(),t.closest("#totop")&&(e.preventDefault(),document.querySelector(".header-main").scrollIntoView({behavior:"smooth",block:"start"})),t.closest(".scrollMenu")&&(e.preventDefault(),document.querySelector(""+t.hash).scrollIntoView({behavior:"smooth",block:"start"})),(t.closest(".close-menu-btn")||t.closest(".scrollMenu"))&&(document.querySelector(".popup-menu").style.display="none"),t.closest("#burger")&&(document.querySelector(".popup-menu").style.display="flex")}),document.addEventListener("scroll",()=>{pageYOffset>=186&&document.querySelector(".top-menu").classList.add("fixed"),pageYOffset<186&&document.querySelector(".top-menu").classList.remove("fixed"),pageYOffset>=800&&(document.querySelector("#totop").style.display="block"),pageYOffset<800&&(document.querySelector("#totop").style.display="none")}),s("#banner-form"),s("#footer_form"),document.querySelector(".card_order_second")&&s(".card_order_second"),document.querySelector(".card_order")&&n(),c(".head-slider"),c("#gallery");new i({main:".services-wrapper",wrap:".services-slider",next:"#arrow-right",prev:"#arrow-left"}).init()}]);