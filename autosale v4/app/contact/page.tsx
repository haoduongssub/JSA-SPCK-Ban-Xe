"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
              <Link href="/contact" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Liên Hệ
              </Link>
              <Button variant="destructive" className="bg-red-500 hover:bg-red-600">
                Đăng Nhập
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-slate-700">Liên Hệ Với Chúng Tôi</h1>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Gửi Tin Nhắn</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Họ và Tên *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Số Điện Thoại</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Tin Nhắn *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="Nhập tin nhắn của bạn..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                    Gửi Tin Nhắn
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information Section - Moved to bottom */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-slate-700">Thông Tin Liên Hệ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl mb-4">📍</div>
                  <h3 className="font-bold text-lg mb-2">Địa Chỉ</h3>
                  <p className="text-gray-600">
                    123 Đường ABC, Quận 1<br />
                    TP. Hồ Chí Minh
                  </p>
                </div>

                <div>
                  <div className="text-3xl mb-4">📞</div>
                  <h3 className="font-bold text-lg mb-2">Điện Thoại</h3>
                  <p className="text-gray-600">
                    Hotline: 0123-456-789
                    <br />
                    Zalo: 0987-654-321
                  </p>
                </div>

                <div>
                  <div className="text-3xl mb-4">✉️</div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-gray-600">
                    info@autosale.vn
                    <br />
                    support@autosale.vn
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t text-center">
                <h3 className="font-bold text-lg mb-4">Giờ Làm Việc</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                  <div>
                    <strong>Thứ 2 - Thứ 6:</strong> 8:00 - 18:00
                  </div>
                  <div>
                    <strong>Thứ 7 - Chủ Nhật:</strong> 8:00 - 17:00
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
