// ===== XỬ LÝ FORM LIÊN HỆ =====

/**
 * Hàm hiển thị thông báo cho người dùng
 * @param {string} message - Nội dung thông báo (chuỗi hiển thị)
 * @param {string} type - Loại thông báo: 'error' (lỗi) hoặc 'success' (thành công)
 */
function showContactMessage(message, type) {
  // Lấy phần tử hiển thị thông báo
  const messageElement = document.getElementById("contactFormMessage")

  // Gán nội dung và kiểu cho thông báo
  messageElement.textContent = message
  messageElement.className = "form-message " + type
  messageElement.style.display = "block"

  // Sau 5 giây sẽ tự động ẩn thông báo
  setTimeout(() => {
    messageElement.style.display = "none"
  }, 5000)
}


/**
 * Hàm xử lý khi người dùng nhấn nút "Gửi" trong form liên hệ
 * @param {Event} event - Sự kiện submit của form
 */
function handleContactSubmit(event) {
  // Ngăn chặn hành vi mặc định (tải lại trang)
  event.preventDefault()

  // Lấy dữ liệu từ các ô nhập của form
  const name = document.getElementById("contactName").value.trim()
  const email = document.getElementById("contactEmail").value.trim()
  const phone = document.getElementById("contactPhone").value.trim()
  const subject = document.getElementById("contactSubject").value
  const message = document.getElementById("contactMessage").value.trim()

  // Kiểm tra xem các trường bắt buộc đã được nhập đầy đủ chưa
  if (!name || !email || !phone || !message) {
    showContactMessage("Vui lòng điền đầy đủ thông tin!", "error")
    return
  }

  // Kiểm tra định dạng email có hợp lệ hay không
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    showContactMessage("Email không hợp lệ!", "error")
    return
  }

  // Kiểm tra số điện thoại: chỉ được chứa số và có 10-11 ký tự
  const phoneRegex = /^[0-9]{10,11}$/
  if (!phoneRegex.test(phone)) {
    showContactMessage("Số điện thoại không hợp lệ!", "error")
    return
  }

  // Tạo một đối tượng chứa dữ liệu liên hệ của người dùng
  const contactData = {
    id: Date.now(),                  // ID duy nhất dựa trên thời gian
    name: name,                      // Tên người gửi
    email: email,                    // Email người gửi
    phone: phone,                    // Số điện thoại người gửi
    subject: subject,                // Chủ đề liên hệ
    message: message,                // Nội dung tin nhắn
    createdAt: new Date().toISOString(), // Thời gian gửi tin nhắn
  }

  // Lấy danh sách các tin nhắn đã lưu từ localStorage
  let contacts = localStorage.getItem("contacts")

  // Nếu chưa có dữ liệu nào thì tạo mảng rỗng
  if (!contacts) {
    contacts = []
  } else {
    // Nếu có rồi thì chuyển từ JSON sang mảng JavaScript
    contacts = JSON.parse(contacts)
  }

  // Thêm tin nhắn mới vào danh sách
  contacts.push(contactData)

  // Lưu lại danh sách tin nhắn mới vào localStorage
  localStorage.setItem("contacts", JSON.stringify(contacts))

  // Hiển thị thông báo gửi thành công
  showContactMessage(
    "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.",
    "success"
  )

  // Đặt lại (xóa trắng) form sau khi gửi
  document.getElementById("contactForm").reset()

  // Cuộn màn hình lên đầu form để người dùng thấy thông báo
  document.querySelector(".contact-form-wrapper").scrollIntoView({
    behavior: "smooth",  // Cuộn mượt
    block: "start",      // Căn về đầu phần tử
  })
}


/**
 * Hàm tự động điền thông tin người dùng vào form nếu đã đăng nhập
 */
function autoFillUserInfo() {
  // Lấy thông tin người dùng hiện tại từ localStorage
  const currentUser = localStorage.getItem("currentUser")

  if (currentUser) {
    // Chuyển chuỗi JSON thành đối tượng người dùng
    const user = JSON.parse(currentUser)

    // Nếu có thông tin thì tự động điền vào form
    if (user.name) {
      document.getElementById("contactName").value = user.name
    }
    if (user.email) {
      document.getElementById("contactEmail").value = user.email
    }
    if (user.phone) {
      document.getElementById("contactPhone").value = user.phone
    }
  }
}

// Khi trang được tải xong, tự động gọi hàm điền thông tin người dùng (nếu có)
if (typeof window !== "undefined") {
  window.onload = () => {
    autoFillUserInfo()
  }
}
