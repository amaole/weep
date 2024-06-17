import"./modulepreload-polyfill-B5Qt9EMX.js";import{a as n}from"./axios-BUNzpk29.js";let d=!1,s="";const o=JSON.parse(localStorage.getItem("id"));i(o);e(".header").addEventListener("click",function(t){t.target.className==="sales"&&(e(".advice").classList.remove("advice"),s="https://zyxcl.xyz/exam_api/xl",l(s),t.target.classList.add("advice")),t.target.className==="new"&&(e(".advice").classList.remove("advice"),t.target.classList.add("advice"),s="https://zyxcl.xyz/exam_api/sx",l(s)),t.target.className==="com"&&(e(".advice").classList.remove("advice"),t.target.classList.add("advice"),s="https://zyxcl.xyz/exam_api/zh",l(s))});e(".deformation").addEventListener("click",t=>{location.assign("./")});document.addEventListener("click",t=>{if(t.target.nodeName==="DL"){const a=t.target.getAttribute("id");localStorage.setItem("index",JSON.stringify(a)),console.log(JSON.parse(JSON.stringify(a))),location.assign("./detail.html")}});function i(t){e(".main").innerHTML=t.map(a=>`
        <dl class="${a.item_id}">
        <dt><img src="${a.img}" alt=""></dt>
            <dd>${a.title}<span class="price">￥${a.price}</span><span class="sold">月销售${a.sold}笔</span></dd>
    
          </dl>
        
        
        `).join("")}async function l(t){const a=await n.get(t,{});i(a.data.items),console.log(a),e(".price").addEventListener("click",function(){d?(a.data.items.sort((c,r)=>c.price-r.price),i(a.data.items),d=!1):(a.data.items.sort((c,r)=>r.price-c.price),i(a.data.items),d=!0)}),localStorage.setItem("id",JSON.stringify(a.data.items))}function e(t){return document.querySelector(t)}
