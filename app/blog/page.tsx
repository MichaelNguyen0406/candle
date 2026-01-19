'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useState } from 'react'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Tất Cả' },
    { id: 'benefits', label: 'Lợi ích nến thơm' },
    { id: 'gifts', label: 'Ý tưởng quà tặng' },
    { id: 'tips', label: 'Mẹo hay từ Préci' },
    { id: 'inspiration', label: 'Cảm hứng sống' },
  ]

  const posts = [
    {
      id: 1,
      title: 'Lợi ích tuyệt vời của nến thơm tự nhiên',
      category: 'benefits',
      excerpt: 'Khám phá cách nến thơm thiên nhiên có thể cải thiện sức khỏe tinh thần và thể chất của bạn.',
      content: 'Nến thơm tự nhiên mang lại nhiều lợi ích sức khỏe. Tinh dầu thiên nhiên giúp giảm căng thẳng, cải thiện chất lượng giấc ngủ và tạo không khí trong lành.',
      image: 'bg-gradient-to-br from-purple-50 to-pink-100',
      date: '15 Tháng 1',
      readTime: '5 phút',
      author: 'Préci Team',
    },
    {
      id: 2,
      title: 'Ý tưởng quà tặng hoàn hảo cho người yêu thích',
      category: 'gifts',
      excerpt: 'Những gợi ý quà tặng độc đáo và ý nghĩa với nến thơm cao cấp.',
      content: 'Tìm quà tặng hoàn hảo cho những người thân yêu không bao giờ dễ dàng. Nến thơm tùy chỉnh là lựa chọn quà tặng tinh tế và ý nghĩa.',
      image: 'bg-gradient-to-br from-yellow-50 to-amber-100',
      date: '12 Tháng 1',
      readTime: '6 phút',
      author: 'Préci Team',
    },
    {
      id: 3,
      title: 'Cách chăm sóc nến thơm của bạn',
      category: 'tips',
      excerpt: 'Các mẹo giữ nến thơm tươi và thơm lâu dài.',
      content: 'Để tối đa hóa tuổi thọ của nến thơm, bạn nên cắt bấc định kỳ, tránh gió và để nến ở nơi mát mẻ.',
      image: 'bg-gradient-to-br from-green-50 to-emerald-100',
      date: '10 Tháng 1',
      readTime: '4 phút',
      author: 'Préci Team',
    },
    {
      id: 4,
      title: 'Tạo không gian yên bình trong nhà của bạn',
      category: 'inspiration',
      excerpt: 'Hướng dẫn tạo một không gian sống yên tĩnh và thư giãn.',
      content: 'Không gian yên bình bắt đầu từ những chi tiết nhỏ. Nến thơm, âm thanh nhẹ nhàng và ánh sáng mềm mại tạo nên một bầu không khí hoàn hảo.',
      image: 'bg-gradient-to-br from-blue-50 to-cyan-100',
      date: '8 Tháng 1',
      readTime: '7 phút',
      author: 'Préci Team',
    },
    {
      id: 5,
      title: 'Những loại tinh dầu tốt nhất cho mùa đông',
      category: 'benefits',
      excerpt: 'Khám phá những hương thơm ấm áp và thoải mái cho mùa lạnh.',
      content: 'Mùa đông đòi hỏi các hương thơm ấm áp. Vani, cinnamon và hương thơm từ gỗ là những lựa chọn tuyệt vời.',
      image: 'bg-gradient-to-br from-orange-50 to-red-100',
      date: '5 Tháng 1',
      readTime: '6 phút',
      author: 'Préci Team',
    },
    {
      id: 6,
      title: 'Nến thơm tùy chỉnh: Tạo quà tặng cá nhân',
      category: 'gifts',
      excerpt: 'Cách tạo nến thơm tùy chỉnh hoàn hảo cho những dịp đặc biệt.',
      content: 'Nến thơm tùy chỉnh cho phép bạn tạo quà tặng hoàn toàn cá nhân. Chọn màu, mùi và phụ kiện theo ý thích của bạn.',
      image: 'bg-gradient-to-br from-pink-50 to-rose-100',
      date: '2 Tháng 1',
      readTime: '5 phút',
      author: 'Préci Team',
    },
  ]

  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Cẩm Nang & Cảm Hứng
            </h1>
            <p className="text-xl text-muted-foreground">
              Khám phá những bài viết về nến thơm, lợi ích sức khỏe và các ý tưởng trang trí nhà cửa
            </p>
          </div>
        </section>

        {/* Blog Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group cursor-pointer"
              >
                <div className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all border border-border hover:border-primary">
                  {/* Featured Image */}
                  <div className={`${post.image} h-48 flex items-center justify-center`}>
                    <span className="text-5xl opacity-30">📖</span>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-semibold text-primary uppercase">
                        {categories.find(c => c.id === post.category)?.label}
                      </p>
                      <p className="text-xs text-muted-foreground">{post.date}</p>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground">{post.readTime} đọc</span>
                      <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform inline-block">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">Không có bài viết trong danh mục này</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="text-primary font-semibold hover:underline"
              >
                Xem tất cả bài viết
              </button>
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Không muốn bỏ lỡ bài viết nào
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Đăng ký nhận tin tức mới nhất từ Préci
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                Đăng Ký
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
