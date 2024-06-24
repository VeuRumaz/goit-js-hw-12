import{a as y,S as v,i}from"./assets/vendor-b11e2a50.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const b="44423682-ae5a9afd37f02d31d9155c276",L="https://pixabay.com/api/";let l=1,u="";const g=async(e,o=1)=>{e!==u?(u=e,l=1):l=o;try{return(await y.get(L,{params:{key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:15}})).data}catch(t){throw console.error("Error fetching images from Pixabay:",t),t}},w=()=>l+1;let f;function h(e){const o=document.querySelector(".gallery"),t=e.map(r=>`
    <a href="${r.largeImageURL}" class="gallery__link new-item">
      <img src="${r.webformatURL}" alt="${r.tags}" class="gallery__image"/>
      <div class="info">
        <div class="info-item">
          <b>Likes</b>
          <span>${r.likes}</span>
        </div>
        <div class="info-item">
          <b>Views</b>
          <span>${r.views}</span>
        </div>
        <div class="info-item">
          <b>Comments</b>
          <span>${r.comments}</span>
        </div>
        <div class="info-item">
          <b>Downloads</b>
          <span>${r.downloads}</span>
        </div>
      </div>
    </a>`).join("");o.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".gallery__link.new-item").forEach(r=>{r.addEventListener("animationend",()=>{r.classList.remove("new-item")})}),f?f.refresh():f=new v(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",captionClass:"sl-caption pos-bottom"})}const E="/goit-js-hw-12/assets/error-4f06a8ee.svg",S=document.querySelector(".search-form"),m=document.querySelector(".gallery"),c=document.querySelector(".loader"),n=document.querySelector(".load-more");let p="";i.settings({position:"topRight",resetOnHover:!0,transitionIn:"fadeInDown",transitionOut:"fadeOutUp",progressBar:!0,closeOnEscape:!0,theme:"dark",messageColor:"white",iconUrl:E,backgroundColor:"red",titleColor:"#fff",titleSize:"16px"});S.addEventListener("submit",async e=>{e.preventDefault();const o=e.target.elements.searchQuery.value.trim();if(o===""){i.error({title:"Error",message:"Search query cannot be empty!"});return}p=o,m.innerHTML="",c.classList.remove("hidden"),n.classList.add("hidden");try{const{hits:t,totalHits:r}=await g(o);t.length===0?i.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):(h(t),t.length<r&&n.classList.remove("hidden"))}catch(t){i.error({title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error fetching images:",t)}finally{c.classList.add("hidden")}});n.addEventListener("click",async()=>{n.classList.add("hidden"),c.classList.remove("hidden");try{const e=w(),{hits:o,totalHits:t}=await g(p,e);h(o),m.children.length<t?n.classList.remove("hidden"):i.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."}),P()}catch(e){i.error({title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error fetching images:",e)}finally{c.classList.add("hidden")}});function P(){const{height:e}=m.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
