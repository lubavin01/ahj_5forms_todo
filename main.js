!function(e){var t={};function i(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(n,l,function(t){return e[t]}.bind(null,l));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){},function(e,t,i){"use strict";i.r(t);i(0);const n=document.querySelector(".form-popup");var l=new class{constructor(e){this.element=e,this.updateCallback=null,this.titleElement=this.element.querySelector(".title"),this.titleValidation=this.element.querySelector(".title_validation"),this.priceElement=this.element.querySelector(".price"),this.priceValidation=this.element.querySelector(".price_validation");this.element.querySelector(".form_submit").addEventListener("click",()=>{let e=!1;this.titleValidation.classList.add("hidden"),this.priceValidation.classList.add("hidden");const t=this.titleElement.value;let i;t||(this.titleValidation.classList.remove("hidden"),e=!0);try{i=Number(this.priceElement.value),i||(this.priceValidation.classList.remove("hidden"),e=!0)}catch(t){this.priceValidation.classList.remove("hidden"),e=!0}e||(this.updateCallback(t,i),this.close())});this.element.querySelector(".form_close").addEventListener("click",()=>{this.close()})}open(e,t,i){this.titleElement.value=e,this.priceElement.value=t,this.updateCallback=i,this.element.classList.remove("hidden")}close(){this.titleElement.value="",this.priceElement.value="",this.updateCallback=null,this.titleValidation.classList.add("hidden"),this.priceValidation.classList.add("hidden"),this.element.classList.add("hidden")}}(n);class r{constructor(e,t,i=!1){this.element=null,this.title=e,this.price=t,i&&this.renderElement()}openModal(){l.open(this.title,this.price,this.updateData.bind(this))}registerEvents(){this.element.querySelector(".delete_button").addEventListener("click",()=>{this.element.outerHTML=""});this.element.querySelector(".modify_button").addEventListener("click",()=>{this.openModal()})}updateData(e,t){this.title=e,this.price=t,this.renderElement()}renderElement(){if(!this.element){this.element=document.createElement("tr");document.querySelector(".table_body").append(this.element)}this.element.innerHTML=`<tr class='row'>\n    <td>${this.title}</td>\n    <td>${this.price}</td>\n    <td>\n      <button class='modify_button'>&#9998</button>\n      <button class='delete_button'>&#10008</button>\n    </td>\n    </tr>`,this.registerEvents()}}new r("Iphone",6e4,!0),new r("Samsung",7e4,!0),new r("Huawei",5e4,!0);document.querySelector(".add_button").addEventListener("click",()=>{new r("","").openModal()})}]);