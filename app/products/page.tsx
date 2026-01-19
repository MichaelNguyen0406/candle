'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Tất Cả Sản Phẩm', icon: '✨' },
    { id: 'candles', label: 'Nến Thơm', icon: '🕯️' },
    { id: 'accessories', label: 'Phụ Kiện', icon: '🎁' },
  ]

  const products = [
    {
      id: 1,
      name: 'Nến Hương Hoa Lài',
      category: 'candles',
      price: 299000,
      priceFormatted: '299.000 đ',
      description: 'Hương thơm tinh tế từ hoa lài tươi',
      image: 'bg-gradient-to-br from-yellow-50 to-amber-100',
      customizable: true,
    },
    {
      id: 2,
      name: 'Nến Hương Thảo Mộc',
      category: 'candles',
      price: 299000,
      priceFormatted: '299.000 đ',
      description: 'Mùi hương dễ chịu từ thảo mộc thiên nhiên',
      image: 'bg-gradient-to-br from-green-50 to-emerald-100',
      customizable: true,
    },
    {
      id: 3,
      name: 'Nến Hương Cổ Thơm',
      category: 'candles',
      price: 399000,
      priceFormatted: '399.000 đ',
      description: 'Hương xưa nước ta, ấm áp và nhẹ nhàng',
      image: 'bg-gradient-to-br from-amber-50 to-orange-100',
      customizable: true,
    },
    {
      id: 4,
      name: 'Nến Hương Hoa Hồng',
      category: 'candles',
      price: 349000,
      priceFormatted: '349.000 đ',
      description: 'Hương hoa hồng sang trọng và quyến rũ',
      image: 'bg-gradient-to-br from-pink-50 to-rose-100',
      customizable: true,
    },
    {
      id: 5,
      name: 'Nến Hương Cacao & Vani',
      category: 'candles',
      price: 349000,
      priceFormatted: '349.000 đ',
      description: 'Hương ấm áp, dễ chịu, hoàn hảo cho mọi mùa',
      image: 'bg-gradient-to-br from-orange-50 to-yellow-100',
      customizable: true,
    },
    {
      id: 6,
      name: 'Nến Hương Biển Cả',
      category: 'candles',
      price: 349000,
      priceFormatted: '349.000 đ',
      description: 'Mùi hương tươi mới giống như đại dương',
      image: 'bg-gradient-to-br from-cyan-50 to-blue-100',
      customizable: true,
    },
    {
      id: 7,
      name: 'Hộp Quà Nến Thơm',
      category: 'accessories',
      price: 89000,
      priceFormatted: '89.000 đ',
      description: 'Hộp quà sang trọng để đựng nến thơm',
      image: 'bg-gradient-to-br from-gray-50 to-gray-100',
      customizable: false,
    },
    {
      id: 8,
      name: 'Dây Nến Sợi Linen',
      category: 'accessories',
      price: 49000,
      priceFormatted: '49.000 đ',
      description: 'Dây linen chất lượng cao cho nến thơm',
      image: 'bg-gradient-to-br from-amber-50 to-amber-100',
      customizable: false,
    },
    {
      id: 9,
      name: 'Khuôn Nến Silicon',
      category: 'accessories',
      price: 199000,
      priceFormatted: '199.000 đ',
      description: 'Khuôn silicon chuyên nghiệp để tạo nến',
      image: 'bg-gradient-to-br from-purple-50 to-pink-100',
      customizable: false,
    },
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Sản Phẩm
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Khám phá bộ sưu tập nến thơm và phụ kiện cao cấp được chế tác tỉ mỉ
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase mb-4">Danh mục</h2>
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
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <Link
                key={product.id}
                href={product.customizable ? `/products/customize/${product.id}` : `/products/${product.id}`}
                className="group cursor-pointer"
              >
                <div className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all hover:border-primary border border-border">
                  {/* Product Image */}
                  <div className={`${product.image} h-56 flex items-center justify-center`}>
                    <span className="text-5xl opacity-30">🕯️</span>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <p className="text-xs font-semibold text-primary mb-2 uppercase">
                      {product.category === 'candles' ? 'Nến Thơm' : 'Phụ Kiện'}
                    </p>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 h-10 overflow-hidden">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-lg font-semibold text-primary">{product.priceFormatted}</span>
                      <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform inline-block">
                        →
                      </span>
                    </div>
                    {product.customizable && (
                      <p className="text-xs text-primary mt-3 font-semibold">Tùy chỉnh được</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">Không có sản phẩm trong danh mục này</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="text-primary font-semibold hover:underline"
              >
                Xem tất cả sản phẩm
              </button>
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
              Nhận ưu đãi độc quyền
            </h3>
            <p className="text-muted-foreground mb-6">
              Đăng ký nhận tin tức sản phẩm mới và ưu đãi đặc biệt từ Préci
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
