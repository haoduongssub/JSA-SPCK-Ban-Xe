import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const cars = [
  {
    id: 1,
    name: "Honda Civic 2023",
    price: "850,000,000 VNĐ",
    images: ["/honda-civic-2023-front-view.jpg", "/honda-civic-2023-interior.jpg", "/honda-civic-2023-side-view.jpg"],
    year: 2023,
    transmission: "Tự động",
    fuel: "Xăng",
    mileage: "50,000 km",
    engine: "1.5L Turbo",
    color: "Trắng",
    seats: 5,
    description:
      "Honda Civic 2023 là mẫu sedan hạng C được yêu thích với thiết kế hiện đại, động cơ mạnh mẽ và tiết kiệm nhiên liệu. Xe được trang bị đầy đủ các tính năng an toàn và tiện nghi cao cấp.",
    features: [
      "Hệ thống phanh ABS",
      "Túi khí an toàn",
      "Điều hòa tự động",
      "Màn hình cảm ứng 8 inch",
      "Camera lùi",
      "Cảm biến va chạm",
      "Khởi động bằng nút bấm",
      "Ghế da cao cấp",
    ],
  },
  {
    id: 2,
    name: "Toyota Camry 2022",
    price: "1,200,000,000 VNĐ",
    images: ["/toyota-camry-2022-front-view.jpg", "/toyota-camry-2022-interior.jpg", "/toyota-camry-2022-side-view.jpg"],
    year: 2022,
    transmission: "Tự động",
    fuel: "Xăng",
    mileage: "30,000 km",
    engine: "2.5L",
    color: "Đen",
    seats: 5,
    description:
      "Toyota Camry 2022 là sedan hạng D cao cấp với thiết kế sang trọng, động cơ mạnh mẽ và độ tin cậy cao. Xe phù hợp cho cả sử dụng cá nhân và doanh nghiệp.",
    features: [
      "Hệ thống Toyota Safety Sense",
      "Màn hình giải trí 9 inch",
      "Sạc không dây",
      "Ghế chỉnh điện",
      "Hệ thống âm thanh JBL",
      "Cửa sổ trời",
      "Đèn LED toàn bộ",
      "Cruise Control thích ứng",
    ],
  },
  {
    id: 3,
    name: "Mazda CX-5 2023",
    price: "950,000,000 VNĐ",
    images: ["/mazda-cx-5-2023-suv-front.jpg", "/mazda-cx-5-2023-interior.jpg", "/mazda-cx-5-2023-side-view.jpg"],
    year: 2023,
    transmission: "Tự động",
    fuel: "Xăng",
    mileage: "25,000 km",
    engine: "2.0L SKYACTIV",
    color: "Đỏ",
    seats: 5,
    description:
      "Mazda CX-5 2023 là SUV 5 chỗ với thiết kế thể thao, công nghệ SKYACTIV tiên tiến và khả năng vận hành linh hoạt trên mọi địa hình.",
    features: [
      "Công nghệ SKYACTIV",
      "Hệ thống i-ACTIVSENSE",
      "Màn hình HUD",
      "Ghế da Nappa",
      "Hệ thống âm thanh Bose",
      "Điều hòa 2 vùng độc lập",
      "Cửa cốp điện",
      "Hệ thống dẫn đường GPS",
    ],
  },
  {
    id: 4,
    name: "BMW X3 2022",
    price: "1,800,000,000 VNĐ",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    year: 2022,
    transmission: "Tự động",
    fuel: "Xăng",
    mileage: "35,000 km",
    engine: "2.0L TwinPower Turbo",
    color: "Xanh",
    seats: 5,
    description:
      "BMW X3 2022 là SUV hạng sang với động cơ TwinPower Turbo mạnh mẽ, nội thất sang trọng và công nghệ hiện đại. Xe mang đến trải nghiệm lái xe đẳng cấp.",
    features: [
      "Động cơ TwinPower Turbo",
      "Hệ thống xDrive",
      "Màn hình iDrive 12.3 inch",
      "Ghế da Dakota",
      "Hệ thống âm thanh Harman Kardon",
      "Cửa sổ trời toàn cảnh",
      "Đèn LED Adaptive",
      "Hệ thống đỗ xe tự động",
    ],
  },
  {
    id: 5,
    name: "Mercedes C-Class 2023",
    price: "2,100,000,000 VNĐ",
    images: [
      "/mercedes-c-class-2023-luxury-sedan.jpg",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    year: 2023,
    transmission: "Tự động",
    fuel: "Xăng",
    mileage: "20,000 km",
    engine: "1.5L Turbo + EQBoost",
    color: "Bạc",
    seats: 5,
    description:
      "Mercedes C-Class 2023 là sedan hạng sang với công nghệ hybrid tiên tiến, nội thất siêu sang và hệ thống an toàn toàn diện. Biểu tượng của sự đẳng cấp và tinh tế.",
    features: [
      "Công nghệ EQBoost Hybrid",
      "Màn hình MBUX 11.9 inch",
      "Ghế massage",
      "Hệ thống âm thanh Burmester",
      "Điều hòa 4 vùng",
      "Cửa sổ trời điện",
      "Hệ thống Mercedes me connect",
      "Gói an toàn PRE-SAFE",
    ],
  },
  {
    id: 6,
    name: "Hyundai Tucson 2023",
    price: "780,000,000 VNĐ",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    year: 2023,
    transmission: "Tự động",
    fuel: "Xăng",
    mileage: "15,000 km",
    engine: "2.0L MPI",
    color: "Xám",
    seats: 5,
    description:
      "Hyundai Tucson 2023 là SUV hiện đại với thiết kế độc đáo, trang bị công nghệ thông minh và giá cả hợp lý. Lựa chọn tuyệt vời cho gia đình trẻ.",
    features: [
      "Thiết kế Parametric Dynamics",
      "Màn hình cảm ứng 10.25 inch",
      "Sạc không dây",
      "Camera 360 độ",
      "Hệ thống Hyundai SmartSense",
      "Đèn LED ma trận",
      "Ghế lái chỉnh điện 8 hướng",
      "Cửa cốp thông minh",
    ],
  },
]

interface CarDetailPageProps {
  params: {
    id: string
  }
}

export default function CarDetailPage({ params }: CarDetailPageProps) {
  const car = cars.find((c) => c.id === Number.parseInt(params.id))

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy xe</h1>
          <Link href="/">
            <Button>Về trang chủ</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-slate-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-400">
              AutoSale
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Trang Chủ
              </Link>
              <Link href="/cars" className="hover:text-blue-400 transition-colors">
                Xe Bán
              </Link>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">
                Liên Hệ
              </Link>
              <Button variant="destructive" className="bg-red-500 hover:bg-red-600">
                Đăng Nhập
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Car Detail */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="text-blue-500 hover:text-blue-600">
            ← Quay lại trang chủ
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-video">
              <img
                src={car.images[0] || "/placeholder.svg"}
                alt={car.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {car.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${car.name} ${index + 2}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Car Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
              <p className="text-3xl font-bold text-red-600">{car.price}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Thông Số Kỹ Thuật</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Năm sản xuất:</span>
                  <span>{car.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Hộp số:</span>
                  <span>{car.transmission}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Nhiên liệu:</span>
                  <span>{car.fuel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Số km đã đi:</span>
                  <span>{car.mileage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Động cơ:</span>
                  <span>{car.engine}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Màu sắc:</span>
                  <span>{car.color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Số chỗ ngồi:</span>
                  <span>{car.seats}</span>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Link href="/contact" className="flex-1">
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Liên Hệ Mua Xe</Button>
              </Link>
              <Button variant="outline" className="flex-1 bg-transparent">
                Đặt Lịch Xem Xe
              </Button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Mô Tả Chi Tiết</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{car.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tính Năng Nổi Bật</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      ✓
                    </Badge>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-700 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-blue-400 mb-2">AutoSale</h3>
              <p className="text-gray-300">Địa chỉ uy tín cho việc mua bán xe hơi</p>
            </div>
            <div className="text-right">
              <h4 className="font-bold text-blue-400 mb-2">Liên Hệ</h4>
              <p className="text-gray-300">Điện thoại: 0123-456-789</p>
              <p className="text-gray-300">Email: info@autosale.vn</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
