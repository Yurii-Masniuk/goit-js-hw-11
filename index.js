import{a as p,S as y,i as a}from"./assets/vendor-CaRFiM55.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="51729015-e356512e01098e6cfb5d1c735",g="https://pixabay.com/api/";function L(n){const r={key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(g,{params:r}).then(o=>o.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),S=new y(".gallery a",{captionsData:"alt",captionDelay:250});function b(n){const r=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:f,downloads:m})=>`
      <li>
        <a href="${s}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p>Likes: ${t}</p>
          <p>Views: ${i}</p>
          <p>Comments: ${f}</p>
          <p>Downloads: ${m}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),S.refresh()}function q(){l.innerHTML=""}function v(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}const d=document.querySelector(".form"),E=d.querySelector('input[name="search-text"]');d.addEventListener("submit",n=>{n.preventDefault();const r=E.value.trim();if(!r){a.error({title:"Error",message:"Please enter a search query!"});return}q(),v(),L(r).then(o=>{if(!o.hits.length){a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}b(o.hits)}).catch(o=>{c(),a.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(o)}).finally(()=>{c()})});
//# sourceMappingURL=index.js.map
