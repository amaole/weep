import './serach.scss'
import '../../common/common.scss'
import axios from 'axios'
let fals = false
// 获取存储信息
let url = ""
const data=JSON.parse(localStorage.getItem("id"))

// console.log(data)
readtable(data)
// // 点击
$(".header").addEventListener("click", function (e) {
    // $(".advice").classList.remove("advice")
    if (e.target.className === "sales") {
        $(".advice").classList.remove("advice")
        url = "https://zyxcl.xyz/exam_api/xl"
        jumpPage(url)
        e.target.classList.add("advice")
        // if(e.target.className==="price"){
        //     console.log(res.data.items)
        //     e.target.classList.add("advice")
        // }
    }
    if (e.target.className === "new") {
        $(".advice").classList.remove("advice")
        e.target.classList.add("advice")
        url = "https://zyxcl.xyz/exam_api/sx"
        jumpPage(url)
    }
    if (e.target.className === "com") {
        $(".advice").classList.remove("advice")
        e.target.classList.add("advice")
        url = "https://zyxcl.xyz/exam_api/zh"
        jumpPage(url)
    }
    // if(e.target.classList==="deformation"){
    //     $(".advice").classList.remove("advice")
    //     e.target.classList.add("advice")
    //     location.assign("./search.html")

    // }
})

// 跳转
$(".deformation").addEventListener("click",(e)=>{
    location.assign("./")

})

document.addEventListener("click",(e)=>{
    if(e.target.nodeName==="DL"){
        const i=e.target.getAttribute("id")
   
        localStorage.setItem("index",JSON.stringify(i))
        console.log(JSON.parse(JSON.stringify(i)))
        // const f=JSON.parse(localStorage.getItem("id")).slice(JSON.stringify(i),1)
        // console.log(f)
        location.assign("./detail.html")

    }
})

// 渲染
function readtable(data) {
    $(".main").innerHTML = data.map((item) => {
        return `
        <dl class="${item.item_id}">
        <dt><img src="${item.img}" alt=""></dt>
            <dd>${item.title}<span class="price">￥${item.price}</span><span class="sold">月销售${item.sold}笔</span></dd>
    
          </dl>
        
        
        `
    }).join("")
}


async function jumpPage(url) {
    const res = await axios.get(url, {
    })
    readtable(res.data.items)
    console.log(res)
    // let price=res.data.items.price
    // console.log(price)
    $(".price").addEventListener("click",function(){
        
        if (fals) {
            res.data.items.sort((a, b) => {
                return a.price - b.price
            })
            readtable(res.data.items)
            fals = false
           
        }else{
            res.data.items.sort((a, b) => {
                return  b.price-a.price 
            })
            readtable(res.data.items)
            fals = true
            
        } 
    })
    localStorage.setItem("id",JSON.stringify(res.data.items))
    }

// jumpPage("https://zyxcl.xyz/exam_api/zh")



function $(el) {
    return document.querySelector(el)
}
