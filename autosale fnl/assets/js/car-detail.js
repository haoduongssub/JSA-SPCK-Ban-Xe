// ===== DỮ LIỆU XE - Thông tin chi tiết các xe =====
const carsData = {
  1: {
    name: "Toyota Camry 2024",
    price: "1.200.000.000",
    description:
      "Toyota Camry 2024 là mẫu sedan hạng trung cao cấp với thiết kế sang trọng, động cơ mạnh mẽ và tiết kiệm nhiên liệu. Xe được trang bị đầy đủ các tính năng an toàn và tiện nghi hiện đại.",
    brand: "Toyota",
    year: "2024",
    engine: "2.5L 4 xi-lanh",
    transmission: "Tự động 8 cấp",
    fuel: "Xăng",
    seats: "5 chỗ",
    color: "Trắng ngọc trai",
    origin: "Thái Lan",
    detailDescription:
      "Toyota Camry 2024 là sự lựa chọn hoàn hảo cho những ai tìm kiếm một chiếc sedan cao cấp với chất lượng đáng tin cậy. Xe sở hữu ngoại thất thanh lịch với lưới tản nhiệt mạ chrome nổi bật, đèn LED full, và la-zăng hợp kim 18 inch. Nội thất rộng rãi với ghế da cao cấp, hệ thống giải trí màn hình cảm ứng 9 inch, kết nối Apple CarPlay và Android Auto. Động cơ 2.5L cho công suất 181 mã lực, vận hành êm ái và tiết kiệm nhiên liệu chỉ 6.5L/100km. Hệ thống an toàn Toyota Safety Sense với cảnh báo va chạm, hỗ trợ giữ làn đường, và kiểm soát hành trình thích ứng.",
  },
  2: {
    name: "Honda CR-V 2024",
    price: "1.100.000.000",
    description:
      "Honda CR-V 2024 là mẫu SUV 7 chỗ thực dụng với không gian rộng rãi, động cơ turbo mạnh mẽ và hệ thống an toàn Honda Sensing tiên tiến.",
    brand: "Honda",
    year: "2024",
    engine: "1.5L Turbo",
    transmission: "Tự động CVT",
    fuel: "Xăng",
    seats: "7 chỗ",
    color: "Đen ánh kim",
    origin: "Thái Lan",
    detailDescription:
      "Honda CR-V 2024 là chiếc SUV gia đình lý tưởng với 3 hàng ghế rộng rãi, phù hợp cho các chuyến đi dài. Ngoại thất thể thao với đèn LED thiết kế sắc sảo, cản trước mạnh mẽ. Nội thất cao cấp với ghế da, điều hòa tự động 2 vùng, cửa sổ trời toàn cảnh. Động cơ 1.5L Turbo cho công suất 188 mã lực, vận hành mạnh mẽ nhưng vẫn tiết kiệm nhiên liệu. Hệ thống Honda Sensing bao gồm phanh khẩn cấp tự động, cảnh báo điểm mù, và hỗ trợ đỗ xe.",
  },
  3: {
    name: "Mazda CX-5 2024",
    price: "900.000.000",
    description:
      "Mazda CX-5 2024 nổi bật với thiết kế Kodo đầy cảm xúc, công nghệ Skyactiv tiết kiệm nhiên liệu và trải nghiệm lái thể thao.",
    brand: "Mazda",
    year: "2024",
    engine: "2.0L Skyactiv-G",
    transmission: "Tự động 6 cấp",
    fuel: "Xăng",
    seats: "5 chỗ",
    color: "Đỏ pha lê",
    origin: "Nhật Bản",
    detailDescription:
      "Mazda CX-5 2024 là mẫu SUV 5 chỗ với thiết kế đẹp nhất phân khúc theo triết lý Kodo. Ngoại thất sang trọng với lưới tản nhiệt hình khiên, đèn LED ma trận, la-zăng 19 inch. Nội thất bọc da Nappa cao cấp, màn hình trung tâm 10.25 inch, hệ thống âm thanh Bose 10 loa. Động cơ Skyactiv-G 2.0L cho công suất 154 mã lực, kết hợp hộp số 6 cấp mang lại cảm giác lái thể thao. Hệ thống i-Activsense với kiểm soát hành trình radar, cảnh báo phương tiện cắt ngang phía sau.",
  },
  4: {
    name: "Hyundai Tucson 2024",
    price: "850.000.000",
    description:
      "Hyundai Tucson 2024 gây ấn tượng với thiết kế tương lai, công nghệ thông minh và không gian nội thất tiện nghi.",
    brand: "Hyundai",
    year: "2024",
    engine: "2.0L Smartstream",
    transmission: "Tự động 6 cấp",
    fuel: "Xăng",
    seats: "5 chỗ",
    color: "Xanh dương",
    origin: "Hàn Quốc",
    detailDescription:
      "Hyundai Tucson 2024 sở hữu thiết kế tương lai với lưới tản nhiệt Parametric Jewel độc đáo, đèn LED ẩn trong lưới tản nhiệt. Nội thất hiện đại với màn hình kép 10.25 inch liền mạch, vô lăng 3 chấu thể thao, ghế lái chỉnh điện 10 hướng. Động cơ Smartstream 2.0L cho công suất 156 mã lực, vận hành êm ái. Trang bị Hyundai SmartSense với 17 tính năng an toàn chủ động, bao gồm phanh tự động khẩn cấp, cảnh báo tài xế buồn ngủ, và hỗ trợ tránh va chạm.",
  },
  5: {
    name: "Ford Ranger 2024",
    price: "800.000.000",
    description:
      "Ford Ranger 2024 là mẫu bán tải mạnh mẽ với động cơ diesel bền bỉ, khả năng vượt địa hình tốt và không gian cabin rộng rãi.",
    brand: "Ford",
    year: "2024",
    engine: "2.0L Bi-Turbo Diesel",
    transmission: "Tự động 10 cấp",
    fuel: "Dầu diesel",
    seats: "5 chỗ",
    color: "Xám bạc",
    origin: "Thái Lan",
    detailDescription:
      "Ford Ranger 2024 là chiếc bán tải đa dụng, phù hợp cả công việc và gia đình. Ngoại thất hầm hố với lưới tản nhiệt chữ C đặc trưng, đèn LED projector, bậc lên xuống điện. Nội thất cabin rộng rãi với ghế da, màn hình SYNC 4A 12 inch, sạc không dây. Động cơ Bi-Turbo 2.0L cho công suất 210 mã lực và mô-men xoắn 500Nm, kết hợp hộp số 10 cấp mang lại khả năng kéo kéo 3.5 tấn. Hệ thống dẫn động 4 bánh điện tử với 6 chế độ địa hình, giúp xe vượt mọi cung đường.",
  },
  6: {
    name: "Kia Seltos 2024",
    price: "700.000.000",
    description:
      "Kia Seltos 2024 là mẫu SUV đô thị trẻ trung với thiết kế năng động, trang bị hiện đại và giá cả phải chăng.",
    brand: "Kia",
    year: "2024",
    engine: "1.5L Smartstream",
    transmission: "Tự động CVT",
    fuel: "Xăng",
    seats: "5 chỗ",
    color: "Cam nóng bỏng",
    origin: "Ấn Độ",
    detailDescription:
      "Kia Seltos 2024 là lựa chọn tuyệt vời cho giới trẻ với thiết kế trẻ trung, năng động. Ngoại thất nổi bật với đèn LED hình mũi tên, lưới tản nhiệt Tiger Nose, la-zăng 17 inch. Nội thất hiện đại với màn hình cảm ứng 10.25 inch, vô lăng bọc da, ghế da cao cấp. Động cơ 1.5L cho công suất 115 mã lực, tiết kiệm nhiên liệu 6.8L/100km. Trang bị hệ thống an toàn với 6 túi khí, cân bằng điện tử, hỗ trợ khởi hành ngang dốc. Giá cả phải chăng, phù hợp với người mua xe lần đầu.",
  },
}

/**
 * Hàm lấy ID xe từ URL
 * @returns {string|null} ID của xe hoặc null nếu không có
 */
function getCarIdFromURL() {
  // Lấy chuỗi query string từ URL (phần sau dấu ?)
  const urlParams = window.location.search

  // Nếu không có query string, trả về null
  if (!urlParams) {
    return null
  }

  // Tách các tham số
  const params = urlParams.substring(1).split("&")

  // Tìm tham số id
  for (let i = 0; i < params.length; i++) {
    const param = params[i].split("=")
    if (param[0] === "id") {
      return param[1]
    }
  }

  return null
}

/**
 * Hàm hiển thị thông tin chi tiết xe
 * @param {string} carId - ID của xe
 */
function displayCarDetail(carId) {
  // Lấy thông tin xe từ dữ liệu
  const car = carsData[carId]

  // Nếu không tìm thấy xe, hiển thị thông báo
  if (!car) {
    document.getElementById("carTitle").textContent = "Không tìm thấy xe"
    document.getElementById("carPrice").textContent = "0 VNĐ"
    document.getElementById("carDescription").textContent = "Xe không tồn tại trong hệ thống."
    return
  }

  // Cập nhật tiêu đề trang
  document.title = car.name + " - AutoViet"

  // Cập nhật breadcrumb
  document.getElementById("breadcrumbName").textContent = car.name

  // Cập nhật thông tin cơ bản
  document.getElementById("carTitle").textContent = car.name
  document.getElementById("carPrice").textContent = car.price + " VNĐ"
  document.getElementById("carDescription").textContent = car.description

  // Cập nhật thông số kỹ thuật
  document.getElementById("specBrand").textContent = car.brand
  document.getElementById("specYear").textContent = car.year
  document.getElementById("specEngine").textContent = car.engine
  document.getElementById("specTransmission").textContent = car.transmission
  document.getElementById("specFuel").textContent = car.fuel
  document.getElementById("specSeats").textContent = car.seats
  document.getElementById("specColor").textContent = car.color
  document.getElementById("specOrigin").textContent = car.origin

  // Cập nhật mô tả chi tiết
  document.getElementById("detailDescription").innerHTML = "<p>" + car.detailDescription + "</p>"

  // Lưu ID xe vào nút thêm giỏ hàng
  document.getElementById("addToCartBtn").setAttribute("data-car-id", carId)
}

/**
 * Hàm thay đổi hình ảnh chính khi click vào thumbnail
 * @param {HTMLElement} thumbnail - Phần tử thumbnail được click
 */
function changeImage(thumbnail) {
  // Lấy đường dẫn ảnh từ thumbnail
  const newImageSrc = thumbnail.src

  // Cập nhật ảnh chính
  document.getElementById("mainImage").src = newImageSrc

  // Xóa class active khỏi tất cả thumbnail
  const thumbnails = document.querySelectorAll(".thumbnail")
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove("active")
  }

  // Thêm class active vào thumbnail được click
  thumbnail.parentElement.classList.add("active")
}

/**
 * Hàm thêm xe vào giỏ hàng từ trang chi tiết
 */
function addToCartFromDetail() {
  // Lấy ID xe từ nút
  const carId = document.getElementById("addToCartBtn").getAttribute("data-car-id")

  // Lấy thông tin xe
  const car = carsData[carId]

  if (!car) {
    alert("Không thể thêm xe vào giỏ hàng!")
    return
  }

  // Lấy giỏ hàng hiện tại từ localStorage
  let cart = localStorage.getItem("cart")

  if (!cart) {
    cart = []
  } else {
    cart = JSON.parse(cart)
  }

  // Kiểm tra xe đã có trong giỏ hàng chưa
  let existingItem = null
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === Number.parseInt(carId)) {
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
      id: Number.parseInt(carId),
      name: car.name,
      price: car.price,
      quantity: 1,
    }
    cart.push(newItem)
    alert("Đã thêm xe vào giỏ hàng!")
  }

  // Lưu giỏ hàng vào localStorage
  localStorage.setItem("cart", JSON.stringify(cart))
}

// Khi trang được tải, hiển thị thông tin xe
if (typeof window !== "undefined") {
  window.onload = () => {
    const carId = getCarIdFromURL()

    if (carId) {
      displayCarDetail(carId)
    } else {
      // Nếu không có ID, chuyển về trang chủ
      window.location.href = "index.html"
    }
  }
}
