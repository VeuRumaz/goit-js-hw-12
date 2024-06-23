import{S as c,i as a}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const d="44423682-ae5a9afd37f02d31d9155c276",f="https://pixabay.com/api/",u=async s=>{const t=await fetch(`${f}?key=${d}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`);if(!t.ok)throw new Error("Failed to fetch images");return await t.json()};function m(s){const t=document.querySelector(".gallery");t.innerHTML=s.map(o=>`
    <a href="${o.largeImageURL}" class="gallery__link">
      <img src="${o.webformatURL}" alt="${o.tags}" class="gallery__image"/>
      <div class="info">
        <div class="info-item">
          <b>Likes</b>
          <span>${o.likes}</span>
        </div>
        <div class="info-item">
          <b>Views</b>
          <span>${o.views}</span>
        </div>
        <div class="info-item">
          <b>Comments</b>
          <span>${o.comments}</span>
        </div>
        <div class="info-item">
          <b>Downloads</b>
          <span>${o.downloads}</span>
        </div>
      </div>
    </a>`).join(""),new c(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",captionClass:"sl-caption pos-bottom"}).refresh()}const p="/goit-js-hw-11/assets/error-4f06a8ee.svg",g=document.querySelector(".search-form"),y=document.querySelector(".gallery"),l=document.querySelector(".loader");a.settings({position:"topRight",resetOnHover:!0,transitionIn:"fadeInDown",transitionOut:"fadeOutUp",progressBar:!0,closeOnEscape:!0,theme:"dark",messageColor:"white",iconUrl:p,backgroundColor:"red",titleColor:"#fff",titleSize:"16px"});g.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(t===""){a.error({title:"Error",message:"Search query cannot be empty!"});return}y.innerHTML="",l.classList.remove("hidden"),u(t).then(({hits:i})=>{i.length===0?a.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):m(i)}).catch(i=>{a.error({title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error fetching images:",i)}).finally(()=>{l.classList.add("hidden")})});
//# sourceMappingURL=commonHelpers.js.map
