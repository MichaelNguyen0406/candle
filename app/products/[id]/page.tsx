import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const products: Record<number, any> = {
  7: {
    name: 'Hộp Quà Nến Thơm',
    price: '89.000 đ',
    category: 'Phụ Kiện',
    rating: 4.8,
    reviews: 124,
    description: 'Hộp quà sang trọng để đựng nến thơm hoặc quà tặng khác',
    image: 'bg-gradient-to-br from-gray-50 to-gray-100',
    features: [
      'Chất liệu cao cấp',
      'Thiết kế sang trọng',
      'Kích thước phù hợp cho nến thơm',
      'Có dây buộc để trang trí',
    ],
    details: `Hộp quà của Préci được thiết kế để làm tăng giá trị của bất kỳ quà tặng nào. 
      Được làm từ carton cao cấp với lớp phủ bền bỉ, hộp này vừa đẹp mắt vừa bền.`,
  },
  8: {
    name: 'Dây Nến Sợi Linen',
    price: '49.000 đ',
    category: 'Phụ Kiện',
    rating: 4.9,
    reviews: 89,
    description: 'Dây linen chất lượng cao cho nến thơm',
    image: 'bg-gradient-to-br from-amber-50 to-amber-100',
    features: [
      'Chất liệu linen tự nhiên',
      'Cháy đều và sạch',
      'Không tạo khí độc',
      'Tương thích với hầu hết các nến',
    ],
    details: `Dây linen là lựa chọn tốt nhất cho nến thơm tự nhiên. 
      Chúng cháy một cách đều đặn, không tạo ra khí độc hay fumigate.`,
  },
  9: {
    name: 'Khuôn Nến Silicon',
    price: '199.000 đ',
    category: 'Phụ Kiện',
    rating: 4.7,
    reviews: 56,
    description: 'Khuôn silicon chuyên nghiệp để tạo nến',
    image: 'bg-gradient-to-br from-purple-50 to-pink-100',
    features: [
      'Vật liệu silicon chất lượng cao',
      'Nhiều hình dạng khác nhau',
      'Dễ tách nến ra',
      'Tái sử dụng được',
    ],
    details: `Khuôn silicon của Préci là công cụ hoàn hảo cho những ai muốn tự tạo nến. 
      Được làm từ silicon thực phẩm, an toàn và tái sử dụng được hàng trăm lần.`,
  },
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params
  const product = products[parseInt(id)]

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold text-foreground mb-4">Sản phẩm không tìm thấy</h1>
            <Link href="/products" className="text-primary font-semibold hover:underline">
              ← Quay lại sản phẩm
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
        {/* Product Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <Link href="/products" className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={20} />
            Quay Lại Sản Phẩm
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className={`${product.image} h-96 rounded-lg flex items-center justify-center`}>
                <span className="text-7xl opacity-30">🎁</span>
              </div>
            </div>

          
            {/* Product Info */}
            <div>
              <div className="mb-6">
                <p className="text-sm font-semibold text-primary uppercase mb-2">{product.category}</p>
                <h1 className="text-4xl font-serif font-bold text-foreground mb-4">{product.name}</h1>
                <p className="text-lg text-muted-foreground mb-4">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-border">
                <p className="text-sm text-muted-foreground mb-2">Giá</p>
                <p className="text-4xl font-serif font-bold text-primary">{product.price}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4">Đặc Điểm</h3>
                <ul className="space-y-2">
                  {product.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart */}
              <button className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all text-lg mb-4">
                Thêm Vào Giỏ Hàng
              </button>
              <button className="w-full px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                Tiếp Tục Mua Sắm
              </button>
            </div>
          </div>

          {/* Details Section */}
          <div className="mt-16 pt-12 border-t border-border max-w-2xl">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Chi Tiết Sản Phẩm</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{product.details}</p>

            {/* Shipping Info */}
            <div className="bg-secondary rounded-lg p-6 space-y-4">
              <h3 className="font-semibold text-foreground">Vận Chuyển & Giao Hàng</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Miễn phí vận chuyển cho đơn hàng từ 500.000 đ</p>
                <p>• Giao hàng trong 2-3 ngày làm việc tại Hà Nội</p>
                <p>• Đổi trả miễn phí trong 30 ngày</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products CTA */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-6">
              Khám Phá Thêm
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tìm những sản phẩm khác từ Préci để hoàn thành bộ sưu tập nến thơm của bạn
            </p>
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Xem Tất Cả Sản Phẩm
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
