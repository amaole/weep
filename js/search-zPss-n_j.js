import"./modulepreload-polyfill-B5Qt9EMX.js";import{a as n}from"./axios-BUNzpk29.js";let s="";const l=JSON.parse(localStorage.getItem("id"));c(l);e(".header").addEventListener("click",function(a){a.target.className==="sales"&&(e(".advice").classList.remove("advice"),s="https://zyxcl.xyz/exam_api/xl",i(s),a.target.classList.add("advice")),a.target.className==="new"&&(e(".advice").classList.remove("advice"),a.target.classList.add("advice"),s="https://zyxcl.xyz/exam_api/sx",i(s)),a.target.className==="com"&&(e(".advice").classList.remove("advice"),a.target.classList.add("advice"),s="https://zyxcl.xyz/exam_api/zh",i(s))});e(".deformation").addEventListener("click",a=>{location.assign("./")});function c(a){e(".main").innerHTML=a.map(t=>`
        <dl class="${t.item_id}">
        <dt><img src="${t.img}" alt=""></dt>
            <dd>${t.title}<span class="price">￥${t.price}</span><span class="sold">月销售${t.sold}笔</span></dd>
    
          </dl>
        
        
        `).join("")}async function i(a){const t=await n.get(a,{});c(t.data.items),console.log(t),e(".price").addEventListener("click",function(){t.data.items.sort((d,r)=>r.price-d.price),c(t.data.items)})}function e(a){return document.querySelector(a)}
