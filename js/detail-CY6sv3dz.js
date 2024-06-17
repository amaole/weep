import"./modulepreload-polyfill-B5Qt9EMX.js";console.log("详情");const a=JSON.parse(localStorage.getItem("id")),i=JSON.parse(localStorage.getItem("index")),s=a.slice(JSON.stringify(i),1);console.log(s);e(".box").innerHTML=`
<div class="img">
            <img src="${s[0].img}" alt="">
        </div>
        <h2>￥${s[0].price} <span>促销价</span></h2>
        <p>价格<span>￥152</span> </p>
        <div class="main">
        ${s[0].title}
        </div>
        <div class="shop">
            <span>快递：0.00</span><span>月销量${s[0].sold}件</span><span>天津</span>
        </div>
`;function e(n){return document.querySelector(n)}
