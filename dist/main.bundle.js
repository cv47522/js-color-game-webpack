!function(n){function t(t){for(var o,i,l=t[0],c=t[1],d=t[2],u=0,f=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,d||[]),e()}function e(){for(var n,t=0;t<a.length;t++){for(var e=a[t],o=!0,l=1;l<e.length;l++){var c=e[l];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),n=i(i.s=e[0]))}return n}var o={},r={0:0},a=[];function i(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=o,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)i.d(e,o,function(t){return n[t]}.bind(null,o));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var s=c;a.push([0,1]),e()}([function(n,t,e){"use strict";e.r(t);e(1);window.onload=function(){L("easy"),x(),C()};var o,r,a,i,l,c,d=3,s=!1,u=[],f=document.querySelector("body"),b=document.querySelector("#color-picked"),p=document.querySelector("#message"),g=(document.querySelector("h1"),document.querySelector("#reset")),h=document.querySelector("#reset span"),m=document.querySelector("#card-container"),y=document.querySelectorAll(".mode-btn"),v=document.querySelector("#count-down"),k=5,w=1;function x(){for(var n=0;n<r.length;n++)r[n].addEventListener("click",(function(){s||(this.style.backgroundColor===o&&k>=0?(p.textContent="Correct!",v.innerHTML="",M()):(this.style.opacity=0,p.textContent="Try Again"))}))}function M(){clearInterval(i),clearInterval(l),h.textContent="Play Again",function(n){for(var t=0;t<r.length;t++)r[t].style.opacity=1,r[t].style.backgroundColor=n}("#FFF"),f.style.backgroundColor=o,s=!0}function C(){var n;k=5,s=!1,u=function(n){for(var t=[],e=0;e<n;e++)t.push((o=void 0,r=void 0,a=void 0,o=Math.floor(256*Math.random()),r=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),"rgb("+o+", "+r+", "+a+")"));var o,r,a;return t}(d),n=Math.floor(Math.random()*u.length),o=u[n],b.textContent=o,h.textContent="New Color",p.textContent="What's the Color?";for(var t=0;t<r.length;t++)r[t].style.opacity=1,u[t]?(r[t].style.display="block",r[t].style.backgroundColor=u[t]):r[t].style.display="none";f.style.backgroundColor="#232323"}function S(n){y.forEach((function(n){n.classList.remove("selected-mode-btn")})),n.target.classList.add("selected-mode-btn"),L(n.target.id),a=n.target.id}function L(n){switch(clearInterval(i),clearInterval(l),m.innerHTML="",v.innerHTML="",n){case"easy":d=3;break;case"hard":d=6;break;case"nightmare":d=6,v.innerHTML=" "+k,i=setInterval(O,1e3),l=setInterval(T,500);break;default:d=3}for(var t=0;t<d;t++)m.innerHTML+='<div class="card"></div>';r=document.querySelectorAll(".card"),x(),C()}function O(){k-=1,v.innerHTML=" "+k,k<=0&&(clearInterval(i),M(),p.textContent="TIMEOUT!",v.innerHTML="")}function T(){c=1;var n=f.style.backgroundColor;0==w&&1==c&&(n="#232323",w=1,c=0),1==w&&1==c&&(n="#404040",w=0,c=0),f.style.backgroundColor=n,console.log(n+" "+w+", "+c)}y.forEach((function(n){n.addEventListener("click",S)})),g.addEventListener("click",(function(){C(),L(a)}))},function(n,t,e){var o=e(2),r=e(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(r,a),r.locals?r.locals:{});n.exports=i},,function(n,t,e){(t=e(4)(!1)).push([n.i,'* {\n\tbox-sizing: border-box;\n}\n\nhtml {\n  font-size: 16px;\n\tline-height: 1.5;\n}\n\nbody {\n  background-color: #232323;\n  margin: 0;\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;\n\ttransition: background 0.6s;\n  -webkit-transition: background 0.6s;\n  -moz-transition: background 0.6s;\n}\n\n.blink-bg{\n\tbackground-color: white;\n}\n\n#stripe {\n\tbackground: white;\n\tpadding: 1rem;\n\tcolor: #484848;\n}\n\n#navbar {\n\tdisplay: -webkit-flex;\n  display: flex;\n\tflex-direction: row;\n}\n\n#brand {\n\tfont-weight: bold;\n\tpadding: 0 1rem;\n}\n\n.mode-btn{\n\tpadding: 0 1rem;\n\tcursor: pointer;\n}\n.mode-btn:hover{\n\tcolor: #D455BE;\n}\n.selected-mode-btn{\n\tfont-weight: bold;\n\tcolor: white;\n\tbackground-color: #4F72B8;\n\tborder-radius: 999rem;\n}\n\n#about {\n\tmargin-left: auto;\n\tcolor: #bbb;\n}\n#about a{\n\tcolor: #bbb;\n\ttext-decoration: none;;\n}\n#about a:hover{\n\tcolor: #72A5AD;\n}\n\n.container {\n  margin-left: auto;\n\tmargin-right: auto;\n  max-width: 520px;\n}\n\n#card-container::after {\n\tcontent: "";\n\tdisplay: block;\n\tclear: both;\n}\n\n#color-picked {\n  font-weight: bold;\n\tfont-size: 120%;\n}\n\n@media (min-width: 576px) {\n\t#color-picked {\n\t    font-size: 200%;\n\t}\n}\n\nh1 {\n  text-align: center;\n  font-weight: normal;\n  color: white;\n  text-transform: uppercase;\n\tmargin: 0;\n  padding: 20px 0;\n}\n\n.card {\n  width: 30%;\n  background: white;\n  padding-bottom: 30%;\n  float: left;\n  margin: 1.66%;\n\tborder-radius: 1rem;\n  transition: all 0.6s;\n  -webkit-transition: all 0.6s;\n  -moz-transition: all 0.6s;\n\tcursor: pointer;\n}\n\n.selected {\n  color: white;\n  background: steelblue;\n}\n\nbutton {\n\tdisplay: block;\n\tmargin: 3rem auto;\n\tpadding: 1rem;\n\toutline: none;\n\tborder: none;\n  border-radius: 999rem;\n  background-color: white;\n\tfont-size: 1rem;\n  font-weight: 700;\n  color: #484848;\n  transition: all 0.3s;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n\tcursor: pointer;\n}\n\nbutton:hover {\n  color: white;\n  background-color: steelblue;\n}\n',""]),n.exports=t}]);