let imgs = document.querySelectorAll(".img");
let main_img = document.querySelector(".main-img");
let minimize = document.getElementById("minimize");
let increase = document.getElementById("increase");
let btncart = document.querySelector("#cart");
let cart_container = document.querySelector(".cart-con");
let Add = document.getElementById("Add");
let cart_items = document.querySelector(".cart-items");
let empty = document.querySelector(".empty");
let quantity = document.getElementById("number");
let quantity_item = document.querySelector(".quantity");
let trash = document.querySelector(".trash");
let total_price = document.querySelector("#total_price");
let price = document.querySelector("#price");
let img_preview_con = document.querySelector(".img-preview-con");
let img_preview = document.querySelector(".img-preview");
let closebtn = document.querySelector("#close");
let next = document.querySelector("#next");
let previous = document.querySelector("#previous");
let thumbnail_imgs = document.querySelectorAll(".thumbnail-img");
let previous_main_img = document.querySelector("#previous-main-img");
let next_main_img = document.querySelector("#next-main-img");
let close_nav = document.querySelector("#close-side-nav");
let togglesidebar = document.querySelector("#toggle");
let sidebar = document.querySelector(".side-navbar");

btncart.addEventListener("click", () => {
  cart_container.classList.toggle("active_cart");
});
imgs.forEach((e) => {
  e.addEventListener("click", () => {
    imgs.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.classList.add("active");
    if (e.classList.contains("img1")) {
      main_img.src = "/images/image-product-1.jpg";
    }
    if (e.classList.contains("img2")) {
      main_img.src = "/images/image-product-2.jpg";
    }
    if (e.classList.contains("img3")) {
      main_img.src = "/images/image-product-3.jpg";
    }
    if (e.classList.contains("img4")) {
      main_img.src = "/images/image-product-4.jpg";
    }
  });
});
minimize.addEventListener("click", () => {
  if (Number(quantity.innerHTML) > 0) {
    quantity.innerHTML = Number(quantity.innerHTML) - 1;
  }
});
increase.addEventListener("click", () => {
  quantity.innerHTML = Number(quantity.innerHTML) + 1;
});
Add.addEventListener("click", () => {
  cart_items.classList.add("active_item");
  empty.classList.add("hidden");
  quantity_item.innerHTML = "×" + " " + quantity.innerHTML;
  total_price.innerHTML = Number(price.innerHTML) * Number(quantity.innerHTML);
});
trash.addEventListener("click", () => {
  cart_items.classList.remove("active_item");
  empty.classList.remove("hidden");
});
main_img.addEventListener("click", () => {
  img_preview_con.classList.add("active_img");
  img_preview.src = main_img.src;
});
closebtn.addEventListener("click", () => {
  img_preview_con.classList.remove("active_img");
});
let i = 0;
next.addEventListener("click", () => {
  if (i < 3) {
    i += 1;
    img_preview.src = ` /images/image-product-${i + 1}.jpg`;
    thumbnail_imgs.forEach((ele) => {
      ele.classList.remove("active");
    });
    thumbnail_imgs[i].classList.add("active");
  }
});
previous.addEventListener("click", () => {
  if (i > 0) {
    i -= 1;
    img_preview.src = ` /images/image-product-${i + 1}.jpg`;
    thumbnail_imgs.forEach((ele) => {
      ele.classList.remove("active");
    });
    thumbnail_imgs[i].classList.add("active");
  }
});
thumbnail_imgs.forEach((e) => {
  e.addEventListener("click", () => {
    thumbnail_imgs.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.classList.add("active");
    if (e.classList.contains("one")) {
      img_preview.src = "/images/image-product-1.jpg";
    }
    if (e.classList.contains("two")) {
      img_preview.src = "/images/image-product-2.jpg";
    }
    if (e.classList.contains("three")) {
      img_preview.src = "/images/image-product-3.jpg";
    }
    if (e.classList.contains("four")) {
      img_preview.src = "/images/image-product-4.jpg";
    }
  });
});
let j = 0;
next_main_img.addEventListener("click", () => {
  if (j < 3) {
    j += 1;
    main_img.src = `/images/image-product-${j + 1}.jpg`;
  }
});
previous_main_img.addEventListener("click", () => {
  if (j > 0) {
    j -= 1;
    main_img.src = `/images/image-product-${j + 1}.jpg`;
  }
});
togglesidebar.addEventListener("click", () => {
  sidebar.classList.add("active_sidebar");
});
close_nav.addEventListener("click", () => {
  sidebar.classList.remove("active_sidebar");
});
