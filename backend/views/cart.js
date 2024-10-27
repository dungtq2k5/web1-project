import { IMG_ROOT_PATH, IMG_TYPE, PAGES, MSG, LOCALSTORAGE } from "./settings.js";
import { getCartDetail, getUserCart, removeCart, updateCart } from "../controllers/carts.js";
import { userAuthenticated } from "../controllers/users.js";
import { getProductDetail } from "../controllers/products.js";
import { getFromStorage, hideElements, saveToStorage, showElements } from "../controllers/utils.js";


//user auth
const user = userAuthenticated() || console.error("user not auth but cartpage is rendered");

//items
const mainContainer = document.getElementById("content-container");
const itemContainer = document.getElementById("products-container");

//select item
const selectAllItem = document.getElementById("select-all-product");

//remove item popup
const removeItemContainer = document.getElementById("remove-item-container");

//delivery address
/*
const addrContainer = document.getElementById("del-addr-container");
const addrForm = addrContainer.querySelector(".address-form");
const addrFormCloseBtn = addrForm.querySelector(".form-close");
const addrFormInput = addrForm.querySelector("#address-form-field-address");
const addrFormSubmitBtn = addrForm.querySelector(".address-form-btn-js");
*/


export default function renderItems() {
  let htmlDoc = ``;

  getUserCart(user.id).forEach(item => {
    const product = getProductDetail(item.productId);

    htmlDoc += `
      <li class="content-product-section b" data-cart-id="${item.id}">
        <div class="content-product-section-product b">
          <input type="checkbox" id="product-${item.id}" class="select-item-js" ${item.isSelected ? "checked" : ""}>
          <label for="product-${item.id}">
            <img src="${IMG_ROOT_PATH}/${product.img}.${IMG_TYPE}" alt="" class="content-product-section-product-img">
            <p class="content-product-section-product-name b">${product.name}</p>
          </label>
        </div>

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

  itemContainer.innerHTML = htmlDoc;

  itemContainer.querySelectorAll(".content-product-section").forEach(section => {
    const cartId = section.dataset.cartId;
    const selectItem = section.querySelector(".select-item-js");

    //select
    selectItem.addEventListener("change", () => {
      const isSelected = selectItem.checked;
      updateCart(cartId, {isSelected});

      if(!isSelected && selectAllItem.checked) {
        selectAllItem.checked = false;
      } else if(isAllItemSelected()) {
        selectAllItem.checked = true;
      }
      
      saveToStorage(LOCALSTORAGE.allItemSelected, selectAllItem.checked);
    }); 

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

  console.log("render products in cart");
}

export function renderEmptyCart() {
  mainContainer.innerHTML = `
    <div class="content-empty-cart">
      <p>${MSG.nothingInCart}</p>
      <a href="${PAGES.home}" class="btn2">Go shopping now</a>
    </div>
  `;
}

export function responsiveSelectAllItem() {
  selectAllItem.checked = getFromStorage(LOCALSTORAGE.allItemSelected) || false; //still keep when page refreshed

  selectAllItem.addEventListener("change", () => {
    const items = itemContainer.querySelectorAll(".content-product-section");
    
    items.forEach(item => {
      const cartId = item.dataset.cartId;
      const isSelected = selectAllItem.checked;
      
      updateCart(cartId, {isSelected});
      item.querySelector(".select-item-js").checked = isSelected;

    });

    // console.log("select/unselect all");
    saveToStorage(LOCALSTORAGE.allItemSelected, selectAllItem.checked);
  });
}

export function responsiveCheckoutBtn() {
  //TODO: checkout
  //TODO: if 0 selected -> btn faded
}

function isAllItemSelected() {
  const userCart = getUserCart(user.id);
  const itemsSelected = userCart.filter(item => item.isSelected);

  return userCart.length === itemsSelected.length;
}

function handleDecsItemQuant(cartId) {
  const currentQuant = getCartDetail(cartId).quantity;

  if(currentQuant === 1) {
    renderRemoveItemPopup(cartId);
  } else {
    const quantAccum = -1;
    updateCart(cartId, {quantAccum});
    renderItems();
    // console.log("decs quant");
  }
}

function handleIncsItemQuant(cartId) {
  const quantAccum = 1;
  updateCart(cartId, {quantAccum});
  renderItems();
  // console.log("incs quant");
}

function handleDelItem(cartId) {
  // console.log(`del product ${cartId} in cart`);
  removeCart(cartId);

  const userCart = getUserCart(user.id);
  userCart.length >= 1 
    ? renderItems() 
    : renderEmptyCart();
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
    handleDelItem(cartId);
    hideElements(removeItemContainer);
  });

  showElements(removeItemContainer);
}