import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Leaf, Heart, Sparkles } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Leaf,
      title: 'Thiên Nhiên',
      description: 'Chúng tôi cam kết sử dụng nguyên liệu thiên nhiên 100%, không chứa hóa chất độc hại',
    },
    {
      icon: Heart,
      title: 'Tình Yêu & Chăm Sóc',
      description: 'Mỗi nến được chế tác với tình yêu và sự tỉ mỉ cao nhất',
    },
    {
      icon: Sparkles,
      title: 'Chất Lượng Cao',
      description: 'Chúng tôi chỉ sử dụng những nguyên liệu tốt nhất để tạo ra sản phẩm hoàn hảo',
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
              Về Préci
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Préci được sinh ra từ đam mê tạo ra những sản phẩm cao cấp mang đến sự yên bình và thanh tịnh cho mỗi gia đình.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-8">Câu chuyện của Préci</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Préci bắt đầu từ một ý tưởng đơn giản: tạo ra những nến thơm không chỉ đẹp mắt mà còn tốt cho sức khỏe và môi trường. Chúng tôi tin rằng mỗi không gian sống đều xứng đáng có một mùi hương đặc biệt, một cảm giác riêng.
            </p>
            
            <p>
              Từ những bước đầu tiên, chúng tôi đã cam kết không bao giờ thỏa hiệp về chất lượng. Mỗi nến Préci được tạo ra bằng cách kết hợp những kỹ thuật truyền thống với các nguyên liệu hiện đại, tạo nên một sản phẩm độc đáo.
            </p>
            
            <p>
              Hôm nay, Préci tự hào phục vụ hàng ngàn khách hàng yêu thích, những người tin tưởng chúng tôi để mang đến vẻ đẹp và yên bình cho nhà của họ.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
              Những Giá Trị Của Chúng Tôi
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="bg-card rounded-lg p-8 text-center">
                    <Icon size={40} className="text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12">
            Quy Trình Sản Xuất
          </h2>

          <div className="space-y-8">
            {[
              { step: '01', title: 'Chọn Nguyên Liệu', desc: 'Tuyển chọn những nguyên liệu tốt nhất từ các nhà cung cấp đáng tin cậy' },
              { step: '02', title: 'Pha Trộn Tinh Dầu', desc: 'Pha trộn tinh dầu thiên nhiên theo công thức riêng của Préci' },
              { step: '03', title: 'Tính Sáp', desc: 'Nấu chảy sáp ở nhiệt độ phù hợp để đảm bảo chất lượng' },
              { step: '04', title: 'Đổ Nến', desc: 'Đổ hỗn hợp sáp vào các khuôn được chọn lọc' },
              { step: '05', title: 'Gia Công Hoàn Thiện', desc: 'Kiểm tra chất lượng và gia công hoàn thiện chi tiết' },
              { step: '06', title: 'Đóng Gói & Giao Hàng', desc: 'Đóng gói đẹp mắt và giao hàng tới tay khách hàng' },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <span className="text-4xl font-serif font-bold text-primary">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-4xl font-serif font-bold mb-6">Bạn đã sẵn sàng chưa?</h3>
            <p className="text-lg opacity-90 mb-8">Khám phá bộ sưu tập nến thơm của Préci ngay hôm nay</p>
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Xem Sản Phẩm
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
