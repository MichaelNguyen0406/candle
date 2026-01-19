import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, Share2, Heart } from 'lucide-react'

const blogPosts: Record<number, any> = {
  1: {
    title: 'Lợi ích tuyệt vời của nến thơm tự nhiên',
    category: 'Lợi ích nến thơm',
    date: '15 Tháng 1, 2024',
    readTime: '5 phút',
    author: 'Préci Team',
    image: 'bg-gradient-to-br from-purple-50 to-pink-100',
    content: `
      Nến thơm tự nhiên mang lại nhiều lợi ích sức khỏe và tinh thần mà ít người biết đến. 
      Hãy cùng Préci khám phá những lợi ích tuyệt vời của nến thơm thiên nhiên.

      ## Giảm Căng Thẳng và Lo Âu

      Tinh dầu thiên nhiên trong nến thơm có tác dụng mạnh mẽ trong việc giảm căng thẳng. 
      Khi bạn hít thở mùi hương từ nến, các phân tử mùi sẽ kích thích bộ não, giải phóng các hoá chất có tác dụng làm dịu kích thích.

      ## Cải Thiện Chất Lượng Giấc Ngủ

      Một trong những lợi ích quan trọng nhất của nến thơm tự nhiên là giúp cải thiện chất lượng giấc ngủ. 
      Các mùi hương như oải hương, chamomile và vani có tác dụng thư giãn, giúp bạn dễ dàng rơi vào giấc ngủ sâu hơn.

      ## Tạo Không Khí Trong Lành

      Nến thơm tự nhiên cũng giúp thanh lọc không khí trong nhà. Không giống như nến paraffin có hại, 
      nến sáp ong hoặc sáp thực vật không tạo ra những hóa chất độc hại khi cháy.

      ## Tăng Cường Tinh Thần

      Một số mùi hương như cam, chanh và bạc hà có tác dụng tăng cường năng lượng và tinh thần của bạn. 
      Đây là lý do tại sao nhiều người chọn những mùi hương này vào buổi sáng.

      Tất cả các sản phẩm của Préci được chế tác từ nguyên liệu thiên nhiên 100%, 
      đảm bảo bạn nhận được tất cả những lợi ích này mà không phải lo lắng về các tác dụng phụ.
    `,
  },
  2: {
    title: 'Ý tưởng quà tặng hoàn hảo cho người yêu thích',
    category: 'Ý tưởng quà tặng',
    date: '12 Tháng 1, 2024',
    readTime: '6 phút',
    author: 'Préci Team',
    image: 'bg-gradient-to-br from-yellow-50 to-amber-100',
    content: `
      Tìm quà tặng hoàn hảo cho những người thân yêu không bao giờ dễ dàng. 
      Hôm nay chúng tôi sẽ gợi ý một số ý tưởng quà tặng độc đáo với nến thơm cao cấp của Préci.

      ## Quà Tặng Cho Bạn Thân

      Nến thơm tùy chỉnh là quà tặng hoàn hảo cho bạn thân. Bạn có thể chọn mùi hương yêu thích của họ, 
      kết hợp với màu sắc ưa thích để tạo ra một quà tặng thực sự độc nhất.

      ## Quà Tặng Cho Gia Đình

      Một bộ nến thơm với các mùi hương khác nhau là quà tặng tuyệt vời cho gia đình. 
      Nó không chỉ làm cho nhà bạn có mùi hương dễ chịu mà còn là một trang trí đẹp.

      ## Quà Tặng Cho Dịp Đặc Biệt

      Đối với những dịp đặc biệt như sinh nhật, kỷ niệm hay lễ tết, nến thơm với lời nhắn nhủ cá nhân là lựa chọn tuyệt vời.
    `,
  },
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params
  const post = blogPosts[parseInt(id)]

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold text-foreground mb-4">Bài viết không tìm thấy</h1>
            <Link href="/blog" className="text-primary font-semibold hover:underline">
              ← Quay lại cẩm nang
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className={`${post.image} py-24`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold mb-6 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft size={20} />
              Quay Lại
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph: string, idx: number) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={idx} className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              return (
                <p key={idx} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Action Buttons */}
          <div className="mt-12 pt-8 border-t border-border flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-all">
              <Heart size={20} />
              Lưu
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-all">
              <Share2 size={20} />
              Chia Sẻ
            </button>
          </div>
        </section>

        {/* Related Posts CTA */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-6">
              Tìm Hiểu Thêm
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Khám phá các bài viết khác từ Préci về nến thơm, lợi ích sức khỏe và cảm hứng sống
            </p>
            <Link
              href="/blog"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Xem Tất Cả Bài Viết
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
