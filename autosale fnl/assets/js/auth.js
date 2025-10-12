// ===== XỬ LÝ ĐĂNG NHẬP VÀ ĐĂNG KÝ =====

/**
 * Hàm chuyển đổi hiển thị form đăng ký
 */
function showRegister() {
  // Ẩn form đăng nhập
  document.getElementById("loginBox").style.display = "none"
  // Hiển thị form đăng ký
  document.getElementById("registerBox").style.display = "block"
  // Xóa thông báo cũ
  clearMessages()
}

/**
 * Hàm chuyển đổi hiển thị form đăng nhập
 */
function showLogin() {
  // Hiển thị form đăng nhập
  document.getElementById("loginBox").style.display = "block"
  // Ẩn form đăng ký
  document.getElementById("registerBox").style.display = "none"
  // Xóa thông báo cũ
  clearMessages()
}

/**
 * Hàm xóa tất cả thông báo lỗi/thành công
 */
function clearMessages() {
  const loginMsg = document.getElementById("loginMessage")
  const registerMsg = document.getElementById("registerMessage")

  loginMsg.style.display = "none"
  loginMsg.className = "form-message"

  registerMsg.style.display = "none"
  registerMsg.className = "form-message"
}

/**
 * Hàm hiển thị thông báo
 * @param {string} elementId - ID của phần tử hiển thị thông báo
 * @param {string} message - Nội dung thông báo
 * @param {string} type - Loại thông báo: 'error' hoặc 'success'
 */
function showMessage(elementId, message, type) {
  const messageElement = document.getElementById(elementId)
  messageElement.textContent = message
  messageElement.className = "form-message " + type
  messageElement.style.display = "block"
}

/**
 * Hàm xử lý đăng ký tài khoản
 * @param {Event} event - Sự kiện submit form
 */
function handleRegister(event) {
  // Ngăn chặn hành vi mặc định của form (reload trang)
  event.preventDefault()

  // Lấy giá trị từ các trường input
  const name = document.getElementById("registerName").value.trim()
  const email = document.getElementById("registerEmail").value.trim()
  const phone = document.getElementById("registerPhone").value.trim()
  const password = document.getElementById("registerPassword").value
  const confirmPassword = document.getElementById("registerConfirmPassword").value

  // Kiểm tra mật khẩu có khớp không
  if (password !== confirmPassword) {
    showMessage("registerMessage", "Mật khẩu xác nhận không khớp!", "error")
    return
  }

  // Kiểm tra độ dài mật khẩu
  if (password.length < 6) {
    showMessage("registerMessage", "Mật khẩu phải có ít nhất 6 ký tự!", "error")
    return
  }

  // Lấy danh sách người dùng từ localStorage
  let users = localStorage.getItem("users")

  // Nếu chưa có danh sách, tạo mảng mới
  if (!users) {
    users = []
  } else {
    users = JSON.parse(users)
  }

  // Kiểm tra email đã tồn tại chưa
  let emailExists = false
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      emailExists = true
      break
    }
  }

  if (emailExists) {
    showMessage("registerMessage", "Email này đã được đăng ký!", "error")
    return
  }

  // Tạo đối tượng người dùng mới
  const newUser = {
    id: Date.now(), // Sử dụng timestamp làm ID
    name: name,
    email: email,
    phone: phone,
    password: password,
    createdAt: new Date().toISOString(),
  }

  // Thêm người dùng mới vào danh sách
  users.push(newUser)

  // Lưu danh sách vào localStorage
  localStorage.setItem("users", JSON.stringify(users))

  // Hiển thị thông báo thành công
  showMessage("registerMessage", "Đăng ký thành công! Đang chuyển đến trang đăng nhập...", "success")

  // Reset form
  document.getElementById("registerForm").reset()

  // Chuyển sang form đăng nhập sau 2 giây
  setTimeout(() => {
    showLogin()
  }, 2000)
}

/**
 * Hàm xử lý đăng nhập
 * @param {Event} event - Sự kiện submit form
 */
function handleLogin(event) {
  // Ngăn chặn hành vi mặc định của form
  event.preventDefault()

  // Lấy giá trị từ các trường input
  const email = document.getElementById("loginEmail").value.trim()
  const password = document.getElementById("loginPassword").value

  // Lấy danh sách người dùng từ localStorage
  let users = localStorage.getItem("users")

  if (!users) {
    showMessage("loginMessage", "Email hoặc mật khẩu không đúng!", "error")
    return
  }

  users = JSON.parse(users)

  // Tìm người dùng với email và mật khẩu khớp
  let foundUser = null
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      foundUser = users[i]
      break
    }
  }

  // Kiểm tra kết quả
  if (!foundUser) {
    showMessage("loginMessage", "Email hoặc mật khẩu không đúng!", "error")
    return
  }

  // Lưu thông tin người dùng hiện tại vào localStorage
  const currentUser = {
    id: foundUser.id,
    name: foundUser.name,
    email: foundUser.email,
    phone: foundUser.phone,
  }

  localStorage.setItem("currentUser", JSON.stringify(currentUser))

  // Hiển thị thông báo thành công
  showMessage("loginMessage", "Đăng nhập thành công! Đang chuyển về trang chủ...", "success")

  // Chuyển về trang chủ sau 1.5 giây
  setTimeout(() => {
    window.location.href = "index.html"
  }, 1500)
}

// Kiểm tra nếu người dùng đã đăng nhập, chuyển về trang chủ
if (typeof window !== "undefined") {
  window.onload = () => {
    const currentUser = localStorage.getItem("currentUser")
    if (currentUser) {
      // Đã đăng nhập, có thể chuyển về trang chủ hoặc hiển thị thông báo
      console.log("Người dùng đã đăng nhập:", JSON.parse(currentUser).name)
    }
  }
}
