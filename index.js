// ======= default data =======
const menu = document.querySelector("#menu");
const cart = document.querySelector("#cart");
const totalAmount = document.querySelector("#total-amount");
const button = document.querySelector("#submit-button");

//click送出跳出alert並清空購物清單
button.addEventListener('click',(event)=>{
  if (boughTotal === 0) {
    alert('您尚未購買任何商品!')
  }else{
    const meg = `感謝購買\n 總金額:${totalAmount.textContent}`
    alert(meg)
    boughtHTML = ''
    cart.innerHTML = ''
    boughTotal = 0
    totalAmount.textContent = '--'
  }

  
})

//想法:設定boughTotal,將 menuData.price 並加總
//click btn (加入購物車)  將對應菜單的價格放入購物車清單
//創建空boughtHTML,boughTotal(總金額)=0
let boughtHTML = ''
let boughTotal = 0
//想法:監聽menu取得btn
menu.addEventListener('click',(event)=>{
  const target = event.target
  //遍歷菜單
  productData.forEach(data=>{
    //如果遍歷菜單的id(data.id)與click的id相同時,data = menuData
    if (data.id === target.id) {
      const menuData = data
      boughtHTML += `
      <li class="list-group-item">${menuData.name} X 1 小計：${menuData.price}</li>
    `
    boughTotal += menuData.price
    }
    cart.innerHTML = boughtHTML
    totalAmount.textContent = `總金額 : ${ boughTotal }`
  })
})
// 菜單資料
const productData = [
  {
    id: "product-1",
    imgUrl:
      "https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "馬卡龍",
    price: 90
  },
  {
    id: "product-2",
    imgUrl:
      "https://images.unsplash.com/photo-1560691023-ca1f295a5173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "草莓",
    price: 60
  },
  {
    id: "product-3",
    imgUrl:
      "https://images.unsplash.com/photo-1568271675068-f76a83a1e2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "奶茶",
    price: 100
  },
  {
    id: "product-4",
    imgUrl:
      "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "冰咖啡",
    price: 180
  }
];
// ======= 請從這裡開始 =======

//創建空cardHTML
let cardHTML = ''
//依序將菜單資料放入空html中
productData.forEach(data => {
  cardHTML+=`
    <div class="col-3">
      <div class="card">
        <img src='${data.imgUrl}' class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">${data.price}</p>
          <button class="btn btn-primary order-btn" id="${data.id}">加入購物車</button>
        </div>
      </div>
    </div>
    `
})
//將html放入menu
menu.innerHTML = cardHTML













