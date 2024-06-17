import"./modulepreload-polyfill-B5Qt9EMX.js";console.log("详情");const n=JSON.parse(localStorage.getItem("id")),o=JSON.parse(localStorage.getItem("index"))*1;console.log(n,o);const s=n.filter(a=>a.item_id===o);console.log(s);e(".box").innerHTML=`
<div class="img">
            <img src="${s.img}" alt="">
        </div>
        <h2>￥${s.price} <span>促销价</span></h2>
        <p>价格<span>￥152</span> </p>
        <div class="main">
        ${s.title}
        </div>
        <div class="shop">
            <span>快递：0.00</span><span>月销量${s.sold}件</span><span>天津</span>
        </div>
`;function e(a){return document.querySelector(a)}
