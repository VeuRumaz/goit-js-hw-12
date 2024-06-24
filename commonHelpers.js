import{a as y,S as v,i}from"./assets/vendor-b11e2a50.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const L="44423682-ae5a9afd37f02d31d9155c276",b="https://pixabay.com/api/";let l=1,u="";const g=async(e,s=1)=>(e!==u?(u=e,l=1):l=s,(await y.get(b,{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:15}})).data),w=()=>l+1;let f;function h(e){const s=document.querySelector(".gallery"),o=e.map(t=>`
    <a href="${t.largeImageURL}" class="gallery__link new-item">
      <img src="${t.webformatURL}" alt="${t.tags}" class="gallery__image"/>
      <div class="info">
        <div class="info-item">
          <b>Likes</b>
          <span>${t.likes}</span>
        </div>
        <div class="info-item">
          <b>Views</b>
          <span>${t.views}</span>
        </div>
        <div class="info-item">
          <b>Comments</b>
          <span>${t.comments}</span>
        </div>
        <div class="info-item">
          <b>Downloads</b>
          <span>${t.downloads}</span>
        </div>
      </div>
    </a>`).join("");s.insertAdjacentHTML("beforeend",o),document.querySelectorAll(".gallery__link.new-item").forEach(t=>{t.addEventListener("animationend",()=>{t.classList.remove("new-item")})}),f?f.refresh():f=new v(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",captionClass:"sl-caption pos-bottom"})}const E="/goit-js-hw-12/assets/error-4f06a8ee.svg",S=document.querySelector(".search-form"),m=document.querySelector(".gallery"),c=document.querySelector(".loader"),n=document.querySelector(".load-more");let p="";i.settings({position:"topRight",resetOnHover:!0,transitionIn:"fadeInDown",transitionOut:"fadeOutUp",progressBar:!0,closeOnEscape:!0,theme:"dark",messageColor:"white",iconUrl:E,backgroundColor:"red",titleColor:"#fff",titleSize:"16px"});S.addEventListener("submit",async e=>{e.preventDefault();const s=e.target.elements.searchQuery.value.trim();if(s===""){i.error({title:"Error",message:"Search query cannot be empty!"});return}p=s,m.innerHTML="",c.classList.remove("hidden"),n.classList.add("hidden");try{const{hits:o,totalHits:t}=await g(s);o.length===0?i.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):(h(o),o.length<t&&n.classList.remove("hidden"))}catch(o){i.error({title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error fetching images:",o)}finally{c.classList.add("hidden")}});n.addEventListener("click",async()=>{n.classList.add("hidden"),c.classList.remove("hidden");try{const e=w(),{hits:s,totalHits:o}=await g(p,e);h(s),m.children.length<o?n.classList.remove("hidden"):i.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."}),P()}catch(e){i.error({title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error fetching images:",e)}finally{c.classList.add("hidden")}});function P(){const{height:e}=m.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
