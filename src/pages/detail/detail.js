import './detail.scss'
import axios from 'axios'
import fs from 'fs'

console.log("详情")
const index=JSON.parse(localStorage.getItem("id"))
const i=JSON.parse(localStorage.getItem("index"))
const fall=index.slice(JSON.stringify(i),1)
console.log(fall)

$(".box").innerHTML=`
<div class="img">
            <img src="${fall[0].img}" alt="">
        </div>
        <h2>￥${fall[0].price} <span>促销价</span></h2>
        <p>价格<span>￥152</span> </p>
        <div class="main">
        ${fall[0].title}
        </div>
        <div class="shop">
            <span>快递：0.00</span><span>月销量${fall[0].sold}件</span><span>天津</span>
        </div>
`

function $(el) {
    return document.querySelector(el)
}