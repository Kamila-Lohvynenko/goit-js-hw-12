import{a as g,i as y,S as P}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const M="43199917-ac2cc136e7963c28457226ad3";g.defaults.baseURL="https://pixabay.com/api/";async function v(e,t){const r={key:M,q:e.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t.currentPage},a=await g.get("",{params:r});return t.currentPage+=1,a.data}function L(e){try{if(!e.length)throw Error("There are no images matching the search query")}catch(r){y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),console.log(r)}return e.map(r=>`
            <li class="item">
            <a href="${r.largeImageURL}">
            <img src="${r.webformatURL}" alt="${r.tags}">
            </a>
            <div class="item-content">
            <div>
            <h3 class="title">Likes</h3>
            <p class="amount">${r.likes}</p>
            </div>
            <div>
            <h3 class="title">Views</h3>
            <p class="amount">${r.views}</p>
            </div>
            <div>
            <h3 class="title">Comments</h3>
            <p class="amount">${r.comments}</p>
            </div>
            <div>
            <h3 class="title">Downloads</h3>
            <p class="amount">${r.downloads}</p>
            </div>
            </div>
            </li>
            `).join("")}const f=document.querySelector(".form"),p=f.elements.input,c=document.querySelector(".container"),o=document.querySelector(".loader"),l=document.querySelector(".next-page-btn"),b=document.querySelector(".end");f.addEventListener("submit",S);l.addEventListener("click",q);let u="";const n={currentPage:1};let d=0;function S(e){if(e.preventDefault(),b.classList.add("is-hidden"),u=p.value,n.currentPage=1,c.innerHTML="",!p.value.trim()){m("Your query does not contain any letters!");return}o.classList.remove("is-hidden"),v(u,n).then(t=>{if(o.classList.add("is-hidden"),d=Math.ceil(t.totalHits/15),n.currentPage<=d&&l.classList.remove("is-hidden"),!t.hits)throw m("There is a problem with on the server"),new Error('Object "hits" is missing');c.insertAdjacentHTML("beforeend",L(t.hits)),w.refresh()}).catch(t=>{o.classList.add("is-hidden"),console.log(t)}).finally(()=>f.reset())}function q(){l.classList.remove("is-hidden"),v(u,n).then(e=>{if(o.classList.add("is-hidden"),d=Math.ceil(e.totalHits/15),n.currentPage>d&&(l.classList.add("is-hidden"),b.classList.remove("is-hidden")),!e.hits)throw m("There is a problem with data on the server"),new Error('Object "hits" is missing');c.insertAdjacentHTML("beforeend",L(e.hits)),w.refresh(),E()}).catch(e=>{o.classList.add("is-hidden"),console.log(e)})}const w=new P(".container a",{captionsData:"alt",captionDelay:250});function E(){const t=c.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}function m(e){y.error({message:e,position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
