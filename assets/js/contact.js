// ===== XỬ LÝ FORM LIÊN HỆ =====

/**
 * Hàm hiển thị thông báo
 * @param {string} message - Nội dung thông báo
 * @param {string} type - Loại thông báo: 'error' hoặc 'success'
 */
function showContactMessage(message, type) {
  const messageElement = document.getElementById("contactFormMessage")
  messageElement.textContent = message
  messageElement.className = "form-message " + type
  messageElement.style.display = "block"

  // Tự động ẩn thông báo sau 5 giây
  setTimeout(() => {
    messageElement.style.display = "none"
  }, 5000)
}

/**
 * Hàm xử lý submit form liên hệ
 * @param {Event} event - Sự kiện submit form
 */
function handleContactSubmit(event) {
  // Ngăn chặn hành vi mặc định của form
  event.preventDefault()

  // Lấy giá trị từ các trường input
  const name = document.getElementById("contactName").value.trim()
  const email = document.getElementById("contactEmail").value.trim()
  const phone = document.getElementById("contactPhone").value.trim()
  const subject = document.getElementById("contactSubject").value
  const message = document.getElementById("contactMessage").value.trim()

  // Kiểm tra các trường bắt buộc
  if (!name || !email || !phone || !message) {
    showContactMessage("Vui lòng điền đầy đủ thông tin!", "error")
    return
  }

  // Kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    showContactMessage("Email không hợp lệ!", "error")
    return
  }

  // Kiểm tra số điện thoại (chỉ số và có độ dài từ 10-11 ký tự)
  const phoneRegex = /^[0-9]{10,11}$/
  if (!phoneRegex.test(phone)) {
    showContactMessage("Số điện thoại không hợp lệ!", "error")
    return
  }

  // Tạo đối tượng tin nhắn liên hệ
  const contactData = {
    id: Date.now(),
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
    createdAt: new Date().toISOString(),
  }

  // Lấy danh sách tin nhắn từ localStorage
  let contacts = localStorage.getItem("contacts")

  if (!contacts) {
    contacts = []
  } else {
    contacts = JSON.parse(contacts)
  }

  // Thêm tin nhắn mới vào danh sách
  contacts.push(contactData)

  // Lưu vào localStorage
  localStorage.setItem("contacts", JSON.stringify(contacts))

  // Hiển thị thông báo thành công
  showContactMessage("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.", "success")

  // Reset form
  document.getElementById("contactForm").reset()

  // Cuộn lên đầu form để xem thông báo
  document.querySelector(".contact-form-wrapper").scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

/**
 * Hàm tự động điền thông tin nếu người dùng đã đăng nhập
 */
function autoFillUserInfo() {
  // Lấy thông tin người dùng hiện tại
  const currentUser = localStorage.getItem("currentUser")

  if (currentUser) {
    const user = JSON.parse(currentUser)

    // Tự động điền tên, email, số điện thoại
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

// Khi trang được tải, tự động điền thông tin người dùng
if (typeof window !== "undefined") {
  window.onload = () => {
    autoFillUserInfo()
  }
}
