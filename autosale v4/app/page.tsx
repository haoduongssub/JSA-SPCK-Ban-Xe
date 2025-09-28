import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const cars = [
  {
    id: 1,
    name: "Honda Civic 2023",
    price: "850,000,000 VNĐ",
    image: "/honda-civic-2023-sedan.jpg",
    specs: "Số tự động • 50,000 km • Xăng",
    year: 2023,
    transmission: "Tự động",
    fuel: "Xăng",
    mileage: "50,000 km",
  },
  {
    id: 2,
    name: "Toyota Camry 2022",
    price: "1,200,000,000 VNĐ",
    image: "/toyota-camry-2022-sedan.jpg",
    specs: "Số tự động • 30,000 km • Xăng",
    year: 2022,
    transmission: "Tự động",
    fuel: "Xăng",
    mileage: "30,000 km",
  },
  {
    id: 3,
    name: "Mazda CX-5 2023",
    price: "950,000,000 VNĐ",
    image: "/mazda-cx-5-2023-suv.jpg",
    specs: "Số tự động • 25,000 km • Xăng",
    year: 2023,
    transmission: "Tự động",
    fuel: "Xăng",
    mileage: "25,000 km",
  },
  {
    id: 4,
    name: "BMW X3 2022",
    price: "1,800,000,000 VNĐ",
    image: "/bmw-x3-2022-luxury-suv.jpg",
    specs: "Số tự động • 35,000 km • Xăng",
    year: 2022,
    transmission: "Tự động",
    fuel: "Xăng",
    mileage: "35,000 km",
  },
  {
    id: 5,
    name: "Mercedes C-Class 2023",
    price: "2,100,000,000 VNĐ",
    image: "/mercedes-c-class-2023-luxury-sedan.jpg",
    specs: "Số tự động • 20,000 km • Xăng",
    year: 2023,
    transmission: "Tự động",
    fuel: "Xăng",
    mileage: "20,000 km",
  },
  {
    id: 6,
    name: "Hyundai Tucson 2023",
    price: "780,000,000 VNĐ",
    image: "/hyundai-tucson-2023-suv.jpg",
    specs: "Số tự động • 15,000 km • Xăng",
    year: 2023,
    transmission: "Tự động",
    fuel: "Xăng",
    mileage: "15,000 km",
  },
]

const services = [
  {
    title: "Mua Bán Xe",
    description: "Hỗ trợ mua bán xe cũ và mới với giá tốt nhất",
    icon: "🚗",
  },
  {
    title: "Tư Vấn",
    description: "Tư vấn chuyên nghiệp giúp bạn chọn xe phù hợp",
    icon: "💬",
  },
  {
    title: "Bảo Hành",
    description: "Bảo hành toàn diện cho mọi xe bán ra",
    icon: "🛡️",
  },
]

export default function HomePage() {
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
              <Link href="/" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-colors">
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

      {/* Hero Section */}
      <section className="bg-gray-500 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-balance">Tìm Chiếc Xe Mơ Ước Của Bạn</h1>
          <p className="text-xl mb-8 text-gray-200">Hàng nghìn xe chất lượng cao với giá tốt nhất thị trường</p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-3">
            Xem Xe Ngay
          </Button>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-700">Xe Nổi Bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <Card key={car.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{car.name}</CardTitle>
                  <p className="text-2xl font-bold text-red-600 mb-2">{car.price}</p>
                  <p className="text-gray-600">{car.specs}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={`/cars/${car.id}`} className="w-full">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600">Xem Chi Tiết</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-700">Dịch Vụ Của Chúng Tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-lg shadow-md">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-slate-700">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-700 text-white py-8">
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
