import { IMG_ROOT_PATH, IMG_TYPE } from "./settings.js";
import { getCartDetail, getUserCart, increaseProductQuant, removeFromCart, removeUserCart } from "../assets/data/cart.js";
import { userAuthenticated } from "../assets/data/user.js";
import { getProductDetail } from "../assets/data/products.js";
import { hideElements, showElements } from "./utils.js";
import { addOrders } from "../assets/data/orders.js";

//items
const cartIcon = document.getElementById("cart");
const cartPopup = document.getElementById("cart-popup");
// const viewCartBtn = document.getElementById("viewing-cart-btn");
const productContainer = document.getElementById("products-container");

//checkout
const checkoutForm = document.getElementById("checkout-form");
const subtotalEle = checkoutForm.querySelector(".content-checkout-subtotal-js");
const shippingFeeEle = checkoutForm.querySelector(".content-checkout-shipfee-js");
const totalEle = checkoutForm.querySelector(".content-checkout-total-js");
const checkoutBtn = checkoutForm.querySelector(".content-checkout-btn-js");

//remove item popup
const removeItemContainer = document.getElementById("remove-item-container");


const user = userAuthenticated() || console.error("user not auth but cartpage is rendered");

// export function renderCartPopUp() {
//   cartIcon.addEventListener("mouseover", () => {
//     if(cartPopup.classList.contains("hide")) {
//       cartPopup.classList.remove("hide");
//       // console.log("over");
//     }
//   });
//   cartIcon.addEventListener("mouseleave", () => {
//     cartPopup.classList.add("hide");
//     // console.log("out");
//   });
// }

export function renderProducts() {
  let htmlDoc = ``;

  //view
  getUserCart(user.id).forEach(item => {
    const product = getProductDetail(item.productId);

    htmlDoc += `
      <li class="content-product-section b" data-cart-id="${item.id}">
        <img src="${IMG_ROOT_PATH}/${product.img}.${IMG_TYPE}" alt="">

        <p class="b">$${product.price}</p>

        <div class="content-product-section-quantity b">
          <i class="uil uil-arrow-left decs-quant-js b" title="decrease quantity"></i>
          <span class="product-quant-js b">${item.quantity}</span>
          <i class="uil uil-arrow-right incs-quant-js b" title="increase quantity"></i>
        </div>

        <p class="b">$${item.quantity*product.price}</p>

        <button class="del">Delete</button>
      </li>
    `;
  });

  productContainer.innerHTML = htmlDoc;

  //controller
  productContainer.querySelectorAll(".content-product-section").forEach(section => {
    const cartId = section.dataset.cartId;

    //quant decs
    section.querySelector(".decs-quant-js").addEventListener("click", () => {
      handleDecsItemQuant(cartId);
    });

    //quant incs
    section.querySelector(".incs-quant-js").addEventListener("click", () => {
      handleIncsItemQuant(cartId);
    });

    //del btn
    section.querySelector(".del").addEventListener("click", () => {
      handleDelItem(cartId);
    });
  });

  // console.log("render products in cart");
  updateCheckoutForm();
}

function handleDecsItemQuant(cartId) {
  const currentQuant = getCartDetail(cartId).quantity;

  if(currentQuant === 1) {
    renderRemoveItemPopup(cartId);
  } else {
    increaseProductQuant(cartId, -1);
    renderProducts();
    console.log("decs quant");
  }
}

function handleIncsItemQuant(cartId) {
  increaseProductQuant(cartId);
  renderProducts();
  // console.log("incs quant");
}

function handleDelItem(cartId) {
  console.log(`del product ${cartId} in cart`);
  removeFromCart(cartId);
  renderProducts();
}

function updateCheckoutForm() {
  let subtotal = 0, shippingFee = 0, total = 0;

  getUserCart(user.id).forEach(item => {
    const product = getProductDetail(item.productId);
    const quantity = item.quantity;

    subtotal += product.price * quantity;
  });

  total = subtotal + shippingFee;

  subtotalEle.innerHTML = subtotal;
  shippingFeeEle.innerHTML = shippingFee;
  totalEle.innerHTML = total;

  // console.log("update checkout form");
}

function renderRemoveItemPopup(cartId) {
  const productId = getCartDetail(cartId).productId;
  const product = getProductDetail(productId);
  
  removeItemContainer.innerHTML = `
    <div class="remove-item b">
      <button class="remove-item-close close-btn" title="close">
        <i class="uil uil-times b"></i>
      </button>

      <h2>Do you want to remove this item?</h2>

      <p>
        <span class="product-name-js">${product.name}</span>
      </p>

      <div class="remove-item-btns">
        <button class="submit-btn-js btn1 b">Yes</button>
        <button class="cancel-btn-js btn2 b">No</button>
      </div>
    </div>
  `;

  
  removeItemContainer.querySelector(".remove-item-close").addEventListener("click", () => {
    hideElements(removeItemContainer);
  });
  
  removeItemContainer.querySelector(".cancel-btn-js").addEventListener("click", () => {
    hideElements(removeItemContainer);
  });

  removeItemContainer.querySelector(".submit-btn-js").addEventListener("click", () => {
    console.log("submit remove");
    removeFromCart(cartId);
    renderProducts();
    hideElements(removeItemContainer);
  });

  showElements(removeItemContainer);
}

function getTotal() {
  let subtotal = 0, shippingFee = 0;

  getUserCart(user.id).forEach(item => {
    const product = getProductDetail(item.productId);
    const quantity = item.quantity;

    subtotal += product.price * quantity;
  });

  return subtotal + shippingFee;
}

// {
//   "userId": "1",
//   "total": "199",
//   "placed": "datetime",
//   "items": [
//     {
//       "productId": "1",
//       "quantity": "1",
//     },
//   ],
// },

export function responsiveCheckoutBtn() {
  /**
   * add data to orders and remove data from cart
   */  
  const time = new Date();
  
  checkoutBtn.addEventListener("click", () => {
    const items = getUserCart(user.id).map(item => ({
      productId: item.productId,
      quantity: item.quantity
    }));
    
    addOrders(
      user.id, 
      getTotal(), 
      time, 
      items
    );

    removeUserCart(user.id);
    console.log("process checkout");
  });
}