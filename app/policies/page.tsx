'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function PoliciesPage() {
  const [expandedPolicy, setExpandedPolicy] = useState('purchase')

  const policies = [
    {
      id: 'purchase',
      title: 'Chính Sách Mua Hàng',
      sections: [
        {
          heading: 'Quyền Lợi Khách Hàng',
          content: 'Tất cả khách hàng của Préci có quyền mua sắm trên trang web của chúng tôi. Bạn có thể tùy chỉnh sản phẩm theo ý thích và nhận tư vấn từ đội ngũ của chúng tôi.',
        },
        {
          heading: 'Độ Tuổi',
          content: 'Khách hàng phải từ 18 tuổi trở lên hoặc có sự đồng ý của người đại diện pháp luật để mua hàng trên trang web này.',
        },
        {
          heading: 'Điều Kiện Sử Dụng',
          content: 'Bằng cách sử dụng trang web của Préci, bạn đồng ý tuân thủ tất cả các điều khoản và điều kiện được đề ra.',
        },
      ],
    },
    {
      id: 'payment',
      title: 'Chính Sách Thanh Toán',
      sections: [
        {
          heading: 'Phương Thức Thanh Toán Được Chấp Nhận',
          content: 'Chúng tôi chấp nhận thanh toán khi nhận hàng (COD), chuyển khoản ngân hàng và các ví điện tử như MoMo, Zalo Pay.',
        },
        {
          heading: 'Bảo Mật Thanh Toán',
          content: 'Tất cả các giao dịch thanh toán trên trang web của chúng tôi được mã hóa và bảo vệ bằng công nghệ SSL 256-bit.',
        },
        {
          heading: 'Chính Sách Hoàn Tiền',
          content: 'Nếu thanh toán không thành công, tiền của bạn sẽ được hoàn trả trong vòng 5-7 ngày làm việc.',
        },
      ],
    },
    {
      id: 'shipping',
      title: 'Vận Chuyển & Giao Hàng',
      sections: [
        {
          heading: 'Phí Vận Chuyển',
          content: 'Chúng tôi cung cấp vận chuyển miễn phí cho đơn hàng từ 500.000 đ. Các đơn hàng nhỏ hơn sẽ được tính phí vận chuyển 30.000 đ.',
        },
        {
          heading: 'Thời Gian Giao Hàng',
          content: 'Thường xuyên, đơn hàng sẽ được giao trong vòng 2-3 ngày làm việc từ ngày đặt hàng tại Hà Nội. Các tỉnh thành khác có thể mất thêm 1-2 ngày.',
        },
        {
          heading: 'Theo Dõi Đơn Hàng',
          content: 'Bạn sẽ nhận được mã theo dõi qua email sau khi đơn hàng được gửi đi. Bạn có thể sử dụng mã này để theo dõi trạng thái giao hàng.',
        },
      ],
    },
    {
      id: 'returns',
      title: 'Đổi Trả & Hoàn Tiền',
      sections: [
        {
          heading: 'Chính Sách Đổi Trả',
          content: 'Bạn có thể đổi trả hoặc hoàn tiền sản phẩm trong vòng 30 ngày từ ngày nhận hàng, với điều kiện sản phẩm còn nguyên vẹn, chưa sử dụng.',
        },
        {
          heading: 'Quy Trình Đổi Trả',
          content: 'Để đổi trả sản phẩm, vui lòng liên hệ với chúng tôi qua email hoặc điện thoại. Chúng tôi sẽ hướng dẫn bạn quy trình chi tiết.',
        },
        {
          heading: 'Chi Phí Vận Chuyển Đổi Trả',
          content: 'Phí vận chuyển cho việc đổi trả sẽ do khách hàng chịu, trừ trường hợp sản phẩm bị lỗi do nhà sản xuất.',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Chính Sách
            </h1>
            <p className="text-xl text-muted-foreground">
              Tìm hiểu các chính sách mua hàng, vận chuyển và đổi trả của Préci
            </p>
          </div>
        </section>

        {/* Policies Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="space-y-4">
            {policies.map(policy => (
              <div
                key={policy.id}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedPolicy(expandedPolicy === policy.id ? '' : policy.id)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-secondary hover:bg-accent transition-colors"
                >
                  <h2 className="text-xl font-serif font-bold text-foreground">
                    {policy.title}
                  </h2>
                  <ChevronDown
                    size={24}
                    className={`text-primary transition-transform ${
                      expandedPolicy === policy.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedPolicy === policy.id && (
                  <div className="px-6 py-6 space-y-6 bg-card border-t border-border">
                    {policy.sections.map((section, idx) => (
                      <div key={idx}>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {section.heading}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-16 pt-12 border-t border-border">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
              Câu Hỏi Thường Gặp
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Làm thế nào để tùy chỉnh nến thơm?',
                  a: 'Truy cập trang sản phẩm, chọn nến thơm và nhấp vào "Tùy chỉnh". Bạn có thể chọn hình dáng, màu sắc, mùi hương và phụ kiện.',
                },
                {
                  q: 'Nến thơm của Préci có độc hại không?',
                  a: 'Không. Tất cả các sản phẩm của Préci được làm từ nguyên liệu thiên nhiên 100%, không chứa hóa chất độc hại hoặc paraffin.',
                },
                {
                  q: 'Nến thơm có tuổi thọ bao lâu?',
                  a: 'Tùy thuộc vào kích thước, nến thơm của chúng tôi thường có thể cháy từ 40-60 giờ.',
                },
                {
                  q: 'Tôi có thể yêu cầu giao hàng nhanh không?',
                  a: 'Có. Chúng tôi cung cấp dịch vụ giao hàng nhanh (same day) cho Hà Nội với phí bổ sung.',
                },
                {
                  q: 'Làm thế nào để chăm sóc nến thơm?',
                  a: 'Cắt bấc xuống 0,5cm trước mỗi lần sử dụng, tránh thổi bấc khi cháy, để nến ở nơi không có gió.',
                },
                {
                  q: 'Préci có bao lâu để xử lý đơn hàng?',
                  a: 'Chúng tôi xử lý đơn hàng trong vòng 24 giờ. Đối với nến tùy chỉnh, có thể mất 2-3 ngày làm việc.',
                },
              ].map((item, idx) => (
                <div key={idx} className="border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              Còn Câu Hỏi Khác?
            </h2>
            <p className="text-muted-foreground mb-6">
              Hãy liên hệ với chúng tôi qua email hoặc điện thoại. Đội ngũ hỗ trợ khách hàng của Préci sẵn sàng giúp bạn.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Liên Hệ Với Chúng Tôi
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
