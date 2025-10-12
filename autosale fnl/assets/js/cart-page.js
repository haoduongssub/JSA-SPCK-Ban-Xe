// ===== XỬ LÝ TRANG GIỎ HÀNG =====

/**
 * Hàm chuyển đổi chuỗi giá thành số
 * @param {string} priceString - Chuỗi giá dạng "1.200.000.000"
 * @returns {number} Giá trị số
 */
function parsePrice(priceString) {
  // Loại bỏ dấu chấm phân cách hàng nghìn
  const cleanPrice = priceString.replace(/\./g, "")
  return Number.parseInt(cleanPrice)
}

/**
 * Hàm định dạng số thành chuỗi giá
 * @param {number} price - Giá trị số
 * @returns {string} Chuỗi giá đã định dạng
 */
function formatPrice(price) {
  // Chuyển số thành chuỗi và thêm dấu chấm phân cách hàng nghìn
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

/**
 * Hàm hiển thị giỏ hàng
 */
function displayCart() {
  // Lấy giỏ hàng từ localStorage
  let cart = localStorage.getItem("cart")

  // Nếu giỏ hàng trống, hiển thị thông báo
  if (!cart || cart === "[]") {
    document.getElementById("emptyCart").style.display = "block"
    document.querySelector(".cart-content").style.display = "none"
    return
  }

  cart = JSON.parse(cart)

  // Nếu giỏ hàng có sản phẩm
  if (cart.length === 0) {
    document.getElementById("emptyCart").style.display = "block"
    document.querySelector(".cart-content").style.display = "none"
    return
  }

  // Hiển thị nội dung giỏ hàng
  document.getElementById("emptyCart").style.display = "none"
  document.querySelector(".cart-content").style.display = "block"

  // Render danh sách sản phẩm
  const cartItemsContainer = document.getElementById("cartItems")
  let cartHTML = ""

  // Biến tính tổng
  let totalItems = 0
  let totalPrice = 0

  // Duyệt qua từng sản phẩm trong giỏ
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i]
    const itemPrice = parsePrice(item.price)
    const itemTotal = itemPrice * item.quantity

    totalItems = totalItems + item.quantity
    totalPrice = totalPrice + itemTotal

    // Tạo HTML cho mỗi item
    cartHTML =
      cartHTML +
      `
            <div class="cart-item" data-item-id="${item.id}">
                <div class="item-image">
                    <img src="/placeholder.svg?height=150&width=200" alt="${item.name}">
                </div>
                <div class="item-info">
                    <h3 class="item-name">
                        <a href="car-detail.html?id=${item.id}">${item.name}</a>
                    </h3>
                    <p class="item-price">${item.price} VNĐ</p>
                    
                    <div class="item-quantity">
                        <span class="quantity-label">Số lượng:</span>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
                        </div>
                    </div>
                    
                    <p class="item-total">
                        <span class="item-total-label">Tổng:</span>
                        <span class="item-total-value">${formatPrice(itemTotal)} VNĐ</span>
                    </p>
                    
                    <button class="item-remove" onclick="removeFromCart(${item.id})">
                        Xóa khỏi giỏ hàng
                    </button>
                </div>
            </div>
        `
  }

  // Cập nhật HTML
  cartItemsContainer.innerHTML = cartHTML

  // Cập nhật tổng kết
  document.getElementById("totalItems").textContent = totalItems
  document.getElementById("subtotal").textContent = formatPrice(totalPrice) + " VNĐ"
  document.getElementById("totalPrice").textContent = formatPrice(totalPrice) + " VNĐ"
}

/**
 * Hàm tăng số lượng sản phẩm
 * @param {number} itemId - ID của sản phẩm
 */
function increaseQuantity(itemId) {
  // Lấy giỏ hàng
  const cart = JSON.parse(localStorage.getItem("cart"))

  // Tìm sản phẩm và tăng số lượng
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === itemId) {
      cart[i].quantity = cart[i].quantity + 1
      break
    }
  }

  // Lưu lại giỏ hàng
  localStorage.setItem("cart", JSON.stringify(cart))

  // Render lại giỏ hàng
  displayCart()
}

/**
 * Hàm giảm số lượng sản phẩm
 * @param {number} itemId - ID của sản phẩm
 */
function decreaseQuantity(itemId) {
  // Lấy giỏ hàng
  const cart = JSON.parse(localStorage.getItem("cart"))

  // Tìm sản phẩm và giảm số lượng
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === itemId) {
      // Nếu số lượng > 1 thì giảm, nếu = 1 thì xóa
      if (cart[i].quantity > 1) {
        cart[i].quantity = cart[i].quantity - 1
      } else {
        // Xác nhận xóa
        if (confirm("Bạn có muốn xóa xe này khỏi giỏ hàng?")) {
          cart.splice(i, 1)
        }
      }
      break
    }
  }

  // Lưu lại giỏ hàng
  localStorage.setItem("cart", JSON.stringify(cart))

  // Render lại giỏ hàng
  displayCart()
}

/**
 * Hàm xóa sản phẩm khỏi giỏ hàng
 * @param {number} itemId - ID của sản phẩm
 */
function removeFromCart(itemId) {
  // Xác nhận xóa
  if (!confirm("Bạn có chắc muốn xóa xe này khỏi giỏ hàng?")) {
    return
  }

  // Lấy giỏ hàng
  const cart = JSON.parse(localStorage.getItem("cart"))

  // Tìm và xóa sản phẩm
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === itemId) {
      cart.splice(i, 1)
      break
    }
  }

  // Lưu lại giỏ hàng
  localStorage.setItem("cart", JSON.stringify(cart))

  // Render lại giỏ hàng
  displayCart()
}

/**
 * Hàm tiến hành đặt hàng
 */
function proceedToCheckout() {
  // Kiểm tra đăng nhập
  const currentUser = localStorage.getItem("currentUser")

  if (!currentUser) {
    alert("Vui lòng đăng nhập để tiếp tục đặt hàng!")
    window.location.href = "login.html"
    return
  }

  // Kiểm tra giỏ hàng có sản phẩm không
  const cart = localStorage.getItem("cart")
  if (!cart || cart === "[]") {
    alert("Giỏ hàng của bạn đang trống!")
    return
  }

  // Hiển thị thông báo thành công
  alert(
    "Cảm ơn bạn đã quan tâm! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để tư vấn chi tiết về các xe bạn đã chọn.",
  )

  // Chuyển đến trang liên hệ
  window.location.href = "contact.html"
}

// Khi trang được tải, hiển thị giỏ hàng
if (typeof window !== "undefined") {
  window.onload = () => {
    displayCart()
  }
}
