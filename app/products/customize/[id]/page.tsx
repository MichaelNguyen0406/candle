import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductCustomizer from '@/components/product-customizer'

const products: Record<number, { name: string; description: string }> = {
  1: {
    name: 'Nến Hương Hoa Lài',
    description: 'Hương thơm tinh tế từ hoa lài tươi',
  },
  2: {
    name: 'Nến Hương Thảo Mộc',
    description: 'Mùi hương dễ chịu từ thảo mộc thiên nhiên',
  },
  3: {
    name: 'Nến Hương Cổ Thơm',
    description: 'Hương xưa nước ta, ấm áp và nhẹ nhàng',
  },
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function CustomizePage({ params }: PageProps) {
  const { id } = await params
  const productId = parseInt(id)
  const product = products[productId] || products[1]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
              Tùy Chỉnh Nến Thơm
            </h1>
            <p className="text-muted-foreground">
              Tạo một sản phẩm hoàn toàn độc nhất theo ý bạn
            </p>
          </div>
        </section>

        {/* Customizer Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <ProductCustomizer productId={productId} productName={product.name} />
        </section>
      </main>

      <Footer />
    </div>
  )
}
