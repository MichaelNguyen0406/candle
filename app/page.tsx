import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Nến Hương Hoa Lài',
      category: 'Nến thơm',
      price: '299.000 đ',
      description: 'Hương thơm tinh tế từ hoa lài tươi',
      image: 'bg-gradient-to-br from-yellow-50 to-amber-100',
    },
    {
      id: 2,
      name: 'Nến Hương Thảo Mộc',
      category: 'Nến thơm',
      price: '299.000 đ',
      description: 'Mùi hương dễ chịu từ thảo mộc thiên nhiên',
      image: 'bg-gradient-to-br from-green-50 to-emerald-100',
    },
    {
      id: 3,
      name: 'Nến Hương Cổ Thơm',
      category: 'Nến thơm',
      price: '399.000 đ',
      description: 'Hương xưa nước ta, ấm áp và nhẹ nhàng',
      image: 'bg-gradient-to-br from-amber-50 to-orange-100',
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'Lợi ích của nến thơm tự nhiên',
      category: 'Lợi ích nến thơm',
      excerpt: 'Khám phá các lợi ích sức khỏe tuyệt vời của nến thơm được làm từ nguyên liệu thiên nhiên.',
      date: '15 Tháng 1',
    },
    {
      id: 2,
      title: 'Ý tưởng quà tặng hoàn hảo',
      category: 'Ý tưởng quà tặng',
      excerpt: 'Những gợi ý quà tặng độc đáo và ý nghĩa cho người thân yêu của bạn.',
      date: '10 Tháng 1',
    },
    {
      id: 3,
      title: 'Mẹo chăm sóc nến thơm',
      category: 'Mẹo hay từ Préci',
      excerpt: 'Cách duy trì và sử dụng nến thơm để có tuổi thọ và mùi hương tốt nhất.',
      date: '5 Tháng 1',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <p className="text-sm font-semibold text-primary mb-4 flex items-center justify-center gap-2">
            <Sparkles size={16} />
            Khám phá Nén Thơm Cao Cấp
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
            Tạo không gian yên bình cho chiếc nhà của bạn
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Nến thơm thiên nhiên được chế tác tỉ mỉ, mang đến hương thơm tinh tế và không khí thanh tịnh
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Khám phá sản phẩm <ArrowRight size={20} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Về Préci
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Sản phẩm nổi bật
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Những lựa chọn được yêu thích nhất của khách hàng
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/customize/${product.id}`}
                  className="group cursor-pointer"
                >
                  <div className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className={`${product.image} h-48 flex items-center justify-center`}>
                      <div className="text-4xl opacity-20">🕯️</div>
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold text-primary mb-2 uppercase">{product.category}</p>
                      <h4 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-primary">{product.price}</span>
                        <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Cẩm nang & Cảm hứng
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Các bài viết giúp bạn tìm hiểu thêm về nến thơm và cách tận hưởng chúng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group cursor-pointer">
                <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors hover:shadow-md">
                  <div className="flex items-start justify-between mb-4">
                    <p className="text-xs font-semibold text-primary uppercase">{post.category}</p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <span className="text-primary font-semibold text-sm group-hover:translate-x-1 inline-block transition-transform">
                    Đọc tiếp →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Xem tất cả bài viết
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Sẵn sàng tạo nến thơm theo ý bạn?
            </h3>
            <p className="text-lg opacity-90 mb-8">
              Trải nghiệm quy trình tùy chỉnh nến thơm của Préci và tạo một sản phẩm hoàn toàn độc nhất
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Bắt đầu tùy chỉnh <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
