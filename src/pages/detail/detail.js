import './detail.scss'
import axios from 'axios'
import fs from 'fs'

console.log("详情")
const data=JSON.parse(localStorage.getItem("id"))
const id=JSON.parse(localStorage.getItem("index"))*1
console.log(data,id)
const curdata=data.filter(obj=>obj.item_id===id)
console.log(curdata)

$(".box").innerHTML=`
<div class="img">
            <img src="${curdata.img}" alt="">
        </div>
        <h2>￥${curdata.price} <span>促销价</span></h2>
        <p>价格<span>￥152</span> </p>
        <div class="main">
        ${curdata.title}
        </div>
        <div class="shop">
            <span>快递：0.00</span><span>月销量${curdata.sold}件</span><span>天津</span>
        </div>
`

function $(el) {
    return document.querySelector(el)
}