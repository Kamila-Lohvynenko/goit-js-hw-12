import{a as g,i as y,S as P}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const M="43199917-ac2cc136e7963c28457226ad3";g.defaults.baseURL="https://pixabay.com/api/";async function L(t,r){const e={key:M,q:t.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r.currentPage},c=await g.get("",{params:e});return r.currentPage+=1,c.data}function v(t){try{if(!t.length)throw Error("There are no images matching the search query")}catch(e){y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),console.log(e)}return t.map(e=>`
            <li class="item">
            <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}">
            </a>
            <div class="item-content">
            <div>
            <h3 class="title">Likes</h3>
            <p class="amount">${e.likes}</p>
            </div>
            <div>
            <h3 class="title">Views</h3>
            <p class="amount">${e.views}</p>
            </div>
            <div>
            <h3 class="title">Comments</h3>
            <p class="amount">${e.comments}</p>
            </div>
            <div>
            <h3 class="title">Downloads</h3>
            <p class="amount">${e.downloads}</p>
            </div>
            </div>
            </li>
            `).join("")}const m=document.querySelector(".form"),p=m.elements.input,d=document.querySelector(".container"),a=document.querySelector(".loader"),i=document.querySelector(".next-page-btn"),w=document.querySelector(".end");m.addEventListener("submit",S);i.addEventListener("click",E);let u="";const l={currentPage:1};let n=0;function S(t){if(t.preventDefault(),w.classList.add("is-hidden"),u=p.value,l.currentPage=1,d.innerHTML="",!p.value.trim()){i.classList.add("is-hidden"),f("Your query does not contain any letters!");return}a.classList.remove("is-hidden"),q(u,l)}async function q(t,r){try{a.classList.add("is-hidden");const e=await L(t,r);if(n=Math.ceil(e.totalHits/15),console.log(n),console.log(r.currentPage),r.currentPage<=n&&i.classList.remove("is-hidden"),!e.hits)throw f("There is a problem with on the server"),new Error('Object "hits" is missing');e.totalHits<=15&&i.classList.add("is-hidden"),d.insertAdjacentHTML("beforeend",v(e.hits)),b.refresh()}catch(e){a.classList.add("is-hidden"),console.log(e)}finally{m.reset()}}async function E(){try{i.classList.remove("is-hidden");const t=await L(u,l);if(a.classList.add("is-hidden"),n=Math.ceil(t.totalHits/15),l.currentPage>n&&(i.classList.add("is-hidden"),w.classList.remove("is-hidden")),!t.hits)throw f("There is a problem with data on the server"),new Error('Object "hits" is missing');d.insertAdjacentHTML("beforeend",v(t.hits)),b.refresh(),I()}catch(t){a.classList.add("is-hidden"),console.log(t)}}const b=new P(".container a",{captionsData:"alt",captionDelay:250});function I(){const r=d.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}function f(t){y.error({message:t,position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
