import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Liên Hệ Với Chúng Tôi
            </h1>
            <p className="text-xl text-muted-foreground">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Gửi Tin Nhắn</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nhập tên của bạn"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="hello@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+84 (0)123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Tin nhắn
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Nhập tin nhắn của bạn..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Gửi Tin Nhắn
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Thông Tin Liên Hệ</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Phone size={24} className="text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Điện Thoại</h3>
                    <p className="text-muted-foreground">+84 (0)123 456 789</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Mail size={24} className="text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@preci.vn</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin size={24} className="text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Địa Chỉ</h3>
                    <p className="text-muted-foreground">
                      123 Đường Số 1<br />
                      Quận Ba Đình, Hà Nội<br />
                      Việt Nam
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock size={24} className="text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Giờ Hoạt Động</h3>
                    <p className="text-muted-foreground">
                      Thứ Hai - Thứ Sáu: 9:00 - 18:00<br />
                      Thứ Bảy: 10:00 - 17:00<br />
                      Chủ Nhật: Đóng cửa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Câu Hỏi Thường Gặp</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: 'Nến Préci làm từ chất liệu gì?',
                  a: 'Nến Préci được làm từ sáp thiên nhiên và tinh dầu hữu cơ, không chứa paraffin hay hóa chất độc hại.',
                },
                {
                  q: 'Thời gian giao hàng bao lâu?',
                  a: 'Chúng tôi giao hàng trong vòng 2-3 ngày làm việc tại các khu vực chính. Phí giao hàng miễn phí cho đơn hàng từ 500.000 đ.',
                },
                {
                  q: 'Tôi có thể tùy chỉnh hương thơm không?',
                  a: 'Có! Chúng tôi cung cấp dịch vụ tùy chỉnh nến thơm hoàn toàn. Bạn có thể chọn hình dáng, màu sắc, mùi hương và các tùy chọn khác.',
                },
                {
                  q: 'Chính sách hoàn trả như thế nào?',
                  a: 'Bạn có thể hoàn trả sản phẩm trong vòng 30 ngày nếu không hài lòng. Vui lòng xem Chính Sách Hoàn Trả để biết chi tiết.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-card rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">{item.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
