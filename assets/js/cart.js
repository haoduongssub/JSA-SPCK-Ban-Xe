// ===== XỬ LÝ GIỎ HÀNG - THÊM XE VÀO DANH SÁCH MUA =====

/**
 * Hàm thêm xe vào giỏ hàng
 * @param {number} id - ID của xe
 * @param {string} name - Tên xe
 * @param {string} price - Giá xe
 */
function addToCart(id, name, price) {
  // Lấy giỏ hàng hiện tại từ localStorage
  let cart = localStorage.getItem("cart")

  // Nếu chưa có giỏ hàng, tạo mảng mới
  if (!cart) {
    cart = []
  } else {
    // Chuyển đổi chuỗi JSON thành mảng
    cart = JSON.parse(cart)
  }

  // Kiểm tra xe đã có trong giỏ hàng chưa
  let existingItem = null
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      existingItem = cart[i]
      break
    }
  }

  // Nếu xe đã có, tăng số lượng
  if (existingItem) {
    existingItem.quantity = existingItem.quantity + 1
    alert("Đã tăng số lượng xe trong giỏ hàng!")
  } else {
    // Nếu chưa có, thêm xe mới vào giỏ
    const newItem = {
      id: id,
      name: name,
      price: price,
      quantity: 1,
    }
    cart.push(newItem)
    alert("Đã thêm xe vào giỏ hàng!")
  }

  // Lưu giỏ hàng vào localStorage
  localStorage.setItem("cart", JSON.stringify(cart))

  // Cập nhật số lượng hiển thị trên icon giỏ hàng (nếu có)
  updateCartCount()
}

/**
 * Hàm cập nhật số lượng sản phẩm trong giỏ hàng
 */
function updateCartCount() {
  // Lấy giỏ hàng từ localStorage
  let cart = localStorage.getItem("cart")

  if (!cart) {
    return
  }

  cart = JSON.parse(cart)

  // Tính tổng số lượng
  let totalCount = 0
  for (let i = 0; i < cart.length; i++) {
    totalCount = totalCount + cart[i].quantity
  }

  // Hiển thị số lượng (có thể thêm badge vào menu sau)
  console.log("Tổng số xe trong giỏ: " + totalCount)
}

/**
 * Hàm kiểm tra người dùng đã đăng nhập chưa
 */
function checkLogin() {
  const currentUser = localStorage.getItem("currentUser")

  if (!currentUser) {
    // Chưa đăng nhập, chuyển đến trang đăng nhập
    alert("Vui lòng đăng nhập để tiếp tục!")
    window.location.href = "login.html"
    return false
  }

  return true
}

// Gọi hàm cập nhật số lượng khi trang được tải
if (typeof window !== "undefined") {
  window.onload = () => {
    updateCartCount()
  }
}
